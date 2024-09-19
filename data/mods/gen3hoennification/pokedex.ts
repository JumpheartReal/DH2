export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	bulbasaur: {
		"exists": true,
		"tags": [],
		"num": 1,
		"name": "Bulbasaur",
		"types": [
				"Grass",
				"Poison"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 45,
				"atk": 49,
				"def": 49,
				"spa": 65,
				"spd": 65,
				"spe": 45
		},
		"abilities": {
				"0": "Overgrow",
				"1": "Chlorophyll"
		},
		"weightkg": 6.9,
		"evos": [
				"Ivysaur"
		],
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "LC",
		"id": "bulbasaur",
		"fullname": "pokemon: Bulbasaur",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bulbasaur",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 318,
		"weighthg": 69,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ivysaur: {
		"exists": true,
		"tags": [],
		"num": 2,
		"name": "Ivysaur",
		"types": [
				"Grass",
				"Poison"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 60,
				"atk": 62,
				"def": 63,
				"spa": 80,
				"spd": 80,
				"spe": 60
		},
		"abilities": {
				"0": "Overgrow",
				"1": "Chlorophyll"
		},
		"weightkg": 13,
		"prevo": "Bulbasaur",
		"evoLevel": 16,
		"evos": [
				"Venusaur"
		],
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "NFE",
		"id": "ivysaur",
		"fullname": "pokemon: Ivysaur",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ivysaur",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 130,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	venusaur: {
		"exists": true,
		"tags": [],
		"num": 3,
		"name": "Venusaur",
		"types": [
				"Grass",
				"Poison"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 80,
				"atk": 82,
				"def": 83,
				"spa": 100,
				"spd": 100,
				"spe": 80
		},
		"abilities": {
				"0": "Overgrow",
				"1": "Chlorophyll"
		},
		"weightkg": 100,
		"prevo": "Ivysaur",
		"evoLevel": 32,
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"otherFormes": [
				"Venusaur-Mega"
		],
		"formeOrder": [
				"Venusaur",
				"Venusaur-Mega"
		],
		"canGigantamax": "G-Max Vine Lash",
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "venusaur",
		"fullname": "pokemon: Venusaur",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Venusaur",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 1000,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	venusaurmega: {
		"exists": true,
		"tags": [],
		"num": 3,
		"name": "Venusaur-Mega",
		"baseSpecies": "Venusaur",
		// "forme": "Mega",
		"types": [
				"Grass",
				"Poison"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 80,
				"atk": 100,
				"def": 123,
				"spa": 122,
				"spd": 120,
				"spe": 80
		},
		"abilities": {
				"0": "Thick Fat"
		},
		"weightkg": 155.5,
		"eggGroups": [
				"Monster",
				"Grass"
		],
		// "requiredItem": "Venusaurite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "venusaurmega",
		"fullname": "pokemon: Venusaur-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Venusaurite"
		// ],
		"bst": 625,
		"weighthg": 1555,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Venusaur",
		// "changesFrom": "Venusaur"
	},
	charmander: {
		"exists": true,
		"tags": [],
		"num": 4,
		"name": "Charmander",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 39,
				"atk": 52,
				"def": 43,
				"spa": 60,
				"spd": 50,
				"spe": 65
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 8.5,
		"evos": [
				"Charmeleon"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "LC",
		"id": "charmander",
		"fullname": "pokemon: Charmander",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Charmander",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 309,
		"weighthg": 85,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	charmeleon: {
		"exists": true,
		"tags": [],
		"num": 5,
		"name": "Charmeleon",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 58,
				"atk": 64,
				"def": 58,
				"spa": 80,
				"spd": 65,
				"spe": 80
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 19,
		"prevo": "Charmander",
		"evoLevel": 16,
		"evos": [
				"Charizard"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "NFE",
		"id": "charmeleon",
		"fullname": "pokemon: Charmeleon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Charmeleon",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 190,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	charizard: {
		"exists": true,
		"tags": [],
		"num": 6,
		"name": "Charizard",
		"types": [
				"Fire",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 78,
				"atk": 84,
				"def": 78,
				"spa": 109,
				"spd": 85,
				"spe": 100
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 90.5,
		"prevo": "Charmeleon",
		"evoLevel": 36,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"otherFormes": [
				"Charizard-Mega-X",
				"Charizard-Mega-Y"
		],
		"formeOrder": [
				"Charizard",
				"Charizard-Mega-X",
				"Charizard-Mega-Y"
		],
		"canGigantamax": "G-Max Wildfire",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "charizard",
		"fullname": "pokemon: Charizard",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Charizard",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 534,
		"weighthg": 905,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	charizardmegax: {
		"exists": true,
		"tags": [],
		"num": 6,
		"name": "Charizard-Mega-X",
		"baseSpecies": "Charizard",
		"forme": "Mega-X",
		"types": [
				"Fire",
				"Dragon"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 78,
				"atk": 130,
				"def": 111,
				"spa": 130,
				"spd": 85,
				"spe": 100
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 110.5,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		// "requiredItem": "Charizardite X",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "charizardmegax",
		"fullname": "pokemon: Charizard-Mega-X",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Charizardite X"
		// ],
		"bst": 634,
		"weighthg": 1105,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Charizard",
		// "changesFrom": "Charizard"
	},
	charizardmegay: {
		"exists": true,
		"tags": [],
		"num": 6,
		"name": "Charizard-Mega-Y",
		"baseSpecies": "Charizard",
		"forme": "Mega-Y",
		"types": [
				"Fire",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 78,
				"atk": 104,
				"def": 78,
				"spa": 159,
				"spd": 115,
				"spe": 100
		},
		"abilities": {
				"0": "Drought"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		// "requiredItem": "Charizardite Y",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "charizardmegay",
		"fullname": "pokemon: Charizard-Mega-Y",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Charizardite Y"
		// ],
		"bst": 634,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Charizard",
		// "changesFrom": "Charizard"
	},
	squirtle: {
		"exists": true,
		"tags": [],
		"num": 7,
		"name": "Squirtle",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 44,
				"atk": 48,
				"def": 65,
				"spa": 50,
				"spd": 64,
				"spe": 43
		},
		"abilities": {
				"0": "Torrent",
				"1": "Rain Dish"
		},
		"weightkg": 9,
		"evos": [
				"Wartortle"
		],
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "LC",
		"id": "squirtle",
		"fullname": "pokemon: Squirtle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Squirtle",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 314,
		"weighthg": 90,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wartortle: {
		"exists": true,
		"tags": [],
		"num": 8,
		"name": "Wartortle",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 59,
				"atk": 63,
				"def": 80,
				"spa": 65,
				"spd": 80,
				"spe": 58
		},
		"abilities": {
				"0": "Torrent",
				"1": "Rain Dish"
		},
		"weightkg": 22.5,
		"prevo": "Squirtle",
		"evoLevel": 16,
		"evos": [
				"Blastoise"
		],
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "NFE",
		"id": "wartortle",
		"fullname": "pokemon: Wartortle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Wartortle",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 225,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	blastoise: {
		"exists": true,
		"tags": [],
		"num": 9,
		"name": "Blastoise",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 79,
				"atk": 83,
				"def": 100,
				"spa": 85,
				"spd": 105,
				"spe": 78
		},
		"abilities": {
				"0": "Torrent",
				"1": "Rain Dish"
		},
		"weightkg": 85.5,
		"prevo": "Wartortle",
		"evoLevel": 36,
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"otherFormes": [
				"Blastoise-Mega"
		],
		"formeOrder": [
				"Blastoise",
				"Blastoise-Mega"
		],
		"canGigantamax": "G-Max Cannonade",
		"tier": "RUBL",
		"doublesTier": "(DUU)",
		"id": "blastoise",
		"fullname": "pokemon: Blastoise",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Blastoise",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 855,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	blastoisemega: {
		"exists": true,
		"tags": [],
		"num": 9,
		"name": "Blastoise-Mega",
		"baseSpecies": "Blastoise",
		// "forme": "Mega",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 79,
				"atk": 103,
				"def": 120,
				"spa": 135,
				"spd": 115,
				"spe": 78
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 101.1,
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		// "requiredItem": "Blastoisinite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "blastoisemega",
		"fullname": "pokemon: Blastoise-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Blastoisinite"
		// ],
		"bst": 630,
		"weighthg": 1011,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Blastoise",
		// "changesFrom": "Blastoise"
	},
	caterpie: {
		"exists": true,
		"tags": [],
		"num": 10,
		"name": "Caterpie",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 45,
				"atk": 30,
				"def": 35,
				"spa": 20,
				"spd": 20,
				"spe": 45
		},
		"abilities": {
				"0": "Shield Dust",
				"1": "Run Away"
		},
		"weightkg": 2.9,
		"evos": [
				"Metapod"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "caterpie",
		"fullname": "pokemon: Caterpie",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Caterpie",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 195,
		"weighthg": 29,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	metapod: {
		"exists": true,
		"tags": [],
		"num": 11,
		"name": "Metapod",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 50,
				"atk": 20,
				"def": 55,
				"spa": 25,
				"spd": 25,
				"spe": 30
		},
		"abilities": {
				"0": "Shed Skin"
		},
		"weightkg": 9.9,
		"prevo": "Caterpie",
		"evoLevel": 7,
		"evos": [
				"Butterfree"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "metapod",
		"fullname": "pokemon: Metapod",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Metapod",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 205,
		"weighthg": 99,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	butterfree: {
		"exists": true,
		"tags": [],
		"num": 12,
		"name": "Butterfree",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 60,
				"atk": 45,
				"def": 50,
				"spa": 90,
				"spd": 80,
				"spe": 70
		},
		"abilities": {
				"0": "Compound Eyes"
		},
		"weightkg": 32,
		"prevo": "Metapod",
		"evoLevel": 10,
		"eggGroups": [
				"Bug"
		],
		"canGigantamax": "G-Max Befuddle",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "butterfree",
		"fullname": "pokemon: Butterfree",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Butterfree",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 395,
		"weighthg": 320,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	weedle: {
		"exists": true,
		"tags": [],
		"num": 13,
		"name": "Weedle",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 40,
				"atk": 35,
				"def": 30,
				"spa": 20,
				"spd": 20,
				"spe": 50
		},
		"abilities": {
				"0": "Shield Dust",
				"1": "Run Away"
		},
		"weightkg": 3.2,
		"evos": [
				"Kakuna"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "weedle",
		"fullname": "pokemon: Weedle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Weedle",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 195,
		"weighthg": 32,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kakuna: {
		"exists": true,
		"tags": [],
		"num": 14,
		"name": "Kakuna",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 45,
				"atk": 25,
				"def": 50,
				"spa": 25,
				"spd": 25,
				"spe": 35
		},
		"abilities": {
				"0": "Shed Skin"
		},
		"weightkg": 10,
		"prevo": "Weedle",
		"evoLevel": 7,
		"evos": [
				"Beedrill"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kakuna",
		"fullname": "pokemon: Kakuna",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Kakuna",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 205,
		"weighthg": 100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	beedrill: {
		"exists": true,
		"tags": [],
		"num": 15,
		"name": "Beedrill",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 65,
				"atk": 90,
				"def": 40,
				"spa": 45,
				"spd": 80,
				"spe": 75
		},
		"abilities": {
				"0": "Swarm"
		},
		"weightkg": 29.5,
		"prevo": "Kakuna",
		"evoLevel": 10,
		"eggGroups": [
				"Bug"
		],
		"otherFormes": [
				"Beedrill-Mega"
		],
		"formeOrder": [
				"Beedrill",
				"Beedrill-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "beedrill",
		"fullname": "pokemon: Beedrill",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Beedrill",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 395,
		"weighthg": 295,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	beedrillmega: {
		"exists": true,
		"tags": [],
		"num": 15,
		"name": "Beedrill-Mega",
		"baseSpecies": "Beedrill",
		// "forme": "Mega",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 65,
				"atk": 150,
				"def": 40,
				"spa": 15,
				"spd": 80,
				"spe": 145
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 40.5,
		"eggGroups": [
				"Bug"
		],
		// "requiredItem": "Beedrillite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "beedrillmega",
		"fullname": "pokemon: Beedrill-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Beedrillite"
		// ],
		"bst": 495,
		"weighthg": 405,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Beedrill",
		// "changesFrom": "Beedrill"
	},
	pidgey: {
		"exists": true,
		"tags": [],
		"num": 16,
		"name": "Pidgey",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 40,
				"atk": 45,
				"def": 40,
				"spa": 35,
				"spd": 35,
				"spe": 56
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 1.8,
		"evos": [
				"Pidgeotto"
		],
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pidgey",
		"fullname": "pokemon: Pidgey",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pidgey",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 251,
		"weighthg": 18,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pidgeotto: {
		"exists": true,
		"tags": [],
		"num": 17,
		"name": "Pidgeotto",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 63,
				"atk": 60,
				"def": 55,
				"spa": 50,
				"spd": 50,
				"spe": 71
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 30,
		"prevo": "Pidgey",
		"evoLevel": 18,
		"evos": [
				"Pidgeot"
		],
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pidgeotto",
		"fullname": "pokemon: Pidgeotto",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pidgeotto",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 349,
		"weighthg": 300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pidgeot: {
		"exists": true,
		"tags": [],
		"num": 18,
		"name": "Pidgeot",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 83,
				"atk": 80,
				"def": 75,
				"spa": 70,
				"spd": 70,
				"spe": 101
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 39.5,
		"prevo": "Pidgeotto",
		"evoLevel": 36,
		"eggGroups": [
				"Flying"
		],
		"otherFormes": [
				"Pidgeot-Mega"
		],
		"formeOrder": [
				"Pidgeot",
				"Pidgeot-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pidgeot",
		"fullname": "pokemon: Pidgeot",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pidgeot",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 479,
		"weighthg": 395,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pidgeotmega: {
		"exists": true,
		"tags": [],
		"num": 18,
		"name": "Pidgeot-Mega",
		"baseSpecies": "Pidgeot",
		// "forme": "Mega",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 83,
				"atk": 80,
				"def": 80,
				"spa": 135,
				"spd": 80,
				"spe": 121
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 50.5,
		"eggGroups": [
				"Flying"
		],
		// "requiredItem": "Pidgeotite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pidgeotmega",
		"fullname": "pokemon: Pidgeot-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Pidgeotite"
		// ],
		"bst": 579,
		"weighthg": 505,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Pidgeot",
		// "changesFrom": "Pidgeot"
	},
	rattata: {
		"exists": true,
		"tags": [],
		"num": 19,
		"name": "Rattata",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 30,
				"atk": 56,
				"def": 35,
				"spa": 25,
				"spd": 35,
				"spe": 72
		},
		"abilities": {
				"0": "Run Away",
				"1": "Guts",
				"H": "Hustle"
		},
		"weightkg": 3.5,
		"evos": [
				"Raticate"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Rattata-Alola"
		],
		"formeOrder": [
				"Rattata",
				"Rattata-Alola"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "rattata",
		"fullname": "pokemon: Rattata",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Rattata",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 253,
		"weighthg": 35,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rattataalola: {
		"exists": true,
		"tags": [],
		"num": 19,
		"name": "Rattata-Alola",
		"baseSpecies": "Rattata",
		"forme": "Alola",
		"types": [
				"Dark",
				"Normal"
		],
		"baseStats": {
				"hp": 30,
				"atk": 56,
				"def": 35,
				"spa": 25,
				"spd": 35,
				"spe": 72
		},
		"abilities": {
				"0": "Hustle",
				"H": "Thick Fat"
		},
		"weightkg": 3.8,
		"evos": [
				"Raticate-Alola"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "rattataalola",
		"fullname": "pokemon: Rattata-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 253,
		"weighthg": 38,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	raticate: {
		"exists": true,
		"tags": [],
		"num": 20,
		"name": "Raticate",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 55,
				"atk": 81,
				"def": 60,
				"spa": 50,
				"spd": 70,
				"spe": 97
		},
		"abilities": {
				"0": "Run Away",
				"1": "Guts",
				"H": "Hustle"
		},
		"weightkg": 18.5,
		"prevo": "Rattata",
		"evoLevel": 20,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Raticate-Alola",
				"Raticate-Alola-Totem"
		],
		"formeOrder": [
				"Raticate",
				"Raticate-Alola",
				"Raticate-Alola-Totem"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "raticate",
		"fullname": "pokemon: Raticate",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Raticate",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 413,
		"weighthg": 185,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	raticatealola: {
		"exists": true,
		"tags": [],
		"num": 20,
		"name": "Raticate-Alola",
		"baseSpecies": "Raticate",
		"forme": "Alola",
		"types": [
				"Dark",
				"Normal"
		],
		"baseStats": {
				"hp": 75,
				"atk": 71,
				"def": 70,
				"spa": 40,
				"spd": 80,
				"spe": 77
		},
		"abilities": {
				"0": "Hustle",
				"H": "Thick Fat"
		},
		"weightkg": 25.5,
		"prevo": "Rattata-Alola",
		"evoLevel": 20,
		"evoCondition": "at night",
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "raticatealola",
		"fullname": "pokemon: Raticate-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 413,
		"weighthg": 255,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	raticatealolatotem: {
		"exists": true,
		"tags": [],
		"num": 20,
		"name": "Raticate-Alola-Totem",
		"baseSpecies": "Raticate",
		"forme": "Alola-Totem",
		"types": [
				"Dark",
				"Normal"
		],
		"baseStats": {
				"hp": 75,
				"atk": 71,
				"def": 70,
				"spa": 40,
				"spd": 80,
				"spe": 77
		},
		"abilities": {
				"0": "Thick Fat"
		},
		"weightkg": 105,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "raticatealolatotem",
		"fullname": "pokemon: Raticate-Alola-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 413,
		"weighthg": 1050,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	spearow: {
		"exists": true,
		"tags": [],
		"num": 21,
		"name": "Spearow",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 40,
				"atk": 60,
				"def": 30,
				"spa": 31,
				"spd": 31,
				"spe": 70
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 2,
		"evos": [
				"Fearow"
		],
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "spearow",
		"fullname": "pokemon: Spearow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Spearow",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 262,
		"weighthg": 20,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	fearow: {
		"exists": true,
		"tags": [],
		"num": 22,
		"name": "Fearow",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 65,
				"atk": 90,
				"def": 65,
				"spa": 61,
				"spd": 61,
				"spe": 100
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 38,
		"prevo": "Spearow",
		"evoLevel": 20,
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "fearow",
		"fullname": "pokemon: Fearow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Fearow",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 442,
		"weighthg": 380,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ekans: {
		"exists": true,
		"tags": [],
		"num": 23,
		"name": "Ekans",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 35,
				"atk": 60,
				"def": 44,
				"spa": 40,
				"spd": 54,
				"spe": 55
		},
		"abilities": {
				"0": "Intimidate",
				"1": "Shed Skin"
		},
		"weightkg": 6.9,
		"evos": [
				"Arbok"
		],
		"eggGroups": [
				"Field",
				"Dragon"
		],
		"tier": "LC",
		"id": "ekans",
		"fullname": "pokemon: Ekans",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ekans",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 288,
		"weighthg": 69,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arbok: {
		"exists": true,
		"tags": [],
		"num": 24,
		"name": "Arbok",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 60,
				"atk": 95,
				"def": 69,
				"spa": 65,
				"spd": 79,
				"spe": 80
		},
		"abilities": {
				"0": "Intimidate",
				"1": "Shed Skin"
		},
		"weightkg": 65,
		"prevo": "Ekans",
		"evoLevel": 22,
		"eggGroups": [
				"Field",
				"Dragon"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "arbok",
		"fullname": "pokemon: Arbok",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Arbok",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 448,
		"weighthg": 650,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachu: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"prevo": "Pichu",
		"evoType": "levelFriendship",
		"evos": [
				"Raichu",
				"Raichu-Alola"
		],
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"otherFormes": [
				"Pikachu-Cosplay",
				"Pikachu-Rock-Star",
				"Pikachu-Belle",
				"Pikachu-Pop-Star",
				"Pikachu-PhD",
				"Pikachu-Libre",
				"Pikachu-Original",
				"Pikachu-Hoenn",
				"Pikachu-Sinnoh",
				"Pikachu-Unova",
				"Pikachu-Kalos",
				"Pikachu-Alola",
				"Pikachu-Partner",
				"Pikachu-Starter",
				"Pikachu-World"
		],
		"formeOrder": [
				"Pikachu",
				"Pikachu-Original",
				"Pikachu-Hoenn",
				"Pikachu-Sinnoh",
				"Pikachu-Unova",
				"Pikachu-Kalos",
				"Pikachu-Alola",
				"Pikachu-Partner",
				"Pikachu-Starter",
				"Pikachu-World",
				"Pikachu-Rock-Star",
				"Pikachu-Belle",
				"Pikachu-Pop-Star",
				"Pikachu-PhD",
				"Pikachu-Libre",
				"Pikachu-Cosplay"
		],
		"canGigantamax": "G-Max Volt Crash",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pikachu",
		"fullname": "pokemon: Pikachu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pikachu",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachucosplay: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Cosplay",
		"baseSpecies": "Pikachu",
		"forme": "Cosplay",
		"types": [
				"Electric"
		],
		"gender": "F",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pikachucosplay",
		"fullname": "pokemon: Pikachu-Cosplay",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachurockstar: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Rock-Star",
		"baseSpecies": "Pikachu",
		"forme": "Rock-Star",
		"types": [
				"Electric"
		],
		"gender": "F",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Pikachu-Cosplay",
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pikachurockstar",
		"fullname": "pokemon: Pikachu-Rock-Star",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachubelle: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Belle",
		"baseSpecies": "Pikachu",
		"forme": "Belle",
		"types": [
				"Electric"
		],
		"gender": "F",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Pikachu-Cosplay",
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pikachubelle",
		"fullname": "pokemon: Pikachu-Belle",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachupopstar: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Pop-Star",
		"baseSpecies": "Pikachu",
		"forme": "Pop-Star",
		"types": [
				"Electric"
		],
		"gender": "F",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Pikachu-Cosplay",
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pikachupopstar",
		"fullname": "pokemon: Pikachu-Pop-Star",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachuphd: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-PhD",
		"baseSpecies": "Pikachu",
		"forme": "PhD",
		"types": [
				"Electric"
		],
		"gender": "F",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Pikachu-Cosplay",
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pikachuphd",
		"fullname": "pokemon: Pikachu-PhD",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachulibre: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Libre",
		"baseSpecies": "Pikachu",
		"forme": "Libre",
		"types": [
				"Electric"
		],
		"gender": "F",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Pikachu-Cosplay",
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pikachulibre",
		"fullname": "pokemon: Pikachu-Libre",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachuoriginal: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Original",
		"baseSpecies": "Pikachu",
		"forme": "Original",
		"types": [
				"Electric"
		],
		"gender": "M",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pikachuoriginal",
		"fullname": "pokemon: Pikachu-Original",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachuhoenn: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Hoenn",
		"baseSpecies": "Pikachu",
		"forme": "Hoenn",
		"types": [
				"Electric"
		],
		"gender": "M",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pikachuhoenn",
		"fullname": "pokemon: Pikachu-Hoenn",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachusinnoh: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Sinnoh",
		"baseSpecies": "Pikachu",
		"forme": "Sinnoh",
		"types": [
				"Electric"
		],
		"gender": "M",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pikachusinnoh",
		"fullname": "pokemon: Pikachu-Sinnoh",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachuunova: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Unova",
		"baseSpecies": "Pikachu",
		"forme": "Unova",
		"types": [
				"Electric"
		],
		"gender": "M",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pikachuunova",
		"fullname": "pokemon: Pikachu-Unova",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachukalos: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Kalos",
		"baseSpecies": "Pikachu",
		"forme": "Kalos",
		"types": [
				"Electric"
		],
		"gender": "M",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pikachukalos",
		"fullname": "pokemon: Pikachu-Kalos",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachualola: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Alola",
		"baseSpecies": "Pikachu",
		"forme": "Alola",
		"types": [
				"Electric"
		],
		"gender": "M",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pikachualola",
		"fullname": "pokemon: Pikachu-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachupartner: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Partner",
		"baseSpecies": "Pikachu",
		"forme": "Partner",
		"types": [
				"Electric"
		],
		"gender": "M",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pikachupartner",
		"fullname": "pokemon: Pikachu-Partner",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachustarter: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-Starter",
		"baseSpecies": "Pikachu",
		"forme": "Starter",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 45,
				"atk": 80,
				"def": 50,
				"spa": 75,
				"spd": 60,
				"spe": 120
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": "LGPE",
		"tier": "Illegal",
		"id": "pikachustarter",
		"fullname": "pokemon: Pikachu-Starter",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 430,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikachuworld: {
		"exists": true,
		"tags": [],
		"num": 25,
		"name": "Pikachu-World",
		"baseSpecies": "Pikachu",
		"forme": "World",
		"types": [
				"Electric"
		],
		"gender": "M",
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 6,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pikachuworld",
		"fullname": "pokemon: Pikachu-World",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 320,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	raichu: {
		"exists": true,
		"tags": [],
		"num": 26,
		"name": "Raichu",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 60,
				"atk": 90,
				"def": 55,
				"spa": 90,
				"spd": 80,
				"spe": 110
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 30,
		"prevo": "Pikachu",
		"evoType": "useItem",
		"evoItem": "Thunder Stone",
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"otherFormes": [
				"Raichu-Alola"
		],
		"formeOrder": [
				"Raichu",
				"Raichu-Alola"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "raichu",
		"fullname": "pokemon: Raichu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Raichu",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	raichualola: {
		"exists": true,
		"tags": [],
		"num": 26,
		"name": "Raichu-Alola",
		"baseSpecies": "Raichu",
		"forme": "Alola",
		"types": [
				"Electric",
				"Psychic"
		],
		"baseStats": {
				"hp": 60,
				"atk": 85,
				"def": 50,
				"spa": 95,
				"spd": 85,
				"spe": 110
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 21,
		"prevo": "Pikachu",
		"evoType": "useItem",
		"evoItem": "Thunder Stone",
		"evoRegion": "Alola",
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "raichualola",
		"fullname": "pokemon: Raichu-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 210,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sandshrew: {
		"exists": true,
		"tags": [],
		"num": 27,
		"name": "Sandshrew",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 50,
				"atk": 75,
				"def": 85,
				"spa": 20,
				"spd": 30,
				"spe": 40
		},
		"abilities": {
				"0": "Sand Veil"
		},
		"weightkg": 12,
		"evos": [
				"Sandslash"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Sandshrew-Alola"
		],
		"formeOrder": [
				"Sandshrew",
				"Sandshrew-Alola"
		],
		"tier": "LC",
		"id": "sandshrew",
		"fullname": "pokemon: Sandshrew",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sandshrew",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 120,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sandshrewalola: {
		"exists": true,
		"tags": [],
		"num": 27,
		"name": "Sandshrew-Alola",
		"baseSpecies": "Sandshrew",
		"forme": "Alola",
		"types": [
				"Ice",
				"Steel"
		],
		"baseStats": {
				"hp": 50,
				"atk": 75,
				"def": 90,
				"spa": 10,
				"spd": 35,
				"spe": 40
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 40,
		"evos": [
				"Sandslash-Alola"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "sandshrewalola",
		"fullname": "pokemon: Sandshrew-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sandslash: {
		"exists": true,
		"tags": [],
		"num": 28,
		"name": "Sandslash",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 75,
				"atk": 100,
				"def": 110,
				"spa": 45,
				"spd": 55,
				"spe": 65
		},
		"abilities": {
				"0": "Sand Veil"
		},
		"weightkg": 29.5,
		"prevo": "Sandshrew",
		"evoLevel": 22,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Sandslash-Alola"
		],
		"formeOrder": [
				"Sandslash",
				"Sandslash-Alola"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "sandslash",
		"fullname": "pokemon: Sandslash",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sandslash",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 450,
		"weighthg": 295,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sandslashalola: {
		"exists": true,
		"tags": [],
		"num": 28,
		"name": "Sandslash-Alola",
		"baseSpecies": "Sandslash",
		"forme": "Alola",
		"types": [
				"Ice",
				"Steel"
		],
		"baseStats": {
				"hp": 75,
				"atk": 100,
				"def": 120,
				"spa": 25,
				"spd": 65,
				"spe": 65
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 55,
		"prevo": "Sandshrew-Alola",
		"evoType": "useItem",
		"evoItem": "Ice Stone",
		"eggGroups": [
				"Field"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "sandslashalola",
		"fullname": "pokemon: Sandslash-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 450,
		"weighthg": 550,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nidoranf: {
		"exists": true,
		"tags": [],
		"num": 29,
		"name": "Nidoran-F",
		"types": [
				"Poison"
		],
		"gender": "F",
		"baseStats": {
				"hp": 55,
				"atk": 47,
				"def": 52,
				"spa": 40,
				"spd": 40,
				"spe": 41
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Hustle"
		},
		"weightkg": 7,
		"evos": [
				"Nidorina"
		],
		"eggGroups": [
				"Monster",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "nidoranf",
		"fullname": "pokemon: Nidoran-F",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Nidoran-F",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 275,
		"weighthg": 70,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nidorina: {
		"exists": true,
		"tags": [],
		"num": 30,
		"name": "Nidorina",
		"types": [
				"Poison"
		],
		"gender": "F",
		"baseStats": {
				"hp": 70,
				"atk": 62,
				"def": 67,
				"spa": 55,
				"spd": 55,
				"spe": 56
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Hustle"
		},
		"weightkg": 20,
		"prevo": "Nidoran-F",
		"evoLevel": 16,
		"evos": [
				"Nidoqueen"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "nidorina",
		"fullname": "pokemon: Nidorina",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Nidorina",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 365,
		"weighthg": 200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nidoqueen: {
		"exists": true,
		"tags": [],
		"num": 31,
		"name": "Nidoqueen",
		"types": [
				"Poison",
				"Ground"
		],
		"gender": "F",
		"baseStats": {
				"hp": 90,
				"atk": 92,
				"def": 87,
				"spa": 75,
				"spd": 85,
				"spe": 76
		},
		"abilities": {
				"0": "Poison Point"
		},
		"weightkg": 60,
		"prevo": "Nidorina",
		"evoType": "useItem",
		"evoItem": "Moon Stone",
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "nidoqueen",
		"fullname": "pokemon: Nidoqueen",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Nidoqueen",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 505,
		"weighthg": 600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nidoranm: {
		"exists": true,
		"tags": [],
		"num": 32,
		"name": "Nidoran-M",
		"types": [
				"Poison"
		],
		"gender": "M",
		"baseStats": {
				"hp": 46,
				"atk": 57,
				"def": 40,
				"spa": 40,
				"spd": 40,
				"spe": 50
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Hustle"
		},
		"weightkg": 9,
		"evos": [
				"Nidorino"
		],
		"eggGroups": [
				"Monster",
				"Field"
		],
		"mother": "nidoranf",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "nidoranm",
		"fullname": "pokemon: Nidoran-M",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Nidoran-M",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 273,
		"weighthg": 90,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nidorino: {
		"exists": true,
		"tags": [],
		"num": 33,
		"name": "Nidorino",
		"types": [
				"Poison"
		],
		"gender": "M",
		"baseStats": {
				"hp": 61,
				"atk": 72,
				"def": 57,
				"spa": 55,
				"spd": 55,
				"spe": 65
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Hustle"
		},
		"weightkg": 19.5,
		"prevo": "Nidoran-M",
		"evoLevel": 16,
		"evos": [
				"Nidoking"
		],
		"eggGroups": [
				"Monster",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "nidorino",
		"fullname": "pokemon: Nidorino",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Nidorino",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 365,
		"weighthg": 195,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nidoking: {
		"exists": true,
		"tags": [],
		"num": 34,
		"name": "Nidoking",
		"types": [
				"Poison",
				"Ground"
		],
		"gender": "M",
		"baseStats": {
				"hp": 81,
				"atk": 102,
				"def": 77,
				"spa": 85,
				"spd": 75,
				"spe": 85
		},
		"abilities": {
				"0": "Poison Point"
		},
		"weightkg": 62,
		"prevo": "Nidorino",
		"evoType": "useItem",
		"evoItem": "Moon Stone",
		"eggGroups": [
				"Monster",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "nidoking",
		"fullname": "pokemon: Nidoking",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Nidoking",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 505,
		"weighthg": 620,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	clefairy: {
		"exists": true,
		"tags": [],
		"num": 35,
		"name": "Clefairy",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 70,
				"atk": 45,
				"def": 48,
				"spa": 60,
				"spd": 65,
				"spe": 35
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 7.5,
		"prevo": "Cleffa",
		"evoType": "levelFriendship",
		"evos": [
				"Clefable"
		],
		"eggGroups": [
				"Fairy"
		],
		"tier": "NFE",
		"doublesTier": "DUU",
		"id": "clefairy",
		"fullname": "pokemon: Clefairy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Clefairy",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"bst": 323,
		"weighthg": 75,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	clefable: {
		"exists": true,
		"tags": [],
		"num": 36,
		"name": "Clefable",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 95,
				"atk": 70,
				"def": 73,
				"spa": 95,
				"spd": 90,
				"spe": 60
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 40,
		"prevo": "Clefairy",
		"evoType": "useItem",
		"evoItem": "Moon Stone",
		"eggGroups": [
				"Fairy"
		],
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "clefable",
		"fullname": "pokemon: Clefable",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Clefable",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 483,
		"weighthg": 400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vulpix: {
		"exists": true,
		"tags": [],
		"num": 37,
		"name": "Vulpix",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 38,
				"atk": 41,
				"def": 40,
				"spa": 50,
				"spd": 65,
				"spe": 65
		},
		"abilities": {
				"0": "Flash Fire",
				"1": "Drought"
		},
		"weightkg": 9.9,
		"evos": [
				"Ninetales"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Vulpix-Alola"
		],
		"formeOrder": [
				"Vulpix",
				"Vulpix-Alola"
		],
		"tier": "NFE",
		"doublesTier": "NFE",
		"id": "vulpix",
		"fullname": "pokemon: Vulpix",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Vulpix",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"nfe": true,
		"canHatch": true,
		"bst": 299,
		"weighthg": 99,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vulpixalola: {
		"exists": true,
		"tags": [],
		"num": 37,
		"name": "Vulpix-Alola",
		"baseSpecies": "Vulpix",
		"forme": "Alola",
		"types": [
				"Ice"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 38,
				"atk": 41,
				"def": 40,
				"spa": 50,
				"spd": 65,
				"spe": 65
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 9.9,
		"evos": [
				"Ninetales-Alola"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "vulpixalola",
		"fullname": "pokemon: Vulpix-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"bst": 299,
		"weighthg": 99,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ninetales: {
		"exists": true,
		"tags": [],
		"num": 38,
		"name": "Ninetales",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 73,
				"atk": 76,
				"def": 75,
				"spa": 81,
				"spd": 100,
				"spe": 100
		},
		"abilities": {
				"0": "Flash Fire",
				"1": "Drought"
		},
		"weightkg": 19.9,
		"prevo": "Vulpix",
		"evoType": "useItem",
		"evoItem": "Fire Stone",
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Ninetales-Alola"
		],
		"formeOrder": [
				"Ninetales",
				"Ninetales-Alola"
		],
		"tier": "ZU",
		"doublesTier": "DUU",
		"id": "ninetales",
		"fullname": "pokemon: Ninetales",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ninetales",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 505,
		"weighthg": 199,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ninetalesalola: {
		"exists": true,
		"tags": [],
		"num": 38,
		"name": "Ninetales-Alola",
		"baseSpecies": "Ninetales",
		"forme": "Alola",
		"types": [
				"Ice",
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 73,
				"atk": 67,
				"def": 75,
				"spa": 81,
				"spd": 100,
				"spe": 109
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 19.9,
		"prevo": "Vulpix-Alola",
		"evoType": "useItem",
		"evoItem": "Ice Stone",
		"eggGroups": [
				"Field"
		],
		"tier": "UU",
		"doublesTier": "DOU",
		"id": "ninetalesalola",
		"fullname": "pokemon: Ninetales-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 505,
		"weighthg": 199,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	jigglypuff: {
		"exists": true,
		"tags": [],
		"num": 39,
		"name": "Jigglypuff",
		"types": [
				"Normal",
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 115,
				"atk": 45,
				"def": 20,
				"spa": 45,
				"spd": 25,
				"spe": 20
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 5.5,
		"prevo": "Igglybuff",
		"evoType": "levelFriendship",
		"evos": [
				"Wigglytuff"
		],
		"eggGroups": [
				"Fairy"
		],
		"tier": "NFE",
		"id": "jigglypuff",
		"fullname": "pokemon: Jigglypuff",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Jigglypuff",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 270,
		"weighthg": 55,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wigglytuff: {
		"exists": true,
		"tags": [],
		"num": 40,
		"name": "Wigglytuff",
		"types": [
				"Normal",
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 140,
				"atk": 70,
				"def": 45,
				"spa": 85,
				"spd": 50,
				"spe": 45
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 12,
		"prevo": "Jigglypuff",
		"evoType": "useItem",
		"evoItem": "Moon Stone",
		"eggGroups": [
				"Fairy"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "wigglytuff",
		"fullname": "pokemon: Wigglytuff",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Wigglytuff",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 435,
		"weighthg": 120,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zubat: {
		"exists": true,
		"tags": [],
		"num": 41,
		"name": "Zubat",
		"types": [
				"Poison",
				"Flying"
		],
		"baseStats": {
				"hp": 40,
				"atk": 45,
				"def": 35,
				"spa": 30,
				"spd": 40,
				"spe": 55
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 7.5,
		"evos": [
				"Golbat"
		],
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "zubat",
		"fullname": "pokemon: Zubat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Zubat",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 245,
		"weighthg": 75,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	golbat: {
		"exists": true,
		"tags": [],
		"num": 42,
		"name": "Golbat",
		"types": [
				"Poison",
				"Flying"
		],
		"baseStats": {
				"hp": 75,
				"atk": 80,
				"def": 70,
				"spa": 65,
				"spd": 75,
				"spe": 90
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 55,
		"prevo": "Zubat",
		"evoLevel": 22,
		"evos": [
				"Crobat"
		],
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "golbat",
		"fullname": "pokemon: Golbat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Golbat",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 455,
		"weighthg": 550,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	oddish: {
		"exists": true,
		"tags": [],
		"num": 43,
		"name": "Oddish",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 45,
				"atk": 50,
				"def": 55,
				"spa": 75,
				"spd": 65,
				"spe": 30
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Run Away"
		},
		"weightkg": 5.4,
		"evos": [
				"Gloom"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "LC",
		"id": "oddish",
		"fullname": "pokemon: Oddish",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Oddish",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 320,
		"weighthg": 54,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gloom: {
		"exists": true,
		"tags": [],
		"num": 44,
		"name": "Gloom",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 60,
				"atk": 65,
				"def": 70,
				"spa": 85,
				"spd": 75,
				"spe": 40
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Stench"
		},
		"weightkg": 8.6,
		"prevo": "Oddish",
		"evoLevel": 21,
		"evos": [
				"Vileplume",
				"Bellossom"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "NFE",
		"id": "gloom",
		"fullname": "pokemon: Gloom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gloom",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 395,
		"weighthg": 86,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vileplume: {
		"exists": true,
		"tags": [],
		"num": 45,
		"name": "Vileplume",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 75,
				"atk": 80,
				"def": 85,
				"spa": 110,
				"spd": 90,
				"spe": 50
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Effect Spore"
		},
		"weightkg": 18.6,
		"prevo": "Gloom",
		"evoType": "useItem",
		"evoItem": "Leaf Stone",
		"eggGroups": [
				"Grass"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "vileplume",
		"fullname": "pokemon: Vileplume",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Vileplume",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 186,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	paras: {
		"exists": true,
		"tags": [],
		"num": 46,
		"name": "Paras",
		"types": [
				"Bug",
				"Grass"
		],
		"baseStats": {
				"hp": 35,
				"atk": 70,
				"def": 55,
				"spa": 45,
				"spd": 55,
				"spe": 25
		},
		"abilities": {
				"0": "Effect Spore",
				"1": "Damp"
		},
		"weightkg": 5.4,
		"evos": [
				"Parasect"
		],
		"eggGroups": [
				"Bug",
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "paras",
		"fullname": "pokemon: Paras",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Paras",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 285,
		"weighthg": 54,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	parasect: {
		"exists": true,
		"tags": [],
		"num": 47,
		"name": "Parasect",
		"types": [
				"Bug",
				"Grass"
		],
		"baseStats": {
				"hp": 60,
				"atk": 95,
				"def": 80,
				"spa": 60,
				"spd": 80,
				"spe": 30
		},
		"abilities": {
				"0": "Effect Spore",
				"1": "Damp"
		},
		"weightkg": 29.5,
		"prevo": "Paras",
		"evoLevel": 24,
		"eggGroups": [
				"Bug",
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "parasect",
		"fullname": "pokemon: Parasect",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Parasect",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 405,
		"weighthg": 295,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	venonat: {
		"exists": true,
		"tags": [],
		"num": 48,
		"name": "Venonat",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 60,
				"atk": 55,
				"def": 50,
				"spa": 40,
				"spd": 55,
				"spe": 45
		},
		"abilities": {
				"0": "Compound Eyes",
				"1": "Run Away"
		},
		"weightkg": 30,
		"evos": [
				"Venomoth"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "venonat",
		"fullname": "pokemon: Venonat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Venonat",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	venomoth: {
		"exists": true,
		"tags": [],
		"num": 49,
		"name": "Venomoth",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 70,
				"atk": 65,
				"def": 60,
				"spa": 90,
				"spd": 75,
				"spe": 90
		},
		"abilities": {
				"0": "Shield Dust"
		},
		"weightkg": 12.5,
		"prevo": "Venonat",
		"evoLevel": 31,
		"eggGroups": [
				"Bug"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "venomoth",
		"fullname": "pokemon: Venomoth",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Venomoth",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 450,
		"weighthg": 125,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	diglett: {
		"exists": true,
		"tags": [],
		"num": 50,
		"name": "Diglett",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 10,
				"atk": 55,
				"def": 25,
				"spa": 35,
				"spd": 45,
				"spe": 95
		},
		"abilities": {
				"0": "Sand Veil",
				"1": "Arena Trap"
		},
		"weightkg": 0.8,
		"evos": [
				"Dugtrio"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Diglett-Alola"
		],
		"formeOrder": [
				"Diglett",
				"Diglett-Alola"
		],
		"tier": "NFE",
		"id": "diglett",
		"fullname": "pokemon: Diglett",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Diglett",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 265,
		"weighthg": 8,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	diglettalola: {
		"exists": true,
		"tags": [],
		"num": 50,
		"name": "Diglett-Alola",
		"baseSpecies": "Diglett",
		"forme": "Alola",
		"types": [
				"Ground",
				"Steel"
		],
		"baseStats": {
				"hp": 10,
				"atk": 55,
				"def": 30,
				"spa": 35,
				"spd": 45,
				"spe": 90
		},
		"abilities": {
				"0": "Sand Veil"
		},
		"weightkg": 1,
		"evos": [
				"Dugtrio-Alola"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "diglettalola",
		"fullname": "pokemon: Diglett-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 265,
		"weighthg": 10,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dugtrio: {
		"exists": true,
		"tags": [],
		"num": 51,
		"name": "Dugtrio",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 35,
				"atk": 100,
				"def": 50,
				"spa": 50,
				"spd": 70,
				"spe": 120
		},
		"abilities": {
				"0": "Sand Veil",
				"1": "Arena Trap"
		},
		"weightkg": 33.3,
		"prevo": "Diglett",
		"evoLevel": 26,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Dugtrio-Alola"
		],
		"formeOrder": [
				"Dugtrio",
				"Dugtrio-Alola"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "dugtrio",
		"fullname": "pokemon: Dugtrio",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dugtrio",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 425,
		"weighthg": 333,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dugtrioalola: {
		"exists": true,
		"tags": [],
		"num": 51,
		"name": "Dugtrio-Alola",
		"baseSpecies": "Dugtrio",
		"forme": "Alola",
		"types": [
				"Ground",
				"Steel"
		],
		"baseStats": {
				"hp": 35,
				"atk": 100,
				"def": 60,
				"spa": 50,
				"spd": 70,
				"spe": 110
		},
		"abilities": {
				"0": "Sand Veil"
		},
		"weightkg": 66.6,
		"prevo": "Diglett-Alola",
		"evoLevel": 26,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "dugtrioalola",
		"fullname": "pokemon: Dugtrio-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 425,
		"weighthg": 666,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	meowth: {
		"exists": true,
		"tags": [],
		"num": 52,
		"name": "Meowth",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 40,
				"atk": 45,
				"def": 35,
				"spa": 40,
				"spd": 40,
				"spe": 90
		},
		"abilities": {
				"0": "Pickup"
		},
		"weightkg": 4.2,
		"evos": [
				"Persian"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Meowth-Alola",
				"Meowth-Galar"
		],
		"formeOrder": [
				"Meowth",
				"Meowth-Alola",
				"Meowth-Galar"
		],
		"canGigantamax": "G-Max Gold Rush",
		"tier": "LC",
		"id": "meowth",
		"fullname": "pokemon: Meowth",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Meowth",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 290,
		"weighthg": 42,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	meowthalola: {
		"exists": true,
		"tags": [],
		"num": 52,
		"name": "Meowth-Alola",
		"baseSpecies": "Meowth",
		"forme": "Alola",
		"types": [
				"Dark"
		],
		"baseStats": {
				"hp": 40,
				"atk": 35,
				"def": 35,
				"spa": 50,
				"spd": 40,
				"spe": 90
		},
		"abilities": {
				"0": "Pickup"
		},
		"weightkg": 4.2,
		"evos": [
				"Persian-Alola"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "meowthalola",
		"fullname": "pokemon: Meowth-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 290,
		"weighthg": 42,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	meowthgalar: {
		"exists": true,
		"tags": [],
		"num": 52,
		"name": "Meowth-Galar",
		"baseSpecies": "Meowth",
		"forme": "Galar",
		"types": [
				"Steel"
		],
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 55,
				"spa": 40,
				"spd": 40,
				"spe": 40
		},
		"abilities": {
				"0": "Pickup"
		},
		"weightkg": 7.5,
		"evos": [
				"Perrserker"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "meowthgalar",
		"fullname": "pokemon: Meowth-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 290,
		"weighthg": 75,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	persian: {
		"exists": true,
		"tags": [],
		"num": 53,
		"name": "Persian",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 65,
				"atk": 70,
				"def": 60,
				"spa": 65,
				"spd": 65,
				"spe": 115
		},
		"abilities": {
				"0": "Limber"
		},
		"weightkg": 32,
		"prevo": "Meowth",
		"evoLevel": 28,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Persian-Alola"
		],
		"formeOrder": [
				"Persian",
				"Persian-Alola"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "persian",
		"fullname": "pokemon: Persian",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Persian",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 440,
		"weighthg": 320,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	persianalola: {
		"exists": true,
		"tags": [],
		"num": 53,
		"name": "Persian-Alola",
		"baseSpecies": "Persian",
		"forme": "Alola",
		"types": [
				"Dark"
		],
		"baseStats": {
				"hp": 65,
				"atk": 60,
				"def": 60,
				"spa": 75,
				"spd": 65,
				"spe": 115
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 33,
		"prevo": "Meowth-Alola",
		"evoType": "levelFriendship",
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "persianalola",
		"fullname": "pokemon: Persian-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 440,
		"weighthg": 330,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	psyduck: {
		"exists": true,
		"tags": [],
		"num": 54,
		"name": "Psyduck",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 50,
				"atk": 52,
				"def": 48,
				"spa": 65,
				"spd": 50,
				"spe": 55
		},
		"abilities": {
				"0": "Damp",
				"1": "Cloud Nine",
				"H": "Swift Swim"
		},
		"weightkg": 19.6,
		"evos": [
				"Golduck"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "LC",
		"id": "psyduck",
		"fullname": "pokemon: Psyduck",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Psyduck",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 320,
		"weighthg": 196,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	golduck: {
		"exists": true,
		"tags": [],
		"num": 55,
		"name": "Golduck",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 80,
				"atk": 82,
				"def": 78,
				"spa": 95,
				"spd": 80,
				"spe": 85
		},
		"abilities": {
				"0": "Damp",
				"1": "Cloud Nine",
				"H": "Swift Swim"
		},
		"weightkg": 76.6,
		"prevo": "Psyduck",
		"evoLevel": 33,
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "golduck",
		"fullname": "pokemon: Golduck",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Golduck",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 766,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mankey: {
		"exists": true,
		"tags": [],
		"num": 56,
		"name": "Mankey",
		"types": [
				"Fighting"
		],
		"baseStats": {
				"hp": 40,
				"atk": 80,
				"def": 35,
				"spa": 35,
				"spd": 45,
				"spe": 70
		},
		"abilities": {
				"0": "Vital Spirit"
		},
		"weightkg": 28,
		"evos": [
				"Primeape"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "mankey",
		"fullname": "pokemon: Mankey",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mankey",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 280,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	primeape: {
		"exists": true,
		"tags": [],
		"num": 57,
		"name": "Primeape",
		"types": [
				"Fighting"
		],
		"baseStats": {
				"hp": 65,
				"atk": 105,
				"def": 60,
				"spa": 60,
				"spd": 70,
				"spe": 95
		},
		"abilities": {
				"0": "Vital Spirit"
		},
		"weightkg": 32,
		"prevo": "Mankey",
		"evoLevel": 28,
		"evos": [
				"Annihilape"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "primeape",
		"fullname": "pokemon: Primeape",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Primeape",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 455,
		"weighthg": 320,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	growlithe: {
		"exists": true,
		"tags": [],
		"num": 58,
		"name": "Growlithe",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 55,
				"atk": 70,
				"def": 45,
				"spa": 70,
				"spd": 50,
				"spe": 60
		},
		"abilities": {
				"0": "Intimidate",
				"1": "Flash Fire"
		},
		"weightkg": 19,
		"evos": [
				"Arcanine"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Growlithe-Hisui"
		],
		"formeOrder": [
				"Growlithe",
				"Growlithe-Hisui"
		],
		"tier": "LC",
		"id": "growlithe",
		"fullname": "pokemon: Growlithe",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Growlithe",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 350,
		"weighthg": 190,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	growlithehisui: {
		"exists": true,
		"tags": [],
		"num": 58,
		"name": "Growlithe-Hisui",
		"baseSpecies": "Growlithe",
		"forme": "Hisui",
		"types": [
				"Fire",
				"Rock"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 60,
				"atk": 75,
				"def": 45,
				"spa": 65,
				"spd": 50,
				"spe": 55
		},
		"abilities": {
				"0": "Intimidate",
				"1": "Flash Fire",
				"H": "Rock Head"
		},
		"weightkg": 22.7,
		"evos": [
				"Arcanine-Hisui"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "growlithehisui",
		"fullname": "pokemon: Growlithe-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 350,
		"weighthg": 227,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arcanine: {
		"exists": true,
		"tags": [],
		"num": 59,
		"name": "Arcanine",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 90,
				"atk": 110,
				"def": 80,
				"spa": 100,
				"spd": 80,
				"spe": 95
		},
		"abilities": {
				"0": "Intimidate",
				"1": "Flash Fire"
		},
		"weightkg": 155,
		"prevo": "Growlithe",
		"evoType": "useItem",
		"evoItem": "Fire Stone",
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Arcanine-Hisui"
		],
		"formeOrder": [
				"Arcanine",
				"Arcanine-Hisui"
		],
		"tier": "PU",
		"doublesTier": "DUU",
		"id": "arcanine",
		"fullname": "pokemon: Arcanine",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Arcanine",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 555,
		"weighthg": 1550,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arcaninehisui: {
		"exists": true,
		"tags": [],
		"num": 59,
		"name": "Arcanine-Hisui",
		"baseSpecies": "Arcanine",
		"forme": "Hisui",
		"types": [
				"Fire",
				"Rock"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 95,
				"atk": 115,
				"def": 80,
				"spa": 95,
				"spd": 80,
				"spe": 90
		},
		"abilities": {
				"0": "Intimidate",
				"1": "Flash Fire",
				"H": "Rock Head"
		},
		"weightkg": 168,
		"prevo": "Growlithe-Hisui",
		"evoType": "useItem",
		"evoItem": "Fire Stone",
		"eggGroups": [
				"Field"
		],
		"tier": "UU",
		"doublesTier": "DUU",
		"id": "arcaninehisui",
		"fullname": "pokemon: Arcanine-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 555,
		"weighthg": 1680,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	poliwag: {
		"exists": true,
		"tags": [],
		"num": 60,
		"name": "Poliwag",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 40,
				"atk": 50,
				"def": 40,
				"spa": 40,
				"spd": 40,
				"spe": 90
		},
		"abilities": {
				"0": "Water Absorb",
				"1": "Damp",
				"H": "Swift Swim"
		},
		"weightkg": 12.4,
		"evos": [
				"Poliwhirl"
		],
		"eggGroups": [
				"Water 1"
		],
		"tier": "LC",
		"id": "poliwag",
		"fullname": "pokemon: Poliwag",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Poliwag",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 124,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	poliwhirl: {
		"exists": true,
		"tags": [],
		"num": 61,
		"name": "Poliwhirl",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 65,
				"atk": 65,
				"def": 65,
				"spa": 50,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Water Absorb",
				"1": "Damp",
				"H": "Swift Swim"
		},
		"weightkg": 20,
		"prevo": "Poliwag",
		"evoLevel": 25,
		"evos": [
				"Poliwrath",
				"Politoed"
		],
		"eggGroups": [
				"Water 1"
		],
		"tier": "NFE",
		"id": "poliwhirl",
		"fullname": "pokemon: Poliwhirl",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Poliwhirl",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 385,
		"weighthg": 200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	poliwrath: {
		"exists": true,
		"tags": [],
		"num": 62,
		"name": "Poliwrath",
		"types": [
				"Water",
				"Fighting"
		],
		"baseStats": {
				"hp": 90,
				"atk": 95,
				"def": 95,
				"spa": 70,
				"spd": 90,
				"spe": 70
		},
		"abilities": {
				"0": "Water Absorb",
				"1": "Damp",
				"H": "Swift Swim"
		},
		"weightkg": 54,
		"prevo": "Poliwhirl",
		"evoType": "useItem",
		"evoItem": "Water Stone",
		"eggGroups": [
				"Water 1"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "poliwrath",
		"fullname": "pokemon: Poliwrath",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Poliwrath",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 510,
		"weighthg": 540,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	abra: {
		"exists": true,
		"tags": [],
		"num": 63,
		"name": "Abra",
		"types": [
				"Psychic"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 25,
				"atk": 20,
				"def": 15,
				"spa": 105,
				"spd": 55,
				"spe": 90
		},
		"abilities": {
				"0": "Synchronize",
				"1": "Inner Focus"
		},
		"weightkg": 19.5,
		"evos": [
				"Kadabra"
		],
		"eggGroups": [
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "abra",
		"fullname": "pokemon: Abra",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Abra",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 310,
		"weighthg": 195,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kadabra: {
		"exists": true,
		"tags": [],
		"num": 64,
		"name": "Kadabra",
		"types": [
				"Psychic"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 40,
				"atk": 35,
				"def": 30,
				"spa": 120,
				"spd": 70,
				"spe": 105
		},
		"abilities": {
				"0": "Synchronize",
				"1": "Inner Focus"
		},
		"weightkg": 56.5,
		"prevo": "Abra",
		"evoLevel": 16,
		"evos": [
				"Alakazam"
		],
		"eggGroups": [
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kadabra",
		"fullname": "pokemon: Kadabra",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Kadabra",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"bst": 400,
		"weighthg": 565,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	alakazam: {
		"exists": true,
		"tags": [],
		"num": 65,
		"name": "Alakazam",
		"types": [
				"Psychic"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 55,
				"atk": 50,
				"def": 45,
				"spa": 135,
				"spd": 95,
				"spe": 120
		},
		"abilities": {
				"0": "Synchronize",
				"1": "Inner Focus"
		},
		"weightkg": 48,
		"prevo": "Kadabra",
		"evoType": "trade",
		"eggGroups": [
				"Human-Like"
		],
		"otherFormes": [
				"Alakazam-Mega"
		],
		"formeOrder": [
				"Alakazam",
				"Alakazam-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "alakazam",
		"fullname": "pokemon: Alakazam",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Alakazam",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 500,
		"weighthg": 480,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	alakazammega: {
		"exists": true,
		"tags": [],
		"num": 65,
		"name": "Alakazam-Mega",
		"baseSpecies": "Alakazam",
		// "forme": "Mega",
		"types": [
				"Psychic"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 55,
				"atk": 50,
				"def": 65,
				"spa": 175,
				"spd": 105,
				"spe": 150
		},
		"abilities": {
				"0": "Trace"
		},
		"weightkg": 48,
		"eggGroups": [
				"Human-Like"
		],
		// "requiredItem": "Alakazite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "alakazammega",
		"fullname": "pokemon: Alakazam-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Alakazite"
		// ],
		"bst": 600,
		"weighthg": 480,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Alakazam",
		// "changesFrom": "Alakazam"
	},
	machop: {
		"exists": true,
		"tags": [],
		"num": 66,
		"name": "Machop",
		"types": [
				"Fighting"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 70,
				"atk": 80,
				"def": 50,
				"spa": 35,
				"spd": 35,
				"spe": 35
		},
		"abilities": {
				"0": "Guts"
		},
		"weightkg": 19.5,
		"evos": [
				"Machoke"
		],
		"eggGroups": [
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "machop",
		"fullname": "pokemon: Machop",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Machop",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 305,
		"weighthg": 195,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	machoke: {
		"exists": true,
		"tags": [],
		"num": 67,
		"name": "Machoke",
		"types": [
				"Fighting"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 80,
				"atk": 100,
				"def": 70,
				"spa": 50,
				"spd": 60,
				"spe": 45
		},
		"abilities": {
				"0": "Guts"
		},
		"weightkg": 70.5,
		"prevo": "Machop",
		"evoLevel": 28,
		"evos": [
				"Machamp"
		],
		"eggGroups": [
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "machoke",
		"fullname": "pokemon: Machoke",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Machoke",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 705,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	machamp: {
		"exists": true,
		"tags": [],
		"num": 68,
		"name": "Machamp",
		"types": [
				"Fighting"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 90,
				"atk": 130,
				"def": 80,
				"spa": 65,
				"spd": 85,
				"spe": 55
		},
		"abilities": {
				"0": "Guts"
		},
		"weightkg": 130,
		"prevo": "Machoke",
		"evoType": "trade",
		"eggGroups": [
				"Human-Like"
		],
		"canGigantamax": "G-Max Chi Strike",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "machamp",
		"fullname": "pokemon: Machamp",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Machamp",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 505,
		"weighthg": 1300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bellsprout: {
		"exists": true,
		"tags": [],
		"num": 69,
		"name": "Bellsprout",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 50,
				"atk": 75,
				"def": 35,
				"spa": 70,
				"spd": 30,
				"spe": 40
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 4,
		"evos": [
				"Weepinbell"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "LC",
		"id": "bellsprout",
		"fullname": "pokemon: Bellsprout",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bellsprout",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 40,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	weepinbell: {
		"exists": true,
		"tags": [],
		"num": 70,
		"name": "Weepinbell",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 65,
				"atk": 90,
				"def": 50,
				"spa": 85,
				"spd": 45,
				"spe": 55
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 6.4,
		"prevo": "Bellsprout",
		"evoLevel": 21,
		"evos": [
				"Victreebel"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "NFE",
		"id": "weepinbell",
		"fullname": "pokemon: Weepinbell",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Weepinbell",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 390,
		"weighthg": 64,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	victreebel: {
		"exists": true,
		"tags": [],
		"num": 71,
		"name": "Victreebel",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 80,
				"atk": 105,
				"def": 65,
				"spa": 100,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 15.5,
		"prevo": "Weepinbell",
		"evoType": "useItem",
		"evoItem": "Leaf Stone",
		"eggGroups": [
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "victreebel",
		"fullname": "pokemon: Victreebel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Victreebel",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 155,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tentacool: {
		"exists": true,
		"tags": [],
		"num": 72,
		"name": "Tentacool",
		"types": [
				"Water",
				"Poison"
		],
		"baseStats": {
				"hp": 40,
				"atk": 40,
				"def": 35,
				"spa": 50,
				"spd": 100,
				"spe": 70
		},
		"abilities": {
				"0": "Clear Body",
				"1": "Liquid Ooze",
				"H": "Rain Dish"
		},
		"weightkg": 45.5,
		"evos": [
				"Tentacruel"
		],
		"eggGroups": [
				"Water 3"
		],
		"tier": "LC",
		"id": "tentacool",
		"fullname": "pokemon: Tentacool",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tentacool",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 335,
		"weighthg": 455,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tentacruel: {
		"exists": true,
		"tags": [],
		"num": 73,
		"name": "Tentacruel",
		"types": [
				"Water",
				"Poison"
		],
		"baseStats": {
				"hp": 80,
				"atk": 70,
				"def": 65,
				"spa": 80,
				"spd": 120,
				"spe": 100
		},
		"abilities": {
				"0": "Clear Body",
				"1": "Liquid Ooze",
				"H": "Rain Dish"
		},
		"weightkg": 55,
		"prevo": "Tentacool",
		"evoLevel": 30,
		"eggGroups": [
				"Water 3"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "tentacruel",
		"fullname": "pokemon: Tentacruel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tentacruel",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 515,
		"weighthg": 550,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	geodude: {
		"exists": true,
		"tags": [],
		"num": 74,
		"name": "Geodude",
		"types": [
				"Rock",
				"Ground"
		],
		"baseStats": {
				"hp": 40,
				"atk": 80,
				"def": 100,
				"spa": 30,
				"spd": 30,
				"spe": 20
		},
		"abilities": {
				"0": "Rock Head",
				"1": "Sturdy",
				"H": "Sand Veil"
		},
		"weightkg": 20,
		"evos": [
				"Graveler"
		],
		"eggGroups": [
				"Mineral"
		],
		"otherFormes": [
				"Geodude-Alola"
		],
		"formeOrder": [
				"Geodude",
				"Geodude-Alola"
		],
		"tier": "LC",
		"id": "geodude",
		"fullname": "pokemon: Geodude",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Geodude",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	geodudealola: {
		"exists": true,
		"tags": [],
		"num": 74,
		"name": "Geodude-Alola",
		"baseSpecies": "Geodude",
		"forme": "Alola",
		"types": [
				"Rock",
				"Electric"
		],
		"baseStats": {
				"hp": 40,
				"atk": 80,
				"def": 100,
				"spa": 30,
				"spd": 30,
				"spe": 20
		},
		"abilities": {
				"0": "Magnet Pull",
				"1": "Sturdy"
		},
		"weightkg": 20.3,
		"evos": [
				"Graveler-Alola"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "LC",
		"id": "geodudealola",
		"fullname": "pokemon: Geodude-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 203,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	graveler: {
		"exists": true,
		"tags": [],
		"num": 75,
		"name": "Graveler",
		"types": [
				"Rock",
				"Ground"
		],
		"baseStats": {
				"hp": 55,
				"atk": 95,
				"def": 115,
				"spa": 45,
				"spd": 45,
				"spe": 35
		},
		"abilities": {
				"0": "Rock Head",
				"1": "Sturdy",
				"H": "Sand Veil"
		},
		"weightkg": 105,
		"prevo": "Geodude",
		"evoLevel": 25,
		"evos": [
				"Golem"
		],
		"eggGroups": [
				"Mineral"
		],
		"otherFormes": [
				"Graveler-Alola"
		],
		"formeOrder": [
				"Graveler",
				"Graveler-Alola"
		],
		"tier": "NFE",
		"id": "graveler",
		"fullname": "pokemon: Graveler",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Graveler",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 390,
		"weighthg": 1050,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	graveleralola: {
		"exists": true,
		"tags": [],
		"num": 75,
		"name": "Graveler-Alola",
		"baseSpecies": "Graveler",
		"forme": "Alola",
		"types": [
				"Rock",
				"Electric"
		],
		"baseStats": {
				"hp": 55,
				"atk": 95,
				"def": 115,
				"spa": 45,
				"spd": 45,
				"spe": 35
		},
		"abilities": {
				"0": "Magnet Pull",
				"1": "Sturdy"
		},
		"weightkg": 110,
		"prevo": "Geodude-Alola",
		"evoLevel": 25,
		"evos": [
				"Golem-Alola"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "NFE",
		"id": "graveleralola",
		"fullname": "pokemon: Graveler-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 390,
		"weighthg": 1100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	golem: {
		"exists": true,
		"tags": [],
		"num": 76,
		"name": "Golem",
		"types": [
				"Rock",
				"Ground"
		],
		"baseStats": {
				"hp": 80,
				"atk": 120,
				"def": 130,
				"spa": 55,
				"spd": 65,
				"spe": 45
		},
		"abilities": {
				"0": "Rock Head",
				"1": "Sturdy",
				"H": "Sand Veil"
		},
		"weightkg": 300,
		"prevo": "Graveler",
		"evoType": "trade",
		"eggGroups": [
				"Mineral"
		],
		"otherFormes": [
				"Golem-Alola"
		],
		"formeOrder": [
				"Golem",
				"Golem-Alola"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "golem",
		"fullname": "pokemon: Golem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Golem",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 495,
		"weighthg": 3000,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	golemalola: {
		"exists": true,
		"tags": [],
		"num": 76,
		"name": "Golem-Alola",
		"baseSpecies": "Golem",
		"forme": "Alola",
		"types": [
				"Rock",
				"Electric"
		],
		"baseStats": {
				"hp": 80,
				"atk": 120,
				"def": 130,
				"spa": 55,
				"spd": 65,
				"spe": 45
		},
		"abilities": {
				"0": "Magnet Pull",
				"1": "Sturdy"
		},
		"weightkg": 316,
		"prevo": "Graveler-Alola",
		"evoType": "trade",
		"eggGroups": [
				"Mineral"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "golemalola",
		"fullname": "pokemon: Golem-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 495,
		"weighthg": 3160,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ponyta: {
		"exists": true,
		"tags": [],
		"num": 77,
		"name": "Ponyta",
		"types": [
				"Fire"
		],
		"baseStats": {
				"hp": 50,
				"atk": 85,
				"def": 55,
				"spa": 65,
				"spd": 65,
				"spe": 90
		},
		"abilities": {
				"0": "Run Away",
				"1": "Flash Fire",
				"H": "Flame Body"
		},
		"weightkg": 30,
		"evos": [
				"Rapidash"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Ponyta-Galar"
		],
		"formeOrder": [
				"Ponyta",
				"Ponyta-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "ponyta",
		"fullname": "pokemon: Ponyta",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Ponyta",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ponytagalar: {
		"exists": true,
		"tags": [],
		"num": 77,
		"name": "Ponyta-Galar",
		"baseSpecies": "Ponyta",
		"forme": "Galar",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 50,
				"atk": 85,
				"def": 55,
				"spa": 65,
				"spd": 65,
				"spe": 90
		},
		"abilities": {
				"0": "Run Away"
		},
		"weightkg": 24,
		"evos": [
				"Rapidash-Galar"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "ponytagalar",
		"fullname": "pokemon: Ponyta-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 240,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rapidash: {
		"exists": true,
		"tags": [],
		"num": 78,
		"name": "Rapidash",
		"types": [
				"Fire"
		],
		"baseStats": {
				"hp": 65,
				"atk": 100,
				"def": 70,
				"spa": 80,
				"spd": 80,
				"spe": 105
		},
		"abilities": {
				"0": "Run Away",
				"1": "Flash Fire",
				"H": "Flame Body"
		},
		"weightkg": 95,
		"prevo": "Ponyta",
		"evoLevel": 40,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Rapidash-Galar"
		],
		"formeOrder": [
				"Rapidash",
				"Rapidash-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "rapidash",
		"fullname": "pokemon: Rapidash",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Rapidash",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 950,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rapidashgalar: {
		"exists": true,
		"tags": [],
		"num": 78,
		"name": "Rapidash-Galar",
		"baseSpecies": "Rapidash",
		"forme": "Galar",
		"types": [
				"Psychic",
				"Normal"
		],
		"baseStats": {
				"hp": 65,
				"atk": 100,
				"def": 70,
				"spa": 80,
				"spd": 80,
				"spe": 105
		},
		"abilities": {
				"0": "Run Away"
		},
		"weightkg": 80,
		"prevo": "Ponyta-Galar",
		"evoLevel": 40,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "rapidashgalar",
		"fullname": "pokemon: Rapidash-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 800,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slowpoke: {
		"exists": true,
		"tags": [],
		"num": 79,
		"name": "Slowpoke",
		"types": [
				"Water",
				"Psychic"
		],
		"baseStats": {
				"hp": 90,
				"atk": 65,
				"def": 65,
				"spa": 40,
				"spd": 40,
				"spe": 15
		},
		"abilities": {
				"0": "Oblivious",
				"1": "Own Tempo"
		},
		"weightkg": 36,
		"evos": [
				"Slowbro",
				"Slowking"
		],
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"otherFormes": [
				"Slowpoke-Galar"
		],
		"formeOrder": [
				"Slowpoke",
				"Slowpoke-Galar"
		],
		"tier": "LC",
		"id": "slowpoke",
		"fullname": "pokemon: Slowpoke",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Slowpoke",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 315,
		"weighthg": 360,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slowpokegalar: {
		"exists": true,
		"tags": [],
		"num": 79,
		"name": "Slowpoke-Galar",
		"baseSpecies": "Slowpoke",
		"forme": "Galar",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 90,
				"atk": 65,
				"def": 65,
				"spa": 40,
				"spd": 40,
				"spe": 15
		},
		"abilities": {
				"0": "Own Tempo"
		},
		"weightkg": 36,
		"evos": [
				"Slowbro-Galar",
				"Slowking-Galar"
		],
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "LC",
		"id": "slowpokegalar",
		"fullname": "pokemon: Slowpoke-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 315,
		"weighthg": 360,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slowbro: {
		"exists": true,
		"tags": [],
		"num": 80,
		"name": "Slowbro",
		"types": [
				"Water",
				"Psychic"
		],
		"baseStats": {
				"hp": 95,
				"atk": 75,
				"def": 110,
				"spa": 100,
				"spd": 80,
				"spe": 30
		},
		"abilities": {
				"0": "Oblivious",
				"1": "Own Tempo"
		},
		"weightkg": 78.5,
		"prevo": "Slowpoke",
		"evoLevel": 37,
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"otherFormes": [
				"Slowbro-Mega",
				"Slowbro-Galar"
		],
		"formeOrder": [
				"Slowbro",
				"Slowbro-Mega",
				"Slowbro-Galar"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "slowbro",
		"fullname": "pokemon: Slowbro",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Slowbro",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 785,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slowbromega: {
		"exists": true,
		"tags": [],
		"num": 80,
		"name": "Slowbro-Mega",
		"baseSpecies": "Slowbro",
		// "forme": "Mega",
		"types": [
				"Water",
				"Psychic"
		],
		"baseStats": {
				"hp": 95,
				"atk": 75,
				"def": 180,
				"spa": 130,
				"spd": 80,
				"spe": 30
		},
		"abilities": {
				"0": "Shell Armor"
		},
		"weightkg": 120,
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		// "requiredItem": "Slowbronite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "slowbromega",
		"fullname": "pokemon: Slowbro-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Slowbronite"
		// ],
		"bst": 590,
		"weighthg": 1200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Slowbro",
		// "changesFrom": "Slowbro"
	},
	slowbrogalar: {
		"exists": true,
		"tags": [],
		"num": 80,
		"name": "Slowbro-Galar",
		"baseSpecies": "Slowbro",
		"forme": "Galar",
		"types": [
				"Poison",
				"Psychic"
		],
		"baseStats": {
				"hp": 95,
				"atk": 100,
				"def": 95,
				"spa": 100,
				"spd": 70,
				"spe": 30
		},
		"abilities": {
				"0": "Own Tempo"
		},
		"weightkg": 70.5,
		"prevo": "Slowpoke-Galar",
		"evoType": "useItem",
		"evoItem": "Galarica Cuff",
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "slowbrogalar",
		"fullname": "pokemon: Slowbro-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 705,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	magnemite: {
		"exists": true,
		"tags": [],
		"num": 81,
		"name": "Magnemite",
		"types": [
				"Electric",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 25,
				"atk": 35,
				"def": 70,
				"spa": 95,
				"spd": 55,
				"spe": 45
		},
		"abilities": {
				"0": "Magnet Pull",
				"1": "Sturdy"
		},
		"weightkg": 6,
		"evos": [
				"Magneton"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "LC",
		"id": "magnemite",
		"fullname": "pokemon: Magnemite",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Magnemite",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 325,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	magneton: {
		"exists": true,
		"tags": [],
		"num": 82,
		"name": "Magneton",
		"types": [
				"Electric",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 60,
				"def": 95,
				"spa": 120,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Magnet Pull",
				"1": "Sturdy"
		},
		"weightkg": 60,
		"prevo": "Magnemite",
		"evoLevel": 30,
		"evos": [
				"Magnezone"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "magneton",
		"fullname": "pokemon: Magneton",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Magneton",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 465,
		"weighthg": 600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	farfetchd: {
		"exists": true,
		"tags": [],
		"num": 83,
		"name": "Farfetch’d",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 52,
				"atk": 90,
				"def": 55,
				"spa": 58,
				"spd": 62,
				"spe": 60
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Inner Focus"
		},
		"weightkg": 15,
		"eggGroups": [
				"Flying",
				"Field"
		],
		"otherFormes": [
				"Farfetch’d-Galar"
		],
		"formeOrder": [
				"Farfetch’d",
				"Farfetch’d-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "farfetchd",
		"fullname": "pokemon: Farfetch’d",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Farfetch’d",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 377,
		"weighthg": 150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	farfetchdgalar: {
		"exists": true,
		"tags": [],
		"num": 83,
		"name": "Farfetch’d-Galar",
		"baseSpecies": "Farfetch’d",
		"forme": "Galar",
		"types": [
				"Fighting"
		],
		"baseStats": {
				"hp": 52,
				"atk": 95,
				"def": 55,
				"spa": 58,
				"spd": 62,
				"spe": 55
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 42,
		"evos": [
				"Sirfetch’d"
		],
		"eggGroups": [
				"Flying",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "farfetchdgalar",
		"fullname": "pokemon: Farfetch’d-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 377,
		"weighthg": 420,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	doduo: {
		"exists": true,
		"tags": [],
		"num": 84,
		"name": "Doduo",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 35,
				"atk": 85,
				"def": 45,
				"spa": 35,
				"spd": 35,
				"spe": 75
		},
		"abilities": {
				"0": "Run Away",
				"1": "Early Bird"
		},
		"weightkg": 39.2,
		"evos": [
				"Dodrio"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "LC",
		"id": "doduo",
		"fullname": "pokemon: Doduo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Doduo",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 310,
		"weighthg": 392,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dodrio: {
		"exists": true,
		"tags": [],
		"num": 85,
		"name": "Dodrio",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 60,
				"atk": 110,
				"def": 70,
				"spa": 60,
				"spd": 60,
				"spe": 110
		},
		"abilities": {
				"0": "Run Away",
				"1": "Early Bird"
		},
		"weightkg": 85.2,
		"prevo": "Doduo",
		"evoLevel": 31,
		"eggGroups": [
				"Flying"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "dodrio",
		"fullname": "pokemon: Dodrio",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dodrio",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 470,
		"weighthg": 852,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	seel: {
		"exists": true,
		"tags": [],
		"num": 86,
		"name": "Seel",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 65,
				"atk": 45,
				"def": 55,
				"spa": 45,
				"spd": 70,
				"spe": 45
		},
		"abilities": {
				"0": "Thick Fat"
		},
		"weightkg": 90,
		"evos": [
				"Dewgong"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "LC",
		"id": "seel",
		"fullname": "pokemon: Seel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Seel",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 325,
		"weighthg": 900,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dewgong: {
		"exists": true,
		"tags": [],
		"num": 87,
		"name": "Dewgong",
		"types": [
				"Water",
				"Ice"
		],
		"baseStats": {
				"hp": 90,
				"atk": 70,
				"def": 80,
				"spa": 70,
				"spd": 95,
				"spe": 70
		},
		"abilities": {
				"0": "Thick Fat"
		},
		"weightkg": 120,
		"prevo": "Seel",
		"evoLevel": 34,
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "dewgong",
		"fullname": "pokemon: Dewgong",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dewgong",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 475,
		"weighthg": 1200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	grimer: {
		"exists": true,
		"tags": [],
		"num": 88,
		"name": "Grimer",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 80,
				"atk": 80,
				"def": 50,
				"spa": 40,
				"spd": 50,
				"spe": 25
		},
		"abilities": {
				"0": "Stench",
				"1": "Sticky Hold"
		},
		"weightkg": 30,
		"evos": [
				"Muk"
		],
		"eggGroups": [
				"Amorphous"
		],
		"otherFormes": [
				"Grimer-Alola"
		],
		"formeOrder": [
				"Grimer",
				"Grimer-Alola"
		],
		"tier": "LC",
		"id": "grimer",
		"fullname": "pokemon: Grimer",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Grimer",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 325,
		"weighthg": 300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	grimeralola: {
		"exists": true,
		"tags": [],
		"num": 88,
		"name": "Grimer-Alola",
		"baseSpecies": "Grimer",
		"forme": "Alola",
		"types": [
				"Poison",
				"Dark"
		],
		"baseStats": {
				"hp": 80,
				"atk": 80,
				"def": 50,
				"spa": 40,
				"spd": 50,
				"spe": 25
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 42,
		"evos": [
				"Muk-Alola"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "grimeralola",
		"fullname": "pokemon: Grimer-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 325,
		"weighthg": 420,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	muk: {
		"exists": true,
		"tags": [],
		"num": 89,
		"name": "Muk",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 105,
				"atk": 105,
				"def": 75,
				"spa": 65,
				"spd": 100,
				"spe": 50
		},
		"abilities": {
				"0": "Stench",
				"1": "Sticky Hold"
		},
		"weightkg": 30,
		"prevo": "Grimer",
		"evoLevel": 38,
		"eggGroups": [
				"Amorphous"
		],
		"otherFormes": [
				"Muk-Alola"
		],
		"formeOrder": [
				"Muk",
				"Muk-Alola"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "muk",
		"fullname": "pokemon: Muk",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Muk",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mukalola: {
		"exists": true,
		"tags": [],
		"num": 89,
		"name": "Muk-Alola",
		"baseSpecies": "Muk",
		"forme": "Alola",
		"types": [
				"Poison",
				"Dark"
		],
		"baseStats": {
				"hp": 105,
				"atk": 105,
				"def": 75,
				"spa": 65,
				"spd": 100,
				"spe": 50
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 52,
		"prevo": "Grimer-Alola",
		"evoLevel": 38,
		"eggGroups": [
				"Amorphous"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "mukalola",
		"fullname": "pokemon: Muk-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 520,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shellder: {
		"exists": true,
		"tags": [],
		"num": 90,
		"name": "Shellder",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 30,
				"atk": 65,
				"def": 100,
				"spa": 45,
				"spd": 25,
				"spe": 40
		},
		"abilities": {
				"0": "Shell Armor"
		},
		"weightkg": 4,
		"evos": [
				"Cloyster"
		],
		"eggGroups": [
				"Water 3"
		],
		"tier": "LC",
		"id": "shellder",
		"fullname": "pokemon: Shellder",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Shellder",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 40,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cloyster: {
		"exists": true,
		"tags": [],
		"num": 91,
		"name": "Cloyster",
		"types": [
				"Water",
				"Ice"
		],
		"baseStats": {
				"hp": 50,
				"atk": 95,
				"def": 180,
				"spa": 85,
				"spd": 45,
				"spe": 70
		},
		"abilities": {
				"0": "Shell Armor"
		},
		"weightkg": 132.5,
		"prevo": "Shellder",
		"evoType": "useItem",
		"evoItem": "Water Stone",
		"eggGroups": [
				"Water 3"
		],
		"tier": "NUBL",
		"doublesTier": "(DUU)",
		"id": "cloyster",
		"fullname": "pokemon: Cloyster",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cloyster",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 525,
		"weighthg": 1325,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gastly: {
		"exists": true,
		"tags": [],
		"num": 92,
		"name": "Gastly",
		"types": [
				"Ghost",
				"Poison"
		],
		"baseStats": {
				"hp": 30,
				"atk": 35,
				"def": 30,
				"spa": 100,
				"spd": 35,
				"spe": 80
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.1,
		"evos": [
				"Haunter"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "NFE",
		"id": "gastly",
		"fullname": "pokemon: Gastly",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gastly",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 310,
		"weighthg": 1,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	haunter: {
		"exists": true,
		"tags": [],
		"num": 93,
		"name": "Haunter",
		"types": [
				"Ghost",
				"Poison"
		],
		"baseStats": {
				"hp": 45,
				"atk": 50,
				"def": 45,
				"spa": 115,
				"spd": 55,
				"spe": 95
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.1,
		"prevo": "Gastly",
		"evoLevel": 25,
		"evos": [
				"Gengar"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "haunter",
		"fullname": "pokemon: Haunter",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Haunter",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 405,
		"weighthg": 1,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gengar: {
		"exists": true,
		"tags": [],
		"num": 94,
		"name": "Gengar",
		"types": [
				"Ghost",
				"Poison"
		],
		"baseStats": {
				"hp": 60,
				"atk": 65,
				"def": 60,
				"spa": 130,
				"spd": 75,
				"spe": 110
		},
		"abilities": {
				"0": "Levivate"
		},
		"weightkg": 40.5,
		"prevo": "Haunter",
		"evoType": "trade",
		"eggGroups": [
				"Amorphous"
		],
		"otherFormes": [
				"Gengar-Mega"
		],
		"formeOrder": [
				"Gengar",
				"Gengar-Mega"
		],
		"canGigantamax": "G-Max Terror",
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "gengar",
		"fullname": "pokemon: Gengar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gengar",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 405,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gengarmega: {
		"exists": true,
		"tags": [],
		"num": 94,
		"name": "Gengar-Mega",
		"baseSpecies": "Gengar",
		// "forme": "Mega",
		"types": [
				"Ghost",
				"Poison"
		],
		"baseStats": {
				"hp": 60,
				"atk": 65,
				"def": 80,
				"spa": 170,
				"spd": 95,
				"spe": 130
		},
		"abilities": {
				"0": "Shadow Tag"
		},
		"weightkg": 40.5,
		"eggGroups": [
				"Amorphous"
		],
		// "requiredItem": "Gengarite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "gengarmega",
		"fullname": "pokemon: Gengar-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Gengarite"
		// ],
		"bst": 600,
		"weighthg": 405,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Gengar",
		// "changesFrom": "Gengar"
	},
	onix: {
		"exists": true,
		"tags": [],
		"num": 95,
		"name": "Onix",
		"types": [
				"Rock",
				"Ground"
		],
		"baseStats": {
				"hp": 35,
				"atk": 45,
				"def": 160,
				"spa": 30,
				"spd": 45,
				"spe": 70
		},
		"abilities": {
				"0": "Rock Head",
				"1": "Sturdy"
		},
		"weightkg": 210,
		"evos": [
				"Steelix"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "onix",
		"fullname": "pokemon: Onix",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Onix",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 385,
		"weighthg": 2100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	drowzee: {
		"exists": true,
		"tags": [],
		"num": 96,
		"name": "Drowzee",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 60,
				"atk": 48,
				"def": 45,
				"spa": 43,
				"spd": 90,
				"spe": 42
		},
		"abilities": {
				"0": "Insomnia",
				"1": "Inner Focus"
		},
		"weightkg": 32.4,
		"evos": [
				"Hypno"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "LC",
		"id": "drowzee",
		"fullname": "pokemon: Drowzee",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Drowzee",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 328,
		"weighthg": 324,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hypno: {
		"exists": true,
		"tags": [],
		"num": 97,
		"name": "Hypno",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 85,
				"atk": 73,
				"def": 70,
				"spa": 73,
				"spd": 115,
				"spe": 67
		},
		"abilities": {
				"0": "Insomnia",
				"1": "Inner Focus"
		},
		"weightkg": 75.6,
		"prevo": "Drowzee",
		"evoLevel": 26,
		"eggGroups": [
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "hypno",
		"fullname": "pokemon: Hypno",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hypno",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 483,
		"weighthg": 756,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	krabby: {
		"exists": true,
		"tags": [],
		"num": 98,
		"name": "Krabby",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 30,
				"atk": 105,
				"def": 90,
				"spa": 25,
				"spd": 25,
				"spe": 50
		},
		"abilities": {
				"0": "Hyper Cutter",
				"1": "Shell Armor"
		},
		"weightkg": 6.5,
		"evos": [
				"Kingler"
		],
		"eggGroups": [
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "krabby",
		"fullname": "pokemon: Krabby",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Krabby",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 325,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kingler: {
		"exists": true,
		"tags": [],
		"num": 99,
		"name": "Kingler",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 55,
				"atk": 130,
				"def": 115,
				"spa": 50,
				"spd": 50,
				"spe": 75
		},
		"abilities": {
				"0": "Hyper Cutter",
				"1": "Shell Armor"
		},
		"weightkg": 60,
		"prevo": "Krabby",
		"evoLevel": 28,
		"eggGroups": [
				"Water 3"
		],
		"canGigantamax": "G-Max Foam Burst",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kingler",
		"fullname": "pokemon: Kingler",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Kingler",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 475,
		"weighthg": 600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	voltorb: {
		"exists": true,
		"tags": [],
		"num": 100,
		"name": "Voltorb",
		"types": [
				"Electric"
		],
		"gender": "N",
		"baseStats": {
				"hp": 40,
				"atk": 30,
				"def": 50,
				"spa": 55,
				"spd": 55,
				"spe": 100
		},
		"abilities": {
				"0": "Soundproof",
				"1": "Static"
		},
		"weightkg": 10.4,
		"evos": [
				"Electrode"
		],
		"eggGroups": [
				"Mineral"
		],
		"otherFormes": [
				"Voltorb-Hisui"
		],
		"formeOrder": [
				"Voltorb",
				"Voltorb-Hisui"
		],
		"tier": "LC",
		"id": "voltorb",
		"fullname": "pokemon: Voltorb",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Voltorb",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 330,
		"weighthg": 104,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	voltorbhisui: {
		"exists": true,
		"tags": [],
		"num": 100,
		"name": "Voltorb-Hisui",
		"baseSpecies": "Voltorb",
		"forme": "Hisui",
		"types": [
				"Electric",
				"Grass"
		],
		"gender": "N",
		"baseStats": {
				"hp": 40,
				"atk": 30,
				"def": 50,
				"spa": 55,
				"spd": 55,
				"spe": 100
		},
		"abilities": {
				"0": "Soundproof",
				"1": "Static"
		},
		"weightkg": 13,
		"evos": [
				"Electrode-Hisui"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "LC",
		"id": "voltorbhisui",
		"fullname": "pokemon: Voltorb-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 330,
		"weighthg": 130,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	electrode: {
		"exists": true,
		"tags": [],
		"num": 101,
		"name": "Electrode",
		"types": [
				"Electric"
		],
		"gender": "N",
		"baseStats": {
				"hp": 60,
				"atk": 50,
				"def": 70,
				"spa": 80,
				"spd": 80,
				"spe": 150
		},
		"abilities": {
				"0": "Soundproof",
				"1": "Static"
		},
		"weightkg": 66.6,
		"prevo": "Voltorb",
		"evoLevel": 30,
		"eggGroups": [
				"Mineral"
		],
		"otherFormes": [
				"Electrode-Hisui"
		],
		"formeOrder": [
				"Electrode",
				"Electrode-Hisui"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "electrode",
		"fullname": "pokemon: Electrode",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Electrode",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 490,
		"weighthg": 666,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	electrodehisui: {
		"exists": true,
		"tags": [],
		"num": 101,
		"name": "Electrode-Hisui",
		"baseSpecies": "Electrode",
		"forme": "Hisui",
		"types": [
				"Electric",
				"Grass"
		],
		"gender": "N",
		"baseStats": {
				"hp": 60,
				"atk": 50,
				"def": 70,
				"spa": 80,
				"spd": 80,
				"spe": 150
		},
		"abilities": {
				"0": "Soundproof",
				"1": "Static"
		},
		"weightkg": 71,
		"prevo": "Voltorb-Hisui",
		"evoType": "useItem",
		"evoItem": "Leaf Stone",
		"eggGroups": [
				"Mineral"
		],
		"tier": "ZUBL",
		"doublesTier": "(DUU)",
		"id": "electrodehisui",
		"fullname": "pokemon: Electrode-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 490,
		"weighthg": 710,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	exeggcute: {
		"exists": true,
		"tags": [],
		"num": 102,
		"name": "Exeggcute",
		"types": [
				"Grass",
				"Psychic"
		],
		"baseStats": {
				"hp": 60,
				"atk": 40,
				"def": 80,
				"spa": 60,
				"spd": 45,
				"spe": 40
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 2.5,
		"evos": [
				"Exeggutor",
				"Exeggutor-Alola"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "LC",
		"id": "exeggcute",
		"fullname": "pokemon: Exeggcute",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Exeggcute",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 325,
		"weighthg": 25,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	exeggutor: {
		"exists": true,
		"tags": [],
		"num": 103,
		"name": "Exeggutor",
		"types": [
				"Grass",
				"Psychic"
		],
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 85,
				"spa": 125,
				"spd": 75,
				"spe": 55
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 120,
		"prevo": "Exeggcute",
		"evoType": "useItem",
		"evoItem": "Leaf Stone",
		"eggGroups": [
				"Grass"
		],
		"otherFormes": [
				"Exeggutor-Alola"
		],
		"formeOrder": [
				"Exeggutor",
				"Exeggutor-Alola"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "exeggutor",
		"fullname": "pokemon: Exeggutor",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Exeggutor",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 530,
		"weighthg": 1200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	exeggutoralola: {
		"exists": true,
		"tags": [],
		"num": 103,
		"name": "Exeggutor-Alola",
		"baseSpecies": "Exeggutor",
		"forme": "Alola",
		"types": [
				"Grass",
				"Dragon"
		],
		"baseStats": {
				"hp": 95,
				"atk": 105,
				"def": 85,
				"spa": 125,
				"spd": 75,
				"spe": 45
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 415.6,
		"prevo": "Exeggcute",
		"evoType": "useItem",
		"evoItem": "Leaf Stone",
		"evoRegion": "Alola",
		"eggGroups": [
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "exeggutoralola",
		"fullname": "pokemon: Exeggutor-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 530,
		"weighthg": 4156,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cubone: {
		"exists": true,
		"tags": [],
		"num": 104,
		"name": "Cubone",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 50,
				"atk": 50,
				"def": 95,
				"spa": 40,
				"spd": 50,
				"spe": 35
		},
		"abilities": {
				"0": "Rock Head",
				"1": "Lightning Rod",
				"H": "Battle Armor"
		},
		"weightkg": 6.5,
		"evos": [
				"Marowak",
				"Marowak-Alola"
		],
		"eggGroups": [
				"Monster"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "cubone",
		"fullname": "pokemon: Cubone",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Cubone",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 320,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	marowak: {
		"exists": true,
		"tags": [],
		"num": 105,
		"name": "Marowak",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 60,
				"atk": 80,
				"def": 110,
				"spa": 50,
				"spd": 80,
				"spe": 45
		},
		"abilities": {
				"0": "Rock Head",
				"1": "Lightning Rod",
				"H": "Battle Armor"
		},
		"weightkg": 45,
		"prevo": "Cubone",
		"evoLevel": 28,
		"eggGroups": [
				"Monster"
		],
		"otherFormes": [
				"Marowak-Alola",
				"Marowak-Alola-Totem"
		],
		"formeOrder": [
				"Marowak",
				"Marowak-Alola",
				"Marowak-Alola-Totem"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "marowak",
		"fullname": "pokemon: Marowak",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Marowak",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 425,
		"weighthg": 450,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	marowakalola: {
		"exists": true,
		"tags": [],
		"num": 105,
		"name": "Marowak-Alola",
		"baseSpecies": "Marowak",
		"forme": "Alola",
		"types": [
				"Fire",
				"Ghost"
		],
		"baseStats": {
				"hp": 60,
				"atk": 80,
				"def": 110,
				"spa": 50,
				"spd": 80,
				"spe": 45
		},
		"abilities": {
				"0": "Lightning Rod",
				"H": "Rock Head"
		},
		"weightkg": 34,
		"prevo": "Cubone",
		"evoLevel": 28,
		"evoCondition": "at night",
		"evoRegion": "Alola",
		"eggGroups": [
				"Monster"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "marowakalola",
		"fullname": "pokemon: Marowak-Alola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 425,
		"weighthg": 340,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	marowakalolatotem: {
		"exists": true,
		"tags": [],
		"num": 105,
		"name": "Marowak-Alola-Totem",
		"baseSpecies": "Marowak",
		"forme": "Alola-Totem",
		"types": [
				"Fire",
				"Ghost"
		],
		"baseStats": {
				"hp": 60,
				"atk": 80,
				"def": 110,
				"spa": 50,
				"spd": 80,
				"spe": 45
		},
		"abilities": {
				"0": "Rock Head"
		},
		"weightkg": 98,
		"eggGroups": [
				"Monster"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "marowakalolatotem",
		"fullname": "pokemon: Marowak-Alola-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 425,
		"weighthg": 980,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hitmonlee: {
		"exists": true,
		"tags": [],
		"num": 106,
		"name": "Hitmonlee",
		"types": [
				"Fighting"
		],
		"gender": "M",
		"baseStats": {
				"hp": 50,
				"atk": 120,
				"def": 53,
				"spa": 35,
				"spd": 110,
				"spe": 87
		},
		"abilities": {
				"0": "Limber"
		},
		"weightkg": 49.8,
		"prevo": "Tyrogue",
		"evoLevel": 20,
		"evoCondition": "with an Atk stat > its Def stat",
		"eggGroups": [
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "hitmonlee",
		"fullname": "pokemon: Hitmonlee",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hitmonlee",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 455,
		"weighthg": 498,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hitmonchan: {
		"exists": true,
		"tags": [],
		"num": 107,
		"name": "Hitmonchan",
		"types": [
				"Fighting"
		],
		"gender": "M",
		"baseStats": {
				"hp": 50,
				"atk": 105,
				"def": 79,
				"spa": 35,
				"spd": 110,
				"spe": 76
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Inner Focus"
		},
		"weightkg": 50.2,
		"prevo": "Tyrogue",
		"evoLevel": 20,
		"evoCondition": "with an Atk stat < its Def stat",
		"eggGroups": [
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "hitmonchan",
		"fullname": "pokemon: Hitmonchan",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hitmonchan",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 455,
		"weighthg": 502,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lickitung: {
		"exists": true,
		"tags": [],
		"num": 108,
		"name": "Lickitung",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 90,
				"atk": 55,
				"def": 75,
				"spa": 60,
				"spd": 75,
				"spe": 30
		},
		"abilities": {
				"0": "Own Tempo",
				"1": "Oblivious",
				"H": "Cloud Nine"
		},
		"weightkg": 65.5,
		"evos": [
				"Lickilicky"
		],
		"eggGroups": [
				"Monster"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lickitung",
		"fullname": "pokemon: Lickitung",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Lickitung",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 385,
		"weighthg": 655,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	koffing: {
		"exists": true,
		"tags": [],
		"num": 109,
		"name": "Koffing",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 40,
				"atk": 65,
				"def": 95,
				"spa": 60,
				"spd": 45,
				"spe": 35
		},
		"abilities": {
				"0": "Levitate",
				"1": "Stench"
		},
		"weightkg": 1,
		"evos": [
				"Weezing",
				"Weezing-Galar"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "koffing",
		"fullname": "pokemon: Koffing",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Koffing",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 340,
		"weighthg": 10,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	weezing: {
		"exists": true,
		"tags": [],
		"num": 110,
		"name": "Weezing",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 65,
				"atk": 90,
				"def": 120,
				"spa": 85,
				"spd": 70,
				"spe": 60
		},
		"abilities": {
				"0": "Levitate",
				"1": "Stench"
		},
		"weightkg": 9.5,
		"prevo": "Koffing",
		"evoLevel": 35,
		"eggGroups": [
				"Amorphous"
		],
		"otherFormes": [
				"Weezing-Galar"
		],
		"formeOrder": [
				"Weezing",
				"Weezing-Galar"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "weezing",
		"fullname": "pokemon: Weezing",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Weezing",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 95,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	weezinggalar: {
		"exists": true,
		"tags": [],
		"num": 110,
		"name": "Weezing-Galar",
		"baseSpecies": "Weezing",
		"forme": "Galar",
		"types": [
				"Poison",
				"Normal"
		],
		"baseStats": {
				"hp": 65,
				"atk": 90,
				"def": 120,
				"spa": 85,
				"spd": 70,
				"spe": 60
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 16,
		"prevo": "Koffing",
		"evoLevel": 35,
		"evoRegion": "Galar",
		"eggGroups": [
				"Amorphous"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "weezinggalar",
		"fullname": "pokemon: Weezing-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 160,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rhyhorn: {
		"exists": true,
		"tags": [],
		"num": 111,
		"name": "Rhyhorn",
		"types": [
				"Ground",
				"Rock"
		],
		"baseStats": {
				"hp": 80,
				"atk": 85,
				"def": 95,
				"spa": 30,
				"spd": 30,
				"spe": 25
		},
		"abilities": {
				"0": "Lightning Rod",
				"1": "Rock Head"
		},
		"weightkg": 115,
		"evos": [
				"Rhydon"
		],
		"eggGroups": [
				"Monster",
				"Field"
		],
		"tier": "LC",
		"id": "rhyhorn",
		"fullname": "pokemon: Rhyhorn",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Rhyhorn",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 345,
		"weighthg": 1150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rhydon: {
		"exists": true,
		"tags": [],
		"num": 112,
		"name": "Rhydon",
		"types": [
				"Ground",
				"Rock"
		],
		"baseStats": {
				"hp": 105,
				"atk": 130,
				"def": 120,
				"spa": 45,
				"spd": 45,
				"spe": 40
		},
		"abilities": {
				"0": "Lightning Rod",
				"1": "Rock Head"
		},
		"weightkg": 120,
		"prevo": "Rhyhorn",
		"evoLevel": 42,
		"evos": [
				"Rhyperior"
		],
		"eggGroups": [
				"Monster",
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "rhydon",
		"fullname": "pokemon: Rhydon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Rhydon",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 1200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chansey: {
		"exists": true,
		"tags": [],
		"num": 113,
		"name": "Chansey",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 250,
				"atk": 5,
				"def": 5,
				"spa": 35,
				"spd": 105,
				"spe": 50
		},
		"abilities": {
				"0": "Natural Cure",
				"1": "Serene Grace"
		},
		"weightkg": 34.6,
		"prevo": "Happiny",
		"evoType": "levelHold",
		"evoItem": "Oval Stone",
		"evoCondition": "during the day",
		"evos": [
				"Blissey"
		],
		"eggGroups": [
				"Fairy"
		],
		"canHatch": true,
		"tier": "RU",
		"doublesTier": "NFE",
		"id": "chansey",
		"fullname": "pokemon: Chansey",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Chansey",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 450,
		"weighthg": 346,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tangela: {
		"exists": true,
		"tags": [],
		"num": 114,
		"name": "Tangela",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 65,
				"atk": 55,
				"def": 115,
				"spa": 100,
				"spd": 40,
				"spe": 60
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 35,
		"evos": [
				"Tangrowth"
		],
		"eggGroups": [
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tangela",
		"fullname": "pokemon: Tangela",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tangela",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 435,
		"weighthg": 350,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kangaskhan: {
		"exists": true,
		"tags": [],
		"num": 115,
		"name": "Kangaskhan",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 105,
				"atk": 95,
				"def": 80,
				"spa": 40,
				"spd": 80,
				"spe": 90
		},
		"abilities": {
				"0": "Early Bird",
				"1": "Inner Focus"
		},
		"weightkg": 80,
		"eggGroups": [
				"Monster"
		],
		"otherFormes": [
				"Kangaskhan-Mega"
		],
		"formeOrder": [
				"Kangaskhan",
				"Kangaskhan-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kangaskhan",
		"fullname": "pokemon: Kangaskhan",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Kangaskhan",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 490,
		"weighthg": 800,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kangaskhanmega: {
		"exists": true,
		"tags": [],
		"num": 115,
		"name": "Kangaskhan-Mega",
		"baseSpecies": "Kangaskhan",
		// "forme": "Mega",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 105,
				"atk": 125,
				"def": 100,
				"spa": 60,
				"spd": 100,
				"spe": 100
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100,
		"eggGroups": [
				"Monster"
		],
		// "requiredItem": "Kangaskhanite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kangaskhanmega",
		"fullname": "pokemon: Kangaskhan-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		// "requiredItems": [
		// 		"Kangaskhanite"
		// ],
		"bst": 590,
		"weighthg": 1000,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Kangaskhan",
		// "changesFrom": "Kangaskhan"
	},
	horsea: {
		"exists": true,
		"tags": [],
		"num": 116,
		"name": "Horsea",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 30,
				"atk": 40,
				"def": 70,
				"spa": 70,
				"spd": 25,
				"spe": 60
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Damp"
		},
		"weightkg": 8,
		"evos": [
				"Seadra"
		],
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "LC",
		"id": "horsea",
		"fullname": "pokemon: Horsea",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Horsea",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 295,
		"weighthg": 80,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	seadra: {
		"exists": true,
		"tags": [],
		"num": 117,
		"name": "Seadra",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 55,
				"atk": 65,
				"def": 95,
				"spa": 95,
				"spd": 45,
				"spe": 85
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Damp"
		},
		"weightkg": 25,
		"prevo": "Horsea",
		"evoLevel": 32,
		"evos": [
				"Kingdra"
		],
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "NFE",
		"id": "seadra",
		"fullname": "pokemon: Seadra",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Seadra",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 440,
		"weighthg": 250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	goldeen: {
		"exists": true,
		"tags": [],
		"num": 118,
		"name": "Goldeen",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 45,
				"atk": 67,
				"def": 60,
				"spa": 35,
				"spd": 50,
				"spe": 63
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Veil",
				"H": "Lightning Rod"
		},
		"weightkg": 15,
		"evos": [
				"Seaking"
		],
		"eggGroups": [
				"Water 2"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "goldeen",
		"fullname": "pokemon: Goldeen",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Goldeen",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 320,
		"weighthg": 150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	seaking: {
		"exists": true,
		"tags": [],
		"num": 119,
		"name": "Seaking",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 80,
				"atk": 92,
				"def": 65,
				"spa": 65,
				"spd": 80,
				"spe": 68
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Veil",
				"H": "Lightning Rod"
		},
		"weightkg": 39,
		"prevo": "Goldeen",
		"evoLevel": 33,
		"eggGroups": [
				"Water 2"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "seaking",
		"fullname": "pokemon: Seaking",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Seaking",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 450,
		"weighthg": 390,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	staryu: {
		"exists": true,
		"tags": [],
		"num": 120,
		"name": "Staryu",
		"types": [
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 30,
				"atk": 45,
				"def": 55,
				"spa": 70,
				"spd": 55,
				"spe": 85
		},
		"abilities": {
				"0": "Illuminate",
				"1": "Natural Cure"
		},
		"weightkg": 34.5,
		"evos": [
				"Starmie"
		],
		"eggGroups": [
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "staryu",
		"fullname": "pokemon: Staryu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Staryu",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 340,
		"weighthg": 345,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	starmie: {
		"exists": true,
		"tags": [],
		"num": 121,
		"name": "Starmie",
		"types": [
				"Water",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 60,
				"atk": 75,
				"def": 85,
				"spa": 100,
				"spd": 85,
				"spe": 115
		},
		"abilities": {
				"0": "Illuminate",
				"1": "Natural Cure"
		},
		"weightkg": 80,
		"prevo": "Staryu",
		"evoType": "useItem",
		"evoItem": "Water Stone",
		"eggGroups": [
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "starmie",
		"fullname": "pokemon: Starmie",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Starmie",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 520,
		"weighthg": 800,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mrmime: {
		"exists": true,
		"tags": [],
		"num": 122,
		"name": "Mr. Mime",
		"types": [
				"Psychic",
				"Normal"
		],
		"baseStats": {
				"hp": 40,
				"atk": 45,
				"def": 65,
				"spa": 100,
				"spd": 120,
				"spe": 90
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 54.5,
		"prevo": "Mime Jr.",
		"evoType": "levelMove",
		"evoMove": "Mimic",
		"eggGroups": [
				"Human-Like"
		],
		"canHatch": true,
		"otherFormes": [
				"Mr. Mime-Galar"
		],
		"formeOrder": [
				"Mr. Mime",
				"Mr. Mime-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mrmime",
		"fullname": "pokemon: Mr. Mime",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Mr. Mime",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 545,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mrmimegalar: {
		"exists": true,
		"tags": [],
		"num": 122,
		"name": "Mr. Mime-Galar",
		"baseSpecies": "Mr. Mime",
		"forme": "Galar",
		"types": [
				"Ice",
				"Psychic"
		],
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 65,
				"spa": 90,
				"spd": 90,
				"spe": 100
		},
		"abilities": {
				"0": "Vital Spirit"
		},
		"weightkg": 56.8,
		"prevo": "Mime Jr.",
		"evoType": "levelMove",
		"evoMove": "Mimic",
		"evoRegion": "Galar",
		"evos": [
				"Mr. Rime"
		],
		"eggGroups": [
				"Human-Like"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mrmimegalar",
		"fullname": "pokemon: Mr. Mime-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 568,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	scyther: {
		"exists": true,
		"tags": [],
		"num": 123,
		"name": "Scyther",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 70,
				"atk": 110,
				"def": 80,
				"spa": 55,
				"spd": 80,
				"spe": 105
		},
		"abilities": {
				"0": "Swarm"
		},
		"weightkg": 56,
		"evos": [
				"Scizor",
				"Kleavor"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "PU",
		"doublesTier": "NFE",
		"id": "scyther",
		"fullname": "pokemon: Scyther",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Scyther",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 560,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	jynx: {
		"exists": true,
		"tags": [],
		"num": 124,
		"name": "Jynx",
		"types": [
				"Ice",
				"Psychic"
		],
		"gender": "F",
		"baseStats": {
				"hp": 65,
				"atk": 50,
				"def": 35,
				"spa": 115,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Oblivious"
		},
		"weightkg": 40.6,
		"prevo": "Smoochum",
		"evoLevel": 30,
		"eggGroups": [
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "jynx",
		"fullname": "pokemon: Jynx",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Jynx",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 455,
		"weighthg": 406,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	electabuzz: {
		"exists": true,
		"tags": [],
		"num": 125,
		"name": "Electabuzz",
		"types": [
				"Electric"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 65,
				"atk": 83,
				"def": 57,
				"spa": 95,
				"spd": 85,
				"spe": 105
		},
		"abilities": {
				"0": "Static",
				"1": "Vital Spirit"
		},
		"weightkg": 30,
		"prevo": "Elekid",
		"evoLevel": 30,
		"evos": [
				"Electivire"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "NFE",
		"id": "electabuzz",
		"fullname": "pokemon: Electabuzz",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Electabuzz",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 490,
		"weighthg": 300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	magmar: {
		"exists": true,
		"tags": [],
		"num": 126,
		"name": "Magmar",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 65,
				"atk": 95,
				"def": 57,
				"spa": 100,
				"spd": 85,
				"spe": 93
		},
		"abilities": {
				"0": "Flame Body",
				"1": "Vital Spirit"
		},
		"weightkg": 44.5,
		"prevo": "Magby",
		"evoLevel": 30,
		"evos": [
				"Magmortar"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "NFE",
		"id": "magmar",
		"fullname": "pokemon: Magmar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Magmar",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 495,
		"weighthg": 445,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pinsir: {
		"exists": true,
		"tags": [],
		"num": 127,
		"name": "Pinsir",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 65,
				"atk": 125,
				"def": 100,
				"spa": 55,
				"spd": 70,
				"spe": 85
		},
		"abilities": {
				"0": "Hyper Cutter"
		},
		"weightkg": 55,
		"eggGroups": [
				"Bug"
		],
		"otherFormes": [
				"Pinsir-Mega"
		],
		"formeOrder": [
				"Pinsir",
				"Pinsir-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pinsir",
		"fullname": "pokemon: Pinsir",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pinsir",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 550,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pinsirmega: {
		"exists": true,
		"tags": [],
		"num": 127,
		"name": "Pinsir-Mega",
		"baseSpecies": "Pinsir",
		// "forme": "Mega",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 65,
				"atk": 155,
				"def": 120,
				"spa": 65,
				"spd": 90,
				"spe": 105
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 59,
		"eggGroups": [
				"Bug"
		],
		// "requiredItem": "Pinsirite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pinsirmega",
		"fullname": "pokemon: Pinsir-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Pinsirite"
		// ],
		"bst": 600,
		"weighthg": 590,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Pinsir",
		// "changesFrom": "Pinsir"
	},
	tauros: {
		"exists": true,
		"tags": [],
		"num": 128,
		"name": "Tauros",
		"types": [
				"Normal"
		],
		"gender": "M",
		"baseStats": {
				"hp": 75,
				"atk": 100,
				"def": 95,
				"spa": 40,
				"spd": 70,
				"spe": 110
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 88.4,
		"otherFormes": [
				"Tauros-Paldea-Combat",
				"Tauros-Paldea-Blaze",
				"Tauros-Paldea-Aqua"
		],
		"formeOrder": [
				"Tauros",
				"Tauros-Paldea-Combat",
				"Tauros-Paldea-Blaze",
				"Tauros-Paldea-Aqua"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "tauros",
		"fullname": "pokemon: Tauros",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tauros",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 490,
		"weighthg": 884,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	taurospaldeacombat: {
		"exists": true,
		"tags": [],
		"num": 128,
		"name": "Tauros-Paldea-Combat",
		"baseSpecies": "Tauros",
		"forme": "Paldea-Combat",
		"types": [
				"Fighting"
		],
		"gender": "M",
		"baseStats": {
				"hp": 75,
				"atk": 110,
				"def": 105,
				"spa": 30,
				"spd": 70,
				"spe": 100
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 115,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "taurospaldeacombat",
		"fullname": "pokemon: Tauros-Paldea-Combat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 490,
		"weighthg": 1150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	taurospaldeablaze: {
		"exists": true,
		"tags": [],
		"num": 128,
		"name": "Tauros-Paldea-Blaze",
		"baseSpecies": "Tauros",
		"forme": "Paldea-Blaze",
		"types": [
				"Fighting",
				"Fire"
		],
		"gender": "M",
		"baseStats": {
				"hp": 75,
				"atk": 110,
				"def": 105,
				"spa": 30,
				"spd": 70,
				"spe": 100
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 85,
		"eggGroups": [
				"Field"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "taurospaldeablaze",
		"fullname": "pokemon: Tauros-Paldea-Blaze",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 490,
		"weighthg": 850,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	taurospaldeaaqua: {
		"exists": true,
		"tags": [],
		"num": 128,
		"name": "Tauros-Paldea-Aqua",
		"baseSpecies": "Tauros",
		"forme": "Paldea-Aqua",
		"types": [
				"Fighting",
				"Water"
		],
		"gender": "M",
		"baseStats": {
				"hp": 75,
				"atk": 110,
				"def": 105,
				"spa": 30,
				"spd": 70,
				"spe": 100
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 110,
		"eggGroups": [
				"Field"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "taurospaldeaaqua",
		"fullname": "pokemon: Tauros-Paldea-Aqua",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 490,
		"weighthg": 1100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	magikarp: {
		"exists": true,
		"tags": [],
		"num": 129,
		"name": "Magikarp",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 20,
				"atk": 10,
				"def": 55,
				"spa": 15,
				"spd": 20,
				"spe": 80
		},
		"abilities": {
				"0": "Swift Swim"
		},
		"weightkg": 10,
		"evos": [
				"Gyarados"
		],
		"eggGroups": [
				"Water 2",
				"Dragon"
		],
		"tier": "LC",
		"id": "magikarp",
		"fullname": "pokemon: Magikarp",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Magikarp",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 200,
		"weighthg": 100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gyarados: {
		"exists": true,
		"tags": [],
		"num": 130,
		"name": "Gyarados",
		"types": [
				"Water",
				"Flying"
		],
		"baseStats": {
				"hp": 95,
				"atk": 125,
				"def": 79,
				"spa": 60,
				"spd": 100,
				"spe": 81
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 235,
		"prevo": "Magikarp",
		"evoLevel": 20,
		"eggGroups": [
				"Water 2",
				"Dragon"
		],
		"otherFormes": [
				"Gyarados-Mega"
		],
		"formeOrder": [
				"Gyarados",
				"Gyarados-Mega"
		],
		"tier": "NUBL",
		"doublesTier": "DUU",
		"id": "gyarados",
		"fullname": "pokemon: Gyarados",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gyarados",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 540,
		"weighthg": 2350,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gyaradosmega: {
		"exists": true,
		"tags": [],
		"num": 130,
		"name": "Gyarados-Mega",
		"baseSpecies": "Gyarados",
		// "forme": "Mega",
		"types": [
				"Water",
				"Dark"
		],
		"baseStats": {
				"hp": 95,
				"atk": 155,
				"def": 109,
				"spa": 70,
				"spd": 130,
				"spe": 81
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 305,
		"eggGroups": [
				"Water 2",
				"Dragon"
		],
		// "requiredItem": "Gyaradosite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "gyaradosmega",
		"fullname": "pokemon: Gyarados-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Gyaradosite"
		// ],
		"bst": 640,
		"weighthg": 3050,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Gyarados",
		// "changesFrom": "Gyarados"
	},
	lapras: {
		"exists": true,
		"tags": [],
		"num": 131,
		"name": "Lapras",
		"types": [
				"Water",
				"Ice"
		],
		"baseStats": {
				"hp": 130,
				"atk": 85,
				"def": 80,
				"spa": 85,
				"spd": 95,
				"spe": 60
		},
		"abilities": {
				"0": "Water Absorb",
				"1": "Shell Armor"
		},
		"weightkg": 220,
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"canGigantamax": "G-Max Resonance",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "lapras",
		"fullname": "pokemon: Lapras",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lapras",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 535,
		"weighthg": 2200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ditto: {
		"exists": true,
		"tags": [],
		"num": 132,
		"name": "Ditto",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 48,
				"atk": 48,
				"def": 48,
				"spa": 48,
				"spd": 48,
				"spe": 48
		},
		"abilities": {
				"0": "Limber"
		},
		"weightkg": 4,
		"eggGroups": [
				"Ditto"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "ditto",
		"fullname": "pokemon: Ditto",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ditto",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 288,
		"weighthg": 40,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	eevee: {
		"exists": true,
		"tags": [],
		"num": 133,
		"name": "Eevee",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 55,
				"atk": 55,
				"def": 50,
				"spa": 45,
				"spd": 65,
				"spe": 55
		},
		"abilities": {
				"0": "Run Away"
		},
		"weightkg": 6.5,
		"evos": [
				"Vaporeon",
				"Jolteon",
				"Flareon",
				"Espeon",
				"Umbreon",
				"Leafeon",
				"Glaceon",
				"Sylveon"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Eevee-Starter"
		],
		"formeOrder": [
				"Eevee",
				"Eevee-Starter"
		],
		"canGigantamax": "G-Max Cuddle",
		"tier": "LC",
		"id": "eevee",
		"fullname": "pokemon: Eevee",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Eevee",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 325,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	eeveestarter: {
		"exists": true,
		"tags": [],
		"num": 133,
		"name": "Eevee-Starter",
		"baseSpecies": "Eevee",
		"forme": "Starter",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 65,
				"atk": 75,
				"def": 70,
				"spa": 65,
				"spd": 85,
				"spe": 75
		},
		"abilities": {
				"0": "Run Away"
		},
		"weightkg": 6.5,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": "LGPE",
		"tier": "Illegal",
		"id": "eeveestarter",
		"fullname": "pokemon: Eevee-Starter",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 435,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vaporeon: {
		"exists": true,
		"tags": [],
		"num": 134,
		"name": "Vaporeon",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 130,
				"atk": 65,
				"def": 60,
				"spa": 110,
				"spd": 95,
				"spe": 65
		},
		"abilities": {
				"0": "Water Absorb"
		},
		"weightkg": 29,
		"prevo": "Eevee",
		"evoType": "useItem",
		"evoItem": "Water Stone",
		"eggGroups": [
				"Field"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "vaporeon",
		"fullname": "pokemon: Vaporeon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Vaporeon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 290,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	jolteon: {
		"exists": true,
		"tags": [],
		"num": 135,
		"name": "Jolteon",
		"types": [
				"Electric"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 65,
				"atk": 65,
				"def": 60,
				"spa": 110,
				"spd": 95,
				"spe": 130
		},
		"abilities": {
				"0": "Volt Absorb"
		},
		"weightkg": 24.5,
		"prevo": "Eevee",
		"evoType": "useItem",
		"evoItem": "Thunder Stone",
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "jolteon",
		"fullname": "pokemon: Jolteon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Jolteon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 245,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	flareon: {
		"exists": true,
		"tags": [],
		"num": 136,
		"name": "Flareon",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 65,
				"atk": 130,
				"def": 60,
				"spa": 95,
				"spd": 110,
				"spe": 65
		},
		"abilities": {
				"0": "Flash Fire",
				"1": "Guts"
		},
		"weightkg": 25,
		"prevo": "Eevee",
		"evoType": "useItem",
		"evoItem": "Fire Stone",
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "flareon",
		"fullname": "pokemon: Flareon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Flareon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	porygon: {
		"exists": true,
		"tags": [],
		"num": 137,
		"name": "Porygon",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 65,
				"atk": 60,
				"def": 70,
				"spa": 85,
				"spd": 75,
				"spe": 40
		},
		"abilities": {
				"0": "Trace"
		},
		"weightkg": 36.5,
		"evos": [
				"Porygon2"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "NFE",
		"id": "porygon",
		"fullname": "pokemon: Porygon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Porygon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 395,
		"weighthg": 365,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	omanyte: {
		"exists": true,
		"tags": [],
		"num": 138,
		"name": "Omanyte",
		"types": [
				"Rock",
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 35,
				"atk": 40,
				"def": 100,
				"spa": 90,
				"spd": 55,
				"spe": 35
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Shell Armor"
		},
		"weightkg": 7.5,
		"evos": [
				"Omastar"
		],
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "omanyte",
		"fullname": "pokemon: Omanyte",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Omanyte",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 355,
		"weighthg": 75,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	omastar: {
		"exists": true,
		"tags": [],
		"num": 139,
		"name": "Omastar",
		"types": [
				"Rock",
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 70,
				"atk": 60,
				"def": 125,
				"spa": 115,
				"spd": 70,
				"spe": 55
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Shell Armor"
		},
		"weightkg": 35,
		"prevo": "Omanyte",
		"evoLevel": 40,
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "omastar",
		"fullname": "pokemon: Omastar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Omastar",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 495,
		"weighthg": 350,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kabuto: {
		"exists": true,
		"tags": [],
		"num": 140,
		"name": "Kabuto",
		"types": [
				"Rock",
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 30,
				"atk": 80,
				"def": 90,
				"spa": 55,
				"spd": 45,
				"spe": 55
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Battle Armor"
		},
		"weightkg": 11.5,
		"evos": [
				"Kabutops"
		],
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kabuto",
		"fullname": "pokemon: Kabuto",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Kabuto",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 355,
		"weighthg": 115,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kabutops: {
		"exists": true,
		"tags": [],
		"num": 141,
		"name": "Kabutops",
		"types": [
				"Rock",
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 60,
				"atk": 115,
				"def": 105,
				"spa": 65,
				"spd": 70,
				"spe": 80
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Battle Armor"
		},
		"weightkg": 40.5,
		"prevo": "Kabuto",
		"evoLevel": 40,
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kabutops",
		"fullname": "pokemon: Kabutops",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Kabutops",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 495,
		"weighthg": 405,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	aerodactyl: {
		"exists": true,
		"tags": [],
		"num": 142,
		"name": "Aerodactyl",
		"types": [
				"Rock",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 80,
				"atk": 105,
				"def": 65,
				"spa": 60,
				"spd": 75,
				"spe": 130
		},
		"abilities": {
				"0": "Rock Head",
				"1": "Pressure"
		},
		"weightkg": 59,
		"eggGroups": [
				"Flying"
		],
		"otherFormes": [
				"Aerodactyl-Mega"
		],
		"formeOrder": [
				"Aerodactyl",
				"Aerodactyl-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "aerodactyl",
		"fullname": "pokemon: Aerodactyl",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Aerodactyl",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"bst": 515,
		"weighthg": 590,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	aerodactylmega: {
		"exists": true,
		"tags": [],
		"num": 142,
		"name": "Aerodactyl-Mega",
		"baseSpecies": "Aerodactyl",
		// "forme": "Mega",
		"types": [
				"Rock",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 80,
				"atk": 135,
				"def": 85,
				"spa": 70,
				"spd": 95,
				"spe": 150
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 79,
		"eggGroups": [
				"Flying"
		],
		// "requiredItem": "Aerodactylite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "aerodactylmega",
		"fullname": "pokemon: Aerodactyl-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Aerodactylite"
		// ],
		"bst": 615,
		"weighthg": 790,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Aerodactyl",
		// "changesFrom": "Aerodactyl"
	},
	snorlax: {
		"exists": true,
		"tags": [],
		"num": 143,
		"name": "Snorlax",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 160,
				"atk": 110,
				"def": 65,
				"spa": 65,
				"spd": 110,
				"spe": 30
		},
		"abilities": {
				"0": "Immunity",
				"1": "Thick Fat"
		},
		"weightkg": 460,
		"prevo": "Munchlax",
		"evoType": "levelFriendship",
		"eggGroups": [
				"Monster"
		],
		"canHatch": true,
		"canGigantamax": "G-Max Replenish",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "snorlax",
		"fullname": "pokemon: Snorlax",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Snorlax",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"bst": 540,
		"weighthg": 4600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	articuno: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 144,
		"name": "Articuno",
		"types": [
				"Ice",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 85,
				"def": 100,
				"spa": 95,
				"spd": 125,
				"spe": 85
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 55.4,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Articuno-Galar"
		],
		"formeOrder": [
				"Articuno",
				"Articuno-Galar"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "articuno",
		"fullname": "pokemon: Articuno",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Articuno",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 554,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	articunogalar: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 144,
		"name": "Articuno-Galar",
		"baseSpecies": "Articuno",
		"forme": "Galar",
		"types": [
				"Psychic",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 85,
				"def": 85,
				"spa": 125,
				"spd": 100,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 50.9,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "ZUBL",
		"doublesTier": "(DUU)",
		"id": "articunogalar",
		"fullname": "pokemon: Articuno-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 509,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zapdos: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 145,
		"name": "Zapdos",
		"types": [
				"Electric",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 90,
				"def": 85,
				"spa": 125,
				"spd": 90,
				"spe": 100
		},
		"abilities": {
				"0": "Pressure",
				"1": "Static"
		},
		"weightkg": 52.6,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Zapdos-Galar"
		],
		"formeOrder": [
				"Zapdos",
				"Zapdos-Galar"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "zapdos",
		"fullname": "pokemon: Zapdos",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Zapdos",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 526,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zapdosgalar: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 145,
		"name": "Zapdos-Galar",
		"baseSpecies": "Zapdos",
		"forme": "Galar",
		"types": [
				"Fighting",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 125,
				"def": 90,
				"spa": 85,
				"spd": 90,
				"spe": 100
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 58.2,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "zapdosgalar",
		"fullname": "pokemon: Zapdos-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 582,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	moltres: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 146,
		"name": "Moltres",
		"types": [
				"Fire",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 100,
				"def": 90,
				"spa": 125,
				"spd": 85,
				"spe": 90
		},
		"abilities": {
				"0": "Pressure",
				"1": "Flame Body"
		},
		"weightkg": 60,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Moltres-Galar"
		],
		"formeOrder": [
				"Moltres",
				"Moltres-Galar"
		],
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "moltres",
		"fullname": "pokemon: Moltres",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Moltres",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	moltresgalar: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 146,
		"name": "Moltres-Galar",
		"baseSpecies": "Moltres",
		"forme": "Galar",
		"types": [
				"Dark",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 85,
				"def": 90,
				"spa": 100,
				"spd": 125,
				"spe": 90
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 66,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "UUBL",
		"doublesTier": "DUU",
		"id": "moltresgalar",
		"fullname": "pokemon: Moltres-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 660,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dratini: {
		"exists": true,
		"tags": [],
		"num": 147,
		"name": "Dratini",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 41,
				"atk": 64,
				"def": 45,
				"spa": 50,
				"spd": 50,
				"spe": 50
		},
		"abilities": {
				"0": "Shed Skin",
				"1": "Marvel Scale"
		},
		"weightkg": 3.3,
		"evos": [
				"Dragonair"
		],
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "LC",
		"id": "dratini",
		"fullname": "pokemon: Dratini",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dratini",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 33,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dragonair: {
		"exists": true,
		"tags": [],
		"num": 148,
		"name": "Dragonair",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 61,
				"atk": 84,
				"def": 65,
				"spa": 70,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Shed Skin",
				"1": "Marvel Scale"
		},
		"weightkg": 16.5,
		"prevo": "Dratini",
		"evoLevel": 30,
		"evos": [
				"Dragonite"
		],
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "NFE",
		"id": "dragonair",
		"fullname": "pokemon: Dragonair",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dragonair",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 165,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dragonite: {
		"exists": true,
		"tags": [],
		"num": 149,
		"name": "Dragonite",
		"types": [
				"Dragon",
				"Flying"
		],
		"baseStats": {
				"hp": 91,
				"atk": 134,
				"def": 95,
				"spa": 100,
				"spd": 100,
				"spe": 80
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 210,
		"prevo": "Dragonair",
		"evoLevel": 55,
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "OU",
		"doublesTier": "DOU",
		"id": "dragonite",
		"fullname": "pokemon: Dragonite",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dragonite",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 2100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mewtwo: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 150,
		"name": "Mewtwo",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 106,
				"atk": 110,
				"def": 90,
				"spa": 154,
				"spd": 90,
				"spe": 130
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 122,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Mewtwo-Mega-X",
				"Mewtwo-Mega-Y"
		],
		"formeOrder": [
				"Mewtwo",
				"Mewtwo-Mega-X",
				"Mewtwo-Mega-Y"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "mewtwo",
		"fullname": "pokemon: Mewtwo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mewtwo",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 1220,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mewtwomegax: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 150,
		"name": "Mewtwo-Mega-X",
		"baseSpecies": "Mewtwo",
		"forme": "Mega-X",
		"types": [
				"Psychic",
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 106,
				"atk": 190,
				"def": 100,
				"spa": 154,
				"spd": 100,
				"spe": 130
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 127,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Mewtwonite X",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mewtwomegax",
		"fullname": "pokemon: Mewtwo-Mega-X",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Mewtwonite X"
		// ],
		"bst": 780,
		"weighthg": 1270,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Mewtwo",
		// "changesFrom": "Mewtwo"
	},
	mewtwomegay: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 150,
		"name": "Mewtwo-Mega-Y",
		"baseSpecies": "Mewtwo",
		"forme": "Mega-Y",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 106,
				"atk": 150,
				"def": 70,
				"spa": 194,
				"spd": 120,
				"spe": 140
		},
		"abilities": {
				"0": "Insomnia"
		},
		"weightkg": 33,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Mewtwonite Y",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mewtwomegay",
		"fullname": "pokemon: Mewtwo-Mega-Y",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Mewtwonite Y"
		// ],
		"bst": 780,
		"weighthg": 330,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Mewtwo",
		// "changesFrom": "Mewtwo"
	},
	mew: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 151,
		"name": "Mew",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 100,
				"spa": 100,
				"spd": 100,
				"spe": 100
		},
		"abilities": {
				"0": "Synchronize"
		},
		"weightkg": 4,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "NUBL",
		"doublesTier": "(DUU)",
		"id": "mew",
		"fullname": "pokemon: Mew",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mew",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 40,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chikorita: {
		"exists": true,
		"tags": [],
		"num": 152,
		"name": "Chikorita",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 45,
				"atk": 49,
				"def": 65,
				"spa": 49,
				"spd": 65,
				"spe": 45
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 6.4,
		"evos": [
				"Bayleef"
		],
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "LC",
		"id": "chikorita",
		"fullname": "pokemon: Chikorita",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Chikorita",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 318,
		"weighthg": 64,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bayleef: {
		"exists": true,
		"tags": [],
		"num": 153,
		"name": "Bayleef",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 60,
				"atk": 62,
				"def": 80,
				"spa": 63,
				"spd": 80,
				"spe": 60
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 15.8,
		"prevo": "Chikorita",
		"evoLevel": 16,
		"evos": [
				"Meganium"
		],
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "NFE",
		"id": "bayleef",
		"fullname": "pokemon: Bayleef",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bayleef",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 158,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	meganium: {
		"exists": true,
		"tags": [],
		"num": 154,
		"name": "Meganium",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 80,
				"atk": 82,
				"def": 100,
				"spa": 83,
				"spd": 100,
				"spe": 80
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 100.5,
		"prevo": "Bayleef",
		"evoLevel": 32,
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "meganium",
		"fullname": "pokemon: Meganium",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Meganium",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cyndaquil: {
		"exists": true,
		"tags": [],
		"num": 155,
		"name": "Cyndaquil",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 39,
				"atk": 52,
				"def": 43,
				"spa": 60,
				"spd": 50,
				"spe": 65
		},
		"abilities": {
				"0": "Blaze",
				"1": "Flash Fire"
		},
		"weightkg": 7.9,
		"evos": [
				"Quilava"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "cyndaquil",
		"fullname": "pokemon: Cyndaquil",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cyndaquil",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 309,
		"weighthg": 79,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	quilava: {
		"exists": true,
		"tags": [],
		"num": 156,
		"name": "Quilava",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 58,
				"atk": 64,
				"def": 58,
				"spa": 80,
				"spd": 65,
				"spe": 80
		},
		"abilities": {
				"0": "Blaze",
				"1": "Flash Fire"
		},
		"weightkg": 19,
		"prevo": "Cyndaquil",
		"evoLevel": 14,
		"evos": [
				"Typhlosion",
				"Typhlosion-Hisui"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "quilava",
		"fullname": "pokemon: Quilava",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Quilava",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 190,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	typhlosion: {
		"exists": true,
		"tags": [],
		"num": 157,
		"name": "Typhlosion",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 78,
				"atk": 84,
				"def": 78,
				"spa": 109,
				"spd": 85,
				"spe": 100
		},
		"abilities": {
				"0": "Blaze",
				"1": "Flash Fire"
		},
		"weightkg": 79.5,
		"prevo": "Quilava",
		"evoLevel": 36,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Typhlosion-Hisui"
		],
		"formeOrder": [
				"Typhlosion",
				"Typhlosion-Hisui"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "typhlosion",
		"fullname": "pokemon: Typhlosion",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Typhlosion",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 534,
		"weighthg": 795,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	typhlosionhisui: {
		"exists": true,
		"tags": [],
		"num": 157,
		"name": "Typhlosion-Hisui",
		"baseSpecies": "Typhlosion",
		"forme": "Hisui",
		"types": [
				"Fire",
				"Ghost"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 73,
				"atk": 84,
				"def": 78,
				"spa": 119,
				"spd": 85,
				"spe": 95
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 69.8,
		"prevo": "Quilava",
		"evoLevel": 36,
		"eggGroups": [
				"Field"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "typhlosionhisui",
		"fullname": "pokemon: Typhlosion-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 534,
		"weighthg": 698,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	totodile: {
		"exists": true,
		"tags": [],
		"num": 158,
		"name": "Totodile",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 64,
				"spa": 44,
				"spd": 48,
				"spe": 43
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 9.5,
		"evos": [
				"Croconaw"
		],
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "LC",
		"id": "totodile",
		"fullname": "pokemon: Totodile",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Totodile",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 314,
		"weighthg": 95,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	croconaw: {
		"exists": true,
		"tags": [],
		"num": 159,
		"name": "Croconaw",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 65,
				"atk": 80,
				"def": 80,
				"spa": 59,
				"spd": 63,
				"spe": 58
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 25,
		"prevo": "Totodile",
		"evoLevel": 18,
		"evos": [
				"Feraligatr"
		],
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "NFE",
		"id": "croconaw",
		"fullname": "pokemon: Croconaw",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Croconaw",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	feraligatr: {
		"exists": true,
		"tags": [],
		"num": 160,
		"name": "Feraligatr",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 85,
				"atk": 105,
				"def": 100,
				"spa": 79,
				"spd": 83,
				"spe": 78
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 88.8,
		"prevo": "Croconaw",
		"evoLevel": 30,
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "NUBL",
		"doublesTier": "(DUU)",
		"id": "feraligatr",
		"fullname": "pokemon: Feraligatr",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Feraligatr",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 888,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sentret: {
		"exists": true,
		"tags": [],
		"num": 161,
		"name": "Sentret",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 35,
				"atk": 46,
				"def": 34,
				"spa": 35,
				"spd": 45,
				"spe": 20
		},
		"abilities": {
				"0": "Run Away",
				"1": "Keen Eye"
		},
		"weightkg": 6,
		"evos": [
				"Furret"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "sentret",
		"fullname": "pokemon: Sentret",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sentret",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 215,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	furret: {
		"exists": true,
		"tags": [],
		"num": 162,
		"name": "Furret",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 85,
				"atk": 76,
				"def": 64,
				"spa": 45,
				"spd": 55,
				"spe": 90
		},
		"abilities": {
				"0": "Run Away",
				"1": "Keen Eye"
		},
		"weightkg": 32.5,
		"prevo": "Sentret",
		"evoLevel": 15,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "furret",
		"fullname": "pokemon: Furret",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Furret",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 415,
		"weighthg": 325,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hoothoot: {
		"exists": true,
		"tags": [],
		"num": 163,
		"name": "Hoothoot",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 60,
				"atk": 30,
				"def": 30,
				"spa": 36,
				"spd": 56,
				"spe": 50
		},
		"abilities": {
				"0": "Insomnia",
				"1": "Keen Eye"
		},
		"weightkg": 21.2,
		"evos": [
				"Noctowl"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "LC",
		"id": "hoothoot",
		"fullname": "pokemon: Hoothoot",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hoothoot",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 262,
		"weighthg": 212,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	noctowl: {
		"exists": true,
		"tags": [],
		"num": 164,
		"name": "Noctowl",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 100,
				"atk": 50,
				"def": 50,
				"spa": 86,
				"spd": 96,
				"spe": 70
		},
		"abilities": {
				"0": "Insomnia",
				"1": "Keen Eye"
		},
		"weightkg": 40.8,
		"prevo": "Hoothoot",
		"evoLevel": 20,
		"eggGroups": [
				"Flying"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "noctowl",
		"fullname": "pokemon: Noctowl",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Noctowl",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 452,
		"weighthg": 408,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ledyba: {
		"exists": true,
		"tags": [],
		"num": 165,
		"name": "Ledyba",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 40,
				"atk": 20,
				"def": 30,
				"spa": 40,
				"spd": 80,
				"spe": 55
		},
		"abilities": {
				"0": "Swarm",
				"1": "Early Bird"
		},
		"weightkg": 10.8,
		"evos": [
				"Ledian"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "ledyba",
		"fullname": "pokemon: Ledyba",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Ledyba",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 265,
		"weighthg": 108,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ledian: {
		"exists": true,
		"tags": [],
		"num": 166,
		"name": "Ledian",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 55,
				"atk": 35,
				"def": 50,
				"spa": 55,
				"spd": 110,
				"spe": 85
		},
		"abilities": {
				"0": "Swarm",
				"1": "Early Bird"
		},
		"weightkg": 35.6,
		"prevo": "Ledyba",
		"evoLevel": 18,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "ledian",
		"fullname": "pokemon: Ledian",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Ledian",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 390,
		"weighthg": 356,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	spinarak: {
		"exists": true,
		"tags": [],
		"num": 167,
		"name": "Spinarak",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 40,
				"atk": 60,
				"def": 40,
				"spa": 40,
				"spd": 40,
				"spe": 30
		},
		"abilities": {
				"0": "Swarm",
				"1": "Insomnia"
		},
		"weightkg": 8.5,
		"evos": [
				"Ariados"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "spinarak",
		"fullname": "pokemon: Spinarak",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Spinarak",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 250,
		"weighthg": 85,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ariados: {
		"exists": true,
		"tags": [],
		"num": 168,
		"name": "Ariados",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 70,
				"atk": 90,
				"def": 70,
				"spa": 60,
				"spd": 70,
				"spe": 40
		},
		"abilities": {
				"0": "Swarm",
				"1": "Insomnia"
		},
		"weightkg": 33.5,
		"prevo": "Spinarak",
		"evoLevel": 22,
		"eggGroups": [
				"Bug"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "ariados",
		"fullname": "pokemon: Ariados",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ariados",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 400,
		"weighthg": 335,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	crobat: {
		"exists": true,
		"tags": [],
		"num": 169,
		"name": "Crobat",
		"types": [
				"Poison",
				"Flying"
		],
		"baseStats": {
				"hp": 85,
				"atk": 90,
				"def": 80,
				"spa": 70,
				"spd": 80,
				"spe": 130
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 75,
		"prevo": "Golbat",
		"evoType": "levelFriendship",
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "crobat",
		"fullname": "pokemon: Crobat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Crobat",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 535,
		"weighthg": 750,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chinchou: {
		"exists": true,
		"tags": [],
		"num": 170,
		"name": "Chinchou",
		"types": [
				"Water",
				"Electric"
		],
		"baseStats": {
				"hp": 75,
				"atk": 38,
				"def": 38,
				"spa": 56,
				"spd": 56,
				"spe": 67
		},
		"abilities": {
				"0": "Volt Absorb",
				"1": "Illuminate",
				"H": "Water Absorb"
		},
		"weightkg": 12,
		"evos": [
				"Lanturn"
		],
		"eggGroups": [
				"Water 2"
		],
		"tier": "LC",
		"id": "chinchou",
		"fullname": "pokemon: Chinchou",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Chinchou",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 120,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lanturn: {
		"exists": true,
		"tags": [],
		"num": 171,
		"name": "Lanturn",
		"types": [
				"Water",
				"Electric"
		],
		"baseStats": {
				"hp": 125,
				"atk": 58,
				"def": 58,
				"spa": 76,
				"spd": 76,
				"spe": 67
		},
		"abilities": {
				"0": "Volt Absorb",
				"1": "Illuminate",
				"H": "Water Absorb"
		},
		"weightkg": 22.5,
		"prevo": "Chinchou",
		"evoLevel": 27,
		"eggGroups": [
				"Water 2"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "lanturn",
		"fullname": "pokemon: Lanturn",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lanturn",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 225,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pichu: {
		"exists": true,
		"tags": [],
		"num": 172,
		"name": "Pichu",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 20,
				"atk": 40,
				"def": 15,
				"spa": 35,
				"spd": 35,
				"spe": 60
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod"
		},
		"weightkg": 2,
		"evos": [
				"Pikachu"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"otherFormes": [
				"Pichu-Spiky-eared"
		],
		"formeOrder": [
				"Pichu",
				"Pichu-Spiky-eared"
		],
		"tier": "LC",
		"id": "pichu",
		"fullname": "pokemon: Pichu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pichu",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 205,
		"weighthg": 20,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pichuspikyeared: {
		"exists": true,
		"tags": [],
		"num": 172,
		"name": "Pichu-Spiky-eared",
		"baseSpecies": "Pichu",
		"forme": "Spiky-eared",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 20,
				"atk": 40,
				"def": 15,
				"spa": 35,
				"spd": 35,
				"spe": 60
		},
		"abilities": {
				"0": "Static"
		},
		"weightkg": 2,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pichuspikyeared",
		"fullname": "pokemon: Pichu-Spiky-eared",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 205,
		"weighthg": 20,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cleffa: {
		"exists": true,
		"tags": [],
		"num": 173,
		"name": "Cleffa",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 50,
				"atk": 25,
				"def": 28,
				"spa": 45,
				"spd": 55,
				"spe": 15
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 3,
		"evos": [
				"Clefairy"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "cleffa",
		"fullname": "pokemon: Cleffa",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cleffa",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"bst": 218,
		"weighthg": 30,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	igglybuff: {
		"exists": true,
		"tags": [],
		"num": 174,
		"name": "Igglybuff",
		"types": [
				"Normal",
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 90,
				"atk": 30,
				"def": 15,
				"spa": 40,
				"spd": 20,
				"spe": 15
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 1,
		"evos": [
				"Jigglypuff"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "igglybuff",
		"fullname": "pokemon: Igglybuff",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Igglybuff",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"bst": 210,
		"weighthg": 10,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	togepi: {
		"exists": true,
		"tags": [],
		"num": 175,
		"name": "Togepi",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 35,
				"atk": 20,
				"def": 65,
				"spa": 40,
				"spd": 65,
				"spe": 20
		},
		"abilities": {
				"0": "Hustle",
				"1": "Serene Grace"
		},
		"weightkg": 1.5,
		"evos": [
				"Togetic"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "togepi",
		"fullname": "pokemon: Togepi",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Togepi",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"bst": 245,
		"weighthg": 15,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	togetic: {
		"exists": true,
		"tags": [],
		"num": 176,
		"name": "Togetic",
		"types": [
				"Normal",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 55,
				"atk": 40,
				"def": 85,
				"spa": 80,
				"spd": 105,
				"spe": 40
		},
		"abilities": {
				"0": "Hustle",
				"1": "Serene Grace"
		},
		"weightkg": 3.2,
		"prevo": "Togepi",
		"evoType": "levelFriendship",
		"evos": [
				"Togekiss"
		],
		"eggGroups": [
				"Flying",
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "togetic",
		"fullname": "pokemon: Togetic",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Togetic",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 32,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	natu: {
		"exists": true,
		"tags": [],
		"num": 177,
		"name": "Natu",
		"types": [
				"Psychic",
				"Flying"
		],
		"baseStats": {
				"hp": 40,
				"atk": 50,
				"def": 45,
				"spa": 70,
				"spd": 45,
				"spe": 70
		},
		"abilities": {
				"0": "Synchronize",
				"1": "Early Bird"
		},
		"weightkg": 2,
		"evos": [
				"Xatu"
		],
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "natu",
		"fullname": "pokemon: Natu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Natu",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 320,
		"weighthg": 20,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	xatu: {
		"exists": true,
		"tags": [],
		"num": 178,
		"name": "Xatu",
		"types": [
				"Psychic",
				"Flying"
		],
		"baseStats": {
				"hp": 65,
				"atk": 75,
				"def": 70,
				"spa": 95,
				"spd": 70,
				"spe": 95
		},
		"abilities": {
				"0": "Synchronize",
				"1": "Early Bird"
		},
		"weightkg": 15,
		"prevo": "Natu",
		"evoLevel": 25,
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "xatu",
		"fullname": "pokemon: Xatu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Xatu",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 470,
		"weighthg": 150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mareep: {
		"exists": true,
		"tags": [],
		"num": 179,
		"name": "Mareep",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 55,
				"atk": 40,
				"def": 40,
				"spa": 65,
				"spd": 45,
				"spe": 35
		},
		"abilities": {
				"0": "Static",
				"1": "Plus"
		},
		"weightkg": 7.8,
		"evos": [
				"Flaaffy"
		],
		"eggGroups": [
				"Monster",
				"Field"
		],
		"tier": "LC",
		"id": "mareep",
		"fullname": "pokemon: Mareep",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mareep",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 280,
		"weighthg": 78,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	flaaffy: {
		"exists": true,
		"tags": [],
		"num": 180,
		"name": "Flaaffy",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 70,
				"atk": 55,
				"def": 55,
				"spa": 80,
				"spd": 60,
				"spe": 45
		},
		"abilities": {
				"0": "Static",
				"1": "Plus"
		},
		"weightkg": 13.3,
		"prevo": "Mareep",
		"evoLevel": 15,
		"evos": [
				"Ampharos"
		],
		"eggGroups": [
				"Monster",
				"Field"
		],
		"tier": "NFE",
		"id": "flaaffy",
		"fullname": "pokemon: Flaaffy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Flaaffy",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 365,
		"weighthg": 133,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ampharos: {
		"exists": true,
		"tags": [],
		"num": 181,
		"name": "Ampharos",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 90,
				"atk": 75,
				"def": 85,
				"spa": 115,
				"spd": 90,
				"spe": 55
		},
		"abilities": {
				"0": "Static",
				"1": "Plus"
		},
		"weightkg": 61.5,
		"prevo": "Flaaffy",
		"evoLevel": 30,
		"eggGroups": [
				"Monster",
				"Field"
		],
		"otherFormes": [
				"Ampharos-Mega"
		],
		"formeOrder": [
				"Ampharos",
				"Ampharos-Mega"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "ampharos",
		"fullname": "pokemon: Ampharos",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ampharos",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 510,
		"weighthg": 615,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ampharosmega: {
		"exists": true,
		"tags": [],
		"num": 181,
		"name": "Ampharos-Mega",
		"baseSpecies": "Ampharos",
		// "forme": "Mega",
		"types": [
				"Electric",
				"Dragon"
		],
		"baseStats": {
				"hp": 90,
				"atk": 95,
				"def": 105,
				"spa": 165,
				"spd": 110,
				"spe": 45
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 61.5,
		"eggGroups": [
				"Monster",
				"Field"
		],
		// "requiredItem": "Ampharosite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "ampharosmega",
		"fullname": "pokemon: Ampharos-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Ampharosite"
		// ],
		"bst": 610,
		"weighthg": 615,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Ampharos",
		// "changesFrom": "Ampharos"
	},
	bellossom: {
		"exists": true,
		"tags": [],
		"num": 182,
		"name": "Bellossom",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 75,
				"atk": 80,
				"def": 95,
				"spa": 90,
				"spd": 100,
				"spe": 50
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 5.8,
		"prevo": "Gloom",
		"evoType": "useItem",
		"evoItem": "Sun Stone",
		"eggGroups": [
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "bellossom",
		"fullname": "pokemon: Bellossom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bellossom",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 58,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	marill: {
		"exists": true,
		"tags": [],
		"num": 183,
		"name": "Marill",
		"types": [
				"Water",
				"Normal"
		],
		"baseStats": {
				"hp": 70,
				"atk": 20,
				"def": 50,
				"spa": 20,
				"spd": 50,
				"spe": 40
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Huge Power"
		},
		"weightkg": 8.5,
		"prevo": "Azurill",
		"evoType": "levelFriendship",
		"evos": [
				"Azumarill"
		],
		"eggGroups": [
				"Water 1",
				"Fairy"
		],
		"canHatch": true,
		"tier": "NFE",
		"id": "marill",
		"fullname": "pokemon: Marill",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Marill",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 250,
		"weighthg": 85,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	azumarill: {
		"exists": true,
		"tags": [],
		"num": 184,
		"name": "Azumarill",
		"types": [
				"Water",
				"Normal"
		],
		"baseStats": {
				"hp": 100,
				"atk": 50,
				"def": 80,
				"spa": 60,
				"spd": 80,
				"spe": 50
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Huge Power"
		},
		"weightkg": 28.5,
		"prevo": "Marill",
		"evoLevel": 18,
		"eggGroups": [
				"Water 1",
				"Fairy"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "azumarill",
		"fullname": "pokemon: Azumarill",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Azumarill",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 285,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sudowoodo: {
		"exists": true,
		"tags": [],
		"num": 185,
		"name": "Sudowoodo",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 70,
				"atk": 100,
				"def": 115,
				"spa": 30,
				"spd": 65,
				"spe": 30
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Rock Head"
		},
		"weightkg": 38,
		"prevo": "Bonsly",
		"evoType": "levelMove",
		"evoMove": "Mimic",
		"eggGroups": [
				"Mineral"
		],
		"canHatch": true,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "sudowoodo",
		"fullname": "pokemon: Sudowoodo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sudowoodo",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 380,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	politoed: {
		"exists": true,
		"tags": [],
		"num": 186,
		"name": "Politoed",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 90,
				"atk": 75,
				"def": 75,
				"spa": 90,
				"spd": 100,
				"spe": 70
		},
		"abilities": {
				"0": "Water Absorb",
				"1": "Damp",
				"H": "Drizzle"
		},
		"weightkg": 33.9,
		"prevo": "Poliwhirl",
		"evoType": "trade",
		"evoItem": "King's Rock",
		"eggGroups": [
				"Water 1"
		],
		"tier": "RU",
		"doublesTier": "DUU",
		"id": "politoed",
		"fullname": "pokemon: Politoed",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Politoed",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 339,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hoppip: {
		"exists": true,
		"tags": [],
		"num": 187,
		"name": "Hoppip",
		"types": [
				"Grass",
				"Flying"
		],
		"baseStats": {
				"hp": 35,
				"atk": 35,
				"def": 40,
				"spa": 35,
				"spd": 55,
				"spe": 50
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 0.5,
		"evos": [
				"Skiploom"
		],
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"tier": "LC",
		"id": "hoppip",
		"fullname": "pokemon: Hoppip",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hoppip",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 250,
		"weighthg": 5,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	skiploom: {
		"exists": true,
		"tags": [],
		"num": 188,
		"name": "Skiploom",
		"types": [
				"Grass",
				"Flying"
		],
		"baseStats": {
				"hp": 55,
				"atk": 45,
				"def": 50,
				"spa": 45,
				"spd": 65,
				"spe": 80
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 1,
		"prevo": "Hoppip",
		"evoLevel": 18,
		"evos": [
				"Jumpluff"
		],
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"tier": "NFE",
		"id": "skiploom",
		"fullname": "pokemon: Skiploom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Skiploom",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 340,
		"weighthg": 10,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	jumpluff: {
		"exists": true,
		"tags": [],
		"num": 189,
		"name": "Jumpluff",
		"types": [
				"Grass",
				"Flying"
		],
		"baseStats": {
				"hp": 75,
				"atk": 55,
				"def": 70,
				"spa": 55,
				"spd": 95,
				"spe": 110
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 3,
		"prevo": "Skiploom",
		"evoLevel": 27,
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "jumpluff",
		"fullname": "pokemon: Jumpluff",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Jumpluff",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 30,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	aipom: {
		"exists": true,
		"tags": [],
		"num": 190,
		"name": "Aipom",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 55,
				"atk": 70,
				"def": 55,
				"spa": 40,
				"spd": 55,
				"spe": 85
		},
		"abilities": {
				"0": "Run Away",
				"1": "Pickup"
		},
		"weightkg": 11.5,
		"evos": [
				"Ambipom"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "aipom",
		"fullname": "pokemon: Aipom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Aipom",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 360,
		"weighthg": 115,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sunkern: {
		"exists": true,
		"tags": [],
		"num": 191,
		"name": "Sunkern",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 30,
				"atk": 30,
				"def": 30,
				"spa": 30,
				"spd": 30,
				"spe": 30
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Early Bird"
		},
		"weightkg": 1.8,
		"evos": [
				"Sunflora"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "LC",
		"id": "sunkern",
		"fullname": "pokemon: Sunkern",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sunkern",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 180,
		"weighthg": 18,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sunflora: {
		"exists": true,
		"tags": [],
		"num": 192,
		"name": "Sunflora",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 75,
				"atk": 75,
				"def": 55,
				"spa": 105,
				"spd": 85,
				"spe": 30
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Early Bird"
		},
		"weightkg": 8.5,
		"prevo": "Sunkern",
		"evoType": "useItem",
		"evoItem": "Sun Stone",
		"eggGroups": [
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "sunflora",
		"fullname": "pokemon: Sunflora",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sunflora",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 425,
		"weighthg": 85,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	yanma: {
		"exists": true,
		"tags": [],
		"num": 193,
		"name": "Yanma",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 65,
				"atk": 65,
				"def": 45,
				"spa": 75,
				"spd": 45,
				"spe": 95
		},
		"abilities": {
				"0": "Speed Boost",
				"1": "Compound Eyes"
		},
		"weightkg": 38,
		"evos": [
				"Yanmega"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "NFE",
		"id": "yanma",
		"fullname": "pokemon: Yanma",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Yanma",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 390,
		"weighthg": 380,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wooper: {
		"exists": true,
		"tags": [],
		"num": 194,
		"name": "Wooper",
		"types": [
				"Water",
				"Ground"
		],
		"baseStats": {
				"hp": 55,
				"atk": 45,
				"def": 45,
				"spa": 25,
				"spd": 25,
				"spe": 15
		},
		"abilities": {
				"0": "Damp",
				"1": "Water Absorb"
		},
		"weightkg": 8.5,
		"evos": [
				"Quagsire"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"otherFormes": [
				"Wooper-Paldea"
		],
		"formeOrder": [
				"Wooper",
				"Wooper-Paldea"
		],
		"tier": "LC",
		"id": "wooper",
		"fullname": "pokemon: Wooper",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Wooper",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 210,
		"weighthg": 85,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wooperpaldea: {
		"exists": true,
		"tags": [],
		"num": 194,
		"name": "Wooper-Paldea",
		"baseSpecies": "Wooper",
		"forme": "Paldea",
		"types": [
				"Poison",
				"Ground"
		],
		"baseStats": {
				"hp": 55,
				"atk": 45,
				"def": 45,
				"spa": 25,
				"spd": 25,
				"spe": 15
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Water Absorb"
		},
		"weightkg": 11,
		"evos": [
				"Clodsire"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "LC",
		"id": "wooperpaldea",
		"fullname": "pokemon: Wooper-Paldea",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 210,
		"weighthg": 110,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	quagsire: {
		"exists": true,
		"tags": [],
		"num": 195,
		"name": "Quagsire",
		"types": [
				"Water",
				"Ground"
		],
		"baseStats": {
				"hp": 95,
				"atk": 85,
				"def": 85,
				"spa": 65,
				"spd": 65,
				"spe": 35
		},
		"abilities": {
				"0": "Damp",
				"1": "Water Absorb"
		},
		"weightkg": 75,
		"prevo": "Wooper",
		"evoLevel": 20,
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "quagsire",
		"fullname": "pokemon: Quagsire",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Quagsire",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 430,
		"weighthg": 750,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	espeon: {
		"exists": true,
		"tags": [],
		"num": 196,
		"name": "Espeon",
		"types": [
				"Psychic"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 65,
				"atk": 65,
				"def": 60,
				"spa": 130,
				"spd": 95,
				"spe": 110
		},
		"abilities": {
				"0": "Synchronize"
		},
		"weightkg": 26.5,
		"prevo": "Eevee",
		"evoType": "levelFriendship",
		"evoCondition": "during the day",
		"eggGroups": [
				"Field"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "espeon",
		"fullname": "pokemon: Espeon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Espeon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 265,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	umbreon: {
		"exists": true,
		"tags": [],
		"num": 197,
		"name": "Umbreon",
		"types": [
				"Dark"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 95,
				"atk": 65,
				"def": 110,
				"spa": 60,
				"spd": 130,
				"spe": 65
		},
		"abilities": {
				"0": "Synchronize",
				"1": "Inner Focus"
		},
		"weightkg": 27,
		"prevo": "Eevee",
		"evoType": "levelFriendship",
		"evoCondition": "at night",
		"eggGroups": [
				"Field"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "umbreon",
		"fullname": "pokemon: Umbreon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Umbreon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 270,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	murkrow: {
		"exists": true,
		"tags": [],
		"num": 198,
		"name": "Murkrow",
		"types": [
				"Dark",
				"Flying"
		],
		"baseStats": {
				"hp": 60,
				"atk": 85,
				"def": 42,
				"spa": 85,
				"spd": 42,
				"spe": 91
		},
		"abilities": {
				"0": "Insomnia"
		},
		"weightkg": 2.1,
		"evos": [
				"Honchkrow"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "NFE",
		"doublesTier": "DUU",
		"id": "murkrow",
		"fullname": "pokemon: Murkrow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Murkrow",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 405,
		"weighthg": 21,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slowking: {
		"exists": true,
		"tags": [],
		"num": 199,
		"name": "Slowking",
		"types": [
				"Water",
				"Psychic"
		],
		"baseStats": {
				"hp": 95,
				"atk": 75,
				"def": 80,
				"spa": 100,
				"spd": 110,
				"spe": 30
		},
		"abilities": {
				"0": "Oblivious",
				"1": "Own Tempo"
		},
		"weightkg": 79.5,
		"prevo": "Slowpoke",
		"evoType": "trade",
		"evoItem": "King's Rock",
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"otherFormes": [
				"Slowking-Galar"
		],
		"formeOrder": [
				"Slowking",
				"Slowking-Galar"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "slowking",
		"fullname": "pokemon: Slowking",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Slowking",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 795,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slowkinggalar: {
		"exists": true,
		"tags": [],
		"num": 199,
		"name": "Slowking-Galar",
		"baseSpecies": "Slowking",
		"forme": "Galar",
		"types": [
				"Poison",
				"Psychic"
		],
		"baseStats": {
				"hp": 95,
				"atk": 65,
				"def": 80,
				"spa": 110,
				"spd": 110,
				"spe": 30
		},
		"abilities": {
				"0": "Own Tempo"
		},
		"weightkg": 79.5,
		"prevo": "Slowpoke-Galar",
		"evoType": "useItem",
		"evoItem": "Galarica Wreath",
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "slowkinggalar",
		"fullname": "pokemon: Slowking-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 795,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	misdreavus: {
		"exists": true,
		"tags": [],
		"num": 200,
		"name": "Misdreavus",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 60,
				"atk": 60,
				"def": 60,
				"spa": 85,
				"spd": 85,
				"spe": 85
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 1,
		"evos": [
				"Mismagius"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "NFE",
		"id": "misdreavus",
		"fullname": "pokemon: Misdreavus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Misdreavus",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 435,
		"weighthg": 10,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	unown: {
		"exists": true,
		"tags": [],
		"num": 201,
		"name": "Unown",
		"baseForme": "A",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 48,
				"atk": 72,
				"def": 48,
				"spa": 72,
				"spd": 48,
				"spe": 48
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 5,
		"eggGroups": [
				"Undiscovered"
		],
		"cosmeticFormes": [
				"Unown-B",
				"Unown-C",
				"Unown-D",
				"Unown-E",
				"Unown-F",
				"Unown-G",
				"Unown-H",
				"Unown-I",
				"Unown-J",
				"Unown-K",
				"Unown-L",
				"Unown-M",
				"Unown-N",
				"Unown-O",
				"Unown-P",
				"Unown-Q",
				"Unown-R",
				"Unown-S",
				"Unown-T",
				"Unown-U",
				"Unown-V",
				"Unown-W",
				"Unown-X",
				"Unown-Y",
				"Unown-Z",
				"Unown-Exclamation",
				"Unown-Question"
		],
		"formeOrder": [
				"Unown",
				"Unown-B",
				"Unown-C",
				"Unown-D",
				"Unown-E",
				"Unown-F",
				"Unown-G",
				"Unown-H",
				"Unown-I",
				"Unown-J",
				"Unown-K",
				"Unown-L",
				"Unown-M",
				"Unown-N",
				"Unown-O",
				"Unown-P",
				"Unown-Q",
				"Unown-R",
				"Unown-S",
				"Unown-T",
				"Unown-U",
				"Unown-V",
				"Unown-W",
				"Unown-X",
				"Unown-Y",
				"Unown-Z",
				"Unown-Exclamation",
				"Unown-Question"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "unown",
		"fullname": "pokemon: Unown",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Unown",
		"forme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 336,
		"weighthg": 50,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wobbuffet: {
		"exists": true,
		"tags": [],
		"num": 202,
		"name": "Wobbuffet",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 190,
				"atk": 33,
				"def": 58,
				"spa": 33,
				"spd": 58,
				"spe": 33
		},
		"abilities": {
				"0": "Shadow Tag"
		},
		"weightkg": 28.5,
		"prevo": "Wynaut",
		"evoLevel": 15,
		"eggGroups": [
				"Amorphous"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wobbuffet",
		"fullname": "pokemon: Wobbuffet",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Wobbuffet",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 405,
		"weighthg": 285,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	girafarig: {
		"exists": true,
		"tags": [],
		"num": 203,
		"name": "Girafarig",
		"types": [
				"Normal",
				"Psychic"
		],
		"baseStats": {
				"hp": 70,
				"atk": 80,
				"def": 65,
				"spa": 90,
				"spd": 65,
				"spe": 85
		},
		"abilities": {
				"0": "Inner Focus",
				"1": "Early Bird"
		},
		"weightkg": 41.5,
		"evos": [
				"Farigiraf"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "girafarig",
		"fullname": "pokemon: Girafarig",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Girafarig",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 455,
		"weighthg": 415,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pineco: {
		"exists": true,
		"tags": [],
		"num": 204,
		"name": "Pineco",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 90,
				"spa": 35,
				"spd": 35,
				"spe": 15
		},
		"abilities": {
				"0": "Sturdy"
		},
		"weightkg": 7.2,
		"evos": [
				"Forretress"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "pineco",
		"fullname": "pokemon: Pineco",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pineco",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 290,
		"weighthg": 72,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	forretress: {
		"exists": true,
		"tags": [],
		"num": 205,
		"name": "Forretress",
		"types": [
				"Bug",
				"Steel"
		],
		"baseStats": {
				"hp": 75,
				"atk": 90,
				"def": 140,
				"spa": 60,
				"spd": 60,
				"spe": 40
		},
		"abilities": {
				"0": "Sturdy"
		},
		"weightkg": 125.8,
		"prevo": "Pineco",
		"evoLevel": 31,
		"eggGroups": [
				"Bug"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "forretress",
		"fullname": "pokemon: Forretress",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Forretress",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 465,
		"weighthg": 1258,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dunsparce: {
		"exists": true,
		"tags": [],
		"num": 206,
		"name": "Dunsparce",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 100,
				"atk": 70,
				"def": 70,
				"spa": 65,
				"spd": 65,
				"spe": 45
		},
		"abilities": {
				"0": "Serene Grace",
				"1": "Run Away"
		},
		"weightkg": 14,
		"evos": [
				"Dudunsparce",
				"Dudunsparce-Three-Segment"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "dunsparce",
		"fullname": "pokemon: Dunsparce",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dunsparce",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 415,
		"weighthg": 140,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gligar: {
		"exists": true,
		"tags": [],
		"num": 207,
		"name": "Gligar",
		"types": [
				"Ground",
				"Flying"
		],
		"baseStats": {
				"hp": 65,
				"atk": 75,
				"def": 105,
				"spa": 35,
				"spd": 65,
				"spe": 85
		},
		"abilities": {
				"0": "Hyper Cutter",
				"1": "Sand Veil",
				"H": "Immunity"
		},
		"weightkg": 64.8,
		"evos": [
				"Gliscor"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "PU",
		"doublesTier": "NFE",
		"id": "gligar",
		"fullname": "pokemon: Gligar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gligar",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 430,
		"weighthg": 648,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	steelix: {
		"exists": true,
		"tags": [],
		"num": 208,
		"name": "Steelix",
		"types": [
				"Steel",
				"Ground"
		],
		"baseStats": {
				"hp": 75,
				"atk": 85,
				"def": 200,
				"spa": 55,
				"spd": 65,
				"spe": 30
		},
		"abilities": {
				"0": "Rock Head",
				"1": "Sturdy"
		},
		"weightkg": 400,
		"prevo": "Onix",
		"evoType": "trade",
		"evoItem": "Metal Coat",
		"eggGroups": [
				"Mineral"
		],
		"otherFormes": [
				"Steelix-Mega"
		],
		"formeOrder": [
				"Steelix",
				"Steelix-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "steelix",
		"fullname": "pokemon: Steelix",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Steelix",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 510,
		"weighthg": 4000,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	steelixmega: {
		"exists": true,
		"tags": [],
		"num": 208,
		"name": "Steelix-Mega",
		"baseSpecies": "Steelix",
		// "forme": "Mega",
		"types": [
				"Steel",
				"Ground"
		],
		"baseStats": {
				"hp": 75,
				"atk": 125,
				"def": 230,
				"spa": 55,
				"spd": 95,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 740,
		"eggGroups": [
				"Mineral"
		],
		// "requiredItem": "Steelixite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "steelixmega",
		"fullname": "pokemon: Steelix-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Steelixite"
		// ],
		"bst": 610,
		"weighthg": 7400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Steelix",
		// "changesFrom": "Steelix"
	},
	snubbull: {
		"exists": true,
		"tags": [],
		"num": 209,
		"name": "Snubbull",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 60,
				"atk": 80,
				"def": 50,
				"spa": 40,
				"spd": 40,
				"spe": 30
		},
		"abilities": {
				"0": "Intimidate",
				"1": "Run Away"
		},
		"weightkg": 7.8,
		"evos": [
				"Granbull"
		],
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"tier": "LC",
		"id": "snubbull",
		"fullname": "pokemon: Snubbull",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Snubbull",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 300,
		"weighthg": 78,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	granbull: {
		"exists": true,
		"tags": [],
		"num": 210,
		"name": "Granbull",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 90,
				"atk": 120,
				"def": 75,
				"spa": 60,
				"spd": 60,
				"spe": 45
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 48.7,
		"prevo": "Snubbull",
		"evoLevel": 23,
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "granbull",
		"fullname": "pokemon: Granbull",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Granbull",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 450,
		"weighthg": 487,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	qwilfish: {
		"exists": true,
		"tags": [],
		"num": 211,
		"name": "Qwilfish",
		"types": [
				"Water",
				"Poison"
		],
		"baseStats": {
				"hp": 65,
				"atk": 95,
				"def": 85,
				"spa": 55,
				"spd": 55,
				"spe": 85
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Swift Swim",
				"H": "Intimidate"
		},
		"weightkg": 3.9,
		"eggGroups": [
				"Water 2"
		],
		"otherFormes": [
				"Qwilfish-Hisui"
		],
		"formeOrder": [
				"Qwilfish",
				"Qwilfish-Hisui"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "qwilfish",
		"fullname": "pokemon: Qwilfish",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Qwilfish",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 440,
		"weighthg": 39,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	qwilfishhisui: {
		"exists": true,
		"tags": [],
		"num": 211,
		"name": "Qwilfish-Hisui",
		"baseSpecies": "Qwilfish",
		"forme": "Hisui",
		"types": [
				"Dark",
				"Poison"
		],
		"baseStats": {
				"hp": 65,
				"atk": 95,
				"def": 85,
				"spa": 55,
				"spd": 55,
				"spe": 85
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Swift Swim",
				"H": "Intimidate"
		},
		"weightkg": 3.9,
		"evos": [
				"Overqwil"
		],
		"eggGroups": [
				"Water 2"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "qwilfishhisui",
		"fullname": "pokemon: Qwilfish-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 440,
		"weighthg": 39,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	scizor: {
		"exists": true,
		"tags": [],
		"num": 212,
		"name": "Scizor",
		"types": [
				"Bug",
				"Steel"
		],
		"baseStats": {
				"hp": 70,
				"atk": 130,
				"def": 100,
				"spa": 55,
				"spd": 80,
				"spe": 65
		},
		"abilities": {
				"0": "Swarm"
		},
		"weightkg": 118,
		"prevo": "Scyther",
		"evoType": "trade",
		"evoItem": "Metal Coat",
		"eggGroups": [
				"Bug"
		],
		"otherFormes": [
				"Scizor-Mega"
		],
		"formeOrder": [
				"Scizor",
				"Scizor-Mega"
		],
		"tier": "UU",
		"doublesTier": "DUU",
		"id": "scizor",
		"fullname": "pokemon: Scizor",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Scizor",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 1180,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	scizormega: {
		"exists": true,
		"tags": [],
		"num": 212,
		"name": "Scizor-Mega",
		"baseSpecies": "Scizor",
		// "forme": "Mega",
		"types": [
				"Bug",
				"Steel"
		],
		"baseStats": {
				"hp": 70,
				"atk": 150,
				"def": 140,
				"spa": 65,
				"spd": 100,
				"spe": 75
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 125,
		"eggGroups": [
				"Bug"
		],
		// "requiredItem": "Scizorite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "scizormega",
		"fullname": "pokemon: Scizor-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Scizorite"
		// ],
		"bst": 600,
		"weighthg": 1250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Scizor",
		// "changesFrom": "Scizor"
	},
	shuckle: {
		"exists": true,
		"tags": [],
		"num": 213,
		"name": "Shuckle",
		"types": [
				"Bug",
				"Rock"
		],
		"baseStats": {
				"hp": 20,
				"atk": 10,
				"def": 230,
				"spa": 10,
				"spd": 230,
				"spe": 5
		},
		"abilities": {
				"0": "Sturdy"
		},
		"weightkg": 20.5,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "shuckle",
		"fullname": "pokemon: Shuckle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Shuckle",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 505,
		"weighthg": 205,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	heracross: {
		"exists": true,
		"tags": [],
		"num": 214,
		"name": "Heracross",
		"types": [
				"Bug",
				"Fighting"
		],
		"baseStats": {
				"hp": 80,
				"atk": 125,
				"def": 75,
				"spa": 40,
				"spd": 95,
				"spe": 85
		},
		"abilities": {
				"0": "Swarm",
				"1": "Guts"
		},
		"weightkg": 54,
		"eggGroups": [
				"Bug"
		],
		"otherFormes": [
				"Heracross-Mega"
		],
		"formeOrder": [
				"Heracross",
				"Heracross-Mega"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "heracross",
		"fullname": "pokemon: Heracross",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Heracross",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 540,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	heracrossmega: {
		"exists": true,
		"tags": [],
		"num": 214,
		"name": "Heracross-Mega",
		"baseSpecies": "Heracross",
		// "forme": "Mega",
		"types": [
				"Bug",
				"Fighting"
		],
		"baseStats": {
				"hp": 80,
				"atk": 185,
				"def": 115,
				"spa": 40,
				"spd": 105,
				"spe": 75
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 62.5,
		"eggGroups": [
				"Bug"
		],
		// "requiredItem": "Heracronite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "heracrossmega",
		"fullname": "pokemon: Heracross-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Heracronite"
		// ],
		"bst": 600,
		"weighthg": 625,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Heracross",
		// "changesFrom": "Heracross"
	},
	sneasel: {
		"exists": true,
		"tags": [],
		"num": 215,
		"name": "Sneasel",
		"types": [
				"Dark",
				"Ice"
		],
		"baseStats": {
				"hp": 55,
				"atk": 95,
				"def": 55,
				"spa": 35,
				"spd": 75,
				"spe": 115
		},
		"abilities": {
				"0": "Inner Focus",
				"1": "Keen Eye"
		},
		"weightkg": 28,
		"evos": [
				"Weavile"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Sneasel-Hisui"
		],
		"formeOrder": [
				"Sneasel",
				"Sneasel-Hisui"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "sneasel",
		"fullname": "pokemon: Sneasel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sneasel",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 430,
		"weighthg": 280,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sneaselhisui: {
		"exists": true,
		"tags": [],
		"num": 215,
		"name": "Sneasel-Hisui",
		"baseSpecies": "Sneasel",
		"forme": "Hisui",
		"types": [
				"Fighting",
				"Poison"
		],
		"baseStats": {
				"hp": 55,
				"atk": 95,
				"def": 55,
				"spa": 35,
				"spd": 75,
				"spe": 115
		},
		"abilities": {
				"0": "Inner Focus",
				"1": "Keen Eye"
		},
		"weightkg": 27,
		"evos": [
				"Sneasler"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "sneaselhisui",
		"fullname": "pokemon: Sneasel-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 430,
		"weighthg": 270,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	teddiursa: {
		"exists": true,
		"tags": [],
		"num": 216,
		"name": "Teddiursa",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 60,
				"atk": 80,
				"def": 50,
				"spa": 50,
				"spd": 50,
				"spe": 40
		},
		"abilities": {
				"0": "Pickup"
		},
		"weightkg": 8.8,
		"evos": [
				"Ursaring"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "teddiursa",
		"fullname": "pokemon: Teddiursa",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Teddiursa",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 88,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ursaring: {
		"exists": true,
		"tags": [],
		"num": 217,
		"name": "Ursaring",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 90,
				"atk": 130,
				"def": 75,
				"spa": 75,
				"spd": 75,
				"spe": 55
		},
		"abilities": {
				"0": "Guts"
		},
		"weightkg": 125.8,
		"prevo": "Teddiursa",
		"evoLevel": 30,
		"evos": [
				"Ursaluna"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "ursaring",
		"fullname": "pokemon: Ursaring",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ursaring",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 1258,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slugma: {
		"exists": true,
		"tags": [],
		"num": 218,
		"name": "Slugma",
		"types": [
				"Fire"
		],
		"baseStats": {
				"hp": 40,
				"atk": 40,
				"def": 40,
				"spa": 70,
				"spd": 40,
				"spe": 20
		},
		"abilities": {
				"0": "Magma Armor",
				"1": "Flame Body"
		},
		"weightkg": 35,
		"evos": [
				"Magcargo"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "slugma",
		"fullname": "pokemon: Slugma",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Slugma",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 250,
		"weighthg": 350,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	magcargo: {
		"exists": true,
		"tags": [],
		"num": 219,
		"name": "Magcargo",
		"types": [
				"Fire",
				"Rock"
		],
		"baseStats": {
				"hp": 60,
				"atk": 50,
				"def": 120,
				"spa": 90,
				"spd": 80,
				"spe": 30
		},
		"abilities": {
				"0": "Magma Armor",
				"1": "Flame Body"
		},
		"weightkg": 55,
		"prevo": "Slugma",
		"evoLevel": 38,
		"eggGroups": [
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "magcargo",
		"fullname": "pokemon: Magcargo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Magcargo",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 430,
		"weighthg": 550,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swinub: {
		"exists": true,
		"tags": [],
		"num": 220,
		"name": "Swinub",
		"types": [
				"Ice",
				"Ground"
		],
		"baseStats": {
				"hp": 50,
				"atk": 50,
				"def": 40,
				"spa": 30,
				"spd": 30,
				"spe": 50
		},
		"abilities": {
				"0": "Oblivious",
				"1": "Thick Fat"
		},
		"weightkg": 6.5,
		"evos": [
				"Piloswine"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "swinub",
		"fullname": "pokemon: Swinub",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Swinub",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 250,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	piloswine: {
		"exists": true,
		"tags": [],
		"num": 221,
		"name": "Piloswine",
		"types": [
				"Ice",
				"Ground"
		],
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 80,
				"spa": 60,
				"spd": 60,
				"spe": 50
		},
		"abilities": {
				"0": "Oblivious",
				"1": "Thick Fat"
		},
		"weightkg": 55.8,
		"prevo": "Swinub",
		"evoLevel": 33,
		"evos": [
				"Mamoswine"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "piloswine",
		"fullname": "pokemon: Piloswine",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Piloswine",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 450,
		"weighthg": 558,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	corsola: {
		"exists": true,
		"tags": [],
		"num": 222,
		"name": "Corsola",
		"types": [
				"Water",
				"Rock"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 65,
				"atk": 55,
				"def": 95,
				"spa": 65,
				"spd": 95,
				"spe": 35
		},
		"abilities": {
				"0": "Hustle",
				"1": "Natural Cure"
		},
		"weightkg": 5,
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"otherFormes": [
				"Corsola-Galar"
		],
		"formeOrder": [
				"Corsola",
				"Corsola-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "corsola",
		"fullname": "pokemon: Corsola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Corsola",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"bst": 410,
		"weighthg": 50,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	corsolagalar: {
		"exists": true,
		"tags": [],
		"num": 222,
		"name": "Corsola-Galar",
		"baseSpecies": "Corsola",
		"forme": "Galar",
		"types": [
				"Ghost"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 60,
				"atk": 55,
				"def": 100,
				"spa": 65,
				"spd": 100,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.5,
		"evos": [
				"Cursola"
		],
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "corsolagalar",
		"fullname": "pokemon: Corsola-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 410,
		"weighthg": 5,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	remoraid: {
		"exists": true,
		"tags": [],
		"num": 223,
		"name": "Remoraid",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 35,
				"atk": 65,
				"def": 35,
				"spa": 65,
				"spd": 35,
				"spe": 65
		},
		"abilities": {
				"0": "Hustle"
		},
		"weightkg": 12,
		"evos": [
				"Octillery"
		],
		"eggGroups": [
				"Water 1",
				"Water 2"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "remoraid",
		"fullname": "pokemon: Remoraid",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Remoraid",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 120,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	octillery: {
		"exists": true,
		"tags": [],
		"num": 224,
		"name": "Octillery",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 75,
				"atk": 105,
				"def": 75,
				"spa": 105,
				"spd": 75,
				"spe": 45
		},
		"abilities": {
				"0": "Suction Cups"
		},
		"weightkg": 28.5,
		"prevo": "Remoraid",
		"evoLevel": 25,
		"eggGroups": [
				"Water 1",
				"Water 2"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "octillery",
		"fullname": "pokemon: Octillery",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Octillery",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 285,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	delibird: {
		"exists": true,
		"tags": [],
		"num": 225,
		"name": "Delibird",
		"types": [
				"Ice",
				"Flying"
		],
		"baseStats": {
				"hp": 45,
				"atk": 55,
				"def": 45,
				"spa": 65,
				"spd": 45,
				"spe": 75
		},
		"abilities": {
				"0": "Vital Spirit",
				"1": "Hustle",
				"H": "Insomnia"
		},
		"weightkg": 16,
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "delibird",
		"fullname": "pokemon: Delibird",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Delibird",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 160,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mantine: {
		"exists": true,
		"tags": [],
		"num": 226,
		"name": "Mantine",
		"types": [
				"Water",
				"Flying"
		],
		"baseStats": {
				"hp": 85,
				"atk": 40,
				"def": 70,
				"spa": 80,
				"spd": 140,
				"spe": 70
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Absorb",
				"H": "Water Veil"
		},
		"weightkg": 220,
		"prevo": "Mantyke",
		"evoType": "levelExtra",
		"evoCondition": "with a Remoraid in party",
		"eggGroups": [
				"Water 1"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mantine",
		"fullname": "pokemon: Mantine",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Mantine",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 2200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	skarmory: {
		"exists": true,
		"tags": [],
		"num": 227,
		"name": "Skarmory",
		"types": [
				"Steel",
				"Flying"
		],
		"baseStats": {
				"hp": 65,
				"atk": 80,
				"def": 140,
				"spa": 40,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Sturdy"
		},
		"weightkg": 50.5,
		"eggGroups": [
				"Flying"
		],
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "skarmory",
		"fullname": "pokemon: Skarmory",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Skarmory",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 465,
		"weighthg": 505,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	houndour: {
		"exists": true,
		"tags": [],
		"num": 228,
		"name": "Houndour",
		"types": [
				"Dark",
				"Fire"
		],
		"baseStats": {
				"hp": 45,
				"atk": 60,
				"def": 30,
				"spa": 80,
				"spd": 50,
				"spe": 65
		},
		"abilities": {
				"0": "Early Bird",
				"1": "Flash Fire"
		},
		"weightkg": 10.8,
		"evos": [
				"Houndoom"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "houndour",
		"fullname": "pokemon: Houndour",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Houndour",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 108,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	houndoom: {
		"exists": true,
		"tags": [],
		"num": 229,
		"name": "Houndoom",
		"types": [
				"Dark",
				"Fire"
		],
		"baseStats": {
				"hp": 75,
				"atk": 90,
				"def": 50,
				"spa": 110,
				"spd": 80,
				"spe": 95
		},
		"abilities": {
				"0": "Early Bird",
				"1": "Flash Fire"
		},
		"weightkg": 35,
		"prevo": "Houndour",
		"evoLevel": 24,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Houndoom-Mega"
		],
		"formeOrder": [
				"Houndoom",
				"Houndoom-Mega"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "houndoom",
		"fullname": "pokemon: Houndoom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Houndoom",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 350,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	houndoommega: {
		"exists": true,
		"tags": [],
		"num": 229,
		"name": "Houndoom-Mega",
		"baseSpecies": "Houndoom",
		// "forme": "Mega",
		"types": [
				"Dark",
				"Fire"
		],
		"baseStats": {
				"hp": 75,
				"atk": 90,
				"def": 90,
				"spa": 140,
				"spd": 90,
				"spe": 115
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 49.5,
		"eggGroups": [
				"Field"
		],
		// "requiredItem": "Houndoominite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "houndoommega",
		"fullname": "pokemon: Houndoom-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Houndoominite"
		// ],
		"bst": 600,
		"weighthg": 495,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Houndoom",
		// "changesFrom": "Houndoom"
	},
	kingdra: {
		"exists": true,
		"tags": [],
		"num": 230,
		"name": "Kingdra",
		"types": [
				"Water",
				"Dragon"
		],
		"baseStats": {
				"hp": 75,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 85
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Damp"
		},
		"weightkg": 152,
		"prevo": "Seadra",
		"evoType": "trade",
		"evoItem": "Dragon Scale",
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "ZUBL",
		"doublesTier": "(DUU)",
		"id": "kingdra",
		"fullname": "pokemon: Kingdra",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Kingdra",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 540,
		"weighthg": 1520,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	phanpy: {
		"exists": true,
		"tags": [],
		"num": 231,
		"name": "Phanpy",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 90,
				"atk": 60,
				"def": 60,
				"spa": 40,
				"spd": 40,
				"spe": 40
		},
		"abilities": {
				"0": "Pickup",
				"1": "Sand Veil"
		},
		"weightkg": 33.5,
		"evos": [
				"Donphan"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "phanpy",
		"fullname": "pokemon: Phanpy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Phanpy",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 335,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	donphan: {
		"exists": true,
		"tags": [],
		"num": 232,
		"name": "Donphan",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 90,
				"atk": 120,
				"def": 120,
				"spa": 60,
				"spd": 60,
				"spe": 50
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Sand Veil"
		},
		"weightkg": 120,
		"prevo": "Phanpy",
		"evoLevel": 25,
		"eggGroups": [
				"Field"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "donphan",
		"fullname": "pokemon: Donphan",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Donphan",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 1200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	porygon2: {
		"exists": true,
		"tags": [],
		"num": 233,
		"name": "Porygon2",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 85,
				"atk": 80,
				"def": 90,
				"spa": 105,
				"spd": 95,
				"spe": 60
		},
		"abilities": {
				"0": "Trace"
		},
		"weightkg": 32.5,
		"prevo": "Porygon",
		"evoType": "trade",
		"evoItem": "Up-Grade",
		"evos": [
				"Porygon-Z"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "ZU",
		"doublesTier": "DUU",
		"id": "porygon2",
		"fullname": "pokemon: Porygon2",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Porygon2",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 515,
		"weighthg": 325,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	stantler: {
		"exists": true,
		"tags": [],
		"num": 234,
		"name": "Stantler",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 73,
				"atk": 95,
				"def": 62,
				"spa": 85,
				"spd": 65,
				"spe": 85
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 71.2,
		"evos": [
				"Wyrdeer"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "stantler",
		"fullname": "pokemon: Stantler",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Stantler",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 465,
		"weighthg": 712,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	smeargle: {
		"exists": true,
		"tags": [],
		"num": 235,
		"name": "Smeargle",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 55,
				"atk": 20,
				"def": 35,
				"spa": 20,
				"spd": 45,
				"spe": 75
		},
		"abilities": {
				"0": "Own Tempo"
		},
		"weightkg": 58,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "smeargle",
		"fullname": "pokemon: Smeargle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Smeargle",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 250,
		"weighthg": 580,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tyrogue: {
		"exists": true,
		"tags": [],
		"num": 236,
		"name": "Tyrogue",
		"types": [
				"Fighting"
		],
		"gender": "M",
		"baseStats": {
				"hp": 35,
				"atk": 35,
				"def": 35,
				"spa": 35,
				"spd": 35,
				"spe": 35
		},
		"abilities": {
				"0": "Guts",
				"1": "Vital Spirit"
		},
		"weightkg": 21,
		"evos": [
				"Hitmonlee",
				"Hitmonchan",
				"Hitmontop"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "tyrogue",
		"fullname": "pokemon: Tyrogue",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tyrogue",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 210,
		"weighthg": 210,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hitmontop: {
		"exists": true,
		"tags": [],
		"num": 237,
		"name": "Hitmontop",
		"types": [
				"Fighting"
		],
		"gender": "M",
		"baseStats": {
				"hp": 50,
				"atk": 95,
				"def": 95,
				"spa": 35,
				"spd": 110,
				"spe": 70
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 48,
		"prevo": "Tyrogue",
		"evoLevel": 20,
		"evoCondition": "with an Atk stat equal to its Def stat",
		"eggGroups": [
				"Human-Like"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "hitmontop",
		"fullname": "pokemon: Hitmontop",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hitmontop",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 455,
		"weighthg": 480,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	smoochum: {
		"exists": true,
		"tags": [],
		"num": 238,
		"name": "Smoochum",
		"types": [
				"Ice",
				"Psychic"
		],
		"gender": "F",
		"baseStats": {
				"hp": 45,
				"atk": 30,
				"def": 15,
				"spa": 85,
				"spd": 65,
				"spe": 65
		},
		"abilities": {
				"0": "Oblivious"
		},
		"weightkg": 6,
		"evos": [
				"Jynx"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "smoochum",
		"fullname": "pokemon: Smoochum",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Smoochum",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 305,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	elekid: {
		"exists": true,
		"tags": [],
		"num": 239,
		"name": "Elekid",
		"types": [
				"Electric"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 45,
				"atk": 63,
				"def": 37,
				"spa": 65,
				"spd": 55,
				"spe": 95
		},
		"abilities": {
				"0": "Static",
				"1": "Vital Spirit"
		},
		"weightkg": 23.5,
		"evos": [
				"Electabuzz"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "elekid",
		"fullname": "pokemon: Elekid",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Elekid",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"bst": 360,
		"weighthg": 235,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	magby: {
		"exists": true,
		"tags": [],
		"num": 240,
		"name": "Magby",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 45,
				"atk": 75,
				"def": 37,
				"spa": 70,
				"spd": 55,
				"spe": 83
		},
		"abilities": {
				"0": "Flame Body",
				"1": "Vital Spirit"
		},
		"weightkg": 21.4,
		"evos": [
				"Magmar"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "magby",
		"fullname": "pokemon: Magby",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Magby",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"bst": 365,
		"weighthg": 214,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	miltank: {
		"exists": true,
		"tags": [],
		"num": 241,
		"name": "Miltank",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 95,
				"atk": 80,
				"def": 105,
				"spa": 40,
				"spd": 70,
				"spe": 100
		},
		"abilities": {
				"0": "Thick Fat"
		},
		"weightkg": 75.5,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "miltank",
		"fullname": "pokemon: Miltank",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Miltank",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 490,
		"weighthg": 755,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	blissey: {
		"exists": true,
		"tags": [],
		"num": 242,
		"name": "Blissey",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 255,
				"atk": 10,
				"def": 10,
				"spa": 75,
				"spd": 135,
				"spe": 55
		},
		"abilities": {
				"0": "Natural Cure",
				"1": "Serene Grace"
		},
		"weightkg": 46.8,
		"prevo": "Chansey",
		"evoType": "levelFriendship",
		"eggGroups": [
				"Fairy"
		],
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "blissey",
		"fullname": "pokemon: Blissey",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Blissey",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 540,
		"weighthg": 468,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	raikou: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 243,
		"name": "Raikou",
		"types": [
				"Electric"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 85,
				"def": 75,
				"spa": 115,
				"spd": 100,
				"spe": 115
		},
		"abilities": {
				"0": "Pressure",
				"1": "Inner Focus"
		},
		"weightkg": 178,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "PUBL",
		"doublesTier": "(DUU)",
		"id": "raikou",
		"fullname": "pokemon: Raikou",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Raikou",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 1780,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	entei: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 244,
		"name": "Entei",
		"types": [
				"Fire"
		],
		"gender": "N",
		"baseStats": {
				"hp": 115,
				"atk": 115,
				"def": 85,
				"spa": 90,
				"spd": 75,
				"spe": 100
		},
		"abilities": {
				"0": "Pressure",
				"1": "Inner Focus"
		},
		"weightkg": 198,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "entei",
		"fullname": "pokemon: Entei",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Entei",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 1980,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	suicune: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 245,
		"name": "Suicune",
		"types": [
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 75,
				"def": 115,
				"spa": 90,
				"spd": 115,
				"spe": 85
		},
		"abilities": {
				"0": "Pressure",
				"1": "Inner Focus"
		},
		"weightkg": 187,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "NUBL",
		"doublesTier": "(DUU)",
		"id": "suicune",
		"fullname": "pokemon: Suicune",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Suicune",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 1870,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	larvitar: {
		"exists": true,
		"tags": [],
		"num": 246,
		"name": "Larvitar",
		"types": [
				"Rock",
				"Ground"
		],
		"baseStats": {
				"hp": 50,
				"atk": 64,
				"def": 50,
				"spa": 45,
				"spd": 50,
				"spe": 41
		},
		"abilities": {
				"0": "Guts",
				"1": "Sand Veil"
		},
		"weightkg": 72,
		"evos": [
				"Pupitar"
		],
		"eggGroups": [
				"Monster"
		],
		"tier": "LC",
		"id": "larvitar",
		"fullname": "pokemon: Larvitar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Larvitar",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 720,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pupitar: {
		"exists": true,
		"tags": [],
		"num": 247,
		"name": "Pupitar",
		"types": [
				"Rock",
				"Ground"
		],
		"baseStats": {
				"hp": 70,
				"atk": 84,
				"def": 70,
				"spa": 65,
				"spd": 70,
				"spe": 51
		},
		"abilities": {
				"0": "Shed Skin"
		},
		"weightkg": 152,
		"prevo": "Larvitar",
		"evoLevel": 30,
		"evos": [
				"Tyranitar"
		],
		"eggGroups": [
				"Monster"
		],
		"tier": "NFE",
		"id": "pupitar",
		"fullname": "pokemon: Pupitar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pupitar",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 1520,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tyranitar: {
		"exists": true,
		"tags": [],
		"num": 248,
		"name": "Tyranitar",
		"types": [
				"Rock",
				"Dark"
		],
		"baseStats": {
				"hp": 100,
				"atk": 134,
				"def": 110,
				"spa": 95,
				"spd": 100,
				"spe": 61
		},
		"abilities": {
				"0": "Sand Stream"
		},
		"weightkg": 202,
		"prevo": "Pupitar",
		"evoLevel": 55,
		"eggGroups": [
				"Monster"
		],
		"otherFormes": [
				"Tyranitar-Mega"
		],
		"formeOrder": [
				"Tyranitar",
				"Tyranitar-Mega"
		],
		"tier": "UU",
		"doublesTier": "DOU",
		"id": "tyranitar",
		"fullname": "pokemon: Tyranitar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tyranitar",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 2020,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tyranitarmega: {
		"exists": true,
		"tags": [],
		"num": 248,
		"name": "Tyranitar-Mega",
		"baseSpecies": "Tyranitar",
		// "forme": "Mega",
		"types": [
				"Rock",
				"Dark"
		],
		"baseStats": {
				"hp": 100,
				"atk": 164,
				"def": 150,
				"spa": 95,
				"spd": 120,
				"spe": 71
		},
		"abilities": {
				"0": "Sand Stream"
		},
		"weightkg": 255,
		"eggGroups": [
				"Monster"
		],
		// "requiredItem": "Tyranitarite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tyranitarmega",
		"fullname": "pokemon: Tyranitar-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Tyranitarite"
		// ],
		"bst": 700,
		"weighthg": 2550,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Tyranitar",
		// "changesFrom": "Tyranitar"
	},
	lugia: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 249,
		"name": "Lugia",
		"types": [
				"Psychic",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 106,
				"atk": 90,
				"def": 130,
				"spa": 90,
				"spd": 154,
				"spe": 110
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 216,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "lugia",
		"fullname": "pokemon: Lugia",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lugia",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 2160,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hooh: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 250,
		"name": "Ho-Oh",
		"types": [
				"Fire",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 106,
				"atk": 130,
				"def": 90,
				"spa": 110,
				"spd": 154,
				"spe": 90
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 199,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "hooh",
		"fullname": "pokemon: Ho-Oh",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ho-Oh",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 1990,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	celebi: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 251,
		"name": "Celebi",
		"types": [
				"Psychic",
				"Grass"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 100,
				"spa": 100,
				"spd": 100,
				"spe": 100
		},
		"abilities": {
				"0": "Natural Cure"
		},
		"weightkg": 5,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "celebi",
		"fullname": "pokemon: Celebi",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Celebi",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 50,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	treecko: {
		"exists": true,
		"tags": [],
		"num": 252,
		"name": "Treecko",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 40,
				"atk": 45,
				"def": 35,
				"spa": 65,
				"spd": 55,
				"spe": 70
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 5,
		"evos": [
				"Grovyle"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "LC",
		"id": "treecko",
		"fullname": "pokemon: Treecko",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Treecko",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 310,
		"weighthg": 50,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	grovyle: {
		"exists": true,
		"tags": [],
		"num": 253,
		"name": "Grovyle",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 45,
				"spa": 85,
				"spd": 65,
				"spe": 95
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 21.6,
		"prevo": "Treecko",
		"evoLevel": 16,
		"evos": [
				"Sceptile"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "NFE",
		"id": "grovyle",
		"fullname": "pokemon: Grovyle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Grovyle",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 216,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sceptile: {
		"exists": true,
		"tags": [],
		"num": 254,
		"name": "Sceptile",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 70,
				"atk": 85,
				"def": 65,
				"spa": 105,
				"spd": 85,
				"spe": 120
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 52.2,
		"prevo": "Grovyle",
		"evoLevel": 36,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"otherFormes": [
				"Sceptile-Mega"
		],
		"formeOrder": [
				"Sceptile",
				"Sceptile-Mega"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "sceptile",
		"fullname": "pokemon: Sceptile",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sceptile",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 522,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sceptilemega: {
		"exists": true,
		"tags": [],
		"num": 254,
		"name": "Sceptile-Mega",
		"baseSpecies": "Sceptile",
		// "forme": "Mega",
		"types": [
				"Grass",
				"Dragon"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 70,
				"atk": 110,
				"def": 75,
				"spa": 145,
				"spd": 85,
				"spe": 145
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 55.2,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		// "requiredItem": "Sceptilite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "sceptilemega",
		"fullname": "pokemon: Sceptile-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Sceptilite"
		// ],
		"bst": 630,
		"weighthg": 552,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Sceptile",
		// "changesFrom": "Sceptile"
	},
	torchic: {
		"exists": true,
		"tags": [],
		"num": 255,
		"name": "Torchic",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 45,
				"atk": 60,
				"def": 40,
				"spa": 70,
				"spd": 50,
				"spe": 45
		},
		"abilities": {
				"0": "Blaze",
				"1": "Speed Boost"
		},
		"weightkg": 2.5,
		"evos": [
				"Combusken"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "torchic",
		"fullname": "pokemon: Torchic",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Torchic",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 310,
		"weighthg": 25,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	combusken: {
		"exists": true,
		"tags": [],
		"num": 256,
		"name": "Combusken",
		"types": [
				"Fire",
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 60,
				"atk": 85,
				"def": 60,
				"spa": 85,
				"spd": 60,
				"spe": 55
		},
		"abilities": {
				"0": "Blaze",
				"1": "Speed Boost"
		},
		"weightkg": 19.5,
		"prevo": "Torchic",
		"evoLevel": 16,
		"evos": [
				"Blaziken"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "combusken",
		"fullname": "pokemon: Combusken",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Combusken",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 195,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	blaziken: {
		"exists": true,
		"tags": [],
		"num": 257,
		"name": "Blaziken",
		"types": [
				"Fire",
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 80,
				"atk": 120,
				"def": 70,
				"spa": 110,
				"spd": 70,
				"spe": 80
		},
		"abilities": {
				"0": "Blaze",
				"1": "Speed Boost"
		},
		"weightkg": 52,
		"prevo": "Combusken",
		"evoLevel": 36,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Blaziken-Mega"
		],
		"formeOrder": [
				"Blaziken",
				"Blaziken-Mega"
		],
		"tier": "UUBL",
		"doublesTier": "(DUU)",
		"id": "blaziken",
		"fullname": "pokemon: Blaziken",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Blaziken",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 520,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	blazikenmega: {
		"exists": true,
		"tags": [],
		"num": 257,
		"name": "Blaziken-Mega",
		"baseSpecies": "Blaziken",
		// "forme": "Mega",
		"types": [
				"Fire",
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 80,
				"atk": 160,
				"def": 80,
				"spa": 130,
				"spd": 80,
				"spe": 100
		},
		"abilities": {
				"0": "Speed Boost"
		},
		"weightkg": 52,
		"eggGroups": [
				"Field"
		],
		// "requiredItem": "Blazikenite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "blazikenmega",
		"fullname": "pokemon: Blaziken-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Blazikenite"
		// ],
		"bst": 630,
		"weighthg": 520,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Blaziken",
		// "changesFrom": "Blaziken"
	},
	mudkip: {
		"exists": true,
		"tags": [],
		"num": 258,
		"name": "Mudkip",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 50,
				"atk": 70,
				"def": 50,
				"spa": 50,
				"spd": 50,
				"spe": 40
		},
		"abilities": {
				"0": "Torrent",
				"1": "Damp"
		},
		"weightkg": 7.6,
		"evos": [
				"Marshtomp"
		],
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "LC",
		"id": "mudkip",
		"fullname": "pokemon: Mudkip",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mudkip",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 310,
		"weighthg": 76,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	marshtomp: {
		"exists": true,
		"tags": [],
		"num": 259,
		"name": "Marshtomp",
		"types": [
				"Water",
				"Ground"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 70,
				"atk": 85,
				"def": 70,
				"spa": 60,
				"spd": 70,
				"spe": 50
		},
		"abilities": {
				"0": "Torrent",
				"1": "Damp"
		},
		"weightkg": 28,
		"prevo": "Mudkip",
		"evoLevel": 16,
		"evos": [
				"Swampert"
		],
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"tier": "NFE",
		"id": "marshtomp",
		"fullname": "pokemon: Marshtomp",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Marshtomp",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 280,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swampert: {
		"exists": true,
		"tags": [],
		"num": 260,
		"name": "Swampert",
		"types": [
				"Water",
				"Ground"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 100,
				"atk": 110,
				"def": 90,
				"spa": 85,
				"spd": 90,
				"spe": 60
		},
		"abilities": {
				"0": "Torrent",
				"1": "Damp"
		},
		"weightkg": 81.9,
		"prevo": "Marshtomp",
		"evoLevel": 36,
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		"otherFormes": [
				"Swampert-Mega"
		],
		"formeOrder": [
				"Swampert",
				"Swampert-Mega"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "swampert",
		"fullname": "pokemon: Swampert",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Swampert",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 535,
		"weighthg": 819,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swampertmega: {
		"exists": true,
		"tags": [],
		"num": 260,
		"name": "Swampert-Mega",
		"baseSpecies": "Swampert",
		// "forme": "Mega",
		"types": [
				"Water",
				"Ground"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 100,
				"atk": 150,
				"def": 110,
				"spa": 95,
				"spd": 110,
				"spe": 70
		},
		"abilities": {
				"0": "Swift Swim"
		},
		"weightkg": 102,
		"eggGroups": [
				"Monster",
				"Water 1"
		],
		// "requiredItem": "Swampertite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "swampertmega",
		"fullname": "pokemon: Swampert-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Swampertite"
		// ],
		"bst": 635,
		"weighthg": 1020,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Swampert",
		// "changesFrom": "Swampert"
	},
	poochyena: {
		"exists": true,
		"tags": [],
		"num": 261,
		"name": "Poochyena",
		"types": [
				"Dark"
		],
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 35,
				"spa": 30,
				"spd": 30,
				"spe": 35
		},
		"abilities": {
				"0": "Run Away"
		},
		"weightkg": 13.6,
		"evos": [
				"Mightyena"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "poochyena",
		"fullname": "pokemon: Poochyena",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Poochyena",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 220,
		"weighthg": 136,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mightyena: {
		"exists": true,
		"tags": [],
		"num": 262,
		"name": "Mightyena",
		"types": [
				"Dark"
		],
		"baseStats": {
				"hp": 70,
				"atk": 90,
				"def": 70,
				"spa": 60,
				"spd": 60,
				"spe": 70
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 37,
		"prevo": "Poochyena",
		"evoLevel": 18,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "mightyena",
		"fullname": "pokemon: Mightyena",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mightyena",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 370,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zigzagoon: {
		"exists": true,
		"tags": [],
		"num": 263,
		"name": "Zigzagoon",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 38,
				"atk": 30,
				"def": 41,
				"spa": 30,
				"spd": 41,
				"spe": 60
		},
		"abilities": {
				"0": "Pickup"
		},
		"weightkg": 17.5,
		"evos": [
				"Linoone"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Zigzagoon-Galar"
		],
		"formeOrder": [
				"Zigzagoon",
				"Zigzagoon-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "zigzagoon",
		"fullname": "pokemon: Zigzagoon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Zigzagoon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 240,
		"weighthg": 175,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zigzagoongalar: {
		"exists": true,
		"tags": [],
		"num": 263,
		"name": "Zigzagoon-Galar",
		"baseSpecies": "Zigzagoon",
		"forme": "Galar",
		"types": [
				"Dark",
				"Normal"
		],
		"baseStats": {
				"hp": 38,
				"atk": 30,
				"def": 41,
				"spa": 30,
				"spd": 41,
				"spe": 60
		},
		"abilities": {
				"0": "Pickup"
		},
		"weightkg": 17.5,
		"evos": [
				"Linoone-Galar"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "zigzagoongalar",
		"fullname": "pokemon: Zigzagoon-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 240,
		"weighthg": 175,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	linoone: {
		"exists": true,
		"tags": [],
		"num": 264,
		"name": "Linoone",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 78,
				"atk": 70,
				"def": 61,
				"spa": 50,
				"spd": 61,
				"spe": 100
		},
		"abilities": {
				"0": "Pickup"
		},
		"weightkg": 32.5,
		"prevo": "Zigzagoon",
		"evoLevel": 20,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Linoone-Galar"
		],
		"formeOrder": [
				"Linoone",
				"Linoone-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "linoone",
		"fullname": "pokemon: Linoone",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Linoone",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 325,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	linoonegalar: {
		"exists": true,
		"tags": [],
		"num": 264,
		"name": "Linoone-Galar",
		"baseSpecies": "Linoone",
		"forme": "Galar",
		"types": [
				"Dark",
				"Normal"
		],
		"baseStats": {
				"hp": 78,
				"atk": 70,
				"def": 61,
				"spa": 50,
				"spd": 61,
				"spe": 100
		},
		"abilities": {
				"0": "Pickup"
		},
		"weightkg": 32.5,
		"prevo": "Zigzagoon-Galar",
		"evoLevel": 20,
		"evos": [
				"Obstagoon"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "linoonegalar",
		"fullname": "pokemon: Linoone-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 325,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wurmple: {
		"exists": true,
		"tags": [],
		"num": 265,
		"name": "Wurmple",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 45,
				"atk": 45,
				"def": 35,
				"spa": 20,
				"spd": 30,
				"spe": 20
		},
		"abilities": {
				"0": "Shield Dust",
				"1": "Run Away"
		},
		"weightkg": 3.6,
		"evos": [
				"Silcoon",
				"Cascoon"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wurmple",
		"fullname": "pokemon: Wurmple",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Wurmple",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 195,
		"weighthg": 36,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silcoon: {
		"exists": true,
		"tags": [],
		"num": 266,
		"name": "Silcoon",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 50,
				"atk": 35,
				"def": 55,
				"spa": 25,
				"spd": 25,
				"spe": 15
		},
		"abilities": {
				"0": "Shed Skin"
		},
		"weightkg": 10,
		"prevo": "Wurmple",
		"evoLevel": 7,
		"evos": [
				"Beautifly"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silcoon",
		"fullname": "pokemon: Silcoon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Silcoon",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 205,
		"weighthg": 100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	beautifly: {
		"exists": true,
		"tags": [],
		"num": 267,
		"name": "Beautifly",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 60,
				"atk": 70,
				"def": 50,
				"spa": 100,
				"spd": 50,
				"spe": 65
		},
		"abilities": {
				"0": "Swarm"
		},
		"weightkg": 28.4,
		"prevo": "Silcoon",
		"evoLevel": 10,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "beautifly",
		"fullname": "pokemon: Beautifly",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Beautifly",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 395,
		"weighthg": 284,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cascoon: {
		"exists": true,
		"tags": [],
		"num": 268,
		"name": "Cascoon",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 50,
				"atk": 35,
				"def": 55,
				"spa": 25,
				"spd": 25,
				"spe": 15
		},
		"abilities": {
				"0": "Shed Skin"
		},
		"weightkg": 11.5,
		"prevo": "Wurmple",
		"evoLevel": 7,
		"evos": [
				"Dustox"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "cascoon",
		"fullname": "pokemon: Cascoon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Cascoon",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 205,
		"weighthg": 115,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dustox: {
		"exists": true,
		"tags": [],
		"num": 269,
		"name": "Dustox",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 60,
				"atk": 50,
				"def": 70,
				"spa": 50,
				"spd": 90,
				"spe": 65
		},
		"abilities": {
				"0": "Shield Dust",
				"1": "Compound Eyes"
		},
		"weightkg": 31.6,
		"prevo": "Cascoon",
		"evoLevel": 10,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "dustox",
		"fullname": "pokemon: Dustox",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Dustox",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 385,
		"weighthg": 316,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lotad: {
		"exists": true,
		"tags": [],
		"num": 270,
		"name": "Lotad",
		"types": [
				"Water",
				"Grass"
		],
		"baseStats": {
				"hp": 40,
				"atk": 30,
				"def": 30,
				"spa": 40,
				"spd": 50,
				"spe": 30
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Rain Dish",
				"H": "Own Tempo"
		},
		"weightkg": 2.6,
		"evos": [
				"Lombre"
		],
		"eggGroups": [
				"Water 1",
				"Grass"
		],
		"tier": "LC",
		"id": "lotad",
		"fullname": "pokemon: Lotad",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lotad",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 220,
		"weighthg": 26,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lombre: {
		"exists": true,
		"tags": [],
		"num": 271,
		"name": "Lombre",
		"types": [
				"Water",
				"Grass"
		],
		"baseStats": {
				"hp": 60,
				"atk": 50,
				"def": 50,
				"spa": 60,
				"spd": 70,
				"spe": 50
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Rain Dish",
				"H": "Own Tempo"
		},
		"weightkg": 32.5,
		"prevo": "Lotad",
		"evoLevel": 14,
		"evos": [
				"Ludicolo"
		],
		"eggGroups": [
				"Water 1",
				"Grass"
		],
		"tier": "NFE",
		"id": "lombre",
		"fullname": "pokemon: Lombre",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lombre",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 340,
		"weighthg": 325,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ludicolo: {
		"exists": true,
		"tags": [],
		"num": 272,
		"name": "Ludicolo",
		"types": [
				"Water",
				"Grass"
		],
		"baseStats": {
				"hp": 80,
				"atk": 70,
				"def": 70,
				"spa": 90,
				"spd": 100,
				"spe": 70
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Rain Dish",
				"H": "Own Tempo"
		},
		"weightkg": 55,
		"prevo": "Lombre",
		"evoType": "useItem",
		"evoItem": "Water Stone",
		"eggGroups": [
				"Water 1",
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "ludicolo",
		"fullname": "pokemon: Ludicolo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ludicolo",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 550,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	seedot: {
		"exists": true,
		"tags": [],
		"num": 273,
		"name": "Seedot",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 40,
				"atk": 40,
				"def": 50,
				"spa": 30,
				"spd": 30,
				"spe": 30
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Early Bird"
		},
		"weightkg": 4,
		"evos": [
				"Nuzleaf"
		],
		"eggGroups": [
				"Field",
				"Grass"
		],
		"tier": "LC",
		"id": "seedot",
		"fullname": "pokemon: Seedot",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Seedot",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 220,
		"weighthg": 40,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nuzleaf: {
		"exists": true,
		"tags": [],
		"num": 274,
		"name": "Nuzleaf",
		"types": [
				"Grass",
				"Dark"
		],
		"baseStats": {
				"hp": 70,
				"atk": 70,
				"def": 40,
				"spa": 60,
				"spd": 40,
				"spe": 60
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Early Bird"
		},
		"weightkg": 28,
		"prevo": "Seedot",
		"evoLevel": 14,
		"evos": [
				"Shiftry"
		],
		"eggGroups": [
				"Field",
				"Grass"
		],
		"tier": "NFE",
		"id": "nuzleaf",
		"fullname": "pokemon: Nuzleaf",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Nuzleaf",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 340,
		"weighthg": 280,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shiftry: {
		"exists": true,
		"tags": [],
		"num": 275,
		"name": "Shiftry",
		"types": [
				"Grass",
				"Dark"
		],
		"baseStats": {
				"hp": 90,
				"atk": 100,
				"def": 60,
				"spa": 90,
				"spd": 60,
				"spe": 80
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 59.6,
		"prevo": "Nuzleaf",
		"evoType": "useItem",
		"evoItem": "Leaf Stone",
		"eggGroups": [
				"Field",
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "shiftry",
		"fullname": "pokemon: Shiftry",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Shiftry",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 596,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	taillow: {
		"exists": true,
		"tags": [],
		"num": 276,
		"name": "Taillow",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 40,
				"atk": 55,
				"def": 30,
				"spa": 30,
				"spd": 30,
				"spe": 85
		},
		"abilities": {
				"0": "Guts"
		},
		"weightkg": 2.3,
		"evos": [
				"Swellow"
		],
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "taillow",
		"fullname": "pokemon: Taillow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Taillow",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 270,
		"weighthg": 23,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swellow: {
		"exists": true,
		"tags": [],
		"num": 277,
		"name": "Swellow",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 60,
				"atk": 85,
				"def": 60,
				"spa": 75,
				"spd": 50,
				"spe": 125
		},
		"abilities": {
				"0": "Guts"
		},
		"weightkg": 19.8,
		"prevo": "Taillow",
		"evoLevel": 22,
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "swellow",
		"fullname": "pokemon: Swellow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Swellow",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 455,
		"weighthg": 198,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wingull: {
		"exists": true,
		"tags": [],
		"num": 278,
		"name": "Wingull",
		"types": [
				"Water",
				"Flying"
		],
		"baseStats": {
				"hp": 40,
				"atk": 30,
				"def": 30,
				"spa": 55,
				"spd": 30,
				"spe": 85
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Rain Dish"
		},
		"weightkg": 9.5,
		"evos": [
				"Pelipper"
		],
		"eggGroups": [
				"Water 1",
				"Flying"
		],
		"tier": "LC",
		"id": "wingull",
		"fullname": "pokemon: Wingull",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Wingull",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 270,
		"weighthg": 95,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pelipper: {
		"exists": true,
		"tags": [],
		"num": 279,
		"name": "Pelipper",
		"types": [
				"Water",
				"Flying"
		],
		"baseStats": {
				"hp": 60,
				"atk": 50,
				"def": 100,
				"spa": 95,
				"spd": 70,
				"spe": 65
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Drizzle",
				"H": "Rain Dish"
		},
		"weightkg": 28,
		"prevo": "Wingull",
		"evoLevel": 25,
		"eggGroups": [
				"Water 1",
				"Flying"
		],
		"tier": "UUBL",
		"doublesTier": "DOU",
		"id": "pelipper",
		"fullname": "pokemon: Pelipper",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pelipper",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 440,
		"weighthg": 280,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ralts: {
		"exists": true,
		"tags": [],
		"num": 280,
		"name": "Ralts",
		"types": [
				"Psychic",
				"Normal"
		],
		"baseStats": {
				"hp": 28,
				"atk": 25,
				"def": 25,
				"spa": 45,
				"spd": 35,
				"spe": 40
		},
		"abilities": {
				"0": "Synchronize",
				"1": "Trace"
		},
		"weightkg": 6.6,
		"evos": [
				"Kirlia"
		],
		"eggGroups": [
				"Human-Like",
				"Amorphous"
		],
		"tier": "LC",
		"id": "ralts",
		"fullname": "pokemon: Ralts",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ralts",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 198,
		"weighthg": 66,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kirlia: {
		"exists": true,
		"tags": [],
		"num": 281,
		"name": "Kirlia",
		"types": [
				"Psychic",
				"Normal"
		],
		"baseStats": {
				"hp": 38,
				"atk": 35,
				"def": 35,
				"spa": 65,
				"spd": 55,
				"spe": 50
		},
		"abilities": {
				"0": "Synchronize",
				"1": "Trace"
		},
		"weightkg": 20.2,
		"prevo": "Ralts",
		"evoLevel": 20,
		"evos": [
				"Gardevoir",
				"Gallade"
		],
		"eggGroups": [
				"Human-Like",
				"Amorphous"
		],
		"tier": "NFE",
		"id": "kirlia",
		"fullname": "pokemon: Kirlia",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Kirlia",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 278,
		"weighthg": 202,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gardevoir: {
		"exists": true,
		"tags": [],
		"num": 282,
		"name": "Gardevoir",
		"types": [
				"Psychic",
				"Normal"
		],
		"baseStats": {
				"hp": 68,
				"atk": 65,
				"def": 65,
				"spa": 125,
				"spd": 115,
				"spe": 80
		},
		"abilities": {
				"0": "Synchronize",
				"1": "Trace"
		},
		"weightkg": 48.4,
		"prevo": "Kirlia",
		"evoLevel": 30,
		"eggGroups": [
				"Human-Like",
				"Amorphous"
		],
		"otherFormes": [
				"Gardevoir-Mega"
		],
		"formeOrder": [
				"Gardevoir",
				"Gardevoir-Mega"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "gardevoir",
		"fullname": "pokemon: Gardevoir",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gardevoir",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 518,
		"weighthg": 484,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gardevoirmega: {
		"exists": true,
		"tags": [],
		"num": 282,
		"name": "Gardevoir-Mega",
		"baseSpecies": "Gardevoir",
		// "forme": "Mega",
		"types": [
				"Psychic",
				"Normal"
		],
		"baseStats": {
				"hp": 68,
				"atk": 85,
				"def": 65,
				"spa": 165,
				"spd": 135,
				"spe": 100
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 48.4,
		"eggGroups": [
				"Amorphous"
		],
		// "requiredItem": "Gardevoirite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "gardevoirmega",
		"fullname": "pokemon: Gardevoir-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Gardevoirite"
		// ],
		"bst": 618,
		"weighthg": 484,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Gardevoir",
		// "changesFrom": "Gardevoir"
	},
	surskit: {
		"exists": true,
		"tags": [],
		"num": 283,
		"name": "Surskit",
		"types": [
				"Bug",
				"Water"
		],
		"baseStats": {
				"hp": 40,
				"atk": 30,
				"def": 32,
				"spa": 50,
				"spd": 52,
				"spe": 65
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Rain Dish"
		},
		"weightkg": 1.7,
		"evos": [
				"Masquerain"
		],
		"eggGroups": [
				"Water 1",
				"Bug"
		],
		"tier": "LC",
		"id": "surskit",
		"fullname": "pokemon: Surskit",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Surskit",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 269,
		"weighthg": 17,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	masquerain: {
		"exists": true,
		"tags": [],
		"num": 284,
		"name": "Masquerain",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 70,
				"atk": 60,
				"def": 62,
				"spa": 100,
				"spd": 82,
				"spe": 80
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 3.6,
		"prevo": "Surskit",
		"evoLevel": 22,
		"eggGroups": [
				"Water 1",
				"Bug"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "masquerain",
		"fullname": "pokemon: Masquerain",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Masquerain",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 454,
		"weighthg": 36,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shroomish: {
		"exists": true,
		"tags": [],
		"num": 285,
		"name": "Shroomish",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 60,
				"atk": 40,
				"def": 60,
				"spa": 40,
				"spd": 60,
				"spe": 35
		},
		"abilities": {
				"0": "Effect Spore"
		},
		"weightkg": 4.5,
		"evos": [
				"Breloom"
		],
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"tier": "LC",
		"id": "shroomish",
		"fullname": "pokemon: Shroomish",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Shroomish",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 295,
		"weighthg": 45,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	breloom: {
		"exists": true,
		"tags": [],
		"num": 286,
		"name": "Breloom",
		"types": [
				"Grass",
				"Fighting"
		],
		"baseStats": {
				"hp": 60,
				"atk": 130,
				"def": 80,
				"spa": 60,
				"spd": 60,
				"spe": 70
		},
		"abilities": {
				"0": "Effect Spore"
		},
		"weightkg": 39.2,
		"prevo": "Shroomish",
		"evoLevel": 23,
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "breloom",
		"fullname": "pokemon: Breloom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Breloom",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 392,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slakoth: {
		"exists": true,
		"tags": [],
		"num": 287,
		"name": "Slakoth",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 60,
				"atk": 60,
				"def": 60,
				"spa": 35,
				"spd": 35,
				"spe": 30
		},
		"abilities": {
				"0": "Truant"
		},
		"weightkg": 24,
		"evos": [
				"Vigoroth"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "slakoth",
		"fullname": "pokemon: Slakoth",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Slakoth",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 280,
		"weighthg": 240,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vigoroth: {
		"exists": true,
		"tags": [],
		"num": 288,
		"name": "Vigoroth",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 80,
				"atk": 80,
				"def": 80,
				"spa": 55,
				"spd": 55,
				"spe": 90
		},
		"abilities": {
				"0": "Vital Spirit"
		},
		"weightkg": 46.5,
		"prevo": "Slakoth",
		"evoLevel": 18,
		"evos": [
				"Slaking"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "vigoroth",
		"fullname": "pokemon: Vigoroth",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Vigoroth",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 440,
		"weighthg": 465,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slaking: {
		"exists": true,
		"tags": [],
		"num": 289,
		"name": "Slaking",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 150,
				"atk": 160,
				"def": 100,
				"spa": 95,
				"spd": 65,
				"spe": 100
		},
		"abilities": {
				"0": "Truant"
		},
		"weightkg": 130.5,
		"prevo": "Vigoroth",
		"evoLevel": 36,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "slaking",
		"fullname": "pokemon: Slaking",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Slaking",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 670,
		"weighthg": 1305,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nincada: {
		"exists": true,
		"tags": [],
		"num": 290,
		"name": "Nincada",
		"types": [
				"Bug",
				"Ground"
		],
		"baseStats": {
				"hp": 31,
				"atk": 45,
				"def": 90,
				"spa": 30,
				"spd": 30,
				"spe": 40
		},
		"abilities": {
				"0": "Compound Eyes",
				"1": "Run Away"
		},
		"weightkg": 5.5,
		"evos": [
				"Ninjask",
				"Shedinja"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "nincada",
		"fullname": "pokemon: Nincada",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Nincada",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 266,
		"weighthg": 55,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ninjask: {
		"exists": true,
		"tags": [],
		"num": 291,
		"name": "Ninjask",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 61,
				"atk": 90,
				"def": 45,
				"spa": 50,
				"spd": 50,
				"spe": 160
		},
		"abilities": {
				"0": "Speed Boost"
		},
		"weightkg": 12,
		"prevo": "Nincada",
		"evoLevel": 20,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "ninjask",
		"fullname": "pokemon: Ninjask",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Ninjask",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 456,
		"weighthg": 120,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shedinja: {
		"exists": true,
		"tags": [],
		"num": 292,
		"name": "Shedinja",
		"types": [
				"Bug",
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 1,
				"atk": 90,
				"def": 45,
				"spa": 30,
				"spd": 30,
				"spe": 40
		},
		"maxHP": 1,
		"abilities": {
				"0": "Wonder Guard"
		},
		"weightkg": 1.2,
		"prevo": "Nincada",
		"evoLevel": 20,
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "shedinja",
		"fullname": "pokemon: Shedinja",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Shedinja",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 236,
		"weighthg": 12,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	whismur: {
		"exists": true,
		"tags": [],
		"num": 293,
		"name": "Whismur",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 64,
				"atk": 51,
				"def": 23,
				"spa": 51,
				"spd": 23,
				"spe": 28
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 16.3,
		"evos": [
				"Loudred"
		],
		"eggGroups": [
				"Monster",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "whismur",
		"fullname": "pokemon: Whismur",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Whismur",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 240,
		"weighthg": 163,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	loudred: {
		"exists": true,
		"tags": [],
		"num": 294,
		"name": "Loudred",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 84,
				"atk": 71,
				"def": 43,
				"spa": 71,
				"spd": 43,
				"spe": 48
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 40.5,
		"prevo": "Whismur",
		"evoLevel": 20,
		"evos": [
				"Exploud"
		],
		"eggGroups": [
				"Monster",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "loudred",
		"fullname": "pokemon: Loudred",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Loudred",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 360,
		"weighthg": 405,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	exploud: {
		"exists": true,
		"tags": [],
		"num": 295,
		"name": "Exploud",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 104,
				"atk": 91,
				"def": 63,
				"spa": 91,
				"spd": 73,
				"spe": 68
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 84,
		"prevo": "Loudred",
		"evoLevel": 40,
		"eggGroups": [
				"Monster",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "exploud",
		"fullname": "pokemon: Exploud",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Exploud",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 840,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	makuhita: {
		"exists": true,
		"tags": [],
		"num": 296,
		"name": "Makuhita",
		"types": [
				"Fighting"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 72,
				"atk": 60,
				"def": 30,
				"spa": 20,
				"spd": 30,
				"spe": 25
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Guts"
		},
		"weightkg": 86.4,
		"evos": [
				"Hariyama"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "LC",
		"id": "makuhita",
		"fullname": "pokemon: Makuhita",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Makuhita",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 237,
		"weighthg": 864,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hariyama: {
		"exists": true,
		"tags": [],
		"num": 297,
		"name": "Hariyama",
		"types": [
				"Fighting"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 144,
				"atk": 120,
				"def": 60,
				"spa": 40,
				"spd": 60,
				"spe": 50
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Guts"
		},
		"weightkg": 253.8,
		"prevo": "Makuhita",
		"evoLevel": 24,
		"eggGroups": [
				"Human-Like"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "hariyama",
		"fullname": "pokemon: Hariyama",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hariyama",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 474,
		"weighthg": 2538,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	azurill: {
		"exists": true,
		"tags": [],
		"num": 298,
		"name": "Azurill",
		"types": [
				"Normal",
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 50,
				"atk": 20,
				"def": 40,
				"spa": 20,
				"spd": 40,
				"spe": 20
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Huge Power"
		},
		"weightkg": 2,
		"evos": [
				"Marill"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "azurill",
		"fullname": "pokemon: Azurill",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Azurill",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"bst": 190,
		"weighthg": 20,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nosepass: {
		"exists": true,
		"tags": [],
		"num": 299,
		"name": "Nosepass",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 30,
				"atk": 45,
				"def": 135,
				"spa": 45,
				"spd": 90,
				"spe": 30
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Magnet Pull"
		},
		"weightkg": 97,
		"evos": [
				"Probopass"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "LC",
		"id": "nosepass",
		"fullname": "pokemon: Nosepass",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Nosepass",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 375,
		"weighthg": 970,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	skitty: {
		"exists": true,
		"tags": [],
		"num": 300,
		"name": "Skitty",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 50,
				"atk": 45,
				"def": 45,
				"spa": 35,
				"spd": 35,
				"spe": 50
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 11,
		"evos": [
				"Delcatty"
		],
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "skitty",
		"fullname": "pokemon: Skitty",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Skitty",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 260,
		"weighthg": 110,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	delcatty: {
		"exists": true,
		"tags": [],
		"num": 301,
		"name": "Delcatty",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 70,
				"atk": 65,
				"def": 65,
				"spa": 55,
				"spd": 55,
				"spe": 90
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 32.6,
		"prevo": "Skitty",
		"evoType": "useItem",
		"evoItem": "Moon Stone",
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "delcatty",
		"fullname": "pokemon: Delcatty",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Delcatty",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 400,
		"weighthg": 326,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sableye: {
		"exists": true,
		"tags": [],
		"num": 302,
		"name": "Sableye",
		"types": [
				"Dark",
				"Ghost"
		],
		"baseStats": {
				"hp": 50,
				"atk": 75,
				"def": 75,
				"spa": 65,
				"spd": 65,
				"spe": 50
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 11,
		"eggGroups": [
				"Human-Like"
		],
		"otherFormes": [
				"Sableye-Mega"
		],
		"formeOrder": [
				"Sableye",
				"Sableye-Mega"
		],
		"tier": "ZU",
		"doublesTier": "DUU",
		"id": "sableye",
		"fullname": "pokemon: Sableye",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sableye",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 380,
		"weighthg": 110,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sableyemega: {
		"exists": true,
		"tags": [],
		"num": 302,
		"name": "Sableye-Mega",
		"baseSpecies": "Sableye",
		// "forme": "Mega",
		"types": [
				"Dark",
				"Ghost"
		],
		"baseStats": {
				"hp": 50,
				"atk": 85,
				"def": 125,
				"spa": 85,
				"spd": 115,
				"spe": 20
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 161,
		"eggGroups": [
				"Human-Like"
		],
		// "requiredItem": "Sablenite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "sableyemega",
		"fullname": "pokemon: Sableye-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Sablenite"
		// ],
		"bst": 480,
		"weighthg": 1610,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Sableye",
		// "changesFrom": "Sableye"
	},
	mawile: {
		"exists": true,
		"tags": [],
		"num": 303,
		"name": "Mawile",
		"types": [
				"Steel",
				"Normal"
		],
		"baseStats": {
				"hp": 50,
				"atk": 85,
				"def": 85,
				"spa": 55,
				"spd": 55,
				"spe": 50
		},
		"abilities": {
				"0": "Hyper Cutter",
				"1": "Intimidate"
		},
		"weightkg": 11.5,
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"otherFormes": [
				"Mawile-Mega"
		],
		"formeOrder": [
				"Mawile",
				"Mawile-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mawile",
		"fullname": "pokemon: Mawile",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Mawile",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 380,
		"weighthg": 115,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mawilemega: {
		"exists": true,
		"tags": [],
		"num": 303,
		"name": "Mawile-Mega",
		"baseSpecies": "Mawile",
		// "forme": "Mega",
		"types": [
				"Steel",
				"Normal"
		],
		"baseStats": {
				"hp": 50,
				"atk": 105,
				"def": 125,
				"spa": 55,
				"spd": 95,
				"spe": 50
		},
		"abilities": {
				"0": "Huge Power"
		},
		"weightkg": 23.5,
		"eggGroups": [
				"Field",
				"Fairy"
		],
		// "requiredItem": "Mawilite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mawilemega",
		"fullname": "pokemon: Mawile-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Mawilite"
		// ],
		"bst": 480,
		"weighthg": 235,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Mawile",
		// "changesFrom": "Mawile"
	},
	aron: {
		"exists": true,
		"tags": [],
		"num": 304,
		"name": "Aron",
		"types": [
				"Steel",
				"Rock"
		],
		"baseStats": {
				"hp": 50,
				"atk": 70,
				"def": 100,
				"spa": 40,
				"spd": 40,
				"spe": 30
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Rock Head"
		},
		"weightkg": 60,
		"evos": [
				"Lairon"
		],
		"eggGroups": [
				"Monster"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "aron",
		"fullname": "pokemon: Aron",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Aron",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lairon: {
		"exists": true,
		"tags": [],
		"num": 305,
		"name": "Lairon",
		"types": [
				"Steel",
				"Rock"
		],
		"baseStats": {
				"hp": 60,
				"atk": 90,
				"def": 140,
				"spa": 50,
				"spd": 50,
				"spe": 40
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Rock Head"
		},
		"weightkg": 120,
		"prevo": "Aron",
		"evoLevel": 32,
		"evos": [
				"Aggron"
		],
		"eggGroups": [
				"Monster"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lairon",
		"fullname": "pokemon: Lairon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Lairon",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 430,
		"weighthg": 1200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	aggron: {
		"exists": true,
		"tags": [],
		"num": 306,
		"name": "Aggron",
		"types": [
				"Steel",
				"Rock"
		],
		"baseStats": {
				"hp": 70,
				"atk": 110,
				"def": 180,
				"spa": 60,
				"spd": 60,
				"spe": 50
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Rock Head"
		},
		"weightkg": 360,
		"prevo": "Lairon",
		"evoLevel": 42,
		"eggGroups": [
				"Monster"
		],
		"otherFormes": [
				"Aggron-Mega"
		],
		"formeOrder": [
				"Aggron",
				"Aggron-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "aggron",
		"fullname": "pokemon: Aggron",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Aggron",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 530,
		"weighthg": 3600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	aggronmega: {
		"exists": true,
		"tags": [],
		"num": 306,
		"name": "Aggron-Mega",
		"baseSpecies": "Aggron",
		// "forme": "Mega",
		"types": [
				"Steel"
		],
		"baseStats": {
				"hp": 70,
				"atk": 140,
				"def": 230,
				"spa": 60,
				"spd": 80,
				"spe": 50
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 395,
		"eggGroups": [
				"Monster"
		],
		// "requiredItem": "Aggronite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "aggronmega",
		"fullname": "pokemon: Aggron-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Aggronite"
		// ],
		"bst": 630,
		"weighthg": 3950,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Aggron",
		// "changesFrom": "Aggron"
	},
	meditite: {
		"exists": true,
		"tags": [],
		"num": 307,
		"name": "Meditite",
		"types": [
				"Fighting",
				"Psychic"
		],
		"baseStats": {
				"hp": 30,
				"atk": 40,
				"def": 55,
				"spa": 40,
				"spd": 55,
				"spe": 60
		},
		"abilities": {
				"0": "Pure Power"
		},
		"weightkg": 11.2,
		"evos": [
				"Medicham"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "NFE",
		"id": "meditite",
		"fullname": "pokemon: Meditite",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Meditite",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 280,
		"weighthg": 112,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	medicham: {
		"exists": true,
		"tags": [],
		"num": 308,
		"name": "Medicham",
		"types": [
				"Fighting",
				"Psychic"
		],
		"baseStats": {
				"hp": 60,
				"atk": 60,
				"def": 75,
				"spa": 60,
				"spd": 75,
				"spe": 80
		},
		"abilities": {
				"0": "Pure Power"
		},
		"weightkg": 31.5,
		"prevo": "Meditite",
		"evoLevel": 37,
		"eggGroups": [
				"Human-Like"
		],
		"otherFormes": [
				"Medicham-Mega"
		],
		"formeOrder": [
				"Medicham",
				"Medicham-Mega"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "medicham",
		"fullname": "pokemon: Medicham",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Medicham",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 315,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	medichammega: {
		"exists": true,
		"tags": [],
		"num": 308,
		"name": "Medicham-Mega",
		"baseSpecies": "Medicham",
		// "forme": "Mega",
		"types": [
				"Fighting",
				"Psychic"
		],
		"baseStats": {
				"hp": 60,
				"atk": 100,
				"def": 85,
				"spa": 80,
				"spd": 85,
				"spe": 100
		},
		"abilities": {
				"0": "Pure Power"
		},
		"weightkg": 31.5,
		"eggGroups": [
				"Human-Like"
		],
		// "requiredItem": "Medichamite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "medichammega",
		"fullname": "pokemon: Medicham-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Medichamite"
		// ],
		"bst": 510,
		"weighthg": 315,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Medicham",
		// "changesFrom": "Medicham"
	},
	electrike: {
		"exists": true,
		"tags": [],
		"num": 309,
		"name": "Electrike",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 40,
				"atk": 45,
				"def": 40,
				"spa": 65,
				"spd": 40,
				"spe": 65
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod",
				"H": "Minus"
		},
		"weightkg": 15.2,
		"evos": [
				"Manectric"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "electrike",
		"fullname": "pokemon: Electrike",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Electrike",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 295,
		"weighthg": 152,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	manectric: {
		"exists": true,
		"tags": [],
		"num": 310,
		"name": "Manectric",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 70,
				"atk": 75,
				"def": 60,
				"spa": 105,
				"spd": 60,
				"spe": 105
		},
		"abilities": {
				"0": "Static",
				"1": "Lightning Rod",
				"H": "Minus"
		},
		"weightkg": 40.2,
		"prevo": "Electrike",
		"evoLevel": 26,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Manectric-Mega"
		],
		"formeOrder": [
				"Manectric",
				"Manectric-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "manectric",
		"fullname": "pokemon: Manectric",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Manectric",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 475,
		"weighthg": 402,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	manectricmega: {
		"exists": true,
		"tags": [],
		"num": 310,
		"name": "Manectric-Mega",
		"baseSpecies": "Manectric",
		// "forme": "Mega",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 70,
				"atk": 75,
				"def": 80,
				"spa": 135,
				"spd": 80,
				"spe": 135
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 44,
		"eggGroups": [
				"Field"
		],
		// "requiredItem": "Manectite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "manectricmega",
		"fullname": "pokemon: Manectric-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Manectite"
		// ],
		"bst": 575,
		"weighthg": 440,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Manectric",
		// "changesFrom": "Manectric"
	},
	plusle: {
		"exists": true,
		"tags": [],
		"num": 311,
		"name": "Plusle",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 60,
				"atk": 50,
				"def": 40,
				"spa": 85,
				"spd": 75,
				"spe": 95
		},
		"abilities": {
				"0": "Plus",
				"1": "Lightning Rod"
		},
		"weightkg": 4.2,
		"eggGroups": [
				"Fairy"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "plusle",
		"fullname": "pokemon: Plusle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Plusle",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 405,
		"weighthg": 42,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	minun: {
		"exists": true,
		"tags": [],
		"num": 312,
		"name": "Minun",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 60,
				"atk": 40,
				"def": 50,
				"spa": 75,
				"spd": 85,
				"spe": 95
		},
		"abilities": {
				"0": "Minus",
				"1": "Volt Absorb"
		},
		"weightkg": 4.2,
		"eggGroups": [
				"Fairy"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "minun",
		"fullname": "pokemon: Minun",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Minun",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 405,
		"weighthg": 42,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	volbeat: {
		"exists": true,
		"tags": [],
		"num": 313,
		"name": "Volbeat",
		"types": [
				"Bug"
		],
		"gender": "M",
		"baseStats": {
				"hp": 65,
				"atk": 73,
				"def": 75,
				"spa": 47,
				"spd": 85,
				"spe": 85
		},
		"abilities": {
				"0": "Illuminate",
				"1": "Swarm"
		},
		"weightkg": 17.7,
		"eggGroups": [
				"Bug",
				"Human-Like"
		],
		"mother": "illumise",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "volbeat",
		"fullname": "pokemon: Volbeat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Volbeat",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 430,
		"weighthg": 177,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	illumise: {
		"exists": true,
		"tags": [],
		"num": 314,
		"name": "Illumise",
		"types": [
				"Bug"
		],
		"gender": "F",
		"baseStats": {
				"hp": 65,
				"atk": 47,
				"def": 75,
				"spa": 73,
				"spd": 85,
				"spe": 85
		},
		"abilities": {
				"0": "Oblivious"
		},
		"weightkg": 17.7,
		"eggGroups": [
				"Bug",
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "illumise",
		"fullname": "pokemon: Illumise",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Illumise",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 430,
		"weighthg": 177,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	roselia: {
		"exists": true,
		"tags": [],
		"num": 315,
		"name": "Roselia",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 50,
				"atk": 60,
				"def": 45,
				"spa": 100,
				"spd": 80,
				"spe": 65
		},
		"abilities": {
				"0": "Natural Cure",
				"1": "Poison Point"
		},
		"weightkg": 2,
		"prevo": "Budew",
		"evoType": "levelFriendship",
		"evoCondition": "during the day",
		"evos": [
				"Roserade"
		],
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "roselia",
		"fullname": "pokemon: Roselia",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Roselia",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 400,
		"weighthg": 20,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gulpin: {
		"exists": true,
		"tags": [],
		"num": 316,
		"name": "Gulpin",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 70,
				"atk": 43,
				"def": 53,
				"spa": 43,
				"spd": 53,
				"spe": 40
		},
		"abilities": {
				"0": "Liquid Ooze",
				"1": "Sticky Hold"
		},
		"weightkg": 10.3,
		"evos": [
				"Swalot"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "gulpin",
		"fullname": "pokemon: Gulpin",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gulpin",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 302,
		"weighthg": 103,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swalot: {
		"exists": true,
		"tags": [],
		"num": 317,
		"name": "Swalot",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 100,
				"atk": 73,
				"def": 83,
				"spa": 73,
				"spd": 83,
				"spe": 55
		},
		"abilities": {
				"0": "Liquid Ooze",
				"1": "Sticky Hold"
		},
		"weightkg": 80,
		"prevo": "Gulpin",
		"evoLevel": 26,
		"eggGroups": [
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "swalot",
		"fullname": "pokemon: Swalot",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Swalot",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 467,
		"weighthg": 800,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	carvanha: {
		"exists": true,
		"tags": [],
		"num": 318,
		"name": "Carvanha",
		"types": [
				"Water",
				"Dark"
		],
		"baseStats": {
				"hp": 45,
				"atk": 90,
				"def": 20,
				"spa": 65,
				"spd": 20,
				"spe": 65
		},
		"abilities": {
				"0": "Rough Skin",
				"1": "Speed Boost"
		},
		"weightkg": 20.8,
		"evos": [
				"Sharpedo"
		],
		"eggGroups": [
				"Water 2"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "carvanha",
		"fullname": "pokemon: Carvanha",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Carvanha",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 208,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sharpedo: {
		"exists": true,
		"tags": [],
		"num": 319,
		"name": "Sharpedo",
		"types": [
				"Water",
				"Dark"
		],
		"baseStats": {
				"hp": 70,
				"atk": 120,
				"def": 40,
				"spa": 95,
				"spd": 40,
				"spe": 95
		},
		"abilities": {
				"0": "Rough Skin",
				"1": "Speed Boost"
		},
		"weightkg": 88.8,
		"prevo": "Carvanha",
		"evoLevel": 30,
		"eggGroups": [
				"Water 2"
		],
		"otherFormes": [
				"Sharpedo-Mega"
		],
		"formeOrder": [
				"Sharpedo",
				"Sharpedo-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "sharpedo",
		"fullname": "pokemon: Sharpedo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Sharpedo",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 888,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sharpedomega: {
		"exists": true,
		"tags": [],
		"num": 319,
		"name": "Sharpedo-Mega",
		"baseSpecies": "Sharpedo",
		// "forme": "Mega",
		"types": [
				"Water",
				"Dark"
		],
		"baseStats": {
				"hp": 70,
				"atk": 140,
				"def": 70,
				"spa": 110,
				"spd": 65,
				"spe": 105
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 130.3,
		"eggGroups": [
				"Water 2"
		],
		// "requiredItem": "Sharpedonite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "sharpedomega",
		"fullname": "pokemon: Sharpedo-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Sharpedonite"
		// ],
		"bst": 560,
		"weighthg": 1303,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Sharpedo",
		// "changesFrom": "Sharpedo"
	},
	wailmer: {
		"exists": true,
		"tags": [],
		"num": 320,
		"name": "Wailmer",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 130,
				"atk": 70,
				"def": 35,
				"spa": 70,
				"spd": 35,
				"spe": 60
		},
		"abilities": {
				"0": "Water Veil",
				"1": "Oblivious",
				"H": "Pressure"
		},
		"weightkg": 130,
		"evos": [
				"Wailord"
		],
		"eggGroups": [
				"Field",
				"Water 2"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wailmer",
		"fullname": "pokemon: Wailmer",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Wailmer",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 400,
		"weighthg": 1300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wailord: {
		"exists": true,
		"tags": [],
		"num": 321,
		"name": "Wailord",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 170,
				"atk": 90,
				"def": 45,
				"spa": 90,
				"spd": 45,
				"spe": 60
		},
		"abilities": {
				"0": "Water Veil",
				"1": "Oblivious",
				"H": "Pressure"
		},
		"weightkg": 398,
		"prevo": "Wailmer",
		"evoLevel": 40,
		"eggGroups": [
				"Field",
				"Water 2"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wailord",
		"fullname": "pokemon: Wailord",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Wailord",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 3980,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	numel: {
		"exists": true,
		"tags": [],
		"num": 322,
		"name": "Numel",
		"types": [
				"Fire",
				"Ground"
		],
		"baseStats": {
				"hp": 60,
				"atk": 60,
				"def": 40,
				"spa": 65,
				"spd": 45,
				"spe": 35
		},
		"abilities": {
				"0": "Oblivious",
				"1": "Own Tempo"
		},
		"weightkg": 24,
		"evos": [
				"Camerupt"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "numel",
		"fullname": "pokemon: Numel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Numel",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 240,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	camerupt: {
		"exists": true,
		"tags": [],
		"num": 323,
		"name": "Camerupt",
		"types": [
				"Fire",
				"Ground"
		],
		"baseStats": {
				"hp": 70,
				"atk": 100,
				"def": 70,
				"spa": 105,
				"spd": 75,
				"spe": 40
		},
		"abilities": {
				"0": "Magma Armor"
		},
		"weightkg": 220,
		"prevo": "Numel",
		"evoLevel": 33,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Camerupt-Mega"
		],
		"formeOrder": [
				"Camerupt",
				"Camerupt-Mega"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "camerupt",
		"fullname": "pokemon: Camerupt",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Camerupt",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 2200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cameruptmega: {
		"exists": true,
		"tags": [],
		"num": 323,
		"name": "Camerupt-Mega",
		"baseSpecies": "Camerupt",
		// "forme": "Mega",
		"types": [
				"Fire",
				"Ground"
		],
		"baseStats": {
				"hp": 70,
				"atk": 120,
				"def": 100,
				"spa": 145,
				"spd": 105,
				"spe": 20
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320.5,
		"eggGroups": [
				"Field"
		],
		// "requiredItem": "Cameruptite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "cameruptmega",
		"fullname": "pokemon: Camerupt-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Cameruptite"
		// ],
		"bst": 560,
		"weighthg": 3205,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Camerupt",
		// "changesFrom": "Camerupt"
	},
	torkoal: {
		"exists": true,
		"tags": [],
		"num": 324,
		"name": "Torkoal",
		"types": [
				"Fire"
		],
		"baseStats": {
				"hp": 70,
				"atk": 85,
				"def": 140,
				"spa": 85,
				"spd": 70,
				"spe": 20
		},
		"abilities": {
				"0": "White Smoke",
				"1": "Drought",
				"H": "Shell Armor"
		},
		"weightkg": 80.4,
		"eggGroups": [
				"Field"
		],
		"tier": "UU",
		"doublesTier": "DOU",
		"id": "torkoal",
		"fullname": "pokemon: Torkoal",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Torkoal",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 470,
		"weighthg": 804,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	spoink: {
		"exists": true,
		"tags": [],
		"num": 325,
		"name": "Spoink",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 60,
				"atk": 25,
				"def": 35,
				"spa": 70,
				"spd": 80,
				"spe": 60
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Own Tempo"
		},
		"weightkg": 30.6,
		"evos": [
				"Grumpig"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "spoink",
		"fullname": "pokemon: Spoink",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Spoink",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 306,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	grumpig: {
		"exists": true,
		"tags": [],
		"num": 326,
		"name": "Grumpig",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 80,
				"atk": 45,
				"def": 65,
				"spa": 90,
				"spd": 110,
				"spe": 80
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Own Tempo"
		},
		"weightkg": 71.5,
		"prevo": "Spoink",
		"evoLevel": 32,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "grumpig",
		"fullname": "pokemon: Grumpig",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Grumpig",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 470,
		"weighthg": 715,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	spinda: {
		"exists": true,
		"tags": [],
		"num": 327,
		"name": "Spinda",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 60,
				"atk": 60,
				"def": 60,
				"spa": 60,
				"spd": 60,
				"spe": 60
		},
		"abilities": {
				"0": "Own Tempo"
		},
		"weightkg": 5,
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "spinda",
		"fullname": "pokemon: Spinda",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Spinda",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 360,
		"weighthg": 50,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	trapinch: {
		"exists": true,
		"tags": [],
		"num": 328,
		"name": "Trapinch",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 45,
				"atk": 100,
				"def": 45,
				"spa": 45,
				"spd": 45,
				"spe": 10
		},
		"abilities": {
				"0": "Hyper Cutter",
				"1": "Arena Trap"
		},
		"weightkg": 15,
		"evos": [
				"Vibrava"
		],
		"eggGroups": [
				"Bug",
				"Dragon"
		],
		"tier": "LC",
		"id": "trapinch",
		"fullname": "pokemon: Trapinch",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Trapinch",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 290,
		"weighthg": 150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vibrava: {
		"exists": true,
		"tags": [],
		"num": 329,
		"name": "Vibrava",
		"types": [
				"Ground",
				"Dragon"
		],
		"baseStats": {
				"hp": 50,
				"atk": 70,
				"def": 50,
				"spa": 50,
				"spd": 50,
				"spe": 70
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 15.3,
		"prevo": "Trapinch",
		"evoLevel": 35,
		"evos": [
				"Flygon"
		],
		"eggGroups": [
				"Bug",
				"Dragon"
		],
		"tier": "NFE",
		"id": "vibrava",
		"fullname": "pokemon: Vibrava",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Vibrava",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 340,
		"weighthg": 153,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	flygon: {
		"exists": true,
		"tags": [],
		"num": 330,
		"name": "Flygon",
		"types": [
				"Ground",
				"Dragon"
		],
		"baseStats": {
				"hp": 80,
				"atk": 100,
				"def": 80,
				"spa": 80,
				"spd": 80,
				"spe": 100
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 82,
		"prevo": "Vibrava",
		"evoLevel": 45,
		"eggGroups": [
				"Bug",
				"Dragon"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "flygon",
		"fullname": "pokemon: Flygon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Flygon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 520,
		"weighthg": 820,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cacnea: {
		"exists": true,
		"tags": [],
		"num": 331,
		"name": "Cacnea",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 50,
				"atk": 85,
				"def": 40,
				"spa": 85,
				"spd": 40,
				"spe": 35
		},
		"abilities": {
				"0": "Sand Veil",
				"1": "Water Absorb"
		},
		"weightkg": 51.3,
		"evos": [
				"Cacturne"
		],
		"eggGroups": [
				"Grass",
				"Human-Like"
		],
		"tier": "LC",
		"id": "cacnea",
		"fullname": "pokemon: Cacnea",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cacnea",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 335,
		"weighthg": 513,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cacturne: {
		"exists": true,
		"tags": [],
		"num": 332,
		"name": "Cacturne",
		"types": [
				"Grass",
				"Dark"
		],
		"baseStats": {
				"hp": 70,
				"atk": 115,
				"def": 60,
				"spa": 115,
				"spd": 60,
				"spe": 55
		},
		"abilities": {
				"0": "Sand Veil",
				"1": "Water Absorb"
		},
		"weightkg": 77.4,
		"prevo": "Cacnea",
		"evoLevel": 32,
		"eggGroups": [
				"Grass",
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "cacturne",
		"fullname": "pokemon: Cacturne",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cacturne",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 475,
		"weighthg": 774,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swablu: {
		"exists": true,
		"tags": [],
		"num": 333,
		"name": "Swablu",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 45,
				"atk": 40,
				"def": 60,
				"spa": 40,
				"spd": 75,
				"spe": 50
		},
		"abilities": {
				"0": "Natural Cure",
				"1": "Cloud Nine"
		},
		"weightkg": 1.2,
		"evos": [
				"Altaria"
		],
		"eggGroups": [
				"Flying",
				"Dragon"
		],
		"tier": "LC",
		"id": "swablu",
		"fullname": "pokemon: Swablu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Swablu",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 310,
		"weighthg": 12,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	altaria: {
		"exists": true,
		"tags": [],
		"num": 334,
		"name": "Altaria",
		"types": [
				"Dragon",
				"Flying"
		],
		"baseStats": {
				"hp": 75,
				"atk": 70,
				"def": 90,
				"spa": 70,
				"spd": 105,
				"spe": 80
		},
		"abilities": {
				"0": "Natural Cure",
				"1": "Cloud Nine"
		},
		"weightkg": 20.6,
		"prevo": "Swablu",
		"evoLevel": 35,
		"eggGroups": [
				"Flying",
				"Dragon"
		],
		"otherFormes": [
				"Altaria-Mega"
		],
		"formeOrder": [
				"Altaria",
				"Altaria-Mega"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "altaria",
		"fullname": "pokemon: Altaria",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Altaria",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 206,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	altariamega: {
		"exists": true,
		"tags": [],
		"num": 334,
		"name": "Altaria-Mega",
		"baseSpecies": "Altaria",
		// "forme": "Mega",
		"types": [
				"Dragon",
				"Normal"
		],
		"baseStats": {
				"hp": 75,
				"atk": 110,
				"def": 110,
				"spa": 110,
				"spd": 105,
				"spe": 80
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 20.6,
		"eggGroups": [
				"Flying",
				"Dragon"
		],
		// "requiredItem": "Altarianite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "altariamega",
		"fullname": "pokemon: Altaria-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Altarianite"
		// ],
		"bst": 590,
		"weighthg": 206,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Altaria",
		// "changesFrom": "Altaria"
	},
	zangoose: {
		"exists": true,
		"tags": [],
		"num": 335,
		"name": "Zangoose",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 73,
				"atk": 115,
				"def": 60,
				"spa": 60,
				"spd": 60,
				"spe": 90
		},
		"abilities": {
				"0": "Immunity"
		},
		"weightkg": 40.3,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "zangoose",
		"fullname": "pokemon: Zangoose",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Zangoose",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 458,
		"weighthg": 403,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	seviper: {
		"exists": true,
		"tags": [],
		"num": 336,
		"name": "Seviper",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 73,
				"atk": 100,
				"def": 60,
				"spa": 100,
				"spd": 60,
				"spe": 65
		},
		"abilities": {
				"0": "Shed Skin"
		},
		"weightkg": 52.5,
		"eggGroups": [
				"Field",
				"Dragon"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "seviper",
		"fullname": "pokemon: Seviper",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Seviper",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 458,
		"weighthg": 525,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lunatone: {
		"exists": true,
		"tags": [],
		"num": 337,
		"name": "Lunatone",
		"types": [
				"Rock",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 55,
				"def": 65,
				"spa": 95,
				"spd": 85,
				"spe": 70
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 168,
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lunatone",
		"fullname": "pokemon: Lunatone",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Lunatone",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 460,
		"weighthg": 1680,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	solrock: {
		"exists": true,
		"tags": [],
		"num": 338,
		"name": "Solrock",
		"types": [
				"Rock",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 95,
				"def": 85,
				"spa": 55,
				"spd": 65,
				"spe": 70
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 154,
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "solrock",
		"fullname": "pokemon: Solrock",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Solrock",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 460,
		"weighthg": 1540,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	barboach: {
		"exists": true,
		"tags": [],
		"num": 339,
		"name": "Barboach",
		"types": [
				"Water",
				"Ground"
		],
		"baseStats": {
				"hp": 50,
				"atk": 48,
				"def": 43,
				"spa": 46,
				"spd": 41,
				"spe": 60
		},
		"abilities": {
				"0": "Oblivious"
		},
		"weightkg": 1.9,
		"evos": [
				"Whiscash"
		],
		"eggGroups": [
				"Water 2"
		],
		"tier": "LC",
		"id": "barboach",
		"fullname": "pokemon: Barboach",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Barboach",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 288,
		"weighthg": 19,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	whiscash: {
		"exists": true,
		"tags": [],
		"num": 340,
		"name": "Whiscash",
		"types": [
				"Water",
				"Ground"
		],
		"baseStats": {
				"hp": 110,
				"atk": 78,
				"def": 73,
				"spa": 76,
				"spd": 71,
				"spe": 60
		},
		"abilities": {
				"0": "Oblivious"
		},
		"weightkg": 23.6,
		"prevo": "Barboach",
		"evoLevel": 30,
		"eggGroups": [
				"Water 2"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "whiscash",
		"fullname": "pokemon: Whiscash",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Whiscash",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 468,
		"weighthg": 236,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	corphish: {
		"exists": true,
		"tags": [],
		"num": 341,
		"name": "Corphish",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 43,
				"atk": 80,
				"def": 65,
				"spa": 50,
				"spd": 35,
				"spe": 35
		},
		"abilities": {
				"0": "Hyper Cutter",
				"1": "Shell Armor"
		},
		"weightkg": 11.5,
		"evos": [
				"Crawdaunt"
		],
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"tier": "LC",
		"id": "corphish",
		"fullname": "pokemon: Corphish",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Corphish",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 308,
		"weighthg": 115,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	crawdaunt: {
		"exists": true,
		"tags": [],
		"num": 342,
		"name": "Crawdaunt",
		"types": [
				"Water",
				"Dark"
		],
		"baseStats": {
				"hp": 63,
				"atk": 120,
				"def": 85,
				"spa": 90,
				"spd": 55,
				"spe": 55
		},
		"abilities": {
				"0": "Hyper Cutter",
				"1": "Shell Armor"
		},
		"weightkg": 32.8,
		"prevo": "Corphish",
		"evoLevel": 30,
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "crawdaunt",
		"fullname": "pokemon: Crawdaunt",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Crawdaunt",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 468,
		"weighthg": 328,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	baltoy: {
		"exists": true,
		"tags": [],
		"num": 343,
		"name": "Baltoy",
		"types": [
				"Ground",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 40,
				"atk": 40,
				"def": 55,
				"spa": 40,
				"spd": 70,
				"spe": 55
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 21.5,
		"evos": [
				"Claydol"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "baltoy",
		"fullname": "pokemon: Baltoy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Baltoy",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 300,
		"weighthg": 215,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	claydol: {
		"exists": true,
		"tags": [],
		"num": 344,
		"name": "Claydol",
		"types": [
				"Ground",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 60,
				"atk": 70,
				"def": 105,
				"spa": 70,
				"spd": 120,
				"spe": 75
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 108,
		"prevo": "Baltoy",
		"evoLevel": 36,
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "claydol",
		"fullname": "pokemon: Claydol",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Claydol",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 500,
		"weighthg": 1080,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lileep: {
		"exists": true,
		"tags": [],
		"num": 345,
		"name": "Lileep",
		"types": [
				"Rock",
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 66,
				"atk": 41,
				"def": 77,
				"spa": 61,
				"spd": 87,
				"spe": 23
		},
		"abilities": {
				"0": "Suction Cups"
		},
		"weightkg": 23.8,
		"evos": [
				"Cradily"
		],
		"eggGroups": [
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lileep",
		"fullname": "pokemon: Lileep",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Lileep",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 355,
		"weighthg": 238,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cradily: {
		"exists": true,
		"tags": [],
		"num": 346,
		"name": "Cradily",
		"types": [
				"Rock",
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 86,
				"atk": 81,
				"def": 97,
				"spa": 81,
				"spd": 107,
				"spe": 43
		},
		"abilities": {
				"0": "Suction Cups"
		},
		"weightkg": 60.4,
		"prevo": "Lileep",
		"evoLevel": 40,
		"eggGroups": [
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "cradily",
		"fullname": "pokemon: Cradily",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Cradily",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 495,
		"weighthg": 604,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	anorith: {
		"exists": true,
		"tags": [],
		"num": 347,
		"name": "Anorith",
		"types": [
				"Rock",
				"Bug"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 45,
				"atk": 95,
				"def": 50,
				"spa": 40,
				"spd": 50,
				"spe": 75
		},
		"abilities": {
				"0": "Battle Armor",
				"1": "Swift Swim"
		},
		"weightkg": 12.5,
		"evos": [
				"Armaldo"
		],
		"eggGroups": [
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "anorith",
		"fullname": "pokemon: Anorith",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Anorith",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 355,
		"weighthg": 125,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	armaldo: {
		"exists": true,
		"tags": [],
		"num": 348,
		"name": "Armaldo",
		"types": [
				"Rock",
				"Bug"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 75,
				"atk": 125,
				"def": 100,
				"spa": 70,
				"spd": 80,
				"spe": 45
		},
		"abilities": {
				"0": "Battle Armor",
				"1": "Swift Swim"
		},
		"weightkg": 68.2,
		"prevo": "Anorith",
		"evoLevel": 40,
		"eggGroups": [
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "armaldo",
		"fullname": "pokemon: Armaldo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Armaldo",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 495,
		"weighthg": 682,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	feebas: {
		"exists": true,
		"tags": [],
		"num": 349,
		"name": "Feebas",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 20,
				"atk": 15,
				"def": 20,
				"spa": 10,
				"spd": 55,
				"spe": 80
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Oblivious"
		},
		"weightkg": 7.4,
		"evos": [
				"Milotic"
		],
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "LC",
		"id": "feebas",
		"fullname": "pokemon: Feebas",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Feebas",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 200,
		"weighthg": 74,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	milotic: {
		"exists": true,
		"tags": [],
		"num": 350,
		"name": "Milotic",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 95,
				"atk": 60,
				"def": 79,
				"spa": 100,
				"spd": 125,
				"spe": 81
		},
		"abilities": {
				"0": "Marvel Scale",
				"1": "Cute Charm"
		},
		"weightkg": 162,
		"prevo": "Feebas",
		"evoType": "trade",
		"evoItem": "Prism Scale",
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "milotic",
		"fullname": "pokemon: Milotic",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Milotic",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 540,
		"weighthg": 1620,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	castform: {
		"exists": true,
		"tags": [],
		"num": 351,
		"name": "Castform",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 70,
				"atk": 70,
				"def": 70,
				"spa": 70,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Forecast"
		},
		"weightkg": 0.8,
		"eggGroups": [
				"Fairy",
				"Amorphous"
		],
		"otherFormes": [
				"Castform-Sunny",
				"Castform-Rainy",
				"Castform-Snowy"
		],
		"formeOrder": [
				"Castform",
				"Castform-Sunny",
				"Castform-Rainy",
				"Castform-Snowy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "castform",
		"fullname": "pokemon: Castform",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Castform",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 8,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	castformsunny: {
		"exists": true,
		"tags": [],
		"num": 351,
		"name": "Castform-Sunny",
		"baseSpecies": "Castform",
		"forme": "Sunny",
		"types": [
				"Fire"
		],
		"baseStats": {
				"hp": 70,
				"atk": 70,
				"def": 70,
				"spa": 70,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Forecast"
		},
		"weightkg": 0.8,
		"eggGroups": [
				"Fairy",
				"Amorphous"
		],
		"requiredAbility": "Forecast",
		// "battleOnly": "Castform",
		"isNonstandard": null,
		"id": "castformsunny",
		"fullname": "pokemon: Castform-Sunny",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 8,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Castform"
	},
	castformrainy: {
		"exists": true,
		"tags": [],
		"num": 351,
		"name": "Castform-Rainy",
		"baseSpecies": "Castform",
		"forme": "Rainy",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 70,
				"atk": 70,
				"def": 70,
				"spa": 70,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Forecast"
		},
		"weightkg": 0.8,
		"eggGroups": [
				"Fairy",
				"Amorphous"
		],
		"requiredAbility": "Forecast",
		// "battleOnly": "Castform",
		"isNonstandard": null,
		"id": "castformrainy",
		"fullname": "pokemon: Castform-Rainy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 8,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Castform"
	},
	castformsnowy: {
		"exists": true,
		"tags": [],
		"num": 351,
		"name": "Castform-Snowy",
		"baseSpecies": "Castform",
		"forme": "Snowy",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 70,
				"atk": 70,
				"def": 70,
				"spa": 70,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Forecast"
		},
		"weightkg": 0.8,
		"eggGroups": [
				"Fairy",
				"Amorphous"
		],
		"requiredAbility": "Forecast",
		// "battleOnly": "Castform",
		"isNonstandard": null,
		"id": "castformsnowy",
		"fullname": "pokemon: Castform-Snowy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 8,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Castform"
	},
	kecleon: {
		"exists": true,
		"tags": [],
		"num": 352,
		"name": "Kecleon",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 60,
				"atk": 90,
				"def": 70,
				"spa": 60,
				"spd": 120,
				"spe": 40
		},
		"abilities": {
				"0": "Color Change"
		},
		"weightkg": 22,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kecleon",
		"fullname": "pokemon: Kecleon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Kecleon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 440,
		"weighthg": 220,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shuppet: {
		"exists": true,
		"tags": [],
		"num": 353,
		"name": "Shuppet",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 44,
				"atk": 75,
				"def": 35,
				"spa": 63,
				"spd": 33,
				"spe": 45
		},
		"abilities": {
				"0": "Insomnia"
		},
		"weightkg": 2.3,
		"evos": [
				"Banette"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "shuppet",
		"fullname": "pokemon: Shuppet",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Shuppet",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 295,
		"weighthg": 23,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	banette: {
		"exists": true,
		"tags": [],
		"num": 354,
		"name": "Banette",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 64,
				"atk": 115,
				"def": 65,
				"spa": 83,
				"spd": 63,
				"spe": 65
		},
		"abilities": {
				"0": "Insomnia"
		},
		"weightkg": 12.5,
		"prevo": "Shuppet",
		"evoLevel": 37,
		"eggGroups": [
				"Amorphous"
		],
		"otherFormes": [
				"Banette-Mega"
		],
		"formeOrder": [
				"Banette",
				"Banette-Mega"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "banette",
		"fullname": "pokemon: Banette",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Banette",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 455,
		"weighthg": 125,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	banettemega: {
		"exists": true,
		"tags": [],
		"num": 354,
		"name": "Banette-Mega",
		"baseSpecies": "Banette",
		// "forme": "Mega",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 64,
				"atk": 165,
				"def": 75,
				"spa": 93,
				"spd": 83,
				"spe": 75
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 13,
		"eggGroups": [
				"Amorphous"
		],
		// "requiredItem": "Banettite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "banettemega",
		"fullname": "pokemon: Banette-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Banettite"
		// ],
		"bst": 555,
		"weighthg": 130,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Banette",
		// "changesFrom": "Banette"
	},
	duskull: {
		"exists": true,
		"tags": [],
		"num": 355,
		"name": "Duskull",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 20,
				"atk": 40,
				"def": 90,
				"spa": 30,
				"spd": 90,
				"spe": 25
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 15,
		"evos": [
				"Dusclops"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "duskull",
		"fullname": "pokemon: Duskull",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Duskull",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 295,
		"weighthg": 150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dusclops: {
		"exists": true,
		"tags": [],
		"num": 356,
		"name": "Dusclops",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 40,
				"atk": 70,
				"def": 130,
				"spa": 60,
				"spd": 130,
				"spe": 25
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 30.6,
		"prevo": "Duskull",
		"evoLevel": 37,
		"evos": [
				"Dusknoir"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "NFE",
		"id": "dusclops",
		"fullname": "pokemon: Dusclops",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dusclops",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 455,
		"weighthg": 306,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tropius: {
		"exists": true,
		"tags": [],
		"num": 357,
		"name": "Tropius",
		"types": [
				"Grass",
				"Flying"
		],
		"baseStats": {
				"hp": 99,
				"atk": 68,
				"def": 83,
				"spa": 72,
				"spd": 87,
				"spe": 51
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 100,
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "tropius",
		"fullname": "pokemon: Tropius",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tropius",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 1000,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chimecho: {
		"exists": true,
		"tags": [],
		"num": 358,
		"name": "Chimecho",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 75,
				"atk": 50,
				"def": 80,
				"spa": 95,
				"spd": 90,
				"spe": 65
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 1,
		"prevo": "Chingling",
		"evoType": "levelFriendship",
		"evoCondition": "at night",
		"eggGroups": [
				"Amorphous"
		],
		"canHatch": true,
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "chimecho",
		"fullname": "pokemon: Chimecho",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Chimecho",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 455,
		"weighthg": 10,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	absol: {
		"exists": true,
		"tags": [],
		"num": 359,
		"name": "Absol",
		"types": [
				"Dark"
		],
		"baseStats": {
				"hp": 65,
				"atk": 130,
				"def": 60,
				"spa": 75,
				"spd": 60,
				"spe": 75
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 47,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Absol-Mega"
		],
		"formeOrder": [
				"Absol",
				"Absol-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "absol",
		"fullname": "pokemon: Absol",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Absol",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 465,
		"weighthg": 470,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	absolmega: {
		"exists": true,
		"tags": [],
		"num": 359,
		"name": "Absol-Mega",
		"baseSpecies": "Absol",
		// "forme": "Mega",
		"types": [
				"Dark"
		],
		"baseStats": {
				"hp": 65,
				"atk": 150,
				"def": 60,
				"spa": 115,
				"spd": 60,
				"spe": 115
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 49,
		"eggGroups": [
				"Field"
		],
		// "requiredItem": "Absolite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "absolmega",
		"fullname": "pokemon: Absol-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Absolite"
		// ],
		"bst": 565,
		"weighthg": 490,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Absol",
		// "changesFrom": "Absol"
	},
	wynaut: {
		"exists": true,
		"tags": [],
		"num": 360,
		"name": "Wynaut",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 95,
				"atk": 23,
				"def": 48,
				"spa": 23,
				"spd": 48,
				"spe": 23
		},
		"abilities": {
				"0": "Shadow Tag"
		},
		"weightkg": 14,
		"evos": [
				"Wobbuffet"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wynaut",
		"fullname": "pokemon: Wynaut",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Wynaut",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 260,
		"weighthg": 140,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	snorunt: {
		"exists": true,
		"tags": [],
		"num": 361,
		"name": "Snorunt",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 50,
				"atk": 50,
				"def": 50,
				"spa": 50,
				"spd": 50,
				"spe": 50
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 16.8,
		"evos": [
				"Glalie",
				"Froslass"
		],
		"eggGroups": [
				"Fairy",
				"Mineral"
		],
		"tier": "LC",
		"id": "snorunt",
		"fullname": "pokemon: Snorunt",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Snorunt",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 168,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	glalie: {
		"exists": true,
		"tags": [],
		"num": 362,
		"name": "Glalie",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 80,
				"atk": 80,
				"def": 80,
				"spa": 80,
				"spd": 80,
				"spe": 80
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 256.5,
		"prevo": "Snorunt",
		"evoLevel": 42,
		"eggGroups": [
				"Fairy",
				"Mineral"
		],
		"otherFormes": [
				"Glalie-Mega"
		],
		"formeOrder": [
				"Glalie",
				"Glalie-Mega"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "glalie",
		"fullname": "pokemon: Glalie",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Glalie",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 2565,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	glaliemega: {
		"exists": true,
		"tags": [],
		"num": 362,
		"name": "Glalie-Mega",
		"baseSpecies": "Glalie",
		// "forme": "Mega",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 80,
				"atk": 120,
				"def": 80,
				"spa": 120,
				"spd": 80,
				"spe": 100
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 350.2,
		"eggGroups": [
				"Fairy",
				"Mineral"
		],
		// "requiredItem": "Glalitite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "glaliemega",
		"fullname": "pokemon: Glalie-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Glalitite"
		// ],
		"bst": 580,
		"weighthg": 3502,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Glalie",
		// "changesFrom": "Glalie"
	},
	spheal: {
		"exists": true,
		"tags": [],
		"num": 363,
		"name": "Spheal",
		"types": [
				"Ice",
				"Water"
		],
		"baseStats": {
				"hp": 70,
				"atk": 40,
				"def": 50,
				"spa": 55,
				"spd": 50,
				"spe": 25
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Oblivious"
		},
		"weightkg": 39.5,
		"evos": [
				"Sealeo"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "spheal",
		"fullname": "pokemon: Spheal",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Spheal",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 290,
		"weighthg": 395,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sealeo: {
		"exists": true,
		"tags": [],
		"num": 364,
		"name": "Sealeo",
		"types": [
				"Ice",
				"Water"
		],
		"baseStats": {
				"hp": 90,
				"atk": 60,
				"def": 70,
				"spa": 75,
				"spd": 70,
				"spe": 45
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Oblivious"
		},
		"weightkg": 87.6,
		"prevo": "Spheal",
		"evoLevel": 32,
		"evos": [
				"Walrein"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "sealeo",
		"fullname": "pokemon: Sealeo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Sealeo",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 876,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	walrein: {
		"exists": true,
		"tags": [],
		"num": 365,
		"name": "Walrein",
		"types": [
				"Ice",
				"Water"
		],
		"baseStats": {
				"hp": 110,
				"atk": 80,
				"def": 90,
				"spa": 95,
				"spd": 90,
				"spe": 65
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Oblivious"
		},
		"weightkg": 150.6,
		"prevo": "Sealeo",
		"evoLevel": 44,
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "walrein",
		"fullname": "pokemon: Walrein",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Walrein",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 530,
		"weighthg": 1506,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	clamperl: {
		"exists": true,
		"tags": [],
		"num": 366,
		"name": "Clamperl",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 35,
				"atk": 64,
				"def": 85,
				"spa": 74,
				"spd": 55,
				"spe": 32
		},
		"abilities": {
				"0": "Shell Armor"
		},
		"weightkg": 52.5,
		"evos": [
				"Huntail",
				"Gorebyss"
		],
		"eggGroups": [
				"Water 1"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "clamperl",
		"fullname": "pokemon: Clamperl",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Clamperl",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 345,
		"weighthg": 525,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	huntail: {
		"exists": true,
		"tags": [],
		"num": 367,
		"name": "Huntail",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 55,
				"atk": 104,
				"def": 105,
				"spa": 94,
				"spd": 75,
				"spe": 52
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Veil"
		},
		"weightkg": 27,
		"prevo": "Clamperl",
		"evoType": "trade",
		"evoItem": "Deep Sea Tooth",
		"eggGroups": [
				"Water 1"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "huntail",
		"fullname": "pokemon: Huntail",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Huntail",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 270,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gorebyss: {
		"exists": true,
		"tags": [],
		"num": 368,
		"name": "Gorebyss",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 55,
				"atk": 84,
				"def": 105,
				"spa": 114,
				"spd": 75,
				"spe": 52
		},
		"abilities": {
				"0": "Swift Swim"
		},
		"weightkg": 22.6,
		"prevo": "Clamperl",
		"evoType": "trade",
		"evoItem": "Deep Sea Scale",
		"eggGroups": [
				"Water 1"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "gorebyss",
		"fullname": "pokemon: Gorebyss",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Gorebyss",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 226,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	relicanth: {
		"exists": true,
		"tags": [],
		"num": 369,
		"name": "Relicanth",
		"types": [
				"Water",
				"Rock"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 100,
				"atk": 90,
				"def": 130,
				"spa": 45,
				"spd": 65,
				"spe": 55
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Rock Head",
				"H": "Sturdy"
		},
		"weightkg": 23.4,
		"eggGroups": [
				"Water 1",
				"Water 2"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "relicanth",
		"fullname": "pokemon: Relicanth",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Relicanth",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"bst": 485,
		"weighthg": 234,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	luvdisc: {
		"exists": true,
		"tags": [],
		"num": 370,
		"name": "Luvdisc",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 43,
				"atk": 30,
				"def": 55,
				"spa": 40,
				"spd": 65,
				"spe": 97
		},
		"abilities": {
				"0": "Swift Swim"
		},
		"weightkg": 8.7,
		"eggGroups": [
				"Water 2"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "luvdisc",
		"fullname": "pokemon: Luvdisc",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Luvdisc",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"bst": 330,
		"weighthg": 87,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bagon: {
		"exists": true,
		"tags": [],
		"num": 371,
		"name": "Bagon",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 45,
				"atk": 75,
				"def": 60,
				"spa": 40,
				"spd": 30,
				"spe": 50
		},
		"abilities": {
				"0": "Rock Head"
		},
		"weightkg": 42.1,
		"evos": [
				"Shelgon"
		],
		"eggGroups": [
				"Dragon"
		],
		"tier": "LC",
		"id": "bagon",
		"fullname": "pokemon: Bagon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bagon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 421,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shelgon: {
		"exists": true,
		"tags": [],
		"num": 372,
		"name": "Shelgon",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 65,
				"atk": 95,
				"def": 100,
				"spa": 60,
				"spd": 50,
				"spe": 50
		},
		"abilities": {
				"0": "Rock Head"
		},
		"weightkg": 110.5,
		"prevo": "Bagon",
		"evoLevel": 30,
		"evos": [
				"Salamence"
		],
		"eggGroups": [
				"Dragon"
		],
		"tier": "NFE",
		"id": "shelgon",
		"fullname": "pokemon: Shelgon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Shelgon",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 1105,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	salamence: {
		"exists": true,
		"tags": [],
		"num": 373,
		"name": "Salamence",
		"types": [
				"Dragon",
				"Flying"
		],
		"baseStats": {
				"hp": 95,
				"atk": 135,
				"def": 80,
				"spa": 110,
				"spd": 80,
				"spe": 100
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 102.6,
		"prevo": "Shelgon",
		"evoLevel": 50,
		"eggGroups": [
				"Dragon"
		],
		"otherFormes": [
				"Salamence-Mega"
		],
		"formeOrder": [
				"Salamence",
				"Salamence-Mega"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "salamence",
		"fullname": "pokemon: Salamence",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Salamence",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 1026,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	salamencemega: {
		"exists": true,
		"tags": [],
		"num": 373,
		"name": "Salamence-Mega",
		"baseSpecies": "Salamence",
		// "forme": "Mega",
		"types": [
				"Dragon",
				"Flying"
		],
		"baseStats": {
				"hp": 95,
				"atk": 145,
				"def": 130,
				"spa": 120,
				"spd": 90,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 112.6,
		"eggGroups": [
				"Dragon"
		],
		// "requiredItem": "Salamencite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "salamencemega",
		"fullname": "pokemon: Salamence-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Salamencite"
		// ],
		"bst": 700,
		"weighthg": 1126,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Salamence",
		// "changesFrom": "Salamence"
	},
	beldum: {
		"exists": true,
		"tags": [],
		"num": 374,
		"name": "Beldum",
		"types": [
				"Steel",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 40,
				"atk": 55,
				"def": 80,
				"spa": 35,
				"spd": 60,
				"spe": 30
		},
		"abilities": {
				"0": "Clear Body"
		},
		"weightkg": 95.2,
		"evos": [
				"Metang"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "LC",
		"id": "beldum",
		"fullname": "pokemon: Beldum",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Beldum",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 300,
		"weighthg": 952,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	metang: {
		"exists": true,
		"tags": [],
		"num": 375,
		"name": "Metang",
		"types": [
				"Steel",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 60,
				"atk": 75,
				"def": 100,
				"spa": 55,
				"spd": 80,
				"spe": 50
		},
		"abilities": {
				"0": "Clear Body"
		},
		"weightkg": 202.5,
		"prevo": "Beldum",
		"evoLevel": 20,
		"evos": [
				"Metagross"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "NFE",
		"id": "metang",
		"fullname": "pokemon: Metang",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Metang",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 420,
		"weighthg": 2025,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	metagross: {
		"exists": true,
		"tags": [],
		"num": 376,
		"name": "Metagross",
		"types": [
				"Steel",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 135,
				"def": 130,
				"spa": 95,
				"spd": 90,
				"spe": 70
		},
		"abilities": {
				"0": "Clear Body"
		},
		"weightkg": 550,
		"prevo": "Metang",
		"evoLevel": 45,
		"eggGroups": [
				"Mineral"
		],
		"otherFormes": [
				"Metagross-Mega"
		],
		"formeOrder": [
				"Metagross",
				"Metagross-Mega"
		],
		"tier": "UU",
		"doublesTier": "DUU",
		"id": "metagross",
		"fullname": "pokemon: Metagross",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Metagross",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 5500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	metagrossmega: {
		"exists": true,
		"tags": [],
		"num": 376,
		"name": "Metagross-Mega",
		"baseSpecies": "Metagross",
		// "forme": "Mega",
		"types": [
				"Steel",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 145,
				"def": 150,
				"spa": 105,
				"spd": 110,
				"spe": 110
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 942.9,
		"eggGroups": [
				"Mineral"
		],
		// "requiredItem": "Metagrossite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "metagrossmega",
		"fullname": "pokemon: Metagross-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Metagrossite"
		// ],
		"bst": 700,
		"weighthg": 9429,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Metagross",
		// "changesFrom": "Metagross"
	},
	regirock: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 377,
		"name": "Regirock",
		"types": [
				"Rock"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 100,
				"def": 200,
				"spa": 50,
				"spd": 100,
				"spe": 50
		},
		"abilities": {
				"0": "Clear Body",
				"1": "Sturdy"
		},
		"weightkg": 230,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "regirock",
		"fullname": "pokemon: Regirock",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Regirock",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 2300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	regice: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 378,
		"name": "Regice",
		"types": [
				"Ice"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 50,
				"def": 100,
				"spa": 100,
				"spd": 200,
				"spe": 50
		},
		"abilities": {
				"0": "Clear Body"
		},
		"weightkg": 175,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "regice",
		"fullname": "pokemon: Regice",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Regice",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 1750,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	registeel: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 379,
		"name": "Registeel",
		"types": [
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 75,
				"def": 150,
				"spa": 75,
				"spd": 150,
				"spe": 50
		},
		"abilities": {
				"0": "Clear Body"
		},
		"weightkg": 205,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "registeel",
		"fullname": "pokemon: Registeel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Registeel",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 2050,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	latias: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 380,
		"name": "Latias",
		"types": [
				"Dragon",
				"Psychic"
		],
		"gender": "F",
		"baseStats": {
				"hp": 80,
				"atk": 80,
				"def": 90,
				"spa": 110,
				"spd": 130,
				"spe": 110
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 40,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Latias-Mega"
		],
		"formeOrder": [
				"Latias",
				"Latias-Mega"
		],
		"tier": "UUBL",
		"doublesTier": "(DUU)",
		"id": "latias",
		"fullname": "pokemon: Latias",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Latias",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 600,
		"weighthg": 400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	latiasmega: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 380,
		"name": "Latias-Mega",
		"baseSpecies": "Latias",
		// "forme": "Mega",
		"types": [
				"Dragon",
				"Psychic"
		],
		"gender": "F",
		"baseStats": {
				"hp": 80,
				"atk": 100,
				"def": 120,
				"spa": 140,
				"spd": 150,
				"spe": 110
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 52,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Latiasite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "latiasmega",
		"fullname": "pokemon: Latias-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		// "requiredItems": [
		// 		"Latiasite"
		// ],
		"bst": 700,
		"weighthg": 520,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Latias",
		// "changesFrom": "Latias"
	},
	latios: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 381,
		"name": "Latios",
		"types": [
				"Dragon",
				"Psychic"
		],
		"gender": "M",
		"baseStats": {
				"hp": 80,
				"atk": 90,
				"def": 80,
				"spa": 130,
				"spd": 110,
				"spe": 110
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 60,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Latios-Mega"
		],
		"formeOrder": [
				"Latios",
				"Latios-Mega"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "latios",
		"fullname": "pokemon: Latios",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Latios",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 600,
		"weighthg": 600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	latiosmega: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 381,
		"name": "Latios-Mega",
		"baseSpecies": "Latios",
		// "forme": "Mega",
		"types": [
				"Dragon",
				"Psychic"
		],
		"gender": "M",
		"baseStats": {
				"hp": 80,
				"atk": 130,
				"def": 100,
				"spa": 160,
				"spd": 120,
				"spe": 110
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 70,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Latiosite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "latiosmega",
		"fullname": "pokemon: Latios-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		// "requiredItems": [
		// 		"Latiosite"
		// ],
		"bst": 700,
		"weighthg": 700,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Latios",
		// "changesFrom": "Latios"
	},
	kyogre: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 382,
		"name": "Kyogre",
		"types": [
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 90,
				"spa": 150,
				"spd": 140,
				"spe": 90
		},
		"abilities": {
				"0": "Drizzle"
		},
		"weightkg": 352,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Kyogre-Primal"
		],
		"formeOrder": [
				"Kyogre",
				"Kyogre-Primal"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "kyogre",
		"fullname": "pokemon: Kyogre",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Kyogre",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 670,
		"weighthg": 3520,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kyogreprimal: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 382,
		"name": "Kyogre-Primal",
		"baseSpecies": "Kyogre",
		"forme": "Primal",
		"types": [
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 150,
				"def": 90,
				"spa": 180,
				"spd": 160,
				"spe": 90
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 430,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Blue Orb",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kyogreprimal",
		"fullname": "pokemon: Kyogre-Primal",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Blue Orb"
		// ],
		"bst": 770,
		"weighthg": 4300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Kyogre",
		"isPrimal": true
	},
	groudon: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 383,
		"name": "Groudon",
		"types": [
				"Ground"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 150,
				"def": 140,
				"spa": 100,
				"spd": 90,
				"spe": 90
		},
		"abilities": {
				"0": "Drought"
		},
		"weightkg": 950,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Groudon-Primal"
		],
		"formeOrder": [
				"Groudon",
				"Groudon-Primal"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "groudon",
		"fullname": "pokemon: Groudon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Groudon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 670,
		"weighthg": 9500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	groudonprimal: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 383,
		"name": "Groudon-Primal",
		"baseSpecies": "Groudon",
		"forme": "Primal",
		"types": [
				"Ground",
				"Fire"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 180,
				"def": 160,
				"spa": 150,
				"spd": 90,
				"spe": 90
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 999.7,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Red Orb",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "groudonprimal",
		"fullname": "pokemon: Groudon-Primal",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Red Orb"
		// ],
		"bst": 770,
		"weighthg": 9997,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Groudon",
		"isPrimal": true
	},
	rayquaza: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 384,
		"name": "Rayquaza",
		"types": [
				"Dragon",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 105,
				"atk": 150,
				"def": 90,
				"spa": 150,
				"spd": 90,
				"spe": 95
		},
		"abilities": {
				"0": "Air Lock"
		},
		"weightkg": 206.5,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Rayquaza-Mega"
		],
		"formeOrder": [
				"Rayquaza",
				"Rayquaza-Mega"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "rayquaza",
		"fullname": "pokemon: Rayquaza",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Rayquaza",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 2065,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rayquazamega: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 384,
		"name": "Rayquaza-Mega",
		"baseSpecies": "Rayquaza",
		// "forme": "Mega",
		"types": [
				"Dragon",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 105,
				"atk": 180,
				"def": 100,
				"spa": 180,
				"spd": 100,
				"spe": 115
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 392,
		"eggGroups": [
				"Undiscovered"
		],
		"requiredMove": "Dragon Ascent",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "rayquazamega",
		"fullname": "pokemon: Rayquaza-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 780,
		"weighthg": 3920,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Rayquaza",
		// "changesFrom": "Rayquaza"
	},
	jirachi: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 385,
		"name": "Jirachi",
		"types": [
				"Steel",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 100,
				"spa": 100,
				"spd": 100,
				"spe": 100
		},
		"abilities": {
				"0": "Serene Grace"
		},
		"weightkg": 1.1,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "jirachi",
		"fullname": "pokemon: Jirachi",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Jirachi",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 11,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	deoxys: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 386,
		"name": "Deoxys",
		"baseForme": "Normal",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 150,
				"def": 50,
				"spa": 150,
				"spd": 50,
				"spe": 150
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 60.8,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Deoxys-Attack",
				"Deoxys-Defense",
				"Deoxys-Speed"
		],
		"formeOrder": [
				"Deoxys",
				"Deoxys-Attack",
				"Deoxys-Defense",
				"Deoxys-Speed"
		],
		"tier": "Uber",
		"doublesTier": "DUU",
		"id": "deoxys",
		"fullname": "pokemon: Deoxys",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Deoxys",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 608,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	deoxysattack: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 386,
		"name": "Deoxys-Attack",
		"baseSpecies": "Deoxys",
		"forme": "Attack",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 180,
				"def": 20,
				"spa": 180,
				"spd": 20,
				"spe": 150
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 60.8,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Deoxys",
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "deoxysattack",
		"fullname": "pokemon: Deoxys-Attack",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 608,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	deoxysdefense: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 386,
		"name": "Deoxys-Defense",
		"baseSpecies": "Deoxys",
		"forme": "Defense",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 70,
				"def": 160,
				"spa": 70,
				"spd": 160,
				"spe": 90
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 60.8,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Deoxys",
		"tier": "NUBL",
		"doublesTier": "(DUU)",
		"id": "deoxysdefense",
		"fullname": "pokemon: Deoxys-Defense",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 608,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	deoxysspeed: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 386,
		"name": "Deoxys-Speed",
		"baseSpecies": "Deoxys",
		"forme": "Speed",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 95,
				"def": 90,
				"spa": 95,
				"spd": 90,
				"spe": 180
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 60.8,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Deoxys",
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "deoxysspeed",
		"fullname": "pokemon: Deoxys-Speed",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 608,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	turtwig: {
		"exists": true,
		"tags": [],
		"num": 387,
		"name": "Turtwig",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 55,
				"atk": 68,
				"def": 64,
				"spa": 45,
				"spd": 55,
				"spe": 31
		},
		"abilities": {
				"0": "Overgrow",
				"1": "Shell Armor"
		},
		"weightkg": 10.2,
		"evos": [
				"Grotle"
		],
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "LC",
		"id": "turtwig",
		"fullname": "pokemon: Turtwig",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Turtwig",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 318,
		"weighthg": 102,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	grotle: {
		"exists": true,
		"tags": [],
		"num": 388,
		"name": "Grotle",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 75,
				"atk": 89,
				"def": 85,
				"spa": 55,
				"spd": 65,
				"spe": 36
		},
		"abilities": {
				"0": "Overgrow",
				"1": "Shell Armor"
		},
		"weightkg": 97,
		"prevo": "Turtwig",
		"evoLevel": 18,
		"evos": [
				"Torterra"
		],
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "NFE",
		"id": "grotle",
		"fullname": "pokemon: Grotle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Grotle",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 970,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	torterra: {
		"exists": true,
		"tags": [],
		"num": 389,
		"name": "Torterra",
		"types": [
				"Grass",
				"Ground"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 95,
				"atk": 109,
				"def": 105,
				"spa": 75,
				"spd": 85,
				"spe": 56
		},
		"abilities": {
				"0": "Overgrow",
				"1": "Shell Armor"
		},
		"weightkg": 310,
		"prevo": "Grotle",
		"evoLevel": 32,
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "torterra",
		"fullname": "pokemon: Torterra",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Torterra",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 3100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chimchar: {
		"exists": true,
		"tags": [],
		"num": 390,
		"name": "Chimchar",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 44,
				"atk": 58,
				"def": 44,
				"spa": 58,
				"spd": 44,
				"spe": 61
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 6.2,
		"evos": [
				"Monferno"
		],
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"tier": "LC",
		"id": "chimchar",
		"fullname": "pokemon: Chimchar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Chimchar",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 309,
		"weighthg": 62,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	monferno: {
		"exists": true,
		"tags": [],
		"num": 391,
		"name": "Monferno",
		"types": [
				"Fire",
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 64,
				"atk": 78,
				"def": 52,
				"spa": 78,
				"spd": 52,
				"spe": 81
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 22,
		"prevo": "Chimchar",
		"evoLevel": 14,
		"evos": [
				"Infernape"
		],
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"tier": "NFE",
		"id": "monferno",
		"fullname": "pokemon: Monferno",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Monferno",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 220,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	infernape: {
		"exists": true,
		"tags": [],
		"num": 392,
		"name": "Infernape",
		"types": [
				"Fire",
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 76,
				"atk": 104,
				"def": 71,
				"spa": 104,
				"spd": 71,
				"spe": 108
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 55,
		"prevo": "Monferno",
		"evoLevel": 36,
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "infernape",
		"fullname": "pokemon: Infernape",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Infernape",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 534,
		"weighthg": 550,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	piplup: {
		"exists": true,
		"tags": [],
		"num": 393,
		"name": "Piplup",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 53,
				"atk": 51,
				"def": 53,
				"spa": 61,
				"spd": 56,
				"spe": 40
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 5.2,
		"evos": [
				"Prinplup"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "LC",
		"id": "piplup",
		"fullname": "pokemon: Piplup",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Piplup",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 314,
		"weighthg": 52,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	prinplup: {
		"exists": true,
		"tags": [],
		"num": 394,
		"name": "Prinplup",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 64,
				"atk": 66,
				"def": 68,
				"spa": 81,
				"spd": 76,
				"spe": 50
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 23,
		"prevo": "Piplup",
		"evoLevel": 16,
		"evos": [
				"Empoleon"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "NFE",
		"id": "prinplup",
		"fullname": "pokemon: Prinplup",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Prinplup",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 230,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	empoleon: {
		"exists": true,
		"tags": [],
		"num": 395,
		"name": "Empoleon",
		"types": [
				"Water",
				"Steel"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 84,
				"atk": 86,
				"def": 88,
				"spa": 111,
				"spd": 101,
				"spe": 60
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 84.5,
		"prevo": "Prinplup",
		"evoLevel": 36,
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "empoleon",
		"fullname": "pokemon: Empoleon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Empoleon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 845,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	starly: {
		"exists": true,
		"tags": [],
		"num": 396,
		"name": "Starly",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 40,
				"atk": 55,
				"def": 30,
				"spa": 30,
				"spd": 30,
				"spe": 60
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 2,
		"evos": [
				"Staravia"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "LC",
		"id": "starly",
		"fullname": "pokemon: Starly",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Starly",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 245,
		"weighthg": 20,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	staravia: {
		"exists": true,
		"tags": [],
		"num": 397,
		"name": "Staravia",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 55,
				"atk": 75,
				"def": 50,
				"spa": 40,
				"spd": 40,
				"spe": 80
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 15.5,
		"prevo": "Starly",
		"evoLevel": 14,
		"evos": [
				"Staraptor"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "NFE",
		"id": "staravia",
		"fullname": "pokemon: Staravia",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Staravia",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 340,
		"weighthg": 155,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	staraptor: {
		"exists": true,
		"tags": [],
		"num": 398,
		"name": "Staraptor",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 85,
				"atk": 120,
				"def": 70,
				"spa": 50,
				"spd": 60,
				"spe": 100
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 24.9,
		"prevo": "Staravia",
		"evoLevel": 34,
		"eggGroups": [
				"Flying"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "staraptor",
		"fullname": "pokemon: Staraptor",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Staraptor",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 249,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bidoof: {
		"exists": true,
		"tags": [],
		"num": 399,
		"name": "Bidoof",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 59,
				"atk": 45,
				"def": 40,
				"spa": 35,
				"spd": 40,
				"spe": 31
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 20,
		"evos": [
				"Bibarel"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "bidoof",
		"fullname": "pokemon: Bidoof",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Bidoof",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 250,
		"weighthg": 200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bibarel: {
		"exists": true,
		"tags": [],
		"num": 400,
		"name": "Bibarel",
		"types": [
				"Normal",
				"Water"
		],
		"baseStats": {
				"hp": 79,
				"atk": 85,
				"def": 60,
				"spa": 55,
				"spd": 60,
				"spe": 71
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 31.5,
		"prevo": "Bidoof",
		"evoLevel": 15,
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "bibarel",
		"fullname": "pokemon: Bibarel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Bibarel",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 315,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kricketot: {
		"exists": true,
		"tags": [],
		"num": 401,
		"name": "Kricketot",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 37,
				"atk": 25,
				"def": 41,
				"spa": 25,
				"spd": 41,
				"spe": 25
		},
		"abilities": {
				"0": "Shed Skin",
				"1": "Run Away"
		},
		"weightkg": 2.2,
		"evos": [
				"Kricketune"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "kricketot",
		"fullname": "pokemon: Kricketot",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Kricketot",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 194,
		"weighthg": 22,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kricketune: {
		"exists": true,
		"tags": [],
		"num": 402,
		"name": "Kricketune",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 77,
				"atk": 85,
				"def": 51,
				"spa": 55,
				"spd": 51,
				"spe": 65
		},
		"abilities": {
				"0": "Swarm"
		},
		"weightkg": 25.5,
		"prevo": "Kricketot",
		"evoLevel": 10,
		"eggGroups": [
				"Bug"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "kricketune",
		"fullname": "pokemon: Kricketune",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Kricketune",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 384,
		"weighthg": 255,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shinx: {
		"exists": true,
		"tags": [],
		"num": 403,
		"name": "Shinx",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 45,
				"atk": 65,
				"def": 34,
				"spa": 40,
				"spd": 34,
				"spe": 45
		},
		"abilities": {
				"0": "Intimidate",
				"H": "Guts"
		},
		"weightkg": 9.5,
		"evos": [
				"Luxio"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "shinx",
		"fullname": "pokemon: Shinx",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Shinx",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 263,
		"weighthg": 95,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	luxio: {
		"exists": true,
		"tags": [],
		"num": 404,
		"name": "Luxio",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 60,
				"atk": 85,
				"def": 49,
				"spa": 60,
				"spd": 49,
				"spe": 60
		},
		"abilities": {
				"0": "Intimidate",
				"H": "Guts"
		},
		"weightkg": 30.5,
		"prevo": "Shinx",
		"evoLevel": 15,
		"evos": [
				"Luxray"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "luxio",
		"fullname": "pokemon: Luxio",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Luxio",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 363,
		"weighthg": 305,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	luxray: {
		"exists": true,
		"tags": [],
		"num": 405,
		"name": "Luxray",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 80,
				"atk": 120,
				"def": 79,
				"spa": 95,
				"spd": 79,
				"spe": 70
		},
		"abilities": {
				"0": "Intimidate",
				"H": "Guts"
		},
		"weightkg": 42,
		"prevo": "Luxio",
		"evoLevel": 30,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "luxray",
		"fullname": "pokemon: Luxray",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Luxray",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 523,
		"weighthg": 420,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	budew: {
		"exists": true,
		"tags": [],
		"num": 406,
		"name": "Budew",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 40,
				"atk": 30,
				"def": 35,
				"spa": 50,
				"spd": 70,
				"spe": 55
		},
		"abilities": {
				"0": "Natural Cure",
				"1": "Poison Point"
		},
		"weightkg": 1.2,
		"evos": [
				"Roselia"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "budew",
		"fullname": "pokemon: Budew",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Budew",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 280,
		"weighthg": 12,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	roserade: {
		"exists": true,
		"tags": [],
		"num": 407,
		"name": "Roserade",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 60,
				"atk": 70,
				"def": 65,
				"spa": 125,
				"spd": 105,
				"spe": 90
		},
		"abilities": {
				"0": "Natural Cure",
				"1": "Poison Point"
		},
		"weightkg": 14.5,
		"prevo": "Roselia",
		"evoType": "useItem",
		"evoItem": "Shiny Stone",
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "roserade",
		"fullname": "pokemon: Roserade",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Roserade",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 515,
		"weighthg": 145,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cranidos: {
		"exists": true,
		"tags": [],
		"num": 408,
		"name": "Cranidos",
		"types": [
				"Rock"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 67,
				"atk": 125,
				"def": 40,
				"spa": 30,
				"spd": 30,
				"spe": 58
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 31.5,
		"evos": [
				"Rampardos"
		],
		"eggGroups": [
				"Monster"
		],
		"tier": "LC",
		"id": "cranidos",
		"fullname": "pokemon: Cranidos",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cranidos",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 350,
		"weighthg": 315,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rampardos: {
		"exists": true,
		"tags": [],
		"num": 409,
		"name": "Rampardos",
		"types": [
				"Rock"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 97,
				"atk": 165,
				"def": 60,
				"spa": 65,
				"spd": 50,
				"spe": 58
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 102.5,
		"prevo": "Cranidos",
		"evoLevel": 30,
		"eggGroups": [
				"Monster"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "rampardos",
		"fullname": "pokemon: Rampardos",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Rampardos",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 495,
		"weighthg": 1025,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shieldon: {
		"exists": true,
		"tags": [],
		"num": 410,
		"name": "Shieldon",
		"types": [
				"Rock",
				"Steel"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 30,
				"atk": 42,
				"def": 118,
				"spa": 42,
				"spd": 88,
				"spe": 30
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Soundproof"
		},
		"weightkg": 57,
		"evos": [
				"Bastiodon"
		],
		"eggGroups": [
				"Monster"
		],
		"tier": "LC",
		"id": "shieldon",
		"fullname": "pokemon: Shieldon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Shieldon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 350,
		"weighthg": 570,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bastiodon: {
		"exists": true,
		"tags": [],
		"num": 411,
		"name": "Bastiodon",
		"types": [
				"Rock",
				"Steel"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 60,
				"atk": 52,
				"def": 168,
				"spa": 47,
				"spd": 138,
				"spe": 30
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Soundproof"
		},
		"weightkg": 149.5,
		"prevo": "Shieldon",
		"evoLevel": 30,
		"eggGroups": [
				"Monster"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "bastiodon",
		"fullname": "pokemon: Bastiodon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bastiodon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 495,
		"weighthg": 1495,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	burmy: {
		"exists": true,
		"tags": [],
		"num": 412,
		"name": "Burmy",
		"baseForme": "Plant",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 40,
				"atk": 29,
				"def": 45,
				"spa": 29,
				"spd": 45,
				"spe": 36
		},
		"abilities": {
				"0": "Shed Skin"
		},
		"weightkg": 3.4,
		"evos": [
				"Wormadam",
				"Wormadam-Sandy",
				"Wormadam-Trash",
				"Mothim"
		],
		"eggGroups": [
				"Bug"
		],
		"cosmeticFormes": [
				"Burmy-Sandy",
				"Burmy-Trash"
		],
		"formeOrder": [
				"Burmy",
				"Burmy-Sandy",
				"Burmy-Trash"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "burmy",
		"fullname": "pokemon: Burmy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Burmy",
		"forme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 224,
		"weighthg": 34,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wormadam: {
		"exists": true,
		"tags": [],
		"num": 413,
		"name": "Wormadam",
		"baseForme": "Plant",
		"types": [
				"Bug",
				"Grass"
		],
		"gender": "F",
		"baseStats": {
				"hp": 60,
				"atk": 59,
				"def": 85,
				"spa": 79,
				"spd": 105,
				"spe": 36
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 6.5,
		"prevo": "Burmy",
		"evoLevel": 20,
		"eggGroups": [
				"Bug"
		],
		"otherFormes": [
				"Wormadam-Sandy",
				"Wormadam-Trash"
		],
		"formeOrder": [
				"Wormadam",
				"Wormadam-Sandy",
				"Wormadam-Trash"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wormadam",
		"fullname": "pokemon: Wormadam",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Wormadam",
		"forme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 424,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wormadamsandy: {
		"exists": true,
		"tags": [],
		"num": 413,
		"name": "Wormadam-Sandy",
		"baseSpecies": "Wormadam",
		"forme": "Sandy",
		"types": [
				"Bug",
				"Ground"
		],
		"gender": "F",
		"baseStats": {
				"hp": 60,
				"atk": 79,
				"def": 105,
				"spa": 59,
				"spd": 85,
				"spe": 36
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 6.5,
		"prevo": "Burmy",
		"evoLevel": 20,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wormadamsandy",
		"fullname": "pokemon: Wormadam-Sandy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 424,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wormadamtrash: {
		"exists": true,
		"tags": [],
		"num": 413,
		"name": "Wormadam-Trash",
		"baseSpecies": "Wormadam",
		"forme": "Trash",
		"types": [
				"Bug",
				"Steel"
		],
		"gender": "F",
		"baseStats": {
				"hp": 60,
				"atk": 69,
				"def": 95,
				"spa": 69,
				"spd": 95,
				"spe": 36
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 6.5,
		"prevo": "Burmy",
		"evoLevel": 20,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wormadamtrash",
		"fullname": "pokemon: Wormadam-Trash",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 424,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mothim: {
		"exists": true,
		"tags": [],
		"num": 414,
		"name": "Mothim",
		"types": [
				"Bug",
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 70,
				"atk": 94,
				"def": 50,
				"spa": 94,
				"spd": 50,
				"spe": 66
		},
		"abilities": {
				"0": "Swarm"
		},
		"weightkg": 23.3,
		"prevo": "Burmy",
		"evoLevel": 20,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mothim",
		"fullname": "pokemon: Mothim",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Mothim",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 424,
		"weighthg": 233,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	combee: {
		"exists": true,
		"tags": [],
		"num": 415,
		"name": "Combee",
		"types": [
				"Bug",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 30,
				"atk": 30,
				"def": 42,
				"spa": 30,
				"spd": 42,
				"spe": 70
		},
		"abilities": {
				"0": "Hustle"
		},
		"weightkg": 5.5,
		"evos": [
				"Vespiquen"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "combee",
		"fullname": "pokemon: Combee",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Combee",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 244,
		"weighthg": 55,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vespiquen: {
		"exists": true,
		"tags": [],
		"num": 416,
		"name": "Vespiquen",
		"types": [
				"Bug",
				"Flying"
		],
		"gender": "F",
		"baseStats": {
				"hp": 70,
				"atk": 80,
				"def": 102,
				"spa": 80,
				"spd": 102,
				"spe": 40
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 38.5,
		"prevo": "Combee",
		"evoLevel": 21,
		"eggGroups": [
				"Bug"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "vespiquen",
		"fullname": "pokemon: Vespiquen",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Vespiquen",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 474,
		"weighthg": 385,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pachirisu: {
		"exists": true,
		"tags": [],
		"num": 417,
		"name": "Pachirisu",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 60,
				"atk": 45,
				"def": 70,
				"spa": 45,
				"spd": 90,
				"spe": 95
		},
		"abilities": {
				"0": "Run Away",
				"1": "Pickup",
				"H": "Volt Absorb"
		},
		"weightkg": 3.9,
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pachirisu",
		"fullname": "pokemon: Pachirisu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pachirisu",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 405,
		"weighthg": 39,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	buizel: {
		"exists": true,
		"tags": [],
		"num": 418,
		"name": "Buizel",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 55,
				"atk": 65,
				"def": 35,
				"spa": 60,
				"spd": 30,
				"spe": 85
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Veil"
		},
		"weightkg": 29.5,
		"evos": [
				"Floatzel"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "LC",
		"id": "buizel",
		"fullname": "pokemon: Buizel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Buizel",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 295,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	floatzel: {
		"exists": true,
		"tags": [],
		"num": 419,
		"name": "Floatzel",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 85,
				"atk": 105,
				"def": 55,
				"spa": 85,
				"spd": 50,
				"spe": 115
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Veil"
		},
		"weightkg": 33.5,
		"prevo": "Buizel",
		"evoLevel": 26,
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "floatzel",
		"fullname": "pokemon: Floatzel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Floatzel",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 495,
		"weighthg": 335,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cherubi: {
		"exists": true,
		"tags": [],
		"num": 420,
		"name": "Cherubi",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 45,
				"atk": 35,
				"def": 45,
				"spa": 62,
				"spd": 53,
				"spe": 35
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 3.3,
		"evos": [
				"Cherrim"
		],
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "cherubi",
		"fullname": "pokemon: Cherubi",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Cherubi",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 275,
		"weighthg": 33,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cherrim: {
		"exists": true,
		"tags": [],
		"num": 421,
		"name": "Cherrim",
		"baseForme": "Overcast",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 70,
				"atk": 60,
				"def": 70,
				"spa": 87,
				"spd": 78,
				"spe": 85
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 9.3,
		"prevo": "Cherubi",
		"evoLevel": 25,
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"otherFormes": [
				"Cherrim-Sunshine"
		],
		"formeOrder": [
				"Cherrim",
				"Cherrim-Sunshine"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "cherrim",
		"fullname": "pokemon: Cherrim",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Cherrim",
		"forme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 450,
		"weighthg": 93,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cherrimsunshine: {
		"exists": true,
		"tags": [],
		"num": 421,
		"name": "Cherrim-Sunshine",
		"baseSpecies": "Cherrim",
		"forme": "Sunshine",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 70,
				"atk": 60,
				"def": 70,
				"spa": 87,
				"spd": 78,
				"spe": 85
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 9.3,
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"requiredAbility": "Flower Gift",
		// "battleOnly": "Cherrim",
		"isNonstandard": null,
		"id": "cherrimsunshine",
		"fullname": "pokemon: Cherrim-Sunshine",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 450,
		"weighthg": 93,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Cherrim"
	},
	shellos: {
		"exists": true,
		"tags": [],
		"num": 422,
		"name": "Shellos",
		"baseForme": "West",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 76,
				"atk": 48,
				"def": 48,
				"spa": 57,
				"spd": 62,
				"spe": 34
		},
		"abilities": {
				"0": "Sticky Hold"
		},
		"weightkg": 6.3,
		"evos": [
				"Gastrodon"
		],
		"eggGroups": [
				"Water 1",
				"Amorphous"
		],
		"cosmeticFormes": [
				"Shellos-East"
		],
		"formeOrder": [
				"Shellos",
				"Shellos-East"
		],
		"tier": "LC",
		"id": "shellos",
		"fullname": "pokemon: Shellos",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Shellos",
		"forme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 325,
		"weighthg": 63,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gastrodon: {
		"exists": true,
		"tags": [],
		"num": 423,
		"name": "Gastrodon",
		"baseForme": "West",
		"types": [
				"Water",
				"Ground"
		],
		"baseStats": {
				"hp": 111,
				"atk": 83,
				"def": 68,
				"spa": 92,
				"spd": 82,
				"spe": 39
		},
		"abilities": {
				"0": "Sticky Hold"
		},
		"weightkg": 29.9,
		"prevo": "Shellos",
		"evoLevel": 30,
		"eggGroups": [
				"Water 1",
				"Amorphous"
		],
		"cosmeticFormes": [
				"Gastrodon-East"
		],
		"formeOrder": [
				"Gastrodon",
				"Gastrodon-East"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "gastrodon",
		"fullname": "pokemon: Gastrodon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gastrodon",
		"forme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 475,
		"weighthg": 299,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ambipom: {
		"exists": true,
		"tags": [],
		"num": 424,
		"name": "Ambipom",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 75,
				"atk": 100,
				"def": 66,
				"spa": 60,
				"spd": 66,
				"spe": 115
		},
		"abilities": {
				"0": "Pickup"
		},
		"weightkg": 20.3,
		"prevo": "Aipom",
		"evoType": "levelMove",
		"evoMove": "Double Hit",
		"eggGroups": [
				"Field"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "ambipom",
		"fullname": "pokemon: Ambipom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ambipom",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 482,
		"weighthg": 203,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	drifloon: {
		"exists": true,
		"tags": [],
		"num": 425,
		"name": "Drifloon",
		"types": [
				"Ghost",
				"Flying"
		],
		"baseStats": {
				"hp": 90,
				"atk": 50,
				"def": 34,
				"spa": 60,
				"spd": 44,
				"spe": 70
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 1.2,
		"evos": [
				"Drifblim"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "drifloon",
		"fullname": "pokemon: Drifloon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Drifloon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 348,
		"weighthg": 12,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	drifblim: {
		"exists": true,
		"tags": [],
		"num": 426,
		"name": "Drifblim",
		"types": [
				"Ghost",
				"Flying"
		],
		"baseStats": {
				"hp": 150,
				"atk": 80,
				"def": 44,
				"spa": 90,
				"spd": 54,
				"spe": 80
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 15,
		"prevo": "Drifloon",
		"evoLevel": 28,
		"eggGroups": [
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "drifblim",
		"fullname": "pokemon: Drifblim",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Drifblim",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 498,
		"weighthg": 150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	buneary: {
		"exists": true,
		"tags": [],
		"num": 427,
		"name": "Buneary",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 55,
				"atk": 66,
				"def": 44,
				"spa": 44,
				"spd": 56,
				"spe": 85
		},
		"abilities": {
				"0": "Run Away",
				"1": "Limber"
		},
		"weightkg": 5.5,
		"evos": [
				"Lopunny"
		],
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "buneary",
		"fullname": "pokemon: Buneary",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Buneary",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 350,
		"weighthg": 55,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lopunny: {
		"exists": true,
		"tags": [],
		"num": 428,
		"name": "Lopunny",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 65,
				"atk": 76,
				"def": 84,
				"spa": 54,
				"spd": 96,
				"spe": 105
		},
		"abilities": {
				"0": "Cute Charm",
				"1": "Limber"
		},
		"weightkg": 33.3,
		"prevo": "Buneary",
		"evoType": "levelFriendship",
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"otherFormes": [
				"Lopunny-Mega"
		],
		"formeOrder": [
				"Lopunny",
				"Lopunny-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lopunny",
		"fullname": "pokemon: Lopunny",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Lopunny",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 333,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lopunnymega: {
		"exists": true,
		"tags": [],
		"num": 428,
		"name": "Lopunny-Mega",
		"baseSpecies": "Lopunny",
		// "forme": "Mega",
		"types": [
				"Normal",
				"Fighting"
		],
		"baseStats": {
				"hp": 65,
				"atk": 136,
				"def": 94,
				"spa": 54,
				"spd": 96,
				"spe": 135
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 28.3,
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		// "requiredItem": "Lopunnite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lopunnymega",
		"fullname": "pokemon: Lopunny-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Lopunnite"
		// ],
		"bst": 580,
		"weighthg": 283,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Lopunny",
		// "changesFrom": "Lopunny"
	},
	mismagius: {
		"exists": true,
		"tags": [],
		"num": 429,
		"name": "Mismagius",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 60,
				"atk": 60,
				"def": 60,
				"spa": 105,
				"spd": 105,
				"spe": 105
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 4.4,
		"prevo": "Misdreavus",
		"evoType": "useItem",
		"evoItem": "Dusk Stone",
		"eggGroups": [
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "mismagius",
		"fullname": "pokemon: Mismagius",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mismagius",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 495,
		"weighthg": 44,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	honchkrow: {
		"exists": true,
		"tags": [],
		"num": 430,
		"name": "Honchkrow",
		"types": [
				"Dark",
				"Flying"
		],
		"baseStats": {
				"hp": 100,
				"atk": 125,
				"def": 52,
				"spa": 105,
				"spd": 52,
				"spe": 71
		},
		"abilities": {
				"0": "Insomnia"
		},
		"weightkg": 27.3,
		"prevo": "Murkrow",
		"evoType": "useItem",
		"evoItem": "Dusk Stone",
		"eggGroups": [
				"Flying"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "honchkrow",
		"fullname": "pokemon: Honchkrow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Honchkrow",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 505,
		"weighthg": 273,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	glameow: {
		"exists": true,
		"tags": [],
		"num": 431,
		"name": "Glameow",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 49,
				"atk": 55,
				"def": 42,
				"spa": 42,
				"spd": 37,
				"spe": 85
		},
		"abilities": {
				"0": "Limber",
				"1": "Own Tempo",
				"H": "Keen Eye"
		},
		"weightkg": 3.9,
		"evos": [
				"Purugly"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "glameow",
		"fullname": "pokemon: Glameow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Glameow",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 310,
		"weighthg": 39,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	purugly: {
		"exists": true,
		"tags": [],
		"num": 432,
		"name": "Purugly",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 71,
				"atk": 82,
				"def": 64,
				"spa": 64,
				"spd": 59,
				"spe": 112
		},
		"abilities": {
				"0": "Thick Fat",
				"1": "Own Tempo"
		},
		"weightkg": 43.8,
		"prevo": "Glameow",
		"evoLevel": 38,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "purugly",
		"fullname": "pokemon: Purugly",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Purugly",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 452,
		"weighthg": 438,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chingling: {
		"exists": true,
		"tags": [],
		"num": 433,
		"name": "Chingling",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 45,
				"atk": 30,
				"def": 50,
				"spa": 65,
				"spd": 50,
				"spe": 45
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.6,
		"evos": [
				"Chimecho"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "chingling",
		"fullname": "pokemon: Chingling",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Chingling",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 285,
		"weighthg": 6,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	stunky: {
		"exists": true,
		"tags": [],
		"num": 434,
		"name": "Stunky",
		"types": [
				"Poison",
				"Dark"
		],
		"baseStats": {
				"hp": 63,
				"atk": 63,
				"def": 47,
				"spa": 41,
				"spd": 41,
				"spe": 74
		},
		"abilities": {
				"0": "Stench",
				"1": "Keen Eye"
		},
		"weightkg": 19.2,
		"evos": [
				"Skuntank"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "stunky",
		"fullname": "pokemon: Stunky",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Stunky",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 329,
		"weighthg": 192,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	skuntank: {
		"exists": true,
		"tags": [],
		"num": 435,
		"name": "Skuntank",
		"types": [
				"Poison",
				"Dark"
		],
		"baseStats": {
				"hp": 103,
				"atk": 93,
				"def": 67,
				"spa": 71,
				"spd": 61,
				"spe": 84
		},
		"abilities": {
				"0": "Stench",
				"1": "Keen Eye"
		},
		"weightkg": 38,
		"prevo": "Stunky",
		"evoLevel": 34,
		"eggGroups": [
				"Field"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "skuntank",
		"fullname": "pokemon: Skuntank",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Skuntank",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 479,
		"weighthg": 380,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bronzor: {
		"exists": true,
		"tags": [],
		"num": 436,
		"name": "Bronzor",
		"types": [
				"Steel",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 57,
				"atk": 24,
				"def": 86,
				"spa": 24,
				"spd": 86,
				"spe": 23
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 60.5,
		"evos": [
				"Bronzong"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "LC",
		"id": "bronzor",
		"fullname": "pokemon: Bronzor",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bronzor",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 300,
		"weighthg": 605,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bronzong: {
		"exists": true,
		"tags": [],
		"num": 437,
		"name": "Bronzong",
		"types": [
				"Steel",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 67,
				"atk": 89,
				"def": 116,
				"spa": 79,
				"spd": 116,
				"spe": 33
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 187,
		"prevo": "Bronzor",
		"evoLevel": 33,
		"eggGroups": [
				"Mineral"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "bronzong",
		"fullname": "pokemon: Bronzong",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bronzong",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 500,
		"weighthg": 1870,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bonsly: {
		"exists": true,
		"tags": [],
		"num": 438,
		"name": "Bonsly",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 50,
				"atk": 80,
				"def": 95,
				"spa": 10,
				"spd": 45,
				"spe": 10
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Rock Head"
		},
		"weightkg": 15,
		"evos": [
				"Sudowoodo"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "bonsly",
		"fullname": "pokemon: Bonsly",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bonsly",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 290,
		"weighthg": 150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mimejr: {
		"exists": true,
		"tags": [],
		"num": 439,
		"name": "Mime Jr.",
		"types": [
				"Psychic",
				"Normal"
		],
		"baseStats": {
				"hp": 20,
				"atk": 25,
				"def": 45,
				"spa": 70,
				"spd": 90,
				"spe": 60
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 13,
		"evos": [
				"Mr. Mime",
				"Mr. Mime-Galar"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mimejr",
		"fullname": "pokemon: Mime Jr.",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Mime Jr.",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 310,
		"weighthg": 130,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	happiny: {
		"exists": true,
		"tags": [],
		"num": 440,
		"name": "Happiny",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 100,
				"atk": 5,
				"def": 5,
				"spa": 15,
				"spd": 65,
				"spe": 30
		},
		"abilities": {
				"0": "Natural Cure",
				"1": "Serene Grace"
		},
		"weightkg": 24.4,
		"evos": [
				"Chansey"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "happiny",
		"fullname": "pokemon: Happiny",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Happiny",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 220,
		"weighthg": 244,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chatot: {
		"exists": true,
		"tags": [],
		"num": 441,
		"name": "Chatot",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 76,
				"atk": 65,
				"def": 45,
				"spa": 92,
				"spd": 42,
				"spe": 91
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 1.9,
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "chatot",
		"fullname": "pokemon: Chatot",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Chatot",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 411,
		"weighthg": 19,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	spiritomb: {
		"exists": true,
		"tags": [],
		"num": 442,
		"name": "Spiritomb",
		"types": [
				"Ghost",
				"Dark"
		],
		"baseStats": {
				"hp": 50,
				"atk": 92,
				"def": 108,
				"spa": 92,
				"spd": 108,
				"spe": 35
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 108,
		"eggGroups": [
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "spiritomb",
		"fullname": "pokemon: Spiritomb",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Spiritomb",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 1080,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gible: {
		"exists": true,
		"tags": [],
		"num": 443,
		"name": "Gible",
		"types": [
				"Dragon",
				"Ground"
		],
		"baseStats": {
				"hp": 58,
				"atk": 70,
				"def": 45,
				"spa": 40,
				"spd": 45,
				"spe": 42
		},
		"abilities": {
				"0": "Sand Veil",
				"1": "Rough Skin"
		},
		"weightkg": 20.5,
		"evos": [
				"Gabite"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "LC",
		"id": "gible",
		"fullname": "pokemon: Gible",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gible",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 205,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gabite: {
		"exists": true,
		"tags": [],
		"num": 444,
		"name": "Gabite",
		"types": [
				"Dragon",
				"Ground"
		],
		"baseStats": {
				"hp": 68,
				"atk": 90,
				"def": 65,
				"spa": 50,
				"spd": 55,
				"spe": 82
		},
		"abilities": {
				"0": "Sand Veil",
				"1": "Rough Skin"
		},
		"weightkg": 56,
		"prevo": "Gible",
		"evoLevel": 24,
		"evos": [
				"Garchomp"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "NFE",
		"id": "gabite",
		"fullname": "pokemon: Gabite",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gabite",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 560,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	garchomp: {
		"exists": true,
		"tags": [],
		"num": 445,
		"name": "Garchomp",
		"types": [
				"Dragon",
				"Ground"
		],
		"baseStats": {
				"hp": 108,
				"atk": 130,
				"def": 95,
				"spa": 80,
				"spd": 85,
				"spe": 102
		},
		"abilities": {
				"0": "Sand Veil",
				"1": "Rough Skin"
		},
		"weightkg": 95,
		"prevo": "Gabite",
		"evoLevel": 48,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"otherFormes": [
				"Garchomp-Mega"
		],
		"formeOrder": [
				"Garchomp",
				"Garchomp-Mega"
		],
		"tier": "UUBL",
		"doublesTier": "DUU",
		"id": "garchomp",
		"fullname": "pokemon: Garchomp",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Garchomp",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 950,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	garchompmega: {
		"exists": true,
		"tags": [],
		"num": 445,
		"name": "Garchomp-Mega",
		"baseSpecies": "Garchomp",
		// "forme": "Mega",
		"types": [
				"Dragon",
				"Ground"
		],
		"baseStats": {
				"hp": 108,
				"atk": 170,
				"def": 115,
				"spa": 120,
				"spd": 95,
				"spe": 92
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 95,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		// "requiredItem": "Garchompite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "garchompmega",
		"fullname": "pokemon: Garchomp-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Garchompite"
		// ],
		"bst": 700,
		"weighthg": 950,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Garchomp",
		// "changesFrom": "Garchomp"
	},
	munchlax: {
		"exists": true,
		"tags": [],
		"num": 446,
		"name": "Munchlax",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 135,
				"atk": 85,
				"def": 40,
				"spa": 40,
				"spd": 85,
				"spe": 5
		},
		"abilities": {
				"0": "Pickup",
				"1": "Thick Fat"
		},
		"weightkg": 105,
		"evos": [
				"Snorlax"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "munchlax",
		"fullname": "pokemon: Munchlax",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Munchlax",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"bst": 390,
		"weighthg": 1050,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	riolu: {
		"exists": true,
		"tags": [],
		"num": 447,
		"name": "Riolu",
		"types": [
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 40,
				"atk": 70,
				"def": 40,
				"spa": 35,
				"spd": 40,
				"spe": 60
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 20.2,
		"evos": [
				"Lucario"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"tier": "LC",
		"id": "riolu",
		"fullname": "pokemon: Riolu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Riolu",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"bst": 285,
		"weighthg": 202,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lucario: {
		"exists": true,
		"tags": [],
		"num": 448,
		"name": "Lucario",
		"types": [
				"Fighting",
				"Steel"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 70,
				"atk": 110,
				"def": 70,
				"spa": 115,
				"spd": 70,
				"spe": 90
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 54,
		"prevo": "Riolu",
		"evoType": "levelFriendship",
		"evoCondition": "during the day",
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"otherFormes": [
				"Lucario-Mega"
		],
		"formeOrder": [
				"Lucario",
				"Lucario-Mega"
		],
		"tier": "NUBL",
		"doublesTier": "(DUU)",
		"id": "lucario",
		"fullname": "pokemon: Lucario",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lucario",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 540,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lucariomega: {
		"exists": true,
		"tags": [],
		"num": 448,
		"name": "Lucario-Mega",
		"baseSpecies": "Lucario",
		// "forme": "Mega",
		"types": [
				"Fighting",
				"Steel"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 70,
				"atk": 145,
				"def": 88,
				"spa": 140,
				"spd": 70,
				"spe": 112
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 57.5,
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		// "requiredItem": "Lucarionite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lucariomega",
		"fullname": "pokemon: Lucario-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		// "requiredItems": [
		// 		"Lucarionite"
		// ],
		"bst": 625,
		"weighthg": 575,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Lucario",
		// "changesFrom": "Lucario"
	},
	hippopotas: {
		"exists": true,
		"tags": [],
		"num": 449,
		"name": "Hippopotas",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 68,
				"atk": 72,
				"def": 78,
				"spa": 38,
				"spd": 42,
				"spe": 32
		},
		"abilities": {
				"0": "Sand Stream"
		},
		"weightkg": 49.5,
		"evos": [
				"Hippowdon"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "hippopotas",
		"fullname": "pokemon: Hippopotas",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hippopotas",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 495,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hippowdon: {
		"exists": true,
		"tags": [],
		"num": 450,
		"name": "Hippowdon",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 108,
				"atk": 112,
				"def": 118,
				"spa": 68,
				"spd": 72,
				"spe": 47
		},
		"abilities": {
				"0": "Sand Stream"
		},
		"weightkg": 300,
		"prevo": "Hippopotas",
		"evoLevel": 34,
		"eggGroups": [
				"Field"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "hippowdon",
		"fullname": "pokemon: Hippowdon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hippowdon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 525,
		"weighthg": 3000,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	skorupi: {
		"exists": true,
		"tags": [],
		"num": 451,
		"name": "Skorupi",
		"types": [
				"Poison",
				"Bug"
		],
		"baseStats": {
				"hp": 40,
				"atk": 50,
				"def": 90,
				"spa": 30,
				"spd": 55,
				"spe": 65
		},
		"abilities": {
				"0": "Battle Armor",
				"1": "Keen Eye"
		},
		"weightkg": 12,
		"evos": [
				"Drapion"
		],
		"eggGroups": [
				"Bug",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "skorupi",
		"fullname": "pokemon: Skorupi",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Skorupi",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 120,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	drapion: {
		"exists": true,
		"tags": [],
		"num": 452,
		"name": "Drapion",
		"types": [
				"Poison",
				"Dark"
		],
		"baseStats": {
				"hp": 70,
				"atk": 90,
				"def": 110,
				"spa": 60,
				"spd": 75,
				"spe": 95
		},
		"abilities": {
				"0": "Battle Armor",
				"1": "Keen Eye"
		},
		"weightkg": 61.5,
		"prevo": "Skorupi",
		"evoLevel": 40,
		"eggGroups": [
				"Bug",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "drapion",
		"fullname": "pokemon: Drapion",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Drapion",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 615,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	croagunk: {
		"exists": true,
		"tags": [],
		"num": 453,
		"name": "Croagunk",
		"types": [
				"Poison",
				"Fighting"
		],
		"baseStats": {
				"hp": 48,
				"atk": 61,
				"def": 40,
				"spa": 61,
				"spd": 40,
				"spe": 50
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 23,
		"evos": [
				"Toxicroak"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "LC",
		"id": "croagunk",
		"fullname": "pokemon: Croagunk",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Croagunk",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 230,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	toxicroak: {
		"exists": true,
		"tags": [],
		"num": 454,
		"name": "Toxicroak",
		"types": [
				"Poison",
				"Fighting"
		],
		"baseStats": {
				"hp": 83,
				"atk": 106,
				"def": 65,
				"spa": 86,
				"spd": 65,
				"spe": 85
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 44.4,
		"prevo": "Croagunk",
		"evoLevel": 37,
		"eggGroups": [
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "toxicroak",
		"fullname": "pokemon: Toxicroak",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Toxicroak",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 444,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	carnivine: {
		"exists": true,
		"tags": [],
		"num": 455,
		"name": "Carnivine",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 74,
				"atk": 100,
				"def": 72,
				"spa": 90,
				"spd": 72,
				"spe": 46
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 27,
		"eggGroups": [
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "carnivine",
		"fullname": "pokemon: Carnivine",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Carnivine",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 454,
		"weighthg": 270,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	finneon: {
		"exists": true,
		"tags": [],
		"num": 456,
		"name": "Finneon",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 49,
				"atk": 49,
				"def": 56,
				"spa": 49,
				"spd": 61,
				"spe": 66
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Veil"
		},
		"weightkg": 7,
		"evos": [
				"Lumineon"
		],
		"eggGroups": [
				"Water 2"
		],
		"tier": "LC",
		"id": "finneon",
		"fullname": "pokemon: Finneon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Finneon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 70,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lumineon: {
		"exists": true,
		"tags": [],
		"num": 457,
		"name": "Lumineon",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 69,
				"atk": 69,
				"def": 76,
				"spa": 69,
				"spd": 86,
				"spe": 91
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Veil"
		},
		"weightkg": 24,
		"prevo": "Finneon",
		"evoLevel": 31,
		"eggGroups": [
				"Water 2"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "lumineon",
		"fullname": "pokemon: Lumineon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lumineon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 240,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mantyke: {
		"exists": true,
		"tags": [],
		"num": 458,
		"name": "Mantyke",
		"types": [
				"Water",
				"Flying"
		],
		"baseStats": {
				"hp": 45,
				"atk": 20,
				"def": 50,
				"spa": 60,
				"spd": 120,
				"spe": 50
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Absorb",
				"H": "Water Veil"
		},
		"weightkg": 65,
		"evos": [
				"Mantine"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"canHatch": true,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mantyke",
		"fullname": "pokemon: Mantyke",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Mantyke",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 345,
		"weighthg": 650,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	snover: {
		"exists": true,
		"tags": [],
		"num": 459,
		"name": "Snover",
		"types": [
				"Grass",
				"Ice"
		],
		"baseStats": {
				"hp": 60,
				"atk": 62,
				"def": 50,
				"spa": 62,
				"spd": 60,
				"spe": 40
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 50.5,
		"evos": [
				"Abomasnow"
		],
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"tier": "LC",
		"id": "snover",
		"fullname": "pokemon: Snover",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Snover",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 334,
		"weighthg": 505,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	abomasnow: {
		"exists": true,
		"tags": [],
		"num": 460,
		"name": "Abomasnow",
		"types": [
				"Grass",
				"Ice"
		],
		"baseStats": {
				"hp": 90,
				"atk": 92,
				"def": 75,
				"spa": 92,
				"spd": 85,
				"spe": 60
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 135.5,
		"prevo": "Snover",
		"evoLevel": 40,
		"eggGroups": [
				"Monster",
				"Grass"
		],
		"otherFormes": [
				"Abomasnow-Mega"
		],
		"formeOrder": [
				"Abomasnow",
				"Abomasnow-Mega"
		],
		"tier": "ZU",
		"doublesTier": "DUU",
		"id": "abomasnow",
		"fullname": "pokemon: Abomasnow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Abomasnow",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 494,
		"weighthg": 1355,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	abomasnowmega: {
		"exists": true,
		"tags": [],
		"num": 460,
		"name": "Abomasnow-Mega",
		"baseSpecies": "Abomasnow",
		// "forme": "Mega",
		"types": [
				"Grass",
				"Ice"
		],
		"baseStats": {
				"hp": 90,
				"atk": 132,
				"def": 105,
				"spa": 132,
				"spd": 105,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 185,
		"eggGroups": [
				"Monster",
				"Grass"
		],
		// "requiredItem": "Abomasite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "abomasnowmega",
		"fullname": "pokemon: Abomasnow-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Abomasite"
		// ],
		"bst": 594,
		"weighthg": 1850,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Abomasnow",
		// "changesFrom": "Abomasnow"
	},
	weavile: {
		"exists": true,
		"tags": [],
		"num": 461,
		"name": "Weavile",
		"types": [
				"Dark",
				"Ice"
		],
		"baseStats": {
				"hp": 70,
				"atk": 120,
				"def": 65,
				"spa": 45,
				"spd": 85,
				"spe": 125
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 34,
		"prevo": "Sneasel",
		"evoType": "levelHold",
		"evoItem": "Razor Claw",
		"evoCondition": "at night",
		"eggGroups": [
				"Field"
		],
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "weavile",
		"fullname": "pokemon: Weavile",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Weavile",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 510,
		"weighthg": 340,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	magnezone: {
		"exists": true,
		"tags": [],
		"num": 462,
		"name": "Magnezone",
		"types": [
				"Electric",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 70,
				"atk": 70,
				"def": 115,
				"spa": 130,
				"spd": 90,
				"spe": 60
		},
		"abilities": {
				"0": "Magnet Pull",
				"1": "Sturdy"
		},
		"weightkg": 180,
		"prevo": "Magneton",
		"evoType": "useItem",
		"evoItem": "Thunder Stone",
		"eggGroups": [
				"Mineral"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "magnezone",
		"fullname": "pokemon: Magnezone",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Magnezone",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 535,
		"weighthg": 1800,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lickilicky: {
		"exists": true,
		"tags": [],
		"num": 463,
		"name": "Lickilicky",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 110,
				"atk": 85,
				"def": 95,
				"spa": 80,
				"spd": 95,
				"spe": 50
		},
		"abilities": {
				"0": "Own Tempo",
				"1": "Oblivious",
				"H": "Cloud Nine"
		},
		"weightkg": 140,
		"prevo": "Lickitung",
		"evoType": "levelMove",
		"evoMove": "Rollout",
		"eggGroups": [
				"Monster"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lickilicky",
		"fullname": "pokemon: Lickilicky",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Lickilicky",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 515,
		"weighthg": 1400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rhyperior: {
		"exists": true,
		"tags": [],
		"num": 464,
		"name": "Rhyperior",
		"types": [
				"Ground",
				"Rock"
		],
		"baseStats": {
				"hp": 115,
				"atk": 140,
				"def": 130,
				"spa": 55,
				"spd": 55,
				"spe": 40
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 282.8,
		"prevo": "Rhydon",
		"evoType": "trade",
		"evoItem": "Protector",
		"eggGroups": [
				"Monster",
				"Field"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "rhyperior",
		"fullname": "pokemon: Rhyperior",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Rhyperior",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 535,
		"weighthg": 2828,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tangrowth: {
		"exists": true,
		"tags": [],
		"num": 465,
		"name": "Tangrowth",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 125,
				"spa": 110,
				"spd": 50,
				"spe": 50
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 128.6,
		"prevo": "Tangela",
		"evoType": "levelMove",
		"evoMove": "Ancient Power",
		"eggGroups": [
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tangrowth",
		"fullname": "pokemon: Tangrowth",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tangrowth",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 535,
		"weighthg": 1286,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	electivire: {
		"exists": true,
		"tags": [],
		"num": 466,
		"name": "Electivire",
		"types": [
				"Electric"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 75,
				"atk": 123,
				"def": 67,
				"spa": 95,
				"spd": 85,
				"spe": 95
		},
		"abilities": {
				"0": "Vital Spirit"
		},
		"weightkg": 138.6,
		"prevo": "Electabuzz",
		"evoType": "trade",
		"evoItem": "Electirizer",
		"eggGroups": [
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "electivire",
		"fullname": "pokemon: Electivire",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Electivire",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 540,
		"weighthg": 1386,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	magmortar: {
		"exists": true,
		"tags": [],
		"num": 467,
		"name": "Magmortar",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 75,
				"atk": 95,
				"def": 67,
				"spa": 125,
				"spd": 95,
				"spe": 83
		},
		"abilities": {
				"0": "Flame Body",
				"1": "Vital Spirit"
		},
		"weightkg": 68,
		"prevo": "Magmar",
		"evoType": "trade",
		"evoItem": "Magmarizer",
		"eggGroups": [
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "magmortar",
		"fullname": "pokemon: Magmortar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Magmortar",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 540,
		"weighthg": 680,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	togekiss: {
		"exists": true,
		"tags": [],
		"num": 468,
		"name": "Togekiss",
		"types": [
				"Normal",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 85,
				"atk": 50,
				"def": 95,
				"spa": 120,
				"spd": 115,
				"spe": 80
		},
		"abilities": {
				"0": "Hustle",
				"1": "Serene Grace"
		},
		"weightkg": 38,
		"prevo": "Togetic",
		"evoType": "useItem",
		"evoItem": "Shiny Stone",
		"eggGroups": [
				"Flying",
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "togekiss",
		"fullname": "pokemon: Togekiss",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Togekiss",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 545,
		"weighthg": 380,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	yanmega: {
		"exists": true,
		"tags": [],
		"num": 469,
		"name": "Yanmega",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 86,
				"atk": 76,
				"def": 86,
				"spa": 116,
				"spd": 56,
				"spe": 95
		},
		"abilities": {
				"0": "Speed Boost"
		},
		"weightkg": 51.5,
		"prevo": "Yanma",
		"evoType": "levelMove",
		"evoMove": "Ancient Power",
		"eggGroups": [
				"Bug"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "yanmega",
		"fullname": "pokemon: Yanmega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Yanmega",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 515,
		"weighthg": 515,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	leafeon: {
		"exists": true,
		"tags": [],
		"num": 470,
		"name": "Leafeon",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 65,
				"atk": 110,
				"def": 130,
				"spa": 60,
				"spd": 65,
				"spe": 95
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 25.5,
		"prevo": "Eevee",
		"evoType": "useItem",
		"evoItem": "Leaf Stone",
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "leafeon",
		"fullname": "pokemon: Leafeon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Leafeon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 255,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	glaceon: {
		"exists": true,
		"tags": [],
		"num": 471,
		"name": "Glaceon",
		"types": [
				"Ice"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 65,
				"atk": 60,
				"def": 110,
				"spa": 130,
				"spd": 95,
				"spe": 65
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 25.9,
		"prevo": "Eevee",
		"evoType": "useItem",
		"evoItem": "Ice Stone",
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "glaceon",
		"fullname": "pokemon: Glaceon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Glaceon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 259,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gliscor: {
		"exists": true,
		"tags": [],
		"num": 472,
		"name": "Gliscor",
		"types": [
				"Ground",
				"Flying"
		],
		"baseStats": {
				"hp": 75,
				"atk": 95,
				"def": 125,
				"spa": 45,
				"spd": 75,
				"spe": 95
		},
		"abilities": {
				"0": "Hyper Cutter",
				"1": "Sand Veil"
		},
		"weightkg": 42.5,
		"prevo": "Gligar",
		"evoType": "levelHold",
		"evoItem": "Razor Fang",
		"evoCondition": "at night",
		"eggGroups": [
				"Bug"
		],
		"tier": "OU",
		"doublesTier": "DUU",
		"id": "gliscor",
		"fullname": "pokemon: Gliscor",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gliscor",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 510,
		"weighthg": 425,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mamoswine: {
		"exists": true,
		"tags": [],
		"num": 473,
		"name": "Mamoswine",
		"types": [
				"Ice",
				"Ground"
		],
		"baseStats": {
				"hp": 110,
				"atk": 130,
				"def": 80,
				"spa": 70,
				"spd": 60,
				"spe": 80
		},
		"abilities": {
				"0": "Oblivious",
				"1": "Thick Fat"
		},
		"weightkg": 291,
		"prevo": "Piloswine",
		"evoType": "levelMove",
		"evoMove": "Ancient Power",
		"eggGroups": [
				"Field"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "mamoswine",
		"fullname": "pokemon: Mamoswine",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mamoswine",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 530,
		"weighthg": 2910,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	porygonz: {
		"exists": true,
		"tags": [],
		"num": 474,
		"name": "Porygon-Z",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 85,
				"atk": 80,
				"def": 70,
				"spa": 135,
				"spd": 75,
				"spe": 90
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 34,
		"prevo": "Porygon2",
		"evoType": "trade",
		"evoItem": "Dubious Disc",
		"eggGroups": [
				"Mineral"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "porygonz",
		"fullname": "pokemon: Porygon-Z",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Porygon-Z",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 535,
		"weighthg": 340,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gallade: {
		"exists": true,
		"tags": [],
		"num": 475,
		"name": "Gallade",
		"types": [
				"Psychic",
				"Fighting"
		],
		"gender": "M",
		"baseStats": {
				"hp": 68,
				"atk": 125,
				"def": 65,
				"spa": 65,
				"spd": 115,
				"spe": 80
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 52,
		"prevo": "Kirlia",
		"evoType": "useItem",
		"evoItem": "Dawn Stone",
		"eggGroups": [
				"Human-Like",
				"Amorphous"
		],
		"otherFormes": [
				"Gallade-Mega"
		],
		"formeOrder": [
				"Gallade",
				"Gallade-Mega"
		],
		"tier": "NUBL",
		"doublesTier": "(DUU)",
		"id": "gallade",
		"fullname": "pokemon: Gallade",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gallade",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 518,
		"weighthg": 520,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gallademega: {
		"exists": true,
		"tags": [],
		"num": 475,
		"name": "Gallade-Mega",
		"baseSpecies": "Gallade",
		// "forme": "Mega",
		"types": [
				"Psychic",
				"Fighting"
		],
		"gender": "M",
		"baseStats": {
				"hp": 68,
				"atk": 165,
				"def": 95,
				"spa": 65,
				"spd": 115,
				"spe": 110
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 56.4,
		"eggGroups": [
				"Amorphous"
		],
		// "requiredItem": "Galladite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "gallademega",
		"fullname": "pokemon: Gallade-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		// "requiredItems": [
		// 		"Galladite"
		// ],
		"bst": 618,
		"weighthg": 564,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Gallade",
		// "changesFrom": "Gallade"
	},
	probopass: {
		"exists": true,
		"tags": [],
		"num": 476,
		"name": "Probopass",
		"types": [
				"Rock",
				"Steel"
		],
		"baseStats": {
				"hp": 60,
				"atk": 55,
				"def": 145,
				"spa": 75,
				"spd": 150,
				"spe": 40
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Magnet Pull"
		},
		"weightkg": 340,
		"prevo": "Nosepass",
		"evoType": "levelExtra",
		"evoCondition": "near a special magnetic field",
		"eggGroups": [
				"Mineral"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "probopass",
		"fullname": "pokemon: Probopass",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Probopass",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 525,
		"weighthg": 3400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dusknoir: {
		"exists": true,
		"tags": [],
		"num": 477,
		"name": "Dusknoir",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 45,
				"atk": 100,
				"def": 135,
				"spa": 65,
				"spd": 135,
				"spe": 45
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 106.6,
		"prevo": "Dusclops",
		"evoType": "trade",
		"evoItem": "Reaper Cloth",
		"eggGroups": [
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "dusknoir",
		"fullname": "pokemon: Dusknoir",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dusknoir",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 525,
		"weighthg": 1066,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	froslass: {
		"exists": true,
		"tags": [],
		"num": 478,
		"name": "Froslass",
		"types": [
				"Ice",
				"Ghost"
		],
		"gender": "F",
		"baseStats": {
				"hp": 70,
				"atk": 80,
				"def": 70,
				"spa": 80,
				"spd": 70,
				"spe": 110
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 26.6,
		"prevo": "Snorunt",
		"evoType": "useItem",
		"evoItem": "Dawn Stone",
		"eggGroups": [
				"Fairy",
				"Mineral"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "froslass",
		"fullname": "pokemon: Froslass",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Froslass",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 480,
		"weighthg": 266,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rotom: {
		"exists": true,
		"tags": [],
		"num": 479,
		"name": "Rotom",
		"types": [
				"Electric",
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 50,
				"def": 77,
				"spa": 95,
				"spd": 77,
				"spe": 91
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Amorphous"
		],
		"otherFormes": [
				"Rotom-Heat",
				"Rotom-Wash",
				"Rotom-Frost",
				"Rotom-Fan",
				"Rotom-Mow"
		],
		"formeOrder": [
				"Rotom",
				"Rotom-Heat",
				"Rotom-Wash",
				"Rotom-Frost",
				"Rotom-Fan",
				"Rotom-Mow"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "rotom",
		"fullname": "pokemon: Rotom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Rotom",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 440,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rotomheat: {
		"exists": true,
		"tags": [],
		"num": 479,
		"name": "Rotom-Heat",
		"baseSpecies": "Rotom",
		"forme": "Heat",
		"types": [
				"Electric",
				"Fire"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 107,
				"spa": 105,
				"spd": 107,
				"spe": 86
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Amorphous"
		],
		// "changesFrom": "Rotom",
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "rotomheat",
		"fullname": "pokemon: Rotom-Heat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 520,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rotomwash: {
		"exists": true,
		"tags": [],
		"num": 479,
		"name": "Rotom-Wash",
		"baseSpecies": "Rotom",
		"forme": "Wash",
		"types": [
				"Electric",
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 107,
				"spa": 105,
				"spd": 107,
				"spe": 86
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Amorphous"
		],
		// "changesFrom": "Rotom",
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "rotomwash",
		"fullname": "pokemon: Rotom-Wash",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 520,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rotomfrost: {
		"exists": true,
		"tags": [],
		"num": 479,
		"name": "Rotom-Frost",
		"baseSpecies": "Rotom",
		"forme": "Frost",
		"types": [
				"Electric",
				"Ice"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 107,
				"spa": 105,
				"spd": 107,
				"spe": 86
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Amorphous"
		],
		// "changesFrom": "Rotom",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "rotomfrost",
		"fullname": "pokemon: Rotom-Frost",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 520,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rotomfan: {
		"exists": true,
		"tags": [],
		"num": 479,
		"name": "Rotom-Fan",
		"baseSpecies": "Rotom",
		"forme": "Fan",
		"types": [
				"Electric",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 107,
				"spa": 105,
				"spd": 107,
				"spe": 86
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Amorphous"
		],
		// "changesFrom": "Rotom",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "rotomfan",
		"fullname": "pokemon: Rotom-Fan",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 520,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rotommow: {
		"exists": true,
		"tags": [],
		"num": 479,
		"name": "Rotom-Mow",
		"baseSpecies": "Rotom",
		"forme": "Mow",
		"types": [
				"Electric",
				"Grass"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 107,
				"spa": 105,
				"spd": 107,
				"spe": 86
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Amorphous"
		],
		// "changesFrom": "Rotom",
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "rotommow",
		"fullname": "pokemon: Rotom-Mow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 520,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	uxie: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 480,
		"name": "Uxie",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 75,
				"atk": 75,
				"def": 130,
				"spa": 75,
				"spd": 130,
				"spe": 95
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "ZUBL",
		"doublesTier": "(DUU)",
		"id": "uxie",
		"fullname": "pokemon: Uxie",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Uxie",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mesprit: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 481,
		"name": "Mesprit",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 105,
				"def": 105,
				"spa": 105,
				"spd": 105,
				"spe": 80
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "mesprit",
		"fullname": "pokemon: Mesprit",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mesprit",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	azelf: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 482,
		"name": "Azelf",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 75,
				"atk": 125,
				"def": 70,
				"spa": 125,
				"spd": 70,
				"spe": 115
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "azelf",
		"fullname": "pokemon: Azelf",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Azelf",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dialga: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 483,
		"name": "Dialga",
		"types": [
				"Steel",
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 120,
				"def": 120,
				"spa": 150,
				"spd": 100,
				"spe": 90
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 683,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Dialga-Origin"
		],
		"formeOrder": [
				"Dialga",
				"Dialga-Origin"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "dialga",
		"fullname": "pokemon: Dialga",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dialga",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 6830,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dialgaorigin: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 483,
		"name": "Dialga-Origin",
		"baseSpecies": "Dialga",
		"forme": "Origin",
		"types": [
				"Steel",
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 120,
				"spa": 150,
				"spd": 120,
				"spe": 90
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 850,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Adamant Crystal",
		// "changesFrom": "Dialga",
		"gen": 3,
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "dialgaorigin",
		"fullname": "pokemon: Dialga-Origin",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Adamant Crystal"
		// ],
		"bst": 680,
		"weighthg": 8500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	palkia: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 484,
		"name": "Palkia",
		"types": [
				"Water",
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 120,
				"def": 100,
				"spa": 150,
				"spd": 120,
				"spe": 100
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 336,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Palkia-Origin"
		],
		"formeOrder": [
				"Palkia",
				"Palkia-Origin"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "palkia",
		"fullname": "pokemon: Palkia",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Palkia",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 3360,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	palkiaorigin: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 484,
		"name": "Palkia-Origin",
		"baseSpecies": "Palkia",
		"forme": "Origin",
		"types": [
				"Water",
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 100,
				"def": 100,
				"spa": 150,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 660,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Lustrous Globe",
		// "changesFrom": "Palkia",
		"gen": 3,
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "palkiaorigin",
		"fullname": "pokemon: Palkia-Origin",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Lustrous Globe"
		// ],
		"bst": 680,
		"weighthg": 6600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	heatran: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 485,
		"name": "Heatran",
		"types": [
				"Fire",
				"Steel"
		],
		"baseStats": {
				"hp": 91,
				"atk": 90,
				"def": 106,
				"spa": 130,
				"spd": 106,
				"spe": 77
		},
		"abilities": {
				"0": "Flash Fire",
				"1": "Flame Body"
		},
		"weightkg": 430,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "OU",
		"doublesTier": "DUU",
		"id": "heatran",
		"fullname": "pokemon: Heatran",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Heatran",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 4300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	regigigas: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 486,
		"name": "Regigigas",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 110,
				"atk": 160,
				"def": 110,
				"spa": 80,
				"spd": 110,
				"spe": 100
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 420,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "regigigas",
		"fullname": "pokemon: Regigigas",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Regigigas",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 670,
		"weighthg": 4200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	giratina: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 487,
		"name": "Giratina",
		"baseForme": "Altered",
		"types": [
				"Ghost",
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 150,
				"atk": 100,
				"def": 120,
				"spa": 100,
				"spd": 120,
				"spe": 90
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 750,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Giratina-Origin"
		],
		"formeOrder": [
				"Giratina",
				"Giratina-Origin"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "giratina",
		"fullname": "pokemon: Giratina",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Giratina",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 7500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	giratinaorigin: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 487,
		"name": "Giratina-Origin",
		"baseSpecies": "Giratina",
		"forme": "Origin",
		"types": [
				"Ghost",
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 150,
				"atk": 120,
				"def": 100,
				"spa": 120,
				"spd": 100,
				"spe": 90
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 650,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Griseous Core",
		// "changesFrom": "Giratina",
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "giratinaorigin",
		"fullname": "pokemon: Giratina-Origin",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Griseous Core"
		// ],
		"bst": 680,
		"weighthg": 6500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cresselia: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 488,
		"name": "Cresselia",
		"types": [
				"Psychic"
		],
		"gender": "F",
		"baseStats": {
				"hp": 120,
				"atk": 70,
				"def": 110,
				"spa": 75,
				"spd": 120,
				"spe": 85
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 85.6,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "NU",
		"doublesTier": "DOU",
		"id": "cresselia",
		"fullname": "pokemon: Cresselia",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cresselia",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 580,
		"weighthg": 856,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	phione: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 489,
		"name": "Phione",
		"types": [
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 80,
				"def": 80,
				"spa": 80,
				"spd": 80,
				"spe": 80
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 3.1,
		"eggGroups": [
				"Water 1",
				"Fairy"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "phione",
		"fullname": "pokemon: Phione",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Phione",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 480,
		"weighthg": 31,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	manaphy: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 490,
		"name": "Manaphy",
		"types": [
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 100,
				"spa": 100,
				"spd": 100,
				"spe": 100
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 1.4,
		"eggGroups": [
				"Water 1",
				"Fairy"
		],
		"tier": "RUBL",
		"doublesTier": "(DUU)",
		"id": "manaphy",
		"fullname": "pokemon: Manaphy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Manaphy",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 14,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	darkrai: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 491,
		"name": "Darkrai",
		"types": [
				"Dark"
		],
		"gender": "N",
		"baseStats": {
				"hp": 70,
				"atk": 90,
				"def": 90,
				"spa": 135,
				"spd": 90,
				"spe": 125
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 50.5,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "OU",
		"doublesTier": "DUber",
		"id": "darkrai",
		"fullname": "pokemon: Darkrai",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Darkrai",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 505,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shaymin: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 492,
		"name": "Shaymin",
		"baseForme": "Land",
		"types": [
				"Grass"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 100,
				"spa": 100,
				"spd": 100,
				"spe": 100
		},
		"abilities": {
				"0": "Natural Cure"
		},
		"weightkg": 2.1,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Shaymin-Sky"
		],
		"formeOrder": [
				"Shaymin",
				"Shaymin-Sky"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "shaymin",
		"fullname": "pokemon: Shaymin",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Shaymin",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 21,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shayminsky: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 492,
		"name": "Shaymin-Sky",
		"baseSpecies": "Shaymin",
		"forme": "Sky",
		"types": [
				"Grass",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 103,
				"def": 75,
				"spa": 120,
				"spd": 75,
				"spe": 127
		},
		"abilities": {
				"0": "Serene Grace"
		},
		"weightkg": 5.2,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Shaymin",
		"tier": "Uber",
		"doublesTier": "(DUU)",
		"id": "shayminsky",
		"fullname": "pokemon: Shaymin-Sky",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 52,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceus: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus",
		"baseForme": "Normal",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Arceus-Bug",
				"Arceus-Dark",
				"Arceus-Dragon",
				"Arceus-Electric",
				"Arceus-Fairy",
				"Arceus-Fighting",
				"Arceus-Fire",
				"Arceus-Flying",
				"Arceus-Ghost",
				"Arceus-Grass",
				"Arceus-Ground",
				"Arceus-Ice",
				"Arceus-Poison",
				"Arceus-Psychic",
				"Arceus-Rock",
				"Arceus-Steel",
				"Arceus-Water"
		],
		"formeOrder": [
				"Arceus",
				"Arceus-Fighting",
				"Arceus-Flying",
				"Arceus-Poison",
				"Arceus-Ground",
				"Arceus-Rock",
				"Arceus-Bug",
				"Arceus-Ghost",
				"Arceus-Steel",
				"Arceus-Fire",
				"Arceus-Water",
				"Arceus-Grass",
				"Arceus-Electric",
				"Arceus-Psychic",
				"Arceus-Ice",
				"Arceus-Dragon",
				"Arceus-Dark",
				"Arceus-Fairy"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "arceus",
		"fullname": "pokemon: Arceus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Arceus",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusbug: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Bug",
		"baseSpecies": "Arceus",
		"forme": "Bug",
		"types": [
				"Bug"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Insect Plate",
		//		"Buginium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusbug",
		"fullname": "pokemon: Arceus-Bug",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusdark: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Dark",
		"baseSpecies": "Arceus",
		"forme": "Dark",
		"types": [
				"Dark"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Dread Plate",
		//		"Darkinium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusdark",
		"fullname": "pokemon: Arceus-Dark",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusdragon: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Dragon",
		"baseSpecies": "Arceus",
		"forme": "Dragon",
		"types": [
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Draco Plate",
		//		"Dragonium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusdragon",
		"fullname": "pokemon: Arceus-Dragon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceuselectric: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Electric",
		"baseSpecies": "Arceus",
		"forme": "Electric",
		"types": [
				"Electric"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Zap Plate",
		//		"Electrium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceuselectric",
		"fullname": "pokemon: Arceus-Electric",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusfairy: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Fairy",
		"baseSpecies": "Arceus",
		"forme": "Fairy",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Pixie Plate",
		//		"Fairium Z"
		// ],
		// "changesFrom": "Arceus",
		"gen": 3,
		"id": "arceusfairy",
		"fullname": "pokemon: Arceus-Fairy",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusfighting: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Fighting",
		"baseSpecies": "Arceus",
		"forme": "Fighting",
		"types": [
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Fist Plate",
		//		"Fightinium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusfighting",
		"fullname": "pokemon: Arceus-Fighting",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusfire: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Fire",
		"baseSpecies": "Arceus",
		"forme": "Fire",
		"types": [
				"Fire"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Flame Plate",
		//		"Firium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusfire",
		"fullname": "pokemon: Arceus-Fire",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusflying: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Flying",
		"baseSpecies": "Arceus",
		"forme": "Flying",
		"types": [
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Sky Plate",
		//		"Flyinium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusflying",
		"fullname": "pokemon: Arceus-Flying",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusghost: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Ghost",
		"baseSpecies": "Arceus",
		"forme": "Ghost",
		"types": [
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Spooky Plate",
		//		"Ghostium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusghost",
		"fullname": "pokemon: Arceus-Ghost",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusgrass: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Grass",
		"baseSpecies": "Arceus",
		"forme": "Grass",
		"types": [
				"Grass"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Meadow Plate",
		//		"Grassium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusgrass",
		"fullname": "pokemon: Arceus-Grass",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusground: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Ground",
		"baseSpecies": "Arceus",
		"forme": "Ground",
		"types": [
				"Ground"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Earth Plate",
		//		"Groundium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusground",
		"fullname": "pokemon: Arceus-Ground",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusice: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Ice",
		"baseSpecies": "Arceus",
		"forme": "Ice",
		"types": [
				"Ice"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Icicle Plate",
		//		"Icium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusice",
		"fullname": "pokemon: Arceus-Ice",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceuspoison: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Poison",
		"baseSpecies": "Arceus",
		"forme": "Poison",
		"types": [
				"Poison"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Toxic Plate",
		//		"Poisonium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceuspoison",
		"fullname": "pokemon: Arceus-Poison",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceuspsychic: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Psychic",
		"baseSpecies": "Arceus",
		"forme": "Psychic",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Mind Plate",
		//		"Psychium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceuspsychic",
		"fullname": "pokemon: Arceus-Psychic",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceusrock: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Rock",
		"baseSpecies": "Arceus",
		"forme": "Rock",
		"types": [
				"Rock"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Stone Plate",
		//		"Rockium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceusrock",
		"fullname": "pokemon: Arceus-Rock",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceussteel: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Steel",
		"baseSpecies": "Arceus",
		"forme": "Steel",
		"types": [
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Iron Plate",
		//		"Steelium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceussteel",
		"fullname": "pokemon: Arceus-Steel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	arceuswater: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 493,
		"name": "Arceus-Water",
		"baseSpecies": "Arceus",
		"forme": "Water",
		"types": [
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 120,
				"atk": 120,
				"def": 120,
				"spa": 120,
				"spd": 120,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 320,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItems": [
		// 		"Splash Plate",
		//		"Waterium Z"
		// ],
		// "changesFrom": "Arceus",
		"id": "arceuswater",
		"fullname": "pokemon: Arceus-Water",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 720,
		"weighthg": 3200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	victini: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 494,
		"name": "Victini",
		"types": [
				"Psychic",
				"Fire"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 100,
				"def": 100,
				"spa": 100,
				"spd": 100,
				"spe": 100
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 4,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "victini",
		"fullname": "pokemon: Victini",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Victini",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 40,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	snivy: {
		"exists": true,
		"tags": [],
		"num": 495,
		"name": "Snivy",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 45,
				"atk": 45,
				"def": 55,
				"spa": 45,
				"spd": 55,
				"spe": 63
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 8.1,
		"evos": [
				"Servine"
		],
		"eggGroups": [
				"Field",
				"Grass"
		],
		"tier": "NFE",
		"id": "snivy",
		"fullname": "pokemon: Snivy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Snivy",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"bst": 308,
		"weighthg": 81,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	servine: {
		"exists": true,
		"tags": [],
		"num": 496,
		"name": "Servine",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 60,
				"atk": 60,
				"def": 75,
				"spa": 60,
				"spd": 75,
				"spe": 83
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 16,
		"prevo": "Snivy",
		"evoLevel": 17,
		"evos": [
				"Serperior"
		],
		"eggGroups": [
				"Field",
				"Grass"
		],
		"tier": "NFE",
		"id": "servine",
		"fullname": "pokemon: Servine",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Servine",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 413,
		"weighthg": 160,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	serperior: {
		"exists": true,
		"tags": [],
		"num": 497,
		"name": "Serperior",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 75,
				"atk": 75,
				"def": 95,
				"spa": 75,
				"spd": 95,
				"spe": 113
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 63,
		"prevo": "Servine",
		"evoLevel": 36,
		"eggGroups": [
				"Field",
				"Grass"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "serperior",
		"fullname": "pokemon: Serperior",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Serperior",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 528,
		"weighthg": 630,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tepig: {
		"exists": true,
		"tags": [],
		"num": 498,
		"name": "Tepig",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 65,
				"atk": 63,
				"def": 45,
				"spa": 45,
				"spd": 45,
				"spe": 45
		},
		"abilities": {
				"0": "Blaze",
				"1": "Thick Fat"
		},
		"weightkg": 9.9,
		"evos": [
				"Pignite"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "tepig",
		"fullname": "pokemon: Tepig",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tepig",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 308,
		"weighthg": 99,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pignite: {
		"exists": true,
		"tags": [],
		"num": 499,
		"name": "Pignite",
		"types": [
				"Fire",
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 90,
				"atk": 93,
				"def": 55,
				"spa": 70,
				"spd": 55,
				"spe": 55
		},
		"abilities": {
				"0": "Blaze",
				"1": "Thick Fat"
		},
		"weightkg": 55.5,
		"prevo": "Tepig",
		"evoLevel": 17,
		"evos": [
				"Emboar"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "pignite",
		"fullname": "pokemon: Pignite",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pignite",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 418,
		"weighthg": 555,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	emboar: {
		"exists": true,
		"tags": [],
		"num": 500,
		"name": "Emboar",
		"types": [
				"Fire",
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 110,
				"atk": 123,
				"def": 65,
				"spa": 100,
				"spd": 65,
				"spe": 65
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 150,
		"prevo": "Pignite",
		"evoLevel": 36,
		"eggGroups": [
				"Field"
		],
		"tier": "ZUBL",
		"doublesTier": "(DUU)",
		"id": "emboar",
		"fullname": "pokemon: Emboar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Emboar",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 528,
		"weighthg": 1500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	oshawott: {
		"exists": true,
		"tags": [],
		"num": 501,
		"name": "Oshawott",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 55,
				"atk": 55,
				"def": 45,
				"spa": 63,
				"spd": 45,
				"spe": 45
		},
		"abilities": {
				"0": "Torrent",
				"1": "Shell Armor"
		},
		"weightkg": 5.9,
		"evos": [
				"Dewott"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "oshawott",
		"fullname": "pokemon: Oshawott",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Oshawott",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 308,
		"weighthg": 59,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dewott: {
		"exists": true,
		"tags": [],
		"num": 502,
		"name": "Dewott",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 75,
				"atk": 75,
				"def": 60,
				"spa": 83,
				"spd": 60,
				"spe": 60
		},
		"abilities": {
				"0": "Torrent",
				"1": "Shell Armor"
		},
		"weightkg": 24.5,
		"prevo": "Oshawott",
		"evoLevel": 17,
		"evos": [
				"Samurott",
				"Samurott-Hisui"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "dewott",
		"fullname": "pokemon: Dewott",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dewott",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 413,
		"weighthg": 245,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	samurott: {
		"exists": true,
		"tags": [],
		"num": 503,
		"name": "Samurott",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 95,
				"atk": 100,
				"def": 85,
				"spa": 108,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Torrent",
				"1": "Shell Armor"
		},
		"weightkg": 94.6,
		"prevo": "Dewott",
		"evoLevel": 36,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Samurott-Hisui"
		],
		"formeOrder": [
				"Samurott",
				"Samurott-Hisui"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "samurott",
		"fullname": "pokemon: Samurott",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Samurott",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 528,
		"weighthg": 946,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	samurotthisui: {
		"exists": true,
		"tags": [],
		"num": 503,
		"name": "Samurott-Hisui",
		"baseSpecies": "Samurott",
		"forme": "Hisui",
		"types": [
				"Water",
				"Dark"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 90,
				"atk": 108,
				"def": 80,
				"spa": 100,
				"spd": 65,
				"spe": 85
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 58.2,
		"prevo": "Dewott",
		"evoLevel": 36,
		"eggGroups": [
				"Field"
		],
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "samurotthisui",
		"fullname": "pokemon: Samurott-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 528,
		"weighthg": 582,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	patrat: {
		"exists": true,
		"tags": [],
		"num": 504,
		"name": "Patrat",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 45,
				"atk": 55,
				"def": 39,
				"spa": 35,
				"spd": 39,
				"spe": 42
		},
		"abilities": {
				"0": "Run Away",
				"1": "Keen Eye"
		},
		"weightkg": 11.6,
		"evos": [
				"Watchog"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "patrat",
		"fullname": "pokemon: Patrat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Patrat",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 255,
		"weighthg": 116,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	watchog: {
		"exists": true,
		"tags": [],
		"num": 505,
		"name": "Watchog",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 60,
				"atk": 85,
				"def": 69,
				"spa": 60,
				"spd": 69,
				"spe": 77
		},
		"abilities": {
				"0": "Illuminate",
				"1": "Keen Eye"
		},
		"weightkg": 27,
		"prevo": "Patrat",
		"evoLevel": 20,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "watchog",
		"fullname": "pokemon: Watchog",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Watchog",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 270,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lillipup: {
		"exists": true,
		"tags": [],
		"num": 506,
		"name": "Lillipup",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 45,
				"atk": 60,
				"def": 45,
				"spa": 25,
				"spd": 45,
				"spe": 55
		},
		"abilities": {
				"0": "Vital Spirit",
				"1": "Pickup",
				"H": "Run Away"
		},
		"weightkg": 4.1,
		"evos": [
				"Herdier"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lillipup",
		"fullname": "pokemon: Lillipup",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Lillipup",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 275,
		"weighthg": 41,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	herdier: {
		"exists": true,
		"tags": [],
		"num": 507,
		"name": "Herdier",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 65,
				"atk": 80,
				"def": 65,
				"spa": 35,
				"spd": 65,
				"spe": 60
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 14.7,
		"prevo": "Lillipup",
		"evoLevel": 16,
		"evos": [
				"Stoutland"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "herdier",
		"fullname": "pokemon: Herdier",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Herdier",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 370,
		"weighthg": 147,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	stoutland: {
		"exists": true,
		"tags": [],
		"num": 508,
		"name": "Stoutland",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 85,
				"atk": 110,
				"def": 90,
				"spa": 45,
				"spd": 90,
				"spe": 80
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 61,
		"prevo": "Herdier",
		"evoLevel": 32,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "stoutland",
		"fullname": "pokemon: Stoutland",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Stoutland",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 610,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	purrloin: {
		"exists": true,
		"tags": [],
		"num": 509,
		"name": "Purrloin",
		"types": [
				"Dark"
		],
		"baseStats": {
				"hp": 41,
				"atk": 50,
				"def": 37,
				"spa": 50,
				"spd": 37,
				"spe": 66
		},
		"abilities": {
				"0": "Limber"
		},
		"weightkg": 10.1,
		"evos": [
				"Liepard"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "purrloin",
		"fullname": "pokemon: Purrloin",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Purrloin",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 281,
		"weighthg": 101,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	liepard: {
		"exists": true,
		"tags": [],
		"num": 510,
		"name": "Liepard",
		"types": [
				"Dark"
		],
		"baseStats": {
				"hp": 64,
				"atk": 88,
				"def": 50,
				"spa": 88,
				"spd": 50,
				"spe": 106
		},
		"abilities": {
				"0": "Limber"
		},
		"weightkg": 37.5,
		"prevo": "Purrloin",
		"evoLevel": 20,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "liepard",
		"fullname": "pokemon: Liepard",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Liepard",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 446,
		"weighthg": 375,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pansage: {
		"exists": true,
		"tags": [],
		"num": 511,
		"name": "Pansage",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 50,
				"atk": 53,
				"def": 48,
				"spa": 53,
				"spd": 48,
				"spe": 64
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 10.5,
		"evos": [
				"Simisage"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pansage",
		"fullname": "pokemon: Pansage",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pansage",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 316,
		"weighthg": 105,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	simisage: {
		"exists": true,
		"tags": [],
		"num": 512,
		"name": "Simisage",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 75,
				"atk": 98,
				"def": 63,
				"spa": 98,
				"spd": 63,
				"spe": 101
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 30.5,
		"prevo": "Pansage",
		"evoType": "useItem",
		"evoItem": "Leaf Stone",
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "simisage",
		"fullname": "pokemon: Simisage",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Simisage",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 498,
		"weighthg": 305,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pansear: {
		"exists": true,
		"tags": [],
		"num": 513,
		"name": "Pansear",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 50,
				"atk": 53,
				"def": 48,
				"spa": 53,
				"spd": 48,
				"spe": 64
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 11,
		"evos": [
				"Simisear"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pansear",
		"fullname": "pokemon: Pansear",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pansear",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 316,
		"weighthg": 110,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	simisear: {
		"exists": true,
		"tags": [],
		"num": 514,
		"name": "Simisear",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 75,
				"atk": 98,
				"def": 63,
				"spa": 98,
				"spd": 63,
				"spe": 101
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 28,
		"prevo": "Pansear",
		"evoType": "useItem",
		"evoItem": "Fire Stone",
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "simisear",
		"fullname": "pokemon: Simisear",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Simisear",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 498,
		"weighthg": 280,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	panpour: {
		"exists": true,
		"tags": [],
		"num": 515,
		"name": "Panpour",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 50,
				"atk": 53,
				"def": 48,
				"spa": 53,
				"spd": 48,
				"spe": 64
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 13.5,
		"evos": [
				"Simipour"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "panpour",
		"fullname": "pokemon: Panpour",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Panpour",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 316,
		"weighthg": 135,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	simipour: {
		"exists": true,
		"tags": [],
		"num": 516,
		"name": "Simipour",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 75,
				"atk": 98,
				"def": 63,
				"spa": 98,
				"spd": 63,
				"spe": 101
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 29,
		"prevo": "Panpour",
		"evoType": "useItem",
		"evoItem": "Water Stone",
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "simipour",
		"fullname": "pokemon: Simipour",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Simipour",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 498,
		"weighthg": 290,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	munna: {
		"exists": true,
		"tags": [],
		"num": 517,
		"name": "Munna",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 76,
				"atk": 25,
				"def": 45,
				"spa": 67,
				"spd": 55,
				"spe": 24
		},
		"abilities": {
				"0": "Synchronize"
		},
		"weightkg": 23.3,
		"evos": [
				"Musharna"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "munna",
		"fullname": "pokemon: Munna",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Munna",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 292,
		"weighthg": 233,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	musharna: {
		"exists": true,
		"tags": [],
		"num": 518,
		"name": "Musharna",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 116,
				"atk": 55,
				"def": 85,
				"spa": 107,
				"spd": 95,
				"spe": 29
		},
		"abilities": {
				"0": "Synchronize"
		},
		"weightkg": 60.5,
		"prevo": "Munna",
		"evoType": "useItem",
		"evoItem": "Moon Stone",
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "musharna",
		"fullname": "pokemon: Musharna",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Musharna",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 487,
		"weighthg": 605,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pidove: {
		"exists": true,
		"tags": [],
		"num": 519,
		"name": "Pidove",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 50,
				"atk": 55,
				"def": 50,
				"spa": 36,
				"spd": 30,
				"spe": 43
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 2.1,
		"evos": [
				"Tranquill"
		],
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pidove",
		"fullname": "pokemon: Pidove",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pidove",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 264,
		"weighthg": 21,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tranquill: {
		"exists": true,
		"tags": [],
		"num": 520,
		"name": "Tranquill",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 62,
				"atk": 77,
				"def": 62,
				"spa": 50,
				"spd": 42,
				"spe": 65
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 15,
		"prevo": "Pidove",
		"evoLevel": 21,
		"evos": [
				"Unfezant"
		],
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tranquill",
		"fullname": "pokemon: Tranquill",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tranquill",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 358,
		"weighthg": 150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	unfezant: {
		"exists": true,
		"tags": [],
		"num": 521,
		"name": "Unfezant",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 80,
				"atk": 115,
				"def": 80,
				"spa": 65,
				"spd": 55,
				"spe": 93
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 29,
		"prevo": "Tranquill",
		"evoLevel": 32,
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "unfezant",
		"fullname": "pokemon: Unfezant",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Unfezant",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 488,
		"weighthg": 290,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	blitzle: {
		"exists": true,
		"tags": [],
		"num": 522,
		"name": "Blitzle",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 45,
				"atk": 60,
				"def": 32,
				"spa": 50,
				"spd": 32,
				"spe": 76
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 29.8,
		"evos": [
				"Zebstrika"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "blitzle",
		"fullname": "pokemon: Blitzle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Blitzle",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 295,
		"weighthg": 298,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zebstrika: {
		"exists": true,
		"tags": [],
		"num": 523,
		"name": "Zebstrika",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 75,
				"atk": 100,
				"def": 63,
				"spa": 80,
				"spd": 63,
				"spe": 116
		},
		"abilities": {
				"0": "Lightning Rod"
		},
		"weightkg": 79.5,
		"prevo": "Blitzle",
		"evoLevel": 27,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "zebstrika",
		"fullname": "pokemon: Zebstrika",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Zebstrika",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 497,
		"weighthg": 795,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	roggenrola: {
		"exists": true,
		"tags": [],
		"num": 524,
		"name": "Roggenrola",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 55,
				"atk": 75,
				"def": 85,
				"spa": 25,
				"spd": 25,
				"spe": 15
		},
		"abilities": {
				"0": "Sturdy"
		},
		"weightkg": 18,
		"evos": [
				"Boldore"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "roggenrola",
		"fullname": "pokemon: Roggenrola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Roggenrola",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 280,
		"weighthg": 180,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	boldore: {
		"exists": true,
		"tags": [],
		"num": 525,
		"name": "Boldore",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 70,
				"atk": 105,
				"def": 105,
				"spa": 50,
				"spd": 40,
				"spe": 20
		},
		"abilities": {
				"0": "Sturdy"
		},
		"weightkg": 102,
		"prevo": "Roggenrola",
		"evoLevel": 25,
		"evos": [
				"Gigalith"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "boldore",
		"fullname": "pokemon: Boldore",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Boldore",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 390,
		"weighthg": 1020,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gigalith: {
		"exists": true,
		"tags": [],
		"num": 526,
		"name": "Gigalith",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 85,
				"atk": 135,
				"def": 130,
				"spa": 60,
				"spd": 80,
				"spe": 25
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Sand Stream"
		},
		"weightkg": 260,
		"prevo": "Boldore",
		"evoType": "trade",
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "gigalith",
		"fullname": "pokemon: Gigalith",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Gigalith",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 515,
		"weighthg": 2600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	woobat: {
		"exists": true,
		"tags": [],
		"num": 527,
		"name": "Woobat",
		"types": [
				"Psychic",
				"Flying"
		],
		"baseStats": {
				"hp": 65,
				"atk": 45,
				"def": 43,
				"spa": 55,
				"spd": 43,
				"spe": 72
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 2.1,
		"evos": [
				"Swoobat"
		],
		"eggGroups": [
				"Flying",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "woobat",
		"fullname": "pokemon: Woobat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Woobat",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 323,
		"weighthg": 21,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swoobat: {
		"exists": true,
		"tags": [],
		"num": 528,
		"name": "Swoobat",
		"types": [
				"Psychic",
				"Flying"
		],
		"baseStats": {
				"hp": 67,
				"atk": 57,
				"def": 55,
				"spa": 77,
				"spd": 55,
				"spe": 114
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 10.5,
		"prevo": "Woobat",
		"evoType": "levelFriendship",
		"eggGroups": [
				"Flying",
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "swoobat",
		"fullname": "pokemon: Swoobat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Swoobat",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 425,
		"weighthg": 105,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	drilbur: {
		"exists": true,
		"tags": [],
		"num": 529,
		"name": "Drilbur",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 60,
				"atk": 85,
				"def": 40,
				"spa": 30,
				"spd": 45,
				"spe": 68
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 8.5,
		"evos": [
				"Excadrill"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "drilbur",
		"fullname": "pokemon: Drilbur",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Drilbur",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 328,
		"weighthg": 85,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	excadrill: {
		"exists": true,
		"tags": [],
		"num": 530,
		"name": "Excadrill",
		"types": [
				"Ground",
				"Steel"
		],
		"baseStats": {
				"hp": 110,
				"atk": 135,
				"def": 60,
				"spa": 50,
				"spd": 65,
				"spe": 88
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 40.4,
		"prevo": "Drilbur",
		"evoLevel": 31,
		"eggGroups": [
				"Field"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "excadrill",
		"fullname": "pokemon: Excadrill",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Excadrill",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 508,
		"weighthg": 404,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	audino: {
		"exists": true,
		"tags": [],
		"num": 531,
		"name": "Audino",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 103,
				"atk": 60,
				"def": 86,
				"spa": 60,
				"spd": 86,
				"spe": 50
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 31,
		"eggGroups": [
				"Fairy"
		],
		"otherFormes": [
				"Audino-Mega"
		],
		"formeOrder": [
				"Audino",
				"Audino-Mega"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "audino",
		"fullname": "pokemon: Audino",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Audino",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 445,
		"weighthg": 310,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	audinomega: {
		"exists": true,
		"tags": [],
		"num": 531,
		"name": "Audino-Mega",
		"baseSpecies": "Audino",
		// "forme": "Mega",
		"types": [
				"Normal",
				"Normal"
		],
		"baseStats": {
				"hp": 103,
				"atk": 60,
				"def": 126,
				"spa": 80,
				"spd": 126,
				"spe": 50
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 32,
		"eggGroups": [
				"Fairy"
		],
		// "requiredItem": "Audinite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "audinomega",
		"fullname": "pokemon: Audino-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		// "requiredItems": [
		// 		"Audinite"
		// ],
		"bst": 545,
		"weighthg": 320,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Audino",
		// "changesFrom": "Audino"
	},
	timburr: {
		"exists": true,
		"tags": [],
		"num": 532,
		"name": "Timburr",
		"types": [
				"Fighting"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 75,
				"atk": 80,
				"def": 55,
				"spa": 25,
				"spd": 35,
				"spe": 35
		},
		"abilities": {
				"0": "Guts"
		},
		"weightkg": 12.5,
		"evos": [
				"Gurdurr"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "LC",
		"id": "timburr",
		"fullname": "pokemon: Timburr",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Timburr",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 305,
		"weighthg": 125,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gurdurr: {
		"exists": true,
		"tags": [],
		"num": 533,
		"name": "Gurdurr",
		"types": [
				"Fighting"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 85,
				"atk": 105,
				"def": 85,
				"spa": 40,
				"spd": 50,
				"spe": 40
		},
		"abilities": {
				"0": "Guts"
		},
		"weightkg": 40,
		"prevo": "Timburr",
		"evoLevel": 25,
		"evos": [
				"Conkeldurr"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "NFE",
		"id": "gurdurr",
		"fullname": "pokemon: Gurdurr",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gurdurr",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	conkeldurr: {
		"exists": true,
		"tags": [],
		"num": 534,
		"name": "Conkeldurr",
		"types": [
				"Fighting"
		],
		"genderRatio": {
				"M": 0.75,
				"F": 0.25
		},
		"baseStats": {
				"hp": 105,
				"atk": 140,
				"def": 95,
				"spa": 55,
				"spd": 65,
				"spe": 45
		},
		"abilities": {
				"0": "Guts"
		},
		"weightkg": 87,
		"prevo": "Gurdurr",
		"evoType": "trade",
		"eggGroups": [
				"Human-Like"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "conkeldurr",
		"fullname": "pokemon: Conkeldurr",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Conkeldurr",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 505,
		"weighthg": 870,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tympole: {
		"exists": true,
		"tags": [],
		"num": 535,
		"name": "Tympole",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 50,
				"atk": 50,
				"def": 40,
				"spa": 50,
				"spd": 40,
				"spe": 64
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Absorb"
		},
		"weightkg": 4.5,
		"evos": [
				"Palpitoad"
		],
		"eggGroups": [
				"Water 1"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tympole",
		"fullname": "pokemon: Tympole",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tympole",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 294,
		"weighthg": 45,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	palpitoad: {
		"exists": true,
		"tags": [],
		"num": 536,
		"name": "Palpitoad",
		"types": [
				"Water",
				"Ground"
		],
		"baseStats": {
				"hp": 75,
				"atk": 65,
				"def": 55,
				"spa": 65,
				"spd": 55,
				"spe": 69
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Absorb"
		},
		"weightkg": 17,
		"prevo": "Tympole",
		"evoLevel": 25,
		"evos": [
				"Seismitoad"
		],
		"eggGroups": [
				"Water 1"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "palpitoad",
		"fullname": "pokemon: Palpitoad",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Palpitoad",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 384,
		"weighthg": 170,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	seismitoad: {
		"exists": true,
		"tags": [],
		"num": 537,
		"name": "Seismitoad",
		"types": [
				"Water",
				"Ground"
		],
		"baseStats": {
				"hp": 105,
				"atk": 95,
				"def": 75,
				"spa": 85,
				"spd": 75,
				"spe": 74
		},
		"abilities": {
				"0": "Swift Swim",
				"1": "Water Absorb"
		},
		"weightkg": 62,
		"prevo": "Palpitoad",
		"evoLevel": 36,
		"eggGroups": [
				"Water 1"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "seismitoad",
		"fullname": "pokemon: Seismitoad",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Seismitoad",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 509,
		"weighthg": 620,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	throh: {
		"exists": true,
		"tags": [],
		"num": 538,
		"name": "Throh",
		"types": [
				"Fighting"
		],
		"gender": "M",
		"baseStats": {
				"hp": 120,
				"atk": 100,
				"def": 85,
				"spa": 30,
				"spd": 85,
				"spe": 45
		},
		"abilities": {
				"0": "Guts",
				"1": "Inner Focus"
		},
		"weightkg": 55.5,
		"eggGroups": [
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "throh",
		"fullname": "pokemon: Throh",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Throh",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 465,
		"weighthg": 555,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sawk: {
		"exists": true,
		"tags": [],
		"num": 539,
		"name": "Sawk",
		"types": [
				"Fighting"
		],
		"gender": "M",
		"baseStats": {
				"hp": 75,
				"atk": 125,
				"def": 75,
				"spa": 30,
				"spd": 75,
				"spe": 85
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Inner Focus"
		},
		"weightkg": 51,
		"eggGroups": [
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "sawk",
		"fullname": "pokemon: Sawk",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Sawk",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 465,
		"weighthg": 510,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sewaddle: {
		"exists": true,
		"tags": [],
		"num": 540,
		"name": "Sewaddle",
		"types": [
				"Bug",
				"Grass"
		],
		"baseStats": {
				"hp": 45,
				"atk": 53,
				"def": 70,
				"spa": 40,
				"spd": 60,
				"spe": 42
		},
		"abilities": {
				"0": "Swarm",
				"1": "Chlorophyll"
		},
		"weightkg": 2.5,
		"evos": [
				"Swadloon"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "sewaddle",
		"fullname": "pokemon: Sewaddle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sewaddle",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 310,
		"weighthg": 25,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swadloon: {
		"exists": true,
		"tags": [],
		"num": 541,
		"name": "Swadloon",
		"types": [
				"Bug",
				"Grass"
		],
		"baseStats": {
				"hp": 55,
				"atk": 63,
				"def": 90,
				"spa": 50,
				"spd": 80,
				"spe": 42
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 7.3,
		"prevo": "Sewaddle",
		"evoLevel": 20,
		"evos": [
				"Leavanny"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "NFE",
		"id": "swadloon",
		"fullname": "pokemon: Swadloon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Swadloon",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 380,
		"weighthg": 73,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	leavanny: {
		"exists": true,
		"tags": [],
		"num": 542,
		"name": "Leavanny",
		"types": [
				"Bug",
				"Grass"
		],
		"baseStats": {
				"hp": 75,
				"atk": 103,
				"def": 80,
				"spa": 70,
				"spd": 80,
				"spe": 92
		},
		"abilities": {
				"0": "Swarm",
				"1": "Chlorophyll"
		},
		"weightkg": 20.5,
		"prevo": "Swadloon",
		"evoType": "levelFriendship",
		"eggGroups": [
				"Bug"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "leavanny",
		"fullname": "pokemon: Leavanny",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Leavanny",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 205,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	venipede: {
		"exists": true,
		"tags": [],
		"num": 543,
		"name": "Venipede",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 30,
				"atk": 45,
				"def": 59,
				"spa": 30,
				"spd": 39,
				"spe": 57
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Swarm",
				"H": "Speed Boost"
		},
		"weightkg": 5.3,
		"evos": [
				"Whirlipede"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "venipede",
		"fullname": "pokemon: Venipede",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Venipede",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 260,
		"weighthg": 53,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	whirlipede: {
		"exists": true,
		"tags": [],
		"num": 544,
		"name": "Whirlipede",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 40,
				"atk": 55,
				"def": 99,
				"spa": 40,
				"spd": 79,
				"spe": 47
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Swarm",
				"H": "Speed Boost"
		},
		"weightkg": 58.5,
		"prevo": "Venipede",
		"evoLevel": 22,
		"evos": [
				"Scolipede"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "whirlipede",
		"fullname": "pokemon: Whirlipede",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Whirlipede",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 360,
		"weighthg": 585,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	scolipede: {
		"exists": true,
		"tags": [],
		"num": 545,
		"name": "Scolipede",
		"types": [
				"Bug",
				"Poison"
		],
		"baseStats": {
				"hp": 60,
				"atk": 100,
				"def": 89,
				"spa": 55,
				"spd": 69,
				"spe": 112
		},
		"abilities": {
				"0": "Poison Point",
				"1": "Swarm",
				"H": "Speed Boost"
		},
		"weightkg": 200.5,
		"prevo": "Whirlipede",
		"evoLevel": 30,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "scolipede",
		"fullname": "pokemon: Scolipede",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Scolipede",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 2005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cottonee: {
		"exists": true,
		"tags": [],
		"num": 546,
		"name": "Cottonee",
		"types": [
				"Grass",
				"Normal"
		],
		"baseStats": {
				"hp": 40,
				"atk": 27,
				"def": 60,
				"spa": 37,
				"spd": 50,
				"spe": 66
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 0.6,
		"evos": [
				"Whimsicott"
		],
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"tier": "LC",
		"id": "cottonee",
		"fullname": "pokemon: Cottonee",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cottonee",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 280,
		"weighthg": 6,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	whimsicott: {
		"exists": true,
		"tags": [],
		"num": 547,
		"name": "Whimsicott",
		"types": [
				"Grass",
				"Normal"
		],
		"baseStats": {
				"hp": 60,
				"atk": 67,
				"def": 85,
				"spa": 77,
				"spd": 75,
				"spe": 116
		},
		"abilities": {
				"0": "Chlorophyll"
		},
		"weightkg": 6.6,
		"prevo": "Cottonee",
		"evoType": "useItem",
		"evoItem": "Sun Stone",
		"eggGroups": [
				"Fairy",
				"Grass"
		],
		"tier": "ZU",
		"doublesTier": "DOU",
		"id": "whimsicott",
		"fullname": "pokemon: Whimsicott",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Whimsicott",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 66,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	petilil: {
		"exists": true,
		"tags": [],
		"num": 548,
		"name": "Petilil",
		"types": [
				"Grass"
		],
		"gender": "F",
		"baseStats": {
				"hp": 45,
				"atk": 35,
				"def": 50,
				"spa": 70,
				"spd": 50,
				"spe": 30
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Own Tempo"
		},
		"weightkg": 6.6,
		"evos": [
				"Lilligant",
				"Lilligant-Hisui"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "LC",
		"id": "petilil",
		"fullname": "pokemon: Petilil",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Petilil",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 280,
		"weighthg": 66,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lilligant: {
		"exists": true,
		"tags": [],
		"num": 549,
		"name": "Lilligant",
		"types": [
				"Grass"
		],
		"gender": "F",
		"baseStats": {
				"hp": 70,
				"atk": 60,
				"def": 75,
				"spa": 110,
				"spd": 75,
				"spe": 90
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Own Tempo"
		},
		"weightkg": 16.3,
		"prevo": "Petilil",
		"evoType": "useItem",
		"evoItem": "Sun Stone",
		"eggGroups": [
				"Grass"
		],
		"otherFormes": [
				"Lilligant-Hisui"
		],
		"formeOrder": [
				"Lilligant",
				"Lilligant-Hisui"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "lilligant",
		"fullname": "pokemon: Lilligant",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lilligant",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 480,
		"weighthg": 163,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lilliganthisui: {
		"exists": true,
		"tags": [],
		"num": 549,
		"name": "Lilligant-Hisui",
		"baseSpecies": "Lilligant",
		"forme": "Hisui",
		"types": [
				"Grass",
				"Fighting"
		],
		"gender": "F",
		"baseStats": {
				"hp": 70,
				"atk": 105,
				"def": 75,
				"spa": 50,
				"spd": 75,
				"spe": 105
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Hustle"
		},
		"weightkg": 19.2,
		"prevo": "Petilil",
		"evoType": "useItem",
		"evoItem": "Sun Stone",
		"eggGroups": [
				"Grass"
		],
		"tier": "NUBL",
		"doublesTier": "(DUU)",
		"id": "lilliganthisui",
		"fullname": "pokemon: Lilligant-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 480,
		"weighthg": 192,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	basculin: {
		"exists": true,
		"tags": [],
		"num": 550,
		"name": "Basculin",
		"baseForme": "Red-Striped",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 70,
				"atk": 92,
				"def": 65,
				"spa": 80,
				"spd": 55,
				"spe": 98
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 18,
		"eggGroups": [
				"Water 2"
		],
		"otherFormes": [
				"Basculin-Blue-Striped",
				"Basculin-White-Striped"
		],
		"formeOrder": [
				"Basculin",
				"Basculin-Blue-Striped",
				"Basculin-White-Striped"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "basculin",
		"fullname": "pokemon: Basculin",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Basculin",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 180,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	basculinbluestriped: {
		"exists": true,
		"tags": [],
		"num": 550,
		"name": "Basculin-Blue-Striped",
		"baseSpecies": "Basculin",
		"forme": "Blue-Striped",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 70,
				"atk": 92,
				"def": 65,
				"spa": 80,
				"spd": 55,
				"spe": 98
		},
		"abilities": {
				"0": "Rock Head"
		},
		"weightkg": 18,
		"eggGroups": [
				"Water 2"
		],
		"id": "basculinbluestriped",
		"fullname": "pokemon: Basculin-Blue-Striped",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 180,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	basculinwhitestriped: {
		"exists": true,
		"tags": [],
		"num": 550,
		"name": "Basculin-White-Striped",
		"baseSpecies": "Basculin",
		"forme": "White-Striped",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 70,
				"atk": 92,
				"def": 65,
				"spa": 80,
				"spd": 55,
				"spe": 98
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 18,
		"evos": [
				"Basculegion",
				"Basculegion-F"
		],
		"eggGroups": [
				"Water 2"
		],
		"gen": 3,
		"id": "basculinwhitestriped",
		"fullname": "pokemon: Basculin-White-Striped",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 460,
		"weighthg": 180,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sandile: {
		"exists": true,
		"tags": [],
		"num": 551,
		"name": "Sandile",
		"types": [
				"Ground",
				"Dark"
		],
		"baseStats": {
				"hp": 50,
				"atk": 72,
				"def": 35,
				"spa": 35,
				"spd": 35,
				"spe": 65
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 15.2,
		"evos": [
				"Krokorok"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "sandile",
		"fullname": "pokemon: Sandile",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sandile",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 292,
		"weighthg": 152,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	krokorok: {
		"exists": true,
		"tags": [],
		"num": 552,
		"name": "Krokorok",
		"types": [
				"Ground",
				"Dark"
		],
		"baseStats": {
				"hp": 60,
				"atk": 82,
				"def": 45,
				"spa": 45,
				"spd": 45,
				"spe": 74
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 33.4,
		"prevo": "Sandile",
		"evoLevel": 29,
		"evos": [
				"Krookodile"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "krokorok",
		"fullname": "pokemon: Krokorok",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Krokorok",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 351,
		"weighthg": 334,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	krookodile: {
		"exists": true,
		"tags": [],
		"num": 553,
		"name": "Krookodile",
		"types": [
				"Ground",
				"Dark"
		],
		"baseStats": {
				"hp": 95,
				"atk": 117,
				"def": 80,
				"spa": 65,
				"spd": 70,
				"spe": 92
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 96.3,
		"prevo": "Krokorok",
		"evoLevel": 40,
		"eggGroups": [
				"Field"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "krookodile",
		"fullname": "pokemon: Krookodile",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Krookodile",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 519,
		"weighthg": 963,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	darumaka: {
		"exists": true,
		"tags": [],
		"num": 554,
		"name": "Darumaka",
		"types": [
				"Fire"
		],
		"baseStats": {
				"hp": 70,
				"atk": 90,
				"def": 45,
				"spa": 15,
				"spd": 45,
				"spe": 50
		},
		"abilities": {
				"0": "Hustle",
				"1": "Inner Focus"
		},
		"weightkg": 37.5,
		"evos": [
				"Darmanitan"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Darumaka-Galar"
		],
		"formeOrder": [
				"Darumaka",
				"Darumaka-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "darumaka",
		"fullname": "pokemon: Darumaka",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Darumaka",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 315,
		"weighthg": 375,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	darumakagalar: {
		"exists": true,
		"tags": [],
		"num": 554,
		"name": "Darumaka-Galar",
		"baseSpecies": "Darumaka",
		"forme": "Galar",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 70,
				"atk": 90,
				"def": 45,
				"spa": 15,
				"spd": 45,
				"spe": 50
		},
		"abilities": {
				"0": "Hustle",
				"1": "Inner Focus"
		},
		"weightkg": 40,
		"evos": [
				"Darmanitan-Galar"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "darumakagalar",
		"fullname": "pokemon: Darumaka-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 315,
		"weighthg": 400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	darmanitan: {
		"exists": true,
		"tags": [],
		"num": 555,
		"name": "Darmanitan",
		"baseForme": "Standard",
		"types": [
				"Fire"
		],
		"baseStats": {
				"hp": 105,
				"atk": 140,
				"def": 55,
				"spa": 30,
				"spd": 55,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 92.9,
		"prevo": "Darumaka",
		"evoLevel": 35,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Darmanitan-Zen",
				"Darmanitan-Galar",
				"Darmanitan-Galar-Zen"
		],
		"formeOrder": [
				"Darmanitan",
				"Darmanitan-Zen",
				"Darmanitan-Galar",
				"Darmanitan-Galar-Zen"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "darmanitan",
		"fullname": "pokemon: Darmanitan",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Darmanitan",
		"forme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 929,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	darmanitanzen: {
		"exists": true,
		"tags": [],
		"num": 555,
		"name": "Darmanitan-Zen",
		"baseSpecies": "Darmanitan",
		"forme": "Zen",
		"types": [
				"Fire",
				"Psychic"
		],
		"baseStats": {
				"hp": 105,
				"atk": 30,
				"def": 105,
				"spa": 140,
				"spd": 105,
				"spe": 55
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 92.9,
		"eggGroups": [
				"Field"
		],
		"requiredAbility": "Zen Mode",
		// "battleOnly": "Darmanitan",
		"isNonstandard": null,
		"id": "darmanitanzen",
		"fullname": "pokemon: Darmanitan-Zen",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 540,
		"weighthg": 929,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Darmanitan"
	},
	darmanitangalar: {
		"exists": true,
		"tags": [],
		"num": 555,
		"name": "Darmanitan-Galar",
		"baseSpecies": "Darmanitan",
		"forme": "Galar",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 105,
				"atk": 140,
				"def": 55,
				"spa": 30,
				"spd": 55,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 120,
		"prevo": "Darumaka-Galar",
		"evoType": "useItem",
		"evoItem": "Ice Stone",
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "darmanitangalar",
		"fullname": "pokemon: Darmanitan-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 1200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	darmanitangalarzen: {
		"exists": true,
		"tags": [],
		"num": 555,
		"name": "Darmanitan-Galar-Zen",
		"baseSpecies": "Darmanitan",
		"forme": "Galar-Zen",
		"types": [
				"Ice",
				"Fire"
		],
		"baseStats": {
				"hp": 105,
				"atk": 160,
				"def": 55,
				"spa": 30,
				"spd": 55,
				"spe": 135
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 120,
		"eggGroups": [
				"Field"
		],
		"requiredAbility": "Zen Mode",
		// "battleOnly": "Darmanitan-Galar",
		"isNonstandard": null,
		"id": "darmanitangalarzen",
		"fullname": "pokemon: Darmanitan-Galar-Zen",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 540,
		"weighthg": 1200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Darmanitan-Galar"
	},
	maractus: {
		"exists": true,
		"tags": [],
		"num": 556,
		"name": "Maractus",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 75,
				"atk": 86,
				"def": 67,
				"spa": 106,
				"spd": 67,
				"spe": 60
		},
		"abilities": {
				"0": "Water Absorb",
				"1": "Chlorophyll"
		},
		"weightkg": 28,
		"eggGroups": [
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "maractus",
		"fullname": "pokemon: Maractus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Maractus",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 461,
		"weighthg": 280,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dwebble: {
		"exists": true,
		"tags": [],
		"num": 557,
		"name": "Dwebble",
		"types": [
				"Bug",
				"Rock"
		],
		"baseStats": {
				"hp": 50,
				"atk": 65,
				"def": 85,
				"spa": 35,
				"spd": 35,
				"spe": 55
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Shell Armor"
		},
		"weightkg": 14.5,
		"evos": [
				"Crustle"
		],
		"eggGroups": [
				"Bug",
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "dwebble",
		"fullname": "pokemon: Dwebble",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Dwebble",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 325,
		"weighthg": 145,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	crustle: {
		"exists": true,
		"tags": [],
		"num": 558,
		"name": "Crustle",
		"types": [
				"Bug",
				"Rock"
		],
		"baseStats": {
				"hp": 70,
				"atk": 105,
				"def": 125,
				"spa": 65,
				"spd": 75,
				"spe": 45
		},
		"abilities": {
				"0": "Sturdy",
				"1": "Shell Armor"
		},
		"weightkg": 200,
		"prevo": "Dwebble",
		"evoLevel": 34,
		"eggGroups": [
				"Bug",
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "crustle",
		"fullname": "pokemon: Crustle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Crustle",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 2000,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	scraggy: {
		"exists": true,
		"tags": [],
		"num": 559,
		"name": "Scraggy",
		"types": [
				"Dark",
				"Fighting"
		],
		"baseStats": {
				"hp": 50,
				"atk": 75,
				"def": 70,
				"spa": 35,
				"spd": 70,
				"spe": 48
		},
		"abilities": {
				"0": "Shed Skin",
				"1": "Intimidate"
		},
		"weightkg": 11.8,
		"evos": [
				"Scrafty"
		],
		"eggGroups": [
				"Field",
				"Dragon"
		],
		"tier": "NFE",
		"id": "scraggy",
		"fullname": "pokemon: Scraggy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Scraggy",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 348,
		"weighthg": 118,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	scrafty: {
		"exists": true,
		"tags": [],
		"num": 560,
		"name": "Scrafty",
		"types": [
				"Dark",
				"Fighting"
		],
		"baseStats": {
				"hp": 65,
				"atk": 90,
				"def": 115,
				"spa": 45,
				"spd": 115,
				"spe": 58
		},
		"abilities": {
				"0": "Shed Skin",
				"1": "Intimidate"
		},
		"weightkg": 30,
		"prevo": "Scraggy",
		"evoLevel": 39,
		"eggGroups": [
				"Field",
				"Dragon"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "scrafty",
		"fullname": "pokemon: Scrafty",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Scrafty",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 488,
		"weighthg": 300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sigilyph: {
		"exists": true,
		"tags": [],
		"num": 561,
		"name": "Sigilyph",
		"types": [
				"Psychic",
				"Flying"
		],
		"baseStats": {
				"hp": 72,
				"atk": 58,
				"def": 80,
				"spa": 103,
				"spd": 80,
				"spe": 97
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 14,
		"eggGroups": [
				"Flying"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "sigilyph",
		"fullname": "pokemon: Sigilyph",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Sigilyph",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 140,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	yamask: {
		"exists": true,
		"tags": [],
		"num": 562,
		"name": "Yamask",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 38,
				"atk": 30,
				"def": 85,
				"spa": 55,
				"spd": 65,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 1.5,
		"evos": [
				"Cofagrigus"
		],
		"eggGroups": [
				"Mineral",
				"Amorphous"
		],
		"otherFormes": [
				"Yamask-Galar"
		],
		"formeOrder": [
				"Yamask",
				"Yamask-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "yamask",
		"fullname": "pokemon: Yamask",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Yamask",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 303,
		"weighthg": 15,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	yamaskgalar: {
		"exists": true,
		"tags": [],
		"num": 562,
		"name": "Yamask-Galar",
		"baseSpecies": "Yamask",
		"forme": "Galar",
		"types": [
				"Ground",
				"Ghost"
		],
		"baseStats": {
				"hp": 38,
				"atk": 55,
				"def": 85,
				"spa": 30,
				"spd": 65,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 1.5,
		"evos": [
				"Runerigus"
		],
		"eggGroups": [
				"Mineral",
				"Amorphous"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "yamaskgalar",
		"fullname": "pokemon: Yamask-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 303,
		"weighthg": 15,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cofagrigus: {
		"exists": true,
		"tags": [],
		"num": 563,
		"name": "Cofagrigus",
		"types": [
				"Ghost"
		],
		"baseStats": {
				"hp": 58,
				"atk": 50,
				"def": 145,
				"spa": 95,
				"spd": 105,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 76.5,
		"prevo": "Yamask",
		"evoLevel": 34,
		"eggGroups": [
				"Mineral",
				"Amorphous"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "cofagrigus",
		"fullname": "pokemon: Cofagrigus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Cofagrigus",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 483,
		"weighthg": 765,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tirtouga: {
		"exists": true,
		"tags": [],
		"num": 564,
		"name": "Tirtouga",
		"types": [
				"Water",
				"Rock"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 54,
				"atk": 78,
				"def": 103,
				"spa": 53,
				"spd": 45,
				"spe": 22
		},
		"abilities": {
				"0": "Sturdy",
				"H": "Swift Swim"
		},
		"weightkg": 16.5,
		"evos": [
				"Carracosta"
		],
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tirtouga",
		"fullname": "pokemon: Tirtouga",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tirtouga",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 355,
		"weighthg": 165,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	carracosta: {
		"exists": true,
		"tags": [],
		"num": 565,
		"name": "Carracosta",
		"types": [
				"Water",
				"Rock"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 74,
				"atk": 108,
				"def": 133,
				"spa": 83,
				"spd": 65,
				"spe": 32
		},
		"abilities": {
				"0": "Sturdy",
				"H": "Swift Swim"
		},
		"weightkg": 81,
		"prevo": "Tirtouga",
		"evoLevel": 37,
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "carracosta",
		"fullname": "pokemon: Carracosta",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Carracosta",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 495,
		"weighthg": 810,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	archen: {
		"exists": true,
		"tags": [],
		"num": 566,
		"name": "Archen",
		"types": [
				"Rock",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 55,
				"atk": 112,
				"def": 45,
				"spa": 74,
				"spd": 45,
				"spe": 70
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 9.5,
		"evos": [
				"Archeops"
		],
		"eggGroups": [
				"Flying",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "archen",
		"fullname": "pokemon: Archen",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Archen",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 401,
		"weighthg": 95,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	archeops: {
		"exists": true,
		"tags": [],
		"num": 567,
		"name": "Archeops",
		"types": [
				"Rock",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 75,
				"atk": 140,
				"def": 65,
				"spa": 112,
				"spd": 65,
				"spe": 110
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 32,
		"prevo": "Archen",
		"evoLevel": 37,
		"eggGroups": [
				"Flying",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "archeops",
		"fullname": "pokemon: Archeops",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Archeops",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 567,
		"weighthg": 320,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	trubbish: {
		"exists": true,
		"tags": [],
		"num": 568,
		"name": "Trubbish",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 50,
				"atk": 50,
				"def": 62,
				"spa": 40,
				"spd": 62,
				"spe": 65
		},
		"abilities": {
				"0": "Stench",
				"1": "Sticky Hold"
		},
		"weightkg": 31,
		"evos": [
				"Garbodor"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "trubbish",
		"fullname": "pokemon: Trubbish",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Trubbish",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 329,
		"weighthg": 310,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	garbodor: {
		"exists": true,
		"tags": [],
		"num": 569,
		"name": "Garbodor",
		"types": [
				"Poison"
		],
		"baseStats": {
				"hp": 80,
				"atk": 95,
				"def": 82,
				"spa": 60,
				"spd": 82,
				"spe": 75
		},
		"abilities": {
				"0": "Stench"
		},
		"weightkg": 107.3,
		"prevo": "Trubbish",
		"evoLevel": 36,
		"eggGroups": [
				"Mineral"
		],
		"canGigantamax": "G-Max Malodor",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "garbodor",
		"fullname": "pokemon: Garbodor",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Garbodor",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 474,
		"weighthg": 1073,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zorua: {
		"exists": true,
		"tags": [],
		"num": 570,
		"name": "Zorua",
		"types": [
				"Dark"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 40,
				"atk": 65,
				"def": 40,
				"spa": 80,
				"spd": 40,
				"spe": 65
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 12.5,
		"evos": [
				"Zoroark"
		],
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Zorua-Hisui"
		],
		"formeOrder": [
				"Zorua",
				"Zorua-Hisui"
		],
		"tier": "LC",
		"id": "zorua",
		"fullname": "pokemon: Zorua",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Zorua",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 330,
		"weighthg": 125,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zoruahisui: {
		"exists": true,
		"tags": [],
		"num": 570,
		"name": "Zorua-Hisui",
		"baseSpecies": "Zorua",
		"forme": "Hisui",
		"types": [
				"Normal",
				"Ghost"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 35,
				"atk": 60,
				"def": 40,
				"spa": 85,
				"spd": 40,
				"spe": 70
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 12.5,
		"evos": [
				"Zoroark-Hisui"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "zoruahisui",
		"fullname": "pokemon: Zorua-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 330,
		"weighthg": 125,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zoroark: {
		"exists": true,
		"tags": [],
		"num": 571,
		"name": "Zoroark",
		"types": [
				"Dark"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 60,
				"atk": 105,
				"def": 60,
				"spa": 120,
				"spd": 60,
				"spe": 105
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 81.1,
		"prevo": "Zorua",
		"evoLevel": 30,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Zoroark-Hisui"
		],
		"formeOrder": [
				"Zoroark",
				"Zoroark-Hisui"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "zoroark",
		"fullname": "pokemon: Zoroark",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Zoroark",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 510,
		"weighthg": 811,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zoroarkhisui: {
		"exists": true,
		"tags": [],
		"num": 571,
		"name": "Zoroark-Hisui",
		"baseSpecies": "Zoroark",
		"forme": "Hisui",
		"types": [
				"Normal",
				"Ghost"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 55,
				"atk": 100,
				"def": 60,
				"spa": 125,
				"spd": 60,
				"spe": 110
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 73,
		"prevo": "Zorua-Hisui",
		"evoLevel": 30,
		"eggGroups": [
				"Field"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "zoroarkhisui",
		"fullname": "pokemon: Zoroark-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 510,
		"weighthg": 730,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	minccino: {
		"exists": true,
		"tags": [],
		"num": 572,
		"name": "Minccino",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 55,
				"atk": 50,
				"def": 40,
				"spa": 40,
				"spd": 40,
				"spe": 75
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 5.8,
		"evos": [
				"Cinccino"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "minccino",
		"fullname": "pokemon: Minccino",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Minccino",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 300,
		"weighthg": 58,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cinccino: {
		"exists": true,
		"tags": [],
		"num": 573,
		"name": "Cinccino",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 75,
				"atk": 95,
				"def": 60,
				"spa": 65,
				"spd": 60,
				"spe": 115
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 7.5,
		"prevo": "Minccino",
		"evoType": "useItem",
		"evoItem": "Shiny Stone",
		"eggGroups": [
				"Field"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "cinccino",
		"fullname": "pokemon: Cinccino",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cinccino",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 470,
		"weighthg": 75,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gothita: {
		"exists": true,
		"tags": [],
		"num": 574,
		"name": "Gothita",
		"types": [
				"Psychic"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 45,
				"atk": 30,
				"def": 50,
				"spa": 55,
				"spd": 65,
				"spe": 45
		},
		"abilities": {
				"0": "Shadow Tag"
		},
		"weightkg": 5.8,
		"evos": [
				"Gothorita"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "LC",
		"id": "gothita",
		"fullname": "pokemon: Gothita",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gothita",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 290,
		"weighthg": 58,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gothorita: {
		"exists": true,
		"tags": [],
		"num": 575,
		"name": "Gothorita",
		"types": [
				"Psychic"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 60,
				"atk": 45,
				"def": 70,
				"spa": 75,
				"spd": 85,
				"spe": 55
		},
		"abilities": {
				"0": "Shadow Tag"
		},
		"weightkg": 18,
		"prevo": "Gothita",
		"evoLevel": 32,
		"evos": [
				"Gothitelle"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "NFE",
		"id": "gothorita",
		"fullname": "pokemon: Gothorita",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gothorita",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 390,
		"weighthg": 180,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gothitelle: {
		"exists": true,
		"tags": [],
		"num": 576,
		"name": "Gothitelle",
		"types": [
				"Psychic"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 70,
				"atk": 55,
				"def": 95,
				"spa": 95,
				"spd": 110,
				"spe": 65
		},
		"abilities": {
				"0": "Shadow Tag"
		},
		"weightkg": 44,
		"prevo": "Gothorita",
		"evoLevel": 41,
		"eggGroups": [
				"Human-Like"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "gothitelle",
		"fullname": "pokemon: Gothitelle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gothitelle",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 490,
		"weighthg": 440,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	solosis: {
		"exists": true,
		"tags": [],
		"num": 577,
		"name": "Solosis",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 45,
				"atk": 30,
				"def": 40,
				"spa": 105,
				"spd": 50,
				"spe": 20
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 1,
		"evos": [
				"Duosion"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "solosis",
		"fullname": "pokemon: Solosis",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Solosis",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 290,
		"weighthg": 10,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	duosion: {
		"exists": true,
		"tags": [],
		"num": 578,
		"name": "Duosion",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 65,
				"atk": 40,
				"def": 50,
				"spa": 125,
				"spd": 60,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 8,
		"prevo": "Solosis",
		"evoLevel": 32,
		"evos": [
				"Reuniclus"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "NFE",
		"id": "duosion",
		"fullname": "pokemon: Duosion",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Duosion",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 370,
		"weighthg": 80,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	reuniclus: {
		"exists": true,
		"tags": [],
		"num": 579,
		"name": "Reuniclus",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 110,
				"atk": 65,
				"def": 75,
				"spa": 125,
				"spd": 85,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 20.1,
		"prevo": "Duosion",
		"evoLevel": 41,
		"eggGroups": [
				"Amorphous"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "reuniclus",
		"fullname": "pokemon: Reuniclus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Reuniclus",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 201,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ducklett: {
		"exists": true,
		"tags": [],
		"num": 580,
		"name": "Ducklett",
		"types": [
				"Water",
				"Flying"
		],
		"baseStats": {
				"hp": 62,
				"atk": 44,
				"def": 50,
				"spa": 44,
				"spd": 50,
				"spe": 55
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 5.5,
		"evos": [
				"Swanna"
		],
		"eggGroups": [
				"Water 1",
				"Flying"
		],
		"tier": "LC",
		"id": "ducklett",
		"fullname": "pokemon: Ducklett",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ducklett",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 55,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swanna: {
		"exists": true,
		"tags": [],
		"num": 581,
		"name": "Swanna",
		"types": [
				"Water",
				"Flying"
		],
		"baseStats": {
				"hp": 75,
				"atk": 87,
				"def": 63,
				"spa": 87,
				"spd": 63,
				"spe": 98
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 24.2,
		"prevo": "Ducklett",
		"evoLevel": 35,
		"eggGroups": [
				"Water 1",
				"Flying"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "swanna",
		"fullname": "pokemon: Swanna",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Swanna",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 473,
		"weighthg": 242,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vanillite: {
		"exists": true,
		"tags": [],
		"num": 582,
		"name": "Vanillite",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 36,
				"atk": 50,
				"def": 50,
				"spa": 65,
				"spd": 60,
				"spe": 44
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 5.7,
		"evos": [
				"Vanillish"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "vanillite",
		"fullname": "pokemon: Vanillite",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Vanillite",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 57,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vanillish: {
		"exists": true,
		"tags": [],
		"num": 583,
		"name": "Vanillish",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 51,
				"atk": 65,
				"def": 65,
				"spa": 80,
				"spd": 75,
				"spe": 59
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 41,
		"prevo": "Vanillite",
		"evoLevel": 35,
		"evos": [
				"Vanilluxe"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "vanillish",
		"fullname": "pokemon: Vanillish",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Vanillish",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 395,
		"weighthg": 410,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vanilluxe: {
		"exists": true,
		"tags": [],
		"num": 584,
		"name": "Vanilluxe",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 71,
				"atk": 95,
				"def": 85,
				"spa": 110,
				"spd": 95,
				"spe": 79
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 57.5,
		"prevo": "Vanillish",
		"evoLevel": 47,
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "vanilluxe",
		"fullname": "pokemon: Vanilluxe",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Vanilluxe",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 535,
		"weighthg": 575,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	deerling: {
		"exists": true,
		"tags": [],
		"num": 585,
		"name": "Deerling",
		"baseForme": "Spring",
		"types": [
				"Normal",
				"Grass"
		],
		"baseStats": {
				"hp": 60,
				"atk": 60,
				"def": 50,
				"spa": 40,
				"spd": 50,
				"spe": 75
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Serene Grace"
		},
		"weightkg": 19.5,
		"evos": [
				"Sawsbuck"
		],
		"eggGroups": [
				"Field"
		],
		"cosmeticFormes": [
				"Deerling-Summer",
				"Deerling-Autumn",
				"Deerling-Winter"
		],
		"formeOrder": [
				"Deerling",
				"Deerling-Summer",
				"Deerling-Autumn",
				"Deerling-Winter"
		],
		"tier": "LC",
		"id": "deerling",
		"fullname": "pokemon: Deerling",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Deerling",
		"forme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 335,
		"weighthg": 195,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sawsbuck: {
		"exists": true,
		"tags": [],
		"num": 586,
		"name": "Sawsbuck",
		"baseForme": "Spring",
		"types": [
				"Normal",
				"Grass"
		],
		"baseStats": {
				"hp": 80,
				"atk": 100,
				"def": 70,
				"spa": 60,
				"spd": 70,
				"spe": 95
		},
		"abilities": {
				"0": "Chlorophyll",
				"1": "Serene Grace"
		},
		"weightkg": 92.5,
		"prevo": "Deerling",
		"evoLevel": 34,
		"eggGroups": [
				"Field"
		],
		"cosmeticFormes": [
				"Sawsbuck-Summer",
				"Sawsbuck-Autumn",
				"Sawsbuck-Winter"
		],
		"formeOrder": [
				"Sawsbuck",
				"Sawsbuck-Summer",
				"Sawsbuck-Autumn",
				"Sawsbuck-Winter"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "sawsbuck",
		"fullname": "pokemon: Sawsbuck",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sawsbuck",
		"forme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 475,
		"weighthg": 925,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	emolga: {
		"exists": true,
		"tags": [],
		"num": 587,
		"name": "Emolga",
		"types": [
				"Electric",
				"Flying"
		],
		"baseStats": {
				"hp": 55,
				"atk": 75,
				"def": 60,
				"spa": 75,
				"spd": 60,
				"spe": 103
		},
		"abilities": {
				"0": "Static"
		},
		"weightkg": 5,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "emolga",
		"fullname": "pokemon: Emolga",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Emolga",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 428,
		"weighthg": 50,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	karrablast: {
		"exists": true,
		"tags": [],
		"num": 588,
		"name": "Karrablast",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 50,
				"atk": 75,
				"def": 45,
				"spa": 40,
				"spd": 45,
				"spe": 60
		},
		"abilities": {
				"0": "Swarm",
				"1": "Shed Skin"
		},
		"weightkg": 5.9,
		"evos": [
				"Escavalier"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "karrablast",
		"fullname": "pokemon: Karrablast",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Karrablast",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 315,
		"weighthg": 59,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	escavalier: {
		"exists": true,
		"tags": [],
		"num": 589,
		"name": "Escavalier",
		"types": [
				"Bug",
				"Steel"
		],
		"baseStats": {
				"hp": 70,
				"atk": 135,
				"def": 105,
				"spa": 60,
				"spd": 105,
				"spe": 20
		},
		"abilities": {
				"0": "Swarm",
				"1": "Shell Armor"
		},
		"weightkg": 33,
		"prevo": "Karrablast",
		"evoType": "trade",
		"evoCondition": "with a Shelmet",
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "escavalier",
		"fullname": "pokemon: Escavalier",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Escavalier",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 495,
		"weighthg": 330,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	foongus: {
		"exists": true,
		"tags": [],
		"num": 590,
		"name": "Foongus",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 69,
				"atk": 55,
				"def": 45,
				"spa": 55,
				"spd": 55,
				"spe": 15
		},
		"abilities": {
				"0": "Effect Spore"
		},
		"weightkg": 1,
		"evos": [
				"Amoonguss"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "LC",
		"id": "foongus",
		"fullname": "pokemon: Foongus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Foongus",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 294,
		"weighthg": 10,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	amoonguss: {
		"exists": true,
		"tags": [],
		"num": 591,
		"name": "Amoonguss",
		"types": [
				"Grass",
				"Poison"
		],
		"baseStats": {
				"hp": 114,
				"atk": 85,
				"def": 70,
				"spa": 85,
				"spd": 80,
				"spe": 30
		},
		"abilities": {
				"0": "Effect Spore"
		},
		"weightkg": 10.5,
		"prevo": "Foongus",
		"evoLevel": 39,
		"eggGroups": [
				"Grass"
		],
		"tier": "RU",
		"doublesTier": "DOU",
		"id": "amoonguss",
		"fullname": "pokemon: Amoonguss",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Amoonguss",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 464,
		"weighthg": 105,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	frillish: {
		"exists": true,
		"tags": [],
		"num": 592,
		"name": "Frillish",
		"types": [
				"Water",
				"Ghost"
		],
		"baseStats": {
				"hp": 55,
				"atk": 40,
				"def": 50,
				"spa": 65,
				"spd": 85,
				"spe": 40
		},
		"abilities": {
				"0": "Water Absorb",
				"1": "Damp"
		},
		"weightkg": 33,
		"evos": [
				"Jellicent"
		],
		"eggGroups": [
				"Amorphous"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "frillish",
		"fullname": "pokemon: Frillish",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Frillish",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 335,
		"weighthg": 330,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	jellicent: {
		"exists": true,
		"tags": [],
		"num": 593,
		"name": "Jellicent",
		"types": [
				"Water",
				"Ghost"
		],
		"baseStats": {
				"hp": 100,
				"atk": 60,
				"def": 70,
				"spa": 85,
				"spd": 105,
				"spe": 60
		},
		"abilities": {
				"0": "Water Absorb",
				"1": "Damp"
		},
		"weightkg": 135,
		"prevo": "Frillish",
		"evoLevel": 40,
		"eggGroups": [
				"Amorphous"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "jellicent",
		"fullname": "pokemon: Jellicent",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Jellicent",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 1350,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	alomomola: {
		"exists": true,
		"tags": [],
		"num": 594,
		"name": "Alomomola",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 165,
				"atk": 75,
				"def": 80,
				"spa": 40,
				"spd": 45,
				"spe": 65
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 31.6,
		"eggGroups": [
				"Water 1",
				"Water 2"
		],
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "alomomola",
		"fullname": "pokemon: Alomomola",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Alomomola",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 470,
		"weighthg": 316,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	joltik: {
		"exists": true,
		"tags": [],
		"num": 595,
		"name": "Joltik",
		"types": [
				"Bug",
				"Electric"
		],
		"baseStats": {
				"hp": 50,
				"atk": 47,
				"def": 50,
				"spa": 57,
				"spd": 50,
				"spe": 65
		},
		"abilities": {
				"0": "Compound Eyes",
				"1": "Swarm"
		},
		"weightkg": 0.6,
		"evos": [
				"Galvantula"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "joltik",
		"fullname": "pokemon: Joltik",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Joltik",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 319,
		"weighthg": 6,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	galvantula: {
		"exists": true,
		"tags": [],
		"num": 596,
		"name": "Galvantula",
		"types": [
				"Bug",
				"Electric"
		],
		"baseStats": {
				"hp": 70,
				"atk": 77,
				"def": 60,
				"spa": 97,
				"spd": 60,
				"spe": 108
		},
		"abilities": {
				"0": "Compound Eyes",
				"1": "Swarm"
		},
		"weightkg": 14.3,
		"prevo": "Joltik",
		"evoLevel": 36,
		"eggGroups": [
				"Bug"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "galvantula",
		"fullname": "pokemon: Galvantula",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Galvantula",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 472,
		"weighthg": 143,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ferroseed: {
		"exists": true,
		"tags": [],
		"num": 597,
		"name": "Ferroseed",
		"types": [
				"Grass",
				"Steel"
		],
		"baseStats": {
				"hp": 44,
				"atk": 50,
				"def": 91,
				"spa": 24,
				"spd": 86,
				"spe": 10
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 18.8,
		"evos": [
				"Ferrothorn"
		],
		"eggGroups": [
				"Grass",
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "ferroseed",
		"fullname": "pokemon: Ferroseed",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Ferroseed",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 188,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ferrothorn: {
		"exists": true,
		"tags": [],
		"num": 598,
		"name": "Ferrothorn",
		"types": [
				"Grass",
				"Steel"
		],
		"baseStats": {
				"hp": 74,
				"atk": 94,
				"def": 131,
				"spa": 54,
				"spd": 116,
				"spe": 20
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 110,
		"prevo": "Ferroseed",
		"evoLevel": 40,
		"eggGroups": [
				"Grass",
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "ferrothorn",
		"fullname": "pokemon: Ferrothorn",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Ferrothorn",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 489,
		"weighthg": 1100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	klink: {
		"exists": true,
		"tags": [],
		"num": 599,
		"name": "Klink",
		"types": [
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 40,
				"atk": 55,
				"def": 70,
				"spa": 45,
				"spd": 60,
				"spe": 30
		},
		"abilities": {
				"0": "Plus",
				"1": "Minus",
				"H": "Clear Body"
		},
		"weightkg": 21,
		"evos": [
				"Klang"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "klink",
		"fullname": "pokemon: Klink",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Klink",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 300,
		"weighthg": 210,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	klang: {
		"exists": true,
		"tags": [],
		"num": 600,
		"name": "Klang",
		"types": [
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 60,
				"atk": 80,
				"def": 95,
				"spa": 70,
				"spd": 85,
				"spe": 50
		},
		"abilities": {
				"0": "Plus",
				"1": "Minus",
				"H": "Clear Body"
		},
		"weightkg": 51,
		"prevo": "Klink",
		"evoLevel": 38,
		"evos": [
				"Klinklang"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "klang",
		"fullname": "pokemon: Klang",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Klang",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 440,
		"weighthg": 510,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	klinklang: {
		"exists": true,
		"tags": [],
		"num": 601,
		"name": "Klinklang",
		"types": [
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 60,
				"atk": 100,
				"def": 115,
				"spa": 70,
				"spd": 85,
				"spe": 90
		},
		"abilities": {
				"0": "Plus",
				"1": "Minus",
				"H": "Clear Body"
		},
		"weightkg": 81,
		"prevo": "Klang",
		"evoLevel": 49,
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "klinklang",
		"fullname": "pokemon: Klinklang",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Klinklang",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 520,
		"weighthg": 810,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tynamo: {
		"exists": true,
		"tags": [],
		"num": 602,
		"name": "Tynamo",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 35,
				"atk": 55,
				"def": 40,
				"spa": 45,
				"spd": 40,
				"spe": 60
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 0.3,
		"evos": [
				"Eelektrik"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "tynamo",
		"fullname": "pokemon: Tynamo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tynamo",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 275,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	eelektrik: {
		"exists": true,
		"tags": [],
		"num": 603,
		"name": "Eelektrik",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 65,
				"atk": 85,
				"def": 70,
				"spa": 75,
				"spd": 70,
				"spe": 40
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 22,
		"prevo": "Tynamo",
		"evoLevel": 39,
		"evos": [
				"Eelektross"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "NFE",
		"id": "eelektrik",
		"fullname": "pokemon: Eelektrik",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Eelektrik",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 405,
		"weighthg": 220,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	eelektross: {
		"exists": true,
		"tags": [],
		"num": 604,
		"name": "Eelektross",
		"types": [
				"Electric"
		],
		"baseStats": {
				"hp": 85,
				"atk": 115,
				"def": 80,
				"spa": 105,
				"spd": 80,
				"spe": 50
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 80.5,
		"prevo": "Eelektrik",
		"evoType": "useItem",
		"evoItem": "Thunder Stone",
		"eggGroups": [
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "eelektross",
		"fullname": "pokemon: Eelektross",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Eelektross",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 515,
		"weighthg": 805,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	elgyem: {
		"exists": true,
		"tags": [],
		"num": 605,
		"name": "Elgyem",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 55,
				"atk": 55,
				"def": 55,
				"spa": 85,
				"spd": 55,
				"spe": 30
		},
		"abilities": {
				"0": "Synchronize"
		},
		"weightkg": 9,
		"evos": [
				"Beheeyem"
		],
		"eggGroups": [
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "elgyem",
		"fullname": "pokemon: Elgyem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Elgyem",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 335,
		"weighthg": 90,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	beheeyem: {
		"exists": true,
		"tags": [],
		"num": 606,
		"name": "Beheeyem",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 75,
				"atk": 75,
				"def": 75,
				"spa": 125,
				"spd": 95,
				"spe": 40
		},
		"abilities": {
				"0": "Synchronize"
		},
		"weightkg": 34.5,
		"prevo": "Elgyem",
		"evoLevel": 42,
		"eggGroups": [
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "beheeyem",
		"fullname": "pokemon: Beheeyem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Beheeyem",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 345,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	litwick: {
		"exists": true,
		"tags": [],
		"num": 607,
		"name": "Litwick",
		"types": [
				"Ghost",
				"Fire"
		],
		"baseStats": {
				"hp": 50,
				"atk": 30,
				"def": 55,
				"spa": 65,
				"spd": 55,
				"spe": 20
		},
		"abilities": {
				"0": "Flash Fire",
				"1": "Flame Body"
		},
		"weightkg": 3.1,
		"evos": [
				"Lampent"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "litwick",
		"fullname": "pokemon: Litwick",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Litwick",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 275,
		"weighthg": 31,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lampent: {
		"exists": true,
		"tags": [],
		"num": 608,
		"name": "Lampent",
		"types": [
				"Ghost",
				"Fire"
		],
		"baseStats": {
				"hp": 60,
				"atk": 40,
				"def": 60,
				"spa": 95,
				"spd": 60,
				"spe": 55
		},
		"abilities": {
				"0": "Flash Fire",
				"1": "Flame Body"
		},
		"weightkg": 13,
		"prevo": "Litwick",
		"evoLevel": 41,
		"evos": [
				"Chandelure"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "NFE",
		"id": "lampent",
		"fullname": "pokemon: Lampent",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lampent",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 370,
		"weighthg": 130,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chandelure: {
		"exists": true,
		"tags": [],
		"num": 609,
		"name": "Chandelure",
		"types": [
				"Ghost",
				"Fire"
		],
		"baseStats": {
				"hp": 60,
				"atk": 55,
				"def": 90,
				"spa": 145,
				"spd": 90,
				"spe": 80
		},
		"abilities": {
				"0": "Flash Fire",
				"1": "Flame Body"
		},
		"weightkg": 34.3,
		"prevo": "Lampent",
		"evoType": "useItem",
		"evoItem": "Dusk Stone",
		"eggGroups": [
				"Amorphous"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "chandelure",
		"fullname": "pokemon: Chandelure",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Chandelure",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 520,
		"weighthg": 343,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	axew: {
		"exists": true,
		"tags": [],
		"num": 610,
		"name": "Axew",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 46,
				"atk": 87,
				"def": 60,
				"spa": 30,
				"spd": 40,
				"spe": 57
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 18,
		"evos": [
				"Fraxure"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "LC",
		"id": "axew",
		"fullname": "pokemon: Axew",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Axew",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 320,
		"weighthg": 180,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	fraxure: {
		"exists": true,
		"tags": [],
		"num": 611,
		"name": "Fraxure",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 66,
				"atk": 117,
				"def": 70,
				"spa": 40,
				"spd": 50,
				"spe": 67
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 36,
		"prevo": "Axew",
		"evoLevel": 38,
		"evos": [
				"Haxorus"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "NFE",
		"id": "fraxure",
		"fullname": "pokemon: Fraxure",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Fraxure",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 360,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	haxorus: {
		"exists": true,
		"tags": [],
		"num": 612,
		"name": "Haxorus",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 76,
				"atk": 147,
				"def": 90,
				"spa": 60,
				"spd": 70,
				"spe": 97
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 105.5,
		"prevo": "Fraxure",
		"evoLevel": 48,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "RUBL",
		"doublesTier": "(DUU)",
		"id": "haxorus",
		"fullname": "pokemon: Haxorus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Haxorus",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 540,
		"weighthg": 1055,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cubchoo: {
		"exists": true,
		"tags": [],
		"num": 613,
		"name": "Cubchoo",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 55,
				"atk": 70,
				"def": 40,
				"spa": 60,
				"spd": 40,
				"spe": 40
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 8.5,
		"evos": [
				"Beartic"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "cubchoo",
		"fullname": "pokemon: Cubchoo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cubchoo",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 85,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	beartic: {
		"exists": true,
		"tags": [],
		"num": 614,
		"name": "Beartic",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 95,
				"atk": 130,
				"def": 80,
				"spa": 70,
				"spd": 80,
				"spe": 50
		},
		"abilities": {
				"0": "Swift Swim"
		},
		"weightkg": 260,
		"prevo": "Cubchoo",
		"evoLevel": 37,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "beartic",
		"fullname": "pokemon: Beartic",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Beartic",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 505,
		"weighthg": 2600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cryogonal: {
		"exists": true,
		"tags": [],
		"num": 615,
		"name": "Cryogonal",
		"types": [
				"Ice"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 50,
				"def": 50,
				"spa": 95,
				"spd": 135,
				"spe": 105
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 148,
		"eggGroups": [
				"Mineral"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "cryogonal",
		"fullname": "pokemon: Cryogonal",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cryogonal",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 515,
		"weighthg": 1480,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shelmet: {
		"exists": true,
		"tags": [],
		"num": 616,
		"name": "Shelmet",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 50,
				"atk": 40,
				"def": 85,
				"spa": 40,
				"spd": 65,
				"spe": 25
		},
		"abilities": {
				"0": "Shell Armor"
		},
		"weightkg": 7.7,
		"evos": [
				"Accelgor"
		],
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "shelmet",
		"fullname": "pokemon: Shelmet",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Shelmet",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 77,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	accelgor: {
		"exists": true,
		"tags": [],
		"num": 617,
		"name": "Accelgor",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 80,
				"atk": 70,
				"def": 40,
				"spa": 100,
				"spd": 60,
				"spe": 145
		},
		"abilities": {
				"0": "Sticky Hold"
		},
		"weightkg": 25.3,
		"prevo": "Shelmet",
		"evoType": "trade",
		"evoCondition": "with a Karrablast",
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "accelgor",
		"fullname": "pokemon: Accelgor",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Accelgor",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 495,
		"weighthg": 253,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	stunfisk: {
		"exists": true,
		"tags": [],
		"num": 618,
		"name": "Stunfisk",
		"types": [
				"Ground",
				"Electric"
		],
		"baseStats": {
				"hp": 109,
				"atk": 66,
				"def": 84,
				"spa": 81,
				"spd": 99,
				"spe": 32
		},
		"abilities": {
				"0": "Static",
				"1": "Limber",
				"H": "Sand Veil"
		},
		"weightkg": 11,
		"eggGroups": [
				"Water 1",
				"Amorphous"
		],
		"otherFormes": [
				"Stunfisk-Galar"
		],
		"formeOrder": [
				"Stunfisk",
				"Stunfisk-Galar"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "stunfisk",
		"fullname": "pokemon: Stunfisk",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Stunfisk",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 471,
		"weighthg": 110,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	stunfiskgalar: {
		"exists": true,
		"tags": [],
		"num": 618,
		"name": "Stunfisk-Galar",
		"baseSpecies": "Stunfisk",
		"forme": "Galar",
		"types": [
				"Ground",
				"Steel"
		],
		"baseStats": {
				"hp": 109,
				"atk": 81,
				"def": 99,
				"spa": 66,
				"spd": 84,
				"spe": 32
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 20.5,
		"eggGroups": [
				"Water 1",
				"Amorphous"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "stunfiskgalar",
		"fullname": "pokemon: Stunfisk-Galar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 471,
		"weighthg": 205,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mienfoo: {
		"exists": true,
		"tags": [],
		"num": 619,
		"name": "Mienfoo",
		"types": [
				"Fighting"
		],
		"baseStats": {
				"hp": 45,
				"atk": 85,
				"def": 50,
				"spa": 55,
				"spd": 50,
				"spe": 65
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 20,
		"evos": [
				"Mienshao"
		],
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"tier": "LC",
		"id": "mienfoo",
		"fullname": "pokemon: Mienfoo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mienfoo",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 350,
		"weighthg": 200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mienshao: {
		"exists": true,
		"tags": [],
		"num": 620,
		"name": "Mienshao",
		"types": [
				"Fighting"
		],
		"baseStats": {
				"hp": 65,
				"atk": 125,
				"def": 60,
				"spa": 95,
				"spd": 60,
				"spe": 105
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 35.5,
		"prevo": "Mienfoo",
		"evoLevel": 50,
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "mienshao",
		"fullname": "pokemon: Mienshao",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mienshao",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 510,
		"weighthg": 355,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	druddigon: {
		"exists": true,
		"tags": [],
		"num": 621,
		"name": "Druddigon",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 77,
				"atk": 120,
				"def": 90,
				"spa": 60,
				"spd": 90,
				"spe": 48
		},
		"abilities": {
				"0": "Rough Skin"
		},
		"weightkg": 139,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "druddigon",
		"fullname": "pokemon: Druddigon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Druddigon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 1390,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	golett: {
		"exists": true,
		"tags": [],
		"num": 622,
		"name": "Golett",
		"types": [
				"Ground",
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 59,
				"atk": 74,
				"def": 50,
				"spa": 35,
				"spd": 50,
				"spe": 35
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 92,
		"evos": [
				"Golurk"
		],
		"eggGroups": [
				"Mineral"
		],
		"tier": "LC",
		"id": "golett",
		"fullname": "pokemon: Golett",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Golett",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 303,
		"weighthg": 920,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	golurk: {
		"exists": true,
		"tags": [],
		"num": 623,
		"name": "Golurk",
		"types": [
				"Ground",
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 89,
				"atk": 124,
				"def": 80,
				"spa": 55,
				"spd": 80,
				"spe": 55
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 330,
		"prevo": "Golett",
		"evoLevel": 43,
		"eggGroups": [
				"Mineral"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "golurk",
		"fullname": "pokemon: Golurk",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Golurk",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 483,
		"weighthg": 3300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pawniard: {
		"exists": true,
		"tags": [],
		"num": 624,
		"name": "Pawniard",
		"types": [
				"Dark",
				"Steel"
		],
		"baseStats": {
				"hp": 45,
				"atk": 85,
				"def": 70,
				"spa": 40,
				"spd": 40,
				"spe": 60
		},
		"abilities": {
				"0": "Inner Focus",
				"H": "Pressure"
		},
		"weightkg": 10.2,
		"evos": [
				"Bisharp"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "LC",
		"id": "pawniard",
		"fullname": "pokemon: Pawniard",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pawniard",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 340,
		"weighthg": 102,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bisharp: {
		"exists": true,
		"tags": [],
		"num": 625,
		"name": "Bisharp",
		"types": [
				"Dark",
				"Steel"
		],
		"baseStats": {
				"hp": 65,
				"atk": 125,
				"def": 100,
				"spa": 60,
				"spd": 70,
				"spe": 70
		},
		"abilities": {
				"0": "Inner Focus",
				"H": "Pressure"
		},
		"weightkg": 70,
		"prevo": "Pawniard",
		"evoLevel": 52,
		"evos": [
				"Kingambit"
		],
		"eggGroups": [
				"Human-Like"
		],
		"tier": "RU",
		"doublesTier": "NFE",
		"id": "bisharp",
		"fullname": "pokemon: Bisharp",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bisharp",
		"forme": "",
		"baseForme": "",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 700,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bouffalant: {
		"exists": true,
		"tags": [],
		"num": 626,
		"name": "Bouffalant",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 95,
				"atk": 110,
				"def": 95,
				"spa": 40,
				"spd": 95,
				"spe": 55
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 94.6,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "bouffalant",
		"fullname": "pokemon: Bouffalant",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Bouffalant",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 946,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rufflet: {
		"exists": true,
		"tags": [],
		"num": 627,
		"name": "Rufflet",
		"types": [
				"Normal",
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 70,
				"atk": 83,
				"def": 50,
				"spa": 37,
				"spd": 50,
				"spe": 60
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Hustle"
		},
		"weightkg": 10.5,
		"evos": [
				"Braviary",
				"Braviary-Hisui"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "NFE",
		"id": "rufflet",
		"fullname": "pokemon: Rufflet",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Rufflet",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 350,
		"weighthg": 105,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	braviary: {
		"exists": true,
		"tags": [],
		"num": 628,
		"name": "Braviary",
		"types": [
				"Normal",
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 100,
				"atk": 123,
				"def": 75,
				"spa": 57,
				"spd": 75,
				"spe": 80
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 41,
		"prevo": "Rufflet",
		"evoLevel": 54,
		"eggGroups": [
				"Flying"
		],
		"otherFormes": [
				"Braviary-Hisui"
		],
		"formeOrder": [
				"Braviary",
				"Braviary-Hisui"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "braviary",
		"fullname": "pokemon: Braviary",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Braviary",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 510,
		"weighthg": 410,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	braviaryhisui: {
		"exists": true,
		"tags": [],
		"num": 628,
		"name": "Braviary-Hisui",
		"baseSpecies": "Braviary",
		"forme": "Hisui",
		"types": [
				"Psychic",
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 110,
				"atk": 83,
				"def": 70,
				"spa": 112,
				"spd": 70,
				"spe": 65
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 43.4,
		"prevo": "Rufflet",
		"evoLevel": 54,
		"eggGroups": [
				"Flying"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "braviaryhisui",
		"fullname": "pokemon: Braviary-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 510,
		"weighthg": 434,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vullaby: {
		"exists": true,
		"tags": [],
		"num": 629,
		"name": "Vullaby",
		"types": [
				"Dark",
				"Flying"
		],
		"gender": "F",
		"baseStats": {
				"hp": 70,
				"atk": 55,
				"def": 75,
				"spa": 45,
				"spd": 65,
				"spe": 60
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 9,
		"evos": [
				"Mandibuzz"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "LC",
		"id": "vullaby",
		"fullname": "pokemon: Vullaby",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Vullaby",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 370,
		"weighthg": 90,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mandibuzz: {
		"exists": true,
		"tags": [],
		"num": 630,
		"name": "Mandibuzz",
		"types": [
				"Dark",
				"Flying"
		],
		"gender": "F",
		"baseStats": {
				"hp": 110,
				"atk": 65,
				"def": 105,
				"spa": 55,
				"spd": 95,
				"spe": 80
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 39.5,
		"prevo": "Vullaby",
		"evoLevel": 54,
		"eggGroups": [
				"Flying"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "mandibuzz",
		"fullname": "pokemon: Mandibuzz",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mandibuzz",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 510,
		"weighthg": 395,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	heatmor: {
		"exists": true,
		"tags": [],
		"num": 631,
		"name": "Heatmor",
		"types": [
				"Fire"
		],
		"baseStats": {
				"hp": 85,
				"atk": 97,
				"def": 66,
				"spa": 105,
				"spd": 66,
				"spe": 65
		},
		"abilities": {
				"0": "Flash Fire",
				"H": "White Smoke"
		},
		"weightkg": 58,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "heatmor",
		"fullname": "pokemon: Heatmor",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Heatmor",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 484,
		"weighthg": 580,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	durant: {
		"exists": true,
		"tags": [],
		"num": 632,
		"name": "Durant",
		"types": [
				"Bug",
				"Steel"
		],
		"baseStats": {
				"hp": 58,
				"atk": 109,
				"def": 112,
				"spa": 48,
				"spd": 48,
				"spe": 109
		},
		"abilities": {
				"0": "Swarm",
				"1": "Hustle",
				"H": "Truant"
		},
		"weightkg": 33,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "durant",
		"fullname": "pokemon: Durant",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Durant",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 484,
		"weighthg": 330,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	deino: {
		"exists": true,
		"tags": [],
		"num": 633,
		"name": "Deino",
		"types": [
				"Dark",
				"Dragon"
		],
		"baseStats": {
				"hp": 52,
				"atk": 65,
				"def": 50,
				"spa": 45,
				"spd": 50,
				"spe": 38
		},
		"abilities": {
				"0": "Hustle"
		},
		"weightkg": 17.3,
		"evos": [
				"Zweilous"
		],
		"eggGroups": [
				"Dragon"
		],
		"tier": "LC",
		"id": "deino",
		"fullname": "pokemon: Deino",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Deino",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 173,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zweilous: {
		"exists": true,
		"tags": [],
		"num": 634,
		"name": "Zweilous",
		"types": [
				"Dark",
				"Dragon"
		],
		"baseStats": {
				"hp": 72,
				"atk": 85,
				"def": 70,
				"spa": 65,
				"spd": 70,
				"spe": 58
		},
		"abilities": {
				"0": "Hustle"
		},
		"weightkg": 50,
		"prevo": "Deino",
		"evoLevel": 50,
		"evos": [
				"Hydreigon"
		],
		"eggGroups": [
				"Dragon"
		],
		"tier": "NFE",
		"id": "zweilous",
		"fullname": "pokemon: Zweilous",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Zweilous",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hydreigon: {
		"exists": true,
		"tags": [],
		"num": 635,
		"name": "Hydreigon",
		"types": [
				"Dark",
				"Dragon"
		],
		"baseStats": {
				"hp": 92,
				"atk": 105,
				"def": 90,
				"spa": 125,
				"spd": 90,
				"spe": 98
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 160,
		"prevo": "Zweilous",
		"evoLevel": 64,
		"eggGroups": [
				"Dragon"
		],
		"tier": "RUBL",
		"doublesTier": "(DUU)",
		"id": "hydreigon",
		"fullname": "pokemon: Hydreigon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hydreigon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 1600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	larvesta: {
		"exists": true,
		"tags": [],
		"num": 636,
		"name": "Larvesta",
		"types": [
				"Bug",
				"Fire"
		],
		"baseStats": {
				"hp": 55,
				"atk": 85,
				"def": 55,
				"spa": 50,
				"spd": 55,
				"spe": 60
		},
		"abilities": {
				"0": "Flame Body",
				"1": "Swarm"
		},
		"weightkg": 28.8,
		"evos": [
				"Volcarona"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "larvesta",
		"fullname": "pokemon: Larvesta",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Larvesta",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 360,
		"weighthg": 288,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	volcarona: {
		"exists": true,
		"tags": [],
		"num": 637,
		"name": "Volcarona",
		"types": [
				"Bug",
				"Fire"
		],
		"baseStats": {
				"hp": 85,
				"atk": 60,
				"def": 65,
				"spa": 135,
				"spd": 105,
				"spe": 100
		},
		"abilities": {
				"0": "Flame Body",
				"1": "Swarm"
		},
		"weightkg": 46,
		"prevo": "Larvesta",
		"evoLevel": 59,
		"eggGroups": [
				"Bug"
		],
		"tier": "Uber",
		"doublesTier": "(DUU)",
		"id": "volcarona",
		"fullname": "pokemon: Volcarona",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Volcarona",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 550,
		"weighthg": 460,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cobalion: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 638,
		"name": "Cobalion",
		"types": [
				"Steel",
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 91,
				"atk": 90,
				"def": 129,
				"spa": 90,
				"spd": 72,
				"spe": 108
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 250,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "cobalion",
		"fullname": "pokemon: Cobalion",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cobalion",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 2500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	terrakion: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 639,
		"name": "Terrakion",
		"types": [
				"Rock",
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 91,
				"atk": 129,
				"def": 90,
				"spa": 72,
				"spd": 90,
				"spe": 108
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 260,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "terrakion",
		"fullname": "pokemon: Terrakion",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Terrakion",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 2600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	virizion: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 640,
		"name": "Virizion",
		"types": [
				"Grass",
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 91,
				"atk": 90,
				"def": 72,
				"spa": 90,
				"spd": 129,
				"spe": 108
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 200,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "virizion",
		"fullname": "pokemon: Virizion",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Virizion",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 2000,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tornadus: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 641,
		"name": "Tornadus",
		"baseForme": "Incarnate",
		"types": [
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 79,
				"atk": 115,
				"def": 70,
				"spa": 125,
				"spd": 80,
				"spe": 111
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 63,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Tornadus-Therian"
		],
		"formeOrder": [
				"Tornadus",
				"Tornadus-Therian"
		],
		"tier": "ZUBL",
		"doublesTier": "DOU",
		"id": "tornadus",
		"fullname": "pokemon: Tornadus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tornadus",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 580,
		"weighthg": 630,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tornadustherian: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 641,
		"name": "Tornadus-Therian",
		"baseSpecies": "Tornadus",
		"forme": "Therian",
		"types": [
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 79,
				"atk": 100,
				"def": 80,
				"spa": 110,
				"spd": 90,
				"spe": 121
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 63,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Tornadus",
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "tornadustherian",
		"fullname": "pokemon: Tornadus-Therian",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 580,
		"weighthg": 630,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	thundurus: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 642,
		"name": "Thundurus",
		"baseForme": "Incarnate",
		"types": [
				"Electric",
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 79,
				"atk": 115,
				"def": 70,
				"spa": 125,
				"spd": 80,
				"spe": 111
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 61,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Thundurus-Therian"
		],
		"formeOrder": [
				"Thundurus",
				"Thundurus-Therian"
		],
		"tier": "RU",
		"doublesTier": "DUU",
		"id": "thundurus",
		"fullname": "pokemon: Thundurus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Thundurus",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 580,
		"weighthg": 610,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	thundurustherian: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 642,
		"name": "Thundurus-Therian",
		"baseSpecies": "Thundurus",
		"forme": "Therian",
		"types": [
				"Electric",
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 79,
				"atk": 105,
				"def": 70,
				"spa": 145,
				"spd": 80,
				"spe": 101
		},
		"abilities": {
				"0": "Volt Absorb"
		},
		"weightkg": 61,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Thundurus",
		"tier": "RUBL",
		"doublesTier": "(DUU)",
		"id": "thundurustherian",
		"fullname": "pokemon: Thundurus-Therian",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 580,
		"weighthg": 610,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	reshiram: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 643,
		"name": "Reshiram",
		"types": [
				"Dragon",
				"Fire"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 120,
				"def": 100,
				"spa": 150,
				"spd": 120,
				"spe": 90
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 330,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "reshiram",
		"fullname": "pokemon: Reshiram",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Reshiram",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 3300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zekrom: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 644,
		"name": "Zekrom",
		"types": [
				"Dragon",
				"Electric"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 150,
				"def": 120,
				"spa": 120,
				"spd": 100,
				"spe": 90
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 345,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "zekrom",
		"fullname": "pokemon: Zekrom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Zekrom",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 3450,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	landorus: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 645,
		"name": "Landorus",
		"baseForme": "Incarnate",
		"types": [
				"Ground",
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 89,
				"atk": 125,
				"def": 90,
				"spa": 115,
				"spd": 80,
				"spe": 101
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 68,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Landorus-Therian"
		],
		"formeOrder": [
				"Landorus",
				"Landorus-Therian"
		],
		"tier": "Uber",
		"doublesTier": "DOU",
		"id": "landorus",
		"fullname": "pokemon: Landorus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Landorus",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 600,
		"weighthg": 680,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	landorustherian: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 645,
		"name": "Landorus-Therian",
		"baseSpecies": "Landorus",
		"forme": "Therian",
		"types": [
				"Ground",
				"Flying"
		],
		"gender": "M",
		"baseStats": {
				"hp": 89,
				"atk": 145,
				"def": 90,
				"spa": 105,
				"spd": 80,
				"spe": 91
		},
		"abilities": {
				"0": "Intimidate"
		},
		"weightkg": 68,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Landorus",
		"tier": "OU",
		"doublesTier": "DOU",
		"id": "landorustherian",
		"fullname": "pokemon: Landorus-Therian",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 600,
		"weighthg": 680,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kyurem: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 646,
		"name": "Kyurem",
		"types": [
				"Dragon",
				"Ice"
		],
		"gender": "N",
		"baseStats": {
				"hp": 125,
				"atk": 130,
				"def": 90,
				"spa": 130,
				"spd": 90,
				"spe": 95
		},
		"abilities": {
				"0": "Pressure"
		},
		"weightkg": 325,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Kyurem-Black",
				"Kyurem-White"
		],
		"formeOrder": [
				"Kyurem",
				"Kyurem-White",
				"Kyurem-Black"
		],
		"tier": "OU",
		"doublesTier": "DOU",
		"id": "kyurem",
		"fullname": "pokemon: Kyurem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Kyurem",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 660,
		"weighthg": 3250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kyuremblack: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 646,
		"name": "Kyurem-Black",
		"baseSpecies": "Kyurem",
		"forme": "Black",
		"types": [
				"Dragon",
				"Ice"
		],
		"gender": "N",
		"baseStats": {
				"hp": 125,
				"atk": 170,
				"def": 100,
				"spa": 120,
				"spd": 90,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 325,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Kyurem",
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "kyuremblack",
		"fullname": "pokemon: Kyurem-Black",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 700,
		"weighthg": 3250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kyuremwhite: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 646,
		"name": "Kyurem-White",
		"baseSpecies": "Kyurem",
		"forme": "White",
		"types": [
				"Dragon",
				"Ice"
		],
		"gender": "N",
		"baseStats": {
				"hp": 125,
				"atk": 120,
				"def": 90,
				"spa": 170,
				"spd": 100,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 325,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Kyurem",
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "kyuremwhite",
		"fullname": "pokemon: Kyurem-White",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 700,
		"weighthg": 3250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	keldeo: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 647,
		"name": "Keldeo",
		"baseForme": "Ordinary",
		"types": [
				"Water",
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 91,
				"atk": 72,
				"def": 90,
				"spa": 129,
				"spd": 90,
				"spe": 108
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 48.5,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Keldeo-Resolute"
		],
		"formeOrder": [
				"Keldeo",
				"Keldeo-Resolute"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "keldeo",
		"fullname": "pokemon: Keldeo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Keldeo",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 485,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	keldeoresolute: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 647,
		"name": "Keldeo-Resolute",
		"baseSpecies": "Keldeo",
		"forme": "Resolute",
		"types": [
				"Water",
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 91,
				"atk": 72,
				"def": 90,
				"spa": 129,
				"spd": 90,
				"spe": 108
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 48.5,
		"eggGroups": [
				"Undiscovered"
		],
		"requiredMove": "Secret Sword",
		// "changesFrom": "Keldeo",
		"id": "keldeoresolute",
		"fullname": "pokemon: Keldeo-Resolute",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "UU",
		"doublesTier": "(DUU)",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 580,
		"weighthg": 485,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	meloetta: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 648,
		"name": "Meloetta",
		"baseForme": "Aria",
		"types": [
				"Normal",
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 77,
				"def": 77,
				"spa": 128,
				"spd": 128,
				"spe": 90
		},
		"abilities": {
				"0": "Serene Grace"
		},
		"weightkg": 6.5,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Meloetta-Pirouette"
		],
		"formeOrder": [
				"Meloetta",
				"Meloetta-Pirouette"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "meloetta",
		"fullname": "pokemon: Meloetta",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Meloetta",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	meloettapirouette: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 648,
		"name": "Meloetta-Pirouette",
		"baseSpecies": "Meloetta",
		"forme": "Pirouette",
		"types": [
				"Normal",
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 100,
				"atk": 128,
				"def": 90,
				"spa": 77,
				"spd": 77,
				"spe": 128
		},
		"abilities": {
				"0": "Serene Grace"
		},
		"weightkg": 6.5,
		"eggGroups": [
				"Undiscovered"
		],
		"requiredMove": "Relic Song",
		// "battleOnly": "Meloetta",
		"id": "meloettapirouette",
		"fullname": "pokemon: Meloetta-Pirouette",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "PU",
		"doublesTier": "(DUU)",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 65,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Meloetta"
	},
	genesect: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 649,
		"name": "Genesect",
		"types": [
				"Bug",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 71,
				"atk": 120,
				"def": 95,
				"spa": 120,
				"spd": 95,
				"spe": 99
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 82.5,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Genesect-Douse",
				"Genesect-Shock",
				"Genesect-Burn",
				"Genesect-Chill"
		],
		"formeOrder": [
				"Genesect",
				"Genesect-Douse",
				"Genesect-Shock",
				"Genesect-Burn",
				"Genesect-Chill"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "genesect",
		"fullname": "pokemon: Genesect",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Genesect",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 825,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	genesectdouse: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 649,
		"name": "Genesect-Douse",
		"baseSpecies": "Genesect",
		"forme": "Douse",
		"types": [
				"Bug",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 71,
				"atk": 120,
				"def": 95,
				"spa": 120,
				"spd": 95,
				"spe": 99
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 82.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Douse Drive",
		// "changesFrom": "Genesect",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "genesectdouse",
		"fullname": "pokemon: Genesect-Douse",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Douse Drive"
		// ],
		"bst": 600,
		"weighthg": 825,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	genesectshock: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 649,
		"name": "Genesect-Shock",
		"baseSpecies": "Genesect",
		"forme": "Shock",
		"types": [
				"Bug",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 71,
				"atk": 120,
				"def": 95,
				"spa": 120,
				"spd": 95,
				"spe": 99
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 82.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Shock Drive",
		// "changesFrom": "Genesect",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "genesectshock",
		"fullname": "pokemon: Genesect-Shock",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Shock Drive"
		// ],
		"bst": 600,
		"weighthg": 825,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	genesectburn: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 649,
		"name": "Genesect-Burn",
		"baseSpecies": "Genesect",
		"forme": "Burn",
		"types": [
				"Bug",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 71,
				"atk": 120,
				"def": 95,
				"spa": 120,
				"spd": 95,
				"spe": 99
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 82.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Burn Drive",
		// "changesFrom": "Genesect",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "genesectburn",
		"fullname": "pokemon: Genesect-Burn",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Burn Drive"
		// ],
		"bst": 600,
		"weighthg": 825,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	genesectchill: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 649,
		"name": "Genesect-Chill",
		"baseSpecies": "Genesect",
		"forme": "Chill",
		"types": [
				"Bug",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 71,
				"atk": 120,
				"def": 95,
				"spa": 120,
				"spd": 95,
				"spe": 99
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 82.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Chill Drive",
		// "changesFrom": "Genesect",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "genesectchill",
		"fullname": "pokemon: Genesect-Chill",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Chill Drive"
		// ],
		"bst": 600,
		"weighthg": 825,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chespin: {
		"exists": true,
		"tags": [],
		"num": 650,
		"name": "Chespin",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 56,
				"atk": 61,
				"def": 65,
				"spa": 48,
				"spd": 45,
				"spe": 38
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 9,
		"evos": [
				"Quilladin"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "chespin",
		"fullname": "pokemon: Chespin",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Chespin",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 313,
		"weighthg": 90,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	quilladin: {
		"exists": true,
		"tags": [],
		"num": 651,
		"name": "Quilladin",
		"types": [
				"Grass"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 61,
				"atk": 78,
				"def": 95,
				"spa": 56,
				"spd": 58,
				"spe": 57
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 29,
		"prevo": "Chespin",
		"evoLevel": 16,
		"evos": [
				"Chesnaught"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "quilladin",
		"fullname": "pokemon: Quilladin",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Quilladin",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 290,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	chesnaught: {
		"exists": true,
		"tags": [],
		"num": 652,
		"name": "Chesnaught",
		"types": [
				"Grass",
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 88,
				"atk": 107,
				"def": 122,
				"spa": 74,
				"spd": 75,
				"spe": 64
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 90,
		"prevo": "Quilladin",
		"evoLevel": 36,
		"eggGroups": [
				"Field"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "chesnaught",
		"fullname": "pokemon: Chesnaught",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Chesnaught",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 900,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	fennekin: {
		"exists": true,
		"tags": [],
		"num": 653,
		"name": "Fennekin",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 40,
				"atk": 45,
				"def": 40,
				"spa": 62,
				"spd": 60,
				"spe": 60
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 9.4,
		"evos": [
				"Braixen"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "fennekin",
		"fullname": "pokemon: Fennekin",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Fennekin",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 307,
		"weighthg": 94,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	braixen: {
		"exists": true,
		"tags": [],
		"num": 654,
		"name": "Braixen",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 59,
				"atk": 59,
				"def": 58,
				"spa": 90,
				"spd": 70,
				"spe": 73
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 14.5,
		"prevo": "Fennekin",
		"evoLevel": 16,
		"evos": [
				"Delphox"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "braixen",
		"fullname": "pokemon: Braixen",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Braixen",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 409,
		"weighthg": 145,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	delphox: {
		"exists": true,
		"tags": [],
		"num": 655,
		"name": "Delphox",
		"types": [
				"Fire",
				"Psychic"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 75,
				"atk": 69,
				"def": 72,
				"spa": 114,
				"spd": 100,
				"spe": 104
		},
		"abilities": {
				"0": "Blaze"
		},
		"weightkg": 39,
		"prevo": "Braixen",
		"evoLevel": 36,
		"eggGroups": [
				"Field"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "delphox",
		"fullname": "pokemon: Delphox",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Delphox",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 534,
		"weighthg": 390,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	froakie: {
		"exists": true,
		"tags": [],
		"num": 656,
		"name": "Froakie",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 41,
				"atk": 56,
				"def": 40,
				"spa": 62,
				"spd": 44,
				"spe": 71
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 7,
		"evos": [
				"Frogadier"
		],
		"eggGroups": [
				"Water 1"
		],
		"tier": "LC",
		"id": "froakie",
		"fullname": "pokemon: Froakie",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Froakie",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 314,
		"weighthg": 70,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	frogadier: {
		"exists": true,
		"tags": [],
		"num": 657,
		"name": "Frogadier",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 54,
				"atk": 63,
				"def": 52,
				"spa": 83,
				"spd": 56,
				"spe": 97
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 10.9,
		"prevo": "Froakie",
		"evoLevel": 16,
		"evos": [
				"Greninja"
		],
		"eggGroups": [
				"Water 1"
		],
		"tier": "NFE",
		"id": "frogadier",
		"fullname": "pokemon: Frogadier",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Frogadier",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 405,
		"weighthg": 109,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	greninja: {
		"exists": true,
		"tags": [],
		"num": 658,
		"name": "Greninja",
		"types": [
				"Water",
				"Dark"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 72,
				"atk": 95,
				"def": 67,
				"spa": 103,
				"spd": 71,
				"spe": 122
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 40,
		"prevo": "Frogadier",
		"evoLevel": 36,
		"eggGroups": [
				"Water 1"
		],
		"otherFormes": [
				"Greninja-Bond",
				"Greninja-Ash"
		],
		"formeOrder": [
				"Greninja",
				"Greninja-Bond",
				"Greninja-Ash"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "greninja",
		"fullname": "pokemon: Greninja",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Greninja",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	greninjabond: {
		"exists": true,
		"tags": [],
		"num": 658,
		"name": "Greninja-Bond",
		"baseSpecies": "Greninja",
		"forme": "Bond",
		"types": [
				"Water",
				"Dark"
		],
		"gender": "M",
		"baseStats": {
				"hp": 72,
				"atk": 95,
				"def": 67,
				"spa": 103,
				"spd": 71,
				"spe": 122
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 40,
		"eggGroups": [
				"Undiscovered"
		],
		"gen": 3,
		"id": "greninjabond",
		"fullname": "pokemon: Greninja-Bond",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "UU",
		"doublesTier": "(DUU)",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 530,
		"weighthg": 400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	greninjaash: {
		"exists": true,
		"tags": [],
		"num": 658,
		"name": "Greninja-Ash",
		"baseSpecies": "Greninja",
		"forme": "Ash",
		"types": [
				"Water",
				"Dark"
		],
		"gender": "M",
		"baseStats": {
				"hp": 72,
				"atk": 145,
				"def": 67,
				"spa": 153,
				"spd": 71,
				"spe": 132
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 40,
		"eggGroups": [
				"Undiscovered"
		],
		"requiredAbility": "Battle Bond",
		// "battleOnly": "Greninja-Bond",
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "greninjaash",
		"fullname": "pokemon: Greninja-Ash",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 640,
		"weighthg": 400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Greninja-Bond"
	},
	bunnelby: {
		"exists": true,
		"tags": [],
		"num": 659,
		"name": "Bunnelby",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 38,
				"atk": 36,
				"def": 38,
				"spa": 32,
				"spd": 36,
				"spe": 57
		},
		"abilities": {
				"0": "Pickup",
				"1": "Huge Power"
		},
		"weightkg": 5,
		"evos": [
				"Diggersby"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "bunnelby",
		"fullname": "pokemon: Bunnelby",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Bunnelby",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 237,
		"weighthg": 50,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	diggersby: {
		"exists": true,
		"tags": [],
		"num": 660,
		"name": "Diggersby",
		"types": [
				"Normal",
				"Ground"
		],
		"baseStats": {
				"hp": 85,
				"atk": 56,
				"def": 77,
				"spa": 50,
				"spd": 77,
				"spe": 78
		},
		"abilities": {
				"0": "Pickup",
				"1": "Huge Power"
		},
		"weightkg": 42.4,
		"prevo": "Bunnelby",
		"evoLevel": 20,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "diggersby",
		"fullname": "pokemon: Diggersby",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Diggersby",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 423,
		"weighthg": 424,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	fletchling: {
		"exists": true,
		"tags": [],
		"num": 661,
		"name": "Fletchling",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 45,
				"atk": 50,
				"def": 43,
				"spa": 40,
				"spd": 38,
				"spe": 62
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 1.7,
		"evos": [
				"Fletchinder"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "LC",
		"id": "fletchling",
		"fullname": "pokemon: Fletchling",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Fletchling",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 278,
		"weighthg": 17,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	fletchinder: {
		"exists": true,
		"tags": [],
		"num": 662,
		"name": "Fletchinder",
		"types": [
				"Fire",
				"Flying"
		],
		"baseStats": {
				"hp": 62,
				"atk": 73,
				"def": 55,
				"spa": 56,
				"spd": 52,
				"spe": 84
		},
		"abilities": {
				"0": "Flame Body"
		},
		"weightkg": 16,
		"prevo": "Fletchling",
		"evoLevel": 17,
		"evos": [
				"Talonflame"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "NFE",
		"id": "fletchinder",
		"fullname": "pokemon: Fletchinder",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Fletchinder",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 382,
		"weighthg": 160,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	talonflame: {
		"exists": true,
		"tags": [],
		"num": 663,
		"name": "Talonflame",
		"types": [
				"Fire",
				"Flying"
		],
		"baseStats": {
				"hp": 78,
				"atk": 81,
				"def": 71,
				"spa": 74,
				"spd": 69,
				"spe": 126
		},
		"abilities": {
				"0": "Flame Body"
		},
		"weightkg": 24.5,
		"prevo": "Fletchinder",
		"evoLevel": 35,
		"eggGroups": [
				"Flying"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "talonflame",
		"fullname": "pokemon: Talonflame",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Talonflame",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 499,
		"weighthg": 245,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	scatterbug: {
		"exists": true,
		"tags": [],
		"num": 664,
		"name": "Scatterbug",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 38,
				"atk": 35,
				"def": 40,
				"spa": 27,
				"spd": 25,
				"spe": 35
		},
		"abilities": {
				"0": "Shield Dust",
				"1": "Compound Eyes"
		},
		"weightkg": 2.5,
		"evos": [
				"Spewpa"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "scatterbug",
		"fullname": "pokemon: Scatterbug",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Scatterbug",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 200,
		"weighthg": 25,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	spewpa: {
		"exists": true,
		"tags": [],
		"num": 665,
		"name": "Spewpa",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 45,
				"atk": 22,
				"def": 60,
				"spa": 27,
				"spd": 30,
				"spe": 29
		},
		"abilities": {
				"0": "Shed Skin"
		},
		"weightkg": 8.4,
		"prevo": "Scatterbug",
		"evoLevel": 9,
		"evos": [
				"Vivillon",
				"Vivillon-Fancy"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "NFE",
		"id": "spewpa",
		"fullname": "pokemon: Spewpa",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Spewpa",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 213,
		"weighthg": 84,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vivillon: {
		"exists": true,
		"tags": [],
		"num": 666,
		"name": "Vivillon",
		"baseForme": "Meadow",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 80,
				"atk": 52,
				"def": 50,
				"spa": 90,
				"spd": 50,
				"spe": 89
		},
		"abilities": {
				"0": "Shield Dust",
				"1": "Compound Eyes"
		},
		"weightkg": 17,
		"prevo": "Spewpa",
		"evoLevel": 12,
		"eggGroups": [
				"Bug"
		],
		"otherFormes": [
				"Vivillon-Fancy",
				"Vivillon-Pokeball"
		],
		"cosmeticFormes": [
				"Vivillon-Archipelago",
				"Vivillon-Continental",
				"Vivillon-Elegant",
				"Vivillon-Garden",
				"Vivillon-High Plains",
				"Vivillon-Icy Snow",
				"Vivillon-Jungle",
				"Vivillon-Marine",
				"Vivillon-Modern",
				"Vivillon-Monsoon",
				"Vivillon-Ocean",
				"Vivillon-Polar",
				"Vivillon-River",
				"Vivillon-Sandstorm",
				"Vivillon-Savanna",
				"Vivillon-Sun",
				"Vivillon-Tundra"
		],
		"formeOrder": [
				"Vivillon-Icy Snow",
				"Vivillon-Polar",
				"Vivillon-Tundra",
				"Vivillon-Continental",
				"Vivillon-Garden",
				"Vivillon-Elegant",
				"Vivillon",
				"Vivillon-Modern",
				"Vivillon-Marine",
				"Vivillon-Archipelago",
				"Vivillon-High Plains",
				"Vivillon-Sandstorm",
				"Vivillon-River",
				"Vivillon-Monsoon",
				"Vivillon-Savanna",
				"Vivillon-Sun",
				"Vivillon-Ocean",
				"Vivillon-Jungle",
				"Vivillon-Fancy",
				"Vivillon-Pokeball"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "vivillon",
		"fullname": "pokemon: Vivillon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Vivillon",
		"forme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 411,
		"weighthg": 170,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vivillonfancy: {
		"exists": true,
		"tags": [],
		"num": 666,
		"name": "Vivillon-Fancy",
		"baseSpecies": "Vivillon",
		"forme": "Fancy",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 80,
				"atk": 52,
				"def": 50,
				"spa": 90,
				"spd": 50,
				"spe": 89
		},
		"abilities": {
				"0": "Shield Dust",
				"1": "Compound Eyes"
		},
		"weightkg": 17,
		"prevo": "Spewpa",
		"evoLevel": 12,
		"eggGroups": [
				"Bug"
		],
		"id": "vivillonfancy",
		"fullname": "pokemon: Vivillon-Fancy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 411,
		"weighthg": 170,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vivillonpokeball: {
		"exists": true,
		"tags": [],
		"num": 666,
		"name": "Vivillon-Pokeball",
		"baseSpecies": "Vivillon",
		"forme": "Pokeball",
		"types": [
				"Bug",
				"Flying"
		],
		"baseStats": {
				"hp": 80,
				"atk": 52,
				"def": 50,
				"spa": 90,
				"spd": 50,
				"spe": 89
		},
		"abilities": {
				"0": "Shield Dust",
				"1": "Compound Eyes"
		},
		"weightkg": 17,
		"eggGroups": [
				"Bug"
		],
		"id": "vivillonpokeball",
		"fullname": "pokemon: Vivillon-Pokeball",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 411,
		"weighthg": 170,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	litleo: {
		"exists": true,
		"tags": [],
		"num": 667,
		"name": "Litleo",
		"types": [
				"Fire",
				"Normal"
		],
		"genderRatio": {
				"M": 0.125,
				"F": 0.875
		},
		"baseStats": {
				"hp": 62,
				"atk": 50,
				"def": 58,
				"spa": 73,
				"spd": 54,
				"spe": 72
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 13.5,
		"evos": [
				"Pyroar"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "litleo",
		"fullname": "pokemon: Litleo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Litleo",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 369,
		"weighthg": 135,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pyroar: {
		"exists": true,
		"tags": [],
		"num": 668,
		"name": "Pyroar",
		"types": [
				"Fire",
				"Normal"
		],
		"genderRatio": {
				"M": 0.125,
				"F": 0.875
		},
		"baseStats": {
				"hp": 86,
				"atk": 68,
				"def": 72,
				"spa": 109,
				"spd": 66,
				"spe": 106
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 81.5,
		"prevo": "Litleo",
		"evoLevel": 35,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "pyroar",
		"fullname": "pokemon: Pyroar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pyroar",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 507,
		"weighthg": 815,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	flabebe: {
		"exists": true,
		"tags": [],
		"num": 669,
		"name": "Flabébé",
		"baseForme": "Red",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 44,
				"atk": 38,
				"def": 39,
				"spa": 61,
				"spd": 79,
				"spe": 42
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.1,
		"evos": [
				"Floette"
		],
		"eggGroups": [
				"Fairy"
		],
		"cosmeticFormes": [
				"Flabébé-Blue",
				"Flabébé-Orange",
				"Flabébé-White",
				"Flabébé-Yellow"
		],
		"formeOrder": [
				"Flabébé",
				"Flabébé-Blue",
				"Flabébé-Orange",
				"Flabébé-White",
				"Flabébé-Yellow"
		],
		"tier": "LC",
		"id": "flabebe",
		"fullname": "pokemon: Flabébé",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Flabébé",
		"forme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 303,
		"weighthg": 1,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	floette: {
		"exists": true,
		"tags": [],
		"num": 670,
		"name": "Floette",
		"baseForme": "Red",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 54,
				"atk": 45,
				"def": 47,
				"spa": 75,
				"spd": 98,
				"spe": 52
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.9,
		"prevo": "Flabébé",
		"evoLevel": 19,
		"evos": [
				"Florges"
		],
		"eggGroups": [
				"Fairy"
		],
		"otherFormes": [
				"Floette-Eternal"
		],
		"cosmeticFormes": [
				"Floette-Blue",
				"Floette-Orange",
				"Floette-White",
				"Floette-Yellow"
		],
		"formeOrder": [
				"Floette",
				"Floette-Blue",
				"Floette-Orange",
				"Floette-White",
				"Floette-Yellow",
				"Floette-Eternal"
		],
		"tier": "NFE",
		"id": "floette",
		"fullname": "pokemon: Floette",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Floette",
		"forme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 371,
		"weighthg": 9,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	floetteeternal: {
		"exists": true,
		"tags": [],
		"num": 670,
		"name": "Floette-Eternal",
		"baseSpecies": "Floette",
		"forme": "Eternal",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 74,
				"atk": 65,
				"def": 67,
				"spa": 125,
				"spd": 128,
				"spe": 92
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.9,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "floetteeternal",
		"fullname": "pokemon: Floette-Eternal",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 551,
		"weighthg": 9,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	florges: {
		"exists": true,
		"tags": [],
		"num": 671,
		"name": "Florges",
		"baseForme": "Red",
		"types": [
				"Normal"
		],
		"gender": "F",
		"baseStats": {
				"hp": 78,
				"atk": 65,
				"def": 68,
				"spa": 112,
				"spd": 154,
				"spe": 75
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 10,
		"prevo": "Floette",
		"evoType": "useItem",
		"evoItem": "Shiny Stone",
		"eggGroups": [
				"Fairy"
		],
		"cosmeticFormes": [
				"Florges-Blue",
				"Florges-Orange",
				"Florges-White",
				"Florges-Yellow"
		],
		"formeOrder": [
				"Florges",
				"Florges-Blue",
				"Florges-Orange",
				"Florges-White",
				"Florges-Yellow"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "florges",
		"fullname": "pokemon: Florges",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Florges",
		"forme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 552,
		"weighthg": 100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	skiddo: {
		"exists": true,
		"tags": [],
		"num": 672,
		"name": "Skiddo",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 66,
				"atk": 65,
				"def": 48,
				"spa": 62,
				"spd": 57,
				"spe": 52
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 31,
		"evos": [
				"Gogoat"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "skiddo",
		"fullname": "pokemon: Skiddo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Skiddo",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 350,
		"weighthg": 310,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gogoat: {
		"exists": true,
		"tags": [],
		"num": 673,
		"name": "Gogoat",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 123,
				"atk": 100,
				"def": 62,
				"spa": 97,
				"spd": 81,
				"spe": 68
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 91,
		"prevo": "Skiddo",
		"evoLevel": 32,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "gogoat",
		"fullname": "pokemon: Gogoat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gogoat",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 531,
		"weighthg": 910,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pancham: {
		"exists": true,
		"tags": [],
		"num": 674,
		"name": "Pancham",
		"types": [
				"Fighting"
		],
		"baseStats": {
				"hp": 67,
				"atk": 82,
				"def": 62,
				"spa": 46,
				"spd": 48,
				"spe": 43
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 8,
		"evos": [
				"Pangoro"
		],
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pancham",
		"fullname": "pokemon: Pancham",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pancham",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 348,
		"weighthg": 80,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pangoro: {
		"exists": true,
		"tags": [],
		"num": 675,
		"name": "Pangoro",
		"types": [
				"Fighting",
				"Dark"
		],
		"baseStats": {
				"hp": 95,
				"atk": 124,
				"def": 78,
				"spa": 69,
				"spd": 71,
				"spe": 58
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 136,
		"prevo": "Pancham",
		"evoLevel": 32,
		"evoCondition": "with a Dark-type in the party",
		"eggGroups": [
				"Field",
				"Human-Like"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pangoro",
		"fullname": "pokemon: Pangoro",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pangoro",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 495,
		"weighthg": 1360,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	furfrou: {
		"exists": true,
		"tags": [],
		"num": 676,
		"name": "Furfrou",
		"baseForme": "Natural",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 75,
				"atk": 80,
				"def": 60,
				"spa": 65,
				"spd": 90,
				"spe": 102
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 28,
		"eggGroups": [
				"Field"
		],
		"cosmeticFormes": [
				"Furfrou-Dandy",
				"Furfrou-Debutante",
				"Furfrou-Diamond",
				"Furfrou-Heart",
				"Furfrou-Kabuki",
				"Furfrou-La Reine",
				"Furfrou-Matron",
				"Furfrou-Pharaoh",
				"Furfrou-Star"
		],
		"formeOrder": [
				"Furfrou",
				"Furfrou-Heart",
				"Furfrou-Star",
				"Furfrou-Diamond",
				"Furfrou-Debutante",
				"Furfrou-Matron",
				"Furfrou-Dandy",
				"Furfrou-La Reine",
				"Furfrou-Kabuki",
				"Furfrou-Pharaoh"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "furfrou",
		"fullname": "pokemon: Furfrou",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Furfrou",
		"forme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 472,
		"weighthg": 280,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	espurr: {
		"exists": true,
		"tags": [],
		"num": 677,
		"name": "Espurr",
		"types": [
				"Psychic"
		],
		"baseStats": {
				"hp": 62,
				"atk": 48,
				"def": 54,
				"spa": 63,
				"spd": 60,
				"spe": 68
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Own Tempo"
		},
		"weightkg": 3.5,
		"evos": [
				"Meowstic",
				"Meowstic-F"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "espurr",
		"fullname": "pokemon: Espurr",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Espurr",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 355,
		"weighthg": 35,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	meowstic: {
		"exists": true,
		"tags": [],
		"num": 678,
		"name": "Meowstic",
		"baseForme": "M",
		"types": [
				"Psychic"
		],
		"gender": "M",
		"baseStats": {
				"hp": 74,
				"atk": 48,
				"def": 76,
				"spa": 83,
				"spd": 81,
				"spe": 104
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 8.5,
		"prevo": "Espurr",
		"evoLevel": 25,
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Meowstic-F"
		],
		"formeOrder": [
				"Meowstic",
				"Meowstic-F"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "meowstic",
		"fullname": "pokemon: Meowstic",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Meowstic",
		"forme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 1,
				"F": 0
		},
		"bst": 466,
		"weighthg": 85,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	meowsticf: {
		"exists": true,
		"tags": [],
		"num": 678,
		"name": "Meowstic-F",
		"baseSpecies": "Meowstic",
		"forme": "F",
		"types": [
				"Psychic"
		],
		"gender": "F",
		"baseStats": {
				"hp": 74,
				"atk": 48,
				"def": 76,
				"spa": 83,
				"spd": 81,
				"spe": 104
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 8.5,
		"prevo": "Espurr",
		"evoLevel": 25,
		"eggGroups": [
				"Field"
		],
		"id": "meowsticf",
		"fullname": "pokemon: Meowstic-F",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 466,
		"weighthg": 85,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	honedge: {
		"exists": true,
		"tags": [],
		"num": 679,
		"name": "Honedge",
		"types": [
				"Steel",
				"Ghost"
		],
		"baseStats": {
				"hp": 45,
				"atk": 80,
				"def": 100,
				"spa": 35,
				"spd": 37,
				"spe": 28
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 2,
		"evos": [
				"Doublade"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "honedge",
		"fullname": "pokemon: Honedge",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Honedge",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 325,
		"weighthg": 20,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	doublade: {
		"exists": true,
		"tags": [],
		"num": 680,
		"name": "Doublade",
		"types": [
				"Steel",
				"Ghost"
		],
		"baseStats": {
				"hp": 59,
				"atk": 110,
				"def": 150,
				"spa": 45,
				"spd": 49,
				"spe": 35
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 4.5,
		"prevo": "Honedge",
		"evoLevel": 35,
		"evos": [
				"Aegislash"
		],
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "doublade",
		"fullname": "pokemon: Doublade",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Doublade",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 448,
		"weighthg": 45,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	aegislash: {
		"exists": true,
		"tags": [],
		"num": 681,
		"name": "Aegislash",
		"baseForme": "Shield",
		"types": [
				"Steel",
				"Ghost"
		],
		"baseStats": {
				"hp": 60,
				"atk": 50,
				"def": 140,
				"spa": 50,
				"spd": 140,
				"spe": 60
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 53,
		"prevo": "Doublade",
		"evoType": "useItem",
		"evoItem": "Dusk Stone",
		"eggGroups": [
				"Mineral"
		],
		"otherFormes": [
				"Aegislash-Blade"
		],
		"formeOrder": [
				"Aegislash",
				"Aegislash-Blade"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "aegislash",
		"fullname": "pokemon: Aegislash",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Aegislash",
		"forme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 530,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	aegislashblade: {
		"exists": true,
		"tags": [],
		"num": 681,
		"name": "Aegislash-Blade",
		"baseSpecies": "Aegislash",
		"forme": "Blade",
		"types": [
				"Steel",
				"Ghost"
		],
		"baseStats": {
				"hp": 60,
				"atk": 140,
				"def": 50,
				"spa": 140,
				"spd": 50,
				"spe": 60
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 53,
		"eggGroups": [
				"Mineral"
		],
		"requiredAbility": "Stance Change",
		// "battleOnly": "Aegislash",
		"isNonstandard": null,
		"id": "aegislashblade",
		"fullname": "pokemon: Aegislash-Blade",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 530,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Aegislash"
	},
	spritzee: {
		"exists": true,
		"tags": [],
		"num": 682,
		"name": "Spritzee",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 78,
				"atk": 52,
				"def": 60,
				"spa": 63,
				"spd": 65,
				"spe": 23
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.5,
		"evos": [
				"Aromatisse"
		],
		"eggGroups": [
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "spritzee",
		"fullname": "pokemon: Spritzee",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Spritzee",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 341,
		"weighthg": 5,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	aromatisse: {
		"exists": true,
		"tags": [],
		"num": 683,
		"name": "Aromatisse",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 101,
				"atk": 72,
				"def": 72,
				"spa": 99,
				"spd": 89,
				"spe": 29
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 15.5,
		"prevo": "Spritzee",
		"evoType": "trade",
		"evoItem": "Sachet",
		"eggGroups": [
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "aromatisse",
		"fullname": "pokemon: Aromatisse",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Aromatisse",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 462,
		"weighthg": 155,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	swirlix: {
		"exists": true,
		"tags": [],
		"num": 684,
		"name": "Swirlix",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 62,
				"atk": 48,
				"def": 66,
				"spa": 59,
				"spd": 57,
				"spe": 49
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 3.5,
		"evos": [
				"Slurpuff"
		],
		"eggGroups": [
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "swirlix",
		"fullname": "pokemon: Swirlix",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Swirlix",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 341,
		"weighthg": 35,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	slurpuff: {
		"exists": true,
		"tags": [],
		"num": 685,
		"name": "Slurpuff",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 82,
				"atk": 80,
				"def": 86,
				"spa": 85,
				"spd": 75,
				"spe": 72
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 5,
		"prevo": "Swirlix",
		"evoType": "trade",
		"evoItem": "Whipped Dream",
		"eggGroups": [
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "slurpuff",
		"fullname": "pokemon: Slurpuff",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Slurpuff",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 50,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	inkay: {
		"exists": true,
		"tags": [],
		"num": 686,
		"name": "Inkay",
		"types": [
				"Dark",
				"Psychic"
		],
		"baseStats": {
				"hp": 53,
				"atk": 54,
				"def": 53,
				"spa": 37,
				"spd": 46,
				"spe": 45
		},
		"abilities": {
				"0": "Suction Cups"
		},
		"weightkg": 3.5,
		"evos": [
				"Malamar"
		],
		"eggGroups": [
				"Water 1",
				"Water 2"
		],
		"tier": "LC",
		"id": "inkay",
		"fullname": "pokemon: Inkay",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Inkay",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 288,
		"weighthg": 35,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	malamar: {
		"exists": true,
		"tags": [],
		"num": 687,
		"name": "Malamar",
		"types": [
				"Dark",
				"Psychic"
		],
		"baseStats": {
				"hp": 86,
				"atk": 92,
				"def": 88,
				"spa": 68,
				"spd": 75,
				"spe": 73
		},
		"abilities": {
				"0": "Suction Cups"
		},
		"weightkg": 47,
		"prevo": "Inkay",
		"evoLevel": 30,
		"evoCondition": "with the console turned upside-down",
		"eggGroups": [
				"Water 1",
				"Water 2"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "malamar",
		"fullname": "pokemon: Malamar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Malamar",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 482,
		"weighthg": 470,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	binacle: {
		"exists": true,
		"tags": [],
		"num": 688,
		"name": "Binacle",
		"types": [
				"Rock",
				"Water"
		],
		"baseStats": {
				"hp": 42,
				"atk": 52,
				"def": 67,
				"spa": 39,
				"spd": 56,
				"spe": 50
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 31,
		"evos": [
				"Barbaracle"
		],
		"eggGroups": [
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "binacle",
		"fullname": "pokemon: Binacle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Binacle",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 306,
		"weighthg": 310,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	barbaracle: {
		"exists": true,
		"tags": [],
		"num": 689,
		"name": "Barbaracle",
		"types": [
				"Rock",
				"Water"
		],
		"baseStats": {
				"hp": 72,
				"atk": 105,
				"def": 115,
				"spa": 54,
				"spd": 86,
				"spe": 68
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 96,
		"prevo": "Binacle",
		"evoLevel": 39,
		"eggGroups": [
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "barbaracle",
		"fullname": "pokemon: Barbaracle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Barbaracle",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 960,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	skrelp: {
		"exists": true,
		"tags": [],
		"num": 690,
		"name": "Skrelp",
		"types": [
				"Poison",
				"Water"
		],
		"baseStats": {
				"hp": 50,
				"atk": 60,
				"def": 60,
				"spa": 60,
				"spd": 60,
				"spe": 30
		},
		"abilities": {
				"0": "Poison Point"
		},
		"weightkg": 7.3,
		"evos": [
				"Dragalge"
		],
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "LC",
		"id": "skrelp",
		"fullname": "pokemon: Skrelp",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Skrelp",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 320,
		"weighthg": 73,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dragalge: {
		"exists": true,
		"tags": [],
		"num": 691,
		"name": "Dragalge",
		"types": [
				"Poison",
				"Dragon"
		],
		"baseStats": {
				"hp": 65,
				"atk": 75,
				"def": 90,
				"spa": 97,
				"spd": 123,
				"spe": 44
		},
		"abilities": {
				"0": "Poison Point"
		},
		"weightkg": 81.5,
		"prevo": "Skrelp",
		"evoLevel": 48,
		"eggGroups": [
				"Water 1",
				"Dragon"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "dragalge",
		"fullname": "pokemon: Dragalge",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dragalge",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 494,
		"weighthg": 815,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	clauncher: {
		"exists": true,
		"tags": [],
		"num": 692,
		"name": "Clauncher",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 50,
				"atk": 53,
				"def": 62,
				"spa": 58,
				"spd": 63,
				"spe": 44
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 8.3,
		"evos": [
				"Clawitzer"
		],
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"tier": "LC",
		"id": "clauncher",
		"fullname": "pokemon: Clauncher",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Clauncher",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 330,
		"weighthg": 83,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	clawitzer: {
		"exists": true,
		"tags": [],
		"num": 693,
		"name": "Clawitzer",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 71,
				"atk": 73,
				"def": 88,
				"spa": 120,
				"spd": 89,
				"spe": 59
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 35.3,
		"prevo": "Clauncher",
		"evoLevel": 37,
		"eggGroups": [
				"Water 1",
				"Water 3"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "clawitzer",
		"fullname": "pokemon: Clawitzer",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Clawitzer",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 353,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	helioptile: {
		"exists": true,
		"tags": [],
		"num": 694,
		"name": "Helioptile",
		"types": [
				"Electric",
				"Normal"
		],
		"baseStats": {
				"hp": 44,
				"atk": 38,
				"def": 33,
				"spa": 61,
				"spd": 43,
				"spe": 70
		},
		"abilities": {
				"0": "Sand Veil"
		},
		"weightkg": 6,
		"evos": [
				"Heliolisk"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "helioptile",
		"fullname": "pokemon: Helioptile",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Helioptile",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 289,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	heliolisk: {
		"exists": true,
		"tags": [],
		"num": 695,
		"name": "Heliolisk",
		"types": [
				"Electric",
				"Normal"
		],
		"baseStats": {
				"hp": 62,
				"atk": 55,
				"def": 52,
				"spa": 109,
				"spd": 94,
				"spe": 109
		},
		"abilities": {
				"0": "Sand Veil"
		},
		"weightkg": 21,
		"prevo": "Helioptile",
		"evoType": "useItem",
		"evoItem": "Sun Stone",
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "heliolisk",
		"fullname": "pokemon: Heliolisk",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Heliolisk",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 481,
		"weighthg": 210,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tyrunt: {
		"exists": true,
		"tags": [],
		"num": 696,
		"name": "Tyrunt",
		"types": [
				"Rock",
				"Dragon"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 58,
				"atk": 89,
				"def": 77,
				"spa": 45,
				"spd": 45,
				"spe": 48
		},
		"abilities": {
				"0": "Sturdy"
		},
		"weightkg": 26,
		"evos": [
				"Tyrantrum"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tyrunt",
		"fullname": "pokemon: Tyrunt",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tyrunt",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 362,
		"weighthg": 260,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tyrantrum: {
		"exists": true,
		"tags": [],
		"num": 697,
		"name": "Tyrantrum",
		"types": [
				"Rock",
				"Dragon"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 82,
				"atk": 121,
				"def": 119,
				"spa": 69,
				"spd": 59,
				"spe": 71
		},
		"abilities": {
				"0": "Rock Head"
		},
		"weightkg": 270,
		"prevo": "Tyrunt",
		"evoLevel": 39,
		"evoCondition": "during the day",
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tyrantrum",
		"fullname": "pokemon: Tyrantrum",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tyrantrum",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 521,
		"weighthg": 2700,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	amaura: {
		"exists": true,
		"tags": [],
		"num": 698,
		"name": "Amaura",
		"types": [
				"Rock",
				"Ice"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 77,
				"atk": 59,
				"def": 50,
				"spa": 67,
				"spd": 63,
				"spe": 46
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 25.2,
		"evos": [
				"Aurorus"
		],
		"eggGroups": [
				"Monster"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "amaura",
		"fullname": "pokemon: Amaura",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Amaura",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"bst": 362,
		"weighthg": 252,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	aurorus: {
		"exists": true,
		"tags": [],
		"num": 699,
		"name": "Aurorus",
		"types": [
				"Rock",
				"Ice"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 123,
				"atk": 77,
				"def": 72,
				"spa": 99,
				"spd": 92,
				"spe": 58
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 225,
		"prevo": "Amaura",
		"evoLevel": 39,
		"evoCondition": "at night",
		"eggGroups": [
				"Monster"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "aurorus",
		"fullname": "pokemon: Aurorus",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Aurorus",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 521,
		"weighthg": 2250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sylveon: {
		"exists": true,
		"tags": [],
		"num": 700,
		"name": "Sylveon",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 95,
				"atk": 65,
				"def": 65,
				"spa": 110,
				"spd": 130,
				"spe": 60
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 23.5,
		"prevo": "Eevee",
		"evoType": "levelExtra",
		"evoCondition": "with a Fairy-type move and two levels of Affection",
		"eggGroups": [
				"Field"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "sylveon",
		"fullname": "pokemon: Sylveon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sylveon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 525,
		"weighthg": 235,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hawlucha: {
		"exists": true,
		"tags": [],
		"num": 701,
		"name": "Hawlucha",
		"types": [
				"Fighting",
				"Flying"
		],
		"baseStats": {
				"hp": 78,
				"atk": 92,
				"def": 75,
				"spa": 74,
				"spd": 63,
				"spe": 118
		},
		"abilities": {
				"0": "Limber"
		},
		"weightkg": 21.5,
		"eggGroups": [
				"Flying",
				"Human-Like"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "hawlucha",
		"fullname": "pokemon: Hawlucha",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hawlucha",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 215,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dedenne: {
		"exists": true,
		"tags": [],
		"num": 702,
		"name": "Dedenne",
		"types": [
				"Electric",
				"Normal"
		],
		"baseStats": {
				"hp": 67,
				"atk": 58,
				"def": 57,
				"spa": 81,
				"spd": 67,
				"spe": 101
		},
		"abilities": {
				"0": "Pickup",
				"H": "Plus"
		},
		"weightkg": 2.2,
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "dedenne",
		"fullname": "pokemon: Dedenne",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dedenne",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 431,
		"weighthg": 22,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	carbink: {
		"exists": true,
		"tags": [],
		"num": 703,
		"name": "Carbink",
		"types": [
				"Rock",
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 50,
				"def": 150,
				"spa": 50,
				"spd": 150,
				"spe": 50
		},
		"abilities": {
				"0": "Clear Body",
				"1": "Sturdy"
		},
		"weightkg": 5.7,
		"eggGroups": [
				"Fairy",
				"Mineral"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "carbink",
		"fullname": "pokemon: Carbink",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Carbink",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 500,
		"weighthg": 57,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	goomy: {
		"exists": true,
		"tags": [],
		"num": 704,
		"name": "Goomy",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 45,
				"atk": 50,
				"def": 35,
				"spa": 55,
				"spd": 75,
				"spe": 40
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 2.8,
		"evos": [
				"Sliggoo",
				"Sliggoo-Hisui"
		],
		"eggGroups": [
				"Dragon"
		],
		"tier": "LC",
		"id": "goomy",
		"fullname": "pokemon: Goomy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Goomy",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 28,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sliggoo: {
		"exists": true,
		"tags": [],
		"num": 705,
		"name": "Sliggoo",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 68,
				"atk": 75,
				"def": 53,
				"spa": 83,
				"spd": 113,
				"spe": 60
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 17.5,
		"prevo": "Goomy",
		"evoLevel": 40,
		"evos": [
				"Goodra"
		],
		"eggGroups": [
				"Dragon"
		],
		"otherFormes": [
				"Sliggoo-Hisui"
		],
		"formeOrder": [
				"Sliggoo",
				"Sliggoo-Hisui"
		],
		"tier": "NFE",
		"id": "sliggoo",
		"fullname": "pokemon: Sliggoo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sliggoo",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 452,
		"weighthg": 175,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sliggoohisui: {
		"exists": true,
		"tags": [],
		"num": 705,
		"name": "Sliggoo-Hisui",
		"baseSpecies": "Sliggoo",
		"forme": "Hisui",
		"types": [
				"Steel",
				"Dragon"
		],
		"baseStats": {
				"hp": 58,
				"atk": 75,
				"def": 83,
				"spa": 83,
				"spd": 113,
				"spe": 40
		},
		"abilities": {
				"0": "Shell Armor"
		},
		"weightkg": 68.5,
		"prevo": "Goomy",
		"evoLevel": 40,
		"evos": [
				"Goodra-Hisui"
		],
		"eggGroups": [
				"Dragon"
		],
		"tier": "NFE",
		"id": "sliggoohisui",
		"fullname": "pokemon: Sliggoo-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 452,
		"weighthg": 685,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	goodra: {
		"exists": true,
		"tags": [],
		"num": 706,
		"name": "Goodra",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 90,
				"atk": 100,
				"def": 70,
				"spa": 110,
				"spd": 150,
				"spe": 80
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 150.5,
		"prevo": "Sliggoo",
		"evoLevel": 50,
		"evoCondition": "during rain",
		"eggGroups": [
				"Dragon"
		],
		"otherFormes": [
				"Goodra-Hisui"
		],
		"formeOrder": [
				"Goodra",
				"Goodra-Hisui"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "goodra",
		"fullname": "pokemon: Goodra",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Goodra",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 1505,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	goodrahisui: {
		"exists": true,
		"tags": [],
		"num": 706,
		"name": "Goodra-Hisui",
		"baseSpecies": "Goodra",
		"forme": "Hisui",
		"types": [
				"Steel",
				"Dragon"
		],
		"baseStats": {
				"hp": 80,
				"atk": 100,
				"def": 100,
				"spa": 110,
				"spd": 150,
				"spe": 60
		},
		"abilities": {
				"0": "Shell Armor"
		},
		"weightkg": 334.1,
		"prevo": "Sliggoo-Hisui",
		"evoLevel": 50,
		"evoCondition": "during rain",
		"eggGroups": [
				"Dragon"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "goodrahisui",
		"fullname": "pokemon: Goodra-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 3341,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	klefki: {
		"exists": true,
		"tags": [],
		"num": 707,
		"name": "Klefki",
		"types": [
				"Steel",
				"Normal"
		],
		"baseStats": {
				"hp": 57,
				"atk": 80,
				"def": 91,
				"spa": 80,
				"spd": 87,
				"spe": 75
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 3,
		"eggGroups": [
				"Mineral"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "klefki",
		"fullname": "pokemon: Klefki",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Klefki",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 470,
		"weighthg": 30,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	phantump: {
		"exists": true,
		"tags": [],
		"num": 708,
		"name": "Phantump",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 43,
				"atk": 70,
				"def": 48,
				"spa": 50,
				"spd": 60,
				"spe": 38
		},
		"abilities": {
				"0": "Natural Cure"
		},
		"weightkg": 7,
		"evos": [
				"Trevenant"
		],
		"eggGroups": [
				"Grass",
				"Amorphous"
		],
		"tier": "LC",
		"id": "phantump",
		"fullname": "pokemon: Phantump",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Phantump",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 309,
		"weighthg": 70,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	trevenant: {
		"exists": true,
		"tags": [],
		"num": 709,
		"name": "Trevenant",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 85,
				"atk": 110,
				"def": 76,
				"spa": 65,
				"spd": 82,
				"spe": 56
		},
		"abilities": {
				"0": "Natural Cure"
		},
		"weightkg": 71,
		"prevo": "Phantump",
		"evoType": "trade",
		"eggGroups": [
				"Grass",
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "trevenant",
		"fullname": "pokemon: Trevenant",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Trevenant",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 474,
		"weighthg": 710,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pumpkaboo: {
		"exists": true,
		"tags": [],
		"num": 710,
		"name": "Pumpkaboo",
		"baseForme": "Average",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 49,
				"atk": 66,
				"def": 70,
				"spa": 44,
				"spd": 55,
				"spe": 51
		},
		"abilities": {
				"0": "Pickup",
				"1": "Insomnia"
		},
		"weightkg": 5,
		"evos": [
				"Gourgeist"
		],
		"eggGroups": [
				"Amorphous"
		],
		"otherFormes": [
				"Pumpkaboo-Small",
				"Pumpkaboo-Large",
				"Pumpkaboo-Super"
		],
		"formeOrder": [
				"Pumpkaboo",
				"Pumpkaboo-Small",
				"Pumpkaboo-Large",
				"Pumpkaboo-Super"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pumpkaboo",
		"fullname": "pokemon: Pumpkaboo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pumpkaboo",
		"forme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 335,
		"weighthg": 50,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pumpkaboosmall: {
		"exists": true,
		"tags": [],
		"num": 710,
		"name": "Pumpkaboo-Small",
		"baseSpecies": "Pumpkaboo",
		"forme": "Small",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 44,
				"atk": 66,
				"def": 70,
				"spa": 44,
				"spd": 55,
				"spe": 56
		},
		"abilities": {
				"0": "Pickup",
				"1": "Insomnia"
		},
		"weightkg": 3.5,
		"evos": [
				"Gourgeist-Small"
		],
		"eggGroups": [
				"Amorphous"
		],
		"isNonstandard": null,
		"id": "pumpkaboosmall",
		"fullname": "pokemon: Pumpkaboo-Small",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 335,
		"weighthg": 35,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pumpkaboolarge: {
		"exists": true,
		"tags": [],
		"num": 710,
		"name": "Pumpkaboo-Large",
		"baseSpecies": "Pumpkaboo",
		"forme": "Large",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 54,
				"atk": 66,
				"def": 70,
				"spa": 44,
				"spd": 55,
				"spe": 46
		},
		"abilities": {
				"0": "Pickup",
				"1": "Insomnia"
		},
		"weightkg": 7.5,
		"evos": [
				"Gourgeist-Large"
		],
		"eggGroups": [
				"Amorphous"
		],
		"isNonstandard": null,
		"id": "pumpkaboolarge",
		"fullname": "pokemon: Pumpkaboo-Large",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 335,
		"weighthg": 75,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pumpkaboosuper: {
		"exists": true,
		"tags": [],
		"num": 710,
		"name": "Pumpkaboo-Super",
		"baseSpecies": "Pumpkaboo",
		"forme": "Super",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 59,
				"atk": 66,
				"def": 70,
				"spa": 44,
				"spd": 55,
				"spe": 41
		},
		"abilities": {
				"0": "Pickup",
				"1": "Insomnia"
		},
		"weightkg": 15,
		"evos": [
				"Gourgeist-Super"
		],
		"eggGroups": [
				"Amorphous"
		],
		"isNonstandard": null,
		"id": "pumpkaboosuper",
		"fullname": "pokemon: Pumpkaboo-Super",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 335,
		"weighthg": 150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gourgeist: {
		"exists": true,
		"tags": [],
		"num": 711,
		"name": "Gourgeist",
		"baseForme": "Average",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 65,
				"atk": 90,
				"def": 122,
				"spa": 58,
				"spd": 75,
				"spe": 84
		},
		"abilities": {
				"0": "Pickup",
				"1": "Insomnia"
		},
		"weightkg": 12.5,
		"prevo": "Pumpkaboo",
		"evoType": "trade",
		"eggGroups": [
				"Amorphous"
		],
		"otherFormes": [
				"Gourgeist-Small",
				"Gourgeist-Large",
				"Gourgeist-Super"
		],
		"formeOrder": [
				"Gourgeist",
				"Gourgeist-Small",
				"Gourgeist-Large",
				"Gourgeist-Super"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "gourgeist",
		"fullname": "pokemon: Gourgeist",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Gourgeist",
		"forme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 494,
		"weighthg": 125,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gourgeistsmall: {
		"exists": true,
		"tags": [],
		"num": 711,
		"name": "Gourgeist-Small",
		"baseSpecies": "Gourgeist",
		"forme": "Small",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 55,
				"atk": 85,
				"def": 122,
				"spa": 58,
				"spd": 75,
				"spe": 99
		},
		"abilities": {
				"0": "Pickup",
				"1": "Insomnia"
		},
		"weightkg": 9.5,
		"prevo": "Pumpkaboo-Small",
		"evoType": "trade",
		"eggGroups": [
				"Amorphous"
		],
		"isNonstandard": null,
		"id": "gourgeistsmall",
		"fullname": "pokemon: Gourgeist-Small",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 494,
		"weighthg": 95,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gourgeistlarge: {
		"exists": true,
		"tags": [],
		"num": 711,
		"name": "Gourgeist-Large",
		"baseSpecies": "Gourgeist",
		"forme": "Large",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 75,
				"atk": 95,
				"def": 122,
				"spa": 58,
				"spd": 75,
				"spe": 69
		},
		"abilities": {
				"0": "Pickup",
				"1": "Insomnia"
		},
		"weightkg": 14,
		"prevo": "Pumpkaboo-Large",
		"evoType": "trade",
		"eggGroups": [
				"Amorphous"
		],
		"isNonstandard": null,
		"id": "gourgeistlarge",
		"fullname": "pokemon: Gourgeist-Large",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 494,
		"weighthg": 140,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gourgeistsuper: {
		"exists": true,
		"tags": [],
		"num": 711,
		"name": "Gourgeist-Super",
		"baseSpecies": "Gourgeist",
		"forme": "Super",
		"types": [
				"Ghost",
				"Grass"
		],
		"baseStats": {
				"hp": 85,
				"atk": 100,
				"def": 122,
				"spa": 58,
				"spd": 75,
				"spe": 54
		},
		"abilities": {
				"0": "Pickup",
				"1": "Insomnia"
		},
		"weightkg": 39,
		"prevo": "Pumpkaboo-Super",
		"evoType": "trade",
		"eggGroups": [
				"Amorphous"
		],
		"isNonstandard": null,
		"id": "gourgeistsuper",
		"fullname": "pokemon: Gourgeist-Super",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 494,
		"weighthg": 390,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bergmite: {
		"exists": true,
		"tags": [],
		"num": 712,
		"name": "Bergmite",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 55,
				"atk": 69,
				"def": 85,
				"spa": 32,
				"spd": 35,
				"spe": 28
		},
		"abilities": {
				"0": "Own Tempo",
				"1": "Sturdy"
		},
		"weightkg": 99.5,
		"evos": [
				"Avalugg",
				"Avalugg-Hisui"
		],
		"eggGroups": [
				"Monster",
				"Mineral"
		],
		"tier": "LC",
		"id": "bergmite",
		"fullname": "pokemon: Bergmite",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bergmite",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 304,
		"weighthg": 995,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	avalugg: {
		"exists": true,
		"tags": [],
		"num": 713,
		"name": "Avalugg",
		"types": [
				"Ice"
		],
		"baseStats": {
				"hp": 95,
				"atk": 117,
				"def": 184,
				"spa": 44,
				"spd": 46,
				"spe": 28
		},
		"abilities": {
				"0": "Own Tempo",
				"1": "Sturdy"
		},
		"weightkg": 505,
		"prevo": "Bergmite",
		"evoLevel": 37,
		"eggGroups": [
				"Monster",
				"Mineral"
		],
		"otherFormes": [
				"Avalugg-Hisui"
		],
		"formeOrder": [
				"Avalugg",
				"Avalugg-Hisui"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "avalugg",
		"fullname": "pokemon: Avalugg",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Avalugg",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 514,
		"weighthg": 5050,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	avalugghisui: {
		"exists": true,
		"tags": [],
		"num": 713,
		"name": "Avalugg-Hisui",
		"baseSpecies": "Avalugg",
		"forme": "Hisui",
		"types": [
				"Ice",
				"Rock"
		],
		"baseStats": {
				"hp": 95,
				"atk": 127,
				"def": 184,
				"spa": 34,
				"spd": 36,
				"spe": 38
		},
		"abilities": {
				"0": "Sturdy"
		},
		"weightkg": 262.4,
		"prevo": "Bergmite",
		"evoLevel": 37,
		"eggGroups": [
				"Monster",
				"Mineral"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "avalugghisui",
		"fullname": "pokemon: Avalugg-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 514,
		"weighthg": 2624,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	noibat: {
		"exists": true,
		"tags": [],
		"num": 714,
		"name": "Noibat",
		"types": [
				"Flying",
				"Dragon"
		],
		"baseStats": {
				"hp": 40,
				"atk": 30,
				"def": 35,
				"spa": 45,
				"spd": 40,
				"spe": 55
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 8,
		"evos": [
				"Noivern"
		],
		"eggGroups": [
				"Flying",
				"Dragon"
		],
		"tier": "LC",
		"id": "noibat",
		"fullname": "pokemon: Noibat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Noibat",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 245,
		"weighthg": 80,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	noivern: {
		"exists": true,
		"tags": [],
		"num": 715,
		"name": "Noivern",
		"types": [
				"Flying",
				"Dragon"
		],
		"baseStats": {
				"hp": 85,
				"atk": 70,
				"def": 80,
				"spa": 97,
				"spd": 80,
				"spe": 123
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 85,
		"prevo": "Noibat",
		"evoLevel": 48,
		"eggGroups": [
				"Flying",
				"Dragon"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "noivern",
		"fullname": "pokemon: Noivern",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Noivern",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 535,
		"weighthg": 850,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	xerneas: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 716,
		"name": "Xerneas",
		"baseForme": "Active",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 126,
				"atk": 131,
				"def": 95,
				"spa": 131,
				"spd": 98,
				"spe": 99
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 215,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Xerneas-Neutral"
		],
		"formeOrder": [
				"Xerneas-Neutral",
				"Xerneas"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "xerneas",
		"fullname": "pokemon: Xerneas",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Xerneas",
		"forme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 2150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	xerneasneutral: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 716,
		"name": "Xerneas-Neutral",
		"baseSpecies": "Xerneas",
		"forme": "Neutral",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 126,
				"atk": 131,
				"def": 95,
				"spa": 131,
				"spd": 98,
				"spe": 99
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 215,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": "Custom",
		"tier": "Illegal",
		"id": "xerneasneutral",
		"fullname": "pokemon: Xerneas-Neutral",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 2150,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	yveltal: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 717,
		"name": "Yveltal",
		"types": [
				"Dark",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 126,
				"atk": 131,
				"def": 95,
				"spa": 131,
				"spd": 98,
				"spe": 99
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 203,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "yveltal",
		"fullname": "pokemon: Yveltal",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Yveltal",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 2030,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zygarde: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 718,
		"name": "Zygarde",
		"baseForme": "50%",
		"types": [
				"Dragon",
				"Ground"
		],
		"gender": "N",
		"baseStats": {
				"hp": 108,
				"atk": 100,
				"def": 121,
				"spa": 81,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 305,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Zygarde-10%",
				"Zygarde-Complete"
		],
		"formeOrder": [
				"Zygarde",
				"Zygarde-10%",
				"Zygarde-10%",
				"Zygarde",
				"Zygarde-Complete"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "zygarde",
		"fullname": "pokemon: Zygarde",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Zygarde",
		"forme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 3050,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zygarde10: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 718,
		"name": "Zygarde-10%",
		"baseSpecies": "Zygarde",
		"forme": "10%",
		"types": [
				"Dragon",
				"Ground"
		],
		"gender": "N",
		"baseStats": {
				"hp": 54,
				"atk": 100,
				"def": 71,
				"spa": 61,
				"spd": 85,
				"spe": 115
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 33.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Zygarde",
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "zygarde10",
		"fullname": "pokemon: Zygarde-10%",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 486,
		"weighthg": 335,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zygardecomplete: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 718,
		"name": "Zygarde-Complete",
		"baseSpecies": "Zygarde",
		"forme": "Complete",
		"types": [
				"Dragon",
				"Ground"
		],
		"gender": "N",
		"baseStats": {
				"hp": 216,
				"atk": 100,
				"def": 121,
				"spa": 91,
				"spd": 95,
				"spe": 85
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 610,
		"eggGroups": [
				"Undiscovered"
		],
		"requiredAbility": "Power Construct",
		// "battleOnly": [
		//		"Zygarde",
		//		"Zygarde-10%"
		// ],
		"gen": 3,
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "zygardecomplete",
		"fullname": "pokemon: Zygarde-Complete",
		"effectType": "Pokemon",
		"kind": "Species",
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 708,
		"weighthg": 6100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Zygarde"
	},
	diancie: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 719,
		"name": "Diancie",
		"types": [
				"Rock",
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 100,
				"def": 150,
				"spa": 100,
				"spd": 150,
				"spe": 50
		},
		"abilities": {
				"0": "Clear Body"
		},
		"weightkg": 8.8,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Diancie-Mega"
		],
		"formeOrder": [
				"Diancie",
				"Diancie-Mega"
		],
		"tier": "NU",
		"doublesTier": "DOU",
		"id": "diancie",
		"fullname": "pokemon: Diancie",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Diancie",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 88,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dianciemega: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 719,
		"name": "Diancie-Mega",
		"baseSpecies": "Diancie",
		// "forme": "Mega",
		"types": [
				"Rock",
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 50,
				"atk": 160,
				"def": 110,
				"spa": 160,
				"spd": 110,
				"spe": 110
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 27.8,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Diancite",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "dianciemega",
		"fullname": "pokemon: Diancie-Mega",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Diancite"
		// ],
		"bst": 700,
		"weighthg": 278,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		// "isMega": true,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "battleOnly": "Diancie",
		// "changesFrom": "Diancie"
	},
	hoopa: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 720,
		"name": "Hoopa",
		"baseForme": "Confined",
		"types": [
				"Psychic",
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 110,
				"def": 60,
				"spa": 150,
				"spd": 130,
				"spe": 70
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 9,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Hoopa-Unbound"
		],
		"formeOrder": [
				"Hoopa",
				"Hoopa-Unbound"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "hoopa",
		"fullname": "pokemon: Hoopa",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hoopa",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 90,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hoopaunbound: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 720,
		"name": "Hoopa-Unbound",
		"baseSpecies": "Hoopa",
		"forme": "Unbound",
		"types": [
				"Psychic",
				"Dark"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 160,
				"def": 60,
				"spa": 170,
				"spd": 130,
				"spe": 80
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 490,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Hoopa",
		"tier": "RUBL",
		"doublesTier": "(DUU)",
		"id": "hoopaunbound",
		"fullname": "pokemon: Hoopa-Unbound",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 4900,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	volcanion: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 721,
		"name": "Volcanion",
		"types": [
				"Fire",
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 110,
				"def": 120,
				"spa": 130,
				"spd": 90,
				"spe": 70
		},
		"abilities": {
				"0": "Water Absorb"
		},
		"weightkg": 195,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "RU",
		"doublesTier": "DUU",
		"id": "volcanion",
		"fullname": "pokemon: Volcanion",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Volcanion",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 1950,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rowlet: {
		"exists": true,
		"tags": [],
		"num": 722,
		"name": "Rowlet",
		"types": [
				"Grass",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 68,
				"atk": 55,
				"def": 55,
				"spa": 50,
				"spd": 50,
				"spe": 42
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 1.5,
		"evos": [
				"Dartrix"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "LC",
		"id": "rowlet",
		"fullname": "pokemon: Rowlet",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Rowlet",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 320,
		"weighthg": 15,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dartrix: {
		"exists": true,
		"tags": [],
		"num": 723,
		"name": "Dartrix",
		"types": [
				"Grass",
				"Flying"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 78,
				"atk": 75,
				"def": 75,
				"spa": 70,
				"spd": 70,
				"spe": 52
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 16,
		"prevo": "Rowlet",
		"evoLevel": 17,
		"evos": [
				"Decidueye",
				"Decidueye-Hisui"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "NFE",
		"id": "dartrix",
		"fullname": "pokemon: Dartrix",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dartrix",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 420,
		"weighthg": 160,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	decidueye: {
		"exists": true,
		"tags": [],
		"num": 724,
		"name": "Decidueye",
		"types": [
				"Grass",
				"Ghost"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 78,
				"atk": 107,
				"def": 75,
				"spa": 100,
				"spd": 100,
				"spe": 70
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 36.6,
		"prevo": "Dartrix",
		"evoLevel": 34,
		"eggGroups": [
				"Flying"
		],
		"otherFormes": [
				"Decidueye-Hisui"
		],
		"formeOrder": [
				"Decidueye",
				"Decidueye-Hisui"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "decidueye",
		"fullname": "pokemon: Decidueye",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Decidueye",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 366,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	decidueyehisui: {
		"exists": true,
		"tags": [],
		"num": 724,
		"name": "Decidueye-Hisui",
		"baseSpecies": "Decidueye",
		"forme": "Hisui",
		"types": [
				"Grass",
				"Fighting"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 88,
				"atk": 112,
				"def": 80,
				"spa": 95,
				"spd": 95,
				"spe": 60
		},
		"abilities": {
				"0": "Overgrow"
		},
		"weightkg": 37,
		"prevo": "Dartrix",
		"evoLevel": 36,
		"eggGroups": [
				"Flying"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "decidueyehisui",
		"fullname": "pokemon: Decidueye-Hisui",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 370,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	litten: {
		"exists": true,
		"tags": [],
		"num": 725,
		"name": "Litten",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 45,
				"atk": 65,
				"def": 40,
				"spa": 60,
				"spd": 40,
				"spe": 70
		},
		"abilities": {
				"0": "Blaze",
				"1": "Intimidate"
		},
		"weightkg": 4.3,
		"evos": [
				"Torracat"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "litten",
		"fullname": "pokemon: Litten",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Litten",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 320,
		"weighthg": 43,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	torracat: {
		"exists": true,
		"tags": [],
		"num": 726,
		"name": "Torracat",
		"types": [
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 65,
				"atk": 85,
				"def": 50,
				"spa": 80,
				"spd": 50,
				"spe": 90
		},
		"abilities": {
				"0": "Blaze",
				"1": "Intimidate"
		},
		"weightkg": 25,
		"prevo": "Litten",
		"evoLevel": 17,
		"evos": [
				"Incineroar"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "NFE",
		"id": "torracat",
		"fullname": "pokemon: Torracat",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Torracat",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 420,
		"weighthg": 250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	incineroar: {
		"exists": true,
		"tags": [],
		"num": 727,
		"name": "Incineroar",
		"types": [
				"Fire",
				"Dark"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 95,
				"atk": 115,
				"def": 90,
				"spa": 80,
				"spd": 90,
				"spe": 60
		},
		"abilities": {
				"0": "Blaze",
				"1": "Intimidate"
		},
		"weightkg": 83,
		"prevo": "Torracat",
		"evoLevel": 34,
		"eggGroups": [
				"Field"
		],
		"tier": "NU",
		"doublesTier": "DOU",
		"id": "incineroar",
		"fullname": "pokemon: Incineroar",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Incineroar",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 830,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	popplio: {
		"exists": true,
		"tags": [],
		"num": 728,
		"name": "Popplio",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 50,
				"atk": 54,
				"def": 54,
				"spa": 66,
				"spd": 56,
				"spe": 40
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 7.5,
		"evos": [
				"Brionne"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "LC",
		"id": "popplio",
		"fullname": "pokemon: Popplio",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Popplio",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 320,
		"weighthg": 75,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	brionne: {
		"exists": true,
		"tags": [],
		"num": 729,
		"name": "Brionne",
		"types": [
				"Water"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 60,
				"atk": 69,
				"def": 69,
				"spa": 91,
				"spd": 81,
				"spe": 50
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 17.5,
		"prevo": "Popplio",
		"evoLevel": 17,
		"evos": [
				"Primarina"
		],
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "NFE",
		"id": "brionne",
		"fullname": "pokemon: Brionne",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Brionne",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"bst": 420,
		"weighthg": 175,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	primarina: {
		"exists": true,
		"tags": [],
		"num": 730,
		"name": "Primarina",
		"types": [
				"Water",
				"Normal"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 80,
				"atk": 74,
				"def": 74,
				"spa": 126,
				"spd": 116,
				"spe": 60
		},
		"abilities": {
				"0": "Torrent"
		},
		"weightkg": 44,
		"prevo": "Brionne",
		"evoLevel": 34,
		"eggGroups": [
				"Water 1",
				"Field"
		],
		"tier": "OU",
		"doublesTier": "(DUU)",
		"id": "primarina",
		"fullname": "pokemon: Primarina",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Primarina",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"bst": 530,
		"weighthg": 440,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pikipek: {
		"exists": true,
		"tags": [],
		"num": 731,
		"name": "Pikipek",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 35,
				"atk": 75,
				"def": 30,
				"spa": 30,
				"spd": 30,
				"spe": 65
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Pickup"
		},
		"weightkg": 1.2,
		"evos": [
				"Trumbeak"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "LC",
		"id": "pikipek",
		"fullname": "pokemon: Pikipek",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Pikipek",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 265,
		"weighthg": 12,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	trumbeak: {
		"exists": true,
		"tags": [],
		"num": 732,
		"name": "Trumbeak",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 55,
				"atk": 85,
				"def": 50,
				"spa": 40,
				"spd": 50,
				"spe": 75
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Pickup"
		},
		"weightkg": 14.8,
		"prevo": "Pikipek",
		"evoLevel": 14,
		"evos": [
				"Toucannon"
		],
		"eggGroups": [
				"Flying"
		],
		"tier": "NFE",
		"id": "trumbeak",
		"fullname": "pokemon: Trumbeak",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Trumbeak",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 355,
		"weighthg": 148,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	toucannon: {
		"exists": true,
		"tags": [],
		"num": 733,
		"name": "Toucannon",
		"types": [
				"Normal",
				"Flying"
		],
		"baseStats": {
				"hp": 80,
				"atk": 120,
				"def": 75,
				"spa": 75,
				"spd": 75,
				"spe": 60
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 26,
		"prevo": "Trumbeak",
		"evoLevel": 28,
		"eggGroups": [
				"Flying"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "toucannon",
		"fullname": "pokemon: Toucannon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Toucannon",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 260,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	yungoos: {
		"exists": true,
		"tags": [],
		"num": 734,
		"name": "Yungoos",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 48,
				"atk": 70,
				"def": 30,
				"spa": 30,
				"spd": 30,
				"spe": 45
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 6,
		"evos": [
				"Gumshoos"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "yungoos",
		"fullname": "pokemon: Yungoos",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Yungoos",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 253,
		"weighthg": 60,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gumshoos: {
		"exists": true,
		"tags": [],
		"num": 735,
		"name": "Gumshoos",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 88,
				"atk": 110,
				"def": 60,
				"spa": 55,
				"spd": 60,
				"spe": 45
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 14.2,
		"prevo": "Yungoos",
		"evoLevel": 20,
		"evoCondition": "during the day",
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Gumshoos-Totem"
		],
		"formeOrder": [
				"Gumshoos",
				"Gumshoos-Totem"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "gumshoos",
		"fullname": "pokemon: Gumshoos",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Gumshoos",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 418,
		"weighthg": 142,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	gumshoostotem: {
		"exists": true,
		"tags": [],
		"num": 735,
		"name": "Gumshoos-Totem",
		"baseSpecies": "Gumshoos",
		"forme": "Totem",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 88,
				"atk": 110,
				"def": 60,
				"spa": 55,
				"spd": 60,
				"spe": 45
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 60,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "gumshoostotem",
		"fullname": "pokemon: Gumshoos-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 418,
		"weighthg": 600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	grubbin: {
		"exists": true,
		"tags": [],
		"num": 736,
		"name": "Grubbin",
		"types": [
				"Bug"
		],
		"baseStats": {
				"hp": 47,
				"atk": 62,
				"def": 45,
				"spa": 55,
				"spd": 45,
				"spe": 46
		},
		"abilities": {
				"0": "Swarm"
		},
		"weightkg": 4.4,
		"evos": [
				"Charjabug"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "LC",
		"id": "grubbin",
		"fullname": "pokemon: Grubbin",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Grubbin",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 44,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	charjabug: {
		"exists": true,
		"tags": [],
		"num": 737,
		"name": "Charjabug",
		"types": [
				"Bug",
				"Electric"
		],
		"baseStats": {
				"hp": 57,
				"atk": 82,
				"def": 95,
				"spa": 55,
				"spd": 75,
				"spe": 36
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 10.5,
		"prevo": "Grubbin",
		"evoLevel": 20,
		"evos": [
				"Vikavolt"
		],
		"eggGroups": [
				"Bug"
		],
		"tier": "NFE",
		"id": "charjabug",
		"fullname": "pokemon: Charjabug",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Charjabug",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 400,
		"weighthg": 105,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vikavolt: {
		"exists": true,
		"tags": [],
		"num": 738,
		"name": "Vikavolt",
		"types": [
				"Bug",
				"Electric"
		],
		"baseStats": {
				"hp": 77,
				"atk": 70,
				"def": 90,
				"spa": 145,
				"spd": 75,
				"spe": 43
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 45,
		"prevo": "Charjabug",
		"evoType": "useItem",
		"evoItem": "Thunder Stone",
		"eggGroups": [
				"Bug"
		],
		"otherFormes": [
				"Vikavolt-Totem"
		],
		"formeOrder": [
				"Vikavolt",
				"Vikavolt-Totem"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "vikavolt",
		"fullname": "pokemon: Vikavolt",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Vikavolt",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 450,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	vikavolttotem: {
		"exists": true,
		"tags": [],
		"num": 738,
		"name": "Vikavolt-Totem",
		"baseSpecies": "Vikavolt",
		"forme": "Totem",
		"types": [
				"Bug",
				"Electric"
		],
		"baseStats": {
				"hp": 77,
				"atk": 70,
				"def": 90,
				"spa": 145,
				"spd": 75,
				"spe": 43
		},
		"abilities": {
				"0": "Levitate"
		},
		"weightkg": 147.5,
		"eggGroups": [
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "vikavolttotem",
		"fullname": "pokemon: Vikavolt-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 1475,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	crabrawler: {
		"exists": true,
		"tags": [],
		"num": 739,
		"name": "Crabrawler",
		"types": [
				"Fighting"
		],
		"baseStats": {
				"hp": 47,
				"atk": 82,
				"def": 57,
				"spa": 42,
				"spd": 47,
				"spe": 63
		},
		"abilities": {
				"0": "Hyper Cutter"
		},
		"weightkg": 7,
		"evos": [
				"Crabominable"
		],
		"eggGroups": [
				"Water 3"
		],
		"tier": "LC",
		"id": "crabrawler",
		"fullname": "pokemon: Crabrawler",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Crabrawler",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 338,
		"weighthg": 70,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	crabominable: {
		"exists": true,
		"tags": [],
		"num": 740,
		"name": "Crabominable",
		"types": [
				"Fighting",
				"Ice"
		],
		"baseStats": {
				"hp": 97,
				"atk": 132,
				"def": 77,
				"spa": 62,
				"spd": 67,
				"spe": 43
		},
		"abilities": {
				"0": "Hyper Cutter"
		},
		"weightkg": 180,
		"prevo": "Crabrawler",
		"evoType": "useItem",
		"evoItem": "Ice Stone",
		"eggGroups": [
				"Water 3"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "crabominable",
		"fullname": "pokemon: Crabominable",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Crabominable",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 478,
		"weighthg": 1800,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	oricorio: {
		"exists": true,
		"tags": [],
		"num": 741,
		"name": "Oricorio",
		"baseForme": "Baile",
		"types": [
				"Fire",
				"Flying"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 75,
				"atk": 70,
				"def": 70,
				"spa": 98,
				"spd": 70,
				"spe": 93
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 3.4,
		"eggGroups": [
				"Flying"
		],
		"otherFormes": [
				"Oricorio-Pom-Pom",
				"Oricorio-Pa'u",
				"Oricorio-Sensu"
		],
		"formeOrder": [
				"Oricorio",
				"Oricorio-Pom-Pom",
				"Oricorio-Pa'u",
				"Oricorio-Sensu"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "oricorio",
		"fullname": "pokemon: Oricorio",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Oricorio",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"bst": 476,
		"weighthg": 34,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	oricoriopompom: {
		"exists": true,
		"tags": [],
		"num": 741,
		"name": "Oricorio-Pom-Pom",
		"baseSpecies": "Oricorio",
		"forme": "Pom-Pom",
		"types": [
				"Electric",
				"Flying"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 75,
				"atk": 70,
				"def": 70,
				"spa": 98,
				"spd": 70,
				"spe": 93
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 3.4,
		"eggGroups": [
				"Flying"
		],
		// "changesFrom": "Oricorio",
		"tier": "PUBL",
		"doublesTier": "(DUU)",
		"id": "oricoriopompom",
		"fullname": "pokemon: Oricorio-Pom-Pom",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"bst": 476,
		"weighthg": 34,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	oricoriopau: {
		"exists": true,
		"tags": [],
		"num": 741,
		"name": "Oricorio-Pa'u",
		"baseSpecies": "Oricorio",
		"forme": "Pa'u",
		"types": [
				"Psychic",
				"Flying"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 75,
				"atk": 70,
				"def": 70,
				"spa": 98,
				"spd": 70,
				"spe": 93
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 3.4,
		"eggGroups": [
				"Flying"
		],
		// "changesFrom": "Oricorio",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "oricoriopau",
		"fullname": "pokemon: Oricorio-Pa'u",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"bst": 476,
		"weighthg": 34,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	oricoriosensu: {
		"exists": true,
		"tags": [],
		"num": 741,
		"name": "Oricorio-Sensu",
		"baseSpecies": "Oricorio",
		"forme": "Sensu",
		"types": [
				"Ghost",
				"Flying"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 75,
				"atk": 70,
				"def": 70,
				"spa": 98,
				"spd": 70,
				"spe": 93
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 3.4,
		"eggGroups": [
				"Flying"
		],
		// "changesFrom": "Oricorio",
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "oricoriosensu",
		"fullname": "pokemon: Oricorio-Sensu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"bst": 476,
		"weighthg": 34,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cutiefly: {
		"exists": true,
		"tags": [],
		"num": 742,
		"name": "Cutiefly",
		"types": [
				"Bug",
				"Normal"
		],
		"baseStats": {
				"hp": 40,
				"atk": 45,
				"def": 40,
				"spa": 55,
				"spd": 40,
				"spe": 84
		},
		"abilities": {
				"0": "Shield Dust"
		},
		"weightkg": 0.2,
		"evos": [
				"Ribombee"
		],
		"eggGroups": [
				"Bug",
				"Fairy"
		],
		"tier": "NFE",
		"id": "cutiefly",
		"fullname": "pokemon: Cutiefly",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cutiefly",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 304,
		"weighthg": 2,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ribombee: {
		"exists": true,
		"tags": [],
		"num": 743,
		"name": "Ribombee",
		"types": [
				"Bug",
				"Normal"
		],
		"baseStats": {
				"hp": 60,
				"atk": 55,
				"def": 60,
				"spa": 95,
				"spd": 70,
				"spe": 124
		},
		"abilities": {
				"0": "Shield Dust"
		},
		"weightkg": 0.5,
		"prevo": "Cutiefly",
		"evoLevel": 25,
		"eggGroups": [
				"Bug",
				"Fairy"
		],
		"otherFormes": [
				"Ribombee-Totem"
		],
		"formeOrder": [
				"Ribombee",
				"Ribombee-Totem"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "ribombee",
		"fullname": "pokemon: Ribombee",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Ribombee",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 464,
		"weighthg": 5,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	ribombeetotem: {
		"exists": true,
		"tags": [],
		"num": 743,
		"name": "Ribombee-Totem",
		"baseSpecies": "Ribombee",
		"forme": "Totem",
		"types": [
				"Bug",
				"Normal"
		],
		"baseStats": {
				"hp": 60,
				"atk": 55,
				"def": 60,
				"spa": 95,
				"spd": 70,
				"spe": 124
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 2,
		"eggGroups": [
				"Bug",
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "ribombeetotem",
		"fullname": "pokemon: Ribombee-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 464,
		"weighthg": 20,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	rockruff: {
		"exists": true,
		"tags": [],
		"num": 744,
		"name": "Rockruff",
		"baseForme": "Midday",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 45,
				"atk": 65,
				"def": 40,
				"spa": 30,
				"spd": 40,
				"spe": 60
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Vital Spirit"
		},
		"weightkg": 9.2,
		"evos": [
				"Lycanroc",
				"Lycanroc-Midnight",
				"Lycanroc-Dusk"
		],
		"eggGroups": [
				"Field"
		],
		"formeOrder": [
				"Rockruff",
				"Rockruff"
		],
		"tier": "LC",
		"id": "rockruff",
		"fullname": "pokemon: Rockruff",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Rockruff",
		"forme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 280,
		"weighthg": 92,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lycanroc: {
		"exists": true,
		"tags": [],
		"num": 745,
		"name": "Lycanroc",
		"baseForme": "Midday",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 75,
				"atk": 115,
				"def": 65,
				"spa": 55,
				"spd": 65,
				"spe": 112
		},
		"abilities": {
				"0": "Keen Eye"
		},
		"weightkg": 25,
		"prevo": "Rockruff",
		"evoLevel": 25,
		"evoCondition": "during the day",
		"eggGroups": [
				"Field"
		],
		"otherFormes": [
				"Lycanroc-Midnight",
				"Lycanroc-Dusk"
		],
		"formeOrder": [
				"Lycanroc",
				"Lycanroc-Midnight",
				"Lycanroc-Dusk"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "lycanroc",
		"fullname": "pokemon: Lycanroc",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lycanroc",
		"forme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 487,
		"weighthg": 250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lycanrocmidnight: {
		"exists": true,
		"tags": [],
		"num": 745,
		"name": "Lycanroc-Midnight",
		"baseSpecies": "Lycanroc",
		"forme": "Midnight",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 85,
				"atk": 115,
				"def": 75,
				"spa": 55,
				"spd": 75,
				"spe": 82
		},
		"abilities": {
				"0": "Keen Eye",
				"1": "Vital Spirit"
		},
		"weightkg": 25,
		"prevo": "Rockruff",
		"evoLevel": 25,
		"evoCondition": "at night",
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "lycanrocmidnight",
		"fullname": "pokemon: Lycanroc-Midnight",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 487,
		"weighthg": 250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lycanrocdusk: {
		"exists": true,
		"tags": [],
		"num": 745,
		"name": "Lycanroc-Dusk",
		"baseSpecies": "Lycanroc",
		"forme": "Dusk",
		"types": [
				"Rock"
		],
		"baseStats": {
				"hp": 75,
				"atk": 117,
				"def": 65,
				"spa": 55,
				"spd": 65,
				"spe": 110
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 25,
		"prevo": "Rockruff",
		"evoLevel": 25,
		"evoCondition": "from a special Rockruff",
		"eggGroups": [
				"Field"
		],
		"tier": "NUBL",
		"doublesTier": "(DUU)",
		"id": "lycanrocdusk",
		"fullname": "pokemon: Lycanroc-Dusk",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 487,
		"weighthg": 250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wishiwashi: {
		"exists": true,
		"tags": [],
		"num": 746,
		"name": "Wishiwashi",
		"baseForme": "Solo",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 45,
				"atk": 20,
				"def": 20,
				"spa": 25,
				"spd": 25,
				"spe": 40
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Water 2"
		],
		"otherFormes": [
				"Wishiwashi-School"
		],
		"formeOrder": [
				"Wishiwashi",
				"Wishiwashi-School"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wishiwashi",
		"fullname": "pokemon: Wishiwashi",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Wishiwashi",
		"forme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 175,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wishiwashischool: {
		"exists": true,
		"tags": [],
		"num": 746,
		"name": "Wishiwashi-School",
		"baseSpecies": "Wishiwashi",
		"forme": "School",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 45,
				"atk": 140,
				"def": 130,
				"spa": 140,
				"spd": 135,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 78.6,
		"eggGroups": [
				"Water 2"
		],
		"requiredAbility": "Schooling",
		// "battleOnly": "Wishiwashi",
		"isNonstandard": null,
		"id": "wishiwashischool",
		"fullname": "pokemon: Wishiwashi-School",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"tier": "Illegal",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 620,
		"weighthg": 786,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Wishiwashi"
	},
	mareanie: {
		"exists": true,
		"tags": [],
		"num": 747,
		"name": "Mareanie",
		"types": [
				"Poison",
				"Water"
		],
		"baseStats": {
				"hp": 50,
				"atk": 53,
				"def": 62,
				"spa": 43,
				"spd": 52,
				"spe": 45
		},
		"abilities": {
				"0": "Limber"
		},
		"weightkg": 8,
		"evos": [
				"Toxapex"
		],
		"eggGroups": [
				"Water 1"
		],
		"tier": "LC",
		"id": "mareanie",
		"fullname": "pokemon: Mareanie",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mareanie",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 305,
		"weighthg": 80,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	toxapex: {
		"exists": true,
		"tags": [],
		"num": 748,
		"name": "Toxapex",
		"types": [
				"Poison",
				"Water"
		],
		"baseStats": {
				"hp": 50,
				"atk": 63,
				"def": 152,
				"spa": 53,
				"spd": 142,
				"spe": 35
		},
		"abilities": {
				"0": "Limber"
		},
		"weightkg": 14.5,
		"prevo": "Mareanie",
		"evoLevel": 38,
		"eggGroups": [
				"Water 1"
		],
		"tier": "UU",
		"doublesTier": "(DUU)",
		"id": "toxapex",
		"fullname": "pokemon: Toxapex",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Toxapex",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 495,
		"weighthg": 145,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mudbray: {
		"exists": true,
		"tags": [],
		"num": 749,
		"name": "Mudbray",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 70,
				"atk": 100,
				"def": 70,
				"spa": 45,
				"spd": 55,
				"spe": 45
		},
		"abilities": {
				"0": "Own Tempo",
				"1": "Inner Focus"
		},
		"weightkg": 110,
		"evos": [
				"Mudsdale"
		],
		"eggGroups": [
				"Field"
		],
		"tier": "LC",
		"id": "mudbray",
		"fullname": "pokemon: Mudbray",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mudbray",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 385,
		"weighthg": 1100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mudsdale: {
		"exists": true,
		"tags": [],
		"num": 750,
		"name": "Mudsdale",
		"types": [
				"Ground"
		],
		"baseStats": {
				"hp": 100,
				"atk": 125,
				"def": 100,
				"spa": 55,
				"spd": 85,
				"spe": 35
		},
		"abilities": {
				"0": "Own Tempo",
				"1": "Inner Focus"
		},
		"weightkg": 920,
		"prevo": "Mudbray",
		"evoLevel": 30,
		"eggGroups": [
				"Field"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "mudsdale",
		"fullname": "pokemon: Mudsdale",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mudsdale",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 9200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dewpider: {
		"exists": true,
		"tags": [],
		"num": 751,
		"name": "Dewpider",
		"types": [
				"Water",
				"Bug"
		],
		"baseStats": {
				"hp": 38,
				"atk": 40,
				"def": 52,
				"spa": 40,
				"spd": 72,
				"spe": 27
		},
		"abilities": {
				"0": "Water Absorb"
		},
		"weightkg": 4,
		"evos": [
				"Araquanid"
		],
		"eggGroups": [
				"Water 1",
				"Bug"
		],
		"tier": "LC",
		"id": "dewpider",
		"fullname": "pokemon: Dewpider",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Dewpider",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 269,
		"weighthg": 40,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	araquanid: {
		"exists": true,
		"tags": [],
		"num": 752,
		"name": "Araquanid",
		"types": [
				"Water",
				"Bug"
		],
		"baseStats": {
				"hp": 68,
				"atk": 70,
				"def": 92,
				"spa": 50,
				"spd": 132,
				"spe": 42
		},
		"abilities": {
				"0": "Water Absorb"
		},
		"weightkg": 82,
		"prevo": "Dewpider",
		"evoLevel": 22,
		"eggGroups": [
				"Water 1",
				"Bug"
		],
		"otherFormes": [
				"Araquanid-Totem"
		],
		"formeOrder": [
				"Araquanid",
				"Araquanid-Totem"
		],
		"tier": "NU",
		"doublesTier": "DUU",
		"id": "araquanid",
		"fullname": "pokemon: Araquanid",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Araquanid",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 454,
		"weighthg": 820,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	araquanidtotem: {
		"exists": true,
		"tags": [],
		"num": 752,
		"name": "Araquanid-Totem",
		"baseSpecies": "Araquanid",
		"forme": "Totem",
		"types": [
				"Water",
				"Bug"
		],
		"baseStats": {
				"hp": 68,
				"atk": 70,
				"def": 92,
				"spa": 50,
				"spd": 132,
				"spe": 42
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 217.5,
		"eggGroups": [
				"Water 1",
				"Bug"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "araquanidtotem",
		"fullname": "pokemon: Araquanid-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 454,
		"weighthg": 2175,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	fomantis: {
		"exists": true,
		"tags": [],
		"num": 753,
		"name": "Fomantis",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 40,
				"atk": 55,
				"def": 35,
				"spa": 50,
				"spd": 35,
				"spe": 35
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 1.5,
		"evos": [
				"Lurantis"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "LC",
		"id": "fomantis",
		"fullname": "pokemon: Fomantis",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Fomantis",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 250,
		"weighthg": 15,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lurantis: {
		"exists": true,
		"tags": [],
		"num": 754,
		"name": "Lurantis",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 70,
				"atk": 105,
				"def": 90,
				"spa": 80,
				"spd": 90,
				"spe": 45
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 18.5,
		"prevo": "Fomantis",
		"evoLevel": 34,
		"evoCondition": "during the day",
		"eggGroups": [
				"Grass"
		],
		"otherFormes": [
				"Lurantis-Totem"
		],
		"formeOrder": [
				"Lurantis",
				"Lurantis-Totem"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "lurantis",
		"fullname": "pokemon: Lurantis",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lurantis",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 185,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lurantistotem: {
		"exists": true,
		"tags": [],
		"num": 754,
		"name": "Lurantis-Totem",
		"baseSpecies": "Lurantis",
		"forme": "Totem",
		"types": [
				"Grass"
		],
		"baseStats": {
				"hp": 70,
				"atk": 105,
				"def": 90,
				"spa": 80,
				"spd": 90,
				"spe": 45
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 58,
		"eggGroups": [
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "lurantistotem",
		"fullname": "pokemon: Lurantis-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 580,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	morelull: {
		"exists": true,
		"tags": [],
		"num": 755,
		"name": "Morelull",
		"types": [
				"Grass",
				"Normal"
		],
		"baseStats": {
				"hp": 40,
				"atk": 35,
				"def": 55,
				"spa": 65,
				"spd": 75,
				"spe": 15
		},
		"abilities": {
				"0": "Illuminate",
				"1": "Effect Spore",
				"H": "Rain Dish"
		},
		"weightkg": 1.5,
		"evos": [
				"Shiinotic"
		],
		"eggGroups": [
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "morelull",
		"fullname": "pokemon: Morelull",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Morelull",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 285,
		"weighthg": 15,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	shiinotic: {
		"exists": true,
		"tags": [],
		"num": 756,
		"name": "Shiinotic",
		"types": [
				"Grass",
				"Normal"
		],
		"baseStats": {
				"hp": 60,
				"atk": 45,
				"def": 80,
				"spa": 90,
				"spd": 100,
				"spe": 30
		},
		"abilities": {
				"0": "Illuminate",
				"1": "Effect Spore",
				"H": "Rain Dish"
		},
		"weightkg": 11.5,
		"prevo": "Morelull",
		"evoLevel": 24,
		"eggGroups": [
				"Grass"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "shiinotic",
		"fullname": "pokemon: Shiinotic",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Shiinotic",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 405,
		"weighthg": 115,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	salandit: {
		"exists": true,
		"tags": [],
		"num": 757,
		"name": "Salandit",
		"types": [
				"Poison",
				"Fire"
		],
		"genderRatio": {
				"M": 0.875,
				"F": 0.125
		},
		"baseStats": {
				"hp": 48,
				"atk": 44,
				"def": 40,
				"spa": 71,
				"spd": 40,
				"spe": 77
		},
		"abilities": {
				"0": "Oblivious"
		},
		"weightkg": 4.8,
		"evos": [
				"Salazzle"
		],
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"tier": "LC",
		"id": "salandit",
		"fullname": "pokemon: Salandit",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Salandit",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"bst": 320,
		"weighthg": 48,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	salazzle: {
		"exists": true,
		"tags": [],
		"num": 758,
		"name": "Salazzle",
		"types": [
				"Poison",
				"Fire"
		],
		"gender": "F",
		"baseStats": {
				"hp": 68,
				"atk": 64,
				"def": 60,
				"spa": 111,
				"spd": 60,
				"spe": 117
		},
		"abilities": {
				"0": "Oblivious"
		},
		"weightkg": 22.2,
		"prevo": "Salandit",
		"evoLevel": 33,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"otherFormes": [
				"Salazzle-Totem"
		],
		"formeOrder": [
				"Salazzle",
				"Salazzle-Totem"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "salazzle",
		"fullname": "pokemon: Salazzle",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Salazzle",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 480,
		"weighthg": 222,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	salazzletotem: {
		"exists": true,
		"tags": [],
		"num": 758,
		"name": "Salazzle-Totem",
		"baseSpecies": "Salazzle",
		"forme": "Totem",
		"types": [
				"Poison",
				"Fire"
		],
		"gender": "F",
		"baseStats": {
				"hp": 68,
				"atk": 64,
				"def": 60,
				"spa": 111,
				"spd": 60,
				"spe": 117
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 81,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "salazzletotem",
		"fullname": "pokemon: Salazzle-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 480,
		"weighthg": 810,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	stufful: {
		"exists": true,
		"tags": [],
		"num": 759,
		"name": "Stufful",
		"types": [
				"Normal",
				"Fighting"
		],
		"baseStats": {
				"hp": 70,
				"atk": 75,
				"def": 50,
				"spa": 45,
				"spd": 50,
				"spe": 50
		},
		"abilities": {
				"0": "Cute Charm"
		},
		"weightkg": 6.8,
		"evos": [
				"Bewear"
		],
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "stufful",
		"fullname": "pokemon: Stufful",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Stufful",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 340,
		"weighthg": 68,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bewear: {
		"exists": true,
		"tags": [],
		"num": 760,
		"name": "Bewear",
		"types": [
				"Normal",
				"Fighting"
		],
		"baseStats": {
				"hp": 120,
				"atk": 125,
				"def": 80,
				"spa": 55,
				"spd": 60,
				"spe": 60
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 135,
		"prevo": "Stufful",
		"evoLevel": 27,
		"eggGroups": [
				"Field"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "bewear",
		"fullname": "pokemon: Bewear",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Bewear",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 500,
		"weighthg": 1350,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	bounsweet: {
		"exists": true,
		"tags": [],
		"num": 761,
		"name": "Bounsweet",
		"types": [
				"Grass"
		],
		"gender": "F",
		"baseStats": {
				"hp": 42,
				"atk": 30,
				"def": 38,
				"spa": 30,
				"spd": 38,
				"spe": 32
		},
		"abilities": {
				"0": "Oblivious"
		},
		"weightkg": 3.2,
		"evos": [
				"Steenee"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "LC",
		"id": "bounsweet",
		"fullname": "pokemon: Bounsweet",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bounsweet",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 210,
		"weighthg": 32,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	steenee: {
		"exists": true,
		"tags": [],
		"num": 762,
		"name": "Steenee",
		"types": [
				"Grass"
		],
		"gender": "F",
		"baseStats": {
				"hp": 52,
				"atk": 40,
				"def": 48,
				"spa": 40,
				"spd": 48,
				"spe": 62
		},
		"abilities": {
				"0": "Oblivious"
		},
		"weightkg": 8.2,
		"prevo": "Bounsweet",
		"evoLevel": 18,
		"evos": [
				"Tsareena"
		],
		"eggGroups": [
				"Grass"
		],
		"tier": "NFE",
		"id": "steenee",
		"fullname": "pokemon: Steenee",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Steenee",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 290,
		"weighthg": 82,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tsareena: {
		"exists": true,
		"tags": [],
		"num": 763,
		"name": "Tsareena",
		"types": [
				"Grass"
		],
		"gender": "F",
		"baseStats": {
				"hp": 72,
				"atk": 120,
				"def": 98,
				"spa": 50,
				"spd": 98,
				"spe": 72
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 21.4,
		"prevo": "Steenee",
		"evoType": "levelMove",
		"evoMove": "Stomp",
		"eggGroups": [
				"Grass"
		],
		"tier": "NU",
		"doublesTier": "(DUU)",
		"id": "tsareena",
		"fullname": "pokemon: Tsareena",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Tsareena",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 1
		},
		"bst": 510,
		"weighthg": 214,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	comfey: {
		"exists": true,
		"tags": [],
		"num": 764,
		"name": "Comfey",
		"types": [
				"Normal"
		],
		"genderRatio": {
				"M": 0.25,
				"F": 0.75
		},
		"baseStats": {
				"hp": 51,
				"atk": 52,
				"def": 90,
				"spa": 82,
				"spd": 110,
				"spe": 100
		},
		"abilities": {
				"0": "Natural Cure"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Grass"
		],
		"tier": "UU",
		"doublesTier": "DUU",
		"id": "comfey",
		"fullname": "pokemon: Comfey",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Comfey",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"bst": 485,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	oranguru: {
		"exists": true,
		"tags": [],
		"num": 765,
		"name": "Oranguru",
		"types": [
				"Normal",
				"Psychic"
		],
		"baseStats": {
				"hp": 90,
				"atk": 60,
				"def": 80,
				"spa": 90,
				"spd": 110,
				"spe": 60
		},
		"abilities": {
				"0": "Inner Focus"
		},
		"weightkg": 76,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "oranguru",
		"fullname": "pokemon: Oranguru",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Oranguru",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 760,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	passimian: {
		"exists": true,
		"tags": [],
		"num": 766,
		"name": "Passimian",
		"types": [
				"Fighting"
		],
		"baseStats": {
				"hp": 100,
				"atk": 120,
				"def": 90,
				"spa": 40,
				"spd": 60,
				"spe": 80
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 82.8,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "passimian",
		"fullname": "pokemon: Passimian",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Passimian",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 490,
		"weighthg": 828,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	wimpod: {
		"exists": true,
		"tags": [],
		"num": 767,
		"name": "Wimpod",
		"types": [
				"Bug",
				"Water"
		],
		"baseStats": {
				"hp": 25,
				"atk": 35,
				"def": 40,
				"spa": 20,
				"spd": 30,
				"spe": 80
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 12,
		"evos": [
				"Golisopod"
		],
		"eggGroups": [
				"Bug",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "wimpod",
		"fullname": "pokemon: Wimpod",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Wimpod",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 230,
		"weighthg": 120,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	golisopod: {
		"exists": true,
		"tags": [],
		"num": 768,
		"name": "Golisopod",
		"types": [
				"Bug",
				"Water"
		],
		"baseStats": {
				"hp": 75,
				"atk": 125,
				"def": 140,
				"spa": 60,
				"spd": 90,
				"spe": 40
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 108,
		"prevo": "Wimpod",
		"evoLevel": 30,
		"eggGroups": [
				"Bug",
				"Water 3"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "golisopod",
		"fullname": "pokemon: Golisopod",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Golisopod",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 530,
		"weighthg": 1080,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	sandygast: {
		"exists": true,
		"tags": [],
		"num": 769,
		"name": "Sandygast",
		"types": [
				"Ghost",
				"Ground"
		],
		"baseStats": {
				"hp": 55,
				"atk": 55,
				"def": 80,
				"spa": 70,
				"spd": 45,
				"spe": 15
		},
		"abilities": {
				"0": "Sand Veil"
		},
		"weightkg": 70,
		"evos": [
				"Palossand"
		],
		"eggGroups": [
				"Amorphous"
		],
		"tier": "LC",
		"id": "sandygast",
		"fullname": "pokemon: Sandygast",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Sandygast",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 320,
		"weighthg": 700,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	palossand: {
		"exists": true,
		"tags": [],
		"num": 770,
		"name": "Palossand",
		"types": [
				"Ghost",
				"Ground"
		],
		"baseStats": {
				"hp": 85,
				"atk": 75,
				"def": 110,
				"spa": 100,
				"spd": 75,
				"spe": 35
		},
		"abilities": {
				"0": "Sand Veil"
		},
		"weightkg": 250,
		"prevo": "Sandygast",
		"evoLevel": 42,
		"eggGroups": [
				"Amorphous"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "palossand",
		"fullname": "pokemon: Palossand",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Palossand",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 2500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pyukumuku: {
		"exists": true,
		"tags": [],
		"num": 771,
		"name": "Pyukumuku",
		"types": [
				"Water"
		],
		"baseStats": {
				"hp": 55,
				"atk": 60,
				"def": 130,
				"spa": 30,
				"spd": 130,
				"spe": 5
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 1.2,
		"eggGroups": [
				"Water 1"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pyukumuku",
		"fullname": "pokemon: Pyukumuku",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pyukumuku",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 410,
		"weighthg": 12,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	typenull: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 772,
		"name": "Type: Null",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 59
		},
		"abilities": {
				"0": "Battle Armor"
		},
		"weightkg": 120.5,
		"evos": [
				"Silvally"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "typenull",
		"fullname": "pokemon: Type: Null",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Type: Null",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 534,
		"weighthg": 1205,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvally: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"prevo": "Type: Null",
		"evoType": "levelFriendship",
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Silvally-Bug",
				"Silvally-Dark",
				"Silvally-Dragon",
				"Silvally-Electric",
				"Silvally-Fairy",
				"Silvally-Fighting",
				"Silvally-Fire",
				"Silvally-Flying",
				"Silvally-Ghost",
				"Silvally-Grass",
				"Silvally-Ground",
				"Silvally-Ice",
				"Silvally-Poison",
				"Silvally-Psychic",
				"Silvally-Rock",
				"Silvally-Steel",
				"Silvally-Water"
		],
		"formeOrder": [
				"Silvally",
				"Silvally-Fighting",
				"Silvally-Flying",
				"Silvally-Poison",
				"Silvally-Ground",
				"Silvally-Rock",
				"Silvally-Bug",
				"Silvally-Ghost",
				"Silvally-Steel",
				"Silvally-Fire",
				"Silvally-Water",
				"Silvally-Grass",
				"Silvally-Electric",
				"Silvally-Psychic",
				"Silvally-Ice",
				"Silvally-Dragon",
				"Silvally-Dark",
				"Silvally-Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvally",
		"fullname": "pokemon: Silvally",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Silvally",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallybug: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Bug",
		"baseSpecies": "Silvally",
		"forme": "Bug",
		"types": [
				"Bug"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Bug Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallybug",
		"fullname": "pokemon: Silvally-Bug",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Bug Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallydark: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Dark",
		"baseSpecies": "Silvally",
		"forme": "Dark",
		"types": [
				"Dark"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Dark Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallydark",
		"fullname": "pokemon: Silvally-Dark",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Dark Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallydragon: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Dragon",
		"baseSpecies": "Silvally",
		"forme": "Dragon",
		"types": [
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Dragon Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallydragon",
		"fullname": "pokemon: Silvally-Dragon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Dragon Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallyelectric: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Electric",
		"baseSpecies": "Silvally",
		"forme": "Electric",
		"types": [
				"Electric"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Electric Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallyelectric",
		"fullname": "pokemon: Silvally-Electric",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Electric Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallyfairy: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Fairy",
		"baseSpecies": "Silvally",
		"forme": "Fairy",
		"types": [
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Fairy Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallyfairy",
		"fullname": "pokemon: Silvally-Fairy",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Fairy Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallyfighting: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Fighting",
		"baseSpecies": "Silvally",
		"forme": "Fighting",
		"types": [
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Fighting Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallyfighting",
		"fullname": "pokemon: Silvally-Fighting",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Fighting Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallyfire: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Fire",
		"baseSpecies": "Silvally",
		"forme": "Fire",
		"types": [
				"Fire"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Fire Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallyfire",
		"fullname": "pokemon: Silvally-Fire",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Fire Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallyflying: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Flying",
		"baseSpecies": "Silvally",
		"forme": "Flying",
		"types": [
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Flying Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallyflying",
		"fullname": "pokemon: Silvally-Flying",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Flying Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallyghost: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Ghost",
		"baseSpecies": "Silvally",
		"forme": "Ghost",
		"types": [
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Ghost Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallyghost",
		"fullname": "pokemon: Silvally-Ghost",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Ghost Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallygrass: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Grass",
		"baseSpecies": "Silvally",
		"forme": "Grass",
		"types": [
				"Grass"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Grass Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallygrass",
		"fullname": "pokemon: Silvally-Grass",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Grass Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallyground: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Ground",
		"baseSpecies": "Silvally",
		"forme": "Ground",
		"types": [
				"Ground"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Ground Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallyground",
		"fullname": "pokemon: Silvally-Ground",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Ground Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallyice: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Ice",
		"baseSpecies": "Silvally",
		"forme": "Ice",
		"types": [
				"Ice"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Ice Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallyice",
		"fullname": "pokemon: Silvally-Ice",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Ice Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallypoison: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Poison",
		"baseSpecies": "Silvally",
		"forme": "Poison",
		"types": [
				"Poison"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Poison Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallypoison",
		"fullname": "pokemon: Silvally-Poison",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Poison Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallypsychic: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Psychic",
		"baseSpecies": "Silvally",
		"forme": "Psychic",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Psychic Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallypsychic",
		"fullname": "pokemon: Silvally-Psychic",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Psychic Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallyrock: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Rock",
		"baseSpecies": "Silvally",
		"forme": "Rock",
		"types": [
				"Rock"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Rock Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallyrock",
		"fullname": "pokemon: Silvally-Rock",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Rock Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallysteel: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Steel",
		"baseSpecies": "Silvally",
		"forme": "Steel",
		"types": [
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Steel Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallysteel",
		"fullname": "pokemon: Silvally-Steel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Steel Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	silvallywater: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 773,
		"name": "Silvally-Water",
		"baseSpecies": "Silvally",
		"forme": "Water",
		"types": [
				"Water"
		],
		"gender": "N",
		"baseStats": {
				"hp": 95,
				"atk": 95,
				"def": 95,
				"spa": 95,
				"spd": 95,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100.5,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Water Memory",
		// "changesFrom": "Silvally",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "silvallywater",
		"fullname": "pokemon: Silvally-Water",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Water Memory"
		// ],
		"bst": 570,
		"weighthg": 1005,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	minior: {
		"exists": true,
		"tags": [],
		"num": 774,
		"name": "Minior",
		"baseForme": "Red",
		"types": [
				"Rock",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 60,
				"atk": 100,
				"def": 60,
				"spa": 100,
				"spd": 60,
				"spe": 120
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.3,
		"eggGroups": [
				"Mineral"
		],
		"otherFormes": [
				"Minior-Meteor"
		],
		"cosmeticFormes": [
				"Minior-Orange",
				"Minior-Yellow",
				"Minior-Green",
				"Minior-Blue",
				"Minior-Indigo",
				"Minior-Violet"
		],
		"formeOrder": [
				"Minior-Meteor",
				"Minior-Meteor",
				"Minior-Meteor",
				"Minior-Meteor",
				"Minior-Meteor",
				"Minior-Meteor",
				"Minior-Meteor",
				"Minior",
				"Minior-Orange",
				"Minior-Yellow",
				"Minior-Green",
				"Minior-Blue",
				"Minior-Indigo",
				"Minior-Violet"
		],
		"tier": "PU",
		"doublesTier": "(DUU)",
		"id": "minior",
		"fullname": "pokemon: Minior",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Minior",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 500,
		"weighthg": 3,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	miniormeteor: {
		"exists": true,
		"tags": [],
		"num": 774,
		"name": "Minior-Meteor",
		"baseSpecies": "Minior",
		"forme": "Meteor",
		"types": [
				"Rock",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 60,
				"atk": 60,
				"def": 100,
				"spa": 60,
				"spd": 100,
				"spe": 60
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 40,
		"eggGroups": [
				"Mineral"
		],
		"requiredAbility": "Shields Down",
		// "battleOnly": "Minior",
		"id": "miniormeteor",
		"fullname": "pokemon: Minior-Meteor",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "PU",
		"doublesTier": "(DUU)",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 440,
		"weighthg": 400,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Minior"
	},
	komala: {
		"exists": true,
		"tags": [],
		"num": 775,
		"name": "Komala",
		"types": [
				"Normal"
		],
		"baseStats": {
				"hp": 65,
				"atk": 115,
				"def": 65,
				"spa": 75,
				"spd": 95,
				"spe": 65
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 19.9,
		"eggGroups": [
				"Field"
		],
		"tier": "ZU",
		"doublesTier": "(DUU)",
		"id": "komala",
		"fullname": "pokemon: Komala",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Komala",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 480,
		"weighthg": 199,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	turtonator: {
		"exists": true,
		"tags": [],
		"num": 776,
		"name": "Turtonator",
		"types": [
				"Fire",
				"Dragon"
		],
		"baseStats": {
				"hp": 60,
				"atk": 78,
				"def": 135,
				"spa": 91,
				"spd": 85,
				"spe": 36
		},
		"abilities": {
				"0": "Shell Armor"
		},
		"weightkg": 212,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "turtonator",
		"fullname": "pokemon: Turtonator",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Turtonator",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 2120,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	togedemaru: {
		"exists": true,
		"tags": [],
		"num": 777,
		"name": "Togedemaru",
		"types": [
				"Electric",
				"Steel"
		],
		"baseStats": {
				"hp": 65,
				"atk": 98,
				"def": 63,
				"spa": 40,
				"spd": 73,
				"spe": 96
		},
		"abilities": {
				"0": "Lightning Rod",
				"H": "Sturdy"
		},
		"weightkg": 3.3,
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"otherFormes": [
				"Togedemaru-Totem"
		],
		"formeOrder": [
				"Togedemaru",
				"Togedemaru-Totem"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "togedemaru",
		"fullname": "pokemon: Togedemaru",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Togedemaru",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 435,
		"weighthg": 33,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	togedemarutotem: {
		"exists": true,
		"tags": [],
		"num": 777,
		"name": "Togedemaru-Totem",
		"baseSpecies": "Togedemaru",
		"forme": "Totem",
		"types": [
				"Electric",
				"Steel"
		],
		"baseStats": {
				"hp": 65,
				"atk": 98,
				"def": 63,
				"spa": 40,
				"spd": 73,
				"spe": 96
		},
		"abilities": {
				"0": "Sturdy"
		},
		"weightkg": 13,
		"eggGroups": [
				"Field",
				"Fairy"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "togedemarutotem",
		"fullname": "pokemon: Togedemaru-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 435,
		"weighthg": 130,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mimikyu: {
		"exists": true,
		"tags": [],
		"num": 778,
		"name": "Mimikyu",
		"baseForme": "Disguised",
		"types": [
				"Ghost",
				"Normal"
		],
		"baseStats": {
				"hp": 55,
				"atk": 90,
				"def": 80,
				"spa": 50,
				"spd": 105,
				"spe": 96
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.7,
		"eggGroups": [
				"Amorphous"
		],
		"otherFormes": [
				"Mimikyu-Busted",
				"Mimikyu-Totem",
				"Mimikyu-Busted-Totem"
		],
		"formeOrder": [
				"Mimikyu",
				"Mimikyu-Busted",
				"Mimikyu-Totem",
				"Mimikyu-Busted-Totem"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "mimikyu",
		"fullname": "pokemon: Mimikyu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Mimikyu",
		"forme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 476,
		"weighthg": 7,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mimikyubusted: {
		"exists": true,
		"tags": [],
		"num": 778,
		"name": "Mimikyu-Busted",
		"baseSpecies": "Mimikyu",
		"forme": "Busted",
		"types": [
				"Ghost",
				"Normal"
		],
		"baseStats": {
				"hp": 55,
				"atk": 90,
				"def": 80,
				"spa": 50,
				"spd": 105,
				"spe": 96
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.7,
		"eggGroups": [
				"Amorphous"
		],
		"requiredAbility": "Disguise",
		// "battleOnly": "Mimikyu",
		"id": "mimikyubusted",
		"fullname": "pokemon: Mimikyu-Busted",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "RU",
		"doublesTier": "(DUU)",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 476,
		"weighthg": 7,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Mimikyu"
	},
	mimikyutotem: {
		"exists": true,
		"tags": [],
		"num": 778,
		"name": "Mimikyu-Totem",
		"baseSpecies": "Mimikyu",
		"forme": "Totem",
		"types": [
				"Ghost",
				"Normal"
		],
		"baseStats": {
				"hp": 55,
				"atk": 90,
				"def": 80,
				"spa": 50,
				"spd": 105,
				"spe": 96
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 2.8,
		"eggGroups": [
				"Amorphous"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mimikyutotem",
		"fullname": "pokemon: Mimikyu-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 476,
		"weighthg": 28,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	mimikyubustedtotem: {
		"exists": true,
		"tags": [],
		"num": 778,
		"name": "Mimikyu-Busted-Totem",
		"baseSpecies": "Mimikyu",
		"forme": "Busted-Totem",
		"types": [
				"Ghost",
				"Normal"
		],
		"baseStats": {
				"hp": 55,
				"atk": 90,
				"def": 80,
				"spa": 50,
				"spd": 105,
				"spe": 96
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 2.8,
		"eggGroups": [
				"Amorphous"
		],
		"requiredAbility": "Disguise",
		// "battleOnly": "Mimikyu-Totem",
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "mimikyubustedtotem",
		"fullname": "pokemon: Mimikyu-Busted-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 476,
		"weighthg": 28,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Mimikyu-Totem"
	},
	bruxish: {
		"exists": true,
		"tags": [],
		"num": 779,
		"name": "Bruxish",
		"types": [
				"Water",
				"Psychic"
		],
		"baseStats": {
				"hp": 68,
				"atk": 105,
				"def": 70,
				"spa": 70,
				"spd": 70,
				"spe": 92
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 19,
		"eggGroups": [
				"Water 2"
		],
		"tier": "ZUBL",
		"doublesTier": "(DUU)",
		"id": "bruxish",
		"fullname": "pokemon: Bruxish",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Bruxish",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 475,
		"weighthg": 190,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	drampa: {
		"exists": true,
		"tags": [],
		"num": 780,
		"name": "Drampa",
		"types": [
				"Normal",
				"Dragon"
		],
		"baseStats": {
				"hp": 78,
				"atk": 60,
				"def": 85,
				"spa": 135,
				"spd": 91,
				"spe": 36
		},
		"abilities": {
				"0": "Cloud Nine"
		},
		"weightkg": 185,
		"eggGroups": [
				"Monster",
				"Dragon"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "drampa",
		"fullname": "pokemon: Drampa",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Drampa",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 485,
		"weighthg": 1850,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	dhelmise: {
		"exists": true,
		"tags": [],
		"num": 781,
		"name": "Dhelmise",
		"types": [
				"Ghost",
				"Grass"
		],
		"gender": "N",
		"baseStats": {
				"hp": 70,
				"atk": 131,
				"def": 100,
				"spa": 86,
				"spd": 90,
				"spe": 40
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 210,
		"eggGroups": [
				"Mineral"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "dhelmise",
		"fullname": "pokemon: Dhelmise",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Dhelmise",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 517,
		"weighthg": 2100,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	jangmoo: {
		"exists": true,
		"tags": [],
		"num": 782,
		"name": "Jangmo-o",
		"types": [
				"Dragon"
		],
		"baseStats": {
				"hp": 45,
				"atk": 55,
				"def": 65,
				"spa": 45,
				"spd": 45,
				"spe": 45
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 29.7,
		"evos": [
				"Hakamo-o"
		],
		"eggGroups": [
				"Dragon"
		],
		"tier": "LC",
		"id": "jangmoo",
		"fullname": "pokemon: Jangmo-o",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Jangmo-o",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 300,
		"weighthg": 297,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	hakamoo: {
		"exists": true,
		"tags": [],
		"num": 783,
		"name": "Hakamo-o",
		"types": [
				"Dragon",
				"Fighting"
		],
		"baseStats": {
				"hp": 55,
				"atk": 75,
				"def": 90,
				"spa": 65,
				"spd": 70,
				"spe": 65
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 47,
		"prevo": "Jangmo-o",
		"evoLevel": 35,
		"evos": [
				"Kommo-o"
		],
		"eggGroups": [
				"Dragon"
		],
		"tier": "NFE",
		"id": "hakamoo",
		"fullname": "pokemon: Hakamo-o",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Hakamo-o",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 420,
		"weighthg": 470,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kommoo: {
		"exists": true,
		"tags": [],
		"num": 784,
		"name": "Kommo-o",
		"types": [
				"Dragon",
				"Fighting"
		],
		"baseStats": {
				"hp": 75,
				"atk": 110,
				"def": 125,
				"spa": 100,
				"spd": 105,
				"spe": 85
		},
		"abilities": {
				"0": "Soundproof"
		},
		"weightkg": 78.2,
		"prevo": "Hakamo-o",
		"evoLevel": 45,
		"eggGroups": [
				"Dragon"
		],
		"otherFormes": [
				"Kommo-o-Totem"
		],
		"formeOrder": [
				"Kommo-o",
				"Kommo-o-Totem"
		],
		"tier": "UUBL",
		"doublesTier": "(DUU)",
		"id": "kommoo",
		"fullname": "pokemon: Kommo-o",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Kommo-o",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 782,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kommoototem: {
		"exists": true,
		"tags": [],
		"num": 784,
		"name": "Kommo-o-Totem",
		"baseSpecies": "Kommo-o",
		"forme": "Totem",
		"types": [
				"Dragon",
				"Fighting"
		],
		"baseStats": {
				"hp": 75,
				"atk": 110,
				"def": 125,
				"spa": 100,
				"spd": 105,
				"spe": 85
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 207.5,
		"eggGroups": [
				"Dragon"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kommoototem",
		"fullname": "pokemon: Kommo-o-Totem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": true,
		"genderRatio": {
				"M": 0.5,
				"F": 0.5
		},
		"bst": 600,
		"weighthg": 2075,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tapukoko: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 785,
		"name": "Tapu Koko",
		"types": [
				"Electric",
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 70,
				"atk": 115,
				"def": 85,
				"spa": 95,
				"spd": 75,
				"spe": 130
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 20.5,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tapukoko",
		"fullname": "pokemon: Tapu Koko",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tapu Koko",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 205,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tapulele: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 786,
		"name": "Tapu Lele",
		"types": [
				"Psychic",
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 70,
				"atk": 85,
				"def": 75,
				"spa": 130,
				"spd": 115,
				"spe": 95
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 18.6,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tapulele",
		"fullname": "pokemon: Tapu Lele",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tapu Lele",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 186,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tapubulu: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 787,
		"name": "Tapu Bulu",
		"types": [
				"Grass",
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 70,
				"atk": 130,
				"def": 115,
				"spa": 85,
				"spd": 95,
				"spe": 75
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 45.5,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tapubulu",
		"fullname": "pokemon: Tapu Bulu",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tapu Bulu",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 455,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	tapufini: {
		"exists": true,
		"tags": [
				"Sub-Legendary"
		],
		"num": 788,
		"name": "Tapu Fini",
		"types": [
				"Water",
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 70,
				"atk": 75,
				"def": 115,
				"spa": 95,
				"spd": 130,
				"spe": 85
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 21.2,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "tapufini",
		"fullname": "pokemon: Tapu Fini",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Tapu Fini",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 212,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cosmog: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 789,
		"name": "Cosmog",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 43,
				"atk": 29,
				"def": 31,
				"spa": 29,
				"spd": 31,
				"spe": 37
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.1,
		"evos": [
				"Cosmoem"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "LC",
		"id": "cosmog",
		"fullname": "pokemon: Cosmog",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cosmog",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "LC",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 200,
		"weighthg": 1,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	cosmoem: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 790,
		"name": "Cosmoem",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 43,
				"atk": 29,
				"def": 131,
				"spa": 29,
				"spd": 131,
				"spe": 37
		},
		"abilities": {
				"0": "Sturdy"
		},
		"weightkg": 999.9,
		"prevo": "Cosmog",
		"evoLevel": 43,
		"evos": [
				"Solgaleo",
				"Lunala"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "NFE",
		"id": "cosmoem",
		"fullname": "pokemon: Cosmoem",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Cosmoem",
		"forme": "",
		"baseForme": "",
		"doublesTier": "NFE",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 400,
		"weighthg": 9999,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	solgaleo: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 791,
		"name": "Solgaleo",
		"types": [
				"Psychic",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 137,
				"atk": 137,
				"def": 107,
				"spa": 113,
				"spd": 89,
				"spe": 97
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 230,
		"prevo": "Cosmoem",
		"evoLevel": 53,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "solgaleo",
		"fullname": "pokemon: Solgaleo",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Solgaleo",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 2300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	lunala: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 792,
		"name": "Lunala",
		"types": [
				"Psychic",
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 137,
				"atk": 113,
				"def": 89,
				"spa": 137,
				"spd": 107,
				"spe": 97
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 120,
		"prevo": "Cosmoem",
		"evoLevel": 53,
		"eggGroups": [
				"Undiscovered"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "lunala",
		"fullname": "pokemon: Lunala",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Lunala",
		"forme": "",
		"baseForme": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 1200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	nihilego: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 793,
		"name": "Nihilego",
		"types": [
				"Rock",
				"Poison"
		],
		"gender": "N",
		"baseStats": {
				"hp": 109,
				"atk": 53,
				"def": 47,
				"spa": 127,
				"spd": 131,
				"spe": 103
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 55.5,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "nihilego",
		"fullname": "pokemon: Nihilego",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Nihilego",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 555,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	buzzwole: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 794,
		"name": "Buzzwole",
		"types": [
				"Bug",
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 107,
				"atk": 139,
				"def": 139,
				"spa": 53,
				"spd": 53,
				"spe": 79
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 333.6,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "buzzwole",
		"fullname": "pokemon: Buzzwole",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Buzzwole",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 3336,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	pheromosa: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 795,
		"name": "Pheromosa",
		"types": [
				"Bug",
				"Fighting"
		],
		"gender": "N",
		"baseStats": {
				"hp": 71,
				"atk": 137,
				"def": 37,
				"spa": 137,
				"spd": 37,
				"spe": 151
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 25,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "pheromosa",
		"fullname": "pokemon: Pheromosa",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Pheromosa",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 250,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	xurkitree: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 796,
		"name": "Xurkitree",
		"types": [
				"Electric"
		],
		"gender": "N",
		"baseStats": {
				"hp": 83,
				"atk": 89,
				"def": 71,
				"spa": 173,
				"spd": 71,
				"spe": 83
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 100,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "xurkitree",
		"fullname": "pokemon: Xurkitree",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Xurkitree",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 1000,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	celesteela: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 797,
		"name": "Celesteela",
		"types": [
				"Steel",
				"Flying"
		],
		"gender": "N",
		"baseStats": {
				"hp": 97,
				"atk": 101,
				"def": 103,
				"spa": 107,
				"spd": 101,
				"spe": 61
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 999.9,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "celesteela",
		"fullname": "pokemon: Celesteela",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Celesteela",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 9999,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	kartana: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 798,
		"name": "Kartana",
		"types": [
				"Grass",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 59,
				"atk": 181,
				"def": 131,
				"spa": 59,
				"spd": 31,
				"spe": 109
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 0.1,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "kartana",
		"fullname": "pokemon: Kartana",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Kartana",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 1,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	guzzlord: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 799,
		"name": "Guzzlord",
		"types": [
				"Dark",
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 223,
				"atk": 101,
				"def": 53,
				"spa": 97,
				"spd": 53,
				"spe": 43
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 888,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "guzzlord",
		"fullname": "pokemon: Guzzlord",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Guzzlord",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 8880,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	necrozma: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 800,
		"name": "Necrozma",
		"types": [
				"Psychic"
		],
		"gender": "N",
		"baseStats": {
				"hp": 97,
				"atk": 107,
				"def": 101,
				"spa": 127,
				"spd": 89,
				"spe": 79
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 230,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Necrozma-Dusk-Mane",
				"Necrozma-Dawn-Wings",
				"Necrozma-Ultra"
		],
		"formeOrder": [
				"Necrozma",
				"Necrozma-Dusk-Mane",
				"Necrozma-Dawn-Wings",
				"Necrozma-Ultra"
		],
		"tier": "RU",
		"doublesTier": "(DUU)",
		"id": "necrozma",
		"fullname": "pokemon: Necrozma",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Necrozma",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 2300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	necrozmaduskmane: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 800,
		"name": "Necrozma-Dusk-Mane",
		"baseSpecies": "Necrozma",
		"forme": "Dusk-Mane",
		"types": [
				"Psychic",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 97,
				"atk": 157,
				"def": 127,
				"spa": 113,
				"spd": 109,
				"spe": 77
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 460,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Necrozma",
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "necrozmaduskmane",
		"fullname": "pokemon: Necrozma-Dusk-Mane",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 4600,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	necrozmadawnwings: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 800,
		"name": "Necrozma-Dawn-Wings",
		"baseSpecies": "Necrozma",
		"forme": "Dawn-Wings",
		"types": [
				"Psychic",
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 97,
				"atk": 113,
				"def": 109,
				"spa": 157,
				"spd": 127,
				"spe": 77
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 350,
		"eggGroups": [
				"Undiscovered"
		],
		// "changesFrom": "Necrozma",
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "necrozmadawnwings",
		"fullname": "pokemon: Necrozma-Dawn-Wings",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 680,
		"weighthg": 3500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	necrozmaultra: {
		"exists": true,
		"tags": [
				"Restricted Legendary"
		],
		"num": 800,
		"name": "Necrozma-Ultra",
		"baseSpecies": "Necrozma",
		"forme": "Ultra",
		"types": [
				"Psychic",
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 97,
				"atk": 167,
				"def": 97,
				"spa": 167,
				"spd": 97,
				"spe": 129
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 230,
		"eggGroups": [
				"Undiscovered"
		],
		// "requiredItem": "Ultranecrozium Z",
		// "battleOnly": [
		//		"Necrozma-Dawn-Wings",
		//		"Necrozma-Dusk-Mane"
		// ],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "necrozmaultra",
		"fullname": "pokemon: Necrozma-Ultra",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		// "requiredItems": [
		// 		"Ultranecrozium Z"
		// ],
		"bst": 754,
		"weighthg": 2300,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false,
		// "changesFrom": "Necrozma-Dawn-Wings"
	},
	magearna: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 801,
		"name": "Magearna",
		"types": [
				"Steel",
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 95,
				"def": 115,
				"spa": 130,
				"spd": 115,
				"spe": 65
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 80.5,
		"eggGroups": [
				"Undiscovered"
		],
		"otherFormes": [
				"Magearna-Original"
		],
		"formeOrder": [
				"Magearna",
				"Magearna-Original"
		],
		"tier": "Uber",
		"doublesTier": "DUber",
		"id": "magearna",
		"fullname": "pokemon: Magearna",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseSpecies": "Magearna",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 805,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	magearnaoriginal: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 801,
		"name": "Magearna-Original",
		"baseSpecies": "Magearna",
		"forme": "Original",
		"types": [
				"Steel",
				"Normal"
		],
		"gender": "N",
		"baseStats": {
				"hp": 80,
				"atk": 95,
				"def": 115,
				"spa": 130,
				"spd": 115,
				"spe": 65
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 80.5,
		"eggGroups": [
				"Undiscovered"
		],
		"id": "magearnaoriginal",
		"fullname": "pokemon: Magearna-Original",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"isNonstandard": null,
		"baseForme": "",
		"prevo": "",
		"tier": "Uber",
		"doublesTier": "DUber",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 805,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	marshadow: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 802,
		"name": "Marshadow",
		"types": [
				"Fighting",
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 90,
				"atk": 125,
				"def": 80,
				"spa": 90,
				"spd": 90,
				"spe": 125
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 22.2,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "marshadow",
		"fullname": "pokemon: Marshadow",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Marshadow",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 222,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	poipole: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 803,
		"name": "Poipole",
		"types": [
				"Poison"
		],
		"gender": "N",
		"baseStats": {
				"hp": 67,
				"atk": 73,
				"def": 67,
				"spa": 73,
				"spd": 67,
				"spe": 73
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 1.8,
		"evos": [
				"Naganadel"
		],
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "poipole",
		"fullname": "pokemon: Poipole",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Poipole",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"nfe": true,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 420,
		"weighthg": 18,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	naganadel: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 804,
		"name": "Naganadel",
		"types": [
				"Poison",
				"Dragon"
		],
		"gender": "N",
		"baseStats": {
				"hp": 73,
				"atk": 73,
				"def": 73,
				"spa": 127,
				"spd": 73,
				"spe": 121
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 150,
		"prevo": "Poipole",
		"evoType": "levelMove",
		"evoMove": "Dragon Pulse",
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "naganadel",
		"fullname": "pokemon: Naganadel",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Naganadel",
		"forme": "",
		"baseForme": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 540,
		"weighthg": 1500,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	stakataka: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 805,
		"name": "Stakataka",
		"types": [
				"Rock",
				"Steel"
		],
		"gender": "N",
		"baseStats": {
				"hp": 61,
				"atk": 131,
				"def": 211,
				"spa": 53,
				"spd": 101,
				"spe": 13
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 820,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "stakataka",
		"fullname": "pokemon: Stakataka",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Stakataka",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 8200,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	blacephalon: {
		"exists": true,
		"tags": [
				"Ultra Beast"
		],
		"num": 806,
		"name": "Blacephalon",
		"types": [
				"Fire",
				"Ghost"
		],
		"gender": "N",
		"baseStats": {
				"hp": 53,
				"atk": 127,
				"def": 53,
				"spa": 151,
				"spd": 79,
				"spe": 107
		},
		"abilities": {
				"0": "Illuminate"
		},
		"weightkg": 13,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "blacephalon",
		"fullname": "pokemon: Blacephalon",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Blacephalon",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 570,
		"weighthg": 130,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	zeraora: {
		"exists": true,
		"tags": [
				"Mythical"
		],
		"num": 807,
		"name": "Zeraora",
		"types": [
				"Electric"
		],
		"gender": "N",
		"baseStats": {
				"hp": 88,
				"atk": 112,
				"def": 75,
				"spa": 102,
				"spd": 80,
				"spe": 143
		},
		"abilities": {
				"0": "Volt Absorb"
		},
		"weightkg": 44.5,
		"eggGroups": [
				"Undiscovered"
		],
		"isNonstandard": null,
		"tier": "Illegal",
		"id": "zeraora",
		"fullname": "pokemon: Zeraora",
		"effectType": "Pokemon",
		"kind": "Species",
		"gen": 3,
		"shortDesc": "",
		"desc": "",
		"baseSpecies": "Zeraora",
		"forme": "",
		"baseForme": "",
		"prevo": "",
		"doublesTier": "Illegal",
		"evos": [],
		"nfe": false,
		"canHatch": false,
		"genderRatio": {
				"M": 0,
				"F": 0
		},
		"bst": 600,
		"weighthg": 445,
		"unreleasedHidden": false,
		"maleOnlyHidden": false,
		"gmaxUnreleased": false,
		"cannotDynamax": false
	},
	meltan: {
		"exists": true,
		],