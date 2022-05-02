// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();

import {searchImages,append} from "./fetch.js"


// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
