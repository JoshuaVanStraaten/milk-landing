import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Milk",
  description: "Privacy Policy for the Milk grocery price comparison app.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-[#6b7280] mb-10">Last updated: February 1, 2026</p>

        <div className="prose prose-gray max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#111827] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#111827] [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-[#374151] [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-[#374151] [&_ul]:leading-relaxed [&_ul]:mb-4 [&_li]:mb-1">
          <h2>Introduction</h2>
          <p>
            Milk (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is operated by Ubicorp. This Privacy Policy
            explains how we collect, use, and protect your information when you use our mobile
            application (&ldquo;Milk&rdquo; or the &ldquo;App&rdquo;).
          </p>

          <h2>Information We Collect</h2>

          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> When you create an account, we collect your email address and display name.</li>
            <li><strong>Shopping Lists:</strong> Lists you create, including product names, quantities, and prices.</li>
            <li><strong>Shared Data:</strong> When you share lists with others, we store the email addresses of people you share with.</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> We collect information about how you use the App, such as features accessed and time spent.</li>
            <li><strong>Device Information:</strong> We may collect device type, operating system version, and unique device identifiers.</li>
          </ul>

          <h3>Information from Third Parties</h3>
          <ul>
            <li><strong>Google Sign-In:</strong> If you sign in with Google, we receive your name and email address from Google.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain the App</li>
            <li>Enable you to create and share shopping lists</li>
            <li>Display product prices from South African retailers (Pick n Pay, Woolworths, Shoprite, Checkers)</li>
            <li>Generate AI-powered recipe suggestions</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about updates or support</li>
          </ul>

          <h2>Data Storage and Security</h2>
          <p>
            Your data is stored securely using Supabase, a trusted cloud database provider. We
            implement appropriate technical and organizational measures to protect your personal
            information.
          </p>

          <h2>Data Sharing</h2>
          <p>We do not sell your personal information. We may share your data only:</p>
          <ul>
            <li>With other users you explicitly choose to share lists with</li>
            <li>With service providers who help us operate the App (e.g., Supabase for data storage, Google for authentication)</li>
            <li>If required by law or to protect our rights</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your account and associated data</li>
            <li>Export your data</li>
          </ul>
          <p>
            To exercise these rights, contact us at the email below.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your data for as long as your account is active. If you delete your account, we
            will delete your personal data within 30 days.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Milk is not intended for children under 13. We do not knowingly collect personal
            information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
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
