# Clean Architecture Implementation

Este projeto foi refatorado para seguir os princípios da Clean Architecture, proporcionando melhor separação de responsabilidades, testabilidade e manutenibilidade.

## Estrutura da Clean Architecture

```
src/
├── domain/           # Camada de domínio (entidades e contratos)
│   └── posts/        # Domínio de posts
│       ├── Post.ts
│       └── PostRepository.ts
├── application/      # Camada de aplicação (casos de uso)
│   └── posts/
│       └── use-cases/
│           ├── GetPostsUseCase.ts
│           └── SearchPostsUseCase.ts
├── infrastructure/   # Camada de infraestrutura (implementações concretas)
│   ├── http/
│   │   ├── HttpClient.ts
│   │   └── PostHttpRepository.ts
│   └── memory/
│       └── PostMemoryRepository.ts
└── presentation/     # Camada de apresentação (UI React)
    ├── pages/
    │   └── PostsPage.tsx
    ├── components/
    │   └── Post/
    └── hooks/
        └── usePosts.ts
```

## Camadas

### 1. Domain (Domínio)
- **Entidades**: Modelos do domínio (Post, User, etc.)
- **Repositórios**: Interfaces que definem contratos para acesso a dados
- **Regras de Negócio**: Lógica central da aplicação

### 2. Application (Aplicação)
- **Use Cases**: Casos de uso que implementam as regras de negócio
- **Orquestração**: Coordenação entre diferentes partes do sistema
- **Validações**: Validações de entrada e regras de aplicação

### 3. Infrastructure (Infraestrutura)
- **HTTP**: Implementações de acesso a APIs externas
- **Memory**: Implementações em memória para testes
- **Database**: Implementações de acesso a banco de dados
- **External Services**: Integrações com serviços externos

### 4. Presentation (Apresentação)
- **Pages**: Páginas do Next.js
- **Components**: Componentes React
- **Hooks**: Hooks customizados que usam casos de uso
- **Providers**: Context providers do React

## Benefícios da Clean Architecture

1. **Separação de Responsabilidades**: Cada camada tem uma responsabilidade específica
2. **Testabilidade**: Fácil de testar cada camada isoladamente
3. **Independência de Frameworks**: O domínio não depende de frameworks externos
4. **Independência de UI**: A lógica de negócio não depende da interface
5. **Independência de Banco de Dados**: Fácil trocar a fonte de dados
6. **Independência de Agentes Externos**: APIs externas não afetam o domínio
7. **Organização por Domínio**: Código organizado por conceitos de negócio

## Exemplo de Uso

### Hook Customizado
```typescript
import { usePosts } from '@/presentation/hooks/usePosts';

function MyComponent() {
  const { data, isLoading, error } = usePosts({
    page: '1',
    limit: '10',
    category: 'tech',
    useMock: false // true para usar dados em memória
  });

  // ...
}
```

### Página com Injeção de Dependências
```typescript
import { useMemo } from 'react';
import { HttpClient } from '@/infrastructure/http/HttpClient';
import { PostHttpRepository } from '@/infrastructure/http/PostHttpRepository';
import { GetPostsUseCase } from '@/application/posts/use-cases/GetPostsUseCase';

export default function PostsPage() {
  const repository = useMemo(() => 
    new PostHttpRepository(new HttpClient(process.env.NEXT_PUBLIC_API_URL)), 
    []
  );
  
  const getPostsUseCase = useMemo(() => 
    new GetPostsUseCase(repository), 
    [repository]
  );

  // ...
}
```

## Como as Camadas Conversam

- **Presentation** injeta implementações concretas nos use cases
- **Application** depende apenas dos contratos do domínio
- **Infrastructure** implementa os contratos com detalhes técnicos
- **Domain** contém contratos e modelos puros

## Migração

Para migrar o código existente:

1. **Identifique os domínios**: Quais são os conceitos principais? (posts, users, comments, etc.)
2. **Defina as entidades**: Quais são os modelos de cada domínio?
3. **Crie os contratos**: Defina interfaces para acesso a dados
4. **Implemente os repositórios**: Conecte com as fontes de dados reais
5. **Crie os casos de uso**: Implemente as regras de negócio
6. **Atualize os componentes**: Use hooks que encapsulam os casos de uso

## Próximos Passos

1. Migrar outros domínios (users, comments, etc.)
2. Adicionar testes unitários para cada camada
3. Implementar cache e otimizações
4. Adicionar validações no domínio
5. Implementar tratamento de erros centralizado
6. Adicionar documentação de API 