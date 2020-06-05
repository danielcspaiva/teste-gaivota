import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function Graph({ farm, data }) {
  const [select, setSelect] = useState("ndvi");
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    let dataForGraph = null;
    if (select === "ndvi") {
      dataForGraph = data[1];
    } else {
      dataForGraph = data[2];
    }
    let months = {
      jan: [],
      feb: [],
      mar: [],
      apr: [],
      may: [],
      jun: [],
      jul: [],
      aug: [],
      sep: [],
      oct: [],
      nov: [],
      dec: []
    };
    const monthIndex = {
      0: "jan",
      1: "feb",
      2: "mar",
      3: "apr",
      4: "may",
      5: "jun",
      6: "jul",
      7: "aug",
      8: "sep",
      9: "oct",
      10: "nov",
      11: "dec"
    };

    dataForGraph.forEach(element => {
      const date = new Date(element.date).getMonth();
      months[monthIndex[date]].push(element);
    });

    const avgDataForGraph = [];

    for (let month in months) {
      avgDataForGraph.push(
        Math.round(
          (months[month].reduce(
            (acc, elem) =>
              acc + +elem[select + "_" + farm.farm_id].replace(",", "."),
            0
          ) /
            months[month].length) *
            100
        ) / 100
      );
    }

    setGraphData([
      {
        month: "jan",
        value: avgDataForGraph[0]
      },
      {
        month: "feb",
        value: avgDataForGraph[1]
      },
      {
        month: "mar",
        value: avgDataForGraph[2]
      },
      {
        month: "apr",
        value: avgDataForGraph[3]
      },
      {
        month: "may",
        value: avgDataForGraph[4]
      },
      {
        month: "jun",
        value: avgDataForGraph[5]
      },
      {
        month: "jul",
        value: avgDataForGraph[6]
      },
      {
        month: "aug",
        value: avgDataForGraph[7]
      },
      {
        month: "sep",
        value: avgDataForGraph[8]
      },
      {
        month: "oct",
        value: avgDataForGraph[9]
      },
      {
        month: "nov",
        value: avgDataForGraph[10]
      },
      {
        month: "dec",
        value: avgDataForGraph[11]
      }
    ]);
  }, [select]);

  return (
    <div>
      <ResponsiveContainer width="95%" height={200}>
        {select === "ndvi" ? (
          <BarChart className="graph" data={graphData}>
            <CartesianGrid />
            <XAxis dataKey="month" />
            <YAxis type="number" domain={[0, 1]} />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        ) : (
          <LineChart className="graph" data={graphData}>
            <CartesianGrid />
            <XAxis dataKey="month" />
            <YAxis type="number" domain={[0, 25]} />
            <Line dataKey="value" fill="#8884d8" />
          </LineChart>
        )}
      </ResponsiveContainer>
      <select value={select} onChange={e => setSelect(e.target.value)}>
        <option value="ndvi"> ndvi </option>
        <option value="precipitation"> precipitation </option>
      </select>
    </div>
  );
}

Graph.propTypes = {
  data: PropTypes.array,
  farm: PropTypes.object
};

// NEW DATE GETDATE
// PUSH DO NUMBER DE
// COLOCAR OS NUMEROS NO
