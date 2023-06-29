import { Container, Divider, Flex, Text } from "@chakra-ui/react";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../constants/addresses";

export default function Footer() {
    const { contract } = useContract(TRANSFER_CONTRACT_ADDRESS);

    const {
        data: events,
        isLoading: isEventsLoading,
    } = useContractEvents(contract, "TransactionCompleted", {
        queryFilter: {
            fromBlock: -7000,
        },
    });

    const recentTransactionCount = events ? events.length : 0;

    return (
        <Container maxW={"100%"} mt={20} height={"100px"}>
            <Divider />
            <Container maxW={"1440px"} py={8}>
                <Flex flexDirection={"row"} justifyContent={"space-between"}>
                    <Text>@ 2023 FlashPay | All rights reserved.</Text>
                    <Text>
                        <Text fontWeight="bold" as="span">
                            {recentTransactionCount}
                        </Text>{" "}
                        recent {recentTransactionCount === 1 ? "transaction" : "transactions"}
                    </Text>
                </Flex>
            </Container>
        </Container>
    );
}
