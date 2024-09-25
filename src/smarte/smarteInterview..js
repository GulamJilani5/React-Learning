/************************** Javascript ******************************************************/
///// Round 1

//1. // reverse the words of the string with first letter caital
// const str = "smarte india pvt ltd";
// const result = "Ltd Pvt India Smarte";

// I solved during the interview
function capitalize(str) {
  let newValue = str.split(" ").reverse().join(" ");
  // console.log(newValue)
  let arr = newValue.split(" ");
  // console.log(arr)
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    let firstChar = arr[i].charAt(0).toUpperCase();
    //   console.log(firstChar)
    res += firstChar + arr[i].slice(1) + " ";
    console.log(res);
  }
}
const str = "smarte india pvt ltd";
capitalize(str);

//2. count the number of character in the string
//3. Multiply the two number without using '*'

/************************** ReactJS ******************************************************/
////// Round 1
