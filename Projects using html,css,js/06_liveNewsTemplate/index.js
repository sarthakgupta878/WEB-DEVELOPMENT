console.log("hello")
let source ='bbc-news';
let apiKey='';
let newsAccordion = document.getElementById('newsaccordian');

const xhr = new XMLHttpRequest();
xhr.open('GET',``,true);

xhr.onload = function(){
    if(this.status===200){
      let json=  JSON.parse(this.responseText)
      let articles=json.articles;
    //   console.log(articles);

    let newsHtml=``;
    articles.forEach(function(element,index) {
        
        
            
            
            
            
            let news =`
            <div class="card">
            <div class="card-header" id="heading${index+1}">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index+1}"
            aria-expanded="true" aria-controls="collapse${index+1}">
            ${element.title}
            </button>
            </h2>
            </div>
            
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
            data-parent="#newsAccordian">
            <div class="card-body"> ${element['discription']} .<a href="${element['url']}">Read more here</a></div>
            </div>
            </div>`
            
            newsHtml+=news;
        
    });

newsAccordion.innerHTML=newsHtml;

    }
    else{
        console.log("some error cooured")
    }
}

xhr.send();


// let news =`
// <div class="card">
//     <div class="card-header" id="headingOne">
//         <h2 class="mb-0">
//             <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
//                 aria-expanded="true" aria-controls="collapseOne">
//                 Collapsible Group Item #1
//             </button>
//         </h2>
//     </div>

//     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
//         data-parent="#accordionExample">
//         <div class="card-body">
//             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
//             3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
//             laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
//             coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
//             anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
//             occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
//             of them accusamus labore sustainable VHS.
//         </div>
//     </div>
// </div>`

