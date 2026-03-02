export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  readTime: number;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai",
    title: "The Future of AI in Enterprise Software",
    excerpt:
      "Exploring how artificial intelligence is transforming enterprise applications and creating new opportunities for businesses.",
    date: "March 1, 2025",
    author: "Sarah Chen",
    category: "AI & ML",
    coverImage: "/blog/ai-enterprise.jpg",
    readTime: 8,
    content: `
      <h2>The Transformation is Just Beginning</h2>
      <p>Artificial intelligence has moved from experimental technology to a core component of enterprise software. Organizations are leveraging AI to automate workflows, improve decision-making, and deliver better customer experiences.</p>
      
      <h3>Key Trends in Enterprise AI</h3>
      <ul>
        <li><strong>Generative AI Integration:</strong> Companies are embedding AI capabilities directly into their existing systems, making AI accessible to non-technical users.</li>
        <li><strong>Data-Driven Decisions:</strong> AI-powered analytics platforms are helping organizations understand complex data patterns and make informed strategic decisions.</li>
        <li><strong>Automation at Scale:</strong> Intelligent automation is reducing manual processes and increasing operational efficiency.</li>
      </ul>
      
      <h3>Challenges and Considerations</h3>
      <p>While the potential is immense, organizations must address data privacy, model transparency, and ethical considerations. The responsible deployment of AI requires robust governance frameworks and clear guidelines.</p>
      
      <h3>Looking Ahead</h3>
      <p>The next decade will see AI become increasingly specialized, with models trained for specific industry verticals and use cases. Organizations that invest in AI infrastructure and talent today will have a significant competitive advantage.</p>
    `,
  },
  {
    id: "2",
    slug: "scaling-kubernetes",
    title: "Scaling Applications with Kubernetes: Best Practices",
    excerpt: "A comprehensive guide to scaling containerized applications using Kubernetes in production environments.",
    date: "February 25, 2025",
    author: "James Morrison",
    category: "DevOps",
    coverImage: "/blog/kubernetes.jpg",
    readTime: 12,
    content: `
      <h2>Kubernetes has Become Essential</h2>
      <p>Kubernetes provides the orchestration layer needed to manage containerized applications at scale. However, moving to Kubernetes requires careful planning and understanding of best practices.</p>
      
      <h3>Resource Management</h3>
      <p>Proper resource allocation is critical for Kubernetes success. Setting appropriate CPU and memory requests and limits ensures your applications run efficiently and reliably.</p>
      
      <h3>Networking and Service Discovery</h3>
      <p>Kubernetes networking abstracts away infrastructure concerns, but understanding how services discover each other is essential for building robust applications.</p>
      
      <h3>Monitoring and Observability</h3>
      <p>Deploy comprehensive monitoring solutions to gain visibility into your cluster's health and performance. Tools like Prometheus and Grafana are industry standards.</p>
    `,
  },
  {
    id: "3",
    slug: "database-optimization",
    title: "Database Optimization Strategies for High Performance",
    excerpt: "Learn proven techniques to optimize your database performance and handle increased load efficiently.",
    date: "February 18, 2025",
    author: "Emma Rodriguez",
    category: "Database",
    coverImage: "/blog/database.jpg",
    readTime: 10,
    content: `
      <h2>Performance is Critical</h2>
      <p>Database performance directly impacts application responsiveness and user experience. Optimization requires a multi-faceted approach involving indexing, query optimization, and architecture design.</p>
      
      <h3>Indexing Strategy</h3>
      <p>Well-designed indexes are essential for query performance. However, too many indexes can hurt write performance. Strike a balance based on your specific workload.</p>
      
      <h3>Query Optimization</h3>
      <p>Analyze slow queries using database profiling tools. Often, simple query rewrites can dramatically improve performance without schema changes.</p>
      
      <h3>Caching Layers</h3>
      <p>Implement caching strategies using Redis or similar solutions to reduce database load and improve response times.</p>
    `,
  },
  {
    id: "4",
    slug: "microservices-patterns",
    title: "Essential Microservices Architecture Patterns",
    excerpt: "Understanding key patterns for building resilient and scalable microservices architectures.",
    date: "February 10, 2025",
    author: "Michael Zhang",
    category: "Architecture",
    coverImage: "/blog/microservices.jpg",
    readTime: 15,
    content: `
      <h2>Microservices Require Strategic Planning</h2>
      <p>Microservices offer flexibility and scalability, but introduce complexity. Understanding established patterns helps avoid common pitfalls.</p>
      
      <h3>Service Discovery</h3>
      <p>Implement robust service discovery mechanisms to enable dynamic service location and communication.</p>
      
      <h3>API Gateway Pattern</h3>
      <p>Use an API gateway as a single entry point for client requests, providing routing, authentication, and rate limiting.</p>
      
      <h3>Circuit Breaker Pattern</h3>
      <p>Implement circuit breakers to gracefully handle service failures and prevent cascading failures across your system.</p>
    `,
  },
  {
    id: "5",
    slug: "security-best-practices",
    title: "Web Application Security: Essential Best Practices",
    excerpt: "Comprehensive security practices every developer should implement in their web applications.",
    date: "February 1, 2025",
    author: "Lisa Anderson",
    category: "Security",
    coverImage: "/blog/security.jpg",
    readTime: 14,
    content: `
      <h2>Security is Not Optional</h2>
      <p>Security breaches can be devastating. Implementing fundamental security practices should be part of your development process from day one.</p>
      
      <h3>Authentication and Authorization</h3>
      <p>Use modern authentication standards like OAuth 2.0 and implement proper authorization controls to ensure users can only access appropriate resources.</p>
      
      <h3>Data Protection</h3>
      <p>Encrypt sensitive data both in transit and at rest. Use HTTPS, implement proper key management, and follow data protection regulations.</p>
      
      <h3>Input Validation</h3>
      <p>Never trust user input. Validate and sanitize all input to prevent injection attacks and other security vulnerabilities.</p>
    `,
  },
  {
    id: "6",
    slug: "performance-optimization",
    title: "Frontend Performance Optimization: Complete Guide",
    excerpt: "Techniques to dramatically improve your frontend application performance and user experience.",
    date: "January 25, 2025",
    author: "David Park",
    category: "Performance",
    coverImage: "/blog/performance.jpg",
    readTime: 11,
    content: `
      <h2>User Experience Depends on Performance</h2>
      <p>Every millisecond counts. Users expect fast, responsive applications, and performance directly impacts conversion rates and user satisfaction.</p>
      
      <h3>Code Splitting and Lazy Loading</h3>
      <p>Break your application into smaller chunks and load them only when needed. This reduces initial page load time significantly.</p>
      
      <h3>Image Optimization</h3>
      <p>Optimize images using modern formats like WebP, implement responsive images, and use content delivery networks for faster delivery.</p>
      
      <h3>Bundle Optimization</h3>
      <p>Analyze your bundle size, remove unused dependencies, and use tree-shaking to keep your JavaScript lean and fast.</p>
    `,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
}
