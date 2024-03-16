# 论 html5

html5 是 html 最新稳定版本。html5 更新了很多新的特性，已经不支持 ie8 以下的浏览器。

## 新特性

总的来说，html5 的新特性有以下几种：

-   新的语义化标签
-   新的表单元素
-   新的媒体元素
-   新的图形元素
-   新的 api
-   新的存储机制
-   新的通信机制
-   新的离线和应用

## 新的语义化标签

html5 新增了很多新的语义化标签，比如 `header`、`footer`、`nav`、`article`、`section`、`aside`、`figure`、`figcaption` 等。

语义化是指用正确的标签来表示正确的内容。html5 的新标签能够更好的表示页面的内容，也能够更好的支持搜索引擎的抓取。

语义化标签的优点：

-   更好的搜索引擎优化 SEO
-   更好的可访问性 A11Y
-   更好的可维护性和可读性
-   更好的可重用性和可扩展性
-   在没有样式的情况下，也能够更好的显示内容

| 标签       | 说明                    |
| ---------- | ----------------------- |
| header     | 定义文档的头部区域      |
| footer     | 定义文档的尾部区域      |
| nav        | 定义导航链接的部分      |
| article    | 定义文章的部分          |
| section    | 定义文档的某个区域      |
| aside      | 定义内容之外的内容      |
| figure     | 定义媒体内容的区域      |
| figcaption | 定义 figure 元素的标题  |
| details    | 定义详情的区域          |
| summary    | 定义 details 元素的标题 |
| dialog     | 定义对话框              |
| main       | 定义文档的主要内容      |
| mark       | 定义高亮的文本          |
| time       | 定义日期和时间          |

<auto-dark />

<show-image src="/img/论 html5-1.png"/>

## 新的表单元素

html5 新增了一些新特性，能够更好的支持表单的输入。

### 定义颜色输入

```html
<input type="color" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="color" />
    </q-card-section>
</q-card>

### 定义日期输入

```html
<input type="date" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="date" />
    </q-card-section>
</q-card>

### 定义日期时间输入

```html
<input type="datetime-local" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="datetime-local" />
    </q-card-section>
</q-card>

### 定义邮箱输入

```html
<input type="email" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="email" placeholder="input your email" />
    </q-card-section>
</q-card>

### 定义文件输入

```html
<input type="file" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="file" />
    </q-card-section>
</q-card>

### 定义月份输入

```html
<input type="month" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="month" />
    </q-card-section>
</q-card>

### 定义数字输入

```html
<input type="number" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="number" placeholder="input your number" />
    </q-card-section>
</q-card>

### 定义密码输入

```html
<input type="password" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="password" placeholder="input your password" />
    </q-card-section>
</q-card>

### 定义电话输入

```html
<input type="tel" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="tel" placeholder="input your phone" inputmode="tel" />
    </q-card-section>
</q-card>

### 定义搜索输入

```html
<input type="search" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="search" placeholder="input your search" />
    </q-card-section>
</q-card>

### 定义 url 输入

```html
<input type="url" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="url" placeholder="input your url" />
    </q-card-section>
</q-card>

### 定义周输入

```html
<input type="week" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="week" />
    </q-card-section>
</q-card>

### 定义范围输入

```html
<input type="range" />
```

<q-card flat bordered>
    <q-card-section>
        <input type="range" />
    </q-card-section>
</q-card>

## 新的媒体元素

html5 新增了一些新的媒体元素，能够更好的支持媒体的播放。

### 定义音频

| 属性     | 说明                                 |
| -------- | ------------------------------------ |
| src      | 规定音频文件的 URL                   |
| controls | 规定音频播放器                       |
| autoplay | 规定音频在页面加载后是否应该开始播放 |
| muted    | 规定音频是否应该被静音               |
| preload  | 规定音频在页面加载后是否应该进行加载 |

```html
<audio controls>
    <source
        src="http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3"
        type="audio/mpeg"
    />
    您的浏览器不支持 audio 标签。 // 如果浏览器不支持 audio 标签，则显示这段文字
</audio>
```

<q-card flat bordered>
    <q-card-section>
        <audio controls>
            <source src="http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" type="audio/mpeg" />
            您的浏览器不支持 audio 标签。
        </audio>
    </q-card-section>
</q-card>

### 定义视频

| 属性     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| src      | 规定视频文件的 URL                                           |
| width    | 规定视频播放器的宽度                                         |
| height   | 规定视频播放器的高度                                         |
| controls | 规定视频播放器应该拥有控件（比如播放/暂停按钮）              |
| autoplay | 规定视频在页面加载后是否应该开始播放                         |
| muted    | 规定视频是否应该被静音                                       |
| preload  | 规定视频在页面加载后是否应该进行加载                         |
| poster   | 规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像 |

```html
<video controls>
    <source
        src="https://media.w3.org/2010/05/sintel/trailer.mp4"
        type="video/mp4"
    />
    您的浏览器不支持 video 标签。 // 如果浏览器不支持 video 标签，则显示这段文字
</video>
```

