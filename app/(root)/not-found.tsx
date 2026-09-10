import type { Metadata } from "next";
import NotFoundContent from "@/components/shared/not-found-content";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Ooops! Looks like this page ghosted us.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
