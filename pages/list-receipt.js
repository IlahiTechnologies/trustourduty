import React, { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../app/firebaseApp";
import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
export default function ListReceipt() {
    const [querySnapshot,setquerySnapshot] = useState([]);
    const [laal, setlala] = useState(false);
    useEffect( ()=> {
        async function kk() {
            let kkp = [];
            const pp = await getDocs(collection(db, "receipts"))
            pp.docs.forEach((ll)=>{
                kkp.push(ll.data());
            })
          
            setquerySnapshot(()=> kkp);
            setlala((la)=> !la)
            console.log(kkp);
        }
        kk();
    }, [])
    console.log(querySnapshot);
    const data = React.useMemo(
        () => querySnapshot,
        [laal],
      )
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'amount',
            accessor: 'amount',
            isNumeric: true,
          },
          {
            Header: 'email',
            accessor: 'email',
          },
          {
            Header: 'name',
            accessor: 'name',
            isNumeric: true,
          },
    {
                Header: 'pan_no',
                accessor: 'pan_no',
              },
              {
                Header: 'purpose',
                accessor: 'purpose',
              },
              {
                Header: 'received_by',
                accessor: 'received_by'
               
              },
        {
                    Header: 'residing_at',
                    accessor: 'residing_at',
                  },
                  {
                    Header: 'sum_of',
                    accessor: 'sum_of',
                  }
        ],
        [laal],
      )
    

      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data }, useSortBy)

        return (
            <Table {...getTableProps()}>
              <Thead>
                {headerGroups.map((headerGroup) => (
                  <Tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <Th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        isNumeric={column.isNumeric}
                      >
                        {column.render('Header')}
                        <chakra.span pl='4'>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <TriangleDownIcon aria-label='sorted descending' />
                            ) : (
                              <TriangleUpIcon aria-label='sorted ascending' />
                            )
                          ) : null}
                        </chakra.span>
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row)
                  return (
                    <Tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                          {cell.render('Cell')}
                        </Td>
                      ))}
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          )

}
