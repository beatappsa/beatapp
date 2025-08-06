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

/***/ "(middleware)/./src/i18n.ts":
/*!*********************!*\
  !*** ./src/i18n.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   locales: () => (/* binding */ locales)\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(middleware)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_intl_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl/server */ \"(middleware)/./node_modules/next-intl/dist/development/server.react-client.js\");\n\n\n\n// Can be imported from a shared config\nconst locales = [\n    \"en\",\n    \"ar\",\n    \"fr\",\n    \"es\"\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_intl_server__WEBPACK_IMPORTED_MODULE_1__.getRequestConfig)(async ()=>{\n    // Get the locale from the request\n    const locale = await (0,next_intl_server__WEBPACK_IMPORTED_MODULE_1__.getLocale)();\n    // Validate that the incoming `locale` parameter is valid\n    if (!locales.includes(locale)) (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.notFound)();\n    return {\n        locale,\n        messages: (await __webpack_require__(\"(middleware)/./messages lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${locale}.json`)).default\n    };\n}));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2kxOG4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUNTO0FBQ1A7QUFFM0MsdUNBQXVDO0FBQ3ZDLE1BQU1HLFVBQVU7SUFBQztJQUFNO0lBQU07SUFBTTtDQUFLO0FBRXhDLGlFQUFlRixrRUFBZ0JBLENBQUM7SUFDOUIsa0NBQWtDO0lBQ2xDLE1BQU1HLFNBQVMsTUFBTUYsMkRBQVNBO0lBRTlCLHlEQUF5RDtJQUN6RCxJQUFJLENBQUNDLFFBQVFFLFFBQVEsQ0FBQ0QsU0FBZ0JKLHlEQUFRQTtJQUU5QyxPQUFPO1FBQ0xJO1FBQ0FFLFVBQVUsQ0FBQyxNQUFNLGdGQUFPLEdBQWEsRUFBRUYsT0FBTyxNQUFNLEdBQUdHLE9BQU87SUFDaEU7QUFDRixFQUFFLEVBQUM7QUFFYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaTE4bi50cz9iY2Q5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bm90Rm91bmR9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQge2dldFJlcXVlc3RDb25maWd9IGZyb20gJ25leHQtaW50bC9zZXJ2ZXInO1xuaW1wb3J0IHtnZXRMb2NhbGV9IGZyb20gJ25leHQtaW50bC9zZXJ2ZXInO1xuXG4vLyBDYW4gYmUgaW1wb3J0ZWQgZnJvbSBhIHNoYXJlZCBjb25maWdcbmNvbnN0IGxvY2FsZXMgPSBbJ2VuJywgJ2FyJywgJ2ZyJywgJ2VzJ10gYXMgY29uc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJlcXVlc3RDb25maWcoYXN5bmMgKCkgPT4ge1xuICAvLyBHZXQgdGhlIGxvY2FsZSBmcm9tIHRoZSByZXF1ZXN0XG4gIGNvbnN0IGxvY2FsZSA9IGF3YWl0IGdldExvY2FsZSgpO1xuICBcbiAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgaW5jb21pbmcgYGxvY2FsZWAgcGFyYW1ldGVyIGlzIHZhbGlkXG4gIGlmICghbG9jYWxlcy5pbmNsdWRlcyhsb2NhbGUgYXMgYW55KSkgbm90Rm91bmQoKTtcblxuICByZXR1cm4ge1xuICAgIGxvY2FsZSxcbiAgICBtZXNzYWdlczogKGF3YWl0IGltcG9ydChgLi4vbWVzc2FnZXMvJHtsb2NhbGV9Lmpzb25gKSkuZGVmYXVsdFxuICB9O1xufSk7XG5cbmV4cG9ydCB7bG9jYWxlc307Il0sIm5hbWVzIjpbIm5vdEZvdW5kIiwiZ2V0UmVxdWVzdENvbmZpZyIsImdldExvY2FsZSIsImxvY2FsZXMiLCJsb2NhbGUiLCJpbmNsdWRlcyIsIm1lc3NhZ2VzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/i18n.ts\n");

/***/ })

});