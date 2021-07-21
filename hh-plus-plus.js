// ==UserScript==
// @name			Hentai Heroes++ Harem Information
// @description		HH++ but only the Harem Information module
// @version			0.0.1
// @match			https://www.hentaiheroes.com/*
// @match			https://nutaku.haremheroes.com/*
// @match			https://eroges.hentaiheroes.com/*
// @match			https://thrix.hentaiheroes.com/*
// @match			https://www.gayharem.com/*
// @match			https://nutaku.gayharem.com/*
// @match			https://www.comixharem.com/*
// @match			https://nutaku.comixharem.com/*
// @run-at			document-end
// @grant			none
// @author			Raphael, 1121, Sluimerstand, shal, Tom208, test_anon
// ==/UserScript==

/*	===========
	 CHANGELOG
	=========== */

// 0.0.1 Extracting only the harem info module from HH++


/* =========
	GENERAL
   ========= */

// Define jQuery
var $ = window.jQuery;

// Define CSS
var sheet = (function() {
    var style = document.createElement('style');
    document.head.appendChild(style);
    return style.sheet;
})();

var CurrentPage = window.location.pathname;

// Numbers: thousand spacing
function nThousand(x) {
    if (typeof x != 'number') {
        x = 0;
    }
    return x.toLocaleString();
}


/* ==============
	TRANSLATIONS
   ============== */

var lang = 'en';

if ($('html')[0].lang === 'en') {
    lang = 'en';
}
else if ($('html')[0].lang === 'fr') {
    lang = 'fr';
}
else if ($('html')[0].lang === 'es_ES') {
    lang = 'es';
}
else if ($('html')[0].lang === 'it_IT') {
    lang = 'it';
}
else if ($('html')[0].lang === 'de_DE') {
    lang = 'de';
}

var texts = [];

texts.en = {
    and: 'and',
    or: 'or',
    affection: 'affection',
    harem_stats: 'Harem Stats',
    haremettes: 'haremettes',
    hardcore: 'Hardcore',
    charm: 'Charm',
    know_how: 'Know-how',
    harem_level: 'harem level',
    to_go: 'to go',
    unlocked_scenes: 'scenes unlocked',
    money_income: 'Money income',
    per_hour: 'per hour',
    when_all_collectable: 'when all collectable',
    required_to_unlock: 'Required to upgrade all haremettes',
    required_to_get_max_level: 'Required to level all haremettes',
    my_stocks: 'My stock',
    equipments: 'equipments',
    boosters: 'boosters',
    books: 'books',
    gifts: 'gifts',
    currently_buyable: 'Currently buyable stock',
    visit_the: 'Visit the <a href="../shop.html">Market</a> first.',
    not_compatible: 'Your webbrowser is not compatible.',
    or_level: 'or level',
    restock: 'Restock',
    wiki: '\'s wiki page',
    evolution_costs: 'Upgrade costs are',
    Xp: 'XP',
    common: 'Common',
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary',
    mythic: 'Mythic'
};

texts.fr = {
    and: 'et',
    or: 'ou',
    affection: 'affection',
    harem_stats: 'Stats du harem',
    haremettes: 'haremettes',
    hardcore: 'Hardcore',
    charm: 'Charme',
    know_how: 'Savoir-faire',
    harem_level: 'niveau de harem',
    to_go: 'restant',
    unlocked_scenes: 'scènes débloquées',
    money_income: 'Revenus',
    per_hour: 'par heure',
    when_all_collectable: 'quand tout est disponible',
    required_to_unlock: 'Requis pour débloquer la scène',
    required_to_get_max_level: 'Requis pour obtenir toutes les filles au niveau maximum',
    my_stocks: 'Mes stocks',
    equipments: 'équipements',
    boosters: 'boosters',
    books: 'livres',
    gifts: 'cadeaux',
    currently_buyable: 'Stock disponible au marché',
    visit_the: 'Visite le <a href="../shop.html">marché</a> first.',
    not_compatible: 'Votre navigateur n\'est pas compatible.',
    or_level: 'ou niveau',
    restock: 'Restock',
    wiki: 'Page wiki de ',
    evolution_costs: 'Ses couts d\'évolution sont',
    Xp: 'XP',
    common: 'Commun',
    rare: 'Rare',
    epic: 'Épique',
    legendary: 'Légendaire',
    mythic: 'Mythique'
};

texts.es = {
    and: 'y',
    or: 'o',
    affection: 'afecto',
    harem_stats: 'Estatus del Harén',
    haremettes: 'haremettes',
    hardcore: 'Folladas',
    charm: 'Encanto',
    know_how: 'Saber-hacer',
    harem_level: 'nivel de harén',
    to_go: 'restante',
    unlocked_scenes: 'escenas desbloqueadas',
    money_income: 'Ingreso de dinero',
    per_hour: 'por hora',
    when_all_collectable: 'cuando todo es coleccionable',
    required_to_unlock: 'Requerido para desbloquear todas las escenas bloqueadas',
    required_to_get_max_level: 'Requerido para obtener el máximo nivel de todas las chicas',
    my_stocks: 'Mi Stock',
    equipments: 'equipamiento',
    boosters: 'potenciadores',
    books: 'libros',
    gifts: 'regalos',
    currently_buyable: 'Stocks Comprables Actualmente',
    visit_the: 'Visita el <a href="../shop.html">Mercado</a> primero.',
    not_compatible: 'Tu navegador no es compatible.',
    or_level: 'o nivel',
    restock: 'Restock',
    wiki: ' wiki',
    evolution_costs: 'Sus costo de evolucion son',
    Xp: 'XP',
    common: 'Común',
    rare: 'Raro',
    epic: 'Épico',
    legendary: 'Legendario',
    mythic: 'Mítica',
};

texts.it = {
    and: 'e',
    or: 'o',
    affection: 'affetto',
    harem_stats: 'Stato dell Harem',
    haremettes: 'ragazze dell harem',
    hardcore: 'Prono',
    charm: 'Fascino',
    know_how: 'Competenza',
    harem_level: 'livello harem',
    to_go: 'mancanti',
    unlocked_scenes: 'scene sbloccate',
    money_income: 'Guadagni',
    per_hour: 'orario',
    when_all_collectable: 'quando si può raccogliere tutto',
    required_to_unlock: 'Necessario per sbloccare tutte le scene',
    required_to_get_max_level: 'Necessario per livellare tutte le ragazze',
    my_stocks: 'Mio inventario',
    equipments: 'equipaggiamento',
    boosters: 'potenziamenti',
    books: 'libri',
    gifts: 'regali',
    currently_buyable: 'Correntemente acquistabili',
    visit_the: 'Visita il <a href="../shop.html">negozio</a> prima.',
    not_compatible: 'Il tuo browser non è compatibile.',
    or_level: 'o livello',
    restock: 'Rifornimento',
    wiki: ' -> wiki',
    evolution_costs: 'Il costo del potenziamento è',
    Xp: 'XP',
    common: 'Comuni',
    rare: 'Rare',
    epic: 'Epiche',
    legendary: 'Leggendarie',
    mythic: 'Mitica',
};

texts.de = {
    and: 'und',
    or: 'oder',
    affection: 'Zuneigung',
    harem_stats: 'Harem-Statistiken',
    haremettes: 'Harem-Mädchen',
    hardcore: 'Hardcore',
    charm: 'Charme',
    know_how: 'Wissen',
    harem_level: 'Harem-Level',
    to_go: 'übrig',
    unlocked_scenes: 'Szenen freigeschaltet',
    money_income: 'Einkommen',
    per_hour: 'pro Stunde',
    when_all_collectable: 'wenn komplett einsammelbar',
    required_to_unlock: 'Erforderlich für alle Mädchen-Upgrades',
    required_to_get_max_level: 'Erforderlich für maximale Mädchen-Level',
    my_stocks: 'Meine Bestände',
    equipments: 'Ausrüstungen',
    boosters: 'Booster',
    books: 'Bücher',
    gifts: 'Geschenke',
    currently_buyable: 'Aktuelle Bestände am Marktplatz',
    visit_the: 'Besuche zuerst den <a href="../shop.html">Marktplatz</a>.',
    not_compatible: 'Dein Browser ist nicht kompatibel.',
    or_level: 'oder Level',
    restock: 'neue Angebote',
    wiki: '-Wikiseite',
    evolution_costs: 'Die Upgradekosten betragen',
    Xp: 'XP',
    common: 'Gemeinsame',
    rare: 'Seltene',
    epic: 'Epische',
    legendary: 'Legendäre',
    mythic: 'Mythische'
};

