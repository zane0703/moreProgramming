const readLine = require("readline").createInterface({input:process.stdin,output:process.stdout})
let n=0;
let pile_1=0,pile_2=0;
readLine.on("line",input=>{
    if(n===0){
        input = parseInt(input);
        if(isNaN(input)){
            console.log("Invalid input");
        }else{
            if(input>0){
                if(input<=1000){
                    n = input;
                }else{
                    console.log("n must be last then 1000")
                }
            }else{
                if(input===0){
                    readLine.close();
                }else{
                    console.log("n must be more then 0")
                }
            }
        }
       
    }else{
        input = input.split(" ");
        input[1] = parseInt(input[1])
        if(isNaN(input[1])){
            console.log("input must be a number")
        }else{
            if(input[1]>0){
        switch(input[0].toUpperCase()){
            case "DROP":               
                    if(input[1]>100000){
                        console.log("input had exceed 100,000");
                    }else{
                        if(pile_2 + input[1]>100000){
                            console.log("amount had exceed 100,000");
                        }else{
                            pile_2 += input[1];
                            console.log("DROP 2",input[1]);
                        }      
                    }
                break;
                case "TAKE":
                    if(pile_2>0){
                        let sum;
                        if((sum = pile_1+pile_2)>100000){
                            let amount = 100000-pile_1;
                            pile_1 = 100000;
                            pile_2 -=amount;
                            console.log("MOVE 2->1",amount);
                        }else{
                        console.log("MOVE 2->1",pile_2);
                        pile_1 =sum;
                        pile_2 =0;
                        }
                    }
                    if(pile_1<input[1]){
                        console.log("you taking more plate then what in the pile");
                    }else{
                        pile_1 -= input[1];
                        console.log("TAKE 1",input[1])
                    }
                    break;
                    default:
                        console.log("Invalid input,",input[0]);
                        break;
        }
    }else{
        console.log("Input cannot be negative")
    }
        if(--n===0){
            process.stdout.write("\n");
        }
    }
}
})