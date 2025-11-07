const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

// Project folders mapping
const projects = [
  {
    id: 1,
    folderName: 'SV giridhama',
    displayName: 'SV Giri Dhama Residency',
    docxFile: 'Housing.com sharing details sv giridhama.docx',
    assetsPath: 'src/assets/SV giridhama'
  },
  {
    id: 2,
    folderName: 'SV Royal Residency',
    displayName: 'SV Royal Residency',
    docxFile: 'housing com sharing details royal residency.docx',
    assetsPath: 'src/assets/SV Royal Residency'
  },
  {
    id: 3,
    folderName: 'SV Sri Balaji Residency',
    displayName: 'SV Sri Balaji Residency',
    docxFile: 'Housing com sharing details Sri balaji residency.docx',
    assetsPath: 'src/assets/SV Sri Balaji Residency'
  }
];

// Function to extract text from docx
async function extractTextFromDocx(filePath) {
  try {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return '';
  }
}

// Function to get all images from a directory
function getImagesFromDirectory(dirPath, subfolder) {
  if (!subfolder) return [];
  
  const fullPath = path.join(process.cwd(), dirPath, subfolder);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  
  const files = fs.readdirSync(fullPath);
  const folderName = path.basename(dirPath);
  return files
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => {
      // Return path relative to public folder for React
      return require('path').posix.join('/assets', folderName, subfolder, file);
    });
}

// Function to get PDF files
function getPDFsFromDirectory(dirPath) {
  const fullPath = path.join(process.cwd(), dirPath);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  
  const files = fs.readdirSync(fullPath);
  return files
    .filter(file => /\.pdf$/i.test(file))
    .map(file => {
      const folderName = path.basename(dirPath);
      // Return path relative to public folder for React
      return require('path').posix.join('/assets', folderName, file);
    });
}

// Function to parse project data from text
function parseProjectData(text, project) {
  const data = {
    id: project.id,
    title: project.displayName,
    folderName: project.folderName,
    // Default values that can be overridden by docx content
    location: '',
    area: '',
    description: '',
    status: 'ongoing',
    amenities: [],
    bedrooms: '',
    bathrooms: '',
    price: 'On Request',
    totalUnits: null,
    bhkConfig: [],
    propertyType: 'Residential Apartments',
  };

  // Extract location
  const locationMatch = text.match(/(?:location|address|situated|located)[:\s]+([^\n]+)/i);
  if (locationMatch) {
    data.location = locationMatch[1].trim();
    data.area = data.location.split(',')[0].trim();
  }

  // Extract description (first substantial paragraph)
  const lines = text.split('\n').filter(line => line.trim().length > 20);
  if (lines.length > 0) {
    data.description = lines[0].substring(0, 200).trim() + (lines[0].length > 200 ? '...' : '');
  }

  // Extract BHK configurations
  const bhkMatch = text.match(/\b(\d+)\s*BHK\b/gi);
  if (bhkMatch) {
    data.bhkConfig = [...new Set(bhkMatch.map(b => b.trim()))];
    data.bedrooms = data.bhkConfig.join(', ');
  }

  // Extract amenities (common keywords)
  const amenityKeywords = [
    'Swimming Pool', 'Clubhouse', 'Gymnasium', 'Gym', 'Parking', 'Security',
    'Power Backup', 'Lift', 'Water Supply', 'Landscaped Gardens', 'Play Area',
    'Rooftop Garden', 'Community Hall', 'Multi-purpose Hall', 'Jogging Track'
  ];
  const foundAmenities = amenityKeywords.filter(keyword => 
    text.toLowerCase().includes(keyword.toLowerCase())
  );
  data.amenities = foundAmenities.length > 0 ? foundAmenities : ['Parking', 'Security', 'Lift'];

  // Extract status
  if (text.match(/completed|ready|possession/gi)) {
    data.status = 'completed';
  } else if (text.match(/upcoming|launch|soon/gi)) {
    data.status = 'upcoming';
  } else {
    data.status = 'ongoing';
  }

  // Extract total units
  const unitsMatch = text.match(/(?:total|units|apartments|flats)[:\s]+(\d+)/i);
  if (unitsMatch) {
    data.totalUnits = parseInt(unitsMatch[1]);
    data.numberOfFlats = data.totalUnits;
  }

  return data;
}

