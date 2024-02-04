import "phaser";
import { WebMidi } from "webmidi";
import { GameConfig } from "./core/GameConfig";
import { GameController } from "./core/GameController";

function onEnabled(game: GameController): void {
    const launchpadIn = WebMidi.getInputByName("Launchpad MK2 2");
    const launchpadOut = WebMidi.getOutputByName("Launchpad MK2 2");
    if (launchpadIn && launchpadOut) {
        console.log(launchpadIn);
        let nextRoute = 81;
        let nextObjective = 88;
        launchpadIn.addListener("noteon", (e) => {
            if (e.velocity != 0) {
                switch (e.note.number) {
                    case nextRoute:
                        game.nextRoute();
                        break;
                    case nextObjective:
                        game.nextObjective();
                        break;
                }
            }
        });
        launchpadOut.stopNote(nextRoute);
        launchpadOut.stopNote(nextObjective);
        // launchpadOut.channels[1]?.playNote(nextRoute, { rawAttack: 9 })
        // launchpadOut.channels[1]?.playNote(nextObjective, { rawAttack: 116 })
    }
}

window.addEventListener("load", () => {
    const game = new GameController(GameConfig);
    WebMidi.enable().then(onEnabled.bind(this, game));
    // .catch(err => alert(err))
});
