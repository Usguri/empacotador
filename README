# Sistema de Empacotamento de Pedidos

## 📋 Descrição do Problema

Seu Manoel tem uma loja de jogos online e deseja automatizar o processo de embalagem dos pedidos. Este projeto é uma API Web desenvolvida em Node.js com NestJS que, dado um conjunto de pedidos com produtos e suas dimensões, retorna qual o tamanho de caixa de papelão que devem ser usadas para cada pedido e quais produtos irão em cada tamanho de caixa.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **NestJS** - Framework para aplicações Node.js escaláveis
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Swagger** - Documentação da API
- **Docker** - Containerização da aplicação
- **JWT** - Autenticação e autorização
- **ESLint** - Linting do código

## 📦 Caixas Disponíveis

O sistema trabalha com os seguintes tamanhos de caixas de papelão (altura x largura x comprimento em centímetros):

- **Caixa 1**: 30 x 40 x 80
- **Caixa 2**: 50 x 50 x 40
- **Caixa 3**: 50 x 80 x 60

## 🏗️ Estrutura do Projeto

```
├── src/
│   ├── auth/                    # Módulo de autenticação JWT
│   ├── data_transfer_object/    # DTOs para transferência de dados
│   ├── helpers/                 # Funções auxiliares
│   ├── interfaces/              # Interfaces TypeScript
│   ├── app.controller.ts        # Controller principal
│   ├── app.module.ts           # Módulo principal
│   ├── app.service.ts          # Serviços da aplicação
│   └── main.ts                 # Ponto de entrada da aplicação
├── docker-compose.yml          # Configuração do Docker Compose
├── Dockerfile                  # Dockerfile para containerização
└── package.json                # Dependências e scripts
```

## 🔧 Instalação e Configuração

### Pré-requisitos

- Node.js
- Docker e Docker Compose
- npm ou yarn

### 1. Clone o Repositório

```bash
git clone [url_projeto]
cd empacotamento
```

### 2. Instale as Dependências

```bash
npm install
```

## 🐳 Executando com Docker

### Opção 1: Docker Compose (Recomendado)

```bash
# Executar a aplicação
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar a aplicação
docker-compose down
```

### Opção 2: Docker Manual

```bash
# Build da imagem
docker build -t empacotamento-api .

# Executar o container
docker run -p 3000:3000 empacotamento-api
```

## 🏃‍♂️ Executando Localmente

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod

# Watch mode
npm run start:debug
```

## 📖 Documentação da API

Após iniciar a aplicação, acesse a documentação Swagger em:

```
http://localhost:3000/docs
```

## 🔐 Autenticação

A API utiliza JWT para autenticação. Para acessar os endpoints protegidos:

1. Faça o acesso ao http://localhost:3000/docs
2. Utilize o token disponivel no arquivo json - token.json
3. Use o token para conseguir realizar o post

## 📡 Endpoints Principais

### POST /pedidos/empacotar

Processa pedidos e retorna o empacotamento otimizado

**Exemplo de Entrada:**

- Acesse a pasta: arquivos_testes -> entrada.json
  **Exemplo de Saída:**
- Acesse a pasta: arquivos_testes -> saida.json

## 🧮 Algoritmo de Empacotamento

O sistema utiliza algoritmos de otimização para:

1. **Minimizar o número de caixas** utilizadas por pedido
2. **Maximizar o aproveitamento do espaço** em cada caixa
3. **Considerar as dimensões** de cada produto para o melhor encaixe
4. **Selecionar automaticamente** o tipo de caixa mais adequado

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
