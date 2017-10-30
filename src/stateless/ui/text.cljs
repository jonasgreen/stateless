(ns stateless.ui.text
  (:require [clojure.string :as string]))









#_(:text [{:style {}
           :lines [{:style {}
                    :words [{:style {}
                             :chars [{:style {}
                                      :char  []}]
                             }]
                    }]}]
    )

(defn line [{:keys [section-width] :as opts} text]

  )



(defn section [{:keys [section-width] :as opts} text]
  (let [lines (->> (string/split text #"\n")
                  (map (partial line opts))
                  vec)]

    ))

(defn create [{:keys [section-space] :as opts} text]
  (let [secs (->> (string/split text #"\n\n")
                  (map (partial section opts))
                  vec)]

    {:sections secs
     :height   (->> secs
                    (map :height)
                    (reduce + (* section-space (- (count secs) -1))))}))
