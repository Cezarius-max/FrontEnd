const imgsInfo = [
    // pierwszy obiekt (info o zdjęciu)
    {
      // tytuł pierwszego zdjęcia
    title : "Widok 1",
      // źródło pierszego zdjęcia
    text : "Obrazek 1"
    },
    // drugi obiekt
    {
    title : "Widok 2",
    text : "Obrazek 2"
    },
    {
    title : "Widok 3",
    text : "Obrazek 3"
    },
]

// const imgsInfo = [
//     {
//         title :  "widok1",
//         src : "https",
//     },
//     {
//         title : "widok2",
//         src : "",
//     },
//     {
//         title : "widok3",
//         src : "",
//     }
// ];

function changeImg(nr){
    const img = document.querySelector('img');
    img.src = imgsInfo[0].src;
    img.alt = imgsInfo[nr].title;
}

let currentSlide = 0;
changeImg(currentSlide);

changeImg(1),

function changeCurrentSlide(direction){
    if(direction =="left"){
        currentSlide--;
        if(currentSlide == -1){
            currentSlide = 2;
        }
    }else{
        currentSlide++;
        if(currentSlide == 3){
            currentSlide = 0;
        }
    }
    changeImg(currentSlide);
}

const left = document.querySelector(".left");
left.onclick = function(){changeCurrentSlide('left')};
const right =document.querySelector(".right");
right.onclick = function(){changeCurrentSlide('right')};

