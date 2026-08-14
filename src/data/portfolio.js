import eryri from "../assets/portfolio/maps/eryri.png";
import salz_framed from "../assets/portfolio/maps/salz_framed.png";
import kitz from "../assets/portfolio/maps/kitz.png";
import zell from "../assets/portfolio/maps/zell.jpg";
import multivar_se_europe from "../assets/portfolio/maps/multivar_se_europe.jpg";
import ireland from "../assets/portfolio/maps/ireland.png";
import england_carto from "../assets/portfolio/maps/england_carto.jpg";
import cz_historical from "../assets/portfolio/maps/cz_historical.jpg";
import cz_chloro_population from "../assets/portfolio/maps/cz_choro_population.jpg";
import bivar_imd_age from "../assets/portfolio/maps/bivar_imd_age.png";
import bad_map from "../assets/portfolio/maps/bad_map.png";
import arctic_ice from "../assets/portfolio/maps/arctic_ice.jpg";
import envelopa from "../assets/portfolio/maps/envelopa.jpg";
import nz from "../assets/portfolio/maps/nz.jpg";

import olbikes from "../assets/portfolio/webmaps/ol_bikes.png";
import salz_trees from "../assets/portfolio/webmaps/salz_trees.png";
import strava_dash from "../assets/portfolio/webmaps/strava_dash.png";

import aa from "../assets/portfolio/storymaps/aa.png";
import gaisberg_hike from "../assets/portfolio/storymaps/gaisberg_hike.png";

import mt_dash from "../assets/portfolio/mt/dash.png";
import mt_web from "../assets/portfolio/mt/web.png";

export const portfolioGroups = [
  {
    title: "Master Thesis",
     intro:
    "My master thesis explored methods for combining and visualising urban mobility datasets with different spatial and temporal resolutions. The work combines data processing, interactive visualisation, and web mapping for mobility analysis.",
    items: [
      {
        type: "link",
        img: mt_dash,
        title: "Envelopa Mobility Dashboard",
        description: "Interactive web map application to explore mobility trends in the Envelopa Campus.",
        link: "https://mariaannaa.github.io/envelopa_dashboard/",
      },
      {
        type: "link",
        img: mt_web,
        title: "Master Thesis Website",
        description: "Summarises the master thesis methodology and findings.",
        link: "https://mariaannaa.github.io/thesis_website/",
      },
    ],

  },
  {
    title: "Maps",
    items: [
      {
        type: "image",
        img: eryri,
        title: "Eryri National Park",
        description: "Contemporary view of Eryri National Park (Snowdonia) (above), with a detailed view of Cadair Idris (below). Created using ArcGIS Pro.",
      },
      {
        type: "image",
        img: salz_framed,
        title: "Salzburg City Map",
        description: "Artistic map of Kitzsteinhorn. Created using QGIS and Affinity Designer.",
      }, 
      {
        type: "image",
        img: kitz,
        title: "Kitzsteinhorn",
        description: "Artistic map of Kitzsteinhorn. Created using ArcGIS Pro.",
      },
      {
        type: "image",
        img: zell,
        title: "Topographic Map of Zell am See",
        description: "Created using OSM overpass and ArcGIS Pro.",
      },
      {
        type: "image",
        img: multivar_se_europe,
        title: "The Tourist Potential of South-Eastern Europe Countries",
        description: "Bivariate map, created using ArcGIS Pro.",
      },
      {
        type: "image",
        img: ireland,
        title: "Imagery Map of Ireland",
        description: "Imagery map of Ireland. Created using ArcGIS Pro.",
      },
      {
        type: "image",
        img: england_carto,
        title: "Cartogram of England",
        description: "Depicts Population by region. Created using ArcGIS Pro.",
      },
      {
        type: "image",
        img: cz_historical,
        title: "Historical Map of the Czech Republic",
        description: "'Old Style' map, created using ArcGIS Pro and Affinity Designer.",
      },
      {
        type: "image",
        img: cz_chloro_population,
        title: "Population Density Map of the Czech Republic",
        description: "Classified below and avove the country average. Created in ArcGIS Pro.",
      },
      {
        type: "image",
        img: bivar_imd_age,
        title: "Bivariate map of IMD and age in the UK",
        description: "Bivariate map of the UK, Created using R.",
        link: "https://github.com/mariaannaa/Bivariate_R_geojson_csv",
      },
      {
        type: "image",
        img: envelopa,
        title: "Envelopa Campus Map",
        description: "Promotional poster. Created using QGIS and Affinity Designer.",
        link: "",
      },
      {
        type: "image",
        img: bad_map,
        title: "Bad Map",
        description: "A \"bad\" map, showing all places in Germany with 'bad' in the name. Created using R.",
        link: "https://github.com/mariaannaa/bad_map",
      },
       {
        type: "image",
        img: nz,
        title: "Population Density Map of New Zealand",
        description: "A map showing population density across New Zealand. Created using ArcGIS Pro.",
        link: "",
      },
      {
        type: "image",
        img: arctic_ice,
        title: "Arctic Ice Decline",
        description: "Detailed infographic of sea ice retreat in the Arctic region. Created in ArcGIS Pro.",
      },
    ],
  },
  {
    title: "Web Maps",
    items: [
      {
        type: "link",
        img: olbikes,
        title: "Live NextBike Availability in Olomouc",
        description: "Visualizes real-time availability at NextBike stations using the NextBike API.",
        link: "https://mariaannaa.github.io/olomouc_bikes/",
      },
      {
        type: "link",
        img: salz_trees,
        title: "Tree Cover Change Detection",
        description: "Visualizes tree cover data in Salzburg using Leaflet.",
        link: "https://mariaannaa.github.io/gisapp/",
      },
      {
        type: "link",
        img: strava_dash,
        title: "Strava Activity Dashboard",
        description: "A personalised interactive dashboard for Strava activity data.",
        link: "https://github.com/nicolevasos/Strava-Dashboard",
      },
    ],
  },
  {
    title: "StoryMaps",
    items: [
      {
        type: "link",
        img: aa,
        title: "Anticipatory Action",
        description: "Explains Anticipatory Action, its benefits, and applications.",
        link: "https://arcg.is/19510z1",
      },
      {
        type: "link",
        img: gaisberg_hike,
        title: "Hiking routes of Gaisberg",
        description: "Explains Anticipatory Action, its benefits, and applications.",
        link: "https://arcg.is/nmGKH1",
      },
    ],

  },
];