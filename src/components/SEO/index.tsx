import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  author?: string;
  keywords?: string[];
  noindex?: boolean;
}

const defaultSEO = {
  title: "Danilo Calegaro | Desenvolvedor Full Stack React & .NET | Portfolio",
  description:
    "Desenvolvedor Full Stack com 15+ anos de experiência em design e 4 anos em desenvolvimento. Especialista em React, React Native, .NET Core e SQL Server.",
  ogImage: "/images/og-image.jpg",
  canonical: "https://danilocalegaro.dev.br",
  author: "Danilo Calegaro",
  keywords: [
    "desenvolvedor full stack",
    "desenvolvedor react",
    "desenvolvedor .net",
    "desenvolvedor react native",
    "programador full stack",
    "desenvolvedor typescript",
    "portfolio desenvolvedor",
    "frontend backend",
  ],
};

export function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  canonical = defaultSEO.canonical,
  ogImage = defaultSEO.ogImage,
  ogType = "website",
  author = defaultSEO.author,
  keywords = defaultSEO.keywords,
  noindex = false,
}: SEOProps) {
  const fullTitle =
    title === defaultSEO.title ? title : `${title} | Danilo Calegaro`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(", ")} />

      <link rel="canonical" href={canonical} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Danilo Calegaro - Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Danilo Calegaro",
            jobTitle: "Desenvolvedor Full Stack",
            description: description,
            url: canonical,
            image: ogImage,
            sameAs: [
              "https://www.linkedin.com/in/danilo-calegaro/",
              "https://github.com/DaniloCalegaro",
            ],
            knowsAbout: [
              "React",
              "React Native",
              ".NET Core",
              "SQL Server",
              "TypeScript",
              "JavaScript",
              "HTML5",
              "CSS3",
              "PostgreSQL",
              "C#",
              "Entity Framework",
              "RESTful APIs",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Sistemas de Informação",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Danilo Calegaro Portfolio",
            description:
              "Portfolio profissional de Danilo Calegaro, Desenvolvedor Full Stack",
            url: canonical,
            author: {
              "@type": "Person",
              name: "Danilo Calegaro",
            },
            inLanguage: "pt-BR",
          }),
        }}
      />
    </Head>
  );
}
