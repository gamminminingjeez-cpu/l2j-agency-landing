// Rankings
export const mockRankings = {
  pvp: [
    { rank: 1, name: 'DragonSlayer', class: 'Gladiator', kills: 15420, deaths: 234, ratio: '98.5%' },
    { rank: 2, name: 'ShadowHunter', class: 'Abyss Walker', kills: 14230, deaths: 189, ratio: '98.7%' },
    { rank: 3, name: 'NightStalker', class: 'Phantom Ranger', kills: 12890, deaths: 156, ratio: '98.8%' },
    { rank: 4, name: 'BladeMaster', class: 'Warlord', kills: 11500, deaths: 312, ratio: '97.3%' },
    { rank: 5, name: 'MysticMage', class: 'Spellhowler', kills: 10200, deaths: 89, ratio: '99.1%' },
    { rank: 6, name: 'HolyKnight', class: 'Paladin', kills: 9800, deaths: 245, ratio: '97.6%' },
    { rank: 7, name: 'DarkAssassin', class: 'Abyss Walker', kills: 9450, deaths: 178, ratio: '98.2%' },
    { rank: 8, name: 'FireWizard', class: 'Sorcerer', kills: 8900, deaths: 134, ratio: '98.5%' },
    { rank: 9, name: 'StormBringer', class: 'Warlock', kills: 8200, deaths: 201, ratio: '97.6%' },
    { rank: 10, name: 'IronGuard', class: 'Shillien Knight', kills: 7800, deaths: 267, ratio: '96.7%' },
  ],
  pk: [
    { rank: 1, name: 'BloodLord', class: 'Destroyer', kills: 892, karma: 45000 },
    { rank: 2, name: 'ChaosBringer', class: 'Abyss Walker', kills: 756, karma: 38200 },
    { rank: 3, name: 'DeathDealer', class: 'Phantom Ranger', kills: 689, karma: 34500 },
    { rank: 4, name: 'SoulReaper', class: 'Spellhowler', kills: 623, karma: 31200 },
    { rank: 5, name: 'DarkEmperor', class: 'Shillien Elder', kills: 578, karma: 28900 },
  ],
  castles: [
    { name: 'Aden', owner: 'ClanImperial', leader: 'DragonLord', siegeDate: '2025-04-15', tax: 15, defenders: 45 },
    { name: 'Giran', owner: 'DarkLegion', leader: 'ShadowKing', siegeDate: '2025-04-22', tax: 12, defenders: 38 },
    { name: 'Dion', owner: 'ElvenGuard', leader: 'ForestLord', siegeDate: '2025-04-18', tax: 10, defenders: 32 },
    { name: 'Oren', owner: 'MysticOrder', leader: 'ArcaneMaster', siegeDate: '2025-04-25', tax: 8, defenders: 28 },
    { name: 'Gludio', owner: 'IronFist', leader: 'SteelWarrior', siegeDate: '2025-04-20', tax: 10, defenders: 30 },
  ],
  raidBosses: [
    { name: 'Antharas', status: 'Alive', respawn: '2025-04-10 20:00', level: 79, location: 'Dragon Valley' },
    { name: 'Valakas', status: 'Dead', respawn: '2025-04-12 18:00', level: 80, location: 'Forge of the Gods' },
    { name: 'Baium', status: 'Alive', respawn: '2025-04-11 22:00', level: 75, location: 'Tower of Insolence' },
    { name: 'Frintezza', status: 'Dead', respawn: '2025-04-13 19:00', level: 80, location: 'Imperial Tomb' },
    { name: 'Zaken', status: 'Alive', respawn: '2025-04-10 21:00', level: 60, location: 'Devil Isle' },
  ],
};

// Usuarios
export interface Character {
  name: string;
  class: string;
  level: number;
  pvp: number;
  pk: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  characters: Character[];
  donations: number;
  joinedDate: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'AdminTest',
    email: 'admin@test.com',
    characters: [
      { name: 'HeroMain', class: 'Paladin', level: 80, pvp: 500, pk: 10 },
      { name: 'HeroAlt', class: 'Sorcerer', level: 78, pvp: 200, pk: 0 },
    ],
    donations: 150,
    joinedDate: '2025-01-15',
  },
];

// Tienda
export interface ShopItem {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  icon: string;
}

export const mockShopItems: ShopItem[] = [
  {
    id: 1,
    name: 'Enchant Weapon Scroll',
    description: 'Aumenta el enchant de tu arma en +1. Máximo +16.',
    price: 5,
    currency: 'USD',
    category: 'enchant',
    icon: 'Sword',
  },
  {
    id: 2,
    name: 'Enchant Armor Scroll',
    description: 'Aumenta el enchant de tu armadura en +1. Máximo +16.',
    price: 3,
    currency: 'USD',
    category: 'enchant',
    icon: 'Shield',
  },
  {
    id: 3,
    name: 'Premium Account (30 días)',
    description: '+50% EXP/SP, +25% Drop Rate, acceso prioritario.',
    price: 15,
    currency: 'USD',
    category: 'premium',
    icon: 'Crown',
  },
  {
    id: 4,
    name: 'Premium Account (90 días)',
    description: '+50% EXP/SP, +25% Drop Rate, acceso prioritario.',
    price: 40,
    currency: 'USD',
    category: 'premium',
    icon: 'Crown',
  },
  {
    id: 5,
    name: 'Pack de Bienvenida',
    description: 'Incluye: Armor Set B, Weapon B, 1M Adena, Buff Scrolls.',
    price: 10,
    currency: 'USD',
    category: 'pack',
    icon: 'Gift',
  },
  {
    id: 6,
    name: 'Noblesse Tiara',
    description: 'Convierte tu personaje en Noble instantáneamente.',
    price: 25,
    currency: 'USD',
    category: 'special',
    icon: 'Gem',
  },
  {
    id: 7,
    name: 'Subclass Certificate',
    description: 'Desbloquea una subclass adicional sin completar quest.',
    price: 20,
    currency: 'USD',
    category: 'special',
    icon: 'Scroll',
  },
  {
    id: 8,
    name: 'Rename Scroll',
    description: 'Cambia el nombre de tu personaje.',
    price: 8,
    currency: 'USD',
    category: 'utility',
    icon: 'Edit',
  },
];

