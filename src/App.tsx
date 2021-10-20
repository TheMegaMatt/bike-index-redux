import { ReactNode, useEffect, useState } from "react";
import { useGetBikesCountQuery, useGetBikesQuery } from "./feature/bikes";
import {
    Table,
    TableCaption,
    Tr,
    Th,
    Thead,
    Tbody,
    Td,
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
    Box, Button, ButtonGroup,
} from "@chakra-ui/react";
import { Loader } from "./components/layout/Loader";

import { SearchInput } from "./components/SearchInput";

function formatDate(source: number) {
    const date = new Date(source * 1000);
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString();
}

function Stack(props: { children: ReactNode }) {
    return null;
}

function App() {

    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    const [query, setQuery] = useState("");


    const { data: bikes = { bikes: [] }, isFetching, isError, error } = useGetBikesQuery({ page: page, per_page: pageSize, query });
    const { data: count = { proximity: 0 }, isFetching: isCountFetching } = useGetBikesCountQuery({ query });

    useEffect(() => {
        setPageCount(Math.ceil(count.proximity / pageSize))
        setPage(1);
    }, [pageSize, count]);


    const next = () => {
        setPage(x => x + 1);
    }
    const prev = () => {
        setPage(x => x - 1);
    }
    const first = () => {
        setPage(x => 1);
    }
    const last = () => {
        setPage(x => pageCount);
    }

    return (
        <>
            <Box margin={4} >
                <SearchInput onSearch={(x) => setQuery(x)} />
            </Box>
            <Box margin={4}>
                {isFetching ? <Loader /> : isError ? <Alert status="error" mt={6} mb={6}>
                    <AlertIcon />
                    <AlertTitle mr={2}>There was an Error while performing the search!</AlertTitle>
                </Alert> : <Table variant="striped" colorScheme="teal">
                    <TableCaption>
                        <ButtonGroup variant="solid" spacing="6">
                            <Button onClick={first} isDisabled={page === 1}
                                isLoading={isFetching || isCountFetching}>First</Button>
                            <Button onClick={prev} isDisabled={page === 1}
                                isLoading={isFetching || isCountFetching}>Previous</Button>
                            {(!isFetching && !isCountFetching) && <Text size={"x-small"} colorScheme={"teal"}>Page {page} of {pageCount}</Text>}
                            <Button onClick={next} isDisabled={page === pageCount}
                                isLoading={isFetching || isCountFetching}>Next</Button>
                            <Button onClick={last} isDisabled={page === pageCount}
                                isLoading={isFetching || isCountFetching}>Last</Button>
                        </ButtonGroup>
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Date Stolen</Th>
                            <Th>Year</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {bikes.bikes.map(x => <Tr key={x.id}>
                            <Td>{x.title}</Td>
                            <Td>{formatDate(x.date_stolen)}</Td>
                            <Td>{x.year}</Td>
                        </Tr>)}
                    </Tbody>
                </Table>}
            </Box>
        </>
    );
}

export default App
