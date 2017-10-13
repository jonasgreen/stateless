(ns stateless.ui.style)


;; Constants used in components

;; z-index
(def z-index-normal 0)
(def z-index-popup 100)
(def z-index-footer 500)
(def z-index-tooling 1000)


(defn- style [style style-map]
  (doseq [[k v] style-map]
    (aset style (name k) v)))

(defn style-current-target [event style-map]
  (style (.. event -currentTarget -style) style-map))

(defn un-style-current-target [event style-map]
  (style (.. event -currentTarget -style) (reduce (fn [m [k v]] (assoc m k "")) {} style-map)))

(defn- prepend-style-into-opts [opts style]
  (assoc opts :style (merge style (:style opts))))

(defn- prepend-into-opts [opts & styles]
  (merge-with merge {:style (apply merge styles)} opts))


(defn style-node [node style-map]
  (style (aget node "style") style-map))