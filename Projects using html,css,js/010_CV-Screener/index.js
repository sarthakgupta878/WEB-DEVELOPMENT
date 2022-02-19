// console.log("hello")

const data =[
    {
        name: 'Rohan Das',
        age: 18,
        city: 'kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
        name: 'Camella Cabello',
        age: 18,
        city: 'kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
        name: 'Aishwariya rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/77.jpg'
    },
    {
        name: 'Rohit Das',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    }

]

function cvIterator(profiles){
    let nextIndex =0;
    return{
        next:function(){
            return nextIndex<profiles.length ?
            {value : profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
}
const candidates = cvIterator(data);
// console.log(candidates)

nextCV();
const next =document.getElementById('next');
next.addEventListener('click',nextCV);



function nextCV()
{
    const currentCandidates = candidates.next().value;


    let image =document.getElementById('image');
    let profile =document.getElementById('profile');
    if(currentCandidates!=undefined)
    {
    image.innerHTML = `<img src ='${currentCandidates.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    
    <li class="list-group-item">Name: ${currentCandidates.name}</li>
    <li class="list-group-item">${currentCandidates.age} Years old</li>
    <li class="list-group-item">Lives in ${currentCandidates.city} </li>

    <li class="list-group-item">Primarily works on ${currentCandidates.language}</li>
    <li class="list-group-item">User ${currentCandidates.framework} framework </li>

    
  </ul>`;
    }
    else
    {
        alert("end of candidate application");
        window.location.reload();
    }


}