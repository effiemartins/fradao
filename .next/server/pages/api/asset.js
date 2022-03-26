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
exports.id = "pages/api/asset";
exports.ids = ["pages/api/asset"];
exports.modules = {

/***/ "./src/lib/notion/getNotionAssetUrls.ts":
/*!**********************************************!*\
  !*** ./src/lib/notion/getNotionAssetUrls.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getNotionAsset)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc */ \"./src/lib/notion/rpc.ts\");\n/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-constants */ \"./src/lib/notion/server-constants.js\");\n/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server_constants__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getNotionAsset(res, assetUrl, blockId) {\n  const requestURL = `${_server_constants__WEBPACK_IMPORTED_MODULE_2__.API_ENDPOINT}/getSignedFileUrls`;\n  const assetRes = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(requestURL, {\n    method: 'POST',\n    headers: {\n      cookie: `token_v2=${_server_constants__WEBPACK_IMPORTED_MODULE_2__.NOTION_TOKEN}`,\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      urls: [{\n        url: assetUrl,\n        permissionRecord: {\n          table: 'block',\n          id: blockId\n        }\n      }]\n    })\n  });\n\n  if (assetRes.ok) {\n    return assetRes.json();\n  } else {\n    console.log('bad request', assetRes.status);\n    res.json({\n      status: 'error',\n      message: 'failed to load Notion asset'\n    });\n    throw new Error(await (0,_rpc__WEBPACK_IMPORTED_MODULE_1__.getError)(assetRes));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL25vdGlvbi9nZXROb3Rpb25Bc3NldFVybHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsZUFBZUksY0FBZixDQUNiQyxHQURhLEVBRWJDLFFBRmEsRUFHYkMsT0FIYSxFQU1aO0FBQ0QsUUFBTUMsVUFBVSxHQUFJLEdBQUVMLDJEQUFhLG9CQUFuQztBQUNBLFFBQU1NLFFBQVEsR0FBRyxNQUFNVCxpREFBSyxDQUFDUSxVQUFELEVBQWE7QUFDdkNFLElBQUFBLE1BQU0sRUFBRSxNQUQrQjtBQUV2Q0MsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLE1BQU0sRUFBRyxZQUFXViwyREFBYSxFQUQxQjtBQUVQLHNCQUFnQjtBQUZULEtBRjhCO0FBTXZDVyxJQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxNQUFBQSxJQUFJLEVBQUUsQ0FDSjtBQUNFQyxRQUFBQSxHQUFHLEVBQUVYLFFBRFA7QUFFRVksUUFBQUEsZ0JBQWdCLEVBQUU7QUFDaEJDLFVBQUFBLEtBQUssRUFBRSxPQURTO0FBRWhCQyxVQUFBQSxFQUFFLEVBQUViO0FBRlk7QUFGcEIsT0FESTtBQURhLEtBQWY7QUFOaUMsR0FBYixDQUE1Qjs7QUFtQkEsTUFBSUUsUUFBUSxDQUFDWSxFQUFiLEVBQWlCO0FBQ2YsV0FBT1osUUFBUSxDQUFDYSxJQUFULEVBQVA7QUFDRCxHQUZELE1BRU87QUFDTEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQmYsUUFBUSxDQUFDZ0IsTUFBcEM7QUFDQXBCLElBQUFBLEdBQUcsQ0FBQ2lCLElBQUosQ0FBUztBQUFFRyxNQUFBQSxNQUFNLEVBQUUsT0FBVjtBQUFtQkMsTUFBQUEsT0FBTyxFQUFFO0FBQTVCLEtBQVQ7QUFDQSxVQUFNLElBQUlDLEtBQUosQ0FBVSxNQUFNMUIsOENBQVEsQ0FBQ1EsUUFBRCxDQUF4QixDQUFOO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3R1dHVtZW5lemVzLXNpdGUvLi9zcmMvbGliL25vdGlvbi9nZXROb3Rpb25Bc3NldFVybHMudHM/YzQzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcbmltcG9ydCB7IGdldEVycm9yIH0gZnJvbSAnLi9ycGMnXG5pbXBvcnQgeyBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgTk9USU9OX1RPS0VOLCBBUElfRU5EUE9JTlQgfSBmcm9tICcuL3NlcnZlci1jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGlvbkFzc2V0KFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbiAgYXNzZXRVcmw6IHN0cmluZyxcbiAgYmxvY2tJZDogc3RyaW5nXG4pOiBQcm9taXNlPHtcbiAgc2lnbmVkVXJsczogc3RyaW5nW11cbn0+IHtcbiAgY29uc3QgcmVxdWVzdFVSTCA9IGAke0FQSV9FTkRQT0lOVH0vZ2V0U2lnbmVkRmlsZVVybHNgXG4gIGNvbnN0IGFzc2V0UmVzID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVSTCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIGNvb2tpZTogYHRva2VuX3YyPSR7Tk9USU9OX1RPS0VOfWAsXG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdXJsczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBhc3NldFVybCxcbiAgICAgICAgICBwZXJtaXNzaW9uUmVjb3JkOiB7XG4gICAgICAgICAgICB0YWJsZTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlkOiBibG9ja0lkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICB9KVxuXG4gIGlmIChhc3NldFJlcy5vaykge1xuICAgIHJldHVybiBhc3NldFJlcy5qc29uKClcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnYmFkIHJlcXVlc3QnLCBhc3NldFJlcy5zdGF0dXMpXG4gICAgcmVzLmpzb24oeyBzdGF0dXM6ICdlcnJvcicsIG1lc3NhZ2U6ICdmYWlsZWQgdG8gbG9hZCBOb3Rpb24gYXNzZXQnIH0pXG4gICAgdGhyb3cgbmV3IEVycm9yKGF3YWl0IGdldEVycm9yKGFzc2V0UmVzKSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZldGNoIiwiZ2V0RXJyb3IiLCJOT1RJT05fVE9LRU4iLCJBUElfRU5EUE9JTlQiLCJnZXROb3Rpb25Bc3NldCIsInJlcyIsImFzc2V0VXJsIiwiYmxvY2tJZCIsInJlcXVlc3RVUkwiLCJhc3NldFJlcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb29raWUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVybHMiLCJ1cmwiLCJwZXJtaXNzaW9uUmVjb3JkIiwidGFibGUiLCJpZCIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJtZXNzYWdlIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/notion/getNotionAssetUrls.ts\n");

