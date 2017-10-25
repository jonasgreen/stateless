(ns stateless.ui.application
  (:require [reagent.core :as r]
            [stateless.ui.styles :as s]
            [stateless.state :as state]
            [stateless.ui.style :as style]
            [stateless.ui.contact-content :as contact-tab]
            [stateless.ui.about-content :as about-tab]
            [stateless.ui.gui :as registry]
            [goog.dom :as dom]))


(def tg
  (r/adapt-react-class js/React.addons.TransitionGroup))


(defn content []
  [:div {:style {:padding         50
                 :flex-grow       1
                 :background      :blue
                 :display         :flex
                 :justify-content :center
                 :align-items     :center}}])



(defn render-char [c]
  (let [c1 (r/create-class {:component-will-receive-props (fn [this new-argv])
                            :component-did-mount          (fn [this] (println c " did mount "))
                            :component-did-update         (fn [this old-argv])
                            :component-will-unmount       (fn [this])
                            :reagent-render               (fn [{:keys [letter left top]}]
                                                            [:div {:style {:position :fixed
                                                                           :top      top
                                                                           :left     left
                                                                           ;:transition "left 0.3s linear, top 0.3s linear"

                                                                           }} letter])}
                           )]
    (aset c1 "componentWillEnter" #(println "EEEE"))
    c1

    ))


(defn render [_]
  (let [menu-clicked (r/atom false)
        text (r/atom [{:id (gensym) :letter "A" :left 0 :top 0}
                      {:id (gensym) :letter "B" :left 20 :top 20}
                      {:id (gensym) :letter "C" :left 30 :top 30}])]
    (fn [state]
      (style/style-node (dom/getElement "application-background") {:background (if @menu-clicked "rgba(11, 11, 11, 1)" "rgba(11, 11, 11, 1)")})

      [:div {:style {:height          :100vh
                     :width           :100vw
                     :display         :flex
                     :flex-direction  :column
                     :align-items     :center
                     :justify-content :center}}

       [:img {:src   "img/the-ocean.png"
              :style {:height     :100vh
                      :width      :100vw
                      :opacity    (if @menu-clicked 0.05 0.17)
                      :position   :fixed
                      :top        0
                      :z-index    -1
                      :transition "opacity 1.5s ease-out"
                      }}]

       ;top
       [:div {:style {:flex-grow 2 :width :100%}}
        [:div {:style {:display :flex :padding 80 :padding-top 60 :font-size 14 :color "rgba(73, 78, 84, 1)"}}
         [:div {:style {:display :flex :justify-content :space-between :align-items :center}}

          [:span {:on-click (fn [] (swap! menu-clicked not)
                              (swap! text (fn [v]
                                            (-> (seq v)
                                                (conj {:id (gensym) :letter "A" :left 0 :top 0})
                                                ((fn [a] (mapv #(-> % (assoc :left (rand-int 200)) (assoc :top (rand-int 200))) a)))))))


                  :style    (merge {:padding        2
                                    :margin-right   40
                                    :letter-spacing 1.5}

                                   (when @menu-clicked {;:border-bottom "1px solid rgba(174, 182, 187, 1)"
                                                        :color "rgba(174, 182, 187, 1)"
                                                        }))

                  } "ABOUT"]
          [:span {:style {:margin-right 40 :letter-spacing 1.5}} "CONTACT"] [:span {:style {:letter-spacing 1.5}} "BAR"]]]

        [:div {:style {:padding-left  80
                       :padding-right 80
                       :font-size     14
                       :position      :relative
                       :color         "rgba(174, 182, 187, 0.8)"
                       ;:opacity       (if @menu-clicked 1 0)
                       :transition    "opacity 0.3s linear"
                       :background    :blue
                       }}


         [tg {:transitionName         "spawn"
              :transitionEnterTimeout 700
              :transitionLeaveTimeout 700
              } (map-indexed (fn [i c] ^{:key (:id c)} [render-char c]) @text)


          ;IDE - klikke på et bogstav - så flyver det væk....

          ]]

        ]

       ;bottom
       [:div {:style {:flex-grow       (if @menu-clicked 0 1)
                      :width           :100%
                      :display         :flex
                      :flex-direction  :column
                      :transition      "flex-grow 0.3s ease-out"
                      :justify-content :center
                      :align-items     :center}}

        [:div {:style {:height     (if @menu-clicked 0 80)
                       :opacity    (if @menu-clicked 0 1)
                       :transition "opacity 0.3s ease-out, height 0.3s ease-out"
                       }}
         ;title
         [:div {:style {:font-size       (if @menu-clicked 18 24)
                        :color           "rgba(174, 182, 187, 1)"
                        :display         :flex
                        :line-height     1.5
                        :transition      "font-size 0.3s ease-out"
                        :justify-content :space-between}}
          [:span "S"] [:span "T"] [:span "A"] [:span "T"] [:span "E"] [:span "L"] [:span "E"] [:span "S"] [:span "S"]]


         ;sub-title
         [:div {:style {:font-size       (if @menu-clicked 12 14)
                        :color           "rgba(174, 182, 187, 1)"
                        :display         :flex
                        :justify-content :space-between
                        :padding-bottom  30
                        :padding-left    1
                        :transition      "font-size 0.3s ease-out"

                        }} "Software Development"]]


        [:div {:style {:border-bottom-width 0               ; only border on scroll
                       :border-bottom-style :solid
                       :border-bottom-color (if @menu-clicked "rgba(73, 78, 84, 0.2)" "transparent")
                       :width               (if @menu-clicked :100% 0)
                       :height              0
                       :transition          "all 0.3s ease-out"}}]
        ;contact info
        [:div {:style {:padding     8
                       :min-height  40
                       :display     :flex
                       ;:justify-content :center
                       :align-items :center}}
         [:div {:style {:font-size  (if @menu-clicked 12 14)
                        :color      (if @menu-clicked "rgba(73, 78, 84, 1)" "rgba(73, 78, 84, 1)")
                        :transition "all 0.3s ease-out"
                        }}
          "Jonas Green | jg@stateless.dk | +45 2149 7961"]]]])))