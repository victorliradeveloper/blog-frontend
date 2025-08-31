module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nova funcionalidade 
        'fix',      // Correção de bug 
        'docs',     // Documentação 
        'style',    // Formatação, ponto e vírgula, etc; sem mudança de código
        'refactor', // Refatoração de código 
        'perf',     // Melhoria de performance
        'test',     // Adicionando testes
        'chore',    // Atualização de tarefas que não afetam o código
        'ci',       // Mudanças em arquivos de CI
        'build',    // Mudanças que afetam o sistema de build
        'revert',   // Reverte um commit anterior
        'wip',      // Work in progress
      ],
    ],
    'type-case': [2, 'always', 'lowerCase'], 
    'type-empty': [2, 'never'], 
    'subject-case': [2, 'always', 'lowerCase'], 
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'], 
    'header-max-length': [2, 'always', 72], 
    'body-leading-blank': [2, 'always'], 
    'footer-leading-blank': [2, 'always'], 
  },
}; 