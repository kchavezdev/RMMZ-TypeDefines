declare class Game_Enemy extends Game_Battler {
    protected _enemyId: number;
    protected _letter: string;
    protected _plural: boolean;
    protected _screenX: number;
    protected _screenY: number;
    constructor(enemyId: number, x: number, y: number);
    initialize(enemyId: number, x: number, y: number): void;
    initMembers(): void;
    setup(enemyId: number, x: number, y: number): void;
    isEnemy(): boolean;
    friendsUnit(): Game_Troop;
    opponentsUnit(): Game_Party;
    index(): number;
    isBattleMember(): boolean;
    enemyId(): number;
    enemy(): RMMZData.Enemy;
    traitObjects(): {
        traits: RMMZData.Trait[];
    }[];
    paramBase(paramId: number): number;
    exp(): number;
    gold(): number;
    makeDropItems(): ItemObject[];
    dropItemRate(): 1 | 2;
    itemObject(kind: number, dataId: number): RMMZData.Armor | RMMZData.Item | RMMZData.Weapon | null;
    isSpriteVisible(): boolean;
    screenX(): number;
    screenY(): number;
    battlerName(): string;
    battlerHue(): number;
    originalName(): string;
    name(): string;
    isLetterEmpty(): boolean;
    setLetter(letter: string): void;
    setPlural(plural: boolean): void;
    performActionStart(action: {
        isGuard: () => any;
    }): void;
    performAction(action: Game_Action): void;
    performActionEnd(): void;
    performDamage(): void;
    performCollapse(): void;
    transform(enemyId: number): void;
    meetsCondition(action: RMMZData.Action): boolean;
    meetsTurnCondition(param1: number, param2: number): boolean;
    meetsHpCondition(param1: number, param2: number): boolean;
    meetsMpCondition(param1: number, param2: number): boolean;
    meetsStateCondition(param: number): boolean;
    meetsPartyLevelCondition(param: number): boolean;
    meetsSwitchCondition(param: any): boolean;
    isActionValid(action: RMMZData.Action): boolean;
    selectAction(actionList: any[], ratingZero: number): any;
    selectAllActions(actionList: any[]): void;
    makeActions(): void;
}
