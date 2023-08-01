let withBundleAnalyzer;

try {
	// Try to load the bundle analyzer if it's available
	withBundleAnalyzer = require('@next/bundle-analyzer')({
		enabled: process.env.ANALYZE === 'true',
	});
} catch (error) {
	console.warn('Bundle analyzer not available, continuing without it');
	withBundleAnalyzer = (config) => config;
}

module.exports = withBundleAnalyzer({
	eslint: {
		dirs: ['.'],
	},
	poweredByHeader: false,
	trailingSlash: true,
	basePath: '',
	reactStrictMode: true,
});
