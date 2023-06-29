import { Box, Card, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../constants/addresses";
import TokenSelection from "./TokenSelection";
import { useState } from "react";
import TokenBalance from "./TokenBalance";
import TransferButton from "./TransferButton";

export default function TransferCard() {
    const address = useAddress();

    const {
        contract
    } = useContract(TRANSFER_CONTRACT_ADDRESS);

    const {
        data: verifiedTokens,
        isLoading: isVerifiedTokensLoading,
    } = useContractRead(contract, "getVerifiedTokens");

    const [formData, setFormData] = useState({
        receiver: '',
        amount: '',
        message: ''
    });

    const [selectedToken, setSelectedToken] = useState('');

    const handleChange = (event: any, name: any) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: event.target.value
        }));
    };

    const handleTokenSelection = (tokenAddress: string) => {
        setSelectedToken(tokenAddress);
    };

    return (
        <Box mt={10} w={"50%"}>
            <Heading>Transfer Tokens</Heading>

            <Card p={8} my={4}>

                <Text fontWeight={"bold"}>Select Token:</Text>
                <Flex flexDirection={"row"} mt={4}>
                    {!isVerifiedTokensLoading &&
                        verifiedTokens.map((token: string) => (
                            <Box
                                key={token}
                                onClick={() => handleTokenSelection(token)}
                            >
                                <TokenSelection
                                    tokenAddress={token}
                                    isSelected={selectedToken === token}
                                />
                            </Box>

                        ))}
                </Flex>

                <TokenBalance tokenAddress={selectedToken} />

                <Text mt={2} mb={1} fontWeight={"bold"}>Send To:</Text>
                <Input
                    placeholder="0x0000000"
                    type="text"
                    value={formData.receiver}
                    onChange={(event) => handleChange(event, "receiver")}
                />
                <Text mt={4} mb={1} fontWeight={"bold"}>Amount:</Text>
                <Input
                    placeholder="0.0"
                    type="number"
                    value={formData.amount}
                    onChange={(event) => handleChange(event, "amount")}
                />
                <Text mt={4} mb={1} fontWeight={"bold"}>Message:</Text>
                <Input
                    placeholder="Add short message here."
                    type="text"
                    value={formData.message}
                    onChange={(event) => handleChange(event, "message")}
                />
                <Box mt={8}>
                    {address ? (
                        <TransferButton
                            tokenAddress={selectedToken}
                            receiver={formData.receiver}
                            amount={formData.amount.toString()}
                            message={formData.message}
                        />
                    ) : (
                        <Text>Please connect your wallet to make a transfer.</Text>
                    )}
                </Box>
            </Card>
        </Box>
    );
};