# Education Section - Data Update Guide

## Current Structure

The Education section now uses a card layout matching the design from your reference image. Each card displays:
- **Degree Title** (bold, black, top)
- **Dates** (gray, right-aligned next to title)
- **Institution** (blue, clickable style)
- **Location** (gray, below institution)
- **Description** (gray paragraph text)

## How to Update Your Education Data

### Step 1: Get Your Education Information from LinkedIn

1. Go to your LinkedIn profile: www.linkedin.com/in/avi-katare
2. Navigate to the "Education" section
3. Note down the following for each degree:
   - Degree name (e.g., "Master of Science in Computer Science")
   - Institution name
   - Location (City, State)
   - Start and end dates (or graduation year)
   - Description/details (GPA, honors, relevant coursework, etc.)

### Step 2: Update the Data in App.js

Open `frontend/src/App.js` and find the Education section (around line 118).

Replace the placeholder data with your actual information:

```jsx
<div className="education-container">
  <div className="education-card">
    <div className="education-header">
      <h3 className="education-degree">YOUR DEGREE NAME HERE</h3>
      <span className="education-dates">START YEAR - END YEAR</span>
    </div>
    <p className="education-institution">INSTITUTION NAME</p>
    <p className="education-location">City, State</p>
    <p className="education-description">
      Your description here. Include GPA, honors, relevant coursework, 
      thesis topics, or any notable achievements.
    </p>
  </div>
  
  {/* Add more education cards as needed */}
  <div className="education-card">
    {/* Repeat structure for additional degrees */}
  </div>
</div>
```

### Step 3: Example Format

Here's an example of how to structure your data:

```jsx
<div className="education-card">
  <div className="education-header">
    <h3 className="education-degree">Master of Science in Computer Science</h3>
    <span className="education-dates">2020 - 2022</span>
  </div>
  <p className="education-institution">Purdue University</p>
  <p className="education-location">West Lafayette, Indiana</p>
  <p className="education-description">
    Focused on software engineering, data structures, and artificial intelligence. 
    Completed thesis on machine learning applications in autonomous systems. 
    GPA: 3.8/4.0. Graduated with honors.
  </p>
</div>
```

### Step 4: Add or Remove Cards

- **To add a degree**: Copy an entire `<div className="education-card">...</div>` block and paste it within the `education-container`
- **To remove a degree**: Delete the entire `<div className="education-card">...</div>` block
- **Order**: Cards are displayed in the order they appear in the code (most recent first is recommended)

## Styling Notes

The cards are styled to match your reference image:
- Light gray background (#f5f5f5)
- Blue left border (#2563eb)
- Rounded corners
- Subtle shadow
- Responsive design (stacks on mobile)

## Testing

After updating your data:
1. Save the file
2. Run `npm start` in the frontend directory
3. Navigate to the Education section
4. Verify all information displays correctly
5. Test on different screen sizes (desktop, tablet, mobile)

## Quick Reference

- **Degree Title**: `.education-degree` - Bold, black, large font
- **Dates**: `.education-dates` - Gray, right-aligned
- **Institution**: `.education-institution` - Blue color
- **Location**: `.education-location` - Gray, smaller font
- **Description**: `.education-description` - Gray paragraph text

