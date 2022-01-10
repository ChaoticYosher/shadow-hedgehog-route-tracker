import { GameRectangle } from "../../core/components/GameRectangle";
import { GameText } from "../../core/components/GameText";
import { GameView } from "../../core/components/GameView";
import { GameEvent } from "../../core/GameEvent";
import { AlignmentType, Color, Level, LevelObjectiveData, LevelRouteData, LevelStageData, StageInfoData } from "../level/LevelData";
import { RouteConfig } from "./RouteConfig";

export class RouteView extends GameView {
    protected config: RouteConfig
    protected addedRoutes: number[];
    protected routeInfo: GameText;
    protected stage: GameText;
    protected objective: GameText;
    protected routeButton: GameRectangle;
    protected objectiveButton: GameRectangle;
    protected stageData: StageInfoData[];
    protected currentObjective: number;

    constructor(scene: Phaser.Scene, x?: number, y?: number, children?: Phaser.GameObjects.GameObject[]) {
        super(scene, x, y, children);
    }

    public init(config: RouteConfig): void {
        super.init(config);
        this.routeInfo = this.create<GameText>(this.config.title);
        this.stage = this.create<GameText>(this.config.stage);
        this.objective = this.create<GameText>(this.config.objective);
        this.routeButton = this.create<GameRectangle>(this.config.routeButton, this);
        this.objectiveButton = this.create<GameRectangle>(this.config.objectiveButton, this);
        this.addedRoutes = [];
        this.addInteraction(this.routeButton, GameEvent.POINTER_UP, this.chooseRoute);
        this.addInteraction(this.objectiveButton, GameEvent.POINTER_UP, this.nextObjective);
        this.displayRouteSummary();
    }

    protected chooseRoute(): void {
        this.showRoutes(1);
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
                selected.push(...incomplete.splice(Phaser.Math.Between(0, incomplete.length - 1), 1));
            }
        }
        return selected;
    }

    protected getStage(stageName: string): LevelStageData {
        if (stageName) {
            return this.config.levelData.stages.find(stage => stage.stage == stageName);
        }
    }

    protected addObjective(stage: string, alignment: string, objective: string): StageInfoData {
        let color: Color;
        switch (alignment) {
            case AlignmentType.DARK:
                color = Color.Dark;
                break;
            case AlignmentType.NEUTRAL:
                color = Color.Neutral;
                break;
            case AlignmentType.HERO:
                color = Color.Hero;
                break;
        }
        return { stage: stage, objective: objective ? objective : '', color: color };
    }

    protected updateObjectiveInfo(data: StageInfoData): void {
        this.stage.setStyle({ fill: data.color });
        this.stage.setText(data.stage);
        this.objective.setStyle({ fill: data.color });
        this.objective.setText(data.objective);
    }

    protected nextObjective(): void {
        if (this.currentObjective != undefined && this.stageData) {
            this.currentObjective++;
            if (this.stageData[this.currentObjective]) {
                this.updateObjectiveInfo(this.stageData[this.currentObjective]);
            }
        }
    }

    protected displayRouteSummary(route: number = this.config.completedLevels[this.config.completedLevels.length - 1]): void {
        let data: LevelRouteData = this.config.levelData.routes.find(routeData => routeData.route == route);
        if (data) {
            this.routeInfo.setText(`[${data.route}]: ${data.name}`);
            console.log(`${route}: ${data.name} - ${data.path}\n--------------------`);
            let stageIndex: number = 0;
            let stageData: LevelStageData = this.getStage(Level.WESTOPOLIS);
            let objective: LevelObjectiveData;
            this.stageData = [];
            this.currentObjective = -1;
            let path: string;
            while (stageIndex < data.path.length && stageData) {
                path = data.path[stageIndex];
                console.log(stageData.stage + ' - ' + (path ? path : ''));
                objective = stageData.objectives.find(objective => objective.alignment == path);
                if (!objective) {
                    console.error(stageData.stage + ': ' + path + ' not found');
                    break;
                }
                this.stageData.push(this.addObjective(stageData.stage, objective.alignment, objective.task));
                if (objective.boss) {
                    this.stageData.push(this.addObjective(stageData.stage, objective.alignment, objective.boss));
                    console.log("Boss: ", objective.boss);
                }
                stageData = this.getStage(objective.stage);
                stageIndex++;
            }
            console.log('\n');
        } else {
            console.error(route);
        }
    }

    protected displayRouteSummaries(routes: number[]): void {
        routes.forEach(route => this.displayRouteSummary(route));
    }

    protected listCompletedRoutes(): void {
        console.log(
            this.config.completedLevels.map(i => i.toString())
                .reduce((previous, route) => previous + "\n" + route + ',', '')
        );
    }

    protected listSelection(selection: number[]): void {
        selection.forEach(route => {
            console.log(this.config.levelData.routes[route].name);
        })
        console.log();
    }

    protected showRoutes(count: number): void {
        let newRoutes: number[] = this.selectRoutes(count);
        this.listSelection(newRoutes);
        this.displayRouteSummaries(newRoutes);
        newRoutes.forEach(route => this.config.completedLevels.push(route));
    }

    protected validateRoutes(): void {
        let checked: LevelRouteData[] = [];
        this.incompleteRoutes().forEach(incompleteRoute => {
            let checkData: LevelRouteData = this.config.levelData.routes.find(route => route.route == incompleteRoute);
            checked.forEach(checkRoute => {
                if (checkData.path == checkRoute.path) {
                    console.log(incompleteRoute + ': ' + checkData.path);
                }
            });
            checked.push(checkData)
        });
    }
}