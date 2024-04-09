class Box<T> {
    private _boxes = [];

    public add(element: T): void {
        this._boxes.push(element);
    }

    public remove(): void {
        this._boxes.pop();
    }

    get count(): number {
        return this._boxes.length;
    }
}
