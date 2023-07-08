const {deepEqual} = require('node:assert').strict;
const test = require('node:test');

const method = require('./../../scripts/v1_output_script');

const tests = [
  {
    args: {
      internal_key: '03d6889cb081036e0faefa3a35157ad71086b123b2b144b649798b494c300a961d',
    },
    description: 'Derive v1 segwit output script',
    expected: {
      external_key: '0353a1f6e454df1aa2776a2814a721372d6258050de330b3c6d10ee8f4e0dda343',
      script: '512053a1f6e454df1aa2776a2814a721372d6258050de330b3c6d10ee8f4e0dda343',
    },
  },
  {
    args: {
      internal_key: 'd6889cb081036e0faefa3a35157ad71086b123b2b144b649798b494c300a961d',
    },
    description: 'Derive v1 segwit output script with x only internal key',
    expected: {
      external_key: '0353a1f6e454df1aa2776a2814a721372d6258050de330b3c6d10ee8f4e0dda343',
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
      external_key: '03147c9c57132f6e7ecddba9800bb0c4449251c92a1e60371ee77557b6620f3ea3',
      script: '5120147c9c57132f6e7ecddba9800bb0c4449251c92a1e60371ee77557b6620f3ea3',
    },
  },
  {
    args: {
      hash: 'c525714a7f49c28aedbbba78c005931a81c234b2f6c99a73e4d06082adc8bf2b',
      internal_key: '0293478e9488f956df2396be2ce6c5cced75f900dfa18e7dabd2428aae78451820',
    },
    description: 'Derive output script with opposite parity',
    expected: {
      external_key: '02e4d810fd50586274face62b8a807eb9719cef49c04177cc6b76a9a4251d5450e',
      script: '5120e4d810fd50586274face62b8a807eb9719cef49c04177cc6b76a9a4251d5450e',
    },
  },
];

tests.forEach(({args, description, error, expected}) => {
  return test(description, (t, end) => {
    const res = method(args);

    deepEqual(res, expected, 'Got expected result');

    return end();
  });
});
