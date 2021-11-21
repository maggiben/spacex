import { Flex, Input, Center, Text, Spacer, Button } from "@chakra-ui/react"

const SearchBar = () => {
  return (
    <Flex>
      <Center w="200px" h="10">
        <Text>SpaceX Eplorer</Text>
      </Center>
      <Spacer />
      <Center w="100%" h="10">
        <Input placeholder="Mission name" />
      </Center>
      <Center w="60px" h="10">
        <Button>Search</Button>
      </Center>
    </Flex>
  )
}

export default SearchBar