// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();



import {searchImages,append} from "./fetch.js"

let search=(e)=>{
    if(e.key=="Enter"){
        let value=document.getElementById("search_input").value;
        searchImages(value).then((data)=>{
            console.log(data);
              let results=document.getElementById("results");
        results.innerHTML=null;
        append(data,results);
        })
    }
};

document.getElementById("search_input").addEventListener("keydown",search);
let Countries=document.getElementById("sidebar").children;
console.log(Countries);

function cSeacrch(){
    console.log(this.id);
    searchImages(this.data).then((data)=>{
        console.log(data);

        let results=document.getElementById("results");
        results.innerHTML=null;
        append(data,results,);
    })
}

for(let el of Countries){
    el.addEventListener("click",cSeacrch)
}
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
