import { useRef } from "react";
import "./ParralaxOne.css"

import Astro from "../../Assets/Parralax/astro.webp"
import Ring from "../../Assets/Parralax/ring.webp"
import RingF from "../../Assets/Parralax/ringF.webp"

import Statue from "../../Assets/Parralax/statue.webp"
import RingTwo from "../../Assets/Parralax/ring2.webp"
import RingFTwo from "../../Assets/Parralax/ringF2.webp"

import Woman from "../../Assets/Parralax/woman.webp"

import { motion, useScroll, useTransform } from 'framer-motion';

const ParralaxOne = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })


    const y1 = useTransform(scrollYProgress, [0, 1], [0, -550]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  


  return (
    <div className="parralax" ref={container}>
        <motion.div className="man" style={{ y: y1 }}>
            <img src={Astro} alt="" />
        </motion.div>
        <motion.div className="ring" style={{ y: y2 }}>
            <img src={Ring} alt="" />
        </motion.div>
        <motion.div className="ring-forward" style={{ y: y2 }}>
            <img src={RingF} alt="" />
        </motion.div>



        <motion.div className="statue" style={{ y: y1 }}>
            <img src={Statue} alt="" />
        </motion.div>
        <motion.div className="ring-two" style={{ y: y2 }}>
            <img src={RingTwo} alt="" />
        </motion.div>
        <motion.div className="ring-forward-two" style={{ y: y2 }}>
            <img src={RingFTwo} alt="" />
        </motion.div>




        <motion.div className="woman" style={{ y: y1 }}>
            <img src={Woman} alt="" />
        </motion.div>
        <motion.div className="ring-three" style={{ y: y2 }}>
            <img src={Ring} alt="" />
        </motion.div>
        <motion.div className="ring-forward-three" style={{ y: y2 }}>
            <img src={RingF} alt="" />
        </motion.div>



    </div>
  )
}

export default ParralaxOne