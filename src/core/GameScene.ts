import { Level, LevelObjectiveData, LevelRouteData, LevelStageData } from "../components/level/LevelData";
import { IShadowConfig } from "../config/IShadowConfig";
import { YearOfShadowConfig } from "../config/YearOfShadowConfig";

export class GameScene extends Phaser.Scene {
    protected config: IShadowConfig;

    public create(): void {
        this.config = new YearOfShadowConfig;
        console.log(this.config);
        this.input.keyboard.addKey('SPACE').on('up', this.onSpace, this);
        this.input.keyboard.addKey('L').on('up', this.listCompletedRoutes, this);
    }

    protected onSpace(): void {
        this.showRoutes(7);
        this.listCompletedRoutes();
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

    protected displayRouteSummaries(routes: number[]): void {
        routes.forEach(route => {
            let data: LevelRouteData = this.config.levelData.routes.find(routeData => routeData.route == route);
            if (data) {
                console.log(`${route}: ${data.name} - ${data.path}\n--------------------`);
                let stageIndex: number = 0;
                let stageData: LevelStageData = this.getStage(Level.WESTOPOLIS);
                let objective: LevelObjectiveData;
                let path: string;
                while (stageIndex < data.path.length && stageData) {
                    path = data.path[stageIndex];
                    console.log(stageData.stage + ' - ' + (path ? path : ''));
                    objective = stageData.objectives.find(objective => objective.alignment == path);
                    if (!objective) {
                        console.error(stageData.stage + ': ' + path + ' not found');
                        break;
                    }
                    if (objective.boss) {
                        console.log("Boss: ", objective.boss);
                    }
                    stageData = this.getStage(objective.stage);
                    stageIndex++;
                }
                console.log('\n');
            } else {
                console.error(route);
            }
        });
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