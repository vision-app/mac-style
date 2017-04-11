import Base from 'u-base.vue';

const ColorPicker = Base.extend({
    name: 'u-color-picker',
    props: {
        color: {
            type: String,
            default: '#000000',
        },
    },
});

export default ColorPicker;
