import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd() + '/../')};


  return defineConfig({
    plugins: [svgr(), react()],
    envDir: "../",
    server:{
      host: process.env.VITE_ENDPOINT
    }
  })
}