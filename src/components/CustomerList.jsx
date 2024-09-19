import React, { useEffect, useState } from 'react';
import { customFetch } from '@/utils/customFetch';
import DataTable from "react-data-table-component";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const CustomerList = () => {
  const [customerValue, setCustomerValue] = useState({
    lostCustomers: 0,
    loyalCustomers: 0,
    newUser: 0,
  });
  useEffect(() => {
    const fetchCustomers = async () => {

      try {
        const lostCustomersPromise = customFetch(
          `/`
        );
        const loyalCustomerPromise = customFetch(
          `/`
        );
        const newUserPromise = customFetch(
          `/`
        );

        // TODO
        // const rewardPromise = customFetch(
        //   `/api/rewards/?start_date=${startDate}&end_date=${endDate}`
        // );

        const [lostCust, loyalCust, user] = await Promise.all([
          lostCustomersPromise,
          loyalCustomerPromise,
          newUserPromise,
        ]);
        setCustomerValue({
          ...CustomerValue,
          lostCustomers: lostCust.data.lost_customer,
          loyalCustomers: loyalCust.data.loyal_customer,
          newUser: user.data.new_user,
        });
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchCustomers();
  }, [customerValue]);

  const columns = [
    {
      name: "ID",
      //selector: (row) => row.moleculeid,
      sortable: true,
    },
    {
      name: "Name",
      //selector: (row) => row.moleculename,
    },
    {
      name: "Segment",
      //selector: (row) => row.source,
    },
    {
      name: "Total Orders",
      //selector: (row) => row.type,
    },
    {
      name: "Total Spent",
      //selector: (row) => row.type,
    },
    {
      name: "Email",
      //selector: (row) => row.type,
    },
    {
      name: "Phone Number",
      //selector: (row) => row.type,
    },
    {
      name: "Number of kids",
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
    <div className='bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
    <h1 className='text-2xl font-bold mb-2'>Quick Glance</h1>
      <div className='grid md:grid-cols-3 gap-2 mt-101'>
        
        <Card className='bg-slate-100'>
            <CardTitle className='ml-2 mt-1'>Lost Cutomers</CardTitle>
          <CardContent>
            <h3 className='text-2xl'>{customerValue.lostCustomers}</h3>
          </CardContent>
        </Card>

        <Card className='bg-slate-100'>
            <CardTitle className='ml-2 mt-1'>Loyal Cutomers</CardTitle>
          <CardContent>
            <h3 className='text-2xl'>{customerValue.lostCustomers}</h3>
          </CardContent>
        </Card>

        <Card className='bg-slate-100'>
            <CardTitle className='ml-2 mt-1'>New User</CardTitle>
          <CardContent>
            <h3 className='text-2xl'>{customerValue.newUser}</h3>
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

export default CustomerList
