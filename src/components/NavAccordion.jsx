import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function NavAccordion({ title, content }) {
  // console.log()
  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem className="border-none">
          <h2 className="text-white">
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {title || ""}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textColor={"white"} className="bg-slate-500">
            {content || ""}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default NavAccordion;
