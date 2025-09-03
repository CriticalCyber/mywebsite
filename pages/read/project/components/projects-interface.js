// JSDoc typedefs to document shapes in JS-only project

/** @typedef {{ title: string, desc: string }} FeatureItem */
/**
 * @typedef {Object} Overview
 * @property {string} myRole
 * @property {string} techUsed
 * @property {string} timeline
 * @property {string} sourceCode
 * @property {string|null} liveUrl
 * @property {string[]} projectDesc
 */
/**
 * @typedef {Object} Details
 * @property {string} coverImgSrc
 * @property {Overview} overview
 * @property {FeatureItem[]} features
 */
/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title
 * @property {string} subTitle
 * @property {string} img
 * @property {boolean} isFeatured
 * @property {boolean} isLocked
 * @property {Details} details
 */

export {}; // ensures this file is treated as a module