import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-neutral-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.webp"
                alt="Accredian Logo"
                width={130}
                height={38}
                className="h-8 w-auto brightness-0 invert object-contain"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
              Transform your workforce with Accredian Enterprise — premier
              upskilling, executive education, and L&D programs tailored for
              high-impact teams.
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="font-semibold text-base mb-5 text-white tracking-wide">
              Programs
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="#data-science"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Data Science & AI
                </Link>
              </li>
              <li>
                <Link
                  href="#product-management"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Product Management
                </Link>
              </li>
              <li>
                <Link
                  href="#business-analytics"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Business Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="#digital-transformation"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-base mb-5 text-white tracking-wide">
              Company
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="#about"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#privacy"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#terms"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-semibold text-base mb-5 text-white tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="text-neutral-400 text-sm flex items-start">
                <span className="font-medium text-neutral-300 w-16 shrink-0">Email:</span>
                <a
                  href="mailto:enterprise@accredian.com"
                  className="hover:text-white transition-colors break-words"
                >
                  enterprise@accredian.com
                </a>
              </li>
              <li className="text-neutral-400 text-sm flex items-start">
                <span className="font-medium text-neutral-300 w-16 shrink-0">Phone:</span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-neutral-400 text-sm flex items-start">
                <span className="font-medium text-neutral-300 w-16 shrink-0">Address:</span>
                <span className="leading-snug">
                  123 Learning Ave, Tech District, Innovation City
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
