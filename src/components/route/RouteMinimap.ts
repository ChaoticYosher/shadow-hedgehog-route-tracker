import { GameContainer } from "../../core/components/GameContainer";
import { LevelStageData } from "../level/LevelData";
import { MinimapConfig } from "./RouteConfig";

export class RouteMinimap extends Phaser.GameObjects.Graphics {
    protected static cellCount: Phaser.Math.Vector2 = new Phaser.Math.Vector2(
        6,
        5
    );
    protected static strokeWidth: number = 2;
    protected config: MinimapConfig;
    protected cellOffset: Phaser.Math.Vector2;
    protected cellSize: Phaser.Math.Vector2;
    protected cellPadding: Phaser.Math.Vector2;
    protected routeCells: Phaser.Math.Vector2[];

    constructor(scene: Phaser.Scene, config: MinimapConfig) {
        super(scene);
        this.config = config;
        this.routeCells = [];
    }

    public setRoute(stages: LevelStageData[]): void {
        this.routeCells = stages.map(
            (stage) =>
                new Phaser.Math.Vector2(
                    stage.sequence - 1,
                    2 + stage.alignmentOffset
                )
        );
    }

    protected updateGridDimensions(container: GameContainer): void {
        this.cellPadding = new Phaser.Math.Vector2(
            0.01 * container.dimensions.width * this.config.width,
            0.01 * container.dimensions.height * this.config.height
        );
        this.cellOffset = new Phaser.Math.Vector2(
            this.config.x * container.dimensions.width,
            this.config.y * container.dimensions.height
        );
        this.cellSize = new Phaser.Math.Vector2(
            (this.config.width * container.dimensions.width -
                (RouteMinimap.cellCount.x - 1) * this.cellPadding.x) /
                RouteMinimap.cellCount.x,
            (this.config.height * container.dimensions.height -
                (RouteMinimap.cellCount.y - 1) * this.cellPadding.y) /
                RouteMinimap.cellCount.y
        );
    }

    protected drawCell(row: number, col: number): void {
        this.fillRoundedRect(
            this.cellOffset.x + col * (this.cellSize.x + this.cellPadding.x),
            this.cellOffset.y + row * (this.cellSize.y + this.cellPadding.y),
            this.cellSize.x,
            this.cellSize.y,
            4
        );
    }

    public draw(container: GameContainer, currentLevel: number): void {
        this.clear();
        this.updateGridDimensions(container);
        this.routeCells.forEach((stage, index) => {
            this.fillStyle(
                index < currentLevel
                    ? this.config.complete
                    : this.config.incomplete
            );
            this.drawCell(stage.y, stage.x);
        });
        this.fillStyle(this.config.excluded);
        for (let row = 0; row < RouteMinimap.cellCount.y; row++) {
            for (let col = 0; col < RouteMinimap.cellCount.x; col++) {
                if (
                    this.routeCells.find(
                        (stage) => stage.x == col && stage.y == row
                    )
                ) {
                    continue;
                }
                if (col < 1) {
                    if (row <= 1 || row >= RouteMinimap.cellCount.y - 2) {
                        continue;
                    }
                } else if (col < 3) {
                    if (row <= 0 || row >= RouteMinimap.cellCount.y - 1) {
                        continue;
                    }
                }
                this.drawCell(row, col);
            }
        }
    }
}
