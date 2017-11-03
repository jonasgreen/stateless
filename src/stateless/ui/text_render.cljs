(ns stateless.ui.text-render
  (:require [stateless.ui.text-model :as text-model]
            [reagent.core :as r])
  )





















(def text-model-opts {:section-space 20
                      :section-width 200

                      :line-height   20
                      :line-width    100
                      :line-space    4

                      :word-height   20
                      :char-width    20
                      :char-height   20})


(defn add-top-left-section [start {:keys [lines]}])

#_(defn add-top-left [{:keys [sections] :as tm}]
  (let [top (atom 0)]
    (map (fn [s]
           (let [top @atom]
             (reset! top )
             (add-top-left-section @top s))) sections)
    ))

(defn render [text]
  (let [{:keys [height width sections]} (text-model/mk text-model-opts text)]

    (r/create-class {:component-will-receive-props (fn [this new-argv])
                     :render                       (fn [this] [:div {:style {:height height
                                                                             :width  width
                                                                             :border "1px solid grey"}}])})
    )

  )