/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AddContributorForm/AddContributorForm.js":
/*!*****************************************************************!*\
  !*** ./src/components/AddContributorForm/AddContributorForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddContributorForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddContributorForm.module.scss */ "./src/components/AddContributorForm/AddContributorForm.module.scss");
/* harmony import */ var _FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormInput/FormInput */ "./src/components/FormInput/FormInput.js");
/* harmony import */ var _utilities_admin_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/admin-services */ "./src/utilities/admin-services.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function AddContributorForm() {
  const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    "name": ""
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchCategories() {
      return _fetchCategories.apply(this, arguments);
    }
    function _fetchCategories() {
      _fetchCategories = _asyncToGenerator(function* () {
        const response = yield fetch('/api/categories');
        const cats = yield response.json();
        console.log(cats);
        setCategories(cats);
      });
      return _fetchCategories.apply(this, arguments);
    }
    fetchCategories();
  }, []);
  const inputs = [{
    id: "submission-contributor",
    name: "name",
    type: "name",
    placeholder: "john joe",
    errorMessage: "Ask Mr. Terry!",
    label: "Contributor Name: ",
    required: true
  }];
  const handleInputChange = e => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      e.preventDefault();
      const formData = _objectSpread({}, values);
      console.log(formData);
      delete formData.confirm;
      console.log(formData);
      const contributor = yield (0,_utilities_admin_services__WEBPACK_IMPORTED_MODULE_3__.createContributor)(formData);
      alert("".concat(contributor.name, " has been added"));
    });
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "ContributorForm"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "header"
  }, "Add Contributor"), /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    onSubmit: handleSubmit
  }, inputs.map(input => /*#__PURE__*/React.createElement(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    key: input.id
  }, input, {
    value: values[input.contributor],
    handleInputChange: handleInputChange
  }))), /*#__PURE__*/React.createElement("button", {
    formMethod: "dialog"
  }, "Submit")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddContributorForm);

/***/ }),

/***/ "./src/components/Archive/Archive.js":
/*!*******************************************!*\
  !*** ./src/components/Archive/Archive.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormInput_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormInput/FormInput */ "./src/components/FormInput/FormInput.js");
/* harmony import */ var _utilities_imageUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/imageUpload */ "./src/utilities/imageUpload.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





// create a model for archive
// create a controller function in admin for handling .create()
// create a route at '/api/admin/pdf' for sending the submission along to the controller

function Archive() {
  const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: '',
    pdfUrl: ''
  });
  const inputs = [{
    id: "edition-title",
    name: "title",
    type: "text",
    placeholder: "Add name of edition here",
    errorMessage: "Ask Mr. Terry",
    label: "Title: ",
    required: true
  }, {
    id: "pdf-url",
    name: "pdfUrl",
    type: "text",
    placeholder: "Paste published url here",
    errorMessage: "Ask Mr. Terry",
    label: "url: ",
    required: true
  }];
  const handleInputChange = e => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      e.preventDefault();
      let formData = new FormData();
      console.log('values = ' + values);
      formData.append('file', file);
      for (let key in values) {
        formData.append(key, values[key]);
      }
      const data = yield (0,_utilities_imageUpload__WEBPACK_IMPORTED_MODULE_2__.submitPdf)(formData);
      console.log(data.data);
      const newEdition = data.data;
      alert("".concat(newEdition.title, " has been submitted!"));
    });
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "header"
  }, "Archive Submissions"), /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    onSubmit: handleSubmit
  }, inputs.map(input => /*#__PURE__*/React.createElement(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: input.id
  }, input, {
    value: values[input.name],
    handleInputChange: handleInputChange
  }))), /*#__PURE__*/React.createElement("button", {
    formMethod: "dialog"
  }, "Submit")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Archive);

/***/ }),

/***/ "./src/components/ArticlesList/ArticlesList.js":
/*!*****************************************************!*\
  !*** ./src/components/ArticlesList/ArticlesList.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


// 1. fetch articles by category use a map to complete the next steps. For each category:
// 2. Create a splice of the the articles by category from index 0-4
// 3. Each of the articles should display using similar styling to the Category display.
function ArticlesList(_ref) {
  let {
    category
  } = _ref;
  const [categoryArticles, setCategoryArticles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchArticlesByCategory(_x) {
      return _fetchArticlesByCategory.apply(this, arguments);
    }
    function _fetchArticlesByCategory() {
      _fetchArticlesByCategory = _asyncToGenerator(function* (id) {
        const response = yield fetch("/api/categories/articles/".concat(id));
        let arts = yield response.json();
        if (arts.length > 5) {
          arts = arts.slice(0, 4);
        }
        setCategoryArticles(arts);
        /* 1. create a route and controller function for finding articless by category. 2. inside of the div for article, add another div (so that it is in the same column, and have it extract the contributor's articles. 3. fetch the articles by category, display them in the aside. 4. set parent div display to flex and row */
      });
      return _fetchArticlesByCategory.apply(this, arguments);
    }
    fetchArticlesByCategory(category._id);
  }, [category]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (categoryArticles.length > 0) {
      console.log(categoryArticles);
    }
  }, [categoryArticles]);
  function trimText(String) {
    let arr = String.split('');
    let arr2 = arr.slice(0, 65);
    arr2.push('...');
    let arr3 = arr2.join('');
    return arr3.toString();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "category",
    key: category
  }, /*#__PURE__*/React.createElement("h1", {
    className: "categoryHeader"
  }, category.category), categoryArticles.map(_ref2 => {
    let {
      title,
      imageUrl,
      contributor,
      contributor2,
      text,
      _id
    } = _ref2;
    return /*#__PURE__*/React.createElement("div", {
      className: "articleThumbnail"
    }, /*#__PURE__*/React.createElement("img", {
      className: "articleImage",
      src: imageUrl
    }), /*#__PURE__*/React.createElement("h2", {
      className: "articleTitle "
    }, title), /*#__PURE__*/React.createElement("h2", {
      className: "articleContributor"
    }, "by ", contributor2 ? "".concat(contributor, " and ").concat(contributor2) : "".concat(contributor)), /*#__PURE__*/React.createElement("p", {
      className: "articleText"
    }, trimText(text)), /*#__PURE__*/React.createElement("button", {
      className: "continueReading"
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "continueReadingLink",
      key: "Article",
      to: "/Article/".concat(_id)
    }, "Continue Reading...")));
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlesList);

/***/ }),

