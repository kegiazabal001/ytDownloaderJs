
window.onload = function() {
    let convertBtn = document.querySelector('.convert-button');
    let searchImg = document.querySelector('.search-icon');
    //let convertBtn = document.getElementById('convert-button');
    let URLinput = document.querySelector('.URL-input');
    convertBtn.addEventListener('click', () => {
        console.log(`URL: ${URLinput.value}`);
        sendURL(URLinput.value);
    });

    function sendURL(URL) {
        window.location.href = `http://localhost:4000/download?URL=${URL}`;
    }

    searchImg.addEventListener('click', () => {
        //redirect to youtube.com in new tab
        window.open('https://www.youtube.com/', '_blank');

    } );
}

let focus = true;

//on window focus
window.onfocus = function() {
    focus = true;

}

//on window blur
window.onblur = function() {
    focus = false;
}

let i = 0;

let clock = setInterval(() => {
    if (focus) {
        document.title = "YT Downloader";
    } else {
        switch (i) {
            case 0:
                document.title = ".";
                i++;
                break;
            case 1:
                document.title = "..";
                i++;
                break;
            case 2:
                document.title = "...";
                i=0;
                break;
            default:
                document.title = "I love you!";
                i = 0;
                break;
        }
    }
}
, 1000);