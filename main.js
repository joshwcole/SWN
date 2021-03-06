/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  d: d,
  roll2d: roll2d,
  roll3d: roll3d,
}

function d(val) {
  return Math.floor(Math.random()*(val)+1);
}

function roll2d(val) {
  return d(val) + d(val);
}

function roll3d(val) {
  return d(val) + d(val) + d(val);
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  atmosphere:    ["Corrosive", "Inert gas", "Airless", "Breathable", "Breathable", "Breathable", "Breathable", "Breathable", "Thick atmosphere", "Toxic", "Corrosive and invasive"],
  temperature:   ["Frozen", "Cold", "Chill", "Chill", "Temperate", "Temperate", "Temperate", "Temperate", "Warmish", "Warmish", "Warm", "Burning"],
  biosphere:     ["Biosphere remnants", "Microbal Bio", "No Bio", "No Bio", "Human-micible bio", "Human-micible bio", "Human-micible bio", "Immicible bio", "Immicible bio", "Hybrid bio", "Engineered Bio"],
  population:    ["Failed colony", "Outpost", "Tens of Thousands", "Tens of Thousands", "Hundreds of Thousands", "Hundreds of Thousands", "Hundreds of Thousands", "Millions", "Millions", "Billions", "Aliens"],
  techLevel:     ["TL 0", "TL 1", "TL 2", "TL 3", "TL 3", "TL 4", "TL 4", "TL 4", "TL 4", "TL 4 with pre-tech or specialities", "TL 5"],
  worldTags:     [["Abandoned Colony", "Alien Ruins", "Altered Humanity", "Area 51", "Badlands World", "Bubble Cities", "Civil War", "Cold War", "Colonized Population", "Desert World"],
                  ["Eugenic Cult", "Exchange Consulate", "Feral World", "Flying Cities", "Forbidden Tech", "Freak Geology", "Freak Weather", "Friendly Foe", "Gold Rush", "Hatred"],
                  ["Heavy Industry", "Heavy Mining", "Hostile Biosphere", "Hostile Space", "Local Speciality", "Local Tech", "Major Scrapyard", "Minimal Contact", "Misandry/Misogyny", "Oceanic World"],
                  ["Out of Contact", "Outpost World", "Perimeter Agency", "Pilmgrimage Site", "Police State", "Preceptor Archive", "Pretech Cultists", "Primitive Aliens", "Psionics Fear", "Psionics Worship"],
                  ["Psionics Academy", "Quarantined World", "Radioactive World", "Regional Hegemon", "Restrictive Laws", "Rigid Culture", "Seagoing Cities", "Sealed Menace", "Sectarians", "Seismic Instability"],
                  ["Secret Masters", "Theocracy", "Tomb World", "Trade Hub", "Tyranny", "Unbraked AI", "Warlords", "Xenophiles", "Xenophobes", "Zombies"]
                 ],
  cultures:      ["Arabic", "Chinese", "English", "Indian", "Japanese", "Nigerian", "Russian", "Spanish"],
  shortCultures: ["arb", "chi", "eng", "ind", "jap", "nig", "rus", "spa"],
  arabicNames:   [["Aamir", "Aisha", "Abdel"],
                  ["Ayub", "Alimah", "Awad"],
                  ["Binyamin", "Badia", "Dahhak"],
                  ["Efraim", "Bisharah", "Essa"],
                  ["Ibrahim", "Chanda", "Hanna"],
                  ["Ilyas", "Daliya", "Harbi"],
                  ["Ismail", "Fatimah", "Hassan"],
                  ["Jibril", "Ghania", "Isa"],
                  ["Jumanah", "Halah", "Kasim"],
                  ["Kazi", "Kaylah", "Katib"],
                  ["Lut", "Khayrah", "Khalil"],
                  ["Matta", "Layla", "Malik"],
                  ["Mohammed", "Mina", "Mansoor"],
                  ["Mubarak", "Munisa", "Mazin"],
                  ["Mustafa", "Mysha", "Musa"],
                  ["Nazir", "Naimah", "Najeeb"],
                  ["Rahim", "Nissa", "Namari"],
                  ["Reza", "Nura", "Naser"],
                  ["Sharif", "Parveen", "Rahman"],
                  ["Taimur", "Rana", "Rasheed"],
                  ["Usman", "Shalha", "Saleh"],
                  ["Yakub", "Suhira", "Salim"],
                  ["Yusuf", "Tahirah", "Shadi"],
                  ["Zakariya", "Yasmin", "Sulaiman"],
                  ["Zubair", "Zulehka", "Tabari"]
                 ],
  chineseNames:  [["Aiguo","Biyu","Bai"],
                  ["Bohai","Changying Cao"],
                  ["Chao","Daiyu","Chen"],
                  ["Dai","Huidai","Cui"],
                  ["Dawei","Huiliang Ding"],
                  ["Duyi","Jia","Du"],
                  ["Fa","Jingfei","Fang"],
                  ["Fu","Lan","Fu"],
                  ["Gui","Liling","Guo"],
                  ["Hong","Liu","Han"],
                  ["Jianyu Meili","Hao"],
                  ["Kang","Niu","Huang"],
                  ["Li","Peizhi","Lei"],
                  ["Niu","Qiao","Li"],
                  ["Peng","Qing","Liang"],
                  ["Quan","Ruolan","Liu"],
                  ["Ru","Shu","Long"],
                  ["Shen","Suyin","Song"],
                  ["Shi","Ting","Tan"],
                  ["Song","Xia","Tang"],
                  ["Tao","Xiaowen Wang"],
                  ["Xue","Xiulan Wu"],
                  ["Yi","Ya","Xing"],
                  ["Yuan","Ying","Yang"],
                  ["Zian","Zhilan Zhang"]
                 ],
  englishNames:  [["Adam", "Abigail", "Barker"],
                  ["Albert", "Anne", "Brown"],
                  ["Alfred", "Beatrice", "Butler"],
                  ["Allan", "Blanche", "Carter"],
                  ["Archibald", "Catherine", "Chapman"],
                  ["Arthur", "Charlotte", "Collins"],
                  ["Basil", "Claire", "Cook"],
                  ["Charles", "Eleanor", "Davies"],
                  ["Colin", "Elizabeth", "Gray"],
                  ["Donald", "Emily", "Green"],
                  ["Douglas", "Emma", "Harris"],
                  ["Edgar", "Georgia", "Jackson"],
                  ["Edmund", "Harriet", "Jones"],
                  ["Edward", "Joan", "Lloyd"],
                  ["George", "Judy", "Miller"],
                  ["Harold", "Julia", "Roberts"],
                  ["Henry", "Lucy", "Smith"],
                  ["Ian", "Lydia", "Taylor"],
                  ["James", "Margaret", "Thomas"],
                  ["John", "Mary", "Turner"],
                  ["Lewis", "Molly", "Watson"],
                  ["Oliver", "Nora", "White"],
                  ["Philip", "Rosie", "Williams"],
                  ["Richard", "Sarah", "Wood"],
                  ["William", "Victoria", "Young"]
                 ],
  indianNames:   [["Amrit","Amala","Achari"],
                  ["Ashok","Asha","Banerjee"],
                  ["Chand","Chandra","Bhatnagar"],
                  ["Dinesh","Devika","Bose"],
                  ["Gobind","Esha","Chauhan"],
                  ["Harinder","Gita","Chopra"],
                  ["Jagdish","Indira","Das"],
                  ["Johar","Indrani","Dutta"],
                  ["Kurien","Jaya","Gupta"],
                  ["Lakshman","Jayanti","Johar"],
                  ["Madhav","Kiri","Kapoor"],
                  ["Mahinder","Lalita","Mahajan"],
                  ["Mohal","Malati","Malhotra"],
                  ["Narinder","Mira","Mehra"],
                  ["Nikhil","Mohana","Nehru"],
                  ["Omrao","Neela","Patil"],
                  ["Prasad","Nita","Rao"],
                  ["Pratap","Rajani","Saxena"],
                  ["Ranjit","Sarala","Sharma"],
                  ["Sanjay","Sarika","Sharma"],
                  ["Shankar","Sheela","Singh"],
                  ["Thakur","Sunita","Trivedi"],
                  ["Vijay","Trishna","Venkatesan"],
                  ["Vipul","Usha","Verma"],
                  ["Yash","Vasanta","Yadav"]
                 ],
  japaneseNames: [["Akira", "Aemi", "Abe"],
                  ["Daisuke", "Airi", "Arakaki"],
                  ["Fukashi", "Ako", "Endo"],
                  ["Goro", "Ayu", "Fujiwara"],
                  ["Hiro", "Chikaze", "Goto"],
                  ["Hiroya", "Eriko", "Ito"],
                  ["Hotaka", "Hina", "Kikuchi"],
                  ["Katsu", "Kaori", "Kinjo"],
                  ["Katsuto", "Keiko", "Kobayashi"],
                  ["Keishuu", "Kyouka", "Koga"],
                  ["Kyuuto", "Mayumi", "Komatsu"],
                  ["Mikiya", "Miho", "Maeda"],
                  ["Mitsunobu", "Namiko", "Nakamura"],
                  ["Mitsuru", "Natsu", "Narita"],
                  ["Naruhiko", "Nobuko", "Ochi"],
                  ["Nobu", "Rei", "Oshiro"],
                  ["Shigeo", "Ririsa", "Saito"],
                  ["Shigeto", "Sakimi", "Sakamoto"],
                  ["Shou", "Shihoko", "Sato"],
                  ["Shuji", "Shika", "Suzuki"],
                  ["Takaharu", "Tsukiko", "Takahashi"],
                  ["Teruaki", "Tsuzune", "Tanaka"],
                  ["Tetsushi", "Yoriko", "Watanabe"],
                  ["Tsukasa", "Yorimi", "Yamamoto"],
                  ["Yasuharu", "Yoshiko", "Yamasaki"]
                 ],
  nigerianNames: [["Adesegun","Abike","Adegboye"],
                  ["Akintola","Adesuwa","Adeniyi"],
                  ["Amabere","Adunola","Adeyeku"],
                  ["Arikawe","Anguli","Adunola"],
                  ["Asagwara","Arewa","Agbaje"],
                  ["Chidubem","Asari","Akpan"],
                  ["Chinedu","Bisola","Akpehi"],
                  ["Chiwetei","Chioma","Aliki"],
                  ["Damilola","Eduwa","Asuni"],
                  ["Esangbedo", "Emilohi","Babangida"],
                  ["Ezenwoye","Fehintola","Ekim"],
                  ["Folarin","Folasade","Ezeiruaku"],
                  ["Genechi","Mahparah","Fabiola"],
                  ["Idowu","Minika","Fasola"],
                  ["Kelechi","Nkolika","Nwokolo"],
                  ["Ketanndu","Nkoyo","Nzeocha"],
                  ["Melubari","Nuanae","Ojo"],
                  ["Nkanta","Obioma","Okonkwo"],
                  ["Obafemi","Olafemi","Okoye"],
                  ["Olatunde","Shanumi","Olaniyan"],
                  ["Olumide","Sominabo","Olawale"],
                  ["Tombari","Suliat","Olumese"],
                  ["Udofia","Tariere","Onajobi"],
                  ["Uyoata","Temedire","Soyinka"],
                  ["Uzochi","Yemisi","Yamusa"]
                 ],
  russianNames:  [["Aleksandr","Aleksandra","Abelev"],
                  ["Andrei","Anastasia","Bobrikov"],
                  ["Arkady","Anja","Chemerkin"],
                  ["Boris","Catarina","Gogunov"],
                  ["Dmitri","Devora","Gurov"],
                  ["Dominik","Dima","Iltchenko"],
                  ["Grigory","Ekaterina","Kavelin"],
                  ["Igor","Eva","Komarov"],
                  ["Ilya","Irina","Korovin"],
                  ["Ivan","Karolina","Kurnikov"],
                  ["Kiril","Katlina","Lebedev"],
                  ["Konstantin","Kira","Litvak"],
                  ["Leonid","Ludmilla","Mekhdiev"],
                  ["Nikolai","Mara","Muraviov"],
                  ["Oleg","Nadezdha","Nikitin"],
                  ["Pavel","Nastassia","Ortov"],
                  ["Petr","Natalya","Peshkov"],
                  ["Sergei","Oksana","Romasko"],
                  ["Stepan","Olena","Shvedov"],
                  ["Valentin","Olga","Sikorski"],
                  ["Vasily","Sofia","Stolypin"],
                  ["Viktor","Svetlana","Turov"],
                  ["Yakov","Tatyana","Volokh"],
                  ["Yegor","Vilma","Zaitsev"],
                  ["Yuri","Yelena","Zhukov"]
                 ],
  spanishNames:  [["Alejandro Adalina","Arellano"],
                  ["Alonso","Aleta","Arispana"],
                  ["Amelio","Ana","Borrego"],
                  ["Armando","Ascencion","Carderas"],
                  ["Bernardo","Beatriz","Carranzo"],
                  ["Carlos","Carmela","Cordova"],
                  ["Cesar","Celia","Enciso"],
                  ["Diego","Dolores","Espejo"],
                  ["Emilio","Elena","Gavilan"],
                  ["Estevan","Emelina","Guerra"],
                  ["Felipe","Felipa","Guillen"],
                  ["Francisco","Inez","Huertas"],
                  ["Guillermo","Isabel","Illan"],
                  ["Javier","Jacinta","Jurado"],
                  ["Jose","Lucia","Moretta"],
                  ["Juan","Lupe","Motolinia"],
                  ["Julio","Maria","Pancorbo"],
                  ["Luis","Marta","Paredes"],
                  ["Pedro","Nina","Quesada"],
                  ["Raul","Paloma","Roma"],
                  ["Ricardo","Rafaela","Rubiera"],
                  ["Salvador","Soledad","Santoro"],
                  ["Santiago","Teresa","Torrillas"],
                  ["Valeriano","Valencia","Vera"],
                  ["Vicente","Zenaida Vivero"]
                 ],
  arabicPlaces:  ["Adan", "Ahsa", "Andalus", "Asmara", "Asqlan", "Baqubah", "Basit", "Baysan", "Baytlahm", "Bursaid", "Dahilah", "Darasalam", "Dawhah", "Ganin", "Gebal", "Gibuti", "Giddah", "Harmah", "Hartum", "Hibah", "Hims", "Hubar", "Karbala", "Kut", "Lacant", "Magrit", "Masqat", "Misr", "Muruni", "Qabis", "Qina", "Rabat", "Ramlah", "Riyadh", "Sabtah", "Salalah", "Sana", "Sinqit", "Suqutrah", "Sur", "Tabuk", "Tangah", "Tarifah", "Tarrakunah", "Tisit", "Uman", "Urdunn", "Wasqah", "Yaburah", "Yaman"],
  chinesePlaces: ["Andong","Anqing","Anshan","Chaoyang","Chaozhou","Chifeng","Dalian","Dunhuang","Fengjia","Fengtian","Fuliang","Fushun","Gansu","Ganzhou","Guizhou","Hotan","Hunan","Jinan","Jingdezhen","Jinxi","Jinzhou","Kunming","Liaoning","Linyi","Lushun","Luzhou","Ningxia","Pingxiang","Pizhou","Qidong","Qingdao","Qinghai","Rehe","Shanxi","Taiyuan","Tengzhou","Urumqi","Weifang","Wugang","Wuxi","Xiamen","Xian","Xikang","Xining","Xinjiang","Yidu","Yingkou","Yuxi","Zigong","Zoige"],
  englishPlaces: ["Aldington", "Appleton", "Ashdon", "Berwick", "Bramford", "Brimstage", "Carden", "Churchill", "Clifton", "Colby", "Copford", "Cromer", "Davenham", "Dersingham", "Doverdale", "Elsted", "Ferring", "Gissing", "Heydon", "Holt", "Hunston", "Hutton", "Inkberrow", "Inworth", "Isfi", "Kedington", "Latchford", "Leigh", "Leighton", "Maresfield", "Markshall", "Netherpool", "Newton", "Oxton", "Preston", "Ridley", "Rochford", "Seaford", "Selsey", "Stanton", "Stockham", "Stoke", "Sutton", "Thakeham", "Thetford", "Thorndon", "Ulting", "Upton", "Westhorpe", "Worcester"],
  indianPlaces:  ["Ahmedabad","Alipurduar","Alubari","Anjanadri","Ankleshwar","Balarika","Bhanuja","Bhilwada","Brahmaghosa","Bulandshahar","Candrama","Chalisgaon","Chandragiri","Charbagh","Chayanka","Chittorgarh","Dayabasti","Dikpala","Ekanga","Gandhidham","Gollaprolu","Grahisa","Guwahati","Haridasva","Indraprastha","Jaisalmer","Jharonda","Kadambur","Kalasipalyam","Karnataka","Kutchuhery","Lalgola","Mainaguri","Nainital","Nandidurg","Narayanadri","Panipat","Panjagutta","Pathankot","Pathardih","Porbandar","Rajasthan","Renigunta","Sewagram","Shakurbasti","Siliguri","Sonepat","Teliwara","Tinpahar","Villivakkam"],
  japanesePlaces:["Bando", "Chikuma", "Chikusei", "Chino", "Hitachi", "Hitachinaka", "Hitachiomiya", "Hitachiota", "Iida", "Iiyama", "Ina", "Inashiki", "Ishioka", "Itako", "Kamisu", "Kasama", "Kashima", "Kasumigaura", "Kitaibaraki", "Kiyose", "Koga", "Komagane", "Komoro", "Matsumoto", "Mito", "Mitsukaido", "Moriya", "Nagano", "Naka", "Nakano", "Ogi", "Okaya", "Omachi", "Ryugasaki", "Saku", "Settsu", "Shimotsuma", "Shiojiri", "Suwa", "Suzaka", "Takahagi", "Takeo", "Tomi", "Toride", "Tsuchiura", "Tsukuba", "Ueda", "Ushiku", "Yoshikawa", "Yuki"],
  nigerianPlaces:["Abadan","Ador","Agatu","Akamkpa","Akpabuyo","Ala","Askira","Bakassi","Bama","Bayo","Bekwara","Biase","Boki","Buruku","Calabar","Chibok","Damboa","Dikwa","Etung","Gboko","Gubio","Guzamala","Gwoza","Hawul","Ikom","Jere","Kalabalge","Katsina","Knoduga","Konshishatse","Kukawa","Kwande","Kwayakusar","Logo","Mafa","Makurdi","Nganzai","Obanliku","Obi","Obubra","Obudu","Odukpani","Ogbadibo","Ohimini","Okpokwu","Otukpo","Shani","Ugep","Vandeikya","Yala"],
  russianPlaces: ["Amur","Arkhangelsk","Astrakhan","Belgorod","Bryansk","Chelyabinsk","Chita","Gorki","Irkutsk","Ivanovo","Kaliningrad","Kaluga","Kamchatka","Kemerovo","Kirov","Kostroma","Kurgan","Kursk","Leningrad","Lipetsk","Magadan","Moscow","Murmansk","Novgorod","Novosibirsk","Omsk","Orenburg","Oryol","Penza","Perm","Pskov","Rostov","Ryazan","Sakhalin","Samara","Saratov","Smolensk","Sverdlovsk","Tambov","Tomsk","Tula","Tver","Tyumen","Ulyanovsk","Vladimir","Volgograd","Vologda","Voronezh","Vyborg","Yaroslavl"],
  spanishPlaces: ["Aguascebas","Alcazar","Barranquete","Bravatas","Cabezudos","Calderon","Cantera","Castillo","Delgadas","Donablanca","Encinetas","Estrella","Faustino","Fuentebravia","Gafarillos","Gironda","Higueros","Huelago","Humilladero","Illora","Isabela","Izbor","Jandilla","Jinetes","Limones","Loreto","Lujar","Marbela","Matagorda","Nacimiento","Niguelas","Ogijares","Ortegicar","Pampanico","Pelado","Quesada","Quintera","Riguelo","Ruescas","Salteras","Santopitar","Taberno","Torres","Umbrete","Valdecazorla","Velez","Vistahermosa","Yeguas","Zahora","Zumeta"],
  adventures:    ["An Enemy seeks to rob a Friend of some precious Thing that he has desired for some time.",
                  "A Thing has been discovered on property owned by a Friend, but a Complication risks its destruction.",
                  "A Complication suddenly hits the party while they’re out doing some innocuous activity.",
                  "The players unwittingly offend or injure an Enemy, incurring his or her wrath. A Friend offers help in escaping the consequences.",
                  "Rumor speaks of the discovery of a precious Thing in a distant Place. The players must get to it before an Enemy does.",
                  "An Enemy has connections with off world pirates or slavers, and a Friend has been captured by them.",
                  "A Place has been seized by violent revolutionaries or rebels, and a Friend is being held hostage by them.",
                  "A Friend is in love with someone forbidden by social convention, and the two of them need help eloping.",
                  "An Enemy wields tyrannical power over a Friend, relying on the bribery of corrupt local officials to escape consequences.",
                  "A Friend has been lost in hostile wilderness, and the party must reach a Place to rescue them in the teeth of a dangerous Complication.",
                  "An Enemy has committed a grave offense against a PC or their family sometime in the past. A Friend shows the party a weakness in the Enemy’s defenses.",
                  "The party is suddenly caught in a conflict between two warring families or political parties.",
                  "The party is framed for a crime by an Enemy, and must reach the sanctuary of a Place before they can regroup and find the Thing that will prove their innocence and their Enemy’s perfidy.",
                  "A Friend is threatened by a tragedy of sickness, legal calamity, or public humiliation, and the only one that seems able to save them is an Enemy.",
                  "A natural disaster or similar Complication strikes a Place while the party is present, causing great loss of life and property unless the party is able to immediately respond to the injured and trapped.",
                  "A Friend with a young business has struck a cache of pretech, valuable minerals, or precious salvage. He needs the party to help him reach the Place where the valuables are.",
                  "An oppressed segment of society starts a sudden revolt in the Place the party is occupying. An Enemy simply lumps the party in with the rebels and tries to put the revolt down with force. A Friend offers them a way to either help the rebels or clear their names.",
                  "A vulnerable Friend has been targeted for abduction, and has need of guards. A sudden Complication makes guarding them from the Enemy seeking their kidnapping much more difficult. If the Friend is snatched, they must rescue them from a Place.",
                  "A mysterious Place offers the promise of some precious Thing, but access is very dangerous due to wildlife, hostile locals, or a dangerous environment.",
                  "An Enemy and a Friend both have legal claim on a Thing, and seek to undermine each other’s case. The Enemy is willing to do murder if he thinks he can get away with it.",
                  "An Enemy seeks the death of his brother, a Friend, by arranging the failure of his grav flyer or shuttlecraft in dangerous terrain while the party is coincidentally aboard. The party must survive the environment and bring proof of the crime out with them.",
                  "A Friend seeks to slip word to a lover, one who is also being courted by the Friend’s brother, who is an Enemy. A Complication threatens to cause death or disgrace to the lover unless they either accept the Enemy’s suit or are helped by the party.",
                  "An Enemy is convinced that one of the party has committed adultery with their flirtatious spouse. He means to lure them to a Place, trap them, and have them killed by the dangers there.",
                  "An Enemy has been driven insane by exotic recreational drugs or excessive psionic torching. He fixes on a PC as being his mortal nemesis, and plots elaborate deaths, attempting to conceal his involvement amid Complications.",
                  "A Friend has stolen a precious Thing from an Enemy and fled into a dangerous, inaccessible Place. The party must rescue them, and decide what to do with the Thing and the outraged Enemy.",
                  "An Enemy has realized that their brother or sister has engaged in a socially unacceptable affair with a Friend, and means to kill both of them unless stopped by the party.",
                  "A Friend has accidentally caused the death of a family member, and wants the party to help him hide the body or fake an accidental death before his family realizes what has happened. A Complication suddenly makes the task more difficult.",
                  "A Friend is a follower of a zealous ideologue who plans to make a violent demonstration of the righteousness of his cause, causing a social Complication. The Friend will surely be killed in the aftermath if not rescued or protected by the party.",
                  "A Friend’s sibling is to be placed in a dangerous situation they’ve got no chance of surviving. The Friend takes their place at the last",
                  "Suicide bombers detonate an explosive, chemical, or biological weapon in a Place occupied by the party where a precious Thing is stored The PCs must escape before the Place collapses on top of them, navigating throngs of terrified people in the process and saving the Thing if possible.",
                  "An Enemy who controls landing permits, oxygen rations, or some other important resource has a prejudice against one or more of the party members. He demands that they bring him a Thing from a dangerous Place before he’ll give them what they need.",
                  "A Friend in a loveless marriage to an Enemy seeks escape to be with their beloved, and contacts the party to snatch them from their spouse’s guards at a prearranged Place.",
                  "A Friend seeks to elope with their lover, and contacts the party to help them meet their paramour at a remote, dangerous Place. On arrival, they find that the lover is secretly an Enemy desirous of their removal and merely lured them to the place to meet their doom.",
                  "The party receives or finds a Thing which proves the crimes of an Enemy- yet a Friend was complicit in the crimes, and will be punished as well if the authorities are involved. And the Enemy will stop at nothing to get the item back.",
                  "A Friend needs to get to a Place on time in order to complete a business contract, but an Enemy means to delay and hinder them until it’s too late, inducing Complications to the trip.",
                  "A locked pretech stasis pod has been discovered by a Friend, along with directions to the hidden keycode that will open it. The Place where the keycode is hidden is now owned by an Enemy.",
                  "A fierce schism has broken out in the local majority religion, and an Enemy is making a play to take control of the local hierarchy. A Friend is on the side that will lose badly if the Enemy succeeds, and needs a Thing to prove the error of the Enemy’s faction.",
                  "A former Enemy has been given reason to repent his treatment of a Friend, and secretly commissions them to help the Friend overcome a Complication. A different Enemy discovers the connection, and tries to paint the PCs as double agents.",
                  "An alien or a human with extremely peculiar spiritual beliefs seeks to visit a Place for their own reasons. An Enemy of their own kind attempts to stop them before they can reach the Place, and reveal the Thing that was hidden there long ago.",
                  "A Friend’s sibling is an untrained psychic, and has been secretly using his or her powers to protect the Friend from an Enemy. The neural damage has finally overwhelmed their sanity, and they’ve now kidnapped the Friend to keep them safe. The Enemy is taking this opportunity to make sure the Friend “dies at the hands of their maddened sibling”.",
                  "A Friend who is a skilled precognitive has just received a fl ash of an impending atrocity to be committed by an Enemy. He or she needs the party to help them steal the Thing that will prove the Enemy’s plans while dodging the assassins sent to eliminate the precog.",
                  "A Friend who is an exotic dancer is sought by an Enemy who won’t take no for an answer. The dancer is secretly a Perimeter agent attempting to infiltrate a Place to destroy maltech research, and plots to use the party to help get him or her into the facility under the pretext of striking at the Enemy.",
                  "A young woman on an interplanetary tour needs the hire of local bodyguards. She turns out to be a trained and powerful combat psychic, but touchingly naive about local dangers, causing a social Complication that threatens to get the whole group arrested.",
                  "A librarian Friend has discovered an antique databank with the coordinates of a long-lost pretech cache hidden in a Place sacred to a long-vanished religion. The librarian is totally unsuited for danger, but necessary to decipher the obscure religious iconography needed to unlock the cache. The cache is not the anticipated Thing, but something more dangerous to the finder.",
                  "A fragment of orbital debris clips a shuttle on the way in, and the spaceport is seriously damaged in the crash. The player’s ship or the only vessel capable of getting them off -planet will be destroyed unless the players can organize a response to the dangerous chemical fires and radioactives contaminating the port. A Friend is trapped somewhere in the control tower wreckage.",
                  "A Friend is allied with a reformist religious group that seeks to break the grip of the current, oppressive hierarchy. The current hierarchs have a great deal of political support with the authorities, but the commoners resent them bitterly. The Friend seeks to secure a remote Place as a meeting-place for the theological rebels.",
                  "A microscopic black hole punctures an orbital station or starship above the world. Its interaction with the station’s artificial grav generators has thrown everything out of whack, and the station’s become a minefield of dangerously high or zero grav zones. It’s tearing itself apart, and it’s going to collapse soon. An Enemy seeks to escape aboard the last lifeboat and to Hell with everyone else, meanwhile, a Friend is trying to save his engineer daughter from the radioactive, grav-unstable engine rooms.",
                  "The planet has a sealed alien ruin, and an Enemy-led cult who worships the vanished builders. They’re convinced that they have the secret to opening and controlling the power inside the ruins, but they’re only half-right. A Friend has found evidence that shows that they’ll only devastate the planet if they meddle with the alien power planet. The party has to get inside the ruins and shut down the engines before it’s too late. Little do they realize that a few aliens survive inside, in a stasis field that will be broken by the ruin’s opening.",
                  "An Enemy and the group are suddenly trapped in a Place during an accident or Complication. They must work together to",
                  "A telepathic Friend has discovered that an Enemy was responsible for a recent atrocity. Telepathic evidence is useless on this world, however, and if she’s discovered to have scanned his mind she’ll be lobotomized as a ‘rogue psychic’. A Thing might be enough to prove his guilt, if the party can figure out how to get to it without revealing their Friend’s meddling.",
                  "A Friend is responsible for safeguarding a Thing- yet the Thing is suddenly proven to be a fake. The party must find the real object and the Enemy who stole it or else their Friend will be punished as the thief.",
                  "A Friend is bitten by a poisonous local animal while in a remote Place. The only antidote is back at civilization, yet a Complication threatens to delay the group until it is too late.",
                  "A lethal plague has started among the residents of the town, but a Complication is keeping aid from reaching them. An Enemy is taking advantage of the panic to hawk a fake cure at ruinous prices, and a Friend is taken in by him. The Complication must be overcome before help can reach the town.",
                  "A radical political party has started to institute pogroms against “groups hostile to the people”. A Friend is among those groups, and needs to get out of town before an Enemy uses the riot as cover to settle old scores.",
                  "An Enemy has sold the party an expensive but worthlessly fl awed piece of equipment before lighting out for the back country. He and his plunder are holed up at a remote Place.",
                  "A concert of off world music is being held in town, and a Friend is slated to be the star performer. Reactionary elements led by an Enemy plot to ruin the “corrupting noise” with sabotage that risks getting performers killed. Meanwhile, a crowd of ignorant off worlder fans have landed and are infuriating the locals.",
                  "An Enemy is wanted on a neighboring world for some heinous act, and a Friend turns up as a bounty hunter ready to bring him in alive. This world refuses to extradite him, so the capture and retrieval has to evade local law enforcement.",
                  "An unanticipated solar storm blocks communications and grounds the poorly-shielded grav vehicle that brought the group to this remote Place. Then people start turning up dead; the storm has awoken a dangerous Enemy beast.",
                  "A Friend has discovered a partially-complete schematic for an ancient pretech refinery unit that produces vast amounts of something precious on this world- water, oxygen, edible compounds, or the like. Several remote Places on the planet are indicated as having the necessary pretech spare parts required to build the device. When finally assembled, embedded self-modification software in the Thing modifies itself into a pretech combat bot. The salvage from it remains very valuable.",
                  "A Complication ensnares the party where they are in an annoying but seemingly ordinary event. In actuality, an Enemy is using it as cover to strike at a Friend or Thing that happens to be where the PCs are.",
                  "A Friend has a cranky, temperamental artificial heart installed, and the doctor who put it in is the only one who really understands how it works. The heart has recently started to stutter, but the doctor has vanished. An Enemy has snatched him to fit his elite assassins with very unsafe combat mods.",
                  "A local clinic is doing wonders in providing free health care to the poor. In truth, it’s a front for an off world eugenics cult, with useful “specimens” kidnapped and shipped off world while ‘cremated remains’ are given to the family. A Friend is snatched by them, but the party knows they’d have never consented to cremation as the clinic staff claim.",
                  "Space pirates have cut a deal with an isolated backwoods settlement, off loading their plunder to merchants who meet them there. A Friend goes home to family after a long absence, but is kidnapped or killed before they can bring back word of the dealings. Meanwhile, the party is entrusted with a valuable Thing that must be brought to the Friend quickly.",
                  "A reclusive psychiatrist is offering treatment for violent mentally ill patients at a remote Place. His treatments seem to actually work, calming the subjects and returning them to rationality, though major memory loss is involved and some severe social clumsiness ensues. In actuality, he’s removed large portions of their brains to fit them with remote-control units slaved to an AI in his laboratory. He intends to use them as drones to acquire more “subjects”, and eventual control of the town.",
                  "Vital medical supplies against an impending plague have been shipped in from off world, but the spike drive craft that was due to deliver them misjumped, and has arrived in-system as a lifeless wreck transmitting a blind distress signal. Whoever gets there first can hold the whole planet hostage, and an Enemy means to do just that.",
                  "A Friend has spent a substantial portion of their wealth on an ultra-modern new domicile, and invites the party to enjoy a weekend there. An Enemy has hacked the house’s computer system to trap the inhabitants inside and use the automated fittings to kill them.",
                  "A mud slide, hurricane, earthquake, or other form of disaster strikes a remote settlement. The party is the closest group of responders, and must rescue the locals while dealing with the unearthed, malfunctioning pretech Thing that threatens to cause an even greater calamity if not safely defused.",
                  "A Friend has found a lost pretech installation, and needs help to loot it. By planetary law, the contents belong to the government. ",
                  "An Enemy mistakes the party for the kind of off worlders who will murder innocents for pay- assuming they aren’t that kind, at least. He’s sloppy with the contact and unwittingly identifies himself, letting the players know that a Friend will shortly die unless the Enemy is stopped.",
                  "A party member is identified as a prophesied saviour for an oppressed faith or ethnicity. The believers obstinately refuse to believe any protestations to the contrary, and a cynical Enemy in government decides the PC must die simply to prevent the risk of uprising. An equally cynical Friend is determined to push the PC forward as a savior, because that’s what’s needed.",
                  "Alien beasts escape from a zoo and run wild through the spectators. The panicked owner offers large rewards for recapturing them live, but some of the beasts are quite dangerous.",
                  "A trained psychic is accused of going feral by an Enemy. The psychic had already suffered severe neural damage before being found for training, so brain scans cannot establish physical signs of madness. The psychic seems unstable, but not violent- at least, on short acquaintance. The psychic offers a psychic PC the secrets of psychic mentorship training if they help him flee.",
                  "A Thing is the token of rulership on this world, and it’s gone missing. If it’s not found rapidly, the existing ruler will be deposed. Evidence left at a Place suggests that an Enemy has it, but extralegal means are necessary to investigate fully.",
                  "Psychics are vanishing, including a Friend. They’re being kidnapped by an ostensibly-rogue government researcher who is using them to research the lost psychic disciplines that helped enable pretech manufacturing, and being held at a remote Place. The snatcher is a small-time local Enemy with unnaturally ample resources.",
                  "A Friend desperately seeks to hide evidence of some past crime that will ruin his life should it come to light. An Enemy holds the Thing that proves his involvement, and blackmails him ruthlessly.",
                  "A courier mistakes the party for the wrong set of off worlders, and wordlessly deposits a Thing with them that implies something awful- med-frozen, child-sized human organs, for example, or a private catalog of gengineered human slaves. The courier’s boss shortly realizes the error, and this Enemy tries to silence the PCs while preserving the Place where his evil is enacted.",
                  "A slowboat system freighter is taken over by Enemy separatist terrorists at the same time as the planet’s space defenses are taken offline by internal terrorist attacks. The freighter is aimed straight at the starport, and will crash into it in hours if not stopped.",
                  "Alien artifacts on the planet’s surface start beaming signals into the system’s asteroid belt. The signals provoke a social Complication in panicked response, and an Enemy seeks to use the confusion to take over. The actual effect of the signals might be harmless, or might summon a long-lost alien AI warship to scourge life from the world.",
                  "An alien ambassador Friend is targeted by xenophobe Enemy assassins. Relations are so fragile that if the ambassador even realizes that humans are making a serious effort to kill him, the result may be war.",
                  "A new religion is being preached by a Friend on this planet. Existing faiths are not amused, and an Enemy among the hierarchy is provoking the people to persecute the new believers, hoping for things to get out of hand.",
                  "An Enemy was once the patron of a Friend until the latter was betrayed. Now the Friend wants revenge, and they think they have the information necessary to get past the Enemy’s defenses.",
                  "Vital life support or medical equipment has been sabotaged by off worlders or zealots, and must be repaired before time runs out. The only possible source of parts is at a Place, and the saboteurs can be expected to be working hard to get there and destroy them, too.",
                  "A Friend is importing off world tech that threatens to completely replace the offerings of an Enemy businessman. The Enemy seeks to sabotage the friend’s stock, and thus ‘prove’ its inferiority.",
                  "An Exchange diplomat is negotiating for the opening of a branch of the interstellar bank on this world. An Enemy among the local banks wants to show the world as being ungovernably unstable, so provokes Complications and riots around the diplomat.",
                  "An Enemy is infuriated by the uppity presumption of an ambitious Friend of a lower social caste, and tries to pin a local Complication on the results of his unnatural rejection of his proper place.",
                  "A Friend is working for an off world corporation to open a manufactory, and is ignoring local traditions that privilege certain social or ethnic groups, giving jobs to the most qualified workers instead. An angry Enemy seeks to sabotage the factory.",
                  "An off world musician who was revered as little less than a god on his homeworld requires bodyguards. He immediately acquires Enemies on this world with his riotous ways, and his guards must keep him from getting arrested if they are to be paid.",
                  "Atmospheric disturbances, dust storms, or other particulate clouds suddenly blow into town, leaving the settlement blind. An Enemy commits a murder during the darkness, and attempts to frame the players as convenient scapegoats.",
                  "An Enemy spikes the oxygen supply of an orbital station or unbreathable-atmosphere hab dome with hallucinogens as cover for a theft. Most victims are merely confused and disoriented, but some become violent in their delusions. By chance, the party’s air supply was not contaminated.",
                  "By coincidence, one of the party members is wearing clothing indicative of membership in a violent political group, and thus the party is treated in friendly fashion by a local Enemy for no obvious reason. The Enemy assumes that the party will go along with some vicious crime without complaint, and the group isn’t informed of what’s in the offing until they’re in deep.",
                  "A local ruler wishes outworlders to advise him of the quality of his execrable poetry- and is the sort to react very poorly to anything less that evidently sincere and fulsome praise. Failure to amuse the ruler results in the party being dumped in a dangerous Place to “experience truly poetic solitude”.",
                  "A Friend among the locals is unreasonably convinced that off worlder tech can repair anything, and has blithely promised a powerful local Enemy that the party can easily fix a damaged pretech Thing. The Enemy has invested in many expensive spare parts, but the truly necessary pieces are kept in a still-dangerous pretech installation in a remote Place.",
                  "The party’s off world comm gear picks up a chance transmission from the local government and automatically descrambles the primitive encryption key. The document is proof that an Enemy in government intends to commit an atrocity against a local village with a group of “deniable” renegades in order to steal a valuable Thing kept in the village.",
                  "A Friend belongs to a persecuted faith, ethnicity, or social class, and appeals for the PCs to help a cell of rebels get off world before the Enemy law enforcement finds them.",
                  "A part on the party’s ship or the only other transport out has failed, and needs immediate replacement. The only available part is held by an Enemy, who will only willingly relinquish it in exchange for a Thing held by an innocent Friend who will refuse to sell at any price.",
                  "Eugenics cultists are making gengineered slaves out of genetic material gathered at a local brothel. Some of the unnaturally tempting slaves are being slipped among the prostitutes as bait to infatuate powerful officials, while others are being sold under the table to less scrupulous elites.",
                  "Evidence has been unearthed at a Place that substantial portions of the planet are actually owned by members of an oppressed and persecuted group. The local courts have no intention of recognizing the rights, but the codes with the ownership evidence would allow someone to completely bypass a number of antique pretech defenses around the planetary governor’s palace. A Friend wants the codes to pass to his friends among the group’s rebels.",
                  "A crop smut threatens the planet’s agriculture, promising large-scale famine. A Friend finds evidence that a secret government research station in the system’s asteroid belt was conducting experiments in disease-resistant crop strains for the planet before the Silence struck and cut off communication with the station. The existing government considers it a wild goose chase, but the party might choose to help. The station has stasis-frozen samples of the crop sufficient to avert the famine, but it also has less pleasant relics....",
                  "A grasping Enemy in local government seizes the party’s ship for some trifling offense. The Enemy wants to end off world trade, and is trying to scare other traders away. The starship is held within a military cordon, and the Enemy is confident that by the time other elements of the government countermand the order, the free traders will have been spooked off .",
                  "A seemingly useless trinket purchased by a PC turns out to be the security key to a lost pretech facility. It was sold by accident by a bungling and now-dead minion of a local Enemy, who is hot after the party to “reclaim” his property... preferably after the party defeats whatever automatic defenses and bots the facility might still support."
                ],
  heights:       ["Very short", "Short", "Short", "Average height", "Average height", "Tall", "Tall", "Very tall"],
  problems:      ["Grudge against local authorities.", "Has a secret kept from their family.", "Chronic illness.", "Enmity of a local psychic.", "Has enemies at work.", "Owes loan sharks.", "Threatened with loss of family.", "Close relative in trouble with the law.", "Drug or behavioral addict", "Blackmailed by enemy"],
  jobMotivations:["Greed", "Idealistic about job", "Sense of social duty", "Force of habit", "Seeks to please another", "Feels inadequate otherwise", "Family tradition", "Religious obligation", "Nothing else, need money", "Want to get out", "It’s a stepping stone", "Spite against an enemy"],
  quirks:        ["Bald", "Bad taste in clothing", "Very thin", "Powerful build", "Bad eyesight, wears specs", "Carries work tools constantly", "Long hair", "Bearded and/or Ankle-length", "Scars all over hands", "Missing digits or an ear", "Smells like their work", "Repeats himself constantly", "Talks about tabloid articles", "Booming voice", "Dislikes off worlders", "Always snuffling", "Missing teeth", "Fastidiously neat", "Wears religious emblems", "Speaks little"],

};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const constants = __webpack_require__(1)
const core = __webpack_require__(0)

