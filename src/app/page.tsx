import HomePage from "./(routes)/home/page";
import Features from "./components/Features";
import Banner from "./components/banner";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <HomePage />
      <Features />
      <Banner />
      <Subscribe />
      <Footer />
    </>
  );
}
