(ns stateless.ui.transition-group
  (:require [reagent.core :as r]
            [goog.dom :as dom]
            [stateless.ui.style :as style]
            [clojure.set :as c-set]
            [bedrock.util :as ut]))

(defn items-by-id-map [items]
  (reduce (fn [col {:keys [id] :as child}] (assoc col id child)) {} items))


(defn remove-deleted [items]
  (filter :_tg_deleted items))

(defn change-model [old-items new-items]
  #_"
  Deleted Items are marked :_tg_deleted, but left in items to ensure transition before the are later removed.

  Before investigating what items are added and deleted - _tg_deleted items are temporary removed to avoid interference.

  Deleted items are added to their original position in items.


  "

  (let [old-items-by-id (items-by-id-map old-items)
        new-items-by-id (items-by-id-map new-items)
        old-with-deleted-items-by-id (items-by-id-map (filter #(not (:_tg_deleted %)) old-items))
        old-deleted-items-by-id (items-by-id-map (filter :_tg_deleted old-items))


        old-ids (set (keys old-items-by-id))
        new-ids (set (keys new-items-by-id))
        old-without-deleted-ids (set (keys old-deleted-items-by-id))

        deleted-ids (c-set/difference old-ids new-ids)
        deleted-items (-> (select-keys old-items-by-id deleted-ids) vals)

        added-ids (c-set/difference new-ids old-ids)
        added-items (-> (select-keys new-items-by-id added-ids) vals)]



    ;

    {:items         nil
     :added-items   nil
     :deleted-items nil}))

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
                                       (let [new-items (-> new-argv second :children-data)
                                             old-items-by-id (items-by-id-map @children)
                                             new-items-by-id (items-by-id-map new-items)

                                             old-ids (set (keys old-items-by-id))
                                             new-ids (set (keys new-items-by-id))

                                             deleted-ids (c-set/difference old-ids new-ids)
                                             deleted-items (-> (select-keys old-items-by-id deleted-ids) vals)

                                             added-ids (c-set/difference new-ids old-ids)
                                             ]


                                         ;ADDED ITEMS HAVE TO BE REMOVED FROM DELETED ITEMS


                                         (reset! children new-items)))

       :component-did-update         (fn [this old-argv]
                                       (let [old-items-by-id (items-by-id-map (-> old-argv second :children-data))
                                             new-items-by-id (items-by-id-map @children)

                                             old-ids (set (keys old-items-by-id))
                                             new-ids (set (keys new-items-by-id))

                                             deleted-ids (c-set/difference old-ids new-ids)
                                             deleted-items (-> (select-keys old-items-by-id deleted-ids) vals)

                                             added-ids (c-set/difference new-ids old-ids)
                                             added-items (-> (select-keys new-items-by-id added-ids) vals)]

                                         (println "added items" added-items)

                                         (transitions :will-enter ts added-items)
                                         (r/next-tick #(transitions :did-enter ts added-items))))


       :render                       (fn [this]
                                       [:div {:style {:position :relative}}
                                        (map (fn [{:keys [id] :as c}] ^{:key (str id)} [child-factory c]) @children)])})))


(defn child [_]
  (r/create-class
    {:component-will-receive-props (fn [this old-argv]
                                     (let [{:keys [id label top left]} (r/props this)]
                                       (style-it id {:transition (str "left " left "ms linear, top "left "ms linear")})))

     :render                       (fn [this]
                                     (let [{:keys [id label top left]} (r/props this)]
                                       [:div {:id    (str id)
                                              :style {:display         :flex
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
   :will-leave  (fn [child-data])
   :did-leave   (fn [child-data])})

(defn create-model [label]
  {:id (gensym) :label label :left 500 :top 100}
  )

(defn render [_]
  (let [children (r/atom [{:id (gensym) :label "A" :left 300 :top 100} {:id (gensym) :label "B" :left 500 :top 100}])]
    (fn []
      [:div
       [:div {:on-click (fn []

                          (swap! children #(mapv (fn [cs] (assoc cs :left (rand-int 1000) :top (rand-int 200))) %))
                          (swap! children conj (create-model "B"))

                          )
              :style    {:border "1px solid black"}} "BUTTON"]

       [tg {:enter-timeout     300
            :leave-timeout     300
            :children-data     @children
            :child-factory     child
            :transition-styles transition-styles}]])))