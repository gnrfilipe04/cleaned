'use client'

import { RegisterClient } from '@/components/Forms/Client/RegisterClient'
import { SideBar } from '@/components/SideBar'
import { TopBar } from '@/components/TopBar'
import { Box, HStack, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box flex={3} flexDir={'column'}>
      <TopBar />
      <HStack>
        <SideBar />
        <Box flex={1} bg={'brand.gray200'} p={10} m={5} borderRadius={4}>
          <RegisterClient />
        </Box>
      </HStack>
    
    </Box>
  )
}
