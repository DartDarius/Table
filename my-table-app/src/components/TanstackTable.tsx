import React, { useMemo } from 'react';
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import '../styles.css'; 
import { tableData } from '../data/tableData';
import { Data } from '../interfaces/dataInterface';

const TanstackTable: React.FC = () => {
    const data = useMemo<Data[]>(() => tableData, []);
  
    const columns = useMemo<ColumnDef<Data>[]>(
      () => [
        { accessorKey: 'sprint', header: 'Sprint' },
        { accessorKey: 'reporter', header: 'Reporter' },
        { accessorKey: 'priority', header: 'Priority' },
        { accessorKey: 'status', header: 'Status' },
        { accessorKey: 'resolution', header: 'Resolution' },
        { accessorKey: 'created', header: 'Created' },
        { accessorKey: 'updated', header: 'Updated' },
        { accessorKey: 'dueDate', header: 'Due date' },
        { accessorKey: 'storyPointEstimate', header: 'Story point estimate' },
      ],
      []
    );
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
  
    return (
      <div className="container">
        <table className="styled-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TanstackTable;