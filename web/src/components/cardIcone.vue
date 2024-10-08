<template>
    <div class="cardPrincipal">
        <div class="inputGrupo">
            <input type="text" placeholder="Onde está a ocorrência?" class="inputOcorrencia" />
            <button class="botaoProcurar">Procurar</button>
        </div>
        <div class="grupoIcone">
            <button class="botaoIcone">
                <img src="../assets/icone__canoQuebrado.svg" alt="Ícone de um cano quebrado" />
                <p>Cano Quebrado</p>
            </button>
            <button class="botaoIcone">
                <img src="../assets/icone__alagamento.svg" alt="Ícone de um alagamento" />
                <p>Alagamento</p>
            </button>
            <button class="botaoIcone">
                <img src="../assets/icone__arvoreCaida.svg" alt="Ícone de uma árvore Caída" />
                <p>Árvore caída</p>
            </button>
            <button class="botaoIcone">
                <img src="../assets/icone__semaforoQueimado.svg" alt="Ícone de um semáforo queimado" />
                <p>Semáforo Queimado</p>
            </button>
        </div>

        <button class="botaoMarcarOcorrencia">Marcar Ocorrência</button>
    </div>
</template>

<style scoped>
.cardPrincipal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 16px;
    padding: 25px;
    z-index: 2;
}

.inputGrupo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EEF5FF;
    border-radius: 8px;
    padding: 10px;
}

.inputOcorrencia {
    flex: 1;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 15px;
    color: #758eb5;
    background-color: #EEF5FF; 
    margin-right: 10px;
}

.inputOcorrencia::placeholder{
    font-weight: bold;
    color: #758EB5;
    font-size: 13px;
}

.inputOcorrencia:focus {
    outline: none;
}

.botaoProcurar {
    background-color: #3888FF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
}

.botaoProcurar:hover {
    background-color: #1c76fc;
}

.grupoIcone {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 20px 0;
}

.botaoIcone {
    background-color: #eef5ff;
    border-radius: 8px;
    padding: 5px;
    color: #000;
    flex: 1;
    margin: 0 5px;
    border: none;
}

.botaoIcone:hover {
    opacity: 0.5;
}

.botaoIcone img {
    width: 30px;
    height: auto;
    display: block;
    margin: auto;
}

.botaoIcone p {
    margin-top: 4px;
    font-size: 12px;
    color: #758eb5;
}

.botaoMarcarOcorrencia {
    background-color: #3888FF;
    color: white;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
}

.botaoMarcarOcorrencia:hover {
    background-color: #1c76fc;
}
</style>
