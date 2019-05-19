(ns components.core
  (:require
   [rum.core :as rum]))

(rum/defcs app
  < (rum/local {:count 0})
  [state]
  (let [local (:rum/local state)
        {:keys [count]} @local]
    [:div
      [:div.bg-blue.p-40.mt-40.white
       {:on-click #(swap! local assoc :count (inc count))}
       "Click me - I'm a CLJS component"
       [:h2 count]
       [:code.blue (str @local)]]]))

(defn ^:export init
  []
  (rum/mount (app) (.getElementById js/document "component-example-container")))
