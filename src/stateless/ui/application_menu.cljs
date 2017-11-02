(ns stateless.ui.application-menu
  (:require [stateless.ui.styles :as s]
            [stateless.ui.gui :as gui :refer [gui register-component register-style style]]))




(def menu-content-style {:padding         "0 50px 40px"
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