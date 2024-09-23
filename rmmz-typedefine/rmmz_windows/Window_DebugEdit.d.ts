declare class Window_DebugEdit extends Window_Selectable {
    protected _mode: "switch" | "variable";
    protected _topId: number;
    initialize(rect: Rectangle): void;
    maxItems(): number;
    drawItem(index: number): void;
    itemName(dataId: number): string;
    itemStatus(dataId: number): string;
    setMode(mode: "switch" | "variable"): void;
    setTopId(id: number): void;
    currentId(): number;
    update(): void;
    updateSwitch(): void;
    updateVariable(): void;
    deltaForVariable(): 0 | 1 | 10 | -1 | -10;
}
