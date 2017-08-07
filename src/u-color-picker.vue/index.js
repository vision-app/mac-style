export default {
    name: 'u-color-picker',
    props: {
        color: {
            type: String,
            default: '#000000',
        },
    },
    data() {
        return {
            color_: this.color,
        };
    },
    watch: {
        color: {
            immediate: true,
            handler(color) {
                if (color[0] === '#' && color.length < 7)
                    this.color_ = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
                else
                    this.color_ = color;
            },
        },
    },
    methods: {
        onChange(e) {
            this.color_ = e.target.value;

            this.$emit('change', {
                value: this.color_,
            });
        },
    },
};
