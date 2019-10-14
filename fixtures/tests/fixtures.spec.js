
    // WARNING: this file is generated automatically
    const backgroundColorReplacer = require('../../replacer');

    describe('backgroundColorReplacer', () => {
  
        it("replace color-when-match", () => {
          try {
            const { target, options } = require(`../replace-color-when-match.js`);
            expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
          } catch(error) {
            expect(error).toMatchSnapshot();
          }
        });
      });