import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="text-center py-20 max-w-lg mx-auto">
        <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
          404
        </span>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-secondary mt-2 mb-4 leading-tight">
          Page not found
        </h1>
        <p className="text-gray-500 text-lg mb-10">
          We couldn&apos;t find the page you&apos;re looking for. It may have
          moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30 text-[15px]"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all text-[15px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
