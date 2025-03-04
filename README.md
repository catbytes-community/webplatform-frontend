# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Working with APIs

The following are the steps to work with APIs:

- users must first sign in with Firebase, which will return a firebase token
- this firebase token should be provided as header in `/users/login` api
- if firebase token is successfully verified at the backend, it will return a cookie with userUID
- for this cookie to be set in the browser, the API should be called `withCredentials: true` axios header
- after cookie is set, all other APIs should be ok to call and will follow normal flow of backend middleware (authentication, verifyRole etc.)

## Deployment

This app is deployed to the AWS EC2 instance.
There is no CI/CD implemented yet for this project, so the deployment will have to be manual.

In order to deploy updated app to EC2, follow the below steps:

- first make sure that updated code builds without errors `npm run build`
- make sure you have the .pem key to connect to EC2
- ssh into EC2 `ssh -i catbytes-frontend-dev-key-pair.pem ec2-user@35.178.140.33`
- redirect to the app directory `cd /home/ec2-user/webplatform-frontend`
- pull updated code `git pull origin develop`
- install updated dependencies if necessary `npm install`
- build the dist folder `npm run build`
- restart nginx `sudo systemctl restart nginx`
- visit `https://dev.catbytes.io` (for dev) to test that updated app is working fine
