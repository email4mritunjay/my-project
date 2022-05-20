import {firebaseOptions} from './firedata.js';
window.addEventListener("load",bindEvent);

function bindEvent(){
    var Buttons = document.querySelector("#like");
    Buttons.addEventListener("click",pluse);
}

var count = 0;

function pluse(){
    count++;
    var span = document.getElementsByTagName("span")[0];
    span.innerHTML =`<i>${count}</i>`;
    console.log("i am count function");
    var obj = {count:count};
    firebaseOptions.add(obj);
}