/***/ "./src/components/CategoryArticleLists/CategoryArticleLists.js":
/*!*********************************************************************!*\
  !*** ./src/components/CategoryArticleLists/CategoryArticleLists.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArticlesList_ArticlesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ArticlesList/ArticlesList */ "./src/components/ArticlesList/ArticlesList.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


// 1. fetch articles by category use a map to complete the next steps. For each category:
// 2. Create a splice of the the articles by category from index 0-4
// 3. Each of the articles should display using similar styling to the Category display.
function CategoryListsComponent() {
  const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchCategories() {
      return _fetchCategories.apply(this, arguments);
    }
    function _fetchCategories() {
      _fetchCategories = _asyncToGenerator(function* () {
        const response = yield fetch('/api/categories');
        const cats = yield response.json();
        setCategories(cats);
      });
      return _fetchCategories.apply(this, arguments);
    }
    fetchCategories();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "catArtList"
  }, categories.map(category => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_ArticlesList_ArticlesList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    category: category
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryListsComponent);

/***/ }),

/***/ "./src/components/ContributorsList/ContributorsList.js":
/*!*************************************************************!*\
  !*** ./src/components/ContributorsList/ContributorsList.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router/routes */ "./src/router/routes.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function ContributorList(_ref) {
  let {
    setContributor
  } = _ref;
  const [contributors, setContributors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const Contributor = _router_routes__WEBPACK_IMPORTED_MODULE_1__["default"][4];
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchContributors() {
      return _fetchContributors.apply(this, arguments);
    }
    function _fetchContributors() {
      _fetchContributors = _asyncToGenerator(function* () {
        const response = yield fetch('/api/contributors');
        const conts = yield response.json();
        setContributors(conts);
      });
      return _fetchContributors.apply(this, arguments);
    }
    fetchContributors();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [contributors]);
  return /*#__PURE__*/React.createElement("div", {
    className: "contributors"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "sectionHeader"
  }, "Knights of the Round Table"), /*#__PURE__*/React.createElement("div", {
    className: "contributorslist"
  }, contributors.map(_ref2 => {
    let {
      name,
      _id
    } = _ref2;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "contributor",
      key: Contributor.key,
      to: "/Contributor/".concat(_id)
    }, name);
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributorList);

/***/ }),

/***/ "./src/components/FeaturedArticle/FeaturedArticle.js":
/*!***********************************************************!*\
  !*** ./src/components/FeaturedArticle/FeaturedArticle.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function FeaturedArticle() {
  const [featuredArticle, setFeaturedArticle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [contributor, setContributor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchFeaturedArticle() {
      return _fetchFeaturedArticle.apply(this, arguments);
    }
    function _fetchFeaturedArticle() {
      _fetchFeaturedArticle = _asyncToGenerator(function* () {
        const response = yield fetch("/api/articles/show/featured");
        const art = yield response.json();
        setFeaturedArticle(art);
      });
      return _fetchFeaturedArticle.apply(this, arguments);
    }
    fetchFeaturedArticle();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Object.keys(featuredArticle).length > 0) {
      function fetchContributor(_x) {
        return _fetchContributor.apply(this, arguments);
      }
      function _fetchContributor() {
        _fetchContributor = _asyncToGenerator(function* (name) {
          const response = yield fetch("/api/contributors/name/".concat(encodeURIComponent(name)));
          const cont = yield response.json();
          setContributor(cont);
        });
        return _fetchContributor.apply(this, arguments);
      }
      fetchContributor(featuredArticle.contributor);
      function fetchCategory(_x2) {
        return _fetchCategory.apply(this, arguments);
      }
      function _fetchCategory() {
        _fetchCategory = _asyncToGenerator(function* (id) {
          const response = yield fetch("/api/categories/".concat(id));
          const cat = yield response.json();
          setCategory(cat.category);
        });
        return _fetchCategory.apply(this, arguments);
      }
      fetchCategory(featuredArticle.category);
    }
    if (featuredArticle.text === undefined) {
      console.log(featuredArticle.text);
    } else {
      console.log(featuredArticle.text);
      setText(trimText(featuredArticle.text));
    }
  }, [featuredArticle]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Object.keys(category).length > 0) {
      console.log('category = ' + category.category);
    }
  }, [category]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Object.keys(contributor).length > 0) {
      console.log(contributor);
    }
  }, [contributor]);
  function trimText(string) {
    console.log(string);
    let arr = string.split(' ');
    let arr2 = arr.slice(0, 65);
    arr2.splice(64, 1, "".concat(arr2[64], "..."));
    let arr3 = arr2.join(' ');
    return arr3.toString();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "FeaturedArticle"
  }, /*#__PURE__*/React.createElement("center", null, featuredArticle === {} ? /*#__PURE__*/React.createElement("h1", null, "Article loading...") : /*#__PURE__*/React.createElement("div", {
    className: "FeaturedArticleDisplay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "background"
  }, /*#__PURE__*/React.createElement("img", {
    src: featuredArticle.imageUrl
  })), /*#__PURE__*/React.createElement("div", {
    className: "display"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "articleTitle"
  }, featuredArticle.title), /*#__PURE__*/React.createElement("h3", {
    className: "articleContributor"
  }, "by ", featuredArticle.contributor), /*#__PURE__*/React.createElement("h3", {
    className: "articleCategory"
  }, "in ", category), /*#__PURE__*/React.createElement("p", {
    className: "articleText"
  }, text), /*#__PURE__*/React.createElement("button", {
    className: "continueReading"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "continueReadingLink",
    key: "Article",
    to: "/Article/".concat(featuredArticle._id)
  }, "Continue Reading..."))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedArticle);

/***/ }),

/***/ "./src/components/FormInput/FormInput.js":
/*!***********************************************!*\
  !*** ./src/components/FormInput/FormInput.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormInput_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInput.module.scss */ "./src/components/FormInput/FormInput.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const _excluded = ["label", "errorMessage", "handleInputChange", "id"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function FormInput(props) {
  const [isBlur, setIsBlur] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
      label,
      errorMessage,
      handleInputChange,
      id
    } = props,
    inputProps = _objectWithoutProperties(props, _excluded);
  const handleInputBlur = e => {
    setIsBlur(true);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id
  }, inputProps, {
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    blurred: isBlur.toString(),
    onFocus: () => inputProps.name === 'confirm' && setIsBlur(true)
  })));
}

/***/ }),

