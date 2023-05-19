
const wpUrl = "https://public-api.wordpress.com/rest/v1.1/sites/emel-hassen-blog.wordpress.com/posts/";

async function getPostInfo(id){
    try {
        const response = await fetch(wpUrl+id);
        const jsonReturn = await response.json();
        const container = document.querySelector(".detail-blog-container");
        getDetailedPost(jsonReturn, container);
        
    }
    catch (error) {
        // catches errors both in fetch and response.json
        console.log(error);
    }
}

function getDetailedPost(jsonReturn, container){
    getDetailedPostImage(jsonReturn, container);
    getDetailedPostDate(jsonReturn, container);
    getDetailedPostTitle(jsonReturn, container);
    getDetailedPostDescription(jsonReturn, container);
}

function getDetailedPostImage(jsonReturn, container){
    const postImage = document.createElement("img");
    postImage.src = jsonReturn.featured_image;
    container.append(postImage);
}

function getDetailedPostDate(jsonReturn, container){
    const postDate = document.createElement("h3");
    postDate.innerHTML = jsonReturn.date;
    container.append(postDate);
}

function getDetailedPostTitle(jsonReturn, container){
    const postName = document.createElement("h1");
    postName.innerHTML = jsonReturn.title;
    container.append(postName);
}

function getDetailedPostDescription(jsonReturn, container){
    const postDescription = document.createElement("p");
    postDescription.innerHTML = jsonReturn.content;
    container.append(postDescription);
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
await getPostInfo(params.get("id"));


// code taken and modified from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
async function modalImages(){
    // Get the modal
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    // Get the image and insert it inside the modal - use its "amolt" text as a caption
    const imageNodes = document.getElementsByTagName('img');
    const modalImg = document.getElementById("img01");

    for (let i=1; i<imageNodes.length-1; i++)
    {          
        imageNodes[i].addEventListener('click', function() {
            imgonclick(this.src);
        });
    }

    function imgonclick(imagesrc){
    modal.style.display = "block";
    modalImg.src = imagesrc;
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
}

await modalImages();
  