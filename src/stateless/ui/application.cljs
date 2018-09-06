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
      [:div {:style {:height         :100vh
                     :width          :100vw
                     :display        :flex
                     :flex-direction :column
                     }}

       [easter-egg/render]

       ;[fancy-placeholder/render]

       ;top
       [:div {:style {:padding-top 60 :display :flex :flex-grow 1}}


        ;menu and text
        [:div {:style {:background "rgba(137, 7, 14, 1)" :position :fixed :left 0 :top 60 :width 0 :height 14 :border-left "1px solid rgba(137, 7, 14, 1)"}}]
        ;[:div {:style {:background "rgba(137, 7, 14, 1)":position :fixed :right 0 :top 60 :width 2 :height 14 :border-left "1px solid rgba(137, 7, 14, 1)"}}]

        [:div {:style {:display :flex :flex-direction :column :flex-grow 1}}
         [:div {:style {:margin-left 80 :min-width 400 :max-width 400 :padding-bottom 80 :display :flex :font-size 14 :color "rgba(73, 78, 84, 1)"}}
          [menu/render]]
         (when @active-content
           [:div {:style {:padding-left 80
                          :display      :flex
                          :flex-grow    1
                          :height       :100%
                          :width        :100%
                          :position     :relative
                          :overflow-y   :auto
                          :line-height  1.8
                          :color        "rgba(73, 78, 84, 1)"}}
            [text-render/render (:content @active-content)]]

           )]


        [:img {:src   "img/jonas-color.jpg"
               :class "image-container"
               :style {:position      :fixed :top 60 :left 560
                       :filter        "grayscale(90%)"
                       :height        200
                       :width         200
                       :border-radius 200
                       :opacity       (if @active-content 1 0)
                       :transition    "opacity 300ms ease-in"}}]]



       ;bottom
       [:div {:style {:flex-grow       (if @active-content 0 1)
                      :width           :100%
                      :display         :flex
                      :flex-direction  :column
                      :transition      "flex-grow 0.3s ease-out"
                      :justify-content :center
                      :align-items     :center}}

        [:div {:style {:opacity    (if @active-content 0 1)
                       :transition "opacity 0.3s ease-out, height 0.3s ease-out"
                       }}



         [:img {:src   "img/jonas-color.jpg"
                :class "image-container"
                :style {:filter        "grayscale(90%)"
                        :height        280
                        :width         280
                        :border-radius 200
                        :margin-bottom 60
                        }}]


         ;title
         [:div {:style {:font-size       (if @active-content 18 24)
                        :color           "rgba(73, 86, 79, 0.7)"
                        :display         :flex
                        :line-height     1.5
                        :transition      "font-size 0.3s ease-out"
                        :justify-content :space-between}}
          [:span "S"] [:span "T"] [:span "A"] [:span "T"] [:span "E"] [:span "L"] [:span "E"] [:span "S"] [:span "S"]]



         ;sub-title
         [:div {:style {:font-size       (if @active-content 12 14)
                        :color           "rgb(73, 78, 84)"
                        :display         :flex
                        :justify-content :space-between
                        :opacity         0.7
                        :padding-bottom  30
                        :padding-left    1
                        :transition      "font-size 0.3s ease-out"

                        }} "Software Development by Jonas Green"]






         ]


        #_[:div {:style {:border-bottom-width 0             ; only border on scroll
                         :border-bottom-style :solid
                         :border-bottom-color (if @active-content "rgba(73, 78, 84, 0.2)" "transparent")
                         :width               (if @active-content :100% 0)
                         :height              0
                         :transition          "all 0.3s ease-out"}}]
        ;contact info
        #_[:div {:style {:padding     8
                         :min-height  40
                         :display     :flex
                         ;:justify-content :center
                         :align-items :center}}
           #_[:div {:style {:font-size  (if @active-content 12 14)
                            :color      "rgb(73, 78, 84)"
                            :opacity    0.4
                            :transition "all 0.3s ease-out"
                            }}
              "Jonas Green | jg@stateless.dk | +45 2149 7961"]]]])))