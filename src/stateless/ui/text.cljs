(ns stateless.ui.text
  (:require [clojure.string :as string]))


(defn- total-items-space [items item-space-fn space-between-items]
  (->> items
       (map item-space-fn)
       (reduce + (* space-between-items (- (count items) -1)))))


(defn- mk-word [{:keys [char-width char-height word-height] :as opts} text]
  {:characters (mapv (fn [c] {:content c :height char-height :width char-width}) text)
   :width      (* char-width (count text))
   :height     word-height})


(defn- mk-lines [{:keys [section-width char-width line-height line-width] :as opts} text]
  (let [words (->> (string/split text #" ")
                   (remove string/blank?)
                   (map (partial mk-word opts))
                   vec)

        lines (loop [lines []
                     line []
                     wds words]
                (if-not (seq wds)
                  (->> (conj lines line) (remove (comp not seq)))
                  (let [wrd-fits-in-line? (<
                                            (+ (:width (first wds)) (total-items-space line :height char-width))
                                            line-width)]
                    (if wrd-fits-in-line?
                      (recur lines (conj line (first wds)) (rest wds))
                      (recur (conj (vec lines) line) [(first wds)] (rest wds))))))]
    (mapv (fn [l] {:width line-width :height line-height :words l}) lines)))

(defn- mk-section [{:keys [section-width line-space] :as opts} text]
  (let [lines (->> (string/split text #"\n")
                   (map (partial mk-lines opts))
                   (reduce concat)
                   vec)]
    {:lines  lines
     :height (total-items-space lines :height line-space)}))

(defn create [{:keys [section-space section-width] :as opts} text]
  (let [secs (->> (string/split text #"\n\n")
                  (map (partial mk-section opts))
                  vec)]
    {:sections secs
     :height   (total-items-space secs :height section-space)
     :width    section-width}))


(defn test-create []
  (create {:section-space 20
           :section-width 100

           :line-height   20
           :line-width    100
           :line-space    4

           :word-height   20
           :char-width    20
           :char-height   20

           } "jonas er\n\n sej"))