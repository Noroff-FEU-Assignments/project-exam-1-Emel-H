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