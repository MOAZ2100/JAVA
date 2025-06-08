let degree = +prompt("Enter your degree");
switch (Math.floor(degree / 10)) {
  case 10:
  case 9:
    console.log("your grade is : Exllant");
    break;
  case 8:
    console.log("your grade is : Very good");
    break;
  case 7:
    console.log("your grade is : Good");
    break;
  case 6:
    console.log("your grade is : Acceptable");
    break;
  case 5:
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("your grade is : Fall");
    break;
}