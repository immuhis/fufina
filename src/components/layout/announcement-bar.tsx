'use client';

import { motion } from 'framer-motion';

export function AnnouncementBar() {
  return (
    <div className="bg-rose text-white">
      <motion.div
        className="container-responsive flex items-center justify-center gap-2 py-2 text-sm sm:text-base"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span aria-label="Free Shipping in Europe">Free Shipping in Europe</span>
      </motion.div>
    </div>
  );
}
