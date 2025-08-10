# Configuração da API

Este projeto foi migrado para Clean Architecture e agora suporta tanto dados mockados quanto uma API real.

## 🚀 Configuração Atual

Por padrão, o projeto está configurado para usar **dados mockados** (em memória), o que permite desenvolvimento e testes sem necessidade de uma API externa.

## 📝 Configuração da API Real

Para usar uma API real, siga estes passos:

### 1. Criar arquivo `.env.local`

Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_API_URL=https://sua-api.com
```

### 2. Estrutura da API Esperada

A API deve implementar os seguintes endpoints:

#### GET `/api/get`
**Parâmetros:**
- `page` (string): Número da página
- `limit` (string): Limite de itens por página
- `category` (string): Categoria dos posts

**Resposta:**
```json
{
  "totalPages": 5,
  "results": [
    {
      "id": 1,
      "title": "Título do Post",
      "content": "Conteúdo do post...",
      "date": "2024-01-15T10:00:00Z",
      "category": "React",
      "meta_tag_title": "Meta Title",
      "meta_tag_description": "Meta Description",
      "post_image": "https://exemplo.com/imagem.jpg",
      "post_background": "https://exemplo.com/background.jpg",
      "author": "Autor",
      "keywords": "palavras, chave"
    }
  ],
  "next": { "page": 2, "limit": 8 },
  "previous": null
}
```

#### GET `/api/search`
**Parâmetros:**
- `query` (string): Termo de busca
- `page` (string): Número da página
- `limit` (string): Limite de itens por página

**Resposta:** Mesma estrutura do `/api/get`

#### GET `/api/post/{slug}`
**Parâmetros:**
- `slug` (path): Slug do post

**Resposta:**
```json
{
  "id": 1,
  "title": "Título do Post",
  "content": "Conteúdo completo do post...",
  "date": "2024-01-15T10:00:00Z",
  "category": "React",
  "meta_tag_title": "Meta Title",
  "meta_tag_description": "Meta Description",
  "post_image": "https://exemplo.com/imagem.jpg",
  "post_background": "https://exemplo.com/background.jpg",
  "author": "Autor",
  "keywords": "palavras, chave"
}
```

## 🔄 Como Funciona

### Dados Mockados (Padrão)
- Quando `NEXT_PUBLIC_API_URL` não está definido
- Usa `PostMemoryRepository` com dados de exemplo
- Ideal para desenvolvimento e testes

### API Real
- Quando `NEXT_PUBLIC_API_URL` está definido
- Usa `PostHttpRepository` para fazer requisições HTTP
- Conecta com sua API real

## 🧪 Testando

### Com Dados Mockados
```bash
npm run dev
# Acesse http://localhost:3000
```

### Com API Real
```bash
# Crie o arquivo .env.local com NEXT_PUBLIC_API_URL
npm run dev
# Acesse http://localhost:3000
```

## 📁 Estrutura da Clean Architecture

```
src/
├── domain/posts/           # Entidades e contratos
├── application/posts/      # Casos de uso
├── infrastructure/         # Implementações
│   ├── http/              # Repositório HTTP
│   └── memory/            # Repositório em memória
└── presentation/          # Hooks e componentes
```

## 🔧 Personalização

Para adicionar novos domínios (users, comments, etc.):

1. Crie a estrutura em `src/domain/{novo-dominio}/`
2. Implemente os casos de uso em `src/application/{novo-dominio}/`
3. Crie repositórios em `src/infrastructure/`
4. Adicione hooks em `src/presentation/hooks/`

## 🚨 Troubleshooting

### Erro 404 na API
- Verifique se a URL da API está correta
- Confirme se os endpoints estão implementados
- Use dados mockados para desenvolvimento

### Erro de Import
- Certifique-se de que todos os imports foram atualizados
- Reinicie o servidor de desenvolvimento

### Dados não aparecem
- Verifique se o repositório correto está sendo usado
- Confirme se os dados mockados estão sendo carregados
- Verifique os logs do console 