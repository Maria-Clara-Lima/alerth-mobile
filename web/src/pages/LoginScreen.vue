<template>
    <div class="login-container">
      <h1 class="title">Entrar em Alerth</h1>
      <p class="subtitle">Contribuindo para uma <br> cidade melhor</p>
      <form @submit.prevent="handleLogin">
        <p v-if="error" class="error-message">Nome de usuário, email ou senha incorretos</p>
        <div class="form-group" :class="{'input-error': error && !usernameOrEmail}">
          <input type="text" v-model="usernameOrEmail" placeholder="Nome de usuário ou E-mail" />
        </div>
        <div class="form-group" :class="{'input-error': error && !password}">
          <input type="password" v-model="password" placeholder="Senha" />
        </div>
        <div class="links-container">
          <router-link to="/recuperar-senha" class="forgot-password-link">Esqueci a senha</router-link>
        </div>
        <button type="submit" class="login-button">Entrar na minha conta</button>
        <div class="register-link-container">
          <router-link to="/cadastro" class="register-link">Não possui uma conta? Criar conta</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usernameOrEmail: '',
        password: '',
        error: false
      };
    },
    methods: {
      handleLogin() {
        if (!this.usernameOrEmail || !this.password) {
          this.error = true;
        } else {
         
          const users = [
            { username: 'usuario1', email: 'usuario1@exemplo.com', password: 'senha123' },
            { username: 'usuario2', email: 'usuario2@exemplo.com', password: 'senha456' }
          ];
  
          const user = users.find(user =>
            (user.username === this.usernameOrEmail || user.email === this.usernameOrEmail) &&
            user.password === this.password
          );
  
          if (user) {
            console.log('Login bem-sucedido');
            this.error = false;
            this.$router.push('/pagina-principal');
          } else {
            console.log('Nome de usuário ou senha incorretos');
            this.error = true;
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 427px; 
    height: 699px; 
    padding: 140px 20px; 
    box-sizing: border-box;
    background-color: white;
    border: 2px solid #cbccd7; 
    border-radius: 10px; 
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
  }
  
  .title {
    font-size: 36px;
    font-weight: bold;
    color: #3888FF;
    margin-bottom: 1px;
    align-self: flex-start; 
  }
  
  .subtitle {
    font-size: 20px;
    font-weight: bold;
    color: #a0bee9;
    margin-top: 8px; 
    margin-bottom: 30px; 
    align-self: flex-start; 
  }
  
  .error-message {
    color: red;
    font-size: 14px;
    margin-bottom: 20px;
  }
  
  .form-group {
    width: 100%;
    margin-bottom: 20px; 
  }
  
  .input-error input {
    border: 1px solid red;
  }
  
  input {
    width: 379px;
    height: 48px; 
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #EEF5FF;
    border-radius: 5px;
    font-size: 13px;
    background-color: #EEF5FF; 
    color: rgb(0, 0, 0);
  }
  
  input::placeholder {
    color: #758EB5;
  }
  
  .links-container {
    width: 100%;
    display: flex;
    justify-content: flex-end; 
    margin-bottom: 20px; 
  }
  
  .forgot-password-link {
    font-size: 13px;
    color: #7D93B5; 
    text-decoration: none;
  }
  
  .forgot-password-link:hover {
    text-decoration: underline;
  }
  
  .login-button {
    width: 379px; 
    height: 45px; 
    padding: 10px;
    background-color: #3888FF;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #3888FF;
  }
  
  .register-link-container {
    width: 100%;
    display: flex;
    justify-content: center; 
    margin-top: 20px; 
  }
  
  .register-link {
    font-size: 13px; 
    color: #3888ffd7; 
    text-decoration: none;
  }
  
  .register-link:hover {
    text-decoration: underline;
  }
  </style>
  