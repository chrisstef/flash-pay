import { Container, Flex, Stack, Heading, Button, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Link from "next/link";
import { HERO_IMAGE_URL, FEATURES_IMAGE_URL } from "../constants/addresses";
import FeatureCard from "../components/FeatureCard";

const Home: NextPage = () => {
    return (
        <Container maxW={"1440px"}>
            <Flex h={"75vh"} px={20} borderRadius={20} >
                <Flex flexDirection={"row"}>
                    <Flex flexDirection={"column"} justifyContent={"center"} w={"62%"}>
                        <Stack spacing={4}>
                            <Heading fontSize={"6xl"}>
                                Send tokens fast and secure.
                            </Heading>
                            <Text fontSize={"xl"}>
                                FlashPay is a cutting-edge mobile application that enables you to effortlessly perform blockchain-based token transfers with utmost speed, security, and transparency.
                            </Text>
                            <Link href={"/transfer"}>
                                <Button w={"80%"} justifyContent={"center"}>Make a Transfer</Button>
                            </Link>
                        </Stack>
                    </Flex>
                    <Box>
                        <MediaRenderer
                            src={HERO_IMAGE_URL}
                            height="100%"
                            width="100%"

                        />
                    </Box>
                </Flex>
            </Flex>
            <SimpleGrid columns={2} spacing={4} m={6}>
                <Flex>
                    <MediaRenderer
                        src={FEATURES_IMAGE_URL}
                        height="100%"
                        width="80%"
                    />
                </Flex>
                <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Stack spacing={4}>
                        <FeatureCard
                            step={"01"}
                            title={"Select a Token"}
                            description={"Select from a list of verified tokens from the drop down to send."}
                        />
                        <FeatureCard
                            step={"02"}
                            title={"Who to Send To"}
                            description={"Enter the wallet address of the person you want to send the token to. This is non-reversible so make sure you have the right address."}
                        />
                        <FeatureCard
                            step={"03"}
                            title={"Write a Message"}
                            description={"Write a message to go along with your token transfer. This is optional but it's always nice to send a message next to your transaction."}
                        />
                    </Stack>
                </Flex>
            </SimpleGrid>
        </Container>
    );
};

export default Home;
