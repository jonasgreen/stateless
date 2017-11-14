(ns stateless.ui.fancy-placeholder
  (:require [stateless.state :as state]))









(defn render []

  ;TODO - placer billede via flex og ikke fixed. Sådan at det ikke kan gå ind over teksten.
  ;TODO - Lav også menu om så den ikke bruger TG

  (let [active-content (state/subscribe [:active-content])]
    (fn []
      [:div {:style {:position      :fixed
                     :right         60
                     :top           60
                     :width         200
                     :height        200
                     :border-radius 200
                     }}

       [:img {:src   "img/jonas-color.jpg"
              :class "image-container"
              :style {:filter        "grayscale(90%)"
                      :height        200
                      :width         200
                      :border-radius 200
                      :opacity       (if @active-content 1 0)
                      :transition "opacity 300ms ease-in"
                      }}]

       ]

      )

    )

  )