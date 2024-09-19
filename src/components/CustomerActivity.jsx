import React from 'react';
import DataTable from "react-data-table-component";

const CustomerActivity = () => {
  const columns = [
    {
      name: "Segment",
      //selector: (row) => row.moleculeid,
      sortable: true,
    },
    {
      name: "Customer Count",
      //selector: (row) => row.moleculename,
    },
    {
      name: "Total Amount Spent",
      //selector: (row) => row.source,
    },
    {
      name: "Type",
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
    <div className="bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition">
      <h1 className='font-bold text-2xl mb-2'>Showing : Total Records</h1>
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

export default CustomerActivity