// Main function
async function generateProjectsData() {
  const projectsData = [];

  for (const project of projects) {
    const docxPath = path.join(process.cwd(), project.assetsPath, project.docxFile);
    
    // Check if docx file exists (skip the ~$ temporary files)
    if (!fs.existsSync(docxPath)) {
      console.warn(`Docx file not found: ${docxPath}`);
      continue;
    }

    console.log(`Processing ${project.displayName}...`);
    
    // Extract text from docx
    const text = await extractTextFromDocx(docxPath);
    
    // Parse project data
    const projectData = parseProjectData(text, project);
    
    // Get images from 2D and 3D floor plan folders
    const floorPlan2D = getImagesFromDirectory(project.assetsPath, get2DFolderName(project.folderName));
    const floorPlan3D = getImagesFromDirectory(project.assetsPath, get3DFolderName(project.folderName));
    
    // Get elevation/main image (specific elevation images for each project)
    const mainImage = getElevationImage(project.folderName, floorPlan2D, floorPlan3D) || floorPlan2D[0] || floorPlan3D[0] || '';
    
    // Get gallery images (all floor plan images)
    const gallery = [...floorPlan2D, ...floorPlan3D].slice(0, 10);
    
    // Get PDFs
    const pdfs = getPDFsFromDirectory(project.assetsPath);
    const brochure = pdfs.find(p => p.toLowerCase().includes('brochure')) || pdfs[0] || '';
    const priceList = pdfs.find(p => p.toLowerCase().includes('price')) || pdfs[1] || '';

    // Add asset paths
    projectData.image = mainImage;
    projectData.gallery = gallery;
    projectData.floorPlans2D = floorPlan2D;
    projectData.floorPlans3D = floorPlan3D;
    projectData.brochureUrl = brochure;
    projectData.priceListUrl = priceList;
    projectData.pdfs = pdfs;

    projectsData.push(projectData);
  }

  // Write to JSON file
  const outputPath = path.join(process.cwd(), 'src', 'data', 'projects.json');
  const outputDir = path.dirname(outputPath);
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(projectsData, null, 2));
  console.log(`\nProjects data generated successfully at ${outputPath}`);
  console.log(`Total projects: ${projectsData.length}`);
}

// Helper functions to get folder names
function get2DFolderName(folderName) {
  if (folderName.includes('giridhama') || folderName.includes('giri dhama')) {
    return '3 SV Giri Dhama Residency (2D Floor Plans)';
  } else if (folderName.includes('Royal')) {
    return '2 SV Royal Residency (2D Floor Plans)';
  } else if (folderName.includes('Balaji')) {
    return '1 Sri Balaji Residency (2D Floor Plan)';
  }
  return '';
}

function get3DFolderName(folderName) {
  if (folderName.includes('giridhama') || folderName.includes('giri dhama')) {
    return '5 SV Giri Dhama Residency (3D Floor Plans)';
  } else if (folderName.includes('Royal')) {
    return '4 SV Royal Residency (3D Floor Plans)';
  }
  // Sri Balaji doesn't seem to have a 3D folder
  return '';
}

// Function to get the specific elevation image for each project
function getElevationImage(folderName, floorPlan2D, floorPlan3D) {
  // SV Giri Dhama Residency - use "MOHAN NAIDU FINAL ELVN 01.jpg" from 3D folder
  if (folderName.includes('giridhama') || folderName.includes('giri dhama')) {
    const elevation = floorPlan3D.find(img => img.includes('MOHAN NAIDU FINAL ELVN 01.jpg'));
    if (elevation) return elevation;
  }
  
  // SV Royal Residency - use "Building Elevation Design.jpeg" from 3D folder
  if (folderName.includes('Royal')) {
    const elevation = floorPlan3D.find(img => img.includes('Building Elevation Design.jpeg'));
    if (elevation) return elevation;
  }
  
  // SV Sri Balaji Residency - use "Sri Balaji Residency elevation.jpg" from 2D folder
  if (folderName.includes('Balaji')) {
    const elevation = floorPlan2D.find(img => img.includes('Sri Balaji Residency elevation.jpg'));
    if (elevation) return elevation;
  }
  
  return null;
}

// Run the script
generateProjectsData().catch(console.error);

