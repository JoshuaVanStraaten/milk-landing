import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ubicorp.milkza";

export function FooterSection() {
  return (
    <footer className="bg-[#111827] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/milk_logo.png"
                alt="Milk"
                width={100}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-[200px]">
              Compare grocery prices across Pick n Pay, Woolworths, Checkers and Shoprite. Made for South Africa.
            </p>
            <p className="mt-3 text-[#10b981] text-sm font-medium italic">
              Compare. Save. Shop smarter.
            </p>
          </div>

          {/* Product column */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Product
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="#features" className="text-[#6b7280] text-sm hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-[#6b7280] text-sm hover:text-white transition-colors">
                How it Works
              </a>
              <a href="#faq" className="text-[#6b7280] text-sm hover:text-white transition-colors">
                FAQ
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] text-sm hover:text-white transition-colors"
              >
                Download
              </a>
            </div>
          </div>

          {/* Support column */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Support
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:jriconsulting.za@gmail.com"
                className="text-[#6b7280] text-sm hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://github.com/JoshuaVanStraaten/milk-legal/blob/main/PRIVACY_POLICY.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a href="#faq" className="text-[#6b7280] text-sm hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Social column */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Follow Us
            </p>
            <div className="flex gap-4">
              <span className="text-[#4b5563]" aria-hidden="true">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
              <span className="text-[#4b5563]" aria-hidden="true">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
            </div>
            <p className="mt-3 text-[#4b5563] text-xs">Social links coming soon</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-[#4b5563] text-sm">
            © {new Date().getFullYear()} Milk. Made with love in South Africa.
          </p>
          <a
            href="#hero"
            className="text-[#6b7280] text-sm hover:text-white transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
