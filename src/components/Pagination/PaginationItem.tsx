import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  number,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
        size="sm"
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      fontSize="xs"
      size="sm"
      w="4"
      colorScheme="pink"
      bg="gray.700"
      disabled
      _disabled={{ bgColor: "gray.500" }}
    >
      {number}
    </Button>
  );
}
