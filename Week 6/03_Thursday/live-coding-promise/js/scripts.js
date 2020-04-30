//declare variable and store DOM element 
let input = document.querySelector("input");

//listen for change events and call the function getDimensions
input.addEventListener("change",getDimensions);

function getDimensions(){
    //declare temp variable for dimensions
    let dimensions = [];

    //loop through all files
    for(let i = 0; i < this.files.length; i++){
        let file = this.files[i];

        //declare new promise for each file
        let promise = new Promise((resolve,reject) => {
            //create a reference to the file with the URL API
            let src = window.URL.createObjectURL(file);

            //create an image with the Image API
            let image = new Image;

            //link the file src to the new image
            image.src = src;

            //on loading the image, you are able to read the width and the height
            image.onload = function(){
                //resolve your promise: you got the widh you wanted
                resolve(image.width);
            }
            
            // free up memory by revoking the reference
            window.URL.revokeObjectURL(src);
        });

        //store each promise into the temporary array
        dimensions.push(promise);
    }
    
    //wait until all promises are resolved and are returned together in 1 array
    Promise.all(dimensions).then(function(dims){
        //now you can do what you wanted to do, e.g. compare the dimensions to order the images by width or crop the images to the smalles width.
        console.log(dims);
    });
}