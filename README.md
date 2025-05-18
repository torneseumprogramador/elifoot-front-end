# Elifoot Frontend

Aplicação frontend do sistema de gerenciamento de futebol Elifoot, construída com Next.js.

## Funcionalidades

- Gerenciamento de estádios
- Gerenciamento de clubes
- Gerenciamento de jogadores
- Tratamento padronizado de erros
- Funcionalidade de upload de imagens
- Interface responsiva do painel administrativo

## Tecnologias Utilizadas

- Next.js 15.3.2
- React 19
- TypeScript
- Tailwind CSS
- Docker

## Pré-requisitos

- Node.js 20.x
- npm ou yarn
- Docker (para implantação em container)

## Como Começar

### Desenvolvimento Local

1. Clone o repositório:
```bash
git clone [repository-url]
cd elifoot-front-end
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto:
```env
API_URL=http://localhost:8080
# Adicione outras variáveis de ambiente conforme necessário
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

### Implantação com Docker

1. Construa e execute com Docker Compose:
```bash
docker-compose up -d
```

2. Pare os containers:
```bash
docker-compose down
```

## Estrutura do Projeto

```
src/
├── app/                    # Diretório principal do Next.js
│   ├── api/               # Rotas da API
│   │   ├── clubs/        # Endpoints de clubes
│   │   ├── players/      # Endpoints de jogadores
│   │   ├── stadiums/     # Endpoints de estádios
│   │   ├── upload/       # Endpoints de upload
│   │   └── health/       # Endpoint de verificação de saúde
│   └── dash/             # Páginas do painel
├── components/            # Componentes React
│   ├── atoms/            # Componentes básicos
│   ├── molecules/        # Componentes compostos
│   ├── organisms/        # Componentes complexos
│   ├── templates/        # Templates de páginas
│   └── guards/           # Guardas de autenticação
└── services/             # Serviços de API
```

## Tratamento de Erros

A aplicação implementa um tratamento padronizado de erros em todos os endpoints da API:

### Formato de Resposta de Sucesso
```typescript
{
  ...data,
  path: string,
  status: number,
  timestamp: string
}
```

### Formato de Resposta de Erro
```typescript
{
  error: string,
  path: string,
  status: number,
  timestamp: string
}
```

## Configuração Docker

A aplicação inclui:
- Dockerfile multi-estágio para builds otimizadas
- Configuração do Docker Compose
- Endpoint de verificação de saúde
- Reinicialização automática de containers
- Gerenciamento de variáveis de ambiente

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila para produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de código
- `npm run format` - Formata o código com Prettier

## Como Contribuir

1. Crie uma branch para sua feature
2. Faça commit das suas alterações
3. Faça push para a branch
4. Crie um Pull Request

## Licença

[Sua Licença Aqui]