/***/ "./src/components/HotOffThePress/HotOffThePress.js":
/*!*********************************************************!*\
  !*** ./src/components/HotOffThePress/HotOffThePress.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



// possibly, instead of sending a link to the Url, save it in a folder and send the pathname to the backend.

function HotOffThePress(_ref) {
  let {
    color
  } = _ref;
  const [archive, setArchive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchMostRecentArchive() {
      return _fetchMostRecentArchive.apply(this, arguments);
    }
    function _fetchMostRecentArchive() {
      _fetchMostRecentArchive = _asyncToGenerator(function* () {
        const response = yield fetch('/api/archives/index/hotOffThePress');
        const arch = yield response.json();
        setArchive(arch);
      });
      return _fetchMostRecentArchive.apply(this, arguments);
    }
    fetchMostRecentArchive();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Object.keys(archive).length > 0) {
      console.log(archive);
    }
  }, [archive]);
  return /*#__PURE__*/React.createElement("div", {
    className: "hotOffThePress"
  }, /*#__PURE__*/React.createElement("div", {
    className: color
  }, /*#__PURE__*/React.createElement("h1", {
    className: "sectionHeader"
  }, "Hot Off the Press"), /*#__PURE__*/React.createElement("p", null, "Extra! Extra! Read all about it!"), /*#__PURE__*/React.createElement("p", null, "Checkout our most recent print edition: "), /*#__PURE__*/React.createElement("h1", null, archive.title), /*#__PURE__*/React.createElement("object", {
    className: "pdf",
    data: archive.pdfUrl,
    type: "application/pdf",
    width: "50%",
    height: "985px"
  }), /*#__PURE__*/React.createElement("button", {
    className: "continueReading"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "continueReadingLink",
    key: "Press",
    to: "/Press"
  }, "Browse All Previous Editions"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HotOffThePress);

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/routes */ "./src/router/routes.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function NavBar() {
  const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const Category = _router_routes__WEBPACK_IMPORTED_MODULE_2__["default"][3];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchCategories() {
      return _fetchCategories.apply(this, arguments);
    }
    function _fetchCategories() {
      _fetchCategories = _asyncToGenerator(function* () {
        const response = yield fetch('/api/categories');
        const cats = yield response.json();
        setCategories(cats);
      });
      return _fetchCategories.apply(this, arguments);
    }
    fetchCategories();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "Nav"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "Home",
    key: "Home",
    to: "/"
  }, " Knightly News "), categories.map(_ref => {
    let {
      category,
      _id
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "categories",
      key: Category.key,
      to: "/Category/".concat(_id)
    }, category);
  })));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/SubmitArticleForm/SubmitArticleForm.js":
/*!***************************************************************!*\
  !*** ./src/components/SubmitArticleForm/SubmitArticleForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubmitArticle_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitArticle.module.scss */ "./src/components/SubmitArticleForm/SubmitArticle.module.scss");
/* harmony import */ var _FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormInput/FormInput */ "./src/components/FormInput/FormInput.js");
/* harmony import */ var _utilities_imageUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/imageUpload */ "./src/utilities/imageUpload.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






// import { submit } from '../../utilities/admin-api'

function SubmitArticleForm() {
  const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [contributors, setContributors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [selectedContributor, setSelectedContributor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [selectedContributor2, setSelectedContributor2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [selectedFeature, setSelectedFeature] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: '',
    contributor: '',
    contributor2: '',
    category: '',
    featured: '',
    text: '',
    file: ''
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchCategories() {
      return _fetchCategories.apply(this, arguments);
    }
    function _fetchCategories() {
      _fetchCategories = _asyncToGenerator(function* () {
        const response = yield fetch('/api/categories');
        const cats = yield response.json();
        console.log(cats);
        setCategories(cats);
      });
      return _fetchCategories.apply(this, arguments);
    }
    fetchCategories();
    function fetchContributors() {
      return _fetchContributors.apply(this, arguments);
    }
    function _fetchContributors() {
      _fetchContributors = _asyncToGenerator(function* () {
        const response = yield fetch('/api/contributors');
        const conts = yield response.json();
        console.log(conts);
        setContributors(conts);
      });
      return _fetchContributors.apply(this, arguments);
    }
    fetchContributors();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(selectedContributor);
  }, [selectedContributor]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(selectedFeature);
  }, [selectedFeature]);
  const inputs = [{
    id: "submission-title",
    name: "title",
    type: "text",
    placeholder: "Add title here",
    errorMessage: "Ask Mr. Terry",
    label: "Title: ",
    required: true
  }, {
    id: "submission-text",
    name: "text",
    type: "text",
    placeholder: "Add submission text here",
    errorMessage: "Ask Mr. Terry",
    label: "Text: "
  }];
  const imageInputProps = {
    id: "upload-image",
    name: "file",
    type: "file",
    accept: ".png, .jpg, .jpeg, .pdf",
    errorMessage: "File type must be .png, .jpeg, .jpg, or .pdf",
    label: "Article Image:"
  };
  const handleInputChange = e => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [e.target.name]: e.target.value
    }));
  };
  const handleCategoryChange = event => {
    console.log(event.target.value);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [event.target.name]: event.target.value
    }));
    setSelectedCategory(event.target.value);
  };
  const handleContributorChange = event => {
    console.log(event.target.value);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [event.target.name]: event.target.value
    }));
    setSelectedContributor(event.target.value);
  };
  const handleContributor2Change = event => {
    console.log(event.target.value);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [event.target.name]: event.target.value
    }));
    setSelectedContributor2(event.target.value);
  };
  const handleFeatureChange = event => {
    console.log(event.target.value);
    // setValues({ ...values, [event.target.name]: event.target.value }) 
    // // setSelectedFeature(event.target.value)
    // setSelectedFeature(event.target.value === 'true')
    const isFeatured = event.target.value === 'true'; // Convert to boolean
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      featured: isFeatured
    })); // Update "featured" in values
    setSelectedFeature(isFeatured);
  };
  const handleImageChange = e => {
    e.preventDefault();
    console.log(e.target.files);
    let reader = new FileReader();
    let thisFile = e.target.files[0];
    reader.onloadend = () => {
      setFile(thisFile);
    };
    reader.readAsDataURL(thisFile);
  };
  const handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      e.preventDefault();
      let formData = new FormData();
      console.log('values = ' + values);
      formData.append('file', file);
      for (let key in values) {
        formData.append(key, values[key]);
      }
      console.log('formData = ' + formData);
      const data = yield (0,_utilities_imageUpload__WEBPACK_IMPORTED_MODULE_3__.submit)(formData);
      console.log(data.data);
      const newArticle = data.data;
      alert("".concat(newArticle.title, " has been submitted!"));
      // navigate(`/Article/${newArticle._id}`)
    });
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "SubmissionForm"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "header"
  }, "Article Submissions"), /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, imageInputProps, {
    handleInputChange: handleImageChange
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: "categories"
  }, "Category:"), /*#__PURE__*/React.createElement("select", {
    id: "category-select",
    name: "category",
    value: selectedCategory,
    onChange: handleCategoryChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select a category"), categories.map(_ref2 => {
    let {
      category,
      _id
    } = _ref2;
    return /*#__PURE__*/React.createElement("option", {
      key: "category-select",
      value: _id
    }, category);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: "contributors"
  }, "Contributor:"), /*#__PURE__*/React.createElement("select", {
    id: "contributor-select",
    name: "contributor",
    value: selectedContributor.name,
    onChange: handleContributorChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select a contributor"), contributors.map(_ref3 => {
    let {
      name,
      _id
    } = _ref3;
    return /*#__PURE__*/React.createElement("option", {
      key: "contributor-select",
      value: name
    }, name);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: "contributor2"
  }, "Contributor:"), /*#__PURE__*/React.createElement("select", {
    id: "contributor2-select",
    name: "contributor2",
    value: selectedContributor2.name,
    onChange: handleContributor2Change
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select a contributor"), contributors.map(_ref4 => {
    let {
      name,
      _id
    } = _ref4;
    return /*#__PURE__*/React.createElement("option", {
      key: "contributor2-select",
      value: name
    }, name);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: "featured"
  }, "Featured:"), /*#__PURE__*/React.createElement("select", {
    id: "featured-select",
    name: "featured",
    value: selectedFeature,
    onChange: handleFeatureChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select True or False"), /*#__PURE__*/React.createElement("option", {
    key: "featured-select",
    value: false
  }, "false"), /*#__PURE__*/React.createElement("option", {
    key: "featured-select",
    value: true
  }, "true"))), inputs.map(input => /*#__PURE__*/React.createElement(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    key: input.id
  }, input, {
    value: values[input.name],
    handleInputChange: handleInputChange
  }))), /*#__PURE__*/React.createElement("button", {
    formMethod: "dialog"
  }, "Submit")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitArticleForm);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/pages/Administrator/Administrator.js":
