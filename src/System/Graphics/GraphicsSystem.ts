
import {Graphics} from '../../Graphics/Graphics';
//extends Facade
export class GraphicsSystem {
    private static instance: GraphicsSystem;
    
    private constructor() {
        // do something construct...
        //this._adapter = new Bus();
    }
    static getInstance() :GraphicsSystem{
        if (!this.instance) {
            this.instance = new GraphicsSystem();
            // ... any one time initialization goes here ...
        }
        return this.instance;
    }

    drawLine(owner,params={},{x=0,y=0,xa=0,ya=0,xb=10,yb=10,lineWidth=4,color=0x00FF00,alpha=1}){
        const graphics = new Graphics(owner,params);
        graphics.bootstrap(true);
        graphics
        .lineStyle(lineWidth,color,alpha)
        .moveTo(xa,ya)
        .lineTo(xb,yb)
        .endFill();
        owner.addNode(graphics);
    }
} 