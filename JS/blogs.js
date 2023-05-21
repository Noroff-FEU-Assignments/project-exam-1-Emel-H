import { addPostCardInfo } from "./blog-get-functions.js";
const wpUrl = "https://public-api.wordpress.com/rest/v1.1/sites/emel-hassen-blog.wordpress.com/posts";

async function getPosts() {
    try {
        const response = await fetch(wpUrl);
        return await response.json();
    }
    catch (error) {
        // catches errors both in fetch and response.json
        console.log(error);
    }
}

const jsonReturn = await getPosts();
const container = document.querySelector(".posts-container");

function getAllPostsInfo(){
    container.innerHTML = "";
    for(let i=0; i<10; i++){
        const link = document.createElement("a");
        link.href = "blog-detailed.html?id="+(jsonReturn.posts[i].ID);
        const postCard = document.createElement("div");
        postCard.classList = ["post-card"];
        addPostCardInfo(jsonReturn, postCard,i);
        link.innerHTML=postCard.outerHTML;
        container.append(link);
    }
    
}

getAllPostsInfo();

// this code is to view past the first 10 posts
const viewMore = document.querySelector("#viewMore");

viewMore.onclick = function(){
    for(let i=10; i<jsonReturn.posts.length; i++){
        const link = document.createElement("a");
        link.href = "blog-detailed.html?id="+(jsonReturn.posts[i].ID);
        const postCard = document.createElement("div");
        postCard.classList = ["post-card"];
        addPostCardInfo(jsonReturn, postCard,i);
        link.innerHTML=postCard.outerHTML;
        container.append(link);
    }
    viewMore.style.display = "none";
}

//this code is for search
const search = document.querySelector("#search");

search.onchange = function(){
    if(!search.value){
        search.value = "Search"
    }
}

search.oninput = function(){
    const searchValue = search.value.toLowerCase();
    if(!searchValue){
        const posts = container.children;
        for(let i=0; i<posts.length; i++){
            posts[i].children[0].style.display="inherit";
        }
    }
    else{
        const posts = container.children;
        for(let i=0; i<posts.length; i++){
            const title = posts[i].children[0].children[1].innerHTML.toLowerCase();
            const text = posts[i].children[0].children[3].innerHTML.toLowerCase();
            if(title.includes(searchValue,0)||text.includes(searchValue,0)){
                posts[i].children[0].style.display="inherit";
            }
            else{
                posts[i].children[0].style.display="none";
            }
            
        }
    }
    
}
