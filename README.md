# Smart Communications Hackathon by TotalVoice
##### Dez/2019
http://hackathontotalvoice.shawee.io/

API RESTful desenvolvida em NodeJS 10.16.3, utilizando Postgres, MongoDB e Redis.
Todas as tecnologias descritas, bem como suas respectivas dependências são executadas através de containers Docker.

## Resumo

1. [Instalar pré-requisitos](#install-prerequisites)

    Antes de instalar verificar se os requisitos mínimos para instalação são atendidos.

2. [Clonar o projeto](#clone-the-project)

    Fazer o download do repositório do GitHub com o código fonte.

3. [Configurar variáveis de ambiente](#configure-nginx-with-ssl-certificates)

    Atualizar as variáveis de ambiente necessárias para a comunicação entre os containers.

4. [Atualizar dependências](#configure-nginx-with-ssl-certificates)

    Atualizar as bibliotecas e dependências utilizadas no projeto.

5. [Executar a aplicação](#run-the-application)

    Fazer o start de todos os containers e "subir" a aplicação.


## Instalar pré-requisitos

Por enquanto, o projeto foi desenvolvido para ser executado em Unix `(Linux/MacOS)`. Mas, provavelmente não terá problemas em ser executado no Windows.

Todos os requisitos devem estar disponíveis para sua distribuição. Os mais importantes são os seguintes :

* [Git](https://git-scm.com/downloads)
* [Docker](https://docs.docker.com/engine/installation/)
* [Docker Compose](https://docs.docker.com/compose/install/)

Verificar se `docker-compose` já está instalado através do comando : 

```sh
which docker-compose
```

Checar a compatibilidade da versão do docker-compose :

* [Referência da versão 3 do arquivo docker-compose](https://docs.docker.com/compose/compose-file/)

### Imagens utilizadas

* [Alpine-Node](https://hub.docker.com/r/acgomes68/alpine-node)
* [Alpine-Postgres11](https://hub.docker.com/_/postgres)
* [Alpine-Mongo](https://hub.docker.com/r/mvertes/alpine-mongo)
* [Alpine-Redis](https://hub.docker.com/_/redis)

Esse projeto usa as seguintes portas:

| Server   | Port  |
|----------|-------|
| Node     | 3000  |
| Postgres | 5432  |
| Mongo    | 27017 |
| Redis    | 6379  |


## Clonar o projeto

Para instalar [Git](https://github.com/acgomes68/hackathon-total-voice-time61), faça o download e instale seguindo as instruções abaixo:

```sh
git clone https://github.com/acgomes68/hackathon-total-voice-time61 hackathon
```

Vá para o diretório do projeto:

```sh
cd hackathon
```

### Árvore de diretórios do projeto

#### Diretório raiz ./ (arquivos de configuração)

#### Diretório ./data (conteúdo das bases de dados)
    
#### Diretório ./src (código fonte)

#### Diretório ./tmp (imagens dos avatars)


## Configurar variáveis de ambiente
Fazer um cópia do arquivo .env.example como .env
Alterar os valores descritos no arquivo.


## Atualizar dependências
Para atualizar as dependências do projeto que estão descritas no arquivo package.json, executar 
```sh
yarn
```
caso tenha o yarn instalado OU

```sh
npm install 
```
caso tenha o Node instalado
Após a exeução do comando será criada uma pasta node_modules


## Executar a aplicação

    1. Iniciar a aplicação :

    ```sh
    sudo docker-compose up -d
    ```

    ** Por favor, aguarde uns minutos, pois talvez exista a necessidade de fazer o download das imagens que serão utilizadas para os containers...**

    ```sh
    sudo docker-compose logs -f # Para verificar a saída do log
    ```

    2. Abrir o navegador preferido:

    * [http://localhost:3000](http://localhost:3000/)
    
    ** Substituir "localhost" pelo conteúdo da variável de ambiente APP_URL
    ** Substituir "3000" pelo conteúdo da variável de ambiente APP_PORT


    3. Parar e limpar os serviços

    ```sh
    sudo docker-compose down -v


## Integrantes
Anderson Lima: https://www.linkedin.com/in/anderson-lima-68360289/

Antonio Gomes: https://www.linkedin.com/in/antonio-carlos-gomes-a10643127/

Saulo Castilhos: https://www.linkedin.com/in/saulocastillos/

Thamires Melo: https://www.linkedin.com/in/thamires-correiamelo/

