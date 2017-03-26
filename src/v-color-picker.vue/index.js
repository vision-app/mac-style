import Base from 'v-base.vue';

const ColorPicker = Base.extend({
    name: 'v-color-picker',
    props: {
        color: {
            type: String,
            default: '#000000',
        },
    },
});

export default ColorPicker;
