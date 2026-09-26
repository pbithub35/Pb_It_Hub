import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { freeResources } from "@/data/freeResources";
import { getAllBlogPosts } from "@/data/blogPosts";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/blog",
    "/services",
    "/work",
    "/locations",
    "/privacy",
    "/terms",
    "/learn-and-build",
    "/learn-and-build/projects",
    "/learn-and-build/packages",
    "/learn-and-build/add-ons",
    "/learn-and-build/resources",
    "/learn-and-build/career-guidance",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority:
      path === ""
        ? 1
        : path.startsWith("/learn-and-build") || path === "/blog"
        ? 0.85
        : path === "/locations" || path === "/faq"
        ? 0.8
        : 0.7,
  }));

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const workRoutes = projects.map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const resourceRoutes = freeResources.map((resource) => ({
    url: `${base}/learn-and-build/resources/${resource.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const locationRoutes = locations.map((location) => ({
    url: `${base}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: location.isHq ? 0.9 : 0.8,
  }));

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...serviceRoutes,
    ...workRoutes,
    ...resourceRoutes,
    ...locationRoutes,
  ];
}
