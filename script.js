fetch('https://www.officeapi.dev/api/quotes/random')
.then(data=>data.json())
.then(res=>{
    const quote= res.data.content + "--BY "+ res.data.character.firstname + " 😎";
    const textquote= document.getElementById('quote');
    textquote.innerHTML=quote;
})