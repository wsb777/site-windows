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
    activeTest();
    if (!textFile.classList.contains('active')) {
    textFile.classList.add('active');
    }
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