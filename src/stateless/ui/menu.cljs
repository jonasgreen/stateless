(ns stateless.ui.menu
  (:require [stateless.state :as state]
            [bedrock.util :as ut]))


(defn render []
  (let [tabs (map (fn [k] {:dom-id (gensym) :id k}) state/content-order)
        active-tab (state/subscribe [:active-content])]
    (fn []
      [:div {:style {:min-height 20 :display :flex :width :100% :justify-content :space-between :align-items :center}}
       (->> tabs
            (map (fn [{:keys [id dom-id]}]
                   [:div {:on-click #(state/toggle-content id)
                           :style    (merge {:text-transform :uppercase
                                             :letter-spacing 1.5
                                             :cursor         (if (= (:id @active-tab) id) :normal :pointer)
                                             :border-bottom "1px solid transparent"
                                             :user-select    :none
                                             :opacity 0.4
                                             :font-size      14
                                             :transition "opacity 100ms ease-in, border-color 100ms ease-in"}
                                            (when (= (:id @active-tab) id) {:opacity 1
                                                              ;              :border-bottom "1px solid rgba(73, 78, 84, .6)"
                                                                            })

                                            )}
                    (name id)]))
            (ut/add-reagent-keys))
       ])))
