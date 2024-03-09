import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:5000' // now if any request is made to '/api' then this proxy will get added to the back of the url where the request has been made i.e localhost:5000 will be added before the /api
    }, // ab iss proxy lagane ka faayda kya hai?
    //now whenever the frontend make a call at /api/jokes the call recieved at the server is percieved to be as http://localhost:5000/api/jokes
    //ab server ko lagta hai ki yeh req apne domain se hi aayi hai hence it doesn't give a cors error and this method can also be used to deploy applications safetly on the netlify or vercel deployers 
  },
  plugins: [react()],
})
