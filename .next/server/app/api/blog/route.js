/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/blog/route";
exports.ids = ["app/api/blog/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2Froute&page=%2Fapi%2Fblog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2Froute.js&appDir=C%3A%5CPAA%5CNextJS%5Cblog-clone%5CBlog-App%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPAA%5CNextJS%5Cblog-clone%5CBlog-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2Froute&page=%2Fapi%2Fblog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2Froute.js&appDir=C%3A%5CPAA%5CNextJS%5Cblog-clone%5CBlog-App%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPAA%5CNextJS%5Cblog-clone%5CBlog-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_PAA_NextJS_blog_clone_Blog_App_app_api_blog_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/blog/route.js */ \"(rsc)/./app/api/blog/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/blog/route\",\n        pathname: \"/api/blog\",\n        filename: \"route\",\n        bundlePath: \"app/api/blog/route\"\n    },\n    resolvedPagePath: \"C:\\\\PAA\\\\NextJS\\\\blog-clone\\\\Blog-App\\\\app\\\\api\\\\blog\\\\route.js\",\n    nextConfigOutput,\n    userland: C_PAA_NextJS_blog_clone_Blog_App_app_api_blog_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZibG9nJTJGcm91dGUmcGFnZT0lMkZhcGklMkZibG9nJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYmxvZyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDUEFBJTVDTmV4dEpTJTVDYmxvZy1jbG9uZSU1Q0Jsb2ctQXBwJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDUEFBJTVDTmV4dEpTJTVDYmxvZy1jbG9uZSU1Q0Jsb2ctQXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNlO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxQQUFcXFxcTmV4dEpTXFxcXGJsb2ctY2xvbmVcXFxcQmxvZy1BcHBcXFxcYXBwXFxcXGFwaVxcXFxibG9nXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ibG9nL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYmxvZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYmxvZy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFBBQVxcXFxOZXh0SlNcXFxcYmxvZy1jbG9uZVxcXFxCbG9nLUFwcFxcXFxhcHBcXFxcYXBpXFxcXGJsb2dcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2Froute&page=%2Fapi%2Fblog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2Froute.js&appDir=C%3A%5CPAA%5CNextJS%5Cblog-clone%5CBlog-App%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPAA%5CNextJS%5Cblog-clone%5CBlog-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/blog/route.js":
/*!*******************************!*\
  !*** ./app/api/blog/route.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/config/db */ \"(rsc)/./lib/config/db.js\");\n/* harmony import */ var _lib_models_BlogModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/models/BlogModel */ \"(rsc)/./lib/models/BlogModel.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\n\n// API Endpoint to get all blog\nasync function GET(request) {\n    try {\n        await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n        const blogId = request.nextUrl.searchParams.get(\"id\");\n        if (blogId) {\n            const blog = await _lib_models_BlogModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(blogId);\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json(blog);\n        } else {\n            const blogs = await _lib_models_BlogModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                blogs\n            });\n        }\n    } catch (error) {\n        console.error(\"Error connecting to database:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            success: false,\n            msg: \"Failed to fetch blogs\"\n        });\n    }\n}\n// API Endpoint for uploading blog\nasync function POST(request) {\n    try {\n        await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n        const formData = await request.formData();\n        const timestamp = Date.now();\n        // Handle image upload\n        const image = formData.get(\"image\");\n        if (!image) {\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                success: false,\n                msg: \"Image is required\"\n            });\n        }\n        const imageByteData = await image.arrayBuffer();\n        const buffer = Buffer.from(imageByteData);\n        const publicPath = \"./public\";\n        if (!(0,fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)(publicPath)) {\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.mkdir)(publicPath);\n        }\n        const path = `${publicPath}/${timestamp}_${image.name}`;\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(path, buffer);\n        const imgUrl = `/${timestamp}_${image.name}`;\n        // Collect blog data\n        const blogData = {\n            title: formData.get(\"title\"),\n            description: formData.get(\"description\"),\n            category: formData.get(\"category\"),\n            author: formData.get(\"author\"),\n            image: imgUrl,\n            authorImg: formData.get(\"authorImg\")\n        };\n        // Validate required fields\n        if (!blogData.title || !blogData.description || !blogData.category || !blogData.author) {\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                success: false,\n                msg: \"All required fields must be provided\"\n            });\n        }\n        // Save blog to database\n        await _lib_models_BlogModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(blogData);\n        console.log(\"Blog saved to database\");\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            success: true,\n            msg: \"Blog added\"\n        });\n    } catch (error) {\n        console.error(\"Error adding blog:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            success: false,\n            msg: error.message || \"Failed to add blog\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCO0lBQ3hGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxQQUFcXE5leHRKU1xcYmxvZy1jbG9uZVxcQmxvZy1BcHBcXGFwcFxcYXBpXFxibG9nXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0REIgfSBmcm9tIFwiQC9saWIvY29uZmlnL2RiXCI7XHJcbmltcG9ydCBCbG9nTW9kZWwgZnJvbSBcIkAvbGliL21vZGVscy9CbG9nTW9kZWxcIjtcclxuaW1wb3J0IHsgd3JpdGVGaWxlLCBta2RpciB9IGZyb20gXCJmcy9wcm9taXNlc1wiO1xyXG5pbXBvcnQgeyBleGlzdHNTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuLy8gQVBJIEVuZHBvaW50IHRvIGdldCBhbGwgYmxvZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcclxuICBcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQ29ubmVjdERCKCk7XHJcbiAgICBjb25zdCBibG9nSWQgPSByZXF1ZXN0Lm5leHRVcmwuc2VhcmNoUGFyYW1zLmdldChcImlkXCIpXHJcbiAgICBpZiAoYmxvZ0lkKSB7XHJcbiAgICAgIGNvbnN0IGJsb2cgPSBhd2FpdCBCbG9nTW9kZWwuZmluZEJ5SWQoYmxvZ0lkKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGJsb2cpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGJsb2dzID0gYXdhaXQgQmxvZ01vZGVsLmZpbmQoe30pO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBibG9ncyB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2U6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiRmFpbGVkIHRvIGZldGNoIGJsb2dzXCIgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBUEkgRW5kcG9pbnQgZm9yIHVwbG9hZGluZyBibG9nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQ29ubmVjdERCKCk7XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIC8vIEhhbmRsZSBpbWFnZSB1cGxvYWRcclxuICAgIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIik7XHJcbiAgICBpZiAoIWltYWdlKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiSW1hZ2UgaXMgcmVxdWlyZWRcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUJ5dGVEYXRhID0gYXdhaXQgaW1hZ2UuYXJyYXlCdWZmZXIoKTtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGltYWdlQnl0ZURhdGEpO1xyXG5cclxuICAgIGNvbnN0IHB1YmxpY1BhdGggPSBcIi4vcHVibGljXCI7XHJcbiAgICBpZiAoIWV4aXN0c1N5bmMocHVibGljUGF0aCkpIHtcclxuICAgICAgYXdhaXQgbWtkaXIocHVibGljUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF0aCA9IGAke3B1YmxpY1BhdGh9LyR7dGltZXN0YW1wfV8ke2ltYWdlLm5hbWV9YDtcclxuICAgIGF3YWl0IHdyaXRlRmlsZShwYXRoLCBidWZmZXIpO1xyXG4gICAgY29uc3QgaW1nVXJsID0gYC8ke3RpbWVzdGFtcH1fJHtpbWFnZS5uYW1lfWA7XHJcblxyXG4gICAgLy8gQ29sbGVjdCBibG9nIGRhdGFcclxuICAgIGNvbnN0IGJsb2dEYXRhID0ge1xyXG4gICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSxcclxuICAgICAgY2F0ZWdvcnk6IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpLFxyXG4gICAgICBhdXRob3I6IGZvcm1EYXRhLmdldChcImF1dGhvclwiKSxcclxuICAgICAgaW1hZ2U6IGltZ1VybCxcclxuICAgICAgYXV0aG9ySW1nOiBmb3JtRGF0YS5nZXQoXCJhdXRob3JJbWdcIiksXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xyXG4gICAgaWYgKCFibG9nRGF0YS50aXRsZSB8fCAhYmxvZ0RhdGEuZGVzY3JpcHRpb24gfHwgIWJsb2dEYXRhLmNhdGVnb3J5IHx8ICFibG9nRGF0YS5hdXRob3IpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJBbGwgcmVxdWlyZWQgZmllbGRzIG11c3QgYmUgcHJvdmlkZWRcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIGJsb2cgdG8gZGF0YWJhc2VcclxuICAgIGF3YWl0IEJsb2dNb2RlbC5jcmVhdGUoYmxvZ0RhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJCbG9nIHNhdmVkIHRvIGRhdGFiYXNlXCIpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1zZzogXCJCbG9nIGFkZGVkXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgYmxvZzpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogZXJyb3IubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBhZGQgYmxvZ1wiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiQmxvZ01vZGVsIiwid3JpdGVGaWxlIiwibWtkaXIiLCJleGlzdHNTeW5jIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxdWVzdCIsImJsb2dJZCIsIm5leHRVcmwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJibG9nIiwiZmluZEJ5SWQiLCJqc29uIiwiYmxvZ3MiLCJmaW5kIiwiZXJyb3IiLCJjb25zb2xlIiwic3VjY2VzcyIsIm1zZyIsIlBPU1QiLCJmb3JtRGF0YSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJpbWFnZSIsImltYWdlQnl0ZURhdGEiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJwdWJsaWNQYXRoIiwicGF0aCIsIm5hbWUiLCJpbWdVcmwiLCJibG9nRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImF1dGhvciIsImF1dGhvckltZyIsImNyZWF0ZSIsImxvZyIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/blog/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/config/db.js":
/*!**************************!*\
  !*** ./lib/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectDB: () => (/* binding */ ConnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ConnectDB = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect('mongodb+srv://listyodwi062:TF1nOyTLN6nUr0SI@cluster0.y9wwv.mongodb.net/blog-app');\n    console.log('DB Connected');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29uZmlnL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixNQUFNQyxZQUFZO0lBQ3JCLE1BQU1ELHVEQUFnQixDQUFDO0lBQ3ZCRyxRQUFRQyxHQUFHLENBQUM7QUFFaEIsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFBBQVxcTmV4dEpTXFxibG9nLWNsb25lXFxCbG9nLUFwcFxcbGliXFxjb25maWdcXGRiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiK3NydjovL2xpc3R5b2R3aTA2MjpURjFuT3lUTE42blVyMFNJQGNsdXN0ZXIwLnk5d3d2Lm1vbmdvZGIubmV0L2Jsb2ctYXBwJyk7XHJcbiAgICBjb25zb2xlLmxvZygnREIgQ29ubmVjdGVkJyk7XHJcbiAgICBcclxufSBcclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNvbm5lY3REQiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/config/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/BlogModel.js":
/*!*********************************!*\
  !*** ./lib/models/BlogModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        Required: true\n    },\n    description: {\n        type: String,\n        Required: true\n    },\n    category: {\n        type: String,\n        Required: true\n    },\n    author: {\n        type: String,\n        Required: true\n    },\n    image: {\n        type: String,\n        Required: true\n    },\n    authorImg: {\n        type: String,\n        Required: true\n    },\n    date: {\n        type: Date,\n        default: Date.now()\n    }\n});\nconst BlogModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).blog || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('blog', Schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL0Jsb2dNb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxJQUFJRCx3REFBZSxDQUFDO0lBQy9CRSxPQUFNO1FBQ0ZDLE1BQUtDO1FBQ0xDLFVBQVM7SUFDYjtJQUVBQyxhQUFZO1FBQ1JILE1BQUtDO1FBQ0xDLFVBQVM7SUFDYjtJQUVBRSxVQUFTO1FBQ0xKLE1BQUtDO1FBQ0xDLFVBQVM7SUFDYjtJQUVBRyxRQUFPO1FBQ0hMLE1BQUtDO1FBQ0xDLFVBQVM7SUFDYjtJQUVBSSxPQUFNO1FBQ0ZOLE1BQUtDO1FBQ0xDLFVBQVM7SUFDYjtJQUVBSyxXQUFVO1FBQ05QLE1BQUtDO1FBQ0xDLFVBQVM7SUFDYjtJQUVBTSxNQUFLO1FBQ0RSLE1BQUtTO1FBQ0xDLFNBQVFELEtBQUtFLEdBQUc7SUFDcEI7QUFDSjtBQUVBLE1BQU1DLFlBQVlmLHdEQUFlLENBQUNpQixJQUFJLElBQUlqQixxREFBYyxDQUFDLFFBQVFDO0FBRWpFLGlFQUFlYyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJDOlxcUEFBXFxOZXh0SlNcXGJsb2ctY2xvbmVcXEJsb2ctQXBwXFxsaWJcXG1vZGVsc1xcQmxvZ01vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIFJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcblxyXG4gICAgZGVzY3JpcHRpb246e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIFJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcblxyXG4gICAgY2F0ZWdvcnk6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIFJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcblxyXG4gICAgYXV0aG9yOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICBSZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICBSZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIGF1dGhvckltZzp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgUmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBkYXRlOntcclxuICAgICAgICB0eXBlOkRhdGUsXHJcbiAgICAgICAgZGVmYXVsdDpEYXRlLm5vdygpXHJcbiAgICB9LFxyXG59KVxyXG5cclxuY29uc3QgQmxvZ01vZGVsID0gbW9uZ29vc2UubW9kZWxzLmJsb2cgfHwgbW9uZ29vc2UubW9kZWwoJ2Jsb2cnLCBTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ01vZGVsOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsIlJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImF1dGhvciIsImltYWdlIiwiYXV0aG9ySW1nIiwiZGF0ZSIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiQmxvZ01vZGVsIiwibW9kZWxzIiwiYmxvZyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/BlogModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2Froute&page=%2Fapi%2Fblog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2Froute.js&appDir=C%3A%5CPAA%5CNextJS%5Cblog-clone%5CBlog-App%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPAA%5CNextJS%5Cblog-clone%5CBlog-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();