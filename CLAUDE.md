# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for Birthdayy, a Discord bot for birthday celebrations. Built with **Astro** and styled using Bulma CSS framework with custom SCSS theming.

## Development Commands

```bash
# Start development server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Application Structure

- **Layout System**: All pages use the `BaseLayout.astro` component that provides:
  - SEO component with comprehensive meta tags and JSON-LD structured data
  - Navbar component (React-based)
  - Main content area (via `<slot />`)
  - Footer component

- **SEO Configuration**: Centralized SEO metadata in `src/utils/seoConfig.ts`:
  - Site-wide defaults (title, description, image, etc.)
  - Social media metadata (Twitter, Open Graph)
  - JSON-LD structured data for rich search results
  - Theme colors and locale settings
  - SEO component supports per-page overrides via props

- **Redirects**: Configured in `public/_redirects` for Netlify/similar hosts:
  - `/discord` → Discord server invite
  - `/invite` → Bot OAuth invite URL
  - `/docs`, `/status` → External subdomains
  - `/topgg/vote`, `/discord-botlist/vote`, etc. → Bot listing platforms

### Component Organization

Components follow Astro best practices with clear separation by purpose:

```
src/components/
├── layout/              # Structural & layout components
│   ├── BaseLayout.astro # Main layout wrapper
│   ├── SEO.astro        # SEO meta tags & structured data
│   ├── Footer.astro     # Site footer
│   ├── Navbar.jsx       # Main navigation (React)
│   ├── NavbarDropdown.jsx
│   └── NavbarItem.jsx
│
├── ui/                  # Reusable UI primitives
│   ├── Divider.astro    # Visual divider
│   ├── Icon.jsx         # Icon components (React)
│   ├── IconText.astro   # Icon + text combo
│   └── Link.astro       # Styled link component
│
├── home/                # Homepage-specific components
│   ├── HomePage.astro   # Main homepage composition
│   ├── Hero.astro       # Hero section with CTA
│   ├── CallToAction.astro
│   ├── FeatureList.astro
│   ├── Feature.astro
│   ├── FeatureTags.astro
│   └── FeatureTag.jsx
│
└── vote/                # Vote page components
    ├── VotePage.astro   # Vote page composition
    └── VoteItem.astro   # Individual vote site card
```

**Component Guidelines:**
- Astro components use inline `<style lang="scss">` tags for scoped styles
- React components (`.jsx`) use CSS modules (e.g., `navbar.module.scss`)
- All component names use PascalCase
- No nested component folders (flat structure within categories)
- Components are grouped by purpose (layout, ui, features)

### Styling Architecture

The project uses a hybrid styling approach:

1. **Global Styles** (`src/styles/globals.scss`):
   - Bulma initial variables
   - Custom theme overrides (`styles/theme/theme.scss`)
   - Bulma framework
   - Creative Bulma extensions (bulma-divider)

2. **Theme Structure** (`src/styles/theme/`):
   - `_colors.scss` - Color variables
   - `_fonts.scss` - Font definitions (Rubik, Montserrat)
   - `theme.scss` - Imports colors/fonts and defines custom classes

3. **Component Styles**:
   - **Astro components**: Use inline `<style lang="scss">` tags (automatically scoped)
   - **React components**: Use CSS modules (e.g., `navbar.module.scss`)
   - Component styles are colocated with components for better maintainability

4. **Custom Classes**:
   - `.is-logo` - Header font styling
   - `.is-heading-1/2/3` - Custom heading sizes
   - `.is-secondary` - Secondary color variant
   - `ruby::before` - Highlight effect background

### Data Management

- **Data Files**:
  - `src/data/voteSites.js` - Static array of bot voting platforms
  - `src/utils/seoConfig.ts` - SEO metadata configuration

- **Static Site**: No database or API integration - all content is static

### SEO Implementation

The SEO system provides comprehensive search engine optimization:

**Features:**
- Canonical URLs (auto-generated from current page)
- Complete Open Graph tags (with image dimensions, alt text, locale)
- Twitter Card metadata
- JSON-LD structured data (Organization schema)
- Per-page customization via props
- Responsive social media images (1200x630)

**SEO Component Props:**
```typescript
{
  title?: string;          // Page title (defaults to site name)
  description?: string;    // Page description
  image?: string;          // Social share image URL
  imageAlt?: string;       // Image alt text
  type?: string;           // OG type (website, article, etc.)
  noindex?: boolean;       // Prevent indexing
  nofollow?: boolean;      // Prevent following links
  canonical?: string;      // Custom canonical URL
  article?: {              // For blog posts/articles
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
}
```

### Pages Structure

```
src/pages/
├── index.astro       # Homepage (uses HomePage component)
├── vote.astro        # Vote page (uses VotePage component)
├── 404.astro         # Error page
└── disclosure.astro  # Legal disclosure
```

## Key Implementation Notes

### Component Development
- Astro components automatically scope styles in `<style>` tags
- Use `client:load` directive for interactive React components
- Prefer Astro components over React when interactivity isn't needed

### Styling Best Practices
- Component-specific styles → inline `<style>` tags
- Global styles → `src/styles/globals.scss`
- Theme customization → `src/styles/theme/`
- React components → CSS modules

### SEO Best Practices
- All pages inherit from `seoConfig` defaults
- Override defaults via BaseLayout props
- Canonical URLs prevent duplicate content issues
- JSON-LD structured data enhances search results

### Performance Considerations
- Images use lazy loading where appropriate
- Bulma CSS is imported globally (needed across all pages)
- React components only hydrate where needed (client:load)
- Static site generation for optimal performance

### Responsive Design
- Bulma's responsive classes used throughout
- Mobile-first approach
- Breakpoints:
  - Mobile: 0-900px
  - Tablet/Desktop: 901-2000px
  - Large Desktop: 2001px+

## Migration Notes

This project was migrated from Next.js to Astro for:
- Better static site performance
- Simpler architecture
- Built-in component scoping
- Improved developer experience

Key differences from Next.js:
- No `_app.js` → Use `BaseLayout.astro`
- No API routes (wasn't using them)
- Component imports explicit (no automatic imports)
- Styling via `<style>` tags instead of CSS modules (for Astro components)
