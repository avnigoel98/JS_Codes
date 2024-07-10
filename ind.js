console.log("Hey");

setTimeout(function(){
    console.log("Hey i am good");
}, 3000)

console.log("bye");


function loadScript(src){
    var script = document.createElement('script')
    script.src = src;
    document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")