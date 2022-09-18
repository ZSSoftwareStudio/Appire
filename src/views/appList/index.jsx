import {
  Avatar,
  Box,
  Flex,
  Image,
  Icon,
  //   Link,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// Assets
import NewIcon from "./../../assets/img/icon_new.svg";
import { SiGoogleads } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
// Custom components
import React from "react";
import { MdAttachMoney, MdBarChart, MdFileCopy } from "react-icons/md";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import LayoutNew from "../../layouts/userAppList/index";
export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("background:#fff", "padding:15px");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  let textColor = useColorModeValue("black.400", "white");
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} m={"20px"}>
        <Flex gap={"20px"}>
          <Link to="/user/app-details">
            <Flex
              direction="column"
              gap={"5px"}
              // bg={"white"}
              p="15px"
              // borderRadius={"15px"}
            >
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Image
                    size="150px"
                    objectFit="cover"
                    src={NewIcon}
                    alt="Dan Abramov"
                  />
                }
              />
              <Text
                color={textColor}
                fontSize={{ base: "md", xl: "sm", "3xl": "md" }}
                fontWeight="700"
              >
                Swirlion
              </Text>
            </Flex>
          </Link>
          <Link to="/user/app-details">
            <Flex
              direction="column"
              gap={"5px"}
              // bg={"white"}
              p="15px"
              // borderRadius={"15px"}
            >
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Image
                    size="150px"
                    objectFit="cover"
                    src={NewIcon}
                    alt="Dan Abramov"
                  />
                }
              />
              <Text
                color={textColor}
                fontSize={{ base: "md", xl: "sm", "3xl": "md" }}
                fontWeight="700"
              >
                Swirlion
              </Text>
            </Flex>
          </Link>
          <Link to="/user/app-details">
            <Flex
              direction="column"
              gap={"5px"}
              // bg={"white"}
              p="15px"
              // borderRadius={"15px"}
            >
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Image
                    size="150px"
                    objectFit="cover"
                    src={NewIcon}
                    alt="Dan Abramov"
                  />
                }
              />
              <Text
                color={textColor}
                fontSize={{ base: "md", xl: "sm", "3xl": "md" }}
                fontWeight="700"
              >
                Swirlion
              </Text>
            </Flex>
          </Link>
          <Link to="/user/app-details">
            <Flex
              direction="column"
              gap={"5px"}
              // bg={"white"}
              p="15px"
              // borderRadius={"15px"}
            >
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Image
                    size="150px"
                    objectFit="cover"
                    src={NewIcon}
                    alt="Dan Abramov"
                  />
                }
              />
              <Text
                color={textColor}
                fontSize={{ base: "md", xl: "sm", "3xl": "md" }}
                fontWeight="700"
              >
                Swirlion
              </Text>
            </Flex>
          </Link>
          <Link to="/user/app-details">
            <Flex
              direction="column"
              gap={"5px"}
              // bg={"white"}
              p="15px"
              // borderRadius={"15px"}
            >
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Image
                    size="150px"
                    objectFit="cover"
                    src={NewIcon}
                    alt="Dan Abramov"
                  />
                }
              />
              <Text
                color={textColor}
                fontSize={{ base: "md", xl: "sm", "3xl": "md" }}
                fontWeight="700"
              >
                Swirlion
              </Text>
            </Flex>
          </Link>
          <Link to="/user/app-details">
            <Flex
              direction="column"
              gap={"5px"}
              // bg={"white"}
              p="15px"
              // borderRadius={"15px"}
            >
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Image
                    size="150px"
                    objectFit="cover"
                    src={NewIcon}
                    alt="Dan Abramov"
                  />
                }
              />
              <Text
                color={textColor}
                fontSize={{ base: "md", xl: "sm", "3xl": "md" }}
                fontWeight="700"
              >
                Swirlion
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
