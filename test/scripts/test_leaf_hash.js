const {deepEqual} = require('node:assert').strict;
const test = require('node:test');

const {leafHash} = require('./../../');

const tests = [
  {
    args: {
      script: '20d85a959b0290bf19bb89ed43c916be835475d013da4b362117393e25a48229b8ac',
    },
    description: 'Derive leaf hash',
    expected: {
      hash: '5b75adecf53548f3ec6ad7d78383bf84cc57b55a3127c72b9a2481752dd88b21',
    },
  },
];

tests.forEach(({args, description, error, expected}) => {
  return test(description, (t, end) => {
    const res = leafHash(args);

    deepEqual(res, expected, 'Got expected result');

    return end();
  });
});
