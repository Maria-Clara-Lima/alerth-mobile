<template>
    <div class="cardPrincipal">
        <h2>Onde está a ocorrência?</h2>
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
    z-index: 3;
}

h2 {
    margin: 0;
    font-size: 13px;
    color: #758eb5;
    padding: 15px 170px 15px 1px;
    border-radius: 8px;
    background-color: #eef5ff;
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
}

.botaoIcone:hover {
    background-color: #d9e6ff;
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
    background-color: #227AFF;
}
</style>