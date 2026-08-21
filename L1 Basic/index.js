        // print
console.log("First")
console.log("second")
console.log("Third")

console.log("First")
// setTimeout(() => 
//     {console.log("second")},1000)

// for(let i = 1; i< 1000; i++){
//     console.log("second")
// }
console.log("Third")

setTimeout(() => {
    console.log("one")
    setTimeout(() => {
         console.log("tne")
        setTimeout(() => {
             console.log("thne")
            setTimeout(() => {
                 console.log("fne")
                setTimeout(() => {
                     console.log("fne")

                },1000)
            },1000)
        },1000)
    },1000)
}, 1000)

                                              //Topic: promises
  const myPromises = new Promise((resolve,reject) =>{
    username = "Dev"
    password = "1234"

    if(username == "Dev" && password == "1234"){
        resolve("success")
    }
    else{
        reject("incorrect details")
    }
  })   
     //handle the response 
  myPromises.then((msg) =>{
    console.log(msg)
  }).catch((msg) =>{
    console.log(msg)
  }).finally(() =>{
    console.log("all resources are closed")
  })
    // another method to handle the response
async function handleLogin() {
    try{
            await myPromises
    } catch(e){
        console.log(e)

    } finally{
        console.log("all resource are closed")
    }
    
}
handleLogin()