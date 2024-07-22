import Navbar from "@/components/layout/navigation/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HeroBanner from "@/components/screens/HeroBanner";
import Recomendations from "@/components/screens/Recomendation";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="h-[100dvh] w-full bg-black relative scroll-smooth">
        <Navbar />
        <div className="h-[100dvh] w-full bg-black overflow-y-auto relative">
          <HeroBanner />
          <Recomendations />
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