var GIRLS_EXP_LEVELS = [];

GIRLS_EXP_LEVELS.starting = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109, 120, 131, 142, 154, 166, 178, 190, 202, 214, 226, 238, 250, 262, 274, 286, 299, 312, 325, 338, 351, 364, 377, 390, 403, 416, 429, 443, 457, 471, 485, 499, 513, 527, 541, 555, 569, 584, 599, 614, 629, 644, 659, 674, 689, 704, 720, 736, 752, 768, 784, 800, 816, 832, 849, 866, 883, 900, 917, 934, 951, 968, 985, 1003, 1021, 1039, 1057, 1075, 1093, 1111, 1130, 1149, 1168, 1187, 1206, 1225, 1244, 1264, 1284, 1304, 1324, 1344, 1364, 1384, 1405, 1426, 1447, 1468, 1489, 1510, 1531, 1553, 1575, 1597, 1619, 1641, 1663, 1686, 1709, 1732, 1755, 1778, 1801, 1825, 1849, 1873, 1897, 1921, 1945, 1970, 1995, 2020, 2045, 2070, 2096, 2122, 2148, 2174, 2200, 2227, 2254, 2281, 2308, 2335, 2363, 2391, 2419, 2447, 2475, 2504, 2533, 2562, 2591, 2620, 2650, 2680, 2710, 2740, 2770, 2801, 2832, 2863, 2894, 2926, 2958, 2990, 3022, 3055, 3088, 3121, 3154, 3188, 3222, 3256, 3290, 3325, 3360, 3395, 3430, 3466, 3502, 3538, 3574, 3611, 3648, 3685, 3722, 3760, 3798, 3836, 3875, 3914, 3953, 3992, 4032, 4072, 4112, 4153, 4194, 4235, 4277, 4319, 4361, 4403, 4446, 4489, 4532, 4576, 4620, 4664, 4709, 4754, 4799, 4845, 4891, 4937, 4984, 5031, 5078, 5126, 5174, 5223, 5272, 5321, 5371, 5421, 5471, 5522, 5573, 5624, 5676, 5728, 5781, 5834, 5887, 5941, 5995, 6050, 6105, 6160, 6216, 6272, 6329, 6386, 6444, 6502, 6560, 6619, 6678, 6738, 6798, 6859, 6920, 6981, 7043, 7105, 7168, 7231, 7295, 7359, 7424, 7489, 7555, 7621, 7688, 7755, 7823, 7891, 7960, 8029, 8099, 8169, 8240, 8311, 8383, 8455, 8528, 8601, 8675, 8750, 8825, 8901, 8977, 9054, 9131, 9209, 9288, 9367, 9447, 9527, 9608, 9690, 9772, 9855, 9938, 10022, 10107, 10192, 10278, 10365, 10452, 10540, 10628, 10717, 10807, 10897, 10988, 11080, 11172, 11265, 11359, 11454, 11549, 11645, 11742, 11839, 11937, 12036, 12136, 12236, 12337, 12439, 12542, 12645, 12749, 12854, 12960, 13067, 13174, 13282, 13391, 13501, 13612, 13723, 13835, 13948, 14062, 14177, 14293, 14409, 14526, 14644, 14763, 14883, 15004, 15126, 15249, 15373, 15498, 15623, 15749, 15876, 16004, 16133, 16263, 16394, 16526, 16659, 16793, 16928, 17064, 17201, 17339, 17478, 17618, 17759, 17901, 18044, 18189, 18335, 18482, 18630, 18779, 18929, 19080, 19232, 19385, 19540, 19696, 19853, 20011, 20170, 20330, 20492, 20655, 20819, 20984, 21151, 21319, 21488, 21658, 21830, 22003, 22177, 22352, 22529, 22707, 22886, 23067, 23249, 23432, 23617, 23803, 23991, 24180, 24370, 24562, 24755, 24950, 25146, 25344, 25543, 25744, 25946, 26150, 26355, 26562, 26770, 26980, 27191, 27404, 27619, 27835, 28053, 28272, 28493, 28716, 28940, 29166, 29394, 29623, 29854, 30087, 30322, 30558, 30796, 31036, 31278, 31522, 31767, 32014, 32263, 32514, 32767, 33022, 33279, 33537, 33797, 34059, 34323, 34589, 34857, 35127, 35399, 35673, 35949, 36228, 36509, 36792, 37077, 37364, 37653, 37944, 38237, 38533, 38831, 39131, 39433, 39738, 40045, 40354, 40665, 40979, 41295, 41614, 41935, 42258, 42584, 42912, 43243, 43576, 43912, 44250, 44591, 44934, 45280, 45628, 45979, 46333, 46689, 47048, 47410, 47774, 48141, 48511, 48884, 49259, 49637, 50018, 50402, 50789, 51179, 51572, 51967, 52365, 52766, 53170, 53577, 53988, 54402, 54819];

GIRLS_EXP_LEVELS.common = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109, 120, 131, 142, 154, 166, 178, 190, 202, 214, 226, 238, 250, 262, 274, 286, 299, 312, 325, 338, 351, 364, 377, 390, 403, 416, 429, 443, 457, 471, 485, 499, 513, 527, 541, 555, 569, 584, 599, 614, 629, 644, 659, 674, 689, 704, 720, 736, 752, 768, 784, 800, 816, 832, 849, 866, 883, 900, 917, 934, 951, 968, 985, 1003, 1021, 1039, 1057, 1075, 1093, 1111, 1130, 1149, 1168, 1187, 1206, 1225, 1244, 1264, 1284, 1304, 1324, 1344, 1364, 1384, 1405, 1426, 1447, 1468, 1489, 1510, 1531, 1553, 1575, 1597, 1619, 1641, 1663, 1686, 1709, 1732, 1755, 1778, 1801, 1825, 1849, 1873, 1897, 1921, 1945, 1970, 1995, 2020, 2045, 2070, 2096, 2122, 2148, 2174, 2200, 2227, 2254, 2281, 2308, 2335, 2363, 2391, 2419, 2447, 2475, 2504, 2533, 2562, 2591, 2620, 2650, 2680, 2710, 2740, 2770, 2801, 2832, 2863, 2894, 2926, 2958, 2990, 3022, 3055, 3088, 3121, 3154, 3188, 3222, 3256, 3290, 3325, 3360, 3395, 3430, 3466, 3502, 3538, 3574, 3611, 3648, 3685, 3722, 3760, 3798, 3836, 3875, 3914, 3953, 3992, 4032, 4072, 4112, 4153, 4194, 4235, 4277, 4319, 4361, 4403, 4446, 4489, 4532, 4576, 4620, 4664, 4709, 4754, 4799, 4845, 4891, 4937, 4984, 5031, 5078, 5126, 5174, 5223, 5272, 5321, 5371, 5421, 5471, 5522, 5573, 5624, 5676, 5728, 5781, 5834, 5887, 5941, 5995, 6050, 6105, 6160, 6216, 6272, 6329, 6386, 6444, 6502, 6560, 6619, 6678, 6738, 6798, 6859, 6920, 6981, 7043, 7105, 7168, 7231, 7295, 7359, 7424, 7489, 7555, 7621, 7688, 7755, 7823, 7891, 7960, 8029, 8099, 8169, 8240, 8311, 8383, 8455, 8528, 8601, 8675, 8750, 8825, 8901, 8977, 9054, 9131, 9209, 9288, 9367, 9447, 9527, 9608, 9690, 9772, 9855, 9938, 10022, 10107, 10192, 10278, 10365, 10452, 10540, 10628, 10717, 10807, 10897, 10988, 11080, 11172, 11265, 11359, 11454, 11549, 11645, 11742, 11839, 11937, 12036, 12136, 12236, 12337, 12439, 12542, 12645, 12749, 12854, 12960, 13067, 13174, 13282, 13391, 13501, 13612, 13723, 13835, 13948, 14062, 14177, 14293, 14409, 14526, 14644, 14763, 14883, 15004, 15126, 15249, 15373, 15498, 15623, 15749, 15876, 16004, 16133, 16263, 16394, 16526, 16659, 16793, 16928, 17064, 17201, 17339, 17478, 17618, 17759, 17901, 18044, 18189, 18335, 18482, 18630, 18779, 18929, 19080, 19232, 19385, 19540, 19696, 19853, 20011, 20170, 20330, 20492, 20655, 20819, 20984, 21151, 21319, 21488, 21658, 21830, 22003, 22177, 22352, 22529, 22707, 22886, 23067, 23249, 23432, 23617, 23803, 23991, 24180, 24370, 24562, 24755, 24950, 25146, 25344, 25543, 25744, 25946, 26150, 26355, 26562, 26770, 26980, 27191, 27404, 27619, 27835, 28053, 28272, 28493, 28716, 28940, 29166, 29394, 29623, 29854, 30087, 30322, 30558, 30796, 31036, 31278, 31522, 31767, 32014, 32263, 32514, 32767, 33022, 33279, 33537, 33797, 34059, 34323, 34589, 34857, 35127, 35399, 35673, 35949, 36228, 36509, 36792, 37077, 37364, 37653, 37944, 38237, 38533, 38831, 39131, 39433, 39738, 40045, 40354, 40665, 40979, 41295, 41614, 41935, 42258, 42584, 42912, 43243, 43576, 43912, 44250, 44591, 44934, 45280, 45628, 45979, 46333, 46689, 47048, 47410, 47774, 48141, 48511, 48884, 49259, 49637, 50018, 50402, 50789, 51179, 51572, 51967, 52365, 52766, 53170, 53577, 53988, 54402, 54819];

