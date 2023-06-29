import { Container, Flex } from "@chakra-ui/react";
import TransferCard from "../components/TransferCard";

export default function TransferPage() {
    return (
        <Container maxW={"1440px"}>
            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <TransferCard />
            </Flex>
        </Container>
    );
}