const fs = require("fs");
const FIXTURES_BASE_DIR = `${__dirname}/fixtures`;

/**
 * This function generates a spec snippet for a given
 * fixture contained within the provided files.
 * @param {Array.<string>} files - files of the fixture to generate.
 * @returns {undefined}
 */
function generateFixtureJestSnippets(files) {
  if (!files || !files.length) {
    throw new Error("A valid file name must be provided");
  }

  const open = `
    // WARNING: this file is generated automatically
    const backgroundColorReplacer = require('../../replacer');

    describe('backgroundColorReplacer', () => {
  `;
  const close = `});`
  const specs = files.map(fname => {
      const input = fs.readFileSync(`${FIXTURES_BASE_DIR}/${fname}`);
      const specName = fname.split('.js')[0].replace(/[-]/gi, ' ');

      return `
        it("${specName}", () => {
          try {
            const { target, options } = require(\`../${fname}\`);
            expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
          } catch(error) {
            expect(error).toMatchSnapshot();
          }
        });
      `;
  }).join('\n');

  return `${open}${specs}${close}`;
}

/**
 * This function parses a file tree structure
 * and performs a snippet generation operation
 * on the existent files.
 * @param {Object} err - error object.
 * @param {Array.<string>} files - list of file's names (the fixtures).
 * @returns {undefined}
 */
function parseFileTree(err, files) {
  if (err) {
    // eslint-disable-next-line
    console.error(err);
    process.exit(1);
  }

  const tmp = generateFixtureJestSnippets(files.filter(f => f !== 'tests'));

  fs.writeFileSync(`${FIXTURES_BASE_DIR}/tests/fixtures.spec.js`, tmp);
}

fs.readdir(FIXTURES_BASE_DIR, parseFileTree);
