import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import DataTable from "react-data-table-component";

const LoyaltyRedeem = () => {

    const columns = [
        {
          name: "Customer",
          //selector: (row) => row.moleculeid,
          sortable: true,
        },
        {
          name: "Action",
          //selector: (row) => row.moleculename,
        },
        {
          name: "Cashback",
          //selector: (row) => row.source,
        },
        {
          name: "Date",
          //selector: (row) => row.type,
        },
      ];
    
      const customStyles = {
        headRow: {
          style: {
            background: "Purple",
            color: "white",
            padding: ".1rem",
            fontSize: "1.6rem",
          },
        },
      };
  return (
    <div>
    <div className="grid md:grid-cols-2 gap-2 h-70 mt-3">
        <Card className="bg-slate-50">
          <CardTitle className="ml-2 mt-1">Top Redeeming Customers</CardTitle>
          <CardContent className="mt-2">
            <h3>Customer 1</h3>
            <h3>Customer 2</h3>
            <h3>Customer 3</h3>
          </CardContent>
        </Card>
        <Card className="bg-slate-50">
          <CardTitle className="ml-2 mt-1">Cashback Redemption Slabs</CardTitle>
          <CardContent className='mt-2'>
            <h3>Below 100</h3>
            <h3>100-500</h3>
            <h3>Above 500</h3>
          </CardContent>
        </Card>
    </div>  
    <h1 className='text-2xl mt-4 mb-1'>Redemption Time</h1>
    <div className="grid md:grid-cols-2 gap-2">
        <Card className="bg-slate-50">
          <CardContent className="mt-2">
          <h1 className='mt-4'>Best time of your reward redemption is <span className='text-slate-600'>Sunday Night, Leading with 3 redemptions</span></h1>
          </CardContent>
        </Card>

        <Card className="bg-slate-50">
          <CardContent className='mt-2'>
            <h1 className='mt-4'>Unpopular time of your reward redemption is <span className='text-slate-600'>Thursday Night, Only 1 redemptions.</span></h1>
          </CardContent>
        </Card>
    </div>  
    <div className='space-y-2 bg-slate-50 rounded p-2'>
        <DataTable
          columns={columns}
          //data={records}
          striped
          dense
          highlightOnHover
          //pagination={forPagination}
          customStyles={customStyles}
        />
      </div>
    </div>
  )
}

export default LoyaltyRedeem
