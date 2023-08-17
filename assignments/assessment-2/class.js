class Good {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}
class Inventory {
    constructor() {
        this.goods = [];
    }

    addGood(good) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === good.id) {
                throw new Error("Good already exists in the inventory.");
            }
        }
        this.goods.push(good);
    }
    removeGood(id) {
        for (let i = 0; i < this.goods.length; i++) {
            const singleGood = this.goods[i];

            if (singleGood.id !== id) {
                throw new Error("Good not found in the inventory.");
            }
        }
        this.goods.splice(i, 1);
    }

    updateGood(id, updatedGood) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                this.quantity = updatedGood.quantity;
                this.price = updatedGood.price;
            }
        }
        throw new Error("Good not found in the inventory.");
    }
    viewGoods() {
        return this.goods;
    }
    searchGoodByName(name) {
        let matchedGoods = [];
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].name.toLowercase() === name.toLowercase()) {
                matchedGoods.push(this.goods[i]);
            }
        }
        return matchedGoods;
    }
    applyDiscount(percent) {
        this.goods[i].price ===
            this.goods[i].price - this.goods[i].price * (percent / 100);
    }
    generateSalesReport() {
        let totalRevenue = 0;
        let totalSoldItems = 0;
        totalRevenue = this.goods[i].quantity += this.goods[i].price;
        totalSoldItems += this.goods[i].quantity;
        const averagePrice = totalRevenue / totalSoldItems;
    }

    sellGood(id, quantity) {
        if (this.goods[i].id === id) {
            if (this.goods[i].quantity >= quantity) {
                this.goods[i].quantity--;
            }
        } else {
            throw new Error("Not enough quantity in stock.");
        }
    }
}
const inventory = new Inventory();
const apple = new Good(1, "Apple", 50, 0.5);
inventory.addGood.apple;
inventory.removeGood(1);
inventory.updateGood(1, updatedApple);
const result = inventory.searchGoodByName("Apple");
inventory.applyDiscount(10);
const report = inventory.generateSalesReport();
inventory.sellGood(1, 5);

console.log(inventory.addGood());
console.log(inventory.viewGoods());
console.log(inventory);
