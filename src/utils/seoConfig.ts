/**
 * Defines the default SEO configuration for the website.
 * This centralizes all SEO-related metadata for consistent usage across the site.
 */
export const seoConfig = {
	// Site Information
	siteName: 'Birthdayy Discord Bot',
	baseURL: 'https://birthdayy.xyz',
	description: 'Your easy-to-use, aesthetic and customizable Birthday Bot for any Discord Server',

	// Content Metadata
	type: 'website',
	locale: 'en_US',
	author: 'Chillihero, Nikolai Schunk',
	keywords: [
		'Birthday Bot',
		'Discord',
		'Birthdayy',
		'Discord Bot',
		'easy',
		'simple',
		'configurable',
		'beautiful'
	],

	// Robots & Rating
	robots: {
		index: true,
		follow: true,
		googleBot: 'index, follow',
		rating: 'safe for kids'
	},

	// Visual & Branding
	themeColor: '#78c2ad',
	image: {
		url: 'https://birthdayy.xyz/media/images/birthdayy-banner.png',
		alt: 'Birthdayy Discord Bot Banner',
		width: 1_200,
		height: 630,
		type: 'image/png'
	},

	// Social Media
	twitter: {
		card: 'summary_large_image' as const,
		site: '@BirthdayyBot',
		creator: '@BirthdayyBot'
	},

	// PWA & Icons
	manifest: '/manifest.json',

	// Structured Data (JSON-LD)
	organization: {
		name: 'Birthdayy',
		url: 'https://birthdayy.xyz',
		logo: 'https://birthdayy.xyz/media/images/birthdayy-banner.png'
	}
} as const;