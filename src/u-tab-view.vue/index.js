import Base from 'u-base.vue';

const TabView = Base.extend({
    name: 'u-tab-view',
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
