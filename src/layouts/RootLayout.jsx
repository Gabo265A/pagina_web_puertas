import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import MenuNavigation from "../components/MenuNavigation"
import { Grid, GridItem } from "@chakra-ui/react"

const RootLayout = () => {
  return (
    <div>
      <>
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateColumns={'150px 1fr'}
          h='200px'
          gap='1'
        >
          <GridItem pl='2' area={'header'}>
            <NavBar />
          </GridItem>
          <GridItem pl='2' area={'nav'}>
            <MenuNavigation />
          </GridItem>
          <GridItem pl='2' area={'main'}>
            <Outlet />
          </GridItem>
          <GridItem pl='2' area={'footer'}>
            Footer
          </GridItem>
        </Grid>



      </>
    </div>
  )
}

export default RootLayout
