//print the number in word in reverse order//
n = parseInt(prompt("Enter The Number"));
while(n > 0){
    lastdigit = n % 10;
    n = n - lastdigit;
    n = n / 10; 
    if (lastdigit == 1){
        console.log("One");
    }
    else if (lastdigit == 2){
        console.log("Two");
    }
    else if(lastdigit == 3){
        console.log("Three");
    }
    else if(lastdigit == 4){
        console.log("Four");
    }
    else if(lastdigit == 5){
        console.log("Five");
    }
    else if(lastdigit == 6){
        console.log("Six");
    }
    else if(lastdigit == 7){
        console.log("seven");
    }
    else if(lastdigit == 8){
        console.log("Eight");
    }
    else if(lastdigit == 9){
        console.log("Nine");
    }
    else if(lastdigit == 0){
        console.log("Zero");
    }
}