/*!**************************************************!*\
  !*** ./src/pages/Administrator/Administrator.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Administrator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SubmitArticleForm_SubmitArticleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SubmitArticleForm/SubmitArticleForm */ "./src/components/SubmitArticleForm/SubmitArticleForm.js");
/* harmony import */ var _components_AddContributorForm_AddContributorForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AddContributorForm/AddContributorForm */ "./src/components/AddContributorForm/AddContributorForm.js");
/* harmony import */ var _components_Archive_Archive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Archive/Archive */ "./src/components/Archive/Archive.js");
/* harmony import */ var _Administrator_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Administrator.module.scss */ "./src/pages/Administrator/Administrator.module.scss");
/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../router/routes */ "./src/router/routes.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");







function Administrator(props) {
  const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [storage, setStorage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const element = document.querySelector("nav");
    element.classList.add('closed');
  }, []);
  function auth() {
    const localToken = localStorage.getItem('token');
    if (localToken === null || localToken === undefined) {
      alert('invalid token');
    } else {
      setToken(localToken);
    }
  }
  function homePage() {}
  return /*#__PURE__*/React.createElement("div", {
    className: "admin"
  }, token != null, " ?", /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Knightly News"), /*#__PURE__*/React.createElement(_components_SubmitArticleForm_SubmitArticleForm__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_components_Archive_Archive__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_components_AddContributorForm_AddContributorForm__WEBPACK_IMPORTED_MODULE_2__["default"], null)), ":", /*#__PURE__*/React.createElement("button", {
    onClick: auth
  }, "test token"));
}

/***/ }),

