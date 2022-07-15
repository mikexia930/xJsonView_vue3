# x-json-view-vue

[Demo](https://mikexia930.github.io/xJsonView/)

### 版本
***
* v1.0.0

### 基于
***
* vue3
* recursion

### 安装
***
````
npm install x-json-view-vue3
````

### 使用
***
**在main.js中引入**
````
import xJsonView from 'x-json-view-vue3';
vue.use(xJsonView);

// 组件内使用
import { xJsonView } from 'x-json-view-vue3';
````

**组件中使用**
````
 <x-json-view
  :wrap-class="'x-json-view'"
  :show-depth="1"
  :json-data="jsonData"
  :is-show-err-notice="false"
  @handleJsonView="handleJsonView"
>
  <template slot="open">+</template>
  <template slot="close">-</template>
</x-json-view>
````

### 说明
***
| 参数 | 类型 | 说明 |
| ------ | ------ | ------ |
|wrapClass| string | 最外层的className |
| showDepth | number | 初始展开json的深度 -1:全部关闭，0：打开第一层，1：打开第二层 ... |
| jsonData | string | json格式的字符串
| isShowErrNotice | boolean | 是否显示默认报错信息，错误也会从子组件emit出来，type=parseError |
| handleJsonView | function | emit的接收方法 |
| open | slot | 打开的按钮slot |
| close | slot | 关闭的按钮slot |

### 样式说明
***
````
<div class=wrapClass>
    <div>
        <p>
            <span>
                node-name
                <span>:</span>
            <span>
            <span>
                <span class="node-switch">switch-button</span>
                { | [
            </span>
        <p>
        <div class="npde-list">
            <span>
                node-name
                <span>:</span>
            <span>
            <span class="stringColor | numberColor | booleanColor | nullColor">
                node-value
                <span>,</span>
            </span>
        </div>
    </div>
</div>
````
***
**样式示例 less**
````
/deep/ .x-parse-view {
    .node-list {
        margin-left: 25px; // 设置节点的缩进宽度
    }
    .node-switch {
        cursor: pointer; // 设置开关按钮的样式
    }
    div > p {
        height: 25px; // 设置节点的高度
        >span:nth-child(2) {
            padding-left: 10px; // 设置节点key和value之间的距离
        }
        .stringColor{
            color: #3ab54a; // value为字符串类型的颜色
        }
        .numberColor{
            color: #25aae2; // value为数值类型的颜色
        }
        .booleanColor{
            color: #f98280;  // value为布尔类型的颜色
        }
        .nullColor{
            color: #f1592a;  // value为null类型的颜色
        }
    }
}
````
