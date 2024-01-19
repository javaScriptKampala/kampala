/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: "akamai",
		path: "",
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
				port: "",
				pathname: "/*.png",
			},
		],
	},
	output: "export",
}

module.exports = nextConfig
