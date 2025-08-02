// let numberOk = [ 45, 67, 80, 89, 76];

// for (let i = 0; i <= 4; i++){
//     if(nums >100 || nums<0 ){
//     console.log(nums + " Invalid");
// }
// else  if (nums >=80){
//     console.log(nums + " A+");
// }

// else if(nums >=70){
//     console.log(nums + " A");
// }
// else if(nums >=60){
//     console.log(nums + " A-");
// }
// else if(nums>=50){
//     console.log(nums + " B");
// }
// else if(nums >=40){
//     console.log(nums + " C");
// }
// else if(nums >=33){
//     console.log(nums + " D");
// }

// else {
//     console.log("Failed");
// }

// }


// for each loop ========================

let numberOk = [ 45, 67, 80, 89, 76];

numberOk.forEach ((nums)=>{
    if(nums >100 || nums<0 ){
    console.log(nums + " Invalid");
}
else  if (nums >=80){
    console.log(nums + " A+");
}

else if(nums >=70){
    console.log(nums + " A");
}
else if(nums >=60){
    console.log(nums + " A-");
}
else if(nums>=50){
    console.log(nums + " B");
}
else if(nums >=40){
    console.log(nums + " C");
}
else if(nums >=33){
    console.log(nums + " D");
}

else {
    console.log("Failed");
}
 
});



