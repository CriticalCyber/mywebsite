// JSDoc typedefs for plain JS
/** @typedef {{ name: string, url: string, logo: string }} firmType */
/**
 * @typedef {Object} CredentialsProps
 * @property {string} date
 * @property {string} title
 * @property {firmType} firm
 * @property {string} description
 * @property {string=} location
 * @property {string=} credential_id
 * @property {string=} doc_url
 */
/**
 * @typedef {CredentialsProps & { showModal: boolean, setShowModal: (value: boolean) => void }} ModalCredentialsProps
 */

export {};
