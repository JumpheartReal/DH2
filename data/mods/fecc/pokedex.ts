export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	/*
	name: {
		fusion: ['P1', 'P2'],
		name: "Name",
		types: [""],
		baseStats: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
		abilities: {0: ""},
		weightkg: ,
	},

	*/
	kyuwear: {
		fusion: ['Bewear', 'Kyurem-Black'],
		name: "Kyuwear",
		types: ["Fighting", "Ice"],
		baseStats: {hp: 122, atk: 167, def: 90, spa: 87, spd: 75, spe: 97},
		abilities: {0: "Aim For The Horn"},
		weightkg: 230,
	},
	wingwambit: {
		name: "Wingwambit",
		fusion: ['Wishiwashi', 'Kingambit'],
		types: ["Water", "Steel"],
		baseStats: {hp: 75, atk: 90, def: 70, spa: 45, spd: 55, spe: 45},
		abilities: {0: "Bongcloud"},
	},
	shitmontop: {
		name: "Shitmontop",
		fusion: ['Sableye', 'Hitmontop'],
		types: ["Fighting", "Ghost"],
		baseStats: {hp: 50, atk: 90, def: 90, spa: 50, spd: 90, spe: 60},
		abilities: {0: "Jankster"},
	},
	shitmontopmega: {
		name: "Shitmontop-Mega",
		baseSpecies: "Shitmontop",
		forme: "Mega",
		types: ["Fighting", "Ghost"],
		baseStats: {hp: 50, atk: 100, def: 140, spa: 70, spd: 140, spe: 30},
		abilities: {0: "Magic Bounce"},
		requiredItem: "Sablenite",
	},
	basbal: {
		name: "Basbal",
		fusion: ['Basculin-White-Striped', 'Baltoy'],
		types: ["Water", "Ground"],
		baseStats: {hp: 55, atk: 70, def: 65, spa: 60, spd: 65, spe: 80},
		abilities: {0: "Baseballed"},
	},
	irongooner: {
		name: "Iron Gooner",
		fusion: ['Iron Boulder', 'Obstagoon'],
		types: ["Rock", "Dark"],
		baseStats: {hp: 94, atk: 108, def: 90, spa: 64, spd: 94, spe: 110},
		abilities: {0: "Goon Drive"},
	},
	chiruno: {
		name: "Chiruno",
		fusion: ['Jirachi', 'Articuno'],
		types: ["Ice", "Psychic"],
		baseStats: {hp: 95, atk: 95, def: 100, spa: 100, spd: 115, spe: 95},
		abilities: {0: "Perfect Freeze"},
	},
	shitto: {
		name: "Shitto",
		fusion: ['Shuckle', 'Ditto'],
		types: ["Bug", "Normal"],
		baseStats: {hp: 34, atk: 29, def: 139, spa: 29, spd: 139, spe: 26},
		abilities: {0: "Imtosper"},
	},
	zacianoh: {
		name: "Zacian-Oh",
		fusion: ['Zacian-Crowned', 'Ho-Oh'],
		types: ["Fairy", "Fire"],
		baseStats: {hp: 100, atk: 140, def: 105, spa: 100, spd: 135, spe: 120},
		abilities: {0: "Trepid Sword"},
	},
	hooporantunbound: {
		name: "Hooporant-Unbound",
		fusion: ['Hoopa-Unbound', 'Cramorant'],
		types: ["Water", "Dark"],
		baseStats: {hp: 75, atk: 125, def: 60, spa: 130, spd: 115, spe: 90},
		abilities: {0: "Magic Missile"},
	},
	cremiemunki: {
		name: "Cremiemunki",
		fusion: ['Alcremie', 'Munkidori'],
		types: ["Fairy", "Psychic"],
		baseStats: {hp: 76, atk: 67, def: 70, spa: 120, spd: 105, spe: 105},
		abilities: {0: "Stinky Veil"},
	},
	zygarb: {
		name: "Zygarb",
		fusion: ['Zygarde', 'Garbodor'],
		types: ["Dragon", "Poison"],
		baseStats: {hp: 94, atk: 97, def: 101, spa: 90, spd: 88, spe: 85},
		abilities: {0: "Second Phase"},
	},
	zygarbrecycled: {
		name: "Zygarb-Recycled",
		baseSpecies: "Zygarb",
		forme: "Recycled",
		types: ["Dragon", "Poison"],
		baseStats: {hp: 202, atk: 97, def: 101, spa: 100, spd: 88, spe: 75},
		abilities: {0: "Second Phase"},
	},
	parasex: {
		name: "Parasex",
		fusion: ['Parasect', 'Calyrex-Ice'],
		types: ["Bug", "Ice"],
		baseStats: {hp: 80, atk: 145, def: 115, spa: 75, spd: 105, spe: 40},
		abilities: {0: "As One Sex"},
	},
	kingcario: {
		fusion: ['Kingambit', 'Lucario'],
		name: "Kingcario",
		types: ["Steel"],
		baseStats: {hp: 95, atk: 130, def: 95, spa: 87, spd: 79, spe: 70},
		abilities: {0: "Corrupt Council"},
	},
	kingcariomega: {
		name: "Kingcario-Mega",
		baseSpecies: "Kingcario",
		forme: "Mega",
		types: ["Steel"],
		baseStats: {hp: 95, atk: 165, def: 113, spa: 112, spd: 79, spe: 92},
		abilities: {0: "Adaptability"},
	},
	blasgron: {
		name: "Blasgron",
		fusion: ['Blastoise', 'Aggron'],
		types: ["Water", "Rock"],
		baseStats: {hp: 74, atk: 115, def: 140, spa: 72, spd: 82, spe: 65},
		abilities: {0: "Plated Armor"},
	},
	blasgronamega: {
		name: "Blasgron-Mega-A",
		baseSpecies: "Blasgron",
		forme: "Mega-A",
		types: ["Water"],
		baseStats: {hp: 74, atk: 145, def: 190, spa: 72, spd: 102, spe: 65},
		abilities: {0: "Filter"},
		requiredItem: "Aggronite",
	},
	blasgronbmega: {
		name: "Blasgron-Mega-B",
		baseSpecies: "Blasgron",
		forme: "Mega-B",
		types: ["Water", "Rock"],
		baseStats: {hp: 74, atk: 135, def: 160, spa: 122, spd: 92, spe: 65},
		abilities: {0: "Mega Launcher"},
		requiredItem: "Blastoisinite",
	},
	starcidueye: {
		name: "Starcidueye",
		fusion: ['Starmie', 'Decidueye'],
		types: ["Psychic", "Grass"],
		baseStats: {hp: 70, atk: 91, def: 80, spa: 100, spd: 95, spe: 108},
		abilities: {0: "Vapor Growth"},
	},
	woopquaza: {
		name: "Woopquaza",
		fusion: ['Wooper', 'Rayquaza'],
		types: ["Ground", "Flying"],
		baseStats: {hp: 85, atk: 100, def: 70, spa: 90, spd: 60, spe: 55},
		abilities: {0: "Airhead"},
	},
	woopquazamega: {
		name: "Woopquaza-Mega",
		baseSpecies: "Woopquaza",
		forme: "Mega",
		types: ["Ground", "Flying"],
		baseStats: {hp: 85, atk: 130, def: 80, spa: 120, spd: 70, spe: 75},
		abilities: {0: "Delta Stream"},
		requiredMove: "Dragon Ascent",
	},
	swampmuk: {
		name: "Swampmuk",
		fusion: ['Swampert', 'Muk'],
		types: ["Ground", "Poison"],
		baseStats: {hp: 102, atk: 127, def: 82, spa: 75, spd: 95, spe: 55},
		abilities: {0: "Loose Fuse"},
	},
	orivillainsensu: {
		name: "Orivillain-Sensu",
		fusion: ['Oricorio', 'Scovillain'],
		types: ["Ghost", "Fire"],
		baseStats: {hp: 70, atk: 89, def: 67, spa: 103, spd: 67, spe: 104},
		abilities: {0: "RANDOM DANCE PARTY"},
	},
	gardetillery: {
		name: "Gardetillery",
		fusion: ['Gardevoir', 'Octillery'],
		types: ["Fairy", "Water"],
		baseStats: {hp: 71, atk: 85, def: 70, spa: 115, spd: 95, spe: 82},
		abilities: {0: "LARPing"},
	},
	gardetillerymega: {
		name: "Gardetillery-Mega",
		baseSpecies: "Gardetillery",
		forme: "Mega",
		types: ["Fairy", "Water"],
		baseStats: {hp: 71, atk: 105, def: 70, spa: 155, spd: 115, spe: 102},
		abilities: {0: "Pixilate"},
	},
	swalos: {
		name: "Swalos",
		fusion: ['Swalot', 'Tauros-Paldea-Combat'],
		types: ["Poison", "Fighting"],
		baseStats: {hp: 107, atk: 91, def: 94, spa: 51, spd: 76, spe: 77},
		abilities: {0: "Swaloseed-Lol"},
	},
	roaringroar: {
		name: "Roaring Roar",
		fusion: ['Roaring Moon', 'Incineroar'],
		types: ["Fire", "Dark"],
		baseStats: {hp: 101, atk: 127, def: 81, spa: 67, spd: 95, spe: 99},
		abilities: {0: "Do The Roar"},
	},
	darkerupt: {
		name: "Darkerupt",
		fusion: ['Darkrai', 'Camerupt'],
		types: ["Dark", "Ground"],
		baseStats: {hp: 90, atk: 95, def: 80, spa: 120, spd: 82, spe: 82},
		abilities: {0: "Coldsleep"},
	},
	darkeruptmega: {
		name: "Darkerupt-Mega",
		baseSpecies: "Darkerupt",
		forme: "Mega",
		types: ["Dark", "Ground"],
		baseStats: {hp: 90, atk: 115, def: 110, spa: 160, spd: 112, spe: 62},
		abilities: {0: "Sheer Force"},
	},
	glimmeplume: {
		name: "Glimmeplume",
		fusion: ['Glimmora', 'Vileplume'],
		types: ["Rock", "Poison"],
		baseStats: {hp: 99, atk: 67, def: 87, spa: 120, spd: 85, spe: 68},
		abilities: {0: "Toxic Spores"},
	},
	spidopsspidamax: {
		name: "Spidops-Spidamax",
		fusion: ['Spidops', 'Eternatus'],
		types: ["Bug", "Dragon"],
		baseStats: {hp: 157, atk: 97, def: 171, spa: 88, spd: 168, spe: 82},
		abilities: {0: "Pressurout"},
	},
	koraisle: {
		name: "Koraisle",
		fusion: ['Koraidon', 'Plusle'],
		types: ["Electric", "Fighting"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 85, spd: 90, spe: 120},
		abilities: {0: "Good Vibes"},
	},
	mirainun: {
		name: "Mirainun",
		fusion: ['Miraidon', 'Minun'],
		types: ["Electric", "Dragon"],
		baseStats: {hp: 80, atk: 80, def: 75, spa: 105, spd: 100, spe: 115},
		abilities: {0: "Bad Vibes"},
	},
	zyggizaggischool50: {
		name: "Zyggizaggi-School-50%",
		baseSpecies: "Zyggizaggi",
		forme: "School-50%",
		types: ["Dragon", "Water"],
		baseStats: {hp: 76, atk: 120, def: 125, spa: 110, spd: 115, spe: 62},
		abilities: {0: "Riptides"},
	},
	zyggizaggischool10: {
		name: "Zyggizaggi-School-10%",
		baseSpecies: "Zyggizaggi",
		forme: "School-10%",
		types: ["Dragon", "Water"],
		baseStats: {hp: 49, atk: 120, def: 100, spa: 100, spd: 110, spe: 72},
		abilities: {0: "Riptides"},
	},
	zyggizaggi: {
		name: "Zyggizaggi",
		fusion: ['Zygarde', 'WIshiwashi'],
		forme: "Solo-50%",
		types: ["Dragon", "Water"],
		baseStats: {hp: 76, atk: 17, def: 20, spa: 22, spd: 23, spe: 72},
		abilities: {0: "Riptides"},
	},
	zyggizaggisolo10: {
		name: "Zyggizaggi-Solo-10%",
		baseSpecies: "Zyggizaggi",
		forme: "Solo-10%",
		types: ["Dragon", "Water"],
		baseStats: {hp: 49, atk: 17, def: 16, spa: 20, spd: 22, spe: 82},
		abilities: {0: "Riptides"},
	},
	zyggizaggischoolcomplete: {
		name: "Zyggizaggi-School-Complete",
		baseSpecies: "Zyggizaggi",
		forme: "School-Complete",
		types: ["Dragon", "Water"],
		baseStats: {hp: 182, atk: 120, def: 125, spa: 120, spd: 115, spe: 52},
		abilities: {0: "Riptides"},
	},
	zyggizaggisolocomplete: {
		name: "Zyggizaggi-Solo-Complete",
		baseSpecies: "Zyggizaggi",
		forme: "Solo-Complete",
		types: ["Dragon", "Water"],
		baseStats: {hp: 182, atk: 17, def: 20, spa: 24, spd: 23, spe: 62},
		abilities: {0: "Riptides"},
	},
	zyggizaggicompleteschool: {
		name: "Zyggizaggi-Complete-School",
		baseSpecies: "Zyggizaggi",
		forme: "Complete-School",
		types: ["Dragon", "Water"],
		baseStats: {hp: 182, atk: 119, def: 120, spa: 160, spd: 115, spe: 52},
		abilities: {0: "Riptides"},
	},
	zyggizaggicompletesolo: {
		name: "Zyggizaggi-Complete-Solo",
		baseSpecies: "Zyggizaggi",
		forme: "Complete-Solo",
		types: ["Dragon", "Water"],
		baseStats: {hp: 182, atk: 17, def: 20, spa: 32, spd: 23, spe: 62},
		abilities: {0: "Riptides"},
	},
	hatterune: {
		name: "Hatterune",
		fusion: ['Hatterene', 'Runerigus'],
		types: ["Ground", "Fairy"],
		baseStats: {hp: 57, atk: 92, def: 120, spa: 93, spd: 104, spe: 29},
		abilities: {0: "Pillage"},
	},
	bellimanitangalar: {
		name: "Bellimanitan-Galar",
		fusion: ['Bellibolt', 'Darmanitan-GAlar'],
		types: ["Electric", "Ice"],
		baseStats: {hp: 107, atk: 102, def: 73, spa: 66, spd: 69, spe: 90},
		abilities: {0: "Gorillomorphosis"},
	},
	kecligiraf: {
		name: "Kecligiraf",
		fusion: ['Kecleon', 'Farigiraf'],
		types: ["Normal"],
		baseStats: {hp: 90, atk: 90, def: 90, spa: 85, spd: 95, spe: 50},
		abilities: {0: "Eat Paint"},
	},
	sirfukd: {
		name: "Sirfuk'd",
		fusion: ['Sirfetch\'d', 'Muk'],
		types: ["Fighting", "Poison"],
		baseStats: {hp: 103, atk: 120, def: 85, spa: 66, spd: 91, spe: 57},
		abilities: {0: "Mucked Up"},
	},
	morform: {
		name: "Morform",
		fusion: ['Morpeko', 'Castform'],
		types: ["Normal", "Dark"],
		baseStats: {hp: 64, atk: 102, def: 64, spa: 70, spd: 64, spe: 83},
		abilities: {0: "Weather War"},
	},
	morformrainy: {
		name: "Morform-Rainy",
		baseSpecies: "Morform",
		forme: "Rainy",
		types: ["Water", "Dark"],
		baseStats: {hp: 64, atk: 102, def: 64, spa: 70, spd: 64, spe: 83},
		abilities: {0: "Weather War"},
	},
	morformsunny: {
		name: "Morform-Sunny",
		baseSpecies: "Morform",
		forme: "Sunny",
		types: ["Fire", "Dark"],
		baseStats: {hp: 64, atk: 102, def: 64, spa: 70, spd: 64, spe: 83},
		abilities: {0: "Weather War"},
	},
	morformsnowy: {
		name: "Morform-Snowy",
		baseSpecies: "Morform",
		forme: "Snowy",
		types: ["Ice", "Dark"],
		baseStats: {hp: 64, atk: 102, def: 64, spa: 70, spd: 64, spe: 83},
		abilities: {0: "Weather War"},
	},
	landorustusk: {
		name: "Landorus-Tusk",
		fusion: ['Great Tusk', 'Landorus'],
		types: ["Ground", "Flying"],
		baseStats: {hp: 103, atk: 139, def: 111, spa: 91, spd: 67, spe: 89},
		abilities: {0: "As One (OU)"},
	},
	bruxyrex: {
		name: "Bruxyrex",
		fusion: ['Bruxish', 'Calyrex'],
		types: ["Psychic", "Grass"],
		baseStats: {hp: 84, atk: 92, def: 75, spa: 75, spd: 75, spe: 99},
		abilities: {0: "Horrendous Skin"},
	},
	meowscaurospaldeablaze: {
		name: "Meowscauros-Paldea-Blaze",
		fusion: ['Meowscarada', 'Tauros-Paldea-Blaze'],
		types: ["Grass", "Fire"],
		baseStats: {hp: 75, atk: 110, def: 90, spa: 59, spd: 70, spe: 111},
		abilities: {0: "Reprise"},
	},
	fezanzorohisui: {
		name: "Fezanzoro-Hisui",
		fusion: ['Fezandipiti', 'Zoroark-Hisui'],
		types: ["Fairy", "Ghost"],
		baseStats: {hp: 71, atk: 105, def: 71, spa: 107, spd: 92, spe: 104},
		abilities: {0: "Power Of Friendship"},
	},
	dragomarill: {
		name: "Dragomarill",
		fusion: ['Dragonite', 'Azumarill'],
		types: ["Fairy", "Flying"],
		baseStats: {hp: 95, atk: 93, def: 87, spa: 80, spd: 90, spe: 65},
		abilities: {0: "Huge Scaling"},
	},
	pechagiri: {
		name: "Pechagiri",
		fusion: ['Pecharunt', 'Tatsugiri'],
		types: ["Poison", "Dragon"],
		baseStats: {hp: 78, atk: 69, def: 110, spa: 104, spd: 91, spe: 105},
		abilities: {0: "Fishification Beam"},
	},
	golisoghast: {
		name: "Golisoghast",
		fusion: ['Golisopod', 'Brambleghast'],
		types: ["Bug", "Ghost"],
		baseStats: {hp: 85, atk: 120, def: 105, spa: 70, spd: 80, spe: 65},
		abilities: {0: "Blown Away"},
	},
	coomerajah: {
		name: "Coomerajah",
		fusion: ['Copperajah', 'Gloom'],
		types: ["Steel", "Grass"],
		baseStats: {hp: 111, atk: 97, def: 69, spa: 82, spd: 72, spe: 35},
		abilities: {0: "Special Sauce"},
	},
	raichudus: {
		name: "Raichudus",
		fusion: ['Raichu', 'Thundurus'],
		types: ["Electric", "Flying"],
		baseStats: {hp: 69, atk: 102, def: 62, spa: 116, spd: 80, spe: 121},
		abilities: {0: "Selfish"},
	},
	primarilla: {
		name: "Primarilla",
		fusion: ['Primarina', 'Rillaboom'],
		types: ["Grass", "Fairy"],
		baseStats: {hp: 90, atk: 99, def: 82, spa: 104, spd: 93, spe: 72},
		abilities: {0: "Musical Jungal"},
	},
	cursolemalola: {
		name: "Cursolem-Alola",
		fusion: ['Cursola', 'Golem-Alola'],
		types: ["Electric", "Ghost"],
		baseStats: {hp: 70, atk: 107, def: 110, spa: 100, spd: 97, spe: 37},
		abilities: {0: "Shock and Ball Torture"},
	},
	delcaninehisui: {
		name: "Delcanine-Hisui",
		fusion: ['Delcatty', 'Arcanine-Hisui'],
		types: ["Normal", "Rock"],
		baseStats: {hp: 82, atk: 110, def: 72, spa: 75, spd: 67, spe: 90},
		abilities: {0: "Become Average"},
	},
	varantis: {
		name: "Varantis",
		fusion: ['Varoom', 'Fomantis'],
		types: ["Steel", "Grass"],
		baseStats: {hp: 45, atk: 82, def: 49, spa: 40, spd: 40, spe: 41},
		abilities: {0: "Quickstart"},
	},
	domphox: {
		name: "Domphox",
		fusion: ['Delphox', 'Ribombee'],
		types: ["Psychic", "Bug"],
		baseStats: {hp: 67, atk: 62, def: 66, spa: 114, spd: 85, spe: 124},
		abilities: {0: "Beewitch"},
	},
	aegigrigus: {
		name: "Aegigrigus",
		fusion: ['Aegislash', 'Cofagrigus'],
		types: ["Steel", "Ghost"],
		baseStats: {hp: 59, atk: 50, def: 142, spa: 72, spd: 142, spe: 45},
		abilities: {0: "Royal Pass"},
	},
	miniluna: {
		name: "Miniluna",
		fusion: ['Minior', 'Ursaluna-Bloodmoon'],
		types: ["Rock", "Normal"],
		baseStats: {hp: 86, atk: 120, def: 65, spa: 82, spd: 107, spe: 116},
		abilities: {0: "Metamorphic"},
	},
	minilunabloodstone: {
		name: "Miniluna-Bloodstone",
		baseSpecies: "Miniluna",
		forme: "Bloodstone",
		types: ["Rock", "Normal"],
		baseStats: {hp: 86, atk: 65, def: 120, spa: 107, spd: 82, spe: 56},
		abilities: {0: "Metamorphic"},
	},
	zamadactylcrowned: {
		name: "Zamadactyl-Crowned",
		fusion: ['Zamazenta', 'Aerodactyl'],
		types: ["Rock", "Steel"],
		baseStats: {hp: 86, atk: 116, def: 102, spa: 70, spd: 107, spe: 129},
		abilities: {0: "Daunting Shield"},
	},
	thrally: {
		name: "Thrally",
		fusion: ['Throh', 'Silvally'],
		types: ["Normal", "Fighting"],
		baseStats: {hp: 107, atk: 97, def: 110, spa: 62, spd: 90, spe: 70},
		abilities: {0: "Code Breaker"},
	},
	glaceus: {
		name: "Glaceus",
		fusion: ['Glalie', 'Arceus'],
		types: ["Ice", "Normal"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Prismatic"},
	},
	teradoof: {
		name: "Teradoof",
		fusion: ['Terapagos', 'Bidoof'],
		types: ["Normal"],
		baseStats: {hp: 74, atk: 55, def: 62, spa: 50, spd: 62, spe: 45},
		abilities: {0: "Tera Tooth"},
		forceTeraType: "Stellar",
	},
	teradoofterastal: {
		name: "Teradoof-Terastal",
		baseSpecies: "Teradoof",
		forme: "Terastal",
		types: ["Normal"],
		baseStats: {hp: 84, atk: 115, def: 112, spa: 130, spd: 112, spe: 95},
		abilities: {0: "Tera Shell"},
		forceTeraType: "Stellar",
	},
	teradoofstellar: {
		name: "Teradoof-Stellar",
		baseSpecies: "Teradoof",
		forme: "Stellar",
		types: ["Normal"],
		baseStats: {hp: 149, atk: 125, def: 112, spa: 155, spd: 112, spe: 95},
		abilities: {0: "Terafrom Zero"},
		forceTeraType: "Stellar",
	},
	squawkersby: {
		name: "Squawkersby",
		fusion: ["Squawkabilly", "Diggersby"],
		types: ["Ground", "Flying"],
		baseStats: {hp: 83, atk: 76, def: 64, spa: 48, spd: 64, spe: 85},
		abilities: {0: "Humongous Power"},
	},
	venochamp: {
		name: "Venochamp",
		fusion: ["Venomoth", "Machamp"],
		types: ["Bug", "Fighting"],
		baseStats: {hp: 80, atk: 100, def: 70, spa: 90, spd: 80, spe: 75},
		abilities: {0: "Bad Hax"},
	},
	intelaiai: {
		name: "Intelaiai",
		fusion: ["Inteleon", "Grafaiai"],
		types: ["Water", "Poison"],
		baseStats: {hp: 66, atk: 101, def: 65, spa: 105, spd: 68, spe: 115},
		abilities: {0: "NO I GO FIRST!!"},
	},
	dinggalu: {
		name: "Ding-Galu",
		fusion: ["Ting-Lu", "Darmanitan-Galar"],
		types: ["Ground", "Ice"],
		baseStats: {hp: 150, atk: 125, def: 90, spa: 42, spd: 67, spe: 70},
		abilities: {0: "Gorilla of Ruin"},
	},
	talonsprit: {
		name: "Talonsprit",
		fusion: ["Talonflame", "Mesprit"],
		types: ["Psychic", "Flying"],
		baseStats: {hp: 79, atk: 93, def: 88, spa: 109, spd: 87, spe: 103},
		abilities: {0: "Swallow Swallow"},
	},
	pelidogi: {
		name: "Pelidogi",
		fusion: ["Pelipper", "Okidogi"],
		types: ["Flying", "Fighting"],
		baseStats: {hp: 80, atk: 98, def: 110, spa: 76, spd: 80, spe: 72},
		abilities: {0: "Wet Chain"},
	},
	applepathra: {
		name: "Applepathra",
		fusion: ["Hydrapple", "Espathra"],
		types: ["Dragon", "Psychic"],
		baseStats: {hp: 120, atk: 70, def: 85, spa: 110, spd: 70, spe: 74},
		abilities: {0: "im leabin this gronp"},
	},
	bearlamar: {
		name: "Bearlamar",
		fusion: ["Beartic", "Malamar"],
		types: ["Ice", "Dark"],
		baseStats: {hp: 90, atk: 115, def: 85, spa: 70, spd: 79, spe: 61},
		abilities: {0: "TR Jumpscare"},
	},
	avalluxe: {
		name: "Avalluxe",
		fusion: ["Avalugg", "Vanilluxe"],
		types: ["Ice"],
		baseStats: {hp: 83, atk: 106, def: 154, spa: 77, spd: 70, spe: 53},
		abilities: {0: "Defensive Ice"},
	},
	celemiga: {
		name: "Celemiga",
		fusion: ["Celesteela", "Flamigo"],
		types: ["Steel", "Flying"],
		baseStats: {hp: 89, atk: 109, def: 89, spa: 101, spd: 83, spe: 79},
		abilities: {0: "Ultra Yoink"},
	},
	buzzukalola: {
		name: "Buzzuk-Alola",
		fusion: ["Buzzwole", "Muk-Alola"],
		types: ["Bug", "Dark"],
		baseStats: {hp: 107, atk: 127, def: 107, spa: 59, spd: 83, spe: 67},
		abilities: {0: "Ultra Alchemist"},
	},
	auroriftry: {
		name: "Auroriftry",
		fusion: ["Aurorus", "Shiftry"],
		types: ["Ice", "Grass"],
		baseStats: {hp: 106, atk: 108, def: 66, spa: 94, spd: 76, spe: 69},
		abilities: {0: "AC"},
	},
	gigawattrel: {
		name: "Gigawattrel",
		fusion: ["Gigalith", "Kilowattrel"],
		types: ["Rock", "Electric"],
		baseStats: {hp: 77, atk: 102, def: 95, spa: 102, spd: 70, spe: 75},
		abilities: {0: "Wind Storm"},
	},
	magyrexshadow: {
		name: "Magyrex-Shadow",
		fusion: ["Magearna", "Calyrex-Shadow"],
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 90, atk: 90, def: 97, spa: 147, spd: 107, spe: 107},
		abilities: {0: "As One Gears"},
	},
	mrgene: {
		name: "Mr. Gene",
		fusion: ["Mr. Rime", "Genesect"],
		types: ["Psychic", "Bug"],
		baseStats: {hp: 75, atk: 102, def: 85, spa: 115, spd: 97, spe: 104},
		abilities: {0: "Windows 11"},
	},
	beetar: {
		name: "Beetar",
		fusion: ["Beedrill", "Tyranitar"],
		types: ["Bug", "Rock"],
		baseStats: {hp: 82, atk: 112, def: 75, spa: 70, spd: 90, spe: 88},
		abilities: {0: "The Plague"},
	},
	beetarmegab: {
		name: "Beetar-Mega-B",
		baseSpecies: "Beetar",
		forme: "Mega-B",
		types: ["Bug", "Rock"],
		baseStats: {hp: 82, atk: 172, def: 75, spa: 40, spd: 90, spe: 158},
		abilities: {0: "Adaptability"},
	},
	beetarmegat: {
		name: "Beetar-Mega-T",
		baseSpecies: "Beetar",
		forme: "Mega-T",
		types: ["Bug", "Rock"],
		baseStats: {hp: 82, atk: 142, def: 115, spa: 70, spd: 110, spe: 98},
		abilities: {0: "Sand Stream"},
	},
	wybbumubbu: {
		name: "Wybbumubbu",
		fusion: ["Wobbuffet", "Pyukumuku"],
		types: ["Water", "Psychic"],
		baseStats: {hp: 142, atk: 46, def: 94, spa: 31, spd: 94, spe: 19},
		abilities: {0: "Got Your Guts"},
	},
	lurankix: {
		name: "Lurankix",
		fusion: ["Lurantis", "Lokix"],
		types: ["Dark", "Grass"],
		baseStats: {hp: 70, atk: 123, def: 84, spa: 66, spd: 72, spe: 68},
		abilities: {0: "Countertype"},
	},
	periorperior: {
		name: "Periorperior",
		fusion: ["Rhyperior", "Serperior"],
		types: ["Grass", "Ground"],
		baseStats: {hp: 95, atk: 107, def: 112, spa: 65, spd: 75, spe: 76},
		abilities: {0: "Rolid Sock"},
	},
	chichi: {
		name: "Chi-Chi",
		fusion: ["Chi-Yu", "Jirachi"],
		types: ["Fire", "Steel"],
		baseStats: {hp: 80, atk: 90, def: 90, spa: 120, spd: 120, spe: 100},
		abilities: {0: "Grace of Ruin"},
	},
	ferrothorns: {
		name: "Ferro Thorns",
		fusion: ["Ferrothorn", "Iron Thorns"],
		types: ["Steel", "Electric"],
		baseStats: {hp: 88, atk: 114, def: 120, spa: 62, spd: 110, spe: 46},
		abilities: {0: "Iron Thorn"},
	},
	enamorazzle: {
		name: "Enamorazzle",
		fusion: ["Enamorus", "Salazzle"],
		types: ["Fairy", "Fire"],
		baseStats: {hp: 71, atk: 89, def: 65, spa: 123, spd: 70, spe: 112},
		abilities: {0: "Pansexual"},
	},
	raginghax: {
		name: "Raging Hax",
		fusion: ["Raging Bolt", "Haxorus"],
		types: ["Dragon", "Electric"],
		baseStats: {hp: 101, atk: 111, def: 91, spa: 101, spd: 81, spe: 91},
		abilities: {0: "Serious Showdown"},
	},
	joeverqwil: {
		name: "Joeverqwil",
		fusion: ["Jellicent", "Overqwil"],
		types: ["Ghost", "Dark"],
		baseStats: {hp: 100, atk: 90, def: 85, spa: 75, spd: 85, spe: 75},
		abilities: {0: "Biden Blast"},
	},
	exeggumoramora: {
		name: "Exeggumor-Amora",
		fusion: ["Exeggutor-Alola", "Heatmor"],
		types: ["Fire", "Dragon"],
		baseStats: {hp: 90, atk: 111, def: 75, spa: 125, spd: 70, spe: 55},
		abilities: {0: "Herb Gather"},
	},
	gigawrath: {
		name: "Gigawrath",
		fusion: ["Regigigas", "Poliwrath"],
		types: ["Normal", "Fighting"],
		baseStats: {hp: 100, atk: 147, def: 102, spa: 75, spd: 100, spe: 65},
		abilities: {0: "Tier 1 Boomer"},
	},
	fiskomagalar: {
		name: "Fiskoma-Galar",
		fusion: ["Stunfisk-Galar", "Komala"],
		types: ["Normal", "Steel"],
		baseStats: {hp: 90, atk: 105, def: 85, spa: 70, spd: 90, spe: 50},
		abilities: {0: "ATV"},
	},
	yvenne: {
		name: "Yvenne",
		fusion: ["Yveltal", "Dedenne"],
		types: ["Electric", "Flying"],
		baseStats: {hp: 96, atk: 94, def: 82, spa: 106, spd: 82, spe: 100},
		abilities: {0: "Heal Aura"},
	},
	paletta: {
		name: "Paletta",
		fusion: ["Palafin", "Meloetta"],
		types: ["Water", "Normal"],
		baseStats: {hp: 100, atk: 73, def: 74, spa: 100, spd: 105, spe: 95},
		abilities: {0: "Dual Performance"},
	},
	palettapirouette: {
		name: "Paletta-Pirouette",
		baseSpecies: "Paletta",
		forme: "Pirouette",
		types: ["Water", "Fighting"],
		baseStats: {hp: 100, atk: 100, def: 95, spa: 73, spd: 74, spe: 105},
		abilities: {0: "Dual Performance"},
	},
	nebrozmagalar: {
		name: "Nebrozma-Galar",
		fusion: ["Necrozma", "Slowbro-Galar"],
		types: ["Psychic", "Poison"],
		baseStats: {hp: 97, atk: 113, def: 101, spa: 113, spd: 79, spe: 59},
		abilities: {0: "Ultra Gun"},
	},
	arctosnarl: {
		name: "Arctosnarl",
		fusion: ["Arctozolt", "Grimmsnarl"],
		types: ["Dark", "Electric"],
		baseStats: {hp: 92, atk: 110, def: 77, spa: 92, spd: 77, spe: 57},
		abilities: {0: "Zoomies"},
	},
	araquacroak: {
		name: "Araquacroak",
		fusion: ["Araquanid", "Toxicroak"],
		types: ["Water", "Fighting"],
		baseStats: {hp: 95, atk: 88, def: 78, spa: 68, spd: 98, spe: 63},
		abilities: {0: "Sweaty Palms"},
	},
	rolyklawfy: {
		name: "Rolyklawfy",
		fusion: ["Rolycoly", "Klawf"],
		types: ["Rock"],
		baseStats: {hp: 50, atk: 70, def: 82, spa: 37, spd: 52, spe: 52},
		abilities: {0: "Boiling Blood"},
	},
	tipplin: {
		name: "Tipplin",
		fusion: ["Dipplin", "Tauros"],
		types: ["Normal", "Dragon"],
		baseStats: {hp: 77, atk: 90, def: 102, spa: 67, spd: 75, spe: 75},
		abilities: {0: "Superangry Syrup"},
	},
	cinderpao: {
		name: "Cinder-Pao",
		fusion: ["Cinderace", "Chien-Pao"],
		types: ["Ice", "Fire"],
		baseStats: {hp: 80, atk: 118, def: 77, spa: 71, spd: 70, spe: 127},
		abilities: {0: "Football of Ruin"},
	},
	absaludon: {
		name: "Absaludon",
		fusion: ["Absol", "Archaludon"],
		types: ["Dark", "Dragon"],
		baseStats: {hp: 85, atk: 120, def: 95, spa: 100, spd: 70, spe: 80},
		abilities: {0: "Lucky Charm"},
	},
	absalutonmega: {
		name: "Absaluton-Mega",
		baseSpecies: "Absaluton",
		forme: "Mega",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 85, atk: 140, def: 95, spa: 140, spd: 70, spe: 120},
		abilities: {0: "Magic Bounce"},
		requiredItem: "Absolite",
	},
	mimighold: {
		name: "Mimighold",
		fusion: ["Mimikyu", "Gholdengo"],
		types: ["Ghost"],
		baseStats: {hp: 71, atk: 75, def: 87, spa: 91, spd: 98, spe: 90},
		abilities: {0: "Golden Boy"},
	},
	goku: {
		name: "Goku",
		fusion: ["Golurk", "Kubfu"],
		types: ["Ground", "Fighting"],
		baseStats: {hp: 75, atk: 120, def: 70, spa: 55, spd: 70, spe: 63},
		abilities: {0: "Super Saiyan"},
	},
	necromaneduskmane: {
		name: "Necro Mane-Dusk Mane",
		fusion: ["Flutter Mane", "Necrozma-Dusk-Mane"],
		types: ["Ghost", "Steel"],
		baseStats: {hp: 79, atk: 107, def: 97, spa: 127, spd: 127, spe: 107},
		abilities: {0: "Ancient Pyramid"},
	},
	necromaneultra: {
		name: "Necro Mane-Ultra",
		baseSpecies: "Necro Mane-Dusk Mane",
		forme: "Ultra",
		types: ["Ghost", "Dragon"],
		baseStats: {hp: 79, atk: 137, def: 97, spa: 137, spd: 97, spe: 159},
		abilities: {0: "Neuroforce"},
	},
	mrvolcano: {
		name: "Mr. Volcano",
		fusion: ["Mr. Mime", "Volcanion"],
		types: ["Fairy", "Fire"],
		baseStats: {hp: 60, atk: 80, def: 95, spa: 115, spd: 105, spe: 80},
		abilities: {0: "Sweaty"},
	},
	hoohilego: {
		name: "Hoohilego",
		fusion: ["Hoopa", "Nihilego"],
		types: ["Rock", "Ghost"],
		baseStats: {hp: 97, atk: 83, def: 53, spa: 139, spd: 139, spe: 89},
		abilities: {0: "Ultra Thief"},
	},
	glimmgar: {
		name: "Glimmgar",
		fusion: ["Glimmora", "Gligar"],
		types: ["Flying", "Poison"],
		baseStats: {hp: 56, atk: 55, def: 73, spa: 70, spd: 62, spe: 72},
		abilities: {0: "Debris That Are Not Toxic"},
	},
	ninebats: {
		name: "Ninebats",
		fusion: ["Ninetales", "Crobat"],
		types: ["Fire", "Poison"],
		baseStats: {hp: 79, atk: 83, def: 77, spa: 95, spd: 90, spe: 115},
		abilities: {0: "Understudy"},
	},
	wogalge: {
		name: "Wo-Galge",
		fusion: ["Wo-Chien", "Dragalge"],
		types: ["Grass", "Dragon"],
		baseStats: {hp: 85, atk: 80, def: 95, spa: 100, spd: 130, spe: 60},
		abilities: {0: "Unimpressiveness of Ruin"},
	},
	scolislash: {
		name: "Scolislash",
		fusion: ["Scolipede", "Sandslash"],
		types: ["Bug", "Ground"],
		baseStats: {hp: 70, atk: 105, def: 105, spa: 50, spd: 65, spe: 90},
		abilities: {0: "Honey Rush"},
	},
	titanswellow: {
		name: "Titanswellow",
		types: ["Ice", "Flying"],
		baseStats: {hp: 115, atk: 109, def: 62, spa: 60, spd: 52, spe: 109},
		abilities: {0: "Fat Free"},
	},
	rabsdemaru: {
		name: "Rabsdemaru",
		types: ["Bug", "Steel"],
		baseStats: {hp: 75, atk: 88, def: 74, spa: 77, spd: 86, spe: 70},
		abilities: {0: "Vapor Sync"},
	},
	naclinch: {
		name: "Naclinch",
		types: ["Ground", "Rock"],
		baseStats: {hp: 60, atk: 80, def: 75, spa: 40, spd: 60, spe: 25},
		abilities: {0: "Salt the Wound"},
	},
};
