export default {
    name: 'u-pallette',
    props: {
        color: {
            type: String,
            default: '#000000',
        },
    },
    data() {
        return {
            color_: this.color,
            r: 0,
            g: 0,
            b: 0,
            a: 1,
            h: 0,
            s: 0,
            v: 0,
        };
    },
    watch: {
        color(color) {
            this.color_ = color;
        },
        color_(color) {
            if (color[0] === '#') {
                const hex = color.slice(1);
                this.r = parseInt(hex.slice(0, 2), 16);
                this.g = parseInt(hex.slice(2, 4), 16);
                this.b = parseInt(hex.slice(4, 6), 16);
            }
        },
    },
};
