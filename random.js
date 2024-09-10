function random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random_float(min, max) {
    return Math.random() * (max - min) + min;
}

function random_index(array) {
    return random_int(0, array.length - 1);
}

function random_key(object) {
    return random_choice(Object.keys(object));
}

function random_key_value(object) {
    return object[random_key(object)];
}

function random_choice(array) {
    return array[random_index(array)];
}

function random_shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const j = Math.floor(Math.random() * (index + 1));
        [array[index], array[j]] = [array[j], array[index]];
    }
    return array;
}