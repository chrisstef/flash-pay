import { Container, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbar() {
    const address = useAddress();

    return (
        <Container maxW={"1440px"} py={4}>
            <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Link href={"/"}>
                    <Text fontWeight={"black"} fontSize={"xl"}>FlashPay</Text>
                </Link>
                {address && (
                    <Flex flexDirection={"row"}>
                        <Link href={"/transfer"}>
                            <Text mr={8}>Transfer</Text>
                        </Link>
                        <Link href={"/claim"}>
                            <Text mr={8}>Claim Tokens</Text>
                        </Link>
                        <Link href={`/account/${address}`}>
                            <Text>My Account</Text>
                        </Link>
                    </Flex>
                )}
                <ConnectWallet theme="light" />
            </Flex>
        </Container>
    )
}