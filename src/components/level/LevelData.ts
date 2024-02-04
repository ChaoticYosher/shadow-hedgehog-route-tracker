export enum Level {
    WESTOPOLIS = "Westopolis",
    DIGITAL_CIRCUIT = "Digital Circuit",
    GLYPHIC_CANYON = "Glyphic Canyon",
    LETHAL_HIGHWAY = "Lethal Highway",
    CRYPTIC_CASTLE = "Cryptic Castle",
    PRISON_ISLAND = "Prison Island",
    CIRCUS_PARK = "Circus Park",
    CENTRAL_CITY = "Central City",
    DOOM = "The Doom",
    SKY_TROOPS = "Sky Troops",
    MAD_MATRIX = "Mad Matrix",
    DEATH_RUINS = "Death Ruins",
    ARK = "The Ark",
    AIR_FLEET = "Air Fleet",
    IRON_JUNGLE = "Iron Jungle",
    SPACE_GADGET = "Space Gadget",
    LOST_IMPACT = "Lost Impact",
    GUN_FORTRESS = "Gun Fortress",
    BLACK_COMET = "Black Comet",
    LAVA_SHELTER = "Lava Shelter",
    COSMIC_FALL = "Cosmic Fall",
    FINAL_HAUNT = "Final Haunt",
}

export enum AlignmentType {
    HERO = "H",
    NEUTRAL = "N",
    DARK = "D",
}

// export enum ObjectiveMascot {
//     SONIC = 'Sonic',
//     GOAL = 'GoalRing',
//     DOOM_EYE = 'DoomEye',
// }

export enum Boss {
    BLACK_BULL = "Black Bull",
    EGG_BREAKER = "Egg Breaker",
    HEAVY_DOG = "Heavy Dog",
    BLUE_FALCON = "Blue Falcon",
}

export enum FinalBoss {
    SONIC_DIABLO = "Sonic And Diablo",
    BLACK_DOOM = "Black Doom",
    EGG_DEALER = "Egg Dealer",
}

export interface LevelRouteData {
    route: number;
    name: string;
    path: string;
}

export interface LevelObjectiveData {
    alignment: AlignmentType;
    task?: string;
    stage?: string;
    boss?: string;
}

export interface LevelStageData {
    stage: string;
    sequence: number;
    alignmentOffset: number;
    objectives: LevelObjectiveData[];
}

export interface LevelData {
    routes: LevelRouteData[];
    stages: LevelStageData[];
    // stage images
    // objective images
}

export interface StageInfoData {
    color: string;
    stage: string;
    objective: string;
}

export interface CompletedRunsData {
    routes: LevelRouteData[];
}
