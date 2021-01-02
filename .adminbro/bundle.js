(function (React, adminBro, designSystem) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var PasswordEdit = function PasswordEdit(props) {
    var onChange = props.onChange,
        property = props.property,
        record = props.record;

    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showPassword = _useState2[0],
        togglePassword = _useState2[1];

    React.useEffect(function () {
      if (!showPassword) {
        onChange(property.name, '');
      }
    }, [onChange, property, showPassword]); // For new records always show the property

    if (!record.id) {
      return /*#__PURE__*/React__default['default'].createElement(adminBro.BasePropertyComponent.Password.Edit, props);
    }

    return /*#__PURE__*/React__default['default'].createElement(designSystem.Box, null, showPassword && /*#__PURE__*/React__default['default'].createElement(adminBro.BasePropertyComponent.Password.Edit, props), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
      mb: "xl"
    }, /*#__PURE__*/React__default['default'].createElement(designSystem.Text, {
      textAlign: "center"
    }, /*#__PURE__*/React__default['default'].createElement(designSystem.Button, {
      onClick: function onClick() {
        return togglePassword(!showPassword);
      },
      type: "button"
    }, showPassword ? 'Cancel' : 'Change password'))));
  };

  var Edit = function Edit(_ref) {
    var property = _ref.property,
        record = _ref.record,
        onChange = _ref.onChange;
    var params = record.params;
    var _ref2 = property,
        custom = _ref2.custom;
    var path = adminBro.flat.get(params, custom.filePathProperty);
    var key = adminBro.flat.get(params, custom.keyProperty);
    var file = adminBro.flat.get(params, custom.fileProperty);

    var _useState = React.useState(key),
        _useState2 = _slicedToArray(_useState, 2),
        originalKey = _useState2[0],
        setOriginalKey = _useState2[1];

    var _useState3 = React.useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        filesToUpload = _useState4[0],
        setFilesToUpload = _useState4[1];

    React.useEffect(function () {
      // it means means that someone hit save and new file has been uploaded
      // in this case fliesToUpload should be cleared.
      // This happens when user turns off redirect after new/edit
      if (typeof key === 'string' && key !== originalKey || typeof key !== 'string' && !originalKey || typeof key !== 'string' && Array.isArray(key) && key.length !== originalKey.length) {
        setOriginalKey(key);
        setFilesToUpload([]);
      }
    }, [key, originalKey]);

    var onUpload = function onUpload(files) {
      setFilesToUpload(files);
      onChange(custom.fileProperty, files);
    };

    var handleRemove = function handleRemove() {
      onChange(custom.fileProperty, null);
    };

    var handleMultiRemove = function handleMultiRemove(singleKey) {
      var index = (adminBro.flat.get(record.params, custom.keyProperty) || []).indexOf(singleKey);
      var filesToDelete = adminBro.flat.get(record.params, custom.filesToDeleteProperty) || [];

      if (path && path.length > 0) {
        var newPath = path.map(function (currentPath, i) {
          return i !== index ? currentPath : null;
        });
        var newParams = adminBro.flat.set(record.params, custom.filesToDeleteProperty, [].concat(_toConsumableArray(filesToDelete), [index]));
        newParams = adminBro.flat.set(newParams, custom.filePathProperty, newPath);
        onChange(_objectSpread2(_objectSpread2({}, record), {}, {
          params: newParams
        }));
      } else {
        // eslint-disable-next-line no-console
        console.log('You cannot remove file when there are no uploaded files yet');
      }
    };

    return /*#__PURE__*/React__default['default'].createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(designSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(designSystem.DropZone, {
      onChange: onUpload,
      multiple: custom.multiple,
      validate: {
        mimeTypes: custom.mimeTypes,
        maxSize: custom.maxSize
      },
      files: filesToUpload
    }), !custom.multiple && key && path && !filesToUpload.length && file !== null && /*#__PURE__*/React__default['default'].createElement(designSystem.DropZoneItem, {
      filename: key,
      src: path,
      onRemove: handleRemove
    }), custom.multiple && key && key.length && path ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, key.map(function (singleKey, index) {
      // when we remove items we set only path index to nulls.
      // key is still there. This is because
      // we have to maintain all the indexes. So here we simply filter out elements which
      // were removed and display only what was left
      var currentPath = path[index];
      return currentPath ? /*#__PURE__*/React__default['default'].createElement(designSystem.DropZoneItem, {
        key: singleKey,
        filename: singleKey,
        src: path[index],
        onRemove: function onRemove() {
          return handleMultiRemove(singleKey);
        }
      }) : '';
    })) : '');
  };

  var AudioMimeTypes = ['audio/aac', 'audio/midi', 'audio/x-midi', 'audio/mpeg', 'audio/ogg', 'application/ogg', 'audio/opus', 'audio/wav', 'audio/webm', 'audio/3gpp2'];
  var ImageMimeTypes = ['image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/vnd.microsoft.icon', 'image/tiff', 'image/webp'];

  var SingleFile = function SingleFile(props) {
    var name = props.name,
        path = props.path,
        mimeType = props.mimeType,
        width = props.width;

    if (path && path.length) {
      if (mimeType && ImageMimeTypes.includes(mimeType)) {
        return /*#__PURE__*/React__default['default'].createElement("img", {
          src: path,
          style: {
            maxHeight: width,
            maxWidth: width
          },
          alt: name
        });
      }

      if (mimeType && AudioMimeTypes.includes(mimeType)) {
        return /*#__PURE__*/React__default['default'].createElement("audio", {
          controls: true,
          src: path
        }, "Your browser does not support the", /*#__PURE__*/React__default['default'].createElement("code", null, "audio"), /*#__PURE__*/React__default['default'].createElement("track", {
          kind: "captions"
        }));
      }
    }

    return /*#__PURE__*/React__default['default'].createElement(designSystem.Box, null, /*#__PURE__*/React__default['default'].createElement(designSystem.Button, {
      as: "a",
      href: path,
      ml: "default",
      size: "sm",
      rounded: true,
      target: "_blank"
    }, /*#__PURE__*/React__default['default'].createElement(designSystem.Icon, {
      icon: "DocumentDownload",
      color: "white",
      mr: "default"
    }), name));
  };

  var File = function File(_ref) {
    var width = _ref.width,
        record = _ref.record,
        property = _ref.property;
    var _ref2 = property,
        custom = _ref2.custom;
    var path = adminBro.flat.get(record === null || record === void 0 ? void 0 : record.params, custom.filePathProperty);

    if (!path) {
      return null;
    }

    var name = adminBro.flat.get(record === null || record === void 0 ? void 0 : record.params, custom.fileNameProperty ? custom.fileNameProperty : custom.keyProperty);
    var mimeType = custom.mimeTypeProperty && adminBro.flat.get(record === null || record === void 0 ? void 0 : record.params, custom.mimeTypeProperty);

    if (!property.custom.multiple) {
      return /*#__PURE__*/React__default['default'].createElement(SingleFile, {
        path: path,
        name: name,
        width: width,
        mimeType: mimeType
      });
    }

    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, path.map(function (singlePath, index) {
      return /*#__PURE__*/React__default['default'].createElement(SingleFile, {
        key: singlePath,
        path: singlePath,
        name: name[index],
        width: width,
        mimeType: mimeType[index]
      });
    }));
  };

  var List = function List(props) {
    return /*#__PURE__*/React__default['default'].createElement(File, _extends({
      width: 100
    }, props));
  };

  var Show = function Show(props) {
    var property = props.property;
    return /*#__PURE__*/React__default['default'].createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(designSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(File, _extends({
      width: "100%"
    }, props)));
  };

  var DocumentButtonShow = function DocumentButtonShow(props) {
    var record = props.record;

    var _useState = React.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        items = _useState2[0],
        setItems = _useState2[1];

    React.useEffect(function () {
      setItems(record.populated['items']);
      console.log('record.params.redirectUrl', record.params.redirectUrl);
    }, []);
    return /*#__PURE__*/React__default['default'].createElement(designSystem.Button, {
      variant: "primary",
      rounded: true
    }, /*#__PURE__*/React__default['default'].createElement(designSystem.Link, {
      style: {
        color: '#FFF',
        textDecoration: 'none'
      },
      target: "blank",
      href: "//".concat(record.params.redirectUrl)
    }, "Download PDF"));
  };

  var Component5 = adminBro.withNotice(DocumentButtonShow);

  var ItemsList = function ItemsList(_ref) {
    var items = _ref.items;
    var viewHelper = new adminBro.ViewHelpers();
    return /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
      mb: "x4",
      variant: "grey"
    }, /*#__PURE__*/React__default['default'].createElement(designSystem.Label, null, "Items Related to this Sales"), /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
      variant: "white"
    }, /*#__PURE__*/React__default['default'].createElement(designSystem.Table, null, /*#__PURE__*/React__default['default'].createElement(designSystem.TableHead, null, /*#__PURE__*/React__default['default'].createElement(designSystem.TableRow, null, /*#__PURE__*/React__default['default'].createElement(designSystem.TableCell, null, "Item ID"), /*#__PURE__*/React__default['default'].createElement(designSystem.TableCell, null, "Completion Date"), /*#__PURE__*/React__default['default'].createElement(designSystem.TableCell, null, "Status"), /*#__PURE__*/React__default['default'].createElement(designSystem.TableCell, null, "Details"))), /*#__PURE__*/React__default['default'].createElement(designSystem.TableBody, null, items === null || items === void 0 ? void 0 : items.map(function (item, index) {
      return /*#__PURE__*/React__default['default'].createElement(designSystem.TableRow, {
        key: index
      }, /*#__PURE__*/React__default['default'].createElement(designSystem.TableCell, null, item.id), /*#__PURE__*/React__default['default'].createElement(designSystem.TableCell, null, item.date), /*#__PURE__*/React__default['default'].createElement(designSystem.TableCell, null, /*#__PURE__*/React__default['default'].createElement(designSystem.Badge, null, item.status)), /*#__PURE__*/React__default['default'].createElement(designSystem.TableCell, null, " ", /*#__PURE__*/React__default['default'].createElement(designSystem.Link, {
        href: viewHelper.editUrl("Items", item.id)
      }, /*#__PURE__*/React__default['default'].createElement(designSystem.Icon, {
        style: {
          cursor: 'pointer'
        },
        color: "blue",
        icon: "View",
        variant: "24"
      })), " "));
    })))));
  };

  var ItemsListEdit = function ItemsListEdit(props) {
    var record = props.record;

    var _useState = React.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        items = _useState2[0],
        setItems = _useState2[1];

    React.useEffect(function () {
      setItems(record.populated['items']);
    }, []);
    return /*#__PURE__*/React__default['default'].createElement(ItemsList, {
      items: items
    });
  };

  var ItemsListShow = function ItemsListShow(props) {
    var record = props.record;

    var _useState = React.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        items = _useState2[0],
        setItems = _useState2[1];

    React.useEffect(function () {
      setItems(record.populated['items']);
    }, []);
    return /*#__PURE__*/React__default['default'].createElement(ItemsList, {
      items: items
    });
  };

  var api = new adminBro.ApiClient();

  var Dashboard = function Dashboard() {
    var _useState = React.useState({}),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];

    React.useEffect(function () {
      api.getDashboard().then(function (response) {
        setData(response.data);
      });
    }, []);
    return /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
      variant: "grey"
    }, /*#__PURE__*/React__default['default'].createElement(designSystem.Box, {
      variant: "white"
    }, "some dashboard"));
  };

  AdminBro.UserComponents = {};
  AdminBro.UserComponents.Component1 = PasswordEdit;
  AdminBro.UserComponents.Component2 = Edit;
  AdminBro.UserComponents.Component3 = List;
  AdminBro.UserComponents.Component4 = Show;
  AdminBro.UserComponents.Component5 = Component5;
  AdminBro.UserComponents.Component6 = ItemsListEdit;
  AdminBro.UserComponents.Component7 = ItemsListShow;
  AdminBro.UserComponents.Component8 = Edit;
  AdminBro.UserComponents.Component9 = List;
  AdminBro.UserComponents.Component10 = Show;
  AdminBro.UserComponents.Component11 = Dashboard;

}(React, AdminBro, AdminBroDesignSystem));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby9wYXNzd29yZHMvY29tcG9uZW50cy9lZGl0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9lZGl0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2ZpbGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cudHN4IiwiLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvZG9jdW1lbnQtYnV0dG9uLXNob3cudHN4IiwiLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvaXRlbXMtbGlzdC50c3giLCIuLi9zcmMvaW5mcmEvYWRtaW4vY29tcG9uZW50cy9pdGVtcy1saXN0LWVkaXQudHN4IiwiLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvaXRlbXMtbGlzdC1zaG93LnRzeCIsIi4uL3NyYy9pbmZyYS9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZC50c3giLCIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzLCBCYXNlUHJvcGVydHlDb21wb25lbnQgfSBmcm9tICdhZG1pbi1icm8nXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuY29uc3QgUGFzc3dvcmRFZGl0OiBSZWFjdC5GQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcblxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCB0b2dnbGVQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2hvd1Bhc3N3b3JkKSB7XG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCAnJylcbiAgICB9XG4gIH0sIFtvbkNoYW5nZSwgcHJvcGVydHksIHNob3dQYXNzd29yZF0pXG5cbiAgLy8gRm9yIG5ldyByZWNvcmRzIGFsd2F5cyBzaG93IHRoZSBwcm9wZXJ0eVxuICBpZiAoIXJlY29yZC5pZCkge1xuICAgIHJldHVybiA8QmFzZVByb3BlcnR5Q29tcG9uZW50LlBhc3N3b3JkLkVkaXQgey4uLnByb3BzfSAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAge3Nob3dQYXNzd29yZCAmJiA8QmFzZVByb3BlcnR5Q29tcG9uZW50LlBhc3N3b3JkLkVkaXQgey4uLnByb3BzfSAvPn1cbiAgICAgIDxCb3ggbWI9XCJ4bFwiPlxuICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBhc3N3b3JkKCFzaG93UGFzc3dvcmQpfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gJ0NhbmNlbCcgOiAnQ2hhbmdlIHBhc3N3b3JkJ31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRFZGl0XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzLCBmbGF0IH0gZnJvbSAnYWRtaW4tYnJvJ1xuaW1wb3J0IHsgRHJvcFpvbmUsIEZvcm1Hcm91cCwgTGFiZWwsIERyb3Bab25lSXRlbSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCBQcm9wZXJ0eUN1c3RvbSBmcm9tICcuLi90eXBlcy9wcm9wZXJ0eS1jdXN0b20udHlwZSdcblxuY29uc3QgRWRpdDogRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCB7IHBhcmFtcyB9ID0gcmVjb3JkXG4gIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eSBhcyB1bmtub3duIGFzIHsgY3VzdG9tOiBQcm9wZXJ0eUN1c3RvbSB9XG5cbiAgY29uc3QgcGF0aCA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpXG4gIGNvbnN0IGtleSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KVxuICBjb25zdCBmaWxlID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVByb3BlcnR5KVxuXG4gIGNvbnN0IFtvcmlnaW5hbEtleSwgc2V0T3JpZ2luYWxLZXldID0gdXNlU3RhdGUoa2V5KVxuICBjb25zdCBbZmlsZXNUb1VwbG9hZCwgc2V0RmlsZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZTxBcnJheTxGaWxlPj4oW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpdCBtZWFucyBtZWFucyB0aGF0IHNvbWVvbmUgaGl0IHNhdmUgYW5kIG5ldyBmaWxlIGhhcyBiZWVuIHVwbG9hZGVkXG4gICAgLy8gaW4gdGhpcyBjYXNlIGZsaWVzVG9VcGxvYWQgc2hvdWxkIGJlIGNsZWFyZWQuXG4gICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gdXNlciB0dXJucyBvZmYgcmVkaXJlY3QgYWZ0ZXIgbmV3L2VkaXRcbiAgICBpZiAoXG4gICAgICAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSBvcmlnaW5hbEtleSlcbiAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiAhb3JpZ2luYWxLZXkpXG4gICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgQXJyYXkuaXNBcnJheShrZXkpICYmIGtleS5sZW5ndGggIT09IG9yaWdpbmFsS2V5Lmxlbmd0aClcbiAgICApIHtcbiAgICAgIHNldE9yaWdpbmFsS2V5KGtleSlcbiAgICAgIHNldEZpbGVzVG9VcGxvYWQoW10pXG4gICAgfVxuICB9LCBba2V5LCBvcmlnaW5hbEtleV0pXG5cbiAgY29uc3Qgb25VcGxvYWQgPSAoZmlsZXM6IEFycmF5PEZpbGU+KTogdm9pZCA9PiB7XG4gICAgc2V0RmlsZXNUb1VwbG9hZChmaWxlcylcbiAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBmaWxlcylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBudWxsKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTXVsdGlSZW1vdmUgPSAoc2luZ2xlS2V5KSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSAoZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KSB8fCBbXSkuaW5kZXhPZihzaW5nbGVLZXkpXG4gICAgY29uc3QgZmlsZXNUb0RlbGV0ZSA9IGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHkpIHx8IFtdXG4gICAgaWYgKFxuICAgICAgcGF0aCAmJiBwYXRoLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLm1hcCgoY3VycmVudFBhdGgsIGkpID0+IChpICE9PSBpbmRleCA/IGN1cnJlbnRQYXRoIDogbnVsbCkpXG4gICAgICBsZXQgbmV3UGFyYW1zID0gZmxhdC5zZXQoXG4gICAgICAgIHJlY29yZC5wYXJhbXMsXG4gICAgICAgIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHksXG4gICAgICAgIFsuLi5maWxlc1RvRGVsZXRlLCBpbmRleF0sXG4gICAgICApXG4gICAgICBuZXdQYXJhbXMgPSBmbGF0LnNldChuZXdQYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5LCBuZXdQYXRoKVxuXG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLnJlY29yZCxcbiAgICAgICAgcGFyYW1zOiBuZXdQYXJhbXMsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coJ1lvdSBjYW5ub3QgcmVtb3ZlIGZpbGUgd2hlbiB0aGVyZSBhcmUgbm8gdXBsb2FkZWQgZmlsZXMgeWV0JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXA+XG4gICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsfTwvTGFiZWw+XG4gICAgICA8RHJvcFpvbmVcbiAgICAgICAgb25DaGFuZ2U9e29uVXBsb2FkfVxuICAgICAgICBtdWx0aXBsZT17Y3VzdG9tLm11bHRpcGxlfVxuICAgICAgICB2YWxpZGF0ZT17e1xuICAgICAgICAgIG1pbWVUeXBlczogY3VzdG9tLm1pbWVUeXBlcyBhcyBBcnJheTxzdHJpbmc+LFxuICAgICAgICAgIG1heFNpemU6IGN1c3RvbS5tYXhTaXplLFxuICAgICAgICB9fVxuICAgICAgICBmaWxlcz17ZmlsZXNUb1VwbG9hZH1cbiAgICAgIC8+XG4gICAgICB7IWN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYgcGF0aCAmJiAhZmlsZXNUb1VwbG9hZC5sZW5ndGggJiYgZmlsZSAhPT0gbnVsbCAmJiAoXG4gICAgICAgIDxEcm9wWm9uZUl0ZW0gZmlsZW5hbWU9e2tleX0gc3JjPXtwYXRofSBvblJlbW92ZT17aGFuZGxlUmVtb3ZlfSAvPlxuICAgICAgKX1cbiAgICAgIHtjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIGtleS5sZW5ndGggJiYgcGF0aCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7a2V5Lm1hcCgoc2luZ2xlS2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSByZW1vdmUgaXRlbXMgd2Ugc2V0IG9ubHkgcGF0aCBpbmRleCB0byBudWxscy5cbiAgICAgICAgICAgIC8vIGtleSBpcyBzdGlsbCB0aGVyZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG1haW50YWluIGFsbCB0aGUgaW5kZXhlcy4gU28gaGVyZSB3ZSBzaW1wbHkgZmlsdGVyIG91dCBlbGVtZW50cyB3aGljaFxuICAgICAgICAgICAgLy8gd2VyZSByZW1vdmVkIGFuZCBkaXNwbGF5IG9ubHkgd2hhdCB3YXMgbGVmdFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwYXRoW2luZGV4XVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYXRoID8gKFxuICAgICAgICAgICAgICA8RHJvcFpvbmVJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtzaW5nbGVLZXl9XG4gICAgICAgICAgICAgICAgZmlsZW5hbWU9e3NpbmdsZUtleX1cbiAgICAgICAgICAgICAgICBzcmM9e3BhdGhbaW5kZXhdfVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBoYW5kbGVNdWx0aVJlbW92ZShzaW5nbGVLZXkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6ICcnXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICAgKSA6ICcnfVxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRcbiIsImV4cG9ydCBjb25zdCBBdWRpb01pbWVUeXBlcyA9IFtcbiAgJ2F1ZGlvL2FhYycsXG4gICdhdWRpby9taWRpJyxcbiAgJ2F1ZGlvL3gtbWlkaScsXG4gICdhdWRpby9tcGVnJyxcbiAgJ2F1ZGlvL29nZycsXG4gICdhcHBsaWNhdGlvbi9vZ2cnLFxuICAnYXVkaW8vb3B1cycsXG4gICdhdWRpby93YXYnLFxuICAnYXVkaW8vd2VibScsXG4gICdhdWRpby8zZ3BwMicsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBWaWRlb01pbWVUeXBlcyA9IFtcbiAgJ3ZpZGVvL3gtbXN2aWRlbycsXG4gICd2aWRlby9tcGVnJyxcbiAgJ3ZpZGVvL29nZycsXG4gICd2aWRlby9tcDJ0JyxcbiAgJ3ZpZGVvL3dlYm0nLFxuICAndmlkZW8vM2dwcCcsXG4gICd2aWRlby8zZ3BwMicsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBJbWFnZU1pbWVUeXBlcyA9IFtcbiAgJ2ltYWdlL2JtcCcsXG4gICdpbWFnZS9naWYnLFxuICAnaW1hZ2UvanBlZycsXG4gICdpbWFnZS9wbmcnLFxuICAnaW1hZ2Uvc3ZnK3htbCcsXG4gICdpbWFnZS92bmQubWljcm9zb2Z0Lmljb24nLFxuICAnaW1hZ2UvdGlmZicsXG4gICdpbWFnZS93ZWJwJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IENvbXByZXNzZWRNaW1lVHlwZXMgPSBbXG4gICdhcHBsaWNhdGlvbi94LWJ6aXAnLFxuICAnYXBwbGljYXRpb24veC1iemlwMicsXG4gICdhcHBsaWNhdGlvbi9nemlwJyxcbiAgJ2FwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZScsXG4gICdhcHBsaWNhdGlvbi94LXRhcicsXG4gICdhcHBsaWNhdGlvbi96aXAnLFxuICAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IERvY3VtZW50TWltZVR5cGVzID0gW1xuICAnYXBwbGljYXRpb24veC1hYml3b3JkJyxcbiAgJ2FwcGxpY2F0aW9uL3gtZnJlZWFyYycsXG4gICdhcHBsaWNhdGlvbi92bmQuYW1hem9uLmVib29rJyxcbiAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbicsXG4gICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCcsXG4gICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXG4gICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5yYXInLFxuICAnYXBwbGljYXRpb24vcnRmJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBUZXh0TWltZVR5cGVzID0gW1xuICAndGV4dC9jc3MnLFxuICAndGV4dC9jc3YnLFxuICAndGV4dC9odG1sJyxcbiAgJ3RleHQvY2FsZW5kYXInLFxuICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAnYXBwbGljYXRpb24vbGQranNvbicsXG4gICd0ZXh0L2phdmFzY3JpcHQnLFxuICAndGV4dC9wbGFpbicsXG4gICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnLFxuICAnYXBwbGljYXRpb24veG1sJyxcbiAgJ3RleHQveG1sJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IEJpbmFyeURvY3NNaW1lVHlwZXMgPSBbXG4gICdhcHBsaWNhdGlvbi9lcHViK3ppcCcsXG4gICdhcHBsaWNhdGlvbi9wZGYnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgRm9udE1pbWVUeXBlcyA9IFtcbiAgJ2ZvbnQvb3RmJyxcbiAgJ2ZvbnQvdHRmJyxcbiAgJ2ZvbnQvd29mZicsXG4gICdmb250L3dvZmYyJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IE90aGVyTWltZVR5cGVzID0gW1xuICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgJ2FwcGxpY2F0aW9uL3gtY3NoJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5pbnN0YWxsZXIreG1sJyxcbiAgJ2FwcGxpY2F0aW9uL3gtaHR0cGQtcGhwJyxcbiAgJ2FwcGxpY2F0aW9uL3gtc2gnLFxuICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnLFxuICAndm5kLnZpc2lvJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5tb3ppbGxhLnh1bCt4bWwnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgTWltZVR5cGVzID0gW1xuICAuLi5BdWRpb01pbWVUeXBlcyxcbiAgLi4uVmlkZW9NaW1lVHlwZXMsXG4gIC4uLkltYWdlTWltZVR5cGVzLFxuICAuLi5Db21wcmVzc2VkTWltZVR5cGVzLFxuICAuLi5Eb2N1bWVudE1pbWVUeXBlcyxcbiAgLi4uVGV4dE1pbWVUeXBlcyxcbiAgLi4uQmluYXJ5RG9jc01pbWVUeXBlcyxcbiAgLi4uT3RoZXJNaW1lVHlwZXMsXG4gIC4uLkZvbnRNaW1lVHlwZXMsXG4gIC4uLk90aGVyTWltZVR5cGVzLFxuXVxuXG50eXBlIFBvcHVsYXJNaW1lVHlwZXMgPSB0eXBlb2YgTWltZVR5cGVzW251bWJlcl1cblxuZXhwb3J0IHR5cGUgTWltZVR5cGUgPSBQb3B1bGFyTWltZVR5cGVzIHwge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0J1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgSWNvbiwgQnV0dG9uLCBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzLCBmbGF0IH0gZnJvbSAnYWRtaW4tYnJvJ1xuaW1wb3J0IHsgSW1hZ2VNaW1lVHlwZXMsIEF1ZGlvTWltZVR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvbWltZS10eXBlcy50eXBlJ1xuaW1wb3J0IFByb3BlcnR5Q3VzdG9tIGZyb20gJy4uL3R5cGVzL3Byb3BlcnR5LWN1c3RvbS50eXBlJ1xuXG50eXBlIFByb3BzID0gU2hvd1Byb3BlcnR5UHJvcHMgJiB7XG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xufTtcblxudHlwZSBTaW5nbGVGaWxlUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgcGF0aD86IHN0cmluZyxcbiAgbWltZVR5cGU/OiBzdHJpbmcsXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5jb25zdCBTaW5nbGVGaWxlOiBGQzxTaW5nbGVGaWxlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgcGF0aCwgbWltZVR5cGUsIHdpZHRoIH0gPSBwcm9wc1xuICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCkge1xuICAgIGlmIChtaW1lVHlwZSAmJiBJbWFnZU1pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSBhcyBhbnkpKSB7XG4gICAgICByZXR1cm4gPGltZyBzcmM9e3BhdGh9IHN0eWxlPXt7IG1heEhlaWdodDogd2lkdGgsIG1heFdpZHRoOiB3aWR0aCB9fSBhbHQ9e25hbWV9IC8+XG4gICAgfVxuICAgIGlmIChtaW1lVHlwZSAmJiBBdWRpb01pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSBhcyBhbnkpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YXVkaW9cbiAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgIHNyYz17cGF0aH1cbiAgICAgICAgPlxuICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZVxuICAgICAgICAgIDxjb2RlPmF1ZGlvPC9jb2RlPlxuICAgICAgICAgIDx0cmFjayBraW5kPVwiY2FwdGlvbnNcIiAvPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8QnV0dG9uIGFzPVwiYVwiIGhyZWY9e3BhdGh9IG1sPVwiZGVmYXVsdFwiIHNpemU9XCJzbVwiIHJvdW5kZWQgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxJY29uIGljb249XCJEb2N1bWVudERvd25sb2FkXCIgY29sb3I9XCJ3aGl0ZVwiIG1yPVwiZGVmYXVsdFwiIC8+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuY29uc3QgRmlsZTogRkM8UHJvcHM+ID0gKHsgd2lkdGgsIHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xuICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHkgYXMgdW5rbm93biBhcyB7IGN1c3RvbTogUHJvcGVydHlDdXN0b20gfVxuXG4gIGNvbnN0IHBhdGggPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpXG5cbiAgaWYgKCFwYXRoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmbGF0LmdldChcbiAgICByZWNvcmQ/LnBhcmFtcyxcbiAgICBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA/IGN1c3RvbS5maWxlTmFtZVByb3BlcnR5IDogY3VzdG9tLmtleVByb3BlcnR5LFxuICApXG4gIGNvbnN0IG1pbWVUeXBlID0gY3VzdG9tLm1pbWVUeXBlUHJvcGVydHkgJiYgZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5taW1lVHlwZVByb3BlcnR5KVxuXG4gIGlmICghcHJvcGVydHkuY3VzdG9tLm11bHRpcGxlKSB7XG4gICAgcmV0dXJuIDxTaW5nbGVGaWxlIHBhdGg9e3BhdGh9IG5hbWU9e25hbWV9IHdpZHRoPXt3aWR0aH0gbWltZVR5cGU9e21pbWVUeXBlfSAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3BhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gKFxuICAgICAgICA8U2luZ2xlRmlsZVxuICAgICAgICAgIGtleT17c2luZ2xlUGF0aH1cbiAgICAgICAgICBwYXRoPXtzaW5nbGVQYXRofVxuICAgICAgICAgIG5hbWU9e25hbWVbaW5kZXhdfVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBtaW1lVHlwZT17bWltZVR5cGVbaW5kZXhdfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluLWJybydcblxuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlJ1xuXG5jb25zdCBMaXN0OiBGQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+ICg8RmlsZSB3aWR0aD17MTAwfSB7Li4ucHJvcHN9IC8+KVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW4tYnJvJ1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlJ1xuXG5jb25zdCBTaG93OiBGQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXA+XG4gICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsfTwvTGFiZWw+XG4gICAgICA8RmlsZSB3aWR0aD1cIjEwMCVcIiB7Li4ucHJvcHN9IC8+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd1xuIiwiICBcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgIHdpdGhOb3RpY2UsIEJhc2VQcm9wZXJ0eVByb3BzLCBSZWNvcmRKU09OIH0gZnJvbSAnYWRtaW4tYnJvJ1xyXG5pbXBvcnQgeyBCdXR0b24sIExpbmsgfSBmcm9tIFwiQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtXCJcclxuXHJcbmNvbnN0IERvY3VtZW50QnV0dG9uU2hvdzogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyByZWNvcmQgICB9ID0gcHJvcHNcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXRlbXMocmVjb3JkLnBvcHVsYXRlZFsnaXRlbXMnXSBhcyBhbnkgKSAgIFxyXG4gICAgY29uc29sZS5sb2coJ3JlY29yZC5wYXJhbXMucmVkaXJlY3RVcmwnLHJlY29yZC5wYXJhbXMucmVkaXJlY3RVcmwpXHJcbiAgfSwgW10pICBcclxuXHJcbiBcclxuICByZXR1cm4gKFxyXG5cclxuICAgICAgXHJcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiByb3VuZGVkPlxyXG4gICAgICAgIDxMaW5rIHN0eWxlPXt7Y29sb3I6ICcjRkZGJywgdGV4dERlY29yYXRpb246ICdub25lJ319IHRhcmdldD1cImJsYW5rXCIgaHJlZj17YC8vJHtyZWNvcmQucGFyYW1zLnJlZGlyZWN0VXJsfWB9PkRvd25sb2FkIFBERjwvTGluaz5cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICBcclxuIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aE5vdGljZShEb2N1bWVudEJ1dHRvblNob3cpXHJcblxyXG5cclxuXHJcbiIsIiAgXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBUYWJsZSwgTGFiZWwsIEJhZGdlLFxyXG4gIFRhYmxlUm93LFxyXG4gIFRhYmxlQ2VsbCxcclxuICBUYWJsZUhlYWQsXHJcbiAgVGFibGVCb2R5LCBcclxuICBCdXR0b24sXHJcbiAgSWNvbixcclxuICBMaW5rfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IFZpZXdIZWxwZXJzIH0gZnJvbSAnYWRtaW4tYnJvJ1xyXG5cclxuXHJcbmNvbnN0IEl0ZW1zTGlzdCA9ICh7aXRlbXN9KSA9PiB7XHJcbiBjb25zdCB2aWV3SGVscGVyID0gbmV3IFZpZXdIZWxwZXJzKClcclxuICByZXR1cm4gKFxyXG4gICBcclxuXHJcbjxCb3ggICBtYj1cIng0XCIgdmFyaWFudD1cImdyZXlcIj5cclxuPExhYmVsPkl0ZW1zIFJlbGF0ZWQgdG8gdGhpcyBTYWxlczwvTGFiZWw+XHJcbiAgICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCI+XHJcbiAgICAgICBcclxuICAgICAgPFRhYmxlID5cclxuICAgICBcclxuICBcclxuXHJcbiAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgXHJcbiAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICBJdGVtIElEXHJcbiAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgIENvbXBsZXRpb24gRGF0ZVxyXG4gICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICBTdGF0dXNcclxuICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgRGV0YWlsc1xyXG4gICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICBcclxuICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgPC9UYWJsZUhlYWQ+XHJcblxyXG5cclxuICAgICA8VGFibGVCb2R5PlxyXG4gICBcclxuICAgICAgICB7aXRlbXM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbS5pZH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbS5kYXRlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPjxCYWRnZT57aXRlbS5zdGF0dXN9PC9CYWRnZT48L1RhYmxlQ2VsbD4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+IDxMaW5rIGhyZWY9e3ZpZXdIZWxwZXIuZWRpdFVybChcIkl0ZW1zXCIsaXRlbS5pZCl9ID48SWNvbiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0gY29sb3I9XCJibHVlXCIgaWNvbj1cIlZpZXdcIiB2YXJpYW50PVwiMjRcIiAvPjwvTGluaz4gPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgICA8L1RhYmxlQm9keT5cclxuXHJcbiAgIDwvVGFibGU+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcblxyXG4gIFxyXG4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtc0xpc3RcclxuXHJcblxyXG5cclxuIiwiICBcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgIEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW4tYnJvJ1xyXG5cclxuXHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4vaXRlbXMtbGlzdFwiXHJcblxyXG5jb25zdCBJdGVtc0xpc3RFZGl0OiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlY29yZCAgfSA9IHByb3BzXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXRlbXMocmVjb3JkLnBvcHVsYXRlZFsnaXRlbXMnXSBhcyBhbnkgKVxyXG4gIH0sIFtdKSBcclxuXHJcbiAgcmV0dXJuIChcclxuICA8SXRlbXNMaXN0IGl0ZW1zPXtpdGVtc30gLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1zTGlzdEVkaXRcclxuXHJcblxyXG5cclxuIiwiICBcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgIEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW4tYnJvJ1xyXG5cclxuXHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4vaXRlbXMtbGlzdFwiXHJcblxyXG5jb25zdCBJdGVtc0xpc3RTaG93OiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlY29yZCAgfSA9IHByb3BzXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXRlbXMocmVjb3JkLnBvcHVsYXRlZFsnaXRlbXMnXSBhcyBhbnkgKVxyXG4gIH0sIFtdKSBcclxuXHJcbiAgcmV0dXJuIChcclxuICA8SXRlbXNMaXN0IGl0ZW1zPXtpdGVtc30gLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1zTGlzdFNob3dcclxuXHJcblxyXG5cclxuIiwiICBcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXBpQ2xpZW50IH0gZnJvbSAnYWRtaW4tYnJvJ1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwaS5nZXREYXNoYm9hcmQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB2YXJpYW50PVwiZ3JleVwiPlxyXG4gICAgICA8Qm94IHZhcmlhbnQ9XCJ3aGl0ZVwiPlxyXG4gICAgICAgIHNvbWUgZGFzaGJvYXJkXHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcclxuXHJcbiIsIkFkbWluQnJvLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBDb21wb25lbnQxIGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3Bhc3N3b3Jkcy9jb21wb25lbnRzL2VkaXQnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQxID0gQ29tcG9uZW50MVxuaW1wb3J0IENvbXBvbmVudDIgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2VkaXQnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQyID0gQ29tcG9uZW50MlxuaW1wb3J0IENvbXBvbmVudDMgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQzID0gQ29tcG9uZW50M1xuaW1wb3J0IENvbXBvbmVudDQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQ0ID0gQ29tcG9uZW50NFxuaW1wb3J0IENvbXBvbmVudDUgZnJvbSAnLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvZG9jdW1lbnQtYnV0dG9uLXNob3cnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQ1ID0gQ29tcG9uZW50NVxuaW1wb3J0IENvbXBvbmVudDYgZnJvbSAnLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvaXRlbXMtbGlzdC1lZGl0J1xuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHMuQ29tcG9uZW50NiA9IENvbXBvbmVudDZcbmltcG9ydCBDb21wb25lbnQ3IGZyb20gJy4uL3NyYy9pbmZyYS9hZG1pbi9jb21wb25lbnRzL2l0ZW1zLWxpc3Qtc2hvdydcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDcgPSBDb21wb25lbnQ3XG5pbXBvcnQgQ29tcG9uZW50OCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDggPSBDb21wb25lbnQ4XG5pbXBvcnQgQ29tcG9uZW50OSBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvbGlzdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDkgPSBDb21wb25lbnQ5XG5pbXBvcnQgQ29tcG9uZW50MTAgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQxMCA9IENvbXBvbmVudDEwXG5pbXBvcnQgQ29tcG9uZW50MTEgZnJvbSAnLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkJ1xuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHMuQ29tcG9uZW50MTEgPSBDb21wb25lbnQxMSJdLCJuYW1lcyI6WyJQYXNzd29yZEVkaXQiLCJwcm9wcyIsIm9uQ2hhbmdlIiwicHJvcGVydHkiLCJyZWNvcmQiLCJ1c2VTdGF0ZSIsInNob3dQYXNzd29yZCIsInRvZ2dsZVBhc3N3b3JkIiwidXNlRWZmZWN0IiwibmFtZSIsImlkIiwiUmVhY3QiLCJCYXNlUHJvcGVydHlDb21wb25lbnQiLCJCb3giLCJUZXh0IiwiQnV0dG9uIiwiRWRpdCIsInBhcmFtcyIsImN1c3RvbSIsInBhdGgiLCJmbGF0IiwiZ2V0IiwiZmlsZVBhdGhQcm9wZXJ0eSIsImtleSIsImtleVByb3BlcnR5IiwiZmlsZSIsImZpbGVQcm9wZXJ0eSIsIm9yaWdpbmFsS2V5Iiwic2V0T3JpZ2luYWxLZXkiLCJmaWxlc1RvVXBsb2FkIiwic2V0RmlsZXNUb1VwbG9hZCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm9uVXBsb2FkIiwiZmlsZXMiLCJoYW5kbGVSZW1vdmUiLCJoYW5kbGVNdWx0aVJlbW92ZSIsInNpbmdsZUtleSIsImluZGV4IiwiaW5kZXhPZiIsImZpbGVzVG9EZWxldGUiLCJmaWxlc1RvRGVsZXRlUHJvcGVydHkiLCJuZXdQYXRoIiwibWFwIiwiY3VycmVudFBhdGgiLCJpIiwibmV3UGFyYW1zIiwic2V0IiwiY29uc29sZSIsImxvZyIsIkZvcm1Hcm91cCIsIkxhYmVsIiwibGFiZWwiLCJEcm9wWm9uZSIsIm11bHRpcGxlIiwibWltZVR5cGVzIiwibWF4U2l6ZSIsIkRyb3Bab25lSXRlbSIsIkF1ZGlvTWltZVR5cGVzIiwiSW1hZ2VNaW1lVHlwZXMiLCJTaW5nbGVGaWxlIiwibWltZVR5cGUiLCJ3aWR0aCIsImluY2x1ZGVzIiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJJY29uIiwiRmlsZSIsImZpbGVOYW1lUHJvcGVydHkiLCJtaW1lVHlwZVByb3BlcnR5Iiwic2luZ2xlUGF0aCIsIkxpc3QiLCJTaG93IiwiRG9jdW1lbnRCdXR0b25TaG93IiwiaXRlbXMiLCJzZXRJdGVtcyIsInBvcHVsYXRlZCIsInJlZGlyZWN0VXJsIiwiTGluayIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ3aXRoTm90aWNlIiwiSXRlbXNMaXN0Iiwidmlld0hlbHBlciIsIlZpZXdIZWxwZXJzIiwiVGFibGUiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsIlRhYmxlQm9keSIsIml0ZW0iLCJkYXRlIiwiQmFkZ2UiLCJzdGF0dXMiLCJlZGl0VXJsIiwiY3Vyc29yIiwiSXRlbXNMaXN0RWRpdCIsIkl0ZW1zTGlzdFNob3ciLCJhcGkiLCJBcGlDbGllbnQiLCJEYXNoYm9hcmQiLCJkYXRhIiwic2V0RGF0YSIsImdldERhc2hib2FyZCIsInRoZW4iLCJyZXNwb25zZSIsIkFkbWluQnJvIiwiVXNlckNvbXBvbmVudHMiLCJDb21wb25lbnQxIiwiQ29tcG9uZW50MiIsIkNvbXBvbmVudDMiLCJDb21wb25lbnQ0IiwiQ29tcG9uZW50NSIsIkNvbXBvbmVudDYiLCJDb21wb25lbnQ3IiwiQ29tcG9uZW50OCIsIkNvbXBvbmVudDkiLCJDb21wb25lbnQxMCIsIkNvbXBvbmVudDExIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUlBLElBQU1BLFlBQXlDLEdBQUcsU0FBNUNBLFlBQTRDLENBQUNDLEtBQUQsRUFBVztFQUFBLE1BQ25EQyxRQURtRCxHQUNwQkQsS0FEb0IsQ0FDbkRDLFFBRG1EO0VBQUEsTUFDekNDLFFBRHlDLEdBQ3BCRixLQURvQixDQUN6Q0UsUUFEeUM7RUFBQSxNQUMvQkMsTUFEK0IsR0FDcEJILEtBRG9CLENBQy9CRyxNQUQrQjs7RUFBQSxrQkFHcEJDLGNBQVEsQ0FBQyxLQUFELENBSFk7RUFBQTtFQUFBLE1BR3BEQyxZQUhvRDtFQUFBLE1BR3RDQyxjQUhzQzs7RUFLM0RDLEVBQUFBLGVBQVMsQ0FBQyxZQUFNO0VBQ2QsUUFBSSxDQUFDRixZQUFMLEVBQW1CO0VBQ2pCSixNQUFBQSxRQUFRLENBQUNDLFFBQVEsQ0FBQ00sSUFBVixFQUFnQixFQUFoQixDQUFSO0VBQ0Q7RUFDRixHQUpRLEVBSU4sQ0FBQ1AsUUFBRCxFQUFXQyxRQUFYLEVBQXFCRyxZQUFyQixDQUpNLENBQVQsQ0FMMkQ7O0VBWTNELE1BQUksQ0FBQ0YsTUFBTSxDQUFDTSxFQUFaLEVBQWdCO0VBQ2Qsd0JBQU9DLHdDQUFDQyw4QkFBRCxDQUF1QixRQUF2QixDQUFnQyxJQUFoQyxFQUF5Q1gsS0FBekMsQ0FBUDtFQUNEOztFQUVELHNCQUNFVSx3Q0FBQ0UsZ0JBQUQsUUFDR1AsWUFBWSxpQkFBSUssd0NBQUNDLDhCQUFELENBQXVCLFFBQXZCLENBQWdDLElBQWhDLEVBQXlDWCxLQUF6QyxDQURuQixlQUVFVSx3Q0FBQ0UsZ0JB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
