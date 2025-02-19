export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: 'AdsBot-Google',
          crawlDelay: 1,
        },
       
      ],
      sitemap: 'https://www.per.com.pk/sitemap.xml',
    }
  }