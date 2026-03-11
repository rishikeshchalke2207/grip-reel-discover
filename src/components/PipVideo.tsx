import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Volume2, VolumeX } from "lucide-react";

interface PipVideoProps {
  onExpand: () => void;
  onClose: () => void;
}

const PipVideo = ({ onExpand, onClose }: PipVideoProps) => {
  const [visible, setVisible] = useState(true);
  const [muted, setMuted] = useState(true);

  if (!visible) return null;

  const embedUrl = `https://www.youtube.com/embed/bE4YW71-u5k?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=bE4YW71-u5k&controls=0&rel=0&modestbranding=1&playsinline=1`;

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-[88px] right-4 z-40 w-[160px] h-[284px] rounded-xl overflow-hidden grip-shadow-pip"
        >
          <iframe
            key={String(muted)}
            src={embedUrl}
            className="w-full h-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Grip Bond Short"
          />
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 left-2 w-7 h-7 rounded-full bg-foreground/50 flex items-center justify-center backdrop-blur-sm"
          >
            <X size={14} className="text-primary-foreground" />
          </button>
          {/* Expand button */}
          <button
            onClick={onExpand}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-foreground/50 flex items-center justify-center backdrop-blur-sm"
          >
            <Maximize2 size={14} className="text-primary-foreground" />
          </button>
          {/* Mute/Unmute button */}
          <button
            onClick={() => setMuted(!muted)}
            className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-foreground/50 flex items-center justify-center backdrop-blur-sm"
          >
            {muted ? (
              <VolumeX size={14} className="text-primary-foreground" />
            ) : (
              <Volume2 size={14} className="text-primary-foreground" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PipVideo;
