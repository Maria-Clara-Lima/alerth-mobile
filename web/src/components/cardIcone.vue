<template>
    <div class="cardPrincipal">
        <div class="inputGrupo">
            <input type="text" placeholder="Onde está a ocorrência?" class="inputOcorrencia" />
            <img src="../assets/procurarIcone.png" alt="Ícone procurar" style="margin-right: 10px;" />
        </div>
        <div class="grupoIcone">
            <botao-icone 
                v-for="(icone, index) in iconesArray" 
                :key="index" 
                :imagem="icone.imagem" 
                :texto="icone.texto"
                class="botaoIcone" 
            />
        </div>
        <button class="botaoMarcarOcorrencia">Marcar Ocorrência</button>
    </div>
</template>

<script>
import botaoIcone from './iconeBotao.vue'; 
import iconeCanoQuebrado from '../assets/icone__canoQuebrado.svg';
import iconeAlagamento from '../assets/icone__alagamento.svg';
import iconeArvoreCaida from '../assets/icone__arvoreCaida.svg';
import iconeSemaforoQueimado from '../assets/icone__semaforoQueimado.svg';

export default {
    components: {
        botaoIcone,
    },
    data() {
        return {
            iconesArray: [
                { imagem: iconeCanoQuebrado, texto: 'Cano Quebrado' },
                { imagem: iconeAlagamento, texto: 'Alagamento' },
                { imagem: iconeArvoreCaida, texto: 'Árvore Caída' },
                { imagem: iconeSemaforoQueimado, texto: 'Semáforo Queimado' },
            ],
        };
    }
};
</script>

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

.inputOcorrencia::placeholder {
    font-weight: bold;
    color: #758EB5;
    font-size: 13px;
}

.inputOcorrencia:focus {
    outline: none;
}

.grupoIcone {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 20px 0;
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