// Noticias
export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
}

export const mockNews: NewsItem[] = [
  {
    id: 1,
    title: 'Nueva Crónica Interlude disponible',
    excerpt: 'Descubre todas las novedades de la última actualización con nuevas zonas y items.',
    content: 'Estamos emocionados de anunciar la llegada de la Crónica Interlude...',
    date: '2025-04-05',
    author: 'Admin',
    category: 'updates',
  },
  {
    id: 2,
    title: 'Evento de Doble EXP este fin de semana',
    excerpt: 'Aprovecha el evento especial y sube de nivel el doble de rápido.',
    content: 'Durante todo el fin de semana, disfruta de doble experiencia...',
    date: '2025-04-04',
    author: 'GM_Team',
    category: 'events',
  },
  {
    id: 3,
    title: 'Nuevo sistema de Castillos implementado',
    excerpt: 'Los Castle Sieges ahora tienen nuevas mecánicas y recompensas.',
    content: 'Hemos rediseñado completamente el sistema de Castle Sieges...',
    date: '2025-04-03',
    author: 'DevTeam',
    category: 'updates',
  },
  {
    id: 4,
    title: 'Torneo PvP - Premio: 1000 USD',
    excerpt: 'Inscríbete al torneo mensual y compite por increíbles premios.',
    content: 'El torneo se llevará a cabo el próximo sábado...',
    date: '2025-04-02',
    author: 'EventManager',
    category: 'events',
  },
  {
    id: 5,
    title: 'Mantenimiento programado - 10 de Abril',
    excerpt: 'El servidor estará en mantenimiento para mejoras de rendimiento.',
    content: 'El mantenimiento está programado para las 03:00 AM...',
    date: '2025-04-01',
    author: 'Admin',
    category: 'maintenance',
  },
];

// Server Info
export const mockServerInfo = {
  name: 'L2Demo Server',
  chronicle: 'Interlude',
  rates: {
    exp: 'x50',
    sp: 'x50',
    adena: 'x30',
    drop: 'x20',
    spoil: 'x15',
    raid: 'x1',
  },
  features: [
    'Buffs hasta nivel 3 sin quest',
    'GM Shop disponible en todas las ciudades',
    'Subclass sin quest (habla con el NPC)',
    'Noblese por quest o item de donación',
    'Castle Sieges cada 2 semanas',
    'Auto-loot habilitado',
    'Offline shop system',
    'Anti-cheat protection',
    'DDoS protection',
    'Soporte 24/7',
  ],
  rules: [
    'No usar programas de terceros (bots, hacks)',
    'No realizar scam a otros jugadores',
    'Respetar a todos los miembros de la comunidad',
    'No abuse de bugs, repórtalos',
    'No spam en chat global',
  ],
  online: 1247,
  maxOnline: 5000,
  uptime: '99.9%',
  accounts: 15420,
  characters: 28950,
};

// Estadísticas
export const mockStats = {
  onlineHistory: [
    { time: '00:00', players: 800 },
    { time: '04:00', players: 400 },
    { time: '08:00', players: 600 },
    { time: '12:00', players: 1200 },
    { time: '16:00', players: 1500 },
    { time: '20:00', players: 1800 },
    { time: '23:00', players: 1247 },
  ],
  classDistribution: [
    { class: 'Fighter', count: 450, percentage: 31 },
    { class: 'Mage', count: 320, percentage: 22 },
    { class: 'Elf', count: 280, percentage: 19 },
    { class: 'Dark Elf', count: 197, percentage: 14 },
    { class: 'Orc', count: 143, percentage: 10 },
    { class: 'Dwarf', count: 60, percentage: 4 },
  ],
  levelDistribution: [
    { range: '1-20', count: 120 },
    { range: '21-40', count: 280 },
    { range: '41-60', count: 450 },
    { range: '61-75', count: 320 },
    { range: '76-80', count: 77 },
  ],
};

// Descargas
export const mockDownloads = [
  {
    name: 'Cliente Completo',
    version: 'Interlude',
    size: '3.2 GB',
    mirrors: [
      { name: 'Mega', url: '#' },
      { name: 'Google Drive', url: '#' },
      { name: 'MediaFire', url: '#' },
    ],
  },
  {
    name: 'System Folder (Update)',
    version: 'v2.5.1',
    size: '145 MB',
    mirrors: [
      { name: 'Mega', url: '#' },
      { name: 'Direct Download', url: '#' },
    ],
  },
  {
    name: 'Patch de Texturas HD',
    version: 'Optional',
    size: '890 MB',
    mirrors: [
      { name: 'Mega', url: '#' },
      { name: 'Google Drive', url: '#' },
    ],
  },
];
