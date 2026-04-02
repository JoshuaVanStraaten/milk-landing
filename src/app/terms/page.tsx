import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Milk",
  description: "Terms of Service for the Milk grocery price comparison app.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#10b981] hover:text-[#059669] transition-colors mb-10"
        >
          ← Back to Milk
        </Link>

        <h1 className="text-3xl font-bold text-[#111827] mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-[#6b7280] mb-10">Last updated: April 2, 2026</p>

        <div className="prose prose-gray max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#111827] [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-[#374151] [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-[#374151] [&_ul]:leading-relaxed [&_ul]:mb-4 [&_li]:mb-1">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the Milk mobile application (&ldquo;App&rdquo;), you agree to
            be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do
            not use the App.
          </p>
          <p>Milk is operated by Ubicorp (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;).</p>

          <h2>2. Description of Service</h2>
          <p>
            Milk is a grocery price comparison app for South African shoppers. The App allows you to:
          </p>
          <ul>
            <li>Browse and compare product prices across retailers (Pick n Pay, Woolworths, Shoprite, Checkers)</li>
            <li>Create and manage shopping lists</li>
            <li>Share shopping lists with other users in real time</li>
            <li>Generate AI-powered recipe suggestions</li>
            <li>Find nearby stores based on your location</li>
          </ul>

          <h2>3. Account Registration</h2>
          <p>
            To use certain features, you must create an account using email or Google Sign-In. You are
            responsible for:
          </p>
          <ul>
            <li>Providing accurate account information</li>
            <li>Maintaining the security of your account credentials</li>
            <li>All activity that occurs under your account</li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
            <li>Interfere with or disrupt the App&apos;s functionality</li>
            <li>Scrape, copy, or redistribute product pricing data from the App</li>
            <li>Use the App to engage in any commercial activity without our prior written consent</li>
          </ul>

          <h2>5. Product Prices and Availability</h2>
          <ul>
            <li>Product prices displayed in the App are sourced from third-party retailers and are provided for informational purposes only</li>
            <li>We do not guarantee the accuracy, completeness, or timeliness of any pricing information</li>
            <li>Prices may differ from in-store prices and are subject to change without notice</li>
            <li>We are not responsible for any discrepancies between displayed prices and actual retail prices</li>
          </ul>

          <h2>6. AI-Generated Content</h2>
          <p>
            The App includes AI-powered recipe suggestions. This content is generated automatically and
            is provided for informational purposes only. We do not guarantee the accuracy, safety, or
            suitability of AI-generated recipes. Always use your own judgment regarding dietary needs
            and food allergies.
          </p>

          <h2>7. Shopping Lists and User Content</h2>
          <ul>
            <li>You retain ownership of content you create (shopping lists, notes, etc.)</li>
            <li>By sharing lists with other users, you grant them permission to view and edit that shared content</li>
            <li>We may remove content that violates these Terms</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          <p>
            The App, including its design, features, and content (excluding user-generated content), is
            owned by Ubicorp and protected by applicable intellectual property laws. You may not copy,
            modify, or distribute any part of the App without our written permission.
          </p>

          <h2>9. Privacy</h2>
          <p>
            Your use of the App is also governed by our{" "}
            <Link href="/privacy" className="text-[#10b981] hover:text-[#059669]">
              Privacy Policy
            </Link>
            . By using the App, you consent to the collection and use of your information as described
            therein.
          </p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either
            express or implied. We do not warrant that the App will be uninterrupted, error-free, or
            free of harmful components.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by South African law, Ubicorp shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your use of
            the App, including but not limited to reliance on pricing information displayed in the App.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may suspend or terminate your access to the App at any time, with or without cause, with
            or without notice. Upon termination, your right to use the App ceases immediately.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes by
            posting the updated Terms and revising the &ldquo;Last updated&rdquo; date. Continued use of the App
            after changes constitutes acceptance of the revised Terms.
          </p>

          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the Republic of
            South Africa. Any disputes arising from these Terms shall be subject to the exclusive
            jurisdiction of the South African courts.
          </p>

          <h2>15. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:jriconsulting.za@gmail.com" className="text-[#10b981] hover:text-[#059669]">
              jriconsulting.za@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-[#6b7280]">
            &copy; {new Date().getFullYear()} Ubicorp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
