import Script from "next/script";

import React from "react";

function GoogleAnalytics({ gaId }) {
  return (
    <div className="container">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="google-analytics">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${gaId}', {
    page_path: window.location.pathname,
    });
`}
      </Script>
    </div>
  );
}

export default GoogleAnalytics;