module.exports = {
  generateSector: generateSector,
  generateWorld: generateWorld,
  name: name,
  place: place,
  adventure: adventure
}

function determineAtmosphere() {
  return constants.atmosphere[core.roll2d(6) - 1];
}

function determineTemperature() {
  return constants.temperature[core.roll2d(6) - 1];
}

function determineBiosphere() {
  return constants.biosphere[core.roll2d(6) - 1];
}

function determinePopulation() {
  return constants.population[core.roll2d(6) - 1];
}

function determineTechLevel() {
  return constants.techLevel[core.roll2d(6) - 1];
}

function determineWorldTags() {
  return constants.worldTags[core.d(6) - 1][core.d(10) - 1];
}

function determineCulture() {
  return constants.cultures[core.d(8) - 1];
}

function generateWorld() {
  //var output = "Cult:  " + determineCulture() + "\nAtmos: " + determineAtmosphere() + "\nTemp:  " + determineTemperature() + "\nBios:  " + determineBiosphere() + "\nPop:   " + determinePopulation() + "\nTech:  " + determineTechLevel() + "\nTag 1: " + determineWorldTags() + "\nTag 2: " + determineWorldTags();
  return `Cult: ${determineCulture()}<br>Atmos: ${determineAtmosphere()}<br>Temp: ${determineTemperature()}<br>Bios: ${determineBiosphere()}<br>Pop: ${determinePopulation()}<br>Tech: ${determineTechLevel()}<br>Tag 1: ${determineWorldTags()}<br>Tag 2: ${determineWorldTags()}`
  /*console.log("Cult:  " + determineCulture());
  console.log("Atmos: " + determineAtmosphere());
  console.log("Temp:  " + determineTemperature());
  console.log("Bios:  " + determineBiosphere());
  console.log("Pop:   " + determinePopulation());
  console.log("Tech:  " + determineTechLevel());
  console.log("Tag 1: " + determineWorldTags());
  console.log("Tag 2: " + determineWorldTags());*/
}

