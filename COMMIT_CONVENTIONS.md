# Convenções de Commit

Este projeto utiliza o [Conventional Commits](https://www.conventionalcommits.org/) para padronizar as mensagens de commit.

## Tipos de Commit

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação, ponto e vírgula, etc; sem mudança de código
- **refactor**: Refatoração de código
- **perf**: Melhoria de performance
- **test**: Adicionando testes
- **chore**: Atualização de tarefas que não afetam o código
- **ci**: Mudanças em arquivos de CI
- **build**: Mudanças que afetam o sistema de build
- **revert**: Reverte um commit anterior
- **wip**: Work in progress

## Formato

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Exemplos

### Commit simples

```
feat: adiciona funcionalidade de login
fix: corrige erro de validação no formulário
docs: atualiza README com instruções de instalação
```

### Commit com escopo

```
feat(auth): adiciona autenticação com Google
fix(api): corrige endpoint de envio de email
refactor(components): reorganiza estrutura de componentes
```

### Commit com corpo

```
feat: adiciona sistema de notificações

- Implementa notificações push
- Adiciona configurações de preferência
- Cria componente de toast

Closes #123
```

## Como usar

### 1. Usando commitizen (Recomendado)

```bash
npm run commit
```

Isso abrirá um assistente interativo para criar commits padronizados.

### 2. Commit manual

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

### 3. Verificar commits

```bash
npm run commit:check
```

## Hooks do Husky

O projeto está configurado com hooks do Husky que:

1. **pre-commit**: Executa lint-staged (ESLint + Prettier + Testes)
2. **commit-msg**: Valida o formato da mensagem de commit

## Lint-staged

Antes de cada commit, o lint-staged executa:

- ESLint com auto-fix nos arquivos modificados
- Testes relacionados aos arquivos modificados
- Prettier para formatação

## Dicas

1. Use commits atômicos (uma mudança por commit)
2. Seja descritivo na mensagem
3. Use o escopo quando apropriado
4. Inclua o número da issue quando relevante
5. Teste antes de commitar
