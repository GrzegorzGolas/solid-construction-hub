// Obfuscated contact data to prevent bot scraping
// Values are base64-encoded and decoded at runtime only

const _p = "NTc1ODU3OTI5"; // phone digits
const _e = "Yml1cm9Ac29saWRuZXd5a29uYXdzdHdvLnBs"; // email

export const getPhone = () => atob(_p);
export const getPhoneFormatted = () => {
  const p = atob(_p);
  return `${p.slice(0, 3)}\u00A0${p.slice(3, 6)}\u00A0${p.slice(6)}`;
};
export const getPhoneHref = () => `tel:+48${atob(_p)}`;
export const getEmail = () => atob(_e);
export const getEmailHref = () => `mailto:${atob(_e)}`;
