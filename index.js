$(document).ready(function () {
            renderCurrentTime();
            renderQuote();
            renderRandomImage();
        });


function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let datetime = data['datetime'].substr(11,5);
            $('#time').text(datetime);
        });
}


function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}


//배경화면 랜덤화
function renderRandomImage() {
    let imageList = [];
    for (i = 0; i < 9; i++) {
      imageList.push(i);
    }
    let imageListLength = imageList.length;
    let randomImage = Math.floor(Math.random() * (imageListLength))+1
    randomImage = `backgroundImages/${randomImage}.jpg`
    $(document.body).css("background-image", `url(${randomImage})`);
  }