import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/lib/i18n";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import Prywatnosc from "./pages/Prywatnosc";
import HaleMagazynowe from "./pages/services/HaleMagazynowe";
import HaleProdukcyjne from "./pages/services/HaleProdukcyjne";
import HaleRolnicze from "./pages/services/HaleRolnicze";
import WiatyStalowe from "./pages/services/WiatyStalowe";
import Chlodnie from "./pages/services/Chlodnie";
import Carporty from "./pages/services/Carporty";
import Dokumentacja from "./pages/services/Dokumentacja";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LangProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hale-magazynowe" element={<HaleMagazynowe />} />
            <Route path="/hale-produkcyjne" element={<HaleProdukcyjne />} />
            <Route path="/hale-rolnicze" element={<HaleRolnicze />} />
            <Route path="/wiaty-stalowe" element={<WiatyStalowe />} />
            <Route path="/chlodnie" element={<Chlodnie />} />
            <Route path="/carporty" element={<Carporty />} />
            <Route path="/dokumentacja" element={<Dokumentacja />} />
            <Route path="/dziekujemy" element={<ThankYou />} />
            <Route path="/prywatnosc" element={<Prywatnosc />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LangProvider>
  </QueryClientProvider>
);

export default App;
