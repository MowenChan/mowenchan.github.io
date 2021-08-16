---
sidebar_position: -1
---

## flexbox

### flex-direction

```text
//row||row-reverse
<--Main Axis-->
 [A][B][C][D]

//column||column-reverse
[A] ^
[B] |
[C] Main Axis
[D] |
[E] v
```

```html
<div class="flex-box">
  <div></div>
</div>
<style>
  .flex-box {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
  }
  .flex-item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }
</style>
```

## grid

## transform

[学习更多](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)|
[参考](https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/)

transform: matrix(a,b,c,d,e,f);

```
                      [a,c,e]
matrix(a,b,c,d,e,f)-->[b,d,f]
                      [0,0,1]

[a,c,e]   [x]   [ax+cy+e]
[b,d,f] . [y] = [bx+dy+f]
[0,0,1]   [1]   [00+00+1]

(x,y,1)->matrix(a,b,c,d,e,f)=(ax+cy+e , bx+dy+f , 1)
```

transform: translate(a,b);

```
transform: translate(a,b)=transform: matrix(1, 0, 0, 1, a, b);
```


transform: scale(sx, sy);

```
transform: scale(sx, sy);=transform: matrix(sx, 0, 0, sy, 0, 0)
```

transform: rotate(θ);

```
transform: matrix(cosθ,sinθ,-sinθ,cosθ,0,0)
```

transform: skew(θx，θy);

```
transform: skew(θx，θy)=transform: matrix(1,tan(θy),tan(θx),1,0,0)
```
