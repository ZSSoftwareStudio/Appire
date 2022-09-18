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
export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  let textColor = useColorModeValue("black.600", "black");
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} m="30px">
        <Flex gap={"30px"}>
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
            Appire app data percentage ownership
          </Text>
          <Text color={textColor} fontSize={"16px"} fontWeight="700">
            AdMob app data
          </Text>
          <Text color={textColor} fontSize={"16px"} fontWeight="700">
            income impressions
          </Text>
        </Flex>
        {/* <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={FaWallet} color={brandColor} />}
            />
          }
          name="Your balance"
          value="$1,000"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Total Revenue Earned"
          value="$600"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={SiGoogleads} color={brandColor} />
              }
            />
          }
          name="Ad Amount Spend"
          value="$10"
        />

        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name="Total App publish"
          value="654"
        />
      </SimpleGrid> */}
      </Box>
    </>
  );
}
