import React, {useRef, useEffect} from 'react'
import { useScroll } from 'framer-motion';


import {isMobile} from "react-device-detect"


const DrawLine = () => {

    const container = useRef();
    const path = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['center end', 'end end']
    });
    const pathId =  "m.5,0c1.4,10.2,7.5,47.1,29.1,53.6,4.1,1.2,11.4,2.2,44.4-14.3,40.9-20.4,45-29.5,56.2-27.6,23.7,4.1,20.1,48.1,47,68.4,40.7,30.7,111.1-8.1,124.6-15.8,10.5-6.1,45.2-26,41.4-41.9-3.8-15.6-44.6-25.9-57.7-12.3-18.3,19,10.6,91.9,40.9,94.5,24.6,2.1,30.4-43.9,85.3-72,15.4-7.9,51.5-26.4,76.6-9.7,24.9,16.6,21,59.7,19.4,76.6-4.3,46.6-32,114.4-78.1,121-32.8,4.7-73.7-21.7-95-41.9-14.3-13.5-23.1-27.4-40.9-29.1-14.9-1.4-33.1,6.2-37.8,19.4-6.6,18.5,13.8,46.4,34.2,49,22.2,2.8,30.9-25.7,82.7-57.2,25.7-15.6,38.5-23.4,51.6-19.4,30.2,9.1,24.1,66,55.1,78.1,17.4,6.8,38.4-3.5,56.2-16.3"
    const viewBoxId = "0 0 535.9 222.3"
    useEffect(() => {
      scrollYProgress.on("change", e => {
        const totalLength = path.current.getTotalLength();
        const drawnLength = totalLength * e;
        path.current.style.strokeDasharray = `${drawnLength} ${totalLength}`;
      });
    }, [scrollYProgress]);

    

    return (
        <div  
        ref={container}
        style={{
          position: "absolute",
          zIndex: "10",
          right: "0",
          width: "100vw",
          height: "100vh",
          overflow: "hidden"
        }}
        >
            <svg 
              viewBox={viewBoxId}
              style={{
                width: "104vw",
                height: "100vh",
                overflow: "visible",
                left: "-10px"
              }}
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={"#de6161"} />
                  <stop offset="100%" stopColor={"#2657eb"} />
                </linearGradient>
              </defs>
              <path
                  ref={path}
                  fill="none"
                  d={pathId}
                  style={{
                    stroke: "url(#gradient)",
                    strokeWidth: isMobile ? 12 : 6,
                    strokeDasharray: "0 100%",
                    transition: "stroke-dasharray 0.5s ease"
              }}
              />
          </svg>
        </div>
    )
}

export default DrawLine