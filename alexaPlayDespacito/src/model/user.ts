class User {
    userId: number;
    name: string;
    token: string;

    constructor(name: string, token: string) {
        this.name = name; this.token = token;
    }
}
