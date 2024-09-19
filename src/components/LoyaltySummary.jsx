import React, { useEffect, useState } from "react";
import { customFetch } from "@/utils/customFetch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoyaltySummary = () => {
  const [summaryValue, setSummaryValue] = useState({
    totalRevenue: 0,
    rewardsRedeemed: 0,
    customersNo: 0,
    redemptionRate: 0,
    CashbackIssued: 0,
    CashbackRedeemed: 0,
    AvgRevenue: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const totalRevenuePromise = customFetch(`/`);
        const rewardsRedeemedPromise = customFetch(`/`);
        const customersNoPromise = customFetch(`/`);
        const redemptionRatePromise = customFetch(`/`);
        const cashbackIssuedPromise = customFetch(`/`);
        const cashbackRedeemedPromise = customFetch(`/`);
        const avgRevenuePromise = customFetch("/");

        // TODO
        // const rewardPromise = customFetch(
        //   `/api/rewards/?start_date=${startDate}&end_date=${endDate}`
        // );

        const [
          revenue,
          rewards,
          customers,
          rateRedeem,
          cashbackIssue,
          cashbackRedeem,
          avgRevenue,
        ] = await Promise.all([
          totalRevenuePromise,
          rewardsRedeemedPromise,
          customersNoPromise,
          redemptionRatePromise,
          cashbackIssuedPromise,
          cashbackRedeemedPromise,
          avgRevenuePromise,
        ]);
        setSegmentValue({
          ...SegmentValue,
          totalRevenue: revenue.data.total_revenue,
          rewardsRedeemed: rewards.data.lost_customer,
          customersNo: customers.data.loyal_customer,
          redemptionRate: rateRedeem.data.new_user,
          CashbackIssued: cashbackIssue.data.promising_customer,
          CashbackRedeemed: cashbackRedeem.data.risk_customer,
          AvgRevenue: avgRevenue.data.risk_customer,
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchSummary();
  }, [summaryValue]);

  return (
    <div className="bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition">
      <h1 className="text-2xl font-bold mb-2">Summary</h1>
      <div className="grid md:grid-cols-3 gap-3">
        <h1 className="ml-1 mb-1">
          Rs.{summaryValue.totalRevenue}
          <h2>Total Revenue Generated</h2>
        </h1>
        <h1 className="ml-1 mb-1">
          Rs.{summaryValue.rewardsRedeemed}
          <h2>Times Reward Redeemed</h2>
        </h1>
        <h1 className="ml-1 mb-1">
          Rs.{summaryValue.customersNo}
          <h2>Number of Customers</h2>
        </h1>
      </div>
      <div className="inline-flex gap-2">
        <button class="bg-white hover:bg-slate-200 text-gray-800 font-semibold py-1 px-3 border border-slate-200 rounded shadow mt-3 mb-3 gap-1">
          Redemptions
        </button>
        <button class="bg-white hover:bg-slate-200 text-gray-800 font-semibold py-1 px-3 border border-slate-200 rounded shadow mt-3 mb-3">
          Revenue Gain
        </button>
      </div>
      <div className="grid md:grid-cols-4 gap-2">
        <Card className="bg-slate-100">
          <CardTitle className="ml-2 mt-1">Redemption Rate</CardTitle>
          <CardContent>
            <h3 className="text-2xl">{summaryValue.redemptionRate}</h3>
          </CardContent>
        </Card>

        <Card className="bg-slate-100">
          <CardTitle className="ml-2 mt-1">Cashback Issued</CardTitle>
          <CardContent>
            <h3 className="text-2xl">{summaryValue.CashbackIssued}</h3>
          </CardContent>
        </Card>

        <Card className="bg-slate-100">
          <CardTitle className="ml-2 mt-1">Cashback Redeemed</CardTitle>
          <CardContent>
            <h3 className="text-2xl">{summaryValue.CashbackRedeemed}</h3>
          </CardContent>
        </Card>

        <Card className="bg-slate-100">
          <CardTitle className="ml-2 mt-1">Avg Revenue/Redemption</CardTitle>
          <CardContent>
            <h3 className="text-2xl">{summaryValue.AvgRevenue}</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoyaltySummary;
