(() => {
  const LEVEL_XP_BASE = 100;
  const LEVEL_XP_GROWTH_FACTOR = 1.75;

  const UPGRADE_PATHS = [
    {
      id: 'long-horse',
      name: 'Long Horse',
      effectText: 'Increase neck length by 30cm',
      perLevel: 30,
      unit: 'cm',
      maxLevel: 5
    },
    {
      id: 'molar-master',
      name: 'Molar Master',
      effectText: 'Increase bite damage 30%',
      perLevel: 30,
      unit: '%',
      maxLevel: 5
    },
    {
      id: 'leg-day',
      name: 'Leg Day',
      effectText: 'Increase movement speed 5%',
      perLevel: 5,
      unit: '%',
      maxLevel: 5
    },
    {
      id: 'crits-r-us',
      name: 'Crits R Us',
      effectText: 'Increase probability of critical bite by 2%',
      perLevel: 2,
      unit: '%',
      maxLevel: 5
    },
    {
      id: 'use-ur-noodle',
      name: 'Use Ur Noodle',
      effectText: 'Gain 10% more XP from foraging',
      perLevel: 10,
      unit: '%',
      maxLevel: 5
    },
    {
      id: 'quad-stomachs',
      name: 'Quad Stomachs',
      effectText: 'Build rumen 25% faster',
      perLevel: 25,
      unit: '%',
      maxLevel: 2
    },
    {
      id: 'bungulate',
      name: 'Bungulate',
      effectText: 'Ruminate bonus time doubled',
      perLevel: 100,
      unit: '%',
      maxLevel: 1,
      unlockWhen: (levels) => (levels['quad-stomachs'] || 0) >= 2 && (levels['leg-day'] || 0) >= 3
    },
    {
      id: 'lamarckable-effort',
      name: 'Lamarckable Effort',
      effectText: 'Level ups draw 5 cards and let you choose 2',
      perLevel: 1,
      unit: 'x',
      maxLevel: 1,
      unlockWhen: (levels) => (levels['use-ur-noodle'] || 0) >= 3 && (levels['leg-day'] || 0) >= 3
    },
    {
      id: 'herbimore',
      name: 'HerbiMore',
      effectText: 'Diet no longer limited to trees',
      perLevel: 100,
      unit: '%',
      maxLevel: 1,
      unlockWhen: (levels) => (levels['quad-stomachs'] || 0) >= 2 && (levels['long-horse'] || 0) >= 3
    },
  ];

  function nextLevelXp(level) {
    return Math.floor(LEVEL_XP_BASE * Math.pow(LEVEL_XP_GROWTH_FACTOR, Math.max(0, level - 1)));
  }

  function romanNumeral(n) {
    const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    return numerals[n - 1] || String(n);
  }

  function nextUpgradeCards(playerUpgradeLevels = {}) {
    return UPGRADE_PATHS
      .filter((path) => {
        const currentLevel = playerUpgradeLevels[path.id] || 0;
        const passesLevelCap = !path.maxLevel || currentLevel < path.maxLevel;
        const passesUnlock = !path.unlockWhen || path.unlockWhen(playerUpgradeLevels);
        return passesLevelCap && passesUnlock;
      })
      .map((path) => {
      const currentLevel = playerUpgradeLevels[path.id] || 0;
      const nextLevel = currentLevel + 1;
      const totalValue = path.perLevel * nextLevel;
      return {
        id: `${path.id}-${nextLevel}`,
        pathId: path.id,
        level: nextLevel,
        title: `${path.name} ${romanNumeral(nextLevel)}`,
        desc: `${path.effectText} (${path.unit === 'cm' ? '+' : '+'}${path.perLevel}${path.unit} per level, ${path.unit === 'cm' ? '+' : '+'}${totalValue}${path.unit} total)`
      };
    });
  }

  window.PROGRESSION = {
    LEVEL_XP_BASE,
    LEVEL_XP_GROWTH_FACTOR,
    nextLevelXp,
    nextUpgradeCards
  };
})();
