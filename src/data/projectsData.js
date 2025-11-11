// Import project data
import projectsData from './projects.json';

// Helper function to get full image path
function getImagePath(path) {
  if (!path) return '';
  // Paths starting with /assets are in public folder, use as-is
  // process.env.PUBLIC_URL is empty string in dev, but we still need it for deployment
  if (path.startsWith('/assets')) {
    return path; // Assets in public folder are served from root
  }
  return path;
}

// Function to get default nearby hotspots based on project location
function getDefaultNearbyHotspots(project) {
  const location = project.location?.toLowerCase() || '';
  const hotspots = [];

  // Specific hotspots based on location keywords
  if (location.includes('kanakapura') || location.includes('vajarahalli')) {
    hotspots.push(
      { name: "Vajarahalli Metro Station", distance: "250m", type: "Transport" },
      { name: "Kanakapura Road", distance: "On Main Road", type: "Transport" }
    );
  } else {
    // Common hotspots for other Bangalore projects
    hotspots.push(
      { name: "Metro Station", distance: "500m - 2km", type: "Transport" }
    );
  }

  // Common hotspots for all Bangalore projects
  hotspots.push(
    { name: "Shopping Mall", distance: "1km - 3km", type: "Shopping" },
    { name: "Hospital", distance: "2km - 5km", type: "Healthcare" },
    { name: "School", distance: "1km - 4km", type: "Education" }
  );

  if (location.includes('bilekahalli') || location.includes('ramana')) {
    hotspots.push(
      { name: "Ramana Shree Enclave", distance: "Nearby", type: "Recreation" },
      { name: "Bilekahalli", distance: "Main Road", type: "Transport" }
    );
  }

  // Add Bangalore-specific common amenities
  hotspots.push(
    { name: "IT Parks", distance: "5km - 15km", type: "Business" },
    { name: "Restaurants & Cafes", distance: "500m - 2km", type: "Shopping" }
  );

  return hotspots;
}

// Process projects data to ensure all paths are correct
export const projects = projectsData.map(project => ({
  ...project,
  image: getImagePath(project.image),
  gallery: project.gallery?.map(getImagePath) || [],
  floorPlans2D: project.floorPlans2D?.map(getImagePath) || [],
  floorPlans3D: project.floorPlans3D?.map(getImagePath) || [],
  brochureUrl: getImagePath(project.brochureUrl),
  priceListUrl: getImagePath(project.priceListUrl),
  // Clean up location strings
  location: project.location?.replace(/^to be updated with a Landmark:\s*/i, '').trim() || project.location || '',
  area: project.area?.replace(/^to be updated with a Landmark:\s*/i, '').trim() || project.area || '',
  // Improve description if it's generic
  description: project.description && !project.description.includes('Sharing you the details') 
    ? project.description 
    : `${project.title} is a premium residential project featuring ${project.bhkConfig?.join(' and ') || 'spacious apartments'} with modern amenities and excellent connectivity.`,
  // Add nearby hotspots if not present
  nearbyHotspots: project.nearbyHotspots && project.nearbyHotspots.length > 0 
    ? project.nearbyHotspots 
    : getDefaultNearbyHotspots(project),
  // Set exactLocation if not present
  exactLocation: project.exactLocation || project.location?.replace(/^to be updated with a Landmark:\s*/i, '').trim() || '',
}));

export default projects;

