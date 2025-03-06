'use client';

export default function Error({ error, reset }) {
    return (
        <div className="flex flex-col items-center h-[90vh] justify-center gap-4 text-center">
            <h1 className="font-semibold text-4xl">Something went wrong!</h1>
            <p className="font-medium text-xl">{error.message || 'An unexpected error has occurred.'}</p>
            <button
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black transition duration-300 border border-black"
                onClick={() => {
                    // Attempt to recover by retrying
                    reset();
                }}
            >
                Try Again
            </button>
        </div>
    );
}
