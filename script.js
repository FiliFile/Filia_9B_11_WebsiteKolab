elementImg = document.getElementById("idImage");
listImage = ["TUDpack.png", "TUDbubuk.png", "STUDbotol.png", "STUDbubuk.png", "STUDsachet.png", "TUDsachet.png"];
i = 0;
function gantiGbr(){
    elementImg.src = listImage[i];
    i = (i + 1)% listImage.length;
}
setInterval(gantiGbr,5000)