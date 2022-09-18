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
export default function LeaderBoard() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  let textColor = useColorModeValue("black.600", "black");
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} m="30px">
        <Flex>
          <Flex
            gap={"5px"}
            direction="column"
            mt="40px"
            background={"white"}
            p="20px"
            borderRadius={"15px"}
            height="230px"
            width="230px"
            mr="40px"
          ></Flex>
          <Flex
            gap={"5px"}
            direction="column"
            mt="40px"
            // background={"white"}
            p="20px"
            borderRadius={"15px"}
          >
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              Legal ID
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              Residence (must be able ro recieve mail)
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              password
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
