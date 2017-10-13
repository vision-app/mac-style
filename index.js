import './src/u-base.vue/base.css';
import Base from './src/u-base.vue';
import Button from './src/u-button.vue';
import ColorPicker from './src/u-color-picker.vue';
import Capsules from './src/u-capsules.vue';
import Capsule from './src/u-capsule.vue';
import LinearLayout from './src/u-linear-layout.vue';
import ListView from 'u-list-view.vue';
import ListViewItem from './src/u-list-view-item.vue';
import Pallette from './src/u-pallette.vue';
import Panel from './src/u-panel.vue';
import Tab from 'u-tab.vue';
import TabView from './src/u-tab-view.vue';
import TabViewItem from './src/u-tab-view-item.vue';
import Tabs from './src/u-tabs.vue';
import Titlebar from './src/u-titlebar.vue';
import TreeView from 'u-tree-view.vue';
import TreeViewNode from './src/u-tree-view-node.vue';

const Components = {
    Base,
    Button,
    Capsules,
    Capsule,
    ColorPicker,
    LinearLayout,
    ListView,
    ListViewItem,
    Pallette,
    Panel,
    Tab,
    TabView,
    TabViewItem,
    Tabs,
    Titlebar,
    TreeView,
    TreeViewNode,
};

export {
    Base,
    Button,
    Capsules,
    Capsule,
    ColorPicker,
    LinearLayout,
    ListView,
    ListViewItem,
    Pallette,
    Panel,
    Tab,
    TabView,
    TabViewItem,
    Tabs,
    Titlebar,
    TreeView,
    TreeViewNode,
};

const Library = {
    install(Vue) {
        Object.keys(Components).forEach((key) => Vue.component(Components[key].name, Components[key]));
    },
};

export default Library;
