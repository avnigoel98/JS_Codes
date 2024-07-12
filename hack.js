let list = [
    "Initializing hack Program...",
    "Hacking Tom's username...",
    "username is found tom76...",
    "connecting to facebook...",
    ]
    
    const sleep = (seconds)=>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{resolve(true)}, seconds * 1000)
        })
    }
    
    const showHack = async(message)=>{
        await sleep(2)
        //console.log(message)
        text.innerHTML = text.innerHTML + message + "<br>"
    }
    
    (async () => {
      for(let i = 0; i<list.length; i++){
         await showHack(list[i])
      }
    
    })()
    
    

    // https://replit.com/@avnigoel98/WoodenVastUserinterface#script.js