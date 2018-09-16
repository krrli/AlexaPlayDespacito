export class User {
    userId: number;
    username: string;
    email: string;

    constructor(name: string) {
        this.username = name;
        this.email = name + '@test.com';
    }
}
