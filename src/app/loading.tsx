export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo placeholder */}
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] animate-pulse" />
        </div>

        {/* Loading text */}
        <p className="text-gray-400 text-sm animate-pulse">Cargando...</p>
      </div>
    </main>
  );
}
