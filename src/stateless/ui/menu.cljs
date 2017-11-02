(ns stateless.ui.menu
  (:require [stateless.state :as state]))



(defn tab [content-id selected]
  [:span {:on-click #(state/toggle-content content-id)
          :style    (merge {:text-transform :uppercase
                            :padding        2
                            :margin-right   40
                            :letter-spacing 1.5
                            :cursor :pointer
                            :user-select :none}
                           (when selected {:color         "rgba(174, 182, 187, 1)"}))}
   (name content-id)])

(defn render []
  (let [active-tab (state/subscribe [:active-content])]
    (fn []
      (let [active-id (:id @active-tab)]
        [:div {:style {:display :flex :justify-content :space-between :align-items :center}}
         (map (fn [id] ^{:key id} [tab id (= id active-id)]) state/content-order)]))))
