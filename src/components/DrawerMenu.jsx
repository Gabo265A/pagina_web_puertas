import React from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useMediaQuery,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Divider,
    Flex,
    Image,
    useColorMode,
    Icon,
} from '@chakra-ui/react'
import MenuNavigation from './MenuNavigation'
import { IoSearchSharp, IoClose } from "react-icons/io5";
import Logo from "../images/logo.png"
import NombreNegocioDark from "../images/nombre-negocio-dark.png"
import NombreNegocioLight from "../images/nombre-negocio-light.png"
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";

const DrawerMenu = ({ isOpen, onClose }) => {
    const inputSearchStyle = {
        _focus: { borderColor: 'orange.600' },
        _hover: { borderColor: 'orange.500' },
    }
    const [isLargerThan420] = useMediaQuery("(min-width: 420px)")
    const DrawerCloseButtonStyle = {
        cursor: 'pointer',
        _hover: { color: 'orange.500' },
        _active: { color: 'orange.600' },
    }
    const { colorMode } = useColorMode()
    const socialMediaStyle = {
        cursor: 'pointer',
        _hover: { color: 'orange.500' },
        _active: { color: 'orange.600' },
    }
    return (
        <>
            <Drawer onClose={onClose} isOpen={isOpen} size='right'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader display="flex" justifyContent="space-between">
                        <Flex>
                            <a href="/"><Image src={Logo} alt="logo" w="30px" h="30px" cursor="pointer" /></a>
                            {isLargerThan420 && <a href="/"><Image src={colorMode === 'light' ? NombreNegocioLight : NombreNegocioDark} alt="logo" cursor="pointer" /></a>}
                        </Flex>
                        <Flex justifyContent="center" pt="0.25em">
                            <Icon as={FaFacebook} boxSize="1em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.facebook.com')} />
                            <Icon as={FaInstagram} boxSize="1em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.instagram.com')} />
                            <Icon as={FaWhatsapp} boxSize="1em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.whatsapp.com')} />
                        </Flex>
                        <Icon as={IoClose} boxSize="1.5em" sx={DrawerCloseButtonStyle} onClick={onClose} />
                    </DrawerHeader>
                    <DrawerBody>
                        <Divider orientation='horizontal' mb="1em" />
                        {!isLargerThan420 && <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <IoSearchSharp />
                                </InputLeftElement>
                                <Input placeholder="Buscar puertas..." size="md" sx={inputSearchStyle} focusBorderColor="transparent" />
                            </InputGroup>
                            <Divider orientation='horizontal' mb="1em" />
                        </Stack>}
                        <MenuNavigation ShowTitle={false} />
                        <Divider orientation='horizontal' mb="1em" />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerMenu
