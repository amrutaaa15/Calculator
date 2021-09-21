console.log("This is my First Calculator and Project 7")

let calc = document.getElementById("calc");
let btns = document.querySelectorAll("button");
let text=document.getElementById("text");
let inputValue = "";
const arrays=[];

let temp;
let maths;
let input;
for (btn of btns) {
    btn.addEventListener("click", (e) => {
        num = e.target.innerText;
        calc.value=maths;
        console.log("button text is", num);
    
        if (num == "=") {
            calc.value = inputValue+ " = "+eval(inputValue);
            maths=calc.value;
            inputValue=eval(inputValue)
            arrays.push(maths);
            arrays.forEach(element => {
                console.log("history"+element);
                let li=document.createElement('li');
                li.style.listStyle="none";
                li.innerHTML=element;
                text.append(li);
                arrays.shift(arrays[0]);
            });
        }

        else if (num == "C") {
            inputValue =" ";
            calc.value=inputValue;
        }

        else if(num=="^"){
            inputValue+=num;
            calc.value=inputValue; 
        }
        
        else{
            inputValue += num;
            calc.value = inputValue;

            if(inputValue.includes("^")){
                temp=e.target.innerText;
                console.log(temp);
                inputValue=Math.pow(input,temp);
                
            }
            else{
                input=e.target.innerText;
            }
         
               
           
        }
    })
}

