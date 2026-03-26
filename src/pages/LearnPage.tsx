import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Bell, ChevronLeft, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "@/components/BottomNavBar";
import profileAvatar from "@/assets/profile-avatar.png";

const bond101Videos = [
  {
    id: "bE4YW71-u5k",
    title: "What are Bonds?",
    thumb: "https://img.youtube.com/vi/bE4YW71-u5k/hqdefault.jpg",
  },
  {
    id: "KORwrkI_Q2g",
    title: "Types of Bonds",
    thumb: "https://img.youtube.com/vi/KORwrkI_Q2g/hqdefault.jpg",
  },
  {
    id: "Sn4aK5InUtA",
    title: "How Do You Get Returns on Bonds?",
    thumb: "https://img.youtube.com/vi/Sn4aK5InUtA/hqdefault.jpg",
  },
  {
    id: "461wpM4l0KA",
    title: "How is Tax Calculated on Bonds?",
    thumb: "https://img.youtube.com/vi/461wpM4l0KA/hqdefault.jpg",
  },
  {
    id: "4J5unNWEp3M",
    title: "How Do You Sell Your Bonds?",
    thumb: "https://img.youtube.com/vi/4J5unNWEp3M/hqdefault.jpg",
  },
];

const advancedVideos = [
  {
    id: "bp203xW61Lw",
    title: "What is Accrued Interest?",
    thumb: "https://img.youtube.com/vi/bp203xW61Lw/hqdefault.jpg",
  },
  {
    id: "HfeANlNSwek",
    title: "Secured vs Unsecured Bonds — What Backs Your Investment?",
    thumb: "https://img.youtube.com/vi/HfeANlNSwek/hqdefault.jpg",
  },
  {
    id: "HeGHPISzVM8",
    title: "YTM vs Current Yield — Know the Difference",
    thumb: "https://img.youtube.com/vi/HeGHPISzVM8/hqdefault.jpg",
  },
  {
    id: "cq_A9-6KOA4",
    title: "Credit Rating Agencies — What They Mean for You",
    thumb: "https://img.youtube.com/vi/cq_A9-6KOA4/hqdefault.jpg",
  },
  {
    id: "O84Cs-my8U4",
    title: "What Are Zero Coupon Bonds?",
    thumb: "https://img.youtube.com/vi/O84Cs-my8U4/hqdefault.jpg",
  },
];

interface VideoItem {
  id: string;
  title: string;
  thumb: string;
}

const LearnPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"bond101" | "advanced">("bond101");
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);
  const [academyUrl, setAcademyUrl] = useState<string | null>(null);

  const videos = activeTab === "bond101" ? bond101Videos : advancedVideos;

  const handleNavChange = (tab: string) => {
    if (tab === "discover") navigate("/");
    else if (tab === "invest") navigate("/bonds");
  };

  // Full-screen single video player (reel-style, no scroll)
  if (playingVideo) {
    return (
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-[200] flex flex-col"
        style={{ backgroundColor: "#000" }}
      >
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-3 px-4 pt-[env(safe-area-inset-top,12px)] py-3">
          <button onClick={() => setPlayingVideo(null)} className="p-1">
            <ChevronLeft size={24} style={{ color: "#fff" }} />
          </button>
          <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
            Back
          </span>
        </div>
        <div className="flex-1 relative">
          <iframe
            src={`https://www.youtube.com/embed/${playingVideo.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1`}
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={playingVideo.title}
          />
        </div>
        <div className="px-4 py-4" style={{ backgroundColor: "rgba(0,0,0,0.85)" }}>
          <h2 className="text-base font-bold" style={{ color: "#fff" }}>
            {playingVideo.title}
          </h2>
        </div>
      </motion.div>
    );
  }

  // In-app webview for Academy
  if (academyUrl) {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-[200] flex flex-col bg-background"
      >
        <div className="flex items-center gap-3 px-4 pt-[env(safe-area-inset-top,12px)] py-3 border-b border-border">
          <button onClick={() => setAcademyUrl(null)} className="p-1">
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          <span className="text-sm font-semibold text-foreground">Fixed Returns Academy</span>
        </div>
        <iframe
          src={academyUrl}
          className="flex-1 w-full border-0"
          title="Fixed Returns Academy"
        />
      </motion.div>
    );
  }

  return (
    <div className="max-w-[430px] mx-auto relative min-h-screen pb-20 bg-background overflow-x-hidden">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-background px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu size={22} className="text-foreground" />
          <h1 className="text-xl font-bold text-primary">Learn</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell size={20} className="text-foreground" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-destructive" />
          </div>
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
            AJ
          </div>
        </div>
      </header>

      {/* Tab Bar */}
      <div className="px-4 border-b border-border">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab("bond101")}
            className={`pb-3 text-sm font-semibold transition-colors relative ${
              activeTab === "bond101" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Bond 101
            {activeTab === "bond101" && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-primary"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("advanced")}
            className={`pb-3 text-sm font-semibold transition-colors relative ${
              activeTab === "advanced" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Advanced
            {activeTab === "advanced" && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-primary"
              />
            )}
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "advanced" ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: activeTab === "advanced" ? -20 : 20 }}
          transition={{ duration: 0.25 }}
          className="px-4 mt-4"
        >
          <div className="grid grid-cols-2 gap-2">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setPlayingVideo(video)}
                className="relative rounded-xl overflow-hidden w-full aspect-[3/4]"
              >
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {isAdvanced && (
                  <span
                    className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#F5A623", color: "#fff" }}
                  >
                    Advanced
                  </span>
                )}
                <div className="absolute top-2 right-2 opacity-60">
                  <span className="text-[10px] font-bold tracking-wider" style={{ color: "#fff" }}>
                    GR<span style={{ color: "hsl(180 100% 36%)" }}>i</span>P
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.25)" }}>
                    <Play size={18} style={{ color: "#fff" }} fill="#fff" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-xs font-bold line-clamp-2 text-left" style={{ color: "#fff" }}>
                    {video.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 space-y-3">
            {/* Primary CTA — Explore Bonds */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "linear-gradient(135deg, hsl(220 80% 95%), hsl(220 80% 91%))",
              }}
            >
              <h4 className="font-bold text-primary text-lg">
                Ready to make your first investment?
              </h4>
              <button
                onClick={() => navigate("/bonds")}
                className="w-full mt-4 flex items-center justify-center gap-2 rounded-[10px] bg-primary text-primary-foreground font-bold text-base"
                style={{ height: 52 }}
              >
                Explore Bonds <ArrowRight size={18} />
              </button>
            </div>

            {/* Secondary CTA — Academy */}
            <div className="rounded-xl px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "hsl(var(--grip-card))" }}>
              <div>
                <p className="text-xs font-semibold text-foreground">Want to learn more?</p>
                <p className="text-[11px] text-muted-foreground">Explore our full library of education videos</p>
              </div>
              <a
                href="https://www.gripinvest.in/academy"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-semibold text-primary flex items-center gap-1"
              >
                Academy <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Nav */}
      <BottomNavBar activeTab="learn" onTabChange={handleNavChange} />
    </div>
  );
};

export default LearnPage;

