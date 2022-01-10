export interface Point2D {
    x: number;
    y: number;
}

export interface Rect2D extends Point2D {
    width: number;
    height: number;
}

export interface GameAssetData {
    paths: string[],
    customPivot?: Point2D;
}

export interface SpritesheetData {
    assets: GameAssetData[];
    name: string;
    output: string;
}

export interface ViewConfig {
    key: string;
    type: Function;
    bounds?: Rect2D;
    debug?: boolean;
}

export interface BaseConfig {
    name?: string;
    x: number;
    y: number;
    type: Class;
}

export interface TextConfig extends BaseConfig {
    text: string | string[];
    style: Phaser.Types.GameObjects.Text.TextStyle;
    origin?: Point2D;
}

export interface RectangleConfig extends BaseConfig {
    width: number;
    height: number;
    color?: number;
    alpha?: number;
}