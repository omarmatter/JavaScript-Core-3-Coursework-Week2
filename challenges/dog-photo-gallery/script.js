const btn= document.querySelector('#show');
const list = document.querySelector('#list');

const item = document.createElement('li')


btn.addEventListener('click',function(){
    ImgDog(); 
})

const url ='https://dog.ceo/api/breeds/image/random';
function ImgDog() {
  fetch(url)
    .then(function (re) {
      return re.json();
    })
    .then(function (data) {
      
      item.innerHTML =`<img src= ${ data.message} />` 
      list.append(item)
      }) .catch(error=>{
        console.log(error)
    })


    }