(ns styleguide.core
  (:require
   [rum.core :as rum]))

(defonce app-state (atom nill))

(rum/defc app
  []
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
     [:code.black "source/cljs/styleguide/core.cljs"]]]
   [:div.featuring
    [:h2 "Featuring"]
    [:ul
      [:li "Middleman"]
      [:li "Clojurescript"]
      [:li "Rum (React)"]
      [:li "Sass"]
      [:li "Middleman Livereload"]
      [:li "HAML (sparingly)"]
      [:li "and more..."]]]])


(defn ^:export init
  []
  (rum/mount (app) (.getElementById js/document "app")))