/***/ }),

/***/ "./src/lib/notion/rpc.ts":
/*!*******************************!*\
  !*** ./src/lib/notion/rpc.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rpc),\n/* harmony export */   \"getError\": () => (/* binding */ getError),\n/* harmony export */   \"getJSONHeaders\": () => (/* binding */ getJSONHeaders),\n/* harmony export */   \"getBodyOrNull\": () => (/* binding */ getBodyOrNull),\n/* harmony export */   \"values\": () => (/* binding */ values)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-constants */ \"./src/lib/notion/server-constants.js\");\n/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_constants__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function rpc(fnName, body) {\n  if (!_server_constants__WEBPACK_IMPORTED_MODULE_1__.NOTION_TOKEN) {\n    throw new Error('NOTION_TOKEN is not set in env');\n  }\n\n  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_server_constants__WEBPACK_IMPORTED_MODULE_1__.API_ENDPOINT}/${fnName}`, {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json',\n      cookie: `token_v2=${_server_constants__WEBPACK_IMPORTED_MODULE_1__.NOTION_TOKEN}`\n    },\n    body: JSON.stringify(body)\n  });\n\n  if (res.ok) {\n    return res.json();\n  } else {\n    throw new Error(await getError(res));\n  }\n}\nasync function getError(res) {\n  return `Notion API error (${res.status}) \\n${getJSONHeaders(res)}\\n ${await getBodyOrNull(res)}`;\n}\nfunction getJSONHeaders(res) {\n  return JSON.stringify(res.headers.raw());\n}\nfunction getBodyOrNull(res) {\n  try {\n    return res.text();\n  } catch (err) {\n    return null;\n  }\n}\nfunction values(obj) {\n  const vals = [];\n  Object.keys(obj).forEach(key => {\n    vals.push(obj[key]);\n  });\n  return vals;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL25vdGlvbi9ycGMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLGVBQWVHLEdBQWYsQ0FBbUJDLE1BQW5CLEVBQW1DQyxJQUFuQyxFQUE4QztBQUMzRCxNQUFJLENBQUNILDJEQUFMLEVBQW1CO0FBQ2pCLFVBQU0sSUFBSUksS0FBSixDQUFVLGdDQUFWLENBQU47QUFDRDs7QUFDRCxRQUFNQyxHQUFHLEdBQUcsTUFBTVAsaURBQUssQ0FBRSxHQUFFQywyREFBYSxJQUFHRyxNQUFPLEVBQTNCLEVBQThCO0FBQ25ESSxJQUFBQSxNQUFNLEVBQUUsTUFEMkM7QUFFbkRDLElBQUFBLE9BQU8sRUFBRTtBQUNQLHNCQUFnQixrQkFEVDtBQUVQQyxNQUFBQSxNQUFNLEVBQUcsWUFBV1IsMkRBQWE7QUFGMUIsS0FGMEM7QUFNbkRHLElBQUFBLElBQUksRUFBRU0sSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFONkMsR0FBOUIsQ0FBdkI7O0FBU0EsTUFBSUUsR0FBRyxDQUFDTSxFQUFSLEVBQVk7QUFDVixXQUFPTixHQUFHLENBQUNPLElBQUosRUFBUDtBQUNELEdBRkQsTUFFTztBQUNMLFVBQU0sSUFBSVIsS0FBSixDQUFVLE1BQU1TLFFBQVEsQ0FBQ1IsR0FBRCxDQUF4QixDQUFOO0FBQ0Q7QUFDRjtBQUVNLGVBQWVRLFFBQWYsQ0FBd0JSLEdBQXhCLEVBQXVDO0FBQzVDLFNBQVEscUJBQW9CQSxHQUFHLENBQUNTLE1BQU8sT0FBTUMsY0FBYyxDQUN6RFYsR0FEeUQsQ0FFekQsTUFBSyxNQUFNVyxhQUFhLENBQUNYLEdBQUQsQ0FBTSxFQUZoQztBQUdEO0FBRU0sU0FBU1UsY0FBVCxDQUF3QlYsR0FBeEIsRUFBdUM7QUFDNUMsU0FBT0ksSUFBSSxDQUFDQyxTQUFMLENBQWVMLEdBQUcsQ0FBQ0UsT0FBSixDQUFZVSxHQUFaLEVBQWYsQ0FBUDtBQUNEO0FBRU0sU0FBU0QsYUFBVCxDQUF1QlgsR0FBdkIsRUFBc0M7QUFDM0MsTUFBSTtBQUNGLFdBQU9BLEdBQUcsQ0FBQ2EsSUFBSixFQUFQO0FBQ0QsR0FGRCxDQUVFLE9BQU9DLEdBQVAsRUFBWTtBQUNaLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFFTSxTQUFTQyxNQUFULENBQWdCQyxHQUFoQixFQUEwQjtBQUMvQixRQUFNQyxJQUFTLEdBQUcsRUFBbEI7QUFFQUMsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCQyxHQUFHLElBQUk7QUFDOUJKLElBQUFBLElBQUksQ0FBQ0ssSUFBTCxDQUFVTixHQUFHLENBQUNLLEdBQUQsQ0FBYjtBQUNELEdBRkQ7QUFJQSxTQUFPSixJQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXR1bWVuZXplcy1zaXRlLy4vc3JjL2xpYi9ub3Rpb24vcnBjLnRzPzQ5OWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoLCB7IFJlc3BvbnNlIH0gZnJvbSAnbm9kZS1mZXRjaCdcbmltcG9ydCB7IEFQSV9FTkRQT0lOVCwgTk9USU9OX1RPS0VOIH0gZnJvbSAnLi9zZXJ2ZXItY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBycGMoZm5OYW1lOiBzdHJpbmcsIGJvZHk6IGFueSkge1xuICBpZiAoIU5PVElPTl9UT0tFTikge1xuICAgIHRocm93IG5ldyBFcnJvcignTk9USU9OX1RPS0VOIGlzIG5vdCBzZXQgaW4gZW52JylcbiAgfVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfRU5EUE9JTlR9LyR7Zm5OYW1lfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgY29va2llOiBgdG9rZW5fdjI9JHtOT1RJT05fVE9LRU59YCxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICB9KVxuXG4gIGlmIChyZXMub2spIHtcbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihhd2FpdCBnZXRFcnJvcihyZXMpKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFcnJvcihyZXM6IFJlc3BvbnNlKSB7XG4gIHJldHVybiBgTm90aW9uIEFQSSBlcnJvciAoJHtyZXMuc3RhdHVzfSkgXFxuJHtnZXRKU09OSGVhZGVycyhcbiAgICByZXNcbiAgKX1cXG4gJHthd2FpdCBnZXRCb2R5T3JOdWxsKHJlcyl9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTkhlYWRlcnMocmVzOiBSZXNwb25zZSkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzLmhlYWRlcnMucmF3KCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb2R5T3JOdWxsKHJlczogUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcmVzLnRleHQoKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXMob2JqOiBhbnkpIHtcbiAgY29uc3QgdmFsczogYW55ID0gW11cblxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICB2YWxzLnB1c2gob2JqW2tleV0pXG4gIH0pXG5cbiAgcmV0dXJuIHZhbHNcbn1cbiJdLCJuYW1lcyI6WyJmZXRjaCIsIkFQSV9FTkRQT0lOVCIsIk5PVElPTl9UT0tFTiIsInJwYyIsImZuTmFtZSIsImJvZHkiLCJFcnJvciIsInJlcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb29raWUiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJqc29uIiwiZ2V0RXJyb3IiLCJzdGF0dXMiLCJnZXRKU09OSGVhZGVycyIsImdldEJvZHlPck51bGwiLCJyYXciLCJ0ZXh0IiwiZXJyIiwidmFsdWVzIiwib2JqIiwidmFscyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/notion/rpc.ts\n");

