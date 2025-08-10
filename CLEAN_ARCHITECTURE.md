# Clean Architecture Implementation

Este projeto foi refatorado para seguir os princípios da Clean Architecture, proporcionando melhor separação de responsabilidades, testabilidade e manutenibilidade.

## Estrutura da Clean Architecture

```
src/
├── domain/           # Camada de domínio (regras de negócio)
│   ├── entities/     # Entidades do domínio
│   ├── usecases/     # Casos de uso
│   ├── repositories/ # Interfaces dos repositórios
│   └── value-objects/ # Objetos de valor
├── data/             # Camada de dados
│   ├── repositories/ # Implementações dos repositórios
│   ├── datasources/  # Fontes de dados (API, local storage, etc.)
│   └── mappers/      # Mapeadores entre camadas
├── presentation/     # Camada de apresentação
│   ├── pages/        # Páginas do Next.js
│   ├── components/   # Componentes React
│   ├── hooks/        # Hooks customizados
│   └── providers/    # Providers de contexto
└── shared/           # Código compartilhado
    ├── constants/    # Constantes
    ├── utils/        # Utilitários
    ├── types/        # Tipos compartilhados
    └── di/           # Injeção de dependências
```

## Camadas

### 1. Domain (Domínio)
- **Entities**: Entidades do domínio (Post, User, etc.)
- **Use Cases**: Casos de uso que implementam as regras de negócio
- **Repositories**: Interfaces que definem contratos para acesso a dados
- **Value Objects**: Objetos imutáveis que representam conceitos do domínio

### 2. Data (Dados)
- **Data Sources**: Implementações concretas de acesso a dados (API, banco, etc.)
- **Repositories**: Implementações das interfaces do domínio
- **Mappers**: Conversores entre dados externos e entidades do domínio

### 3. Presentation (Apresentação)
- **Pages**: Páginas do Next.js
- **Components**: Componentes React
- **Hooks**: Hooks customizados que usam casos de uso
- **Providers**: Context providers do React

### 4. Shared (Compartilhado)
- **Constants**: Constantes da aplicação
- **Utils**: Funções utilitárias
- **Types**: Tipos TypeScript compartilhados
- **DI**: Container de injeção de dependências

## Benefícios da Clean Architecture

1. **Separação de Responsabilidades**: Cada camada tem uma responsabilidade específica
2. **Testabilidade**: Fácil de testar cada camada isoladamente
3. **Independência de Frameworks**: O domínio não depende de frameworks externos
4. **Independência de UI**: A lógica de negócio não depende da interface
5. **Independência de Banco de Dados**: Fácil trocar a fonte de dados
6. **Independência de Agentes Externos**: APIs externas não afetam o domínio

## Exemplo de Uso

### Hook Customizado
```typescript
import { usePosts } from '@/presentation/hooks/usePosts';

function MyComponent() {
  const { data, isLoading, error } = usePosts({
    page: '1',
    limit: '10',
    category: 'tech'
  });

  // ...
}
```

### Caso de Uso Direto
```typescript
import { container } from '@/shared/di/container';

const getPostsUseCase = container.get<GetPostsUseCase>('GetPostsUseCase');
const posts = await getPostsUseCase.execute('1', '10', 'tech');
```

## Migração

Para migrar o código existente:

1. **Identifique as entidades**: Quais são os conceitos principais do domínio?
2. **Defina os casos de uso**: Quais são as ações que o usuário pode fazer?
3. **Crie as interfaces**: Defina contratos para acesso a dados
4. **Implemente os repositórios**: Conecte com as fontes de dados reais
5. **Atualize os componentes**: Use hooks que encapsulam os casos de uso

## Próximos Passos

1. Migrar outros serviços para a nova estrutura
2. Adicionar testes unitários para cada camada
3. Implementar cache e otimizações
4. Adicionar validações no domínio
5. Implementar tratamento de erros centralizado 