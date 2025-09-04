import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";   // ✅ penting
import "slick-carousel/slick/slick-theme.css"; // ✅ penting
import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Flex,
  IconButton,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Example Data
const projectsData = [
  {
      title: "Analisis Sistem Informasi Asset Potensial (ASIAP) Website",
      imageSrc: "asiap_kpi.png",
      description:
        "The Analisis Sistem Informasi Asset Potensial (ASIAP) Website is a web-based application developed to support the management, mapping, and analysis of potential company assets. It provides an interactive dashboard, data visualization, and digital maps to help users monitor, evaluate, and make strategic decisions regarding asset management.",
      demoLink: "https://asset-management-kpi.netlify.app/",
      githubLink:
        "https://github.com/gianfelix/asiap-KPI-project",
    },
    {
      title: "WebGIS - SINTARA HALTENG KAB",
      imageSrc: "sintara_LP.png",
      description:
        "SINTARA is a digital map-based Central Halmahera Regency Infrastructure and Spatial Information System. SINTARA is built based on participatory principles in mutual cooperation in the implementation and supervision of orderly development in Central Halmahera Regency.",
      demoLink: "https://sintara.haltengkab.go.id/peta",
      githubLink:
        "https://github.com/SinauGIS/halmahera-tengah-2023",
    },
    {
      title: "SIPANDU Merapi Apps",
      imageSrc: "sipandu_merapi.png",
      description:
        "SIPANDU Merapi stands out by providing detailed evacuation route information, facilitating efficient communication among stakeholders in disaster management. Through digital technology, the application enhances preparedness, response, and recovery efforts in Sleman Regency, particularly addressing challenges posed by the Merapi volcano.",
      demoLink: "https://sipandu.sinaugis.com/",
      githubLink:
        "https://github.com/SinauGIS/android-sipandu-merapi",
    },
    {
      title: "Blogging Website - Earth Wall",
      imageSrc: "blogging.jpg",
      description:
        "Blogging website called Earth Wall is a blog for sharing knowledge, articles, and opinions with anyone about everything that exists on our earth. Through this blog you can read, write, and expand your world for everyone. This project is part of a mini project organized by Bootcamp Purwadhika.",
      demoLink: "https://earthwall.netlify.app/",
      githubLink:
        "https://github.com/gianfelix/Front-End_JCWD_Purwadhika/tree/mini-project",
    },
    {
      title: "Cashier Application - Cashien App",
      imageSrc: "cashierapp1.jpg",
      description:
        "Cashien App is a cashier app designed specifically for use in restaurants. The app presents a complete list of food products offered by the restaurant. The main purpose of this app is to simplify the transaction process for cashiers and help admins or restaurant owners manage their products. With an intuitive interface, Cashien App allows cashiers to easily perform sales transactions, while admins can manage product inventory more efficiently.",
      demoLink: "https://example.com/Cashien",
      githubLink: "https://github.com/gifariarsal/group1",
    },
    {
      title:
        "Prediction and Simulation of Land Use and Land Cover Changes Using Open Source QGIS. A Case Study of Purwokerto, Central Java, Indonesia",
      imageSrc: "journal1.jpg",
      description:
        "The research entitled 'Prediction and Simulation of Land Use and Land Cover Changes Using Open Source QGIS. A Case Study of Purwokerto, Central Java, Indonesia' is a project on mapping land cover changes and predicting them in the future. This mapping uses the MOLUSCE plugin available in QGIS software. The mapping results show a fairly good accuracy, with a land change prediction accuracy of 75.26%.",
      demoLink: "https://journal.ugm.ac.id/ijg/article/view/68702",
      githubLink:
        "https://github.com/gianfelix/mypublication/blob/main/Gian%20Felix%20R_Prediction%20and%20Simulation%20of%20Land%20Use%20and%20Land%20Cover%20Changes%20Using%20Open%20Source%20QGIS.%20A%20Case%20Study%20of%20Purwokerto%2C%20Central%20Java%2C%20Indonesia.pdf",
    },
    {
      title:
        "Analysis Spatial Pattern of Urban Growth Using Remote Sensing Data: A Study in Purwokerto, Central Java, Indonesia",
      imageSrc: "journal2.jpg",
      description:
        "Research on mapping the urban growth of the city in the study area of Purwokerto City. This research uses maximum likelihood classification to classify the existing land cover. The classification results during 2008, 2013 and 2018 can be analyzed to determine the direction of urban growth that occurs by making quadrant directions.",
      demoLink:
        "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12082/2616207/Analysis-spatial-pattern-of-urban-growth-using-remote-sensing-data/10.1117/12.2616207.short",
      githubLink:
        "https://github.com/gianfelix/mypublication/blob/main/ProceedingsofSPIE_Analysis%20Spatial%20Pattern%20of%20Urban%20Growth%20Using%20Remote%20Sensing%20Data%20a%20Study%20in%20Purwokerto%2C%20Central%20Java%2C%20Indonesia.pdf",
    },
    {
      title:
        "Attendance App",
      imageSrc: "attendance-app.jpg",
      description:
        "(For demo, u can use email: 123456@email.com and password: Qwe123#). An attendance app is an application designed to record the clock in and clock out times of employees in a company. This application is used for both morning shift and night shift employees. The app enables a company to efficiently and accurately track employee attendance and manage attendance data. This project is part of a mini project organized by Bootcamp Purwadhika." ,
      demoLink:
        "https://attendance-app-felix.netlify.app/",
      githubLink:
        "https://github.com/gianfelix/select_test_pwd_FE",
    },
    {
      title:
        "Analysis of Affordability of Health Facilities using Network Analysis Modeling in Yogyakarta City",
      imageSrc: "journal3.jpg",
      description:
        "High population density in Yogyakarta City must be balanced with infrastructure services including affordability to health facilities. The aim of this research is to (1) model the level of affordability of health facilities based on radius and travel time using network analysis, and (2) determine the percentage of reachability of health facilities for each village in Yogyakarta City. The method used is network analysis and data overlay with tiered quantitative weighting.",
      demoLink:
        "https://www.researchgate.net/publication/351312864_ANALISIS_KETERJANGKAUAN_FASILITAS_KESEHATAN_MENGGUNAKAN_PEMODELAN_NETWORK_ANALYSIS_DI_KOTA_YOGYAKARTA",
      githubLink:
        "https://github.com/gianfelix/mypublication/blob/main/Analysis%20of%20Affordability%20of%20Health%20Facilities%20using%20Network%20Analysis%20Modeling%20in%20Yogyakarta_Gian%20Felix%20Ramadan.pdf",
    },
    {
      title:
        "Analysis of Urban Comfort Level in Java Island Based on Air Temperatur and Air Quality in 2015 – 2019",
      imageSrc: "journal4.jpg",
      description:
        "The island of Java as the center of activity in Indonesia is experiencing uncontrolled urbanization and industrialization. Urbanization and industrialization are sources of air pollution and increases in air temperature, which can increase the risk of health problems for humans and reduce the comfort level of the city. This study focuses on assessing the comfort level of cities in Java based on the relationship between temperature and air quality human health levels in 2015 to 2019, in 10 cities, namely Jakarta, Bandung, Surabaya, Semarang, Tasikmalaya, Malang, Surakarta, Yogyakarta, Cilegon, and Tegal. ",
      demoLink:
        "https://ejournal.upi.edu/index.php/gea/article/view/44462",
      githubLink:
        "https://github.com/gianfelix/mypublication/blob/main/Analysis%20of%20Urban%20Comfort%20Level%20in%20Java%20Island%20Based%20on%20Air%20Temperatur%20and%20Air%20Quality%20in%202015%20%E2%80%93%202019_Gian%20Felix%20R.pdf",
    },
    {
      title:
        "Geolocation Landing Page",
      imageSrc: "geolocation-lp.jpg",
      description:
        "Geolocation Landing Page is a Landing Page based on the user's origin location using GPS and taking user location data. This landing page is built using HTML, CSS, Chakra UI, React JS, and Javascript. Users will be directed to the Shop Landing Page in D. I. Yogyakarta or the Store Landing Page in East Java if they are in that location. If you are not in these two locations, an unreachable area will appear.",
      demoLink:
        "https://geolocation-landing.netlify.app/",
      githubLink:
        "https://github.com/gianfelix/geolocation_landingpage",
    },
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <IconButton
    aria-label="Previous"
    icon={<FaArrowLeft />}
    position="absolute"
    top="50%"
    left="10px"
    transform="translateY(-50%)"
    zIndex="2"
    onClick={onClick}
    bg="blue.500"
    color="white"
    _hover={{ bg: "blue.700" }}
    borderRadius="full"
    size="md"
  />
);

