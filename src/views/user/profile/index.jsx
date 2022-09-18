import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/user/profile/components/Banner";
// import General from "views/user/profile/components/General";
// import Notifications from "views/user/profile/components/Notifications";
// import Projects from "views/user/profile/components/Projects";
// import Storage from "views/user/profile/components/Storage";
// import Upload from "views/user/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Banner
          gridArea="1 / 1 / 2 / 2"
          banner={banner}
          avatar={avatar}
          name="Adela Parkson"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
      </Grid>
    </Box>
  );
}
