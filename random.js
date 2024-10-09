/**
 * ## `random_int`
 * This is part of the random.js part of JS-mods made by Toby Gore
 * 
 * Returns a random integer between `min` and `max`, inclusive
 * ### Args
 * * `min`
 *      - **int**
 *      - The minimum value
 * * `max`
 *      - **int**
 *      - The maximum value
 */
function random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * ## `random_float`
 * This is part of the random.js part of JS-mods made by Toby Gore
 * 
 * Returns a random float between `min` and `max`, inclusive
 * ### Args
 * * `min`
 *      - **float**
 *      - The minimum value
 * * `max`
 *      - **float**
 *      - The maximum value
 */
function random_float(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * ## `random_index`
 * This is part of the random.js part of JS-mods made by Toby Gore
 * 
 * Returns a random index from an array
 * ### Args
 * * `array`
 *      - **array**
 *      - The array of items to pick from
 */
function random_index(array) {
    return random_int(0, array.length - 1);
}

/**
 * ## `random_key`
 * This is part of the random.js part of JS-mods made by Toby Gore
 * 
 * Returns a random key from an object
 * ### Args
 * * `map`
 *      - **map**
 *      - The map of items to pick from
 */
function random_key(map) {
    return random_choice(Object.keys(map));
}

/**
 * ## `random_key_value`
 * This is part of the random.js part of JS-mods made by Toby Gore
 * 
 * Returns a random value from the map
 * ### Args
 * * `map`
 *      - **map**
 *      - The map of items to pick from
 */
function random_key_value(map) {
    return object[random_key(map)];
}

/**
 * ## `random_choice`
 * This is part of the random.js part of JS-mods made by Toby Gore
 * 
 * Returns a random element from an array
 * ### Args
 * * `array`
 *      - **array**
 *      - The array of items to pick from
 */
function random_choice(array) {
    return array[random_index(array)];
}

/**
 * ## `random_shuffle`
 * This is part of the random.js part of JS-mods made by Toby Gore
 * 
 * Returns a shuffled form of the array
 * ### Args
 * * `array`
 *      - **array**
 *      - The array of items to shuffle
 */
function random_shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const j = Math.floor(Math.random() * (index + 1));
        [array[index], array[j]] = [array[j], array[index]];
    }
    return array;
}