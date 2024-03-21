//exception-ngoai le.
const fs = require("fs");
//chay vao try, neu cum lenh trong try gap excention thi se chay vao catch,
//neu ko thi se ko thuc thi cau lenh trong cath
try {
  fs.readFile("/paath/text.txt", "utf8", (data) => {
    console.log(data);
  });
} catch (error) {
  console.log("Day la: ", error);
}
console.log("End of file");

// JSON la mot dinh dang du lieu pho bein duọc su dung de truyen tai du lieu.
// No la mot dinh dang du lieu dua tren van ban de dọc vaf viết cho ca côn người...

// JSON METHOD .

const person = {
  name: "John",
  age: 25,
  city: "New York",
};

const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
// Output: '{"name":"John","age":25,"city":"New York"}'

const jsonString = '{"name":"John","age":25,"city":"New York"}';
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);
// Output: { name: 'John', age: 25, city: 'New York' }



// Localstorage
// Lưu trữ dữ liệu
localStorage.setItem("key", "value");


// Lấy dữ liệu
var data = localStorage.getItem("key");


// Xóa dữ liệu
localStorage.removeItem("key");


// Xóa toàn bộ dữ liệu trong localStorage
localStorage.clear();




// seasonstorage
// Lưu trữ dữ liệu
sessionStorage.setItem("key", "value");

// Lấy dữ liệu
var data = sessionStorage.getItem("key");

// Xóa dữ liệu
sessionStorage.removeItem("key");

// Xóa toàn bộ dữ liệu trong sessionStorage
sessionStorage.clear();




// destruction

// spread
// dung de ket hop mang
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// sao chep mang
const originalArray1 = [1, 2, 3];
const copiedArray = [...originalArray1];

console.log(copiedArray); // Output: [1, 2, 3]

//them phan tu vao mang
const originalArray2 = [1, 2, 3];
const newArray = [...originalArray2, 4];

console.log(newArray); // Output: [1, 2, 3, 4]
