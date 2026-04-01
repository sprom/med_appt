GITHUB SETUP GUIDE FOR STAYHEALTHY PROJECT
===========================================

This guide provides instructions for setting up and pushing the StayHealthy telemedicine platform to GitHub.

STEP 1: CREATE GITHUB REPOSITORY
================================

1. Go to GitHub.com and create a new repository
   - Repository Name: StayHealthy-Telemedicine
   - Description: Modern telemedicine platform for booking doctor appointments
   - Visibility: Public
   - Don't initialize with README (we have one)

2. Copy the repository URL (should look like):
   https://github.com/yourusername/StayHealthy-Telemedicine.git

STEP 2: CONFIGURE GIT USER INFO
================================

If not already configured, set your Git user:

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

STEP 3: INITIALIZE AND PUSH REPOSITORY
=======================================

Navigate to project directory:
cd C:\Users\r.mamukashvili\Desktop\cr

Initialize git (if not already done):
git init

Add all files:
git add .

Create initial commit:
git commit -m "Initial commit: StayHealthy telemedicine platform"

Add remote repository:
git remote add origin https://github.com/yourusername/StayHealthy-Telemedicine.git

Push to GitHub:
git branch -M main
git push -u origin main

STEP 4: VERIFY GITHUB PUSH
===========================

1. Go to your GitHub repository URL
2. Verify all files are present:
   - /src directory with all components
   - /public directory with images
   - package.json
   - README.md
   - index.html with SEO meta tags

GITHUB REPOSITORY STRUCTURE
============================

Your GitHub repository should have:

ROOT LEVEL:
- README.md ✓
- package.json ✓
- index.html (with SEO meta tags) ✓
- vite.config.js ✓
- .gitignore ✓

/src/ FOLDER:
- App.jsx (with NotificationContainer) ✓
- main.jsx ✓
- /components/ folder with:
  ✓ /Appointments/FindDoctorSearch.jsx
  ✓ /Appointments/AppointmentFormIC.jsx
  ✓ /Appointments/AppointmentForm.jsx
  ✓ /Reviews/GiveReviews.jsx
  ✓ /Profile/ProfileCard.jsx
  ✓ Other components (Navigation, Authentication, Common, Home)
- /pages/ folder with all page components ✓
- /data/ folder with mock data ✓
- /utils/ folder with utilities ✓
- /styles/ folder with CSS files ✓

/public/ FOLDER:
- favicon.svg ✓
- /images/ folder with README ✓

ADDITIONAL FILES (Root):
- build (production build output documentation) ✓
- register (API test script) ✓
- login (API test script) ✓
- patient_report.pdf ✓

SPECIAL REQUIREMENTS DOCUMENTATION:

File Naming: src/components/Appointments/FindDoctorSearch.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Appointments/FindDoctorSearch.jsx

File Naming: src/components/Appointments/AppointmentFormIC.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Appointments/AppointmentFormIC.jsx

File Naming: src/components/Appointments/AppointmentForm.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Appointments/AppointmentForm.jsx

File Naming: src/components/Reviews/GiveReviews.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Reviews/GiveReviews.jsx

File Naming: src/components/Profile/ProfileCard.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Profile/ProfileCard.jsx

File Naming: src/components/Navigation/Navbar.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Navigation/Navbar.jsx

File Naming: src/components/Authentication/SignUp.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Authentication/SignUp.jsx

File Naming: src/components/Authentication/Login.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Authentication/Login.jsx

File Naming: src/components/Home/Home.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Home/Home.jsx

File Naming: src/components/Common/Button.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Common/Button.jsx

File Naming: src/components/Common/Notification.jsx
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/src/components/Common/Notification.jsx

File Naming: README.md
GitHub URL: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/README.md

MAKING UPDATES TO GITHUB
==========================

After pushing to GitHub, make changes locally and push updates:

1. Make changes to files
2. Stage changes: git add .
3. Commit: git commit -m "Commit message describing changes"
4. Push: git push origin main

TYPICAL WORKFLOW FOR GRADING TASKS
==================================

For each grading task requiring a GitHub URL:
1. Ensure file is created with correct naming
2. Push to GitHub
3. Get URL from GitHub (https://github.com/yourusername/repo/blob/main/filepath)
4. Submit URL for grading

COMMON GITHUB URLS FOR THIS PROJECT:
====================================

Base URL: https://github.com/yourusername/StayHealthy-Telemedicine

Main Page: https://github.com/yourusername/StayHealthy-Telemedicine
README: https://github.com/yourusername/StayHealthy-Telemedicine/blob/main/README.md

Component Files:
- Task 8: FindDoctorSearch.jsx → /blob/main/src/components/Appointments/FindDoctorSearch.jsx
- Task 9: Navbar.jsx → /blob/main/src/components/Navigation/Navbar.jsx
- Task 10: AppointmentFormIC.jsx → /blob/main/src/components/Appointments/AppointmentFormIC.jsx
- Task 11: GiveReviews.jsx → /blob/main/src/components/Reviews/GiveReviews.jsx
- Task 12: ProfileCard.jsx → /blob/main/src/components/Profile/ProfileCard.jsx
- Task 14: README.md → /blob/main/README.md
- Task 18: AppointmentForm.jsx → /blob/main/src/components/Appointments/AppointmentForm.jsx
- Task 19: DoctorCard.jsx → /blob/main/src/components/Appointments/DoctorCard.jsx

TROUBLESHOOTING
===============

Issue: "fatal: not a git repository"
Solution: Run "git init" in the project directory

Issue: "Permission denied" when pushing
Solution: Check GitHub SSH keys or use HTTPS with personal access token

Issue: Files not showing on GitHub
Solution: 
- Confirm git add . was executed
- Verify git commit was successful
- Check git push completed without errors
- Refresh GitHub page (Ctrl+Shift+R)

For more help:
- GitHub Docs: https://docs.github.com
- Git Documentation: https://git-scm.com/doc
