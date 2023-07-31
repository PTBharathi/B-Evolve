import React from "react";
import { Carousel } from 'react-carousel-minimal';
import './ContentStyle.css'
import Image1 from "../../Image/Home/Image1.jpg"
import Image2 from "../../Image/Home/Image2.jpg"
import Image3 from "../../Image/Home/Image3.jpg"
import Image4 from "../../Image/Home/Image4.jpg"
import Image5 from "../../Image/Home/Image5.jpg"

function ContentFirst() {
 const data = [
    {
      image: Image1,
      caption: "Educe Child"
    },
    {
      image: Image2,
      caption: "Study"
    },
    {
      image: Image3,
      caption: "Thinking"
    },
    {
      image: Image4,
      caption: "Learning"
    },
    {
      image: Image5,
      caption: "College"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="ContentFirst">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            // time={1000}
            width="2000px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "2000px",
              maxHeight: "500px",
              position: "relative",
              margin: "40px auto",
              fontSize:"40px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentFirst;