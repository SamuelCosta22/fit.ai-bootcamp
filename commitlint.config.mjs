/**
 * Aqui eu coloquei esse "config-conventional", que basicamente valida o formato:
 *
 * Tipo!(Escopo?): Descrição!
 * Tipos aceitos: feat, fix, refactor, chore, docs, test, style, perf, ci, build, revert
 * Ex: feat(auth): adicionar autenticação
 *
 * @see https://commitlint.js.org/guides/getting-started.html
 *
 * Para uma UI interativa, optei por usar o cz-git.
 * @see https://cz-git.qbb.sh
 */

export default {
  extends: ["@commitlint/config-conventional"],
  prompt: {
    useEmoji: true,
    messages: {
      type: "Selecione o tipo de mudança:",
      scope: "Selecione o escopo (opcional):",
      subject: "Escreva uma descrição curta:\n",
      body: 'Descrição detalhada (opcional). Use "|" para nova linha:\n',
      breaking: "Lista de breaking changes (opcional):\n",
      confirmCommit: "Confirma o commit acima?",
    },
    types: [
      { value: "feat", name: "feat:     ✨ Nova funcionalidade", emoji: "✨" },
      { value: "fix", name: "fix:      🐛 Correção de bug", emoji: "🐛" },
      {
        value: "refactor",
        name: "refactor: ♻️  Refatoração de código",
        emoji: "♻️",
      },
      {
        value: "chore",
        name: "chore:    🔧 Tarefas de manutenção",
        emoji: "🔧",
      },
      { value: "docs", name: "docs:     📝 Apenas documentação", emoji: "📝" },
      {
        value: "test",
        name: "test:     ✅ Adição/correção de testes",
        emoji: "✅",
      },
      {
        value: "style",
        name: "style:    💄 Formatação de código",
        emoji: "💄",
      },
      {
        value: "perf",
        name: "perf:     ⚡ Melhoria de performance",
        emoji: "⚡",
      },
      { value: "ci", name: "ci:       🎡 Mudanças de CI/CD", emoji: "🎡" },
      {
        value: "build",
        name: "build:    📦 Build ou dependências",
        emoji: "📦",
      },
      {
        value: "revert",
        name: "revert:   ⏪ Reverter commit anterior",
        emoji: "⏪",
      },
    ],
    scopes: ["auth", "user", "database", "config", "docs"],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    emptyScopesAlias: "❌ vazio (sem escopo)",
    customScopesAlias: "✏️  custom (digitar manualmente)",
  },
};
