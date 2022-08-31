import { GameRectangle } from "../../core/components/GameRectangle";
import { GameText } from "../../core/components/GameText";
import { GameView } from "../../core/components/GameView";
import { RectangleConfig } from "../../core/DataTypes";
import { GameEvent } from "../../core/GameEvent";
import { ListViewConfig } from "./ListViewConfig";

export class ListView extends GameView {
    protected config: ListViewConfig;
    protected text: GameText;
    protected listItems: string[];
    protected offset: number;
    protected clickArea: GameRectangle;

    public init(config: ListViewConfig): void {
        super.init(config);
        this.text = this.create<GameText>(this.config.text);
        if (this.config.lineSpacing != undefined) {
            this.text.setLineSpacing(this.config.lineSpacing);
        }
    }

    public allowClickPaging(): void {
        this.clickArea = this.create<GameRectangle>({
            type: GameRectangle,
            x: 0.5, y: 0.5,
            width: 1, height: 1,
            alpha: 0,
        } as RectangleConfig, this);
        this.addInteraction(this.clickArea, GameEvent.POINTER_UP, this.nextPage);
    }

    public updateList(list: string[]): void {
        this.offset = 0;
        this.listItems = list;
        this.showList();
    }

    protected showList(): void {
        this.text.setText(this.listItems.slice(this.offset, this.offset + this.config.elementsPerPage).join('\n'));
    }

    protected nextPage(): void {
        this.offset += this.config.elementsPerPage;
        this.showList();
    }
}