import { show404 } from "./views/404.js";
import { showHome } from "./views/home.js";
import { showLogin, settingsLogin } from "./views/login.js";
import { showRegister, settingsRegister } from "./views/register.js";

const routes = {
    "/": {
        showView: showLogin,
        afterRender: settingsLogin,
        private: false
    },
    "/login": {
        showView: showLogin,
        afterRender: settingsLogin,
        private: false
    },
    "/register": {
        showView: showRegister,
        afterRender: settingsRegister,
        private: false
    },
    "/home": {
        showView: showHome,
        afterRender: "settingsHome",
        private: true
    }
}

export function router() {
    const path = window.location.pathname || "/"
    const app = document.getElementById("app")
    const route = routes[path]

    if (route) {
        app.innerHTML = route.showView();
        if (route.afterRender) {
            route.afterRender();
        }

    } else { app.innerHTML = show404() }
}