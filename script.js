/**
 * @name FusionDex Graphics Processing
 * @version 1.0.0
 * @description Official graphics management system for Pokémon Infinite Fusion
 * @author fusiondex-org
 * @license MIT
 * @repository https://github.com/fusiondex-org/fusiondex-org.github.io
 * @website https://fusiondex-org.github.io
 * 
 * This script is part of the FusionDex Graphics Processing system.
 * It provides functionality for managing, rendering, and loading
 * Pokémon Infinite Fusion graphics in the DOM.
 * 
 * Features:
 * - Efficient rendering of Pokémon sprites
 * - Seamless integration with spritesheets
 * - Utility functions for sprite management
 * - Optimized performance
 * - Error handling for missing sprites
 * 
 * For documentation and updates, visit:
 * https://github.com/fusiondex-org/fusiondex-org.github.io
 */

// Main Graphics object
const Graphics = {
    // Version information
    version: '1.0.0',
    
    // Debug mode configuration
    debugMode: false,
    
    // Initialize the Graphics system
    init() {
        // Check if debug mode is enabled in URL
        const urlParams = new URLSearchParams(window.location.search);
        this.debugMode = urlParams.get('mode') === 'dev';
        
        // Log initialization in debug mode
        if (this.debugMode) {
            console.log('FusionDex Graphics Processing initialized in debug mode');
        }
    }
};
