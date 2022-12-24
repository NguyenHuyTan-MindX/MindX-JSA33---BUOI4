const input = document.querySelector("input"),
    h2 = document.querySelector("h2");
    h2.innerHTML = localStorage.getItem("value");

input.addEventListener("keyup",display);
// click(click chuot - click right -> tâm ngắm) - keyup(ban phim- w -> đi lên -> d -> đi qua phải)
function display(){
    localStorage.setItem('value',input.value);
    console.log(localStorage.getItem('value',input.value));
    console.log(localStorage.removeItem('value',input.value));
    //removeItem -> output: 'value' -> biến mất (undefined)


    h2.innerHTML = input.value
}
// có ô text -> anh nhập vào "Merry Xmas"
// -> lắng nghe "Merry Xmas" -> Merry Xmas "dữ liệu nhập vào" => value
// Merry Xmas -> reset -> nó mất merry xmas
// muốn lưu vào localStorage 
// setItem || in ra thử || console.log && getItem ||

let myObj = {
    name: "Hao",
    age: 15
}
localStorage.setItem("Đối tượng đưa vào localstorage", myObj);
console.log(localStorage)
// ko xuat ra key : value

let myObj_jsa33 = JSON.stringify(myObj)
console.log(myObj_jsa33);