(ns stateless.ui.application
  (:require [reagent.core :as r]
            [stateless.ui.styles :as s]
            [stateless.state :as state]
            [stateless.ui.style :as style]
            [stateless.ui.contact-content :as contact-tab]
            [stateless.ui.about-content :as about-tab]
            [stateless.ui.gui :as registry]
            [goog.dom :as dom]))








(defn content []
  [:div {:style {:padding         50
                 :flex-grow       1
                 :background      :blue
                 :display         :flex
                 :justify-content :center
                 :align-items     :center}}])




(defn render [_]
  (let [menu-clicked (r/atom false)]
    (fn [state] [:div {:style {:height          :100vh
                               :width           :100vw
                               :display         :flex
                               :flex-direction  :column
                               :align-items     :center
                               :justify-content :center
                               }}

                 [:img {:src   "img/the-ocean.png"
                        :style {:height   :100vh
                                :width    :100vw
                                :opacity  0.17
                                :position :fixed
                                :top      0
                                :left     0
                                :z-index  -1}}]

                 ;top
                 [:div {:style {:flex-grow 2 :width :100%}}

                  [:div {:style {:display :flex :padding 80 :padding-top 60 :font-size 12 :color "rgba(73, 78, 84, 1)"}}
                   [:div {:style {:display :flex :justify-content :space-between :align-items :center}}

                    [:span {:style {:padding 2 :margin-right 40 :color "rgba(174, 182, 187, 1)" :border-bottom "1px solid rgba(174, 182, 187, 1)"}} "ABOUT"]
                    [:span {:style {:margin-right 40}} "CONTACT"] [:span "BAR"]]

                   ]

                  ]

                 ;bottom
                 [:div {:style {:flex-grow  (if @menu-clicked 0 1)
                                :width :100%
                                :display         :flex
                                :flex-direction  :column
                                :transition "flex-grow 0.3s ease-out"
                                :justify-content :center
                                :align-items     :center}}

                  [:div {:style {:height (if @menu-clicked 0 80)
                                 :opacity (if @menu-clicked 0 1)
                                 :transition "opacity 0.3s ease-out, height 0.3s ease-out"
                                 }}
                   ;title
                   [:div {:on-click (fn[] (println "click") (swap! menu-clicked not))
                          :style {:font-size       (if @menu-clicked 18 24)
                                  :color           "rgba(174, 182, 187, 1)"
                                  :display         :flex
                                  :line-height     1.5
                                  :transition "font-size 0.3s ease-out"
                                  :justify-content :space-between}}
                    [:span "S"] [:span "T"] [:span "A"] [:span "T"] [:span "E"] [:span "L"] [:span "E"] [:span "S"] [:span "S"]]


                   ;sub-title
                   [:div {:style {:font-size       (if @menu-clicked 12 14)
                                  :color           "rgba(174, 182, 187, 1)"
                                  :display         :flex
                                  :justify-content :space-between
                                  :padding-bottom  30
                                  :padding-left    1
                                  :transition "font-size 0.3s ease-out"

                                  }} "Software Development"]]


                  [:div {:style {:border-bottom-width 1
                                 :border-bottom-style :solid
                                 :border-bottom-color (if @menu-clicked "rgba(73, 78, 84, 0.2)" "transparent")
                                 :width (if @menu-clicked :100% 0)
                                 :height 0
                                 :transition "all 0.3s ease-out"}}]
                  ;contact info
                  [:div {:style {:padding 8
                                 :min-height 20
                                 :display         :flex
                                 ;:justify-content :center
                                 :align-items     :center}}
                   [:div {:style {:font-size (if @menu-clicked 12 14)
                                  :color     (if @menu-clicked "rgba(73, 78, 84, 1)" "rgba(73, 78, 84, 1)")
                                  :transition "all 0.3s ease-out"
                                  }}
                    "Jonas Green | jg@stateless.dk | +45 2149 7961"]]]])))