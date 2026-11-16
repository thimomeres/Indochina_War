import { EVENTS } from "../data/events";
import { byId, fillList } from "./dom";

export function initEventPopup() {
  const popup = byId("event-popup");
  const icon = byId("event-icon");
  const date = byId("event-date");
  const title = byId("event-title");
  const description = byId("event-description");
  const reactionsBox = byId("event-reactions-box");
  const reactions = byId("event-reactions");

  function show(index: number): void {
    const ev = EVENTS[index];
    if (!ev) return;
    icon.textContent = ev.icon;
    date.textContent = ev.dateLabel;
    title.textContent = ev.title;
    fillList(description, ev.description);
    const hasReactions = (ev.reactions?.length ?? 0) > 0;
    reactionsBox.classList.toggle("hidden", !hasReactions);
    fillList(reactions, ev.reactions ?? []);
    popup.scrollTop = 0;
    popup.classList.remove("hidden");
  }

  function hide(): void {
    popup.classList.add("hidden");
  }

  byId("event-close").addEventListener("click", hide);

  return { show, hide };
}
