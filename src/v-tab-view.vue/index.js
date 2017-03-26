import Base from 'v-base.vue';

const TabView = Base.extend({
    name: 'v-tab-view',
    data() {
        return {
            selectedIndex: 0,
        }
    },
    computed: {
        selectedItem() {
            return this.$children[this.selectedIndex];
        },
    },
});

export default TabView;
