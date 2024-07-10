

// function loadScript(src, callback){
//     var script = document.createElement('script')
//     script.src = src;
//     script.onload = function(){
//         console.log("loaded with src: " + src)
//         callback();
//     }
//     script.onerror = function(){
//         console.log("Error loading with src: " + src)
//         callback();
//     }
//     document.body.appendChild(script);
// }

// function hello(){
//     alert("hello")
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)


// let promise = new Promise(function(resolve, reject){
//     alert("i am a alert in promise ")
//     //resolve(56)
//     reject(new Error("I am a error"))
// })

// console.log("Hey");

// setTimeout(function(){
//     console.log("Hey i am good");
// }, 3000)

// console.log("bye");
//console.log(promise)


// let promise1 = new Promise(function(resolve, reject){
//     console.log("promise is pending ")
//     //resolve(56)
//     //reject(new Error("I am a error"))

//     setTimeout(function(){
//         console.log("Hey i am good");
//         resolve(56)
//     }, 3000)

// })


// let promise2 = new Promise(function(resolve, reject){
//     console.log("promise is pending ")
//     //
//     //reject(new Error("I am a error"))

//     setTimeout(function(){
//         console.log("Hey i am good");
//         reject(new Error("I am a error"))
//     }, 3000)

// })

// promise1.then((value)=>{
//     console.log(value)
// })


// promise2.catch((error)=>{
//     console.log("some error")
// })


// async function hello(){
//     return 7
// }

// hello().then((x)=>{
//     alert(x)
// })



async function hello(){
    let promise1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(56)
        }, 3000)

    })


    let promise2 = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Hey i am good");
            resolve(100)
        }, 3000)

    })

    // promise1.then(alert)
    // promise2.then(alert)
    console.log("Hey start of p1");
    let ans1 = await promise1
     console.log("Hey p1 done " + ans1);
     console.log("Hey p2 start");
    let ans2 = await promise2
     console.log("Hey p2 end", + ans2);
    return [ans1, ans2]
}

console.log("hi")
let a = hello()
console.log(a)




// JS program to pretend to look a like a hacker.
// write a async function which will simply display the following input.
let list = [
"Initializing hack Program...",
"Hacking Tom's username...",
"username is found tom76...",
"connecting to facebook...",
]














