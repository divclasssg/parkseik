/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    sassOptions: {
        implementation: "sass-embedded",
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-e26b73e054cf43faa65ef7ee77476e58.r2.dev",
                pathname: "/**",
                search: "",
            },
        ],
    },
};

export default nextConfig;
