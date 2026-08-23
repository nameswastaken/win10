// program manager v1.0.1
let focused = null; // while multiple apps can be on-screen and running, only one can be focused, which is why this is just 1 varibale.
function focus(uid) {
    const app = document.querySelector(`window-elem[btn-uid="${uid}"]`);
    const others = document.querySelectorAll(`window-elem:not([btn-uid="${uid}"])`);
    others.forEach((other) => { minimizeapp(other.getAttribute('btn-uid'), other.container.style.left, other.container.style.top); });
    app.container.style.zIndex = "1000";
    others.forEach((other) => { other.container.style.zIndex = "10"; });
}
function launch(uid, appstatus, posx, posy) {
    if (appstatus === 0) {
        const appfind = applist.find(element => String(element.uid) === String(uid));
        const app = document.createElement("window-elem");
        app.setAttribute('iframe-source', `./programs/${uid}/${appfind.launch}`);
        app.setAttribute('window-name', appfind.displayname);
        document.body.appendChild(app);
        app.setAttribute('btn-uid', appfind.uid);
        focus(uid);
    } else if (appstatus === 2) {
        const appfind = applist.find(element => String(element.uid) === String(uid));
        const app = document.querySelector(`window-elem[btn-uid="${uid}"]`);
        app.container.style.left = posx + "px";
        app.container.style.top = posy + "px";
        focus(uid);
    }
}