import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import DashboardBox from "@/components/DashboardBox";
// Look at gridTemplateArea docs to see how layout applies based on using letters. This is better than flexbox because its not just left -> right or top -> bottom layout
const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;
// Look at gridTemplateArea docs to see how layout applies based on using letters. Using 1fr and stacking like below you can make another layout based on screen size using a ternary operator
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;
 

const Dashboard = () => {
  // using boolean (isAboveMediumScreens) with the useMediaQuery hook to make the screen respond at 1200px or not 1200px making the layout stack into one individual column for small (mobile) screens.
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
    return (
      <Box
        width="100%"
        height="100%"
        display="grid"
        gap="1.5rem"
        sx={
          // Using ternary operator to use conditional statement to adjust box layout based screen size
          isAboveMediumScreens
          // Large Screens
            ? {
                gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                gridTemplateAreas: gridTemplateLargeScreens,
              }
          // Small Screens 
            : {
                gridAutoColumns: "1fr",
                gridAutoRows: "80px",
                gridTemplateAreas: gridTemplateSmallScreens,
              }
        }
      >
        {/* <DashboardBox gridArea="a"></DashboardBox>
        <DashboardBox gridArea="b"></DashboardBox>
        <DashboardBox gridArea="c"></DashboardBox>
        <DashboardBox gridArea="d"></DashboardBox>
        <DashboardBox gridArea="e"></DashboardBox>
        <DashboardBox gridArea="f"></DashboardBox> 
        <DashboardBox gridArea="g"></DashboardBox>
        <DashboardBox gridArea="h"></DashboardBox>
        <DashboardBox gridArea="i"></DashboardBox>
        <DashboardBox gridArea="j"></DashboardBox>     */}
        {/* Refactored and made each row its own file to keep codebase clean and organized. */}
        <Row1 />
        <Row2 />
        <Row3 />
      </Box>
    );
  };
  
  export default Dashboard;