/*let images = [
    "https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1587583504540-fee44864486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1587575494201-11fe74d90d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
];*/
/** We will use an API to dynamically load images from another website */
/**
 * 1. declare an empty variable for our images
 * 2. fetch the images from external site via API
 * 3. parse the JSON response of API
 * 4. loop through JSON object and get url
 * 5. store url in variable
 */

let images = [];
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(response => response.json())
    .then(data => {
        for(let i=0;i < 10; i++){
            let obj = data[i];
            images.push(obj.url);
        }
    });

let counter = 0;
let imgTag = document.getElementsByTagName("img")[0];
let prevBtn = document.getElementsByTagName("button")[0];
let nextBtn = document.getElementsByTagName("button")[1];

imgTag.src=images[counter];

prevBtn.addEventListener("click",slideToPrev);
nextBtn.addEventListener("click",slideToNext);

function slideToNext(){
    //console.log(counter+" >");
    counter++;
    if(counter === images.length){
        counter = 0;
    }
    if(counter < images.length){
        let nextSlide = images[counter];
        imgTag.src = nextSlide;
    }
}

function slideToPrev(){
    //console.log(counter+" <");
    counter--;    
    if(counter < 0){
        counter = images.length-1;
    }
    if(counter >= 0){
        let prevSlide = images[counter];
        imgTag.src = prevSlide;
    }
}

function slide(){
    /** direction: next or previous slide */
    /** currentSlide: which image (index of the images array is visible) */
    /** container for that image: img-tag to replace the src attribute */
    let currentSlide = images[counter];

}
