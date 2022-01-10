import { RectangleConfig, TextConfig, ViewConfig } from "../../core/DataTypes";
import { LevelData } from "../level/LevelData";

export interface RouteConfig extends ViewConfig {
    levelData: LevelData;
    completedLevels: number[];
    title: TextConfig;
    stage: TextConfig;
    objective: TextConfig;
    routeButton: RectangleConfig;
    objectiveButton: RectangleConfig;
}