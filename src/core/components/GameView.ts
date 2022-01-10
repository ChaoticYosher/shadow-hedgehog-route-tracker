import { ViewConfig } from "../DataTypes";
import { GameContainer } from "./GameContainer";

export class GameView extends GameContainer {
    protected config: ViewConfig;
    protected debugGraphics: Phaser.GameObjects.Graphics;
    public init(config: ViewConfig): void {
        this.config = config;
        this.createBoundary();
        this.createDebugPanel();
    }

    protected createBoundary(): void {
        if (this.config.bounds) {
            let temp = this.dimensions;
            this.containerDimensions = {
                x: this.config.bounds.x * GameContainer.fullDimensions.x,
                y: this.config.bounds.y * GameContainer.fullDimensions.y,
                width: this.config.bounds.width * GameContainer.fullDimensions.width,
                height: this.config.bounds.height * GameContainer.fullDimensions.height,
            }
        }
    }

    protected createDebugPanel(): void {
        if (this.config.debug) {
            this.debugGraphics = this.scene.add.graphics({ lineStyle: { color: 0x00ff00, width: 1 }, fillStyle: { color: 0xaf69ff, alpha: 0.1 } });
            this.debugGraphics.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
            this.debugGraphics.strokeLineShape(new Phaser.Geom.Line(0, this.dimensions.height * 0.5, this.dimensions.width, this.dimensions.height * 0.5));
            this.debugGraphics.strokeLineShape(new Phaser.Geom.Line(this.dimensions.width * 0.5, 0, this.dimensions.width * 0.5, this.dimensions.height));
            this.add(this.debugGraphics);
        }
    }
}