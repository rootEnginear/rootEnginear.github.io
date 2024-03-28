import {
  $,
  component$,
  noSerialize,
  useSignal,
  useVisibleTask$,
  type NoSerialize,
} from "@builder.io/qwik";
import * as echarts from "echarts";

const TRAVEL_LIST = ["ปราณบุรี", "สิงคโปร์", "ระยอง", "กระบี่", "ญี่ปุ่น"];
const FIRST_TIME = [
  "ขึ้นเครื่องบินคนเดียว",
  "แฮงค์",
  "กินตี๋น้อยตอนตี 3",
  "ปรึกษานักจิต",
  "ไปร้านเหล้าครั้งแรกในชีวิตที่ญี่ปุ่น",
  "กินตี๋น้อยคนเดียว",
];
const FOOD_LIST = ["MoMo Paradise", "Gogida", "WaQ", "สุกี้ตี๋น้อย", "Simon Shabu"];

const DATA: Record<string, { isGood: boolean; tag: string[] }> = {
  "2023-01-11": {
    isGood: true,
    tag: [],
  },
  "2023-01-22": {
    isGood: false,
    tag: [],
  },
  "2023-01-29": {
    isGood: true,
    tag: ["MoMo Paradise"],
  },
  "2023-02-04": {
    isGood: true,
    tag: [],
  },
  "2023-02-24": {
    isGood: true,
    tag: ["ปราณบุรี"],
  },
  "2023-02-25": {
    isGood: true,
    tag: ["ปราณบุรี"],
  },
  "2023-02-26": {
    isGood: true,
    tag: ["ปราณบุรี"],
  },
  "2023-03-31": {
    isGood: true,
    tag: ["สิงคโปร์"],
  },
  "2023-04-01": {
    isGood: true,
    tag: ["สิงคโปร์"],
  },
  "2023-04-02": {
    isGood: true,
    tag: ["สิงคโปร์", "ขึ้นเครื่องบินคนเดียว"],
  },
  "2023-04-20": {
    isGood: true,
    tag: ["Gogida"],
  },
  "2023-04-28": {
    isGood: true,
    tag: ["ระยอง"],
  },
  "2023-04-29": {
    isGood: true,
    tag: ["ระยอง"],
  },
  "2023-04-30": {
    isGood: true,
    tag: ["ระยอง", "แฮงค์"],
  },
  "2023-05-04": {
    isGood: false,
    tag: [],
  },
  "2023-05-24": {
    isGood: true,
    tag: ["กระบี่"],
  },
  "2023-05-25": {
    isGood: true,
    tag: ["กระบี่"],
  },
  "2023-05-26": {
    isGood: true,
    tag: ["กระบี่"],
  },
  "2023-05-27": {
    isGood: true,
    tag: ["กระบี่"],
  },
  "2023-06-10": {
    isGood: true,
    tag: ["WaQ"],
  },
  "2023-06-11": {
    isGood: false,
    tag: [],
  },
  "2023-06-24": {
    isGood: true,
    tag: ["สุกี้ตี๋น้อย", "กินตี๋น้อยตอนตี 3"],
  },
  "2023-07-13": {
    isGood: false,
    tag: [],
  },
  "2023-10-11": {
    isGood: true,
    tag: ["ปรึกษานักจิต"],
  },
  "2023-10-17": {
    isGood: false,
    tag: [],
  },
  "2023-10-20": {
    isGood: true,
    tag: ["ญี่ปุ่น"],
  },
  "2023-10-21": {
    isGood: true,
    tag: ["ญี่ปุ่น"],
  },
  "2023-10-22": {
    isGood: true,
    tag: ["ญี่ปุ่น"],
  },
  "2023-10-23": {
    isGood: true,
    tag: ["ญี่ปุ่น"],
  },
  "2023-10-24": {
    isGood: true,
    tag: ["ญี่ปุ่น", "ไปร้านเหล้าครั้งแรกในชีวิตที่ญี่ปุ่น"],
  },
  "2023-10-25": {
    isGood: true,
    tag: ["ญี่ปุ่น"],
  },
  "2023-10-26": {
    isGood: true,
    tag: ["ญี่ปุ่น"],
  },
  "2023-10-27": {
    isGood: true,
    tag: ["ญี่ปุ่น"],
  },
  "2023-11-30": {
    isGood: true,
    tag: ["Simon Shabu"],
  },
  "2023-12-10": {
    isGood: true,
    tag: [],
  },
  "2023-12-16": {
    isGood: true,
    tag: ["กินตี๋น้อยคนเดียว"],
  },
  "2023-12-29": {
    isGood: true,
    tag: [],
  },
};

