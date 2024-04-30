import path from "path";
import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    //Specifies that the output of the build will be a library.
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.resolve("src", "lib/index.js"),
      name: "Neskatila",
      //A function that generates the output file
      //name for different formats during the build
      fileName: 'index'
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    //Clears the output directory before building.
    emptyOutDir: true,
  },
  plugins: [react()],

})