const fc = require("./botleyRoadCommunityCentre.FeatureCollection.json");

async function main() {
  // https://api.mapbox.com/styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{bbox}|{auto}/{width}x{height}{@2x}
  // const width = 1280;
  // const height = 600;
  const width = 640;
  const height = 400;

  const [lon, lat] = fc.features[0].geometry.coordinates;

  const markerName = "pin-l";
  const markerIcon = "embassy";
  const markerColor = "f74e4e";
  const marker = `${markerName}-${markerIcon}+${markerColor}(${lon},${lat})`;

  const mapboxAccessToken =
    "pk.eyJ1IjoiZGF0YXByZXNzIiwiYSI6ImJjNmZmYTIyNmQyMWQzOTkzNDBiOTBkNzZjOWQxZTY3In0.f1eI8CPocgUPCoUxqakPyQ";

  // Dimensions of the resulting image:
  // --
  const username = "mapbox";
  const style_id = "streets-v11";
  // const style_id = "satellite-v9";
  // const style_id = "light-v9";
  const retina = "@2x"; // or ''
  const zoom = 14;
  const url = `https://api.mapbox.com/styles/v1/${username}/${style_id}/static/${marker}/${lon},${lat},${zoom}/${width}x${height}${retina}?access_token=${mapboxAccessToken}&logo=false&attribution=false`;
  console.log(`open "${url}"`);
}

main().catch((e) => console.error(e));
