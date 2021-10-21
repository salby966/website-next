import React from 'react';
import Styles from "../styles/Content.module.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

class Content extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);
        gsap.set('.content:not(.initial)', { autoAlpha: 0 })
        var headlines = gsap.utils.toArray(".text");

        var totalDuration = 1000;
        var singleDuration = totalDuration / headlines.length;
        const lineTimeline = gsap.timeline();

        ScrollTrigger.create({    
        trigger: ".pin_up",
        start: "top top",
        end: "+=" + totalDuration,
        //markers: true,
        pin: true,
        scrub: true,
        animation: lineTimeline,
        });

        lineTimeline
        .to('.sideline', { duration: 1 }, 0)
        .to('.sideline', { duration: 0.9, scaleY: 1, ease: "none" }, 0)


        headlines.forEach((elem, i) => {    
        
        const smallTimeline = gsap.timeline(); 
        const content = document.querySelector('.content_wrap');
        const relevantContent = content.querySelector('span.content-' + i);  
            
        ScrollTrigger.create({    
            trigger: ".wrapper", 
            start: "top -=" + ( singleDuration * i ),
            end: "+=" + singleDuration,
            //markers: true,
            animation: smallTimeline,
            toggleActions: relevantContent.classList.contains('remaining') ? "play none play reverse" : "play reverse play reverse",
            
        });   

        smallTimeline 
            .to(elem,{ duration: 0.25, color: "orange", scale: 1.25, ease: 'none' }, 0) 
            .set(relevantContent,{ autoAlpha: 1 }, 0.125)
        ;
        
        });

        var showYowza = gsap.timeline()
            showYowza.to('.below span', { autoAlpha: 1, y: 0 })

        ScrollTrigger.create({    
            trigger: ".below",
            start: "top center",
            //endTrigger: ".footer",
            end: "bottom bottom",
            //scrub: 1,
            //markers: true,
            animation: showYowza,

            toggleActions: "none play none reverse"
            //toggleActions: "play reverse play reverse"
        });
        
    }

    render(){
        return(
            <div>

                <div className={Styles.wrapper}>
                <div className={Styles.pin_up}>
                
                <div className={Styles.content_wrap}>
                    <span className={Styles.content, Styles.content-0, Styles.initial}>
                        <img src="/produk1.png" alt="jjj"></img>
                    </span>
                    <span className="content content-1">
                        <img src="/produk1.png" alt="jjj"></img>
                    </span>
                    <span className="content content-2">
                        <img src="/produk1.png" alt="jjj"></img>
                    </span>
                    <span className="content content-3">
                        <img src="/produk1.png" alt="jjj"></img>
                    </span>
                    <span className={Styles.content, Styles.content-4, Styles.remaining}>
                        <img src="/produk1.png" alt="jjj"></img>
                    </span>
                </div>  
                
                    <div className={Styles.sideline}></div>
                
                <div className={Styles.text_wrap}>
                    <div className={Styles.text}>Satu</div>
                    <div className={Styles.text}>Dua</div>
                    <div className={Styles.text}>Tiga</div>
                    <div className={Styles.text}>Empat</div>
                    <div className={Styles.text}>Awesomeness</div>  
                </div>
                
                </div>
                </div> 

            </div>
        );
    }
}

export default Content;