"use strict";
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
exports.id = "pages/api/search-file-chunks";
exports.ids = ["pages/api/search-file-chunks"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./src/pages/api/search-file-chunks.ts":
/*!*********************************************!*\
  !*** ./src/pages/api/search-file-chunks.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_searchFileChunks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/searchFileChunks */ \"(api)/./src/services/searchFileChunks.ts\");\n\nconst config = {\n    api: {\n        bodyParser: {\n            sizeLimit: \"30mb\"\n        }\n    }\n};\nasync function handler(req, res) {\n    try {\n        const searchQuery = req.body.searchQuery;\n        const files = req.body.files;\n        const maxResults = req.body.maxResults;\n        if (!searchQuery) {\n            res.status(400).json({\n                error: \"searchQuery must be a string\"\n            });\n            return;\n        }\n        if (!Array.isArray(files) || files.length === 0) {\n            res.status(400).json({\n                error: \"files must be a non-empty array\"\n            });\n            return;\n        }\n        if (!maxResults || maxResults < 1) {\n            res.status(400).json({\n                error: \"maxResults must be a number greater than 0\"\n            });\n            return;\n        }\n        const searchResults = await (0,_services_searchFileChunks__WEBPACK_IMPORTED_MODULE_0__.searchFileChunks)({\n            searchQuery,\n            files,\n            maxResults\n        });\n        res.status(200).json({\n            searchResults\n        });\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            error: \"Something went wrong\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlYXJjaC1maWxlLWNodW5rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFbUU7QUFRNUQsTUFBTUMsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO1lBQ1ZDLFdBQVc7UUFDYjtJQUNGO0FBQ0YsRUFBRTtBQUVhLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxJQUFJO1FBQ0YsTUFBTUMsY0FBY0YsSUFBSUcsSUFBSSxDQUFDRCxXQUFXO1FBRXhDLE1BQU1FLFFBQVFKLElBQUlHLElBQUksQ0FBQ0MsS0FBSztRQUU1QixNQUFNQyxhQUFhTCxJQUFJRyxJQUFJLENBQUNFLFVBQVU7UUFFdEMsSUFBSSxDQUFDSCxhQUFhO1lBQ2hCRCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQStCO1lBQzdEO1FBQ0YsQ0FBQztRQUVELElBQUksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDTixVQUFVQSxNQUFNTyxNQUFNLEtBQUssR0FBRztZQUMvQ1YsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFrQztZQUNoRTtRQUNGLENBQUM7UUFFRCxJQUFJLENBQUNILGNBQWNBLGFBQWEsR0FBRztZQUNqQ0osSUFDR0ssTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUE2QztZQUM5RDtRQUNGLENBQUM7UUFFRCxNQUFNSSxnQkFBZ0IsTUFBTWxCLDRFQUFnQkEsQ0FBQztZQUMzQ1E7WUFDQUU7WUFDQUM7UUFDRjtRQUVBSixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVLO1FBQWM7SUFDdkMsRUFBRSxPQUFPSixPQUFPO1FBQ2RLLFFBQVFMLEtBQUssQ0FBQ0E7UUFFZFAsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXVCO0lBQ3ZEO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbGUtcS1hbmQtYS8uL3NyYy9wYWdlcy9hcGkvc2VhcmNoLWZpbGUtY2h1bmtzLnRzP2U0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IHsgc2VhcmNoRmlsZUNodW5rcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zZWFyY2hGaWxlQ2h1bmtzXCI7XG5pbXBvcnQgeyBGaWxlQ2h1bmssIEZpbGVMaXRlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2ZpbGVcIjtcblxudHlwZSBEYXRhID0ge1xuICBzZWFyY2hSZXN1bHRzPzogRmlsZUNodW5rW107XG4gIGVycm9yPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjoge1xuICAgICAgc2l6ZUxpbWl0OiBcIjMwbWJcIixcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICB0cnkge1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gcmVxLmJvZHkuc2VhcmNoUXVlcnkgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgZmlsZXMgPSByZXEuYm9keS5maWxlcyBhcyBGaWxlTGl0ZVtdO1xuXG4gICAgY29uc3QgbWF4UmVzdWx0cyA9IHJlcS5ib2R5Lm1heFJlc3VsdHMgYXMgbnVtYmVyO1xuXG4gICAgaWYgKCFzZWFyY2hRdWVyeSkge1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJzZWFyY2hRdWVyeSBtdXN0IGJlIGEgc3RyaW5nXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbGVzKSB8fCBmaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiZmlsZXMgbXVzdCBiZSBhIG5vbi1lbXB0eSBhcnJheVwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghbWF4UmVzdWx0cyB8fCBtYXhSZXN1bHRzIDwgMSkge1xuICAgICAgcmVzXG4gICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAuanNvbih7IGVycm9yOiBcIm1heFJlc3VsdHMgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMFwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBzZWFyY2hGaWxlQ2h1bmtzKHtcbiAgICAgIHNlYXJjaFF1ZXJ5LFxuICAgICAgZmlsZXMsXG4gICAgICBtYXhSZXN1bHRzLFxuICAgIH0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzZWFyY2hSZXN1bHRzIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsic2VhcmNoRmlsZUNodW5rcyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJzaXplTGltaXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2VhcmNoUXVlcnkiLCJib2R5IiwiZmlsZXMiLCJtYXhSZXN1bHRzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic2VhcmNoUmVzdWx0cyIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/search-file-chunks.ts\n");

