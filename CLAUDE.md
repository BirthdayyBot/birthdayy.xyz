# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for Birthdayy, a Discord bot for birthday celebrations. Built with Next.js 12.3.7 and styled using Bulma CSS framework with custom SCSS theming.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linter
npm run lint
```

## Architecture

### Application Structure

- **Layout System**: All pages are wrapped in a consistent layout (components/_layout.js) that includes:
  - SEO component with meta tags
  - Navbar component
  - Main content area
  - Footer component

- **Environment-based Settings**: The app uses environment-specific configuration via the settings/ directory:
  - `settings/index.js` exports the appropriate settings object based on `NODE_ENV`
  - `settings-development.js` and `settings-production.js` contain environment-specific metadata
  - Settings are imported and used in components like SEO.js for meta tags

- **Routing & Redirects**: next.config.js contains extensive redirect rules for short URLs:
  - `/discord` → Discord server invite
  - `/invite` → Bot OAuth invite URL
  - `/docs`, `/status` → External subdomains
  - `/topgg/vote`, `/discord-botlist/vote`, etc. → Various bot listing platforms
  - All redirects are permanent (301)

### Component Organization

Components are organized by feature/domain:

- **Generic**: Reusable UI primitives (Divider, Icon, IconText, Link)
- **Homepage**: Landing page components (Title, CallToAction, Feature system with Tags)
- **Navbar**: Navigation components (Navbar, NavbarItem, NavbarDropdown)
- **Footer**: Footer component
- **Vote**: Vote page components (VoteElement)
- **SEO**: Meta tag management with social sharing tags (Twitter, OpenGraph)

### Styling Architecture

The project uses a custom Bulma theme system:

1. **Import Order** (styles/globals.scss):
   - Bulma initial variables
   - Custom theme overrides (styles/theme/theme.scss)
   - Bulma framework
   - Creative Bulma extensions (bulma-divider)

2. **Theme Structure** (styles/theme/):
   - `_colors.scss` - Color variables
   - `_fonts.scss` - Font definitions
   - `theme.scss` - Imports colors/fonts and defines custom classes

3. **Custom Classes**:
   - `.is-logo` - Header font styling
   - `.is-heading-1/2/3` - Custom heading sizes
   - `.is-secondary` - Secondary color variant
   - `ruby::before` - Highlight effect background

4. **Module SCSS**: Component-specific styles use CSS Modules (e.g., Index.module.scss, navbar.module.scss)

### Data Management

- **db/voteSites.js**: Static data array of bot voting platforms with id, name, URL, and icon paths
- No database or API integration - this is a static marketing site

### Image Configuration

next.config.js allows images from `bulma.io` domain via Next.js Image component.

## Key Implementation Notes

- All pages use the shared Layout wrapper via _app.js
- SEO component handles both itemProp and name meta tag formats for broader compatibility
- The min-height class in globals.scss is responsive based on viewport height
- Navbar items use large font size (1.2rem) per theme
- Selection highlighting uses the primary theme color
- Mobile viewports hide scrollbars via custom CSS