const NextArrow = ({ onClick }) => (
  <IconButton
    aria-label="Next"
    icon={<FaArrowRight />}
    position="absolute"
    top="50%"
    right="10px"
    transform="translateY(-50%)"
    zIndex="2"
    onClick={onClick}
    bg="blue.500"
    color="white"
    _hover={{ bg: "blue.700" }}
    borderRadius="full"
    size="md"
  />
);

const ProjectsCarousel = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const [expanded, setExpanded] = useState({});

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box py={20} px={8} bgGradient={isDarkMode 
    ? "linear(to-b, gray.900, gray.800, gray.700)" 
    : "linear(to-b, white, blue.200)"}>
      <Heading
        fontSize="4xl"
        mb={10}
        textAlign="center"
        color={isDarkMode ? "white" : "gray.800"}
      >
        Projects
      </Heading>

      <Box position="relative">
        <Slider {...sliderSettings}>
          {projectsData.map((project, index) => (
            <Box key={index} px={4}>
              <Flex
                direction="column"
                bg={isDarkMode ? "gray.800" : "white"}
                borderRadius="2xl"
                shadow="lg"
                overflow="hidden"
                minH="480px"
                _hover={{ transform: "translateY(-6px)", shadow: "xl" }}
                transition="all 0.3s ease"
              >
                {/* Image */}
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  h="200px"
                  w="100%"
                  objectFit="cover"
                />

                {/* Content */}
                <Box flex="1" p={6}>
                  <Heading
                    fontSize="xl"
                    mb={3}
                    color={isDarkMode ? "blue.300" : "blue.700"}
                  >
                    {project.title}
                  </Heading>

                  <Text fontSize="sm" textAlign="justify" mb={3}>
                    {expanded[index]
                      ? project.description
                      : project.description.length > 180
                      ? project.description.slice(0, 180) + "..."
                      : project.description}
                  </Text>

                  <Button
                    size="sm"
                    variant="ghost"
                    color={isDarkMode ? "blue.200" : "blue.600"}
                    onClick={() =>
                      setExpanded((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                  >
                    {expanded[index] ? "Show Less" : "Read More"}
                  </Button>
                </Box>

                {/* Footer */}
                <Flex
                  justify="space-between"
                  px={6}
                  py={4}
                  borderTop="1px solid"
                  borderColor={isDarkMode ? "gray.600" : "gray.300"}
                >
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="blue.400"
                  >
                    Demo
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="blue.400"
                  >
                    GitHub
                  </Link>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProjectsCarousel;
