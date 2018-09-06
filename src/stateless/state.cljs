(ns stateless.state
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]))


(def content {:about      "Dette er en side om mig og mit firma. Der er ikke andre end mig, som kender det. Derfor er det helt fantastisk at arbejde for.\r
                            Man kan sige at min mørke side af mig selv er helt i tråd med siden.\r
                            Efter følgende kapitel er jeg blevet klar over at intet er som det skal være længere.

                            "

              :philosophy "Filosofien bag dette firma og den software vi laver vil jeg fortælle en del om på denne side.\r
                            Der er ingen som skal fortælle mig hvordan man laver et firma som dette. Hverken før eller siden.\r
                            Man kan ikke vide hvad man ellers skal tro - hvis man altså ikke laver det samme som jeg gør om onsdagen.
                            "

              :contact    "Jonas Green\n
                            +45 2149 7961\n
                            jg@stateless.dk\r

                            Stateless ApS\n
                            Birkegade 17, 3.\n
                            2200 Kbh N.\r

                            CVR: 39016761"

              :bar        "Next Stateless after-work bar will take place:\r

                        Friday 22 March 16:00 pm.\r

                        At:\n
                        Café Bankeråt\n
                        Nansensgade 4\n
                        2200 Kbh N\r



                  "
              })

(defonce content-order [:about :philosophy :bar :contact])

(def easter-egg-enablers {"s" {:max 3 :active 0}
                          "t" {:max 2 :active 0}
                          "a" {:max 1 :active 0}
                          "e" {:max 2 :active 0}
                          "l" {:max 1 :active 0}})

(def easter-egg-letters (mapv (fn [c] {:top 0 :right 0 :content c :enabled false}) "stateless"))

(defonce state (r/atom {:system              {}
                        :active-content      nil
                        :easter-egg-enablers easter-egg-enablers
                        :easter-egg-letters  easter-egg-letters}))


(defn subscribe [path] (reaction (get-in @state path)))

(defn toggle-content [id]
  (swap! state update :active-content #(when-not (= (:id %) id)
                                         {:id id :content (get content id (str "Content with id " id " is not supported"))})))

(defn window-size-changed [w-height]
  (let [font-size (/ w-height 9.3)]
    (swap! state update :easter-egg-letters (fn [a]
                                              (map-indexed (fn [i l] (assoc l
                                                                       :right (/ font-size 3)
                                                                       :top (* i font-size)
                                                                       :font-size font-size)) a)))))
(defn reset-easter-egg []
  (swap! state assoc
         :easter-egg-letters easter-egg-letters
         :easter-egg-enablers easter-egg-enablers)

  (window-size-changed (.-innerHeight js/window))
  )

(defn easter-egg-toggable? [c]
  (some (fn [{:keys [content enabled] :as l}]
          (when (and (= content c) (not enabled)) l)) (:easter-egg-letters @state)))

(defn toggle-easter-egg-letter [c]
  (when (and c
             (-> (:easter-egg-enablers @state) keys set (contains? (clojure.string/lower-case c))))
    (let [enablers (:easter-egg-enablers (update-in @state [:easter-egg-enablers c]
                                                    (fn [{:keys [max active] :as m}]
                                                      (assoc m :active (if (> max active) (inc active) active)))))
          {:keys [max active] :as t} (get enablers (clojure.string/lower-case c))
          letters (loop [letters (:easter-egg-letters @state)
                         active-count active
                         handled-letters []]
                    (if-not (seq letters)
                      handled-letters
                      (let [letter (first letters)
                            letter-content (:content (first letters))]
                        (recur (next letters)
                               (if (= letter-content c) (dec active-count) active-count)
                               (conj (vec handled-letters) (if (= letter-content c)
                                                             (assoc letter :enabled (> active-count 0))
                                                             letter))))))]

      (swap! state assoc
             :easter-egg-enablers enablers
             :easter-egg-letters letters))))


