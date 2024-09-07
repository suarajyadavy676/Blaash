import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const btnRef = React.useRef()
  return (
    <div>
      <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
       <RxHamburgerMenu className='text-white text-2xl' />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'#27272F'}>
          <DrawerCloseButton className='text-white' />
          <DrawerHeader>
            <img src="logo.png" alt="logo" className='w-32 z-40' />
          </DrawerHeader>

          <DrawerBody>
            <h1>hello</h1>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default NavDrawer
