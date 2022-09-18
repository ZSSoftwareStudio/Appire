import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { AiFillDelete } from "react-icons/ai";
function TopCreatorTable(props) {
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

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.900", "white");

  const headerData = ["Sl", "Name", "Email", "Check/Copy Admob", "Action"];

  const bodyData = [
    {
      name: "test 1",
      email: "as@gmail.com",
      text: "asd",
    },
    {
      name: "test 2",
      email: "as2@gmail.com",
      text: "asdasda",
    },
    {
      name: "test 3",
      email: "as3@gmail.com",
      text: "asgfghd",
    },
  ];
  const iconColor = useColorModeValue("brands.900", "red");
  return (
    <>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        <Flex
          align={{ sm: "flex-start", lg: "center" }}
          justify="left"
          w="100%"
          px="22px"
          pb="20px"
          mb="10px"
          boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
        >
          <Text color={textColor} fontSize="xl" fontWeight="600">
            Total users:
          </Text>
          <Text color={textColor} fontSize="xl" fontWeight="600" ml="10px">
            1,000
          </Text>
          {/* <Button variant="action">See all</Button> */}
        </Flex>
        <Table {...getTableProps()} variant="simple" color="gray.500">
          {/* <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe="10px"
                    key={index}
                    borderColor="transparent"
                  >
                    <Flex
                      justify="space-between"
                      align="center"
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color="gray.400"
                    >
                      {column.render("Header")}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead> */}
          <Thead>
            <Tr>
              {headerData.map((item, index) => {
                return (
                  <Td
                    key={index}
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                    fontWeight="extrabold"
                  >
                    {item.toUpperCase()}
                  </Td>
                );
              })}
            </Tr>
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {bodyData.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td
                    color={textColorSecondary}
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    {index + 1}
                  </Td>
                  <Td
                    color={textColorSecondary}
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    {item.name}
                  </Td>
                  <Td
                    color={textColorSecondary}
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    {item.email}
                  </Td>
                  <Td
                    color={textColorSecondary}
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    {item.text}
                  </Td>
                  <Td
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    <Icon
                      as={AiFillDelete}
                      color={iconColor}
                      width="25px"
                      me="10px"
                    />
                  </Td>
                </Tr>
              );
            })}
            {/* {page.map((row, index) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "Name") {
                      data = (
                        <Flex align="center">
                          <Avatar
                            src={cell.value[1]}
                            w="30px"
                            h="30px"
                            me="8px"
                          />
                          <Text
                            color={textColor}
                            fontSize="sm"
                            fontWeight="600"
                          >
                            {cell.value[0]}
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === "Artworks") {
                      data = (
                        <Text
                          color={textColorSecondary}
                          fontSize="sm"
                          fontWeight="500"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === "Rating") {
                      data = (
                        <Box>
                          <Progress
                            variant="table"
                            colorScheme="brandScheme"
                            value={cell.value}
                          />
                        </Box>
                      );
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent"
                      >
                        {data}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })} */}
          </Tbody>
        </Table>
      </Flex>
    </>
  );
}

export default TopCreatorTable;