<q-card flat bordered>
        <video controls>
            <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
            您的浏览器不支持 video 标签。
        </video>
</q-card>

## 新的图形元素

html5 新增了一些新的图形元素，能够更好的支持图形的绘制。

### 定义画布

```html
<canvas
    id="myCanvas"
    width="200"
    height="100"
    style="border: 1px solid #000000;"
>
    您的浏览器不支持 canvas 标签。 // 如果浏览器不支持 canvas
    标签，则显示这段文字
</canvas>

<script>
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
</script>
```

<q-card flat bordered>
    <q-card-section>
        <canvas id="myCanvas" width="200" height="100" style="border: 1px solid #000000;">
            您的浏览器不支持 canvas 标签。
        </canvas>
    </q-card-section>
</q-card>

## 新的 api

通过 getCurrentPosition() 方法来获取用户的地理位置。

### 定义地理位置

```html
<button onclick="getLocation()">获取地理位置</button>

<script>
    // alert
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        alert(
            "Latitude: " +
                position.coords.latitude +
                " | Longitude: " +
                position.coords.longitude
        );
    }
</script>
```

<q-btn flat @click="getLocation()">获取地理位置</q-btn>

### 定义拖放

html5 将拖放的 api 作为标准，可以通过拖放 api 来实现拖放功能。任意 html 元素都可以被拖放。

```html
<div
    id="drag1"
    draggable="true"
    @dragstart="drag"
    style="width: 100px; height: 100px; background-color: red;"
>
    拖放我
</div>

<div
    id="div1"
    ondrop="drop(event)"
    ondragover="allowDrop(event)"
    style="width: 100px; height: 100px; background-color: yellow;"
>
    放在这里
</div>

<script>
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    }
</script>
```

<q-card flat bordered>
    <q-card-section>
        <q-btn
            outline
            class="q-mb-md"
            id="drag1"
            draggable="true"
            @dragstart="drag"
        >
            拖放我
        </q-btn>
        <q-card
            id="div1"
            @drop="drop"
            @dragover="allowDrop"
            style="width: 100px; height: 100px"
            class="mb-shadow"
        >
            放在这里
        </q-card>
    </q-card-section>
</q-card>

## 新的存储机制

### 定义本地存储

新增了 localStorage 和 sessionStorage 两种存储机制。并非作为取缔 cookie 的替代方案，而是作为新的方案。

根据 HTML5 标准，localStorage 和 sessionStorage 的存储空间更大了，但因为每种浏览器的实现不同，所以具体的存储空间大小也不同。移动端和桌面端的存储空间也不同。

localStorage 和 sessionStorage 的区别：

-   localStorage 存储的数据没有过期时间，sessionStorage 存储的数据在页面会话结束时会被清除。

```javascript
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");
```

### 定义离线存储

新增了 applicationCache 和 manifest 两种离线存储机制。

```html
<!DOCTYPE html>
<html manifest="demo.appcache">
    <body>
        <p>请关闭网络后刷新页面</p>
    </body>
</html>
```

## 新的通信机制

### 定义服务器发送事件

新增了服务器发送事件，用于接收服务器发送的事件。

```html
<div>
    <h1>服务器发送事件</h1>
    <div id="result"></div>
</div>

<script>
    if (typeof EventSource !== "undefined") {
        var source = new EventSource("demo_sse.php");
        source.onmessage = function (event) {
            document.getElementById("result").innerHTML += event.data + "<br>";
        };
    } else {
        document.getElementById("result").innerHTML =
            "对不起，您的浏览器不支持服务器发送事件...";
    }
</script>
```

### 定义 websockets

新增了 websockets，用于实现浏览器和服务器的全双工通信。

```html
<div>
    <h1>websockets</h1>
    <div id="result"></div>
</div>

<script>
    var ws = new WebSocket("wss://echo.websocket.org");
    ws.onopen = function () {
        ws.send("Hello, Server");
    };
    ws.onmessage = function (evt) {
        document.getElementById("result").innerHTML = evt.data;
    };
    ws.onclose = function () {
        document.getElementById("result").innerHTML = "连接已关闭...";
    };
</script>
```

## 新的离线和应用

### 定义离线检测

新增了 online 和 offline 事件，用于检测网络的连接状态。

```html
<div>
    <h1>离线检测</h1>
    <p id="demo"></p>
</div>

<script>
    window.addEventListener("online", function () {
        document.getElementById("demo").innerHTML = "网络已连接";
    });

    window.addEventListener("offline", function () {
        document.getElementById("demo").innerHTML = "网络已断开";
    });
</script>
```

<script setup>
    import { Notify } from "quasar";
    // 获取地理信息位置
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const showPosition = (position) => {
        Notify.create({
            message: `Latitude: ${position.coords.latitude} | Longitude: ${position.coords.longitude}`,
            color: "primary",
            position: "top",
            icon: "location_on",
        });
    };

    // 拖放
    const allowDrop = (ev) => {
        ev.preventDefault();
    };

    const drag = (ev) => {
        ev.dataTransfer.setData("Text", ev.target.id);
    };

    const drop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    };
</script>
