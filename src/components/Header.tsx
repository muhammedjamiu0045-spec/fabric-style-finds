import { CartDrawer } from "./CartDrawer";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Fabric & Style
        </Link>
        <CartDrawer />
      </div>
    </header>
  );
};
