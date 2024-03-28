import React from 'react'
import { useColorMode, Flex, Grid, Image, Text, Input, Icon, Button, InputLeftElement, InputGroup, Stack } from '@chakra-ui/react'
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { IoSearchSharp, IoMoon } from "react-icons/io5";
import Logo from "../images/logo2.png"

const NavBar2 = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const buttonStyle = {
        borderRadius: '0.5em',
        marginLeft: 'auto',
        bg: 'green.500',
        color: 'white',
        _hover: { bg: 'green.600' },
        _active: { bg: 'green.700' },
    }
    const handleClickWhatsAppButton = () => {
        window.open('https://www.whatsapp.com')
    }
    const socialMediaStyle = {
        cursor: 'pointer',
        _hover: { color: 'orange.500' },
        _active: { color: 'orange.600' },
    }
    return (
        <>
            <Flex
                borderBottom="1px"
                borderColor="gray.200"
                zIndex="99999"
            >
                <Grid templateColumns="repeat(4, 1fr)" gap={6} p={4} w="100%">
                    <Flex cursor="pointer" pt="0.2em" w="20%">
                        <Image src={Logo} alt="logo" w="30px" h="30px" />
                        <Text fontSize="xl" fontWeight="bold" ml="0.2em">Puertas</Text>
                    </Flex>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                               <IoSearchSharp />
                            </InputLeftElement>
                            <Input placeholder="Buscar" size="md" />
                        </InputGroup>
                    </Stack>
                    <Flex justifyContent="flex-end" pt="0.5em">
                        <Icon as={FaFacebook} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.facebook.com')} />
                        <Icon as={FaInstagram} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.instagram.com')} />
                        <Icon as={FaWhatsapp} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.whatsapp.com')} />
                        <Icon as={colorMode === 'light' ? IoMoon : FaSun} boxSize="1.5em" sx={socialMediaStyle} onClick={toggleColorMode} title={colorMode === 'light' ? 'Dark' : 'Light'}/>
                    </Flex>
                    <Button variant="custom" sx={buttonStyle} leftIcon={<FaWhatsapp />} onClick={handleClickWhatsAppButton}>
                        WhatsApp
                    </Button>
                </Grid>
            </Flex >
        </>
    )
}

export default NavBar2
