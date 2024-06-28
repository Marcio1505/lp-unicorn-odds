// src/fbPixel.js
export const initFacebookPixel = () => {
    window.fbq('init', '1708248306058901');
    window.fbq('track', 'PageView');
  };
  
  export const trackEvent = (event, options) => {
    window.fbq('track', event, options);
  };
  