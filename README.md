# BuscadorCep - Aplicativo de Busca de CEP em React Native

O BuscadorCep é um aplicativo simples desenvolvido em React Native que permite aos usuários buscar informações de endereços a partir de um CEP fornecido. Ele utiliza a API ViaCEP para obter dados de endereços com base no CEP digitado pelo usuário, e utiliza a biblioteca Axios para fazer as requisições à API. Além disso, o aplicativo utiliza a biblioteca react-native-mask-input para criar uma máscara no campo de entrada de CEP, garantindo uma melhor experiência do usuário.

## Índice

- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Licença](#licença)

## Funcionalidades

- Busca de Endereço por CEP: O aplicativo permite ao usuário inserir um CEP e, ao pressionar um botão de busca, recupera informações de endereço correspondentes a esse CEP, incluindo logradouro, bairro, cidade, estado e DDD.

- Máscara de Entrada de CEP: A biblioteca react-native-mask-input é utilizada para formatar automaticamente a entrada do CEP, adicionando os caracteres de formatação corretos (por exemplo, "12345-678") à medida que o usuário digita.


### Pré-requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (v4 ou superior) - você pode instalá-lo globalmente usando o seguinte comando:

  ```bash
  npm install -g expo-cli
  ```

### Passo 1: Clone o repositório

    git clone https://github.com/jhonatarios/BuscadorCep
    cd BuscadorCep

### Passo 2: Instale as dependências

    npm install

### Passo 3: Configuração do ambiente

Certifique-se de ter um emulador Android/iOS instalado ou o aplicativo Expo Go instalado em um dispositivo físico. Você pode baixar o Expo Go na Google Play Store ou na Apple App Store.

### Passo 4: Inicie o aplicativo

    expo start

Isso abrirá o Expo Developer Tools em seu navegador. Você terá a opção de executar o aplicativo em um emulador ou em um dispositivo físico.

- Para executar o aplicativo em um emulador Android/iOS, clique no link apropriado na página do Expo Developer Tools.
- Para executar o aplicativo em um dispositivo físico, abra o aplicativo Expo Go em seu dispositivo e escaneie o QR code exibido na página do Expo Developer Tools.

O aplicativo BuscadorCep agora deverá ser aberto no emulador/dispositivo.

### Dicas adicionais

- Caso você esteja enfrentando problemas de instalação ou execução, verifique a documentação oficial do Expo para soluções de problemas comuns.

- Para personalizar o aplicativo com suas próprias informações, verifique os arquivos relevantes no código-fonte.

- Divirta-se explorando o BuscadorCep!

## Configuração da API ViaCEP

O aplicativo utiliza a API gratuita ViaCEP (https://viacep.com.br/) para obter informações de endereço. Certifique-se de que você possui acesso à internet para que o aplicativo possa fazer as requisições corretamente.
Bibliotecas Utilizadas

- Axios: Biblioteca para fazer requisições HTTP. Utilizada para se comunicar com a API ViaCEP.

- react-native-mask-input: Biblioteca para criação de máscaras em campos de entrada. Utilizada para formatar o campo de CEP.

## Licença

Este projeto está licenciado sob a [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).