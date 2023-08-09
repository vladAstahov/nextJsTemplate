const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        // prependData: `@import "@/app/globals.scss";`,
    }
}

module.exports = nextConfig

// module.exports = (phase, { defaultConfig }) => {
//     if ('sassOptions' in defaultConfig) {
//         defaultConfig['sassOptions'] = {
//             includePaths: ['./src'],
//             prependData: `@import "@/app/globals.scss";`,
//         }
//     }
//     return defaultConfig;
// }