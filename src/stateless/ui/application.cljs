(ns stateless.ui.application
  (:require [reagent.core :as r]
            [stateless.ui.styles :as s]
            [stateless.state :as state]
            [stateless.ui.dom-node :as dom-node]
            [stateless.ui.text-render :as text-render]
            [stateless.ui.gui :as registry]
            [stateless.ui.easter-egg :as easter-egg]
            [stateless.ui.fancy-placeholder :as fancy-placeholder]
            [stateless.ui.menu :as menu]))


(defn render [_]
  (let [active-content (state/subscribe [:active-content])]
    (fn [state]
      [:div {:style {:height          :100vh
                     :width           :100vw
                     :display         :flex
                     :flex-direction  :column
                     :align-items     :center
                     :justify-content :center}}

       [easter-egg/render]

       [:img {:src   "img/the-ocean.png"
              :style {:height     :100vh
                      :width      :100vw
                      :opacity    (if @active-content 0.05 0.17)
                      :position   :fixed
                      :top        0
                      :z-index    -1
                      :transition "opacity 1.5s ease-out"
                      }}]
       [fancy-placeholder/render]

       ;top
       [:div {:style {:display :flex :flex-direction :column :flex-grow 1 :width :100%}}
        [:div {:style {:display :flex :padding 80 :padding-top 60 :font-size 14 :color "rgba(73, 78, 84, 1)"}}
         [menu/render]]
        (when @active-content
          [:div {:style {:flex-grow    1
                         :height       :100%
                         :position     :relative
                         :overflow-y   :auto
                         :padding-left 80 :padding-right 80
                         :line-height  1.8
                         :color        "rgba(174, 182, 187, 1)"}}
           [text-render/render (:content @active-content)]])]

       ;bottom
       [:div {:style {:flex-grow       (if @active-content 0 1)
                      :width           :100%
                      :display         :flex
                      :flex-direction  :column
                      :transition      "flex-grow 0.3s ease-out"
                      :justify-content :center
                      :align-items     :center}}

        [:div {:style {:height     (if @active-content 0 80)
                       :opacity    (if @active-content 0 1)
                       :transition "opacity 0.3s ease-out, height 0.3s ease-out"
                       }}
         ;title
         [:div {:style {:font-size       (if @active-content 18 24)
                        :color           "rgba(174, 182, 187, 1)"
                        :display         :flex
                        :line-height     1.5
                        :transition      "font-size 0.3s ease-out"
                        :justify-content :space-between}}
          [:span "S"] [:span "T"] [:span "A"] [:span "T"] [:span "E"] [:span "L"] [:span "E"] [:span "S"] [:span "S"]]


         ;sub-title
         [:div {:style {:font-size       (if @active-content 12 14)
                        :color           "rgba(174, 182, 187, 1)"
                        :display         :flex
                        :justify-content :space-between
                        :padding-bottom  30
                        :padding-left    1
                        :transition      "font-size 0.3s ease-out"

                        }} "Software Development"]]


        [:div {:style {:border-bottom-width 0               ; only border on scroll
                       :border-bottom-style :solid
                       :border-bottom-color (if @active-content "rgba(73, 78, 84, 0.2)" "transparent")
                       :width               (if @active-content :100% 0)
                       :height              0
                       :transition          "all 0.3s ease-out"}}]
        ;contact info
        [:div {:style {:padding     8
                       :min-height  40
                       :display     :flex
                       ;:justify-content :center
                       :align-items :center}}
         [:div {:style {:font-size  (if @active-content 12 14)
                        :color      (if @active-content "rgba(73, 78, 84, 1)" "rgba(73, 78, 84, 1)")
                        :transition "all 0.3s ease-out"
                        }}
          "Jonas Green | jg@stateless.dk | +45 2149 7961"]]]])))