import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { PRIVACY, TERMS } from "./content/legal";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DemoPage } from "./pages/DemoPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductPage } from "./pages/ProductPage";

/**
 * Every page on the site and its address.
 * To add a page: create it in src/pages/, add a <Route> line here, then link to it from
 * NAV_LINKS or FOOTER_COLUMNS in src/content/site.ts.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faqs" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="demo" element={<DemoPage />} />
        <Route path="privacy" element={<LegalPage doc={PRIVACY} />} />
        <Route path="terms" element={<LegalPage doc={TERMS} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
