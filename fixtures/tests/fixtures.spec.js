
    // WARNING: this file is generated automatically
    const backgroundColorReplacer = require('../../replacer');

    describe('backgroundColorReplacer', () => {
  
        it("not replace color if no match", () => {
          try {
            const { target, options } = require(`../not-replace-color-if-no-match.js`);
            expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
          } catch(error) {
            expect(error).toMatchSnapshot();
          }
        });
      

        it("not replace color if no new color specified", () => {
          try {
            const { target, options } = require(`../not-replace-color-if-no-new-color-specified.js`);
            expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
          } catch(error) {
            expect(error).toMatchSnapshot();
          }
        });
      

        it("replace color when match and opacity defined", () => {
          try {
            const { target, options } = require(`../replace-color-when-match-and-opacity-defined.js`);
            expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
          } catch(error) {
            expect(error).toMatchSnapshot();
          }
        });
      

        it("replace color when match", () => {
          try {
            const { target, options } = require(`../replace-color-when-match.js`);
            expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
          } catch(error) {
            expect(error).toMatchSnapshot();
          }
        });
      });