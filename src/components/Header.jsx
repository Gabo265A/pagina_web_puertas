import React, { useState } from 'react'
import {
    useMediaQuery,
    useColorMode,
    Flex,
    Grid,
    Image,
    Input,
    Icon,
    Button,
    InputLeftElement,
    InputGroup,
    Stack,
} from '@chakra-ui/react'
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { IoSearchSharp, IoMoon, IoMenu } from "react-icons/io5";
import Logo from "../images/logo.png"
import NombreNegocioDark from "../images/nombre-negocio-dark.png"
import NombreNegocioLight from "../images/nombre-negocio-light.png"
import DrawerMenu from './DrawerMenu';

const Header = () => {
    
    const [isLargerThan1256] = useMediaQuery("(min-width: 1256px)")
    const [isLargerThan860] = useMediaQuery("(min-width: 860px)")
    const [isLargerThan640] = useMediaQuery("(min-width: 640px)")
    const [isLargerThan420] = useMediaQuery("(min-width: 420px)")
    const { colorMode, toggleColorMode } = useColorMode()
    const buttonStyle = {
        borderRadius: '0.5em',
        marginLeft: 'auto',
        bg: 'green.500',
        color: 'white',
        _hover: {
            transform: "scale(1.05, 1.05)",
            bg: 'green.600'
        },
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
    const inputSearchStyle = {
        _focus: { borderColor: 'orange.600' },
        _hover: { borderColor: 'orange.500' },
    }
    return (
        <>
            <Flex
                borderBottom="1px"
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                zIndex="99999"
            >
                <Grid templateColumns={isLargerThan1256 ? "0.3fr 2fr 0.3fr 0.3fr" : isLargerThan860 ? "0.5fr 2.3fr 0.5fr" : isLargerThan640 ? "0.7fr 2.3fr 0.3fr" : isLargerThan420 ? "0.3fr 2.6fr 0.1fr 0.1fr" : "2.6fr 0.1fr 0.1fr"} gap={6} p={4} w="100%">
                    <Flex pt="0.2em" justifyContent={isLargerThan420 ? "center" : "left"} >
                        <a href="/"><Image src={Logo} alt="logo" w="30px" h="30px" cursor="pointer" /></a>
                        {(isLargerThan640 || !isLargerThan420) && <a href="/"><Image src={colorMode === 'light' ? NombreNegocioLight : NombreNegocioDark} alt="logo" cursor="pointer" /></a>}
                    </Flex>
                    {isLargerThan420 && <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <IoSearchSharp />
                            </InputLeftElement>
                            <Input placeholder="Buscar puertas..." size="md" sx={inputSearchStyle} focusBorderColor="transparent" />
                        </InputGroup>
                    </Stack>}
                    <Flex justifyContent="center" pt="0.5em">
                        {isLargerThan860 && <Icon as={FaFacebook} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.facebook.com')} />}
                        {isLargerThan860 && <Icon as={FaInstagram} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.instagram.com')} />}
                        <Icon as={FaWhatsapp} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.whatsapp.com')} display={isLargerThan1256 ? 'none' : isLargerThan860 ? 'flex' : 'none'} />
                        <Icon as={colorMode === 'light' ? IoMoon : FaSun} boxSize="1.5em" sx={socialMediaStyle} onClick={toggleColorMode} />
                    </Flex>
                    <Flex justifyContent="center" pt="0.5em" display={isLargerThan640 ? 'none' : 'flex'}>
                        <Icon as={IoMenu} boxSize="1.5em" sx={socialMediaStyle} onClick={handleToggleShowCollapse} />
                    </Flex>
                    {isLargerThan1256 && <Flex ml="none">
                        <Button variant="custom" sx={buttonStyle} leftIcon={<FaWhatsapp />} onClick={handleClickWhatsAppButton} mr="0.4em">
                            WhatsApp
                        </Button>
                    </Flex>}
                </Grid>
                {show && <DrawerMenu isOpen={show} onClose={handleToggleShowCollapse} />}
            </Flex >
        </>
    )
}

export default Header
