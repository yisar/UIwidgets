# js-slider

> A simple slider use native js but not jquery

```html
<div id="wrap">
  <ul class="imgs">
    <li><img src="./static/1.png" /></li>
    <li><img src="./static/2.jpg" /></li>
    <li><img src="./static/3.jpg" /></li>
  </ul>
  <div class="dots">
    <b class="active"></b>
    <b></b>
    <b></b>
  </div>
  <div class="prev"></div>
  <div class="next"></div>
</div>
```

```js
new Slider({
  width: 400,
  loop: true,
  node: document.getElementById('wrap'),
})
```

## about me

- blog: [伊撒尔の罗德欧加](http://www.yisaer.com)
- weibo: [@世界倒数第一公主殿下](http://weibo.com/oreshura)

### screenshot

![GIF.gif](https://i.loli.net/2018/04/14/5ad20ad26641d.gif)
