import { ShadowEvents } from "../../config/IShadowConfig";
import { GameRectangle } from "../../core/components/GameRectangle";
import { GameText } from "../../core/components/GameText";
import { GameView } from "../../core/components/GameView";
import { GameEvent } from "../../core/GameEvent";
import {
    Level,
    LevelObjectiveData,
    LevelRouteData,
    LevelStageData,
    StageInfoData,
} from "../level/LevelData";
import { RouteConfig } from "./RouteConfig";
import { RouteMinimap } from "./RouteMinimap";

export class RouteView extends GameView {
    protected config: RouteConfig;
    protected addedRoutes: number[];
    protected routeNumber: GameText;
    protected routeTitle: GameText;
    protected stage: GameText;
    protected objective: GameText;
    protected routeButton: GameRectangle;
    protected objectiveButton: GameRectangle;
    protected stageData: StageInfoData[];
    protected currentObjective: number;
    protected currentRoute: number;
    protected minimap: RouteMinimap;

    constructor(
        scene: Phaser.Scene,
        x?: number,
        y?: number,
        children?: Phaser.GameObjects.GameObject[]
    ) {
        super(scene, x, y, children);
    }

    public init(config: RouteConfig): void {
        super.init(config);
        this.routeNumber = this.create<GameText>(this.config.routeNumber);
        this.routeTitle = this.create<GameText>(this.config.title);
        this.stage = this.create<GameText>(this.config.stage);
        this.objective = this.create<GameText>(this.config.objective);
        this.routeButton = this.create<GameRectangle>(
            this.config.routeButton,
            this
        );
        this.objectiveButton = this.create<GameRectangle>(
            this.config.objectiveButton,
            this
        );
        this.minimap = this.create<RouteMinimap>(this.config.minimap, this);
        this.minimap.copyPosition(new Phaser.Math.Vector2());
        this.addedRoutes = [];
        this.selectInitialRoute();
        this.addInteraction(
            this.routeButton,
            GameEvent.POINTER_UP,
            this.nextRoute
        );
        this.addInteraction(
            this.objectiveButton,
            GameEvent.POINTER_UP,
            this.nextObjective
        );
        this.displayRouteSummary();
    }

    protected get currRoute(): LevelRouteData {
        return this.config.levelData.routes.find(
            (routeData) =>
                routeData.route ==
                this.config.completedLevels[this.currentRoute]
        );
    }

    protected selectInitialRoute(): void {
        this.currentRoute = this.config.completedLevels.length - 1;
        if (this.config.startLevel != undefined) {
            let routeIndex: number = this.config.completedLevels.findIndex(
                (level) => level == this.config.startLevel
            );
            if (routeIndex != -1) {
                this.currentRoute = routeIndex;
            }
        }
    }

    public nextRoute(): void {
        if (this.currentRoute >= this.config.completedLevels.length - 1) {
            this.selectNewRoutes(1);
        } else {
            this.currentRoute++;
        }
        this.displayRouteSummary();
    }

    protected incompleteRoutes(): number[] {
        let incomplete: number[] = [];
        for (let i = 1; i <= 326; i++) {
            if (!this.config.completedLevels.includes(i)) {
                incomplete.push(i);
            }
        }
        return incomplete;
    }

    protected selectRoutes(count: number): number[] {
        let incomplete: number[] = this.incompleteRoutes();
        let selected: number[] = [];
        for (let i = 0; i < count; i++) {
            if (incomplete.length > 0) {
                selected.push(
                    ...incomplete.splice(
                        Phaser.Math.Between(0, incomplete.length - 1),
                        1
                    )
                );
            }
        }
        return selected;
    }

    protected getStage(stageName: string): LevelStageData {
        if (stageName) {
            return this.config.levelData.stages.find(
                (stage) => stage.stage == stageName
            );
        }
    }

    protected addObjective(
        stage: string,
        alignment: string,
        objective: string
    ): StageInfoData {
        return {
            stage: stage,
            objective: objective ? objective : "",
            color: alignment,
        };
    }

    protected setStageColour(
        text: GameText,
        color: { fill: string; border: string }
    ): void {
        text.setStyle({ fill: color.fill, stroke: color.border });
    }

    protected updateObjectiveInfo(data?: StageInfoData): void {
        if (data) {
            this.setStageColour(this.stage, this.config.colorData[data.color]);
            this.stage.setText(data.stage);
            this.setStageColour(
                this.objective,
                this.config.colorData[data.color]
            );
            this.objective.setText(data.objective);
        } else {
            this.stage.setText("");
            this.objective.setText("");
        }
        this.minimap.draw(this, this.currStage);
    }

    protected get currStage(): number {
        if (this.stageData && this.currentObjective != undefined) {
            return (
                this.config.levelData.stages.find(
                    (stage) =>
                        stage.stage ==
                        this.stageData[this.currentObjective]?.stage
                )?.sequence ?? 0
            );
        }
    }

