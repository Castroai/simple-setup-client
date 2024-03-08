"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-callback-ref";
exports.ids = ["vendor-chunks/use-callback-ref"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignRef: () => (/* binding */ assignRef)\n/* harmony export */ });\n/**\n * Assigns a value for a given ref, no matter of the ref format\n * @param {RefObject} ref - a callback function or ref object\n * @param value - a new value\n *\n * @see https://github.com/theKashey/use-callback-ref#assignref\n * @example\n * const refObject = useRef();\n * const refFn = (ref) => {....}\n *\n * assignRef(refObject, \"refValue\");\n * assignRef(refFn, \"refValue\");\n */ function assignRef(ref, value) {\n    if (typeof ref === \"function\") {\n        ref(value);\n    } else if (ref) {\n        ref.current = value;\n    }\n    return ref;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9hc3NpZ25SZWYuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7Q0FZQyxHQUNNLFNBQVNBLFVBQVVDLEdBQUcsRUFBRUMsS0FBSztJQUNoQyxJQUFJLE9BQU9ELFFBQVEsWUFBWTtRQUMzQkEsSUFBSUM7SUFDUixPQUNLLElBQUlELEtBQUs7UUFDVkEsSUFBSUUsT0FBTyxHQUFHRDtJQUNsQjtJQUNBLE9BQU9EO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGVzZXR1cC5kZXYvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9hc3NpZ25SZWYuanM/MGE0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFzc2lnbnMgYSB2YWx1ZSBmb3IgYSBnaXZlbiByZWYsIG5vIG1hdHRlciBvZiB0aGUgcmVmIGZvcm1hdFxuICogQHBhcmFtIHtSZWZPYmplY3R9IHJlZiAtIGEgY2FsbGJhY2sgZnVuY3Rpb24gb3IgcmVmIG9iamVjdFxuICogQHBhcmFtIHZhbHVlIC0gYSBuZXcgdmFsdWVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiNhc3NpZ25yZWZcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZWZPYmplY3QgPSB1c2VSZWYoKTtcbiAqIGNvbnN0IHJlZkZuID0gKHJlZikgPT4gey4uLi59XG4gKlxuICogYXNzaWduUmVmKHJlZk9iamVjdCwgXCJyZWZWYWx1ZVwiKTtcbiAqIGFzc2lnblJlZihyZWZGbiwgXCJyZWZWYWx1ZVwiKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblJlZihyZWYsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVmKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZWY7XG59XG4iXSwibmFtZXMiOlsiYXNzaWduUmVmIiwicmVmIiwidmFsdWUiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es2015/assignRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMergeRefs: () => (/* binding */ useMergeRefs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es2015/assignRef.js\");\n/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es2015/useRef.js\");\n\n\n\nvar currentValues = new WeakMap();\n/**\n * Merges two or more refs together providing a single interface to set their value\n * @param {RefObject|Ref} refs\n * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}\n *\n * @see {@link mergeRefs} a version without buit-in memoization\n * @see https://github.com/theKashey/use-callback-ref#usemergerefs\n * @example\n * const Component = React.forwardRef((props, ref) => {\n *   const ownRef = useRef();\n *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together\n *   return <div ref={domRef}>...</div>\n * }\n */ function useMergeRefs(refs, defaultValue) {\n    var callbackRef = (0,_useRef__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(defaultValue || null, function(newValue) {\n        return refs.forEach(function(ref) {\n            return (0,_assignRef__WEBPACK_IMPORTED_MODULE_2__.assignRef)(ref, newValue);\n        });\n    });\n    // handle refs changes - added or removed\n    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(function() {\n        var oldValue = currentValues.get(callbackRef);\n        if (oldValue) {\n            var prevRefs_1 = new Set(oldValue);\n            var nextRefs_1 = new Set(refs);\n            var current_1 = callbackRef.current;\n            prevRefs_1.forEach(function(ref) {\n                if (!nextRefs_1.has(ref)) {\n                    (0,_assignRef__WEBPACK_IMPORTED_MODULE_2__.assignRef)(ref, null);\n                }\n            });\n            nextRefs_1.forEach(function(ref) {\n                if (!prevRefs_1.has(ref)) {\n                    (0,_assignRef__WEBPACK_IMPORTED_MODULE_2__.assignRef)(ref, current_1);\n                }\n            });\n        }\n        currentValues.set(callbackRef, refs);\n    }, [\n        refs\n    ]);\n    return callbackRef;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VNZXJnZVJlZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUNTO0FBQ0U7QUFDMUMsSUFBSUcsZ0JBQWdCLElBQUlDO0FBQ3hCOzs7Ozs7Ozs7Ozs7O0NBYUMsR0FDTSxTQUFTQyxhQUFhQyxJQUFJLEVBQUVDLFlBQVk7SUFDM0MsSUFBSUMsY0FBY04sdURBQWNBLENBQUNLLGdCQUFnQixNQUFNLFNBQVVFLFFBQVE7UUFDckUsT0FBT0gsS0FBS0ksT0FBTyxDQUFDLFNBQVVDLEdBQUc7WUFBSSxPQUFPVixxREFBU0EsQ0FBQ1UsS0FBS0Y7UUFBVztJQUMxRTtJQUNBLHlDQUF5QztJQUN6Q1Qsa0RBQXFCLENBQUM7UUFDbEIsSUFBSWEsV0FBV1YsY0FBY1csR0FBRyxDQUFDTjtRQUNqQyxJQUFJSyxVQUFVO1lBQ1YsSUFBSUUsYUFBYSxJQUFJQyxJQUFJSDtZQUN6QixJQUFJSSxhQUFhLElBQUlELElBQUlWO1lBQ3pCLElBQUlZLFlBQVlWLFlBQVlXLE9BQU87WUFDbkNKLFdBQVdMLE9BQU8sQ0FBQyxTQUFVQyxHQUFHO2dCQUM1QixJQUFJLENBQUNNLFdBQVdHLEdBQUcsQ0FBQ1QsTUFBTTtvQkFDdEJWLHFEQUFTQSxDQUFDVSxLQUFLO2dCQUNuQjtZQUNKO1lBQ0FNLFdBQVdQLE9BQU8sQ0FBQyxTQUFVQyxHQUFHO2dCQUM1QixJQUFJLENBQUNJLFdBQVdLLEdBQUcsQ0FBQ1QsTUFBTTtvQkFDdEJWLHFEQUFTQSxDQUFDVSxLQUFLTztnQkFDbkI7WUFDSjtRQUNKO1FBQ0FmLGNBQWNrQixHQUFHLENBQUNiLGFBQWFGO0lBQ25DLEdBQUc7UUFBQ0E7S0FBSztJQUNULE9BQU9FO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGVzZXR1cC5kZXYvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VNZXJnZVJlZi5qcz85ZjU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFzc2lnblJlZiB9IGZyb20gJy4vYXNzaWduUmVmJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrUmVmIH0gZnJvbSAnLi91c2VSZWYnO1xudmFyIGN1cnJlbnRWYWx1ZXMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBNZXJnZXMgdHdvIG9yIG1vcmUgcmVmcyB0b2dldGhlciBwcm92aWRpbmcgYSBzaW5nbGUgaW50ZXJmYWNlIHRvIHNldCB0aGVpciB2YWx1ZVxuICogQHBhcmFtIHtSZWZPYmplY3R8UmVmfSByZWZzXG4gKiBAcmV0dXJucyB7TXV0YWJsZVJlZk9iamVjdH0gLSBhIG5ldyByZWYsIHdoaWNoIHRyYW5zbGF0ZXMgYWxsIGNoYW5nZXMgdG8ge3JlZnN9XG4gKlxuICogQHNlZSB7QGxpbmsgbWVyZ2VSZWZzfSBhIHZlcnNpb24gd2l0aG91dCBidWl0LWluIG1lbW9pemF0aW9uXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiN1c2VtZXJnZXJlZnNcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gKiAgIGNvbnN0IG93blJlZiA9IHVzZVJlZigpO1xuICogICBjb25zdCBkb21SZWYgPSB1c2VNZXJnZVJlZnMoW3JlZiwgb3duUmVmXSk7IC8vIPCfkYggbWVyZ2UgdG9nZXRoZXJcbiAqICAgcmV0dXJuIDxkaXYgcmVmPXtkb21SZWZ9Pi4uLjwvZGl2PlxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VSZWZzKHJlZnMsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciBjYWxsYmFja1JlZiA9IHVzZUNhbGxiYWNrUmVmKGRlZmF1bHRWYWx1ZSB8fCBudWxsLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7IHJldHVybiBhc3NpZ25SZWYocmVmLCBuZXdWYWx1ZSk7IH0pO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSByZWZzIGNoYW5nZXMgLSBhZGRlZCBvciByZW1vdmVkXG4gICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gY3VycmVudFZhbHVlcy5nZXQoY2FsbGJhY2tSZWYpO1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwcmV2UmVmc18xID0gbmV3IFNldChvbGRWYWx1ZSk7XG4gICAgICAgICAgICB2YXIgbmV4dFJlZnNfMSA9IG5ldyBTZXQocmVmcyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudF8xID0gY2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgICAgIHByZXZSZWZzXzEuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0UmVmc18xLmhhcyhyZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnblJlZihyZWYsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV4dFJlZnNfMS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZSZWZzXzEuaGFzKHJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduUmVmKHJlZiwgY3VycmVudF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VmFsdWVzLnNldChjYWxsYmFja1JlZiwgcmVmcyk7XG4gICAgfSwgW3JlZnNdKTtcbiAgICByZXR1cm4gY2FsbGJhY2tSZWY7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJhc3NpZ25SZWYiLCJ1c2VDYWxsYmFja1JlZiIsImN1cnJlbnRWYWx1ZXMiLCJXZWFrTWFwIiwidXNlTWVyZ2VSZWZzIiwicmVmcyIsImRlZmF1bHRWYWx1ZSIsImNhbGxiYWNrUmVmIiwibmV3VmFsdWUiLCJmb3JFYWNoIiwicmVmIiwidXNlTGF5b3V0RWZmZWN0Iiwib2xkVmFsdWUiLCJnZXQiLCJwcmV2UmVmc18xIiwiU2V0IiwibmV4dFJlZnNfMSIsImN1cnJlbnRfMSIsImN1cnJlbnQiLCJoYXMiLCJzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es2015/useMergeRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * creates a MutableRef with ref change callback\n * @param initialValue - initial ref value\n * @param {Function} callback - a callback to run when value changes\n *\n * @example\n * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);\n * ref.current = 1;\n * // prints 0 -> 1\n *\n * @see https://reactjs.org/docs/hooks-reference.html#useref\n * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref\n * @returns {MutableRefObject}\n */ function useCallbackRef(initialValue, callback) {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function() {\n        return {\n            // value\n            value: initialValue,\n            // last callback\n            callback: callback,\n            // \"memoized\" public interface\n            facade: {\n                get current () {\n                    return ref.value;\n                },\n                set current (value){\n                    var last = ref.value;\n                    if (last !== value) {\n                        ref.value = value;\n                        ref.callback(value, last);\n                    }\n                }\n            }\n        };\n    })[0];\n    // update callback\n    ref.callback = callback;\n    return ref.facade;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VSZWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBQ2pDOzs7Ozs7Ozs7Ozs7O0NBYUMsR0FDTSxTQUFTQyxlQUFlQyxZQUFZLEVBQUVDLFFBQVE7SUFDakQsSUFBSUMsTUFBTUosK0NBQVFBLENBQUM7UUFBYyxPQUFRO1lBQ3JDLFFBQVE7WUFDUkssT0FBT0g7WUFDUCxnQkFBZ0I7WUFDaEJDLFVBQVVBO1lBQ1YsOEJBQThCO1lBQzlCRyxRQUFRO2dCQUNKLElBQUlDLFdBQVU7b0JBQ1YsT0FBT0gsSUFBSUMsS0FBSztnQkFDcEI7Z0JBQ0EsSUFBSUUsU0FBUUYsTUFBTztvQkFDZixJQUFJRyxPQUFPSixJQUFJQyxLQUFLO29CQUNwQixJQUFJRyxTQUFTSCxPQUFPO3dCQUNoQkQsSUFBSUMsS0FBSyxHQUFHQTt3QkFDWkQsSUFBSUQsUUFBUSxDQUFDRSxPQUFPRztvQkFDeEI7Z0JBQ0o7WUFDSjtRQUNKO0lBQUksRUFBRSxDQUFDLEVBQUU7SUFDVCxrQkFBa0I7SUFDbEJKLElBQUlELFFBQVEsR0FBR0E7SUFDZixPQUFPQyxJQUFJRSxNQUFNO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlc2V0dXAuZGV2Ly4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdXNlUmVmLmpzPzM4OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIGNyZWF0ZXMgYSBNdXRhYmxlUmVmIHdpdGggcmVmIGNoYW5nZSBjYWxsYmFja1xuICogQHBhcmFtIGluaXRpYWxWYWx1ZSAtIGluaXRpYWwgcmVmIHZhbHVlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGEgY2FsbGJhY2sgdG8gcnVuIHdoZW4gdmFsdWUgY2hhbmdlc1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZWYgPSB1c2VDYWxsYmFja1JlZigwLCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiBjb25zb2xlLmxvZyhvbGRWYWx1ZSwgJy0+JywgbmV3VmFsdWUpO1xuICogcmVmLmN1cnJlbnQgPSAxO1xuICogLy8gcHJpbnRzIDAgLT4gMVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLXJlZmVyZW5jZS5odG1sI3VzZXJlZlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhlS2FzaGV5L3VzZS1jYWxsYmFjay1yZWYjdXNlY2FsbGJhY2tyZWYtLS10by1yZXBsYWNlLXJlYWN0dXNlcmVmXG4gKiBAcmV0dXJucyB7TXV0YWJsZVJlZk9iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKGluaXRpYWxWYWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVmID0gdXNlU3RhdGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgLy8gdmFsdWVcbiAgICAgICAgdmFsdWU6IGluaXRpYWxWYWx1ZSxcbiAgICAgICAgLy8gbGFzdCBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIC8vIFwibWVtb2l6ZWRcIiBwdWJsaWMgaW50ZXJmYWNlXG4gICAgICAgIGZhY2FkZToge1xuICAgICAgICAgICAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZi52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgY3VycmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0ID0gcmVmLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWYudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmNhbGxiYWNrKHZhbHVlLCBsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pOyB9KVswXTtcbiAgICAvLyB1cGRhdGUgY2FsbGJhY2tcbiAgICByZWYuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICByZXR1cm4gcmVmLmZhY2FkZTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrUmVmIiwiaW5pdGlhbFZhbHVlIiwiY2FsbGJhY2siLCJyZWYiLCJ2YWx1ZSIsImZhY2FkZSIsImN1cnJlbnQiLCJsYXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es2015/useRef.js\n");

/***/ })

};
;