import { BaseConfig, Point2D, Rect2D } from "../DataTypes";

export class GameContainer extends Phaser.GameObjects.Container {
    protected static fullDimensions: Rect2D;
    protected containerDimensions: Rect2D;

    public get dimensions(): Rect2D {
        if (!GameContainer.fullDimensions) {
            GameContainer.fullDimensions = { x: 0, y: 0, width: this.scene.game.config.width as number, height: this.scene.game.config.height as number };
        }
        if (this.containerDimensions) {
            return this.containerDimensions;
        } else {
            return GameContainer.fullDimensions;
        }
    }

    public create<T extends Phaser.GameObjects.GameObject>(config: BaseConfig, ...args: any[]): T {
        let element: T = new (config.type as any)(this.scene, config, ...args);
        this.add(element);
        if (this.hasTransform(element)) {
            element.setPosition(element.x + this.dimensions.x + config.x * this.dimensions.width, element.y + this.dimensions.y + config.y * this.dimensions.height);
            element.name = config.name ? config.name : '';
        }
        return element;
    }

    protected hasTransform(element: any): element is Phaser.GameObjects.Components.Transform {
        return (element as Phaser.GameObjects.Components.Transform).x != undefined && (element as Phaser.GameObjects.Components.Transform).y != undefined;
    }

    protected addInteraction(element: Phaser.GameObjects.GameObject, event: string, callback: (...args: any[]) => void): void {
        element.setInteractive();
        element.on(event, callback, this);
    }
}