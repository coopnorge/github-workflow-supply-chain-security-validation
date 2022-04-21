# Supply Chain Security Validation

The workflow executes supply chain security tools and reports the results.

## Usage

### Pull Request Workflow

```yaml
---
name: Pull Request CI
on:
  push: {}
  pull_request: {}
  build:
    runs-on: ubuntu-latest
    needs:
      - validate
      - supply-chain-security-validation
    steps:
      - run: "echo SUCCESS"
  supply-chain-security-validation:
    name: Supply Chain Security Validation
    uses: coopnorge/github-workflow-supply-chain-security-validation/.github/workflows/supply-chain-security-validation.yaml@main
  validate:
    name: Validate
    runs-on: ubuntu-latest
    steps:
      - ...
      - ...
      - ...
```

### Scheduled Workflow

```yaml
---
name: Security Scan
on:
  schedule:
    - cron: '0 0 * * *'
jobs:
  supply-chain-security-validation:
    name: Supply Chain Security Validation
    uses: coopnorge/github-workflow-supply-chain-security-validation/.github/workflows/supply-chain-security-validation.yaml@main
```