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
    const text = target.querySelector('.feature-text');
    const image = target.querySelector('.feature-image-column');
    const points = target.querySelectorAll('.feature-point');

    // Determine animation direction based on order
    const isTextFirst = text?.classList.contains('order-1');
    const textDirection = isTextFirst ? -40 : 40;
    const imageDirection = isTextFirst ? 40 : -40;

    // Animate text column
    if (text) {
      animate(
        text,
        {
          opacity: [0, 1],
          transform: [`translateX(${textDirection}px)`, 'translateX(0)'],
        },
        { duration: 0.8, easing: [0.22, 1, 0.36, 1] }
      );
    }

    // Animate image column with rotation effect
    if (image) {
      animate(
        image,
        {
          opacity: [0, 1],
          transform: [
            `translateX(${imageDirection}px) rotateY(${imageDirection > 0 ? '15deg' : '-15deg'})`,
            'translateX(0) rotateY(0deg)'
          ],
        },
        { duration: 1, delay: 0.2, easing: [0.22, 1, 0.36, 1] }
      );
    }

    // Staggered animation for feature points
    if (points.length > 0) {
      animate(
        points,
        {
          opacity: [0, 1],
          transform: ['translateY(20px)', 'translateY(0)'],
        },
        {
          duration: 0.5,
          delay: stagger(0.1, { start: 0.4 }),
          easing: 'ease-out'
        }
      );
    }
  }, { amount: 0.2 });

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
