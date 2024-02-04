export class GameController extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }

    public nextRoute(): void {
        (this.scene.scenes[0] as any).nextRoute();
    }
    public nextObjective(): void {
        (this.scene.scenes[0] as any).nextObjective();
    }
}
