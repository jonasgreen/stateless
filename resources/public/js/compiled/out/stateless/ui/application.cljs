(ns stateless.ui.application
  (:require [reagent.core :as r]
            [stateless.ui.styles :as s]
            [stateless.state :as state]
            [stateless.ui.contact-tab :as contact-tab]
            [stateless.ui.about-tab :as about-tab]))

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

(defn render [_]
  (let [local-state (r/atom {})]
    (fn [state]
      (println "RENDER APP")
      [:div
       [about-tab/render]]

      #_(fn [ctx]
          [:div {:style s/tournament-page-style}
           [menu-panel m-items selector]
           ;content
           [teams/render ctx]
           #_(when-let [{:keys [render name]} (sel/selected selector)]
               [render (context/sub-ui-ctx old-ctx [(keyword (str (clojure.string/lower-case name) "-tab"))]) ctx])]))))