# 标签页（TabView）

## 示例
### 基本形式

``` html
<u-tab-view>
    <u-tab-view-item title="TabA">ContentA</u-tab-view-item>
    <u-tab-view-item title="TabB">ContentB</u-tab-view-item>
    <u-tab-view-item title="TabC">ContentC</u-tab-view-item>
</u-tab-view>
```

### Value

``` html
<u-tab-view value="B">
    <u-tab-view-item title="TabA" value="A">ContentA</u-tab-view-item>
    <u-tab-view-item title="TabB" value="B">ContentB</u-tab-view-item>
    <u-tab-view-item title="TabC" value="C">ContentC</u-tab-view-item>
</u-tab-view>
```

### 只读和禁用

``` html
<u-tab-view readonly>
    <u-tab-view-item title="TabA">Readonly</u-tab-view-item>
    <u-tab-view-item title="TabB">Readonly</u-tab-view-item>
    <u-tab-view-item title="TabC">Readonly</u-tab-view-item>
</u-tab-view>
<u-tab-view disabled>
    <u-tab-view-item title="TabA">Disabled All</u-tab-view-item>
    <u-tab-view-item title="TabB">Disabled All</u-tab-view-item>
    <u-tab-view-item title="TabC">Disabled All</u-tab-view-item>
</u-tab-view>
<u-tab-view>
    <u-tab-view-item title="TabA">Disabled Partially</u-tab-view-item>
    <u-tab-view-item title="TabB" disabled>Disabled Partially</u-tab-view-item>
    <u-tab-view-item title="TabC">Disabled Partially</u-tab-view-item>
</u-tab-view>
```

### 隐藏部分项

``` html
<u-tab-view value="2">
    <u-tab-view-item title="TabA" value="0">ContentA</u-tab-view-item>
    <u-tab-view-item title="TabB" value="1" hidden>ContentB</u-tab-view-item>
    <u-tab-view-item title="TabC" value="2">ContentC</u-tab-view-item>
</u-tab-view>
```

### 可关闭

``` html
<u-tab-view closable>
    <u-tab-view-item title="TabA">ContentA</u-tab-view-item>
    <u-tab-view-item title="TabB">ContentB</u-tab-view-item>
    <u-tab-view-item title="TabC">ContentC</u-tab-view-item>
    <u-tab-view-item title="TabD">ContentD</u-tab-view-item>
    <u-tab-view-item title="TabE">ContentE</u-tab-view-item>
</u-tab-view>
```


### 路由

``` html
<u-tab-view router>
    <u-tab-view-item title="Button" to="u-button">Button Content</u-tab-view-item>
    <u-tab-view-item title="Checkbox" to="u-checkbox">Checkbox Content</u-tab-view-item>
    <u-tab-view-item title="Tabs" to="u-tab-view">Tabs Content</u-tab-view-item>
</u-tab-view>
```

### 额外的

``` html
<u-tab-view value="1">
    <u-tab-view-item title="TabA" value="0">ContentA</u-tab-view-item>
    <u-tab-view-item title="TabB" value="1">ContentB</u-tab-view-item>
    <u-tab-view-item title="TabC" value="2">ContentC</u-tab-view-item>
    <u-checkbox slot="extra">All</u-checkbox>
</u-tab-view>
```

## Tabs API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 选中标签页的值 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| closable | Boolean | `false` | 是否可以关闭 |
| router | Boolean | `false` | 是否根据vue-router对应的路由进行高亮显示 |

### Slots

#### (default)

在插槽中插入`<u-tab-view-item>`子组件

#### extra

在标签右侧可以附加组件

### Events

#### @before-select

选择某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 选中标签页实例 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @select

选择某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 选中标签页实例 |

#### @before-close

关闭某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 待关闭标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 待关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭流程 |

#### @close

关闭某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 关闭的标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭后自动选择页的流程 |

## Tab API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 标签页标题 |
| value | Any | | 标签页的值 |
| hidden | Boolean | `false` | 是否隐藏此标签页 |
| disabled | Boolean | `false` | 是否禁用此标签页 |
| to | String \| Object | | vue-router的目标链接 |
| replace | Boolean | `false` | 当切换路由时，调用`router.replace()`，而不是`router.push()` |
| exact | Boolean | `false` | 是否精确匹配 |

### Slots

#### (default)

在插槽中插入文本或HTML
