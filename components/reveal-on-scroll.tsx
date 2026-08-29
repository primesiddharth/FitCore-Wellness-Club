"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const revealElements = new Set<Element>();

    const reveal = (el: Element) => {
      el.setAttribute("data-visible", "true");
      revealElements.delete(el);
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    // Observe existing elements
    document.querySelectorAll(".reveal").forEach((el) => {
      revealElements.add(el);
      observer.observe(el);
    });

    // Watch for newly rendered .reveal elements
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;

          // The added element itself
          if (node.classList.contains("reveal")) {
            revealElements.add(node);
            observer.observe(node);
          }

          // Any .reveal elements inside it
          node.querySelectorAll?.(".reveal").forEach((el) => {
            revealElements.add(el);
            observer.observe(el);
          });
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
