"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="text-center py-20 max-w-lg mx-auto">
        <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
          Something went wrong
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mt-2 mb-4 leading-tight">
          Unexpected error
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          We encountered an issue loading this page. Please try again, or
          contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30 text-[15px]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all text-[15px]"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