GIRLS_EXP_LEVELS.rare = [12, 25, 38, 51, 64, 77, 90, 103, 116, 129, 142, 156, 170, 184, 198, 212, 226, 240, 254, 268, 282, 297, 312, 327, 342, 357, 372, 387, 402, 417, 433, 449, 465, 481, 497, 513, 529, 545, 561, 578, 595, 612, 629, 646, 663, 680, 697, 715, 733, 751, 769, 787, 805, 823, 841, 860, 879, 898, 917, 936, 955, 974, 994, 1014, 1034, 1054, 1074, 1094, 1114, 1135, 1156, 1177, 1198, 1219, 1240, 1262, 1284, 1306, 1328, 1350, 1372, 1394, 1417, 1440, 1463, 1486, 1509, 1532, 1556, 1580, 1604, 1628, 1652, 1677, 1702, 1727, 1752, 1777, 1802, 1828, 1854, 1880, 1906, 1932, 1959, 1986, 2013, 2040, 2067, 2095, 2123, 2151, 2179, 2207, 2236, 2265, 2294, 2323, 2352, 2382, 2412, 2442, 2472, 2503, 2534, 2565, 2596, 2627, 2659, 2691, 2723, 2755, 2788, 2821, 2854, 2887, 2921, 2955, 2989, 3023, 3058, 3093, 3128, 3163, 3199, 3235, 3271, 3307, 3344, 3381, 3418, 3456, 3494, 3532, 3570, 3609, 3648, 3687, 3727, 3767, 3807, 3847, 3888, 3929, 3970, 4012, 4054, 4096, 4139, 4182, 4225, 4269, 4313, 4357, 4402, 4447, 4492, 4538, 4584, 4630, 4677, 4724, 4771, 4819, 4867, 4915, 4964, 5013, 5062, 5112, 5162, 5213, 5264, 5315, 5367, 5419, 5471, 5524, 5577, 5631, 5685, 5739, 5794, 5849, 5905, 5961, 6017, 6074, 6131, 6189, 6247, 6306, 6365, 6424, 6484, 6544, 6605, 6666, 6728, 6790, 6853, 6916, 6980, 7044, 7108, 7173, 7238, 7304, 7370, 7437, 7504, 7572, 7640, 7709, 7778, 7848, 7918, 7989, 8061, 8133, 8206, 8279, 8353, 8427, 8502, 8577, 8653, 8729, 8806, 8884, 8962, 9041, 9120, 9200, 9281, 9362, 9444, 9526, 9609, 9693, 9777, 9862, 9947, 10033, 10120, 10207, 10295, 10384, 10473, 10563, 10654, 10745, 10837, 10930, 11023, 11117, 11212, 11308, 11404, 11501, 11599, 11697, 11796, 11896, 11997, 12098, 12200, 12303, 12407, 12511, 12616, 12722, 12829, 12937, 13045, 13154, 13264, 13375, 13487, 13600, 13713, 13827, 13942, 14058, 14175, 14293, 14412, 14531, 14651, 14772, 14894, 15017, 15141, 15266, 15392, 15519, 15647, 15776, 15906, 16037, 16169, 16302, 16436, 16571, 16707, 16844, 16982, 17121, 17261, 17402, 17544, 17687, 17831, 17976, 18122, 18269, 18417, 18566, 18716, 18868, 19021, 19175, 19330, 19486, 19643, 19802, 19962, 20123, 20285, 20448, 20613, 20779, 20946, 21114, 21284, 21455, 21627, 21800, 21975, 22151, 22328, 22507, 22687, 22868, 23051, 23235, 23420, 23607, 23795, 23985, 24176, 24368, 24562, 24757, 24954, 25152, 25352, 25553, 25756, 25960, 26166, 26373, 26582, 26792, 27004, 27218, 27433, 27650, 27868, 28088, 28310, 28533, 28758, 28985, 29213, 29443, 29675, 29909, 30144, 30381, 30620, 30861, 31103, 31347, 31593, 31841, 32091, 32343, 32597, 32852, 33109, 33368, 33629, 33892, 34157, 34424, 34693, 34964, 35237, 35512, 35789, 36068, 36349, 36633, 36919, 37207, 37497, 37789, 38083, 38380, 38679, 38980, 39283, 39588, 39896, 40206, 40518, 40833, 41150, 41469, 41791, 42115, 42442, 42771, 43103, 43437, 43774, 44113, 44455, 44799, 45146, 45495, 45847, 46202, 46559, 46919, 47282, 47647, 48015, 48386, 48760, 49136, 49515, 49897, 50282, 50670, 51061, 51455, 51852, 52252, 52655, 53061, 53470, 53882, 54297, 54715, 55136, 55560, 55987, 56418, 56852, 57289, 57729, 58173, 58620, 59070, 59524, 59981, 60442, 60906, 61373, 61844, 62318, 62796, 63278, 63763, 64252, 64745, 65241, 65741];

