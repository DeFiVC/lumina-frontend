"use client";

import RouteError from "@/components/RouteError";

export default function AssetsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <RouteError error={error} reset={reset} route="assets" />;
}
