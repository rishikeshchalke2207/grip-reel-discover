import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Bell, ChevronRight, Shield, ArrowRight, Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNavBar from "./BottomNavBar";
import PipVideo from "./PipVideo";
import sebiBadge from "@/assets/sebi-badge.png";
import kycFaceScan from "@/assets/kyc-face-scan.png";
import rmAnanya from "@/assets/rm-ananya.png";
import profileAvatar from "@/assets/profile-avatar.png";
import { bondVideos } from "@/data/bondVideos";

interface DiscoverPageProps {
  onOpenReel: () => void;
}

const investmentOptions = [
  { name: "Bonds", desc: "Sell Anytime", emoji: "📊" },
  { name: "Baskets", desc: "Theme Based", emoji: "🧺" },
  { name: "SDIs", desc: "Collateral Backed", emoji: "🔒" },
  { name: "Fixed Deposits", desc: "Upto 8.7%", emoji: "🏦" },
];

const shortColors = [
  "from-grip-teal/20 to-grip-teal/5",
  "from-grip-navy/10 to-grip-navy/5",
  "from-grip-yellow/20 to-grip-yellow/5",
  "from-grip-teal/10 to-grip-navy/5",
  "from-grip-yellow/10 to-grip-teal/5",
];

const DiscoverPage = ({ onOpenReel }: DiscoverPageProps) => {
  return (
    <div className="relative min-h-screen pb-20 bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu size={22} className="text-foreground" />
          <h1 className="text-xl font-bold tracking-wide text-primary">
            GR<span className="text-grip-teal">i</span>P
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/learn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/15 transition-colors"
          >
            <Play size={12} className="text-primary" fill="hsl(222 78% 21%)" />
            <span className="text-xs font-semibold text-primary">Learn</span>
          </a>
          <Bell size={20} className="text-foreground" />
          <img
            src={profileAvatar}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border-2 border-border"
          />
        </div>
      </header>

      {/* Hero Banner */}
      <section className="mx-4 rounded-2xl bg-grip-hero-bg px-6 py-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 30% 20%, hsl(222 78% 21% / 0.05) 0%, transparent 50%)",
        }} />
        <h2 className="text-2xl font-bold text-primary mb-1">Unlock Fixed Returns</h2>
        <p className="text-sm text-muted-foreground mb-6">India's One Stop Destination for Fixed Returns</p>
        <img src={sebiBadge} alt="SEBI Registered Broker" className="w-20 h-20 mx-auto mb-6 object-contain" />
        <div className="flex items-baseline justify-center gap-2 mb-1">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Upto</span>
          <span className="text-5xl font-extrabold text-primary">12.50</span>
          <span className="text-2xl font-bold text-primary">%</span>
          <span className="text-sm text-muted-foreground uppercase tracking-wider">YTM</span>
        </div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-8 bg-border" />
          <span className="text-xs text-muted-foreground">₹3,000 CR+ INVESTMENTS ENABLED</span>
          <div className="h-px w-8 bg-border" />
        </div>
        <Button className="w-full max-w-xs mx-auto h-12 rounded-full text-base font-semibold bg-primary text-primary-foreground">
          Get Started <ArrowRight size={18} className="ml-1" />
        </Button>
        <div className="flex items-center justify-center gap-2 mt-5">
          <div className="w-6 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
        </div>
      </section>

      {/* Content sections */}
      <div className="px-4 mt-6 space-y-6">
        {/* KYC Card */}
        <div className="grip-shadow-card rounded-xl bg-background p-4 flex items-center justify-between border border-border">
          <div>
            <h3 className="font-bold text-foreground text-base">2 mins KYC</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Secured with SEBI regulation</p>
            <button className="text-grip-teal text-sm font-semibold mt-2 flex items-center gap-1">
              Start KYC <ChevronRight size={14} />
            </button>
          </div>
          <img src={kycFaceScan} alt="KYC" className="w-16 h-16 object-contain" />
        </div>

        {/* Investment Options */}
        <section>
          <h3 className="font-bold text-foreground text-lg mb-1">Investment Options on Grip</h3>
          <p className="text-xs text-muted-foreground mb-4">Fixed-return options for every goal</p>
          <div className="grid grid-cols-2 gap-3">
            {investmentOptions.map((opt) => (
              <div key={opt.name} className="grip-shadow-card rounded-xl bg-background border border-border p-4 flex flex-col">
                <span className="text-2xl mb-2">{opt.emoji}</span>
                <h4 className="font-semibold text-foreground text-sm">{opt.name}</h4>
                <p className="text-xs text-muted-foreground">{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Short Term Bonds */}
        <section>
          <h3 className="font-bold text-foreground text-lg mb-1">Explore Short Term Bonds</h3>
          <p className="text-xs text-muted-foreground mb-4">Popular among new investors</p>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-3 w-max">
              <div className="w-[300px] grip-shadow-card rounded-xl bg-background border border-border p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-destructive/10 flex items-center justify-center text-xs">🏢</div>
                    <span className="font-semibold text-sm text-foreground">Ugro Capital</span>
                  </div>
                  <span className="text-xs text-grip-teal font-medium bg-grip-teal/10 px-2 py-0.5 rounded">A+ (Low Risk)</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Yields</p>
                    <p className="text-base font-bold text-foreground">11.32%</p>
                    <p className="text-[10px] text-muted-foreground">YTM</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tenure</p>
                    <p className="text-base font-bold text-foreground">16 Months</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Min</p>
                    <p className="text-base font-bold text-foreground">₹1.5 Lakh</p>
                    <p className="text-[10px] text-muted-foreground">Starts at</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Yield</p>
                    <p className="text-base font-bold text-foreground">9.32%</p>
                    <p className="text-[10px] text-muted-foreground">YTM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">Sell Anytime</span>
                  <button className="text-xs text-grip-teal font-semibold flex items-center gap-0.5">
                    View all <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sell Bonds Anytime */}
        <section className="text-center py-6">
          <h3 className="font-bold text-foreground text-lg mb-3">Sell Bonds Anytime</h3>
          <div className="inline-flex items-center gap-2 bg-grip-teal/10 text-grip-teal px-4 py-2 rounded-full text-sm font-semibold">
            Buy, Hold, or Sell 🎯
          </div>
        </section>

        {/* Grip Trust */}
        <section className="text-center py-6 border-y border-border">
          <h3 className="font-bold text-foreground text-xl mb-4">Grip Trust</h3>
          <div className="flex justify-center gap-6 mb-4">
            <div className="flex flex-col items-center gap-1">
              <Shield size={20} className="text-grip-teal" />
              <span className="text-xs text-muted-foreground">SEBI Regulated</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-grip-teal text-lg">🔄</span>
              <span className="text-xs text-muted-foreground">Sell Anytime</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-grip-teal text-lg">✅</span>
              <span className="text-xs text-muted-foreground">Handpicked Bonds</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            👥 15 Lac+ Investor Community | ₹3,000 Cr+ Investments
          </p>
        </section>

        {/* Quickstart */}
        <section className="grip-shadow-card rounded-xl bg-background border border-border p-5">
          <h3 className="font-bold text-foreground text-lg">Quickstart Bonds Backed by Government</h3>
          <button className="text-sm text-grip-teal font-semibold mt-1 flex items-center gap-1">
            Invest Now <ChevronRight size={14} />
          </button>
          <div className="mt-3 inline-flex items-center bg-grip-teal text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
            Start with ₹100
          </div>
        </section>

        {/* Corporate FDs */}
        <section>
          <h3 className="font-bold text-foreground text-lg mb-1">High Return Corporate FDs</h3>
          <p className="text-xs text-muted-foreground mb-4">No new account and direct bank credit</p>
          <div className="grip-shadow-card rounded-xl bg-background border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-grip-yellow/20 flex items-center justify-center text-xs">🏦</div>
                <span className="font-semibold text-sm text-foreground">Suryoday</span>
              </div>
              <span className="text-xs text-grip-teal font-medium bg-grip-teal/10 px-2 py-0.5 rounded">A1+ (Very Low Risk)</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <p className="text-xs text-muted-foreground">Rate</p>
                <p className="text-base font-bold text-foreground">8%</p>
                <p className="text-[10px] text-muted-foreground">Interest Rate</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tenure</p>
                <p className="text-base font-bold text-foreground">2 Months</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Min</p>
                <p className="text-base font-bold text-foreground">₹1,000</p>
                <p className="text-[10px] text-muted-foreground">Starts at</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Yield</p>
                <p className="text-base font-bold text-foreground">9.32%</p>
                <p className="text-[10px] text-muted-foreground">Yield</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Highest Return Rates</span>
                <span className="text-xs text-grip-teal bg-grip-teal/10 px-2 py-0.5 rounded">DICGC Insured</span>
              </div>
              <ChevronRight size={14} className="text-muted-foreground" />
            </div>
          </div>
        </section>

        {/* Bond Shorts */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground text-lg">Bond Shorts</h3>
            <span className="text-lg">🔊</span>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-3 w-max">
              {bondVideos.map((video, i) => (
                <div
                  key={video.id}
                  className={`w-[140px] h-[200px] rounded-xl bg-gradient-to-b ${shortColors[i % shortColors.length]} border border-border flex items-end p-3 cursor-pointer`}
                  onClick={onOpenReel}
                >
                  <p className="text-xs font-medium text-foreground line-clamp-2">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Relationship Manager */}
        <section className="grip-shadow-card rounded-xl bg-background border border-border p-4">
          <div className="flex items-start gap-3">
            <img src={rmAnanya} alt="Ananya" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="font-bold text-foreground">Hi, I'm Ananya 👋</h3>
              <p className="text-xs text-muted-foreground mt-0.5">I'm your Relationship Manager.</p>
              <p className="text-xs text-muted-foreground">Just a tap away!</p>
              <button className="mt-3 text-sm font-semibold text-primary-foreground bg-destructive/90 px-4 py-2 rounded-full">
                Contact your RM
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center py-8">
          <p className="text-xs text-muted-foreground">Trusted by</p>
          <p className="text-xl font-bold text-foreground">15 Lakh+ Indians</p>
          <p className="text-xs text-muted-foreground mt-1">
            Made with <Heart size={10} className="inline text-destructive fill-destructive" /> by GRiP
          </p>
        </section>
      </div>


      {/* Bottom Nav */}
      <BottomNavBar activeTab="discover" onTabChange={(tab) => { if (tab === "invest") navigate("/bonds"); if (tab === "learn") navigate("/learn"); }} />
    </div>
  );
};

export default DiscoverPage;
