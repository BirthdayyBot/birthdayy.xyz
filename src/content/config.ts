/**
 * Content Collections configuration
 * Defines schemas for all content types using Zod
 */

import { defineCollection, z } from 'astro:content';

// Hero section configuration
const configCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.object({
      prefix: z.string(),
      highlight: z.string(),
      suffix: z.string(),
    }),
    tagline: z.string(),
    logo: z.object({
      src: z.string(),
      alt: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    cta: z.object({
      primary: z.object({
        text: z.string(),
        url: z.string(),
        external: z.boolean(),
      }),
      secondary: z.object({
        text: z.string(),
        url: z.string(),
        external: z.boolean(),
      }).optional(),
    }),
  }),
});

// Features collection
const featuresCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageName: z.string(),
    points: z.array(z.string()),
    imagePosition: z.enum(['left', 'right']),
  }),
});

// Feature tags collection
const featureTagsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    category: z.enum(['birthday', 'config']),
  }),
});

// Vote sites collection
const voteSitesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    url: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  config: configCollection,
  features: featuresCollection,
  featureTags: featureTagsCollection,
  voteSites: voteSitesCollection,
};
