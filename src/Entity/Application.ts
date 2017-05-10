import * as PIXI from 'pixi.js'

import { Entity } from "./Entity";
import { SceneManager } from '../Foundation/Manager/SceneManager';
import { System } from "../System/System";
import { GameObjectBuilder } from '../Foundation/Builder/GameObjectBuilder';


export class Application extends Entity {

    _application;
    _loading;
    _currentScene;
    sceneMap;
    canvas;
    renderer;
    canResize = true;
    constructor(owner = null, params) {
        super(owner, params);
        this.sceneMap = params.sceneMap;
        this._application = new PIXI.Application(window.innerWidth, window.innerHeight,
            {
                antialiasing: false,
                transparent: false,
                autoResize: true
            }
        );
        this.renderer = this._application.renderer;
        this.canvas = this._application.view;
        this.$view = this._application.stage;

        //this.$height = window.innerHeight;
        //this.$width = window.innerWidth;
        document.body.appendChild(this.canvas);
        System.getInstance().getSystem("device").getResizeObs().subscribe(this.resize.bind(this))
        SceneManager.getInstance().setTarget(this);
    }

    refresh(){
        let dimensions = {
            width:window.innerWidth,
            height:window.innerHeight
        }
        this.resize(dimensions);
    }
    resize(dimensions) {
        if (!this.canResize) return;
        this.renderer.resize(dimensions.width, dimensions.height);
        this.parseLayout(dimensions.width, dimensions.height, 0, 0);
    }

}

GameObjectBuilder.getInstance().registerGameObject('Application', Application);