import { redirect } from "next/navigation";
import { getPublicStudentProjects } from "@/data/studentProjects";

export function generateStaticParams() {
  return getPublicStudentProjects().map((project) => ({
    slug: project.slug,
  }));
}

/** Detail pages removed — list accordion is the UX. */
export default async function StudentProjectDetailRedirect() {
  redirect("/learn-and-build/projects");
}
