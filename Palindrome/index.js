

let isPalindrome = str => {
    let input = document.getElementById('palindromeBox').toLowerCase();
    let rightLeft = ""
    
    for(var i = input.length - 1; i >=0; i--){
        rightLeft += input[i]
    }
    if(input === rightLeft){

        
        return true;  
    }else {

        
        return false; 
    }
}

// const storeValue = () => {
//   let x = document.createElement("LI");
//   let t = document.createTextNode("input");
//   x.appendChild(t);
//   document.getElementById("ok").appendChild(x);
// }
