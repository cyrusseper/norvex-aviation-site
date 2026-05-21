import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalPages } from "@/lib/site";

export const metadata: Metadata = {
  title: legalPages.privacy.title,
  description: legalPages.privacy.description,
};

export default function PrivacyPage() {
  return <LegalPage pageKey="privacy" />;
}
