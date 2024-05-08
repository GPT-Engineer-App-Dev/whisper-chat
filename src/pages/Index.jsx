import { Box, Flex, Input, Text, VStack, IconButton } from "@chakra-ui/react";
import { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  return (
    <Box h="100vh" bg="white">
      <Flex h="100%" direction={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "30%" }} bg="purple.500" p={4} color="white">
          <VStack align="stretch" spacing={4}>
            <Text fontSize="2xl" fontWeight="bold">Contacts</Text>
            <Text>John Doe</Text>
            <Text>Jane Smith</Text>
            <Text>Mike Johnson</Text>
          </VStack>
        </Box>
        <Flex direction="column" w={{ base: "100%", md: "70%" }} p={4} justifyContent="space-between">
          <VStack spacing={4} overflowY="auto">
            {messages.map((msg, index) => (
              <Box key={index} bg="gray.100" p={4} borderRadius="lg" alignSelf="flex-start">
                <Text>{msg}</Text>
              </Box>
            ))}
          </VStack>
          <Flex mt={4}>
            <Input placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} flexGrow={1} />
            <IconButton
              aria-label="Send message"
              icon={<FaPaperPlane />}
              ml={2}
              colorScheme="blue"
              onClick={() => {
                setMessages([...messages, message]);
                setMessage('');
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;