/***/ }),

/***/ "./src/lib/notion/server-constants.js":
/*!********************************************!*\
  !*** ./src/lib/notion/server-constants.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// use commonjs so it can be required without transpiling\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst normalizeId = id => {\n  if (!id) return id;\n  if (id.length === 36) return id;\n\n  if (id.length !== 32) {\n    throw new Error(`Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`);\n  }\n\n  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(16, 4)}-${id.substr(20)}`;\n};\n\nconst NOTION_TOKEN = process.env.NOTION_TOKEN;\nconst BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID);\nconst API_ENDPOINT = 'https://www.notion.so/api/v3';\nconst BLOG_INDEX_CACHE = path.resolve('.blog_index_data');\nmodule.exports = {\n  NOTION_TOKEN,\n  BLOG_INDEX_ID,\n  API_ENDPOINT,\n  BLOG_INDEX_CACHE,\n  normalizeId\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL25vdGlvbi9zZXJ2ZXItY29uc3RhbnRzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUVBLE1BQU1DLFdBQVcsR0FBSUMsRUFBRCxJQUFRO0FBQzFCLE1BQUksQ0FBQ0EsRUFBTCxFQUFTLE9BQU9BLEVBQVA7QUFDVCxNQUFJQSxFQUFFLENBQUNDLE1BQUgsS0FBYyxFQUFsQixFQUFzQixPQUFPRCxFQUFQOztBQUN0QixNQUFJQSxFQUFFLENBQUNDLE1BQUgsS0FBYyxFQUFsQixFQUFzQjtBQUNwQixVQUFNLElBQUlDLEtBQUosQ0FDSCwwQkFBeUJGLEVBQUcsMkdBRHpCLENBQU47QUFHRDs7QUFDRCxTQUFRLEdBQUVBLEVBQUUsQ0FBQ0csTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFiLENBQWdCLElBQUdILEVBQUUsQ0FBQ0csTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFiLENBQWdCLElBQUdILEVBQUUsQ0FBQ0csTUFBSCxDQUFVLEVBQVYsRUFBYyxDQUFkLENBQWlCLElBQUdILEVBQUUsQ0FBQ0csTUFBSCxDQUNsRSxFQURrRSxFQUVsRSxDQUZrRSxDQUdsRSxJQUFHSCxFQUFFLENBQUNHLE1BQUgsQ0FBVSxFQUFWLENBQWMsRUFIbkI7QUFJRCxDQVpEOztBQWNBLE1BQU1DLFlBQVksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFlBQWpDO0FBQ0EsTUFBTUcsYUFBYSxHQUFHUixXQUFXLENBQUNNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFiLENBQWpDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLDhCQUFyQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHWixJQUFJLENBQUNhLE9BQUwsQ0FBYSxrQkFBYixDQUF6QjtBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZlIsRUFBQUEsWUFEZTtBQUVmRyxFQUFBQSxhQUZlO0FBR2ZDLEVBQUFBLFlBSGU7QUFJZkMsRUFBQUEsZ0JBSmU7QUFLZlYsRUFBQUE7QUFMZSxDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R1dHVtZW5lemVzLXNpdGUvLi9zcmMvbGliL25vdGlvbi9zZXJ2ZXItY29uc3RhbnRzLmpzP2QwMmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlIGNvbW1vbmpzIHNvIGl0IGNhbiBiZSByZXF1aXJlZCB3aXRob3V0IHRyYW5zcGlsaW5nXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbmNvbnN0IG5vcm1hbGl6ZUlkID0gKGlkKSA9PiB7XG4gIGlmICghaWQpIHJldHVybiBpZFxuICBpZiAoaWQubGVuZ3RoID09PSAzNikgcmV0dXJuIGlkXG4gIGlmIChpZC5sZW5ndGggIT09IDMyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgYmxvZy1pbmRleC1pZDogJHtpZH0gc2hvdWxkIGJlIDMyIGNoYXJhY3RlcnMgbG9uZy4gSW5mbyBoZXJlIGh0dHBzOi8vZ2l0aHViLmNvbS9pamprL25vdGlvbi1ibG9nI2dldHRpbmctYmxvZy1pbmRleC1hbmQtdG9rZW5gXG4gICAgKVxuICB9XG4gIHJldHVybiBgJHtpZC5zdWJzdHIoMCwgOCl9LSR7aWQuc3Vic3RyKDgsIDQpfS0ke2lkLnN1YnN0cigxMiwgNCl9LSR7aWQuc3Vic3RyKFxuICAgIDE2LFxuICAgIDRcbiAgKX0tJHtpZC5zdWJzdHIoMjApfWBcbn1cblxuY29uc3QgTk9USU9OX1RPS0VOID0gcHJvY2Vzcy5lbnYuTk9USU9OX1RPS0VOXG5jb25zdCBCTE9HX0lOREVYX0lEID0gbm9ybWFsaXplSWQocHJvY2Vzcy5lbnYuQkxPR19JTkRFWF9JRClcbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdodHRwczovL3d3dy5ub3Rpb24uc28vYXBpL3YzJ1xuY29uc3QgQkxPR19JTkRFWF9DQUNIRSA9IHBhdGgucmVzb2x2ZSgnLmJsb2dfaW5kZXhfZGF0YScpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBOT1RJT05fVE9LRU4sXG4gIEJMT0dfSU5ERVhfSUQsXG4gIEFQSV9FTkRQT0lOVCxcbiAgQkxPR19JTkRFWF9DQUNIRSxcbiAgbm9ybWFsaXplSWQsXG59XG4iXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJub3JtYWxpemVJZCIsImlkIiwibGVuZ3RoIiwiRXJyb3IiLCJzdWJzdHIiLCJOT1RJT05fVE9LRU4iLCJwcm9jZXNzIiwiZW52IiwiQkxPR19JTkRFWF9JRCIsIkFQSV9FTkRQT0lOVCIsIkJMT0dfSU5ERVhfQ0FDSEUiLCJyZXNvbHZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/notion/server-constants.js\n");

/***/ }),

