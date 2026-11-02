import { useState } from 'react';
export default function SafeImage({ src, alt, eager = false, ...rest }) {
  const [failed, setFailed] = useState(false);
  return <img src={failed ? '/images/placeholder.svg' : src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} {...rest} />;
}
