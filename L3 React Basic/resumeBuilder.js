 const div = document.getElementById('root')
 const button = document.getElementById('btn')
 
 const h1 = document.createElement('h1');
 h1.innerText = "Dev Kumar Singh"



 async function display() {

    try{
        div.appendChild(h1);
    }catch(error){
       console.log(error)
    }

    

 }
 button.addEventListener('click', display);


