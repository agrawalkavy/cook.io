/**
 * @license MIT
 * @copyright 2023 codewithkavy
 * @author codewithkavy
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String} */ APP_ID = "3b09d8f8";
const /** {String} */ API_KEY = "082b0cfaa5f9663a217dd4ff3c11a0b2";
const /** {String} */ TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries, successCallback) {
    const /** {String} */ query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");

    const /** {String} */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const /** {Object} */ response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}