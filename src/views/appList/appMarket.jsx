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
export default function AppMarket() {
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
        </SimpleGrid>
      </Box>
    </>
  );
}
