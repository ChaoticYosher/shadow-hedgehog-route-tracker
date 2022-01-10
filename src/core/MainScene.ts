import { RouteView } from "../components/route/RouteView";
import { IShadowConfig } from "../config/IShadowConfig";
import { YearOfShadowConfig } from "../config/YearOfShadowConfig";
import { GameScene } from "./GameScene";

export class MainScene extends GameScene {
    protected config: IShadowConfig;

    protected startGame(): void {
        this.config = new YearOfShadowConfig;
        this.createView(this.config.route);
    }
}