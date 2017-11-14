(ns stateless.ui.menu
  (:require [stateless.state :as state]
            [stateless.ui.transition-group :as transition-group]))

(defn tab [_]
  (let [active-tab (state/subscribe [:active-content])]
    (fn [{:keys [id dom-id]}]
      [:span {:on-click #(state/toggle-content id)
              :id       dom-id
              :style    (merge {:text-transform :uppercase
                                :padding        2
                                :margin-right   40
                                :letter-spacing 1.5
                                :cursor         :pointer
                                :user-select    :none
                                }
                               (when (= (:id @active-tab) id) {:color "rgba(174, 182, 187, 1)"}))}
       (name id)])))


(defn transition-styles [enter-timeout leave-timeout]
  {:will-appear (fn [child-data] {:opacity 0})
   :did-appear  (fn [child-data] {:opacity    1
                                  :transition "opacity 2s ease-in"})})

(defn render []
  (let [tabs (map (fn [k] {:dom-id (gensym) :id k}) state/content-order)]
    (fn []
      [:div {:style {:display :flex :justify-content :space-between :align-items :center}}
       [transition-group/tg {:children-data     tabs
                             :child-factory     tab
                             :transition-styles transition-styles}]])))
