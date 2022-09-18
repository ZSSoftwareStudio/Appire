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
export default function AppBlocks() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  let textColor = useColorModeValue("black.600", "black");
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} m="30px">
        {/* <Flex gap={"30px"}>
          <Image
            size="250px"
            objectFit="cover"
            src={NewIcon}
            alt="Dan Abramov"
          />
          <Text color={textColor} fontSize={"26px"} fontWeight="700">
            Swirlion
          </Text>
        </Flex>
        <Flex gap={"10px"} direction="column" mt="40px">
          <Text color={textColor} fontSize={"16px"} fontWeight="700">
            Appire app data percentage ownershipasads
          </Text>
          <Text color={textColor} fontSize={"16px"} fontWeight="700">
            AdMob app data
          </Text>
          <Text color={textColor} fontSize={"16px"} fontWeight="700">
            income impressions
          </Text>
        </Flex> */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
          gap="20px"
          mb="20px"
        >
          <Flex
            gap={"10px"}
            direction="column"
            mt="40px"
            background={"white"}
            p="20px"
            borderRadius={"15px"}
          >
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              AdMob home data
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              income
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              impressions
            </Text>
          </Flex>
          <Flex
            gap={"10px"}
            direction="column"
            mt="40px"
            background={"white"}
            p="20px"
            borderRadius={"15px"}
          >
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              Add marketing funds one time
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              Set reocurring marketing budget payment
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              income impressions
            </Text>
          </Flex>
          <Flex
            gap={"10px"}
            direction="column"
            mt="40px"
            background={"white"}
            p="20px"
            borderRadius={"15px"}
          >
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              top ads revenue apps
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              top ads spending apps
            </Text>
            <Text color={textColor} fontSize={"16px"} fontWeight="700">
              top profit apps
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </>
  );
}
