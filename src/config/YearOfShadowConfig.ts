import { AlignmentType, Boss, FinalBoss, Level, LevelData } from "../components/level/LevelData";
import { IShadowConfig } from "./IShadowConfig";

export class YearOfShadowConfig implements IShadowConfig {
    public levelData: LevelData = {
        stages: [
            {
                stage: Level.WESTOPOLIS,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.DIGITAL_CIRCUIT,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.GLYPHIC_CANYON,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.LETHAL_HIGHWAY,
                    },
                ],
            },
            {
                stage: Level.DIGITAL_CIRCUIT,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.CRYPTIC_CASTLE,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.PRISON_ISLAND,
                    },
                ],
            },
            {
                stage: Level.GLYPHIC_CANYON,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.CRYPTIC_CASTLE,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.PRISON_ISLAND,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.CIRCUS_PARK,
                    },
                ],
            },
            {
                stage: Level.LETHAL_HIGHWAY,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.PRISON_ISLAND,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.CIRCUS_PARK,
                    },
                ],
            },
            {
                stage: Level.CRYPTIC_CASTLE,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.CENTRAL_CITY,
                        boss: Boss.EGG_BREAKER,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.DOOM,
                        boss: Boss.EGG_BREAKER,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.SKY_TROOPS,
                        boss: Boss.EGG_BREAKER,
                    },
                ],
            },
            {
                stage: Level.PRISON_ISLAND,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.DOOM,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.SKY_TROOPS,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.MAD_MATRIX,
                    },
                ],
            },
            {
                stage: Level.CIRCUS_PARK,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.SKY_TROOPS,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.MAD_MATRIX,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.DEATH_RUINS,
                    },
                ],
            },
            {
                stage: Level.CENTRAL_CITY,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.ARK,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.AIR_FLEET,
                    },
                ],
            },
            {
                stage: Level.DOOM,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.ARK,
                        boss: Boss.HEAVY_DOG,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.AIR_FLEET,
                        boss: Boss.HEAVY_DOG,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.IRON_JUNGLE,
                        boss: Boss.HEAVY_DOG,
                    },
                ],
            },
            {
                stage: Level.SKY_TROOPS,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.AIR_FLEET,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.IRON_JUNGLE,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.SPACE_GADGET,
                    },
                ],
            },
            {
                stage: Level.MAD_MATRIX,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.IRON_JUNGLE,
                        boss: Boss.EGG_BREAKER,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.SPACE_GADGET,
                        boss: Boss.EGG_BREAKER,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.LOST_IMPACT,
                        boss: Boss.EGG_BREAKER,
                    },
                ],
            },
            {
                stage: Level.DEATH_RUINS,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.SPACE_GADGET,
                        boss: Boss.BLACK_BULL,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.LOST_IMPACT,
                        boss: Boss.BLACK_BULL,
                    },
                ],
            },
            {
                stage: Level.ARK,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.GUN_FORTRESS,
                        boss: Boss.BLUE_FALCON,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.BLACK_COMET,
                        boss: Boss.BLUE_FALCON,
                    },
                ],
            },
            {
                stage: Level.AIR_FLEET,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.GUN_FORTRESS,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.BLACK_COMET,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.LAVA_SHELTER,
                    },
                ],
            },
            {
                stage: Level.IRON_JUNGLE,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.BLACK_COMET,
                        boss: Boss.EGG_BREAKER,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.LAVA_SHELTER,
                        boss: Boss.EGG_BREAKER,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.COSMIC_FALL,
                        boss: Boss.EGG_BREAKER,
                    },
                ],
            },
            {
                stage: Level.SPACE_GADGET,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        stage: Level.LAVA_SHELTER,
                    },
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.COSMIC_FALL,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.FINAL_HAUNT,
                    },
                ],
            },
            {
                stage: Level.LOST_IMPACT,
                objectives: [
                    {
                        alignment: AlignmentType.NEUTRAL,
                        stage: Level.COSMIC_FALL,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: Level.FINAL_HAUNT,
                    },
                ],
            },
            {
                stage: Level.GUN_FORTRESS,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        boss: FinalBoss.SONIC_DIABLO,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: FinalBoss.BLACK_DOOM,
                    },
                ],
            },
            {
                stage: Level.BLACK_COMET,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        boss: FinalBoss.SONIC_DIABLO,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: FinalBoss.EGG_DEALER,
                    },
                ],
            },
            {
                stage: Level.LAVA_SHELTER,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        boss: FinalBoss.EGG_DEALER,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: FinalBoss.EGG_DEALER,
                    },
                ],
            },
            {
                stage: Level.COSMIC_FALL,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        boss: FinalBoss.EGG_DEALER,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: FinalBoss.BLACK_DOOM,
                    },
                ],
            },
            {
                stage: Level.FINAL_HAUNT,
                objectives: [
                    {
                        alignment: AlignmentType.DARK,
                        boss: FinalBoss.SONIC_DIABLO,
                    },
                    {
                        alignment: AlignmentType.HERO,
                        stage: FinalBoss.BLACK_DOOM,
                    },
                ],
            },
        ],
        routes: [
            {
                route: 1,
                name: "Punishment, Thy Name is Ruin",
                path: "DDDDDD"
            },
            {
                route: 2,
                name: "Prologue to World Conquest",
                path: "DDDDDH",
            },
            {
                route: 3,
                name: "The March to a Darker World",
                path: "DDDDND",
            },
            {
                route: 4,
                name: "The Ultimate Ego",
                path: "DDDDNH",
            },
            {
                route: 5,
                name: "Purification via Ruination",
                path: "DDDHDD",
            },
            {
                route: 6,
                name: "Apogee of Darkness",
                path: "DDDHDH",
            },
            {
                route: 7,
                name: "True Soldier of Destruction",
                path: "DDDHND",
            },
            {
                route: 8,
                name: "Believe in Yourself",
                path: "DDDHNH",
            },
            {
                route: 9,
                name: "An Android’s Determination",
                path: "DDDHHD",
            },
            {
                route: 10,
                name: "For Machine, By Machine...",
                path: "DDDHHH"
            },
            {
                route: 11,
                name: "Revenge at Last",
                path: "DDNDDD"
            },
            {
                route: 12,
                name: "Ego’s Awakening",
                path: "DDNDDH"
            },
            {
                route: 13,
                name: "Destruction and Scorn",
                path: "DDNDND"
            },
            {
                route: 14,
                name: "The Last Remaining Purpose",
                path: "DDNDNH"
            },
            {
                route: 15,
                name: "The Nightmare’s Insulation",
                path: "DDNNDD"
            },
            {
                route: 16,
                name: "The Nightmare’s Sublimation",
                path: "DDNNDH"
            },
            {
                route: 17,
                name: "The Loner’s Choice",
                path: "DDNNND"
            },
            {
                route: 18,
                name: "Subjugation in Black",
                path: "DDNNNH"
            },
            {
                route: 19,
                name: "Replica’s Depression",
                path: "DDNNHD"
            },
            {
                route: 20,
                name: "Machine, Machine",
                path: "DDNNHH"
            },
            {
                route: 21,
                name: "Disciple from the Darkness",
                path: "DDNHDD"
            },
            {
                route: 22,
                name: "Beloved Clone",
                path: "DDNHDH"
            },
            {
                route: 23,
                name: "Revenge Upon the Doctor",
                path: "DDNHND"
            },
            {
                route: 24,
                name: "The Ultimate Replica",
                path: "DDNHNH"
            },
            {
                route: 25,
                name: "Sanction’s Demise",
                path: "DDNHHD"
            },
            {
                route: 26,
                name: "Along With My Home",
                path: "DDNHHH"
            },
            {
                route: 27,
                name: "The Cleansing of Darkness",
                path: "DDHDDD"
            },
            {
                route: 28,
                name: "Birth of a God",
                path: "DDHDDH"
            },
            {
                route: 29,
                name: "The Last Soldier’s Grim Fate",
                path: "DDHDND"
            },
            {
                route: 30,
                name: "Isolation and Solitude",
                path: "DDHDNH"
            },
            {
                route: 31,
                name: "Archimedes and the Tortoise",
                path: "DDHDHD"
            },
            {
                route: 32,
                name: "Where Is My Happiness?",
                path: "DDHDHH"
            },
            {
                route: 33,
                name: "Seduced By Taste of Blood",
                path: "DDHNDD"
            },
            {
                route: 34,
                name: "A Machine Made for War",
                path: "DDHNDH"
            },
            {
                route: 35,
                name: "Original Definition",
                path: "DDHNND"
            },
            {
                route: 36,
                name: "Machine Paradise",
                path: "DDHNNH"
            },
            {
                route: 37,
                name: "Last Will and Testament",
                path: "DDHNHD"
            },
            {
                route: 38,
                name: "Enveloped in Solitude",
                path: "DDHNHH"
            },
            {
                route: 39,
                name: "Parricidal Savior",
                path: "DDHHDD"
            },
            {
                route: 40,
                name: "Copy of a Savior",
                path: "DDHHDH"
            },
            {
                route: 41,
                name: "Excess of Intellect",
                path: "DDHHND"
            },
            {
                route: 42,
                name: "Crystallization of Intellect",
                path: "DDHHNH"
            },
            {
                route: 43,
                name: "The Ultimate Confrontation",
                path: "DDHHHD"
            },
            {
                route: 44,
                name: "Miracle of Love",
                path: "DDHHHH"
            },
            {
                route: 45,
                name: "The World’s Demise",
                path: "DHDDDD"
            },
            {
                route: 46,
                name: "The Ultimate Power",
                path: "DHDDDH"
            },
            {
                route: 47,
                name: "Dyed in Lovely Darkness...",
                path: "DHDDND"
            },
            {
                route: 48,
                name: "Vainglory or Abandonment?",
                path: "DHDDNH"
            },
            {
                route: 49,
                name: "Messenger of Ruination",
                path: "DHDNDD"
            },
            {
                route: 50,
                name: "Standing at the Summit",
                path: "DHDNDH"
            },
            {
                route: 51,
                name: "Controller from the Capsule",
                path: "DHDNND"
            },
            {
                route: 52,
                name: "Beyond One’s Own Power...",
                path: "DHDNNH"
            },
            {
                route: 53,
                name: "A Clone’s Determination",
                path: "DHDNHD"
            },
            {
                route: 54,
                name: "Machine Utopia",
                path: "DHDNHH"
            },
            {
                route: 55,
                name: "A Toast to the Ruler",
                path: "DHDHDD"
            },
            {
                route: 56,
                name: "Answer from the Black Comet",
                path: "DHDHDH"
            },
            {
                route: 57,
                name: "Transcendentalism",
                path: "DHDHND"
            },
            {
                route: 58,
                name: "Imperialism",
                path: "DHDHNH"
            },
            {
                route: 59,
                name: "The Weight of One’s Crimes",
                path: "DHDHHD"
            },
            {
                route: 60,
                name: "Imprisoned by the Past...",
                path: "DHDHHH"
            },
            {
                route: 61,
                name: "The Ultimate World Conquest",
                path: "DHNDDD"
            },
            {
                route: 62,
                name: "Black Angel",
                path: "DHNDDH"
            },
            {
                route: 63,
                name: "Under Darkness’ Control",
                path: "DHNDND"
            },
            {
                route: 64,
                name: "To Love Oneself",
                path: "DHNDNH"
            },
            {
                route: 65,
                name: "Revenge and Determination",
                path: "DHNDHD"
            },
            {
                route: 66,
                name: "Birth of the Robot Emperor",
                path: "DHNDHH"
            },
            {
                route: 67,
                name: "Shadow, the Black Android",
                path: "DHNNDD"
            },
            {
                route: 68,
                name: "A Solitary Android",
                path: "DHNNDH"
            },
            {
                route: 69,
                name: "Over the Original",
                path: "DHNNND"
            },
            {
                route: 70,
                name: "Machine Sunshine",
                path: "DHNNNH"
            },
            {
                route: 71,
                name: "Life is Guilty",
                path: "DHNNHD"
            },
            {
                route: 72,
                name: "Fallen Angel of Despair",
                path: "DHNNHH"
            },
            {
                route: 73,
                name: "An Eternal Rival...",
                path: "DHNHDD"
            },
            {
                route: 74,
                name: "This is Just the Beginning",
                path: "DHNHDH"
            },
            {
                route: 75,
                name: "Crystal of Tragic Knowledge",
                path: "DHNHND"
            },
            {
                route: 76,
                name: "Shadow’s Second Death...?",
                path: "DHNHNH"
            },
            {
                route: 77,
                name: "The Legend of Shadow",
                path: "DHNHHD"
            },
            {
                route: 78,
                name: "Power of Love",
                path: "DHNHHH"
            },
            {
                route: 79,
                name: "Deep Black",
                path: "DHHDDD"
            },
            {
                route: 80,
                name: "Walk My Way",
                path: "DHHDDH"
            },
            {
                route: 81,
                name: "This is Shadow’s Way of Life",
                path: "DHHDND"
            },
            {
                route: 82,
                name: "A Monarch’s Style",
                path: "DHHDNH"
            },
            {
                route: 83,
                name: "In the Gap of Sadness",
                path: "DHHDHD"
            },
            {
                route: 84,
                name: "To Be Ignorant of the Past",
                path: "DHHDHH"
            },
            {
                route: 85,
                name: "At Vengeance’s End",
                path: "DHHNDD"
            },
            {
                route: 86,
                name: "Machine Boys",
                path: "DHHNDH"
            },
            {
                route: 87,
                name: "Reborn Along with Sorrow",
                path: "DHHNND"
            },
            {
                route: 88,
                name: "With a Fate of Self-Denial",
                path: "DHHNNH"
            },
            {
                route: 89,
                name: "I Am Shadow",
                path: "DHHNHD"
            },
            {
                route: 90,
                name: "Shining Within Memory...",
                path: "DHHNHH"
            },
            {
                route: 91,
                name: "The Rise and Fall of The ARK",
                path: "DHHHND"
            },
            {
                route: 92,
                name: "Requiem for a Fallen Angel",
                path: "DHHHNH"
            },
            {
                route: 93,
                name: "Ultimate Shadow",
                path: "DHHHHD"
            },
            {
                route: 94,
                name: "For Love’s Sake",
                path: "DHHHHH"
            },
            {
                route: 95,
                name: "A Heart Awoken from Darkness",
                path: "NDDDDD"
            },
            {
                route: 96,
                name: "Destruction From Perfection",
                path: "NDDDDH"
            },
            {
                route: 97,
                name: "Darkness’ Strongest Soldier",
                path: "NDDDND"
            },
            {
                route: 98,
                name: "Severed Chains",
                path: "NDDDNH"
            },
            {
                route: 99,
                name: "Retribution Against Humanity",
                path: "NDDHDD"
            },
            {
                route: 100,
                name: "To Be Known as ‘Ultimate’",
                path: "NDDHDH"
            },
            {
                route: 101,
                name: "Dark Warrior’s Advent",
                path: "NDDHND"
            },
            {
                route: 102,
                name: "Arriving at the Ego",
                path: "NDDHNH"
            },
            {
                route: 103,
                name: "Determination of a Fake",
                path: "NDDHHD"
            },
            {
                route: 104,
                name: "Path to the Machine Empire",
                path: "NDDHHH"
            },
            {
                route: 105,
                name: "Demise Wrought by Tragedy",
                path: "NDNDDD"
            },
            {
                route: 106,
                name: "Turning Sorrow Into Strength",
                path: "NDNDDH"
            },
            {
                route: 107,
                name: "The Liberated Soldier",
                path: "NDNDND"
            },
            {
                route: 108,
                name: "Stupefaction’s End",
                path: "NDNDNH"
            },
            {
                route: 109,
                name: "Humanity’s Folly",
                path: "NDNNDD"
            },
            {
                route: 110,
                name: "Surpassing All Else",
                path: "NDNNDH"
            },
            {
                route: 111,
                name: "Soldier of Grief",
                path: "NDNNND"
            },
            {
                route: 112,
                name: "Reclaimed Heart",
                path: "NDNNNH"
            },
            {
                route: 113,
                name: "Fighting Spirit of Steel",
                path: "NDNNHD"
            },
            {
                route: 114,
                name: "Machine Soldier Uprising",
                path: "NDNNHH"
            },
            {
                route: 115,
                name: "The Devil Born From Betrayal",
                path: "NDNHDD"
            },
            {
                route: 116,
                name: "Beyond the Truth of Impact",
                path: "NDNHDH"
            },
            {
                route: 117,
                name: "The Immortal Android",
                path: "NDNHND"
            },
            {
                route: 118,
                name: "The New, Coldhearted Empire",
                path: "NDNHNH"
            },
            {
                route: 119,
                name: "A Singular Atonement",
                path: "NDNHHD"
            },
            {
                route: 120,
                name: "Spawn of the Devil",
                path: "NDNHHH"
            },
            {
                route: 121,
                name: "Black Doom’s Scheme",
                path: "NDHDDD"
            },
            {
                route: 122,
                name: "Subjugating Heaven and Earth",
                path: "NDHDDH"
            },
            {
                route: 123,
                name: "Road of the Dark Soldier",
                path: "NDHDND"
            },
            {
                route: 124,
                name: "Dark Finale",
                path: "NDHDNH"
            },
            {
                route: 125,
                name: "Realization While On Board",
                path: "NDHDHD"
            },
            {
                route: 126,
                name: "Birth of a Champion",
                path: "NDHDHH"
            },
            {
                route: 127,
                name: "With the Black Arms",
                path: "NDHNDD"
            },
            {
                route: 128,
                name: "The Road to Self-Assurance",
                path: "NDHNDH"
            },
            {
                route: 129,
                name: "The Pursuit of Dr. Eggman",
                path: "NDHNND"
            },
            {
                route: 130,
                name: "Surpassing His Creator",
                path: "NDHNNH"
            },
            {
                route: 131,
                name: "ARK, Colony of Pathos",
                path: "NDHNHD"
            },
            {
                route: 132,
                name: "Perfection Lost to Darkness",
                path: "NDHNHH"
            },
            {
                route: 133,
                name: "A New Challenge",
                path: "NDHHDD"
            },
            {
                route: 134,
                name: "The Machines’ Coup d’Etat",
                path: "NDHHDH"
            },
            {
                route: 135,
                name: "A Vow for the Victims",
                path: "NDHHND"
            },
            {
                route: 136,
                name: "The Truth of Sadness",
                path: "NDHHNH"
            },
            {
                route: 137,
                name: "The Destined Sonic Showdown",
                path: "NDHHHD"
            },
            {
                route: 138,
                name: "The Black Hero’s Rebirth",
                path: "NDHHHH"
            },
            {
                route: 139,
                name: "Truth, Thy Name is Vengeance",
                path: "NNDDDD"
            },
            {
                route: 140,
                name: "Searching for 'Ultimate'",
                path: "NNDDDH"
            },
            {
                route: 141,
                name: "Reborn Hatred for Humanity",
                path: "NNDDND"
            },
            {
                route: 142,
                name: "A Future Taken from the Past",
                path: "NNDDNH"
            },
            {
                route: 143,
                name: "The Devils' Victory Song",
                path: "NNDNDD"
            },
            {
                route: 144,
                name: "One to Succeed a God",
                path: "NNDNDH"
            },
            {
                route: 145,
                name: "Disappointed in Humanity",
                path: "NNDNND"
            },
            {
                route: 146,
                name: "Faith Taken from Solitude",
                path: "NNDNNH"
            },
            {
                route: 147,
                name: "Planted Memories",
                path: "NNDNHD"
            },
            {
                route: 148,
                name: "To Unite Humanity",
                path: "NNDNHH"
            },
            {
                route: 149,
                name: "Isolated Soldier Shadow",
                path: "NNDHDD"
            },
            {
                route: 150,
                name: "Answer Derived from Truth",
                path: "NNDHDH"
            },
            {
                route: 151,
                name: "A Fake’s Disposition",
                path: "NNDHND"
            },
            {
                route: 152,
                name: "A New World Without Betrayal",
                path: "NNDHNH"
            },
            {
                route: 153,
                name: "Together With Maria...",
                path: "NNDHHD"
            },
            {
                route: 154,
                name: "The Tragedy’s Conclusion",
                path: "NNDHHH"
            },
            {
                route: 155,
                name: "The Day That Hope Died",
                path: "NNNDDD"
            },
            {
                route: 156,
                name: "Dark Destroyer",
                path: "NNNDDH"
            },
            {
                route: 157,
                name: "Diabolical Power",
                path: "NNNDND"
            },
            {
                route: 158,
                name: "For Freedom",
                path: "NNNDNH"
            },
            {
                route: 159,
                name: "At Least, Be Like Shadow...",
                path: "NNNDHD"
            },
            {
                route: 160,
                name: "Seeking a Silent Paradise",
                path: "NNNDHH"
            },
            {
                route: 161,
                name: "The Lion’s Awakening",
                path: "NNNNDD"
            },
            {
                route: 162,
                name: "Identity",
                path: "NNNNDH"
            },
            {
                route: 163,
                name: "An Android’s Rebellion",
                path: "NNNNND"
            },
            {
                route: 164,
                name: "A New Empire’s Beginning",
                path: "NNNNNH"
            },
            {
                route: 165,
                name: "Bullets from Tears",
                path: "NNNNHD"
            },
            {
                route: 166,
                name: "Journey to Nihility",
                path: "NNNNHH"
            },
            {
                route: 167,
                name: "Shadow Surpassing Shadow",
                path: "NNNHDD"
            },
            {
                route: 168,
                name: "Dr. Eggman’s Miscalculation",
                path: "NNNHDH"
            },
            {
                route: 169,
                name: "Along With the ARK",
                path: "NNNHND"
            },
            {
                route: 170,
                name: "Requiem for the Heavens",
                path: "NNNHNH"
            },
            {
                route: 171,
                name: "Sonic Dethroned!",
                path: "NNNHHD"
            },
            {
                route: 172,
                name: "Justice Reborn in Space",
                path: "NNNHHH"
            },
            {
                route: 173,
                name: "Steel Ruler",
                path: "NNHDDD"
            },
            {
                route: 174,
                name: "For the Sake of the Self",
                path: "NNHDDH"
            },
            {
                route: 175,
                name: "Farewell to the Past",
                path: "NNHDND"
            },
            {
                route: 176,
                name: "Steel Paradise",
                path: "NNHDNH"
            },
            {
                route: 177,
                name: "The Guardian With No Past",
                path: "NNHDHD"
            },
            {
                route: 178,
                name: "The Ultimate Atonement",
                path: "NNHDHH"
            },
            {
                route: 179,
                name: "A Fake’s Aspiration",
                path: "NNHNDD"
            },
            {
                route: 180,
                name: "Machine World",
                path: "NNHNDH"
            },
            {
                route: 181,
                name: "Twilight Ark",
                path: "NNHNND"
            },
            {
                route: 182,
                name: "Compensation for a Miracle",
                path: "NNHNNH"
            },
            {
                route: 183,
                name: "The Strongest Hedgehog",
                path: "NNHNHD"
            },
            {
                route: 184,
                name: "The Ultimate Punisher",
                path: "NNHNHH"
            },
            {
                route: 185,
                name: "Voyage of Reminiscence",
                path: "NNHHND"
            },
            {
                route: 186,
                name: "Wandering’s End",
                path: "NNHHNH"
            },
            {
                route: 187,
                name: "The Ultimate Proof",
                path: "NNHHHD"
            },
            {
                route: 188,
                name: "Punisher of Love",
                path: "NNHHHH"
            },
            {
                route: 189,
                name: "Messenger from the Darkness",
                path: "NHDDDD"
            },
            {
                route: 190,
                name: "The New Ruler",
                path: "NHDDDH"
            },
            {
                route: 191,
                name: "Dark Soldier",
                path: "NHDDND"
            },
            {
                route: 192,
                name: "The Road of Light",
                path: "NHDDNH"
            },
            {
                route: 193,
                name: "The Machine-Laden Kingdom",
                path: "NHDDHD"
            },
            {
                route: 194,
                name: "New Determination",
                path: "NHDDHH"
            },
            {
                route: 195,
                name: "Birth of the Dark Soldier",
                path: "NHDNDD"
            },
            {
                route: 196,
                name: "A New Journey",
                path: "NHDNDH"
            },
            {
                route: 197,
                name: "The Android’s Opposition",
                path: "NHDNND"
            },
            {
                route: 198,
                name: "Founding of the Robot Nation",
                path: "NHDNNH"
            },
            {
                route: 199,
                name: "The Eternal Protector",
                path: "NHDNHD"
            },
            {
                route: 200,
                name: "The Sinner’s Repose",
                path: "NHDNHH"
            },
            {
                route: 201,
                name: "A Hero’s Resolution",
                path: "NHDHDD"
            },
            {
                route: 202,
                name: "The Weapons’ Empire",
                path: "NHDHDH"
            },
            {
                route: 203,
                name: "Perpetual Voyage",
                path: "NHDHND"
            },
            {
                route: 204,
                name: "A Hero’s Atonement",
                path: "NHDHNH"
            },
            {
                route: 205,
                name: "Dark Hegemony",
                path: "NHDHHD"
            },
            {
                route: 206,
                name: "And the Dream Continues",
                path: "NHDHHH"
            },
            {
                route: 207,
                name: "Fighter for Darkness",
                path: "NHNDDD"
            },
            {
                route: 208,
                name: "The Path I Believed In",
                path: "NHNDDH"
            },
            {
                route: 209,
                name: "Determination’s Daybreak",
                path: "NHNDND"
            },
            {
                route: 210,
                name: "Machine Kingdom at Dawn",
                path: "NHNDNH"
            },
            {
                route: 211,
                name: "Sinful Protector",
                path: "NHNDHD"
            },
            {
                route: 212,
                name: "At the End of the Journey",
                path: "NHNDHH"
            },
            {
                route: 213,
                name: "Surmounting the Nightmare",
                path: "NHNNDD"
            },
            {
                route: 214,
                name: "Dawn of the Machines",
                path: "NHNNDH"
            },
            {
                route: 215,
                name: "Wandering for Eternity",
                path: "NHNNND"
            },
            {
                route: 216,
                name: "At Vagrancy’s End",
                path: "NHNNNH"
            },
            {
                route: 217,
                name: "The Summit of Power",
                path: "NHNNHD"
            },
            {
                route: 218,
                name: "Under the Name of Love",
                path: "NHNNHH"
            },
            {
                route: 219,
                name: "Eternally Drifting",
                path: "NHNHND"
            },
            {
                route: 220,
                name: "The Importance of Truth",
                path: "NHNHNH"
            },
            {
                route: 221,
                name: "The Beginning of Judgment",
                path: "NHNHHD"
            },
            {
                route: 222,
                name: "This World’s Guardian",
                path: "NHNHHH"
            },
            {
                route: 223,
                name: "Light Born from Darkness",
                path: "NHHDDD"
            },
            {
                route: 224,
                name: "The Order of Steel",
                path: "NHHDDH"
            },
            {
                route: 225,
                name: "Solitary Journey",
                path: "NHHDND"
            },
            {
                route: 226,
                name: "The Fall Home",
                path: "NHHDNH"
            },
            {
                route: 227,
                name: "Sovereign of All Creation",
                path: "NHHDHD"
            },
            {
                route: 228,
                name: "I Shall Be the One to Judge",
                path: "NHHDHH"
            },
            {
                route: 229,
                name: "Gone With the Darkness",
                path: "NHHHND"
            },
            {
                route: 230,
                name: "The Ultimate Choice",
                path: "NHHHNH"
            },
            {
                route: 231,
                name: "I Am the Strongest!",
                path: "NHHHHD"
            },
            {
                route: 232,
                name: "Justice’s Awakening",
                path: "NHHHHH"
            },
            {
                route: 233,
                name: "Prelude to Ruination",
                path: "HDDDDD"
            },
            {
                route: 234,
                name: "A World United by Darkness",
                path: "HDDDDH"
            },
            {
                route: 235,
                name: "The Pulse of Darkness",
                path: "HDDDND"
            },
            {
                route: 236,
                name: "To Just Be Myself",
                path: "HDDDNH"
            },
            {
                route: 237,
                name: "Punishment in Jet Black",
                path: "HDDNDD"
            },
            {
                route: 238,
                name: "The Ruler’s First Cry",
                path: "HDDNDH"
            },
            {
                route: 239,
                name: "Darkness’ Conspiracy",
                path: "HDDNND"
            },
            {
                route: 240,
                name: "The Faint Light of Tomorrow",
                path: "HDDNNH"
            },
            {
                route: 241,
                name: "Time of Departure",
                path: "HDDNHD"
            },
            {
                route: 242,
                name: "Rise of the Machine Kingdom",
                path: "HDDNHH"
            },
            {
                route: 243,
                name: "Despair’s Quickening",
                path: "HDDHDD"
            },
            {
                route: 244,
                name: "The Beginning",
                path: "HDDHDH"
            },
            {
                route: 245,
                name: "Setting Out in the Morning",
                path: "HDDHND"
            },
            {
                route: 246,
                name: "The Weapons’ Dawn",
                path: "HDDHNH"
            },
            {
                route: 247,
                name: "Pure Ark",
                path: "HDDHHD"
            },
            {
                route: 248,
                name: "Making Up For It in the End",
                path: "HDDHHH"
            },
            {
                route: 249,
                name: "The Coming of the Dark Time",
                path: "HDNDDD"
            },
            {
                route: 250,
                name: "The Throne of God",
                path: "HDNDDH"
            },
            {
                route: 251,
                name: "God of War",
                path: "HDNDND"
            },
            {
                route: 252,
                name: "Howl of Solitude",
                path: "HDNDNH"
            },
            {
                route: 253,
                name: "Proof of Existence",
                path: "HDNDHD"
            },
            {
                route: 254,
                name: "Ardent Vow",
                path: "HDNDHH"
            },
            {
                route: 255,
                name: "A Deal With the Devil",
                path: "HDNNDD"
            },
            {
                route: 256,
                name: "A Reason to Live",
                path: "HDNNDH"
            },
            {
                route: 257,
                name: "Induplicable Thoughts",
                path: "HDNNND"
            },
            {
                route: 258,
                name: "Steel Struck With Flame",
                path: "HDNNNH"
            },
            {
                route: 259,
                name: "A Heart Bound to the ARK",
                path: "HDNNHD"
            },
            {
                route: 260,
                name: "Tears Shed by the Stars",
                path: "HDNNHH"
            },
            {
                route: 261,
                name: "Imitation Complex",
                path: "HDNHDD"
            },
            {
                route: 262,
                name: "Steel Combat Boots",
                path: "HDNHDH"
            },
            {
                route: 263,
                name: "Protector of the Ashen Moon",
                path: "HDNHND"
            },
            {
                route: 264,
                name: "A Demon Drifting",
                path: "HDNHNH"
            },
            {
                route: 265,
                name: "The Ultimate Pride",
                path: "HDNHHD"
            },
            {
                route: 266,
                name: "I Know the Will of Heaven",
                path: "HDNHHH"
            },
            {
                route: 267,
                name: "Ego Dyed in Black",
                path: "HDHDDD"
            },
            {
                route: 268,
                name: "Isolation By Choice",
                path: "HDHDDH"
            },
            {
                route: 269,
                name: "Faith Without Falsehood",
                path: "HDHDND"
            },
            {
                route: 270,
                name: "Machine Empire",
                path: "HDHDNH"
            },
            {
                route: 271,
                name: "The Eternally-Closed Door",
                path: "HDHDHD"
            },
            {
                route: 272,
                name: "The Sealed-Away Ark of Sin",
                path: "HDHDHH"
            },
            {
                route: 273,
                name: "Silver Emergence",
                path: "HDHNDD"
            },
            {
                route: 274,
                name: "Pulsating Supercurrent",
                path: "HDHNDH"
            },
            {
                route: 275,
                name: "The Reason I Was Born",
                path: "HDHNND"
            },
            {
                route: 276,
                name: "The Dark Part of the Galaxy",
                path: "HDHNNH"
            },
            {
                route: 277,
                name: "The View From Atop the World",
                path: "HDHNHD"
            },
            {
                route: 278,
                name: "Maria’s Testament",
                path: "HDHNHH"
            },
            {
                route: 279,
                name: "A Genius Scientist’s Lineage",
                path: "HDHHND"
            },
            {
                route: 280,
                name: "Distorted Truth",
                path: "HDHHNH"
            },
            {
                route: 281,
                name: "A Counterfeit Existence",
                path: "HDHHHD"
            },
            {
                route: 282,
                name: "Beloved Memories",
                path: "HDHHHH"
            },
            {
                route: 283,
                name: "Birth of a Devil",
                path: "HHDDDD"
            },
            {
                route: 284,
                name: "A Dark Myth’s Beginnings",
                path: "HHDDDH"
            },
            {
                route: 285,
                name: "Black Thunder",
                path: "HHDDND"
            },
            {
                route: 286,
                name: "The Torn-Away Necklace",
                path: "HHDDNH"
            },
            {
                route: 287,
                name: "A Soul Sheltered by Iron",
                path: "HHDDHD"
            },
            {
                route: 288,
                name: "Steel Nation’s Decree",
                path: "HHDDHH"
            },
            {
                route: 289,
                name: "Coronation of Darkness",
                path: "HHDNDD"
            },
            {
                route: 290,
                name: "Opened Eyes",
                path: "HHDNDH"
            },
            {
                route: 291,
                name: "The Doctor’s Lie",
                path: "HHDNND"
            },
            {
                route: 292,
                name: "The Uninvited Successor",
                path: "HHDNNH"
            },
            {
                route: 293,
                name: "The Closed Pandora’s Box",
                path: "HHDNHD"
            },
            {
                route: 294,
                name: "A Heart Bound by Sin",
                path: "HHDNHH"
            },
            {
                route: 295,
                name: "Courage from Turning Gears",
                path: "HHDHDD"
            },
            {
                route: 296,
                name: "Fullmetal Prince",
                path: "HHDHDH"
            },
            {
                route: 297,
                name: "Time’s Watchman",
                path: "HHDHND"
            },
            {
                route: 298,
                name: "Galaxy’s Requiem",
                path: "HHDHNH"
            },
            {
                route: 299,
                name: "Charm of the Chaos Emeralds",
                path: "HHDHHD"
            },
            {
                route: 300,
                name: "Promise of a Far-Off Day",
                path: "HHDHHH"
            },
            {
                route: 301,
                name: "The Grim Reaper’s Horn",
                path: "HHNDDD"
            },
            {
                route: 302,
                name: "A Flame Extinguished by Fate",
                path: "HHNDDH"
            },
            {
                route: 303,
                name: "Shouting at the Morning Sun",
                path: "HHNDND"
            },
            {
                route: 304,
                name: "Iron Ambition",
                path: "HHNDNH"
            },
            {
                route: 305,
                name: "Sleeping on Hallowed Ground",
                path: "HHNDHD"
            },
            {
                route: 306,
                name: "Explanation of the Truth",
                path: "HHNDHH"
            },
            {
                route: 307,
                name: "An Android’s Dream",
                path: "HHNNDD"
            },
            {
                route: 308,
                name: "Metallic Quickening",
                path: "HHNNDH"
            },
            {
                route: 309,
                name: "Funeral Procession in Space",
                path: "HHNNND"
            },
            {
                route: 310,
                name: "Lost to the Universe’s Abyss",
                path: "HHNNNH"
            },
            {
                route: 311,
                name: "Destiny for Two",
                path: "HHNNHD"
            },
            {
                route: 312,
                name: "The Spun Threads of Fate",
                path: "HHNNHH"
            },
            {
                route: 313,
                name: "Ark of the Heavens",
                path: "HHNHND"
            },
            {
                route: 314,
                name: "Ghost of The ARK",
                path: "HHNHNH"
            },
            {
                route: 315,
                name: "A Pair of Shooting Stars",
                path: "HHNHHD"
            },
            {
                route: 316,
                name: "The One Who Maria Entrusted",
                path: "HHNHHH"
            },
            {
                route: 317,
                name: "A.I.’s Enlightenment",
                path: "HHHDDD"
            },
            {
                route: 318,
                name: "A Dying Empire’s Cry",
                path: "HHHDDH"
            },
            {
                route: 319,
                name: "Moon of Atonement",
                path: "HHHDND"
            },
            {
                route: 320,
                name: "Tear-Soaked Hometown",
                path: "HHHDNH"
            },
            {
                route: 321,
                name: "Sparks on the Horizon",
                path: "HHHDHD"
            },
            {
                route: 322,
                name: "A Use for a Saved Life",
                path: "HHHDHH"
            },
            {
                route: 323,
                name: "Coffin of Memories",
                path: "HHHHND"
            },
            {
                route: 324,
                name: "The Self-Imposed Seal",
                path: "HHHHNH"
            },
            {
                route: 325,
                name: "Pretense in the Mirror",
                path: "HHHHHD"
            },
            {
                route: 326,
                name: "A Missive from 50 Years Ago",
                path: "HHHHHH"
            },
        ],
    };
    public completedLevels: number[] = [
        270,
    ];
}
