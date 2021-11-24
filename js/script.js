const numCasuali = [];


// ciclo e funzione per generare i numeri random
for(let i = 0; i < 5; i++){
    numCasuali.push(genNumCasuali(1, 101));
    
    console.log(numCasuali[i]);
}

function genNumCasuali(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const containerNumeri = document.getElementById('container-num');

containerNumeri.innerHTML = numCasuali;



setTimeout(insNumeri, 3000);


function insNumeri(){
    containerNumeri.classList.add('scompari');
    const chiediNumeri = prompt ('Inserisci i numeri che ha detto Simone');
    

}