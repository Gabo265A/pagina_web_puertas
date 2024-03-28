import { Flex, Text, Button, useMediaQuery, Collapse, Icon, Image } from '@chakra-ui/react'
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import React, { useState } from 'react'
import Logo from '../images/logo.png'

const NavBar = () => {

    const buttonStyle = {
        borderRadius: '0.5em',
        marginLeft: 'auto',
        bg: 'green.500',
        color: 'white',
        _hover: { bg: 'green.600' },
        _active: { bg: 'green.700' },
    }
    const textStyle = {
        color: 'orange.400',
        fontSize: 'md',
        fontWeight: 'bold',
        _hover: { color: 'orange.500' },
        _active: { color: 'orange.600' },
    }
    const socialMediaStyle = {
        cursor: 'pointer',
        _hover: { color: 'orange.500' },
        _active: { color: 'orange.600' },
    }
    const handleClickWhatsAppButton = () => {
        window.open('https://www.whatsapp.com')
    }
    const [isLargerThan768] = useMediaQuery("(min-width: 628px)")
    const [show, setShow] = useState(false)
    const handleToggleShowCollapse = () => setShow(!show);

    return (
        <>
            <Flex display={isLargerThan768 ? 'flex' : 'none'} zIndex="99999" alignItems="center" justifyContent="flex-start" p="1em" bg="black">
                <Text sx={textStyle} marginRight="2rem"><a href='/'>Inicio</a></Text>
                <Text sx={textStyle} marginRight="2rem"><a href='/catalogo'>Catálogo</a></Text>
                <Text sx={textStyle} marginRight="2rem"><a href='/contacto'>Contacto</a></Text>
                <Text sx={textStyle}><a href='/sobre-nosotros'>Sobre Nosotros</a></Text>
                <Button variant="custom" sx={buttonStyle} leftIcon={<FaWhatsapp />} onClick={handleClickWhatsAppButton}>
                    WhatsApp
                </Button>
            </Flex>
            <Flex display={isLargerThan768 ? 'flex' : 'none'} alignItems="center" justifyContent="flex-start" p="1em" pl="2em">
                <Icon as={FaFacebook} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.facebook.com')} />
                <Icon as={FaInstagram} boxSize="1.5em" mr="1em" sx={socialMediaStyle} onClick={() => window.open('https://www.instagram.com')} />
                <Icon as={FaWhatsapp} boxSize="1.5em" sx={socialMediaStyle} onClick={() => window.open('https://www.whatsapp.com')} />
                <Image src={Logo} alt='Logo' margin="auto" />
            </Flex>
            <Flex direction="column" display={isLargerThan768 ? 'none' : 'flex'} zIndex="99999" alignItems="left" p="1em" bg="black" textAlign="left">

                <Flex direction="row" justifyContent="space-between" >
                    <Image src={Logo} alt='Logo' />
                    <Button leftIcon={show ? <RiCloseLine /> : <RiMenu3Fill />} onClick={handleToggleShowCollapse} mt="0.3em" pr="0.5em"/>
                </Flex>
                <Collapse in={show} animateOpacity>
                    <Text sx={textStyle} mt="2em" ><a href='/'>Inicio</a></Text>
                    <Text sx={textStyle} mt="2em"><a href='/catalogo'>Catálogo</a></Text>
                    <Text sx={textStyle} mt="2em"><a href='/contacto'>Contacto</a></Text>
                    <Text sx={textStyle} mt="2em" mb="1em"><a href='/sobre-nosotros'>Sobre Nosotros</a></Text>
                </Collapse>
            </Flex>
        </>
    )
}

export default NavBar