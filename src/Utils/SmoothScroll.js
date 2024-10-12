import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // Configuration options
        const options = {
            duration: 1.3, // Duration in seconds
            easing: t => t * (2 - t), // Easing function (ease-in-out example)
            // You can define more options here if needed
        };

        const lenis = new Lenis(options);

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Clean up on component unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return children;
}

export default SmoothScroll;
