# TabView

## Examples
### Basic

``` html
<u-tab-view>
    <u-tab-view-item title="TabA">ContentA</u-tab-view-item>
    <u-tab-view-item title="TabB">ContentB</u-tab-view-item>
    <u-tab-view-item title="TabC">ContentC</u-tab-view-item>
</u-tab-view>
```

### Selected Index

``` html
<u-tab-view :index="2">
    <u-tab-view-item title="TabA">ContentA</u-tab-view-item>
    <u-tab-view-item title="TabB">ContentB</u-tab-view-item>
    <u-tab-view-item title="TabC">ContentC</u-tab-view-item>
</u-tab-view>
```

### Readonly & Disabled

``` html
<u-tab-view readonly>
    <u-tab-view-item title="TabA">Readonly</u-tab-view-item>
    <u-tab-view-item title="TabB">Readonly</u-tab-view-item>
    <u-tab-view-item title="TabC">Readonly</u-tab-view-item>
</u-tab-view>
<u-tab-view>
    <u-tab-view-item title="TabA">Partially Disabled</u-tab-view-item>
    <u-tab-view-item title="TabB" disabled>Partially Disabled</u-tab-view-item>
    <u-tab-view-item title="TabC">Partially Disabled</u-tab-view-item>
</u-tab-view>
<u-tab-view disabled>
    <u-tab-view-item title="TabA">All Disabled</u-tab-view-item>
    <u-tab-view-item title="TabB">All Disabled</u-tab-view-item>
    <u-tab-view-item title="TabC">All Disabled</u-tab-view-item>
</u-tab-view>
```

### Hidden

``` html
<u-tab-view :index="2">
    <u-tab-view-item title="TabA">ContentA</u-tab-view-item>
    <u-tab-view-item title="TabB" hidden>ContentB</u-tab-view-item>
    <u-tab-view-item title="TabC">ContentC</u-tab-view-item>
</u-tab-view>
```
