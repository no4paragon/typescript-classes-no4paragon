export class planet {
    width:number;
    color:string;
    
    constructor(public width:number, public color:string){
        this.width = width;
        this.color = color;
    }
}

export const krypton = new planet(100,"yellow")
export const omicronPersei8 = new planet(890,"blue")
export const nemesis = new planet(983750,"red")