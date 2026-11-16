import { EVENTS } from "../data/events";
import { byId } from "../ui/dom";

const THUMB_REM = 1.6; // harus sama dengan lebar thumb di style.css

export function initTimeline(onChange: (index: number) => void): void {
  const slider = byId<HTMLInputElement>("timeline-slider");
  const labelBox = byId("timeline-labels");
  const last = EVENTS.length - 1;

  slider.min = "0";
  slider.max = String(last);
  slider.step = "1";
  slider.value = "0";
  const buttons = EVENTS.map((ev, i) => {
    const btn = document.createElement("button");

    btn.type = "button";
    btn.textContent = String(i + 1);

    btn.className = [
      "pointer-events-auto",
      "absolute top-1/2",
      "-translate-x-1/2 -translate-y-1/2",
      "flex items-center justify-center",
      "w-7 h-7 rounded-full",
      "border border-slate-400",
      "bg-white text-slate-600",
      "text-xs font-semibold",
      "z-10 transition-colors",
    ].join(" ");
    btn.style.left = `calc(${THUMB_REM / 2}rem + (100% - ${THUMB_REM}rem) * ${i / last})`;

    btn.addEventListener("click", () => select(i));

    labelBox.appendChild(btn);
    return btn;
  });
  function select(index: number): void {
    slider.value = String(index);
    buttons.forEach((btn, i) => {
      const active = i === index;

      btn.classList.toggle("bg-red-500", active);
      btn.classList.toggle("text-white", active);
      btn.classList.toggle("border-red-500", active);

      btn.classList.toggle("bg-white", !active);
      btn.classList.toggle("text-slate-600", !active);
      btn.classList.toggle("border-slate-400", !active);
    });
    onChange(index);
  }

  slider.addEventListener("input", () => select(Number(slider.value)));
  select(0);
}
