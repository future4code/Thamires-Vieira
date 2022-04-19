export type authenticationData = {
    id: string,   
}

export default class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }

    public getPassword(): string {
        return this.password;
    }
    public setPassword(value: string) {
        this.password = value;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    public getid(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }  
}