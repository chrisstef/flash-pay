import { Avatar, Container, Flex, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../../constants/addresses";
import BalanceCard from "../../components/BalanceCard";

export default function AccountPage() {
    const address = useAddress();

    function truncateAddress(address: string) {
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };

    const {
        contract: transferContract,
    } = useContract(TRANSFER_CONTRACT_ADDRESS);

    const {
        data: verifiedTokens,
        isLoading: isVerifiedTokensLoading,
    } = useContractRead(
        transferContract,
        "getVerifiedTokens"
    );

    return (
        <Container maxW={"1440px"} py={4}>
            {address ? (
                <Flex>
                    <Flex flexDirection={"column"} mr={8} p={12}>
                        <Avatar size={"2xl"} mb={4} />
                        <Text
                            fontSize={"sm"}
                            border={"1px solid white"}
                            textAlign={"center"}
                            borderRadius={4}
                            p={2}
                        >{truncateAddress(address)}</Text>
                    </Flex>
                    <Flex flexDirection={"column"} w={"100%"}>
                        <Heading>Token Balances</Heading>
                        <SimpleGrid columns={3} spacing={4} mt={4}>
                            {!isVerifiedTokensLoading ? (
                                verifiedTokens.map((token: string) => (
                                    <BalanceCard
                                        key={token}
                                        tokenAddress={token}
                                    />
                                ))
                            ) : (
                                <Spinner />
                            )}
                        </SimpleGrid>
                    </Flex>
                </Flex>
            ) : (
                <Flex>
                    <Text>Please connect wallet.</Text>
                </Flex>
            )}

        </Container>
    )
}