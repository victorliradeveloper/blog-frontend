<br/>
<br/>
<br/>

<p align="center">
  <img width="400" src="https://skillicons.dev/icons?i=typescript,react,next,mysql,docker&theme=dark" alt="Java, Spring, Kotlin, GO, Postgres, MySql, MongoDB, Redis, NodeJs, Express, React, NextJs, TailwindCSS">
</p>

## 🎯 Sobre o Projeto

Este é um blog pessoal desenvolvido com foco em **Clean Architecture** e **boas práticas de desenvolvimento**. O projeto demonstra como aplicar princípios de arquitetura limpa em uma aplicação React/Next.js, mantendo o código organizado, testável e escalável.

### ✨ Características Principais

- 🏗️ **Clean Architecture** implementada
- 📱 **Responsivo** e otimizado para mobile
- ⚡ **Performance** otimizada com Next.js
- 🔍 **SEO** otimizado
- 🎨 **UI/UX** moderna e intuitiva
- 🔒 **Autenticação** com Google
- 💾 **Favoritos** com persistência local
- 📊 **Analytics** integrado

## 🛠️ Tecnologias

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **Next.js 15** - Framework React para produção
- **TypeScript** - Superset JavaScript com tipagem
- **Styled Components** - CSS-in-JS
- **Framer Motion** - Animações
- **React Query** - Gerenciamento de estado e cache

### Arquitetura
- **Clean Architecture** - Separação de responsabilidades
- **Domain-Driven Design** - Organização por domínios
- **SOLID Principles** - Princípios de design de software

### Ferramentas
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Jest** - Testes unitários
- **Cypress** - Testes E2E

## 🏗️ Arquitetura

O projeto segue os princípios da **Clean Architecture** com organização por domínios:

```
src/
├── domain/           # 🎯 Regras de negócio
│   └── posts/
│       ├── entities/     # Entidades do domínio
│       └── contracts/    # Contratos/Interfaces
├── application/      # 🔧 Casos de uso
│   └── posts/
│       └── use-cases/    # Lógica de aplicação
├── infrastructure/   # 🏗️ Implementações externas
│   ├── http/            # Cliente HTTP
│   └── memory/          # Repositórios em memória
└── presentation/     # 🎨 Interface do usuário
    ├── components/      # Componentes React
    └── hooks/           # Hooks customizados
```

### 📚 Benefícios da Arquitetura

- **Testabilidade** - Fácil de testar cada camada
- **Manutenibilidade** - Código organizado e legível
- **Escalabilidade** - Fácil de adicionar novas funcionalidades
- **Independência** - Camadas desacopladas
- **Flexibilidade** - Fácil de trocar implementações

## ✨ Funcionalidades

### 📝 Blog
- **Listagem de posts** com paginação
- **Busca por posts** com filtros
- **Visualização de post** individual
- **Categorização** de conteúdo
- **SEO otimizado** para cada post

### 👤 Usuário
- **Autenticação** com Google
- **Perfil do usuário** personalizado
- **Sistema de favoritos** com persistência
- **Logout** seguro

### 🎨 Interface
- **Design responsivo** para todos os dispositivos
- **Animações suaves** com Framer Motion
- **Tema escuro** moderno
- **Loading states** e feedback visual
- **Acessibilidade** implementada

### 📊 Performance
- **SSR/SSG** com Next.js
- **Lazy loading** de imagens
- **Code splitting** automático
- **Cache inteligente** com React Query

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/victorlirafront/blog-frontend.git
cd blog-frontend
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```


4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📖 Como Usar

### Desenvolvimento
```bash
# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Build de desenvolvimento
npm run build:dev

# Servidor de produção
npm start
```


## 📁 Estrutura do Projeto

```
blog-frontend/
├── src/
│   ├── domain/              # 🎯 Regras de negócio
│   │   └── posts/
│   │       ├── entities/    # Entidades (Post, PostPagination)
│   │       └── contracts/   # Contratos (PostRepository)
│   ├── application/         # 🔧 Casos de uso
│   │   └── posts/
│   │       └── use-cases/   # GetPostsUseCase, SearchPostsUseCase
│   ├── infrastructure/      # 🏗️ Implementações
│   │   ├── http/           # HttpClient, PostHttpRepository
│   │   └── memory/         # Repositórios em memória
│   ├── presentation/       # 🎨 Interface
│   │   ├── components/     # Componentes React
│   │   └── hooks/          # Hooks customizados
│   ├── pages/              # 📄 Páginas Next.js
│   ├── data/               # 📁 Dados estáticos
│   ├── constants/          # 🔧 Constantes
│   ├── helper/             # 🛠️ Funções auxiliares
│   └── Context/            # 🎭 Contextos React
├── public/                 # 🌐 Arquivos públicos
├── styles/                 # 🎨 Estilos globais
└── cypress/                # 🧪 Testes E2E
```


## 🤝 Contribuição

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### 📋 Padrões de Commit
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Configurações

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


