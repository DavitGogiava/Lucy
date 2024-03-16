import React, { useEffect, useState, useRef } from "react";
import "./SectionOne.css";
import { motion } from "framer-motion";

import Profile from "../../Assets/profile.png";
import Name from "../../Assets/Name4.webm";

const SectionOne = () => {
  const [gridCreated, setGridCreated] = useState(false);
  const [gridItems, setGridItems] = useState([]);

  const handleClick = (event) => {
    const items = document.querySelectorAll(".item");
    const clickedItem = event.target.closest(".item");
    const clickedIndex = Array.from(items).indexOf(clickedItem);

    items.forEach((item, index) => {
      const itemIndex = index % 20;
      const rowIndex = Math.floor(index / 20);
      const clickedItemIndex = clickedIndex % 20;
      const clickedItemRow = Math.floor(clickedIndex / 20);
      const horizontalDistance = Math.abs(clickedItemIndex - itemIndex);
      const verticalDistance = Math.abs(clickedItemRow - rowIndex);
      const distance = Math.max(horizontalDistance, verticalDistance);

      setTimeout(() => {
        item.classList.add("active");
        setTimeout(() => {
          item.classList.remove("active");
        }, 1000); // Remove the "active" class after 1 second
      }, distance * 20); // Apply the "active" class with a delay based on the distance
    });
  };

  useEffect(() => {
    if (!gridCreated) {
      const numColumns = 20; // Number of columns in the grid
      const numRows = 9;

      // Create an array with the item types
      const itemTypes = [
        "item--1",
        "item--2",
        "item--3",
        "item--4",
        "item--5",
        "item--6",
        "item--7",
        "item--8",
        "item--9",
        "item--10",
        "item--11",
        "item--12",
      ];

      // Fill the grid with random items
      const totalCells = numColumns * numRows;
      const gridItems = Array.from({ length: totalCells }, (_, index) => {
        const randomIndex = Math.floor(Math.random() * itemTypes.length);
        return (
          <div
            key={index}
            className={`item ${itemTypes[randomIndex]}`}
            onClick={handleClick}
          />
        );
      });

      setGridItems(gridItems);
      setGridCreated(true);
    }
  }, [gridCreated]);

  return (
    <div className="section-one-wrapper">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={Name} type="video/mp4" />
        </video>
      </div>

      <div className="small-nav">
        <div className="nav-item">Projects</div>
        <div className="nav-item">Contacts</div>
      </div>

      <div className="grid-container">
        <div className="inner-grid">{gridItems}</div>
      </div>

      <div className="profile-container">
        <img src={Profile} alt="" />
      </div>

      <div className="right">
        <motion.div 
          className="big-about-me"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2
          }}
        >
          <p>
            A Creative
          </p>
        </motion.div>

        <motion.div
          className="about-me"
          initial={{ y: 600, opacity: 0, zIndex: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1
          }}
        >
          <p>
            And passionate graphic designer with a keen eye for detail and a
            love for creating visually appealing and user-friendly designs. With
            a background in graphic design, I specialize in crafting engaging
            digital experiences that resonate with users. I believe that good
            design has the power to enhance lives and I strive to create designs
            that are not only visually stunning but also intuitive and impactful
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionOne;