function generateSector() {
  var totalPlanets = core.d(3);
  console.log(totalPlanets + " planets in the system.");
  for (var i = 0; i < totalPlanets; i++) {
    console.log("\nPLANET " + i + ":");
    console.log(generateWorld());
  };
}


function adventure() {
  return constants.adventures[core.d(100) - 1];
}

function genderToVal(gender) {
  if (gender.toLowerCase() == "m") {
    return 0;
  } else if (gender.toLowerCase() == "f") {
    return 1;
  } else {
    return core.d(2) - 1;
  }
  console.log("Something went wrong, " + gender + " is not valid for genderToVal.");
}

function name(nation, gender) {
  switch (nation.toLowerCase()) {
    case "arb":
      return constants.arabicNames[core.d(25) - 1][genderToVal(gender)] + " " + constants.arabicNames[core.d(25) - 1][2];
      break;
    case "chi":
    case "chin":
      return constants.chineseNames[core.d(25) - 1][genderToVal(gender)] + " " + constants.chineseNames[core.d(25) - 1][2];
      break;
    case "eng":
      return constants.englishNames[core.d(25) - 1][genderToVal(gender)] + " " + constants.englishNames[core.d(25) - 1][2];
      break;
    case "ind":
      return constants.indianNames[core.d(25) - 1][genderToVal(gender)] + " " + constants.indianNames[core.d(25) - 1][2];
      break;
    case "jap":
      return constants.japaneseNames[core.d(25) - 1][genderToVal(gender)] + " " + constants.japaneseNames[core.d(25) - 1][2];
      break;
    case "nig":
      return constants.nigerianNames[core.d(25) - 1][genderToVal(gender)] + " " + constants.nigerianNames[core.d(25) - 1][2];
      break;
    case "rus":
      return constants.russianNames[core.d(25) - 1][genderToVal(gender)] + " " + constants.russianNames[core.d(25) - 1][2];
      break;
    case "spa":
      return constants.spanishNames[core.d(25) - 1][genderToVal(gender)] + " " + constants.spanishNames[core.d(25) - 1][2];
      break;
  }
};

