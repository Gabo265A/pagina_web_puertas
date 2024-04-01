import React from 'react'
import { Box, Text, Flex, Icon } from '@chakra-ui/react'
import { IoMdHome } from "react-icons/io";
import { FaBagShopping, FaPeopleGroup } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';

const MenuNavigation = ({ ShowTitle, closeDrawerMenu }) => {
    const changeStyles = ShowTitle
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
                        <Link to='/' onClick={closeDrawerMenu}><Icon as={IoMdHome} ml="0.5em" mr="0.5em" mt={changeStyles ? "0.3em" : "0.4em"} boxSize={changeStyles ? "1.1em" : "1.3em"} /></Link>
                        <Link to='/' onClick={closeDrawerMenu}><Text fontSize={changeStyles ? "xl" : "2xl"}>Inicio</Text></Link>
                    </Flex>
                    <Flex alignItems="center" pb="0.5em" sx={styleMenuItem}>
                        <Link to='/catalogo' onClick={closeDrawerMenu}><Icon as={FaBagShopping} ml="0.5em" mr="0.5em" mt={changeStyles ? "0.3em" : "0.4em"} boxSize={changeStyles ? "1.1em" : "1.3em"} /></Link>
                        <Link to='/catalogo' onClick={closeDrawerMenu}><Text fontSize={changeStyles ? "xl" : "2xl"}>Catálogo</Text></Link>
                    </Flex>
                    <Flex alignItems="center" pb="0.5em" sx={styleMenuItem}>
                        <Link to='/contacto' onClick={closeDrawerMenu}><Icon as={GrContact} ml="0.5em" mr="0.5em" mt={changeStyles ? "0.3em" : "0.4em"} boxSize={changeStyles ? "1.1em" : "1.3em"} /></Link>
                        <Link to='/contacto' onClick={closeDrawerMenu}><Text fontSize={changeStyles ? "xl" : "2xl"}>Contacto</Text></Link>
                    </Flex>
                    <Flex alignItems="center" pb="0.5em" sx={styleMenuItem}>
                        <Link to='/sobre-nosotros' onClick={closeDrawerMenu}><Icon as={FaPeopleGroup} ml="0.5em" mr="0.5em" mt={changeStyles ? "0.3em" : "0.4em"} boxSize={changeStyles ? "1.1em" : "1.3em"} /></Link>
                        <Link to='/sobre-nosotros' onClick={closeDrawerMenu}><Text fontSize={changeStyles ? "xl" : "2xl"}>Nosotros</Text></Link>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default MenuNavigation