/***/ "./src/lib/notion/utils.ts":
/*!*********************************!*\
  !*** ./src/lib/notion/utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setHeaders\": () => (/* binding */ setHeaders),\n/* harmony export */   \"handleData\": () => (/* binding */ handleData),\n/* harmony export */   \"handleError\": () => (/* binding */ handleError)\n/* harmony export */ });\nfunction setHeaders(req, res) {\n  // set SPR/CORS headers\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');\n  res.setHeader('Access-Control-Allow-Methods', 'GET');\n  res.setHeader('Access-Control-Allow-Headers', 'pragma');\n\n  if (req.method === 'OPTIONS') {\n    res.status(200);\n    res.end();\n    return true;\n  }\n\n  return false;\n}\nasync function handleData(res, data) {\n  data = data || {\n    status: 'error',\n    message: 'unhandled request'\n  };\n  res.status(data.status !== 'error' ? 200 : 500);\n  res.json(data);\n}\nfunction handleError(res, error) {\n  console.error(error);\n  res.status(500).json({\n    status: 'error',\n    message: 'an error occurred processing request'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL25vdGlvbi91dGlscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxTQUFTQSxVQUFULENBQW9CQyxHQUFwQixFQUF5Q0MsR0FBekMsRUFBd0U7QUFDN0U7QUFDQUEsRUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsNkJBQWQsRUFBNkMsR0FBN0M7QUFDQUQsRUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsZUFBZCxFQUErQixvQ0FBL0I7QUFDQUQsRUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsOEJBQWQsRUFBOEMsS0FBOUM7QUFDQUQsRUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsOEJBQWQsRUFBOEMsUUFBOUM7O0FBRUEsTUFBSUYsR0FBRyxDQUFDRyxNQUFKLEtBQWUsU0FBbkIsRUFBOEI7QUFDNUJGLElBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVg7QUFDQUgsSUFBQUEsR0FBRyxDQUFDSSxHQUFKO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0Q7QUFFTSxlQUFlQyxVQUFmLENBQTBCTCxHQUExQixFQUFnRE0sSUFBaEQsRUFBMkQ7QUFDaEVBLEVBQUFBLElBQUksR0FBR0EsSUFBSSxJQUFJO0FBQUVILElBQUFBLE1BQU0sRUFBRSxPQUFWO0FBQW1CSSxJQUFBQSxPQUFPLEVBQUU7QUFBNUIsR0FBZjtBQUNBUCxFQUFBQSxHQUFHLENBQUNHLE1BQUosQ0FBV0csSUFBSSxDQUFDSCxNQUFMLEtBQWdCLE9BQWhCLEdBQTBCLEdBQTFCLEdBQWdDLEdBQTNDO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTRixJQUFUO0FBQ0Q7QUFFTSxTQUFTRyxXQUFULENBQXFCVCxHQUFyQixFQUEyQ1UsS0FBM0MsRUFBa0U7QUFDdkVDLEVBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0FWLEVBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JLLElBQWhCLENBQXFCO0FBQ25CTCxJQUFBQSxNQUFNLEVBQUUsT0FEVztBQUVuQkksSUFBQUEsT0FBTyxFQUFFO0FBRlUsR0FBckI7QUFJRCIsInNvdXJjZXMiOlsid2VicGFjazovL3R1dHVtZW5lemVzLXNpdGUvLi9zcmMvbGliL25vdGlvbi91dGlscy50cz8wNTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0SGVhZGVycyhyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSk6IGJvb2xlYW4ge1xuICAvLyBzZXQgU1BSL0NPUlMgaGVhZGVyc1xuICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAncy1tYXhhZ2U9MSwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZScpXG4gIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VUJylcbiAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdwcmFnbWEnKVxuXG4gIGlmIChyZXEubWV0aG9kID09PSAnT1BUSU9OUycpIHtcbiAgICByZXMuc3RhdHVzKDIwMClcbiAgICByZXMuZW5kKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0YShyZXM6IE5leHRBcGlSZXNwb25zZSwgZGF0YTogYW55KSB7XG4gIGRhdGEgPSBkYXRhIHx8IHsgc3RhdHVzOiAnZXJyb3InLCBtZXNzYWdlOiAndW5oYW5kbGVkIHJlcXVlc3QnIH1cbiAgcmVzLnN0YXR1cyhkYXRhLnN0YXR1cyAhPT0gJ2Vycm9yJyA/IDIwMCA6IDUwMClcbiAgcmVzLmpzb24oZGF0YSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVycm9yKHJlczogTmV4dEFwaVJlc3BvbnNlLCBlcnJvcjogc3RyaW5nIHwgRXJyb3IpIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICBtZXNzYWdlOiAnYW4gZXJyb3Igb2NjdXJyZWQgcHJvY2Vzc2luZyByZXF1ZXN0JyxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJzZXRIZWFkZXJzIiwicmVxIiwicmVzIiwic2V0SGVhZGVyIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwiaGFuZGxlRGF0YSIsImRhdGEiLCJtZXNzYWdlIiwianNvbiIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/notion/utils.ts\n");

