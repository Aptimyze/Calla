﻿import "../protos.js";

import {
    Div,
    H1
} from "../html/tags.js";

import {
    id,
    style,
    systemFont,
    className
} from "../html/attrs.js";

export class FormDialog extends EventTarget {
    constructor(name, ...rest) {
        super();

        this.element = document.getElementById(name) ||
            Div(
                id(name),
                style({
                    display: "grid",
                    gridTemplateColumns: "5fr 1fr 1fr",
                    gridTemplateRows: "auto 1fr auto auto",
                    overflowY: "hidden",
                    width: "50%",
                    maxWidth: "900px",
                    maxHeight: "75vh",
                    backgroundColor: "white",
                    padding: "1em 1em 3em 1em",
                    margin: "5em auto auto auto",
                    borderRadius: "5px",
                    border: "solid 4px black",
                    boxShadow: "rgba(0, 0, 0, .4) 10px 10px 20px"
                }),
                systemFont,
                H1(style({ gridArea: "1/1/2/4" }), ...rest),
                Div(style({ gridArea: "3/1", height: "1em" }), " "));

        this.content = this.element.querySelector(".content")
            || this.element.appendChild(
                Div(
                    className("content"),
                    style({
                        overflowY: "scroll",
                        gridArea: "2/1/3/4"
                    })));
    }

    appendChild(child) {
        return this.element.appendChild(child);
    }

    append(...rest) {
        this.element.append(...rest);
    }

    show() {
        this.element.show("grid");
    }

    hide() {
        this.element.hide();
    }
}