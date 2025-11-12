#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Scans a network directory and generates validator data
 * @param {string} network - Network name (main, devnet, test)
 * @returns {Array} Array of validator objects
 */
function generateValidatorData(network) {
  const validatorsDir = path.join(__dirname, '..', 'validators', network);
  
  // Check if directory exists
  if (!fs.existsSync(validatorsDir)) {
    console.log(`Directory not found: ${validatorsDir}`);
    return [];
  }

  const validators = [];
  
  // Read all directories in the network folder
  const entries = fs.readdirSync(validatorsDir, { withFileTypes: true });
  
  for (const entry of entries) {
    // Skip if not a directory
    if (!entry.isDirectory()) {
      continue;
    }
    
    const address = entry.name;
    const validatorDir = path.join(validatorsDir, address);
    const manifestPath = path.join(validatorDir, 'manifest.json');
    const logoPath = path.join(validatorDir, 'logo.png');
    
    // Check if manifest.json exists
    if (!fs.existsSync(manifestPath)) {
      console.warn(`Warning: manifest.json not found for ${network}/${address}`);
      continue;
    }
    
    try {
      // Read and parse manifest.json
      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      const manifest = JSON.parse(manifestContent);
      
      // Create validator object
      const validator = {
        address: address,
        name: manifest.name,
        location: manifest.location,
        desc: manifest.desc
      };
      
      // Add website if it exists
      if (manifest.website) {
        validator.website = manifest.website;
      }
      
      // Add logo path if logo.png exists
      if (fs.existsSync(logoPath)) {
        validator.logo = `validators/${network}/${address}/logo.png`;
      }
      
      validators.push(validator);
      console.log(`Added validator: ${address} (${manifest.name})`);
      
    } catch (error) {
      console.error(`Error processing ${network}/${address}:`, error.message);
    }
  }
  
  return validators;
}

/**
 * Main function to generate all JSON files
 */
function main() {
  const networks = ['main', 'devnet', 'test'];
  const outputDir = path.join(__dirname, '..');
  
  console.log('Generating validator JSON files...\n');
  
  for (const network of networks) {
    console.log(`Processing ${network} network...`);
    const validators = generateValidatorData(network);
    
    // Generate output file
    const outputFile = path.join(outputDir, `${network}.json`);
    const jsonContent = JSON.stringify(validators, null, 2);
    
    fs.writeFileSync(outputFile, jsonContent, 'utf8');
    console.log(`✓ Generated ${network}.json with ${validators.length} validator(s)\n`);
  }
  
  console.log('All JSON files generated successfully!');
}

// Run the script
main();

