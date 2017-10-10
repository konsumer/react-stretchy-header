# react-stretchy-header

A stretchy image-header for react (DOM), like that seen on ios-native.

There is a demo [here](http://konsumer.js.org/react-stretchy-header/), but you'll need to view it on iphone to see the effect.


## usage

```
npm i -S react-stretchy-header
```

Then, in your code:

```js
import StretchyHeader from 'react-stretchy-header'

const App = () => (<div>
  <StretchyHeader height={200}  image='http://lorempixel.com/600/300/cats/'>
    <div>CONTENT GOES HERE</div>
  <StretchyHeader>
</div>)

```

![action on iOS](https://github.com/konsumer/react-stretchy-header/raw/master/action.gif)

## thanks

I got a lot of ideas from [here](http://rich.k3r.me/blog/2016/04/11/stretchy-image-headers-in-cordova/).