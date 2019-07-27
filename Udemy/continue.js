for(var i = 0; i < 10; i++) {
    if(i == 5) {
        console.log(`${i} is my lucky number.`);
        continue;
    }
    console.log('Number: ', i);
}

//continue is nothing but continue to the next iteration, without executing the following code.