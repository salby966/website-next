import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProdukSection from "../components/ProdukSection";
import BlogSection from "../components/BlogSection";
import TestimoniSection from "../components/TestimoniSection";
import KeunggulanSection from "../components/KeunggulanSection";
import Video from "../components/Video";
import Carousel from "../components/carousel";
import Slider from "../components/Slider";
import Content from "../components/Content";
import BreakSection from "../components/BreakSection";

export default function Home() {
    return (
        <>
            <Hero />
            <ProdukSection />
            <Slider />
            <Content />
            <BlogSection />
            <Video />
            <BreakSection />
            <TestimoniSection />
            <Footer />
        </>
    )
}
