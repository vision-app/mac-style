import { Field } from 'proto-ui.vusion';
import Color from './Color';

export default {
    name: 'u-pallette',
    mixins: [Field],
    props: {
        value: { type: String, default: '#123456' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            color: Color.parse(this.value),
            hsvColor: undefined,
            hueColor: new Color(),
            grid: { x: 1, y: 1 },
            handleEl: undefined,
        };
    },
    computed: {
        hsv() {
            console.log('hsv');
            return this.color.getHSV();
        },
        // hueColor() {
        //     return Color.this.hsv.h
        // },
    },
    watch: {
        value(value) {
            this.color = Color.parse(this.value);
            this.handleEl.style.left = this.hsv.s + '%';
            this.handleEl.style.top = this.hsv.v + '%';
        },
        color: {
            deep: true,
            immediate: true,
            handler(color) {
                this.hsvColor = this.color.getHSV();
                this.hueColor.setHSV(this.hsvColor.h, 100, 100);
            },
        },
    },
    mounted() {
        // console.log(this.color);
        this.handleEl = this.$refs.handle;
        this.handleEl.style.left = this.hsv.s + '%';
        this.handleEl.style.top = this.hsv.v + '%';
    },
    methods: {
        onDragStart($event) {
            this.color.setHSV(this.hsv.h, $event.left / $event.range.width * 100, (1 - $event.top / $event.range.height) * 100);
        },
        onDrag($event) {
            this.color.setHSV(this.hsv.h, $event.left / $event.range.width * 100, (1 - $event.top / $event.range.height) * 100);
        },
        setHue(hue) {
            this.color.setHSV(hue, this.hsv.s, this.hsv.v);
        },
    },
};
