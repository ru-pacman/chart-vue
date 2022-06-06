export default {
    name: "ChartVue",
    data: () => ({
        values: [5, 6, 8, 3, 3, 4, 6, 0],
    }),
    computed: {
        pathData() {
            const rowWidth = 320 / (this.values.length - 1);
            const rowHeight = 240 / Math.max(...this.values);
            const coords = [];
            this.values.forEach((value, key) => {
                coords.push(`${key === 0 ? 'M' : 'L'} ${key * rowWidth} ${240 - value * rowHeight}`);
            });
            return coords.join(" ");
        },
    },
    render() {
        return (
            <svg width="320" height="240" viewBox="0 0 320 240">
                <text x="10" y="20">
                    SVG
                </text>
                <path d={this.pathData} stroke="#FF00FF" stroke-width="2" fill="transparent" vector-effect="non-scaling-stroke" />
            </svg>
        );
    },
};
