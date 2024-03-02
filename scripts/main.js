function date() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = '' + minutes;
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    let timeText = hours + ":" + minutes;
    let day = now.getDate();
    let month = now.getMonth() + 1;
    month = '' + month;
    day = '' + day;
    if (day.length == 1) {
        day = "0" + day;
    }
    if (month.length == 1) {
        month = "0" + month;
    }
    let year = now.getFullYear();
    let dateText = day + "." + month + "." + year;
    let time = document.querySelector('.time');
    let date = document.querySelector('.date');
    time.textContent = timeText;
    date.textContent = dateText;
}
date();
setInterval(function(){
    date()
}, 10000);

const desktop = document.querySelector('main');
const textFile = document.querySelector('.text-file');
const siteFolder = document.querySelector('.sites');
const stackFolder = document.querySelector('.stack');
const contactsFolder = document.querySelector('.contacts');

function activeTest() {
    let folders = document.querySelectorAll('.folder');
    for (i=0; i < folders.length; i++) {
        if(folders[i].classList.contains('active')) {
            folders[i].classList.remove('active');
          }
    }
}
function textFileOpen() {
    if (textFile.classList.contains('active')) {
        let aboutMe= document.querySelectorAll('.about-me');
        if (aboutMe.length == 0) {
            desktop.insertAdjacentHTML('beforeend','<div class="about-me"><div class="notepad-header"><div class="left-seat notepad-seat"><img class="notepad-img" src="./img/notepad.png"><p>about me.txt — Notepad</p></div><div class="right-seat notepad-seat"><button class="app-close button">✕</button><button class="app-full button">☐</button><button class="app-tray button">—</button></div></div><div class="notepad-setting"><button class="np-button button">File</button><button class="np-button button">Edit</button><button class="np-button button">Format</button><button class="np-button button">View</button><button class="np-button button">Help</button></div><div class="notepad-main"><textarea  class="notepad-workspace">Work! Work! Work! I love to work and gain new knowledge. Now I\'m 20 years old. At work they say that I am a responsible employee.</textarea><div class="notepad-scroll"></div></div><div class="np-add-setting"><p class="text">UTF-8</p><p class="text">Windows (CRLF)</p><p class="text">100%</p></div></div>');
            const closeFile = document.querySelector('.app-close');
            closeFile.addEventListener('click',closeTextFile);
        }
    }
    else {
        activeTest();
        textFile.classList.add('active');
    }
}

function closeTextFile() {
    let aboutMe = document.querySelector('.about-me');
    aboutMe.remove();
}

function siteFolderOpen() {
    activeTest();
    if (!siteFolder.classList.contains('active')) {
    siteFolder.classList.add('active');
    }
}

function stackFolderOpen() {
    activeTest();
    if (!stackFolder.classList.contains('active')) {
    stackFolder.classList.add('active');
    }
}

function contactsFolderOpen() {
    activeTest();
    if (!contactsFolder.classList.contains('active')) {
    contactsFolder.classList.add('active');
    }
}

function click() {
    console.log('попал');
}
// desktop.addEventListener('click', click);
textFile.addEventListener('click',textFileOpen);
siteFolder.addEventListener('click',siteFolderOpen);
stackFolder.addEventListener('click',stackFolderOpen);
contactsFolder.addEventListener('click',contactsFolderOpen);