/***/ "./src/pages/Article/Article.js":
/*!**************************************!*\
  !*** ./src/pages/Article/Article.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Article)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function Article() {
  const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [articles, setCategoryArticles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [contributor, setContributor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [contributor2, setContributor2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [contributorArticles, setContributorArticles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [contributor2Articles, setContributor2Articles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchArticle() {
      return _fetchArticle.apply(this, arguments);
    }
    function _fetchArticle() {
      _fetchArticle = _asyncToGenerator(function* () {
        const response = yield fetch("/api/articles/".concat(id));
        const art = yield response.json();
        setArticle(art);
      });
      return _fetchArticle.apply(this, arguments);
    }
    fetchArticle();
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Object.keys(article).length > 0) {
      function fetchContributor(_x) {
        return _fetchContributor.apply(this, arguments);
      }
      function _fetchContributor() {
        _fetchContributor = _asyncToGenerator(function* (name) {
          console.log('article.name = ' + encodeURIComponent(name));
          const response = yield fetch("/api/contributors/name/".concat(encodeURIComponent(name)));
          const cont = yield response.json();
          setContributor(cont);
        });
        return _fetchContributor.apply(this, arguments);
      }
      fetchContributor(article.contributor);
      if (article.contributor2) {
        function fetchContributor2(_x2) {
          return _fetchContributor2.apply(this, arguments);
        }
        function _fetchContributor2() {
          _fetchContributor2 = _asyncToGenerator(function* (name) {
            console.log('article.name = ' + encodeURIComponent(name));
            const response = yield fetch("/api/contributors/name/".concat(encodeURIComponent(name)));
            const cont = yield response.json();
            setContributor2(cont);
          });
          return _fetchContributor2.apply(this, arguments);
        }
        fetchContributor2(article.contributor2);
      }
      function fetchCategory(_x3) {
        return _fetchCategory.apply(this, arguments);
      }
      function _fetchCategory() {
        _fetchCategory = _asyncToGenerator(function* (id) {
          const response = yield fetch("/api/categories/".concat(id));
          const cat = yield response.json();
          setCategory(cat.category);
        });
        return _fetchCategory.apply(this, arguments);
      }
      fetchCategory(article.category);
    }
  }, [article]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Object.keys(article).length > 0) {
      function fetchArticlesByCategory(_x4) {
        return _fetchArticlesByCategory.apply(this, arguments);
      }
      function _fetchArticlesByCategory() {
        _fetchArticlesByCategory = _asyncToGenerator(function* (id) {
          const response = yield fetch("/api/categories/articles/".concat(id));
          const arts = yield response.json();
          if (arts[0].title === article.title) {
            arts.splice(0, 1);
          } else if (arts[1].title === article.title) {
            arts.splice(1, 1);
          } else if (arts[2].title === article.title) {
            arts.splice(2, 1);
          }
          const artsAbbr = arts.slice(0, 2);
          console.log(artsAbbr);
          setCategoryArticles(artsAbbr);
          // setCategoryArticles(arts)
          /* 1. create a route and controller function for finding articless by category. 2. inside of the div for article, add another div (so that it is in the same column, and have it extract the contributor's articles. 3. fetch the articles by category, display them in the aside. 4. set parent div display to flex and row */
        });
        return _fetchArticlesByCategory.apply(this, arguments);
      }
      fetchArticlesByCategory(article.category);
    }
  }, [category]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Object.keys(contributor).length > 0) {
      console.log(contributor);
      function fetchArticlesByContributor(_x5) {
        return _fetchArticlesByContributor.apply(this, arguments);
      }
      function _fetchArticlesByContributor() {
        _fetchArticlesByContributor = _asyncToGenerator(function* (name) {
          const response = yield fetch("/api/articles/contributor/".concat(encodeURIComponent(name)));
          const arts = yield response.json();
          if (arts[0].title === article.title) {
            arts.splice(0, 1);
          } else if (arts[1].title === article.title) {
            arts.splice(1, 1);
          } else if (arts[2].title === article.title) {
            arts.splice(2, 1);
          } else if (arts[3].title === article.title) {
            arts.splice(3, 1);
          } else if (arts[4].title === article.title) {
            arts.splice(4, 1);
          }
          const artsAbbr = arts.slice(0, 4);
          setContributorArticles(artsAbbr);
        });
        return _fetchArticlesByContributor.apply(this, arguments);
      }
      fetchArticlesByContributor(article.contributor);
    }
  }, [contributor]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Object.keys(contributor2).length > 0) {
      console.log(contributor2);
      function fetchArticlesByContributor2(_x6) {
        return _fetchArticlesByContributor2.apply(this, arguments);
      }
      function _fetchArticlesByContributor2() {
        _fetchArticlesByContributor2 = _asyncToGenerator(function* (name) {
          const response = yield fetch("/api/articles/contributor/".concat(encodeURIComponent(name)));
          const arts = yield response.json();
          if (arts[0].title === article.title) {
            arts.splice(0, 1);
          } else if (arts[1].title === article.title) {
            arts.splice(1, 1);
          } else if (arts[2].title === article.title) {
            arts.splice(2, 1);
          } else if (arts[3].title === article.title) {
            arts.splice(3, 1);
          } else if (arts[4].title === article.title) {
            arts.splice(4, 1);
          }
          const artsAbbr = arts.slice(0, 4);
          setContributor2Articles(artsAbbr);
        });
        return _fetchArticlesByContributor2.apply(this, arguments);
      }
      fetchArticlesByContributor2(article.contributor2);
    }
  }, [contributor2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (contributorArticles.length > 0) {
      console.log(contributorArticles);
    }
  }, [contributorArticles]);
  function trimText(String) {
    let arr = String.split('');
    let arr2 = arr.slice(0, 65);
    arr2.push('...');
    let arr3 = arr2.join('');
    return arr3.toString();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ArticlePage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("div", {
    className: "rows"
  }, /*#__PURE__*/React.createElement("div", {
    className: "articleDisplay"
  }, /*#__PURE__*/React.createElement("img", {
    className: "articleImage",
    src: article.imageUrl
  }), /*#__PURE__*/React.createElement("h1", {
    className: "articleTitle"
  }, article.title), /*#__PURE__*/React.createElement("h2", {
    className: "articleContributor"
  }, "by ", article.contributor), /*#__PURE__*/React.createElement("h2", {
    className: "articleCategory"
  }, "in ", category), /*#__PURE__*/React.createElement("p", {
    className: "articleText"
  }, article.text)), /*#__PURE__*/React.createElement("div", {
    className: "aside"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "banner"
  }, "More from ", category), articles.map(article => /*#__PURE__*/React.createElement("div", {
    className: "articleThumbnail"
  }, /*#__PURE__*/React.createElement("img", {
    className: "articleImage",
    src: article.imageUrl,
    "max-width": "15%"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "articleTitle"
  }, article.title), /*#__PURE__*/React.createElement("h3", {
    className: "articleContributor"
  }, "by ", article.contributor2 ? "".concat(article.contributor, " and ").concat(article.contributor2) : "".concat(article.contributor)), /*#__PURE__*/React.createElement("h4", {
    className: "articleText"
  }, trimText(article.text)))))), /*#__PURE__*/React.createElement("div", {
    className: "articlesBy"
  }, /*#__PURE__*/React.createElement("h1", null, "More by ", article.contributor, "..."), contributorArticles.map(_ref => {
    let {
      title,
      imageUrl,
      text,
      _id
    } = _ref;
    return /*#__PURE__*/React.createElement("div", {
      className: "articleThumbnail"
    }, /*#__PURE__*/React.createElement("img", {
      className: "articleImage",
      src: imageUrl
    }), /*#__PURE__*/React.createElement("h1", {
      className: "articleTitle"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "articleText"
    }, trimText(text)), /*#__PURE__*/React.createElement("button", {
      className: "continueReading"
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      className: "continueReadingLink",
      key: "Article",
      to: "/Article/".concat(_id)
    }, "Continue Reading...")));
  })), articles.contributor2 ? /*#__PURE__*/React.createElement("div", {
    className: "articlesBy2"
  }, /*#__PURE__*/React.createElement("h1", null, "More by ", article.contributor2, "..."), contributor2Articles.map(_ref2 => {
    let {
      title,
      imageUrl,
      text,
      _id
    } = _ref2;
    return /*#__PURE__*/React.createElement("div", {
      className: "articleThumbnail"
    }, /*#__PURE__*/React.createElement("img", {
      className: "articleImage",
      src: imageUrl
    }), /*#__PURE__*/React.createElement("h1", {
      className: "articleTitle"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "articleText"
    }, trimText(text)), /*#__PURE__*/React.createElement("button", {
      className: "continueReading"
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      className: "continueReadingLink",
      key: "Article",
      to: "/Article/".concat(_id)
    }, "Continue Reading...")));
  })) : /*#__PURE__*/React.createElement(React.Fragment, null)));
}

/***/ }),

