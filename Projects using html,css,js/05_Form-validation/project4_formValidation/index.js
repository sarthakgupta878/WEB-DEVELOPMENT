console.log("this is project  ");
const username = document.getElementById('name');
const email =document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail=false;
let validUser=false;
let validPhone=false;

username.addEventListener('blur',()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str= username.value;
    console.log(regex,str)
if(regex.test(str))
{
    console.log('matched')
    username.classList.remove('is-invalid');
    validUser=true;
}
else{
    console.log('no match')
    username.classList.add('is-invalid');
     validUser=false;

}


})

email.addEventListener('blur',()=>{
    console.log("email is blurred");

    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str= email.value;
    console.log(regex,str)
if(regex.test(str))
{
    console.log('matched')
    validEmail=true;
    email.classList.remove('is-invalid');
}
else{
    console.log('no match')
    email.classList.add('is-invalid');
    validEmail=false;

}
})


phone.addEventListener('blur',()=>{
    console.log("phone is blurred");

    let regex = /^[0-9]{10}$/;
    let str= phone.value;
    console.log(regex,str)
if(regex.test(str))
{
    console.log('matched')
    validPhone=true;
    phone.classList.remove('is-invalid');
}
else{
    console.log('no match')
    phone.classList.add('is-invalid');
     validPhone=false;

}
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('you clicked on submit');

    if(validEmail && validPhone && validUser)
    {

        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');

    }
    else{
        console.log('one is fail')
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');

    }
    
})