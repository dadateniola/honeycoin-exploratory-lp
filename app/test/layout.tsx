import React, { Suspense } from "react";

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<div />}>{children}</Suspense>;
}
