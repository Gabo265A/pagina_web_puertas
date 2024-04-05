import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'

const ProductsCard = ({ key, imageUrl, name, description, price }) => {

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={imageUrl}
                    alt='Puerta color marrón'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' textAlign='center'>{name}</Heading>
                    <Text textAlign='center'>{description}</Text>
                    <Text color='blue.600' fontSize='2xl' textAlign='end'>{price}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent='end'>
                <ButtonGroup>
                    <Button variant='solid' colorScheme='blue' >
                        Más información
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default ProductsCard