/***/ "./src/pages/Category/Category.js":
/*!****************************************!*\
  !*** ./src/pages/Category/Category.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Category_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.module.scss */ "./src/pages/Category/Category.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function Category() {
  const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [contributors, setContributors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  let {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchCategory() {
      return _fetchCategory.apply(this, arguments);
    }
    function _fetchCategory() {
      _fetchCategory = _asyncToGenerator(function* () {
        const response = yield fetch("/api/categories/".concat(id));
        const cat = yield response.json();
        setCategory(cat.category);
      });
      return _fetchCategory.apply(this, arguments);
    }
    fetchCategory();
    function fetchArticles() {
      return _fetchArticles.apply(this, arguments);
    }
    function _fetchArticles() {
      _fetchArticles = _asyncToGenerator(function* () {
        const response = yield fetch("/api/categories/articles/".concat(id));
        const arts = yield response.json();
        console.log('arts = ' + arts);
        setArticles(arts);
      });
      return _fetchArticles.apply(this, arguments);
    }
    fetchArticles();
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('category = ' + category);
  }, [category]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('articles = ' + articles);
  }, [articles]);
  function trimText(String) {
    let arr = String.split('');
    let arr2 = arr.slice(0, 65);
    arr2.push('...');
    let arr3 = arr2.join('');
    return arr3.toString();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "CategoryPage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", {
    className: "sectionHeader"
  }, category), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, articles.map(_ref => {
    let {
      title,
      contributor,
      contributor2,
      imageUrl,
      text,
      _id
    } = _ref;
    return /*#__PURE__*/React.createElement("div", {
      className: "listItem"
    }, /*#__PURE__*/React.createElement("img", {
      src: imageUrl,
      "max-width": "15%"
    }), /*#__PURE__*/React.createElement("h2", {
      className: "articleTitle"
    }, title), /*#__PURE__*/React.createElement("h3", null, "by: ", contributor2 ? "".concat(contributor, " and ").concat(contributor2) : "".concat(contributor)), /*#__PURE__*/React.createElement("p", null, trimText(text)), /*#__PURE__*/React.createElement("button", {
      className: "continueReading"
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "continueReadingLink",
      key: "Article",
      to: "/Article/".concat(_id)
    }, "Continue Reading...")));
  }))));
}

/***/ }),

/***/ "./src/pages/Contributor/Contributor.js":
/*!**********************************************!*\
  !*** ./src/pages/Contributor/Contributor.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contributor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function Contributor() {
  const [contributor, setContributor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchContributor() {
      return _fetchContributor.apply(this, arguments);
    }
    function _fetchContributor() {
      _fetchContributor = _asyncToGenerator(function* () {
        const response = yield fetch("/api/contributors/".concat(id));
        const cont = yield response.json();
        setContributor(cont);
      });
      return _fetchContributor.apply(this, arguments);
    }
    fetchContributor();
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Object.keys(contributor).length > 0) {
      console.log(contributor);
      function fetchArticlesByContributor(_x) {
        return _fetchArticlesByContributor.apply(this, arguments);
      }
      function _fetchArticlesByContributor() {
        _fetchArticlesByContributor = _asyncToGenerator(function* (name) {
          const response = yield fetch("/api/articles/contributor/".concat(encodeURIComponent(name)));
          const arts = yield response.json();
          setArticles(arts);
        });
        return _fetchArticlesByContributor.apply(this, arguments);
      }
      fetchArticlesByContributor(contributor.name);
    }
  }, [contributor]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(articles);
  }, [articles]);
  function trimArticleText(text) {
    console.log(text);
    let arr = text === null || text === void 0 ? void 0 : text.split('');
    let arr2 = arr === null || arr === void 0 ? void 0 : arr.slice(0, 65);
    arr2 === null || arr2 === void 0 ? void 0 : arr2.push('...');
    let arr3 = arr2 === null || arr2 === void 0 ? void 0 : arr2.join('');
    return arr3 === null || arr3 === void 0 ? void 0 : arr3.toString();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ContributorPage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", {
    className: "sectionHeader"
  }, contributor.name), /*#__PURE__*/React.createElement("div", {
    className: "articles"
  }, articles === null ? /*#__PURE__*/React.createElement("h2", null, "Articles Loading...") : articles.map(_ref => {
    let {
      title,
      imageUrl,
      text,
      _id
    } = _ref;
    return /*#__PURE__*/React.createElement("div", {
      className: "articleThumbnail"
    }, /*#__PURE__*/React.createElement("img", {
      className: "articleImage",
      src: imageUrl,
      height: "200vmin"
    }), /*#__PURE__*/React.createElement("h2", {
      className: "articleTitle"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "articleText"
    }, trimArticleText(text)), /*#__PURE__*/React.createElement("button", {
      className: "continueReading"
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      className: "continueReadingLink",
      key: "Article",
      to: "/Article/".concat(_id)
    }, "Continue Reading...")));
  }))));
}

/***/ }),

/***/ "./src/pages/Home/Home.js":
/*!********************************!*\
  !*** ./src/pages/Home/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Administrator_Administrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Administrator/Administrator */ "./src/pages/Administrator/Administrator.js");
/* harmony import */ var _utilities_admin_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/admin-services */ "./src/utilities/admin-services.js");
/* harmony import */ var _components_ContributorsList_ContributorsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ContributorsList/ContributorsList */ "./src/components/ContributorsList/ContributorsList.js");
/* harmony import */ var _components_FeaturedArticle_FeaturedArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FeaturedArticle/FeaturedArticle */ "./src/components/FeaturedArticle/FeaturedArticle.js");
/* harmony import */ var _components_CategoryArticleLists_CategoryArticleLists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CategoryArticleLists/CategoryArticleLists */ "./src/components/CategoryArticleLists/CategoryArticleLists.js");
/* harmony import */ var _components_HotOffThePress_HotOffThePress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/HotOffThePress/HotOffThePress */ "./src/components/HotOffThePress/HotOffThePress.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");







