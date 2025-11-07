# API Endpoints Documentation

## Base URL
`http://localhost:5000/api`

## Projects API

### Get All Projects
- **GET** `/api/projects`
- **Access**: Public
- **Query Parameters**:
  - `status`: Filter by status (completed, ongoing, upcoming)
  - `search`: Search in title, location, area
- **Response**:
```json
{
  "success": true,
  "count": 3,
  "data": [...]
}
```

### Get Single Project
- **GET** `/api/projects/:id`
- **Access**: Public

### Create Project
- **POST** `/api/projects`
- **Access**: Protected (Admin)
- **Body**: Project object with all fields

### Update Project
- **PUT** `/api/projects/:id`
- **Access**: Protected (Admin)

### Delete Project
- **DELETE** `/api/projects/:id`
- **Access**: Protected (Admin)

## Inquiries API

### Create Inquiry
- **POST** `/api/inquiries`
- **Access**: Public
- **Body**: { name, email, phone, message, projectId?, projectName?, source? }

### Get All Inquiries
- **GET** `/api/inquiries`
- **Access**: Protected (Admin)
- **Query Parameters**: `status`, `projectId`

### Get Single Inquiry
- **GET** `/api/inquiries/:id`
- **Access**: Protected (Admin)

### Update Inquiry
- **PUT** `/api/inquiries/:id`
- **Access**: Protected (Admin)

### Delete Inquiry
- **DELETE** `/api/inquiries/:id`
- **Access**: Protected (Admin)

## Blogs API

### Get All Blogs
- **GET** `/api/blogs`
- **Access**: Public (shows only published blogs)
- **Query Parameters**: `published`, `category`, `featured`, `search`

### Get Single Blog
- **GET** `/api/blogs/:id`
- **Access**: Public

### Get Blog by Slug
- **GET** `/api/blogs/slug/:slug`
- **Access**: Public

### Create Blog
- **POST** `/api/blogs`
- **Access**: Protected (Admin)

### Update Blog
- **PUT** `/api/blogs/:id`
- **Access**: Protected (Admin)

### Delete Blog
- **DELETE** `/api/blogs/:id`
- **Access**: Protected (Admin)

## Auth API

### Login
- **POST** `/api/auth/login`
- **Access**: Public
- **Body**: { email, password }
- **Response**: { success, token, data }

### Register Admin
- **POST** `/api/auth/register`
- **Access**: Protected (Super Admin)
- **Body**: { username, email, password, role? }

### Get Current Admin
- **GET** `/api/auth/me`
- **Access**: Protected

### Update Admin Details
- **PUT** `/api/auth/updatedetails`
- **Access**: Protected

### Update Password
- **PUT** `/api/auth/updatepassword`
- **Access**: Protected
- **Body**: { currentPassword, newPassword }

## File Upload API

### Upload Image
- **POST** `/api/upload/image`
- **Form Data**: `image` (file)
- **Response**: { success, filename, path }

### Upload Multiple Images
- **POST** `/api/upload/images`
- **Form Data**: `images` (multiple files)
- **Response**: { success, files: [...] }

### Upload Brochure
- **POST** `/api/upload/brochure`
- **Form Data**: `brochure` (PDF/DOC/DOCX file)
- **Response**: { success, filename, path }

### Upload Price List
- **POST** `/api/upload/pricelist`
- **Form Data**: `pricelist` (PDF/DOC/DOCX file)
- **Response**: { success, filename, path }

## Health Check

### Server Status
- **GET** `/api/health`
- **Response**: { status: "OK", message: "Server is running" }

