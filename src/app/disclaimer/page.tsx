import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Operational Disclaimer",
  description: "Operational Disclaimer for Norvex Aviation.",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Operational Disclaimer">
      <p>
        This Operational Disclaimer applies to norvexaviation.com and all
        general informational materials published by Norvex Aviation Group LLC,
        doing business publicly as Norvex Aviation.
      </p>

      <h2>1. General Information Only</h2>
      <p>
        The information on this website is provided for general business and
        informational purposes only. It is not aviation advice, legal advice,
        pesticide advice, agricultural consulting advice, tax advice, financial
        advice, safety instruction, flight instruction, or regulatory advice.
      </p>
      <p>
        You should consult qualified professionals, regulators, attorneys,
        aviation advisors, agronomists, applicator specialists, insurance
        professionals, and other appropriate experts before making decisions
        based on aviation, agricultural, pesticide, drone, logistics, mapping, or
        investment matters.
      </p>

      <h2>2. Aviation Regulatory Disclaimer</h2>
      <p>
        Aviation operations may be subject to FAA regulations, state laws,
        airport rules, insurance requirements, pilot qualifications, aircraft
        certification, operational limitations, and safety procedures.
      </p>
      <p>
        Nothing on this website authorizes any person to conduct flight
        operations, aerial application, drone operations, aerial mapping,
        transportation, or logistics activities.
      </p>

      <h2>3. Agricultural Aircraft and Aerial Application Disclaimer</h2>
      <p>
        References to aerial fumigation, aerial application, agricultural
        aviation, crop spraying, seeding, fertilizer application, or similar
        services are subject to applicable FAA requirements, state
        pesticide/applicator licensing, environmental rules, weather, field
        conditions, chemical label requirements, aircraft availability, pilot
        qualifications, insurance, and written agreements.
      </p>
      <p>Norvex does not guarantee:</p>
      <ul>
        <li>crop yield</li>
        <li>pest control outcome</li>
        <li>pesticide effectiveness</li>
        <li>chemical availability</li>
        <li>spray timing</li>
        <li>weather availability</li>
        <li>acreage completion date</li>
        <li>field suitability</li>
        <li>regulatory approval</li>
        <li>economic return</li>
      </ul>

      <h2>4. Drone Operations Disclaimer</h2>
      <p>
        References to drone operations, mapping, scouting, imaging, spraying,
        aerial intelligence, or precision agriculture are subject to applicable
        FAA rules, including small UAS rules, waivers, airspace authorization,
        property access rights, equipment availability, weather, and safety
        limitations.
      </p>
      <p>
        Website information is not a substitute for FAA guidance, remote pilot
        training, airspace authorization, or operational approval.
      </p>

      <h2>5. No Emergency Use</h2>
      <p>
        This website is not monitored as an emergency communication channel. Do
        not use this website or general email for emergency aviation,
        agricultural, pesticide, environmental, safety, medical, or time-critical
        requests.
      </p>

      <h2>6. No Offer of Air Carrier or Charter Service</h2>
      <p>
        Nothing on this website constitutes an offer to provide air carrier,
        passenger charter, air taxi, public charter, or common carriage services
        unless Norvex is properly authorized to provide such services under
        applicable law and a written agreement is executed.
      </p>

      <h2>7. No Investment Guarantee</h2>
      <p>
        Any business plans, projections, market discussions, aviation estimates,
        acreage estimates, fleet concepts, or investor-oriented materials are
        preliminary and subject to risk. They are not guarantees of performance,
        revenue, profitability, financing, aircraft availability, contract
        acquisition, regulatory approval, or investor return.
      </p>

      <h2>8. Images, Aircraft References, and Future Plans</h2>
      <p>
        Images, aircraft references, fleet concepts, drone references, maps,
        renderings, graphics, and operational descriptions may be illustrative,
        conceptual, or forward-looking. They may not represent currently owned
        aircraft, active services, final equipment, or approved operations unless
        expressly stated.
      </p>

      <h2>9. Safety Priority</h2>
      <p>
        Norvex prioritizes safety, regulatory compliance, and operational
        discipline. Proposed operations may be modified, postponed, declined, or
        cancelled due to weather, aircraft status, pilot availability, insurance,
        regulatory issues, customer readiness, field conditions, logistics
        limitations, or safety concerns.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions, contact:
        <br />
        <a href="mailto:info@norvexaviation.com">info@norvexaviation.com</a>
      </p>
    </LegalPageLayout>
  );
}
