(ns stateless.ui.text-render
  (:require [stateless.ui.text-model :as text-model]
            [bedrock.util :as ut]
            [reagent.core :as r]
            [stateless.state :as state]
            [goog.dom :as dom-helper]
            [stateless.ui.transition-group :as transition-group]
            [stateless.ui.dom-node :as dom-node]))


(def text-model-opts {:section-space 30
                      :section-width 400

                      :line-height   21
                      :line-width    400
                      :line-space    4

                      :word-height   20
                      :word-space    8

                      :char-width    7.9
                      :char-height   20})


(defn add-top-left-word [start-top start-left opts {:keys [characters] :as word}]
  (let [m (reduce (fn [{:keys [top left cs]} c]
                    (let [c1 (assoc c :top start-top :left left)]
                      {:left (+ left (:width c1))
                       :cs   (conj cs c1)})) {:left start-left :cs []} characters)]
    (assoc word :characters (:cs m) :top start-top :left start-left)))

(defn add-top-left-line [start-top {:keys [word-space] :as opts} {:keys [words] :as line}]
  (let [m (reduce (fn [{:keys [left ws]} w]
                    (let [w (add-top-left-word start-top left opts w)]
                      {:left (+ left (:width w) word-space)
                       :ws   (conj ws w)})) {:left 0 :ws []} words)]
    (assoc line :words (:ws m) :top start-top :left 0)))

(defn add-top-left-section [start-top {:keys [line-space] :as opts} {:keys [lines] :as section}]
  (let [m (reduce (fn [{:keys [top ls]} s]
                    (let [l (add-top-left-line top opts s)]
                      {:top (+ top (:height l) line-space)
                       :ls  (conj ls l)})) {:top start-top :lines []} lines)]
    (assoc section :lines (:ls m) :top start-top :left 0)))

(defn add-top-left [{:keys [section-space] :as opts} {:keys [sections] :as model}]
  (let [m (reduce (fn [{:keys [top sections]} s]
                    (let [new-s (add-top-left-section top opts s)]
                      {:top      (+ top (:height new-s) section-space)
                       :sections (conj sections new-s)})) {:top 0 :sections []} sections)]
    (assoc model :sections (:sections m) :top 0 :left 0)))


(defn render-section [{:keys [height width top left]}]
  [:div {:style {:position :absolute
                 :top      top
                 :left     left
                 :height   height
                 :width    width}}])

(defn render-line [{:keys [height width top left]}]
  [:div {:style {:position :absolute
                 :top      top
                 :left     left
                 :height   height
                 :width    width}}])

(defn render-word [{:keys [height width top left]}]
  [:div {:style {:position :absolute
                 :top      top
                 :left     left
                 :height   height
                 :width    width}}])

(defn render-character [_]
  (let [hover (r/atom false)]
    (r/create-class
      {:component-will-receive-props (fn [this new-argv]
                                       (let [{:keys [dom-id content top left _tg_deleted] :as m} (second new-argv)
                                             old-left (:left (r/props this))
                                             old-top (:top (r/props this))
                                             speed-px-pr-s 200
                                             distance (.sqrt js/Math (+ (.pow js/Math (- left old-left) 2) (.pow js/Math (- top old-top) 2)))
                                             time (/ distance speed-px-pr-s)
                                             ]
                                         (when-not (= 0 distance)
                                           (dom-node/style! dom-id (merge {:transition (str "left " time "s ease-in 0.5s, top " time "s ease-out 0.5s")}
                                                                          #_(when-not _tg_deleted {:opacity 0.5})
                                                                          )))))

       :render                       (fn [this]
                                       (let [{:keys [dom-id content height width top left] :as input} (r/props this)]
                                         [:div {:id            (str dom-id)
                                                :on-mouse-over #(reset! hover true)
                                                :on-mouse-out  #(reset! hover false)
                                                :on-click      #(when-let [letter (state/easter-egg-toggable? content)]
                                                                  (state/toggle-easter-egg-letter content))
                                                :style         {:position :absolute
                                                                :left     left
                                                                :user-select :none
                                                                :top      top
                                                                :height   height
                                                                :width    width}}
                                          content]))})))


