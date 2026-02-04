import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex items-center justify-center px-6">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-[150px] md:text-[200px] font-bold leading-none gradient-text">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Back to home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-black px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
