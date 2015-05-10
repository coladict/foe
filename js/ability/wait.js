/*
 * 
 * Wait
 * 
 */
//TODO REPLACE
Abilities.Wait = new Ability();
Abilities.Wait.name = "Wait";
Abilities.Wait.Short = function() { return "Wait a while."; }
Abilities.Wait.targetMode = TargetMode.Self;
Abilities.Wait.CastInternal = function(encounter, caster) {
	// TODO: Make more flavor text	
	Text.Add("[name] does nothing!", {name: caster.name});
	Text.NL();
	
	for(var i = 0; i < encounter.combatOrder.length; i++) {
		if(encounter.combatOrder[i].entity == caster)
			encounter.combatOrder[i].initiative += 50;
	}
	
	Text.Flush();
	Gui.NextPrompt(function() {
		encounter.CombatTick();
	});
}
