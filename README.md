# vitepress-docs-startkit

A VitePress-based documentation starter kit for publishing app store required documents (About Us, Privacy Policy, Terms of Service) to GitHub Pages.

## Features

- ⚡ Powered by [VitePress](https://vitepress.dev/) for fast, static documentation sites
- 📄 Pre-built pages: About Us, Privacy Policy, Terms of Service
- 🚀 Automatic deployment to GitHub Pages via GitHub Actions
- 🎨 Clean, responsive theme out of the box

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v7 or higher

## Using This Template

### 1. Create a Repository from This Template

Click the **"Use this template"** button at the top of this repository page on GitHub, then create a new repository under your account.

Alternatively, clone the repository directly:

```bash
git clone https://github.com/joyarkdev/vitepress-docs-startkit.git my-docs
cd my-docs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Customize Your Content

Edit the Markdown files to replace the placeholder content with your own:

| File | Description |
|------|-------------|
| `index.md` | Home page |
| `about.md` | About Us page |
| `privacy-policy.md` | Privacy Policy page |
| `terms-of-service.md` | Terms of Service page |

Update `.vitepress/config.ts` to set your site title, description, and navigation:

```ts
export default defineConfig({
  lang: 'en-US',
  title: 'Your App Name',
  description: 'Your app documentation',
  // ...
})
```

### 4. Start the Development Server

```bash
npm run docs:dev
```

The site will be available at `http://localhost:5173`. Changes to Markdown files are reflected instantly.

### 5. Build for Production

```bash
npm run docs:build
```

The built files will be output to `.vitepress/dist/`.

To preview the production build locally:

```bash
npm run docs:preview
```

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # GitHub Actions workflow for auto-deployment
├── .vitepress/
│   └── config.ts             # VitePress configuration (title, nav, sidebar)
├── index.md                  # Home page
├── about.md                  # About Us page
├── privacy-policy.md         # Privacy Policy page
├── terms-of-service.md       # Terms of Service page
└── package.json
```

## Deploying to GitHub Pages

This template includes a GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) that automatically builds and deploys the site to GitHub Pages whenever you push to the `main` branch.

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (in the left sidebar under "Code and automation").
3. Under **Source**, select **GitHub Actions**.
4. Save the settings.

### Step 2: Push to Main Branch

Every push to the `main` branch will automatically trigger the workflow:

1. Checkout the code
2. Build the VitePress site with the correct `--base` path
3. Upload and deploy the artifact to GitHub Pages

You can monitor the deployment progress under the **Actions** tab of your repository.

### Step 3: Access Your Site

Once deployed, your site will be available at:

```
https://<your-username>.github.io/<your-repository-name>/
```

### Manual Trigger

You can also trigger a deployment manually from the **Actions** tab by selecting the **"Deploy VitePress site to Pages"** workflow and clicking **"Run workflow"**.

## License

This project is open source. Feel free to use and customize it for your own documentation needs.
