import { Avatar } from "@chakra-ui/avatar";
import { Button, Stack } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column-reverse", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  );
}
