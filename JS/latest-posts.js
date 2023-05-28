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
const newPostContainer = document.querySelector(".new-post");

function getlatestPost(){
    newPostContainer.innerHTML = "<h1>Read my newest blog</h1>";
    const link = document.createElement("a");
    link.href = "blog-detailed.html?id="+(jsonReturn.posts[0].ID);
    const postCard = document.createElement("div");
    addPostCardInfo(jsonReturn, postCard,0);
    link.innerHTML=postCard.outerHTML;
    newPostContainer.append(link);
}

getlatestPost();