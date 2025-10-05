export function AnalyticsScripts() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        data-analytics="ga4"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-XXXXXXXXXX');`
        }}
      />
    </>
  );
}
