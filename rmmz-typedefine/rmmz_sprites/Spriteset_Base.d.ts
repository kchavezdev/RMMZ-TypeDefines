declare class Spriteset_Base extends Sprite {
    protected _animationSprites: (Sprite_Animation | Sprite_AnimationMV)[];
    protected _baseSprite: Sprite;
    protected _blackScreen: any;
    protected _baseColorFilter: ColorFilter;
    protected _pictureContainer: Sprite;
    protected _timerSprite: Sprite_Timer;
    protected _overallColorFilter: ColorFilter;
    _effectsContainer: any;
    initialize(): void;
    destroy(options?: any): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    createUpperLayer(): void;
    update(): void;
    createBaseSprite(): void;
    createBaseFilters(): void;
    createPictures(): void;
    pictureContainerRect(): Rectangle;
    createTimer(): void;
    createOverallFilters(): void;
    updateBaseFilters(): void;
    updateOverallFilters(): void;
    updatePosition(): void;
    findTargetSprite(target: any): any;
    updateAnimations(): void;
    processAnimationRequests(): void;
    createAnimation(request: IAnimationRequest): void;
    createAnimationSprite(targets: any[], animation: any, mirror: boolean, delay: number): void;
    isMVAnimation(animation: RMMZData.Animation): boolean;
    makeTargetSprites(targets: any): any[];
    lastAnimationSprite(): Sprite_Animation | Sprite_AnimationMV;
    isAnimationForEach(animation: RMMZData.Animation): boolean;
    animationBaseDelay(): number;
    animationNextDelay(): number;
    animationShouldMirror(target: Game_Battler): boolean;
    removeAnimation(sprite: Sprite_Animation | Sprite_AnimationMV): void;
    removeAllAnimations(): void;
    isAnimationPlaying(): boolean;
}
