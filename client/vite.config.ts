import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_API_KEY: "AIzaSyAWfhjOSwN4vRXHXK5z5l5HNMVNC7NcRbA",
      REACT_APP_AUTH_DOMAIN: "allinstock-bd53f.firebaseapp.com",
      REACT_APP_PROJECT_ID: "allinstock-bd53f",
      REACT_APP_STORAGE_BUCKET: "allinstock-bd53f.appspot.com",
      REACT_APP_MESSAGING_SENDER_ID: "563845967820",
      REACT_APP_APP_ID: "1:563845967820:web:211dde5ee092f46bc5f769",
      REACT_APP_DATABASE_URL:
        "https://allinstock-bd53f-default-rtdb.europe-west1.firebasedatabase.app",
    },
  },
});
