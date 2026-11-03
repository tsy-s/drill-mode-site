import { ABOUT, TEAM, type TeamMember } from "../../content/about";
import { CharacterAvatar } from "../avatars/character";
import { Reveal } from "../layout/Reveal";
import { RoomBackdrop } from "../room/RoomBackdrop";
import { ROOM_LIGHTS } from "../room/roomStyle";
import { SectionHeader } from "../ui/SectionHeader";
import { SocialLinks } from "../ui/SocialLinks";

/**
 * The team as a pixel house, like the app's virtual house: a roof with the house name,
 * then one room per member, stacked like floors. Members come from TEAM in src/content/about.ts.
 */
export function TeamHouse({ id }: { id: string }) {
  const house = ABOUT.house;
  return (
    <section id={id} className="section">
      <div className="container-site flex flex-col gap-12">
        <SectionHeader eyebrow={house.eyebrow} title={house.title} text={house.text} />
        <div className="mx-auto w-full" style={{ maxWidth: 1040 }}>
          <HouseRoof title={house.roofTitle} />
          <div className="flex flex-col" style={{ background: "#2a3a5c", padding: "0 8px", gap: 10 }}>
            {TEAM.map((member, i) => (
              <Reveal key={member.name + i}>
                <TeamRoom member={member} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
          <HouseBase doormat={house.doormat} />
        </div>
      </div>
    </section>
  );
}

/** Stepped pixel roof with a chimney and the house name, as in the app's house view. */
function HouseRoof({ title }: { title: string }) {
  const steps = 14;
  return (
    <div className="relative" style={{ height: "clamp(84px, 13vw, 140px)" }}>
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${steps * 2} ${steps}`} preserveAspectRatio="none" shapeRendering="crispEdges" aria-hidden="true">
        {Array.from({ length: steps }, (_, i) => (
          <rect key={i} x={i} y={steps - 1 - i} width={steps * 2 - i * 2} height={i + 1} fill={i % 2 ? "#1a2a3a" : "#182637"} />
        ))}
        {Array.from({ length: steps }, (_, i) => (
          <g key={`edge-${i}`} fill="#2a3a5c">
            <rect x={i} y={steps - 1 - i} width={1} height={1} />
            <rect x={steps * 2 - 1 - i} y={steps - 1 - i} width={1} height={1} />
          </g>
        ))}
      </svg>
      {/* Chimney (outside the stretched SVG so it keeps its shape). */}
      <div className="absolute" style={{ right: "22%", bottom: "45%", width: 28, height: "38%", background: "#2a3a5c" }}>
        <div className="absolute" style={{ left: -4, right: -4, top: 0, height: 8, background: "#3a4a6c" }} />
        <div className="absolute" style={{ left: 8, top: -14, width: 8, height: 8, background: "#4a5a7c", opacity: 0.5, animation: "float-y 2s ease-in-out infinite" }} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-2" style={{ background: "#2a3a5c" }} />
      <div className="absolute inset-x-0 flex justify-center" style={{ bottom: "14%" }}>
        <span className="font-pixel px-3 text-center" style={{ fontSize: "clamp(9px, 1.3vw, 13px)", color: "#4ecdc4", letterSpacing: "0.12em", lineHeight: 1.6 }}>{title}</span>
      </div>
    </div>
  );
}

function HouseBase({ doormat }: { doormat: string }) {
  return (
    <div className="relative flex flex-col items-center" aria-hidden="true">
      <div className="w-full flex justify-center" style={{ background: "#2a3a5c", height: 64, paddingTop: 8 }}>
        {/* Front door */}
        <div className="relative" style={{ width: 52, height: 56, background: "#3c2d32", border: "4px solid #1a2340" }}>
          <div className="absolute" style={{ right: 8, top: 26, width: 6, height: 6, background: "#ffe66d" }} />
        </div>
      </div>
      <div className="w-full" style={{ height: 8, background: "#1a2340" }} />
      <div className="font-pixel mt-3 px-4 py-2" style={{ fontSize: 9, color: "#9bb0c8", background: "#1a2340", border: "2px solid #2a3a5c", letterSpacing: "0.2em" }}>{doormat}</div>
    </div>
  );
}

/**
 * One member's room. On wide screens: furniture + character on the open 38% of the room,
 * photo + bio on the rest (sides alternate with `flip`). On phones the room sits above the bio.
 */
function TeamRoom({ member, flip }: { member: TeamMember; flip: boolean }) {
  const light = ROOM_LIGHTS.find((l) => l.id === member.room.light)?.color || "#4ecdc4";
  const style = { name: "", ...member.room };
  const backdrop = <RoomBackdrop style={style} background="#100c20" accent={light} />;

  return (
    <article className={`relative overflow-hidden flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"}`} style={{ background: "#0a0e1a" }} aria-label={`${member.name}, ${member.role}`}>
      {/* On wide screens the wallpaper and floor fill the whole room. */}
      <div className="hidden lg:block absolute inset-0">{backdrop}</div>

      {/* Furniture + pixel character. */}
      <div className="relative flex-shrink-0 h-[240px] lg:h-auto lg:min-h-[360px] lg:basis-[38%]">
        <div className="lg:hidden absolute inset-0">{backdrop}</div>
        <div className="absolute inset-0">
          {member.furniture.map((item) => (
            <img
              key={item.art}
              src={`/furniture/${item.art}.svg`}
              alt=""
              aria-hidden="true"
              draggable={false}
              style={{
                position: "absolute",
                left: `${item.x}%`,
                width: `${item.size ?? 24}%`,
                maxWidth: 140,
                ...(item.wall ? { top: "10%" } : { bottom: "7%" }),
                imageRendering: "pixelated",
                zIndex: item.wall ? 1 : 2,
              }}
            />
          ))}
          <div className="absolute" style={{ left: "50%", bottom: "6%", transform: "translateX(-50%)", zIndex: 3 }}>
            <CharacterAvatar config={member.avatar} size={110} animate title={member.name} />
          </div>
        </div>
      </div>

      {/* Photo + name, role, bio and socials. */}
      <div className={`relative z-[4] flex-1 flex flex-col sm:flex-row items-center gap-6 p-6 lg:p-8 ${flip ? "lg:flex-row-reverse" : ""}`}>
        <PhotoFrame member={member} light={light} />
        <div className="flex-1 flex flex-col gap-3 p-5 w-full" style={{ background: "rgba(10,14,26,0.88)", border: `3px solid ${light}`, boxShadow: `4px 4px 0 ${light}44` }}>
          <h3 className="font-pixel" style={{ margin: 0, fontSize: "clamp(13px, 1.5vw, 16px)", color: "#ffffff", lineHeight: 1.6 }}>{member.name}</h3>
          <div className="text-sm uppercase tracking-widest" style={{ color: light }}>{member.role}</div>
          <p className="text-soft-foreground" style={{ margin: 0 }}>{member.bio}</p>
          <SocialLinks links={member.socials} size={36} />
        </div>
      </div>
    </article>
  );
}

/** A picture frame hanging on the wall. Without a photo it shows the member's pixel portrait. */
function PhotoFrame({ member, light }: { member: TeamMember; light: string }) {
  return (
    <div className="flex-shrink-0 relative" style={{ width: "clamp(140px, 16vw, 180px)" }}>
      {/* The nail and string it hangs from. */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: -14, width: 6, height: 6, background: "#9bb0c8" }} aria-hidden="true" />
      <div style={{ padding: 6, background: "#3c2d32", border: "4px solid #0a0e1a", boxShadow: `0 0 18px ${light}55, 6px 6px 0 #05080f` }}>
        <div className="relative overflow-hidden" style={{ aspectRatio: "1 / 1", border: `3px solid ${light}`, background: `linear-gradient(180deg, ${light}33, #0a0e1a)` }}>
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-end justify-center pixel-fluid" style={{ padding: "12% 14% 0" }}>
              <CharacterAvatar config={member.avatar} variant="head" size={140} title={member.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
