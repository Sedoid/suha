if('serviceWorker'in navigator){
    window.addEventListener('load',()=>{
         navigator.serviceWorker.register('./serviceWorker.js')
            .then(registration =>console.log(registration))
            .catch( error => console.log(error) )
    })
   
}else{
    alert('You need to update your brower or use Chrome');
}