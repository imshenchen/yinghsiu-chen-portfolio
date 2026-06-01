/**
 * Base path for assets and links when the site is hosted under a sub-path
 * (e.g. GitHub Pages at /<repo>). Empty string in local dev / root hosting.
 *
 * Kept in sync with `basePath` in next.config.ts via NEXT_PUBLIC_BASE_PATH.
 * Use for plain <img>/<a> that don't go through next/link or next/image.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
