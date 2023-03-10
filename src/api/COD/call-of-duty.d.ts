declare enum platforms {
  All = 'all',
  Activision = 'acti',
  Battlenet = 'battle',
  PSN = 'psn',
  Steam = 'steam',
  Uno = 'uno',
  XBOX = 'xbl',
  NULL = '_',
}
declare enum games {
  ModernWarfare = 'mw',
  ModernWarfare2 = 'mw2',
  Vanguard = 'vg',
  ColdWar = 'cw',
  NULL = '_',
}
declare enum friendActions {
  Invite = 'invite',
  Uninvite = 'uninvite',
  Remove = 'remove',
  Block = 'block',
  Unblock = 'unblock',
}
declare const enableDebugMode: () => boolean;
declare const disableDebugMode: () => boolean;
declare const login: (ssoToken: string) => boolean;
declare class WZ {
  fullData: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistory: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistoryWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  breakdown: (gamertag: string, platform: platforms) => Promise<any>;
  breakdownWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  matchInfo: (matchId: string, platform: platforms) => Promise<any>;
  cleanGameMode: (mode: string) => Promise<string>;
}
declare class MW {
  fullData: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistory: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistoryWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  breakdown: (gamertag: string, platform: platforms) => Promise<any>;
  breakdownWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  matchInfo: (matchId: string, platform: platforms) => Promise<any>;
  seasonloot: (gamertag: string, platform: platforms) => Promise<any>;
  mapList: (platform: platforms) => Promise<any>;
}
declare class MW2 {
  fullData: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistory: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistoryWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  breakdown: (gamertag: string, platform: platforms) => Promise<any>;
  breakdownWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  seasonloot: (gamertag: string, platform: platforms) => Promise<any>;
  mapList: (platform: platforms) => Promise<any>;
  matchInfo: (matchId: string, platform: platforms) => Promise<any>;
}
declare class WZ2 {
  fullData: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistory: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistoryWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  breakdown: (gamertag: string, platform: platforms) => Promise<any>;
  breakdownWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  matchInfo: (matchId: string, platform: platforms) => Promise<any>;
}
declare class CW {
  fullData: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistory: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistoryWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  breakdown: (gamertag: string, platform: platforms) => Promise<any>;
  breakdownWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  seasonloot: (gamertag: string, platform: platforms) => Promise<any>;
  mapList: (platform: platforms) => Promise<any>;
  matchInfo: (matchId: string, platform: platforms) => Promise<any>;
}
declare class VG {
  fullData: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistory: (gamertag: string, platform: platforms) => Promise<any>;
  combatHistoryWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  breakdown: (gamertag: string, platform: platforms) => Promise<any>;
  breakdownWithDate: (
    gamertag: string,
    startTime: number,
    endTime: number,
    platform: platforms
  ) => Promise<any>;
  seasonloot: (gamertag: string, platform: platforms) => Promise<any>;
  mapList: (platform: platforms) => Promise<any>;
  matchInfo: (matchId: string, platform: platforms) => Promise<any>;
}
declare class SHOP {
  purchasableItems: (gameId: string) => Promise<any>;
  bundleInformation: (title: string, bundleId: string) => Promise<any>;
  battlePassLoot: (
    title: games,
    season: number,
    platform: platforms
  ) => Promise<any>;
}
declare class USER {
  friendFeed: (gamertag: string, platform: platforms) => Promise<any>;
  eventFeed: () => Promise<any>;
  loggedInIdentities: () => Promise<any>;
  codPoints: (gamertag: string, platform: platforms) => Promise<any>;
  connectedAccounts: (gamertag: string, platform: platforms) => Promise<any>;
  settings: (gamertag: string, platform: platforms) => Promise<any>;
  friendAction: (
    gamertag: string,
    platform: platforms,
    action: friendActions
  ) => Promise<any>;
}
declare class ALT {
  search: (gamertag: string, platform: platforms) => Promise<any>;
  cleanWeapon: (weapon: string) => Promise<string>;
}
declare const Warzone: WZ;
declare const ModernWarfare: MW;
declare const ModernWarfare2: MW2;
declare const Warzone2: WZ2;
declare const ColdWar: CW;
declare const Vanguard: VG;
declare const Store: SHOP;
declare const Me: USER;
declare const Misc: ALT;

export {
  login,
  platforms,
  friendActions,
  Warzone,
  ModernWarfare,
  ModernWarfare2,
  Warzone2,
  ColdWar,
  Vanguard,
  Store,
  Me,
  Misc,
  enableDebugMode,
  disableDebugMode,
};
