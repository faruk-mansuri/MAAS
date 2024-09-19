import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { customFetch } from "@/utils/customFetch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdQrCode, MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineDollar, AiOutlinePercentage } from "react-icons/ai";

const QrSummary = () => {
  const [qrValue, setQrValue] = useState({
    customersCaptured: 0,
    totalVisits: 0,
    approxRevenue: 0,
    visitRate: 0,
  });

  useEffect(() => {
    const fetchQr = async () => {
      try {
        const customersCapturedPromise = customFetch(`/`);
        const totalVisitsPromise = customFetch(`/`);
        const approxRevenuePromise = customFetch(`/`);
        const visitRatePromise = customFetch(`/`);

        // TODO
        // const rewardPromise = customFetch(
        //   `/api/rewards/?start_date=${startDate}&end_date=${endDate}`
        // );

        const [customers, visits, revenue, rate] = await Promise.all([
          customersCapturedPromise,
          totalVisitsPromise,
          approxRevenuePromise,
          visitRatePromise,
        ]);
        setQrValue({
          ...qrValue,
          customersCaptured: customers.data.total_unique_customers,
          totalVisits: visits.data.lost_customer,
          approxRevenue: revenue.data.loyal_customer,
          visitRate: rate.data.new_user,
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchQr();
  }, [qrValue]);

  return (
    <div>
      <div className="bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition">
        <h1 className="text-2xl">Summary</h1>
        <div className="grid md:grid-cols-4 gap-2">
          <Card className="bg-slate-100">
            <CardTitle className="ml-6 mt-1">Cutomers Captured</CardTitle>
            <MdQrCode className="ml-1" />
            <CardContent>
              <h3 className="text-2xl">{qrValue.customersCaptured}</h3>
            </CardContent>
          </Card>

          <Card className="bg-slate-100">
            <CardTitle className="ml-6 mt-1">Total Visits</CardTitle>
            <MdOutlineShoppingCart className="ml-1" />
            <CardContent>
              <h3 className="text-2xl">{qrValue.totalVisits}</h3>
            </CardContent>
          </Card>

          <Card className="bg-slate-100">
            <CardTitle className="ml-6 mt-1">Approx Revenue</CardTitle>
            <AiOutlineDollar className="ml-1" />
            <CardContent>
              <h3 className="text-2xl">{qrValue.approxRevenue}</h3>
            </CardContent>
          </Card>

          <Card className="bg-slate-100">
            <CardTitle className="ml-6 mt-1">Visit Rate</CardTitle>
            <AiOutlinePercentage className="ml-1" />
            <CardContent>
              <h3 className="text-2xl">{qrValue.visitRate}</h3>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <Select
          className="justify-start border-none"
          // onValueChange={(value) => setPerformanceInputValue(value)}
        >
          <SelectTrigger className="w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
            <SelectValue placeholder="Select"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7 days">Draft First</SelectItem>
            <SelectItem value="30 days">Active First</SelectItem>
            <SelectItem value="this month">Recent First</SelectItem>
          </SelectContent>
        </Select>

        <button className="bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow gap-1 mr-3">
          Create new QR code
        </button>
      </div>
    </div>
  );
};

export default QrSummary;