    public nextObjective(): void {
        if (this.currentObjective != undefined && this.stageData) {
            this.currentObjective++;
            if (this.stageData[this.currentObjective]) {
                this.updateObjectiveInfo(this.stageData[this.currentObjective]);
            } else {
                this.sendCompletedList();
            }
        }
    }

    public sendCompletedList(): void {
        let completed: number[] = [...this.config.completedLevels].filter(
            (route, index) => index <= this.currentRoute
        );
        completed.sort((a, b) => a + 0 - (b + 0));
        this.emitRouteList(completed, ShadowEvents.SHOW_COMPLETE_RUNS);
    }

    protected emitRouteList(routes: number[], eventName: string): void {
        this.emit(eventName, {
            routes: routes.map((routeNumber) =>
                this.config.levelData.routes.find(
                    (route) => route.route == routeNumber
                )
            ),
        });
    }

    // protected printRouteSummary(route: number = this.config.completedLevels[this.config.completedLevels.length - 1]): void {
    //     let data: LevelRouteData = this.config.levelData.routes.find(routeData => routeData.route == route);
    //     if (data) {
    //         console.log(`${route}: ${data.name} - ${data.path}\n--------------------`);
    //         let stageIndex: number = 0;
    //         let stageData: LevelStageData = this.getStage(Level.WESTOPOLIS);
    //         let objective: LevelObjectiveData;
    //         this.stageData = [];
    //         this.currentObjective = -1;
    //         let path: string;
    //         while (stageIndex < data.path.length && stageData) {
    //             path = data.path[stageIndex];
    //             console.log(stageData.stage + ' - ' + (path ? path : ''));
    //             objective = stageData.objectives.find(objective => objective.alignment == path);
    //             if (!objective) {
    //                 console.error(stageData.stage + ': ' + path + ' not found');
    //                 break;
    //             }
    //             if (objective.boss) {
    //                 console.log("Boss: ", objective.boss);
    //             }
    //             stageData = this.getStage(objective.stage);
    //             stageIndex++;
    //         }
    //         console.log('\n');
    //     } else {
    //         console.error(route);
    //     }
    // }

    protected displayRouteSummary(route?: number): void {
        let data: LevelRouteData;
        if (route == undefined) {
            data = this.currRoute;
        } else {
            data = this.config.levelData.routes.find(
                (routeData) => routeData.route == route
            );
        }
        if (data) {
            this.routeTitle.setText(`${data.name}`);
            this.routeNumber.setText(`${data.route}`);
            let stageIndex: number = 0;
            let stageData: LevelStageData = this.getStage(Level.WESTOPOLIS);
            let objective: LevelObjectiveData;
            this.stageData = [];
            let routeStages: LevelStageData[] = [];
            this.currentObjective = -1;
            let path: string;
            while (stageIndex < data.path.length && stageData) {
                routeStages.push(stageData);
                path = data.path[stageIndex];
                objective = stageData.objectives.find(
                    (objective) => objective.alignment == path
                );
                if (!objective) {
                    break;
                }
                this.stageData.push(
                    this.addObjective(
                        stageData.stage,
                        objective.alignment,
                        objective.task
                    )
                );
                if (objective.boss) {
                    this.stageData.push(
                        this.addObjective(
                            stageData.stage,
                            objective.alignment,
                            objective.boss
                        )
                    );
                }
                stageData = this.getStage(objective.stage);
                stageIndex++;
            }
            this.minimap.setRoute(routeStages);
        }
        this.updateObjectiveInfo();
    }

    protected displayRouteSummaries(routes: number[]): void {
        routes.forEach((route) => this.displayRouteSummary(route));
    }

    protected listRouteNumbers(
        routes: number[] = this.config.completedLevels
    ): void {
        console.log(
            routes
                .map((i) => i.toString())
                .reduce((previous, route) => previous + "\n" + route + ",", "")
        );
    }

    protected listSelection(selection: number[]): void {
        selection.forEach((route) => {
            console.log(this.config.levelData.routes[route].name);
        });
        console.log();
    }

    protected selectNewRoutes(count: number): void {
        let newRoutes: number[] = this.selectRoutes(count);
        newRoutes.forEach((route) => this.config.completedLevels.push(route));
        this.listRouteNumbers(newRoutes);
        this.emitRouteList(newRoutes, ShadowEvents.GENERATE_RUN_WEEK);
    }

    protected validateRoutes(): void {
        let checked: LevelRouteData[] = [];
        this.incompleteRoutes().forEach((incompleteRoute) => {
            let checkData: LevelRouteData = this.config.levelData.routes.find(
                (route) => route.route == incompleteRoute
            );
            checked.forEach((checkRoute) => {
                if (checkData.path == checkRoute.path) {
                    console.log(incompleteRoute + ": " + checkData.path);
                }
            });
            checked.push(checkData);
        });
    }
}
