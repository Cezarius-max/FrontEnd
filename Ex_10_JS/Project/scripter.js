const imgsInfo = [
    // pierwszy obiekt (info o zdjęciu)
    {
      // tytuł pierwszego zdjęcia
    title : "Widok 1",
      // źródło pierszego zdjęcia
    Text : "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcjajs/img/1.jpg?raw=true"
    },
    // drugi obiekt
    {
    title : "Widok 2",
    src : "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcjajs/img/2.jpg?raw=true"
    },
    {
    title : "Widok 3",
    src : "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcjajs/img/3.jpg?raw=true"
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

