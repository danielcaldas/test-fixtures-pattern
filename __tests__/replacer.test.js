const backgroundColorReplacer = require('../replacer');

describe('backgroundColorReplacer', () => {
    it('should replace color if they match', () => {
        const target = 'background-color: rgb(255, 0, 0)';
        const fromColor = [255, 0, 0];
        const toColor = [0, 255, 0];
        const options = { fromColor, toColor };

        expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
    });

    it('should replace color if they match and add opacity when defined', () => {
        const target = 'background-color: rgb(255, 0, 0)';
        const fromColor = [255, 0, 0];
        const toColor = [0, 255, 0];
        const opacity = 0.5;
        const options = { fromColor, toColor, opacity };

        expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
    });

    it('should not replace color if they do not match', () => {
        const target = 'background-color: rgb(254, 0, 0)';
        const fromColor = [255, 0, 0];
        const toColor = [0, 255, 0];
        const options = { fromColor, toColor };

        expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
    });

    it('should not replace color there is no new color specified', () => {
        const target = 'background-color: rgb(253, 0, 0)';
        const fromColor = [255, 0, 0];
        const toColor = undefined;
        const options = { fromColor, toColor };

        expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
    });
});
