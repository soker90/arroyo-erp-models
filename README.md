# Arroyo Erp Models

This is a module of models for Arroyo ERP.

## Installation

```bash
  npm i -S arroyo-erp-models # dev
```

## Available models

```javascript
  import models from 'arroyo-erp-models';

  models.mongoose // Expose a mongoose instance to connect
  models.connect() // Expose a method to connect to mongoose and response with the connection

  models.AccountModel // Expose a Account model with its statics & methods
```

