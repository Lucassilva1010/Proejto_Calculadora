const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="img/icons8-rindo.gif" alt="Emotion Rindo"/>';
const imgReprovado = '<img src="img/icons8-chorando.gif" alt="Emotion Triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const valorMedia = parseFloat(prompt('Qual  valor mínimo da Média? '));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

   adicinaLinha();
   atualizaTabela();
   atualizaMediaFinal();

});

function adicinaLinha(){
    //Buscando as informações nos Fomularios
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
   
  

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A Atividade ${inputNomeAtividade.value}, já possui no sistema!`)
    }else{
        //Criando um arrai de notas e Atividades
         atividades.push(inputNomeAtividade.value);    
         notas.push(parseFloat(inputNotaAtividade.value)); 
        //Adicionando novas Linhas
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= valorMedia ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
        
        linhas += linha;// atualizando linhas e Acrescentando uma nova linha
           //reseta os valores dos inputs
    }  
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela(){
    const corpoTabela  = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMedia();
    document.getElementById('mediaFinal-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediaFinal-resultado').innerHTML = mediaFinal > valorMedia ? spanAprovado: spanReprovado;
    
    //console.log(atualizaMedia);
}

function calculaMedia(){
    
    let soma = 0;
    for(i=0; i<notas.length;i++){
        soma += notas[i];
    }
    return soma / notas.length;
}

