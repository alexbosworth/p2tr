const {deepEqual} = require('node:assert').strict;
const test = require('node:test');

const {hashForTree} = require('./../../');

const tests = [
  {
    args: {
      branches: [{
        script: '20d85a959b0290bf19bb89ed43c916be835475d013da4b362117393e25a48229b8ac',
      }]
    },
    description: 'Derive tree hash',
    expected: {
      hash: '5b75adecf53548f3ec6ad7d78383bf84cc57b55a3127c72b9a2481752dd88b21',
    },
  },
  {
    args: {
      branches: [
        {
          script: '20387671353e273264c495656e27e39ba899ea8fee3bb69fb2a680e22093447d48ac',
        },
        {
          script: '06424950333431',
          version: 250,
        },
      ],
    },
    description: 'Derive tree hash for two scripts',
    expected: {
      hash: '6c2dc106ab816b73f9d07e3cd1ef2c8c1256f519748e0813e4edd2405d277bef',
    },
  },
  {
    args: {
      branches: [
        {
          script: '2072ea6adcf1d371dea8fba1035a09f3d24ed5a059799bae114084130ee5898e69ac',
        },
        [
          {
            script: '202352d137f2f3ab38d1eaa976758873377fa5ebb817372c71e2c542313d4abda8ac',
          },
          {
            script: '207337c0dd4253cb86f2c43a2351aadd82cccb12a172cd120452b9bb8324f2186aac',
          },
        ],
      ],
    },
    description: 'Derive tree hash for three scripts',
    expected: {
      hash: 'ccbd66c6f7e8fdab47b3a486f59d28262be857f30d4773f2d5ea47f7761ce0e2',
    },
  },
  {
    args: {
      branches: [
        {
          script: '2071981521ad9fc9036687364118fb6ccd2035b96a423c59c5430e98310a11abe2ac',
        },
        [
          {
            script: '20d5094d2dbe9b76e2c245a2b89b6006888952e2faa6a149ae318d69e520617748ac',
          },
          {
            script: '20c440b462ad48c7a77f94cd4532d8f2119dcebbd7c9764557e62726419b08ad4cac',
          },
        ],
      ],
    },
    description: 'Derive another hash for three scripts',
    expected: {
      hash: '2f6b2c5397b6d68ca18e09a3f05161668ffe93a988582d55c6f07bd5b3329def',
    },
  },
];

tests.forEach(({args, description, error, expected}) => {
  return test(description, (t, end) => {
    const res = hashForTree(args);

    deepEqual(res, expected, 'Got expected result');

    return end();
  });
});
