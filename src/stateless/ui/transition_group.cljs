(ns stateless.ui.transition-group
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >!] :as a]
            [reagent.core :as r]
            [goog.dom :as dom]
            [stateless.ui.style :as style]
            [clojure.set :as c-set]
            [bedrock.util :as ut]))

(defn vec-insert
  "insert elem in coll"
  [coll pos item]
  (println "type in insert" (type coll))
  (if (= pos (count coll))
    (vec (concat coll [item]))
    (vec (concat (subvec coll 0 pos) [item] (subvec coll pos)))))

(defn items-by-id-map [items]
  (reduce (fn [col {:keys [id] :as child}] (assoc col id child)) {} items))


(defn remove-deleted [items]
  (filter :_tg_deleted items))

(defn change-model [old-items new-items]
  (let [old-items-by-id (items-by-id-map old-items)
        new-items-by-id (items-by-id-map new-items)

        old-ids (set (keys old-items-by-id))
        new-ids (set (keys new-items-by-id))

        deleted-ids (c-set/difference old-ids new-ids)
        deleted-items (-> (select-keys old-items-by-id deleted-ids) vals)

        added-ids (c-set/difference new-ids old-ids)
        added-items (-> (select-keys new-items-by-id added-ids) vals)]

    {:deleted-ids   deleted-ids
     :deleted-items deleted-items
     :added-ids     added-ids
     :added-items   added-items}))

(defn style-it [id s]
  (if-let [node (dom/getElement (str id))]
    (style/style-node node s)
    (println "No dom-node for aaaaID:" id)))

(defn transitions [life-cycle transition-styles children]
  (if-let [get-style (get transition-styles life-cycle)]
    (let [do-style (fn [c] (if-let [node (dom/getElement (str (:id c)))]
                             (style/style-node node (get-style c))
                             (println "No dom-node found for id: " (:id c))))]
      (mapv do-style children))
    (println "No transition-style found for life-cycle:" life-cycle)))

(defn tg [{:keys [children-data child-factory enter-timeout leave-timeout transition-styles] :as input}]
  (let [children (r/atom children-data)
        ts (transition-styles enter-timeout leave-timeout)]

    (r/create-class
      {:component-did-mount          (fn [this]
                                       (transitions :will-appear ts @children)
                                       (r/next-tick #(transitions :did-appear ts @children)))

       :component-will-receive-props (fn [this new-argv]
                                       ; Before investigating what items are added and deleted - _tg_deleted items are temporary removed to avoid interference.
                                       (let [new-items (vec (-> new-argv second :children-data))
                                             old-items (:children-data (r/props this))
                                             {:keys [added-ids deleted-ids]} (change-model old-items new-items)

                                             _ (println "add-ids" added-ids)
                                             ;;update deleted mark in children
                                             updated-children (map-indexed (fn [i {:keys [id _tg_deleted] :as item}]
                                                                             (cond
                                                                               (contains? added-ids id) (dissoc item :_tg_deleted)
                                                                               (contains? deleted-ids id) (assoc item :_tg_deleted i)
                                                                               _tg_deleted (assoc item :_tg_deleted i)
                                                                               :else item)) @children)

                                             deleted-children (filter :_tg_deleted updated-children)

                                             ;insert deleted items into new-items - keep index as good as possible
                                             updated-children (reduce (fn [col item] (vec-insert col (:_tg_deleted item) item)) new-items deleted-children)]

                                         (println "updated children" (map :id updated-children))


                                         (reset! children updated-children)))

       :component-did-update         (fn [this old-argv]
                                       (let [{:keys [added-items]} (change-model (-> old-argv second :children-data) (:children-data (r/props this)))
                                             deleted-items (filter :_tg_deleted @children)
                                             deleted-items-set (set (map :id deleted-items))]

                                         (when (seq deleted-items)
                                           (go
                                             (transitions :will-leave ts deleted-items)
                                             (r/next-tick #(transitions :did-leave ts deleted-items))
                                             (<! (a/timeout 2000))

                                             (let [fresh-deleted-ids (->> @children
                                                                          (filter :_tg_deleted)
                                                                          (map :id)
                                                                          set
                                                                          (c-set/intersection deleted-items-set))]
                                               (reset! children (remove #(contains? fresh-deleted-ids (:id %)) @children)))))

                                         (transitions :will-enter ts added-items)
                                         (r/next-tick #(transitions :did-enter ts added-items))))


       :render                       (fn [this]
                                       [:div {:style {:position :relative}}
                                        (map (fn [{:keys [id] :as c}] ^{:key (str id)} [child-factory c]) @children)])})))


(defn child [{:keys [on-delete]} _]
  (r/create-class
    {:component-will-receive-props (fn [this old-argv]
                                     (let [{:keys [id label top left]} (r/props this)]
                                       (style-it id {:transition (str "left " left "ms linear, top " left "ms linear")})))

     :render                       (fn [this]
                                     (println "props" (r/props this))
                                     (let [{:keys [id label top left]} (r/props this)]
                                       [:div {:id       (str id)
                                              :on-click #(on-delete id)
                                              :style    {:display         :flex
                                                         :align-items     :center
                                                         :justify-content :center
                                                         :position        :absolute
                                                         :top             top
                                                         :left            left
                                                         :background      :red
                                                         :font-size       10 :border-radius 40 :height 40 :width 40}} id]))}))

(defn transition-styles [enter-timeout leave-timeout]
  {:will-appear (fn [child-data] {:opacity 0})
   :did-appear  (fn [child-data] {:opacity    1
                                  :transition "opacity 1s linear, left 1s linear, top 1s linear"})
   :will-enter  (fn [child-data] {:opacity    0
                                  :left       0
                                  :background :blue})
   :did-enter   (fn [child-data] {:opacity    1
                                  :left       (:left child-data)
                                  :background :red
                                  :transition "opacity 1s linear, left 1s linear, top 1s linear, background 1s ease-in"})
   :will-leave  (fn [child-data] )
   :did-leave   (fn [child-data] {:opacity    0
                                  :border-radius 0
                                  :width 0
                                  :height 0
                                  :font-size 0
                                  :background :blue

                                  :transition "font-size 1s linear, opacity 1s linear, width 1s linear, height 1s linear, border-radius 1s linear, background 1s ease-in"})})

(defn create-model [label]
  {:id (gensym) :label label :left 500 :top 100}
  )

(defn render [_]
  (let [children (r/atom [{:id (gensym) :label "A" :left 300 :top 100} {:id (gensym) :label "B" :left 500 :top 100}])]
    (fn []
      (println "children" @children)
      [:div
       [:div {:on-click (fn []

                          (swap! children #(mapv (fn [cs] (assoc cs :left (rand-int 1000) :top (rand-int 200))) %))
                          (swap! children conj (create-model "B")))
              :style    {:border "1px solid black"}} "BUTTON"]

       [tg {:enter-timeout     300
            :leave-timeout     300
            :children-data     @children
            :child-factory     (partial child {:on-delete (fn [id]
                                                            (println "on-delete")
                                                            (reset! children (remove (fn [c] (= id (:id c))) @children)))})
            :transition-styles transition-styles}]])))