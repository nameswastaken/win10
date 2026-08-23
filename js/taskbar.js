const taskbar = document.getElementById("taskbar");
const status = document.getElementById("statusicons");
const iconset = [
    { id: 1, program: "edge", icon: './icns/edge.svg', uid: '150728' },
    { id: 2, program: "testapp", icon: './icns/wifi-0.ico', uid: '128919' }
];

const makeIcon = (app) => {
    const button = document.createElement("button");
    button.dataset.status = "0";
    button.innerHTML = `<img src="${app.icon}" alt="${app.program}">`;
    taskbar.insertBefore(button, status);
    button.setAttribute('class', 'taskbarapp');
    button.setAttribute('id', app.uid);
    button.setAttribute('onclick', `launch(${app.uid}, Number(this.dataset.status), Number(this.dataset.posx), Number(this.dataset.posy)); activate();`);
}
const activate = (e) => {
    const executer = window.event.currentTarget;
    executer.style.backgroundColor = "#353535";
    executer.style.boxShadow = "inset 0px -2px #0078D7";
    executer.dataset.status = "1";
}
const activateSE = (app) => { // this function only exists as a replacement for the regular activate function as it just doesnt work for the click thing i want?? LMFAO anyways yeah this one is FAR superior so i should move everything to this but for now itll remain as the SE variant
    const reapp = document.getElementById(app);
    reapp.style.backgroundColor = "#353535";
    reapp.style.boxShadow = "inset 0px -2px #0078D7";
    reapp.dataset.status = "1";
}
const minimizeapp = (app, posx, posy) => {
    const reapp = document.getElementById(app);
    reapp.style.backgroundColor = "#000000";
    reapp.style.boxShadow = "inset 0px -2px #0078D7";
    reapp.dataset.status = "2";
    reapp.dataset.posx = posx;
    reapp.dataset.posy = posy;
}
const deactivate = (app) => {
    const reapp = document.getElementById(app);
    reapp.style.backgroundColor = "#000000";
    reapp.style.boxShadow = "none";
    reapp.dataset.status = "0";
}
iconset.forEach((element) => makeIcon(element));