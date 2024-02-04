import { TextConfig } from "../DataTypes";

export class GameText extends Phaser.GameObjects.Text {
    constructor(scene: Phaser.Scene, config: TextConfig) {
        super(scene, config.x, config.y, config.text, config.style);
        if (config.origin) {
            this.setOrigin(config.origin.x, config.origin.y);
        } else {
            this.setOrigin(0.5, 0.5);
        }
    }
}