function place(nation) {
  nation == null ? nation = randomNation() : nation
  console.log("wobble")
  console.log(nation.typeof)
  switch (nation) {
    case "arb":
      return `${constants.arabicPlaces[core.d(50)-1]}`;
      break;
    case "chi":
    case "chin":
      return `${constants.chinesePlaces[core.d(50)-1]}`;
      break;
    case "eng":
      return `${constants.englishPlaces[core.d(50)-1]}`;
      break;
    case "ind":
      return constants.indianPlaces[core.d(50) - 1];
      break;
    case "jap":
      return constants.japanesePlaces[core.d(50) - 1];
      break;
    case "nig":
      return constants.nigerianPlaces[core.d(50) - 1];
      break;
    case "rus":
      return constants.russianPlaces[core.d(50) - 1];
      break;
    case "spa":
    case "span":
      return constants.spanishPlaces[core.d(50) - 1];
      break;
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const constants = __webpack_require__(1)
const core = __webpack_require__(0)

module.exports = {
    npcgen: npcgen
}

function gender() {
  return core.d(2) == 1 ? "Female" : "Male";
}

function age() {
  return core.d(3) == 1 ? "Young" : core.d(2) == 1 ? "Middle-Aged" : "Old";
}

function height() {
  return constants.heights[core.d(8)-1];
}

function problem() {
  return constants.problems[core.d(10)-1];
}

function jobMotivation() {
  return constants.jobMotivations[core.d(12)-1];
}

function quirk() {
  return constants.quirks[core.d(20)-1];
}

function npcgen() {
  return `<b>Gender</b>: ${gender()}<br><b>Age</b>: ${age()}<br><b>Height</b>: ${height()}<br><b>Problem</b>: ${problem()}<br><b>Motive</b>: ${jobMotivation()}<br><b>Quirk</b> : ${quirk()}<br>`
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const core = __webpack_require__(0);
const gen = __webpack_require__(2);
const npc = __webpack_require__(3);



var x;
var makeWorldButton = document.getElementById('makeWorld')
makeWorldButton.addEventListener('click', returnMakeWorld);

var generateNPC = document.getElementById('genNPC');
generateNPC.addEventListener('click', returnNpc);

var generatePlace = document.getElementById('genPlace');
generatePlace.addEventListener('click', returnPlace);

var generateName = document.getElementById('genName');
generateName.addEventListener('click', returnName);

var startTimer = document.getElementById('starttimer');
startTimer.addEventListener('click', returnStartTimer);

var stopTimer = document.getElementById('stoptimer');
stopTimer.addEventListener('click', returnResetTimer);

function returnStartTimer() {
  var startTime = new Date().getTime();
  x = setInterval(function() {
    var now = new Date().getTime();
    var elapsedTime = now - startTime;
    var hours = `00${Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);
    var minutes = `00${Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
    var seconds = `00${Math.floor((elapsedTime % (1000 * 60)) / 1000)}`.slice(-2);
    document.getElementById('timerOutput').innerHTML = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};

function returnResetTimer() {
  clearInterval(x)
  document.getElementById('timerOutput').innerHTML = `<span style="color:lightgrey">00:00:00</span>`;
};

function returnMakeWorld() {
  document.getElementById("output").innerHTML = gen.generateWorld();
}

function returnNpc() {
  document.getElementById("npcoutput").innerHTML = npc.npcgen();
}

function returnPlace() {
  console.log(document.getElementById("nationalityInput").value)
  var nationality = document.getElementById("nationalityInput").value
  var place = gen.place(nationality)
  document.getElementById("placeoutput").innerHTML = place;
}

function returnName() {
  var nationalityList = document.getElementById("nationalityInput");
  var nationality = nationalityList.options[nationalityList.selectedIndex].value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var name = gen.name(nationality, gender)
  document.getElementById("nameoutput").innerHTML = name;
}


/***/ })
/******/ ]);