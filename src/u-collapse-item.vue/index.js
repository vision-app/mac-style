import Emitter from 'proto-ui.vusion/src/u-emitter.vue';

export default {
    name: 'u-collapse-item',
    parentName: 'u-collapse',
    mixins: [Emitter],
    props: {
        title: String,
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentExpanded: this.expanded,
            parentVM: undefined,
        };
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
    methods: {
        toggle() {
            if (this.disabled || this.parentVM.disabled)
                return;

            this.currentExpanded = !this.currentExpanded;

            this.$emit('update:expanded', this.currentExpanded);
            this.parentVM.toggle(this);
        },
    },
};

