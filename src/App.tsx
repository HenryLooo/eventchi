import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.tsx";
import Landing from "./Pages/Landing.tsx";
import CreateAccount from "./Pages/CreateAccount.tsx";
import Footer from "./Components/Footer.tsx";
import Rankings from "./Pages/Rankings.tsx";
import ConnectWallet from "./Pages/ConnectWallet.tsx";
import MarketPlace from "./Pages/MarketPlace.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#2B2B2B] min-h-screen text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
