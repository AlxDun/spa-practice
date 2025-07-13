import { router } from "./router";

window.addEventListener("popstate", router)
window.addEventListener("load", router)

document.addEventListener("click", function (event) {
    if (event.target.matches("[data-link]")) {
        event.preventDefault()
        history.pushState(null, null, event.target.href)
        router()
    }
})