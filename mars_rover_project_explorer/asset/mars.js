for (i = 0; i < 25; i++) {
    // Note how we construct the name for image1, image2, etc...this sets the image source
    document.getElementById("image" + i).src = msg.photos[i].img_src;
    do  = msg.photos[i].camera.full_name;
}