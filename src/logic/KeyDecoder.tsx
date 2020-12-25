import { Input, InputType } from "./GameController";
import GameState, { ProgressState } from "./GameState";

let prev = 0;

export function decodeInput(e: KeyboardEvent, gameState: GameState) : Input | undefined {
    if (e.timeStamp - prev < 0.1) {
        return undefined
    }

    prev = e.timeStamp

    let input: Input = {
        type: InputType.BUTTON,
        payload: ''
    }

    if (e.code === 'KeyR') {
        input.payload = 'reset';
        return input
    }
    if (e.code === 'KeyP') {
        input.payload = 'playpause';
        return input
    }
    if (e.code === 'Enter') {
        if (gameState.progressState === ProgressState.PREGAME) {
            input.payload = 'start'
            return input
        }  else if (gameState.progressState === ProgressState.RUNNING) {
            return undefined
        }
    }

    return undefined
}