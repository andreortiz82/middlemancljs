(ns components.core
  (:require
   [reagent.core :as r :refer [atom]]))

(defn click-testr [count]
  [:div.bg-blue.p-10.white.has-pointer.text-center.has-cursor
    {:on-click #(swap! count inc)}
    [:code (str "Click me ---> " @count)]])

(defn app []
  (let [count (atom 0)]
    (fn []
      [:div [click-testr count]])))

(defn mount []
  (r/render
   [app]
   (.getElementById
    js/document
    "component-example-container")))

(defn ^:export init []
  (mount))
