# Arroyo Erp Models

This is a module of models for Arroyo ERP.

## Configuration

Create file .npmrc in root directory of the project:

```
registry=https://npm.pkg.github.com/soker90
```

## Installation

```bash
  npm install @soker90/arroyo-erp-models --save
```

## Available models

```javascript
  import models from 'arroyo-erp-models';

  models.mongoose // Expose a mongoose instance to connect
  models.connect() // Expose a method to connect to mongoose and response with the connection

  models.AccountModel // Expose a Account model with its statics & methods
```

