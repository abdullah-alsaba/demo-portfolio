export default function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://abdulla.pro.bd/#person",
        "name": "Abdulla Al Saba",
        "alternateName": "Abdullah Al Saba",
        "jobTitle": "MERN Stack Developer & UI/UX Specialist",
        "description": "Full-stack web developer specializing in Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS.",
        "url": "https://abdulla.pro.bd",
        "image": "https://abdulla.pro.bd/profile/abdullaal.png",
        "sameAs": [
          "https://github.com/abdullah-alsaba",
          "https://www.linkedin.com/in/abdullah-alsaba/",
          "https://x.com/abdulla_saba"
        ],
        "knowsAbout": [
          "Web Development",
          "Next.js",
          "React",
          "JavaScript",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
          "Figma",
          "REST APIs",
          "UI/UX Design"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Dhaka Central University"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://abdulla.pro.bd/#website",
        "url": "https://abdulla.pro.bd",
        "name": "Abdulla Al Saba - Personal Portfolio",
        "description": "MERN Stack & Next.js Developer Portfolio of Abdulla Al Saba.",
        "publisher": {
          "@id": "https://abdulla.pro.bd/#person"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
