// File I/O Utilities

const fs = require('fs');
const path = require('path');

/**
 * Reads a file and returns its content.
 * @param {string} filePath - The path to the file.
 * @returns {Promise<string>} - The content of the file.
 */
async function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

/**
 * Writes data to a file.
 * @param {string} filePath - The path to the file.
 * @param {string} data - The data to write to the file.
 * @returns {Promise<void>}
 */
async function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

/**
 * Appends data to a file.
 * @param {string} filePath - The path to the file.
 * @param {string} data - The data to append to the file.
 * @returns {Promise<void>}
 */
async function appendFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, data, 'utf8', (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

/**
 * Checks if a file exists.
 * @param {string} filePath - The path to the file.
 * @returns {Promise<boolean>} - True if the file exists, otherwise false.
 */
async function fileExists(filePath) {
    return new Promise((resolve) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            resolve(!err);
        });
    });
}

module.exports = { readFile, writeFile, appendFile, fileExists };