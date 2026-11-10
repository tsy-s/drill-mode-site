import { createContext, useContext } from 'react';
import { useTheme } from '../../theme/ThemeProvider';
import { roomTime, type RoomStyle, type RoomTime } from './roomStyle';

/*
 * Day and night rooms, as in the app (huawei-2026/src/app/components/room/lighting.tsx). A room
 * works out whether it is day or night for the visitor, then:
 *   - its outer box gets roomScope(time): data-theme, so anything drawn with tokens inside the
 *     room follows the room (light tokens in a day room, dark at night), and data-room-time
 *   - RoomBackdrop draws the day or night wallpaper and floor (src/styles/room-style.css)
 *   - <RoomTimeProvider> tells the furniture inside, so windows show a day sky (furnitureSrc)
 */

const RoomTimeContext = createContext<RoomTime | null>(null);
export const RoomTimeProvider = RoomTimeContext.Provider;
export function useRoomTimeContext() { return useContext(RoomTimeContext); }

/** Day or night for this room, for the visitor (their theme). */
export function useRoomTime(style?: Pick<RoomStyle, 'lighting'>): RoomTime {
  const { theme } = useTheme();
  return roomTime(style, theme);
}

/** A roof (and the house's walls and door) follows the visitor's theme, whatever the rooms are set to. */
export function useRoofTime(): RoomTime {
  const { theme } = useTheme();
  return roomTime(undefined, theme);
}

/** Attributes for a room's outer box: its colour tokens follow the room, not the page. */
export function roomScope(time: RoomTime) {
  const palette = typeof document !== 'undefined' ? document.documentElement.dataset.palette : undefined;
  return time === 'day'
    ? { 'data-theme': 'light', 'data-palette': palette, 'data-room-time': 'day' } as const
    : { 'data-theme': 'dark', 'data-room-time': 'night' } as const;
}

/** Window pieces with a day-sky twin (public/furniture/<art>-day.svg). */
const DAY_ART = new Set(['08-city-window', '09-curtained-window', '34-skylight']);
/** The furniture file for this room's time of day. */
export function furnitureSrc(art: string, time: RoomTime) {
  return `/furniture/${art}${time === 'day' && DAY_ART.has(art) ? '-day' : ''}.svg`;
}
