export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ["Cerra OU", "Cerra NFE"],
	},

	init() {
		//for removing moves from inherited mons if needed
		//delete this.modData('Learnsets', 'milcery').learnset.acidarmor;
	},
};