/***/ }),

/***/ "(api)/./src/services/openai.ts":
/*!********************************!*\
  !*** ./src/services/openai.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"completion\": () => (/* binding */ completion),\n/* harmony export */   \"completionStream\": () => (/* binding */ completionStream),\n/* harmony export */   \"embedding\": () => (/* binding */ embedding),\n/* harmony export */   \"openai\": () => (/* binding */ openai)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n// This file contains utility functions for interacting with the OpenAI API\nif (!process.env.OPENAI_API_KEY) {\n    throw new Error(\"Missing OPENAI_API_KEY environment variable\");\n}\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function completion({ prompt , fallback , max_tokens =800 , temperature =0 , model =\"text-davinci-003\" , ...otherOptions }) {\n    try {\n        const result = await openai.createCompletion({\n            prompt,\n            max_tokens,\n            temperature,\n            model,\n            ...otherOptions\n        });\n        if (!result.data.choices[0].text) {\n            throw new Error(\"No text returned from the completions endpoint.\");\n        }\n        return result.data.choices[0].text;\n    } catch (error) {\n        if (fallback) return fallback;\n        else throw error;\n    }\n}\nasync function* completionStream({ prompt , fallback , max_tokens =800 , temperature =0 , model =\"text-davinci-003\"  }) {\n    try {\n        const result = await openai.createCompletion({\n            prompt,\n            max_tokens,\n            temperature,\n            model,\n            stream: true\n        }, {\n            responseType: \"stream\"\n        });\n        const stream = result.data;\n        for await (const chunk of stream){\n            const line = chunk.toString().trim();\n            const message = line.split(\"data: \")[1];\n            if (message === \"[DONE]\") {\n                break;\n            }\n            const data = JSON.parse(message);\n            yield data.choices[0].text;\n        }\n    } catch (error) {\n        if (fallback) yield fallback;\n        else throw error;\n    }\n}\nasync function embedding({ input , model =\"text-embedding-ada-002\"  }) {\n    const result = await openai.createEmbedding({\n        model,\n        input\n    });\n    if (!result.data.data[0].embedding) {\n        throw new Error(\"No embedding returned from the completions endpoint\");\n    }\n    // Otherwise, return the embeddings\n    return result.data.data.map((d)=>d.embedding);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvb3BlbmFpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1nQjtBQUVoQiwyRUFBMkU7QUFFM0UsSUFBSSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtJQUMvQixNQUFNLElBQUlDLE1BQU0sK0NBQStDO0FBQ2pFLENBQUM7QUFFRCxNQUFNQyxnQkFBZ0IsSUFBSU4saURBQWFBLENBQUM7SUFDdENPLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUNPLE1BQU1JLFNBQVMsSUFBSVAsNkNBQVNBLENBQUNLLGVBQWU7QUFZNUMsZUFBZUcsV0FBVyxFQUMvQkMsT0FBTSxFQUNOQyxTQUFRLEVBQ1JDLFlBQWEsSUFBRyxFQUNoQkMsYUFBYyxFQUFDLEVBQ2ZDLE9BQVEsbUJBQWtCLEVBQzFCLEdBQUdDLGNBQ2UsRUFBRTtJQUNwQixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNUixPQUFPUyxnQkFBZ0IsQ0FBQztZQUMzQ1A7WUFDQUU7WUFDQUM7WUFDQUM7WUFDQSxHQUFHQyxZQUFZO1FBQ2pCO1FBRUEsSUFBSSxDQUFDQyxPQUFPRSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUksRUFBRTtZQUNoQyxNQUFNLElBQUlmLE1BQU0sbURBQW1EO1FBQ3JFLENBQUM7UUFDRCxPQUFPVyxPQUFPRSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7SUFDcEMsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsSUFBSVYsVUFBVSxPQUFPQTthQUNoQixNQUFNVSxNQUFNO0lBQ25CO0FBQ0YsQ0FBQztBQUVNLGdCQUFnQkMsaUJBQWlCLEVBQ3RDWixPQUFNLEVBQ05DLFNBQVEsRUFDUkMsWUFBYSxJQUFHLEVBQ2hCQyxhQUFjLEVBQUMsRUFDZkMsT0FBUSxtQkFBa0IsRUFDUixFQUFFO0lBQ3BCLElBQUk7UUFDRixNQUFNRSxTQUFTLE1BQU1SLE9BQU9TLGdCQUFnQixDQUMxQztZQUNFUDtZQUNBRTtZQUNBQztZQUNBQztZQUNBUyxRQUFRLElBQUk7UUFDZCxHQUNBO1lBQUVDLGNBQWM7UUFBUztRQUczQixNQUFNRCxTQUFTUCxPQUFPRSxJQUFJO1FBRTFCLFdBQVcsTUFBTU8sU0FBU0YsT0FBUTtZQUNoQyxNQUFNRyxPQUFPRCxNQUFNRSxRQUFRLEdBQUdDLElBQUk7WUFDbEMsTUFBTUMsVUFBVUgsS0FBS0ksS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBRXZDLElBQUlELFlBQVksVUFBVTtnQkFDeEIsS0FBTTtZQUNSLENBQUM7WUFFRCxNQUFNWCxPQUFPYSxLQUFLQyxLQUFLLENBQUNIO1lBRXhCLE1BQU1YLEtBQUtDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7UUFDNUI7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxJQUFJVixVQUFVLE1BQU1BO2FBQ2YsTUFBTVUsTUFBTTtJQUNuQjtBQUNGLENBQUM7QUFFTSxlQUFlWSxVQUFVLEVBQzlCQyxNQUFLLEVBQ0xwQixPQUFRLHlCQUF3QixFQUNmLEVBQXVCO0lBQ3hDLE1BQU1FLFNBQVMsTUFBTVIsT0FBTzJCLGVBQWUsQ0FBQztRQUMxQ3JCO1FBQ0FvQjtJQUNGO0lBRUEsSUFBSSxDQUFDbEIsT0FBT0UsSUFBSSxDQUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDZSxTQUFTLEVBQUU7UUFDbEMsTUFBTSxJQUFJNUIsTUFBTSx1REFBdUQ7SUFDekUsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxPQUFPVyxPQUFPRSxJQUFJLENBQUNBLElBQUksQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxFQUFFSixTQUFTO0FBQ2hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxlLXEtYW5kLWEvLi9zcmMvc2VydmljZXMvb3BlbmFpLnRzPzNjNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlIH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7XG4gIENvbmZpZ3VyYXRpb24sXG4gIENyZWF0ZUNvbXBsZXRpb25SZXF1ZXN0LFxuICBDcmVhdGVDb21wbGV0aW9uUmVzcG9uc2UsXG4gIE9wZW5BSUFwaSxcbn0gZnJvbSBcIm9wZW5haVwiO1xuXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIE9wZW5BSSBBUElcblxuaWYgKCFwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIE9QRU5BSV9BUElfS0VZIGVudmlyb25tZW50IHZhcmlhYmxlXCIpO1xufVxuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5leHBvcnQgY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxudHlwZSBDb21wbGV0aW9uT3B0aW9ucyA9IFBhcnRpYWw8Q3JlYXRlQ29tcGxldGlvblJlcXVlc3Q+ICYge1xuICBwcm9tcHQ6IHN0cmluZztcbiAgZmFsbGJhY2s/OiBzdHJpbmc7XG59O1xuXG50eXBlIEVtYmVkZGluZ09wdGlvbnMgPSB7XG4gIGlucHV0OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgbW9kZWw/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tcGxldGlvbih7XG4gIHByb21wdCxcbiAgZmFsbGJhY2ssXG4gIG1heF90b2tlbnMgPSA4MDAsXG4gIHRlbXBlcmF0dXJlID0gMCxcbiAgbW9kZWwgPSBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgLi4ub3RoZXJPcHRpb25zXG59OiBDb21wbGV0aW9uT3B0aW9ucykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICAgIHByb21wdCxcbiAgICAgIG1heF90b2tlbnMsXG4gICAgICB0ZW1wZXJhdHVyZSxcbiAgICAgIG1vZGVsLFxuICAgICAgLi4ub3RoZXJPcHRpb25zLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXN1bHQuZGF0YS5jaG9pY2VzWzBdLnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRleHQgcmV0dXJuZWQgZnJvbSB0aGUgY29tcGxldGlvbnMgZW5kcG9pbnQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmRhdGEuY2hvaWNlc1swXS50ZXh0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChmYWxsYmFjaykgcmV0dXJuIGZhbGxiYWNrO1xuICAgIGVsc2UgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiBjb21wbGV0aW9uU3RyZWFtKHtcbiAgcHJvbXB0LFxuICBmYWxsYmFjayxcbiAgbWF4X3Rva2VucyA9IDgwMCxcbiAgdGVtcGVyYXR1cmUgPSAwLFxuICBtb2RlbCA9IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxufTogQ29tcGxldGlvbk9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbihcbiAgICAgIHtcbiAgICAgICAgcHJvbXB0LFxuICAgICAgICBtYXhfdG9rZW5zLFxuICAgICAgICB0ZW1wZXJhdHVyZSxcbiAgICAgICAgbW9kZWwsXG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7IHJlc3BvbnNlVHlwZTogXCJzdHJlYW1cIiB9XG4gICAgKTtcblxuICAgIGNvbnN0IHN0cmVhbSA9IHJlc3VsdC5kYXRhIGFzIGFueSBhcyBJbmNvbWluZ01lc3NhZ2U7XG5cbiAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHN0cmVhbSkge1xuICAgICAgY29uc3QgbGluZSA9IGNodW5rLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGxpbmUuc3BsaXQoXCJkYXRhOiBcIilbMV07XG5cbiAgICAgIGlmIChtZXNzYWdlID09PSBcIltET05FXVwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKSBhcyBDcmVhdGVDb21wbGV0aW9uUmVzcG9uc2U7XG5cbiAgICAgIHlpZWxkIGRhdGEuY2hvaWNlc1swXS50ZXh0O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZmFsbGJhY2spIHlpZWxkIGZhbGxiYWNrO1xuICAgIGVsc2UgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYmVkZGluZyh7XG4gIGlucHV0LFxuICBtb2RlbCA9IFwidGV4dC1lbWJlZGRpbmctYWRhLTAwMlwiLFxufTogRW1iZWRkaW5nT3B0aW9ucyk6IFByb21pc2U8bnVtYmVyW11bXT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcGVuYWkuY3JlYXRlRW1iZWRkaW5nKHtcbiAgICBtb2RlbCxcbiAgICBpbnB1dCxcbiAgfSk7XG5cbiAgaWYgKCFyZXN1bHQuZGF0YS5kYXRhWzBdLmVtYmVkZGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGVtYmVkZGluZyByZXR1cm5lZCBmcm9tIHRoZSBjb21wbGV0aW9ucyBlbmRwb2ludFwiKTtcbiAgfVxuXG4gIC8vIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBlbWJlZGRpbmdzXG4gIHJldHVybiByZXN1bHQuZGF0YS5kYXRhLm1hcCgoZCkgPT4gZC5lbWJlZGRpbmcpO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJFcnJvciIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJvcGVuYWkiLCJjb21wbGV0aW9uIiwicHJvbXB0IiwiZmFsbGJhY2siLCJtYXhfdG9rZW5zIiwidGVtcGVyYXR1cmUiLCJtb2RlbCIsIm90aGVyT3B0aW9ucyIsInJlc3VsdCIsImNyZWF0ZUNvbXBsZXRpb24iLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJlcnJvciIsImNvbXBsZXRpb25TdHJlYW0iLCJzdHJlYW0iLCJyZXNwb25zZVR5cGUiLCJjaHVuayIsImxpbmUiLCJ0b1N0cmluZyIsInRyaW0iLCJtZXNzYWdlIiwic3BsaXQiLCJKU09OIiwicGFyc2UiLCJlbWJlZGRpbmciLCJpbnB1dCIsImNyZWF0ZUVtYmVkZGluZyIsIm1hcCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/services/openai.ts\n");

