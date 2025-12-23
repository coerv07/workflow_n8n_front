"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <span className="text-red-500 text-lg">
        Error loading editor
      </span>

      <button
        onClick={reset}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
