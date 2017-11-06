(ns stateless.ui.transition-group
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >!] :as a]
            [reagent.core :as r]
            [stateless.ui.dom-node :as dom-node]
            [clojure.set :as c-set]
            [bedrock.util :as ut]))

(defn vec-insert
  "insert elem in coll"
  [coll pos item]
  (if (= pos (count coll))
    (vec (concat coll [item]))
    (vec (concat (subvec coll 0 pos) [item] (subvec coll pos)))))

(defn items-by-id-map [items]
  (reduce (fn [col {:keys [dom-id] :as child}] (assoc col dom-id child)) {} items))

(defn change-model [old-items new-items]
  (let [old-items-by-id (items-by-id-map old-items)
        new-items-by-id (items-by-id-map new-items)

        old-ids (set (keys old-items-by-id))
        new-ids (set (keys new-items-by-id))

        deleted-ids (c-set/difference old-ids new-ids)
        deleted-items (-> (select-keys old-items-by-id deleted-ids) vals)

        added-ids (c-set/difference new-ids old-ids)
        added-items (-> (select-keys new-items-by-id added-ids) vals)]

    {:deleted-ids   deleted-ids
     :deleted-items deleted-items
     :added-ids     added-ids
     :added-items   added-items}))

(defn transitions [life-cycle transition-styles children]
  (when-let [get-style (get transition-styles life-cycle)]
    (mapv (fn [c] (dom-node/style! (:dom-id c) (get-style c))) children)))

(defn tg [{:keys [children-data child-factory enter-timeout leave-timeout transition-styles] :as input}]
  (let [children (r/atom children-data)
        ts (transition-styles enter-timeout leave-timeout)]

    (r/create-class
      {:component-did-mount          (fn [this]
                                       (transitions :will-appear ts @children)
                                       (r/next-tick #(transitions :did-appear ts @children)))

       :component-will-receive-props (fn [this new-argv]
                                       ; Before investigating what items are added and deleted - _tg_deleted items are temporary removed to avoid interference.
                                       (let [new-items (vec (-> new-argv second :children-data))
                                             old-items (:children-data (r/props this))
                                             {:keys [added-ids deleted-ids]} (change-model old-items new-items)

                                             ;;update deleted mark in children
                                             updated-children (map-indexed (fn [i {:keys [dom-id _tg_deleted] :as item}]
                                                                             (cond
                                                                               (contains? added-ids dom-id) (dissoc item :_tg_deleted)
                                                                               (contains? deleted-ids dom-id) (assoc item :_tg_deleted i)
                                                                               _tg_deleted (assoc item :_tg_deleted i)
                                                                               :else item)) @children)

                                             deleted-children (filter :_tg_deleted updated-children)

                                             ;insert deleted items into new-items - keep index as good as possible
                                             updated-children (reduce (fn [col item] (vec-insert col (:_tg_deleted item) item)) new-items deleted-children)]
                                         (reset! children updated-children)))

       :component-did-update         (fn [this old-argv]
                                       (let [{:keys [added-items]} (change-model (-> old-argv second :children-data) (:children-data (r/props this)))
                                             deleted-items (filter :_tg_deleted @children)
                                             deleted-items-set (set (map :dom-id deleted-items))]

                                         (when (seq deleted-items)
                                           (go
                                             (transitions :will-leave ts deleted-items)
                                             (r/next-tick #(transitions :did-leave ts deleted-items))
                                             (<! (a/timeout 2000))

                                             (let [fresh-deleted-ids (->> @children
                                                                          (filter :_tg_deleted)
                                                                          (map :dom-id)
                                                                          set
                                                                          (c-set/intersection deleted-items-set))]
                                               (reset! children (remove #(contains? fresh-deleted-ids (:dom-id %)) @children)))))

                                         (transitions :will-enter ts added-items)
                                         (r/next-tick #(transitions :did-enter ts added-items))))


       :render                       (fn [this]
                                       [:div {:style {:position :relative}}
                                        (map (fn [{:keys [dom-id] :as c}] ^{:key (str dom-id)} [child-factory c]) @children)])})))


