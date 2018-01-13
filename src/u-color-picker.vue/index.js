export default {
    name: 'u-color-picker',
    props: {
        value: { type: String, default: '#000000' },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(value) {
            this.currentValue = this.value;
        },
        currentValue(value, oldValue) {
            this.$emit('change', {
                value,
                oldValue,
            });
        },
    },
    methods: {
        onInput(value) {
            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('update:value', value);
        },
    },
};
