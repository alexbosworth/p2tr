const {test} = require('@alexbosworth/tap');

const {controlBlock} = require('./../../');

const tests = [
  {
    args: {
      external_key: '02712447206d7a5238acc7ff53fbe94a3b64539ad291c7cdbc490b7577e4b17df5',
      internal_key: 'ee4fe085983462a184015d1f782d6a5f8b9c2b60130aff050ce221ecf3786592',
      leaf_script: '20387671353e273264c495656e27e39ba899ea8fee3bb69fb2a680e22093447d48ac',
      script_branches: [
        {
          script: '20387671353e273264c495656e27e39ba899ea8fee3bb69fb2a680e22093447d48ac',
        },
        {
          script: '06424950333431',
          version: 250,
        },
      ],
    },
    description: 'Derive control block for left and right scripts',
    expected: {
      block: 'c0ee4fe085983462a184015d1f782d6a5f8b9c2b60130aff050ce221ecf3786592f224a923cd0021ab202ab139cc56802ddb92dcfc172b9212261a539df79a112a',
    },
  },
  {
    args: {
      external_key: '02712447206d7a5238acc7ff53fbe94a3b64539ad291c7cdbc490b7577e4b17df5',
      internal_key: 'ee4fe085983462a184015d1f782d6a5f8b9c2b60130aff050ce221ecf3786592',
      leaf_script: '06424950333431',
      leaf_version: 250,
      script_branches: [
        {
          script: '20387671353e273264c495656e27e39ba899ea8fee3bb69fb2a680e22093447d48ac',
        },
        {
          script: '06424950333431',
          version: 250,
        },
      ],
    },
    description: 'Derive control block for left and right scripts',
    expected: {
      block: 'faee4fe085983462a184015d1f782d6a5f8b9c2b60130aff050ce221ecf37865928ad69ec7cf41c2a4001fd1f738bf1e505ce2277acdcaa63fe4765192497f47a7',
    },
  },
  {
    args: {
      external_key: '03147c9c57132f6e7ecddba9800bb0c4449251c92a1e60371ee77557b6620f3ea3',
      internal_key: '187791b6f712a8ea41c8ecdd0ee77fab3e85263b37e1ec18a3651926b3a6cf27',
      leaf_script: '20d85a959b0290bf19bb89ed43c916be835475d013da4b362117393e25a48229b8ac',
      script_branches: [
        {
          script: '20d85a959b0290bf19bb89ed43c916be835475d013da4b362117393e25a48229b8ac',
        },
      ],
    },
    description: 'Derive control block for single script',
    expected: {
      block: 'c1187791b6f712a8ea41c8ecdd0ee77fab3e85263b37e1ec18a3651926b3a6cf27',
    },
  },
  {
    args: {
      external_key: '0291b64d5324723a985170e4dc5a0f84c041804f2cd12660fa5dec09fc21783605',
      internal_key: 'e0dfe2300b0dd746a3f8674dfd4525623639042569d829c7f0eed9602d263e6f',
      leaf_script: '2072ea6adcf1d371dea8fba1035a09f3d24ed5a059799bae114084130ee5898e69ac',
      script_branches: [
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
    description: 'Derive control block for high level script',
    expected: {
      block: 'c0e0dfe2300b0dd746a3f8674dfd4525623639042569d829c7f0eed9602d263e6fffe578e9ea769027e4f5a3de40732f75a88a6353a09d767ddeb66accef85e553',
    },
  },
  {
    args: {
      external_key: '0291b64d5324723a985170e4dc5a0f84c041804f2cd12660fa5dec09fc21783605',
      internal_key: 'e0dfe2300b0dd746a3f8674dfd4525623639042569d829c7f0eed9602d263e6f',
      leaf_script: '202352d137f2f3ab38d1eaa976758873377fa5ebb817372c71e2c542313d4abda8ac',
      script_branches: [
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
    description: 'Derive control block for second level script left',
    expected: {
      block: 'c0e0dfe2300b0dd746a3f8674dfd4525623639042569d829c7f0eed9602d263e6f9e31407bffa15fefbf5090b149d53959ecdf3f62b1246780238c24501d5ceaf62645a02e0aac1fe69d69755733a9b7621b694bb5b5cde2bbfc94066ed62b9817',
    },
  },
  {
    args: {
      external_key: '0291b64d5324723a985170e4dc5a0f84c041804f2cd12660fa5dec09fc21783605',
      internal_key: 'e0dfe2300b0dd746a3f8674dfd4525623639042569d829c7f0eed9602d263e6f',
      leaf_script: '2072ea6adcf1d371dea8fba1035a09f3d24ed5a059799bae114084130ee5898e69ac',
      script_branches: [
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
    description: 'Derive control block for second level right script',
    expected: {
      block: 'c0e0dfe2300b0dd746a3f8674dfd4525623639042569d829c7f0eed9602d263e6fffe578e9ea769027e4f5a3de40732f75a88a6353a09d767ddeb66accef85e553',
    },
  },
];

tests.forEach(({args, description, error, expected}) => {
  return test(description, async ({end, rejects, strictSame}) => {
    const res = controlBlock(args);

    strictSame(res, expected, 'Got expected result');

    return end();
  });
});
