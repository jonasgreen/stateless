(ns stateless.state
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]))

(defonce state (r/atom {:system {}
                        :active-tab  nil
                        :about   {}
                        :contact {}}))


(defn subscribe [path] (reaction (get-in @state path)))