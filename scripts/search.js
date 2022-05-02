// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "./scripts/components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

 import {results,append} from "./fetch.js"

let search=(e)=>
{
    if(e.key=="Enter")
    {
        let query=document.getElementById("search_input").value;
        let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`

        results(url).then((data)=>{
           let container=document.getElementById("results")
        container.innerHTML=null;
     console.log(data)
     append(data.articles,container)
        })
    }
}
document.getElementById("search_input").addEventListener("keydown",search)