/***/ }),

/***/ "./src/pages/api/asset.ts":
/*!********************************!*\
  !*** ./src/pages/api/asset.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ notionApi)\n/* harmony export */ });\n/* harmony import */ var _lib_notion_getNotionAssetUrls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/notion/getNotionAssetUrls */ \"./src/lib/notion/getNotionAssetUrls.ts\");\n/* harmony import */ var _lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/notion/utils */ \"./src/lib/notion/utils.ts\");\nconst _excluded = [\"signedUrls\"];\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nasync function notionApi(req, res) {\n  if ((0,_lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__.setHeaders)(req, res)) return;\n\n  try {\n    const {\n      assetUrl,\n      blockId\n    } = req.query;\n\n    if (!assetUrl || !blockId) {\n      (0,_lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__.handleData)(res, {\n        status: 'error',\n        message: 'asset url or blockId missing'\n      });\n    } else {\n      // we need to re-encode it since it's decoded when added to req.query\n      const _await$getNotionAsset = await (0,_lib_notion_getNotionAssetUrls__WEBPACK_IMPORTED_MODULE_0__.default)(res, assetUrl, blockId),\n            {\n        signedUrls = []\n      } = _await$getNotionAsset,\n            urlsResponse = _objectWithoutProperties(_await$getNotionAsset, _excluded);\n\n      if (signedUrls.length === 0) {\n        console.error('Failed to get signedUrls', urlsResponse);\n        return (0,_lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__.handleData)(res, {\n          status: 'error',\n          message: 'Failed to get asset URL'\n        });\n      }\n\n      res.status(307);\n      res.setHeader('Location', signedUrls.pop());\n      res.end();\n    }\n  } catch (error) {\n    (0,_lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__.handleError)(res, error);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2Fzc2V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFZSxlQUFlSSxTQUFmLENBQ2JDLEdBRGEsRUFFYkMsR0FGYSxFQUdiO0FBQ0EsTUFBSUwsNkRBQVUsQ0FBQ0ksR0FBRCxFQUFNQyxHQUFOLENBQWQsRUFBMEI7O0FBQzFCLE1BQUk7QUFDRixVQUFNO0FBQUVDLE1BQUFBLFFBQUY7QUFBWUMsTUFBQUE7QUFBWixRQUF3QkgsR0FBRyxDQUFDSSxLQUFsQzs7QUFFQSxRQUFJLENBQUNGLFFBQUQsSUFBYSxDQUFDQyxPQUFsQixFQUEyQjtBQUN6Qk4sTUFBQUEsNkRBQVUsQ0FBQ0ksR0FBRCxFQUFNO0FBQ2RJLFFBQUFBLE1BQU0sRUFBRSxPQURNO0FBRWRDLFFBQUFBLE9BQU8sRUFBRTtBQUZLLE9BQU4sQ0FBVjtBQUlELEtBTEQsTUFLTztBQUNMO0FBQ0Esb0NBQTZDLE1BQU1YLHVFQUFrQixDQUNuRU0sR0FEbUUsRUFFbkVDLFFBRm1FLEVBR25FQyxPQUhtRSxDQUFyRTtBQUFBLFlBQU07QUFBRUksUUFBQUEsVUFBVSxHQUFHO0FBQWYsT0FBTjtBQUFBLFlBQTRCQyxZQUE1Qjs7QUFNQSxVQUFJRCxVQUFVLENBQUNFLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0JDLFFBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLDBCQUFkLEVBQTBDSCxZQUExQztBQUNBLGVBQU9YLDZEQUFVLENBQUNJLEdBQUQsRUFBTTtBQUNyQkksVUFBQUEsTUFBTSxFQUFFLE9BRGE7QUFFckJDLFVBQUFBLE9BQU8sRUFBRTtBQUZZLFNBQU4sQ0FBakI7QUFJRDs7QUFFREwsTUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWDtBQUNBSixNQUFBQSxHQUFHLENBQUNXLFNBQUosQ0FBYyxVQUFkLEVBQTBCTCxVQUFVLENBQUNNLEdBQVgsRUFBMUI7QUFDQVosTUFBQUEsR0FBRyxDQUFDYSxHQUFKO0FBQ0Q7QUFDRixHQTVCRCxDQTRCRSxPQUFPSCxLQUFQLEVBQWM7QUFDZGIsSUFBQUEsOERBQVcsQ0FBQ0csR0FBRCxFQUFNVSxLQUFOLENBQVg7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHV0dW1lbmV6ZXMtc2l0ZS8uL3NyYy9wYWdlcy9hcGkvYXNzZXQudHM/Nzc5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBnZXROb3Rpb25Bc3NldFVybHMgZnJvbSAnLi4vLi4vbGliL25vdGlvbi9nZXROb3Rpb25Bc3NldFVybHMnXG5pbXBvcnQgeyBzZXRIZWFkZXJzLCBoYW5kbGVEYXRhLCBoYW5kbGVFcnJvciB9IGZyb20gJy4uLy4uL2xpYi9ub3Rpb24vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG5vdGlvbkFwaShcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBpZiAoc2V0SGVhZGVycyhyZXEsIHJlcykpIHJldHVyblxuICB0cnkge1xuICAgIGNvbnN0IHsgYXNzZXRVcmwsIGJsb2NrSWQgfSA9IHJlcS5xdWVyeSBhcyB7IFtrOiBzdHJpbmddOiBzdHJpbmcgfVxuXG4gICAgaWYgKCFhc3NldFVybCB8fCAhYmxvY2tJZCkge1xuICAgICAgaGFuZGxlRGF0YShyZXMsIHtcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBtZXNzYWdlOiAnYXNzZXQgdXJsIG9yIGJsb2NrSWQgbWlzc2luZycsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZSBuZWVkIHRvIHJlLWVuY29kZSBpdCBzaW5jZSBpdCdzIGRlY29kZWQgd2hlbiBhZGRlZCB0byByZXEucXVlcnlcbiAgICAgIGNvbnN0IHsgc2lnbmVkVXJscyA9IFtdLCAuLi51cmxzUmVzcG9uc2UgfSA9IGF3YWl0IGdldE5vdGlvbkFzc2V0VXJscyhcbiAgICAgICAgcmVzLFxuICAgICAgICBhc3NldFVybCxcbiAgICAgICAgYmxvY2tJZFxuICAgICAgKVxuXG4gICAgICBpZiAoc2lnbmVkVXJscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBzaWduZWRVcmxzJywgdXJsc1Jlc3BvbnNlKVxuICAgICAgICByZXR1cm4gaGFuZGxlRGF0YShyZXMsIHtcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBnZXQgYXNzZXQgVVJMJyxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmVzLnN0YXR1cygzMDcpXG4gICAgICByZXMuc2V0SGVhZGVyKCdMb2NhdGlvbicsIHNpZ25lZFVybHMucG9wKCkpXG4gICAgICByZXMuZW5kKClcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaGFuZGxlRXJyb3IocmVzLCBlcnJvcilcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldE5vdGlvbkFzc2V0VXJscyIsInNldEhlYWRlcnMiLCJoYW5kbGVEYXRhIiwiaGFuZGxlRXJyb3IiLCJub3Rpb25BcGkiLCJyZXEiLCJyZXMiLCJhc3NldFVybCIsImJsb2NrSWQiLCJxdWVyeSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJzaWduZWRVcmxzIiwidXJsc1Jlc3BvbnNlIiwibGVuZ3RoIiwiY29uc29sZSIsImVycm9yIiwic2V0SGVhZGVyIiwicG9wIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/asset.ts\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/asset.ts"));
module.exports = __webpack_exports__;

})();