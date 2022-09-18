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

export default function Banner(props) {
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
  return (
    <Card mb={{ base: "30px" }}>
      <Flex flexDirection="column" alignItems="center">
        <Box
          bg={`url(${banner})`}
          bgSize="cover"
          borderRadius="16px"
          h="131px"
          w="100%"
        />
        <Avatar
          mx="auto"
          src={avatar}
          h="87px"
          w="87px"
          mt="-43px"
          border="4px solid"
          borderColor={borderColor}
        />
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="xl"
          mt="10px"
        >
          {name}
        </Text>
        <Text color={textColorSecondary} fontSize="sm">
          {job}
        </Text>
      </Flex>

      <Box mt={10}>
        <form>
          <Box>
            <Text fontSize="md" fontWeight="bold" mb="10px">
              Name
            </Text>
            <InputGroup w={{ base: "100%", md: "80%" }} {...rest}>
              <Input
                variant="email"
                fontSize="sm"
                bg={background ? background : inputBg}
                color={inputText}
                fontWeight="500"
                _placeholder={{ color: "gray.400", fontSize: "14px" }}
                placeholder={placeholder ? placeholder : "Enter name"}
              />
            </InputGroup>
          </Box>
          <Box>
            <Text fontSize="md" fontWeight="bold" mb="10px" mt="20px">
              Email
            </Text>
            <InputGroup w={{ base: "100%", md: "80%" }} {...rest}>
              <Input
                variant="email"
                fontSize="sm"
                bg={background ? background : inputBg}
                color={inputText}
                fontWeight="500"
                _placeholder={{ color: "gray.400", fontSize: "14px" }}
                placeholder={placeholder ? placeholder : "Enter email"}
              />
            </InputGroup>
          </Box>
          <Box>
            <Text fontSize="md" fontWeight="bold" mb="10px" mt="20px">
              Password
            </Text>
            <InputGroup w={{ base: "100%", md: "80%" }} {...rest}>
              <Input
                variant="email"
                fontSize="sm"
                bg={background ? background : inputBg}
                color={inputText}
                fontWeight="500"
                _placeholder={{ color: "gray.400", fontSize: "14px" }}
                placeholder={placeholder ? placeholder : "Enter password"}
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
