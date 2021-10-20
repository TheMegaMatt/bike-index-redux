import * as React from 'react';

import {Heading, Flex} from "@chakra-ui/react";
import {ColorModeSwitcher} from "./ColorModeSwitcher";

type Props = {};

export const NavBar = (props: Props) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={3}
            bg="teal.700"
            color="white"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Berlin Stolen Bikes
                </Heading>
            </Flex>
            <ColorModeSwitcher justifySelf="flex-end"/>
        </Flex>
    );
};

export default NavBar;