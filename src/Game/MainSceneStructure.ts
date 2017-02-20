import { Component } from "../Component/Base/Component";
import { Container } from "../Component/Primitive/Container";
import { Scene } from "../Component/Primitive/Scene";
import { Application } from "../Component/Primitive/Application";
import { Sprite } from "../Component/Primitive/Sprite";
import { AnimatedSprite } from "../Component/Primitive/AnimatedSprite";
export const App = {
    "name": "Application",
    "family": Application,
    "config": null,
    "vfl": [
        'H:|[Game(100%)]|',
        'V:|[Game(100%)]|'
    ],
    "componentList": [
        {
            "name": "Game",
            "family": Scene,
            "vfl": [
                'H:|~[One(One.height)]~|',
                'H:|~[One(<=80%)]~|',
                'V:|~[One(One.width)]~|',
                'V:|~[One(<=80%)]~|',
            ],
            "componentList": [
                {
                    "name": "One",
                    "family": Container,
                    "config": "",
                    "vfl": [
                        "H:|[box00(square)][box01(square)][box02(square)]|",
                        "H:|[box10(square)][box11(square)][box12(square)]|",
                        "H:|[box20(square)][box21(square)][box22(square)]|",
                        "V:|[box00(square)]~|",
                        "V:|[box01(square)]~|",
                        "V:|[box02(square)]~|",
                        "V:|~[box10(square)]~|",
                        "V:|~[box11(square)]~|",
                        "V:|~[box12(square)]~|",
                        "V:|~[box20(square)]|",
                        "V:|~[box21(square)]|",
                        "V:|~[box22(square)]|",
                        "HV:|[square(33.33%)]~|"

                    ],
                    "repeatableList": [{
                        "repeats": [
                            {"name":"box00","id":0},
                            {"name":"box01","id":1},
                            {"name":"box02","id":2},
                            {"name":"box10","id":3},
                            {"name":"box11","id":4},
                            {"name":"box12","id":5},
                            {"name":"box20","id":6},
                            {"name":"box21","id":7},
                            {"name":"box22","id":8},
                        ],
                        "repeatable":
                        {
                            "name": "repeatable",
                            "repeatable": true,
                            "family": Container,
                            "vfl": [
                                "HV:|[sprite]|",
                                "HV:|[animatedSprite]|"
                            ],
                            "componentList": [
                                {
                                    "name": "sprite",
                                    "family": Sprite,
                                    "source": "images/squareC.png"
                                },
                                {
                                    "name": "animatedSprite",
                                    "family": AnimatedSprite,
                                    "frameList": [
                                        {
                                            prefix: "rollSequence00",
                                            start: 0,
                                            end: 29,
                                            postfix: ".png"
                                        }
                                    ]
                                }
                            ]
                        }
                    }]
                }
            ]
        }
    ]
}