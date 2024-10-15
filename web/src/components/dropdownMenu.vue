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
    height: calc(100vh - 40px);
    overflow: hidden; 
}


.infoXP__C {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 30px;
    font-weight: bold;
}

.infoXP {
    margin-right: 15px;
    font-size: 1em;
    color: #3888FF;
    font-weight: bold;
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
    border-radius: 10px;
}

.containerConquista h1 {
    margin: 20px 0 8px 0; 
    padding: 0 20px;
    font-size: 1.5em;
    color: #027DA4;
}

.containerConquista p {
    margin: 0 0 20px 0; 
    padding: 0 20px;
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
    text-decoration: none;
    text-decoration: none;
}

.sairConta {
    color: red;
}

.containerConta {
    margin-top: 65px;
}

@media (max-width: 400px) {

    .infoXP__C {
        margin-bottom: 20px;
    }

    h1 {
        font-size: 1.2em;
    }

    h2 {
        font-size: 1em; 
    }

    a {
        margin: 15px 0 5px 0; 
        font-size: 0.9em; 
    }

    .containerConquista {
        margin-bottom: 30px; 
    }

    .imagemTrofeu {
        width: 50px; 
    }

    .containerConta {
        margin-top: 60px;
    }
}

</style>
