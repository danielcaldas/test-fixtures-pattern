/**
 * Replaces background color that matches a certain color by another.
 * @param {string} target a css line
 * @param {Object} options a set of options for the new color.
 * @returns {string} the replaced expression or
 * the same as the input if nothing matches.
 */
function backgroundColorReplacer(target, options) {
    const { fromColor, toColor, opacity } = options;
    const bgc = `background-color: rgb(${fromColor.join(', ')})`;

    if (target === bgc && toColor && toColor.length) {
        const color = toColor.join(', ');

        if (opacity) {
            return `background-color: rgba(${color}, ${opacity})`;
        }

        return `background-color: rgb(${color})`;
    }

    return target;
}

module.exports = backgroundColorReplacer;
