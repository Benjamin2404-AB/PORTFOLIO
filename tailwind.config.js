/** @type {import('tailwindcss').Config} */

export default{
   content: ["./src/**/*.{js,ts,jsx,tsx,html}",
    
        "./src/components/**/*.{js,ts,jsx,tsx,html}",
      
      ],
     theme: {
    extend: {
      fontFamily: {
        tomorrow: ["Tomorrow", 'sans-serif'],
      },
      
    },
  },
    plugins: [],

}

