'use client'
import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { Tab } from '@tremor/react';

const columns = [
    {name: "Champion", uid: "name"},
    {name: "Players", uid: "players"},
    {name: "Roles", uid: "roles"},
    {name: "Win Rate", uid: "winrate"},
]

const champions : any[] = [

]

export const Champs = (props: any) => {
    return (
        <div>
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={champions}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
                {/* <TableBody items={users}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody> */}
            </Table>
        </div>
    );
}