import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 
                    "Roboto",
                    "Arial",
                    "sans-serif", 
                     ...defaultTheme.fontFamily.sans],
                mono: [
                    "Cascadia Code",
                    "Consolas",
                    "Courier New",
                    "monospace",
                ],
            },
        }
    },
    plugins: [require("@tailwindcss/typography")],
}
