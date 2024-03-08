"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ecdsa-sig-formatter";
exports.ids = ["vendor-chunks/ecdsa-sig-formatter"];
exports.modules = {

/***/ "(rsc)/./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(rsc)/./node_modules/safe-buffer/index.js\").Buffer);\nvar getParamBytesForAlg = __webpack_require__(/*! ./param-bytes-for-alg */ \"(rsc)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\");\nvar MAX_OCTET = 0x80, CLASS_UNIVERSAL = 0, PRIMITIVE_BIT = 0x20, TAG_SEQ = 0x10, TAG_INT = 0x02, ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6, ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;\nfunction base64Url(base64) {\n    return base64.replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n}\nfunction signatureAsBuffer(signature) {\n    if (Buffer.isBuffer(signature)) {\n        return signature;\n    } else if (\"string\" === typeof signature) {\n        return Buffer.from(signature, \"base64\");\n    }\n    throw new TypeError(\"ECDSA signature must be a Base64 string or a Buffer\");\n}\nfunction derToJose(signature, alg) {\n    signature = signatureAsBuffer(signature);\n    var paramBytes = getParamBytesForAlg(alg);\n    // the DER encoded param should at most be the param size, plus a padding\n    // zero, since due to being a signed integer\n    var maxEncodedParamLength = paramBytes + 1;\n    var inputLength = signature.length;\n    var offset = 0;\n    if (signature[offset++] !== ENCODED_TAG_SEQ) {\n        throw new Error('Could not find expected \"seq\"');\n    }\n    var seqLength = signature[offset++];\n    if (seqLength === (MAX_OCTET | 1)) {\n        seqLength = signature[offset++];\n    }\n    if (inputLength - offset < seqLength) {\n        throw new Error('\"seq\" specified length of \"' + seqLength + '\", only \"' + (inputLength - offset) + '\" remaining');\n    }\n    if (signature[offset++] !== ENCODED_TAG_INT) {\n        throw new Error('Could not find expected \"int\" for \"r\"');\n    }\n    var rLength = signature[offset++];\n    if (inputLength - offset - 2 < rLength) {\n        throw new Error('\"r\" specified length of \"' + rLength + '\", only \"' + (inputLength - offset - 2) + '\" available');\n    }\n    if (maxEncodedParamLength < rLength) {\n        throw new Error('\"r\" specified length of \"' + rLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n    }\n    var rOffset = offset;\n    offset += rLength;\n    if (signature[offset++] !== ENCODED_TAG_INT) {\n        throw new Error('Could not find expected \"int\" for \"s\"');\n    }\n    var sLength = signature[offset++];\n    if (inputLength - offset !== sLength) {\n        throw new Error('\"s\" specified length of \"' + sLength + '\", expected \"' + (inputLength - offset) + '\"');\n    }\n    if (maxEncodedParamLength < sLength) {\n        throw new Error('\"s\" specified length of \"' + sLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n    }\n    var sOffset = offset;\n    offset += sLength;\n    if (offset !== inputLength) {\n        throw new Error('Expected to consume entire buffer, but \"' + (inputLength - offset) + '\" bytes remain');\n    }\n    var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;\n    var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);\n    for(offset = 0; offset < rPadding; ++offset){\n        dst[offset] = 0;\n    }\n    signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);\n    offset = paramBytes;\n    for(var o = offset; offset < o + sPadding; ++offset){\n        dst[offset] = 0;\n    }\n    signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);\n    dst = dst.toString(\"base64\");\n    dst = base64Url(dst);\n    return dst;\n}\nfunction countPadding(buf, start, stop) {\n    var padding = 0;\n    while(start + padding < stop && buf[start + padding] === 0){\n        ++padding;\n    }\n    var needsSign = buf[start + padding] >= MAX_OCTET;\n    if (needsSign) {\n        --padding;\n    }\n    return padding;\n}\nfunction joseToDer(signature, alg) {\n    signature = signatureAsBuffer(signature);\n    var paramBytes = getParamBytesForAlg(alg);\n    var signatureBytes = signature.length;\n    if (signatureBytes !== paramBytes * 2) {\n        throw new TypeError('\"' + alg + '\" signatures must be \"' + paramBytes * 2 + '\" bytes, saw \"' + signatureBytes + '\"');\n    }\n    var rPadding = countPadding(signature, 0, paramBytes);\n    var sPadding = countPadding(signature, paramBytes, signature.length);\n    var rLength = paramBytes - rPadding;\n    var sLength = paramBytes - sPadding;\n    var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;\n    var shortLength = rsBytes < MAX_OCTET;\n    var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);\n    var offset = 0;\n    dst[offset++] = ENCODED_TAG_SEQ;\n    if (shortLength) {\n        // Bit 8 has value \"0\"\n        // bits 7-1 give the length.\n        dst[offset++] = rsBytes;\n    } else {\n        // Bit 8 of first octet has value \"1\"\n        // bits 7-1 give the number of additional length octets.\n        dst[offset++] = MAX_OCTET | 1;\n        // length, base 256\n        dst[offset++] = rsBytes & 0xff;\n    }\n    dst[offset++] = ENCODED_TAG_INT;\n    dst[offset++] = rLength;\n    if (rPadding < 0) {\n        dst[offset++] = 0;\n        offset += signature.copy(dst, offset, 0, paramBytes);\n    } else {\n        offset += signature.copy(dst, offset, rPadding, paramBytes);\n    }\n    dst[offset++] = ENCODED_TAG_INT;\n    dst[offset++] = sLength;\n    if (sPadding < 0) {\n        dst[offset++] = 0;\n        signature.copy(dst, offset, paramBytes);\n    } else {\n        signature.copy(dst, offset, paramBytes + sPadding);\n    }\n    return dst;\n}\nmodule.exports = {\n    derToJose: derToJose,\n    joseToDer: joseToDer\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvZWNkc2Etc2lnLWZvcm1hdHRlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFNBQVNDLDRGQUE2QjtBQUUxQyxJQUFJQyxzQkFBc0JELG1CQUFPQSxDQUFDO0FBRWxDLElBQUlFLFlBQVksTUFDZkMsa0JBQWtCLEdBQ2xCQyxnQkFBZ0IsTUFDaEJDLFVBQVUsTUFDVkMsVUFBVSxNQUNWQyxrQkFBa0IsVUFBV0gsZ0JBQWtCRCxtQkFBbUIsR0FDbEVLLGtCQUFrQkYsVUFBV0gsbUJBQW1CO0FBRWpELFNBQVNNLFVBQVVDLE1BQU07SUFDeEIsT0FBT0EsT0FDTEMsT0FBTyxDQUFDLE1BQU0sSUFDZEEsT0FBTyxDQUFDLE9BQU8sS0FDZkEsT0FBTyxDQUFDLE9BQU87QUFDbEI7QUFFQSxTQUFTQyxrQkFBa0JDLFNBQVM7SUFDbkMsSUFBSWQsT0FBT2UsUUFBUSxDQUFDRCxZQUFZO1FBQy9CLE9BQU9BO0lBQ1IsT0FBTyxJQUFJLGFBQWEsT0FBT0EsV0FBVztRQUN6QyxPQUFPZCxPQUFPZ0IsSUFBSSxDQUFDRixXQUFXO0lBQy9CO0lBRUEsTUFBTSxJQUFJRyxVQUFVO0FBQ3JCO0FBRUEsU0FBU0MsVUFBVUosU0FBUyxFQUFFSyxHQUFHO0lBQ2hDTCxZQUFZRCxrQkFBa0JDO0lBQzlCLElBQUlNLGFBQWFsQixvQkFBb0JpQjtJQUVyQyx5RUFBeUU7SUFDekUsNENBQTRDO0lBQzVDLElBQUlFLHdCQUF3QkQsYUFBYTtJQUV6QyxJQUFJRSxjQUFjUixVQUFVUyxNQUFNO0lBRWxDLElBQUlDLFNBQVM7SUFDYixJQUFJVixTQUFTLENBQUNVLFNBQVMsS0FBS2hCLGlCQUFpQjtRQUM1QyxNQUFNLElBQUlpQixNQUFNO0lBQ2pCO0lBRUEsSUFBSUMsWUFBWVosU0FBUyxDQUFDVSxTQUFTO0lBQ25DLElBQUlFLGNBQWV2QixDQUFBQSxZQUFZLElBQUk7UUFDbEN1QixZQUFZWixTQUFT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LFFBQVFKLGFBQWFZO0lBQzFDO0lBRUEsT0FBT0M7QUFDUjtBQUVBaUIsT0FBT0MsT0FBTyxHQUFHO0lBQ2hCakMsV0FBV0E7SUFDWDRCLFdBQVdBO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGVzZXR1cC5kZXYvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvZWNkc2Etc2lnLWZvcm1hdHRlci5qcz9mMzhkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xuXG52YXIgZ2V0UGFyYW1CeXRlc0ZvckFsZyA9IHJlcXVpcmUoJy4vcGFyYW0tYnl0ZXMtZm9yLWFsZycpO1xuXG52YXIgTUFYX09DVEVUID0gMHg4MCxcblx0Q0xBU1NfVU5JVkVSU0FMID0gMCxcblx0UFJJTUlUSVZFX0JJVCA9IDB4MjAsXG5cdFRBR19TRVEgPSAweDEwLFxuXHRUQUdfSU5UID0gMHgwMixcblx0RU5DT0RFRF9UQUdfU0VRID0gKFRBR19TRVEgfCBQUklNSVRJVkVfQklUKSB8IChDTEFTU19VTklWRVJTQUwgPDwgNiksXG5cdEVOQ09ERURfVEFHX0lOVCA9IFRBR19JTlQgfCAoQ0xBU1NfVU5JVkVSU0FMIDw8IDYpO1xuXG5mdW5jdGlvbiBiYXNlNjRVcmwoYmFzZTY0KSB7XG5cdHJldHVybiBiYXNlNjRcblx0XHQucmVwbGFjZSgvPS9nLCAnJylcblx0XHQucmVwbGFjZSgvXFwrL2csICctJylcblx0XHQucmVwbGFjZSgvXFwvL2csICdfJyk7XG59XG5cbmZ1bmN0aW9uIHNpZ25hdHVyZUFzQnVmZmVyKHNpZ25hdHVyZSkge1xuXHRpZiAoQnVmZmVyLmlzQnVmZmVyKHNpZ25hdHVyZSkpIHtcblx0XHRyZXR1cm4gc2lnbmF0dXJlO1xuXHR9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2Ygc2lnbmF0dXJlKSB7XG5cdFx0cmV0dXJuIEJ1ZmZlci5mcm9tKHNpZ25hdHVyZSwgJ2Jhc2U2NCcpO1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignRUNEU0Egc2lnbmF0dXJlIG11c3QgYmUgYSBCYXNlNjQgc3RyaW5nIG9yIGEgQnVmZmVyJyk7XG59XG5cbmZ1bmN0aW9uIGRlclRvSm9zZShzaWduYXR1cmUsIGFsZykge1xuXHRzaWduYXR1cmUgPSBzaWduYXR1cmVBc0J1ZmZlcihzaWduYXR1cmUpO1xuXHR2YXIgcGFyYW1CeXRlcyA9IGdldFBhcmFtQnl0ZXNGb3JBbGcoYWxnKTtcblxuXHQvLyB0aGUgREVSIGVuY29kZWQgcGFyYW0gc2hvdWxkIGF0IG1vc3QgYmUgdGhlIHBhcmFtIHNpemUsIHBsdXMgYSBwYWRkaW5nXG5cdC8vIHplcm8sIHNpbmNlIGR1ZSB0byBiZWluZyBhIHNpZ25lZCBpbnRlZ2VyXG5cdHZhciBtYXhFbmNvZGVkUGFyYW1MZW5ndGggPSBwYXJhbUJ5dGVzICsgMTtcblxuXHR2YXIgaW5wdXRMZW5ndGggPSBzaWduYXR1cmUubGVuZ3RoO1xuXG5cdHZhciBvZmZzZXQgPSAwO1xuXHRpZiAoc2lnbmF0dXJlW29mZnNldCsrXSAhPT0gRU5DT0RFRF9UQUdfU0VRKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBleHBlY3RlZCBcInNlcVwiJyk7XG5cdH1cblxuXHR2YXIgc2VxTGVuZ3RoID0gc2lnbmF0dXJlW29mZnNldCsrXTtcblx0aWYgKHNlcUxlbmd0aCA9PT0gKE1BWF9PQ1RFVCB8IDEpKSB7XG5cdFx0c2VxTGVuZ3RoID0gc2lnbmF0dXJlW29mZnNldCsrXTtcblx0fVxuXG5cdGlmIChpbnB1dExlbmd0aCAtIG9mZnNldCA8IHNlcUxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJzZXFcIiBzcGVjaWZpZWQgbGVuZ3RoIG9mIFwiJyArIHNlcUxlbmd0aCArICdcIiwgb25seSBcIicgKyAoaW5wdXRMZW5ndGggLSBvZmZzZXQpICsgJ1wiIHJlbWFpbmluZycpO1xuXHR9XG5cblx0aWYgKHNpZ25hdHVyZVtvZmZzZXQrK10gIT09IEVOQ09ERURfVEFHX0lOVCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgZXhwZWN0ZWQgXCJpbnRcIiBmb3IgXCJyXCInKTtcblx0fVxuXG5cdHZhciByTGVuZ3RoID0gc2lnbmF0dXJlW29mZnNldCsrXTtcblxuXHRpZiAoaW5wdXRMZW5ndGggLSBvZmZzZXQgLSAyIDwgckxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJyXCIgc3BlY2lmaWVkIGxlbmd0aCBvZiBcIicgKyByTGVuZ3RoICsgJ1wiLCBvbmx5IFwiJyArIChpbnB1dExlbmd0aCAtIG9mZnNldCAtIDIpICsgJ1wiIGF2YWlsYWJsZScpO1xuXHR9XG5cblx0aWYgKG1heEVuY29kZWRQYXJhbUxlbmd0aCA8IHJMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1wiclwiIHNwZWNpZmllZCBsZW5ndGggb2YgXCInICsgckxlbmd0aCArICdcIiwgbWF4IG9mIFwiJyArIG1heEVuY29kZWRQYXJhbUxlbmd0aCArICdcIiBpcyBhY2NlcHRhYmxlJyk7XG5cdH1cblxuXHR2YXIgck9mZnNldCA9IG9mZnNldDtcblx0b2Zmc2V0ICs9IHJMZW5ndGg7XG5cblx0aWYgKHNpZ25hdHVyZVtvZmZzZXQrK10gIT09IEVOQ09ERURfVEFHX0lOVCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgZXhwZWN0ZWQgXCJpbnRcIiBmb3IgXCJzXCInKTtcblx0fVxuXG5cdHZhciBzTGVuZ3RoID0gc2lnbmF0dXJlW29mZnNldCsrXTtcblxuXHRpZiAoaW5wdXRMZW5ndGggLSBvZmZzZXQgIT09IHNMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1wic1wiIHNwZWNpZmllZCBsZW5ndGggb2YgXCInICsgc0xlbmd0aCArICdcIiwgZXhwZWN0ZWQgXCInICsgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0KSArICdcIicpO1xuXHR9XG5cblx0aWYgKG1heEVuY29kZWRQYXJhbUxlbmd0aCA8IHNMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1wic1wiIHNwZWNpZmllZCBsZW5ndGggb2YgXCInICsgc0xlbmd0aCArICdcIiwgbWF4IG9mIFwiJyArIG1heEVuY29kZWRQYXJhbUxlbmd0aCArICdcIiBpcyBhY2NlcHRhYmxlJyk7XG5cdH1cblxuXHR2YXIgc09mZnNldCA9IG9mZnNldDtcblx0b2Zmc2V0ICs9IHNMZW5ndGg7XG5cblx0aWYgKG9mZnNldCAhPT0gaW5wdXRMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRvIGNvbnN1bWUgZW50aXJlIGJ1ZmZlciwgYnV0IFwiJyArIChpbnB1dExlbmd0aCAtIG9mZnNldCkgKyAnXCIgYnl0ZXMgcmVtYWluJyk7XG5cdH1cblxuXHR2YXIgclBhZGRpbmcgPSBwYXJhbUJ5dGVzIC0gckxlbmd0aCxcblx0XHRzUGFkZGluZyA9IHBhcmFtQnl0ZXMgLSBzTGVuZ3RoO1xuXG5cdHZhciBkc3QgPSBCdWZmZXIuYWxsb2NVbnNhZmUoclBhZGRpbmcgKyByTGVuZ3RoICsgc1BhZGRpbmcgKyBzTGVuZ3RoKTtcblxuXHRmb3IgKG9mZnNldCA9IDA7IG9mZnNldCA8IHJQYWRkaW5nOyArK29mZnNldCkge1xuXHRcdGRzdFtvZmZzZXRdID0gMDtcblx0fVxuXHRzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgck9mZnNldCArIE1hdGgubWF4KC1yUGFkZGluZywgMCksIHJPZmZzZXQgKyByTGVuZ3RoKTtcblxuXHRvZmZzZXQgPSBwYXJhbUJ5dGVzO1xuXG5cdGZvciAodmFyIG8gPSBvZmZzZXQ7IG9mZnNldCA8IG8gKyBzUGFkZGluZzsgKytvZmZzZXQpIHtcblx0XHRkc3Rbb2Zmc2V0XSA9IDA7XG5cdH1cblx0c2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIHNPZmZzZXQgKyBNYXRoLm1heCgtc1BhZGRpbmcsIDApLCBzT2Zmc2V0ICsgc0xlbmd0aCk7XG5cblx0ZHN0ID0gZHN0LnRvU3RyaW5nKCdiYXNlNjQnKTtcblx0ZHN0ID0gYmFzZTY0VXJsKGRzdCk7XG5cblx0cmV0dXJuIGRzdDtcbn1cblxuZnVuY3Rpb24gY291bnRQYWRkaW5nKGJ1Ziwgc3RhcnQsIHN0b3ApIHtcblx0dmFyIHBhZGRpbmcgPSAwO1xuXHR3aGlsZSAoc3RhcnQgKyBwYWRkaW5nIDwgc3RvcCAmJiBidWZbc3RhcnQgKyBwYWRkaW5nXSA9PT0gMCkge1xuXHRcdCsrcGFkZGluZztcblx0fVxuXG5cdHZhciBuZWVkc1NpZ24gPSBidWZbc3RhcnQgKyBwYWRkaW5nXSA+PSBNQVhfT0NURVQ7XG5cdGlmIChuZWVkc1NpZ24pIHtcblx0XHQtLXBhZGRpbmc7XG5cdH1cblxuXHRyZXR1cm4gcGFkZGluZztcbn1cblxuZnVuY3Rpb24gam9zZVRvRGVyKHNpZ25hdHVyZSwgYWxnKSB7XG5cdHNpZ25hdHVyZSA9IHNpZ25hdHVyZUFzQnVmZmVyKHNpZ25hdHVyZSk7XG5cdHZhciBwYXJhbUJ5dGVzID0gZ2V0UGFyYW1CeXRlc0ZvckFsZyhhbGcpO1xuXG5cdHZhciBzaWduYXR1cmVCeXRlcyA9IHNpZ25hdHVyZS5sZW5ndGg7XG5cdGlmIChzaWduYXR1cmVCeXRlcyAhPT0gcGFyYW1CeXRlcyAqIDIpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdcIicgKyBhbGcgKyAnXCIgc2lnbmF0dXJlcyBtdXN0IGJlIFwiJyArIHBhcmFtQnl0ZXMgKiAyICsgJ1wiIGJ5dGVzLCBzYXcgXCInICsgc2lnbmF0dXJlQnl0ZXMgKyAnXCInKTtcblx0fVxuXG5cdHZhciByUGFkZGluZyA9IGNvdW50UGFkZGluZyhzaWduYXR1cmUsIDAsIHBhcmFtQnl0ZXMpO1xuXHR2YXIgc1BhZGRpbmcgPSBjb3VudFBhZGRpbmcoc2lnbmF0dXJlLCBwYXJhbUJ5dGVzLCBzaWduYXR1cmUubGVuZ3RoKTtcblx0dmFyIHJMZW5ndGggPSBwYXJhbUJ5dGVzIC0gclBhZGRpbmc7XG5cdHZhciBzTGVuZ3RoID0gcGFyYW1CeXRlcyAtIHNQYWRkaW5nO1xuXG5cdHZhciByc0J5dGVzID0gMSArIDEgKyByTGVuZ3RoICsgMSArIDEgKyBzTGVuZ3RoO1xuXG5cdHZhciBzaG9ydExlbmd0aCA9IHJzQnl0ZXMgPCBNQVhfT0NURVQ7XG5cblx0dmFyIGRzdCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgoc2hvcnRMZW5ndGggPyAyIDogMykgKyByc0J5dGVzKTtcblxuXHR2YXIgb2Zmc2V0ID0gMDtcblx0ZHN0W29mZnNldCsrXSA9IEVOQ09ERURfVEFHX1NFUTtcblx0aWYgKHNob3J0TGVuZ3RoKSB7XG5cdFx0Ly8gQml0IDggaGFzIHZhbHVlIFwiMFwiXG5cdFx0Ly8gYml0cyA3LTEgZ2l2ZSB0aGUgbGVuZ3RoLlxuXHRcdGRzdFtvZmZzZXQrK10gPSByc0J5dGVzO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJpdCA4IG9mIGZpcnN0IG9jdGV0IGhhcyB2YWx1ZSBcIjFcIlxuXHRcdC8vIGJpdHMgNy0xIGdpdmUgdGhlIG51bWJlciBvZiBhZGRpdGlvbmFsIGxlbmd0aCBvY3RldHMuXG5cdFx0ZHN0W29mZnNldCsrXSA9IE1BWF9PQ1RFVFx0fCAxO1xuXHRcdC8vIGxlbmd0aCwgYmFzZSAyNTZcblx0XHRkc3Rbb2Zmc2V0KytdID0gcnNCeXRlcyAmIDB4ZmY7XG5cdH1cblx0ZHN0W29mZnNldCsrXSA9IEVOQ09ERURfVEFHX0lOVDtcblx0ZHN0W29mZnNldCsrXSA9IHJMZW5ndGg7XG5cdGlmIChyUGFkZGluZyA8IDApIHtcblx0XHRkc3Rbb2Zmc2V0KytdID0gMDtcblx0XHRvZmZzZXQgKz0gc2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIDAsIHBhcmFtQnl0ZXMpO1xuXHR9IGVsc2Uge1xuXHRcdG9mZnNldCArPSBzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgclBhZGRpbmcsIHBhcmFtQnl0ZXMpO1xuXHR9XG5cdGRzdFtvZmZzZXQrK10gPSBFTkNPREVEX1RBR19JTlQ7XG5cdGRzdFtvZmZzZXQrK10gPSBzTGVuZ3RoO1xuXHRpZiAoc1BhZGRpbmcgPCAwKSB7XG5cdFx0ZHN0W29mZnNldCsrXSA9IDA7XG5cdFx0c2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIHBhcmFtQnl0ZXMpO1xuXHR9IGVsc2Uge1xuXHRcdHNpZ25hdHVyZS5jb3B5KGRzdCwgb2Zmc2V0LCBwYXJhbUJ5dGVzICsgc1BhZGRpbmcpO1xuXHR9XG5cblx0cmV0dXJuIGRzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRlclRvSm9zZTogZGVyVG9Kb3NlLFxuXHRqb3NlVG9EZXI6IGpvc2VUb0RlclxufTtcbiJdLCJuYW1lcyI6WyJCdWZmZXIiLCJyZXF1aXJlIiwiZ2V0UGFyYW1CeXRlc0ZvckFsZyIsIk1BWF9PQ1RFVCIsIkNMQVNTX1VOSVZFUlNBTCIsIlBSSU1JVElWRV9CSVQiLCJUQUdfU0VRIiwiVEFHX0lOVCIsIkVOQ09ERURfVEFHX1NFUSIsIkVOQ09ERURfVEFHX0lOVCIsImJhc2U2NFVybCIsImJhc2U2NCIsInJlcGxhY2UiLCJzaWduYXR1cmVBc0J1ZmZlciIsInNpZ25hdHVyZSIsImlzQnVmZmVyIiwiZnJvbSIsIlR5cGVFcnJvciIsImRlclRvSm9zZSIsImFsZyIsInBhcmFtQnl0ZXMiLCJtYXhFbmNvZGVkUGFyYW1MZW5ndGgiLCJpbnB1dExlbmd0aCIsImxlbmd0aCIsIm9mZnNldCIsIkVycm9yIiwic2VxTGVuZ3RoIiwickxlbmd0aCIsInJPZmZzZXQiLCJzTGVuZ3RoIiwic09mZnNldCIsInJQYWRkaW5nIiwic1BhZGRpbmciLCJkc3QiLCJhbGxvY1Vuc2FmZSIsImNvcHkiLCJNYXRoIiwibWF4IiwibyIsInRvU3RyaW5nIiwiY291bnRQYWRkaW5nIiwiYnVmIiwic3RhcnQiLCJzdG9wIiwicGFkZGluZyIsIm5lZWRzU2lnbiIsImpvc2VUb0RlciIsInNpZ25hdHVyZUJ5dGVzIiwicnNCeXRlcyIsInNob3J0TGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\nfunction getParamSize(keySize) {\n    var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);\n    return result;\n}\nvar paramBytesForAlg = {\n    ES256: getParamSize(256),\n    ES384: getParamSize(384),\n    ES512: getParamSize(521)\n};\nfunction getParamBytesForAlg(alg) {\n    var paramBytes = paramBytesForAlg[alg];\n    if (paramBytes) {\n        return paramBytes;\n    }\n    throw new Error('Unknown algorithm \"' + alg + '\"');\n}\nmodule.exports = getParamBytesForAlg;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvcGFyYW0tYnl0ZXMtZm9yLWFsZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLGFBQWFDLE9BQU87SUFDNUIsSUFBSUMsU0FBUyxDQUFDLFVBQVcsSUFBSyxLQUFNRCxDQUFBQSxVQUFVLE1BQU0sSUFBSSxJQUFJO0lBQzVELE9BQU9DO0FBQ1I7QUFFQSxJQUFJQyxtQkFBbUI7SUFDdEJDLE9BQU9KLGFBQWE7SUFDcEJLLE9BQU9MLGFBQWE7SUFDcEJNLE9BQU9OLGFBQWE7QUFDckI7QUFFQSxTQUFTTyxvQkFBb0JDLEdBQUc7SUFDL0IsSUFBSUMsYUFBYU4sZ0JBQWdCLENBQUNLLElBQUk7SUFDdEMsSUFBSUMsWUFBWTtRQUNmLE9BQU9BO0lBQ1I7SUFFQSxNQUFNLElBQUlDLE1BQU0sd0JBQXdCRixNQUFNO0FBQy9DO0FBRUFHLE9BQU9DLE9BQU8sR0FBR0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGVzZXR1cC5kZXYvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvcGFyYW0tYnl0ZXMtZm9yLWFsZy5qcz83NDIxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ2V0UGFyYW1TaXplKGtleVNpemUpIHtcblx0dmFyIHJlc3VsdCA9ICgoa2V5U2l6ZSAvIDgpIHwgMCkgKyAoa2V5U2l6ZSAlIDggPT09IDAgPyAwIDogMSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBwYXJhbUJ5dGVzRm9yQWxnID0ge1xuXHRFUzI1NjogZ2V0UGFyYW1TaXplKDI1NiksXG5cdEVTMzg0OiBnZXRQYXJhbVNpemUoMzg0KSxcblx0RVM1MTI6IGdldFBhcmFtU2l6ZSg1MjEpXG59O1xuXG5mdW5jdGlvbiBnZXRQYXJhbUJ5dGVzRm9yQWxnKGFsZykge1xuXHR2YXIgcGFyYW1CeXRlcyA9IHBhcmFtQnl0ZXNGb3JBbGdbYWxnXTtcblx0aWYgKHBhcmFtQnl0ZXMpIHtcblx0XHRyZXR1cm4gcGFyYW1CeXRlcztcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcignVW5rbm93biBhbGdvcml0aG0gXCInICsgYWxnICsgJ1wiJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UGFyYW1CeXRlc0ZvckFsZztcbiJdLCJuYW1lcyI6WyJnZXRQYXJhbVNpemUiLCJrZXlTaXplIiwicmVzdWx0IiwicGFyYW1CeXRlc0ZvckFsZyIsIkVTMjU2IiwiRVMzODQiLCJFUzUxMiIsImdldFBhcmFtQnl0ZXNGb3JBbGciLCJhbGciLCJwYXJhbUJ5dGVzIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\n");

/***/ })

};
;