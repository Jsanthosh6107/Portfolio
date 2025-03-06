## First Next.js Website

How the website works:  
  -Each page segment is in a component  
  -Components are meant to be dynamic and reusable  
  -Finished Components are added to PageLayoutRenderer.jsx  
  -PageLayoutRenderer finds and adds the data from the data folder to build the page.  
  -The page is built in homeLayoutContent, subsequent pages can be added with another LayoutContent page.  
  -page.js is the actual page.  
  -SVG's are uploaded via index.js  

-Commands:
-npx next build
-Get-Process node | Stop-Process -Force  >>> Remove-Item -Recurse -Force .next >>> npm install
-netstat -ano | findstr :3000 >>> taskkill /PID {ID} /F

Vercel Fix4