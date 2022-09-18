/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useEffect, useState } from "react";

// Chakra imports
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

export default function MainWebsite() {
  const [seconds, setSeconds] = useState(3);
  // Chakra Color Mode
  const textColorSecondary = "gray.600";
  const webURL = "https://appire.io";

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds((currentSeconds) => {
        if (currentSeconds > 0) return currentSeconds - 1;
        else {
          window.location = webURL;
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Text
            color={textColorSecondary}
            fontSize="3xl"
            ps={{ base: "10x", md: "10px", xl: "10px" }}
          >
            Redirecting to Appire.io
          </Text>
          <Text
            color={textColorSecondary}
            fontSize="lg"
            ps={{ base: "10x", md: "10px", xl: "10px" }}
          >
            Navigating in {seconds} seconds ...
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
}