GIRLS_EXP_LEVELS.epic = [14, 29, 44, 59, 74, 89, 104, 119, 134, 149, 165, 181, 197, 213, 229, 245, 261, 277, 294, 311, 328, 345, 362, 379, 396, 413, 431, 449, 467, 485, 503, 521, 539, 557, 576, 595, 614, 633, 652, 671, 690, 710, 730, 750, 770, 790, 810, 830, 851, 872, 893, 914, 935, 956, 977, 999, 1021, 1043, 1065, 1087, 1109, 1132, 1155, 1178, 1201, 1224, 1247, 1271, 1295, 1319, 1343, 1367, 1391, 1416, 1441, 1466, 1491, 1516, 1542, 1568, 1594, 1620, 1646, 1673, 1700, 1727, 1754, 1781, 1809, 1837, 1865, 1893, 1921, 1950, 1979, 2008, 2037, 2066, 2096, 2126, 2156, 2186, 2217, 2248, 2279, 2310, 2341, 2373, 2405, 2437, 2469, 2502, 2535, 2568, 2601, 2635, 2669, 2703, 2737, 2772, 2807, 2842, 2877, 2913, 2949, 2985, 3021, 3058, 3095, 3132, 3169, 3207, 3245, 3283, 3322, 3361, 3400, 3439, 3479, 3519, 3559, 3600, 3641, 3682, 3724, 3766, 3808, 3850, 3893, 3936, 3979, 4023, 4067, 4111, 4156, 4201, 4246, 4292, 4338, 4384, 4431, 4478, 4525, 4573, 4621, 4670, 4719, 4768, 4818, 4868, 4918, 4969, 5020, 5071, 5123, 5175, 5228, 5281, 5334, 5388, 5442, 5497, 5552, 5607, 5663, 5719, 5776, 5833, 5891, 5949, 6007, 6066, 6125, 6185, 6245, 6306, 6367, 6429, 6491, 6553, 6616, 6679, 6743, 6807, 6872, 6937, 7003, 7069, 7136, 7203, 7271, 7339, 7408, 7477, 7547, 7617, 7688, 7759, 7831, 7903, 7976, 8049, 8123, 8198, 8273, 8349, 8425, 8502, 8579, 8657, 8736, 8815, 8895, 8975, 9056, 9138, 9220, 9303, 9386, 9470, 9555, 9640, 9726, 9813, 9900, 9988, 10076, 10165, 10255, 10345, 10436, 10528, 10621, 10714, 10808, 10903, 10998, 11094, 11191, 11288, 11386, 11485, 11585, 11685, 11786, 11888, 11991, 12094, 12198, 12303, 12409, 12516, 12623, 12731, 12840, 12950, 13061, 13172, 13284, 13397, 13511, 13626, 13742, 13859, 13976, 14094, 14213, 14333, 14454, 14576, 14699, 14823, 14948, 15074, 15200, 15327, 15455, 15584, 15714, 15845, 15977, 16110, 16244, 16379, 16515, 16652, 16790, 16929, 17069, 17210, 17352, 17496, 17641, 17787, 17934, 18082, 18231, 18381, 18532, 18684, 18837, 18992, 19148, 19305, 19463, 19622, 19782, 19944, 20107, 20271, 20436, 20603, 20771, 20940, 21110, 21282, 21455, 21629, 21804, 21981, 22159, 22338, 22519, 22701, 22884, 23069, 23255, 23443, 23632, 23822, 24014, 24207, 24402, 24598, 24796, 24995, 25196, 25398, 25602, 25807, 26014, 26222, 26432, 26643, 26856, 27071, 27287, 27505, 27724, 27945, 28168, 28392, 28618, 28846, 29075, 29306, 29539, 29774, 30010, 30248, 30488, 30730, 30974, 31219, 31466, 31715, 31966, 32219, 32474, 32731, 32990, 33250, 33512, 33776, 34042, 34310, 34580, 34852, 35126, 35402, 35681, 35962, 36245, 36530, 36817, 37106, 37397, 37690, 37986, 38284, 38584, 38886, 39191, 39498, 39807, 40119, 40433, 40749, 41068, 41389, 41712, 42038, 42366, 42697, 43030, 43366, 43704, 44045, 44388, 44734, 45082, 45433, 45787, 46143, 46502, 46864, 47228, 47595, 47965, 48338, 48713, 49091, 49472, 49856, 50243, 50633, 51026, 51422, 51821, 52223, 52628, 53036, 53447, 53861, 54278, 54698, 55121, 55547, 55976, 56409, 56845, 57284, 57726, 58172, 58621, 59073, 59529, 59988, 60451, 60917, 61387, 61860, 62337, 62817, 63301, 63789, 64280, 64775, 65274, 65776, 66282, 66792, 67306, 67823, 68344, 68869, 69398, 69931, 70468, 71009, 71554, 72103, 72656, 73214, 73776, 74342, 74912, 75487, 76066, 76649];

GIRLS_EXP_LEVELS.legendary = [16, 33, 50, 67, 84, 101, 118, 135, 152, 170, 188, 206, 224, 242, 260, 278, 297, 316, 335, 354, 373, 392, 411, 431, 451, 471, 491, 511, 531, 551, 572, 593, 614, 635, 656, 677, 698, 720, 742, 764, 786, 808, 830, 853, 876, 899, 922, 945, 968, 992, 1016, 1040, 1064, 1088, 1112, 1137, 1162, 1187, 1212, 1237, 1263, 1289, 1315, 1341, 1367, 1394, 1421, 1448, 1475, 1502, 1529, 1557, 1585, 1613, 1641, 1670, 1699, 1728, 1757, 1786, 1816, 1846, 1876, 1906, 1936, 1967, 1998, 2029, 2060, 2092, 2124, 2156, 2188, 2221, 2254, 2287, 2320, 2354, 2388, 2422, 2456, 2491, 2526, 2561, 2596, 2632, 2668, 2704, 2740, 2777, 2814, 2851, 2888, 2926, 2964, 3002, 3041, 3080, 3119, 3158, 3198, 3238, 3278, 3319, 3360, 3401, 3443, 3485, 3527, 3569, 3612, 3655, 3698, 3742, 3786, 3830, 3875, 3920, 3965, 4011, 4057, 4103, 4150, 4197, 4244, 4292, 4340, 4388, 4437, 4486, 4536, 4586, 4636, 4687, 4738, 4789, 4841, 4893, 4946, 4999, 5052, 5106, 5160, 5215, 5270, 5325, 5381, 5437, 5494, 5551, 5608, 5666, 5724, 5783, 5842, 5902, 5962, 6023, 6084, 6145, 6207, 6269, 6332, 6395, 6459, 6523, 6588, 6653, 6719, 6785, 6852, 6919, 6987, 7055, 7124, 7193, 7263, 7333, 7404, 7475, 7547, 7619, 7692, 7765, 7839, 7914, 7989, 8065, 8141, 8218, 8295, 8373, 8451, 8530, 8610, 8690, 8771, 8852, 8934, 9017, 9100, 9184, 9269, 9354, 9440, 9526, 9613, 9701, 9789, 9878, 9968, 10058, 10149, 10241, 10333, 10426, 10520, 10615, 10710, 10806, 10903, 11000, 11098, 11197, 11297, 11397, 11498, 11600, 11703, 11806, 11910, 12015, 12121, 12227, 12334, 12442, 12551, 12661, 12771, 12882, 12994, 13107, 13221, 13336, 13452, 13568, 13685, 13803, 13922, 14042, 14163, 14285, 14408, 14532, 14656, 14781, 14907, 15034, 15162, 15291, 15421, 15552, 15684, 15817, 15951, 16086, 16222, 16359, 16497, 16636, 16776, 16917, 17059, 17202, 17346, 17492, 17639, 17787, 17936, 18086, 18237, 18389, 18542, 18696, 18852, 19009, 19167, 19326, 19486, 19648, 19811, 19975, 20140, 20306, 20474, 20643, 20813, 20984, 21157, 21331, 21506, 21683, 21861, 22040, 22221, 22403, 22586, 22771, 22957, 23144, 23333, 23523, 23715, 23908, 24103, 24299, 24496, 24695, 24895, 25097, 25300, 25505, 25712, 25920, 26130, 26341, 26554, 26768, 26984, 27202, 27421, 27642, 27865, 28089, 28315, 28543, 28772, 29003, 29236, 29470, 29706, 29944, 30184, 30426, 30669, 30914, 31161, 31410, 31661, 31914, 32168, 32424, 32682, 32942, 33204, 33468, 33734, 34002, 34272, 34544, 34818, 35094, 35372, 35652, 35934, 36219, 36506, 36795, 37086, 37379, 37674, 37972, 38272, 38574, 38878, 39185, 39494, 39805, 40119, 40435, 40753, 41074, 41397, 41722, 42050, 42380, 42713, 43048, 43386, 43726, 44069, 44415, 44763, 45114, 45467, 45823, 46182, 46543, 46907, 47274, 47644, 48016, 48391, 48769, 49150, 49534, 49920, 50309, 50701, 51096, 51494, 51895, 52299, 52706, 53116, 53529, 53945, 54364, 54787, 55213, 55642, 56074, 56509, 56948, 57390, 57835, 58284, 58736, 59191, 59650, 60112, 60578, 61047, 61520, 61996, 62476, 62959, 63446, 63937, 64431, 64929, 65431, 65937, 66446, 66959, 67476, 67997, 68522, 69051, 69584, 70121, 70662, 71207, 71756, 72309, 72866, 73427, 73992, 74562, 75136, 75714, 76297, 76884, 77475, 78071, 78671, 79276, 79885, 80499, 81117, 81740, 82368, 83000, 83637, 84279, 84926, 85578, 86235, 86896, 87562];

