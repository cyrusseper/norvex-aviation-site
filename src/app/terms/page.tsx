import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalPages } from "@/lib/site";

export const metadata: Metadata = {
  title: legalPages.terms.title,
  description: legalPages.terms.description,
};

export default function TermsPage() {
  return <LegalPage pageKey="terms" />;
}
