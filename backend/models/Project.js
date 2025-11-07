const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a project title'],
    trim: true,
  },
  subtitle: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a project description'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location'],
  },
  area: {
    type: String,
    trim: true,
  },
  exactLocation: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['completed', 'ongoing', 'upcoming'],
    default: 'ongoing',
  },
  image: {
    type: String,
    required: true,
  },
  gallery: [{
    type: String,
  }],
  floorPlans2D: [{
    type: String,
  }],
  floorPlans3D: [{
    type: String,
  }],
  amenities: [{
    type: String,
  }],
  bedrooms: {
    type: String,
  },
  bathrooms: {
    type: String,
  },
  bhkConfig: [{
    type: String,
  }],
  price: {
    type: String,
    default: 'On Request',
  },
  totalUnits: {
    type: Number,
  },
  numberOfFlats: {
    type: Number,
  },
  propertyType: {
    type: String,
    default: 'Residential Apartments',
  },
  sqft: {
    type: String,
  },
  yearBuilt: {
    type: String,
  },
  completionDate: {
    type: String,
  },
  launchDate: {
    type: String,
  },
  brochureUrl: {
    type: String,
  },
  priceListUrl: {
    type: String,
  },
  nearbyHotspots: [{
    name: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Transport', 'Shopping', 'Healthcare', 'Education', 'Business', 'Recreation'],
      required: true,
    },
  }],
  floorPlan: {
    type: String,
  },
  locationMap: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Project', ProjectSchema);

