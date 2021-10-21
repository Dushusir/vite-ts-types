export interface IRenderData {
    str:string;
    num:number;
}

export class Render {
    constructor(){
        this.init();
    }
    init(){
        console.log('Render init in core!')
    }
}

export class RenderTwo{
    constructor(){
        this.init()
    }
    init(){
        console.info('render Two')
    }
}