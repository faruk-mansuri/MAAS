import React, { useEffect, useState } from "react";
import { customFetch } from "@/utils/customFetch";
import DataTable from "react-data-table-component";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Segmentation = () => {
  const [segmentValue, setSegmentValue] = useState({
    totalCustomers: 0,
    lostCustomers: 0,
    loyalCustomers: 0,
    newUser: 0,
    promisingCustomers: 0,
    riskCustomers: 0,
  });

  useEffect(() => {
    const fetchSegments = async () => {
      try {
        const totalCustomersPromise = customFetch(`/`);
        const lostCustomersPromise = customFetch(`/`);
        const loyalCustomerPromise = customFetch(`/`);
        const newUserPromise = customFetch(`/`);
        const promisingCustomerPromise = customFetch(`/`);
        const riskCustomerPromise = customFetch(`/`);

        // TODO
        // const rewardPromise = customFetch(
        //   `/api/rewards/?start_date=${startDate}&end_date=${endDate}`
        // );

        const [customers, lostCust, loyalCust, user, promisingCust, riskcust] =
          await Promise.all([
            totalCustomersPromise,
            lostCustomersPromise,
            loyalCustomerPromise,
            newUserPromise,
            promisingCustomerPromise,
            riskCustomerPromise,
          ]);
        setSegmentValue({
          ...SegmentValue,
          totalCustomers: customers.data.total_unique_customers,
          lostCustomers: lostCust.data.lost_customer,
          loyalCustomers: loyalCust.data.loyal_customer,
          newUser: user.data.new_user,
          promisingCustomers: promisingCust.data.promising_customer,
          riskCustomers: riskcust.data.risk_customer,
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchSegments();
  }, [segmentValue]);

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
      <h1 className='font-bold text-2xl mb-2'>{segmentValue.totalCustomers} Total Customers</h1>
      <h2>
        Explore how recently, how often and how much money a customer has given
        your brand with RFM analysis
      </h2>
      <div className="grid md:grid-cols-3 gap-2">
        <Card className="bg-slate-100">
          <CardTitle className="ml-2 mt-1">Lost Cutomers</CardTitle>
          <CardContent>
            <h3 className="text-2xl">{segmentValue.lostCustomers}</h3>
          </CardContent>
        </Card>

        <Card className="bg-slate-100">
          <CardTitle className="ml-2 mt-1">Loyal Cutomers</CardTitle>
          <CardContent>
            <h3 className="text-2xl">{segmentValue.lostCustomers}</h3>
          </CardContent>
        </Card>

        <Card className="bg-slate-100">
          <CardTitle className="ml-2 mt-1">New User</CardTitle>
          <CardContent>
            <h3 className="text-2xl">{segmentValue.newUser}</h3>
          </CardContent>
        </Card>

        <Card className="bg-slate-100">
          <CardTitle className="ml-2 mt-1">Promising Customer</CardTitle>
          <CardContent>
            <h3 className="text-2xl">{segmentValue.promisingCustomers}</h3>
          </CardContent>
        </Card>

        <Card className="bg-slate-100">
          <CardTitle className="ml-2 mt-1">At Risk Customer</CardTitle>
          <CardContent>
            <h3 className="text-2xl">{segmentValue.riskCustomers}</h3>
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
  );
};

export default Segmentation;
