
const parent = window.parent.document;
const areaW = parent.querySelector('#yoko').value;
const areaH = parent.querySelector('#tate').value;
const hidari = parent.querySelector('#hidari').value;
const ue = parent.querySelector('#ue').value;
const w = parent.querySelector('#w').value;
const h = parent.querySelector('#h').value;






let img;

function setup() {
    createCanvas(areaW, areaH);
}

// 画像のプリロード
function preload() {
    img = loadImage('stamp18.png');
}


function draw() {
    image(img, hidari, ue, w, h);
}