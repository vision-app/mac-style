import Vue from 'vue';

import ListView from './src/u-list-view.vue';
import ListViewItem from './src/u-list-view-item.vue';
import Titlebar from './src/u-titlebar.vue';
import TabView from './src/u-tab-view.vue';
import TabViewItem from './src/u-tab-view-item.vue';
import Panel from './src/u-panel.vue';
import ColorPicker from './src/u-color-picker.vue';

const Components = {
    ListView,
    ListViewItem,
    Titlebar,
    TabView,
    TabViewItem,
    Panel,
    ColorPicker,
};

window.Vue = Vue;
Object.keys(Components).forEach((key) => Vue.component(Components[key].options.name, Components[key]));


export {
    ListView,
    ListViewItem,
    Titlebar,
    TabView,
    TabViewItem,
    Panel,
    ColorPicker,
};
