import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

import "./globals.css";

export const metadata = {
  
  title: "Rehmat Foundation",
  description:
    "This is official website of rehmat foundation, rehmat foundation chandigarh,rehmat foundation,rehmat foundation in,rehmat foundation mohali",
  generator: "Next.js",
  applicationName: "Rehmat Foundation",
  referrer: "origin-when-cross-origin",
  robots: "index",
  keywords: [
    "Rehmat Foundation",
    "Rehmat Foundation Chandigarh",
    "rehmat foundation",
    "Rehmat Foundation Donation",
    "rehmat foundation",
    "best ngo in chandigarh",
    "rehmat foundation in",
    "rehmat foundation chandigarh",
    "rehmat foundation mohali",
    "how to donate to NGOs in India",
    "best NGOs for child education in Chandigarh",
    "NGO helping poor families in India",
    "charity organisations in India",
    "rehmat",
    "rehmat ngo",
    "Donate Rehmat Foundation",
    "Developer Rehmat Foundation",
  ],
  authors: [
    { name: "suraj singh, Amandeep Singh" },
    { name: "suraj singh", url: "https://www.linkedin.com/in/surajsinghgore" },
  ],
  creator: "rehmatFoundation.in",
  publisher: "rehmatFoundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         {/* Open Graph */}
        <meta property="og:title" content="Rehmat Foundation – NGO in Chandigarh" />
        <meta property="og:description" content="Support Rehmat Foundation's mission." />
        <meta property="og:image" content="https://www.rehmatfoundation.in/logo.png" />
        <meta property="og:url" content="https://www.rehmatfoundation.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rehmat Foundation – NGO in Chandigarh" />
        <meta name="twitter:description" content="Support Rehmat Foundation's mission." />
        <meta name="twitter:image" content="https://www.rehmatfoundation.in/logo.png" />


         <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="MVmkk0YRv0aaujawivKa/g"
          async
        ></script>
        <link
          rel="canonical"
          href="https://www.rehmatfoundation.in/"
          key="canonical"
        />

<link rel="shortcut icon" href="/images/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </head>
      <body>
    
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
