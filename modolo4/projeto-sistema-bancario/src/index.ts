import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

//SISTEMA BANCÁRIO

type user = {
    name: string,
    document: string,
    birthDate: string,
}

const users: user[] = [
    {
        name: "Dona Florinda",
        document: "451.452.741-56",
        birthDate: "25/12/1955"
    },
]

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});