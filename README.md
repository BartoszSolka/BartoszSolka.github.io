# RandomDudez


1. Build the project. Example:
```
yarn install
yarn build
```

2. Define your environment variables using the instructions below, and start up the server with `npm start`.

#### Environment Variables
```
REACT_APP_CANDY_MACHINE_CONFIG=__PLACEHOLDER__
```

This is a Solana account address. You can get the value for this from the `.cache/temp` file. This file is created when you run the `metaplex upload` command in terminal.

```
REACT_APP_CANDY_MACHINE_ID=__PLACEHOLDER__
```

Same as above; this is a Solana account address. You can get the value for this from the `./cache/temp` file. This file is created when you run the `metaplex upload` command in terminal.

```
REACT_APP_TREASURY_ADDRESS=__PLACEHOLDER__
```

This the Solana address that receives the funds gathered during the minting process. More docs coming as we can test this.

```
REACT_APP_CANDY_START_DATE=__PLACEHOLDER__
```

This is a unix time stamp that configures when your mint will be open.

```
REACT_APP_SOLANA_NETWORK=devnet
```

This identifies the Solana network you want to connect to. Options are `devnet`, `testnet`, and `mainnet`.

```
REACT_APP_SOLANA_RPC_HOST=https://explorer-api.devnet.solana.com
```

This identifies the RPC server your web app will access the Solana network through.