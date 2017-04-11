import Base from 'u-base.vue';

const TabViewItem = Base.extend({
    name: 'u-tab-view-item',
    props: {
        title: String,
    },
    computed: {
        visible() {
            /**
             * @QUESTION
             * Using `$parent.selectedItem === this` in template has no effect.
             * Check whether it is a bug of Vue.
             */
            return this.$parent.selectedItem === this;
        },
    },
});

export default TabViewItem;
