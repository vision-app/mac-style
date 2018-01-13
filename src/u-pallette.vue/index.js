import { Field } from 'proto-ui.vusion';
import Color from './Color';

export default {
    name: 'u-pallette',
    mixins: [Field],
    props: {
        value: { type: String, default: '#000000' },
        // @TODO:
        format: { type: String, default: 'hex,rgba', validator: (value) => [
            'name,hex,rgba',
            'name,hex,hsla',
            'hex,rgba',
            'hex,hsla',
            'rgba',
            'hsla',
        ].includes(value.toLowerCase()) },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            color: Color.parse(this.value),
            grid: { x: 1, y: 1 },
            handleEl: undefined,
        };
    },
    computed: {
        hueColor() {
            const color = new Color();
            color.setHSV(this.color.h, 100, 100);
            return color;
        },
    },
    watch: {
        value(value, oldValue) {
            const color = Color.parse(this.value);
            if (color.toRGBA() === this.color.toRGBA())
                return;

            this.color = color;
            this.handleEl.style.left = this.color.s + '%';
            this.handleEl.style.top = this.color.v + '%';

            this.$emit('change', {
                value,
                oldValue,
            });
        },
    },
    mounted() {
        this.handleEl = this.$refs.handle;
        this.handleEl.style.left = this.color.s + '%';
        this.handleEl.style.top = this.color.v + '%';
    },
    methods: {
        onDrag($event) {
            this.color.setHSV(this.color.h, $event.left / $event.range.width * 100, (1 - $event.top / $event.range.height) * 100);
            this.onInput();
        },
        setHEX(hex) {
            const color = Color.fromHEX(hex);
            this.color.setRGB(color.r, color.g, color.b);
        },
        setHue(hue) {
            this.color.setHSV(hue, this.color.s, this.color.v);
        },
        onInput() {
            let value;
            if (this.format === 'hex,rgba') {
                if (this.color.a)
                    value = this.color.toHEX();
                else
                    value = this.color.toRGBA();
            }

            this.$emit('input', value);
            this.$emit('update:value', value);
        },
    },
};
