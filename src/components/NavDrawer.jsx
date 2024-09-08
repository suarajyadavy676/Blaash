import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { title } from "framer-motion/client";
import NavAccordion from "./NavAccordion";

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let accObj = [
    { title: "Shoppable Video", content: "Video Editor",id:1 },
    { title: "Story", content: "Story Editor",id:2 },
    { title: "Live Commerce", content: "Live Editor",id:3 },
    { title: "Playlist Manager", content: "Ploduct Playlist",id:4 },
    {title:"One Click Poster",content:"One Click Poster",id:5},
    {title:"Calender",content:"Calender",id:6},
    {title:"Hire Influencer",content:"Hire Influencer",id:7}
  ];

  const btnRef = React.useRef();
  return (
    <div>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        <RxHamburgerMenu className="text-white text-2xl" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#27272F"}>
          <DrawerCloseButton className="text-white" />
          <DrawerHeader>
            <img src="logo.png" alt="logo" className="w-32 z-40" />
          </DrawerHeader>

          <DrawerBody>
            <div className="text-white">
            {accObj.map((item) => (
              <NavAccordion key={item.id} {...item} />
            ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
