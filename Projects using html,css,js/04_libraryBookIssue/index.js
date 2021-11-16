console.log("good morning")

function Book(name,author,type)
{
    this.name=name;
    this.author=author;
    this.type=type;
}

function Display(){

}


Display.prototype.add =function(book){
    console.log("adding yo ul");
    let tableBody =document.getElementById('tableBody');
    let uiString =` 
    
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML+=uiString;
}
Display.prototype.clear=function(){
    let libraryForm= document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate=function(book){
    
    if(book.name.length<2||book.author.length<2)
    {
        return false;
    }
    else
    {
        return true;
    }
}

Display.prototype.show=function(type,Message){
    let message =document.getElementById('message');
    message.innerHTML =`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message:</strong> ${Message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;

                    setTimeout(function() {
                        message.innerHTML=``;
                    }, 2000);



}


let libraryForm= document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('You have subitted the library form');
    let name =document.getElementById('bookName').value;
    let author =document.getElementById('author').value;

    let fiction =document.getElementById('fiction');
    let programming =document.getElementById('programming');
    let cooking =document.getElementById('cooking');

    let type;

    if(fiction.checked)
    {
        type=fiction.value;
    }
    else if(programming.checked)
    {
        type=programming.value;
    }
    else if(cooking.checked)
    {
        type=cooking.value;
    }

    let book =new Book(name,author,type);
    console.log(book);

    let display = new Display();
    
    display.validate(book);

    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show('success','your book has been added');

    }
    else
    {
        display.show('danger','Sorry you cannot add this book');
    }

    e.preventDefault();
} 