GIRLS_EXP_LEVELS.mythic = [40, 81, 122, 163, 205, 247, 289, 332, 375, 418, 462, 506, 550, 595, 640, 685, 731, 777, 823, 870, 917, 964, 1012, 1060, 1108, 1157, 1206, 1255, 1305, 1355, 1406, 1457, 1508, 1560, 1612, 1664, 1717, 1770, 1824, 1878, 1932, 1987, 2042, 2098, 2154, 2210, 2267, 2324, 2382, 2440, 2499, 2558, 2617, 2677, 2737, 2798, 2859, 2921, 2983, 3046, 3109, 3173, 3237, 3302, 3367, 3433, 3499, 3565, 3632, 3699, 3767, 3835, 3904, 3974, 4044, 4115, 4186, 4258, 4330, 4403, 4476, 4550, 4624, 4699, 4774, 4850, 4927, 5004, 5082, 5160, 5239, 5318, 5398, 5479, 5560, 5642, 5724, 5807, 5891, 5975, 6060, 6146, 6232, 6319, 6407, 6495, 6584, 6673, 6763, 6854, 6945, 7037, 7130, 7224, 7318, 7413, 7509, 7605, 7702, 7800, 7899, 7998, 8098, 8199, 8301, 8403, 8506, 8610, 8715, 8820, 8926, 9033, 9141, 9250, 9359, 9469, 9580, 9692, 9805, 9919, 10033, 10148, 10264, 10381, 10499, 10618, 10738, 10858, 10979, 11101, 11224, 11348, 11473, 11599, 11726, 11854, 11983, 12113, 12244, 12376, 12509, 12643, 12778, 12914, 13051, 13189, 13328, 13468, 13609, 13751, 13894, 14038, 14183, 14329, 14476, 14624, 14774, 14925, 15077, 15230, 15384, 15539, 15695, 15853, 16012, 16172, 16333, 16495, 16658, 16823, 16989, 17156, 17324, 17494, 17665, 17837, 18011, 18186, 18362, 18539, 18718, 18898, 19079, 19262, 19446, 19632, 19819, 20007, 20197, 20388, 20581, 20775, 20970, 21167, 21365, 21565, 21766, 21969, 22173, 22379, 22587, 22796, 23007, 23219, 23433, 23648, 23865, 24084, 24304, 24526, 24750, 24975, 25202, 25431, 25661, 25893, 26127, 26363, 26600, 26839, 27080, 27323, 27567, 27813, 28061, 28311, 28563, 28817, 29073, 29331, 29591, 29852, 30115, 30380, 30647, 30916, 31187, 31460, 31735, 32013, 32293, 32575, 32859, 33145, 33433, 33723, 34015, 34310, 34607, 34906, 35207, 35511, 35817, 36125, 36435, 36748, 37063, 37380, 37700, 38022, 38347, 38674, 39003, 39335, 39669, 40006, 40345, 40687, 41032, 41379, 41729, 42081, 42436, 42794, 43154, 43517, 43883, 44251, 44622, 44996, 45373, 45753, 46136, 46521, 46909, 47300, 47694, 48091, 48491, 48894, 49300, 49709, 50121, 50536, 50954, 51375, 51800, 52228, 52659, 53093, 53530, 53971, 54415, 54862, 55313, 55767, 56225, 56686, 57150, 57618, 58089, 58564, 59042, 59524, 60010, 60499, 60992, 61489, 61989, 62493, 63001, 63513, 64029, 64548, 65071, 65598, 66129, 66664, 67203, 67746, 68293, 68844, 69400, 69960, 70524, 71092, 71664, 72241, 72822, 73407, 73997, 74591, 75190, 75793, 76401, 77013, 77630, 78251, 78877, 79508, 80143, 80783, 81428, 82078, 82733, 83393, 84058, 84728, 85403, 86083, 86768, 87458, 88153, 88853, 89558, 90269, 90985, 91706, 92433, 93165, 93903, 94646, 95395, 96149, 96909, 97675, 98447, 99224, 100007, 100796, 101591, 102392, 103199, 104012, 104831, 105656, 106487, 107325, 108169, 109019, 109876, 110739, 111609, 112485, 113368, 114257, 115153, 116056, 116965, 117881, 118804, 119734, 120671, 121615, 122566, 123524, 124489, 125462, 126442, 127429, 128424, 129426, 130436, 131453, 132478, 133510, 134550, 135598, 136654, 137718, 138790, 139870, 140958, 142054, 143158, 144271, 145392, 146521, 147659, 148805, 149960, 151123, 152295, 153476, 154666, 155865, 157073, 158290, 159516, 160751, 161995, 163249, 164512, 165785, 167067, 168359, 169660, 170971, 172292, 173623, 174964, 176315, 177676, 179047, 180429, 181821, 183223, 184636, 186059, 187493, 188938, 190394, 191861, 193339, 194828, 196328, 197839, 199361, 200895, 202440, 203997, 205566, 207146, 208738, 210342, 211958, 213586, 215227, 216880];


/* ==================
	WHEN TO RUN WHAT
   ================== */

// Show which modules are enabled and if so, run them when appropriate
try {
    if (CurrentPage.indexOf('harem') != -1) {
        moduleHarem();
    }
} catch(e) {}

/* ===================
	HAREM INFORMATION
   =================== */

