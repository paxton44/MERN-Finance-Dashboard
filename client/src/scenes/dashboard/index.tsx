import DashboardBox from "@/components/DashboardBox";
import { Box, useMediaQuery } from "@mui/material";
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
        {/* Boxes that are each chart for dashboard using DashboardBox a component i created to handle the styling of each box in a more organized way */}
        <DashboardBox bgcolor="#fff" gridArea="a"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="d"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="e"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="f"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="g"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="h"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="i"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="j"></DashboardBox> 
      </Box>
    );
  };
  
  export default Dashboard;