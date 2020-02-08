# Middleman + ClojureScript

A starter project using [Middleman](http://middlemanapp.com), [Shadow-CLJS](https://github.com/thheller/shadow-cljs), and [Clojurescript](https://clojurescript.org/) -  [Rum](https://github.com/tonsky/rum)


>_Original post from [Bob Nadler](http://bobnadler.com/articles/2018/01/28/clojurescript-with-middleman-via-shadow-cljs.html)_
This project uses [shadow-cljs](https://github.com/thheller/shadow-cljs) to compile the Clojurescript via Middleman's _external pipeline_ function.

## What's inside
- [SCSS](https://sass-lang.com/)
- [HAML](http://haml.info/)
- [Reagent](https://github.com/reagent-project/reagent)
- Deployment ready on [Heroku](https://heroku.com)
- Basic HTTP Authentication

## Getting started

### 1. Clone the repo
```
git clone https://github.com/andreortiz82/middlemancljs.git
```

### 2. Install dependencies
```
bundle install
```
and then...
```
npm install
```
### 3. Start it up
```
middleman server
```

### 4. Preview
Project will be running here [localhost:4567](http://localhost:4567)

![Happy](https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif)

### 5. Deploy to Heroku

Let's get this project deployed to heroku. I'm going to assume you have some experience with heroku. If not, take a look at their [docs](https://heroku.com/docs) for official instruction. I'm not a pro in this area.

**Create the project on Heroku**
```
heroku create MY_PROJECT
```

**Deploy to Heroku**
```
git push heroku master
```
