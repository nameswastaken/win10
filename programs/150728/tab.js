// tabbing js
const tabbar = document.getElementById("tabbarEdge");
const create = document.getElementById("addtabEdge");
function createtab() {
    const tab = document.createElement("button");
    tab.setAttribute("class", "tab");
    tab.innerHTML = '<span class="tabimg-Edge">&#xF5ED;</span><span>Tab</span><span class="icon close">&#xE711;</span>';
    tabbar.insertBefore(tab, create);
}