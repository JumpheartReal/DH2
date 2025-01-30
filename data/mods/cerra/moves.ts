export const Moves: { [moveid: string]: ModdedMoveData } = {
	lastrespects: {
		inherit: true,
		basePower: 45,
		basePowerCallback(pokemon, target, move) {
			return 45 + 15 * pokemon.side.totalFainted;
		},
	},
	meteorassault: {
		inherit: true,
		self: null,
		onHit(target, source) {
			if (!target || target.fainted || target.hp <= 0) return null;
			source.addVolatile('mustrecharge', source);
		},
	}

	jumpstart: {
		num: -1000,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Jumpstart",
		pp: 30,
		priority: 1,
		flags: { protect: 1, mirror: 1, metronome: 1, contact: 1},
		secondary: null,
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Thunderbolt', target);
		},
		target: "normal",
		type: "Electric",
		contestType: "Clever",
		shortDesc: "Usually goes first.",

	},
	crystallights: {
		num: -1001,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Crystal Lights",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		basePowerCallback(pokemon, target, move) {
			if (pokemon.hp * 2 <= pokemon.maxhp) {
				this.debug("crystal lights BP doubled");
				return move.basePower * 2;
			}
			return move.basePower;
		},
		secondary: {
			chance: 10,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
		shortDesc: "10% to lower opp acc. Under 50% HP, 2x BP."
	},
	rawcouscall: {
		num: -1002,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		name: "Rawcous Call",
		pp: 30,
		priority: 0,
		flags: {sound: 1, protect: 1, mirror: 1, metronome: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Clever",
		shortDesc: "Hits 2-5 times.",
	},
	brassyslide: {
		num: -1003,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		name: "Brassy Slide",
		pp: 20,
		priority: 0,
		flags: {sound: 1, protect: 1, mirror: 1, metronome: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		shortDesc: "Hits 2-5 times.",
	},
	smokeout: {
		num: -1004,
		accuracy: true,
		basePower: 85,
		category: "Special",
		name: "Smoke Out",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 100,
			boosts: {
				evasion: -1
			},
		},
		target: "normal",
		type: "Fire",
	},
	colorsplash: {
		num: -1005,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Color Splash",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onTryImmunity(target) {
			// Truant and Insomnia have special treatment; they fail before
			// checking accuracy and will double Stomping Tantrum's BP
			if (target.ability === 'truant' || target.ability === 'insomnia') {
				return false;
			}
		},
		onTryHit(target) {
			if (target.getAbility().flags['cantsuppress']) {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('colorchange');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Color Change', '[from] move: Color Splash');
				return;
			}
			return oldAbility as false | null;
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cute",
	},
	whetstone: {
		num: -1006,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Whetstone",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		volatileStatus: 'whetstone',
		condition: {
			onStart(target, source, effect) {
				this.add('-start', target, 'move: Whetstone');
			},
			onHit(target, source, move) {
				this.boost({atk: -1}, source, target, this.dex.getActiveMove("Whetstone"));
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
		contestType: "Cool",
	},
	prophecize: {
		num: -1007,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Prophecize",
		pp: 10,
		priority: 0,
		flags: {allyanim: 1, metronome: 1, futuremove: 1},
		ignoreImmunity: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'futuresight',
				source: source,
				moveData: {
					id: 'futuresight',
					name: "Prophecize",
					accuracy: 100,
					basePower: 120,
					category: "Special",
					priority: 0,
					flags: {allyanim: 1, metronome: 1, futuremove: 1},
					ignoreImmunity: false,
					effectType: 'Move',
					type: 'Dark',
				},
			});
			this.add('-start', source, 'move: Prophecize');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
}
