const generateMarkdown = generateMarkdown();
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

# Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[email](#email)
  
## description:
    ${response.description}
  
## installation:
    ${response.install}
  
## usage:
    ${response.usage}
  
    
## licenses:
  
## contribution:
    ${response.contributing}
  
## test:
    ${response.tests}
  
## email:
    ${response.email}
`;
}

module.exports =generateMarkdown();
// export default generateMarkdown;