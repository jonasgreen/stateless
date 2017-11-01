(ns stateless.state
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]))


(defonce content {:about      "Dette er en side om mig og mit firma.\n\n
                            Der er ikke andre end mig, som kender det. Derfor er det helt fantastisk at arbejde for.\n
                            Man kan sige at min mørke side af mig selv er helt i tråd med siden."

                  :philosophy "Filosofien bag dette firma og den software vi laver vil jeg fortælle en del om på denne side.\n\n
                            Der er ingen som skal fortælle mig hvordan man laver et firma som dette. Hverken før eller siden."

                  :contact    "Jonas Green\n
                            +45 2149 7961\n
                            jg@stateless.dk\n\n

                            Stateless ApS\n
                            Birkegade 17, 3.\n
                            2200 Kbh N.\n\n

                            CVR: 39016761"})

(defonce content-order [:about :philosophy :contact])

(defonce state (r/atom {:system         {}
                        :active-content nil}))


(defn subscribe [path] (reaction (get-in @state path)))

(defn toggle-content [content-id]
  (let [{:keys [id]} (:active-content @state)]
    (swap! state update :active-content (when-not (= id content-id)
                                          {:id content-id :content (get content content-id (str "Content-id " content-id " is not supported"))}))))
