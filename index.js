function getJoke(){
    let config={
        headers:{
            "Accept": "application/json"
        }
    }

    axios.get("https://icanhazdadjoke.com",config).then((res)=>{
        console.log(res.data.joke)
        document.getElementById("joke").innerHTML=res.data.joke
    }).catch((error)=>{
        console.log(error)
        document.getElementById("joke").innerHTML="An error occured"
    })
}
window.onload=getJoke