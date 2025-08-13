// // ---------------------------------- task1-------------------------------------------

const name = "Nehal Reda";
let age = 20;
var status = "true";
var grades = [90, 99, 98];
console.log(name);

// // ---------------------------------- task2-------------------------------------------

var average = 0;
for (var i = 0; i < grades.length; i++) {
    console.log(grades[i]);
    average += grades[i];
}

console.log("The average is : ", average / grades.length);

if (average >= 60) {
    console.log("You are passed !");

}
else {
    console.log("You are not passed !");
}

// // ---------------------------------- task3-------------------------------------------

if (average >= 90) {
    console.log("Your cumulative GPA IS : A+");

}
else if (average >= 75) {
    console.log("Your cumulative GPA IS : B+");

}
else if (average >= 60) {
    console.log("Your cumulative GPA IS : C");

} else {
    console.log("Your are failed !");
}

// // ---------------------------------- task4-------------------------------------------

var subj = parseInt(prompt("pls enter subject number !"));
switch (subj) {
    case 1:
        console.log("math");

        break;
    case 2:
        console.log("science");
        break;
    case 3:
        console.log("English");

        break;
    default:
        console.log("good luck");

        break;
}

// // ---------------------------------- task5-------------------------------------------
for (var i = 0; i < grades.length; i++) {
    console.log(grades[i]);

}

// // ---------------------------------- task6-------------------------------------------

function total() {
    var totalGrade = 0;
    for (var i = 0; i < grades.length; i++) {
        totalGrade += grades[i];

    }
    return totalGrade;

}
var TG = total();
console.log("The total is :", TG);

// console.log(total());

// // ---------------------------------- task7-------------------------------------------

var num = 1;
while (num <= 10) {
    console.log("done");
    num++;

}


// // ---------------------------------- task8-------------------------------------------

var num2 = 1;
do {
    console.log("Done");
    num2++;

} while (num2 < 10);

// // ---------------------------------- task9-------------------------------------------

var Arr = [1, 2, 3, 4, 5, 6];
var sum = 0;
for (var i = 0; i < Arr.length; i++) {
    sum += Arr[i];
}
console.log(sum);
