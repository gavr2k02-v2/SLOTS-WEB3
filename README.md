# SLOTS-WEB3

This is a test project for familiarization with technologie

For local network I am using Ganache and need truffle

Steps to launch:

1. Launch a project in Ganache
2. Create file `.env` in `./slots-app/` and provide secrets

```
ADDRESS_SLOT_CONTRACT="THE ADRESS OF CONTRACT (0xc2C7a0F57781422B1D8f107c4238bF7DF5Aaee39)"
LOCAL_PROVIDER="http://localhost:{THE PORT WHERE RUNNIG BLOCKCHAIN NETWORK (7545)}"
```

3. execute: `yarn start`
4. execute: `yarn migrate`
5. execute: `yarn dev:app`

You can biy coins and spin
<img width="1440" alt="Снимок экрана 2022-04-06 в 14 57 39" src="https://user-images.githubusercontent.com/102209956/162048624-ab85affd-76df-49d9-87ab-9704b69faa23.png">

The project has a problem with random in the blockchain, but this is necessary for familiarization
