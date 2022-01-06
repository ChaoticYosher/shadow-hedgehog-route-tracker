const path = require('path');
const WebpackFreeTexPacker = require('webpack-free-tex-packer');
import { SpritesheetData } from "./DataTypes";

export class GameSheet {
    public static plugin(data: SpritesheetData): any {
        let sources: string[] = [];
        data.assets.forEach(asset => sources.push(...path.resolve(__dirname, '..', 'assets', 'source', asset.paths)));
        return new WebpackFreeTexPacker(sources, path.resolve(__dirname, '..', 'assets', 'export', data.output), {
            textureName: data.name,
            width: 2048,
            height: 2048,
            fixedSize: false,
            exporter: 'Phaser3',
        });
    }
}