import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility Statement for Norvex Aviation.",
};

export default function AccessibilityPage() {
  return (
    <LegalPageLayout title="Accessibility Statement">
      <p>
        Norvex Aviation Group LLC, doing business publicly as Norvex Aviation,
        is committed to making norvexaviation.com accessible and usable for as
        many visitors as reasonably possible.
      </p>

      <h2>1. Our Commitment</h2>
      <p>
        We aim to provide a website experience that is clear, navigable,
        responsive, and compatible with common browsers and assistive
        technologies.
      </p>

      <h2>2. Ongoing Improvements</h2>
      <p>
        Norvex Aviation is an early-stage company, and our website will continue
        to evolve. We intend to improve accessibility as the site grows,
        including improvements to:
      </p>
      <ul>
        <li>readable contrast</li>
        <li>keyboard navigation</li>
        <li>page structure</li>
        <li>heading hierarchy</li>
        <li>alternative text for images</li>
        <li>mobile responsiveness</li>
        <li>clear links and forms</li>
      </ul>

      <h2>3. Feedback</h2>
      <p>
        If you experience difficulty accessing any part of the website, contact
        us and we will make reasonable efforts to assist.
      </p>
      <p>
        Email:
        <br />
        <a href="mailto:info@norvexaviation.com">info@norvexaviation.com</a>
      </p>
      <p>Please include:</p>
      <ul>
        <li>the page or feature involved</li>
        <li>the issue encountered</li>
        <li>your preferred contact method</li>
        <li>any assistive technology used, if relevant</li>
      </ul>

      <h2>4. No Barrier Intended</h2>
      <p>
        If a part of the website is difficult to access, it is not intentional.
        We welcome feedback and will review reasonable accessibility requests.
      </p>
    </LegalPageLayout>
  );
}
