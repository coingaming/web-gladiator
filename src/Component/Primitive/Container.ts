import * as PIXI from 'pixi.js'

import { DisplayObject } from '../Primitive/DisplayObject';
import { Component } from '../Base/Component';
import { View } from '../Base/View';

export class Container extends View{
    
 constructor({owner,name,componentList,config,vfl=[""]}){
     super({owner,name,componentList,config,vfl});
     this.$view = new PIXI.Container();
 }
} 
