export const NewsVerificationAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_defaultCurrency",
        type: "address",
      },
      {
        internalType: "address",
        name: "_optimisticOracleV3",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "articleId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "newsContent",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "verifierAddress",
        type: "address",
      },
    ],
    name: "NewsVerified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "articleId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "assertionId",
        type: "bytes32",
      },
    ],
    name: "RewardPayoutRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "articleId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "assertionId",
        type: "bytes32",
      },
    ],
    name: "RewardPayoutSettled",
    type: "event",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "assertedNews",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "assertionId", type: "bytes32" }],
    name: "assertionDisputedCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assertionLiveness",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "assertionId", type: "bytes32" },
      { internalType: "bool", name: "assertedTruthfully", type: "bool" },
    ],
    name: "assertionResolvedCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultCurrency",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultIdentifier",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "newsArticles",
    outputs: [
      { internalType: "uint256", name: "reward", type: "uint256" },
      {
        internalType: "address",
        name: "verifierAddress",
        type: "address",
      },
      { internalType: "bytes", name: "newsContent", type: "bytes" },
      { internalType: "bool", name: "verified", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oo",
    outputs: [
      {
        internalType: "contract OptimisticOracleV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "articleId", type: "bytes32" }],
    name: "requestPayout",
    outputs: [
      { internalType: "bytes32", name: "assertionId", type: "bytes32" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "reward", type: "uint256" },
      { internalType: "bytes", name: "newsContent", type: "bytes" },
    ],
    name: "verifyNews",
    outputs: [{ internalType: "bytes32", name: "articleId", type: "bytes32" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
