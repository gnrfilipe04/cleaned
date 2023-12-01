import { SearchIcon } from "@chakra-ui/icons";
import { HStack, Heading, InputGroup, InputLeftElement, Input, Button, Avatar, Highlight, Text } from "@chakra-ui/react";

export function TopBar() {
    return (
        <HStack
            height={'6rem'}
            background={'brand.gray200'}
            px={8}
            justifyContent={'space-between'}
        >
            <HStack spacing={10} flex={2}>
                <Heading color={'brand.gray800'}>
                    <Highlight query={'Ease'} styles={{ color: 'teal.500'}}>
                        CleanEase
                    </Highlight>
                </Heading>
                <InputGroup mr={10}>
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'

                    >
                        <SearchIcon />
                    </InputLeftElement>
                    <Input
                        bg={'white'}
                        placeholder='Buscar seus serviços...'
                        focusBorderColor="teal.500"
                    />
                </InputGroup>
            </HStack>

            <HStack spacing={5}>
                <Button
                    colorScheme="teal"
                >
                    Novo Serviço
                </Button>
                <Avatar size='sm' bg={'gray.500'} />
            </HStack>

        </HStack>
    )
}