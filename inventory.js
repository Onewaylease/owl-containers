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
        city: "Chicago", region: "midwest", total: 104,
        units: [
            { grade: "NEW", ral: "1015", type: "10SC", desc: "10' Shipping Container", qty: 18 },
            { grade: "NEW", ral: "1015", type: "20DD", desc: "20' Double Door", qty: 4 },
            { grade: "CW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "IICL", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "1012", type: "20GP", desc: "20' General Purpose", qty: 3 },
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 53 },
            { grade: "NEW", ral: "7035", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 6 },
            { grade: "CW", ral: "5010", type: "20OT", desc: "20' Open Top", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4H4S", desc: "40' HC Special", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 15 },
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
        city: "Denver", region: "west", total: 1,
        units: [
            { grade: "CW", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 1 },
        ]
    },
    {
        city: "Detroit", region: "midwest", total: 1,
        units: [
            { grade: "NEW", ral: "1015", type: "20HT", desc: "20' Hard Top Open Top", qty: 1 },
        ]
    },
    {
        city: "El Paso", region: "south", total: 3,
        units: [
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 3 },
        ]
    },
    {
        city: "Houston", region: "south", total: 80,
        units: [
            { grade: "NEW", ral: "1015", type: "10MM", desc: "10' MiniMAX", qty: 4 },
            { grade: "CW", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 3 },
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 9 },
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
            { grade: "IICL", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 10 },
            { grade: "NEW", ral: "1015", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "3009", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "5013", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "7035", type: "40HC", desc: "40' High Cube", qty: 3 },
            { grade: "NEW", ral: "7040", type: "40HC", desc: "40' High Cube", qty: 1 },
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
        city: "LA/Long Beach", region: "west", total: 5,
        units: [
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "unknown", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "1015", type: "20OS", desc: "20' Open Side", qty: 1 },
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
        city: "Miami", region: "south", total: 79,
        units: [
            { grade: "NEW", ral: "1015", type: "40DH", desc: "40' Double Door HC", qty: 2 },
            { grade: "IICL", ral: "3009", type: "40HC", desc: "40' High Cube", qty: 6 },
            { grade: "IICL", ral: "5010", type: "40HC", desc: "40' High Cube", qty: 9 },
            { grade: "IICL", ral: "5013", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "IICL", ral: "5017", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "IICL", ral: "7035", type: "40HC", desc: "40' High Cube", qty: 8 },
            { grade: "IICL", ral: "7040", type: "40HC", desc: "40' High Cube", qty: 7 },
            { grade: "IICL", ral: "9001", type: "40HC", desc: "40' High Cube", qty: 4 },
            { grade: "IICL", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 20 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 21 },
        ]
    },
    {
        city: "Minneapolis", region: "midwest", total: 1,
        units: [
            { grade: "NEW", ral: "1015", type: "20HT", desc: "20' Hard Top Open Top", qty: 1 },
        ]
    },
    {
        city: "Oakland", region: "west", total: 4,
        units: [
            { grade: "WWT", ral: "unknown", type: "10GP", desc: "10' General Purpose", qty: 1 },
            { grade: "NEW", ral: "1015", type: "10SC", desc: "10' Shipping Container", qty: 1 },
            { grade: "NEW", ral: "9003", type: "20DD", desc: "20' Double Door", qty: 1 },
            { grade: "NEW", ral: "1015", type: "20DU", desc: "20' Duocon", qty: 1 },
        ]
    },
    {
        city: "Omaha", region: "midwest", total: 2,
        units: [
            { grade: "NEW", ral: "1015", type: "20GP", desc: "20' General Purpose", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 1 },
        ]
    },
    {
        city: "St. Louis", region: "midwest", total: 4,
        units: [
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 4 },
        ]
    },
    {
        city: "Tacoma", region: "west", total: 9,
        units: [
            { grade: "NEW", ral: "1015", type: "10MM", desc: "10' MiniMAX", qty: 1 },
            { grade: "NEW", ral: "1015", type: "20DU", desc: "20' Duocon", qty: 1 },
            { grade: "WWT", ral: "unknown", type: "40HC", desc: "40' High Cube", qty: 1 },
            { grade: "NEW", ral: "1015", type: "4HCF", desc: "40' HC w/ FLP", qty: 4 },
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

// State
let activeGrades = new Set(['all']);
let activeRals = new Set(['all']);
let activeTypes = new Set(['all']);
let cityQuery = '';
let currentSort = 'city-asc';
let ignoreScroll = false;


// DOM Elements
const inventoryRoot = document.getElementById('inventoryRoot');
const citySearch = document.getElementById('citySearch');
const filterToggle = document.getElementById('filterToggle');
const stickyConsole = document.getElementById('stickyConsole');
const openFilters = document.getElementById('openFilters');

const gradeFilters = document.getElementById('gradeFilters');
const colorFilters = document.getElementById('colorFilters');
const typeFilters = document.getElementById('typeFilters');

// Initialization
function init() {
    console.log("Initializing OWL Inventory Engine...");
    generateFilters();
    setupEventListeners();
    renderInventory();
}

function generateFilters() {
    console.log("Generating filters...");
    const grades = new Set();
    const rals = new Set();
    const types = new Set();

    INVENTORY_DATA.forEach(group => {
        group.units.forEach(unit => {
            if (unit.grade) grades.add(unit.grade);
            if (unit.ral && unit.ral !== 'unknown') {
                rals.add(unit.ral);
            } else {
                rals.add('Unknown');
            }
            if (unit.type) types.add(unit.type);
        });
    });

    // Custom Grade Order Priority
    const gradePriority = ['NEW', '3TRP', 'IICL', 'CW', 'WWT', 'ASIS'];
    const sortedGrades = Array.from(grades).sort((a, b) => {
        let indexA = gradePriority.indexOf(a);
        let indexB = gradePriority.indexOf(b);
        if (indexA === -1) indexA = 99;
        if (indexB === -1) indexB = 99;
        return indexA - indexB;
    });

    // Priority Order: 1) Type, 2) Grade, 3) Color
    renderChips(document.getElementById('typeFilters'), Array.from(types).sort(), 'type');
    renderChips(document.getElementById('gradeFilters'), sortedGrades, 'grade');
    renderChips(document.getElementById('colorFilters'), Array.from(rals).sort(), 'color', true);
}

function renderChips(container, items, type, isRal = false) {
    if (!container) return;
    let html = `<button class="chip active" data-filter-${type}="all">All</button>`;
    
    items.forEach(item => {
        const val = item;
        const display = isRal
            ? (item === 'Unknown' ? 'Unknown' : 'RAL ' + item)
            : (TYPE_LABELS[item] || item);
        
        if (isRal) {
            const hex = RAL_COLORS[item] || '#4B5563';
            html += `<button class="chip chip-ral" data-filter-${type}="${val}" style="background-color: ${hex}">${display}</button>`;
        } else {
            html += `<button class="chip" data-filter-${type}="${val}">${display}</button>`;
        }
    });
    container.innerHTML = html;
}

function setupEventListeners() {
    const handleSearch = (e) => {
        cityQuery = e.target.value.toLowerCase().trim();
        renderInventory();
    };
    
    const searchBar = document.getElementById('citySearch');
    if (searchBar) searchBar.oninput = handleSearch;

    // Robust delegation for filter chips
    document.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        const grade = chip.getAttribute('data-filter-grade');
        const color = chip.getAttribute('data-filter-color');
        const type = chip.getAttribute('data-filter-type');

        if (grade) toggleFilter(activeGrades, grade, '[data-filter-grade]');
        if (color) toggleFilter(activeRals, color, '[data-filter-color]');
        if (type) toggleFilter(activeTypes, type, '[data-filter-type]');

        if (grade || color || type) {
            ignoreScroll = true;
            renderInventory();
            // Increased timeout to 1000ms to handle complex layout recalculations on mobile devices
            setTimeout(() => { ignoreScroll = false; }, 1000);
        }
    });

    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSort = btn.dataset.sort;
            ignoreScroll = true;
            renderInventory();
            setTimeout(() => { ignoreScroll = false; }, 1000);
        };
    });

    if (filterToggle && stickyConsole) {
        filterToggle.onclick = () => {
            stickyConsole.classList.toggle('is-expanded');
        };
    }

    // REACTIVE HEADER: Auto-minimize on scroll down (Mobile Only)
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768 || !stickyConsole || ignoreScroll) return;
        const currentScroll = window.pageYOffset;
        // Only minimize if we've scrolled down a significant amount
        const delta = currentScroll - lastScroll;
        if (delta > 20 && currentScroll > 150) {
            stickyConsole.classList.remove('is-expanded');
        }


        lastScroll = currentScroll;
    }, { passive: true });
}

