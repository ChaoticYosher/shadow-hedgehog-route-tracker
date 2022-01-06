export enum Level {
    WESTOPOLIS = 'Westopolis',
    DIGITAL_CIRCUIT = 'DigitalCircuit',
    GLYPHIC_CANYON = 'GlyphicCanyon',
    LETHAL_HIGHWAY = 'LethalHighway',
    CRYPTIC_CASTLE = 'CrypticCastle',
    PRISON_ISLAND = 'PrisonIsland',
    CIRCUS_PARK = 'CircusPark',
    CENTRAL_CITY = 'CentralCity',
    DOOM = 'TheDoom',
    SKY_TROOPS = 'SkyTroops',
    MAD_MATRIX = 'MadMatrix',
    DEATH_RUINS = 'DeathRuins',
    ARK = 'TheArk',
    AIR_FLEET = 'AirFleet',
    IRON_JUNGLE = 'IronJungle',
    SPACE_GADGET = 'SpaceGadget',
    LOST_IMPACT = 'LostImpact',
    GUN_FORTRESS = 'GunFortress',
    BLACK_COMET = 'BlackComet',
    LAVA_SHELTER = 'LavaShelter',
    COSMIC_FALL = 'CosmicFall',
    FINAL_HAUNT = 'FinalHaunt',
}

export enum AlignmentType {
    HERO = 'H',
    NEUTRAL = 'N',
    DARK = 'D',
}

export enum ObjectiveMascot {
    SONIC = 'Sonic',
    GOAL = 'GoalRing',
    DOOM_EYE = 'DoomEye',
}

export enum Boss {
    BLACK_BULL = 'BlackBull',
    EGG_BREAKER = 'EggBreaker',
    HEAVY_DOG = 'HeavyDog',
    BLUE_FALCON = 'BlueFalcon',
}

export enum FinalBoss {
    SONIC_DIABLO = 'SonicAndDiablo',
    BLACK_DOOM = 'BlackDoom',
    EGG_DEALER = 'EggDealer',
}

export interface LevelRouteData {
    route: number;
    name: string;
    path: string;
}

export interface LevelObjectiveData {
    alignment: AlignmentType;
    stage?: string;
    boss?: string;
}

export interface LevelStageData {
    stage: string;
    objectives: LevelObjectiveData[];
}

export interface LevelData {
    routes: LevelRouteData[];
    stages: LevelStageData[];
}