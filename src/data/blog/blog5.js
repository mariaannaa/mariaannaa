import GEOHUM from "../../assets/blog/GEOHUM.jpeg";

const blog5 = {
  slug: "cdl-geohum-internship",
  title: "Internship at The Christian Doppler Lab GEOHUM with MSF",
  date: "2025-08-29",
  excerpt:
    "A summary of my summer research internship, where I developed a reproducible WorldPop processing workflow to support Médecins Sans Frontières.",
  image: GEOHUM,
  content: `
    <p>From 7 July to 29 August 2025, I interned for 8 weeks full-time at the Christian Doppler Lab for geospatial and EO-based humanitarian technologies (GEOHUM), supporting Médecins Sans Frontières in exploring how WorldPop’s high-resolution age–sex data can inform field decisions.</p>

    <p>My task was to build a reproducible pipeline that turns 60 TIFs into meaningful outputs which can be utilised in both static and interactive map products for use by MSF.</p>

    <h3>What I built</h3>

    <p>I created a two-notebook workflow:</p>

    <ol>
      <li><strong>WorldPop Raster Processing:</strong> Clips all 60 age–sex rasters to an AOI, stacks them into a multi-band composite, aggregates custom age groups, and exports ready-to-use layers. Key tools for this were rasterio, xarray/dask, geopandas and ArcPy.</li>

      <li><strong>Zonal Statistics & Population Pyramids (ArcGIS Pro):</strong> Explodes multipart AOIs, runs per-band zonal stats, writes clean CSV/GPKG outputs, and generates static population pyramids (grouped and single-age). It also names files with human-readable labels using a regex, and shows progress bars for heavy steps.</li>
    </ol>

    <p>These outputs could then be utilised in static maps and interactive dashboards, with the intention that analysts can move from data to decisions quickly.</p>

    <h3>What I learned</h3>

    <ul>
      <li><strong>Python &gt; Model Builder:</strong> Early ArcGIS Pro models were slow and brittle; the Python/Dask route proved faster and more scalable.</li>
      <li><strong>NetCDF trade-offs:</strong> While attractive for structure/compression, NC was heavy and crash-prone in ArcGIS for this use case, so I stuck with multi-band GeoTIF.</li>
      <li><strong>Limits matter:</strong> WorldPop often use the same age-shape proportions across admin units, so pyramids may look similar even when totals differ; this was an important caveat for interpretation.</li>
    </ul>

    <h3>Small R detour</h3>

    <p>I briefly explored WOPR (the WorldPop R package) and woprVision for catalogue queries and quick country-level figures. This was useful for rapid checks, but Python + ArcGIS handled the heavy lifting better for MSF’s workflow.</p>

    <h3>Roadblocks & next steps</h3>

    <p>Uploading the full composite to ArcGIS Online ran into licensing and file-size limits; right now, I am still exploring vector/tile alternatives. A further future enhancement is including direct API downloads from WorldPop into Notebook 1, especially relevant with the WorldPop update on 4 September. I’m also discussing contributing to a review paper on gridded population products with SpaSe and colleagues.</p>

    <h3>Gratitude</h3>

    <p>Huge thanks to Sophia Klaußner, Dr Lorenz Wendt, and Yann Rebois for guidance.</p>

    <h3>Code</h3>

    <p>All scripts developed during my internship are available to view on my repo <a href="https://github.com/mariaannaa/worldpop_processing" target="_blank" rel="noopener noreferrer">here</a>.</p>
  `,
};

export default blog5;