function Home() {
  const [contributor, setContributor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const homePage = document.querySelector('.HomePage');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 4750) {
      console.log('white');
      setColor('white');
    } else if (window.scrollY <= 2750) {
      console.log('white');
      setColor('white');
    } else if (window.scrollY > 2750 && window.scrollY < 4750) {
      console.log('blue');
      setColor('blue');
    }
  });
  // useEffect(() => {
  // 	color === 'blue' ? console.log(color) : console.log(color)
  // }, [color])
  return /*#__PURE__*/React.createElement("div", {
    className: "HomePage"
  }, /*#__PURE__*/React.createElement(_components_FeaturedArticle_FeaturedArticle__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement(_components_CategoryArticleLists_CategoryArticleLists__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/React.createElement(_components_HotOffThePress_HotOffThePress__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: color
  }), /*#__PURE__*/React.createElement(_components_ContributorsList_ContributorsList__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

/***/ }),

/***/ "./src/pages/Press/Press.js":
/*!**********************************!*\
  !*** ./src/pages/Press/Press.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Press() {
  // possibly, instead of sending a link to the Url, save it in a folder and send the pathname to the backend.

  const [archives, setArchives] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchArchives() {
      return _fetchArchives.apply(this, arguments);
    }
    function _fetchArchives() {
      _fetchArchives = _asyncToGenerator(function* () {
        const response = yield fetch('/api/archives');
        const archs = yield response.json();
        setArchives(archs);
      });
      return _fetchArchives.apply(this, arguments);
    }
    fetchArchives();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (archives.length > 0) {
      console.log(archives);
    }
  }, [archives]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "sectionHeader"
  }, "Hot Off the Press"), /*#__PURE__*/React.createElement("div", {
    className: "archives"
  }, archives.map(archive => /*#__PURE__*/React.createElement("div", {
    className: "archive"
  }, /*#__PURE__*/React.createElement("h1", null, archive.title), /*#__PURE__*/React.createElement("object", {
    className: "pdf",
    data: archive.pdfUrl,
    type: "application/pdf",
    width: "50%",
    height: "985px"
  }), /*#__PURE__*/React.createElement("button", {
    className: "continueReading"
  }, "Download PDF of ", /*#__PURE__*/React.createElement("a", {
    href: archive.pdfUrl
  }, archive.title))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Press);

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/router/routes.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Home/Home */ "./src/pages/Home/Home.js");
/* harmony import */ var _components_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormInput/FormInput */ "./src/components/FormInput/FormInput.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






const AppRouter = () => {
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [access, setAccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    password: ''
  });
  const input = {
    id: "site-password",
    name: "password",
    type: "text",
    placeholder: "Enter site password",
    errorMessage: "Ask Mr. Terry",
    label: "Password: ",
    required: true
  };
  const handleInputChange = e => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [e.target.name]: e.target.value
    }));
    setPassword(e.target.value);
  };
  const handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      e.preventDefault();
      // let formData = new FormData()
      // for (let key in values) {
      //     formData.append(key, values[key])
      // }
      // console.log('formData = ' + formData)
      // // const data = await submit(formData)
      const response = yield fetch("/api/admin/password/".concat(password));
      const test = yield response.json();
      console.log(test);
    });
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // return ( 
  // 	<div>
  // 	{access === true ? 
  // 	<Router>
  // 		<NavBar routes={routes} />	
  // 		<Routes>
  // 			{routes.map(({ Component, key, path }) => (
  // 				<Route
  // 					key={key}
  // 					path={path}
  // 					element={<Component page={key} />}
  // 				></Route>
  // 			))}
  // 			<Route path="/*" key="Home" element={Home} />
  // 		</Routes>
  // 	</Router>
  // 	:
  // 	<>
  // 		<form  autoComplete="off" onSubmit={handleSubmit}>
  // 			<FormInput key={input.id} {...input} value={values[input.name]} handleInputChange={handleInputChange} />
  // 			<button formMethod='dialog'>Submit</button>			
  // 		</form>
  // 		{/* <button onClick={alert('Hint: The theme of this year!')}>Hint</button> */}
  // 	</>
  // 	}
  // </div>
  // );
  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    routes: _routes__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, _routes__WEBPACK_IMPORTED_MODULE_2__["default"].map(_ref2 => {
    let {
      Component,
      key,
      path
    } = _ref2;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
      key: key,
      path: path,
      element: /*#__PURE__*/React.createElement(Component, {
        page: key
      })
    });
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/*",
    key: "Home",
    element: _pages_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home/Home */ "./src/pages/Home/Home.js");
/* harmony import */ var _pages_Administrator_Administrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Administrator/Administrator */ "./src/pages/Administrator/Administrator.js");
/* harmony import */ var _pages_Article_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Article/Article */ "./src/pages/Article/Article.js");
/* harmony import */ var _pages_Category_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Category/Category */ "./src/pages/Category/Category.js");
/* harmony import */ var _pages_Contributor_Contributor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Contributor/Contributor */ "./src/pages/Contributor/Contributor.js");
/* harmony import */ var _pages_Press_Press__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Press/Press */ "./src/pages/Press/Press.js");






const routes = [{
  Component: _pages_Administrator_Administrator__WEBPACK_IMPORTED_MODULE_1__["default"],
  key: 'Administrator',
  path: '/Admin'
}, {
  Component: _pages_Home_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  key: 'Home',
  path: '/'
}, {
  Component: _pages_Article_Article__WEBPACK_IMPORTED_MODULE_2__["default"],
  key: 'Article',
  path: '/Article/:id'
}, {
  Component: _pages_Category_Category__WEBPACK_IMPORTED_MODULE_3__["default"],
  key: 'Category',
  path: '/Category/:id'
}, {
  Component: _pages_Contributor_Contributor__WEBPACK_IMPORTED_MODULE_4__["default"],
  key: 'Contributor',
  path: '/Contributor/:id'
}, {
  Component: _pages_Press_Press__WEBPACK_IMPORTED_MODULE_5__["default"],
  key: 'Press',
  path: '/Press'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/utilities/admin-api.js":
/*!************************************!*\
  !*** ./src/utilities/admin-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkToken: () => (/* binding */ checkToken),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/admin';
function login(credentials) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
function checkToken() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/check-token"), 'GET');
}
function signUp(contributorData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/contributor"), 'POST', contributorData);
}

// export function submit(articleData) {
//     return sendUrlFormData(`${BASE_URL}/article`, 'POST', articleData)
// }

/***/ }),

/***/ "./src/utilities/admin-services.js":
/*!*****************************************!*\
  !*** ./src/utilities/admin-services.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContributor: () => (/* binding */ createContributor),
/* harmony export */   getToken: () => (/* binding */ getToken)
/* harmony export */ });
/* unused harmony exports login, checkToken, getAdmin, logOut */
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ "./node_modules/morgan/index.js");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-api */ "./src/utilities/admin-api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function login(_x) {
  return _login.apply(this, arguments);
}
function _login() {
  _login = _asyncToGenerator(function* (credentials) {
    const token = yield _admin_api__WEBPACK_IMPORTED_MODULE_1__.login(credentials);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getUser();
  });
  return _login.apply(this, arguments);
}
function checkToken() {
  return _checkToken.apply(this, arguments);
}
function _checkToken() {
  _checkToken = _asyncToGenerator(function* () {
    morgan__WEBPACK_IMPORTED_MODULE_0__.token = yield _admin_api__WEBPACK_IMPORTED_MODULE_1__.checkToken();
    if (localStorage.token === morgan__WEBPACK_IMPORTED_MODULE_0__.token) {
      return true;
    } else {
      return false;
    }
  });
  return _checkToken.apply(this, arguments);
}
function getToken() {
  const token = localStorage.getItem('token');
  console.log(token);
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function getAdmin() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).contributor : null;
}
function logOut() {
  localStorage.removeItem('token');
}
function createContributor(_x2) {
  return _createContributor.apply(this, arguments);
}

