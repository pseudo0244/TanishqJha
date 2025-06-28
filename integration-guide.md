# Website Integration Guide

To track real data from your website, add this tracking code to each page:

## 1. Add to your website's layout or header:

\`\`\`html

<script>
// Analytics tracking
(function() {
  const ANALYTICS_ENDPOINT = 'https://your-dashboard-domain.com/api/analytics';
  
  function trackEvent(event, page, metadata = {}) {
    fetch(ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        page: window.location.pathname,
        timestamp: Date.now(),
        metadata: {
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          ...metadata
        }
      })
    }).catch(console.error);
  }

  // Track page view
  trackEvent('page_view', window.location.pathname);

  // Track form submissions
  document.addEventListener('submit', function(e) {
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    if (data.email && !data.name) {
      trackEvent('newsletter_signup', window.location.pathname, data);
    } else if (data.name && data.email) {
      trackEvent('contact_form_submission', window.location.pathname, data);
    }
  });

  // Track button clicks
  document.addEventListener('click', function(e) {
    const button = e.target.closest('button') || e.target.closest('a');
    if (button) {
      const text = button.textContent.trim();
      const isExternal = button.href && !button.href.includes(window.location.hostname);
      
      if (isExternal) {
        trackEvent('external_link_click', window.location.pathname, {
          url: button.href,
          linkText: text
        });
      } else {
        trackEvent('button_click', window.location.pathname, {
          buttonText: text,
          buttonType: button.className.includes('cta') ? 'CTA' : 'Regular'
        });
      }
    }
  });

  // Track session duration
  let sessionStart = Date.now();
  window.addEventListener('beforeunload', function() {
    trackEvent('session_end', window.location.pathname, {
      duration: Date.now() - sessionStart
    });
  });
})();
</script>

\`\`\`

## 2. For Google Analytics Integration (Optional):

Add this to your website:

\`\`\`html

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

\`\`\`

## 3. For Facebook Pixel (Optional):

\`\`\`html

<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>

\`\`\`

## 4. Environment Variables:

Add to your .env.local:

\`\`\`
NEXT_PUBLIC_ANALYTICS_ENDPOINT=https://your-dashboard-domain.com/api/analytics
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
FACEBOOK_PIXEL_ID=YOUR_PIXEL_ID
