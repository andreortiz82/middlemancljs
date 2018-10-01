(ns foobar.core
  (:require
   [reagent.core :as reagent]))

(defonce app-state (reagent/atom {}))

(defn app
  []
  [:div.app-container "cljs!"])

(defn render-components
  []
  (reagent/render [app]
    (.getElementById js/document "app")))

(defn ^:export init
  []
  (render-components))
