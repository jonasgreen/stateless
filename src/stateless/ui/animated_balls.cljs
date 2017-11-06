(ns stateless.ui.animated-balls
  (:require
    [stateless.ui.dom-node :as dom-node]
    [stateless.ui.transition-group :as transition-group]
    [reagent.core :as r]))

(defn ball [on-delete]
  (r/create-class
    {:component-will-receive-props (fn [this old-argv]
                                     (let [{:keys [dom-id label top left]} (r/props this)]
                                       (dom-node/style! dom-id {:transition (str "left " left "ms linear, top " left "ms linear")})))

     :render                       (fn [this]
                                     (let [{:keys [dom-id label top left] :as input} (r/props this)]
                                       [:div {:id       (str dom-id)
                                              :on-click #(on-delete dom-id)
                                              :style    {:display         :flex
                                                         :align-items     :center
                                                         :justify-content :center
                                                         :position        :absolute
                                                         :top             top
                                                         :left            left
                                                         :background      :red
                                                         :font-size       10 :border-radius 40 :height 40 :width 40}} dom-id]))}))

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
   :did-leave   (fn [child-data] {:opacity       0
                                  :border-radius 0
                                  :width         0
                                  :height        0
                                  :font-size     0
                                  :background    :blue
                                  :transition    "font-size 1s linear, opacity 1s linear, width 1s linear, height 1s linear, border-radius 1s linear, background 1s ease-in"})})

(defn create-model [label]
  {:dom-id (gensym) :label label :left 500 :top 100})

(defn render [_]
  (let [children (r/atom [{:dom-id (gensym) :label "A" :left 300 :top 100} {:dom-id (gensym) :label "B" :left 500 :top 100}])
        delete-child (fn [dom-id] (reset! children (remove (fn [c] (= dom-id (:dom-id c))) @children)))
        child-factory (ball delete-child)]
    (fn []
      [:div
       [:div {:on-click (fn []

                          (swap! children #(mapv (fn [cs] (assoc cs :left (rand-int 1000) :top (rand-int 200))) %))
                          (swap! children conj (create-model "B")))
              :style    {:border "1px solid black"}} "BUTTON"]

       [transition-group/tg {:enter-timeout     300
                             :leave-timeout     300
                             :children-data     @children
                             :child-factory     child-factory
                             :transition-styles transition-styles}]])))