import { COUNTRIES } from "../data/countries";
import type { CountryId } from "../types";
import { byId, fillList } from "./dom";

export function initCountryPanel(onClose: () => void) {
  const panel = byId("country-panel");
  const name = byId("country-name");
  const role = byId("country-role");
  const points = byId("country-points");

  function show(id: CountryId): void {
    const country = COUNTRIES.find((c) => c.id === id);
    if (!country) return;
    name.textContent = country.name;
    role.textContent = country.role;
    fillList(points, country.points);
    panel.scrollTop = 0;
    panel.classList.remove("hidden");
  }

  function hide(): void {
    panel.classList.add("hidden");
  }

  byId("country-close").addEventListener("click", () => {
    hide();
    onClose();
  });

  return { show, hide };
}
