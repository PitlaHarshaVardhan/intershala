# PopX React Project

## Setup & Run

1. **Install dependencies**
   ```bash
   npx create-react-app popx-app
   cd popx-app
   # copy the contents of `src/` from this example into the project
   npm install react-router-dom@6
   ```

2. **Start**
   ```bash
   npm start
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## Deployment

- **Vercel:** Connect your GitHub repo, specify build command `npm run build` and output directory `build`.
- **Netlify:** Drag and drop the `build` folder or use CLI: `netlify deploy --prod --dir=build`.

## Folder Structure
```
src/
  components/
    Button.js
    InputField.js
    ProtectedRoute.js
  pages/
    Welcome.js
    Login.js
    Register.js
    AccountSettings.js
  styles/
    global.css
  App.js
  index.js
```

## Notes
- Data is stored in `localStorage` under `popxUser`.
- Login checks credentials against stored user.
- `ProtectedRoute` redirects unauthenticated users to login.
- Simple validations are included in register and login forms.
