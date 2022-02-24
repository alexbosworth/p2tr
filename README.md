# P2TR

Utility methods for working with Pay to Taproot outpouts

## Methods

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
