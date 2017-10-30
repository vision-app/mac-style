import Tabs from 'u-tabs.vue';

export default {
    name: 'u-tab-view',
    childName: 'u-tab-view-item',
    mixins: [Tabs],
    methods: {
        close(index) {
            let cancel = false;
            this.$emit('before-close', {
                index,
                tabVM: this.itemVMs[index],
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.$emit('close', {
                index,
                tabVM: this.itemVMs[index],
            });
        },
    },
};
