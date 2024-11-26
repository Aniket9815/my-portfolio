import ChartInput from "@/components/shared/chart-input";
import { defineField } from "sanity";

export const chartType = defineField({
  name: "myChart",
  title: "My Chart",
  type: "object",
  components: {
    input: ChartInput,
    block: ChartInput,
  },
  fields: [
    {
      name: "labels",
      title: "Labels",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "data",
      title: "Data",
      type: "array",
      of: [{ type: "number" }],
    },
  ],
});
