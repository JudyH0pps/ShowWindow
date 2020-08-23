const types = ['shirt', 'pants', 'skirt'];
const gender = ['female', 'male'];
const size = ['S','L','XL'];
const colors = ['yellow', 'blue', 'pink'];
let items = [];

for (let i=0; i<types.length; i++){
    let item = {}
    item.type = types[i];
    for(let j=0; j<gender.length; j++){
        if(types[i] === 'skirt' && gender[j] === 'female') continue;
        item.gender = gender[j];
        for(let k=0; k<size.length; k++){
            item.size = size[k];
            for(let l=0; l<colors.length; l++){
                item.color = colors[l];
                items.push(Object.assign({}, item));
            }
        }
    }
}

const imgPathList = {
    blue_p: './img/blue_p.png',
    blue_s: './img/blue_s.png',
    blue_t: './img/blue_t.png',
    pink_p: './img/pink_p.png',
    pink_s: './img/pink_s.png',
    pink_t: './img/pink_t.png',
    yellow_p: './img/yellow_p.png',
    yellow_s: './img/yellow_s.png',
    yellow_t: './img/yellow_t.png',
}

const showWindow = document.querySelector('.items');

function selectImg(item){
    if (item.type === 'shirt') {
        if (item.color === 'blue') {
            return imgPathList['blue_t'];
        }
        else if (item.color === 'pink') {
            return imgPathList['pink_t'];
        }
        else {
            return imgPathList['yellow_t'];
        }
    }
    else if (item.type === 'pants') {
        if (item.color === 'blue') {
            return imgPathList['blue_p'];
        }
        else if (item.color === 'pink') {
            return imgPathList['pink_p'];
        }
        else {
            return imgPathList['yellow_p'];
        }
    }
    else {
        if (item.color === 'blue') {
            return imgPathList['blue_s'];
        }
        else if (item.color === 'pink') {
            return imgPathList['pink_s'];
        }
        else {
            return imgPathList['yellow_s'];
        }
    }
}

function showItems() {
    resetItems();
    for(let i=0; i<items.length; i++){
        let showingItem = document.createElement('div');
        // let clothImage = document.createElement('img');
        let imagePath = selectImg(items[i]);
        // console.log(items[i]);
        // console.log(imagePath);
        // clothImage.setAttribute('src', imagePath);
        // showingItem.appendChild(clothImage);
        showingItem.setAttribute('class', 'item');
        showingItem.innerHTML = `<img class="itemImg" src=${imagePath}> <p>${items[i].gender}, ${items[i].size} size</p>`;
        showWindow.appendChild(showingItem);
    }
}

function resetItems() {
    while (showWindow.hasChildNodes()){
        showWindow.removeChild(showWindow.firstChild);
    }
}

function showBlueItems() {
    resetItems();
    for(let i=0; i<items.length; i++){
        if(items[i].color === 'blue'){
            let showingItem = document.createElement('div');
            let imagePath = selectImg(items[i]);
            showingItem.setAttribute('class', 'item');
            showingItem.innerHTML = `<img class="itemImg" src=${imagePath}> <p>${items[i].gender}, ${items[i].size} size</p>`
            showWindow.appendChild(showingItem);
        }
    }
}

function showYellowItems() {
    resetItems();
    for(let i=0; i<items.length; i++){
        if(items[i].color === 'yellow'){
            let showingItem = document.createElement('div');
            let imagePath = selectImg(items[i]);
            showingItem.setAttribute('class', 'item');
            showingItem.innerHTML = `<img class="itemImg" src=${imagePath}> <p>${items[i].gender}, ${items[i].size} size</p>`
            showWindow.appendChild(showingItem);
        }
    }
}

function showPinkItems() {
    resetItems();
    for(let i=0; i<items.length; i++){
        if(items[i].color === 'pink'){
            let showingItem = document.createElement('div');
            let imagePath = selectImg(items[i]);
            showingItem.setAttribute('class', 'item');
            showingItem.innerHTML = `<img class="itemImg" src=${imagePath}> <p>${items[i].gender}, ${items[i].size} size</p>`
            showWindow.appendChild(showingItem);
        }
    }
}

function showShirtItems() {
    resetItems();
    for(let i=0; i<items.length; i++){
        if(items[i].type === 'shirt'){
            let showingItem = document.createElement('div');
            let imagePath = selectImg(items[i]);
            showingItem.setAttribute('class', 'item');
            showingItem.innerHTML = `<img class="itemImg" src=${imagePath}> <p>${items[i].gender}, ${items[i].size} size</p>`
            showWindow.appendChild(showingItem);
        }
    }
}

function showPantsItems() {
    resetItems();
    for(let i=0; i<items.length; i++){
        if(items[i].type === 'pants'){
            let showingItem = document.createElement('div');
            let imagePath = selectImg(items[i]);
            showingItem.setAttribute('class', 'item');
            showingItem.innerHTML = `<img class="itemImg" src=${imagePath}> <p>${items[i].gender}, ${items[i].size} size</p>`
            showWindow.appendChild(showingItem);
        }
    }
}

function showSkirtItems() {
    resetItems();
    for(let i=0; i<items.length; i++){
        if(items[i].type === 'skirt'){
            let showingItem = document.createElement('div');
            let imagePath = selectImg(items[i]);
            showingItem.setAttribute('class', 'item');
            showingItem.innerHTML = `<img class="itemImg" src=${imagePath}> <p>${items[i].gender}, ${items[i].size} size</p>`
            showWindow.appendChild(showingItem);
        }
    }
}

const logoBtn = document.querySelector('img.logo');
const shirtBtn = document.querySelector('img.shirt');
const pantsBtn = document.querySelector('img.pants');
const skirtBtn = document.querySelector('img.skirt');
const blueBtn = document.querySelector('button.blue');
const yellowBtn = document.querySelector('button.yellow');
const pinkBtn = document.querySelector('button.pink');

logoBtn.addEventListener('click', showItems);
shirtBtn.addEventListener('click', showShirtItems);
pantsBtn.addEventListener('click', showPantsItems);
skirtBtn.addEventListener('click', showSkirtItems);
blueBtn.addEventListener('click', showBlueItems);
yellowBtn.addEventListener('click', showYellowItems);
pinkBtn.addEventListener('click', showPinkItems);


showItems();