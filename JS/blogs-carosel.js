import {addPostCardInfo} from "./blog-get-functions.js";
const wpPostsUrl = "https://public-api.wordpress.com/rest/v1.1/sites/emel-hassen-blog.wordpress.com/posts";

async function getCaroselPosts() {
    try {
        const response = await fetch(wpPostsUrl);
        return await response.json();
    }
    catch (error) {
        // catches errors both in fetch and response.json
        console.log(error);
    }
}

const jsonCaroselReturn = await getCaroselPosts();
const sliderContainer = document.querySelector(".slider");
const blockContainer = document.querySelector(".posts-container");

function getAllSliderPostsInfo(){
    for(let i=0; i<jsonCaroselReturn.posts.length; i++){
        const slide = document.createElement("div");
        slide.classList = ["slide"];
        const link = document.createElement("a");
        link.href = "blog-detailed.html?id="+(jsonCaroselReturn.posts[i].ID);
        const postCard = document.createElement("div");
        postCard.classList = ["post-card"];
        addPostCardInfo(jsonCaroselReturn, postCard,i);
        link.innerHTML = postCard.outerHTML;
        blockContainer.append(link);
        slide.append(link);
        sliderContainer.append(slide);
    }
    
}

getAllSliderPostsInfo();