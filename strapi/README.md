# Strapi CMS Setup for Malankara Palace

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## Installation

1. Navigate to the strapi directory:
```bash
cd strapi
```

2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env` and configure your database:
```bash
cp ../.env.example .env
```

4. Update `.env` with your PostgreSQL credentials:
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=malankara_palace
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
```

5. Generate Strapi secrets (run these commands and add to .env):
```bash
# Generate APP_KEYS (run 4 times)
openssl rand -base64 32

# Generate API_TOKEN_SALT
openssl rand -base64 32

# Generate ADMIN_JWT_SECRET
openssl rand -base64 32

# Generate TRANSFER_TOKEN_SALT
openssl rand -base64 32

# Generate JWT_SECRET
openssl rand -base64 32
```

6. Create the PostgreSQL database:
```sql
CREATE DATABASE malankara_palace;
```

7. Start Strapi:
```bash
npm run develop
```

8. Create an admin user when prompted.

## Content Types

The following content types are pre-configured:

1. **Hero Slide** - For homepage hero slider images and content
2. **Navigation Item** - For menu navigation items
3. **Site Setting** - For global site settings (logo, phone numbers, etc.)

## API Endpoints

- Hero Slides: `http://localhost:1337/api/hero-slides`
- Navigation Items: `http://localhost:1337/api/navigation-items`
- Site Settings: `http://localhost:1337/api/site-setting`

## Permissions

After creating your admin user, go to Settings > Users & Permissions Plugin > Roles > Public and enable:
- `find` and `findOne` for Hero Slide
- `find` and `findOne` for Navigation Item
- `find` and `findOne` for Site Setting
