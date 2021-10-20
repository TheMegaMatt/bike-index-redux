// @flow
import * as React from 'react';
import {Stack, Input, IconButton} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useState, useMemo} from "react";
import {debounce} from "lodash";



type Props = {
    onSearch: (text: string) => void
};

export const SearchInput = ({onSearch}: Props) => {

    const [text, setText] = useState("");



    const onChange = (evt: any) => {
        onSearch(evt.target.value);
    }

    const delayedOnKeyPress = useMemo(() => debounce(onChange, 1000), [])

    return <Stack direction={"row"}>
        <Input placeholder="Search" size={"lg"} onChange={delayedOnKeyPress}/>
        <IconButton isDisabled={!text} colorScheme={"teal"} size={"lg"} aria-label="Search database" icon={<SearchIcon/>} onClick={() => {onSearch(text)}}/>
    </Stack>;


};