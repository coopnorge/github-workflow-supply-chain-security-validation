# Supply Chain Security Validation

The workflow executes supply chain security tools and reports the results.

## Usage

Run the workflow on pull requests, pushes to any branch and on a weekly
schedule on the default branch.

```yaml
---
name: Security
on:
  push: {}
  pull_request: {}
  schedule:
    - cron: '0 0 * * 1'
jobs:
  supply-chain-security-validation:
    name: Supply Chain
    uses: coopnorge/github-workflow-supply-chain-security-validation/.github/workflows/supply-chain-security-validation.yaml@main
```

### Maven 

If you add a secret called `MAVEN_SETTINGS_BASE64` and fill it with a base64
encoded maven `settings.xml` it will write the maven settings to
`~/.m2/settings.xml` 

### Parameters

#### `codeql-code-scanning-config-file`

[CodeQL configuration file](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-a-custom-configuration-file)
