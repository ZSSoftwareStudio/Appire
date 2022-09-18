/* eslint-disable */
import {
  Flex,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Icon,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillDelete, AiFillEdit, AiOutlineFolderView } from "react-icons/ai";
// Custom components
import Card from "components/card/Card";
// import { AndroidLogo, AppleLogo, WindowsLogo } from "components/icons/Icons";
// import Menu from "components/menu/MainMenu";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

export default function DevelopmentTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const btnColor = useColorModeValue(
    "secondaryGray.500",
    "--chakra-colors-brand-500"
  );
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  let headerData = ["Name", "Features", "Price", "Action"];
  let BodyData = [
    { name: "test 1", feature: "sdfghj", price: 12 },
    { name: "test 2", feature: "sdfghj", price: 12 },
    { name: "test 3", feature: "sdfghj", price: 12 },
  ];
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Packages
        </Text>
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          <Tr>
            {headerData.map((item, index) => {
              return (
                <Th key={index} pe="10px" borderColor={borderColor}>
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {item}
                  </Flex>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {BodyData.map((item, index) => {
            return (
              <Tr key={index}>
                <Td>
                  <Text color={textColor} fontSize="sm" fontWeight="700">
                    {item.name}
                  </Text>
                </Td>
                <Td>
                  <Text color={textColor} fontSize="sm" fontWeight="700">
                    {item.feature}
                  </Text>
                </Td>
                <Td>
                  <Text color={textColor} fontSize="sm" fontWeight="700">
                    {item.price}
                  </Text>
                </Td>
                <Td>
                  <Flex align="center">
                    <Button color={"blue"}>Buy now</Button>
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
