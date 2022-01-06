export interface Point2D {
    x: number;
    y: number;
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

