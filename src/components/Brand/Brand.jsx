echo "# ASSIGNMENT-5" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/omorfaruk22/ASSIGNMENT-5.git
git push -u origin main


import React from 'react';

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Dev Stack home">
      <span className="brand-mark">DS</span>
      <span>Dev <strong>Stack</strong></span>
    </a>
  );
}

export default Brand;