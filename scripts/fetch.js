let results=async(data,url)=>
{
    try{
    let res=await fetch(url);
    let data=await res.json();

    return data;
    }catch(err)
    {
        console.log(err)
    }
}

let append=(data,container)=>
{
    data.map(({author,title,description,urlToImage})=>{
   let div=document.createElement("div")
   
   let image=document.createElement("img")
   image.src=urlToImage;

   let h3=document.createElement("h3")
   h3.innerText=author;

   let h2=document.createElement("h3")
   h2.innerText=title;

   let h1=document.createElement("h3")
   h1.innerText=description;

 div.append(image,h3,h2,h1)
container.append(div)
    })
}
export {results,append}