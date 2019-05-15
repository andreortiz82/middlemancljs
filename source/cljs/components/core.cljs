(ns components.core
  (:require
   [rum.core :as rum]))

(rum/defcs app
  < (rum/local {:count 0})
  [state]
  (let [local (:rum/local state)
        {:keys [count]} @local]
    [:div.app-container
     [:div.banner
      [:h1
       "Middleman + CLJS"
       [:span.fa.fa-heart.red.ml-10]]
      [:p.lead "This project is meant to serve protoyping template.
      Additionally, I've included some boiler-plate SCSS which can be found here:"]
      [:pre
       [:code.pink "source/stylesheets/utils"]]
      [:pre
       [:code.black "source/cljs/components/core.cljs"]]]
     [:div.bg-blue.p-20.m-20.white
      {:on-click #(swap! local assoc :count (inc count))}
      "Click me - I'm a CLJS component"
      [:h2 count]
      [:code.blue (str @local)]]
     [:div.featuring
      [:h2 "Featuring"]
      [:ul
        [:li "Middleman"]
        [:li "Clojurescript"]
        [:li "Rum (React Rap Artist)"]
        [:li "Sass"]
        [:li "Middleman Livereload"]
        [:li "HAML (sparingly)"]
        [:li "and more..."]]]]))


(defn ^:export init
  []
  (rum/mount (app) (.getElementById js/document "app")))
