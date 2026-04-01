DEPLOYMENT GUIDE FOR STAYHEALTHY
================================

This document provides step-by-step instructions for deploying the StayHealthy telemedicine platform to production.

DEPLOYMENT OPTIONS
==================

We recommend Vercel (easiest) or Netlify (also great). Choose one:

OPTION 1: DEPLOY TO VERCEL (RECOMMENDED)
========================================

Vercel is optimized for Vite projects and provides:
- Zero-config deployment
- Automatic builds
- Custom domain support
- Environment variables
- Preview deployments

Step 1: Prepare Project
-----------------------
npm run build

Step 2: Create Vercel Account
------------------------------
1. Go to vercel.com
2. Sign up with GitHub
3. Connect your GitHub account

Step 3: Deploy
--------------
1. Click "New Project"
2. Select your StayHealthy-Telemedicine repository
3. Vercel detects Vite automatically
4. Click "Deploy"

Step 4: Get Deployment URL
---------------------------
Vercel provides a URL like:
https://stayhealthy-telemedicine.vercel.app

Step 5: Custom Domain (Optional)
---------------------------------
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records

OPTION 2: DEPLOY TO NETLIFY
===========================

Netlify is another excellent option:
- Drag-and-drop deployment
- GitHub integration
- Continuous deployment
- Analytics included

Step 1: Build Project
---------------------
npm run build

Step 2: Create Netlify Account
------------------------------
1. Go to netlify.com
2. Sign up with GitHub
3. Authorize Netlify access

Step 3: Connect Repository
---------------------------
1. Click "New site from Git"
2. Select GitHub
3. Choose StayHealthy-Telemedicine repository

Step 4: Configure Build Settings
---------------------------------
- Build command: npm run build
- Publish directory: dist

Step 5: Deploy
--------------
Click "Deploy site"

Your site will be live at:
https://[sitename].netlify.app

OPTION 3: DEPLOY TO GITHUB PAGES
=================================

Step 1: Update package.json
---------------------------
Add to package.json:
"homepage": "https://yourusername.github.io/StayHealthy-Telemedicine",

Step 2: Install gh-pages
------------------------
npm install --save-dev gh-pages

Step 3: Add Deploy Scripts
--------------------------
Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

Step 4: Deploy
---------------
npm run deploy

OPTION 4: AWS/EC2 DEPLOYMENT
============================

Step 1: Create AWS Account
--------------------------
1. Go to aws.amazon.com
2. Create free tier account

Step 2: Launch EC2 Instance
---------------------------
1. Create Ubuntu instance
2. Configure security groups
3. Download .pem key

Step 3: Connect to Server
-------------------------
ssh -i key.pem ubuntu@your-ip

Step 4: Install Node.js
-----------------------
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

Step 5: Deploy Application
---------------------------
git clone https://github.com/yourusername/StayHealthy-Telemedicine.git
cd StayHealthy-Telemedicine
npm install
npm run build

Step 6: Setup Reverse Proxy (Nginx)
-----------------------------------
sudo apt-get install nginx
# Configure nginx to serve dist/ folder

Step 7: Start with PM2
---------------------
npm install -g pm2
pm2 start "npm run dev"
pm2 startup
pm2 save

ENVIRONMENT VARIABLES
====================

Create .env.production file:
VITE_API_URL=https://api.stayhealthy.com
VITE_APP_NAME=StayHealthy
VITE_VERSION=1.0.0

BUILD VERIFICATION
==================

Before deployment, verify:

1. Check build completes without errors:
   npm run build

2. Check dist folder created:
   ls -la dist/

3. Expected dist structure:
   - dist/index.html (main file)
   - dist/assets/ (JS and CSS bundles)
   - dist/public/ (images and public files)

4. Test production build locally:
   npm run preview

5. Open http://localhost:4173 in browser

POST-DEPLOYMENT CHECKLIST
=========================

✓ Application loads without errors
✓ Navigation works between all pages
✓ Forms accept input and validate
✓ Responsive design works on mobile
✓ Images load correctly
✓ API calls work (or show graceful errors)
✓ Console has no critical errors
✓ Performance is acceptable (check Network tab)
✓ SEO meta tags are present
✓ Custom domain points to site (if applicable)

PERFORMANCE OPTIMIZATION
========================

After deployment, optimize:

1. Enable Gzip compression
2. Set cache headers for assets
3. Use CDN for static files
4. Monitor Core Web Vitals
5. Check Lighthouse score

MONITORING & MAINTENANCE
========================

Set up monitoring:
- Uptime monitoring (UptimeRobot.com)
- Error tracking (Sentry.io)
- Analytics (Google Analytics)
- Performance monitoring

ROLLBACK PROCEDURES
===================

If deployment fails:

Vercel: Click "Rollback" in deployment history
Netlify: Deploy previous successful build
GitHub Pages: Push previous Git commit
AWS: Restore from snapshot

TROUBLESHOOTING DEPLOYMENT
==========================

Issue: "npm command not found"
Solution: Install Node.js on server

Issue: "Port 3000 already in use"
Solution: Change port in vite.config.js

Issue: "Build fails with dependencies"
Solution: 
- Delete node_modules
- Delete package-lock.json
- Run npm install again
- Run npm run build

Issue: "CORS errors after deployment"
Solution: Configure CORS in backend API

Issue: "Static files not loading"
Solution: Check publicPath in vite.config.js

LIVE DEPLOYMENT STATUS
======================

After successful deployment, your application will be available at:

Vercel: https://stayhealthy-telemedicine.vercel.app
Netlify: https://stayhealthy-telemedicine.netlify.app
GitHub Pages: https://yourusername.github.io/StayHealthy-Telemedicine
AWS: https://your-domain.com

Update your grading submission with the live URL.

UPDATING DEPLOYED APPLICATION
==============================

When you make changes:

1. Make changes locally
2. Commit to GitHub: git add . && git commit -m "Update"
3. Push to GitHub: git push origin main
4. For Vercel/Netlify: Auto-deploys on push
5. Verify deployment succeeded

CUSTOM DOMAIN SETUP
===================

If using custom domain like stayhealthy.com:

1. Purchase domain from registrar (GoDaddy, Namecheap)
2. Add domain in hosting platform settings
3. Update nameservers to point to hosting
4. SSL certificate auto-generated (usually)
5. Wait for DNS propagation (24-48 hours)

SECURITY CONSIDERATIONS
=======================

- Enable HTTPS (provided by hosting)
- Keep dependencies updated: npm audit
- Use environment variables for secrets
- Enable rate limiting on API
- Implement authentication properly
- Keep logs and error messages secure

MAINTENANCE SCHEDULE
====================

- Weekly: Check uptime monitoring
- Monthly: Review error logs
- Quarterly: Update dependencies
- Quarterly: Review security settings
- Annually: Review hosting costs

For questions, refer to hosting provider documentation or contact support.
