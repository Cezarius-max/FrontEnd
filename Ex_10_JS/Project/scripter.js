const img = [
    { id:1, "src" : name : "1jpg" },
    { id:2, src : "2.jpg"},
    { id:3, src : "3.jpg"}
];

const imgsInfo = [
    {
        title :  "widok1",
        src : "https",
    },
    {
        title : "widok2",
        src : "",
    },
    {
        title : "widok3",
        src : "",
    }
];

function changeImg(nr){
    const img = document.querySelector('img');
    img.src = imgsInfo[0].src;
    img.alt = imgsInfo[nr].title;
}
changeImg(1);