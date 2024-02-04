import { BingoView } from "../components/bingo/BingoView";
import { CompletedRunsData } from "../components/level/LevelData";
import { ListView } from "../components/list/ListView";
import { RouteView } from "../components/route/RouteView";
import { IShadowConfig, ShadowEvents } from "../config/IShadowConfig";
import { YearOfShadowConfig } from "../config/YearOfShadowConfig";
import { GameScene } from "./GameScene";

export class MainScene extends GameScene {
    protected config: IShadowConfig;
    protected route: RouteView;
    protected bingo: BingoView;
    protected bingoPreview: BingoView;
    protected routeList: ListView;
    protected weeklyRouteList: ListView;

    protected startGame(): void {
        this.config = new YearOfShadowConfig();
        console.log(JSON.stringify(this.config.route.levelData, null, 2));
        this.route = this.createView(this.config.route);
        this.route.on(
            ShadowEvents.SHOW_COMPLETE_RUNS,
            this.onShowCompleteRun,
            this
        );
        this.route.on(
            ShadowEvents.GENERATE_RUN_WEEK,
            this.onNewWeekGenerated,
            this
        );
        this.bingo = this.createView(this.config.fullBingo);
        this.bingoPreview = this.createView(this.config.bingoPreview);
        this.routeList = this.createView(this.config.fullList);
        this.routeList.allowClickPaging();
        this.weeklyRouteList = this.createView(this.config.nextSelection);
    }

    public nextRoute(): void {
        this.route.nextRoute();
    }

    public nextObjective(): void {
        this.route.nextObjective();
    }

    protected onShowCompleteRun(data: CompletedRunsData): void {
        this.routeList.updateList(
            data.routes.map((route) => `${route.route}:\t${route.name}`)
        );
    }

    protected onNewWeekGenerated(data: CompletedRunsData): void {
        this.weeklyRouteList.updateList(
            data.routes.map((route) => `${route.route}:\t${route.name}`)
        );
    }
}
