export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ["PMCM"],
	},

	init() {
		this.modData('Learnsets', 'lurantis').learnset.icehammer = ['9L1'];

		this.modData('Learnsets', 'ironcrown').learnset.kingsshield = ['9L1'];
		this.modData('Learnsets', 'ironcrown').learnset.bodypress = ['9L1'];

		this.modData('Learnsets', 'carbink').learnset.moonlight = ['9L1'];
		this.modData('Learnsets', 'carbink').learnset.voltswitch = ['9L1'];
		this.modData('Learnsets', 'carbink').learnset.spikes = ['9L1'];

		this.modData('Learnsets', 'moltres').learnset.woodhammer = ['9L1'];
		this.modData('Learnsets', 'moltres').learnset.wavecrash = ['9L1'];
		this.modData('Learnsets', 'moltres').learnset.defog = ['9L1'];

	},
};
