
const string1 = "apple,cat,banana,gumbo,horse";

const arr1 = string1.split(",");
// console.log(arr1);

const string2 = "apple cat banana gumbo horse";

const arr2 = string2.split(" ");
// console.log(arr2);

const authHeader = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJlbWFpbCI6ImFsaWNlQGJvYnN0b3JlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczNDE5NTQzMH0.HCBaGL4-S1iX0ANCxpgUOSznqi-TVto8HZ5ztnpuD5c"
const arr3 = authHeader.split(" ")
console.log(arr3[1]);