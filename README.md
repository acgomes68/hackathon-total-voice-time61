# Smart Communications Hackathon by TotalVoice
##### Dez/2019
http://hackathontotalvoice.shawee.io/

API RESTful desenvolvida em NodeJS 10.16.3, utilizando Postgres, MongoDB e Redis.
Todas as tecnologias descritas, bem como suas respectivas dependências são executadas através de containers Docker.

## Instalar prerequisites

Por enquanto, foi basicamente criado para ser executado em Unix `(Linux/MacOS)`. Talvez possa ser executado também no Windows.

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


## Clone oprojeto

Para instalar [Git](https://github.com/acgomes68/hackathon-total-voice-time61), faça o download e instale seguindo as instruções abaixo:

```sh
git clone https://github.com/acgomes68/hackathon-total-voice-time61 hackathon
```

Vá para o diretório do projeto:

```sh
cd hackathon

### Project tree

#### Diretório raiz ./ (arquivos de configuração)

├── docker-compose.yml


#### Diretório ./src (código fonte)
.
├── app
│   ├── controllers
│   │   ├── AccountController.js
│   │   ├── AppointmentController.js
│   │   ├── EntryController.js
│   │   ├── FileController.js
│   │   ├── NotificationController.js
│   │   ├── ProviderController.js
│   │   ├── SessionController.js
│   │   └── UserController.js
│   ├── jobs
│   │   └── CancellationMail.js
│   ├── middlewares
│   │   └── auth.js
│   ├── models
│   │   ├── Account.js
│   │   ├── Appointment.js
│   │   ├── Cashflow.js
│   │   ├── Entry.js
│   │   ├── File.js
│   │   ├── Provider.js
│   │   ├── ProviderType.js
│   │   └── User.js
│   ├── schemas
│   │   └── Notification.js
│   └── views
│       └── emails
│           ├── layouts
│           │   └── default.hbs
│           ├── partials
│           │   └── footer.hbs
│           └── cancellation.hbs
├── config
│   ├── auth.js
│   ├── database.js
│   ├── mail.js
│   ├── mongo.js
│   ├── multer.js
│   ├── redis.js
│   └── sentry.js
├── database
│   ├── migrations
│   │   ├── 20191020194340-create-files.js
│   │   ├── 20191022083937-create-users.js
│   │   ├── 20191107201505-create-provider-types.js
│   │   ├── 20191107202405-create-providers.js
│   │   ├── 20191107212405-create-appointments.js
│   │   ├── 20191211173810-create-accounts.js
│   │   ├── 20191211174710-create-entries.js
│   │   └── 20191212015310-create-cashflow.js
│   ├── seeds
│   │   ├── 20191211200838-provider-types.js
│   │   ├── 20191211200900-providers.js
│   │   ├── 20191211921200-files.js
│   │   ├── 20191212021200-users.js
│   │   └── 20191212053500-accounts.js
│   └── index.js
├── lib
│   ├── Mail.js
│   └── Queue.js
├── app.js
├── queue.js
├── routes.js
└── server.js

#### Diretório ./tmp (imagens dos avatars)
.
└── uploads
    └── ea1a73bc09de67b9b709afa10f8b5c49.png


#### Diretório ./data (conteúdo das bases de dados)
.
├── mongo
├── postgres
├── redis


## Integrantes
Anderson Lima: https://www.linkedin.com/in/anderson-lima-68360289/

Antonio Gomes: https://www.linkedin.com/in/antonio-carlos-gomes-a10643127/

Saulo Castilhos: https://www.linkedin.com/in/saulocastillos/

Thamires Melo: https://www.linkedin.com/in/thamires-correiamelo/