(defn get-dom-id [c depot]
  (or (first (get depot (:content c))) (str (gensym))))

(defn update-dom-ids [characters depot]
  (loop [cs characters
         result-cs []
         old-depot depot
         result-depot {}]

    (if-not (seq cs)
      {:characters result-cs :depot result-depot}
      (let [c (first cs)
            dom-id (get-dom-id c old-depot)
            ]

        (recur (rest cs)
               (conj result-cs (assoc c :dom-id dom-id))
               (update old-depot (:content c) #(rest %))
               (update result-depot (:content c) #(conj (vec %) dom-id)))))))




(defn transition-styles [enter-timeout leave-timeout]
  {:will-appear (fn [child-data] {:opacity 0.3
                                  :font-size 0
                                  :top        (rand-int 200)
                                  :left       (- (rand-int 600) 600)})
   :did-appear  (fn [child-data] {:font-size  14
                                  :top        (:top child-data)
                                  :left       (:left child-data)
                                  :opacity    1
                                  :transition (str "font-size " (rand-int leave-timeout) "ms ease-out, opacity " leave-timeout "ms ease-out, left " (+ leave-timeout (rand-int leave-timeout)) "ms ease-out, top " (+ leave-timeout (rand-int leave-timeout)) "ms ease-in")})

   :will-enter  (fn [child-data] {:opacity 0.3
                                  :font-size 0
                                  :top        (rand-int 200)
                                  :left       (- (rand-int 600) 600)
                                  })
   :did-enter   (fn [child-data] {:font-size  14
                                  :top        (:top child-data)
                                  :left       (:left child-data)
                                  :opacity    1
                                  :transition (str "font-size " (rand-int leave-timeout) "ms ease-out 1s, opacity " leave-timeout "ms ease-out 1s, left " (+ leave-timeout (rand-int leave-timeout)) "ms ease-out 1s, top " (+ leave-timeout (rand-int leave-timeout)) "ms ease-in 1s")})

   :will-leave  (fn [child-data] {})
   :did-leave   (fn [child-data] {:top        (rand-int 200)
                                  :left       (+ (rand-int 600) 600)
                                  :font-size  0
                                  :opacity    0.3
                                  :transition (str "font-size " (rand-int leave-timeout) "ms ease-in, opacity " leave-timeout "ms ease-in, left " leave-timeout "ms ease-in, top " leave-timeout "ms ease-out")})})



(defn render [text]
  (let [update-state (fn [state-atom txt]
                       (let [{:keys [height width sections] :as m} (->> txt
                                                                        (text-model/mk text-model-opts)
                                                                        (add-top-left text-model-opts))
                             lines (reduce concat (map :lines sections))
                             words (reduce concat (map :words lines))
                             raw-characters (reduce concat (map :characters words))
                             {:keys [characters depot]} (update-dom-ids raw-characters (:dom-id-depot @state-atom))]

                         (reset! state-atom {:height       height
                                             :width        width
                                             :sections     sections
                                             :lines        lines
                                             :words        words
                                             :characters   (sort-by :dom-id characters)
                                             :dom-id-depot depot})))
        state-atom (atom {})
        _ (update-state state-atom text)]

    (r/create-class
      {:component-will-receive-props (fn [this new-argv]
                                       (update-state state-atom (second new-argv)))
       :render                       (fn [this]
                                       (let [{:keys [height width characters dom-id-depot]} @state-atom]
                                         [:div {:style {:height   height
                                                        :width    width}}

                                          [transition-group/tg {:enter-timeout     300
                                                                :leave-timeout     1000
                                                                :children-data     characters
                                                                :child-factory     render-character
                                                                :transition-styles transition-styles}]]))})))