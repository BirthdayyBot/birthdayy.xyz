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

  // Features use CSS animations for better reliability on page load

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
  // Feature images with 3D tilt effect
  const featureImages = document.querySelectorAll('.showcase_image');
  featureImages.forEach((img) => {
    img.addEventListener('mouseenter', () => {
      animate(
        img as HTMLElement,
        {
          scale: 1.05,
          transform: 'perspective(1000px) rotateY(5deg) rotateX(-2deg)',
        },
        { duration: 0.4, easing: [0.22, 1, 0.36, 1] }
      );
    });
    img.addEventListener('mouseleave', () => {
      animate(
        img as HTMLElement,
        {
          scale: 1,
          transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
        },
        { duration: 0.4, easing: [0.22, 1, 0.36, 1] }
      );
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
