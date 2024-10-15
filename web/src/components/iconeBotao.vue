<template>
    <button class="botaoIcone">
        <img :src="imagem"/>
        <p>{{ texto }}</p>
    </button>
</template>

<script>
export default {
    props: {
        imagem: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
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
</style>
