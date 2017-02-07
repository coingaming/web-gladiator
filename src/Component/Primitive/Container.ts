import * as PIXI from 'pixi.js'

import { DisplayObject } from '../Primitive/DisplayObject';
import { Component } from '../Base/Component';
import { VirtualView } from '../Base/VirtualView';

export class Container extends VirtualView {
    
 constructor({owner,name,componentList,config,vfl=[""]}){
     super({owner,name,componentList,config,vfl});
     this.$view = new PIXI.Container();
 }
} 
