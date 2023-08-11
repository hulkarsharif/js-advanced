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
            if (this.goods[i].id !== id) {
                throw new Error("Good not found in the inventory.");
                this.goods.splice(i, 1);
            }
        }
        throw new Error("This good does not exist in the inventory.");
    }

    updateGood(id, updatedGood) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                this.name = updatedGood.name;
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
            if (this.goods[i].name.toLowercase().inludes(name.toLowercase())) {
                matchedGoods.push(this.goods[i]);
            }
        }
        return matchedGoods;
    }
}
