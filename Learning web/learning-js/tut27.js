// let car = {
//     name:'maruti 800',
//     topSpeed:89,
//     run :function (){
//         console.log("car is running");
//     }
// }
// console.log(car);


function Generalcar(givenName,givenSpeed){
    this.name=givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`)
    }
}

car1= new Generalcar('nissan',180);