// Carne - 400g por pessoa + 6 horas 650
// Cerveja - 1200ml por pessoa + 6 horas 2000ml
// Refrigerante/agua 1000 ml popr pessoa + 6 horas 1500ml

// CRIANÇAS VALE POR 0,5


let l_adulto = document.getElementById('txt1');
let l_crianca = document.getElementById('txt2');
let l_tempo = document.getElementById('txt3');

let l_result = document.getElementById('result');

function calcular(){

    let CarnecalcTotal;
    let CervejacalcTotal;
    let BebidacalcTotal;

    let adulto = l_adulto.value;
    let crianca = l_crianca.value;
    let tempo = l_tempo.value;


    if(adulto == "" ){
        window.alert("FAVOR INSERIR UM VALOR NO CAMPO ADULTO..");
    }else if (crianca == ""){
        window.alert("FAVOR INSERIR UM VALOR NO CAMPO CRIANÇA..");
    }else if (tempo == ""){
        window.alert("FAVOR INSERIR UM VALOR NO CAMPO DURAÇÃO..");
    }else{
        CarnecalcTotal  =  adulto * carnePP(tempo) + carnePP(tempo) / 2 * crianca;    
        CervejacalcTotal = adulto * cervejaPP(tempo);
        BebidacalcTotal = adulto * bedidaPP(tempo) + bedidaPP(tempo) / 2 * crianca;    

        l_result.innerHTML = `<p> ${CarnecalcTotal / 1000} Kg de Carne </p>`;
        l_result.innerHTML += `<p> ${Math.ceil(CervejacalcTotal / 355)} Latas de Cerveja </p>`;
        l_result.innerHTML += `<p> ${Math.ceil(BebidacalcTotal / 2000)} Garrafas de Refrigerante/Agua</p>`;
    }
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bedidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

