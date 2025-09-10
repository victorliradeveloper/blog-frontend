# Blog Frontend

Um blog moderno construído com Next.js, TypeScript e seguindo padrões de arquitetura limpa.

## 🏗️ Arquitetura

O projeto segue o padrão **Service Layer + Data Mapper + Custom Hooks**, organizando o código em camadas bem definidas:


## Padrões Utilizados

### 1. **Service Layer Pattern**
- **Responsabilidade**: Encapsula toda a lógica de comunicação com a API
- **Localização**: `src/services/`
- **Exemplo**: `PostService.ts` - centraliza operações de posts

### 2. **Data Mapper Pattern**
- **Responsabilidade**: Transforma dados da API para o formato do frontend
- **Localização**: `src/mappers/`
- **Exemplo**: `post.mapper.ts` - converte resposta da API em entidades

### 3. **Custom Hooks Pattern**
- **Responsabilidade**: Gerencia estado e side effects com React Query
- **Localização**: `src/hooks/`
- **Exemplo**: `usePosts.ts` - hook para buscar posts com cache

### 4. **HTTP Client Pattern**
- **Responsabilidade**: Cliente HTTP reutilizável com tratamento de erros
- **Localização**: `src/http/`
- **Exemplo**: `HttpClient.ts` - abstrai requisições HTTP

## 🚀 Tecnologias

- **Next.js 15** - Framework React com SSR/SSG
- **TypeScript** - Tipagem estática
- **React Query** - Gerenciamento de estado e cache
- **Styled Components** - CSS-in-JS
- **Cypress** - Testes E2E
- **Jest** - Testes unitários

## 📦 Instalação

```bash
# Instalar dependências
npm install
# ou
yarn install

# Executar em desenvolvimento
npm run dev
# ou
yarn dev

# Build para produção
npm run build
# ou
yarn build
```

## 🔧 Configuração

### Variáveis de Ambiente

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linter
npm run test         # Testes unitários
npm run test:e2e     # Testes E2E
```

## Arquitetura Detalhada

### Fluxo de Dados

1. **Component** → Chama hook customizado
2. **Hook** → Usa service para buscar dados
3. **Service** → Usa HttpClient para requisições
4. **Mapper** → Transforma dados da API
5. **Entity** → Define tipos TypeScript

### Exemplo de Uso

```typescript
// Hook
const { data, loading, error } = usePosts('1', '8', 'all');

// Service
const postService = new PostService();
const posts = await postService.getAllPosts('1', '8', 'all');

// Mapper
const mappedPost = mapPost(apiResponse);
```

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes E2E
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📝 Padrões de Código

- **Clean Architecture** - Separação clara de responsabilidades
- **SOLID Principles** - Código maintível e extensível
- **TypeScript** - Tipagem estática em todo o projeto
- **ESLint + Prettier** - Formatação consistente

## 📚 Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença