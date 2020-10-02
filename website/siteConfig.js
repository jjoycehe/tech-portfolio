/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
    title: 'Jiarong Joyce He', // Title for your website.
    tagline: 'Growing down to achieve high.',
    profilePhoto: 'img/profile.png',
    url: 'https://jjoycehe.github.io', // Your website URL
    baseUrl: '/tech-portfolio/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'tech-portfolio',
    organizationName: 'jjoycehe',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { doc: "about", label: "About" },
        { doc: "projects", label: "Projects" },
        // Links to blog generated by Docusaurus (${baseUrl}blog)
        { blog: true, label: "Blog" },
    ],

    // If you have users set above, you add it here:
    users,

    favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#2C312E',
        secondaryColor: '#72C3E7',
    },

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} Your Name Here`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Show documentation's last update time.
    enableUpdateTime: true,

    socialMedia: {
        linkedin: 'jjoycehe',
        twitter: 'jiarongjoyce',
        github: 'jjoycehe',
    },

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