function toggleFilter(set, value, selector) {
    if (value === 'all') {
        set.clear();
        set.add('all');
    } else {
        set.delete('all');
        if (set.has(value)) {
            set.delete(value);
            if (set.size === 0) set.add('all');
        } else {
            set.add(value);
        }
    }
    
    // Update UI state for ALL chips in this filter group
    document.querySelectorAll(selector).forEach(chip => {
        const chipVal = chip.getAttribute('data-filter-grade') || 
                        chip.getAttribute('data-filter-color') || 
                        chip.getAttribute('data-filter-type');
        chip.classList.toggle('active', set.has(chipVal));
    });
}

function renderInventory() {
    console.log("Rendering inventory table...");
    const root = document.getElementById('inventoryRoot');
    if (!root) return;

    let filteredData = INVENTORY_DATA.map(group => {
        const units = group.units.filter(unit => {
            const gradeMatch = activeGrades.has('all') || activeGrades.has(unit.grade);
            const unitRal = (unit.ral && unit.ral !== 'unknown') ? unit.ral : 'Unknown';
            const ralMatch = activeRals.has('all') || activeRals.has(unitRal);
            const typeMatch = activeTypes.has('all') || activeTypes.has(unit.type);
            return gradeMatch && ralMatch && typeMatch;
        });
        return { ...group, units, filteredTotal: units.reduce((s, u) => s + u.qty, 0) };
    }).filter(group => {
        const cityMatch = group.city.toLowerCase().includes(cityQuery);
        return cityMatch && group.units.length > 0;
    });

    if (currentSort === 'city-asc') filteredData.sort((a,b) => a.city.localeCompare(b.city));
    if (currentSort === 'city-desc') filteredData.sort((a,b) => b.city.localeCompare(a.city));

    if (filteredData.length === 0) {
        root.innerHTML = `
            <div class="no-results">
                <h2 class="stenciled">No Inventory Found</h2>
                <p>Try adjusting your search filters or clearing the search bar.</p>
            </div>`;
        return;
    }

    root.innerHTML = filteredData.map(group => `
        <div class="city-group">
            <div class="city-header stenciled">
                <span class="city-label">${group.city}</span>
                <span class="city-units">${group.filteredTotal} UNITS</span>
            </div>
            <table class="inventory-table">
                <thead>
                    <tr>
                        <th class="col-type">Type / Desc</th>
                        <th class="col-grade">Grade</th>
                        <th class="col-qty">QTY</th>
                        <th class="col-color">Color (RAL)</th>
                    </tr>
                </thead>
                <tbody>
                    ${group.units.map(unit => {
                        const isUnknown = !unit.ral || unit.ral === 'unknown';
                        const displayRal = isUnknown ? 'Unknown' : 'RAL ' + unit.ral;
                        return `
                        <tr>
                            <td data-label="Type" class="col-type">
                                <span style="font-weight:800">${unit.type}</span>
                                <span class="unit-desc">${unit.desc}</span>
                            </td>
                            <td data-label="Grade" class="col-grade">
                                <span class="grade-indicator ${unit.grade === 'NEW' ? 'new' : ''}">${unit.grade}</span>
                            </td>
                            <td data-label="Stock" class="col-qty qty-cell">${unit.qty}</td>
                            <td data-label="Color" class="col-color">
                                <div class="corrugated-panel" style="background-color: ${RAL_COLORS[unit.ral] || '#4B5563'}">
                                    <span class="stencil-code">${isUnknown ? '???' : unit.ral}</span>
                                </div>
                            </td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `).join('');
}

// Start the engine
init();
