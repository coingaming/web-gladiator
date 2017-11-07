import { System } from '../System/System';
const DOMINANT = {
    WIDTH: 'width',
    HEIGHT: 'height'
}
export class LayoutComponent {
    left;
    top;
    name;
    owner;
    dominant;
    ratio;
    globalOwner;
    width;
    height;
    constructor(owner, { left = 'left', top = 'top', name = null, dominant = null, ratio = 1, width=true,height=true }) {
        this.owner = owner;
        this.name = name;
        this.left = left;
        this.top = top;
        this.dominant = dominant;
        this.ratio = ratio;
        this.globalOwner = this.owner.owner;
        this.width=width;
        this.height=height;
    }
    update() {
        let subView = System.getInstance().getSystem('layout').getSubView(this.name)
        if (subView) {
            let width = subView["width"];
            let height = subView["height"];
            this.owner.left = subView[this.left] - (this.globalOwner["globalLeft"] || 0);
            this.owner.top = subView[this.top] - (this.globalOwner["globalTop"] || 0);

        //    if(this.ratio!=1 && false){
        //     let rHeight = height / this.ratio;
        //     let rWidth = width * this.ratio;
        //     if(rWidth<rHeight){
        //         height = width/this.ratio
        //     }
        //     else if(rHeight<rWidth){
        //         width = height * this.ratio;
        //     }}
          
            console.info(`${this.owner.name} Before height${height} width ${width}`)
           if(this.dominant==='height')
            width*=this.ratio;
           if(this.dominant==='width')
            height/=this.ratio;
            

            console.info(`${this.owner.name} After height${height} width ${width}`)

            if(this.width)
            this.owner.width = width;
            if(this.height)
            this.owner.height = height;
        }


    }

}