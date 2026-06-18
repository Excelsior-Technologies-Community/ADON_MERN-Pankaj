


import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg"
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";
import p8 from "../assets/images/p8.jpg";
import p9 from "../assets/images/p9.jpg";
import p10 from "../assets/images/p10.jpg";
import p11 from "../assets/images/p11.jpg";
import p12 from "../assets/images/p12.jpg";
import p13 from "../assets/images/p13.jpg";
import p14 from "../assets/images/p14.jpg";

const projects = [
    {
        id: 1,
        slug: "digital-agency",
        title: "Digital Agency",
        category: "Branding",
        client: "Studio X",
        year: "2026",
        duration: "3 Months",
        services: ["UI/UX Design", "Brand Identity", "Web Development"],
        description:
            "A modern digital agency website focused on delivering a premium user experience and strong brand identity. The project was designed to showcase services, improve lead generation and create a professional online presence.",
        challenge:
            "The client needed a complete redesign of their outdated website which suffered from poor navigation, inconsistent branding and low conversion rates.",
        solution:
            "We created a modern design system, improved navigation, optimized mobile layouts and implemented engaging interactions across the website.",
        results: {
            traffic: "150%",
            conversions: "90%",
            engagement: "200%",
        },
        heroImage: p1,
        gallery: [p2, p3, p4, p5],
    },

    {
        id: 2,
        slug: "creative-studio",
        title: "Creative Studio",
        category: "UI/UX",
        client: "Creative Lab",
        year: "2025",
        duration: "2 Months",
        services: ["Web Design", "UI Design", "Animation"],
        description:
            "A portfolio website for a creative studio showcasing projects, services and team expertise with a visually engaging experience.",
        challenge:
            "The existing website lacked visual appeal and failed to communicate the studio's creative capabilities effectively.",
        solution:
            "We designed a highly interactive experience using modern layouts, animations and strong visual storytelling.",
        results: {
            traffic: "120%",
            conversions: "75%",
            engagement: "180%",
        },
        heroImage: p2,
        gallery: [p3, p4, p5, p6],
    },

    {
        id: 3,
        slug: "startup-landing",
        title: "Startup Landing",
        category: "Development",
        client: "Nova Tech",
        year: "2026",
        duration: "1 Month",
        services: ["Development", "UI/UX"],
        description:
            "A high-converting startup landing page designed to attract investors and generate early customer signups.",
        challenge:
            "The startup required a modern landing page that clearly communicated their value proposition.",
        solution:
            "We built a fast, responsive landing page with strong messaging and optimized call-to-actions.",
        results: {
            traffic: "100%",
            conversions: "110%",
            engagement: "140%",
        },
        heroImage: p3,
        gallery: [p4, p5, p6, p7],
    },

    {
        id: 4,
        slug: "marketing-agency",
        title: "Marketing Agency",
        category: "Marketing",
        client: "Growth Media",
        year: "2024",
        duration: "4 Months",
        services: ["Branding", "Marketing", "Development"],
        description:
            "A marketing agency website designed to generate leads and establish credibility in a competitive market.",
        challenge:
            "The agency struggled with low engagement and poor user retention.",
        solution:
            "We redesigned the website structure, improved content hierarchy and introduced conversion-focused sections.",
        results: {
            traffic: "170%",
            conversions: "95%",
            engagement: "230%",
        },
        heroImage: p4,
        gallery: [p5, p6, p7, p8],
    },

    {
        id: 5,
        slug: "business-website",
        title: "Business Website",
        category: "Development",
        client: "Business Hub",
        year: "2025",
        duration: "2 Months",
        services: ["Development", "SEO"],
        description:
            "A professional corporate website focused on business growth, credibility and customer acquisition.",
        challenge:
            "The client required a scalable and future-proof website with a professional appearance.",
        solution:
            "We developed a modern business website with optimized performance and clean architecture.",
        results: {
            traffic: "130%",
            conversions: "80%",
            engagement: "170%",
        },
        heroImage: p5,
        gallery: [p6, p7, p8, p9],
    },

    {
        id: 6,
        slug: "portfolio-showcase",
        title: "Portfolio Showcase",
        category: "UI/UX",
        client: "John Carter",
        year: "2026",
        duration: "1.5 Months",
        services: ["UI Design", "Branding"],
        description:
            "A personal portfolio website designed to highlight skills, achievements and featured projects.",
        challenge:
            "The client wanted a portfolio that stood out in a highly competitive design industry.",
        solution:
            "We focused on typography, project storytelling and elegant visual presentation.",
        results: {
            traffic: "90%",
            conversions: "65%",
            engagement: "150%",
        },
        heroImage: p6,
        gallery: [p7, p8, p9, p10],
    },

    {
        id: 7,
        slug: "fashion-brand",
        title: "Fashion Brand",
        category: "Branding",
        client: "Elite Fashion",
        year: "2024",
        duration: "3 Months",
        services: ["Brand Identity", "Web Design"],
        description:
            "A premium fashion brand website designed to showcase products and enhance brand perception.",
        challenge:
            "The brand lacked a strong digital identity and online customer engagement.",
        solution:
            "We developed a luxurious visual identity and an immersive shopping experience.",
        results: {
            traffic: "160%",
            conversions: "85%",
            engagement: "210%",
        },
        heroImage: p7,
        gallery: [p8, p9, p10, p11],
    },

    {
        id: 8,
        slug: "ecommerce-store",
        title: "E-Commerce Store",
        category: "Development",
        client: "Shoply",
        year: "2025",
        duration: "5 Months",
        services: ["E-Commerce", "Development", "SEO"],
        description:
            "A scalable e-commerce platform built to provide seamless shopping experiences across devices.",
        challenge:
            "The store required better performance, checkout flow and mobile responsiveness.",
        solution:
            "We optimized the shopping journey and improved performance across the entire platform.",
        results: {
            traffic: "220%",
            conversions: "120%",
            engagement: "250%",
        },
        heroImage: p8,
        gallery: [p9, p10, p11, p12],
    },

    {
        id: 9,
        slug: "saas-platform",
        title: "SaaS Platform",
        category: "UI/UX",
        client: "CloudSync",
        year: "2026",
        duration: "4 Months",
        services: ["Dashboard Design", "UI/UX"],
        description:
            "A modern SaaS dashboard focused on usability, productivity and data visualization.",
        challenge:
            "Users struggled with navigation and understanding complex workflows.",
        solution:
            "We redesigned the platform with a clean interface and intuitive user experience.",
        results: {
            traffic: "140%",
            conversions: "100%",
            engagement: "190%",
        },
        heroImage: p9,
        gallery: [p10, p11, p12, p13],
    },

    {
        id: 10,
        slug: "real-estate",
        title: "Real Estate",
        category: "Marketing",
        client: "Prime Estate",
        year: "2025",
        duration: "3 Months",
        services: ["Branding", "Web Design", "Marketing"],
        description:
            "A real estate website designed to showcase premium properties and generate qualified leads.",
        challenge:
            "The client needed a visually appealing platform that could attract buyers and investors.",
        solution:
            "We created a property-focused experience with advanced listings and lead capture features.",
        results: {
            traffic: "180%",
            conversions: "95%",
            engagement: "220%",
        },
        heroImage: p10,
        gallery: [p11, p12, p13, p14],
    },
];


export default projects;