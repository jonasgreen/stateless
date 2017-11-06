(ns stateless.ui.dom-node
  (:require [goog.dom :as dom]))


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

(defn convert-key [k]
  (name k))

(defn- style-node! [dom-node style-map]
  (doseq [[k v] style-map]
    (aset (aget dom-node "style") (convert-key k) (convert-value k v))))

(defn get-dom-node [id]
  (if (or (string? id) (symbol? id))
    (dom/getElement (str id))
    id))

(defn style!
  "Node must be either a dom-id (string or symbol) or a dom-node"
  [dom-target style-map]
  (if-let [node (get-dom-node dom-target)]
    (style-node! node style-map)
    (.warn js/console (str "Unable to style dom-node with id: " dom-target ". Dom-node does not exist."))))

