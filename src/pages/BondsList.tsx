import { useState } from "react";
import { ChevronLeft, Search, SlidersHorizontal, ChevronRight, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "@/components/BottomNavBar";

const categories = [
  { name: "View All", icon: "📋" },
  { name: "Start With 1k", icon: "💰" },
  { name: "Low Tenure", icon: "⏱️" },
  { name: "More Than 12%", icon: "📈" },
  { name: "Highly Rated", icon: "⭐" },
  { name: "Tax Free", icon: "🏷️" },
  { name: "T Bills/G Sec", icon: "🏛️" },
  { name: "Gold Bonds", icon: "🥇" },
];

const highReturnBonds = [
  {
    name: "Satin Fincorp",
    badge: "# New",
    rating: "A- (Low Risk)",
    yields: "12%",
    tenure: "23 Months",
    min: "₹99.1K",
    yieldVal: "12.5%",
    sellAnytime: true,
  },
  {
    name: "FL Finance",
    badge: "",
    rating: "A (Low Risk)",
    yields: "11.8%",
    tenure: "18 Months",
    min: "₹50K",
    yieldVal: "11.8%",
    sellAnytime: true,
  },
];

const under10kBonds = [
  {
    name: "Treasury Bill",
    badge: "",
    rating: "A4",
    yields: "5%",
    tenure: "56 Days",
    min: "₹99",
    yieldVal: "5%",
    issuedBy: "Issued By RBI",
  },
  {
    name: "Treasury Bill",
    badge: "",
    rating: "A4",
    yields: "5%",
    tenure: "91 Days",
    min: "₹99",
    yieldVal: "5%",
    issuedBy: "Issued By RBI",
  },
];

const allBonds = [
  {
    name: "Satin Fincorp",
    badge: "# New",
    rating: "A- (Low Risk)",
    yields: "12%",
    tenure: "23 Months",
    min: "₹99.1K",
    sellAnytime: true,
  },
  {
    name: "Government of India",
    badge: "",
    rating: "A4",
    yields: "5.15%",
    tenure: "8 Months",
    min: "₹102",
    sellAnytime: true,
    extra: "Sovereign Guarantee",
  },
  {
    name: "Indel",
    badge: "# New",
    rating: "BBB+ (Moderate Risk)",
    yields: "10.6%",
    tenure: "4 Months",
    min: "₹1.0L",
    sellAnytime: true,
  },
];

const BondsList = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Bonds");
  const tabs = ["Bonds", "SDIs", "Baskets", "FDs"];

  return (
    <div className="max-w-[430px] mx-auto relative min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background px-4 py-3 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="p-1">
            <ChevronLeft size={22} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Invest</h1>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/learn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/15 transition-colors"
          >
            <Play size={12} className="text-primary" fill="hsl(222 78% 21%)" />
            <span className="text-xs font-semibold text-primary">Learn</span>
          </a>
          <img
            src="https://ui-avatars.com/api/?name=U&background=1a2e5a&color=fff&size=36&rounded=true"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-1 px-4 pt-3 pb-2 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
              activeTab === tab
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Hero Banner */}
      <section className="mx-4 mt-4 rounded-2xl bg-card p-5 text-center">
        <p className="text-xs text-muted-foreground mb-1">Starts from 1,000</p>
        <p className="text-sm font-bold text-foreground mb-2">🏢 Muthoottu Mini</p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-xs text-muted-foreground">EARN</span>
          <span className="text-3xl font-extrabold text-primary">10.75%</span>
          <span className="text-xs text-muted-foreground">YTM</span>
        </div>
        <button className="mt-3 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold">
          Invest Now
        </button>
        <div className="flex justify-center gap-1.5 mt-3">
          <div className="w-5 h-1.5 rounded-full bg-primary" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
        </div>
      </section>

      <div className="px-4 mt-5 space-y-6">
        {/* Categories */}
        <section>
          <h3 className="font-bold text-foreground text-base mb-3">Categories</h3>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((cat) => (
              <button key={cat.name} className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-card border border-border">
                <span className="text-lg">{cat.icon}</span>
                <span className="text-[10px] text-foreground font-medium text-center leading-tight">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* High Return Bonds */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-foreground text-base">High Return Bonds</h3>
            <button className="text-xs text-accent font-semibold flex items-center gap-0.5">
              View All <ChevronRight size={12} />
            </button>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-3 w-max">
              {highReturnBonds.map((bond, i) => (
                <div key={i} className="w-[280px] grip-shadow-card rounded-xl bg-background border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {bond.badge && (
                        <span className="text-[10px] font-semibold text-accent bg-accent/10 px-1.5 py-0.5 rounded">{bond.badge}</span>
                      )}
                      <span className="font-semibold text-sm text-foreground">{bond.name}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{bond.rating}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <p className="text-base font-bold text-foreground">{bond.yields}</p>
                      <p className="text-[10px] text-muted-foreground">YTM</p>
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">{bond.tenure}</p>
                      <p className="text-[10px] text-muted-foreground">Tenure</p>
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">{bond.min}</p>
                      <p className="text-[10px] text-muted-foreground">Starts at</p>
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">{bond.yieldVal}</p>
                      <p className="text-[10px] text-muted-foreground">YTM</p>
                    </div>
                  </div>
                  {bond.sellAnytime && (
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">Sell Anytime</span>
                      <ChevronRight size={12} className="text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sell Bonds Anytime Banner */}
        <section className="rounded-2xl bg-card p-6 text-center">
          <h3 className="font-bold text-foreground text-lg mb-2">Sell Bonds Anytime</h3>
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
            Buy, Hold, or Sell
          </div>
        </section>

        {/* Under 10k Bonds */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-foreground text-base">Under 10k Bonds</h3>
            <button className="text-xs text-accent font-semibold flex items-center gap-0.5">
              View All <ChevronRight size={12} />
            </button>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-3 w-max">
              {under10kBonds.map((bond, i) => (
                <div key={i} className="w-[280px] grip-shadow-card rounded-xl bg-background border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🏛️</span>
                      <span className="font-semibold text-sm text-foreground">{bond.name}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{bond.rating}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <p className="text-base font-bold text-foreground">{bond.yields}</p>
                      <p className="text-[10px] text-muted-foreground">YTM</p>
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">{bond.tenure}</p>
                      <p className="text-[10px] text-muted-foreground">Tenure</p>
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">{bond.min}</p>
                      <p className="text-[10px] text-muted-foreground">Starts at</p>
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">{bond.yieldVal}</p>
                      <p className="text-[10px] text-muted-foreground">YTM</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">{bond.issuedBy}</span>
                    <ChevronRight size={12} className="text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tax-Free Bonds Banner */}
        <section className="rounded-2xl bg-card p-5">
          <h3 className="font-bold text-foreground text-base">Tax-Free Bonds</h3>
          <p className="text-xs text-muted-foreground mt-1">Earn returns with zero tax impact</p>
          <button className="mt-2 text-sm text-accent font-semibold flex items-center gap-1">
            Invest Now <ChevronRight size={14} />
          </button>
        </section>

        {/* ₹3,000 Cr+ */}
        <section className="text-center py-6 border-y border-border">
          <p className="text-2xl font-extrabold text-foreground">₹ 3,000 Cr +</p>
          <p className="text-xs text-muted-foreground mt-1">Investments Enabled</p>
        </section>

        {/* All Bonds */}
        <section>
          <h3 className="font-bold text-foreground text-base mb-3">All Bonds</h3>
          <div className="space-y-3">
            {allBonds.map((bond, i) => (
              <div key={i} className="grip-shadow-card rounded-xl bg-background border border-border p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {bond.badge && (
                      <span className="text-[10px] font-semibold text-accent bg-accent/10 px-1.5 py-0.5 rounded">{bond.badge}</span>
                    )}
                    <span className="font-semibold text-sm text-foreground">{bond.name}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{bond.rating}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-base font-bold text-foreground">{bond.yields}</p>
                    <p className="text-[10px] text-muted-foreground">YTM</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">{bond.tenure}</p>
                    <p className="text-[10px] text-muted-foreground">Tenure</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">{bond.min}</p>
                    <p className="text-[10px] text-muted-foreground">Starts at</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {bond.extra ? bond.extra : "Sell Anytime"}
                  </span>
                  <ChevronRight size={12} className="text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button className="text-sm text-accent font-semibold flex items-center gap-1 border border-accent px-4 py-2 rounded-full">
              View All <ArrowRight size={14} />
            </button>
          </div>
        </section>

        {/* Why Invest */}
        <section className="py-6">
          <h3 className="font-bold text-foreground text-base mb-3">Why Invest in Bonds?</h3>
          <div className="rounded-xl bg-primary p-4">
            <p className="text-sm text-primary-foreground">
              You are just one step away from your investment
            </p>
            <button className="mt-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
              Resume KYC
            </button>
          </div>
        </section>
      </div>

      <BottomNavBar activeTab="invest" onTabChange={(tab) => { if (tab === "discover") navigate("/"); if (tab === "learn") navigate("/learn"); }} />
    </div>
  );
};

export default BondsList;
