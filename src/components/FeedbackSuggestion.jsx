import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FeedbackSuggestion = () => {
  return (
    <div>
      <div className="bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition">
        <h1 className="text-2xl">Customer Suggestions</h1>
        <h1 className="text-1xl">Recent Suggestions</h1>
        <i href="" className="flex justify-end mr-3">
          View All
        </i>
      </div>
      <div className="grid md:grid-cols-2 gap-2 bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition">
        <div className='bg-slate-100'>Graph 1</div>
        <div className='bg-slate-100'>
          <Select
            //onValueChange={(value) => setPerformanceInputValue(value)}
            className="border-none"
          >
            <SelectTrigger className="w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
              <SelectValue placeholder="Ratings"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7 days">Last 7 Days.</SelectItem>
              <SelectItem value="30 days">Last 30 Days.</SelectItem>
              <SelectItem value="this month">This Month.</SelectItem>
              <SelectItem value="last month">Last Month.</SelectItem>
              <SelectItem value="last 12 months">Last 12 Months.</SelectItem>
            </SelectContent>
          </Select>
          <h1>Graph 2</h1>
        </div>
        <div className='bg-slate-100'>
          <Select
            //onValueChange={(value) => setPerformanceInputValue(value)}
            className="border-none"
          >
            <SelectTrigger className="w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
              <SelectValue placeholder="Daily Reponse"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7 days">Last 7 Days.</SelectItem>
              <SelectItem value="30 days">Last 30 Days.</SelectItem>
              <SelectItem value="this month">This Month.</SelectItem>
              <SelectItem value="last month">Last Month.</SelectItem>
              <SelectItem value="last 12 months">Last 12 Months.</SelectItem>
            </SelectContent>
          </Select>
          <h1>Graph 3</h1>
        </div>
        <div className='bg-slate-100'>Graph 4</div>
      </div>
    </div>
  );
};

export default FeedbackSuggestion;
