console.log("hi");

class Library{

    constructor(booklist){
        this.booklist=booklist;
        this.issuedBook ={};
    }

    getBooklist()
    {
        this.booklist.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname,user){
        if(this.issuedBook[bookname]==undefined)
        {

            this.issuedBook[bookname]=user;
        }
        else{
            console.log('this book is issued');
        }
    }

    returnBook(bookname){
      delete this.issuedBook[bookname];  
    }



}