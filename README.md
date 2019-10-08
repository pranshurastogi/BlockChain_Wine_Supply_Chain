# BlockChain Wine Supply Chain

## UML Diagrams

Google Drive Link For Draw.io Images
https://drive.google.com/file/d/1Odtnnf6p8HwZu7WEpwoBLDuXBIzBwGrn/view?usp=sharing

## Content Of Folder Udacity_UML_Diagram
1. Activity Diagram
2. Sequence Diagram
3. State Diagram
4. Class Diagram


## How to run  ?

1. Clone the repositiiory 
2. Install the required dependicies.  
``` npm install ```
3. If you want to run on local download an instal
4. Run Ganache cli -
 ` ganache-cli`

5.Deploy the contract on local Ganache
  ` truffle deploy --network development_cli`
6. Run the server 
    ` node index.js`
7. Open `localhost:8080/index.html` in your browser.
8. Import the address on Metamask for the communication.


## Run on rinkeby -

1. Make an account on Infura to connect with rinkeby.
2. To run on rinkeby- 
``` truffle deploy --network rinkeby```

## --------------------------------------------------------------------------------------------------------------
 ### Process it will go through
 ```
Transaction History
LandRegistered - 0x313582252f15e6357cbe2cf6c1026c836296531ff1e985b1b3a4e6607370b3cf
GrapeHarvested - 0x12defa25906831cdc60de3853564e0f94f7f166616ce22f080de3173e08b5868
GrapePressed - 0x90fb86e5c4abe45a8544d5172b309d1161e517005e8d9c6a8a46008602ed4447
GrapeFermented - 0x9eca36ec5c0c7dee671ca384acc8de6235de412ab75e4a43a049bfead43d925a
BottleOwned - 0x4d62fefec1b7041038b41410cf95863c384166f728ed1cea00a2fa83dc579a54
BottleForSale - 0x3cf90a8488f66fb1c4a19569c1c0f2a32e43b776c94dd40f9b5044f047acc4cc
BottleSold - 0x0dac6aa67bacb84d00ac3808d7a8733703244c4d00b8e19a891a90cfde23bdab
BottleShipped - 0xc529f1573406d9c97afc5b839030c9e5f642124053cc6ad4d0911515be726395
BottleOwned - 0xeaa638c5a1c08b16dcc798213959c56d0001351afa7aa57830655a44d7ae7870
BottleConsumed - 0x3e63d11b32ed0bacccc948704a5b1297f094e475a2324de4fa29d6e1d7208712
BottleConsumed - 0x3e63d11b32ed0bacccc948704a5b1297f094e475a2324de4fa29d6e1d7208712
```

---------------------------------------------------------------------------------------------------------------------------

## Ganache cli deployment

Ganache CLI Deployment

truffle deploy --network development_cli
```
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development_cli'
> Network id:      1570380071585
> Block gas limit: 0x6691b7


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xb3e701c5f452a41a3484bd848c50006e20b3ed640ef9b24e68c097aae7d1f668
   > Blocks: 0            Seconds: 0
   > contract address:    0x6B27dcb4241DfEE654aE81DD903fe900EF64Ab0B
   > block number:        1
   > block timestamp:     1570380165
   > account:             0x4d4E8DF293475E4a2a78Fa4b9D7004b628381047
   > balance:             99.99430312
   > gas used:            284844
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00569688 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00569688 ETH


2_wine_supply_chain.js
======================

   Deploying 'Wine'
   ----------------
   > transaction hash:    0x4c37f4c67e56a07fb3615e62463da915f2af481cd09eb4f54f990921829463a1
   > Blocks: 0            Seconds: 0
   > contract address:    0xD59b6C2463670F5D7cE3f95Ec21B0Ef02cCfc69B
   > block number:        3
   > block timestamp:     1570380165
   > account:             0x4d4E8DF293475E4a2a78Fa4b9D7004b628381047
   > balance:             99.89585096
   > gas used:            4880574
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.09761148 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.09761148 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.10330836 ETH
```

## Rinkeby deployment
```
truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/accesscontrol/Roles.sol
> Compiling ./contracts/accesscontrol/wine/BottleBuyer.sol
> Compiling ./contracts/accesscontrol/wine/BottleOwner.sol
> Compiling ./contracts/accesscontrol/wine/GrapeOwner.sol
> Compiling ./contracts/core/Ownable.sol
> Compiling ./contracts/winebase/Wine.sol
> Artifacts written to /home/pranshu/Documents/Udacity-wine-supply-project/wine-supply-chain/build/contracts
> Compiled successfully using:
   - solc: 0.5.0+commit.1d4f565a.Emscripten.clang


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x6ac8d8


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        5226814
   > block timestamp:     1570541225
   > account:             0x4d4E8DF293475E4a2a78Fa4b9D7004b628381047
   > balance:             2.999460312
   > gas used:            269844
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000539688 ETH

   -------------------------------------
   > Total cost:         0.000539688 ETH


2_wine_supply_chain.js
======================

   Deploying 'Wine'
   ----------------
   > block number:        5226816
   > block timestamp:     1570541250
   > account:             0x4d4E8DF293475E4a2a78Fa4b9D7004b628381047
   > balance:             2.989765096
   > gas used:            4820574
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.009641148 ETH

   -------------------------------------
   > Total cost:         0.009641148 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.010180836 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6acfc0


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xb3e701c5f452a41a3484bd848c50006e20b3ed640ef9b24e68c097aae7d1f668
   > Blocks: 2            Seconds: 28
   > contract address:    0x6B27dcb4241DfEE654aE81DD903fe900EF64Ab0B
   > block number:        5226818
   > block timestamp:     1570541291
   > account:             0x4d4E8DF293475E4a2a78Fa4b9D7004b628381047
   > balance:             2.99430312
   > gas used:            284844
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00569688 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00569688 ETH


2_wine_supply_chain.js
======================

   Deploying 'Wine'
   ----------------
   > transaction hash:    0x4c37f4c67e56a07fb3615e62463da915f2af481cd09eb4f54f990921829463a1
   > Blocks: 1            Seconds: 17
   > contract address:    0xD59b6C2463670F5D7cE3f95Ec21B0Ef02cCfc69B
   > block number:        5226822
   > block timestamp:     1570541351
   > account:             0x4d4E8DF293475E4a2a78Fa4b9D7004b628381047
   > balance:             2.89585096
   > gas used:            4880574
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.09761148 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.09761148 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.10330836 ETH
```
## Libraries and Framework


## Node
The project is built with Node.js 8.9.4

Truffle and Ganache
truffle version output
```
Truffle v5.0.7 (core: 5.0.7)
Solidity v0.5.0 (solc-js)
Node v8.9.4
```
Truffle provides the ability to compile and deploy the contract to the target network.

Ganache provides ability to run the test Etherium network locally, so it is much easier to test the contract and it's front-end during the development.

Metamask
Metamask 6.2.2 version is used for interaction with contract. Metamask provides ability to interact the contract deployed to any network using the browser plugin.

## Express
Express 4.16.4 version is used Express provides the ability to serve the contract front-end to the end-user browser.
