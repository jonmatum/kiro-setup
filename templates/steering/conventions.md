# Project Conventions

## Commit Messages

All commits MUST follow the Conventional Commits specification (https://www.conventionalcommits.org/).

Format: `<type>(<optional scope>): <description>`

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

- Subject line must be lowercase, imperative mood, no period at the end.
- Body and footer are optional but follow the same spec when used.
- Breaking changes must include `BREAKING CHANGE:` in the footer or `!` after the type/scope.

## Pull Requests

All PR titles MUST follow the same Conventional Commits format as commit messages.

## Code Style

- Follow the project's existing linter and formatter configuration.
- Write clear, descriptive variable and function names.
- Add comments only when the intent is not obvious from the code itself.
