import React from 'react'
import { Box, Text, Flex, Icon } from '@chakra-ui/react'
import { IoMdHome } from "react-icons/io";
import { FaBagShopping, FaPeopleGroup } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

const MenuNavigation = ({ ShowTitle }) => {
    const styleMenuItem = {
        cursor: "pointer",
        _hover: { color: 'orange.500' },
        _active: { color: 'orange.600' },
    }
    return (
        <>
            <Box pl="0.5em">
                {ShowTitle && <Flex justifyContent="center" mb="1em" mt="0.5em">
                    <Text as='b' fontSize='3xl'>Menú</Text>
                </Flex>}
                <Flex direction="column">
                    <Flex alignItems="center" pb="0.5em" sx={styleMenuItem}>
                        <a href='/'><Icon as={IoMdHome} ml="0.5em" mr="0.5em" mt={ShowTitle ? "0.3em" : "0.4em"} boxSize={ShowTitle ? "1.1em" : "1.3em"} /></a>
                        <a href='/'><Text fontSize={ShowTitle ? "xl" : "2xl"}>Inicio</Text></a>
                    </Flex>
                    <Flex alignItems="center" pb="0.5em" sx={styleMenuItem}>
                        <a href='/catalogo'><Icon as={FaBagShopping} ml="0.5em" mr="0.5em" mt={ShowTitle ? "0.3em" : "0.4em"} boxSize={ShowTitle ? "1.1em" : "1.3em"} /></a>
                        <a href='/catalogo'><Text fontSize={ShowTitle ? "xl" : "2xl"}>Catálogo</Text></a>
                    </Flex>
                    <Flex alignItems="center" pb="0.5em" sx={styleMenuItem}>
                        <a href='/contacto'><Icon as={GrContact} ml="0.5em" mr="0.5em" mt={ShowTitle ? "0.3em" : "0.4em"} boxSize={ShowTitle ? "1.1em" : "1.3em"} /></a>
                        <a href='/contacto'><Text fontSize={ShowTitle ? "xl" : "2xl"}>Contacto</Text></a>
                    </Flex>
                    <Flex alignItems="center" pb="0.5em" sx={styleMenuItem}>
                        <a href='/sobre-nosotros'><Icon as={FaPeopleGroup} ml="0.5em" mr="0.5em" mt={ShowTitle ? "0.3em" : "0.4em"} boxSize={ShowTitle ? "1.1em" : "1.3em"} /></a>
                        <a href='/sobre-nosotros'><Text fontSize={ShowTitle ? "xl" : "2xl"}>Nosotros</Text></a>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default MenuNavigation
