# Supply Chain Security Validation

The workflow executes supply chain security tools and reports the results.

## Usage

Run the workflow on pull requests, pushes to any branch and on a nightly
schedule on the default branch.

```yaml
---
name: Security Scan
on:
  push: {}
  pull_request: {}
  schedule:
    - cron: '0 0 * * *'
jobs:
  supply-chain-security-validation:
    name: Supply Chain Security Validation
    uses: coopnorge/github-workflow-supply-chain-security-validation/.github/workflows/supply-chain-security-validation.yaml@main
```