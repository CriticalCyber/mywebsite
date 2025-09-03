// JSDoc typedefs to document shapes in JS-only project

/** @typedef {{ name: string, role: string, profile: string }} TeamMember */
/**
 * @typedef {Object} Overview
 * @property {string} timeline
 * @property {string} url
 * @property {string} my_role
 * @property {TeamMember[]} team
 * @property {string} title
 * @property {string[]} desc
 * @property {string} img
 */
/** @typedef {{ title: string, desc: string }} SolutionListItem */
/**
 * @typedef {Object} Solutions
 * @property {string} title
 * @property {string} desc
 * @property {string} img
 * @property {SolutionListItem[]} solution_list
 */
/** @typedef {{ title: string, desc: string }} ImpactListItem */
/**
 * @typedef {Object} Impact
 * @property {string} title
 * @property {string} desc
 * @property {string} img
 * @property {ImpactListItem[]} impact_list
 */
/** @typedef {{ title: string, desc: string }} LearningListItem */
/**
 * @typedef {Object} Contributions
 * @property {string} title
 * @property {string} desc
 * @property {LearningListItem[]} learning_list
 */
/**
 * @typedef {Object} Problem
 * @property {string} title
 * @property {string} desc
 * @property {string} img
 */
/**
 * @typedef {Object} Conclusion
 * @property {string} title
 * @property {string} desc
 */
/**
 * @typedef {Object} CaseStudy
 * @property {string} title
 * @property {string} sub_title
 * @property {string} img
 * @property {string} coverImg
 * @property {Overview} overview
 * @property {Problem} problem
 * @property {Solutions} solutions
 * @property {Impact} impact
 * @property {Contributions} contributions
 * @property {Conclusion} conclusion
 */

export {}; // keep as a module
