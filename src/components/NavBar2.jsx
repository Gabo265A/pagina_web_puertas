import React, { useState } from 'react'
import {
    useMediaQuery,
    useColorMode,
    Flex,
    Grid,
    Image,
    Text,
    Input,
    Icon,
    Button,
    InputLeftElement,
    InputGroup,
    Stack
} from '@chakra-ui/react'
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { IoSearchSharp, IoMoon, IoClose, IoMenu } from "react-icons/io5";
import Logo from "../images/logo2.png"

const NavBar2 = () => {
    const [isLargerThan1256] = useMediaQuery("(min-width: 1256px)")
    const [isLargerThan860] = useMediaQuery("(min-width: 860px)")
    const [isLargerThan640] = useMediaQuery("(min-width: 640px)")
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
    const [show, setShow] = useState(false)
    const handleToggleShowCollapse = () => setShow(!show);
    return (
        <>
            <Flex
                borderBottom="1px"
                borderColor="gray.200"
                zIndex="99999"
            >
                <Grid templateColumns={isLargerThan1256 ? "0.3fr 2fr 0.4fr 0.3fr" : isLargerThan860 ? "0.5fr 2.3fr 0.5fr" : isLargerThan640 ? "0.3fr 2.5fr 0.3fr" : "0.3fr 2.6fr 0.1fr 0.1fr"} gap={6} p={4} w="100%">
                    <Flex pt="0.2em" justifyContent="center" >
                        <a href="/"><Image src={Logo} alt="logo" w="30px" h="30px" cursor="pointer" /></a>
                        {isLargerThan860&& <a href="/"><Text fontSize="xl" fontWeight="bold" ml="0.2em" cursor="pointer">Puertas</Text></a>}
                    </Flex>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <IoSearchSharp />
                            </InputLeftElement>
                            <Input placeholder="Buscar" size="md" />
                        </InputGroup>
                    </Stack>
                    <Flex justifyContent="center" pt="0.5em">
                        {isLargerThan860 && <Icon as={FaFacebook} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.facebook.com')} />}
                        {isLargerThan860 && <Icon as={FaInstagram} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.instagram.com')} />}
                        {isLargerThan860 && <Icon as={FaWhatsapp} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.whatsapp.com')} />}
                        <Icon as={colorMode === 'light' ? IoMoon : FaSun} boxSize="1.5em" sx={socialMediaStyle} onClick={toggleColorMode} title={colorMode === 'light' ? 'Dark' : 'Light'} />
                    </Flex>
                    {!isLargerThan640 && <Flex justifyContent="center" pt="0.5em">
                     <Icon as={show ? IoClose : IoMenu} boxSize="1.5em" onClick={handleToggleShowCollapse} />
                    </Flex>}
                    {isLargerThan1256 && <Flex ml="none">
                        <Button variant="custom" sx={buttonStyle} leftIcon={<FaWhatsapp />} onClick={handleClickWhatsAppButton} mr="0.4em">
                            WhatsApp
                        </Button>
                    </Flex>}
                </Grid>
            </Flex >
        </>
    )
}

export default NavBar2
