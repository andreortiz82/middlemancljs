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

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
# page '/*.xml', layout: false
# page '/*.json', layout: false
# page '/*.txt', layout: false

# With alternative layout
# data.navigation.sections.each do |section|
#   section.menu.each do |sub_section|
#     proxy "/#{sub_section.slug}.html", 
#         "/views/section-template.html", 
#         locals: { section: sub_section }
#   end
  
# end

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
end
