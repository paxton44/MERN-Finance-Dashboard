import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];



const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();

  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);

  return (
    <>
        <DashboardBox gridArea="d">
        <BoxHeader 
          title="Operational vs Non-Operational Expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <XAxis dataKey="name"  
              tickLine={false} 
              style={{ fontSize: "10px" }} 
            />
            <YAxis 
              yAxisId="left"
              tickLine={false}
              orientation="left"
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis 
              yAxisId="right"
              tickLine={false}
              orientation="right"
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]} 
              />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="Operational Expenses"
              stroke={palette.primary.main} 
              />
          </LineChart>
        </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox gridArea="e"></DashboardBox>
        <DashboardBox gridArea="f"></DashboardBox>  
    </>
  );
};

export default Row2;