const chartDefaultOption: echarts.EChartsOption = {
  visualMap: {
    show: false,
    min: -2,
    max: 2,
    inRange: {
      color: ["#D05353", "#18181b", "#C3E88D"],
    },
  },
  calendar: {
    orient: "vertical",
    range: "2023",
    left: 30,
    top: 0,
    right: 10,
    bottom: 0,
    width: "auto",
    cellSize: "auto",
    yearLabel: {
      show: false,
    },
    monthLabel: {
      color: "rgb(113 113 122)",
      fontFamily: "Bai Jamjuree",
      nameMap: [
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
      ],
    },
    itemStyle: {
      color: "#18181b",
      borderColor: "rgb(39 39 42)",
    },
    splitLine: {
      lineStyle: {
        color: "rgb(113 113 122)",
        width: 2,
      },
    },
  },
  series: [
    {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: Object.entries(DATA).map((e) => [e[0], +e[1].isGood * 4 - 2]),
    },
    {
      type: "effectScatter",
      coordinateSystem: "calendar",
      data: [],
    },
  ],
};

const Chart = component$(() => {
  const elChart = useSignal<HTMLDivElement>();
  const myChart = useSignal<NoSerialize<echarts.ECharts> | undefined>();

  const showImpactedData = $((tag?: string) => {
    if (!myChart.value) return;

    if (!tag) return myChart.value.setOption(chartDefaultOption);

    const newData = Object.entries(DATA)
      .filter((e) => e[1].tag.includes(tag))
      .map((e) => [e[0], +e[1].isGood * 4 - 2]);
    myChart.value.setOption({
      series: [
        {
          type: "heatmap",
          coordinateSystem: "calendar",
          data: Object.entries(DATA).map((e) => [e[0], +e[1].isGood * 2 - 1]),
        },
        {
          type: "effectScatter",
          coordinateSystem: "calendar",
          symbolSize: 12,
          data: newData,
        },
      ],
    });
  });

  useVisibleTask$(
    () => {
      if (elChart.value) {
        myChart.value = noSerialize(echarts.init(elChart.value));
        myChart.value?.setOption(chartDefaultOption);
      }
    },
    {
      strategy: "intersection-observer",
    }
  );

  return (
    <div class="flex flex-col justify-center gap-32 md:flex-row">
      <div
        ref={elChart}
        class="mx-auto mb-16 h-[750px] w-[135px] flex-none md:mx-0"
      ></div>
      <div class="flex flex-col gap-32">
        <p class="text-2xl font-bold">มี Impacted Event 21 ครั้ง 37 วัน</p>
        <article>
          <h3>ไปเที่ยว 5 ที่</h3>
          <ul>
            {TRAVEL_LIST.map((place) => (
              <li key={place}>
                <button
                  class="text-left underline decoration-dashed decoration-1 hover:decoration-solid"
                  onMouseOver$={() => showImpactedData(place)}
                  onFocus$={() => showImpactedData(place)}
                  onMouseOut$={() => showImpactedData()}
                  onBlur$={() => showImpactedData()}
                >
                  {place}
                </button>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h3>ครั้งแรกในชีวิต</h3>
          <ul>
            {FIRST_TIME.map((firsttime) => (
              <li key={firsttime}>
                <button
                  class="text-left underline decoration-dashed decoration-1 hover:decoration-solid"
                  onMouseOver$={() => showImpactedData(firsttime)}
                  onFocus$={() => showImpactedData(firsttime)}
                  onMouseOut$={() => showImpactedData()}
                  onBlur$={() => showImpactedData()}
                >
                  {firsttime}
                </button>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h3>ร้านที่เคยกินครั้งแรก</h3>
          <ul>
            {FOOD_LIST.map((food) => (
              <li key={food}>
                <button
                  class="text-left underline decoration-dashed decoration-1 hover:decoration-solid"
                  onMouseOver$={() => showImpactedData(food)}
                  onFocus$={() => showImpactedData(food)}
                  onMouseOut$={() => showImpactedData()}
                  onBlur$={() => showImpactedData()}
                >
                  {food}
                </button>
              </li>
            ))}
          </ul>
        </article>
        <ul class="!ml-0 flex flex-col gap-8 leading-none">
          <li class="flex items-center gap-8">
            <span class="aspect-square h-16 w-16 bg-[#C3E88D]" />
            <span>เหตุการณ์ที่ดี (16)</span>
          </li>
          <li class="flex items-center gap-8">
            <span class="aspect-square h-16 w-16 bg-[#D05353]" />
            <span>เหตุการณ์ที่ไม่ดี (5)</span>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Chart;
