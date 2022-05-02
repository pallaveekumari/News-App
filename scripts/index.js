// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import {navbar} from "./scripts/components/navbar.js";
import { results,append } from "./fetch.js";



document.getElementById("navbar")=navbar();
function search1()
{
let home=async()=>
{
    try{
let res=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=countrycode")
let data= await res.json();
console.log(data)
    }catch(err)
    {
        console.log(err)
    }
}
home()
}

search1()

// document.getElementById("results")
let category=document.getElementById("sidebar").children;
for(let el of category)
{
    el.search()
}

function search()
{
    results(url,this.id).then((data)=>{
        console.log(data)
        let container=document.getElementById("results")
        container.innerHTML=null;
        append(data.articles,container)
    });
}