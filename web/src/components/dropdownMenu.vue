<template>
    <div v-if="menuVisivel" class="dropDownMenu">
        <div class="infoXP__C">
            <p class="infoXP">1235XP</p>
            <p class="infoC">1235C</p>
        </div>
        <div class="containerConquista">
            <img src="../assets/medal.png" alt="Ícone de um troféu que representa uma conquista alcançada no app"
                class="imagemTrofeu" />
            <h1>Diamante</h1>
            <p>Parabéns, você notificou 100 ocorrências</p>
        </div>

        <h2>Conta</h2>
        <a href="#">Perfil</a>
        <a href="#">Preferências</a>
        <a href="#">Conquistas</a>

        <h2>Aplicativo</h2>
        <a href="#">Notificações</a>

        <div class="containerConta">
            <a href="#">Trocar de conta</a>
            <a href="#" class="sairConta">Sair da conta</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menuVisivel: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
.dropDownMenu {
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    border-radius: 16px;
    z-index: 3;
    padding: 20px;
    width: 250px;
    height: 100vh;
}

.infoXP__C {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 30px;
}

.infoXP {
    margin-right: 15px;
    font-size: 1em;
    color: #3888FF;
}

.infoC {
    font-size: 1em;
    color: white;
    background-color: #3888FF;
    padding: 5px 10px;
    border-radius: 49px;
}

.imagemTrofeu {
    margin: 0 auto;
    margin-top: 20px;
    width: 60px;
}

.containerConquista {
    text-align: center;
    margin-bottom: 50px;
    background-color: #ECF4FF;
    padding: 20px;
    border-radius: 10px;
}

h1 {
    margin: 8px 0;
    font-size: 1.5em;
    color: #027DA4;
}

p {
    margin: 0;
    font-size: 0.9em;
    color: #758EB5;
    font-weight: bold;
}

h2 {
    margin-top: 30px;
    font-size: 1.2em;
    color: #3888FF;
}

a {
    display: block;
    margin: 10px 0 10px 15px;
    color: #758EB5;
    font-weight: bold;
}

.sairConta {
    color: red;
}

.containerConta {
    margin-top: 65px;
}
</style>