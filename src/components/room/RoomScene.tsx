import type { ReactNode } from "react";
import { RoomBackdrop } from "./RoomBackdrop";
import { roomColors, type RoomStyle } from "./roomStyle";
import { RoomTimeProvider, furnitureSrc, roomScope, useRoomTime } from "./lighting";

export type RoomFurniture = {
  /** File name in public/furniture/, without ".svg" (e.g. "01-mint-couch"). */
  art: string;
  /** Distance from the left edge, 0–100. */
  x: number;
  /** Hang it on the wall instead of standing it on the floor. */
  wall?: boolean;
  /** Width as a percentage of the room's width (default 18). */
  size?: number;
};

/**
 * A pixel room like the app's virtual house: wallpaper, floor, optional neon strip,
 * furniture, and whatever characters you put inside (`children`, positioned by you).
 * `style.lighting` (default auto) makes it a day room in the light theme and a night room in
 * the dark theme, like rooms in the app; "day" or "night" fixes it.
 */
export function RoomScene({ style, background = "#100c20", accent = "#c77dff", furniture = [], className = "", children }: {
  style: Omit<RoomStyle, "name">; background?: string; accent?: string;
  furniture?: RoomFurniture[]; className?: string; children?: ReactNode;
}) {
  const full = { name: "", ...style };
  const time = useRoomTime(full);
  return (
    <RoomTimeProvider value={time}>
      <div className={`relative overflow-hidden ${className}`} {...roomScope(time)} style={{ background: roomColors(full, background, accent, time).wall }}>
        <RoomBackdrop style={full} background={background} accent={accent} time={time} />
        {furniture.map((item) => (
          <img
            key={`${item.art}-${item.x}`}
            src={furnitureSrc(item.art, time)}
            alt=""
            aria-hidden="true"
            draggable={false}
            style={{
              position: "absolute",
              left: `${item.x}%`,
              width: `${item.size ?? 18}%`,
              ...(item.wall ? { top: "10%" } : { bottom: "7%" }),
              imageRendering: "pixelated",
              zIndex: item.wall ? 1 : 2,
            }}
          />
        ))}
        {children}
      </div>
    </RoomTimeProvider>
  );
}
