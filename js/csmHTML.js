    "use strict";

    class WindowElem extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            this.container = document.createElement('div');
            this.container.setAttribute('id', 'windowdev');
            const style = document.createElement('style');
            
            style.textContent = `
                #windowdev {
                    padding: 0px;
                    background-color: #ffff;
                    width: 400px;
                    height: 300px;
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    resize: both;
                    overflow: hidden;
                    outline: none;
                }
                button {
                    font-family: 'Segoe Icon';
                    color: black;
                    border: none;
                    outline: none;
                    width: 40px;
                    height: 25px;
                    font-size: 9px;
                    background-color: #ffff;
                }
                .windowbuttons {
                    display: flex;
                    justify-content: right;
                }
                .win-btn {
                    transition: background-color .2s;
                }
                .win-btn:hover {
                    background-color: #dedede;
                }
                #close:hover {
                    background-color: #ff0000; 
                    color: white;
                }
                .titlebar {
                    display: flex;
                    flex-direction: row;
                    font-size: 6px;
                    font-family: 'Segoe UI Light';
                    white-space: nowrap;
                    flex-shrink: 0;
                    height: 25px;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                }
                .titlebar h1 {
                    margin-left: 10px;
                }
                #internal-iframe {
                    width: 100%;
                    flex-grow: 1;
                    outline: none;
                    border: none;
                }
            `;
            shadow.appendChild(style);
            shadow.appendChild(this.container);
        }
        connectedCallback() {
            const ifrsrc = this.getAttribute('iframe-source') || 'did not catch';
            const title = this.getAttribute('window-name') || 'did not catch';
            const width = this.getAttribute('window-width') || '';
            const height = this.getAttribute('window-height') || '';
            const type = this.getAttribute('window-type') || '';
        this.container.innerHTML = `
            <div class="titlebar">
                <h1 id="win-title"></h1>
                <div class="windowbuttons">
                    <button id="min" class="win-btn">&#xE921;</button>
                    <button id="maxwin" class="win-btn">&#xE922;</button>
                    <button id="close" class="win-btn">&#xE8BB;</button>
                </div>
            </div>
            <iframe id="internal-iframe" src='${ifrsrc}'></iframe>
            `;
            const maximizewindow = () => {
                if (this.container.style.width === '100%' && this.container.style.height == 'calc(100% - 40px)') {
                    this.container.style.width = '';
                    this.container.style.height = '';
                } else {
                    this.container.style.width = '100%';
                    this.container.style.height = 'calc(100% - 40px)';
                    this.container.style.left = 0;
                    this.container.style.top = 0;
                }
            };
            const minimizewindow = () => {
                const rect = this.container.getBoundingClientRect();
                const posx = rect.width;
                const posy = rect.height;
                this.container.style.left = "3578834px";
                this.container.style.top = "3589834px";
            }
            this.container.querySelector('#close').addEventListener('click', () => {
                this.remove();
                deactivate(this.getAttribute('btn-uid'));
            }); // i hate this script so much but i had to use it here
            this.container.querySelector('#maxwin').addEventListener('click', () => {
                maximizewindow();
            });
            this.container.querySelector('#min').addEventListener('click', () => {
                const rect = this.container.getBoundingClientRect();
                const posx = rect.left;
                const posy = rect.top;
                minimizewindow();
                minimizeapp(this.getAttribute('btn-uid'), posx, posy);
            });
            this.container.addEventListener('mousedown', () => {
                focus(this.getAttribute('btn-uid'));
                activateSE(this.getAttribute('btn-uid'));
            });
        this.updateAttributes();
        
        draggable(this.container);
    }
    attributeChangedCallback(name, prev, current) {
        if (this.isConnected && prev !== current) {
            this.updateAttributes();
        }
    }
    updateAttributes() {
        const wintitle = this.container.querySelector('#win-title');
        if (wintitle) {
            wintitle.textContent = this.getAttribute('window-name') || 'error';
        }
    }
    }
    WindowElem.observedAttributes = ['iframe-source', 'window-width', 'window-height', 'window-type', 'window-name'];
    customElements.define('window-elem', WindowElem);