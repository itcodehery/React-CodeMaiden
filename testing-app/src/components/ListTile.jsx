import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const ListTile = ({ title, theFunction }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
            m={2}
            textAlign={['center', 'left']}
            borderRadius="md"
            boxShadow="sm"
            bg="gray.50"
            mb={2}
            width="100%"
        >
            <Text fontSize="lg" fontWeight="semibold">
                {title}
            </Text>
            <Button colorScheme="red" onClick={theFunction}>
                Remove
            </Button>
        </Box>
    );
};

export default ListTile;
