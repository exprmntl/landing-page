import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whiteRoomFonts } from "@/styles/brand-fonts";
import styles from "./privacy.module.css";

const policyUrl = "https://experimental.software/flight-currency/privacy";
const description =
  "How Flight Currency saves your currency preference, uses Chrome sync, and keeps your flight searches private.";

export const metadata: Metadata = {
  title: "Flight Currency privacy policy",
  description,
  alternates: { canonical: policyUrl },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Flight Currency privacy policy",
    description,
    url: policyUrl,
    type: "website",
  },
};

export default function FlightCurrencyPrivacyPage() {
  return (
    <div className={`${whiteRoomFonts} ${styles.page}`}>
      <header className={styles.header}>
        <Link href="/">Experimental Software</Link>
        <a href="https://github.com/exprmntl/google-flights-currency/issues">
          Support <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main className={styles.content}>
        <div className={styles.product}>
          <Image
            src="/marketing/extension-artwork/google-flights-currency/icon.png"
            alt=""
            width={48}
            height={48}
          />
          <div>
            <p>Flight Currency</p>
            <span>for Google Flights</span>
          </div>
        </div>
        <h1>Privacy policy</h1>
        <p className={styles.date}>Last updated September 16, 2026</p>
        <p className={styles.intro}>
          Your currency preference is the only thing the extension saves.
          Experimental Software does not collect your flight searches, browsing
          history, or personal information.
        </p>

        <section>
          <h2>What is stored</h2>
          <p>
            Flight Currency saves one preferred currency code using Chrome’s
            built-in storage. If Chrome sync is enabled, Chrome may synchronize
            this preference between browsers signed into the same account. Your
            preference remains in Chrome storage until changed or removed through
            Chrome’s extension or browser-data controls.
          </p>
        </section>
        <section>
          <h2>How the extension works</h2>
          <p>
            The extension checks Google Flights URLs and changes their currency
            parameter on your device. It runs on Google Travel pages to detect
            navigation into Google Flights, and changes only Google Flights URLs.
            The storage permission lets it remember your selected currency.
          </p>
          <p>
            Outside Google’s normal page requests and Chrome’s built-in preference
            sync, the extension makes no network requests. Experimental Software
            does not receive your chosen currency, flight searches, browsing
            history, or personal information. There are no analytics, ads,
            accounts, remote code, or servers operated for this extension.
          </p>
        </section>
        <section>
          <h2>Google and other services</h2>
          <p>
            Google Flights and Chrome are subject to{" "}
            <a href="https://policies.google.com/privacy">Google’s privacy policy</a>.
            Airlines and booking sites operate independently. Flight Currency is
            not affiliated with or endorsed by Google.
          </p>
        </section>
        <section>
          <h2>Changes and contact</h2>
          <p>
            Flight Currency, previously called Google Flights Currency Setter, is
            provided by Experimental Software LLC. If this policy changes, the
            updated version and date will appear on this page.
          </p>
          <p>
            For questions, visit our{" "}
            <a href="https://github.com/exprmntl/google-flights-currency/issues">
              support page
            </a>.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>Experimental Software LLC</footer>
    </div>
  );
}
