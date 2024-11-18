import { Box, Button, Container, Typography, Rating } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Circle from "@ui-kit/Circle/Circle.tsx";
import AccordionExpandDefault from "../AccordionExpandDefault/AccordionExpandDefault";
import SliderExpand from "../SliderExpand/SliderExpand";
import TabsExpand from "../TabsExpand/TabsExpand";

export default function ProductCard() {
  const styles: string[] = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"];

  return (
    <Box component="section" sx={{ backgroundColor: "#F9F9F9" }}>
      <Container
        // TODO: Use styled-components from material ui for styling
        sx={{
          maxWidth: "1920px",
          padding: { md: "20px 120px", xs: "0px" },
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            borderRadius: "10px",
            width: "100%",
            border: "1px",
            backgroundColor: "#FFFFFF",
            padding: "50px",
          }}
        >
          <Grid
            size={{ md: 7, xs: 12 }}
            sx={{ padding: "50px", order: { xs: 0, md: 0 } }}
          >
            {/* Блок с изображениями */}
            <SliderExpand />
          </Grid>
          <Grid
            size={{ md: 5, xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              order: { xs: 1, md: 1 },
            }}
          >
            {/* Контент справа */}
            <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Drop 1
              </Typography>
              <Typography
                variant="h4"
                style={{ fontWeight: "bold" }}
                color="lightGray"
              >
                (4-pack)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <Rating name="simple-controlled" defaultValue={4} />
              <Typography>10 Reviews</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                $150
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", textDecoration: "line-through" }}
                color="lightGray"
              >
                $280
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">Color</Typography>
              <Box>
                {styles.map((color, index) => (
                  <Button key={index}>
                    <Circle color={color} />
                  </Button>
                ))}
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{ backgroundColor: "lightgray", marginRight: "20px" }}
              >
                Add to wishlist
              </Button>
              <Button variant="contained">Add to cart</Button>
            </Box>
            <Box>
              <Typography>Product description</Typography>
              <Typography>BlaBlaBlaBlaBlaBlaBlaBla</Typography>
            </Box>
            <AccordionExpandDefault />
          </Grid>
        </Grid>
        <TabsExpand />
      </Container>
    </Box>
  );
}
