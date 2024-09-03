import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import "./SectionTwo.css"
import { isMobile } from 'react-device-detect';

import DrawLine from '../DrawLine/DrawLine';

import img1 from "../../Assets/Images/1z.webp"
import img2 from "../../Assets/Images/2z.webp"
import img3 from "../../Assets/Images/3z.webp"
import img4 from "../../Assets/Images/4z.webp"
import img5 from "../../Assets/Images/5z.webp"
import img6 from "../../Assets/Images/6z.webp"


const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img3,
  img4,
  img6,
  img2,
  img4,
  img1,
]


const SectionTwo = () => {



  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;

  const var1 = isMobile ? 0.5 : 3.3
  const var2 = isMobile ? 0.9 : 2

  const y = useTransform(scrollYProgress, [0, 1], [0, height * var1])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * var2])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])

  useEffect( () => {


    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])



  return (
    <div className="section-two-wrapper">
      <div className="posters-header">
        
        <DrawLine />

        <h1>POSTERS</h1>
      </div>

      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>


        <div ref={gallery} className="gallery" id="posters">
          {isMobile ? 
          <>
            <Column images={[images[0], images[1], images[2], images[3], images[4]]} y={y}/>
            <Column images={[images[6], images[7], images[8], images[0], images[2]]} y={y2}/>
          </> 
          :
          <>
            <Column images={[images[0], images[1], images[2], images[1]]} y={y}/>
            <Column images={[images[3], images[4], images[5], images[2]]} y={y2}/>
            <Column images={[images[6], images[7], images[8], images[3]]} y={y3}/>
          </>}
        </div>
    </div>
  )
}



const Column = ({ images, y }) => {
  return (
    <motion.div 
      className="column"
      style={{ y }}
    >
      {
        images.map((src, i) => (
          <div key={i} className="imageContainer">
            <img
              src={`${src}`}
              alt='cont'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))
      }
    </motion.div>
  );
};



export default SectionTwo