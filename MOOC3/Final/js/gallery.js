function upDate(previewPic) {

    const imageURL = `url(${previewPic.src})`;
    const altText = previewPic.alt;

    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = imageURL;
    imageDiv.style.backgroundColor = '#000000';
    imageDiv.textContent = altText;
    imageDiv.style.opacity = 1;
    imageDiv.style.transition = '0.3s ease-in-out 0s';
    imageDiv.style.borderColor = '#eb6e6eb5';

}

function unDo() {

    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = '';
    imageDiv.style.backgroundColor = '';
    imageDiv.textContent = 'Hover over an image below to display here.';
    imageDiv.style.opacity = 0.3;
    imageDiv.style.transition = '0.3s ease-in-out 0s';
    imageDiv.style.borderColor = 'black';
}

function onLoad() {
    const lucky = Math.floor(Math.random() * 101);
    const para = document.getElementById("luckyNumber");
    para.textContent = 'Your lucky number between 0 and 100 is ' + lucky;
}