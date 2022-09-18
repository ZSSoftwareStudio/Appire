// Chakra imports
import {
  Avatar,
  Box,
  Text,
  useColorModeValue,
  Button,
  Input,
  InputGroup,
  Flex,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";

export default function WalletData(props) {
  const { banner, avatar, name, job, background, placeholder, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const textColor = useColorModeValue("navy.700", "white");
  return (
    <Card mb={{ base: "30px" }}>
      <Box>
        <form>
          <Box>
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="left"
              w="100%"
              pb="20px"
              mb="10px"
              boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Total Money:
              </Text>
              <Text color={textColor} fontSize="xl" fontWeight="600" ml="10px">
                1,000
              </Text>
              {/* <Button variant="action">See all</Button> */}
            </Flex>
            <Text fontSize="md" fontWeight="bold" mb="10px">
              Deposit Amount
            </Text>
            <InputGroup w={{ base: "100%", md: "80%" }} {...rest}>
              <Input
                type="number"
                fontSize="sm"
                bg={background ? background : inputBg}
                color={inputText}
                fontWeight="500"
                _placeholder={{ color: "gray.400", fontSize: "14px" }}
                placeholder={placeholder ? placeholder : "Enter amount"}
              />
            </InputGroup>
          </Box>

          <Button
            mt={6}
            mb={10}
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
            px={8}
            borderRadius={10}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Card>
  );
}
