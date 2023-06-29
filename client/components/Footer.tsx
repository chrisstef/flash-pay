import { Container, Divider, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Container maxW={"100%"} mt={20} height={"100px"}>
            <Divider />
            <Container maxW={"1440px"} py={8}>
                <Flex flexDirection={"row"} justifyContent={"space-between"}>
                    <Text>@ 2023 FlashPay | All rights reserved.</Text>
                    <Text><Text fontWeight="bold" as="span">38</Text>  recent transactions</Text>
                </Flex>
            </Container>
        </Container>
    );
}