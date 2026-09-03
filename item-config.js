// item-config.js
const ITEMS = [
  {
    id: "fire-sword",
    name: "Fire Sword",
    tier: 3,
    tipe: "Swords",
    image: "assets/fire-sword.png",
    attributes: [
      {
        name: "Attack",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 }
        ]
      },
      {
        name: "Attack Interval",
        levels: [
          { value: "-5%", chance: 6 },
          { value: "-6%", chance: 4 },
          { value: "-7%", chance: 2 }
        ]
      },
      {
        name: "Burning",
        hasChanceCol: true,
        levels: [
          { value: "+11", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+12", chanceAmt: 6, chanceChc: 4, enchant: 4 },
          { value: "+13", chanceAmt: 7, chanceChc: 2, enchant: 2 }
        ]
      },
      {
        name: "Defense",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 }
        ]
      },
      {
        name: "Double Bash",
        levels: [
          { value: "+5%", chance: 6 },
          { value: "+6%", chance: 4 },
          { value: "+7%", chance: 2 }
        ]
      },
      {
        name: "Life Leech",
        hasChanceCol: true,
        levels: [
          { value: "+5%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+7%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+9%", chanceAmt: 15, chanceChc: 2, enchant: 2 }
        ]
      },
      {
        name: "Sword Fighting",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 }
        ]
      }
    ]
  },
  {
    id: "bright-sword",
    name: "Bright Sword",
    tier: 3,
    tipe: "Swords",
    image: "assets/bright-sword.png",
    attributes: [
      {
        name: "Attack",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 }
        ]
      },
      {
        name: "Attack Interval",
        levels: [
          { value: "-5%", chance: 6 },
          { value: "-6%", chance: 4 },
          { value: "-7%", chance: 2 }
        ]
      },
      {
        name: "Defense",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 }
        ]
      },
      {
        name: "Double Bash",
        levels: [
          { value: "+5%", chance: 6 },
          { value: "+6%", chance: 4 },
          { value: "+7%", chance: 2 }
        ]
      },
      {
        name: "Life Leech",
        hasChanceCol: true,
        levels: [
          { value: "+5%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+7%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+9%", chanceAmt: 15, chanceChc: 2, enchant: 2 }
        ]
      },
      {
        name: "Sword Fighting",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 }
        ]
      }
    ]
  },
  {
    id: "djinn-blade",
    name: "Djinn Blade",
    tier: 3,
    tipe: "Swords",
    image: "assets/djinn-blade.png",
    attributes: [
      {
        name: "Attack",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 }
        ]
      },
      {
        name: "Attack Interval",
        levels: [
          { value: "-5%", chance: 6 },
          { value: "-6%", chance: 4 },
          { value: "-7%", chance: 2 }
        ]
      },
      {
        name: "Defense",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 }
        ]
      },
      {
        name: "Double Bash",
        levels: [
          { value: "+5%", chance: 6 },
          { value: "+6%", chance: 4 },
          { value: "+7%", chance: 2 }
        ]
      },
      {
        name: "Life Leech",
        hasChanceCol: true,
        levels: [
          { value: "+5%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+7%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+9%", chanceAmt: 15, chanceChc: 2, enchant: 2 }
        ]
      },
      {
        name: "Sword Fighting",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 }
        ]
      }
    ]
  },
  {
    id: "giant-sword",
    name: "Giant Sword",
    tier: 3,
    tipe: "Swords",
    image: "assets/giant-sword.png",
    attributes: [
      {
        name: "Attack",
        levels: [
          { value: "+2", chance: 10 },
          { value: "+4", chance: 8 },
          { value: "+6", chance: 6 }
        ]
      },
      {
        name: "Critical Hit",
        hasChanceCol: true,
        levels: [
          { value: "+20%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+40%", chanceAmt: 6, chanceChc: 4, enchant: 4 },
          { value: "+60%", chanceAmt: 7, chanceChc: 2, enchant: 2 }
        ]
      },
      {
        name: "Defense",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 }
        ]
      },
      {
        name: "Life Leech",
        hasChanceCol: true,
        levels: [
          { value: "+5%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+7%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+9%", chanceAmt: 15, chanceChc: 2, enchant: 2 }
        ]
      },
      {
        name: "Sword Fighting",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 }
        ]
      },
      {
        name: "Weight",
        levels: [
          { value: "-25%", chance: 10 },
          { value: "-40%", chance: 8 },
          { value: "-55%", chance: 6 }
        ]
      }
    ]
  },
  {
    id: "frozen-slayer",
    name: "Frozen Slayer",
    tier: 3,
    tipe: "Swords",
    image: "assets/frozen-slayer.png",
    attributes: [
      {
        name: "Attack",
        levels: [
          { value: "+2", chance: 10 },
          { value: "+4", chance: 8 },
          { value: "+6", chance: 6 }
        ]
      },
      {
        name: "Critical Hit",
        hasChanceCol: true,
        levels: [
          { value: "+20%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+40%", chanceAmt: 6, chanceChc: 4, enchant: 4 },
          { value: "+60%", chanceAmt: 7, chanceChc: 2, enchant: 2 }
        ]
      },
      {
        name: "Defense",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 }
        ]
      },
      {
        name: "Life Leech",
        hasChanceCol: true,
        levels: [
          { value: "+5%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+7%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+9%", chanceAmt: 15, chanceChc: 2, enchant: 2 }
        ]
      },
      {
        name: "Sword Fighting",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 }
        ]
      },
      {
        name: "Weight",
        levels: [
          { value: "-25%", chance: 10 },
          { value: "-40%", chance: 8 },
          { value: "-55%", chance: 6 }
        ]
      }
    ]
  },
  {
    id: "pharaoh-sword",
    name: "Pharaoh Sword",
    tier: 4,
    tipe: "Swords",
    image: "assets/pharaoh-sword.png",
    attributes: [
      {
        name: "Attack",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 },
          { value: "+4", chance: 4 }
        ]
      },
      {
        name: "Attack Interval",
        levels: [
          { value: "-5%", chance: 6 },
          { value: "-6%", chance: 4 },
          { value: "-7%", chance: 2 },
          { value: "-8%", chance: 1 }
        ]
      },
      {
        name: "Defense",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 },
          { value: "+4", chance: 4 }
        ]
      },
      {
        name: "Double Bash",
        levels: [
          { value: "+5%", chance: 6 },
          { value: "+6%", chance: 4 },
          { value: "+7%", chance: 2 },
          { value: "+8%", chance: 1 }
        ]
      },
      {
        name: "Life Leech",
        hasChanceCol: true,
        levels: [
          { value: "+5%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+7%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+9%", chanceAmt: 15, chanceChc: 2, enchant: 2 },
          { value: "+11%", chanceAmt: 20, chanceChc: 1, enchant: 1 }
        ]
      },
      {
        name: "Sword Fighting",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 },
          { value: "+4", chance: 2 }
        ]
      }
    ]
  },
  {
    id: "warlord-sword",
    name: "Warlord Sword",
    tier: 4,
    tipe: "Swords",
    image: "assets/warlord-sword.png",
    attributes: [
      {
        name: "Attack",
        levels: [
          { value: "+2", chance: 10 },
          { value: "+4", chance: 8 },
          { value: "+6", chance: 6 },
          { value: "+8", chance: 4 }
        ]
      },
      {
        name: "Critical Hit",
        hasChanceCol: true,
        levels: [
          { value: "+20%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+40%", chanceAmt: 6, chanceChc: 4, enchant: 4 },
          { value: "+60%", chanceAmt: 7, chanceChc: 2, enchant: 2 },
          { value: "+80%", chanceAmt: 8, chanceChc: 1, enchant: 1 }
        ]
      },
      {
        name: "Defense",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 },
          { value: "+4", chance: 4 }
        ]
      },
      {
        name: "Life Leech",
        hasChanceCol: true,
        levels: [
          { value: "+5%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+7%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+9%", chanceAmt: 15, chanceChc: 2, enchant: 2 },
          { value: "+11%", chanceAmt: 20, chanceChc: 1, enchant: 1 }
        ]
      },
      {
        name: "Sword Fighting",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 },
          { value: "+4", chance: 2 }
        ]
      },
      {
        name: "Weight",
        levels: [
          { value: "-25%", chance: 10 },
          { value: "-40%", chance: 8 },
          { value: "-55%", chance: 6 },
          { value: "-70%", chance: 4 }
        ]
      }
    ]
  },
  {
    id: "magic-longsword",
    name: "Magic Longsword",
    tier: 5,
    tipe: "Swords",
    image: "assets/magic-longsword.png",
    attributes: [
      {
        name: "Attack",
        levels: [
          { value: "+2", chance: 10 },
          { value: "+4", chance: 8 },
          { value: "+6", chance: 6 },
          { value: "+8", chance: 4 },
          { value: "+10", chance: 2 }
        ]
      },
      {
        name: "Critical Hit",
        hasChanceCol: true,
        levels: [
          { value: "+20%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+40%", chanceAmt: 6, chanceChc: 4, enchant: 4 },
          { value: "+60%", chanceAmt: 7, chanceChc: 2, enchant: 2 },
          { value: "+80%", chanceAmt: 8, chanceChc: 1, enchant: 1 },
          { value: "+100%", chanceAmt: 9, chanceChc: 0.5, enchant: 0.5 }
        ]
      },
      {
        name: "Critical Spell",
        hasChanceCol: true,
        levels: [
          { value: "+20%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+40%", chanceAmt: 6, chanceChc: 4, enchant: 4 },
          { value: "+60%", chanceAmt: 7, chanceChc: 2, enchant: 2 },
          { value: "+80%", chanceAmt: 8, chanceChc: 1, enchant: 1 },
          { value: "+100%", chanceAmt: 9, chanceChc: 0.5, enchant: 0.5 }
        ]
      },
      {
        name: "Defense",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 },
          { value: "+4", chance: 4 },
          { value: "+5", chance: 2 }
        ]
      },
      {
        name: "Life Leech",
        hasChanceCol: true,
        levels: [
          { value: "+5%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+7%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+9%", chanceAmt: 15, chanceChc: 2, enchant: 2 },
          { value: "+11%", chanceAmt: 20, chanceChc: 1, enchant: 1 },
          { value: "+13%", chanceAmt: 25, chanceChc: 0.5, enchant: 0.5 }
        ]
      },
      {
        name: "Magic Level",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 },
          { value: "+4", chance: 2 },
          { value: "+5", chance: 1 }
        ]
      },
      {
        name: "Mana Leech",
        hasChanceCol: true,
        levels: [
          { value: "+3%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+4%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+5%", chanceAmt: 15, chanceChc: 2, enchant: 2 },
          { value: "+6%", chanceAmt: 20, chanceChc: 1, enchant: 1 },
          { value: "+7%", chanceAmt: 25, chanceChc: 0.5, enchant: 0.5 }
        ]
      },
      {
        name: "Perforation",
        levels: [
          { value: "+8%", chance: 10 },
          { value: "+12%", chance: 8 },
          { value: "+16%", chance: 6 },
          { value: "+20%", chance: 4 },
          { value: "+24%", chance: 2 }
        ]
      },
      {
        name: "Sword Fighting",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 },
          { value: "+4", chance: 2 },
          { value: "+5", chance: 1 }
        ]
      },
      {
        name: "Weight",
        levels: [
          { value: "-25%", chance: 10 },
          { value: "-40%", chance: 8 },
          { value: "-55%", chance: 6 },
          { value: "-70%", chance: 4 },
          { value: "-85%", chance: 2 }
        ]
      }
    ]
  },
  {
    id: "magic-sword",
    name: "Magic Sword",
    tier: 5,
    tipe: "Swords",
    image: "assets/magic-sword.png",
    attributes: [
      {
        name: "Attack",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 },
          { value: "+4", chance: 4 },
          { value: "+5", chance: 2 }
        ]
      },
      {
        name: "Attack Interval",
        levels: [
          { value: "-5%", chance: 6 },
          { value: "-6%", chance: 4 },
          { value: "-7%", chance: 2 },
          { value: "-8%", chance: 1 },
          { value: "-9%", chance: 0.5 }
        ]
      },
      {
        name: "Defense",
        levels: [
          { value: "+1", chance: 10 },
          { value: "+2", chance: 8 },
          { value: "+3", chance: 6 },
          { value: "+4", chance: 4 },
          { value: "+5", chance: 2 }
        ]
      },
      {
        name: "Double Bash",
        levels: [
          { value: "+5%", chance: 6 },
          { value: "+6%", chance: 4 },
          { value: "+7%", chance: 2 },
          { value: "+8%", chance: 1 },
          { value: "+9%", chance: 0.5 }
        ]
      },
      {
        name: "Life Leech",
        hasChanceCol: true,
        levels: [
          { value: "+5%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+7%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+9%", chanceAmt: 15, chanceChc: 2, enchant: 2 },
          { value: "+11%", chanceAmt: 20, chanceChc: 1, enchant: 1 },
          { value: "+13%", chanceAmt: 25, chanceChc: 0.5, enchant: 0.5 }
        ]
      },
      {
        name: "Magic Level",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 },
          { value: "+4", chance: 2 },
          { value: "+5", chance: 1 }
        ]
      },
      {
        name: "Mana Leech",
        hasChanceCol: true,
        levels: [
          { value: "+3%", chanceAmt: 5, chanceChc: 6, enchant: 6 },
          { value: "+4%", chanceAmt: 10, chanceChc: 4, enchant: 4 },
          { value: "+5%", chanceAmt: 15, chanceChc: 2, enchant: 2 },
          { value: "+6%", chanceAmt: 20, chanceChc: 1, enchant: 1 },
          { value: "+7%", chanceAmt: 25, chanceChc: 0.5, enchant: 0.5 }
        ]
      },
      {
        name: "Sword Fighting",
        levels: [
          { value: "+1", chance: 8 },
          { value: "+2", chance: 6 },
          { value: "+3", chance: 4 },
          { value: "+4", chance: 2 },
          { value: "+5", chance: 1 }
        ]
      }
    ]
  }
];

// Garante que o array fique ordenado por tier
ITEMS.sort((b, a) => a.tier - b.tier);