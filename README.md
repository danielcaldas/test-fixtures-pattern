# test-fixtures-pattern
A simple demonstration of a fixtures test based architecture in JavaScript. A simple case study scenario is built around a function called `backgroundColorReplacer` that is exposed in main *entroypoint* file `replacer.js`.

## The case study
There's a dummy implementation of a function called `backgroundColorReplacer` that basically replaces a `background-color` css property with a `rgb` color for some other `rgb` or `rgba` color depending on the options passed to this function.

Examples of usage can be seen in the file `__tests__/replacer.test.js`.

### Unit tests
Some simple unit tests are added in `__tests__/replacer.test.js`, as a first step.
<small>branch: step-1-implementation-and-unit-tests</small>

### Fixtures architecture
At the end, we get a set of organized test cases within the `fixtures` folder, that are consumed from `run-fixtures.js` that will generate all the *jest boilerplatish* code for us. Each test case within `fixtures` has a very specific name that depicts its purpose, also the content of these files is strictly declarative,
the only thing there are the specification of the inputs for our replacer.

```
fixtures
├── not-replace-color-if-no-match.js
├── not-replace-color-if-no-new-color-specified.js
├── replace-color-when-match-and-opacity-defined.js
├── replace-color-when-match.js
└── tests
    ├── fixtures.spec.js
    └── __snapshots__
        └── fixtures.spec.js.snap
run-fixtures.js
```

- `fixtures` - folder where test cases are specified.
- `run-fixtures` - responsible for generating `fixtures/tests/fixtures.spec.js`, where the actual tests are outputted.
