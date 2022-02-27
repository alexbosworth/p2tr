# P2TR

Utility methods for working with Pay to Taproot outpouts

## Methods

### `controlBlock`

Assemble a control block for a leaf script spend

    {
      external_key: <External Public Key Hex String>
      [internal_key]: <Internal Public Key Hex String>
      leaf_script: <Leaf Script Hex String>
      [leaf_version]: <Leaf Script Version Number>
      script_branches: <Script Branches Object>
    }

    @returns
    {
      block: <Control Block Hex String>
    }

### `hashForTree`

Hash a tree of scripts

    {
      branches: [{
        script: <Hex Encoded Script String>
        [version]: <Leaf Version Number>
      }]
    }

    @returns
    {
      hash: <Hash of Tree Hex Encoded String>
    }

### `leafHash`

Hash for leaf script

    {
      script: <Script Hex String>
      [version]: <Leaf Version Number>
    }

    @returns
    {
      hash: <Hash Hex String>
    }

### `signHash`

Sign with a tweaked private key

    {
      [hash]: <Tweak Hash Hex String>
      private_key: <Internal Private Key Hex String>
      public_key: <Internal Public Key Hex String>
      sign_hash: <Hash to Sign Hex String>
    }

    @returns
    {
      signature: <Tweaked Private Key Hex String>
    }

### `tweakHash`

Tweak hash

    {
      hash: <Hash Hex String>
      public_key: <Public Key Hex String>
    }

    @returns
    {
      hash: <Tagged Tweak Hash Hex String>
    }

### `v1OutputScript`

Create a SegWit V1 Output Script

    {
      [hash]: <Hash Hex String>
      internal_key: <Internal Public Key Hex String>
    }

    @returns
    {
      external_key: <External Public Key Hex String>
      script: <Output Script Hex String>
    }
