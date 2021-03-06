﻿import { LoginForm } from "../../src/forms/loginForm.js";
(async function () {
    const request = await fetch("../../index.html"),
        doc = await request.html(),
        head = doc.querySelector("head"),
        body = doc.querySelector("body");

    document.head.append(...head.childNodes);
    document.body.append(...body.childNodes);

    const loginForm = new LoginForm();
    document.body.appendChild(loginForm.element);

    loginForm.addEventListener("login", () => {
        const user = loginForm.userName,
            room = loginForm.selectedRoom;

        console.log(`Logging in: User ${user}, Room ${room}.`);
        setTimeout(() => {
            if (room === "calla") {
                loginForm.connecting = false;
            }
            else if (room === "island") {
                loginForm.connected = true;
            }
        }, 1000);
    });

    async function show() {
        loginForm.show();
        const login = await loginForm.once("login");
        console.log(login);
        setTimeout(show, 1000);
    }
    setTimeout(show, 500);
})();