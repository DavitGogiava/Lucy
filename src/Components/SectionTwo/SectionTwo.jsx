import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import "./SectionTwo.css"

import Posters from "../../Assets/Posters.png"
import DrawLine from '../DrawLine/DrawLine';

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "3.png",
  "4.png",
  "6.png",
  "2.png",
  "4.png",
  "1.png",
]


const SectionTwo = () => {



  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
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

        <img src={Posters} alt="" />
      </div>

      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>


        <div ref={gallery} className="gallery">
          <Column images={[images[0], images[1], images[2], images[1]]} y={y}/>
          <Column images={[images[3], images[4], images[5], images[2]]} y={y2}/>
          <Column images={[images[6], images[7], images[8], images[3]]} y={y3}/>
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
              src={`/images/${src}`}
              alt='image'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))
      }
    </motion.div>
  );
};



export default SectionTwo