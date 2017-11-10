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

                  :bar "Next Stateless after-work bar will take place:\r

                        Friday 22 March 16:00 pm.\r

                        At:\n
                        Café Bankeråt\n
                        Nansensgade 4\n
                        2200 Kbh N\r



                  "
                  })

(defonce content-order [:about :philosophy :contact :bar])

(defonce state (r/atom {:system         {}
                        :active-content nil}))


(defn subscribe [path] (reaction (get-in @state path)))

(defn toggle-content [id]
  (swap! state update :active-content #(when-not (= (:id %) id)
                                         {:id id :content (get content id (str "Content with id " id " is not supported"))})))
