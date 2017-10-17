(ns stateless.ui.application-menu
  (:require [stateless.ui.styles :as s]
            [stateless.ui.about-content :as about-tab]
            [stateless.ui.contact-content :as contact-tab]
            [stateless.ui.gui :as gui :refer [gui register-component register-style style]]))



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

(defn menu-content-style {:padding         "0 50px 40px"
                          :display         :flex
                          :justify-content :space-between
                          :font-size       20
                          :background      :red
                          :align-items     :flex-end
                          :flex-wrap       :wrap})

(defn menu []
  [:div {:style (style menu-content-style {})}])

(defn menu-mobile [])


;(register ::menu menu)
(register-component ::menu {:desktop menu
                            :mobile  menu-mobile})


(defn render [m] (gui ::menu m))