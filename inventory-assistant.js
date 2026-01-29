// Step 1
let itemName = "USB-C Cable";

const unitCost = 3.25;
let currentStock = 120;
let reorderLevel = 80;
let targetStock = 200;
let weeklyDemand = 40;
let supplierLeadTimeWeeks = 2;

// Step 2
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;

let stockDeficit = Math.max(0, targetStock - currentStock);

let reorderQuantity =
  (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks)
    ? Math.ceil(stockDeficit)
    : 0;

let estimatedReorderCost = reorderQuantity * unitCost;

let reorderNow =
  currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

// Step 3
console.log("Item Name:", itemName);
console.log("Weeks of Cover:", weeksOfCover.toFixed(2));
console.log("Reorder Now?", reorderNow);
console.log("Recommended Reorder Quantity:", reorderQuantity);
console.log("Estimated Cost: $", estimatedReorderCost.toFixed(2));
