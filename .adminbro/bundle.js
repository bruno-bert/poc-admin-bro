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
  AdminBro.UserComponents.Component5 = ItemsListEdit;
  AdminBro.UserComponents.Component6 = ItemsListShow;
  AdminBro.UserComponents.Component7 = Edit;
  AdminBro.UserComponents.Component8 = List;
  AdminBro.UserComponents.Component9 = Show;
  AdminBro.UserComponents.Component10 = Dashboard;

}(React, AdminBro, AdminBroDesignSystem));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby9wYXNzd29yZHMvY29tcG9uZW50cy9lZGl0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9lZGl0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2ZpbGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cudHN4IiwiLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvaXRlbXMtbGlzdC50c3giLCIuLi9zcmMvaW5mcmEvYWRtaW4vY29tcG9uZW50cy9pdGVtcy1saXN0LWVkaXQudHN4IiwiLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvaXRlbXMtbGlzdC1zaG93LnRzeCIsIi4uL3NyYy9pbmZyYS9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZC50c3giLCIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzLCBCYXNlUHJvcGVydHlDb21wb25lbnQgfSBmcm9tICdhZG1pbi1icm8nXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuY29uc3QgUGFzc3dvcmRFZGl0OiBSZWFjdC5GQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcblxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCB0b2dnbGVQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2hvd1Bhc3N3b3JkKSB7XG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCAnJylcbiAgICB9XG4gIH0sIFtvbkNoYW5nZSwgcHJvcGVydHksIHNob3dQYXNzd29yZF0pXG5cbiAgLy8gRm9yIG5ldyByZWNvcmRzIGFsd2F5cyBzaG93IHRoZSBwcm9wZXJ0eVxuICBpZiAoIXJlY29yZC5pZCkge1xuICAgIHJldHVybiA8QmFzZVByb3BlcnR5Q29tcG9uZW50LlBhc3N3b3JkLkVkaXQgey4uLnByb3BzfSAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAge3Nob3dQYXNzd29yZCAmJiA8QmFzZVByb3BlcnR5Q29tcG9uZW50LlBhc3N3b3JkLkVkaXQgey4uLnByb3BzfSAvPn1cbiAgICAgIDxCb3ggbWI9XCJ4bFwiPlxuICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBhc3N3b3JkKCFzaG93UGFzc3dvcmQpfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gJ0NhbmNlbCcgOiAnQ2hhbmdlIHBhc3N3b3JkJ31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRFZGl0XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzLCBmbGF0IH0gZnJvbSAnYWRtaW4tYnJvJ1xuaW1wb3J0IHsgRHJvcFpvbmUsIEZvcm1Hcm91cCwgTGFiZWwsIERyb3Bab25lSXRlbSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCBQcm9wZXJ0eUN1c3RvbSBmcm9tICcuLi90eXBlcy9wcm9wZXJ0eS1jdXN0b20udHlwZSdcblxuY29uc3QgRWRpdDogRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCB7IHBhcmFtcyB9ID0gcmVjb3JkXG4gIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eSBhcyB1bmtub3duIGFzIHsgY3VzdG9tOiBQcm9wZXJ0eUN1c3RvbSB9XG5cbiAgY29uc3QgcGF0aCA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpXG4gIGNvbnN0IGtleSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KVxuICBjb25zdCBmaWxlID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVByb3BlcnR5KVxuXG4gIGNvbnN0IFtvcmlnaW5hbEtleSwgc2V0T3JpZ2luYWxLZXldID0gdXNlU3RhdGUoa2V5KVxuICBjb25zdCBbZmlsZXNUb1VwbG9hZCwgc2V0RmlsZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZTxBcnJheTxGaWxlPj4oW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpdCBtZWFucyBtZWFucyB0aGF0IHNvbWVvbmUgaGl0IHNhdmUgYW5kIG5ldyBmaWxlIGhhcyBiZWVuIHVwbG9hZGVkXG4gICAgLy8gaW4gdGhpcyBjYXNlIGZsaWVzVG9VcGxvYWQgc2hvdWxkIGJlIGNsZWFyZWQuXG4gICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gdXNlciB0dXJucyBvZmYgcmVkaXJlY3QgYWZ0ZXIgbmV3L2VkaXRcbiAgICBpZiAoXG4gICAgICAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSBvcmlnaW5hbEtleSlcbiAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiAhb3JpZ2luYWxLZXkpXG4gICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgQXJyYXkuaXNBcnJheShrZXkpICYmIGtleS5sZW5ndGggIT09IG9yaWdpbmFsS2V5Lmxlbmd0aClcbiAgICApIHtcbiAgICAgIHNldE9yaWdpbmFsS2V5KGtleSlcbiAgICAgIHNldEZpbGVzVG9VcGxvYWQoW10pXG4gICAgfVxuICB9LCBba2V5LCBvcmlnaW5hbEtleV0pXG5cbiAgY29uc3Qgb25VcGxvYWQgPSAoZmlsZXM6IEFycmF5PEZpbGU+KTogdm9pZCA9PiB7XG4gICAgc2V0RmlsZXNUb1VwbG9hZChmaWxlcylcbiAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBmaWxlcylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBudWxsKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTXVsdGlSZW1vdmUgPSAoc2luZ2xlS2V5KSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSAoZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KSB8fCBbXSkuaW5kZXhPZihzaW5nbGVLZXkpXG4gICAgY29uc3QgZmlsZXNUb0RlbGV0ZSA9IGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHkpIHx8IFtdXG4gICAgaWYgKFxuICAgICAgcGF0aCAmJiBwYXRoLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLm1hcCgoY3VycmVudFBhdGgsIGkpID0+IChpICE9PSBpbmRleCA/IGN1cnJlbnRQYXRoIDogbnVsbCkpXG4gICAgICBsZXQgbmV3UGFyYW1zID0gZmxhdC5zZXQoXG4gICAgICAgIHJlY29yZC5wYXJhbXMsXG4gICAgICAgIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHksXG4gICAgICAgIFsuLi5maWxlc1RvRGVsZXRlLCBpbmRleF0sXG4gICAgICApXG4gICAgICBuZXdQYXJhbXMgPSBmbGF0LnNldChuZXdQYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5LCBuZXdQYXRoKVxuXG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLnJlY29yZCxcbiAgICAgICAgcGFyYW1zOiBuZXdQYXJhbXMsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coJ1lvdSBjYW5ub3QgcmVtb3ZlIGZpbGUgd2hlbiB0aGVyZSBhcmUgbm8gdXBsb2FkZWQgZmlsZXMgeWV0JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXA+XG4gICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsfTwvTGFiZWw+XG4gICAgICA8RHJvcFpvbmVcbiAgICAgICAgb25DaGFuZ2U9e29uVXBsb2FkfVxuICAgICAgICBtdWx0aXBsZT17Y3VzdG9tLm11bHRpcGxlfVxuICAgICAgICB2YWxpZGF0ZT17e1xuICAgICAgICAgIG1pbWVUeXBlczogY3VzdG9tLm1pbWVUeXBlcyBhcyBBcnJheTxzdHJpbmc+LFxuICAgICAgICAgIG1heFNpemU6IGN1c3RvbS5tYXhTaXplLFxuICAgICAgICB9fVxuICAgICAgICBmaWxlcz17ZmlsZXNUb1VwbG9hZH1cbiAgICAgIC8+XG4gICAgICB7IWN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYgcGF0aCAmJiAhZmlsZXNUb1VwbG9hZC5sZW5ndGggJiYgZmlsZSAhPT0gbnVsbCAmJiAoXG4gICAgICAgIDxEcm9wWm9uZUl0ZW0gZmlsZW5hbWU9e2tleX0gc3JjPXtwYXRofSBvblJlbW92ZT17aGFuZGxlUmVtb3ZlfSAvPlxuICAgICAgKX1cbiAgICAgIHtjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIGtleS5sZW5ndGggJiYgcGF0aCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7a2V5Lm1hcCgoc2luZ2xlS2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSByZW1vdmUgaXRlbXMgd2Ugc2V0IG9ubHkgcGF0aCBpbmRleCB0byBudWxscy5cbiAgICAgICAgICAgIC8vIGtleSBpcyBzdGlsbCB0aGVyZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG1haW50YWluIGFsbCB0aGUgaW5kZXhlcy4gU28gaGVyZSB3ZSBzaW1wbHkgZmlsdGVyIG91dCBlbGVtZW50cyB3aGljaFxuICAgICAgICAgICAgLy8gd2VyZSByZW1vdmVkIGFuZCBkaXNwbGF5IG9ubHkgd2hhdCB3YXMgbGVmdFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwYXRoW2luZGV4XVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYXRoID8gKFxuICAgICAgICAgICAgICA8RHJvcFpvbmVJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtzaW5nbGVLZXl9XG4gICAgICAgICAgICAgICAgZmlsZW5hbWU9e3NpbmdsZUtleX1cbiAgICAgICAgICAgICAgICBzcmM9e3BhdGhbaW5kZXhdfVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBoYW5kbGVNdWx0aVJlbW92ZShzaW5nbGVLZXkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6ICcnXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICAgKSA6ICcnfVxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRcbiIsImV4cG9ydCBjb25zdCBBdWRpb01pbWVUeXBlcyA9IFtcbiAgJ2F1ZGlvL2FhYycsXG4gICdhdWRpby9taWRpJyxcbiAgJ2F1ZGlvL3gtbWlkaScsXG4gICdhdWRpby9tcGVnJyxcbiAgJ2F1ZGlvL29nZycsXG4gICdhcHBsaWNhdGlvbi9vZ2cnLFxuICAnYXVkaW8vb3B1cycsXG4gICdhdWRpby93YXYnLFxuICAnYXVkaW8vd2VibScsXG4gICdhdWRpby8zZ3BwMicsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBWaWRlb01pbWVUeXBlcyA9IFtcbiAgJ3ZpZGVvL3gtbXN2aWRlbycsXG4gICd2aWRlby9tcGVnJyxcbiAgJ3ZpZGVvL29nZycsXG4gICd2aWRlby9tcDJ0JyxcbiAgJ3ZpZGVvL3dlYm0nLFxuICAndmlkZW8vM2dwcCcsXG4gICd2aWRlby8zZ3BwMicsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBJbWFnZU1pbWVUeXBlcyA9IFtcbiAgJ2ltYWdlL2JtcCcsXG4gICdpbWFnZS9naWYnLFxuICAnaW1hZ2UvanBlZycsXG4gICdpbWFnZS9wbmcnLFxuICAnaW1hZ2Uvc3ZnK3htbCcsXG4gICdpbWFnZS92bmQubWljcm9zb2Z0Lmljb24nLFxuICAnaW1hZ2UvdGlmZicsXG4gICdpbWFnZS93ZWJwJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IENvbXByZXNzZWRNaW1lVHlwZXMgPSBbXG4gICdhcHBsaWNhdGlvbi94LWJ6aXAnLFxuICAnYXBwbGljYXRpb24veC1iemlwMicsXG4gICdhcHBsaWNhdGlvbi9nemlwJyxcbiAgJ2FwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZScsXG4gICdhcHBsaWNhdGlvbi94LXRhcicsXG4gICdhcHBsaWNhdGlvbi96aXAnLFxuICAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IERvY3VtZW50TWltZVR5cGVzID0gW1xuICAnYXBwbGljYXRpb24veC1hYml3b3JkJyxcbiAgJ2FwcGxpY2F0aW9uL3gtZnJlZWFyYycsXG4gICdhcHBsaWNhdGlvbi92bmQuYW1hem9uLmVib29rJyxcbiAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbicsXG4gICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCcsXG4gICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXG4gICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5yYXInLFxuICAnYXBwbGljYXRpb24vcnRmJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBUZXh0TWltZVR5cGVzID0gW1xuICAndGV4dC9jc3MnLFxuICAndGV4dC9jc3YnLFxuICAndGV4dC9odG1sJyxcbiAgJ3RleHQvY2FsZW5kYXInLFxuICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAnYXBwbGljYXRpb24vbGQranNvbicsXG4gICd0ZXh0L2phdmFzY3JpcHQnLFxuICAndGV4dC9wbGFpbicsXG4gICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnLFxuICAnYXBwbGljYXRpb24veG1sJyxcbiAgJ3RleHQveG1sJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IEJpbmFyeURvY3NNaW1lVHlwZXMgPSBbXG4gICdhcHBsaWNhdGlvbi9lcHViK3ppcCcsXG4gICdhcHBsaWNhdGlvbi9wZGYnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgRm9udE1pbWVUeXBlcyA9IFtcbiAgJ2ZvbnQvb3RmJyxcbiAgJ2ZvbnQvdHRmJyxcbiAgJ2ZvbnQvd29mZicsXG4gICdmb250L3dvZmYyJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IE90aGVyTWltZVR5cGVzID0gW1xuICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgJ2FwcGxpY2F0aW9uL3gtY3NoJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5pbnN0YWxsZXIreG1sJyxcbiAgJ2FwcGxpY2F0aW9uL3gtaHR0cGQtcGhwJyxcbiAgJ2FwcGxpY2F0aW9uL3gtc2gnLFxuICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnLFxuICAndm5kLnZpc2lvJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5tb3ppbGxhLnh1bCt4bWwnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgTWltZVR5cGVzID0gW1xuICAuLi5BdWRpb01pbWVUeXBlcyxcbiAgLi4uVmlkZW9NaW1lVHlwZXMsXG4gIC4uLkltYWdlTWltZVR5cGVzLFxuICAuLi5Db21wcmVzc2VkTWltZVR5cGVzLFxuICAuLi5Eb2N1bWVudE1pbWVUeXBlcyxcbiAgLi4uVGV4dE1pbWVUeXBlcyxcbiAgLi4uQmluYXJ5RG9jc01pbWVUeXBlcyxcbiAgLi4uT3RoZXJNaW1lVHlwZXMsXG4gIC4uLkZvbnRNaW1lVHlwZXMsXG4gIC4uLk90aGVyTWltZVR5cGVzLFxuXVxuXG50eXBlIFBvcHVsYXJNaW1lVHlwZXMgPSB0eXBlb2YgTWltZVR5cGVzW251bWJlcl1cblxuZXhwb3J0IHR5cGUgTWltZVR5cGUgPSBQb3B1bGFyTWltZVR5cGVzIHwge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0J1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgSWNvbiwgQnV0dG9uLCBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzLCBmbGF0IH0gZnJvbSAnYWRtaW4tYnJvJ1xuaW1wb3J0IHsgSW1hZ2VNaW1lVHlwZXMsIEF1ZGlvTWltZVR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvbWltZS10eXBlcy50eXBlJ1xuaW1wb3J0IFByb3BlcnR5Q3VzdG9tIGZyb20gJy4uL3R5cGVzL3Byb3BlcnR5LWN1c3RvbS50eXBlJ1xuXG50eXBlIFByb3BzID0gU2hvd1Byb3BlcnR5UHJvcHMgJiB7XG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xufTtcblxudHlwZSBTaW5nbGVGaWxlUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgcGF0aD86IHN0cmluZyxcbiAgbWltZVR5cGU/OiBzdHJpbmcsXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5jb25zdCBTaW5nbGVGaWxlOiBGQzxTaW5nbGVGaWxlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgcGF0aCwgbWltZVR5cGUsIHdpZHRoIH0gPSBwcm9wc1xuICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCkge1xuICAgIGlmIChtaW1lVHlwZSAmJiBJbWFnZU1pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSBhcyBhbnkpKSB7XG4gICAgICByZXR1cm4gPGltZyBzcmM9e3BhdGh9IHN0eWxlPXt7IG1heEhlaWdodDogd2lkdGgsIG1heFdpZHRoOiB3aWR0aCB9fSBhbHQ9e25hbWV9IC8+XG4gICAgfVxuICAgIGlmIChtaW1lVHlwZSAmJiBBdWRpb01pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSBhcyBhbnkpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YXVkaW9cbiAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgIHNyYz17cGF0aH1cbiAgICAgICAgPlxuICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZVxuICAgICAgICAgIDxjb2RlPmF1ZGlvPC9jb2RlPlxuICAgICAgICAgIDx0cmFjayBraW5kPVwiY2FwdGlvbnNcIiAvPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8QnV0dG9uIGFzPVwiYVwiIGhyZWY9e3BhdGh9IG1sPVwiZGVmYXVsdFwiIHNpemU9XCJzbVwiIHJvdW5kZWQgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxJY29uIGljb249XCJEb2N1bWVudERvd25sb2FkXCIgY29sb3I9XCJ3aGl0ZVwiIG1yPVwiZGVmYXVsdFwiIC8+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuY29uc3QgRmlsZTogRkM8UHJvcHM+ID0gKHsgd2lkdGgsIHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xuICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHkgYXMgdW5rbm93biBhcyB7IGN1c3RvbTogUHJvcGVydHlDdXN0b20gfVxuXG4gIGNvbnN0IHBhdGggPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpXG5cbiAgaWYgKCFwYXRoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBmbGF0LmdldChcbiAgICByZWNvcmQ/LnBhcmFtcyxcbiAgICBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA/IGN1c3RvbS5maWxlTmFtZVByb3BlcnR5IDogY3VzdG9tLmtleVByb3BlcnR5LFxuICApXG4gIGNvbnN0IG1pbWVUeXBlID0gY3VzdG9tLm1pbWVUeXBlUHJvcGVydHkgJiYgZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5taW1lVHlwZVByb3BlcnR5KVxuXG4gIGlmICghcHJvcGVydHkuY3VzdG9tLm11bHRpcGxlKSB7XG4gICAgcmV0dXJuIDxTaW5nbGVGaWxlIHBhdGg9e3BhdGh9IG5hbWU9e25hbWV9IHdpZHRoPXt3aWR0aH0gbWltZVR5cGU9e21pbWVUeXBlfSAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3BhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gKFxuICAgICAgICA8U2luZ2xlRmlsZVxuICAgICAgICAgIGtleT17c2luZ2xlUGF0aH1cbiAgICAgICAgICBwYXRoPXtzaW5nbGVQYXRofVxuICAgICAgICAgIG5hbWU9e25hbWVbaW5kZXhdfVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBtaW1lVHlwZT17bWltZVR5cGVbaW5kZXhdfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluLWJybydcblxuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlJ1xuXG5jb25zdCBMaXN0OiBGQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+ICg8RmlsZSB3aWR0aD17MTAwfSB7Li4ucHJvcHN9IC8+KVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW4tYnJvJ1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlJ1xuXG5jb25zdCBTaG93OiBGQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXA+XG4gICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsfTwvTGFiZWw+XG4gICAgICA8RmlsZSB3aWR0aD1cIjEwMCVcIiB7Li4ucHJvcHN9IC8+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd1xuIiwiICBcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCb3gsIFRhYmxlLCBMYWJlbCwgQmFkZ2UsXHJcbiAgVGFibGVSb3csXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlSGVhZCxcclxuICBUYWJsZUJvZHksIFxyXG4gIEJ1dHRvbixcclxuICBJY29uLFxyXG4gIExpbmt9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgVmlld0hlbHBlcnMgfSBmcm9tICdhZG1pbi1icm8nXHJcblxyXG5cclxuY29uc3QgSXRlbXNMaXN0ID0gKHtpdGVtc30pID0+IHtcclxuIGNvbnN0IHZpZXdIZWxwZXIgPSBuZXcgVmlld0hlbHBlcnMoKVxyXG4gIHJldHVybiAoXHJcbiAgIFxyXG5cclxuPEJveCAgIG1iPVwieDRcIiB2YXJpYW50PVwiZ3JleVwiPlxyXG48TGFiZWw+SXRlbXMgUmVsYXRlZCB0byB0aGlzIFNhbGVzPC9MYWJlbD5cclxuICAgICAgPEJveCB2YXJpYW50PVwid2hpdGVcIj5cclxuICAgICAgIFxyXG4gICAgICA8VGFibGUgPlxyXG4gICAgIFxyXG4gIFxyXG5cclxuICAgICA8VGFibGVIZWFkPlxyXG4gICAgICBcclxuICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgIEl0ZW0gSURcclxuICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgQ29tcGxldGlvbiBEYXRlXHJcbiAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgIFN0YXR1c1xyXG4gICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICBEZXRhaWxzXHJcbiAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIFxyXG4gICAgICAgPC9UYWJsZVJvdz5cclxuICAgICA8L1RhYmxlSGVhZD5cclxuXHJcblxyXG4gICAgIDxUYWJsZUJvZHk+XHJcbiAgIFxyXG4gICAgICAgIHtpdGVtcz8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICBcclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLmlkfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLmRhdGV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+PEJhZGdlPntpdGVtLnN0YXR1c308L0JhZGdlPjwvVGFibGVDZWxsPiAgICAgICAgICBcclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD4gPExpbmsgaHJlZj17dmlld0hlbHBlci5lZGl0VXJsKFwiSXRlbXNcIixpdGVtLmlkKX0gPjxJY29uIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fSBjb2xvcj1cImJsdWVcIiBpY29uPVwiVmlld1wiIHZhcmlhbnQ9XCIyNFwiIC8+PC9MaW5rPiA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgXHJcblxyXG4gICAgIDwvVGFibGVCb2R5PlxyXG5cclxuICAgPC9UYWJsZT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuXHJcbiAgXHJcbiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1zTGlzdFxyXG5cclxuXHJcblxyXG4iLCIgIFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyAgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbi1icm8nXHJcblxyXG5cclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi9pdGVtcy1saXN0XCJcclxuXHJcbmNvbnN0IEl0ZW1zTGlzdEVkaXQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVjb3JkICB9ID0gcHJvcHNcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJdGVtcyhyZWNvcmQucG9wdWxhdGVkWydpdGVtcyddIGFzIGFueSApXHJcbiAgfSwgW10pIFxyXG5cclxuICByZXR1cm4gKFxyXG4gIDxJdGVtc0xpc3QgaXRlbXM9e2l0ZW1zfSAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0RWRpdFxyXG5cclxuXHJcblxyXG4iLCIgIFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyAgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbi1icm8nXHJcblxyXG5cclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi9pdGVtcy1saXN0XCJcclxuXHJcbmNvbnN0IEl0ZW1zTGlzdFNob3c6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVjb3JkICB9ID0gcHJvcHNcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJdGVtcyhyZWNvcmQucG9wdWxhdGVkWydpdGVtcyddIGFzIGFueSApXHJcbiAgfSwgW10pIFxyXG5cclxuICByZXR1cm4gKFxyXG4gIDxJdGVtc0xpc3QgaXRlbXM9e2l0ZW1zfSAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0U2hvd1xyXG5cclxuXHJcblxyXG4iLCIgIFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICdhZG1pbi1icm8nXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBpLmdldERhc2hib2FyZCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHZhcmlhbnQ9XCJncmV5XCI+XHJcbiAgICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCI+XHJcbiAgICAgICAgc29tZSBkYXNoYm9hcmRcclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG5cclxuIiwiQWRtaW5Ccm8uVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IENvbXBvbmVudDEgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vcGFzc3dvcmRzL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDEgPSBDb21wb25lbnQxXG5pbXBvcnQgQ29tcG9uZW50MiBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDIgPSBDb21wb25lbnQyXG5pbXBvcnQgQ29tcG9uZW50MyBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvbGlzdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDMgPSBDb21wb25lbnQzXG5pbXBvcnQgQ29tcG9uZW50NCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvc2hvdydcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDQgPSBDb21wb25lbnQ0XG5pbXBvcnQgQ29tcG9uZW50NSBmcm9tICcuLi9zcmMvaW5mcmEvYWRtaW4vY29tcG9uZW50cy9pdGVtcy1saXN0LWVkaXQnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQ1ID0gQ29tcG9uZW50NVxuaW1wb3J0IENvbXBvbmVudDYgZnJvbSAnLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvaXRlbXMtbGlzdC1zaG93J1xuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHMuQ29tcG9uZW50NiA9IENvbXBvbmVudDZcbmltcG9ydCBDb21wb25lbnQ3IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9lZGl0J1xuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHMuQ29tcG9uZW50NyA9IENvbXBvbmVudDdcbmltcG9ydCBDb21wb25lbnQ4IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9saXN0J1xuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHMuQ29tcG9uZW50OCA9IENvbXBvbmVudDhcbmltcG9ydCBDb21wb25lbnQ5IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9zaG93J1xuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHMuQ29tcG9uZW50OSA9IENvbXBvbmVudDlcbmltcG9ydCBDb21wb25lbnQxMCBmcm9tICcuLi9zcmMvaW5mcmEvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQxMCA9IENvbXBvbmVudDEwIl0sIm5hbWVzIjpbIlBhc3N3b3JkRWRpdCIsInByb3BzIiwib25DaGFuZ2UiLCJwcm9wZXJ0eSIsInJlY29yZCIsInVzZVN0YXRlIiwic2hvd1Bhc3N3b3JkIiwidG9nZ2xlUGFzc3dvcmQiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiaWQiLCJSZWFjdCIsIkJhc2VQcm9wZXJ0eUNvbXBvbmVudCIsIkJveCIsIlRleHQiLCJCdXR0b24iLCJFZGl0IiwicGFyYW1zIiwiY3VzdG9tIiwicGF0aCIsImZsYXQiLCJnZXQiLCJmaWxlUGF0aFByb3BlcnR5Iiwia2V5Iiwia2V5UHJvcGVydHkiLCJmaWxlIiwiZmlsZVByb3BlcnR5Iiwib3JpZ2luYWxLZXkiLCJzZXRPcmlnaW5hbEtleSIsImZpbGVzVG9VcGxvYWQiLCJzZXRGaWxlc1RvVXBsb2FkIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib25VcGxvYWQiLCJmaWxlcyIsImhhbmRsZVJlbW92ZSIsImhhbmRsZU11bHRpUmVtb3ZlIiwic2luZ2xlS2V5IiwiaW5kZXgiLCJpbmRleE9mIiwiZmlsZXNUb0RlbGV0ZSIsImZpbGVzVG9EZWxldGVQcm9wZXJ0eSIsIm5ld1BhdGgiLCJtYXAiLCJjdXJyZW50UGF0aCIsImkiLCJuZXdQYXJhbXMiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiRm9ybUdyb3VwIiwiTGFiZWwiLCJsYWJlbCIsIkRyb3Bab25lIiwibXVsdGlwbGUiLCJtaW1lVHlwZXMiLCJtYXhTaXplIiwiRHJvcFpvbmVJdGVtIiwiQXVkaW9NaW1lVHlwZXMiLCJJbWFnZU1pbWVUeXBlcyIsIlNpbmdsZUZpbGUiLCJtaW1lVHlwZSIsIndpZHRoIiwiaW5jbHVkZXMiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIkljb24iLCJGaWxlIiwiZmlsZU5hbWVQcm9wZXJ0eSIsIm1pbWVUeXBlUHJvcGVydHkiLCJzaW5nbGVQYXRoIiwiTGlzdCIsIlNob3ciLCJJdGVtc0xpc3QiLCJpdGVtcyIsInZpZXdIZWxwZXIiLCJWaWV3SGVscGVycyIsIlRhYmxlIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJUYWJsZUNlbGwiLCJUYWJsZUJvZHkiLCJpdGVtIiwiZGF0ZSIsIkJhZGdlIiwic3RhdHVzIiwiTGluayIsImVkaXRVcmwiLCJjdXJzb3IiLCJJdGVtc0xpc3RFZGl0Iiwic2V0SXRlbXMiLCJwb3B1bGF0ZWQiLCJJdGVtc0xpc3RTaG93IiwiYXBpIiwiQXBpQ2xpZW50IiwiRGFzaGJvYXJkIiwiZGF0YSIsInNldERhdGEiLCJnZXREYXNoYm9hcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJBZG1pbkJybyIsIlVzZXJDb21wb25lbnRzIiwiQ29tcG9uZW50MSIsIkNvbXBvbmVudDIiLCJDb21wb25lbnQzIiwiQ29tcG9uZW50NCIsIkNvbXBvbmVudDUiLCJDb21wb25lbnQ2IiwiQ29tcG9uZW50NyIsIkNvbXBvbmVudDgiLCJDb21wb25lbnQ5IiwiQ29tcG9uZW50MTAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
