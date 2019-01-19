export class person {
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;
    
    constructor(public firstName: string, lastName: string, age: number, isAlive: boolean){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = true;
    }    
}

export const humanoidA = new person('sam','smith',32,true);