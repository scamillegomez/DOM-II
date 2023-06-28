import './less/index.less'

// const heading = document.querySelector('')


// event #1
window.addEventListener('load',(event) => {
    alert('Fun Bus has arrived!');
    let headerText = document.querySelector('.logo-heading'); 
    let welcomeText = document.querySelector('.intro p');
    welcomeText.addEventListener('dblclick',function(e){
        welcomeText.style="background-color:darkgrey;color:white;font-style:bold;border:1px solid darkgrey;border-radius:15px;padding:1%"});
    const imgParent = document.querySelector('.intro');
    const imgActual = document.querySelector('img:nth-of-type(1)');
    
    headerText.addEventListener('mouseover', () => {
        headerText.style = "fontFamily: 'Arial, sans-serif'; color:pink";
    });
    headerText.addEventListener('mouseleave', event => event.target.style ='default');

    let dropZone = document.createElement('div');
    dropZone.id = 'dropZone';
    dropZone.style.backgroundColor = 'lightblue';
    dropZone.style.height = '170px';
    dropZone.style.width = '800px';
    dropZone.style.border = '1px solid lightblue';
    dropZone.innerText = 'drop here';
    dropZone.style.position = 'relative';
    // dropZone.style.top = '100px';

    imgParent.replaceChild(dropZone,imgActual);

    var headerBar = document.querySelector('.main-navigation');
    headerBar.appendChild(draggable);

    //event #9
    dropZone.addEventListener('dragover',function(e){
    e.preventDefault();
    });

    //event #10
    dropZone.addEventListener('drop',function(e){
    e.preventDefault();
    var data = e.dataTransfer.getData('text');

    var draggableItem = document.getElementById(data);

    var dropPositionX = e.clientX - dropZone.getBoundingClientRect().left;
    var dropPositionY = e.clientY - dropZone.getBoundingClientRect().top;

    draggableItem.style.position = 'absolute';
    draggableItem.style.left = `${dropPositionX}px`;
    draggableItem.style.top = `${dropPositionY}px`;

    e.target.appendChild(draggableItem);


});

    dropZone.insertAdjacentElement('afterend',button);

});


// const exagText = function(){
//     headerText.style = "fontFamily: 'Arial, sans-serif'; color:pink";
// }


let busDiv = document.createElement('div');
busDiv.style.position = 'absolute';
busDiv.style.pointerEvents = 'none';
busDiv.style.display = 'none';
busDiv.style.fontSize = '20px';
busDiv.innerText = '🚌';
document.body.appendChild(busDiv);

var busShown = false;

// event #4
document.addEventListener('keydown',function(event){
    busShown = !busShown; 
    busDiv.style.display = busShown ? 'block' : 'none';
});

document.addEventListener('mousemove',function(e){
    busDiv.style.left = e.pageX + 'px';
    busDiv.style.top = e.pageY + 'px';
});

// event #5

const navBar = document.querySelector('.main-navigation');
const aLinks = document.querySelectorAll('a');

document.addEventListener('wheel',function(e){
    navBar.style = "background-color:#227aa1;color:white;";
    aLinks.forEach(el=>el.style='color:white');
    
});

//event #6

// const welcomeText = document.querySelector('p');

var draggable = document.createElement('span');
draggable.id = 'draggable';
draggable.innerText = '🚌';
draggable.style.fontSize = '50px';
draggable.setAttribute('draggable','true');

// var headerBar = document.querySelector('.main-navigation');


//event #8
draggable.addEventListener('dragstart',function(e){
    e.dataTransfer.setData('text',e.target.id);
});


var button = document.createElement('button');
    button.innerText = 'Export';

    

        //bonus event! 
button.addEventListener('click',function(){
alert('you win!');
        });