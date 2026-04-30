(() => {
  const LEVEL_XP_BASE = 100;
  const LEVEL_XP_GROWTH_FACTOR = 1.75;

  const upgradePool = [
    {id: 'swift-legs', title: 'Swift Legs', desc: '+10% movement speed'},
    {id: 'iron-stomach', title: 'Iron Stomach', desc: '+20% graze efficiency'},
    {id: 'tough-hide', title: 'Tough Hide', desc: '+15% survivability'},
    {id: 'keen-eyes', title: 'Keen Eyes', desc: '+15% range awareness'},
    {id: 'forager', title: 'Forager', desc: '+10% XP from trees'}
  ];

  function nextLevelXp(level) {
    return Math.floor(LEVEL_XP_BASE * Math.pow(LEVEL_XP_GROWTH_FACTOR, Math.max(0, level - 1)));
  }

  window.PROGRESSION = {
    LEVEL_XP_BASE,
    LEVEL_XP_GROWTH_FACTOR,
    upgradePool,
    nextLevelXp
  };
})();
