# Alerth Mobile/Web

Bem-vindo à configuração do projeto Alerth Mobile! Este guia irá orientá-lo pelos passos necessários para configurar e rodar o ambiente de desenvolvimento para a versão mobile utilizando Capacitor, Vue 3 e Vite.

⚠️ Este projeto está em fase inicial de desenvolvimento, por isso, é normal encontrar bugs ou funcionalidades incompletas. ⚠️

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados no seu sistema:

- Node.js (versão 14+)
- npm ou pnpm
- Capacitor CLI (@capacitor/cli)
- Android SDK (para desenvolvimento mobile)
- ADB (Android Debug Bridge) para rodar no dispositivo sem Android Studio

### 1. Clonar o Repositório

O primeiro passo é clonar o repositório do projeto para o seu ambiente local. Utilize o seguinte comando no terminal:

```
git clone https://github.com/JonathasSC/alerth-mobile.git
```

Após a clonagem, navegue até o diretório da versão web

```
cd alerth-mobile/web
```

### 2. Instalar Dependências da versão web

Com o repositório clonado, instale as dependências do projeto utilizando o npm ou pnpm:

#### npm

```
npm install
```

#### pnpm

```
pnpm install
```

### 3. Compilar o Projeto

Antes de rodar o aplicativo, compile o projeto web:

#### npm

```
npm run build
```

#### pnpm

```
pnpm run build
```

Isso irá gerar os arquivos de build para o Capacitor.

### 4. Acesse o diretorio da versão mobile

Para voltar ao diretorio raiz

```
cd ..
```

```
cd alerth-mobile/mobile
```

### 5. Faça o bui Sincronizar com Capacitor

Sincronize o Capacitor com os arquivos de build gerados:

```
npx cap sync
```

### 6. Executar no Dispositivo Android

Para acessar a área administrativa do Django, crie um superusuário executando o seguinte comando:

Com Android Studio:

1. Abra o projeto Android gerado pelo Capacitor:

   ```
   npx cap open android
   ```

2. No Android Studio, conecte seu dispositivo ou escolha um emulador, e clique em Run.

Sem Android Studio (Usando ADB):

Se você prefere rodar diretamente no seu dispositivo Android sem usar o Android Studio, siga os passos baixo:

1. Conecte o seu dispositivo Android via USB.

2. Verifique se o dispositivo está conectado corretamente

   ```
   adb devices
   ```

3. Instale o APK diretamente no dispositivo:

   ```
   npx cap copy android
   ```

4. Inicie o aplicativo no dispositivo
   ```
   npx cap run android
   ```

Nota ⚠️: Certifique-se de que a Depuração USB está ativada no seu dispositivo.
