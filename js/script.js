const numCasuali = [];


for(let i = 0; i < 5; i++){
    numCasuali.push(genNumCasuali(1, 101));
    console.log(numCasuali[i]);
}

function genNumCasuali(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

