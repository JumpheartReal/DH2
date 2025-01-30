export const Abilities: { [abilityid: string]: ModdedAbilityData } = {
	generator: {
		name: "Generator",
		shortDesc: "Start at 0.75x power, gain 0.25x per attack used by or against. Max 1.5.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Generator');
			this.add('-message', `${pokemon.name} is revving up!`);
			pokemon.addVolatile('generator');
		},
		condition: {
			onStart(pokemon) {
				this.effectState.generatorTriggers = 0;
			},
			onDamagingHit(damage, target, source, move) {
				if (this.effectState.generatorTriggers < 3) {
					this.effectState.generatorTriggers++;
					this.add('-ability', target, 'Generator');
					this.add('-message', `${target.name} is at charge level ${this.effectState.generatorTriggers}!`);
				}
			},
			onSourceDamagingHit(damage, target, source, move) {
				if (this.effectState.generatorTriggers < 3) {
					this.effectState.generatorTriggers++;
					this.add('-ability', source, 'Generator');
					this.add('-message', `${source.name} is at charge level ${this.effectState.generatorTriggers}!`);
				}
			},
			onBasePowerPriority: 21,
			onBasePower(basePower, attacker, defender, move) {
				return this.chainModify([this.effectState.generatorTriggers + 3, 4]);
				//if (this.effectState.generatorTriggers === 0) return this.chainModify([3, 4]);
				//if (this.effectState.generatorTriggers === 1) return this.chainModify([4, 4]);
				//if (this.effectState.generatorTriggers === 2) return this.chainModify([5, 4]);
				//if (this.effectState.generatorTriggers === 3) return this.chainModify([6, 4]);
			},
		},
		flags: { breakable: 1 },
	},
	
	scavenge: {
		name: "Scavenge",
		shortDesc: "On item loss, recycle at end of next turn.",
		onAfterUseItem(item, pokemon) {
			if (pokemon !== this.effectState.target) return;
			if (item.id === 'leppaberry') {
				this.hint("Nice try!");
				return;
			}
			pokemon.addVolatile('scavenge');
			this.effectState.lastItem = item;
		},
		onTakeItem(item, pokemon) {
			pokemon.addVolatile('scavenge');
			this.effectState.lastItem = item;
		},
		condition: {
			noCopy: true,
			duration: 2,
			onEnd(pokemon) {
				if (this.effectState.lastItem) {
					const item = this.effectState.lastItem;
					this.effectState.lastItem = '';
					this.add('-item', pokemon, this.dex.items.get(item), '[from] ability: Scavenge');
					pokemon.setItem(item);
				}
			},
		},
	},
	royalguard: {
		name: "Royal Guard",
		shortDesc: "The first time this Pokemon switches in, it tries to use Substitute.",
		onStart(pokemon){
			if (pokemon.guard) return;
			pokemon.guard = true;
			this.queue.prioritizeAction(this.queue.resolveAction({
				choice: 'move',
				pokemon: pokemon,
				moveid: 'substitute',
				targetLoc: 'self',
			})[0] as MoveAction)
		},
	},
	nightvision: {
		name: "Night Vision",
		shortDesc: "This Pokemon gets +1 accuracy on switch-in.",
		onStart(pokemon) {
			this.boost({accuracy: 1}, pokemon);
		},
	},
	goodnutrition: {
		name: "Good Nutrition",
		shortDesc: "Doubles the user's special attack stat.",
		onModifySpaPriority: 5,
		onModifySpa(spa) {
			return this.chainModify(2);
		},
	},
	airdominance: {
		name: "Air Dominance",
		shortDesc: "User's Flying-type attacks deal 20% more damage to opposing Flying-types."
		onBasePowerPriority: 24,
		onBasePower(basePower, attacker, defender, move) {
			if (defender.hasType('Flying')) {
				this.debug('air dominance boost');
				return this.chainModify(1.2);
			}
		}
	},
	
	
};
