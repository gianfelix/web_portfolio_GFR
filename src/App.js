import {
  Box,
  CSSReset,
  ChakraProvider,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import WebGIS from "./pages/WebGIS";
import WebGIS2 from "./components/WebGIS/WebGIS2";
import Experience from "./pages/Experience";
import CertificatesAwards from "./pages/CertificatesAwards";
import { Projects } from "./pages/Projects";
import LandingGeolocation from "./pages/LandingGeolocation";

const theme = extendTheme({
  // Atur tema Chakra UI sesuai preferensi Anda
  colors: {
    brand: {
      50: "#E5F6FF",
      100: "#B3E0FF",
      200: "#80C9FF",
      300: "#4DABFF",
      400: "#1A94FF",
      500: "#0077E6",
      600: "#005BB4",
      700: "#004382",
      800: "#002751",
      900: "#000B21",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Poppins, sans-serif",
  },
  components: {
    // Sesuaikan komponen dengan gaya Anda di sini
  },
});

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Box mb={"72px"}>
          <Navbar />
        </Box>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/webgis" element={<WebGIS />} />
          <Route path="/webgis-2" element={<WebGIS2 />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<CertificatesAwards />} />

          <Route path="/location" element={<LandingGeolocation />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
