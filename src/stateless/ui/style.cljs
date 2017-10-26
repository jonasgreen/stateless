(ns stateless.ui.style)


;; Constants used in components

;; z-index
(def z-index-normal 0)
(def z-index-popup 100)
(def z-index-footer 500)
(def z-index-tooling 1000)

(def none-pixel-styles (set [:column-count
                             :fill-opacity
                             :flex
                             :flex-grow
                             :flex-shrink
                             :font-weight
                             :line-clamp
                             :line-height
                             :opacity
                             :order
                             :orphans
                             :widows
                             :z-index
                             :zoom]))

(defn convert-value [k v]
  (cond
    (and (int? v) (not (contains? none-pixel-styles k))) (str v "px")
    (keyword? v) (name v)
    :else v))

(defn convert-key [k] (name k))

(defn- style [style style-map]
  (doseq [[k v] style-map]
    (aset style (convert-key k) (convert-value k v))))

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