const INVENTORY_DATA = [
    {
        city: "Atlanta", region: "south", total: 1,
        units: [
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
        ]
    },
    {
        city: "Calgary", region: "canada", total: 1,
        units: [
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
        ]
    },
    {
        city: "Chicago", region: "midwest", total: 101,
        units: [
            { grade: "NEW", ral: "1015", type: "10SC", desc: "10' Shipping Container", qty: 3 },
            { grade: "NEW", ral: "1015", type: "20DD", desc: "20' Double Door", qty: 4 },
            { grade: "NEW", ral: "1015", type: "20DU", desc: "20' Duocon", qty: 3 },
            { grade: "ASIS", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "CW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "IICL", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "1012", type: "20GP", desc: "20' General Purpose", qty: 3 },
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 53 },
            { grade: "NEW", ral: "7035", type: "20GP", desc: "20' General Purpose", qty: 2 },
            { grade: "NEW", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 6 },
            { grade: "CW", ral: "5010", type: "20OT", desc: "20' Open Top", qty: 1 },
            { grade: "NEW", ral: "1015", type: "40DH", desc: "40' Double Door HC", qty: 2 },
            { grade: "NEW", ral: "1015", type: "4H4S", desc: "40' HC Special", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 18 },
            { grade: "NEW", ral: "unknown", type: "4HCF", desc: "40' HC w/ FLP", qty: 2 },
        ]
    },
    {
        city: "Cleveland", region: "midwest", total: 1,
        units: [
            { grade: "CW", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 1 },
        ]
    },
    {
        city: "Dallas", region: "south", total: 21,
        units: [
            { grade: "CW", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 2 },
            { grade: "CW", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 6 },
            { grade: "IICL", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 3 },
            { grade: "3TRP", ral: "5010", type: "4HCF", desc: "40' HC w/ FLP", qty: 2 },
            { grade: "3TRP", ral: "5017", type: "4HCF", desc: "40' HC w/ FLP", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 6 },
        ]
    },
    {
        city: "Detroit", region: "midwest", total: 1,
        units: [
            { grade: "NEW", ral: "1015", type: "20HT", desc: "20' Hard Top Open Top", qty: 1 },
        ]
    },
    {
        city: "El Paso", region: "south", total: 6,
        units: [
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 6 },
        ]
    },
    {
        city: "Houston", region: "south", total: 78,
        units: [
            { grade: "NEW", ral: "1015", type: "10MM", desc: "10' MiniMAX", qty: 4 },
            { grade: "CW", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 3 },
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 11 },
            { grade: "NEW", ral: "7035", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "1015", type: "40DH", desc: "40' Double Door HC", qty: 1 },
            { grade: "3TRP", ral: "unknown", type: "40GP", desc: "40' General Purpose", qty: 1 },
            { grade: "ASIS", ral: "5010", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "ASIS", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "CW", ral: "7040", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "CW", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 3 },
            { grade: "IICL", ral: "3009", type: "40HC", desc: "40' High Cube", qty: 3 },
            { grade: "IICL", ral: "5010", type: "40HC", desc: "40' High Cube", qty: 7 },
            { grade: "IICL", ral: "5017", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "IICL", ral: "7035", type: "40HC", desc: "40' High Cube", qty: 3 },
            { grade: "IICL", ral: "7040", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "IICL", ral: "9001", type: "40HC", desc: "40' High Cube", qty: 5 },
            { grade: "IICL", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 9 },
            { grade: "NEW", ral: "1015", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "7035", type: "40HC", desc: "40' High Cube", qty: 3 },
            { grade: "NEW", ral: "9001", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "WWT", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 9 },
            { grade: "3TRP", ral: "7035", type: "4HCF", desc: "40' HC w/ FLP", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 6 },
            { grade: "NEW", ral: "unknown", type: "4HCF", desc: "40' HC w/ FLP", qty: 1 },
        ]
    },
    {
        city: "Kansas City", region: "midwest", total: 7,
        units: [
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 2 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 5 },
        ]
    },
    {
        city: "LA/Long Beach", region: "west", total: 7,
        units: [
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 2 },
            { grade: "NEW", ral: "unknown", type: "20OS", desc: "20' Open Side", qty: 2 },
            { grade: "CW", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 1 },
        ]
    },
    {
        city: "Memphis", region: "south", total: 16,
        units: [
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 3 },
            { grade: "WWT", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 4 },
            { grade: "NEW", ral: "1015", type: "40DH", desc: "40' Double Door HC", qty: 1 },
            { grade: "CW", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 8 },
        ]
    },
    {
        city: "Miami", region: "south", total: 75,
        units: [
            { grade: "IICL", ral: "3009", type: "40HC", desc: "40' High Cube", qty: 4 },
            { grade: "IICL", ral: "5010", type: "40HC", desc: "40' High Cube", qty: 10 },
            { grade: "IICL", ral: "5013", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "IICL", ral: "7035", type: "40HC", desc: "40' High Cube", qty: 6 },
            { grade: "IICL", ral: "7040", type: "40HC", desc: "40' High Cube", qty: 6 },
            { grade: "IICL", ral: "9001", type: "40HC", desc: "40' High Cube", qty: 5 },
            { grade: "IICL", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 19 },
            { grade: "NEW", ral: "3009", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "7040", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "9001", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 17 },
            { grade: "NEW", ral: "unknown", type: "4HCF", desc: "40' HC w/ FLP", qty: 3 },
        ]
    },
    {
        city: "Minneapolis", region: "midwest", total: 1,
        units: [
            { grade: "NEW", ral: "1015", type: "20HT", desc: "20' Hard Top Open Top", qty: 1 },
        ]
    },
    {
        city: "Oakland", region: "west", total: 3,
        units: [
            { grade: "WWT", ral: "unknown", type: "10GP", desc: "10' General Purpose", qty: 1 },
            { grade: "NEW", ral: "1015", type: "10SC", desc: "10' Shipping Container", qty: 1 },
            { grade: "NEW", ral: "1015", type: "20DU", desc: "20' Duocon", qty: 1 },
        ]
    },
    {
        city: "Omaha", region: "midwest", total: 2,
        units: [
            { grade: "NEW", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 1 },
        ]
    },
    {
        city: "Phoenix", region: "west", total: 2,
        units: [
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 2 },
        ]
    },
    {
        city: "St. Louis", region: "midwest", total: 4,
        units: [
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 4 },
        ]
    },
    {
        city: "Tacoma", region: "west", total: 13,
        units: [
            { grade: "NEW", ral: "1015", type: "10MM", desc: "10' MiniMAX", qty: 1 },
            { grade: "NEW", ral: "1015", type: "20DU", desc: "20' Duocon", qty: 1 },
            { grade: "NEW", ral: "7015", type: "20GP", desc: "20' General Purpose", qty: 2 },
            { grade: "NEW", ral: "1015", type: "40DH", desc: "40' Double Door HC", qty: 1 },
            { grade: "WWT", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 5 },
            { grade: "NEW", ral: "5010", type: "4HCF", desc: "40' HC w/ FLP", qty: 1 },
            { grade: "NEW", ral: "unknown", type: "4HCF", desc: "40' HC w/ FLP", qty: 1 },
        ]
    },
];

const RAL_COLORS = {
    "1012": "#D6AE01",
    "1015": "#E8DCAD",
    "3009": "#8D3B2B",
    "5010": "#1B4B8A",
    "5013": "#1D2A57",
    "5017": "#1B4F72",
    "7015": "#434B4D",
    "7016": "#383E42",
    "7035": "#CBD0CC",
    "7040": "#9DA3A6",
    "9001": "#FDF4E3",
};

// Type display name overrides (code → label shown in UI)
const TYPE_LABELS = {};
