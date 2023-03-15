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
exports.id = "pages/api/get-answer-from-files";
exports.ids = ["pages/api/get-answer-from-files"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./src/pages/api/get-answer-from-files.ts":
/*!************************************************!*\
  !*** ./src/pages/api/get-answer-from-files.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/openai */ \"(api)/./src/services/openai.ts\");\n\nconst MAX_FILES_LENGTH = 2000 * 3;\nasync function handler(req, res) {\n    // Only accept POST requests\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n        return;\n    }\n    const fileChunks = req.body.fileChunks;\n    const question = req.body.question;\n    if (!Array.isArray(fileChunks)) {\n        res.status(400).json({\n            error: \"fileChunks must be an array\"\n        });\n        return;\n    }\n    if (!question) {\n        res.status(400).json({\n            error: \"question must be a string\"\n        });\n        return;\n    }\n    try {\n        const filesString = fileChunks.map((fileChunk)=>`###\\n\\\"${fileChunk.filename}\\\"\\n${fileChunk.text}`).join(\"\\n\").slice(0, MAX_FILES_LENGTH);\n        console.log(filesString);\n        const prompt = `Given a question, try to answer it using the content of the file extracts below, and if you cannot answer, or find a relevant file, just output \\\"I couldn't find the answer to that question in your files.\\\".\\n\\n` + `If the answer is not contained in the files or if there are no file extracts, respond with \\\"I couldn't find the answer to that question in your files.\\\" If the question is not actually a question, respond with \\\"That's not a valid question.\\\"\\n\\n` + `In the cases where you can find the answer, first give the answer. Then explain how you found the answer from the source or sources, and use the exact filenames of the source files you mention. Do not make up the names of any other files other than those mentioned in the files context. Give the answer in markdown format.` + `Use the following format:\\n\\nQuestion: <question>\\n\\nFiles:\\n<###\\n\\\"filename 1\\\"\\nfile text>\\n<###\\n\\\"filename 2\\\"\\nfile text>...\\n\\nAnswer: <answer or \"I couldn't find the answer to that question in your files\" or \"That's not a valid question.\">\\n\\n` + `Question: ${question}\\n\\n` + `Files:\\n${filesString}\\n\\n` + `Answer:`;\n        const stream = (0,_services_openai__WEBPACK_IMPORTED_MODULE_0__.completionStream)({\n            prompt,\n            model: \"text-davinci-003\"\n        });\n        // Set the response headers for streaming\n        res.writeHead(200, {\n            \"Content-Type\": \"text/event-stream\",\n            \"Cache-Control\": \"no-cache, no-transform\",\n            Connection: \"keep-alive\"\n        });\n        // Write the data from the stream to the response\n        for await (const data of stream){\n            res.write(data);\n        }\n        // End the response when the stream is done\n        res.end();\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            error: \"Something went wrong\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldC1hbnN3ZXItZnJvbS1maWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5RDtBQVF6RCxNQUFNQyxtQkFBbUIsT0FBTztBQUVqQixlQUFlQyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCO0lBQ0EsNEJBQTRCO0lBQzVCLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBcUI7UUFDbkQ7SUFDRixDQUFDO0lBRUQsTUFBTUMsYUFBYU4sSUFBSU8sSUFBSSxDQUFDRCxVQUFVO0lBRXRDLE1BQU1FLFdBQVdSLElBQUlPLElBQUksQ0FBQ0MsUUFBUTtJQUVsQyxJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0osYUFBYTtRQUM5QkwsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQThCO1FBQzVEO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQ0csVUFBVTtRQUNiUCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNEI7UUFDMUQ7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1NLGNBQWNMLFdBQ2pCTSxHQUFHLENBQUMsQ0FBQ0MsWUFBYyxDQUFDLE9BQU8sRUFBRUEsVUFBVUMsUUFBUSxDQUFDLElBQUksRUFBRUQsVUFBVUUsSUFBSSxDQUFDLENBQUMsRUFDdEVDLElBQUksQ0FBQyxNQUNMQyxLQUFLLENBQUMsR0FBR25CO1FBRVpvQixRQUFRQyxHQUFHLENBQUNSO1FBRVosTUFBTVMsU0FDSixDQUFDLG1OQUFtTixDQUFDLEdBQ3JOLENBQUMsdVBBQXVQLENBQUMsR0FDelAsQ0FBQyxrVUFBa1UsQ0FBQyxHQUNwVSxDQUFDLDJQQUEyUCxDQUFDLEdBQzdQLENBQUMsVUFBVSxFQUFFWixTQUFTLElBQUksQ0FBQyxHQUMzQixDQUFDLFFBQVEsRUFBRUcsWUFBWSxJQUFJLENBQUMsR0FDNUIsQ0FBQyxPQUFPLENBQUM7UUFFWCxNQUFNVSxTQUFTeEIsa0VBQWdCQSxDQUFDO1lBQzlCdUI7WUFDQUUsT0FBTztRQUNUO1FBRUEseUNBQXlDO1FBQ3pDckIsSUFBSXNCLFNBQVMsQ0FBQyxLQUFLO1lBQ2pCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakJDLFlBQVk7UUFDZDtRQUVBLGlEQUFpRDtRQUNqRCxXQUFXLE1BQU1DLFFBQVFKLE9BQVE7WUFDL0JwQixJQUFJeUIsS0FBSyxDQUFDRDtRQUNaO1FBRUEsMkNBQTJDO1FBQzNDeEIsSUFBSTBCLEdBQUc7SUFDVCxFQUFFLE9BQU90QixPQUFPO1FBQ2RhLFFBQVFiLEtBQUssQ0FBQ0E7UUFDZEosSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXVCO0lBQ3ZEO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbGUtcS1hbmQtYS8uL3NyYy9wYWdlcy9hcGkvZ2V0LWFuc3dlci1mcm9tLWZpbGVzLnRzPzU5NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IHsgY29tcGxldGlvblN0cmVhbSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9vcGVuYWlcIjtcbmltcG9ydCB7IEZpbGVDaHVuayB9IGZyb20gXCIuLi8uLi90eXBlcy9maWxlXCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgYW5zd2VyPzogc3RyaW5nO1xuICBlcnJvcj86IHN0cmluZztcbn07XG5cbmNvbnN0IE1BWF9GSUxFU19MRU5HVEggPSAyMDAwICogMztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICAvLyBPbmx5IGFjY2VwdCBQT1NUIHJlcXVlc3RzXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZmlsZUNodW5rcyA9IHJlcS5ib2R5LmZpbGVDaHVua3MgYXMgRmlsZUNodW5rW107XG5cbiAgY29uc3QgcXVlc3Rpb24gPSByZXEuYm9keS5xdWVzdGlvbiBhcyBzdHJpbmc7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGZpbGVDaHVua3MpKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJmaWxlQ2h1bmtzIG11c3QgYmUgYW4gYXJyYXlcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXF1ZXN0aW9uKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJxdWVzdGlvbiBtdXN0IGJlIGEgc3RyaW5nXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBmaWxlc1N0cmluZyA9IGZpbGVDaHVua3NcbiAgICAgIC5tYXAoKGZpbGVDaHVuaykgPT4gYCMjI1xcblxcXCIke2ZpbGVDaHVuay5maWxlbmFtZX1cXFwiXFxuJHtmaWxlQ2h1bmsudGV4dH1gKVxuICAgICAgLmpvaW4oXCJcXG5cIilcbiAgICAgIC5zbGljZSgwLCBNQVhfRklMRVNfTEVOR1RIKTtcblxuICAgIGNvbnNvbGUubG9nKGZpbGVzU3RyaW5nKTtcblxuICAgIGNvbnN0IHByb21wdCA9XG4gICAgICBgR2l2ZW4gYSBxdWVzdGlvbiwgdHJ5IHRvIGFuc3dlciBpdCB1c2luZyB0aGUgY29udGVudCBvZiB0aGUgZmlsZSBleHRyYWN0cyBiZWxvdywgYW5kIGlmIHlvdSBjYW5ub3QgYW5zd2VyLCBvciBmaW5kIGEgcmVsZXZhbnQgZmlsZSwganVzdCBvdXRwdXQgXFxcIkkgY291bGRuJ3QgZmluZCB0aGUgYW5zd2VyIHRvIHRoYXQgcXVlc3Rpb24gaW4geW91ciBmaWxlcy5cXFwiLlxcblxcbmAgK1xuICAgICAgYElmIHRoZSBhbnN3ZXIgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgZmlsZXMgb3IgaWYgdGhlcmUgYXJlIG5vIGZpbGUgZXh0cmFjdHMsIHJlc3BvbmQgd2l0aCBcXFwiSSBjb3VsZG4ndCBmaW5kIHRoZSBhbnN3ZXIgdG8gdGhhdCBxdWVzdGlvbiBpbiB5b3VyIGZpbGVzLlxcXCIgSWYgdGhlIHF1ZXN0aW9uIGlzIG5vdCBhY3R1YWxseSBhIHF1ZXN0aW9uLCByZXNwb25kIHdpdGggXFxcIlRoYXQncyBub3QgYSB2YWxpZCBxdWVzdGlvbi5cXFwiXFxuXFxuYCArXG4gICAgICBgSW4gdGhlIGNhc2VzIHdoZXJlIHlvdSBjYW4gZmluZCB0aGUgYW5zd2VyLCBmaXJzdCBnaXZlIHRoZSBhbnN3ZXIuIFRoZW4gZXhwbGFpbiBob3cgeW91IGZvdW5kIHRoZSBhbnN3ZXIgZnJvbSB0aGUgc291cmNlIG9yIHNvdXJjZXMsIGFuZCB1c2UgdGhlIGV4YWN0IGZpbGVuYW1lcyBvZiB0aGUgc291cmNlIGZpbGVzIHlvdSBtZW50aW9uLiBEbyBub3QgbWFrZSB1cCB0aGUgbmFtZXMgb2YgYW55IG90aGVyIGZpbGVzIG90aGVyIHRoYW4gdGhvc2UgbWVudGlvbmVkIGluIHRoZSBmaWxlcyBjb250ZXh0LiBHaXZlIHRoZSBhbnN3ZXIgaW4gbWFya2Rvd24gZm9ybWF0LmAgK1xuICAgICAgYFVzZSB0aGUgZm9sbG93aW5nIGZvcm1hdDpcXG5cXG5RdWVzdGlvbjogPHF1ZXN0aW9uPlxcblxcbkZpbGVzOlxcbjwjIyNcXG5cXFwiZmlsZW5hbWUgMVxcXCJcXG5maWxlIHRleHQ+XFxuPCMjI1xcblxcXCJmaWxlbmFtZSAyXFxcIlxcbmZpbGUgdGV4dD4uLi5cXG5cXG5BbnN3ZXI6IDxhbnN3ZXIgb3IgXCJJIGNvdWxkbid0IGZpbmQgdGhlIGFuc3dlciB0byB0aGF0IHF1ZXN0aW9uIGluIHlvdXIgZmlsZXNcIiBvciBcIlRoYXQncyBub3QgYSB2YWxpZCBxdWVzdGlvbi5cIj5cXG5cXG5gICtcbiAgICAgIGBRdWVzdGlvbjogJHtxdWVzdGlvbn1cXG5cXG5gICtcbiAgICAgIGBGaWxlczpcXG4ke2ZpbGVzU3RyaW5nfVxcblxcbmAgK1xuICAgICAgYEFuc3dlcjpgO1xuXG4gICAgY29uc3Qgc3RyZWFtID0gY29tcGxldGlvblN0cmVhbSh7XG4gICAgICBwcm9tcHQsXG4gICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgfSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlc3BvbnNlIGhlYWRlcnMgZm9yIHN0cmVhbWluZ1xuICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvZXZlbnQtc3RyZWFtXCIsXG4gICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJuby1jYWNoZSwgbm8tdHJhbnNmb3JtXCIsXG4gICAgICBDb25uZWN0aW9uOiBcImtlZXAtYWxpdmVcIixcbiAgICB9KTtcblxuICAgIC8vIFdyaXRlIHRoZSBkYXRhIGZyb20gdGhlIHN0cmVhbSB0byB0aGUgcmVzcG9uc2VcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGRhdGEgb2Ygc3RyZWFtKSB7XG4gICAgICByZXMud3JpdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gRW5kIHRoZSByZXNwb25zZSB3aGVuIHRoZSBzdHJlYW0gaXMgZG9uZVxuICAgIHJlcy5lbmQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb21wbGV0aW9uU3RyZWFtIiwiTUFYX0ZJTEVTX0xFTkdUSCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJmaWxlQ2h1bmtzIiwiYm9keSIsInF1ZXN0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsZXNTdHJpbmciLCJtYXAiLCJmaWxlQ2h1bmsiLCJmaWxlbmFtZSIsInRleHQiLCJqb2luIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwicHJvbXB0Iiwic3RyZWFtIiwibW9kZWwiLCJ3cml0ZUhlYWQiLCJDb25uZWN0aW9uIiwiZGF0YSIsIndyaXRlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/get-answer-from-files.ts\n");

