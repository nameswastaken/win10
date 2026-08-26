// tabbing js
const tabbar = document.getElementById("tabbarEdge");
const create = document.getElementById("addtabEdge");
const field = document.getElementById("urlsearch");
let tabcount = 0;
function createtab() {
    const tab = document.createElement("button");
    tab.setAttribute("class", "tab");
    tabcount += 1;
    tab.setAttribute("id", `${tabcount}`);
    tab.innerHTML = '<span class="tabimg-Edge">&#xE774;</span><span>Tab</span><span class="icon close">&#xE711;</span>';
    tabbar.insertBefore(tab, create);
    activateTab(tab.id);
    tab.setAttribute("onclick", `activateTab(${tab.id}); activatePage(${tab.id});`);
    const tabiframe = document.createElement("iframe");
    tabiframe.setAttribute("class", `webpage`);
    tabiframe.setAttribute("id", `page-${tab.id}`)
    tabiframe.setAttribute("src", "https://en.wikipedia.org");
    document.body.appendChild(tabiframe);
    activatePage(tab.id);
}
const activateTab = (app) => { 
    const reapp = document.getElementById(app);
    const others = tabbar.querySelectorAll(`.tab:not([id="${app}"])`);
    reapp.style.backgroundColor = "#f2f2f2";
    reapp.style.boxShadow = "0px 5px 10px #191919";
    reapp.style.zIndex = "20";
    others.forEach((other) => { other.style.backgroundColor = "inherit"; });
    others.forEach((other) => { other.style.boxShadow = "none" });
    others.forEach((other) => { other.style.zIndex = "19" });
}
const activatePage = (frame) => {
    const reframe = document.getElementById(frame);
    const others = document.querySelectorAll(`iframe:not([id="page-${frame}"])`);
    reframe.style.display = "block";
    others.forEach((other) => { other.style.display = "none" });
}
field.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const webpage = document.getElementById("webpage");
        webpage.src = event.target.value;
    }
});
createtab();