
//const apikey = "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq";
let btn = document.getElementById("btnSearch");
if (btn) {
btn.addEventListener("click", console.log("helloworlds"));
}
function goApiGo() {
let url = "https://api.giphy.com/v1/stickers/search?&limit=10&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq&q=";
let search = document.getElementById("search").value;
console.log(search);
url = url.concat(search);
console.log(url);
}