"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./node_modules/next-intl/dist/server.react-client.js":
/*!************************************************************!*\
  !*** ./node_modules/next-intl/dist/server.react-client.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nif (false) {} else {\n    module.exports = __webpack_require__(/*! ./development/server.react-client.js */ \"(middleware)/./node_modules/next-intl/dist/development/server.react-client.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQtaW50bC9kaXN0L3NlcnZlci5yZWFjdC1jbGllbnQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxLQUF5QixFQUFjLEVBRTFDLE1BQU07SUFDTEMsaUtBQXlCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0LWludGwvZGlzdC9zZXJ2ZXIucmVhY3QtY2xpZW50LmpzPzFjNWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9zZXJ2ZXIucmVhY3QtY2xpZW50LmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGV2ZWxvcG1lbnQvc2VydmVyLnJlYWN0LWNsaWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next-intl/dist/server.react-client.js\n");

/***/ }),

/***/ "(middleware)/./src/i18n.ts":
/*!*********************!*\
  !*** ./src/i18n.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   locales: () => (/* binding */ locales)\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(middleware)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_intl_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl/server */ \"(middleware)/./node_modules/next-intl/dist/development/server.react-client.js\");\n/* harmony import */ var next_intl_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-intl/server */ \"(middleware)/./node_modules/next-intl/dist/server.react-client.js\");\n\n\n\n// Can be imported from a shared config\nconst locales = [\n    \"en\",\n    \"ar\",\n    \"fr\",\n    \"es\"\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_intl_server__WEBPACK_IMPORTED_MODULE_1__.getRequestConfig)(async ()=>{\n    // Get the locale from the request\n    const locale = await (0,next_intl_server__WEBPACK_IMPORTED_MODULE_2__.getRequestLocale)();\n    // Validate that the incoming `locale` parameter is valid\n    if (!locales.includes(locale)) (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.notFound)();\n    return {\n        locale,\n        messages: (await __webpack_require__(\"(middleware)/./messages lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${locale}.json`)).default\n    };\n}));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2kxOG4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFDUztBQUNBO0FBRWxELHVDQUF1QztBQUN2QyxNQUFNRyxVQUFVO0lBQUM7SUFBTTtJQUFNO0lBQU07Q0FBSztBQUV4QyxpRUFBZUYsa0VBQWdCQSxDQUFDO0lBQzlCLGtDQUFrQztJQUNsQyxNQUFNRyxTQUFTLE1BQU1GLGtFQUFnQkE7SUFFckMseURBQXlEO0lBQ3pELElBQUksQ0FBQ0MsUUFBUUUsUUFBUSxDQUFDRCxTQUFnQkoseURBQVFBO0lBRTlDLE9BQU87UUFDTEk7UUFDQUUsVUFBVSxDQUFDLE1BQU0sZ0ZBQU8sR0FBYSxFQUFFRixPQUFPLE1BQU0sR0FBR0csT0FBTztJQUNoRTtBQUNGLEVBQUUsRUFBQztBQUVjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9pMThuLnRzP2JjZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub3RGb3VuZH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7Z2V0UmVxdWVzdENvbmZpZ30gZnJvbSAnbmV4dC1pbnRsL3NlcnZlcic7XG5pbXBvcnQge2dldFJlcXVlc3RMb2NhbGV9IGZyb20gJ25leHQtaW50bC9zZXJ2ZXInO1xuXG4vLyBDYW4gYmUgaW1wb3J0ZWQgZnJvbSBhIHNoYXJlZCBjb25maWdcbmNvbnN0IGxvY2FsZXMgPSBbJ2VuJywgJ2FyJywgJ2ZyJywgJ2VzJ10gYXMgY29uc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJlcXVlc3RDb25maWcoYXN5bmMgKCkgPT4ge1xuICAvLyBHZXQgdGhlIGxvY2FsZSBmcm9tIHRoZSByZXF1ZXN0XG4gIGNvbnN0IGxvY2FsZSA9IGF3YWl0IGdldFJlcXVlc3RMb2NhbGUoKTtcbiAgXG4gIC8vIFZhbGlkYXRlIHRoYXQgdGhlIGluY29taW5nIGBsb2NhbGVgIHBhcmFtZXRlciBpcyB2YWxpZFxuICBpZiAoIWxvY2FsZXMuaW5jbHVkZXMobG9jYWxlIGFzIGFueSkpIG5vdEZvdW5kKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhbGUsXG4gICAgbWVzc2FnZXM6IChhd2FpdCBpbXBvcnQoYC4uL21lc3NhZ2VzLyR7bG9jYWxlfS5qc29uYCkpLmRlZmF1bHRcbiAgfTtcbn0pO1xuXG5leHBvcnQge2xvY2FsZXN9OyJdLCJuYW1lcyI6WyJub3RGb3VuZCIsImdldFJlcXVlc3RDb25maWciLCJnZXRSZXF1ZXN0TG9jYWxlIiwibG9jYWxlcyIsImxvY2FsZSIsImluY2x1ZGVzIiwibWVzc2FnZXMiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/i18n.ts\n");

/***/ })

});