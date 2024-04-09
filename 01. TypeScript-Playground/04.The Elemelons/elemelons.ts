abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): void {
        console.log("Element: Water");
        console.log("Sort: " + this.melonSort);
        console.log("Element Index: " + this.elementIndex);
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): void {
        console.log("Element: Fire");
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elementIndex}`);
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): void {
        console.log("Element: Earth");
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elementIndex}`);
    }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): void {
        console.log("Element: Air");
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elementIndex}`);
    }
}

class Melolemonmelon extends Melon {
    public elementTypes: Array<string>;
    public currentElement: string;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementTypes = ["Water", "Fire", "Earth", "Air"];
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    morph(): void {
        const element = this.elementTypes.shift();
        this.currentElement = element!;
        this.elementTypes.push(element!);
    }

    toString(): void {
        console.log("Element: " + this.currentElement);
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elementIndex}`);
    }
}

