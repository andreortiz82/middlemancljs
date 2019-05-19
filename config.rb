# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

Haml::TempleEngine.disable_option_validator!

activate :livereload

activate :external_pipeline,
  name: :clojurescript,
  command: "./node_modules/.bin/shadow-cljs #{build? ? :release : :watch} app",
  source: ".tmp"

configure :build do
  activate :minify_css
  # Append a hash to asset urls
  activate :asset_hash
  # Gzip assets
  activate :gzip
end
