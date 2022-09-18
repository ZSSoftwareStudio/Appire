import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/user/wallet/components/WalletData";
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";

export default function Overview(props) {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props;
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Banner />
      </Grid>
    </Box>
  );
}
