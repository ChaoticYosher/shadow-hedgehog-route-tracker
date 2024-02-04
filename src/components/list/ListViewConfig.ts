import { TextConfig, ViewConfig } from "../../core/DataTypes";

export interface ListViewConfig extends ViewConfig {
    text: TextConfig;
    elementsPerPage: number;
    lineSpacing?: number;
}
