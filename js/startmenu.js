const startmenu = document.getElementById("startmenu");
const startmenulist = document.getElementById("startmenucontents");
const startmenusetting = document.getElementById("sidebarStart");

const createNewAppInList = (app) => {
    const button = document.createElement("button");
    button.setAttribute('id', `start-${app.uid}`);
    button.setAttribute('class', 'startmenuapp');
    button.innerHTML = `<img src="${app.icon}" alt="${app.program}"><p>${app.displayname}</p>`;
    startmenucontents.appendChild(button);
    button.setAttribute('onclick', `launch(${app.uid})`);
}
applist.forEach((element) => createNewAppInList(element));