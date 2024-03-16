# 关于 BFC

> [!note] 官方文档
> [Block and inline layout in normal flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)

## 什么是 BFC

BFC，block formatting context，块级格式化上下文。官方是这样说的：

> 在一个块格式区域中，盒子会从包含块的顶部开始，按序垂直排列。同级盒子间的垂直距离会由“margin”属性决定。相邻两个块级盒子之间的垂直间距会遵循外边距折叠原则被折叠。
>
> 在一个块格式区域中，每个盒子的左外边缘会与包含块左边缘重合（如果是从右到左的排版顺序，则盒子的右外边缘与包含块右边缘重合）。
>
> 对与内敛格式区域中的元素：
>
> 在内联格式区域中，盒子会从包含块的顶部开始，按序水平排列。只有水平外边距、边框和内边距会被保留。这些盒子可以以不同的方式在垂直方向上对齐：可以底部对齐或顶部对其，或者按文字底部进行对齐。我们把包含一串盒子的矩形区域称为一个线条框。

总结起来就是以下几条：

-   BFC 中的盒子会从包含块的顶部开始，按序垂直排列
-   垂直方向的间距由 margin 决定
-   同一个 BFC 中，相邻盒子的垂直外边距 margin 会发生折叠 collapse
-   BFC 中的盒子左外边缘会与包含块的左外边缘重合

BFC 能解决两个问题，一是外边距折叠，二是清除浮动。

### 外边距折叠

两个 box 的外边距发生重叠，重叠后的外边距为两者中的最大值。那么如果两个 box 在不同的 BFC 中，就不会发生外边距折叠。

### 清除浮动

BFC 解决浮动元素引起的高度塌陷问题取决于两个先决条件，第一，是浮动元素的父元素触发形成 BFC；第二，是浮动元素的父元素的高度是 `auto`。

> **10.6.7 'Auto' heights for block formatting context roots**
>
> In certain cases (see, e.g., sections 10.6.4 and 10.6.6 above), the height of an element that establishes a block formatting context is computed as follows:
>
> If it only has inline-level children, the height is the distance between the top of the topmost line box and the bottom of the bottommost line box.
>
> If it has block-level children, the height is the distance between the top margin-edge of the topmost block-level child box and the bottom margin-edge of the bottommost block-level child box.
>
> Absolutely positioned children are ignored, and relatively positioned boxes are considered without their offset. Note that the child box may be an anonymous block box.
>
> In addition, if the element has any floating descendants whose bottom margin edge is below the element's bottom content edge, then the height is increased to include those edges. Only floats that participate in this block formatting context are taken into account, e.g., floats inside absolutely positioned descendants or other floats are not.
>
> https://www.w3.org/TR/CSS2/visudet.html

当 BFC 的高度为 `auto` 时，计算高度的算法如下：

-   如果只有内联级别的子元素，高度为最高和最低行框之间的距离
-   如果有块级别的子元素，高度为最高和最低块级子元素之间的距离
-   绝对定位的子元素不参与计算，相对定位的子元素不考虑偏移
-   如果有浮动的子元素，高度会增加以包括这些浮动元素

## 如何触发 BFC

-   float 不为 none
-   position 不为 static 或 relative
-   display 为 inline-block, table-cell, table-caption, flex, inline-flex
-   overflow 不为 visible

## BFC 实现自适应两栏布局

::: code-group

```html
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
</div>
```

```css
.container {
    overflow: hidden; // 触发 BFC
}
.left {
    float: left;
    width: 200px;
    height: 200px;
    background-color: red;
}
.right {
    overflow: hidden;
    background-color: blue;
}
```

:::

<auto-dark />

<q-card class="no-bg mb-shadow" style="height: 200px; overflow: hidden">
    <q-card flat class="full-height no-bg" style="width: 200px; border-right: 1px solid #ddd" />
    <q-card flat class="full-height no-bg" style="overflow: hidden" />
</q-card>
