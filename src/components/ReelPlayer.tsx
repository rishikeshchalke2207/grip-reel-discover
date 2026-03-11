import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ChevronLeft } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

const videoTitles = [
  { id: "bE4YW71-u5k", title: "TDS on Bonds in Budget 2026 — New Rule Explained" },
  { id: "xoQp_3tYPgA", title: "What Are Securitised Debt Instruments?" },
  { id: "jeYubCCwy0o", title: "New Tax Benefits on Sovereign Gold Bonds" },
  { id: "6QGB42_xaZs", title: "Are Liquid Funds Better Than FDs?" },
];

interface ReelPlayerProps {
  onClose: () => void;
}

const ReelPlayer = ({ onClose }: ReelPlayerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [direction, setDirection] = useState(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

  const currentVideo = videoTitles[currentIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(true);
      const hideTimer = setTimeout(() => setShowSwipeHint(false), 2500);
      return () => clearTimeout(hideTimer);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToVideo = useCallback(
    (dir: number) => {
      const nextIndex = currentIndex + dir;
      if (nextIndex < 0) return;
      if (nextIndex >= videoTitles.length) {
        setReachedEnd(true);
        setTimeout(() => setReachedEnd(false), 2500);
        return;
      }
      setDirection(dir);
      setCurrentIndex(nextIndex);
      setShowSwipeHint(false);
    },
    [currentIndex]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const deltaTime = Date.now() - touchStartTime.current;
    // Require minimum 50px swipe or fast flick
    if (Math.abs(deltaY) > 50 || (Math.abs(deltaY) > 20 && deltaTime < 300)) {
      if (deltaY < 0) goToVideo(1);   // swipe up → next
      else goToVideo(-1);              // swipe down → prev
    }
  };

  // Also support mouse drag for desktop
  const mouseStartY = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartY.current = e.clientY;
    isDragging.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const deltaY = e.clientY - mouseStartY.current;
    if (Math.abs(deltaY) > 50) {
      if (deltaY < 0) goToVideo(1);
      else goToVideo(-1);
    }
  };

  const embedUrl = `https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${currentVideo.id}&controls=0&rel=0&modestbranding=1&playsinline=1`;

  const variants = {
    enter: (dir: number) => ({ y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (dir: number) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ backgroundColor: "#000" }}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 pt-[env(safe-area-inset-top,12px)] py-3">
        <button onClick={onClose} className="p-1">
          <ChevronLeft size={24} style={{ color: "#fff" }} />
        </button>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
            <span className="text-xs" style={{ color: "#fff" }}>हि</span>
            <span className="text-xs" style={{ color: "#fff" }}>|</span>
            <span className="text-xs font-medium" style={{ color: "#fff" }}>En</span>
          </div>
          <span className="text-lg font-bold tracking-wider" style={{ color: "rgba(255,255,255,0.6)" }}>
            GR<span style={{ color: "hsl(160 100% 39%)" }}>i</span>P
          </span>
        </div>
      </div>

      {/* Video area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={currentVideo.title}
            />
          </motion.div>
        </AnimatePresence>

        {/* Transparent touch overlay to capture swipes over iframe */}
        <div
          className="absolute inset-0 z-10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />

        {/* Swipe hint overlay */}
        <AnimatePresence>
          {showSwipeHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-4xl mb-3"
              >
                👆
              </motion.div>
              <p className="text-lg font-medium" style={{ color: "#fff" }}>Swipe to view Next</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reached end overlay */}
        <AnimatePresence>
          {reachedEnd && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <p className="text-sm px-4 py-2 rounded-full" style={{ color: "#fff", backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                You've reached the end
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="relative z-20 px-4 pb-2" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
        {/* Progress bar */}
        <div className="w-full h-1 rounded-full mb-3" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: "hsl(160 100% 39%)", width: `${((currentIndex + 1) / videoTitles.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
          <div
            className="w-3 h-3 rounded-full -mt-2 relative"
            style={{
              backgroundColor: "hsl(160 100% 39%)",
              marginLeft: `calc(${((currentIndex + 1) / videoTitles.length) * 100}% - 6px)`,
            }}
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium flex-1 mr-4 line-clamp-2" style={{ color: "#fff" }}>
            {currentVideo.title}
          </p>
          <button
            onClick={() => setMuted(!muted)}
            className="p-2 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            {muted ? (
              <VolumeX size={18} style={{ color: "#fff" }} />
            ) : (
              <Volume2 size={18} style={{ color: "#fff" }} />
            )}
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNavBar activeTab="learn" onTabChange={(tab) => { if (tab !== "learn") onClose(); }} dark />
    </motion.div>
  );
};

export default ReelPlayer;
