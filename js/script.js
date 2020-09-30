

let botaoCriarTarefa = document.querySelector('#adicionar-tarefa');
let texto = document.querySelector('#tarefa-digitada');
let divTarefas = document.querySelector('#tarefas');

function adicionarAcaoDeFinalizarTarefa () {
    let listaDeBotoes = document.querySelectorAll('.botao-tarefa');

    for (let i = 0; i < listaDeBotoes.length; i++) {
        let botao = listaDeBotoes[i];

        botao.addEventListener('click', function() {
            botao.parentElement.parentElement.remove();
        });
    }
}

adicionarAcaoDeFinalizarTarefa();

function criarTarefa () {
    let tarefa = `
    <div class="col-md-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${texto.value}
            </div>
            <div class="botao-tarefa">
                <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
            </div>
        </div>
    </div>`;

    if (texto.value === '') {
        alert('O campo de tarefa está vazio. Favor colocar o título da tarefa.');
    }
    else {
        divTarefas.innerHTML += tarefa;
        //alert('Tarefa ' + texto.value + ' criada com sucesso!!!');
        texto.value = '';
        adicionarAcaoDeFinalizarTarefa();
    }
}

botaoCriarTarefa.addEventListener('click', criarTarefa);
texto.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        criarTarefa();
    }
});