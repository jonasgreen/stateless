(ns stateless.ui.menu
  (:require [stateless.state :as state]
            [stateless.ui.transition-group :as transition-group]))



(defn tab [active-id {:keys [content-id]}]
  (let [selected (= active-id content-id)]
    [:span {:on-click #(state/toggle-content content-id)
            :style    (merge {:text-transform :uppercase
                              :padding        2
                              :margin-right   40
                              :letter-spacing 1.5
                              :cursor         :pointer
                              :user-select    :none}
                             (when selected {:color "rgba(174, 182, 187, 1)"}))}
     (name content-id)]))


(defn transition-styles [enter-timeout leave-timeout]
  {:will-appear (fn [child-data] {:opacity 0})
   :did-appear  (fn [child-data] {:opacity    0
                                  :transition "opacity 2s linear"})})

(defn render []
  (let [tabs (map (fn [k] {:id (gensym) :content-id k}) state/content-order)
        active-tab (state/subscribe [:active-content])]
    (fn []
      (let [active-id (:id @active-tab)]
        [:div {:style {:display :flex :justify-content :space-between :align-items :center}}
         [transition-group/tg {:enter-timeout     300
                               :leave-timeout     300
                               :children-data     tabs
                               :child-factory     (partial tab active-id)
                               :transition-styles transition-styles}]]))))
