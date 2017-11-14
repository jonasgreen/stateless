(ns ^:figwheel-always stateless.core
  (:require [reagent.core :as r]
            [airboss.core :as airboss]
            [stateless.ui.application :as application]
            [stateless.ui.animated-balls :as balls]
            [stateless.ui.transition-group :as tg]
            [stateless.state :as state]))

(defn on-js-reload []
  (swap! state/state update-in [:system :figwheel-reloads] inc))


(defn render [s]
  (fn [s]
    #_[balls/render @s]
    [application/render @s]))

(defn ^:export main []
  (enable-console-print!)

  (state/window-size-changed (.-innerHeight js/window))

  (r/render [render state/state] (js/document.getElementById "application"))

  (airboss/load-state-viewer state/state)
  (airboss/load-design-viewer))