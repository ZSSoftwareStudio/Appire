import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Text,
  Image,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from "@chakra-ui/react";
// Assets
//   import Usa from "assets/img/dashboards/usa.png";
import { SiGoogleads } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import NewIcon from "./../../assets/img/icon_new.svg";
// Custom components
import React from "react";
import { MdAttachMoney, MdBarChart, MdFileCopy } from "react-icons/md";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import LayoutNew from "../../layouts/userAppList/index";
import avatar from "assets/img/avatars/avatar4.png";
export default function LeaderBoard() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  let textColor = useColorModeValue("black.600", "black");
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} m="30px">
        <SimpleGrid
          columns={{ base: 1, md: 1 }}
          gap="20px"
          mb="20px"
          p="20px"
          background={"white"}
          borderRadius={"15px"}
        >
          <Table variant="simple" color="gray.500" mb="24px">
            <Thead>
              <Tr>
                <Th pe="10px" borderColor={borderColor}>
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    App Empires
                  </Flex>
                </Th>
                <Th pe="10px" borderColor={borderColor}>
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    Earnings
                  </Flex>
                </Th>
                <Th pe="10px" borderColor={borderColor}>
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    Apps
                  </Flex>
                </Th>
                <Th pe="10px" borderColor={borderColor}>
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    Downloads
                  </Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                  fontSize={{ sm: "14px" }}
                  maxH="30px !important"
                  py="8px"
                  minW={{ sm: "150px", md: "200px", lg: "auto" }}
                  borderColor="transparent"
                >
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Text color={textColor} fontSize={"16px"} fontWeight="700">
                      1.
                    </Text>

                    <Avatar
                      src={avatar}
                      h="40px"
                      w="40px"
                      border="4px solid"
                      borderColor={borderColor}
                    />
                    <Text color={textColor} fontSize={"16px"} fontWeight="700">
                      Hyperion
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Text color={textColor} fontSize={"16px"} fontWeight="700">
                    $29,845,126
                  </Text>
                </Td>
                <Td>
                  <Text color={textColor} fontSize={"16px"} fontWeight="700">
                    72
                  </Text>
                </Td>
                <Td>
                  <Text color={textColor} fontSize={"16px"} fontWeight="700">
                    1,128,764,512
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          {/* <Flex gap={"10px"} alignItems={"center"}>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              1.
            </Text>
            <Avatar
              src={avatar}
              h="60px"
              w="60px"
              border="4px solid"
              borderColor={borderColor}
            />
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              Hamburgia
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              income, ads spend, %ownership/$price
            </Text>
          </Flex>
          <Flex gap={"10px"} alignItems={"center"}>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              1.
            </Text>
            <Avatar
              src={avatar}
              h="60px"
              w="60px"
              border="4px solid"
              borderColor={borderColor}
            />
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              Hamburgia
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              income, ads spend, %ownership/$price
            </Text>
          </Flex>
          <Flex gap={"10px"} alignItems={"center"}>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              1.
            </Text>
            <Avatar
              src={avatar}
              h="60px"
              w="60px"
              border="4px solid"
              borderColor={borderColor}
            />
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              Hamburgia
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              income, ads spend, %ownership/$price
            </Text>
          </Flex> */}
        </SimpleGrid>
      </Box>
    </>
  );
}
