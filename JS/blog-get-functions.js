
export function addPostCardInfo(jsonReturn, postCard,i){
    getPostImage(jsonReturn, postCard,i);
    getPostTitle(jsonReturn, postCard,i);
    getPostDescription(jsonReturn, postCard,i);
}

function getPostImage(jsonReturn, postCard,i){
    const postImage = document.createElement("img");
    postImage.src = jsonReturn.posts[i].featured_image;
    postCard.append(postImage);
}

function getPostTitle(jsonReturn, postCard,i){
    const postName = document.createElement("h3");
    postName.innerHTML = jsonReturn.posts[i].title;
    postCard.append(postName);
}

function getPostDescription(jsonReturn, postCard,i){
    const postDescription = document.createElement("p");
    postDescription.innerHTML = jsonReturn.posts[i].excerpt;
    postCard.append(postDescription);
}


