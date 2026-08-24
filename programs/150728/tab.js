// tabbing js
const tabbar = document.getElementById("tabbarEdge");
const create = document.getElementById("addtabEdge");
function createtab() {
    const tab = document.createElement("button");
    tab.setAttribute("class", "tab");
    tab.textContent('fat');
    tabbar.insertBefore(tab, create);
}