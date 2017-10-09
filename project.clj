(defproject stateless "0.1.0-SNAPSHOT"
  :description "Stateless"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [noencore "0.3.3"]
                 [reagent "0.7.0"]
                 [reagent-utils "0.2.1"]]

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-ancient "0.6.12"]
            [lein-figwheel "0.5.7"]]

  :hooks [leiningen.cljsbuild]

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :source-paths ["src" "dev"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target" "resources/private/js/compiled"]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.2"]
                                  [figwheel-sidecar "0.5.14"]
                                  ]}}

  :cljsbuild {
              :builds [{:id           "dev"
                        :source-paths ["src" "dev"]
                        :figwheel     {:on-jsload "stateless.core/on-js-reload"}
                        :compiler     {:main                 stateless.core
                                       :asset-path           "js/compiled/out"
                                       :output-to            "resources/public/js/compiled/stateless.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :source-map-timestamp true}}


                       {:id           "deploy"
                        :source-paths ["src"]
                        :compiler     {:main          stateless.core
                                       :output-dir    "resources/public/js/compiled/deploy_out"
                                       :output-to     "resources/public/js/compiled/stateless_deploy.js"
                                       :asset-path    "js/compiled/deploy_out"
                                       :source-map    "resources/public/js/compiled/deploy.js.map"
                                       :language-in   :ecmascript5 ;; Mute warnings re: promesa outputting non-ES3 compliant javascript
                                       :language-out  :ecmascript5
                                       :optimizations :simple}}

                       {:id           "test"
                        :source-paths ["test"]
                        :compiler     {:output-to    "resources/private/js/compiled/unit-test.js"
                                       :pretty-print true}}
                       ]}
  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"]})
