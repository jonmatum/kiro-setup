# kiro-setup

Scaffold Kiro configuration boilerplate into any project. Sets up agents, MCP servers, steering docs, and skills in one command.

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

## Requirements

- Node.js >= 18

## License

MIT
