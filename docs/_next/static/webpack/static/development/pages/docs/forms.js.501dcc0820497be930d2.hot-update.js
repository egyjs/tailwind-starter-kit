webpackHotUpdate("static\\development\\pages\\docs\\forms.js",{

/***/ "./pages/docs/forms.jsx":
/*!******************************!*\
  !*** ./pages/docs/forms.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/Layout */ "./containers/Layout.jsx");
/* harmony import */ var _components_Headings_H2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Headings/H2 */ "./components/Headings/H2.jsx");
/* harmony import */ var _components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Headings/H4 */ "./components/Headings/H4.jsx");
/* harmony import */ var _components_Text_Lead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Text/Lead */ "./components/Text/Lead.jsx");
/* harmony import */ var _components_Text_P__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Text/P */ "./components/Text/P.jsx");
/* harmony import */ var _components_CodeCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CodeCard */ "./components/CodeCard.jsx");
/* harmony import */ var _components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ExampleSection */ "./components/ExampleSection.jsx");
var _jsxFileName = "D:\\windmill\\pages\\docs\\forms.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var simpleInputCode = "\n<input class=\"border rounded-lg px-4 h-12 text-gray-700 placeholder-gray-600 text-lg w-full focus:shadow-outline mb-2\" type=\"text\" placeholder=\"Large input\">\n<input class=\"border rounded-lg px-3 h-10 text-gray-700 placeholder-gray-600 text-base w-full focus:shadow-outline mb-2\" type=\"text\" placeholder=\"Regular input\">\n<input class=\"border rounded-lg px-2 h-8 text-gray-700 placeholder-gray-600 text-sm focus:shadow-outline w-full\" type=\"text\" placeholder=\"Small input\">\n";
var simpleSelectCode = "\n<div class=\"relative inline-block text-gray-700 w-full\">\n  <select class=\"appearance-none border rounded-lg pl-3 pr-6 h-10  placeholder-gray-600 text-base w-full focus:shadow-outline\" placeholder=\"Regular input\">\n    <option>A regular sized select input</option>\n    <option>Another option</option>\n    <option>And one more</option>\n  </select>\n  <div class=\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2\">\n    <svg class=\"fill-current w-4 h-4\" viewBox=\"0 0 20 20\"><path d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n  </div>\n</div>\n";
var checkboxCode = "\n<label class=\"text-gray-700\">\n  <input type=\"checkbox\" value=\"\">\n  <span class=\"ml-1\">Lorem ipsum dolor sit</span>\n</label>\n";
var radioCode = "\n<label class=\"text-gray-700\">\n  <input type=\"radio\" value=\"\">\n  <span class=\"ml-1\">Lorem ipsum dolor sit</span>\n</label>\n";
var textareaCode = "\n<textarea class=\"border rounded-lg px-3 py-2 h-16 text-gray-700 placeholder-gray-600 text-base w-full focus:shadow-outline\"></textarea>\n";
var labelOverInputCode = "\n<div class=\"text-gray-700\">\n  <label class=\"block mb-1\" for=\"forms-labelOverInputCode\">Full name</label>\n  <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" placeholder=\"Regular input\" id=\"forms-labelOverInputCode\">\n</div>\n";
var labelLeftInputCode = "\n<div class=\"text-gray-700 md:flex md:items-center\">\n  <div class=\"mb-1 md:mb-0 md:w-1/3\">\n    <label for=\"forms-labelLeftInputCode\">Full name</label>\n  </div>\n  <div class=\"md:w-2/3 md:flex-grow\">\n    <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" placeholder=\"Regular input\" id=\"forms-labelLeftInputCode\">\n  </div>\n</div>\n";
var formGridCode = "\n<form class=\"text-gray-700 space-y-4\">\n  <div class=\"flex flex-wrap\">\n    <div class=\"w-full\">\n      <label class=\"block mb-1\" for=\"formGridCode_card\">Card number</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"formGridCode_card\">\n    </div>\n  </div>\n  <div class=\"flex flex-wrap -mx-2 space-y-4 md:space-y-0\">\n    <div class=\"w-full md:w-1/2 px-2\">\n      <label class=\"block mb-1\" for=\"formGridCode_name\">First name</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"formGridCode_name\">\n    </div>\n    <div class=\"w-full md:w-1/2 px-2\">\n      <label class=\"block mb-1\" for=\"formGridCode_last\">Last name</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"formGridCode_last\">\n    </div>\n  </div>\n  <div class=\"flex flex-wrap -mx-2 space-y-4 md:space-y-0\">\n    <div class=\"w-full md:w-1/3 px-2\">\n      <label class=\"block mb-1\" for=\"formGridCode_month\">Month</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"formGridCode_month\">\n    </div>\n    <div class=\"w-full md:w-1/3 px-2\">\n      <label class=\"block mb-1\" for=\"formGridCode_year\">Year</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"formGridCode_year\">\n    </div>\n    <div class=\"w-full md:w-1/3 px-2\">\n      <label class=\"block mb-1\" for=\"formGridCode_cvc\">CVC</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"formGridCode_cvc\">\n    </div>\n  </div>\n</form>\n";
var iconRightInputCode = "\n<div class=\"relative text-gray-700\">\n  <input class=\"border rounded-lg pl-3 pr-8 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" placeholder=\"Regular input\">\n  <div class=\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2\">\n    <svg class=\"fill-current w-4 h-4\" viewBox=\"0 0 20 20\"><path d=\"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n  </div>\n</div>\n";
var iconLeftInputCode = "\n<div class=\"relative text-gray-700\">\n  <input class=\"border rounded-lg pr-3 pl-8 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" placeholder=\"Regular input\">\n  <div class=\"pointer-events-none absolute inset-y-0 left-0 flex items-center px-2\">\n    <svg class=\"fill-current w-4 h-4\" viewBox=\"0 0 20 20\"><path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"></path><path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"></path></svg>\n  </div>\n</div>\n";
var coloredIconInputCode = "\n<div class=\"relative text-gray-700\">\n  <input class=\"border rounded-lg pr-3 pl-8 h-10 placeholder-gray-600 text-base w-full focus:border-purple-700 focus:border-2\" type=\"text\" placeholder=\"Regular input\">\n  <div class=\"pointer-events-none absolute inset-y-0 left-0 flex items-center px-2\">\n    <svg class=\"fill-current w-4 h-4\" viewBox=\"0 0 20 20\"><path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"></path><path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"></path></svg>\n  </div>\n</div>\n";

