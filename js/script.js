const numCasuali = [];

numCasuali.push(genNumCasuali(1, 101));



for(let i = 0; i < numCasuali.length; i++){
    console.log(numCasuali[i]);
}

function genNumCasuali(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

