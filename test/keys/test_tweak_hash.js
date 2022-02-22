const {test} = require('@alexbosworth/tap');

const {tweakHash} = require('./../../');

const tests = [
  {
    args: {
      public_key: '02d6889cb081036e0faefa3a35157ad71086b123b2b144b649798b494c300a961d',
    },
    description: 'Derive tweak hash',
    expected: {
      hash: 'b86e7be8f39bab32a6f2c0443abbc210f0edac0e2c53d501b36b64437d9c6c70',
    },
  },
  {
    args: {
      hash: '5b75adecf53548f3ec6ad7d78383bf84cc57b55a3127c72b9a2481752dd88b21',
      public_key: '03187791b6f712a8ea41c8ecdd0ee77fab3e85263b37e1ec18a3651926b3a6cf27',
    },
    description: 'Derive another tweak hash',
    expected: {
      hash: 'cbd8679ba636c1110ea247542cfbd964131a6be84f873f7f3b62a777528ed001',
    },
  },
  {
    args: {
      hash: '6c2dc106ab816b73f9d07e3cd1ef2c8c1256f519748e0813e4edd2405d277bef',
      public_key: '02ee4fe085983462a184015d1f782d6a5f8b9c2b60130aff050ce221ecf3786592',
    },
    description: 'Derive another tweak hash over multiple leaf script',
    expected: {
      hash: '9e0517edc8259bb3359255400b23ca9507f2a91cd1e4250ba068b4eafceba4a9',
    },
  },
];

tests.forEach(({args, description, error, expected}) => {
  return test(description, async ({end, rejects, strictSame}) => {
    const res = tweakHash(args);

    strictSame(res, expected, 'Got expected result');

    return end();
  });
});
