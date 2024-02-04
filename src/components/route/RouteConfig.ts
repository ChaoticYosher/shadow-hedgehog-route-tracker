import { RectangleConfig, TextConfig, ViewConfig } from "../../core/DataTypes";
import { LevelData } from "../level/LevelData";

export interface MinimapConfig extends RectangleConfig {
    excluded: number;
    complete: number;
    incomplete: number;
}

export interface RouteConfig extends ViewConfig {
    levelData: LevelData;
    completedLevels: number[];
    startLevel: number;
    routeNumber: TextConfig;
    title: TextConfig;
    stage: TextConfig;
    objective: TextConfig;
    routeButton: RectangleConfig;
    minimap: MinimapConfig;
    objectiveButton: RectangleConfig;
    colorData: { [key: string]: { border: string; fill: string } };
}
