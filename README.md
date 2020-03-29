<p align="center"> <img src="https://github.com/nicoth-in/igniter/raw/v0.3/content/Logo.png"></p>
<h1 align="center">Igniter v0.3</h1>
<p align="center"><a href="https://github.com/nicoth-in/igniter/blob/v0.3/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a></p>
<h3 align="center"> This repo moved here https://github.com/nicoth-in/torex/ </h3>
<p align="center">Ignite your pages! Igniter is a rapid <i>frontend</i> JS framework without abstractions.
It helps you to build and manage DOM in an object-oriented programming style.</p>
<hr>

## Use

Igniter consists of two parts: core and elements. Core provides simple Node class.
Elements part adds 144 basic HTML elements.

```html
<script src="https://cdn.jsdelivr.net/gh/nicoth-in/igniter@0.3.3/src/core.dist.js"></script>
<script src="https://cdn.jsdelivr.net/gh/nicoth-in/igniter@0.3.3/src/elements.dist.js"></script>
```

## First steps

Let’s build our first app. This is the minimal solution on classes:

```js
class MyFirstApp extends Ignite.Empty {
  constructor(...args) {
    super(...args);
  }
}

let app = new MyFirstApp();
```
Now run this code. You should see nothing. Why? Actually, because we need to append element to the document. Add this line at the end:
```js
document.body.appendChild(app);
```
This code will render our app into the body, but we still get an empty page. That is because we render an empty container without any content in it. So, let’s change it.
```js
let app = new MyFirstApp("Some text");
```
Yeah, now you should see "Some text" in your body container. However, we don’t want just text. Firstly, make sure you import **elements.js** lib. If so, change the first line of the code:

```js
class MyFirstApp extends Ignite.Div {
```

This actually renders your class in div container instead of empty.

#### Note

Igniter classes aren't build on top of the DOM, they are DOM Nodes.
For example, "Div" is an Igniter class, but after construction it becomes DOM Node.
Igniter creates and re-builds DOM nodes by attaching your classes as a prototype chain.

You can learn more in [Inside Igniter framework](#Inside-Igniter-framework) section.

## Accessing element's properties

```js
let { Div, P } = Ignite;

class MyFirstApp extends Div {
  constructor(items) {
    super(items);
    this.id = "app";
    this.title = "App div";
  }
}

let app = new MyFirstApp(new P("Some text"));
document.body.appendChild(app);

```

## Events

```js
class MyFirstApp extends Div {
  constructor(items) {
    super(items);
  }
  onClick(e) {
    console.log(e);
  }
}
```
Naming is strict. Following the naming convention, all method names should be in lowerCamelCase.

You can also add listeners.

```js
var text = new P("Some text.");
text.addEventListener("click", function(ev) { console.log(ev) });
```

## Inside Igniter framework

Igniter v0.3.x is built via DOM Nodes.

![Igniter Scheme](https://github.com/nicoth-in/igniter/raw/dev/content/IgniterScheme.png "Igniter scheme")
