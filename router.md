###单页面应用路由实现原理
#### 为什么需要路由
最开始网页是多页面，由于ajax的出现，局部刷新走上历史舞台，单页面程序应运而生，但是单页程序存在一定弊端
- 用户体验极差：用户在使用过程中，url 不会发生变化，那么用户在进行多次跳转之后，如果一不小心刷新了页面，又会回到最开始的状态，
- 不利于SEO：缺乏路由，不利于搜索引擎进行收录。
#### 单页路由解决方案
- hash路由
 ```
    url 上的 hash 以 # 开头，原本是为了作为锚点，方便用户在文章导航到相应的位置。因为 hash 值的改变不会引起页面的刷新，聪明的程序员就想到用 hash 值来做单页面应用的路由，并且当 url 的 hash 发生变化的时候，可以触发相应 hashchange 回调函数。
 ```
 举例：angular 路由


- history路由
```
    History 路由是基于 HTML5 规范，在 HTML5 规范中提供了 history.pushState || history.replaceState 来进行路由控制。
    当你执行 history.pushState({}, null, '/about') 时候，页面 url 会从 http://xxxx/ 跳转到 http://xxxx/about 可以在改变 url 的同时，并不会刷新页面。
```
举例：react 路由
  