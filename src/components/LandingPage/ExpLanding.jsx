import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Spinner,
  useColorMode,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const ExpLanding = () => {
  const { colorMode } = useColorMode();
  const isDarkmode = colorMode === "dark";

  // Replace this state with your actual state logic for under maintenance
  const isUnderMaintenance = false; // Set to false since you have provided experience entries

  if (isUnderMaintenance) {
    return (
      <>
        <Flex justify="center" align="center" minH="80vh">
          <Text mr={5} fontSize="xl">
            Experiences Page is Under Maintenance
          </Text>
          <Spinner thickness="4px" size="xl" color="brand.500" />
        </Flex>
      </>
    );
  }

  return (
    <Box p={4} bg={isDarkmode ? "gray.800" : "white"} align={"center"}>
      <Box maxW={"90%"} align={"left"}>
        <Flex direction="column" align="center" mt={8}>
          <Heading size="xl" mb={10} color={isDarkmode ? "white" : "black"}>
            Experience
          </Heading>

          <Stack spacing={8}>
            {/* Experience Entry 1 */}
            <Box
              p={4}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2022
              </Text>
              <Heading size="lg">
                Konsultan Perorangan, Kantor Wilayah BPN Kalimantan Timur
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Memfasilitasi Pelaksanaan Reforma Agraria Tingkat Provinsi.
                </ListItem>
                <ListItem>
                  Mengoordinasikan Penyediaan data pertanahan TORA dalam rangka
                  Penataan Aset Provinsi Kalimantan Timur.
                </ListItem>
                <ListItem>
                  Bertanggung jawab dalam pengolahan data spasial pertanahan
                  berbasis GIS. Menyusun model
                </ListItem>
                <ListItem>
                  spasial pertanahan berbasis Reforma Agraria dan GIS.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 2 */}
            <Box
              p={4}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2021
              </Text>
              <Heading size="lg">
                Operator Drone, Enumerator Fakultas Kehutanan Universitas Gadjah
                Mada
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Pelaksana Monitoring Kawasan Rehabilitasi Mangrove di
                  Kepulauan Riau berbasis Pemetaan Aerial menggunakan drone
                  multirotor.
                </ListItem>
                <ListItem>
                  Pengolah data photo geotagging hasil survei menggunakan
                  software ArcGIS.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 3 */}
            <Box
              p={4}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2021
              </Text>
              <Heading size="lg">
                Asisten Trainer Drone Mapping, Konsultan SinauGIS
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Membantu trainer utama dalam transfer materi dan praktek
                  penggunaan Mission Planner, Drone multirotor, dan Agisoft
                  tingkat mahasiswa dan pekerja.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 4 */}
            <Box
              p={4}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2021
              </Text>
              <Heading size="lg">Operator SIG, Konsultan SinauGIS</Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Bertanggungjawab dalam ekstraksi fitur geografi dari citra
                  penginderaan jauh dalam penyusunan Peta Rencana Tataguna Lahan
                  Desa Banjarasri, Kabupaten Kulonprogo, D. I. Y.
                </ListItem>
                <ListItem>
                  Implementasi pemetaan partisipatif kepada pemerintah Desa
                  Banjarasri dalam penyusunan Peta Rencana Tataguna Lahan.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 5 */}
            <Box
              p={4}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2020 - 2021
              </Text>
              <Heading size="lg">
                Asisten Peneliti, Master Program IPB University
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Membuat model perubahan penutup lahan dan penggunaan lahan
                  berbasis klasifikasi digital dengan algoritma maximum
                  likelihood.
                </ListItem>
                <ListItem>
                  Menguji akurasi model pemetaan penutup lahan dan penggunaan
                  lahan multi-temporal.
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default ExpLanding;
