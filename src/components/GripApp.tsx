import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DiscoverPage from "./DiscoverPage";
import ReelPlayer from "./ReelPlayer";

const GripApp = () => {
  const [showReel, setShowReel] = useState(false);

  return (
    <div className="max-w-[430px] mx-auto relative min-h-screen bg-background">
      <DiscoverPage onOpenReel={() => setShowReel(true)} />
      <AnimatePresence>
        {showReel && <ReelPlayer onClose={() => setShowReel(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default GripApp;
