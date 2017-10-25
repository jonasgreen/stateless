(ns stateless.ui.transition-group
  (:require [reagent.core :as r]
            [goog.dom :as dom]
            [stateless.ui.style :as style]
            [clojure.set :as c-set]
            [bedrock.util :as ut]))

(defn items-by-id-map [items]
  (reduce (fn [col {:keys [id] :as child}] (assoc col id child)) {} items))

(defn transitions [life-cycle transition-styles children]
  (when-let [get-style (get transition-styles life-cycle)]
    (let [do-style (fn [c]
                     (when-let [node (dom/getElement (str (:id c)))]
                       (style/style-node node (get-style c))))]
      (mapv do-style children))))

(defn tg [{:keys [children-data child-factory enter-timeout leave-timeout transition-styles] :as input}]
  (let [children (r/atom (mapv #(assoc % :transition-state :will-appear) children-data))
        ts (transition-styles enter-timeout leave-timeout)]

    (r/create-class
      {:component-did-mount          (fn [this]
                                       (transitions :will-appear ts @children)
                                       (r/next-tick #(transitions :did-appear ts @children)))

       :component-will-receive-props (fn [this new-argv]
                                       (let [old-items-by-id (items-by-id-map @children)
                                             new-items-by-id (items-by-id-map (second new-argv))

                                             old-ids (keys old-items-by-id)
                                             new-ids (keys new-items-by-id)

                                             ;deleted-ids (c-set/difference old-ids new-ids)
                                             added-ids (c-set/difference new-ids old-ids)
                                             added-items (-> (select-keys new-items-by-id added-ids)
                                                             vals)]

                                         (reset! children (second new-argv))

                                         (transitions :will-enter ts added-items)
                                         (r/next-tick #(transitions :did-enter ts added-items))

                                         (println "new-argv" (second new-argv))
                                         (reset! children (:children-data (second new-argv)))))
       :render                       (fn [this]
                                       [:div {:style {:position :relative}}
                                        (map (fn [{:keys [id] :as c}] ^{:key (str id)} [child-factory c]) @children)])})))


(defn child [{:keys [id label top left]}]
  [:div {:id (str id) :style {:display         :flex
                              :align-items     :center
                              :justify-content :center
                              :position        :absolute
                              :top             top
                              :left            left
                              :background      :red
                              :transition      (str "left " (rand-int 10) "s linear, " "top " (rand-int 10) "s linear")
                              :font-size       10 :border-radius 40 :height 40 :width 40}} id])

(defn transition-styles [enter-timeout leave-timeout]
  {:will-appear (fn [child-data] {:opacity 0})
   :did-appear  (fn [child-data] {:opacity    1
                                  :transition "opacity 1s linear"})
   :will-enter  (fn [child-data])
   :did-enter   (fn [child-data])
   :will-leave  (fn [child-data])
   :did-leave   (fn [child-data])})

(defn create-model [label]
  {:id (gensym) :label label :left (rand-int 200) :top (rand-int 200)}
  )

(defn render [_]
  (let [children (r/atom [(create-model "A") (create-model "B") (create-model "C")])]
    (fn []
      [:div
       [:div {:on-click (fn []
                          (swap! children conj (create-model "!"))
                          (swap! children #(mapv (fn [cs] (assoc cs :left (rand-int 200) :top (rand-int 200))) %))

                          )
              :style    {:border "1px solid black"}} "BUTTON"]

       [tg {:enter-timeout     300
            :leave-timeout     300
            :children-data     @children
            :child-factory     child
            :transition-styles transition-styles}]])))