import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalPages } from "@/lib/site";

export const metadata: Metadata = {
  title: legalPages.disclaimer.title,
  description: legalPages.disclaimer.description,
};

export default function DisclaimerPage() {
  return <LegalPage pageKey="disclaimer" />;
}
