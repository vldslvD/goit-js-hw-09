!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=null;function n(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.startBtn.addEventListener("click",(function(){e=setInterval(n,1e3),t.startBtn.setAttribute("disabled","disabled")})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.b5fccccc.js.map
