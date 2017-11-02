import CircularJSON from 'circular-json-es6';

export const UNDEFINED = '__vusion_undefined__';
export const INFINITY = '__vusion_infinity__';
export const NAN = '__vusion_nan__';

const isPlainObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';
const isPrimitive = (data) => {
    if (data === null)
        return true;
    const type = typeof data;
    return type === 'string' || type === 'number' || type === 'boolean';
};

/**
 * Sanitize data to be posted to the other side.
 * Since the message posted is sent with structured clone,
 * we need to filter out any types that might cause an error.
 *
 * @param {*} data
 * @return {*}
 */

// function sanitize(data) {
//     if (
//         !isPrimitive(data)
//       && !Array.isArray(data)
//       && !isPlainObject(data)
//     ) {
//         // handle types that will probably cause issues in
//         // the structured clone
//         return Object.prototype.toString.call(data);
//     } else
//         return data;
// }

// export const stringify = (data) =>
//     CircularJSON.stringify(data, (key, value) => {
//         if (value === undefined)
//     }
