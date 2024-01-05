function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    var imgdiv = document.getElementById('image');
    imgdiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imgdiv.textContent = previewPic.alt;

    console.log("Text updated:", imgdiv.textContent);
    console.log("Background image updated:", imgdiv.style.backgroundImage);
}

function unDo() {
    var imgdiv = document.getElementById('image');
    imgdiv.style.backgroundImage = "url('')";
    imgdiv.textContent = "Hover over an image below to display here.";

    console.log("Background image reverted:", imgdiv.style.backgroundImage);
    console.log("Text reverted:", imgdiv.textContent);
}
