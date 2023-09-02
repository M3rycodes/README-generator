// TODO: Create a function that returns a license badge based on which license is passed in

// generateMarkdown.js

function getLicenseBadge(licenseType) {
    const licenseBadges = {
        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "Apache 2.0": "[![License: ISC 1.0.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "GNU GPL v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    };

    if (licenseType in licenseBadges) {
        return licenseBadges[licenseType];
    } else {
        return "License badge not found";
    }
}

module.exports = {
    getLicenseBadge
};


// TODO: Create a function that returns the license link
function getLicenseLink(licenseType) {
    const licenseLinks = {
        "MIT": "https://opensource.org/licenses/MIT",
        "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
        "GNU GPL v3": "https://www.gnu.org/licenses/gpl-3.0",
    
    };

    if (licenseType in licenseLinks) {
        return licenseLinks[licenseType];
    } else {
        return "License link not found";
    }
}

module.exports = {
    getLicenseBadge,
    getLicenseLink
};



// TODO: Create a function that returns the license section of README
function generateLicenseSection(licenseType) {
    const licenseBadge = getLicenseBadge(licenseType);
    const licenseLink = getLicenseLink(licenseType);

    const licenseSection = `
    ## License

    ${licenseBadge} [License Link](${licenseLink})
    `;
    
        return licenseSection;
    }
    
    module.exports = {
        getLicenseBadge,
        getLicenseLink,
        generateLicenseSection
    };
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
