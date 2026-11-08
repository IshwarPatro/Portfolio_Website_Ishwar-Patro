/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    serverExternalPackages: [
        '@react-email/render',
    ],
}

module.exports = nextConfig

