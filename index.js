let input=document.getElementById('input');
let box=document.querySelector('.box');
async function chatGpt(query){
    const url = `https://google-search83.p.rapidapi.com/google/search_image?query=${query}&gl=us&lr=en&num=10&start=0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2f4809ca3cmsh7cc45ca409e5139p15cff4jsn11255b907f67',
            'X-RapidAPI-Host': 'google-search83.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        box.innerHTML="";
        result.forEach(element => {
            box.innerHTML+=` <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${element.url}">
            <div class="card-body">
              <h5 class="card-title">${element.origin.title}</h5>
               <p class="card-text">${element.origin.website.name}</p>
            </div>
          </div>`;
        });
    } catch (error) {
        console.error(error);
    }
}
input.addEventListener('input',()=>{
    chatGpt(input.value);
})
