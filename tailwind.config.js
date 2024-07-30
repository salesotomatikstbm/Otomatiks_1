/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1290px',
        lg: '1024px',
        md: "768px",
        sm: "640px"
      },
      padding: "5px"
    },
    extend: {
      spacing: {
        "2.5": "10px",
        "4.5": "18px",
        "7.5": "30px",
        "12.5": "50px",
        "15": "60px",
        "25": "100px"
      },
      backgroundImage: {
        'testimonial-banner': "url('./assets/images/testimonial/bg-img.png')",
        'newsletter-banner': "url('/assets/images/newsletter/bg-img.png')"
      },
      boxShadow: {
        "sm": "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
        "3xl": "0px 4.8px 24.4px -6px rgba(19, 16, 34, 0.10)",
        "4xl": "0px 4.4px 20px -1px rgba(19, 16, 34, 0.05)"
      },
      fontFamily: {
        "bubblegum-sans": "Bubblegum Sans",
        "jost": "Jost",
        "nunito": "Nunito"
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        warm: {
          DEFAULT: "var(--warm)",
          foreground: "",
        },
        green: {
          DEFAULT: "var(--green)",
          foreground: "var(--green-foreground)",
        },
        cream: {
          DEFAULT: "",
          foreground: "var(--cream-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "left-right": {
          "50%": {
            'transform': `translateX(14px)`
          }
        },
        "left-right-2": {
          "50%": {
            'transform': `translateX(-40px)`
          }
        },
        'up-down': {
          "50%": {
            'transform': 'translateY(-10px)'
          }
        },
        'skw': {
          "50%": {
            'transform': 'skewX(5deg)'
          }
        },
        'expend-width-height': {
          "100%": {
            'width': '56%',
            'height': '56%',
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'left-right': 'left-right 2s linear infinite',
        'left-right-2': 'left-right-2 4s linear infinite;',
        'up-down': 'up-down 2s linear infinite',
        'skw': 'skw 2s linear infinite',
        'expend-width-height': 'expend-width-height 2s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}