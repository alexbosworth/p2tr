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
