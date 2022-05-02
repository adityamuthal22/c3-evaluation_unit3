let searchImages=async(value)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in&query=${value}`);
        let data=await res.json();
        console.log(data);
        return data;
    }catch{
        console.log(err)
    };

}

let append=(data,results)=>{
    results.innerHTML=null;
    data.articles.forEach(({content,urlToImage,title})=>{
        let box1=document.createElement("div")

       let img=document.createElement("img");
        img.src=urlToImage;

      let  title1=document.createElement("h3");
        title1.innerText=title;

        let  content1=document.createElement("h3");
        content1.innerText=content;

        box1.setAttribute("id",box1);
       let box2=document.createElement("div");
        box2.append(img);
        let box3=document.createElement("div");
       box3.append(title1,content1);
       box1.append(box2,box3)
        results.append(box1);
    })
}
export {searchImages,append}