const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="img/icons8-rindo.gif" alt="Emotion Rindo"/>';
const imgReprovado = '<img src="img/icons8-chorando.gif" alt="Emotion Triste"/>';

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >=7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;
    
    linhas += linha;

    const corpoTabela  = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';


})