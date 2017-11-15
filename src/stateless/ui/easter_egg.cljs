(ns stateless.ui.easter-egg
  (:require [reagent.core :as r]
            [goog.events :as events]
            [stateless.state :as state]))


(def easter-points [{:header "Understand the domain"}

                    {:header "Psychological safety"}

                    {:header "Stay highly aligned and loosely coupled"
                     :link   "http://jobs.netflix.com/culture"}

                    {:header "Don't do SCRUM or any other methodology"}

                    {:header "Avoid open office landscapes"}

                    {:header "Keep the code agile"}

                    {:header "Technology is not an answer - it's a tool"}

                    ])


(defn show-easter-egg []
  [:div {:on-click #(state/reset-easter-egg)
         :style {:display :flex :justify-content :center :min-width 700}}
   ;top
   [:div
    [:div {:style {:padding        "80px 0"
                   :color          "rgba(255,255,255, 0.8)"
                   :white-space    :nowrap
                   :font-size      32
                   :letter-spacing 3
                   :font-weight    :bold
                   ;:text-shadow    "0px 1px 0px rgba(255,255,255,.2), 0px -1px 0px rgba(0,0,0,.7)"
                   }}
     "FOR TRULY STATELESS SOFTWARE"
     ]
    ;rest
    (map-indexed (fn [i {:keys [header link]}]
                   ^{:key i} [:div {:style {:display :flex
                                            :align-items :center
                                            :padding     40
                                            :padding-top 0
                                            :color       "rgba(255,255,255, 0.8)"
                                            :font-size   18}}
                              [:div {:style {:background "rgba(255,255,255, 0.5)"
                                             :width 6 :height 6 :border-radius 6
                                             }}]
                              [:div {:style {:padding-left 20
                                             :flex-grow 1}} header]

                              ]

                   ) easter-points)

    ]]

  )

(defn render []
  (let [letters (state/subscribe [:easter-egg-letters])
        active-content (state/subscribe [:active-content])]
    (events/listen js/window "resize" (fn [e] (state/window-size-changed (.-innerHeight js/window))))
    (events/listen js/window "keyup" (fn [e] (when (= 27 (.-keyCode e))
                                               (state/reset-easter-egg))))
    (fn []
      (let [show @active-content
            easter-realeased (not-any? #(= false (:enabled %)) @letters)]

        [:div {:style {:position   :fixed
                       :right      0
                       :top        0
                       :height     :100vh
                       :width      :100vw
                       :overflow-y (if easter-realeased :auto :none)
                       :background (if easter-realeased "rgba(141, 5, 9, 1)" "transparent")
                       :z-index    (if easter-realeased 10000000000 -20)
                       :transition "background 500ms ease-in"}}
         (if easter-realeased
           [show-easter-egg]
           (map-indexed (fn [i {:keys [right top enabled font-size content]}]
                          ^{:key (str i)} [:div {:on-click #(state/reset-easter-egg)
                                                 :style    {:position   :fixed
                                                            :right      (if show right (- font-size))
                                                            :top        top
                                                            :color      (if enabled "rgba(137, 7, 14, 1)" "transparent")
                                                            :font-size  font-size
                                                            :transition "opacity 300ms ease-in, color 300ms ease-in"
                                                            }} (when content (clojure.string/upper-case content))])
                        @letters)

           )]))))