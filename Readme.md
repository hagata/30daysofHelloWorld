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


#<a name="day4"></a> Day 4 - Hug API framework

Hug + Python. It took some time to figure out what to design that was API only, but once I decided to build a simple random message app, things were easy. I didn’t get in too deep into all the features I would have liked to use in Hug, but I did see some parts that I would like to explore more of, mainly custom directives.

Hug makes writing API’s simple—as promised—once you know the syntax and how to use the decorators. The automatic documentation and error handling is very nice. I had planned to integrate swagger as part of day for documentation but found it wasn’t necessary (plus I was short on time)

## Learning curves
I struggled the most with creativity in trying to design an app “API first” Technically, the setup and installation process of Python 3.3, virtualenv, and hug took time and patience.

Resources:
Hug is not an easy framework to Google. Resources were a bit scarce compared to the larger frameworks I’m used to.
- [Hug.rest quickstart](http://www.hug.rest/website/quickstart)
- [Hug.rest Learn](http://www.hug.rest/website/learn/)
- [Hug examples code, Github](https://github.com/timothycrosley/hug/tree/develop/examples)
