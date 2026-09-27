import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-blue uppercase">
            Error 404
          </span>
          <h1 className="heading-page mt-5">
            Page Not Found
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-strong">
            The page you are looking for doesn’t exist or has been moved. Explore
            our student projects catalog or return to the homepage.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" variant="primary" size="md">
              Return Home
            </Button>
            <Button href="/learn-and-build/projects" variant="secondary" size="md">
              Student Projects
            </Button>
          </div>

          <div className="mt-12 border-t border-navy/10 pt-8">
            <p className="text-xs uppercase tracking-wider text-muted">
              Helpful Links
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-strong">
              <Link
                href="/services"
                className="transition-colors hover:text-navy"
              >
                Services
              </Link>
              <Link
                href="/learn-and-build"
                className="transition-colors hover:text-navy"
              >
                Learn or Buy
              </Link>
              <Link
                href="/faq"
                className="transition-colors hover:text-navy"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-navy"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
