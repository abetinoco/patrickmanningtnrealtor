import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  canonical?: string
  openGraph?: {
    type?: string
    image?: string
  }
  schema?: Record<string, unknown>
}

const setMetaTag = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const setPropertyMeta = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export const Seo = ({ title, description, canonical, openGraph, schema }: SeoProps) => {
  useEffect(() => {
    document.title = title
    setMetaTag('description', description)
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    setPropertyMeta('og:title', title)
    setPropertyMeta('og:description', description)
    setPropertyMeta('og:type', openGraph?.type ?? 'website')
    if (openGraph?.image) {
      setPropertyMeta('og:image', openGraph.image)
      setMetaTag('twitter:image', openGraph.image)
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }

    if (schema) {
      let script = document.querySelector('script[data-schema="primary"]') as HTMLScriptElement | null
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-schema', 'primary')
        document.head.appendChild(script)
      }
      script.text = JSON.stringify(schema)
    }
  }, [title, description, canonical, openGraph?.type, openGraph?.image, schema])

  return null
}
