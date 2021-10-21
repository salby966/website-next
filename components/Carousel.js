import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import CardCarousel from "./CardCarousel";


export default function Carousel(){
   return (
        <div className="container mx-auto px-10 2xl:px-0">
            <SectionTitle>Testimonial</SectionTitle>
            <SectionParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </SectionParagraph>
            <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <CardCarousel 
                             image="/profile.png"
                             title="Noteworthy technology"
                             caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <CardCarousel 
                             image="/profile.png"
                             title="Noteworthy technology"
                             caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <CardCarousel 
                             image="/profile.png"
                             title="Noteworthy technology"
                             caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        />
                    </div>
            </div>
        </div>
    );
}