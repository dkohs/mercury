import Slider from "react-slick";
import slide1 from "../assets/img/slide1.png";
import slide2 from "../assets/img/slide2.webp";
import slide3 from "../assets/img/slide3.png";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      mb={"45px"}
    >
      <Box sx={{ width: "100%" }}>
        <Slider {...settings}>
          <Box
            sx={{
              backgroundImage: `url(${slide1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "750px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                zIndex: 1,
              }}
            ></Box>
            <Box
              sx={{
                color: "#ffffff",
                fontWeight: "700",
                fontFamily: "Poppins",
                fontSize: "36px",
                width: "600px",
                position: "relative", // Change to relative
                margin: "275px auto",
                zIndex: 2, // Ensure this is above the overlay
                textAlign: "center", // Center the text horizontally
              }}
            >
              {`Prometheus: Igniting the Future of Heart Health with AI Precision`}
            </Box>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${slide2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "750px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                zIndex: 1,
              }}
            ></Box>
            <Box
              sx={{
                color: "#ffffff",
                fontWeight: "700",
                fontFamily: "Poppins",
                fontSize: "36px",
                width: "600px",
                position: "relative", // Change to relative
                margin: "275px auto",
                zIndex: 2, // Ensure this is above the overlay
                textAlign: "center", // Center the text horizontally
              }}
            >
              {`Thousands of variables compared for an accurate result.`}
            </Box>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${slide3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "750px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                zIndex: 1,
              }}
            ></Box>
            <Box
              sx={{
                color: "#ffffff",
                fontWeight: "700",
                fontFamily: "Poppins",
                fontSize: "36px",
                width: "600px",
                position: "relative", // Change to relative
                margin: "275px auto",
                zIndex: 2, // Ensure this is above the overlay
                textAlign: "center", // Center the text horizontally
              }}
            >
              {`Insight and advice to help change your cardiovascular health for the better.`}
            </Box>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};
