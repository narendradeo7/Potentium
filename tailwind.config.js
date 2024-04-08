/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    colors:{
primary1:'#000000',
primary2:'#111111',

secondary2:'#CCCCCC',
gray: {
  light:"#333333",
  500:'#B3B3B3',
  900:'#999999',
  cardbck:"#666666",
  llmcardbck:'#F2EEE8',
  llmcardbord:'#C8C8C8',
  llmcardtext:'#404040'

  
},
white:"#FFFFFF",



    },
    extend: {
      lineHeight: {
        
        '12': '65px',
      },
      borderRadius:{
        lg:'10px'
      },
      gap: {
        '15': '3.75rem',
        "30":"7.5rem",
        "50":'12.375rem'
      },
      spacing: {
        15: '60px',
        22:'87px',
        30:"120px",
        31:'123px',
        
      }
      
      
    },
  },
  plugins: [],
}

