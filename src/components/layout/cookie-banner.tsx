'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem('fufina-cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-xl -translate-x-1/2 rounded-2xl bg-white p-5 shadow-soft"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-charcoal/70">
              We use cookies to offer a refined browsing experience and personalised recommendations. By
              continuing, you consent to our cookie policy.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  window.localStorage.setItem('fufina-cookie-consent', 'accepted');
                  setVisible(false);
                }}
              >
                Accept
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  window.localStorage.setItem('fufina-cookie-consent', 'declined');
                  setVisible(false);
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
