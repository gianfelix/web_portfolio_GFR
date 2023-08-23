import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Divider,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";

const Experience = () => {
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
    <Box p={4} bg={isDarkmode ? "gray.800" : "white"}  boxShadow="lg">
      <Flex direction="column" align="center" mt={8}>
        <Heading size="xl" mb={10} color="brand.500">
          Experience
        </Heading>
        
        <Stack  spacing={8}>
          {/* Experience Entry 1 */}
          <Box p={4} bg={isDarkmode ? "blue.700" : "blue.100"} borderRadius="md">
            <Heading size="lg">
              Konsultan Perorangan, Kantor Wilayah BPN Kalimantan Timur
            </Heading>
            <Text fontSize="md" fontWeight="bold" color="gray.300" mt={1}>
              Position: -
            </Text>
            <Text fontSize="md" color="gray.300">
              Duration: 2022
            </Text>
            <Text>
              Memfasilitasi Pelaksanaan Reforma Agraria Tingkat Provinsi.
              Mengoordinasikan Penyediaan data pertanahan TORA dalam rangka
              Penataan Aset Provinsi Kalimantan Timur. Bertanggung jawab dalam
              pengolahan data spasial pertanahan berbasis GIS. Menyusun model
              spasial pertanahan berbasis Reforma Agraria dan GIS.
            </Text>
          </Box>
          {/* Experience Entry 2 */}
          <Box p={4} bg="gray.100" borderRadius="md">
            <Heading size="lg">
              Operator Drone, Enumerator Fakultas Kehutanan Universitas Gadjah
              Mada
            </Heading>
            <Text fontSize="md">Position: -</Text>
            <Text fontSize="md">Duration: 2021</Text>
            <Text>
              Pelaksana Monitoring Kawasan Rehabilitasi Mangrove di Kepulauan
              Riau berbasis Pemetaan Aerial menggunakan drone multirotor.
              Pengolah data photo geotagging hasil survei menggunakan software
              ArcGIS.
            </Text>
          </Box>
          {/* Experience Entry 3 */}
          <Box p={4} bg="gray.100" borderRadius="md">
            <Heading size="lg">
              Asisten Trainer Drone Mapping, Konsultan SinauGIS
            </Heading>
            <Text fontSize="md">Position: -</Text>
            <Text fontSize="md">Duration: 2021</Text>
            <Text>
              Membantu trainer utama dalam transfer materi dan praktek
              penggunaan Mission Planner, Drone multirotor, dan Agisoft tingkat
              mahasiswa dan pekerja.
            </Text>
          </Box>
          {/* Experience Entry 4 */}
          <Box p={4} bg="gray.100" borderRadius="md">
            <Heading size="lg">Operator SIG, Konsultan SinauGIS</Heading>
            <Text fontSize="md">Position: -</Text>
            <Text fontSize="md">Duration: 2021</Text>
            <Text>
              Bertanggungjawab dalam ekstraksi fitur geografi dari citra
              penginderaan jauh dalam penyusunan Peta Rencana Tataguna Lahan
              Desa Banjarasri, Kabupaten Kulonprogo, D. I. Y. Implementasi
              pemetaan partisipatif kepada pemerintah Desa Banjarasri dalam
              penyusunan Peta Rencana Tataguna Lahan.
            </Text>
          </Box>
          {/* Experience Entry 5 */}
          <Box p={4} bg="gray.100" borderRadius="md">
            <Heading size="lg">
              Asisten Peneliti, Master Program IPB University
            </Heading>
            <Text fontSize="md">Position: -</Text>
            <Text fontSize="md">Duration: 2020 - 2021</Text>
            <Text>
              Membuat model perubahan penutup lahan dan penggunaan lahan
              berbasis klasifikasi digital dengan algoritma maximum likelihood.
              Menguji akurasi model pemetaan penutup lahan dan penggunaan lahan
              multi-temporal.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Experience;
