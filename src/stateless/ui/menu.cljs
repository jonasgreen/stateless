(ns stateless.ui.menu
  (:require [stateless.state :as state]))



(defn tab [content-id selected]
  (println "content-id" content-id)
  [:span {:on-click #(state/toggle-content content-id)
          :style    (merge {:text-transform :uppercase
                            :padding        2
                            :margin-right   40
                            :letter-spacing 1.5}

                           (when selected {:border-bottom "1px solid rgba(174, 182, 187, 1)"
                                           :color         "rgba(174, 182, 187, 1)"}))}
   (name content-id)])

(defn render []
  (println "waaaat")
  (let [active-tab (state/subscribe [:active-content])]
    (fn []
      (println "aaaaa")
      [:div {:style {:background :red :display :flex :justify-content :space-between :align-items :center}}
       (map (fn [id] ^{:key id} [tab id (= id (:id @active-tab))]) state/content-order)])))
