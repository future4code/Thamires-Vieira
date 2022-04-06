import { PokeDatabase } from "../data/PokeDatabase";


export class PokeBusiness {

    async createUser(pokemon: any) {

        const pokeDatabase = new PokeDatabase();
        await pokeDatabase.addPoke(id, name, pokedexnumber, generation, evolution_stage, type, atack, defense);
    }

    // async getUserByEmail(user: LoginInputDTO) {

    //     const userDatabase = new UserDatabase();
    //     const userFromDB = await userDatabase.getUserByEmail(user.email);

    //     const hashManager = new HashManager();
    //     const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

    //     const authenticator = new Authenticator();
    //     const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

    //     if (!hashCompare) {
    //         throw new Error("Invalid Password!");
    //     }

    //     return accessToken;
    // }
}

function defense(id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) {
    throw new Error("Function not implemented.");
}
function generation(id: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) {
    throw new Error("Function not implemented.");
}

function id(id: any, name: void, pokedexnumber: any, generation: (id: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) => void, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) {
    throw new Error("Function not implemented.");
}

function pokedexnumber(id: any, name: void, pokedexnumber: any, generation: (id: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) => void, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) {
    throw new Error("Function not implemented.");
}

function evolution_stage(id: any, name: void, pokedexnumber: any, generation: (id: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) => void, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) {
    throw new Error("Function not implemented.");
}

function type(id: any, name: void, pokedexnumber: any, generation: (id: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) => void, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) {
    throw new Error("Function not implemented.");
}

function atack(id: any, name: void, pokedexnumber: any, generation: (id: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) => void, evolution_stage: any, type: any, atack: any, defense: (id: any, number: any, name: void, pokedexnumber: any, generation: any, evolution_stage: any, type: any, atack: any, defense: any) => void) {
    throw new Error("Function not implemented.");
}

