/**
 * Motion utilities using Motion One
 * Lightweight animations and scroll-triggered effects
 */

import { animate, inView, stagger } from 'motion';

/**
 * Animate elements when they come into view
 */
export function animateOnScroll() {
  // Feature tags animations
  inView('.tags', ({ target }) => {
    const tags = target.querySelectorAll('.feature-tag');
    animate(
      tags,
      { opacity: [0, 1], transform: ['scale(0.8)', 'scale(1)'] },
      { duration: 0.5, delay: stagger(0.05), easing: 'ease-out' }
    );
  });

  // Individual feature animations
  inView('.feature', ({ target }) => {
    const text = target.querySelector('.column:has(.is-title)');
    const image = target.querySelector('.column:has(img)');

    if (text) {
      animate(
        text,
        { opacity: [0, 1], transform: ['translateX(-30px)', 'translateX(0)'] },
        { duration: 0.8, easing: [0.22, 1, 0.36, 1] }
      );
    }

    if (image) {
      animate(
        image,
        { opacity: [0, 1], transform: ['translateX(30px)', 'translateX(0)'] },
        { duration: 0.8, delay: 0.1, easing: [0.22, 1, 0.36, 1] }
      );
    }
  }, { amount: 0.3 });

  // Vote items animation
  inView('.vote_element', ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0)'] },
      { duration: 0.6, easing: 'ease-out' }
    );
  }, { amount: 0.5 });
}

/**
 * Add hover animations to elements
 */
export function addHoverAnimations() {
  // Feature images
  const featureImages = document.querySelectorAll('.showcase_image');
  featureImages.forEach((img) => {
    img.addEventListener('mouseenter', () => {
      animate(img as HTMLElement, { scale: 1.05 }, { duration: 0.3 });
    });
    img.addEventListener('mouseleave', () => {
      animate(img as HTMLElement, { scale: 1 }, { duration: 0.3 });
    });
  });

  // CTA buttons
  const buttons = document.querySelectorAll('.cta-button');
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      animate(
        btn as HTMLElement,
        { transform: 'translateY(-4px)', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' },
        { duration: 0.2 }
      );
    });
    btn.addEventListener('mouseleave', () => {
      animate(
        btn as HTMLElement,
        { transform: 'translateY(0)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
        { duration: 0.2 }
      );
    });
  });
}

/**
 * Initialize all motion effects
 */
export function initMotion() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      animateOnScroll();
      addHoverAnimations();
    });
  } else {
    animateOnScroll();
    addHoverAnimations();
  }
}
