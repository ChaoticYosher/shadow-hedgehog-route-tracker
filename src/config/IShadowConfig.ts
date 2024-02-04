import { BingoViewConfig } from "../components/bingo/BingoViewConfig";
import { ListViewConfig } from "../components/list/ListViewConfig";
import { RouteConfig } from "../components/route/RouteConfig";

export class ShadowEvents {
    public static readonly SHOW_COMPLETE_RUNS: string = "eventShowCompleteRuns";
    public static readonly GENERATE_RUN_WEEK: string = "eventGenerateRunWeek";
}

export interface IShadowConfig {
    route: RouteConfig;
    fullBingo: BingoViewConfig;
    bingoPreview: BingoViewConfig;
    fullList: ListViewConfig;
    nextSelection: ListViewConfig;
}
