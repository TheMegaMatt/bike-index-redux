import * as React from 'react';
import {Heading, Spinner, Stack} from '@chakra-ui/react';

type Props = {};

export const Loader = (props: Props) => {
    return (
        <Stack direction={"column"} alignItems={"center"} padding={10}>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="teal.700"
                size="xl"
            />
            <Heading as="h4" size="md">Loading</Heading>
        </Stack>
    );
};