// export async function submitArticle(articleData) {
//     console.log(articleData)
//     const token = await adminAPI.submit(articleData)
//     return getAdmin()
// }
function _createContributor() {
  _createContributor = _asyncToGenerator(function* (contributorData) {
    const contributor = yield _admin_api__WEBPACK_IMPORTED_MODULE_1__.signUp(contributorData);
    return contributor;
  });
  return _createContributor.apply(this, arguments);
}

/***/ }),

/***/ "./src/utilities/imageUpload.js":
/*!**************************************!*\
  !*** ./src/utilities/imageUpload.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submit: () => (/* binding */ submit),
/* harmony export */   submitPdf: () => (/* binding */ submitPdf)
/* harmony export */ });
/* harmony import */ var _utilities_admin_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/admin-services */ "./src/utilities/admin-services.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function submit(_x) {
  return _submit.apply(this, arguments);
}
function _submit() {
  _submit = _asyncToGenerator(function* (imageData) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/admin/article", imageData, {
      headers: new Headers({
        'Content-Type': "multipart/form-data",
        'Authorization': "Bearer ".concat((0,_utilities_admin_services__WEBPACK_IMPORTED_MODULE_0__.getToken)())
      })
    });
  });
  return _submit.apply(this, arguments);
}
function submitPdf(_x2) {
  return _submitPdf.apply(this, arguments);
}
function _submitPdf() {
  _submitPdf = _asyncToGenerator(function* (imageData) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/admin/pdf", imageData, {
      headers: new Headers({
        'Content-Type': "multipart/form-data",
        'Authorization': "Bearer ".concat((0,_utilities_admin_services__WEBPACK_IMPORTED_MODULE_0__.getToken)())
      })
    });
  });
  return _submitPdf.apply(this, arguments);
}

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
/* unused harmony export sendUrlFormData */
/* harmony import */ var _admin_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-services */ "./src/utilities/admin-services.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function sendRequest(_x) {
  return _sendRequest.apply(this, arguments);
}
function _sendRequest() {
  _sendRequest = _asyncToGenerator(function (url) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return function* () {
      // Fetch takes an optional options object as the 2nd argument
      // used to include a data payload, set headers, etc.
      const options = {
        method
      };
      if (payload) {
        options.headers = {
          'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(payload);
      }
      const token = (0,_admin_services__WEBPACK_IMPORTED_MODULE_0__.getToken)();
      if (token) {
        // Ensure headers object exists
        options.headers = options.headers || {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = "Bearer ".concat(token);
      }
      console.log('options.headers = ' + options.headers);
      console.log('options.body = ' + options.body);
      const res = yield fetch(url, options);
      // res.ok will be false if the status code set to 4xx in the controller action
      if (res.ok) return res.json();
      throw new Error('Bad Request');
    }();
  });
  return _sendRequest.apply(this, arguments);
}
function sendUrlFormData(_x2) {
  return _sendUrlFormData.apply(this, arguments);
}
function _sendUrlFormData() {
  _sendUrlFormData = _asyncToGenerator(function (url) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return function* () {
      // Fetch takes an optional options object as the 2nd argument
      // used to include a data payload, set headers, etc.
      const options = {
        method
      };
      if (payload) {
        options.headers = {
          'Content-Type': 'multipart/form-data'
        };
        options.body = payload;
      }
      const token = (0,_admin_services__WEBPACK_IMPORTED_MODULE_0__.getToken)();
      if (token) {
        // Ensure headers object exists
        options.headers = options.headers || {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = "Bearer ".concat(token);
      }
      console.log('options.headers = ' + options.headers);
      console.log('options.body = ' + options.body);
      const res = yield fetch(url, options);
      // res.ok will be false if the status code set to 4xx in the controller action
      if (res.ok) return res.json();
      throw new Error('Bad Request');
    }();
  });
  return _sendUrlFormData.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AddContributorForm/AddContributorForm.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AddContributorForm/AddContributorForm.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FormInput/FormInput.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FormInput/FormInput.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"closed":"lRc46VR2e9Te6vnQpCuQ"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SubmitArticleForm/SubmitArticle.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SubmitArticleForm/SubmitArticle.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"form":"eQHvXU0aXYIA7Z0cagvE"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Administrator/Administrator.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Administrator/Administrator.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"admin":"bGL6Ox_Vrawg6olFQn4d","closed":"NTJxKY6f4k7rt7GYwkFG"});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Category/Category.module.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Category/Category.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"Article":"NMEOt1eko7Od9_3o8t4H","title":"OZCZkadg0df1Enq4Alr1"});

/***/ }),

/***/ "./src/components/AddContributorForm/AddContributorForm.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/AddContributorForm/AddContributorForm.module.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AddContributorForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AddContributorForm.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AddContributorForm/AddContributorForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AddContributorForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AddContributorForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AddContributorForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AddContributorForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/FormInput/FormInput.module.scss":
/*!********************************************************!*\
  !*** ./src/components/FormInput/FormInput.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FormInput_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./FormInput.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FormInput/FormInput.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FormInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FormInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FormInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FormInput_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SubmitArticleForm/SubmitArticle.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/SubmitArticleForm/SubmitArticle.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubmitArticle_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SubmitArticle.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SubmitArticleForm/SubmitArticle.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubmitArticle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubmitArticle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubmitArticle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubmitArticle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Administrator/Administrator.module.scss":
/*!***********************************************************!*\
  !*** ./src/pages/Administrator/Administrator.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Administrator_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Administrator.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Administrator/Administrator.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Administrator_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Administrator_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Administrator_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Administrator_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Category/Category.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/Category/Category.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Category_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Category.module.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/Category/Category.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Category_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Category_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Category_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Category_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_morgan_index_js-node_modules_react-dom_client_js-node_modules_react-rout-6657f8"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.fc38088e209cc2ba46e7c933e2c46968.js.map