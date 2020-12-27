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
  AdminBro.UserComponents.Component5 = Edit;
  AdminBro.UserComponents.Component6 = List;
  AdminBro.UserComponents.Component7 = Show;
  AdminBro.UserComponents.Component8 = Dashboard;

}(React, AdminBro, AdminBroDesignSystem));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby9wYXNzd29yZHMvY29tcG9uZW50cy9lZGl0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9lZGl0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2ZpbGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cudHN4IiwiLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkLnRzeCIsIi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIEJhc2VQcm9wZXJ0eUNvbXBvbmVudCB9IGZyb20gJ2FkbWluLWJybydcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5jb25zdCBQYXNzd29yZEVkaXQ6IFJlYWN0LkZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHRvZ2dsZVBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzaG93UGFzc3dvcmQpIHtcbiAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsICcnKVxuICAgIH1cbiAgfSwgW29uQ2hhbmdlLCBwcm9wZXJ0eSwgc2hvd1Bhc3N3b3JkXSlcblxuICAvLyBGb3IgbmV3IHJlY29yZHMgYWx3YXlzIHNob3cgdGhlIHByb3BlcnR5XG4gIGlmICghcmVjb3JkLmlkKSB7XG4gICAgcmV0dXJuIDxCYXNlUHJvcGVydHlDb21wb25lbnQuUGFzc3dvcmQuRWRpdCB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICB7c2hvd1Bhc3N3b3JkICYmIDxCYXNlUHJvcGVydHlDb21wb25lbnQuUGFzc3dvcmQuRWRpdCB7Li4ucHJvcHN9IC8+fVxuICAgICAgPEJveCBtYj1cInhsXCI+XG4gICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlUGFzc3dvcmQoIXNob3dQYXNzd29yZCl9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyAnQ2FuY2VsJyA6ICdDaGFuZ2UgcGFzc3dvcmQnfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZEVkaXRcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIGZsYXQgfSBmcm9tICdhZG1pbi1icm8nXG5pbXBvcnQgeyBEcm9wWm9uZSwgRm9ybUdyb3VwLCBMYWJlbCwgRHJvcFpvbmVJdGVtIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IFByb3BlcnR5Q3VzdG9tIGZyb20gJy4uL3R5cGVzL3Byb3BlcnR5LWN1c3RvbS50eXBlJ1xuXG5jb25zdCBFZGl0OiBGQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IHsgcGFyYW1zIH0gPSByZWNvcmRcbiAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5IGFzIHVua25vd24gYXMgeyBjdXN0b206IFByb3BlcnR5Q3VzdG9tIH1cblxuICBjb25zdCBwYXRoID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSlcbiAgY29uc3Qga2V5ID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpXG4gIGNvbnN0IGZpbGUgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUHJvcGVydHkpXG5cbiAgY29uc3QgW29yaWdpbmFsS2V5LCBzZXRPcmlnaW5hbEtleV0gPSB1c2VTdGF0ZShrZXkpXG4gIGNvbnN0IFtmaWxlc1RvVXBsb2FkLCBzZXRGaWxlc1RvVXBsb2FkXSA9IHVzZVN0YXRlPEFycmF5PEZpbGU+PihbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGl0IG1lYW5zIG1lYW5zIHRoYXQgc29tZW9uZSBoaXQgc2F2ZSBhbmQgbmV3IGZpbGUgaGFzIGJlZW4gdXBsb2FkZWRcbiAgICAvLyBpbiB0aGlzIGNhc2UgZmxpZXNUb1VwbG9hZCBzaG91bGQgYmUgY2xlYXJlZC5cbiAgICAvLyBUaGlzIGhhcHBlbnMgd2hlbiB1c2VyIHR1cm5zIG9mZiByZWRpcmVjdCBhZnRlciBuZXcvZWRpdFxuICAgIGlmIChcbiAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkgIT09IG9yaWdpbmFsS2V5KVxuICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmICFvcmlnaW5hbEtleSlcbiAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KGtleSkgJiYga2V5Lmxlbmd0aCAhPT0gb3JpZ2luYWxLZXkubGVuZ3RoKVxuICAgICkge1xuICAgICAgc2V0T3JpZ2luYWxLZXkoa2V5KVxuICAgICAgc2V0RmlsZXNUb1VwbG9hZChbXSlcbiAgICB9XG4gIH0sIFtrZXksIG9yaWdpbmFsS2V5XSlcblxuICBjb25zdCBvblVwbG9hZCA9IChmaWxlczogQXJyYXk8RmlsZT4pOiB2b2lkID0+IHtcbiAgICBzZXRGaWxlc1RvVXBsb2FkKGZpbGVzKVxuICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIGZpbGVzKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIG51bGwpXG4gIH1cblxuICBjb25zdCBoYW5kbGVNdWx0aVJlbW92ZSA9IChzaW5nbGVLZXkpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IChmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpIHx8IFtdKS5pbmRleE9mKHNpbmdsZUtleSlcbiAgICBjb25zdCBmaWxlc1RvRGVsZXRlID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSkgfHwgW11cbiAgICBpZiAoXG4gICAgICBwYXRoICYmIHBhdGgubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGgubWFwKChjdXJyZW50UGF0aCwgaSkgPT4gKGkgIT09IGluZGV4ID8gY3VycmVudFBhdGggOiBudWxsKSlcbiAgICAgIGxldCBuZXdQYXJhbXMgPSBmbGF0LnNldChcbiAgICAgICAgcmVjb3JkLnBhcmFtcyxcbiAgICAgICAgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSxcbiAgICAgICAgWy4uLmZpbGVzVG9EZWxldGUsIGluZGV4XSxcbiAgICAgIClcbiAgICAgIG5ld1BhcmFtcyA9IGZsYXQuc2V0KG5ld1BhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHksIG5ld1BhdGgpXG5cbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ucmVjb3JkLFxuICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZygnWW91IGNhbm5vdCByZW1vdmUgZmlsZSB3aGVuIHRoZXJlIGFyZSBubyB1cGxvYWRlZCBmaWxlcyB5ZXQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cD5cbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgIDxEcm9wWm9uZVxuICAgICAgICBvbkNoYW5nZT17b25VcGxvYWR9XG4gICAgICAgIG11bHRpcGxlPXtjdXN0b20ubXVsdGlwbGV9XG4gICAgICAgIHZhbGlkYXRlPXt7XG4gICAgICAgICAgbWltZVR5cGVzOiBjdXN0b20ubWltZVR5cGVzIGFzIEFycmF5PHN0cmluZz4sXG4gICAgICAgICAgbWF4U2l6ZTogY3VzdG9tLm1heFNpemUsXG4gICAgICAgIH19XG4gICAgICAgIGZpbGVzPXtmaWxlc1RvVXBsb2FkfVxuICAgICAgLz5cbiAgICAgIHshY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBwYXRoICYmICFmaWxlc1RvVXBsb2FkLmxlbmd0aCAmJiBmaWxlICE9PSBudWxsICYmIChcbiAgICAgICAgPERyb3Bab25lSXRlbSBmaWxlbmFtZT17a2V5fSBzcmM9e3BhdGh9IG9uUmVtb3ZlPXtoYW5kbGVSZW1vdmV9IC8+XG4gICAgICApfVxuICAgICAge2N1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYga2V5Lmxlbmd0aCAmJiBwYXRoID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtrZXkubWFwKChzaW5nbGVLZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyB3aGVuIHdlIHJlbW92ZSBpdGVtcyB3ZSBzZXQgb25seSBwYXRoIGluZGV4IHRvIG51bGxzLlxuICAgICAgICAgICAgLy8ga2V5IGlzIHN0aWxsIHRoZXJlLiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gbWFpbnRhaW4gYWxsIHRoZSBpbmRleGVzLiBTbyBoZXJlIHdlIHNpbXBseSBmaWx0ZXIgb3V0IGVsZW1lbnRzIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZXJlIHJlbW92ZWQgYW5kIGRpc3BsYXkgb25seSB3aGF0IHdhcyBsZWZ0XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHBhdGhbaW5kZXhdXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFBhdGggPyAoXG4gICAgICAgICAgICAgIDxEcm9wWm9uZUl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e3NpbmdsZUtleX1cbiAgICAgICAgICAgICAgICBmaWxlbmFtZT17c2luZ2xlS2V5fVxuICAgICAgICAgICAgICAgIHNyYz17cGF0aFtpbmRleF19XG4gICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IGhhbmRsZU11bHRpUmVtb3ZlKHNpbmdsZUtleSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogJydcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICApIDogJyd9XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFxuIiwiZXhwb3J0IGNvbnN0IEF1ZGlvTWltZVR5cGVzID0gW1xuICAnYXVkaW8vYWFjJyxcbiAgJ2F1ZGlvL21pZGknLFxuICAnYXVkaW8veC1taWRpJyxcbiAgJ2F1ZGlvL21wZWcnLFxuICAnYXVkaW8vb2dnJyxcbiAgJ2FwcGxpY2F0aW9uL29nZycsXG4gICdhdWRpby9vcHVzJyxcbiAgJ2F1ZGlvL3dhdicsXG4gICdhdWRpby93ZWJtJyxcbiAgJ2F1ZGlvLzNncHAyJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IFZpZGVvTWltZVR5cGVzID0gW1xuICAndmlkZW8veC1tc3ZpZGVvJyxcbiAgJ3ZpZGVvL21wZWcnLFxuICAndmlkZW8vb2dnJyxcbiAgJ3ZpZGVvL21wMnQnLFxuICAndmlkZW8vd2VibScsXG4gICd2aWRlby8zZ3BwJyxcbiAgJ3ZpZGVvLzNncHAyJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IEltYWdlTWltZVR5cGVzID0gW1xuICAnaW1hZ2UvYm1wJyxcbiAgJ2ltYWdlL2dpZicsXG4gICdpbWFnZS9qcGVnJyxcbiAgJ2ltYWdlL3BuZycsXG4gICdpbWFnZS9zdmcreG1sJyxcbiAgJ2ltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbicsXG4gICdpbWFnZS90aWZmJyxcbiAgJ2ltYWdlL3dlYnAnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgQ29tcHJlc3NlZE1pbWVUeXBlcyA9IFtcbiAgJ2FwcGxpY2F0aW9uL3gtYnppcCcsXG4gICdhcHBsaWNhdGlvbi94LWJ6aXAyJyxcbiAgJ2FwcGxpY2F0aW9uL2d6aXAnLFxuICAnYXBwbGljYXRpb24vamF2YS1hcmNoaXZlJyxcbiAgJ2FwcGxpY2F0aW9uL3gtdGFyJyxcbiAgJ2FwcGxpY2F0aW9uL3ppcCcsXG4gICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRNaW1lVHlwZXMgPSBbXG4gICdhcHBsaWNhdGlvbi94LWFiaXdvcmQnLFxuICAnYXBwbGljYXRpb24veC1mcmVlYXJjJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5hbWF6b24uZWJvb2snLFxuICAnYXBwbGljYXRpb24vbXN3b3JkJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnLFxuICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nLFxuICAnYXBwbGljYXRpb24vdm5kLnJhcicsXG4gICdhcHBsaWNhdGlvbi9ydGYnLFxuICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0Jyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IFRleHRNaW1lVHlwZXMgPSBbXG4gICd0ZXh0L2NzcycsXG4gICd0ZXh0L2NzdicsXG4gICd0ZXh0L2h0bWwnLFxuICAndGV4dC9jYWxlbmRhcicsXG4gICd0ZXh0L2phdmFzY3JpcHQnLFxuICAnYXBwbGljYXRpb24vanNvbicsXG4gICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcbiAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICd0ZXh0L3BsYWluJyxcbiAgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsXG4gICdhcHBsaWNhdGlvbi94bWwnLFxuICAndGV4dC94bWwnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgQmluYXJ5RG9jc01pbWVUeXBlcyA9IFtcbiAgJ2FwcGxpY2F0aW9uL2VwdWIremlwJyxcbiAgJ2FwcGxpY2F0aW9uL3BkZicsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBGb250TWltZVR5cGVzID0gW1xuICAnZm9udC9vdGYnLFxuICAnZm9udC90dGYnLFxuICAnZm9udC93b2ZmJyxcbiAgJ2ZvbnQvd29mZjInLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgT3RoZXJNaW1lVHlwZXMgPSBbXG4gICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAnYXBwbGljYXRpb24veC1jc2gnLFxuICAnYXBwbGljYXRpb24vdm5kLmFwcGxlLmluc3RhbGxlcit4bWwnLFxuICAnYXBwbGljYXRpb24veC1odHRwZC1waHAnLFxuICAnYXBwbGljYXRpb24veC1zaCcsXG4gICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcsXG4gICd2bmQudmlzaW8nLFxuICAnYXBwbGljYXRpb24vdm5kLm1vemlsbGEueHVsK3htbCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBNaW1lVHlwZXMgPSBbXG4gIC4uLkF1ZGlvTWltZVR5cGVzLFxuICAuLi5WaWRlb01pbWVUeXBlcyxcbiAgLi4uSW1hZ2VNaW1lVHlwZXMsXG4gIC4uLkNvbXByZXNzZWRNaW1lVHlwZXMsXG4gIC4uLkRvY3VtZW50TWltZVR5cGVzLFxuICAuLi5UZXh0TWltZVR5cGVzLFxuICAuLi5CaW5hcnlEb2NzTWltZVR5cGVzLFxuICAuLi5PdGhlck1pbWVUeXBlcyxcbiAgLi4uRm9udE1pbWVUeXBlcyxcbiAgLi4uT3RoZXJNaW1lVHlwZXMsXG5dXG5cbnR5cGUgUG9wdWxhck1pbWVUeXBlcyA9IHR5cGVvZiBNaW1lVHlwZXNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBNaW1lVHlwZSA9IFBvcHVsYXJNaW1lVHlwZXMgfCB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBJY29uLCBCdXR0b24sIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMsIGZsYXQgfSBmcm9tICdhZG1pbi1icm8nXG5pbXBvcnQgeyBJbWFnZU1pbWVUeXBlcywgQXVkaW9NaW1lVHlwZXMgfSBmcm9tICcuLi90eXBlcy9taW1lLXR5cGVzLnR5cGUnXG5pbXBvcnQgUHJvcGVydHlDdXN0b20gZnJvbSAnLi4vdHlwZXMvcHJvcGVydHktY3VzdG9tLnR5cGUnXG5cbnR5cGUgUHJvcHMgPSBTaG93UHJvcGVydHlQcm9wcyAmIHtcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG59O1xuXG50eXBlIFNpbmdsZUZpbGVQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBwYXRoPzogc3RyaW5nLFxuICBtaW1lVHlwZT86IHN0cmluZyxcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmNvbnN0IFNpbmdsZUZpbGU6IEZDPFNpbmdsZUZpbGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBwYXRoLCBtaW1lVHlwZSwgd2lkdGggfSA9IHByb3BzXG4gIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgaWYgKG1pbWVUeXBlICYmIEltYWdlTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlIGFzIGFueSkpIHtcbiAgICAgIHJldHVybiA8aW1nIHNyYz17cGF0aH0gc3R5bGU9e3sgbWF4SGVpZ2h0OiB3aWR0aCwgbWF4V2lkdGg6IHdpZHRoIH19IGFsdD17bmFtZX0gLz5cbiAgICB9XG4gICAgaWYgKG1pbWVUeXBlICYmIEF1ZGlvTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlIGFzIGFueSkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxhdWRpb1xuICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgc3JjPXtwYXRofVxuICAgICAgICA+XG4gICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlXG4gICAgICAgICAgPGNvZGU+YXVkaW88L2NvZGU+XG4gICAgICAgICAgPHRyYWNrIGtpbmQ9XCJjYXB0aW9uc1wiIC8+XG4gICAgICAgIDwvYXVkaW8+XG4gICAgICApXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxCdXR0b24gYXM9XCJhXCIgaHJlZj17cGF0aH0gbWw9XCJkZWZhdWx0XCIgc2l6ZT1cInNtXCIgcm91bmRlZCB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEljb24gaWNvbj1cIkRvY3VtZW50RG93bmxvYWRcIiBjb2xvcj1cIndoaXRlXCIgbXI9XCJkZWZhdWx0XCIgLz5cbiAgICAgICAge25hbWV9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBGaWxlOiBGQzxQcm9wcz4gPSAoeyB3aWR0aCwgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XG4gIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eSBhcyB1bmtub3duIGFzIHsgY3VzdG9tOiBQcm9wZXJ0eUN1c3RvbSB9XG5cbiAgY29uc3QgcGF0aCA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSlcblxuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZsYXQuZ2V0KFxuICAgIHJlY29yZD8ucGFyYW1zLFxuICAgIGN1c3RvbS5maWxlTmFtZVByb3BlcnR5ID8gY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgOiBjdXN0b20ua2V5UHJvcGVydHksXG4gIClcbiAgY29uc3QgbWltZVR5cGUgPSBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eSAmJiBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLm1pbWVUeXBlUHJvcGVydHkpXG5cbiAgaWYgKCFwcm9wZXJ0eS5jdXN0b20ubXVsdGlwbGUpIHtcbiAgICByZXR1cm4gPFNpbmdsZUZpbGUgcGF0aD17cGF0aH0gbmFtZT17bmFtZX0gd2lkdGg9e3dpZHRofSBtaW1lVHlwZT17bWltZVR5cGV9IC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTaW5nbGVGaWxlXG4gICAgICAgICAga2V5PXtzaW5nbGVQYXRofVxuICAgICAgICAgIHBhdGg9e3NpbmdsZVBhdGh9XG4gICAgICAgICAgbmFtZT17bmFtZVtpbmRleF19XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIG1pbWVUeXBlPXttaW1lVHlwZVtpbmRleF19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW4tYnJvJ1xuXG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUnXG5cbmNvbnN0IExpc3Q6IEZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4gKDxGaWxlIHdpZHRoPXsxMDB9IHsuLi5wcm9wc30gLz4pXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbi1icm8nXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUnXG5cbmNvbnN0IFNob3c6IEZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5IH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cD5cbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgIDxGaWxlIHdpZHRoPVwiMTAwJVwiIHsuLi5wcm9wc30gLz5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93XG4iLCIgIFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICdhZG1pbi1icm8nXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBpLmdldERhc2hib2FyZCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHZhcmlhbnQ9XCJncmV5XCI+XHJcbiAgICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCI+XHJcbiAgICAgICAgc29tZSBkYXNoYm9hcmRcclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG5cclxuIiwiQWRtaW5Ccm8uVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IENvbXBvbmVudDEgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vcGFzc3dvcmRzL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDEgPSBDb21wb25lbnQxXG5pbXBvcnQgQ29tcG9uZW50MiBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDIgPSBDb21wb25lbnQyXG5pbXBvcnQgQ29tcG9uZW50MyBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvbGlzdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDMgPSBDb21wb25lbnQzXG5pbXBvcnQgQ29tcG9uZW50NCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvc2hvdydcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDQgPSBDb21wb25lbnQ0XG5pbXBvcnQgQ29tcG9uZW50NSBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDUgPSBDb21wb25lbnQ1XG5pbXBvcnQgQ29tcG9uZW50NiBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvbGlzdCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDYgPSBDb21wb25lbnQ2XG5pbXBvcnQgQ29tcG9uZW50NyBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvc2hvdydcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDcgPSBDb21wb25lbnQ3XG5pbXBvcnQgQ29tcG9uZW50OCBmcm9tICcuLi9zcmMvaW5mcmEvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQ4ID0gQ29tcG9uZW50OCJdLCJuYW1lcyI6WyJQYXNzd29yZEVkaXQiLCJwcm9wcyIsIm9uQ2hhbmdlIiwicHJvcGVydHkiLCJyZWNvcmQiLCJ1c2VTdGF0ZSIsInNob3dQYXNzd29yZCIsInRvZ2dsZVBhc3N3b3JkIiwidXNlRWZmZWN0IiwibmFtZSIsImlkIiwiUmVhY3QiLCJCYXNlUHJvcGVydHlDb21wb25lbnQiLCJCb3giLCJUZXh0IiwiQnV0dG9uIiwiRWRpdCIsInBhcmFtcyIsImN1c3RvbSIsInBhdGgiLCJmbGF0IiwiZ2V0IiwiZmlsZVBhdGhQcm9wZXJ0eSIsImtleSIsImtleVByb3BlcnR5IiwiZmlsZSIsImZpbGVQcm9wZXJ0eSIsIm9yaWdpbmFsS2V5Iiwic2V0T3JpZ2luYWxLZXkiLCJmaWxlc1RvVXBsb2FkIiwic2V0RmlsZXNUb1VwbG9hZCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm9uVXBsb2FkIiwiZmlsZXMiLCJoYW5kbGVSZW1vdmUiLCJoYW5kbGVNdWx0aVJlbW92ZSIsInNpbmdsZUtleSIsImluZGV4IiwiaW5kZXhPZiIsImZpbGVzVG9EZWxldGUiLCJmaWxlc1RvRGVsZXRlUHJvcGVydHkiLCJuZXdQYXRoIiwibWFwIiwiY3VycmVudFBhdGgiLCJpIiwibmV3UGFyYW1zIiwic2V0IiwiY29uc29sZSIsImxvZyIsIkZvcm1Hcm91cCIsIkxhYmVsIiwibGFiZWwiLCJEcm9wWm9uZSIsIm11bHRpcGxlIiwibWltZVR5cGVzIiwibWF4U2l6ZSIsIkRyb3Bab25lSXRlbSIsIkF1ZGlvTWltZVR5cGVzIiwiSW1hZ2VNaW1lVHlwZXMiLCJTaW5nbGVGaWxlIiwibWltZVR5cGUiLCJ3aWR0aCIsImluY2x1ZGVzIiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJJY29uIiwiRmlsZSIsImZpbGVOYW1lUHJvcGVydHkiLCJtaW1lVHlwZVByb3BlcnR5Iiwic2luZ2xlUGF0aCIsIkxpc3QiLCJTaG93IiwiYXBpIiwiQXBpQ2xpZW50IiwiRGFzaGJvYXJkIiwiZGF0YSIsInNldERhdGEiLCJnZXREYXNoYm9hcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJBZG1pbkJybyIsIlVzZXJDb21wb25lbnRzIiwiQ29tcG9uZW50MSIsIkNvbXBvbmVudDIiLCJDb21wb25lbnQzIiwiQ29tcG9uZW50NCIsIkNvbXBvbmVudDUiLCJDb21wb25lbnQ2IiwiQ29tcG9uZW50NyIsIkNvbXBvbmVudDgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSUEsSUFBTUEsWUFBeUMsR0FBRyxTQUE1Q0EsWUFBNEMsQ0FBQ0MsS0FBRCxFQUFXO0VBQUEsTUFDbkRDLFFBRG1ELEdBQ3BCRCxLQURvQixDQUNuREMsUUFEbUQ7RUFBQSxNQUN6Q0MsUUFEeUMsR0FDcEJGLEtBRG9CLENBQ3pDRSxRQUR5QztFQUFBLE1BQy9CQyxNQUQrQixHQUNwQkgsS0FEb0IsQ0FDL0JHLE1BRCtCOztFQUFBLGtCQUdwQkMsY0FBUSxDQUFDLEtBQUQsQ0FIWTtFQUFBO0VBQUEsTUFHcERDLFlBSG9EO0VBQUEsTUFHdENDLGNBSHNDOztFQUszREMsRUFBQUEsZUFBUyxDQUFDLFlBQU07RUFDZCxRQUFJLENBQUNGLFlBQUwsRUFBbUI7RUFDakJKLE1BQUFBLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDTSxJQUFWLEVBQWdCLEVBQWhCLENBQVI7RUFDRDtFQUNGLEdBSlEsRUFJTixDQUFDUCxRQUFELEVBQVdDLFFBQVgsRUFBcUJHLFlBQXJCLENBSk0sQ0FBVCxDQUwyRDs7RUFZM0QsTUFBSSxDQUFDRixNQUFNLENBQUNNLEVBQVosRUFBZ0I7RUFDZCx3QkFBT0Msd0NBQUNDLDhCQUFELENBQXVCLFFBQXZCLENBQWdDLElBQWhDLEVBQXlDWCxLQUF6QyxDQUFQO0VBQ0Q7O0VBRUQsc0JBQ0VVLHdDQUFDRSxnQkFBRCxRQUNHUCxZQUFZLGlCQUFJSyx3Q0FBQ0MsOEJBQUQsQ0FBdUIsUUFBdkIs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
