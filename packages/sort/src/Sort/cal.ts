// import { IRenderData, Render } from "@vite-ts-types/core"

export interface ICalBase{
    calStr:string;
    calNum:number;
    ca: IRenderData;
    cc:Render;
}

function dec(){
    console.info('dec.....')
}
export class Cal{
    // c:RenderTwo;
    // d:Luckysheet.Render
    constructor(cal?:ICalBase){
        
        // new Render();
        this.calReal()

        // new RenderTwo()
    }
    @dec
    calReal(){
        console.info('cal in sort')
    }
}