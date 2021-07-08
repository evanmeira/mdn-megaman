let myImage = document.querySelector('img');

myImage.onclick = () => { 
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/megaman.jpg'){
        myImage.setAttribute('src', 'images/megaman2.jpg')
    }else{
        myImage.setAttribute('src', 'images/megaman.jpg')
    }
}

let myButton = document.querySelector('button');

myButton.onclick = () => {
    setUserName();
}

let myHeading = document.querySelector('h1');

function setUserName(){
    let name = prompt('Please enter your name: ');
    if(!name){
        setUserName();
    }else{
        localStorage.setItem('name', name); 
        myHeading.textContent = 'Mega-Man is cool, ' + name;
    }
    
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mega-Man is cool, ' + storedName;
}