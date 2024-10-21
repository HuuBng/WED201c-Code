function upDate(previewPic){
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */

    const imageURL = `url(${previewPic.src})`;
    const altText = previewPic.alt;

    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = imageURL;
    imageDiv.style.backgroundColor = '#000000';
    imageDiv.textContent = altText;

}

function unDo(){
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = '';
    imageDiv.style.backgroundColor = '';
    imageDiv.textContent = 'Hover over an image below to display here.';
}