function moduleHarem() {
    var stats = [];
    var girlsList = [];
    var haremRight = $('#harem_right');

    stats.girls = 0;
    stats.hourlyMoney = 0;
    stats.allCollect = 0;
    stats.unlockedScenes = 0;
    stats.allScenes = 0;
    stats.rarities = {starting: 0, common: 0, rare: 0, epic: 0, legendary: 0, mythic: 0};
    stats.caracs = {1: 0, 2: 0, 3: 0};
    stats.stars = {affection: 0, money: 0, kobans: 0};
    stats.xp = 0;
    stats.affection = 0;
    stats.money = 0;
    stats.kobans = 0;

    var EvoReq = [];

    var starting = [];
    starting.push({affection: 90, money: 36000, kobans: 36, taffection: 90, tmoney: 36000, tkobans: 36});
    starting.push({affection: 225, money: 90000, kobans: 60, taffection: 315, tmoney: 126000, tkobans: 96});
    starting.push({affection: 563, money: 225000, kobans: 114, taffection: 878, tmoney: 351000, tkobans: 210});
    starting.push({affection: 1125, money: 450000, kobans: 180, taffection: 2003, tmoney: 801000, tkobans: 390});
    starting.push({affection: 2250, money: 900000, kobans: 300, taffection: 4253, tmoney: 1701000, tkobans: 690});
    EvoReq.starting = starting;

    var commonGirls = [];
    commonGirls.push({affection: 180, money: 72000, kobans: 72, taffection: 180, tmoney: 72000, tkobans: 72});
    commonGirls.push({affection: 450, money: 180000, kobans: 120, taffection: 630, tmoney: 252000, tkobans: 192});
    commonGirls.push({affection: 1125, money: 450000, kobans: 228, taffection: 1755, tmoney: 702000, tkobans: 420});
    commonGirls.push({affection: 2250, money: 900000, kobans: 360, taffection: 4005, tmoney: 1602000, tkobans: 780});
    commonGirls.push({affection: 4500, money: 1800000, kobans: 600, taffection: 8505, tmoney: 3402000, tkobans: 1380});
    EvoReq.common = commonGirls;

    var rareGirls = [];
    rareGirls.push({affection: 540, money: 216000, kobans: 216, taffection: 540, tmoney: 216000, tkobans: 216});
    rareGirls.push({affection: 1350, money: 540000, kobans: 360, taffection: 1890, tmoney: 756000, tkobans: 576});
    rareGirls.push({affection: 3375, money: 1350000, kobans: 678, taffection: 5265, tmoney: 2106000, tkobans: 1254});
    rareGirls.push({affection: 6750, money: 2700000, kobans: 1080, taffection: 12015, tmoney: 4806000, tkobans: 2334});
    rareGirls.push({affection: 13500, money: 5400000, kobans: 1800, taffection: 25515, tmoney: 10206000, tkobans: 4134});
    EvoReq.rare = rareGirls;

    var epicGirls = [];
    epicGirls.push({affection: 1260, money: 504000, kobans: 504, taffection: 1260, tmoney: 504000, tkobans: 504});
    epicGirls.push({affection: 3150, money: 1260000, kobans: 840, taffection: 4410, tmoney: 1764000, tkobans: 1344});
    epicGirls.push({affection: 7875, money: 3150000, kobans: 1578, taffection: 12285, tmoney: 4914000, tkobans: 2922});
    epicGirls.push({affection: 15750, money: 6300000, kobans: 2520, taffection: 28035, tmoney: 11214000, tkobans: 5442});
    epicGirls.push({affection: 31500, money: 12600000, kobans: 4200, taffection: 59535, tmoney: 23814000, tkobans: 9642});
    EvoReq.epic = epicGirls;

    var legendGirls = [];
    legendGirls.push({affection: 1800, money: 720000, kobans: 720, taffection: 1800, tmoney: 720000, tkobans: 720});
    legendGirls.push({affection: 4500, money: 1800000, kobans: 1200, taffection: 6300, tmoney: 2520000, tkobans: 1920});
    legendGirls.push({affection: 11250, money: 4500000, kobans: 2250, taffection: 17550, tmoney: 7020000, tkobans: 4170});
    legendGirls.push({affection: 22500, money: 9000000, kobans: 3600, taffection: 40050, tmoney: 16020000, tkobans: 7770});
    legendGirls.push({affection: 45000, money: 18000000, kobans: 6000, taffection: 85050, tmoney: 34020000, tkobans: 13770});
    EvoReq.legendary = legendGirls;

    var mythicGirls = [];
    mythicGirls.push({affection: 4500, money: 1800000, kobans: 1800, taffection: 4500, tmoney: 1800000, tkobans: 1800});
    mythicGirls.push({affection: 11250, money: 4500000, kobans: 3000, taffection: 15750, tmoney: 6300000, tkobans: 4800});
    mythicGirls.push({affection: 28125, money: 11300000, kobans: 5628, taffection: 43875, tmoney: 17600000, tkobans: 10428});
    mythicGirls.push({affection: 56250 , money: 22500000, kobans: 9000, taffection: 100125, tmoney: 40100000, tkobans: 19428});
    mythicGirls.push({affection: 112500, money: 45000000, kobans: 15000, taffection: 212625, tmoney: 85100000, tkobans: 34428});
    mythicGirls.push({affection: 225000, money: 90000000, kobans: 18000, taffection: 437625, tmoney: 175100000, tkobans: 52428});
    EvoReq.mythic = mythicGirls;

    for (var id in girlsDataList) {
        var girl = jQuery.extend(true, {}, girlsDataList[id]);
        if (girl.own) {
            stats.allCollect += girl.salary;
            stats.rarities[girl.rarity]++;
            stats.caracs[girl.class]++;
            stats.girls++;
            stats.hourlyMoney += Math.round(girl.salary_per_hour);
            stats.unlockedScenes += girl.graded;
            stats.allScenes += parseInt(girl.nb_grades, 10);
            var nbgrades = parseInt(girl.nb_grades, 10);
            if (girl.graded != nbgrades) {
                stats.affection += EvoReq[girl.rarity][nbgrades - 1].taffection - girl.Affection.cur;
                var currentLevelMoney = 0,
                    currentLevelKobans = 0;
                if (girl.graded != 0) {
                    currentLevelMoney = EvoReq[girl.rarity][girl.graded - 1].tmoney;
                    currentLevelKobans = EvoReq[girl.rarity][girl.graded - 1].tkobans;
                }
                stats.money += EvoReq[girl.rarity][nbgrades - 1].tmoney - currentLevelMoney;
                if (hh_nutaku) {
                    stats.kobans += Math.ceil((EvoReq[girl.rarity][nbgrades - 1].tkobans - currentLevelKobans) / 6);
                }
                else {
                    stats.kobans += EvoReq[girl.rarity][nbgrades - 1].tkobans - currentLevelKobans;
                }
            }

            var expToMax = (GIRLS_EXP_LEVELS[girl.rarity][Hero.infos.level - 2] - girl.Xp.cur);
            if (expToMax < 0) expToMax = 0;
            stats.xp += expToMax;
        }
    }

    try {
        var lsMarket = JSON.parse(localStorage.getItem('lsMarket')),
            d = new Date(lsMarket.restock.time),
            RestockInfo;

        if (new Date() > lsMarket.restock.time || Hero.infos.level > lsMarket.restock.herolvl) {

            RestockInfo = '> The <a href="../shop.html">Market</a> restocked since your last visit.';
        }
        else {
            var	marketBookTxt = lsMarket.buyable.potion.Nb + ' ' + texts[lang].books + ' (' + nThousand(lsMarket.buyable.potion.Xp) + ' ' + texts[lang].Xp + ')',
                marketGiftTxt = lsMarket.buyable.gift.Nb + ' ' + texts[lang].gifts + ' (' + nThousand(lsMarket.buyable.gift.Xp) + ' ' + texts[lang].affection + ')';
            RestockInfo = '- ' + marketBookTxt + ' = ' + nThousand(lsMarket.buyable.potion.Value) + ' <span class="imgMoney"></span>'
                + '<br />- ' + marketGiftTxt + ' = ' + nThousand(lsMarket.buyable.gift.Value) + ' <span class="imgMoney"></span>'
                + '<br /><font style="color: gray;">' + texts[lang].restock + ': ' + d.toLocaleString() + ' (' + texts[lang].or_level + ' ' + (Hero.infos.level+1) + ')</font>';
        }

        var myArmorTxt = nThousand(lsMarket.stocks.armor.Nb) + (lsMarket.stocks.armor.Nb > 99 ? '+ ' : ' ') + ' ' + texts[lang].equipments,
            myBoosterTxt = nThousand(lsMarket.stocks.booster.Nb) + ' ' + texts[lang].boosters,
            myBookTxt = nThousand(lsMarket.stocks.potion.Nb) + ' ' + texts[lang].books + ' (' + nThousand(lsMarket.stocks.potion.Xp) + ' ' + texts[lang].Xp + ')',
            myGiftTxt = nThousand(lsMarket.stocks.gift.Nb) + ' ' + texts[lang].gifts + ' (' + nThousand(lsMarket.stocks.gift.Xp) + ' ' + texts[lang].affection + ')',
            MarketStocks = '- ' + myArmorTxt + ', ' + myBoosterTxt
        + '<br />- ' + myBookTxt
        + '<br />- ' + myGiftTxt
        + '<span class="subTitle">' + texts[lang].currently_buyable + ':</span>'
        + RestockInfo;
    } catch(e) {
        MarketStocks = (lsAvailable == 'yes') ? '> ' + texts[lang].visit_the : '> ' + texts[lang].not_compatible;
    }

    var StatsString = '<div class="StatsContent"><span class="Title">' + texts[lang].harem_stats + ':</span>' +
        '<span class="subTitle" style="margin-top: -10px;">' + stats.girls + ' ' + texts[lang].haremettes + ':</span>' +
        '- ' + stats.caracs[1] + ' ' + texts[lang].hardcore + ', ' + stats.caracs[2] + ' ' + texts[lang].charm + ', ' + stats.caracs[3] + ' ' + texts[lang].know_how + '<br />- '
    + (stats.rarities.starting + stats.rarities.common) + ' ' + texts[lang].common + ', ' + stats.rarities.rare + ' ' + texts[lang].rare + ', ' + stats.rarities.epic + ' ' + texts[lang].epic + ', ' + stats.rarities.legendary + ' ' + texts[lang].legendary + ', ' + stats.rarities.mythic + ' ' + texts[lang].mythic + ' <br />- '
    + nThousand(parseInt(document.getElementsByClassName('focus_text')[0].innerHTML.replace(/\D/g, ''), 10)) + '/' + nThousand(Hero.infos.level * stats.girls) + ' ' + texts[lang].harem_level + ' (' + nThousand(Hero.infos.level * stats.girls - parseInt(document.getElementsByClassName('focus_text')[0].innerHTML.replace(/\D/g, ''), 10)) + ' ' + texts[lang].to_go + ')<br />- '
    + stats.unlockedScenes + '/' + stats.allScenes + ' ' + texts[lang].unlocked_scenes + ' (' + nThousand(stats.allScenes - stats.unlockedScenes) + ' ' + texts[lang].to_go + ')'
    + '<span class="subTitle">' + texts[lang].money_income + ':</span>'
    + '~' + nThousand(stats.hourlyMoney) + ' <span class="imgMoney"></span> ' + texts[lang].per_hour
    + '<br />' + nThousand(stats.allCollect) + ' <span class="imgMoney"></span> ' + texts[lang].when_all_collectable
    + '<span class="subTitle">' + texts[lang].required_to_unlock + ':</span>'
    + addPriceRow('', stats.affection, stats.money, stats.kobans)
    + '<span class="subTitle">' + texts[lang].required_to_get_max_level + ':</span>'
    + nThousand(stats.xp) + ' ' + texts[lang].Xp + ' (' + nThousand(stats.xp * 200) + ' <span class="imgMoney"></span>) <br />'
    + '<span class="subTitle">' + texts[lang].my_stocks + ':</span>'
    + MarketStocks
    + '</div>';

    $('#harem_left').append('<div id="CustomBar">'
                            + '<img f="stats" src="https://i.postimg.cc/8cYj8QmP/icon-info.png">'
                            + '</div>'
                            + '<div id="TabsContainer">' + StatsString + '</div>');

    var TabsContainer = $('#TabsContainer');
    var Stats = TabsContainer.children('.StatsContent');

    $('body').click(function(e) {
        var clickOn = e.target.getAttribute('f');
        switch (clickOn) {
            case 'stats':
                toggleTabs(Stats);
                break;
            default:
                var clickedContainer = $(e.target).closest('[id]').attr('id');
                if (clickedContainer == 'TabsContainer') return;
                TabsContainer.fadeOut(400);
        }
    });

    function toggleTabs(tabIn) {
        if (TabsContainer.css('display') == 'block') {
            setTimeout(function() { tabIn.fadeIn(300); }, 205);
            TabsContainer.fadeOut(400);
        }
        else {
            tabIn.toggle(true);
            TabsContainer.fadeIn(400);
        }
    }

    function addPriceRow(rowName, affection, money, kobans) {
        return '<b>' + rowName + '</b> ' +
            nThousand(affection) + ' ' + texts[lang].affection + ' (' + nThousand(affection * 417) + ' <span class="imgMoney"></span>) ' + texts[lang].and + ' <br />' +
            nThousand(money) + ' <span class="imgMoney"></span> ' + texts[lang].or + ' ' +
            nThousand(kobans) + ' <span class="imgKobans"></span><br />';
    }

    function addPriceRowGirl(rowName, affection, money, kobans) {
        return '<b>' + rowName + ':</b> ' +
            nThousand(affection) + ' ' + texts[lang].affection + ' (' + nThousand(affection * 417) + ' <span class="imgMoney"></span>) ' + texts[lang].and + ' ' +
            nThousand(money) + ' <span class="imgMoney"></span> ' + texts[lang].or + ' ' +
            nThousand(kobans) + ' <span class="imgKobans"></span><br />';
    }

    $('.girls_list div[id_girl]').click(function() {
        updateInfo();
    });

    updateInfo();

    function updateInfo() {
        setTimeout(function () {
            haremRight.children('[girl]').each(function() {
                var girl = girlsDataList[$(this).attr('girl')];
                //for Wiki FR
                var girlName = girl.Name.replaceAll("’", "-").replaceAll("/", "-");
                if (girl.id_girl == 145462484)
                    girlName = girlName.concat('-', 'Usagi');

                if ($('#hh_comix').length == 0) {
                    if (!girl.own) {
                        if (HH_UNIVERSE == 'gay') {
                            $(this).find('.middle_part.missing_girl .dialog-box p').after('<div class="WikiLinkDialogbox"><a href="https://harem-battle.club/wiki/Gay-Harem/GH:' + girl.Name + '" target="_blank"> ' + girl.Name + texts[lang].wiki + ' </a></div>');
                        }
                        else if (lang == 'fr') {
                            $(this).find('.middle_part.missing_girl .dialog-box p').after('<div class="WikiLinkDialogbox"><a href="http://hentaiheroes.wikidot.com/' + girlName + '" target="_blank"> ' + texts[lang].wiki + girl.Name + ' </a></div>');
                        }
                        else {
                            $(this).find('.middle_part.missing_girl .dialog-box p').after('<div class="WikiLinkDialogbox"><a href="https://harem-battle.club/wiki/Harem-Heroes/HH:' + girlName + '" target="_blank"> ' + girl.Name + texts[lang].wiki + ' </a></div>');
                        }
                    }
                    if (girl.own) {
                        if (HH_UNIVERSE == 'gay') {
                            $(this).find('.middle_part h3').after('<div class="WikiLink"><a href="https://harem-battle.club/wiki/Gay-Harem/GH:' + girl.Name + '" target="_blank"> ' + girl.Name + texts[lang].wiki + ' </a></div>');
                        }
                        else if (lang == 'fr') {
                            $(this).find('.middle_part h3').after('<div class="WikiLink"><a href="http://hentaiheroes.wikidot.com/' + girlName + '" target="_blank"> ' + texts[lang].wiki + girl.Name + ' </a></div>');
                        }
                        else {
                            $(this).find('.middle_part h3').after('<div class="WikiLink"><a href="https://harem-battle.club/wiki/Harem-Heroes/HH:' + girlName + '" target="_blank"> ' + girl.Name + texts[lang].wiki + ' </a></div>');
                        }
                    }
                }
                var j = 0,
                    FirstLockedScene = 1,
                    AffectionTT = texts[lang].evolution_costs + ':<br />',
                    ScenesLink = '',
                    girl_quests = $(this).find('.girl_quests');
                girl_quests.find('g').each(function() {

                    j++;
                    var aff = 0,
                        money = 0,
                        kobans = 0;
                    var currentLevelMoney = 0,
                        currentLevelKobans = 0;
                    if (girl.graded != 0) {
                        currentLevelMoney = EvoReq[girl.rarity][girl.graded - 1].tmoney;
                        currentLevelKobans = EvoReq[girl.rarity][girl.graded - 1].tkobans;
                    }
                    if (girl.graded >= j) {
                    }
                    else if ((girl.graded + 1) == j && girl.Affection.level == j) {
                        money = EvoReq[girl.rarity][j - 1].tmoney - currentLevelMoney;
                        if (hh_nutaku) {
                            kobans = Math.ceil((EvoReq[girl.rarity][j - 1].tkobans - currentLevelKobans) / 6);
                        }
                        else {
                            kobans = EvoReq[girl.rarity][j - 1].tkobans - currentLevelKobans;
                        }
                    }
                    else {
                        aff = EvoReq[girl.rarity][j - 1].taffection - girl.Affection.cur;
                        money = EvoReq[girl.rarity][j - 1].tmoney - currentLevelMoney;
                        if (hh_nutaku) {
                            kobans = Math.ceil((EvoReq[girl.rarity][j - 1].tkobans - currentLevelKobans) / 6);
                        }
                        else {
                            kobans = EvoReq[girl.rarity][j - 1].tkobans - currentLevelKobans;
                        }
                    }
                    AffectionTT += addPriceRowGirl(j + '</b><span class="imgStar"></span>', aff, money, kobans);
                    ScenesLink += (ScenesLink === '') ? 'hh_scenes=' : ',';
                    var SceneHref = $(this).parent().attr('href');
                    if ($(this).hasClass('grey') || $(this).hasClass('green')) {
                        if (FirstLockedScene === 0) {
                            ScenesLink += '0';
                        }
                        else {
                            FirstLockedScene = 0;
                            var XpLeft = girl_quests.parent().parent().children('.girl_exp_left');
                            var isUpgradable = girl_quests.parent().children('.green_text_button');
                            ScenesLink += (isUpgradable.length) ? '0.' + isUpgradable.attr('href').substr(7) : '0';
                        }
                    }
                    else {
                        var attrHref = $(this).parent().attr('href');
                        if (typeof attrHref != 'undefined') {
                            ScenesLink += attrHref.substr(7);
                        }
                    }
                });

                girl_quests.children('a').each(function() {
                    var attr = $(this).attr('href');
                    if (typeof attr !== typeof undefined && attr !== false) {
                        $(this).attr('href', attr + '?' + ScenesLink);
                    }
                });
                ScenesLink = '';

                girl_quests.parent().children('h4').prepend('<span class="CustomTT"></span><div class="AffectionTooltip">' + AffectionTT + '</div>');

            });
        }, 50);
    }

    //CSS
    sheet.insertRule('#harem_left .HaremetteNb {'
                     + 'float: right; '
                     + 'line-height: 14px; '
                     + 'font-size: 12px;}'
                    );

    sheet.insertRule('#CustomBar {'
                     + 'z-index: 99; '
                     + 'width: 100%; '
                     + 'padding: 3px 10px 0 3px; '
                     + 'font: bold 10px Tahoma, Helvetica, Arial, sans-serif; '
                     + 'position: absolute; bottom: 3px; left: 0px;}'
                    );

    sheet.insertRule('#CustomBar img {'
                     + 'width: 20px; '
                     + 'height: 20px; '
                     + 'margin-right: 3px; '
                     + 'margin-bottom: 3px; '
                     + 'opacity: 0.5;}'
                    );

    sheet.insertRule('#CustomBar img:hover {'
                     + 'opacity: 1; '
                     + 'cursor: pointer;}'
                    );

    sheet.insertRule('#CustomBar .TopBottomLinks {'
                     + 'float: right; '
                     + 'margin-top: 2px;}'
                    );

    sheet.insertRule('#CustomBar a, #TabsContainer a {'
                     + 'color: #008; '
                     + 'text-decoration: none;}'
                    );

    sheet.insertRule('#harem_whole .WikiLink a {'
                     + 'color: #87CEFA; '
                     + 'text-decoration: none;}'
                    );

    sheet.insertRule('#CustomBar a:hover, #TabsContainer a:hover, #harem_right .WikiLink a:hover {'
                     + 'color: #B14; '
                     + 'text-decoration: underline;}'
                    );

    sheet.insertRule('#TabsContainer {'
                     + 'z-index: 99; '
                     + 'position: absolute; '
                     + 'bottom: 30px; '
                     + 'left: 12px; '
                     + 'box-sizing: content-box; '
                     + 'border: 1px solid rgb(156, 182, 213); '
                     + 'box-shadow: 1px -1px 1px 0px rgba(0,0,0,0.3); '
                     + 'font: normal 10px/16px Tahoma, Helvetica, Arial, sans-serif; '
                     + 'color: #000000; '
                     + 'background-color: #ffffff; '
                     + 'display: none;}'
                    );

    sheet.insertRule('#TabsContainer > div {'
                     + 'padding: 1px 10px 8px 10px;}'
                    );

    sheet.insertRule('#TabsContainer .Title {'
                     + 'margin-left: -5px; '
                     + 'font: bold 12px/22px Tahoma, Helvetica, Arial, sans-serif; '
                     + 'color: #B14;}'
                    );

    sheet.insertRule('#TabsContainer .subTitle {'
                     + 'padding-top: 10px; '
                     + 'font-weight: bold; '
                     + 'display: block;}'
                    );

    sheet.insertRule('#TabsContainer img {'
                     + 'width: 14px; '
                     + 'height: 14px; '
                     + 'vertical-align: text-bottom;}'
                    );

    sheet.insertRule('.StatsContent, #TabsContainer span, #TabsContainer img, #TabsContainer a, #TabsContainer b, #TabsContainer br {'
                     + 'box-sizing: content-box;}'
                    );

    sheet.insertRule('#harem_whole .CustomTT {'
                     + 'float: right; '
                     + 'margin-left: -25px; '
                     + 'margin-top: -5px; '
                     + 'background-image: url("https://i.postimg.cc/qBDt6yHV/icon-question.png"); '
                     + 'background-size: 18px 18px; '
                     + 'width: 18px; '
                     + 'height: 18px; '
                     + 'visibility: none;}'
                    );

    sheet.insertRule('#harem_whole .CustomTT:hover {'
                     + 'cursor: help;}'
                    );

    sheet.insertRule('#harem_whole .CustomTT:hover + div {'
                     + 'opacity: 1; '
                     + 'visibility: visible;}'
                    );

    sheet.insertRule('#harem_whole .AffectionTooltip {'
                     + 'position: absolute; '
                     + 'z-index: 99; '
                     + 'margin: 20px 0 0 0; '
                     + 'display: block; overflow: auto; '
                     + 'border: 1px solid rgb(162, 195, 215); '
                     + 'border-radius: 8px; '
                     + 'box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1); '
                     + 'padding: 3px 7px 4px 7px; '
                     + 'background-color: #F2F2F2; '
                     + 'color: #1E90FF; '
                     + 'font: normal 9px/17px Tahoma, Helvetica, Arial, sans-serif; '
                     + 'text-align: left; '
                     + 'text-shadow: none; '
                     + 'opacity: 0; '
                     + 'visibility: hidden; '
                     + 'transition: opacity 400ms, visibility 400ms;}'
                    );

    sheet.insertRule('#collect_all_container {'
                     + 'margin-top: 0px !important;}'
                    );

    sheet.insertRule('#harem_whole .AffectionTooltip b {'
                     + 'font-weight: bold;}'
                    );

    sheet.insertRule('#harem_whole .WikiLink {'
                     + 'font-size: 12px;}'
                    );

    sheet.insertRule('#harem_whole .WikiLinkDialogbox a {'
                     + 'text-decoration: none; '
                     + 'color: #24a0ff !important;}'
                    );

    sheet.insertRule('#harem_whole .imgStar, #harem_whole .imgMoney, #harem_whole .imgKobans, #haremwhole .imgStar, #harem_whole .imgMoney, #harem_whole .imgKobans {'
                     + 'background-size: 10px 10px; '
                     + 'background-repeat: no-repeat; '
                     + 'width: 10px; '
                     + 'height: 14px; '
                     + 'display: inline-block;}'
                    );

    sheet.insertRule('#harem_whole .imgStar, #harem_left .imgStar {'
                     + 'background-image: url("https://i.postimg.cc/L6h1xv38/icon-star.png");}'
                    );

    sheet.insertRule('#harem_whole .imgMoney, #harem_left .imgMoney {'
                     + 'background-image: url("https://i.postimg.cc/wv01VstN/icon-currency-ymen.png");}'
                    );

    sheet.insertRule('#harem_whole .imgKobans, #harem_left .imgKobans {'
                     + 'background-image: url("https://i.postimg.cc/9fPRDkCJ/icon-currency-koban.png");}'
                    );

    sheet.insertRule('#hh_comix #harem_whole .imgMoney, #hh_comix #harem_left .imgMoney {'
                     + 'height: 12px; '
                     + 'background-image: url("https://ch.hh-content.com/pictures/design/ic_topbar_soft_currency.png");}'
                     );

    sheet.insertRule('#hh_comix #harem_whole .imgKobans, #hh_comix #harem_left .imgKobans {'
                     + 'background-size: 12px 12px; '
                     + 'width: 12px; '
                     + 'height: 14px; '
                     + 'background-image: url("https://ch.hh-content.com/pictures/design/ic_topbar_hard_currency.png");}'
                     );
}
