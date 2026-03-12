import { Compass, LayoutGrid, Zap, BookOpen, PieChart } from "lucide-react";

interface BottomNavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  dark?: boolean;
}

const tabs = [
  { id: "discover", label: "Discover", icon: Compass },
  { id: "invest", label: "Invest", icon: LayoutGrid },
  { id: "quickstart", label: "QuickStart", icon: Zap },
  { id: "learn", label: "Learn", icon: BookOpen },
  { id: "portfolio", label: "Portfolio", icon: PieChart },
];

const BottomNavBar = ({ activeTab, onTabChange, dark = false }: BottomNavBarProps) => {
  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2 pb-[env(safe-area-inset-bottom,8px)] ${
        dark ? "bg-grip-dark-nav" : "bg-background border-t border-border"
      }`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        const isQuickstart = tab.id === "quickstart";

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center gap-0.5 min-w-[56px] py-1 transition-colors"
          >
            <div
              className={`p-1 rounded-full ${
                isQuickstart && isActive
                  ? "bg-grip-yellow"
                  : ""
              }`}
            >
              <Icon
                size={22}
                className={
                  isActive
                    ? dark
                      ? "text-grip-teal"
                      : "text-grip-navy"
                    : dark
                    ? "text-muted-foreground"
                    : "text-muted-foreground"
                }
                fill={isActive ? (dark ? "hsl(180 100% 36%)" : "hsl(222 78% 21%)") : "none"}
              />
            </div>
            <span
              className={`text-[10px] font-medium ${
                isActive
                  ? dark
                    ? "text-grip-teal"
                    : "text-grip-navy"
                  : dark
                  ? "text-muted-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
