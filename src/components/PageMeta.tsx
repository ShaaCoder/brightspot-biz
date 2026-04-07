import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = "https://bharatadvance.com";

const PageMeta = ({ title, description, canonical, ogImage = "/images/bmn-logo.jpeg", jsonLd }: PageMetaProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`);
    setMeta("property", "og:type", "website");
    if (canonical) setMeta("property", "og:url", canonical);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`);

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // JSON-LD (page-specific)
    const ldId = "page-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = ldId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    return () => {
      const s = document.getElementById(ldId);
      if (s) s.remove();
    };
  }, [title, description, canonical, ogImage, jsonLd]);

  return null;
};

export default PageMeta;
