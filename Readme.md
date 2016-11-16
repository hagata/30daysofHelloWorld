### `#30xHelloworlds` `#codevember`
# 30 days of hello, world's
30 new things in 30 days to inspire a lasting curiosity & desire to experiment.

I believe the best way to improve, become well rounded, form better opinions, and enhance one's ability to choose the right tool for the occasion is through experience. 30 days of "Hello, world!" challenges one's self to dive into unfamiliar territory with an open mind and zero bias.

In 30 days, I'm challenging myself to experiment with different frameworks, language, libraries, patterns, API's and technology that are unfamiliar or new to me. The goal is simply to gain a better understanding of the tools of the web and tech landscape by getting hands on experience and having fun doing so.

Contents:
- [Day 1: Go lang](#day1)
- [Day 2: Hapi.js](#day2)
- [Day 3: Koa.js](#day3)
- [Day 4: Hug API framework](#day4)
- [Day 5: Django: scratching the surface](#day5)
- [Day 6: Architect: Dependency injection](#day6)
- [Day 7: Vue.js](#day7)
- [Day 8: TypeScript](#day8)
- [Day 9: Angular 2 + TypeScript fun](#day9)
- [Day 10: React Native!](#day10)
- [Day 11: Touching on Ember.js](#day11)
- [Day 12: Next.js](#day12)
- [Day 13: R Programming](#day13)
- [Day 14: Attempt at understanding Haskell](#day14)

___

# <a name="day1"></a> Day 1: ready, set, GO lang.
To get `go`-ing, I chose to start with Go because I figured, if things go well, I could use it throughout the next 30 days as a platform on hosts like Heroku or Google App Engine.

## What I like after 1 day
The syntax seemed quickly familiar with the added difference/bonus of Type Declarations. However, the type interpolation is pretty nice in Go.

Importing dependencies is straight forward and clean.

## Learning curves:
Getting setup with the `$GOPATH` with ZSH for me took a bit of Googling and diving into Stack Overflow. After adding it to my `.zshrc` everything was fine.

The `struct` way of handling objects, and the lack of traditional classes, is a bit of a mind bend and takes time to understand, after only one day of Go, I haven't quite grasped it, yet.


Resources:
- [golang.org](https://golang.org/)
- [play.golang.org](play.golang.org)
- [Pluralsight Go fundamentals](https://app.pluralsight.com/library/courses/go-fundamentals)
- [Pluralsight Gin Go](https://app.pluralsight.com/library/courses/gin-go-web-app-framework/table-of-contents)


# <a name="day2"></a>Day 2: Hapi.js
In the spirit of setting up a web server with Go, I'm continuing the exploration around web servers with Hapi.js. Up until now, when I've needed to spin up a web server, I've almost exclusively reached for Express. Coming from Express, Getting started with Hapi was quite simple.

The setup and syntax are similar enough, and even without any familiarity with a web server platform, Hapi is quite straight forward and easy to use. I enjoy the speed and simplicity of Hapi and will likely use it in the future projects.

## Learning curves:
Some of the documentation and tutorials I was reading (unofficial) were for old versions of Hapi that had some plugins included in the "core" Hapi package, e.g., vision. Sorting that out was as quick as reading the official documentation. As with most things, reading the documentation is paramount to understanding exactly how each method should be configured; which in Hapi, can be exhaustive and will take some memorization.

Resources:
- [Hapijs.com official Tutorials](http://hapijs.com/tutorials)
- [Post example](https://github.com/paullang/hapi-post-example)
- [Pluralsight Building web applications w/ Hapi](https://app.pluralsight.com/library/courses/hapi-building-web-applications/table-of-contents)

# <a name="day3"></a>Day 3: Koa
Koa was designed by those who brought us Express and feels like Express 2.0, or how Express would have been built today. Koa is a light-weight, callback-less framework. Koa uses ES6 (ES2015) Generators for everything. There is no pre-bundled middle wear in Kia, which means everything is a plug-in—I’m noticing more and more people are adopting this bare-minimum platform pattern with plugins/modules/extensions, these days.

Koa vs. Hapi vs. Express? Numerous blogs do in-depth analysis on this topic ([Such as this one on AirPair](https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi)). In my opinion,  I don't think you can go wrong with any of the platforms; it depends on personal preference. Koa seems to be the "lightest" and being Generator based has advantages. Plus, Koa "Makes writing servers fast and enjoyable."

## Learning curves
Everything in Koa uses Generator functions, which, before this I hadn't  spent much time with in practical, real-world use. Koa is the first thing I’ve seen using Generators (and they utilized them way back before Node fully supported them) in a non-academic way. The whole architecture uses generators instead of callback functions to be light and clean; which Koa is. Once you understand how to work with Generators, and how to `yield`, building a project is straightforward and efficient.

Resources:
[Koa homepage](http://koajs.com/)
[Pluralsight Intro to Koa Js](https://app.pluralsight.com/library/courses/javascript-koa-introduction/table-of-contents)
[Koa Examples](https://github.com/koajs/examples)


# <a name="day4"></a>Day 4 - Hug API framework

Hug + Python. It took some time to figure out what to design that was API only, but once I decided to build a simple random message app, things were easy. I didn’t get in too deep into all the features I would have liked to use in Hug, but I did see some parts that I would like to explore more of, mainly custom directives.

Hug makes writing API’s simple—as promised—once you know the syntax and how to use the decorators. The automatic documentation and error handling is very nice. I had planned to integrate swagger as part of day for documentation but found it wasn’t necessary (plus I was short on time)

## Learning curves
I struggled the most with creativity in trying to design an app “API first” Technically, the setup and installation process of Python 3.3, virtualenv, and hug took time and patience.

Resources:
Hug is not an easy framework to Google. Resources were a bit scarce compared to the larger frameworks I’m used to.
- [Hug.rest quickstart](http://www.hug.rest/website/quickstart)
- [Hug.rest Learn](http://www.hug.rest/website/learn/)
- [Hug examples code, Github](https://github.com/timothycrosley/hug/tree/develop/examples)

# <a name="day5"></a>Day 5 Django: The non-templating parts
Over the last year, I’ve used Jinja2 almost daily but never got around to checking out Django. Since I’m already familiar with the tempting _style_, the goal for today was to see all the other features Django has to offer.

The Django environment—at least from my minimal experience–is a fully considered development environment with all kinds of conveniences built in for developers; like a web server and simplified interactions and queries with databases.

Django aims to make developers more productive, and I think it does that well. I would say its similar to having a well-considered development environment built on Gulp, Grunt or similar tooling stack. The difference being that it has everything you need to get started writing your app without the overhead of installing and setting up your own tooling.

## Learning curves
Not a big deal, but in Django, the term “app” doesn’t refer to the entire application, but is more similar to “module.” The nature of the Django MVT(Model View Template, a variation of MVC–Model View Controller) architecture is to have a lot of files spread out, which is a bit cumbersome in the beginning. Fully comprehending which file needs which dependency takes practice and time.

Django has many proprietary commands that are required to work with Django, such as `python manage.py sqlmigrate` which are challenging to memorize right away. A cheatsheet or more time is needed (as is with most everything) to become fluent.

Resources
- [Official Django docs](https://docs.djangoproject.com/en/1.10/intro/overview/)
- [Pluralsight Django fundamentals](https://app.pluralsight.com/library/courses/django-fundamentals/table-of-contents)

#<a name="day6"></a> Day 6: Node Architect [Dependency injection]
I’ve been looking forward to trying Architect for Node for the last month. What I’ve read sounded promising, a lightweight, node-style framework for dependency injection. In other words, a simple framework for using plug-ins within an app. This type of application architecture would be perfect for allowing third-party plug-ins to be installed to different instances of an application—think Wordpress or Slack for example. Architect does make it easy to setup dependencies and create API's from one plug-in to another; called "consumes" and "provides" within the application.

Project support for Architect is a bit lacking. While it’s still a viable framework, is not maintained in the official repository, but instead in the Coud9 core; as explained in this issue https://github.com/c9/architect/issues/48. Because of minimal support documentation is lacking. As easy and quick as Architect can be, without proper documentation, it’s hard to recommend it to someone who is looking for a speedy resolution. It takes time digging through the source code and an understanding of Node.js to figure out how to make it work.

Given an abundance of free time, I would love to write documentation for Architect and solve some of the issues around getting started. I have to wonder if it would be a worthwhile project to write my own Architect inspired, modern, dependency injection/inversion of control type framework to solve my “plug-in store” application problem.

## Learning curves.
As mentions, Documentation is pretty scarce and limited to two examples in the official GitHub repo and a handful of blogs around the internet. There should be more support and better documentation!

Resources:
- [c9/architect on Github](https://github.com/c9/architect)
- [Architecture Using Architect](https://medium.com/@ohbytheway/architecture-using-architect-8c8bb7d0277a#.lfbmvvax1)
- [Dependency injection in node js](https://mario.fyi/dependency-injection-in-node-js-and-other-architectural-patterns/)
- [Dependency injection in JS using architect](http://zedapp.org/2014/04/dependency-injection-in-javascript-using-architect/)

#<a name="day7"></a> Day 7: Vue.js!
Before jumping in to check out Vue.js, I had heard a lot of good things about the framework. After watching Evan You ([@youyuxi](https://twitter.com/youyuxi))’s talk on Vue.js, it seems that it is in line with my current thinking around how frameworks should work. In a nutshell, that is being less prescriptive, but extensible. The idea of a “progressive framework” sounds good–and in Vue.js’s case, works well. I haven’t formed a solid opinion on whether or not I like the idea of keeping all of the HTML, CSS, and JS of a component smushed in one file (in the past I’ve been against it), but so far in Vue, it works OK.

For my dip into Vue, I spent more time playing with the well-documented examples on the official site, watching the talk, and reading through the documentation and source code of Vue. I didn’t get too much hands on time with this, but it is something I look forward to re-visiting in the future.

## Learning curves
As with every framework, there is a prescribed way to do things. Setting up a new Vue project is pretty painless. The biggest hurdle is probably learning what Vue can do, how it handles it and learning to write the code to execute it.

Resources:
- [Vue.js Official guide](https://vuejs.org/v2/guide/)
- [Vue.js Talk by Evan You](https://www.youtube.com/watch?v=pBBSp_iIiVM&feature=youtu.be)

#<a name="day8"></a> Day 8: Typescript
Typescript is/can be used with Angular 2, so I wanted to spend some time working with TypeScript separate from A2.

TypeScript is essentially syntactic sugar for writing clean Javascript. An example is `namespace` and `export` which simply compile down to an immediately invoked function to keep namespaced items block scoped. This is the big take away, since TypeScript compiles to regular Javascript, the rules in TS are not held true at run time but are at compile time. TypeScript is largely (almost 100%) a developer tool for writing more descriptive code. It makes sense to reach for Typescript to keep code organized and "strict".

As a bonus, TypeScript development in VSCode is very nice.

## Learning curves
Most of what typescript offers is very straightforward. There are only a few new things to learn as far as syntax and definition go, to get started. A couple things still have me a bit confused (after only a couple of hours) and that is type declaration for Arrays and Generics–since I don’t come from a static typed language like C+ or Java.

Resources:
- [Lynda.com TypeScript essential training](https://www.lynda.com/Typescript-tutorials/TypeScript-Essential-Training/421807-2.html)
- [TypeScript in VSCode](https://code.visualstudio.com/Docs/languages/typescript)
- [TypeScript Playground](https://www.typescriptlang.org/play/index.html)

#<a name="day9"></a> Day 9: Angular 2
A couple of years ago I had small projects that ran on Angular 1.4 (I think it was 1.4). Since then, I haven’t spent any time following Angular other than simply being aware that Angular 2 came out. Today I wanted to give A2 a try coupled with my newly acquired familiarity with TypeScript.

The largest difference I noticed (from 1.4) was the setup and tooling is now much more complicated than just adding a single Angular source file. The `Package.json` and `tsconfig.json` are quite large on their own and understand what the functionality of each setting and dependency is a lot of overhead. Not to mention the tooling to build ES6 modules with System.js, Webpack, Browserify, or similar. The quick start guide is helpful, and there is a CLI tool that can help with the boilerplate code.

Frameworks as large as Angular inspire me to spend more time with them. A few hours in a single day is not enough time to experience even just the basics.

## Learning Curves
The setup and configuration overhead is a bit cumbersome. As with all comprehensive frameworks, there is going to be an investment that one needs to make in learning all of the proprietary syntax and keywords (e.g., Angular core components, decorators, “ng” keywords). Knowing Javascript well is probably a good prerequisite to Angular since some of the patterns seem complicated for a beginner—not to mention the added layer of TypeScript.

Resources:
[Official Angular 2 Quickstart](https://angular.io/docs/ts/latest/quickstart.html)
[Frontend Masters Building Angular2 Apps](https://frontendmasters.com/courses/angular-2/)
[Angular2 tutorial for beginners](https://www.youtube.com/watch?v=_-CD_5YhJTA)

#<a name="day10"></a> Day 10: React Native

React Native is more of a _platform_ than a framework and it's  powerful platform. I have little React experience, only a couple applications I’ve helped build. One of the benefits of React Native is that any knowledge you have from React web transfers over (it’s the same) and can be used to build native applications.

Writing the application code should be [is] easy to pick up for anyone used to ES6 or have a pretty strong understanding of Javascript. The ‘base’ application code or the minimum amount of setup you need to start a project isn’t overwhelming. The command line tool takes care of many tasks, including starting a new project and building the app in iOS/Android simulators (unless you break things like me)

Since I haven’t done any Android development, ever, the setup process to use [Genymotion](https://www.genymotion.com/fun-zone/) and Android SDK along with React Native ate up all the time I had devoted to the project today. On the plus side, now I have it all set-up for future projects.

## Learning curves
React Native is a solid platform and the products built on it out in the wild are proof that it's a stable platform for your project. A reoccurring them, at the risk of being too repetitive, is that large frameworks require time and experience to learn all of the proprietary commands, architecture, and nuances. Because React native is javascript with some different syntax and a less-traditional way of handling project organization (separation of HTML, CSS, JS, directory structure, etc.) it can be challenging to adopt.

Once dependencies are installed, getting the hot reloading working and the app to build and refresh in the native device simulators was troublesome.

Along those same lines, the initial setup and build process took a long time to get dependencies working properly, etc. It took me over an hour for everything.
Setup on a new machine will take time. However, if you're working with React on a regular basis, it shouldn't be a problem.

Bonus: somehow I broke `npm`, so that took more time to repair.

Resources:
- [React Native official docs](https://facebook.github.io/react-native/releases/0.24/docs/getting-started.html)
- [Android setup](https://facebook.github.io/react-native/releases/0.24/docs/android-setup.html)
- [FE Masters React](https://frontendmasters.com/courses/react-native/)

#<a name="day11"></a> Day 11: Touching on Ember.js

Ember is one of those frameworks that I’ve heard of for a long time and never took the time to explore. Ember’s “Convention over Configuration” philosophy means that with the help of the Ember CLI (command line interface), project directory structure, file name conventions, etc. are all predefined, and developers are expected to work within this convention. The strict convention could be considered an advantage, or disadvantage depending on one's personal style.

Compared to other Javascript Frameworks, I find that the Ember CLI and tooling are excellent. There are many developer conveniences included, like live a live reloading server and testing; which makes getting started developing an app, quick.

## Learning curves
The standard amount of getting used to the pre-configured, pre-architected structure of a framework is required, but the effort level is relatively low with Ember.

Mastering all of what Ember has to over will take time. I’m especially interested in spending more time with Ember Data and the way it interacts with _any_ backend and normalizes data queries

Resources:
- [FE Masters Ember](https://frontendmasters.com/courses/ember-2/)
- [Lynda Ember.js Essential Training](https://www.lynda.com/Ember-js-tutorials/Ember-js-Essential-Training/480960-2.html)
- [Official Ember starter guide](https://guides.emberjs.com/v2.9.0/tutorial/routes-and-templates/)

#<a name="day12"></a> Day 12: Next.js
Next.js is a “universal Javascript application” framework built on top of React, Webpack, and Babel. Next.js does a lot of cool things under the hood to solve a lot of performance problems often seen in other applications. One major thing Next does is automatic code splitting; this is managed through explicit dependency management with ES6 module imports—I like this a lot.

With tucking most of the framework engine under the hood, Next keeps the directory structure clean and minimal. I always appreciate clean folders and this is perfect for developers who don’t like folder cruft.

Next is brand new as of last month (Oct 2016) and under current development. It’s production ready now (Nov 2016) and while it is powerful as is, there is a promising roadmap outlined in the [official repository](https://github.com/zeit/next.js). With tooling included and only one node module to install, getting a project running with Next is extremely fast and convenient.

## Learning curves
Next is an opinionated framework. It strictly enforces patterns on how to manage pages and components–as do many frameworks. The development process is quite simple since currently, developers only need to be concerned with pages and components; which each contain explicit dependencies and markup. Getting used to this _simplified_ application architecture might take some time.

Coming from React will help a lot since Next is built on top of it. Next.js's decision to use Glamor for CSS in JavaScript can be a slight learning curve (or perceived downside) if you're not familiar or in favor of Styles in JavaScript.

Resources:
- [Official next blog](https://zeit.co/blog/next)
- [Github readme](https://github.com/zeit/next.js)
- [Glamor Repository](https://github.com/threepointone/glamor)

#<a name="day13"></a> Day 13: Taking a break from JS with R programming
R programming has a reputation for being the best language for statistical analysis. After spending a bit of time with R, I can see how easy it is to work with and how powerful it can be when used with large datasets. R can crunch numbers and show correlations as well as distributions. Additionally, R is used for Machine Learning and other things like image processing and facial recognition.

R syntax is straightforward and similar in ways to Python; which makes jumping in easy. I started with R in the terminal, tried out RStudio and VSCode with R ([Tutorial on how to setup the R process in VSCode](http://jdav.is/2015/07/28/r-with-visual-studio-code/)). As much as I currently enjoy using VSCode, for something like R, a dedicated IDE is better. RStudio has great visualizations built in (one of R’s main features!), project management, plug-in management, git, and more!

## Learning curves
If you’re not a stats person or used to working with vectors; this can take a bit of a dive plus experience to understand fully. Finding the right project or use case to become thoroughly acquainted with R programming is tricky. Since the power of R comes from processing data, getting a real dataset to practice with is key.

Resources:
- [R Tutorial](https://statsguys.wordpress.com/2014/01/03/first-post/)
- [Lynda.com Up and running with R](https://www.lynda.com/R-tutorials/Up-Running-R/120612-2.html)


#<a name="day14"></a> Day 14: Attempt at understanding Haskell!
Haskell is an interesting programming language. For a front-end web focused developer who spends most of the time in dynamically typed languages like Javascript and Python, Haskell is full of fun, new concepts. 

Among some of the more interesting of features in Haskell are the function definition syntax and emphasis on recursion. There are no `For` loops in Haskell and all _loops_ are called through recursive function calls.

## Learning Curves

The, "no loops, use recursion” philosophy is tricky. I struggled to grasp the execution of recursion in Haskell entirely. Something in which I  may come back to expand. Additionally, while not super complicated, the syntax in Haskell will take a moment to get become accustomed.

There are a handful of concepts that may be brand new, including pattern matching, cases, lambdas, pure functions, Monads, and non-overwriting function declarations.

Resources:
- [Learn You A Haskell](http://learnyouahaskell.com/chapters)
- [Syntax in Haskell](http://rigaux.org/language-study/syntax-across-languages-per-language/Haskell.html)
- [Sudoku Solver in Haskell](http://paarsgames.nl/2013/07/29/sudoku-solver-in-haskell/)
