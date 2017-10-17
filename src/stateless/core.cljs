(ns ^:figwheel-always stateless.core
  (:require [reagent.core :as r]
            [airboss.core :as airboss]
            [stateless.ui.application :as application]
            [stateless.state :as state]))

(defn on-js-reload []
  (swap! state/state update-in [:system :figwheel-reloads] inc))


(defn render [s]
  (fn [s]
    [application/render @s]))

(defn ^:export main []
  (enable-console-print!)

  (println "innerwidth: " (aget js/window "innerWidth"))
  (println "screenwidth: " (aget js/screen "width"))


  (r/render [render state/state] (js/document.getElementById "application"))

  (airboss/load-state-viewer state/state)
  (airboss/load-design-viewer))