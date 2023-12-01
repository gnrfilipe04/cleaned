import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { IoHomeOutline  } from 'react-icons/io5'

export function SideBar (){
    return (
        <VStack w={'12rem'} h={'100vh'} bg={'brand.gray200'}>
            <Link as={NextLink} href='/home' _hover={{ textDecor: 'none', color: 'gray.700' }}>
                <HStack alignItems={'center'}>
                    <Icon as={IoHomeOutline} />
                    <Text>Home</Text>
                </HStack>
            </Link>
        </VStack>
    )
}