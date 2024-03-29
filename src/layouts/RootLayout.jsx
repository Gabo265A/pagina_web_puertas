import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import MenuNavigation from "../components/MenuNavigation"
import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react"

const RootLayout = () => {
  const [isLargerThan640] = useMediaQuery("(min-width: 640px)")
  return (
    <div>
      <>
        <Grid
          templateAreas={isLargerThan640 ? `"header header"
                  "nav main"
                  "nav footer"` : `"header header"
                  "main main"
                  "footer footer"`}
          gridTemplateColumns={isLargerThan640 ? '170px 1fr' : '1fr'}
          gridTemplateRows={'auto 1fr auto'}
          gap='1'
        >
          <GridItem pl='2' area={'header'}>
            <Header />
          </GridItem>
          <GridItem pl='2' area={'nav'} display={isLargerThan640 ? 'flex' : 'none'}>
            <MenuNavigation ShowTitle={true} />
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
