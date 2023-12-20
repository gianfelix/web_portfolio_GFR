import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spinner,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";

export const Projects = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const [showFullDescription, setShowFullDescription] = useState([]);

  const isUnderMaintenance = false;
  if (isUnderMaintenance) {
    return (
      <>
        <Flex justify="center" align="center" minH="80vh">
          <Text mr={5} fontSize="xl">
            Projects Page is Under Maintenance
          </Text>
          <Spinner thickness="4px" size="xl" color="brand.500" />
        </Flex>
      </>
    );
  }

  const projectsData = [
    {
      title: "Blogging Website - Earh Wall",
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
    // Add more projects as needed
  ];

  return (
    <Box p={8} bg={isDarkMode ? "gray.800" : "white"}>
      <Heading fontSize="4xl" mb={4} textAlign="center"
      _hover={{
        transform: " scale(1.1)",
      }}
      transition={"all 0.3s ease"}
      >
        Projects
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 4 }}
        spacing={6}
        justifyItems="center"
      >
        {projectsData.map((project, index) => (
          <Box
            key={index}
            bg={isDarkMode ? "blue.700" : "blue.100"}
            borderRadius="3xl"
            boxShadow="md"
            p={6}
            _hover={{
              borderWidth: "2px",
              borderColor: isDarkMode ? "blue.200" : "blue.600",
              bg: isDarkMode ? "blue.800" : "blue.200",
              color: isDarkMode ? "blue.200" : "blue.800",
            }}
          >
            <Box align={"center"}>
              <Image
                src={project.imageSrc}
                alt={`Project ${index + 1}`}
                objectFit="cover"
                borderRadius="3xl"
                mb={4}
                maxH={"250px"}
                
              />
            </Box>
            <Heading
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="bold"
              mb={2}
            >
              {project.title}
            </Heading>
            <Text fontSize={{ base: "smaller", md: "sm" }} textAlign="justify">
              {showFullDescription[index]
                ? project.description
                : project.description.slice(0, 210) + "..."}
            </Text>
            {!showFullDescription[index] && (
              <Link
                display="block"
                fontSize={{ base: "smaller", md: "md" }}
                color={isDarkMode ? "blue.300" : "blue.600"}
                fontWeight="semibold"
                onClick={() => {
                  setShowFullDescription((prevState) => {
                    const newState = [...prevState];
                    newState[index] = true;
                    return newState;
                  });
                }}
              >
                Read More
              </Link>
            )}
            <Flex justifyContent="space-between" mt={2}>
              <Link
                href={project.demoLink}
                color={isDarkMode ? "blue.300" : "blue.600"}
                fontWeight="extrabold"
                fontSize={{ base: "sm", md: "md" }}
              >
                Demo / View details
              </Link>
              <Link
                href={project.githubLink}
                color={isDarkMode ? "blue.300" : "blue.600"}
                fontWeight="extrabold"
                fontSize={{ base: "sm", md: "md" }}
              >
                GitHub
              </Link>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
