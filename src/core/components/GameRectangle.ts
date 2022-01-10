import { Point2D, RectangleConfig } from "../DataTypes";
import { GameContainer } from "./GameContainer";

export class GameRectangle extends Phaser.GameObjects.Rectangle {
    protected config: RectangleConfig;

    constructor(scene: Phaser.Scene, config: RectangleConfig, container: GameContainer) {
        super(scene, 0, 0, 0, 0, config.color == undefined ? 0x000000 : config.color, config.alpha == undefined ? 1 : config.alpha);
        this.setSize(config.width * container.dimensions.width, config.height * container.dimensions.height);
        this.x = -this.width * 0.5;
        this.y = -this.height * 0.5;
    }
}