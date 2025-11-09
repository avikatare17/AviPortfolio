# Experience Section - Data Update Guide

## Current Structure

The Experience section uses the same card layout as the Education section. Each card displays:
- **Job Title** (bold, black, top)
- **Dates** (gray, right-aligned next to title)
- **Company** (blue, clickable style)
- **Location** (gray, below company)
- **Description** (gray paragraph text)

## How to Update Your Experience Data

### Step 1: Get Your Experience Information from LinkedIn

1. Go to your LinkedIn profile: www.linkedin.com/in/avi-katare
2. Navigate to the "Experience" section
3. Note down the following for each position:
   - Job title
   - Company name
   - Location (City, State)
   - Start and end dates (or "Present" if current)
   - Description/details (responsibilities, achievements, projects)

### Step 2: Update the Data in App.js

Open `frontend/src/App.js` and find the Experience section (around line 153).

Replace the placeholder data with your actual information:

```jsx
<div className="experience-container">
  <div className="experience-card">
    <div className="experience-header">
      <h3 className="experience-title-text">YOUR JOB TITLE HERE</h3>
      <span className="experience-dates">START DATE - END DATE</span>
    </div>
    <p className="experience-company">COMPANY NAME</p>
    <p className="experience-location">City, State</p>
    <p className="experience-description">
      Your job description here. Include key responsibilities, 
      achievements, projects, and technologies used.
    </p>
  </div>
  
  {/* Add more experience cards as needed */}
  <div className="experience-card">
    {/* Repeat structure for additional positions */}
  </div>
</div>
```

### Step 3: Example Format

Here's an example of how to structure your data:

```jsx
<div className="experience-card">
  <div className="experience-header">
    <h3 className="experience-title-text">Plant Floor Systems Engineer</h3>
    <span className="experience-dates">2024 - Present</span>
  </div>
  <p className="experience-company">General Motors</p>
  <p className="experience-location">Detroit, Michigan</p>
  <p className="experience-description">
    Working on plant floor systems, focusing on Automated Guided Vehicles (AGVs) 
    and their navigation systems. Studying how AGVs make navigation decisions using 
    cameras and developing smarter, self-recovering systems to reduce downtime. 
    Collaborating with cross-functional teams to optimize manufacturing processes.
  </p>
</div>
```

### Step 4: Add or Remove Cards

- **To add a position**: Copy an entire `<div className="experience-card">...</div>` block and paste it within the `experience-container`
- **To remove a position**: Delete the entire `<div className="experience-card">...</div>` block
- **Order**: Cards are displayed in the order they appear in the code (most recent first is recommended)

## Current Placeholder Data

The Experience section currently includes:
1. **Plant Floor Systems Engineer** at General Motors (2024 - Present) - with description
2. **Previous Position** placeholder - needs to be updated

## Styling Notes

The cards are styled to match the Education section:
- Light gray background with semi-transparent white cards
- Blue left border (#2563eb)
- Rounded corners
- Subtle shadow
- Responsive design (stacks on mobile)
- Background image support (optional)

## Background Image (Optional)

If you want to add a background image to the Experience section:
1. Place your image in `frontend/public/images/experience-background.jpg`
2. The image will automatically be used as the background
3. If no image is provided, a dark fallback color will be used

## Testing

After updating your data:
1. Save the file
2. Run `npm start` in the frontend directory
3. Navigate to the Experience section
4. Verify all information displays correctly
5. Test on different screen sizes (desktop, tablet, mobile)

## Quick Reference

- **Job Title**: `.experience-title-text` - Bold, black, large font
- **Dates**: `.experience-dates` - Gray, right-aligned
- **Company**: `.experience-company` - Blue color
- **Location**: `.experience-location` - Gray, smaller font
- **Description**: `.experience-description` - Gray paragraph text

