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
    for(let i=0; i<jsonReturn.posts.length; i++){
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