function Forms() {
  return __jsx(_containers_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx(_components_Headings_H2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "Forms"), __jsx(_components_Text_Lead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, "Form components using Tailwind CSS to speed up your project."), __jsx("hr", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "simple-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, "Simple input"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "A simple input component."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: simpleInputCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "simple-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Simple select"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, "A simple select component."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: simpleSelectCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, "Checkbox"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, "A checkbox component. If you're looking for a more elaborate checkbox, I recommend using", ' ', __jsx("a", {
    className: "font-bold underline hover:text-gray-600",
    href: "https://tailwindcss-custom-forms.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, "Custom Forms"), ", an official library to extend the look of general form elements with custom CSS."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: checkboxCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, "Radio"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, "A radio component. If you're looking for a more elaborate radio button, I recommend using", ' ', __jsx("a", {
    className: "font-bold underline hover:text-gray-600",
    href: "https://tailwindcss-custom-forms.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, "Custom Forms"), ", an official library to extend the look of general form elements with custom CSS."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: radioCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "textarea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, "Textarea"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, "A simple textarea component."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: textareaCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "labelOverInputCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, "Label over"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, "A simple input component with label over."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: labelOverInputCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "labelLeftInputCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, "Label left"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, "A responsive form group with label and input, with left text on desktop and over the input on mobile."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: labelLeftInputCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "formGridCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, "Form grid"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, "A responsive form grid."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: formGridCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "iconRightInputCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, "Input with icon right"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, "Input with SVG icon right."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: iconRightInputCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "iconLeftInputCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, "Input with icon left"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }, "Input with SVG icon left."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: iconLeftInputCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "coloredIconInputCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, "Change icon color"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, "On input focus, change color of the icon (or: how to work with groups in Tailwind)."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: coloredIconInputCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=forms.js.501dcc0820497be930d2.hot-update.js.map