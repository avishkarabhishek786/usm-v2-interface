export const usm = {
    name: 'usm',
    abi: [
      {
        "inputs": [
          {
            "internalType": "contract Oracle",
            "name": "oracle_",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "optedOut_",
            "type": "address[]"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "adjustment",
            "type": "uint256"
          }
        ],
        "name": "BuySellAdjustmentChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "delegate",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "enabled",
            "type": "bool"
          }
        ],
        "name": "Delegate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "name": "PriceChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "underwater",
            "type": "bool"
          }
        ],
        "name": "UnderwaterStatusChanged",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "BILLION",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "BUY_SELL_ADJUSTMENT_HALF_LIFE",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "DELEGABLE_DOMAIN",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "HALF_BILLION",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "HALF_WAD",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "MAX_DEBT_RATIO",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "MIN_FUM_BUY_PRICE_HALF_LIFE",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "PERMIT_TYPEHASH",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "SIGNATURE_TYPEHASH",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "WAD",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "delegate",
            "type": "address"
          }
        ],
        "name": "addDelegate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegate",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "addDelegateBySignature",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "wad",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guy",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "usmToBurn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minEthOut",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "ethOut",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "buySellAdjustment",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "adjustment",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "storedTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "storedAdjustment",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "currentTime",
            "type": "uint256"
          }
        ],
        "name": "buySellAdjustment",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "adjustment",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "usmActualSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ethPool_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ethUsdPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "oldTimeUnderwater",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "currentTime",
            "type": "uint256"
          }
        ],
        "name": "checkIfUnderwater",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "timeSystemWentUnderwater_",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "usmSupplyForFumBuys",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "ethUsdPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ethInPool",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "usmSupply",
            "type": "uint256"
          }
        ],
        "name": "debtRatio",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "ratio",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "fumToBurn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minEthOut",
            "type": "uint256"
          }
        ],
        "name": "defund",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "ethOut",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "delegated",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "ethUsdPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ethInPool",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "usmSupply",
            "type": "uint256"
          },
          {
            "internalType": "enum WadMath.Round",
            "name": "upOrDown",
            "type": "uint8"
          }
        ],
        "name": "ethBuffer",
        "outputs": [
          {
            "internalType": "int256",
            "name": "buffer",
            "type": "int256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "timeSystemWentUnderwater",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPriceTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustmentTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustment",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethPool",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "usmTotalSupply",
                "type": "uint256"
              }
            ],
            "internalType": "struct USM.LoadedState",
            "name": "ls",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "usmIn",
            "type": "uint256"
          }
        ],
        "name": "ethFromBurn",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "ethOut",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adjGrowthFactor",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "timeSystemWentUnderwater",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPriceTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustmentTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustment",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethPool",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "usmTotalSupply",
                "type": "uint256"
              }
            ],
            "internalType": "struct USM.LoadedState",
            "name": "ls",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "fumSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fumIn",
            "type": "uint256"
          }
        ],
        "name": "ethFromDefund",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "ethOut",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adjShrinkFactor",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "ethPool",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "pool",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "ethUsdPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ethAmount",
            "type": "uint256"
          },
          {
            "internalType": "enum WadMath.Round",
            "name": "upOrDown",
            "type": "uint8"
          }
        ],
        "name": "ethToUsm",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "usmOut",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "fum",
        "outputs": [
          {
            "internalType": "contract FUM",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "timeSystemWentUnderwater",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPriceTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustmentTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustment",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethPool",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "usmTotalSupply",
                "type": "uint256"
              }
            ],
            "internalType": "struct USM.LoadedState",
            "name": "ls",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "fumSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ethIn",
            "type": "uint256"
          }
        ],
        "name": "fumFromFund",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "fumOut",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adjGrowthFactor",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "enum IUSM.Side",
            "name": "side",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "ethUsdPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ethInPool",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "usmEffectiveSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fumSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adjustment",
            "type": "uint256"
          }
        ],
        "name": "fumPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "fumTotalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "supply",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "minFumOut",
            "type": "uint256"
          }
        ],
        "name": "fund",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "fumOut",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "latestOraclePrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "updateTime",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "latestPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "updateTime",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "loadState",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "timeSystemWentUnderwater",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPriceTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustmentTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustment",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethPool",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "usmTotalSupply",
                "type": "uint256"
              }
            ],
            "internalType": "struct USM.LoadedState",
            "name": "ls",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "minUsmOut",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "usmOut",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "nonces",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "optBackIn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "optOut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "optedOut",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "oracle",
        "outputs": [
          {
            "internalType": "contract Oracle",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "refreshPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "updateTime",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "delegate",
            "type": "address"
          }
        ],
        "name": "revokeDelegate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "signatureCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "storedState",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "timeSystemWentUnderwater",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "ethUsdPriceTimestamp",
            "type": "uint32"
          },
          {
            "internalType": "uint80",
            "name": "ethUsdPrice",
            "type": "uint80"
          },
          {
            "internalType": "uint32",
            "name": "buySellAdjustmentTimestamp",
            "type": "uint32"
          },
          {
            "internalType": "uint80",
            "name": "buySellAdjustment",
            "type": "uint80"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "timeSystemWentUnderwater",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "wad",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "src",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "wad",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "timeSystemWentUnderwater",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPriceTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethUsdPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustmentTimestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "buySellAdjustment",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ethPool",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "usmTotalSupply",
                "type": "uint256"
              }
            ],
            "internalType": "struct USM.LoadedState",
            "name": "ls",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "ethIn",
            "type": "uint256"
          }
        ],
        "name": "usmFromMint",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "usmOut",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adjShrinkFactor",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "enum IUSM.Side",
            "name": "side",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "ethUsdPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adjustment",
            "type": "uint256"
          }
        ],
        "name": "usmPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "ethUsdPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "usmAmount",
            "type": "uint256"
          },
          {
            "internalType": "enum WadMath.Round",
            "name": "upOrDown",
            "type": "uint8"
          }
        ],
        "name": "usmToEth",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "ethOut",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "version",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    address: {
      1: '0x03eb7Ce2907e202bB70BAE3D7B0C588573d3cECC',
      42: '0x21453979384f21D09534f8801467BDd5d90eCD6C',
      31337: '0x1b7Fe0B1b51534432DD2Daf88AcB2550c05B37B3'
    }
  }
  
  export const fum = {
    name: 'fum',
    abi: [
      {
        "inputs": [
          {
            "internalType": "contract IUSM",
            "name": "usm_",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "optedOut_",
            "type": "address[]"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "PERMIT_TYPEHASH",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "wad",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guy",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_holder",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "nonces",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "optBackIn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "optOut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "optedOut",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "wad",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "src",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "wad",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "usm",
        "outputs": [
          {
            "internalType": "contract IUSM",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "version",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    address: {
      1: '0xf04a5D82ff8a801f7d45e9C14CDcf73defF1a394',
      42: '0x96F8F5323Aa6CB0e6F311bdE6DEEFb1c81Cb1898',
      31337: '0xE501b45730EbB574C88206e7c9aC89A80C82f8b6'
    }
  }
  
  export const usmView = {
      name: 'USMView',
      abi: [
          {
            "inputs": [
              {
                "internalType": "contract IUSM",
                "name": "usm_",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [],
            "name": "debtRatio",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "ratio",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "enum WadMath.Round",
                "name": "upOrDown",
                "type": "uint8"
              }
            ],
            "name": "ethBuffer",
            "outputs": [
              {
                "internalType": "int256",
                "name": "buffer",
                "type": "int256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "ethAmount",
                "type": "uint256"
              },
              {
                "internalType": "enum WadMath.Round",
                "name": "upOrDown",
                "type": "uint8"
              }
            ],
            "name": "ethToUsm",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "usmOut",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "enum IUSM.Side",
                "name": "side",
                "type": "uint8"
              }
            ],
            "name": "fumPrice",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "usm",
            "outputs": [
              {
                "internalType": "contract IUSM",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "enum IUSM.Side",
                "name": "side",
                "type": "uint8"
              }
            ],
            "name": "usmPrice",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "usmAmount",
                "type": "uint256"
              },
              {
                "internalType": "enum WadMath.Round",
                "name": "upOrDown",
                "type": "uint8"
              }
            ],
            "name": "usmToEth",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "ethOut",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ],
      address: {
          1: '',
          42: '0x5442818E2E38FB2c8F4CEed22782663b8FCBD0b5',
          31337: '0xa7893E905b351371E0dc305C57BDD29981c82fF5'
      }    
  }
  
  export const oracle = {
      name: 'oracle',
      abi: [
          {
            "inputs": [],
            "name": "latestPrice",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "updateTime",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "refreshPrice",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "updateTime",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
      address: {
          1: '',
          42: '0x4B2D04f6d7721B09024E0d61C1617DF04e4C21ae', 
          31337: '0x0fd655C72D86e458387869b4E33c781B43B6bd2c'
      }    
  }
  
  export const proxy = {
      name: 'proxy',
      abi: [
          {
            "inputs": [
              {
                "internalType": "contract IUSM",
                "name": "usm_",
                "type": "address"
              },
              {
                "internalType": "contract IWETH9",
                "name": "weth_",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "usmToBurn",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minEthOut",
                "type": "uint256"
              }
            ],
            "name": "burn",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "ethOut",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "fumToBurn",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minEthOut",
                "type": "uint256"
              }
            ],
            "name": "defund",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "ethOut",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "ethIn",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minFumOut",
                "type": "uint256"
              }
            ],
            "name": "fund",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "fumOut",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "ethIn",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minUsmOut",
                "type": "uint256"
              }
            ],
            "name": "mint",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "usmOut",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "usm",
            "outputs": [
              {
                "internalType": "contract IUSM",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "weth",
            "outputs": [
              {
                "internalType": "contract IWETH9",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "stateMutability": "payable",
            "type": "receive"
          }
        ],
      address: {
          1: '',
          42: '0xaCDCd6A936134D7C84163CD9B23B256cb25942D0',
          31337: '0xbecB3F9EC34FC6AddDabE264D1f13DFfD9F35DDf'
      }    
  }

  export const weth = {
      name: 'weth',
      abi: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "src",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "guy",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "dst",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            }
          ],
          "name": "Deposit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "src",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "dst",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "src",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            }
          ],
          "name": "Withdrawal",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "guy",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "deposit",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "dst",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "src",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "dst",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      address: {
        1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        42: '0xa1C74a9A3e59ffe9bEe7b85Cd6E91C0751289EbD',
        31337: '0xaac20aa8B13F7Fb0f683b6366e3e8A12703668Bd'
      }
  }