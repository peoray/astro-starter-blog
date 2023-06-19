import { SITE_TITLE, SITE_URL, AUTHOR } from '../consts'


export default function jsonLDGenerator({ type, post, url }: any) {
  if (type === 'post') {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.cover_image}",
        "author": {
          "@type": "Person",
          "name": "${AUTHOR}",
          "url": "${SITE_URL}/"
        },
        "datePublished": "${post.pubDate}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${SITE_TITLE}",
      "url": "${import.meta.env.SITE}"
      }
    </script>`;
}