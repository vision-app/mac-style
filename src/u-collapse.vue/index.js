export default {
    name: 'u-collapse',
    childName: 'u-collapse-item',
    props: {
        disabled: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
    },
    data() {
        return {
            itemVMs: [],
        };
    },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
    },
    methods: {
        toggle(toggledVM) {
            this.accordion && this.itemVMs.forEach((itemVM) => itemVM !== toggledVM && (itemVM.currentExpanded = false));
        },
    },
};
