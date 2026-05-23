import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Cookie Notice for Norvex Aviation.",
};

export default function CookiesPage() {
  return (
    <LegalPageLayout title="Cookie Notice">
      <p>
        This Cookie Notice explains how Norvex Aviation Group LLC, doing
        business publicly as Norvex Aviation, may use cookies, analytics tools,
        hosting logs, and similar technologies on norvexaviation.com.
      </p>

      <h2>1. What Cookies Are</h2>
      <p>
        Cookies are small files or identifiers that may be stored on your device
        when you visit a website. Similar technologies may include pixels, local
        storage, analytics scripts, server logs, or device identifiers.
      </p>

      <h2>2. How We May Use Cookies and Similar Technologies</h2>
      <p>We may use cookies or similar technologies to:</p>
      <ul>
        <li>operate the website</li>
        <li>improve website performance</li>
        <li>understand website traffic</li>
        <li>protect website security</li>
        <li>remember basic preferences</li>
        <li>analyze page usage</li>
        <li>improve content and user experience</li>
      </ul>

      <h2>3. Analytics</h2>
      <p>
        We may use privacy-conscious analytics or hosting analytics to understand
        how visitors use the site. Analytics may collect technical information
        such as page visits, device type, browser type, referring page,
        approximate location, and interaction patterns.
      </p>
      <p>
        If Vercel Analytics or similar tools are used, they may provide website
        traffic insights without relying on third-party advertising cookies.
      </p>

      <h2>4. Essential Technologies</h2>
      <p>
        Some technologies may be necessary for the website to function correctly,
        maintain security, load pages, prevent abuse, or support hosting
        infrastructure.
      </p>

      <h2>5. Third-Party Tools</h2>
      <p>
        If we use third-party tools such as analytics, hosting, email, forms,
        maps, embedded media, or security services, those third parties may
        process limited technical data according to their own policies.
      </p>

      <h2>6. Your Choices</h2>
      <p>
        You can manage cookies through your browser settings. You may block,
        delete, or disable cookies, but some website functions may not work
        properly.
      </p>

      <h2>7. Advertising Cookies</h2>
      <p>
        Norvex does not currently use the website as a third-party advertising
        platform. If that changes, we will update this notice as appropriate.
      </p>

      <h2>8. Updates</h2>
      <p>
        We may update this Cookie Notice from time to time. The &quot;Last
        updated&quot; date above shows the latest revision.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions may be sent to:
        <br />
        <a href="mailto:info@norvexaviation.com">info@norvexaviation.com</a>
      </p>
    </LegalPageLayout>
  );
}
