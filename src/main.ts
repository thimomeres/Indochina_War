import "./style.css";
import { createMap } from "./map/createMap";
import { initCountryPanel } from "./ui/countryPanel";
import { initEventPopup } from "./ui/eventPopup";
import { initTimeline } from "./timeline/timeline";

const eventPopup = initEventPopup();
const countryPanel = initCountryPanel(() => mapApi.select(null));

const mapApi = createMap("map", (id) => {
  eventPopup.hide();
  countryPanel.show(id);
  mapApi.select(id);
});

initTimeline((index) => {
  countryPanel.hide();
  mapApi.select(null);
  eventPopup.show(index);
});
