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

<!-- react-component-api -->
#### Props
<table>
<thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>default</th>
        <th>default</th>
    </tr>
</thead>
<tbody>
        <tr>
            <td>onScroll</td>
            <td>func</td>
            <td>false</td>
            <td>scrollTop &#x3D;&gt; {}</td>
            <td>called with param scrollTop on scroll</td>
        </tr>
        <tr>
            <td>height</td>
            <td>number</td>
            <td>false</td>
            <td>300</td>
            <td>height of the image</td>
        </tr>
        <tr>
            <td>image</td>
            <td>string</td>
            <td>false</td>
            <td>&#x27;http://loremflickr.com/800/200/cat&#x27;</td>
            <td>URL of the image</td>
        </tr>
        <tr>
            <td>className</td>
            <td>string</td>
            <td>false</td>
            <td>&#x27;StretchyHeader&#x27;</td>
            <td>className(s) for this component</td>
        </tr>
</tbody>
</table>
<!-- react-component-api:end -->

![action on iOS](https://github.com/konsumer/react-stretchy-header/raw/master/action.gif)

<small>This looks more jerky than it is.</small>

## thanks

I got a lot of ideas from [here](http://rich.k3r.me/blog/2016/04/11/stretchy-image-headers-in-cordova/).