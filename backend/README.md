# SV Builders Backend API

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   - Copy `.env.example` to `.env` (or create `.env` file manually)
   - The MongoDB connection string is already configured
   - Update JWT_SECRET for production

3. **Database Connection**
   - MongoDB connection is automatically established when server starts
   - Connection string: `mongodb+srv://vivekkumar787067:Vivek09876@cluster0.gjptwuk.mongodb.net/svbuilders?retryWrites=true&w=majority&appName=Cluster0`

4. **Create Default Admin**
   ```bash
   node backend/scripts/createAdmin.js
   ```
   - Default credentials:
     - Email: admin@svbuilders.com
     - Password: Admin@123
     - **Change password after first login!**

5. **Start Server**
   ```bash
   npm run server
   ```
   or
   ```bash
   node server.js
   ```

## API Routes

### Projects
- `GET /api/projects` - Get all projects (public)
- `GET /api/projects/:id` - Get single project (public)
- `POST /api/projects` - Create project (protected)
- `PUT /api/projects/:id` - Update project (protected)
- `DELETE /api/projects/:id` - Delete project (protected)

### Inquiries
- `POST /api/inquiries` - Create inquiry (public)
- `GET /api/inquiries` - Get all inquiries (protected)
- `GET /api/inquiries/:id` - Get single inquiry (protected)
- `PUT /api/inquiries/:id` - Update inquiry (protected)
- `DELETE /api/inquiries/:id` - Delete inquiry (protected)

### Blogs
- `GET /api/blogs` - Get all published blogs (public)
- `GET /api/blogs/:id` - Get single blog (public)
- `GET /api/blogs/slug/:slug` - Get blog by slug (public)
- `POST /api/blogs` - Create blog (protected)
- `PUT /api/blogs/:id` - Update blog (protected)
- `DELETE /api/blogs/:id` - Delete blog (protected)

### Auth
- `POST /api/auth/login` - Login admin (public)
- `POST /api/auth/register` - Register admin (protected)
- `GET /api/auth/me` - Get current admin (protected)
- `PUT /api/auth/updatedetails` - Update admin details (protected)
- `PUT /api/auth/updatepassword` - Update password (protected)

### File Uploads
- `POST /api/upload/image` - Upload single image
- `POST /api/upload/images` - Upload multiple images
- `POST /api/upload/brochure` - Upload brochure PDF
- `POST /api/upload/pricelist` - Upload price list PDF

## Models

### Project Model
Includes all fields: title, location, area, status, amenities, bhkConfig, totalUnits, numberOfFlats, gallery, floorPlans2D, floorPlans3D, nearbyHotspots, etc.

### Inquiry Model
Fields: name, email, phone, message, projectId, projectName, status, source

### Blog Model
Fields: title, slug, excerpt, content, featuredImage, images, author, category, tags, published, views, featured

### Admin Model
Fields: username, email, password, role, active, lastLogin

## Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Notes

- All timestamps are automatically added (createdAt, updatedAt)
- Passwords are automatically hashed using bcrypt
- File uploads are handled by multer
- CORS is enabled for frontend communication

