let arr1 = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < arr1.length; i++) {
    total += arr1[i];
}
console.log(total);

let cities = ["Karachi", "Quetta", "Bahawalpur"];
cities.push("Haveli Lakha", "Islamabad");
console.log(cities);

let fruits1 = ["Mango", "Cherry", "Strawberry", "Blueberry"];
fruits1.pop();
console.log(fruits1);

let nums = [5, 10, 15, 20];
nums.shift();
console.log(nums);

let langs = ["Python", "JavaScript", "Java"];
langs.unshift("TypeScript");
console.log(langs);

let fruits2 = ["Apple", "Banana", "Orange", "Grape"];
let idx = fruits2.indexOf("Banana");
console.log(idx);

let arr2 = [100, 200, 300, 400, 500];
let evenItems = [];
for (let i = 0; i < arr2.length; i++) {
    if (i % 2 === 0) {
        evenItems.push(arr2[i]);
    }
}
console.log(evenItems);

let students = ["Ali", "Bilal", "Cathy", "Danish", "Ehsan"];
students.splice(1, 2);
console.log(students);

let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
colors.splice(1, 2, "Pink", "Orange");
console.log(colors);

let i = 1;
let oddNums = [];
do {
    if (i % 2 !== 0) {
        oddNums.push(i);
    }
    i++;
} while (i <= 20);
console.log(oddNums);

let phones = ["Samsung", "Apple", "Huawei"];
phones.push("Xiaomi");
phones.unshift("Nokia");
console.log(phones);

let bigNums = [50, 150, 75, 200, 125, 300, 25, 175, 90, 250];
let count = 0;
for (let i = 0; i < bigNums.length; i++) {
    if (bigNums[i] > 100) {
        count++;
    }
}
console.log(count);

let list1 = [7, 14, 23, 36, 45];
let even = 0;
let odd = 0;
for (let i = 0; i < list1.length; i++) {
    if (list1[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}
console.log(even);
console.log(odd);

let numbers = [10, 20, 30, 40, 50];
let mid = Math.floor(numbers.length / 2);
numbers.splice(mid, 1, 99);
console.log(numbers);
