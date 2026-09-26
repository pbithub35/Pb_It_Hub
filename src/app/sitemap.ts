import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { getPublicStudentProjects } from "@/data/studentProjects";
import { freeResources } from "@/data/freeResources";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/work",
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
      path === "" ? 1 : path.startsWith("/learn-and-build") ? 0.85 : 0.7,
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

  const studentProjectRoutes = getPublicStudentProjects().map((project) => ({
    url: `${base}/learn-and-build/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const resourceRoutes = freeResources.map((resource) => ({
    url: `${base}/learn-and-build/resources/${resource.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...workRoutes,
    ...studentProjectRoutes,
    ...resourceRoutes,
  ];
}
