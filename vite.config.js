import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  
  plugins: [vue()],
  publicPath: process.env.NODE_ENV === "production" ? "HomePage" : "/",
  // build:{
  //   outDir:'../backend/public',
  //   emptyOutDir:true

  // }
})


