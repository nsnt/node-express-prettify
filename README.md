A Node.js / Express sample app for Cloud Foundry
================================================

USAGE
-----

### Deployment

```
git clone ......
cd node-express-prettify
git submodule sync --recursive; git submodule update --init --recursive
cf push APP_NAME
```

### Endpoints

- `/`  
Welcome message.
- `/env`  
Shows environment variables.
- `/jsonprettify`  
Prettifies a JSON expression given.
- `/sqlprettify`  
Prettifies a SQL expression given.
