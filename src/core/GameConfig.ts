import { GameScene } from "./GameScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
    width: 1280,
    height: 720,
    parent: 'tracker',
    zoom: 1,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, },
            debug: false,
        },
    },
    scene: [GameScene]
}