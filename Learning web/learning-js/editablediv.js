console.log("hello")

let divElem = document.createElement('div');
let text = document.createTextNode('This is my element. click here to edit it');
divElem.appendChild(text);
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid black; width:154px; margin:34px; padding:23px;');
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


container.insertBefore(divElem,first);

divElem.addEventListener('click',function(){
    let notextarea = document.getElementsByClassName('textarea').length;
    if(notextarea==0){
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class="textarea" "form-control"  id="textarea" rows="3">${html}</textarea>`;
    }
    
    let textarea=document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML=textarea.value;
    })

});







console.log(divElem,container,first);
