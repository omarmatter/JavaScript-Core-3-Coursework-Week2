const container = document.querySelector('#container');
const img = document.querySelector('#image');
const url ='https://xkcd.now.sh/?comic=latest'
getImage()
function  getImage(){
    fetch(url)
    .then(function (re) {
      return re.json();
    })
    .then(function (data) {
      
      img.src=data.img 
      img.alt=data.alt
      list.append(item)
      }) .catch(error=>{
        console .log(error)
    })


}
