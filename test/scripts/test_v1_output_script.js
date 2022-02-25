const {test} = require('@alexbosworth/tap');

const method = require('./../../scripts/v1_output_script');

const tests = [
  {
    args: {
      internal_key: '03d6889cb081036e0faefa3a35157ad71086b123b2b144b649798b494c300a961d',
    },
    description: 'Derive v1 segwit output script',
    expected: {
      script: '512053a1f6e454df1aa2776a2814a721372d6258050de330b3c6d10ee8f4e0dda343',
    },
  },
  {
    args: {
      hash: '5b75adecf53548f3ec6ad7d78383bf84cc57b55a3127c72b9a2481752dd88b21',
      internal_key: '02187791b6f712a8ea41c8ecdd0ee77fab3e85263b37e1ec18a3651926b3a6cf27',
    },
    description: 'Derive v1 segwit output script for a script output',
    expected: {
      script: '5120147c9c57132f6e7ecddba9800bb0c4449251c92a1e60371ee77557b6620f3ea3',
    },
  },
];

tests.forEach(({args, description, error, expected}) => {
  return test(description, async ({end, rejects, strictSame}) => {
    const res = method(args);

    strictSame(res, expected, 'Got expected result');

    return end();
  });
});
