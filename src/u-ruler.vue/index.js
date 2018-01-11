export default {
    name: 'u-ruler',
    props: {
        width: { type: Number, default: 200 },
        height: { type: Number, default: 200 },
        step: { type: Number, default: 10 },
    },
    computed: {
        scalesX() {
            const scales = [];
            for (let i = 0; i <= this.width; i += this.step)
                scales.push(i);
            return scales;
        },
        scalesY() {
            const scales = [];
            for (let i = 0; i <= this.height; i += this.step)
                scales.push(i);
            return scales;
        },
    },
    methods: {
        getSize(scale) {
            if (scale % (this.step * 10) === 0)
                return 'full';
            else if (scale % (this.step * 5) === 0)
                return 'large';
            else
                return 'normal';
        },
    },
};
