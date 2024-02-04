import { Container } from "typescript-ioc";
import { GameView } from "./components/GameView";
import { ViewConfig } from "./DataTypes";

export class GameScene extends Phaser.Scene {
    protected config: any;
    protected views: { [key: string]: GameView };

    protected createView<V extends GameView>(config: ViewConfig): V {
        if (!this.views[config.key]) {
            this.views[config.key] = new (config.type as any)(this);
            this.views[config.key].init(config);
            this.add.existing(this.views[config.key]);
            return this.views[config.key] as V;
        }
    }

    protected startGame(): void {}

    public create(): void {
        this.views = {};
        this.startGame();
    }

    public update(time: number, delta: number): void {
        super.update(time, delta);
        for (let view of Object.values(this.views)) {
            view.update(time, delta);
        }
    }
}
