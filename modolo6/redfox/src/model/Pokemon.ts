export class Pokemon {
    constructor(
        private id: number,
        private name: string,
        private pokedexNumber: number,
        private generation: number,
        private evolution_stage: number,
        private type: string,
        private atack: number,
        private defense: number
        
    ){}

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name
    }

    public getPokedexNumber(): number {
        return this.pokedexNumber
    }
  
}