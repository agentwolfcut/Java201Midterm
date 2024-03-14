// 65130500064 Phurikorn Saengsuwan
class Stock {
    itemsInStock = [];

    constructor() {
        this.itemsInStock = [];
    }

    findItemIndex(itemId) {
        return this.itemsInStock.findIndex(item => item.itemId === itemId);
    }

    addItem(itemId, quantity) {
        if (itemId == null || quantity == null || itemId === undefined || quantity === undefined) {
            return -1;
        }
        const i = this.findItemIndex(itemId);
        if (i !== -1) {
            this.itemsInStock[i].quantity += quantity;
        } else {
            this.itemsInStock.push({ itemId, quantity });
        }
        return quantity;
    }

    addItems(stockItems) {
        let addedCount = 0;
        for (const item of stockItems) {
            const result = this.addItem(item.itemId, item.quantity);
            if (result !== -1) {
                addedCount++;
            }
        }
        return addedCount;
    }

    sell(itemId, amount) {
        const i = this.findItemIndex(itemId);
        if (i === -1) {
            return -1; 
        }
        const sellingAmount = amount; 
        this.itemsInStock[i].quantity -= sellingAmount;
        return sellingAmount;
    }

    getTotalStockAmount() {
        let totalAmount = 0;
        for (const item of this.itemsInStock) {
            totalAmount += item.quantity;
        }
        return totalAmount;
    }
}

const storeStock = new Stock();
console.log(storeStock.addItems([{ itemId: 101, quantity: 10 },{ itemId: 102, quantity: 500 }]));
console.log(storeStock.sell(101, 10)); 
console.log(storeStock.getTotalStockAmount()); 
