﻿import { Game } from "./game.js";
import { AppGui } from "./appgui.js";

export function init(JitsiClientClass, parentNode) {
    const jitsiClient = new JitsiClientClass(parentNode),
        game = new Game(jitsiClient),
        gui = new AppGui(game, jitsiClient);

    Object.assign(window, {
        jitsiClient,
        game,
        gui
    });

    return game;
}