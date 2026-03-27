/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/go/linkedin',
        destination: '/?utm_source=linkedin&utm_medium=social&utm_campaign=personal_site',
        permanent: false,
      },
      {
        source: '/go/work',
        destination: '/work?utm_source=linkedin&utm_medium=social&utm_campaign=personal_site_work',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
