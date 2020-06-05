import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Graph({ farm, data }) {
  const [select, setSelect] = useState("ndvi");

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

    console.log(avgDataForGraph);
  }, [select]);

  return (
    <div>
      <select value={select} onChange={e => setSelect(e.target.value)}>
        <option value="ndvi">ndvi</option>
        <option value="precipitation">precipitation</option>
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
