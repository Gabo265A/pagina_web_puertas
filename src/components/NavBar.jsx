import { Flex, Text, Button, useMediaQuery, Collapse } from '@chakra-ui/react'
import { FaWhatsapp } from "react-icons/fa6";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import React, { useState } from 'react'

const NavBar = () => {

    const buttonStyle = {
        borderRadius: '0.5em',
        marginLeft: 'auto',
        bg: 'green.500',
        color: 'white',
        _hover: { bg: 'green.600' },
        _active: { bg: 'green.700' }
    }
    const handleClickWhatsAppButton = () => {
        window.open('https://www.whatsapp.com', '_blank')
    }
    const [isLargerThan768] = useMediaQuery("(min-width: 628px)")
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show);

    return (
        <>
            <Flex display={isLargerThan768 ? 'flex' : 'none'} zIndex="99999" alignItems="center" justifyContent="flex-start" p="1em" bg="black">
                <Text color="white" fontSize="md" fontWeight="bold" marginRight="2rem"><a href='/'>Inicio</a></Text>
                <Text color="white" fontSize="md" fontWeight="bold" marginRight="2rem"><a href='/catalogo'>Catálogo</a></Text>
                <Text color="white" fontSize="md" fontWeight="bold" marginRight="2rem"><a href='/contacto'>Contacto</a></Text>
                <Text color="white" fontSize="md" fontWeight="bold"><a href='/sobre-nosotros'>Sobre Nosotros</a></Text>
                <Button variant="custom" sx={buttonStyle} leftIcon={<FaWhatsapp />} onClick={handleClickWhatsAppButton}>
                    WhatsApp
                </Button>
            </Flex>
            <Flex direction="column" display={isLargerThan768 ? 'none' : 'flex'} zIndex="99999" alignItems="left" p="1em" bg="black" textAlign="left">
                <Flex direction="row" marginLeft="auto" >
                    <Button leftIcon={show ? <RiCloseLine /> : <RiMenu3Fill />} onClick={handleToggle} />
                </Flex>
                <Collapse in={show} animateOpacity>
                    <Text color="white" fontSize="md" fontWeight="bold" mt="2em" ><a href='/'>Inicio</a></Text>
                    <Text color="white" fontSize="md" fontWeight="bold" mt="2em"><a href='/catalogo'>Catálogo</a></Text>
                    <Text color="white" fontSize="md" fontWeight="bold" mt="2em"><a href='/contacto'>Contacto</a></Text>
                    <Text color="white" fontSize="md" fontWeight="bold" mt="2em" mb="1em"><a href='/sobre-nosotros'>Sobre Nosotros</a></Text>
                </Collapse>
            </Flex>
        </>
    )
}

export default NavBar