/***/ }),

/***/ "(api)/./src/services/openai.ts":
/*!********************************!*\
  !*** ./src/services/openai.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"completion\": () => (/* binding */ completion),\n/* harmony export */   \"completionStream\": () => (/* binding */ completionStream),\n/* harmony export */   \"embedding\": () => (/* binding */ embedding),\n/* harmony export */   \"openai\": () => (/* binding */ openai)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n// This file contains utility functions for interacting with the OpenAI API\nif (!process.env.OPENAI_API_KEY) {\n    throw new Error(\"Missing OPENAI_API_KEY environment variable\");\n}\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function completion({ prompt , fallback , max_tokens =800 , temperature =0 , model =\"text-davinci-003\" , ...otherOptions }) {\n    try {\n        const result = await openai.createCompletion({\n            prompt,\n            max_tokens,\n            temperature,\n            model,\n            ...otherOptions\n        });\n        if (!result.data.choices[0].text) {\n            throw new Error(\"No text returned from the completions endpoint.\");\n        }\n        return result.data.choices[0].text;\n    } catch (error) {\n        if (fallback) return fallback;\n        else throw error;\n    }\n}\nasync function* completionStream({ prompt , fallback , max_tokens =800 , temperature =0 , model =\"text-davinci-003\"  }) {\n    try {\n        const result = await openai.createCompletion({\n            prompt,\n            max_tokens,\n            temperature,\n            model,\n            stream: true\n        }, {\n            responseType: \"stream\"\n        });\n        const stream = result.data;\n        for await (const chunk of stream){\n            const line = chunk.toString().trim();\n            const message = line.split(\"data: \")[1];\n            if (message === \"[DONE]\") {\n                break;\n            }\n            const data = JSON.parse(message);\n            yield data.choices[0].text;\n        }\n    } catch (error) {\n        if (fallback) yield fallback;\n        else throw error;\n    }\n}\nasync function embedding({ input , model =\"text-embedding-ada-002\"  }) {\n    const result = await openai.createEmbedding({\n        model,\n        input\n    });\n    if (!result.data.data[0].embedding) {\n        throw new Error(\"No embedding returned from the completions endpoint\");\n    }\n    // Otherwise, return the embeddings\n    return result.data.data.map((d)=>d.embedding);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvb3BlbmFpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1nQjtBQUVoQiwyRUFBMkU7QUFFM0UsSUFBSSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtJQUMvQixNQUFNLElBQUlDLE1BQU0sK0NBQStDO0FBQ2pFLENBQUM7QUFFRCxNQUFNQyxnQkFBZ0IsSUFBSU4saURBQWFBLENBQUM7SUFDdENPLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUNPLE1BQU1JLFNBQVMsSUFBSVAsNkNBQVNBLENBQUNLLGVBQWU7QUFZNUMsZUFBZUcsV0FBVyxFQUMvQkMsT0FBTSxFQUNOQyxTQUFRLEVBQ1JDLFlBQWEsSUFBRyxFQUNoQkMsYUFBYyxFQUFDLEVBQ2ZDLE9BQVEsbUJBQWtCLEVBQzFCLEdBQUdDLGNBQ2UsRUFBRTtJQUNwQixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNUixPQUFPUyxnQkFBZ0IsQ0FBQztZQUMzQ1A7WUFDQUU7WUFDQUM7WUFDQUM7WUFDQSxHQUFHQyxZQUFZO1FBQ2pCO1FBRUEsSUFBSSxDQUFDQyxPQUFPRSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUksRUFBRTtZQUNoQyxNQUFNLElBQUlmLE1BQU0sbURBQW1EO1FBQ3JFLENBQUM7UUFDRCxPQUFPVyxPQUFPRSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7SUFDcEMsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsSUFBSVYsVUFBVSxPQUFPQTthQUNoQixNQUFNVSxNQUFNO0lBQ25CO0FBQ0YsQ0FBQztBQUVNLGdCQUFnQkMsaUJBQWlCLEVBQ3RDWixPQUFNLEVBQ05DLFNBQVEsRUFDUkMsWUFBYSxJQUFHLEVBQ2hCQyxhQUFjLEVBQUMsRUFDZkMsT0FBUSxtQkFBa0IsRUFDUixFQUFFO0lBQ3BCLElBQUk7UUFDRixNQUFNRSxTQUFTLE1BQU1SLE9BQU9TLGdCQUFnQixDQUMxQztZQUNFUDtZQUNBRTtZQUNBQztZQUNBQztZQUNBUyxRQUFRLElBQUk7UUFDZCxHQUNBO1lBQUVDLGNBQWM7UUFBUztRQUczQixNQUFNRCxTQUFTUCxPQUFPRSxJQUFJO1FBRTFCLFdBQVcsTUFBTU8sU0FBU0YsT0FBUTtZQUNoQyxNQUFNRyxPQUFPRCxNQUFNRSxRQUFRLEdBQUdDLElBQUk7WUFDbEMsTUFBTUMsVUFBVUgsS0FBS0ksS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBRXZDLElBQUlELFlBQVksVUFBVTtnQkFDeEIsS0FBTTtZQUNSLENBQUM7WUFFRCxNQUFNWCxPQUFPYSxLQUFLQyxLQUFLLENBQUNIO1lBRXhCLE1BQU1YLEtBQUtDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7UUFDNUI7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxJQUFJVixVQUFVLE1BQU1BO2FBQ2YsTUFBTVUsTUFBTTtJQUNuQjtBQUNGLENBQUM7QUFFTSxlQUFlWSxVQUFVLEVBQzlCQyxNQUFLLEVBQ0xwQixPQUFRLHlCQUF3QixFQUNmLEVBQXVCO0lBQ3hDLE1BQU1FLFNBQVMsTUFBTVIsT0FBTzJCLGVBQWUsQ0FBQztRQUMxQ3JCO1FBQ0FvQjtJQUNGO0lBRUEsSUFBSSxDQUFDbEIsT0FBT0UsSUFBSSxDQUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDZSxTQUFTLEVBQUU7UUFDbEMsTUFBTSxJQUFJNUIsTUFBTSx1REFBdUQ7SUFDekUsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxPQUFPVyxPQUFPRSxJQUFJLENBQUNBLElBQUksQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxFQUFFSixTQUFTO0FBQ2hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxlLXEtYW5kLWEvLi9zcmMvc2VydmljZXMvb3BlbmFpLnRzPzNjNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlIH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7XG4gIENvbmZpZ3VyYXRpb24sXG4gIENyZWF0ZUNvbXBsZXRpb25SZXF1ZXN0LFxuICBDcmVhdGVDb21wbGV0aW9uUmVzcG9uc2UsXG4gIE9wZW5BSUFwaSxcbn0gZnJvbSBcIm9wZW5haVwiO1xuXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIE9wZW5BSSBBUElcblxuaWYgKCFwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIE9QRU5BSV9BUElfS0VZIGVudmlyb25tZW50IHZhcmlhYmxlXCIpO1xufVxuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5leHBvcnQgY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxudHlwZSBDb21wbGV0aW9uT3B0aW9ucyA9IFBhcnRpYWw8Q3JlYXRlQ29tcGxldGlvblJlcXVlc3Q+ICYge1xuICBwcm9tcHQ6IHN0cmluZztcbiAgZmFsbGJhY2s/OiBzdHJpbmc7XG59O1xuXG50eXBlIEVtYmVkZGluZ09wdGlvbnMgPSB7XG4gIGlucHV0OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgbW9kZWw/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tcGxldGlvbih7XG4gIHByb21wdCxcbiAgZmFsbGJhY2ssXG4gIG1heF90b2tlbnMgPSA4MDAsXG4gIHRlbXBlcmF0dXJlID0gMCxcbiAgbW9kZWwgPSBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgLi4ub3RoZXJPcHRpb25zXG59OiBDb21wbGV0aW9uT3B0aW9ucykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICAgIHByb21wdCxcbiAgICAgIG1heF90b2tlbnMsXG4gICAgICB0ZW1wZXJhdHVyZSxcbiAgICAgIG1vZGVsLFxuICAgICAgLi4ub3RoZXJPcHRpb25zLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXN1bHQuZGF0YS5jaG9pY2VzWzBdLnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRleHQgcmV0dXJuZWQgZnJvbSB0aGUgY29tcGxldGlvbnMgZW5kcG9pbnQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmRhdGEuY2hvaWNlc1swXS50ZXh0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChmYWxsYmFjaykgcmV0dXJuIGZhbGxiYWNrO1xuICAgIGVsc2UgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiBjb21wbGV0aW9uU3RyZWFtKHtcbiAgcHJvbXB0LFxuICBmYWxsYmFjayxcbiAgbWF4X3Rva2VucyA9IDgwMCxcbiAgdGVtcGVyYXR1cmUgPSAwLFxuICBtb2RlbCA9IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxufTogQ29tcGxldGlvbk9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbihcbiAgICAgIHtcbiAgICAgICAgcHJvbXB0LFxuICAgICAgICBtYXhfdG9rZW5zLFxuICAgICAgICB0ZW1wZXJhdHVyZSxcbiAgICAgICAgbW9kZWwsXG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7IHJlc3BvbnNlVHlwZTogXCJzdHJlYW1cIiB9XG4gICAgKTtcblxuICAgIGNvbnN0IHN0cmVhbSA9IHJlc3VsdC5kYXRhIGFzIGFueSBhcyBJbmNvbWluZ01lc3NhZ2U7XG5cbiAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHN0cmVhbSkge1xuICAgICAgY29uc3QgbGluZSA9IGNodW5rLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGxpbmUuc3BsaXQoXCJkYXRhOiBcIilbMV07XG5cbiAgICAgIGlmIChtZXNzYWdlID09PSBcIltET05FXVwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKSBhcyBDcmVhdGVDb21wbGV0aW9uUmVzcG9uc2U7XG5cbiAgICAgIHlpZWxkIGRhdGEuY2hvaWNlc1swXS50ZXh0O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZmFsbGJhY2spIHlpZWxkIGZhbGxiYWNrO1xuICAgIGVsc2UgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYmVkZGluZyh7XG4gIGlucHV0LFxuICBtb2RlbCA9IFwidGV4dC1lbWJlZGRpbmctYWRhLTAwMlwiLFxufTogRW1iZWRkaW5nT3B0aW9ucyk6IFByb21pc2U8bnVtYmVyW11bXT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcGVuYWkuY3JlYXRlRW1iZWRkaW5nKHtcbiAgICBtb2RlbCxcbiAgICBpbnB1dCxcbiAgfSk7XG5cbiAgaWYgKCFyZXN1bHQuZGF0YS5kYXRhWzBdLmVtYmVkZGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGVtYmVkZGluZyByZXR1cm5lZCBmcm9tIHRoZSBjb21wbGV0aW9ucyBlbmRwb2ludFwiKTtcbiAgfVxuXG4gIC8vIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBlbWJlZGRpbmdzXG4gIHJldHVybiByZXN1bHQuZGF0YS5kYXRhLm1hcCgoZCkgPT4gZC5lbWJlZGRpbmcpO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJFcnJvciIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJvcGVuYWkiLCJjb21wbGV0aW9uIiwicHJvbXB0IiwiZmFsbGJhY2siLCJtYXhfdG9rZW5zIiwidGVtcGVyYXR1cmUiLCJtb2RlbCIsIm90aGVyT3B0aW9ucyIsInJlc3VsdCIsImNyZWF0ZUNvbXBsZXRpb24iLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJlcnJvciIsImNvbXBsZXRpb25TdHJlYW0iLCJzdHJlYW0iLCJyZXNwb25zZVR5cGUiLCJjaHVuayIsImxpbmUiLCJ0b1N0cmluZyIsInRyaW0iLCJtZXNzYWdlIiwic3BsaXQiLCJKU09OIiwicGFyc2UiLCJlbWJlZGRpbmciLCJpbnB1dCIsImNyZWF0ZUVtYmVkZGluZyIsIm1hcCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/services/openai.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/get-answer-from-files.ts"));
module.exports = __webpack_exports__;

})();