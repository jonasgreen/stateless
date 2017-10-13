(ns stateless.ui.application
  (:require [reagent.core :as r]
            [stateless.ui.styles :as s]
            [stateless.state :as state]
            [stateless.ui.style :as style]
            [stateless.ui.contact-content :as contact-tab]
            [stateless.ui.about-content :as about-tab]
            [goog.dom :as dom]))

;------------
; menu-items
;------------

(def m-about {:name "ABOUT" :render (fn [ctx] [contact-tab/render])})
(def m-contact {:name "CONTACT" :render (fn [ctx] [about-tab/render])})

(def m-items [m-about m-contact])

(defn- menu-item [item selected select]
  [:span {:on-click (fn [e] (when-not selected (select item)))
          :style    (merge s/menu-item-style (when selected {:opacity 1 :cursor :auto}))}
   (:name item)])

;------------
; menu-panel
;------------


;--------------
; page-render
;--------------


(defn menu []
  [:div {:style {:padding         "0 50px 40px"
                 :display         :flex
                 :justify-content :space-between
                 :font-size       20
                 :background      :red
                 :align-items     :flex-end
                 :flex-wrap       :wrap}}])


(defn content []
  [:div {:style {:padding         50
                 :flex-grow       1
                 :background      :blue
                 :display         :flex
                 :justify-content :center
                 :align-items     :center}}

   ]
  )




(defn render [_]
  (let [local-state (r/atom {})]
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
                 [:div {:style {:flex-grow 2}}]

                 ;bottom
                 [:div {:style {:flex-grow       1
                                :display         :flex
                                :flex-direction  :column
                                :justify-content :center
                                :align-items     :center}}

                  [:div
                   ;title
                   [:div {:style {:font-size       24
                                  :color           "rgba(174, 182, 187, 1)"
                                  :display         :flex
                                  :line-height     1.5
                                  :justify-content :space-between}}
                    [:span "S"] [:span "T"] [:span "A"] [:span "T"] [:span "E"] [:span "L"] [:span "E"] [:span "S"] [:span "S"]]


                   ;sub-title
                   [:div {:style {:font-size       14
                                  :color           "rgba(174, 182, 187, 1)"
                                  :display         :flex
                                  :justify-content :space-between
                                  :padding-bottom  30
                                  :padding-left    1}} "Software Development"]]


                  ;contact info
                  [:div {:style {:display         :flex
                                 :justify-content :center
                                 :align-items     :center}}
                   [:div {:style {:font-size 14
                                  :color     "rgba(73, 78, 84, 1)"}}
                    "Jonas Green | jg@stateless.dk | +45 2149 7961"]]]])))