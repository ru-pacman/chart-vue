export default {
  name: "ChartVue",
  props: {
    width: {
      type: Number,
      default: 640,
    },
    height: {
      type: Number,
      default: 480,
    },
    colors: {
      type: Array,
      default: () => ["#f00", "#0f0", "#00f", "#0ff"],
    },
  },
  data: () => ({
    values: [
      [1, 5, -5],
      [2, 5, -5, 7],
      [3, 5, -5, 2],
      [4, 5, 2],
      [6, 5, 2],
    ],
  }),
  computed: {
    pathData() {
      const maxLength = this.getMaxLength(this.values);
      const rowWidth = this.width / (this.values.length - 1);
      const rowHeight = this.height / Math.max(...this.values.flat());

      return maxLength.map((_, lineNumber) =>
        this.values
          .map(
            (value, key) =>
              `${key === 0 ? "M" : "L"} ${key * rowWidth} ${
                this.height - (value[lineNumber] || 0) * rowHeight
              }`
          )
          .join(" ")
      );
    },
  },
  methods: {
    getMaxLength(val) {
      return val.reduce(
        (previousValue, currentValue) =>
          previousValue.length < currentValue.length
            ? currentValue
            : previousValue,
        []
      );
    },
  },
  render() {
    return (
      <svg
        width={this.width}
        height={this.height}
        viewBox={`0 0 ${this.width} ${this.height}`}
      >
        <text x="10" y="20">
          SVG
        </text>
        {this.pathData.map((value, index) => (
          <path
            d={value}
            stroke={this.colors[index]}
            stroke-width="2"
            fill="transparent"
            vector-effect="non-scaling-stroke"
          />
        ))}
      </svg>
    );
  },
};
