import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const env = dotenv.config();
dotenvExpand.expand(env);

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': env.parsed, // Permite acessar variáveis de ambiente
  },

})

