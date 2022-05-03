function stringLength(string) {
    if (string.length >= 1 && string.length < 10) {
        return string.length;
    } else {
        throw new Error('Must be between 1 and 9');
    }

}

module.exports = stringLength;