/***/ }),

/***/ "(api)/./src/services/searchFileChunks.ts":
/*!******************************************!*\
  !*** ./src/services/searchFileChunks.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFileChunks\": () => (/* binding */ searchFileChunks)\n/* harmony export */ });\n/* harmony import */ var _openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openai */ \"(api)/./src/services/openai.ts\");\n\n// This is the minimum cosine similarity score that a file must have with the search query to be considered relevant\n// This is an arbitrary value, and you should vary/ remove this depending on the diversity of your dataset\nconst COSINE_SIM_THRESHOLD = 0.72;\n// This function takes a search query and a list of files, and returns the chunks of text that are most semantically similar to the query\nasync function searchFileChunks({ searchQuery , files , maxResults  }) {\n    // Get the search query embedding\n    const searchQueryEmbeddingResponse = await (0,_openai__WEBPACK_IMPORTED_MODULE_0__.embedding)({\n        input: searchQuery\n    });\n    // Get the first element in the embedding array\n    const searchQueryEmbedding = searchQueryEmbeddingResponse.length > 0 ? searchQueryEmbeddingResponse[0] : [];\n    // Rank the chunks by their cosine similarity to the search query (using dot product since the embeddings are normalized) and return this\n    const rankedChunks = files// Map each file to an array of chunks with the file name and score\n    .flatMap((file)=>file.chunks ? file.chunks.map((chunk)=>{\n            // Calculate the dot product between the chunk embedding and the search query embedding\n            const dotProduct = chunk.embedding.reduce((sum, val, i)=>sum + val * searchQueryEmbedding[i], 0);\n            // Assign the dot product as the score for the chunk\n            return {\n                ...chunk,\n                filename: file.name,\n                score: dotProduct\n            };\n        }) : [])// Sort the chunks by their scores in descending order\n    .sort((a, b)=>b.score - a.score)// Filter the chunks by their score above the threshold\n    .filter((chunk)=>chunk.score > COSINE_SIM_THRESHOLD)// Take the first maxResults chunks\n    .slice(0, maxResults);\n    return rankedChunks;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvc2VhcmNoRmlsZUNodW5rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNxQztBQUVyQyxvSEFBb0g7QUFDcEgsMEdBQTBHO0FBQzFHLE1BQU1DLHVCQUF1QjtBQUU3Qix5SUFBeUk7QUFDbEksZUFBZUMsaUJBQWlCLEVBQ3JDQyxZQUFXLEVBQ1hDLE1BQUssRUFDTEMsV0FBVSxFQUtYLEVBQXdCO0lBQ3ZCLGlDQUFpQztJQUNqQyxNQUFNQywrQkFBK0IsTUFBTU4sa0RBQVNBLENBQUM7UUFDbkRPLE9BQU9KO0lBQ1Q7SUFFQSwrQ0FBK0M7SUFDL0MsTUFBTUssdUJBQ0pGLDZCQUE2QkcsTUFBTSxHQUFHLElBQ2xDSCw0QkFBNEIsQ0FBQyxFQUFFLEdBQy9CLEVBQUU7SUFFUix5SUFBeUk7SUFDekksTUFBTUksZUFBZU4sS0FDbkIsbUVBQW1FO0tBQ2xFTyxPQUFPLENBQUMsQ0FBQ0MsT0FDUkEsS0FBS0MsTUFBTSxHQUNQRCxLQUFLQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxRQUFVO1lBQ3pCLHVGQUF1RjtZQUN2RixNQUFNQyxhQUFhRCxNQUFNZixTQUFTLENBQUNpQixNQUFNLENBQ3ZDLENBQUNDLEtBQUtDLEtBQUtDLElBQU1GLE1BQU1DLE1BQU1YLG9CQUFvQixDQUFDWSxFQUFFLEVBQ3BEO1lBRUYsb0RBQW9EO1lBQ3BELE9BQU87Z0JBQUUsR0FBR0wsS0FBSztnQkFBRU0sVUFBVVQsS0FBS1UsSUFBSTtnQkFBRUMsT0FBT1A7WUFBVztRQUM1RCxLQUNBLEVBQUUsQ0FFUixzREFBc0Q7S0FDckRRLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFSCxLQUFLLEdBQUdFLEVBQUVGLEtBQUssQ0FDakMsdURBQXVEO0tBQ3RESSxNQUFNLENBQUMsQ0FBQ1osUUFBVUEsTUFBTVEsS0FBSyxHQUFHdEIscUJBQ2pDLG1DQUFtQztLQUNsQzJCLEtBQUssQ0FBQyxHQUFHdkI7SUFFWixPQUFPSztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxlLXEtYW5kLWEvLi9zcmMvc2VydmljZXMvc2VhcmNoRmlsZUNodW5rcy50cz8wNDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbGVMaXRlLCBGaWxlQ2h1bmsgfSBmcm9tIFwiLi4vdHlwZXMvZmlsZVwiO1xuaW1wb3J0IHsgZW1iZWRkaW5nIH0gZnJvbSBcIi4vb3BlbmFpXCI7XG5cbi8vIFRoaXMgaXMgdGhlIG1pbmltdW0gY29zaW5lIHNpbWlsYXJpdHkgc2NvcmUgdGhhdCBhIGZpbGUgbXVzdCBoYXZlIHdpdGggdGhlIHNlYXJjaCBxdWVyeSB0byBiZSBjb25zaWRlcmVkIHJlbGV2YW50XG4vLyBUaGlzIGlzIGFuIGFyYml0cmFyeSB2YWx1ZSwgYW5kIHlvdSBzaG91bGQgdmFyeS8gcmVtb3ZlIHRoaXMgZGVwZW5kaW5nIG9uIHRoZSBkaXZlcnNpdHkgb2YgeW91ciBkYXRhc2V0XG5jb25zdCBDT1NJTkVfU0lNX1RIUkVTSE9MRCA9IDAuNzI7XG5cbi8vIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBzZWFyY2ggcXVlcnkgYW5kIGEgbGlzdCBvZiBmaWxlcywgYW5kIHJldHVybnMgdGhlIGNodW5rcyBvZiB0ZXh0IHRoYXQgYXJlIG1vc3Qgc2VtYW50aWNhbGx5IHNpbWlsYXIgdG8gdGhlIHF1ZXJ5XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoRmlsZUNodW5rcyh7XG4gIHNlYXJjaFF1ZXJ5LFxuICBmaWxlcyxcbiAgbWF4UmVzdWx0cyxcbn06IHtcbiAgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgZmlsZXM6IEZpbGVMaXRlW107XG4gIG1heFJlc3VsdHM6IG51bWJlcjtcbn0pOiBQcm9taXNlPEZpbGVDaHVua1tdPiB7XG4gIC8vIEdldCB0aGUgc2VhcmNoIHF1ZXJ5IGVtYmVkZGluZ1xuICBjb25zdCBzZWFyY2hRdWVyeUVtYmVkZGluZ1Jlc3BvbnNlID0gYXdhaXQgZW1iZWRkaW5nKHtcbiAgICBpbnB1dDogc2VhcmNoUXVlcnksXG4gIH0pO1xuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgZW1iZWRkaW5nIGFycmF5XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5RW1iZWRkaW5nID1cbiAgICBzZWFyY2hRdWVyeUVtYmVkZGluZ1Jlc3BvbnNlLmxlbmd0aCA+IDBcbiAgICAgID8gc2VhcmNoUXVlcnlFbWJlZGRpbmdSZXNwb25zZVswXVxuICAgICAgOiBbXTtcblxuICAvLyBSYW5rIHRoZSBjaHVua3MgYnkgdGhlaXIgY29zaW5lIHNpbWlsYXJpdHkgdG8gdGhlIHNlYXJjaCBxdWVyeSAodXNpbmcgZG90IHByb2R1Y3Qgc2luY2UgdGhlIGVtYmVkZGluZ3MgYXJlIG5vcm1hbGl6ZWQpIGFuZCByZXR1cm4gdGhpc1xuICBjb25zdCByYW5rZWRDaHVua3MgPSBmaWxlc1xuICAgIC8vIE1hcCBlYWNoIGZpbGUgdG8gYW4gYXJyYXkgb2YgY2h1bmtzIHdpdGggdGhlIGZpbGUgbmFtZSBhbmQgc2NvcmVcbiAgICAuZmxhdE1hcCgoZmlsZSkgPT5cbiAgICAgIGZpbGUuY2h1bmtzXG4gICAgICAgID8gZmlsZS5jaHVua3MubWFwKChjaHVuaykgPT4ge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIHRoZSBjaHVuayBlbWJlZGRpbmcgYW5kIHRoZSBzZWFyY2ggcXVlcnkgZW1iZWRkaW5nXG4gICAgICAgICAgICBjb25zdCBkb3RQcm9kdWN0ID0gY2h1bmsuZW1iZWRkaW5nLnJlZHVjZShcbiAgICAgICAgICAgICAgKHN1bSwgdmFsLCBpKSA9PiBzdW0gKyB2YWwgKiBzZWFyY2hRdWVyeUVtYmVkZGluZ1tpXSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIEFzc2lnbiB0aGUgZG90IHByb2R1Y3QgYXMgdGhlIHNjb3JlIGZvciB0aGUgY2h1bmtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmNodW5rLCBmaWxlbmFtZTogZmlsZS5uYW1lLCBzY29yZTogZG90UHJvZHVjdCB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIDogW11cbiAgICApXG4gICAgLy8gU29ydCB0aGUgY2h1bmtzIGJ5IHRoZWlyIHNjb3JlcyBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKVxuICAgIC8vIEZpbHRlciB0aGUgY2h1bmtzIGJ5IHRoZWlyIHNjb3JlIGFib3ZlIHRoZSB0aHJlc2hvbGRcbiAgICAuZmlsdGVyKChjaHVuaykgPT4gY2h1bmsuc2NvcmUgPiBDT1NJTkVfU0lNX1RIUkVTSE9MRClcbiAgICAvLyBUYWtlIHRoZSBmaXJzdCBtYXhSZXN1bHRzIGNodW5rc1xuICAgIC5zbGljZSgwLCBtYXhSZXN1bHRzKTtcblxuICByZXR1cm4gcmFua2VkQ2h1bmtzO1xufVxuIl0sIm5hbWVzIjpbImVtYmVkZGluZyIsIkNPU0lORV9TSU1fVEhSRVNIT0xEIiwic2VhcmNoRmlsZUNodW5rcyIsInNlYXJjaFF1ZXJ5IiwiZmlsZXMiLCJtYXhSZXN1bHRzIiwic2VhcmNoUXVlcnlFbWJlZGRpbmdSZXNwb25zZSIsImlucHV0Iiwic2VhcmNoUXVlcnlFbWJlZGRpbmciLCJsZW5ndGgiLCJyYW5rZWRDaHVua3MiLCJmbGF0TWFwIiwiZmlsZSIsImNodW5rcyIsIm1hcCIsImNodW5rIiwiZG90UHJvZHVjdCIsInJlZHVjZSIsInN1bSIsInZhbCIsImkiLCJmaWxlbmFtZSIsIm5hbWUiLCJzY29yZSIsInNvcnQiLCJhIiwiYiIsImZpbHRlciIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/searchFileChunks.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/search-file-chunks.ts"));
module.exports = __webpack_exports__;

})();