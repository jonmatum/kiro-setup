# kiro-setup

[![npm version](https://img.shields.io/npm/v/kiro-setup)](https://www.npmjs.com/package/kiro-setup)
[![license](https://img.shields.io/npm/l/kiro-setup)](./LICENSE)

Scaffold [Kiro](https://kiro.dev) configuration boilerplate into any project. Sets up agents, MCP servers, steering docs, and skills in one command.

## Usage

Run directly with npx (no install needed):

```bash
npx kiro-setup
```

Or specify a target directory:

```bash
npx kiro-setup ./my-project
```

This creates a `.kiro/` directory with the following structure:

```
.kiro/
  agents/
    default.json          # Agent configuration
  settings/
    mcp.json              # MCP server definitions
  steering/
    conventions.md        # Project conventions (commits, PRs, code style)
    product-context.md    # Product context template
  skills/
    code-review.md        # Code review skill
    documentation.md      # Documentation skill
    testing.md            # Testing skill
```

Existing files are never overwritten. Run it again safely after adding new templates upstream.

## Install globally (optional)

```bash
npm install -g kiro-setup
kiro-setup
```

## What gets scaffolded

- **agents/** - Agent configuration defining available tools and MCP server bindings.
- **settings/** - MCP server definitions. Add your own servers here (GitHub, git, custom MCPs).
- **steering/** - Project conventions and product context that guide agent behavior.
- **skills/** - Reusable skill definitions for common tasks (code review, docs, testing).

## Customization

All generated files are meant to be edited. They are starting points, not locked configs. Modify them to match your project's needs, add new skills, configure MCP servers, or adjust conventions.

## Contributing

1. Fork the repository.
2. Create a feature branch from `main`.
3. Make your changes. If adding new templates, place them under `templates/`.
4. Commit using [Conventional Commits](https://www.conventionalcommits.org/) format.
5. Open a pull request.

Releases and changelog entries are managed automatically by [release-please](https://github.com/googleapis/release-please). Conventional commit messages drive version bumps and changelog generation.

See [CHANGELOG.md](./CHANGELOG.md) for the release history.

## Requirements

- Node.js >= 18

## License

[MIT](./LICENSE)
