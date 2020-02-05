const HDWalletProvider = require('@truffle/hdwallet-provider');

let devUrl = 'http://127.0.0.1:7545/';
let mnemonic = 'gloom glimpse flame sword strike rival saddle equip good enter army genuine';   
let testAccounts = [
"0x2f2246d1f7e8bb60666f21ec36e67275a55fe9014ebb60c2f1367856183c3750",
"0x716b73827085795de7545d4c69d1ad32a853cec9eb53aaee62103c1106d98388",
"0xee940bcb95b172ef4c4fefaac5741de12c40460763b795e1c53688e293195445",
"0xe4980caa452d1449206914114bac290b65d852b9fdbc03a9f8ca820535418ec5",
"0x14503a1f6b4bb9dfc3035bf0fb204bf2188bfb7228a0613fb8b9a16cd81f01f9",
"0xeb04f71d8b8660f817b4209f8c7a545b484778de70e1657704b63530fe1e03cf",
"0xc416766c5a54b3147622ac3efbc4daff9aa7a7286ee5a2bcefb9fc11c78ac3eb",
"0xcb903d536e687ec1911e841acffab037ee63d2865007cfd196f986580d41bb3c",
"0xcc54d434cc4194019d1620f1cfcbee77c2147c38da7250fe3108023bf6197ec6",
"0x618a81ee10021a36cee454b4007d3a63e21e91f2507333ed91a1b998a17a499c"
];  

module.exports = {
  networks: {
    development: {
      url: devUrl,  // Required for DappStarter config generation
      provider: () => new HDWalletProvider(
                                      testAccounts,
                                      devUrl,           // provider url
                                      0,                // address index
                                      10,               // number of addresses
                                      true,             // share nonce
                                      `m/44'/60'/0'/0/` // wallet HD path
                                    ),
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: '^0.5.11'
    }
  }
};
