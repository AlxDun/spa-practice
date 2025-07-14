import { show404 } from "./views/404View";
import { showLogin } from "./views/loginView"
import { showRegister } from "./views/registerView";

const routes = {
    "/": {
        showView: showLogin(),
        // afterRender: "settingsLogin",
        // private: false
    },
    "/login": {
        showView: showLogin(),
        // afterRender: "settingsLogin",
        // private: false
    },
    "/register": {
        showView: showRegister(),
        // afterRender: "settingsRegister",
        // private: false
    }
}

export function router() {
    const path = window.location.pathname || "/"
    const app = document.getElementById("app")
    const route = routes[path]

    if (route) {
        app.innerHTML = route.showView;
    } else { app.innerHTML = show404() }
}