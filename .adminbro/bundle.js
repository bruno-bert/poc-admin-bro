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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGFkbWluLWJyby9wYXNzd29yZHMvY29tcG9uZW50cy9lZGl0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9lZGl0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2ZpbGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cudHN4IiwiLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkLnRzeCIsIi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIEJhc2VQcm9wZXJ0eUNvbXBvbmVudCB9IGZyb20gJ2FkbWluLWJybydcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5jb25zdCBQYXNzd29yZEVkaXQ6IFJlYWN0LkZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHRvZ2dsZVBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzaG93UGFzc3dvcmQpIHtcbiAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsICcnKVxuICAgIH1cbiAgfSwgW29uQ2hhbmdlLCBwcm9wZXJ0eSwgc2hvd1Bhc3N3b3JkXSlcblxuICAvLyBGb3IgbmV3IHJlY29yZHMgYWx3YXlzIHNob3cgdGhlIHByb3BlcnR5XG4gIGlmICghcmVjb3JkLmlkKSB7XG4gICAgcmV0dXJuIDxCYXNlUHJvcGVydHlDb21wb25lbnQuUGFzc3dvcmQuRWRpdCB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICB7c2hvd1Bhc3N3b3JkICYmIDxCYXNlUHJvcGVydHlDb21wb25lbnQuUGFzc3dvcmQuRWRpdCB7Li4ucHJvcHN9IC8+fVxuICAgICAgPEJveCBtYj1cInhsXCI+XG4gICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlUGFzc3dvcmQoIXNob3dQYXNzd29yZCl9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyAnQ2FuY2VsJyA6ICdDaGFuZ2UgcGFzc3dvcmQnfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZEVkaXRcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIGZsYXQgfSBmcm9tICdhZG1pbi1icm8nXG5pbXBvcnQgeyBEcm9wWm9uZSwgRm9ybUdyb3VwLCBMYWJlbCwgRHJvcFpvbmVJdGVtIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IFByb3BlcnR5Q3VzdG9tIGZyb20gJy4uL3R5cGVzL3Byb3BlcnR5LWN1c3RvbS50eXBlJ1xuXG5jb25zdCBFZGl0OiBGQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IHsgcGFyYW1zIH0gPSByZWNvcmRcbiAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5IGFzIHVua25vd24gYXMgeyBjdXN0b206IFByb3BlcnR5Q3VzdG9tIH1cblxuICBjb25zdCBwYXRoID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSlcbiAgY29uc3Qga2V5ID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpXG4gIGNvbnN0IGZpbGUgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUHJvcGVydHkpXG5cbiAgY29uc3QgW29yaWdpbmFsS2V5LCBzZXRPcmlnaW5hbEtleV0gPSB1c2VTdGF0ZShrZXkpXG4gIGNvbnN0IFtmaWxlc1RvVXBsb2FkLCBzZXRGaWxlc1RvVXBsb2FkXSA9IHVzZVN0YXRlPEFycmF5PEZpbGU+PihbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGl0IG1lYW5zIG1lYW5zIHRoYXQgc29tZW9uZSBoaXQgc2F2ZSBhbmQgbmV3IGZpbGUgaGFzIGJlZW4gdXBsb2FkZWRcbiAgICAvLyBpbiB0aGlzIGNhc2UgZmxpZXNUb1VwbG9hZCBzaG91bGQgYmUgY2xlYXJlZC5cbiAgICAvLyBUaGlzIGhhcHBlbnMgd2hlbiB1c2VyIHR1cm5zIG9mZiByZWRpcmVjdCBhZnRlciBuZXcvZWRpdFxuICAgIGlmIChcbiAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkgIT09IG9yaWdpbmFsS2V5KVxuICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmICFvcmlnaW5hbEtleSlcbiAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KGtleSkgJiYga2V5Lmxlbmd0aCAhPT0gb3JpZ2luYWxLZXkubGVuZ3RoKVxuICAgICkge1xuICAgICAgc2V0T3JpZ2luYWxLZXkoa2V5KVxuICAgICAgc2V0RmlsZXNUb1VwbG9hZChbXSlcbiAgICB9XG4gIH0sIFtrZXksIG9yaWdpbmFsS2V5XSlcblxuICBjb25zdCBvblVwbG9hZCA9IChmaWxlczogQXJyYXk8RmlsZT4pOiB2b2lkID0+IHtcbiAgICBzZXRGaWxlc1RvVXBsb2FkKGZpbGVzKVxuICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIGZpbGVzKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIG51bGwpXG4gIH1cblxuICBjb25zdCBoYW5kbGVNdWx0aVJlbW92ZSA9IChzaW5nbGVLZXkpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IChmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpIHx8IFtdKS5pbmRleE9mKHNpbmdsZUtleSlcbiAgICBjb25zdCBmaWxlc1RvRGVsZXRlID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSkgfHwgW11cbiAgICBpZiAoXG4gICAgICBwYXRoICYmIHBhdGgubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGgubWFwKChjdXJyZW50UGF0aCwgaSkgPT4gKGkgIT09IGluZGV4ID8gY3VycmVudFBhdGggOiBudWxsKSlcbiAgICAgIGxldCBuZXdQYXJhbXMgPSBmbGF0LnNldChcbiAgICAgICAgcmVjb3JkLnBhcmFtcyxcbiAgICAgICAgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSxcbiAgICAgICAgWy4uLmZpbGVzVG9EZWxldGUsIGluZGV4XSxcbiAgICAgIClcbiAgICAgIG5ld1BhcmFtcyA9IGZsYXQuc2V0KG5ld1BhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHksIG5ld1BhdGgpXG5cbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ucmVjb3JkLFxuICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZygnWW91IGNhbm5vdCByZW1vdmUgZmlsZSB3aGVuIHRoZXJlIGFyZSBubyB1cGxvYWRlZCBmaWxlcyB5ZXQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cD5cbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgIDxEcm9wWm9uZVxuICAgICAgICBvbkNoYW5nZT17b25VcGxvYWR9XG4gICAgICAgIG11bHRpcGxlPXtjdXN0b20ubXVsdGlwbGV9XG4gICAgICAgIHZhbGlkYXRlPXt7XG4gICAgICAgICAgbWltZVR5cGVzOiBjdXN0b20ubWltZVR5cGVzIGFzIEFycmF5PHN0cmluZz4sXG4gICAgICAgICAgbWF4U2l6ZTogY3VzdG9tLm1heFNpemUsXG4gICAgICAgIH19XG4gICAgICAgIGZpbGVzPXtmaWxlc1RvVXBsb2FkfVxuICAgICAgLz5cbiAgICAgIHshY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBwYXRoICYmICFmaWxlc1RvVXBsb2FkLmxlbmd0aCAmJiBmaWxlICE9PSBudWxsICYmIChcbiAgICAgICAgPERyb3Bab25lSXRlbSBmaWxlbmFtZT17a2V5fSBzcmM9e3BhdGh9IG9uUmVtb3ZlPXtoYW5kbGVSZW1vdmV9IC8+XG4gICAgICApfVxuICAgICAge2N1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYga2V5Lmxlbmd0aCAmJiBwYXRoID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtrZXkubWFwKChzaW5nbGVLZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyB3aGVuIHdlIHJlbW92ZSBpdGVtcyB3ZSBzZXQgb25seSBwYXRoIGluZGV4IHRvIG51bGxzLlxuICAgICAgICAgICAgLy8ga2V5IGlzIHN0aWxsIHRoZXJlLiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gbWFpbnRhaW4gYWxsIHRoZSBpbmRleGVzLiBTbyBoZXJlIHdlIHNpbXBseSBmaWx0ZXIgb3V0IGVsZW1lbnRzIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZXJlIHJlbW92ZWQgYW5kIGRpc3BsYXkgb25seSB3aGF0IHdhcyBsZWZ0XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHBhdGhbaW5kZXhdXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFBhdGggPyAoXG4gICAgICAgICAgICAgIDxEcm9wWm9uZUl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e3NpbmdsZUtleX1cbiAgICAgICAgICAgICAgICBmaWxlbmFtZT17c2luZ2xlS2V5fVxuICAgICAgICAgICAgICAgIHNyYz17cGF0aFtpbmRleF19XG4gICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IGhhbmRsZU11bHRpUmVtb3ZlKHNpbmdsZUtleSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogJydcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICApIDogJyd9XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFxuIiwiZXhwb3J0IGNvbnN0IEF1ZGlvTWltZVR5cGVzID0gW1xuICAnYXVkaW8vYWFjJyxcbiAgJ2F1ZGlvL21pZGknLFxuICAnYXVkaW8veC1taWRpJyxcbiAgJ2F1ZGlvL21wZWcnLFxuICAnYXVkaW8vb2dnJyxcbiAgJ2FwcGxpY2F0aW9uL29nZycsXG4gICdhdWRpby9vcHVzJyxcbiAgJ2F1ZGlvL3dhdicsXG4gICdhdWRpby93ZWJtJyxcbiAgJ2F1ZGlvLzNncHAyJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IFZpZGVvTWltZVR5cGVzID0gW1xuICAndmlkZW8veC1tc3ZpZGVvJyxcbiAgJ3ZpZGVvL21wZWcnLFxuICAndmlkZW8vb2dnJyxcbiAgJ3ZpZGVvL21wMnQnLFxuICAndmlkZW8vd2VibScsXG4gICd2aWRlby8zZ3BwJyxcbiAgJ3ZpZGVvLzNncHAyJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IEltYWdlTWltZVR5cGVzID0gW1xuICAnaW1hZ2UvYm1wJyxcbiAgJ2ltYWdlL2dpZicsXG4gICdpbWFnZS9qcGVnJyxcbiAgJ2ltYWdlL3BuZycsXG4gICdpbWFnZS9zdmcreG1sJyxcbiAgJ2ltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbicsXG4gICdpbWFnZS90aWZmJyxcbiAgJ2ltYWdlL3dlYnAnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgQ29tcHJlc3NlZE1pbWVUeXBlcyA9IFtcbiAgJ2FwcGxpY2F0aW9uL3gtYnppcCcsXG4gICdhcHBsaWNhdGlvbi94LWJ6aXAyJyxcbiAgJ2FwcGxpY2F0aW9uL2d6aXAnLFxuICAnYXBwbGljYXRpb24vamF2YS1hcmNoaXZlJyxcbiAgJ2FwcGxpY2F0aW9uL3gtdGFyJyxcbiAgJ2FwcGxpY2F0aW9uL3ppcCcsXG4gICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRNaW1lVHlwZXMgPSBbXG4gICdhcHBsaWNhdGlvbi94LWFiaXdvcmQnLFxuICAnYXBwbGljYXRpb24veC1mcmVlYXJjJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5hbWF6b24uZWJvb2snLFxuICAnYXBwbGljYXRpb24vbXN3b3JkJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnLFxuICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nLFxuICAnYXBwbGljYXRpb24vdm5kLnJhcicsXG4gICdhcHBsaWNhdGlvbi9ydGYnLFxuICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0Jyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IFRleHRNaW1lVHlwZXMgPSBbXG4gICd0ZXh0L2NzcycsXG4gICd0ZXh0L2NzdicsXG4gICd0ZXh0L2h0bWwnLFxuICAndGV4dC9jYWxlbmRhcicsXG4gICd0ZXh0L2phdmFzY3JpcHQnLFxuICAnYXBwbGljYXRpb24vanNvbicsXG4gICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcbiAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICd0ZXh0L3BsYWluJyxcbiAgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsXG4gICdhcHBsaWNhdGlvbi94bWwnLFxuICAndGV4dC94bWwnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgQmluYXJ5RG9jc01pbWVUeXBlcyA9IFtcbiAgJ2FwcGxpY2F0aW9uL2VwdWIremlwJyxcbiAgJ2FwcGxpY2F0aW9uL3BkZicsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBGb250TWltZVR5cGVzID0gW1xuICAnZm9udC9vdGYnLFxuICAnZm9udC90dGYnLFxuICAnZm9udC93b2ZmJyxcbiAgJ2ZvbnQvd29mZjInLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgT3RoZXJNaW1lVHlwZXMgPSBbXG4gICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAnYXBwbGljYXRpb24veC1jc2gnLFxuICAnYXBwbGljYXRpb24vdm5kLmFwcGxlLmluc3RhbGxlcit4bWwnLFxuICAnYXBwbGljYXRpb24veC1odHRwZC1waHAnLFxuICAnYXBwbGljYXRpb24veC1zaCcsXG4gICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcsXG4gICd2bmQudmlzaW8nLFxuICAnYXBwbGljYXRpb24vdm5kLm1vemlsbGEueHVsK3htbCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBNaW1lVHlwZXMgPSBbXG4gIC4uLkF1ZGlvTWltZVR5cGVzLFxuICAuLi5WaWRlb01pbWVUeXBlcyxcbiAgLi4uSW1hZ2VNaW1lVHlwZXMsXG4gIC4uLkNvbXByZXNzZWRNaW1lVHlwZXMsXG4gIC4uLkRvY3VtZW50TWltZVR5cGVzLFxuICAuLi5UZXh0TWltZVR5cGVzLFxuICAuLi5CaW5hcnlEb2NzTWltZVR5cGVzLFxuICAuLi5PdGhlck1pbWVUeXBlcyxcbiAgLi4uRm9udE1pbWVUeXBlcyxcbiAgLi4uT3RoZXJNaW1lVHlwZXMsXG5dXG5cbnR5cGUgUG9wdWxhck1pbWVUeXBlcyA9IHR5cGVvZiBNaW1lVHlwZXNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBNaW1lVHlwZSA9IFBvcHVsYXJNaW1lVHlwZXMgfCB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBJY29uLCBCdXR0b24sIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMsIGZsYXQgfSBmcm9tICdhZG1pbi1icm8nXG5pbXBvcnQgeyBJbWFnZU1pbWVUeXBlcywgQXVkaW9NaW1lVHlwZXMgfSBmcm9tICcuLi90eXBlcy9taW1lLXR5cGVzLnR5cGUnXG5pbXBvcnQgUHJvcGVydHlDdXN0b20gZnJvbSAnLi4vdHlwZXMvcHJvcGVydHktY3VzdG9tLnR5cGUnXG5cbnR5cGUgUHJvcHMgPSBTaG93UHJvcGVydHlQcm9wcyAmIHtcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG59O1xuXG50eXBlIFNpbmdsZUZpbGVQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBwYXRoPzogc3RyaW5nLFxuICBtaW1lVHlwZT86IHN0cmluZyxcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmNvbnN0IFNpbmdsZUZpbGU6IEZDPFNpbmdsZUZpbGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBwYXRoLCBtaW1lVHlwZSwgd2lkdGggfSA9IHByb3BzXG4gIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgaWYgKG1pbWVUeXBlICYmIEltYWdlTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlIGFzIGFueSkpIHtcbiAgICAgIHJldHVybiA8aW1nIHNyYz17cGF0aH0gc3R5bGU9e3sgbWF4SGVpZ2h0OiB3aWR0aCwgbWF4V2lkdGg6IHdpZHRoIH19IGFsdD17bmFtZX0gLz5cbiAgICB9XG4gICAgaWYgKG1pbWVUeXBlICYmIEF1ZGlvTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlIGFzIGFueSkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxhdWRpb1xuICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgc3JjPXtwYXRofVxuICAgICAgICA+XG4gICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlXG4gICAgICAgICAgPGNvZGU+YXVkaW88L2NvZGU+XG4gICAgICAgICAgPHRyYWNrIGtpbmQ9XCJjYXB0aW9uc1wiIC8+XG4gICAgICAgIDwvYXVkaW8+XG4gICAgICApXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxCdXR0b24gYXM9XCJhXCIgaHJlZj17cGF0aH0gbWw9XCJkZWZhdWx0XCIgc2l6ZT1cInNtXCIgcm91bmRlZCB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEljb24gaWNvbj1cIkRvY3VtZW50RG93bmxvYWRcIiBjb2xvcj1cIndoaXRlXCIgbXI9XCJkZWZhdWx0XCIgLz5cbiAgICAgICAge25hbWV9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBGaWxlOiBGQzxQcm9wcz4gPSAoeyB3aWR0aCwgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XG4gIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eSBhcyB1bmtub3duIGFzIHsgY3VzdG9tOiBQcm9wZXJ0eUN1c3RvbSB9XG5cbiAgY29uc3QgcGF0aCA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSlcblxuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZsYXQuZ2V0KFxuICAgIHJlY29yZD8ucGFyYW1zLFxuICAgIGN1c3RvbS5maWxlTmFtZVByb3BlcnR5ID8gY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgOiBjdXN0b20ua2V5UHJvcGVydHksXG4gIClcbiAgY29uc3QgbWltZVR5cGUgPSBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eSAmJiBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLm1pbWVUeXBlUHJvcGVydHkpXG5cbiAgaWYgKCFwcm9wZXJ0eS5jdXN0b20ubXVsdGlwbGUpIHtcbiAgICByZXR1cm4gPFNpbmdsZUZpbGUgcGF0aD17cGF0aH0gbmFtZT17bmFtZX0gd2lkdGg9e3dpZHRofSBtaW1lVHlwZT17bWltZVR5cGV9IC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTaW5nbGVGaWxlXG4gICAgICAgICAga2V5PXtzaW5nbGVQYXRofVxuICAgICAgICAgIHBhdGg9e3NpbmdsZVBhdGh9XG4gICAgICAgICAgbmFtZT17bmFtZVtpbmRleF19XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIG1pbWVUeXBlPXttaW1lVHlwZVtpbmRleF19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW4tYnJvJ1xuXG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUnXG5cbmNvbnN0IExpc3Q6IEZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4gKDxGaWxlIHdpZHRoPXsxMDB9IHsuLi5wcm9wc30gLz4pXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbi1icm8nXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUnXG5cbmNvbnN0IFNob3c6IEZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5IH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cD5cbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgIDxGaWxlIHdpZHRoPVwiMTAwJVwiIHsuLi5wcm9wc30gLz5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93XG4iLCIgIFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICdhZG1pbi1icm8nXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBpLmdldERhc2hib2FyZCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHZhcmlhbnQ9XCJncmV5XCI+XHJcbiAgICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCI+XHJcbiAgICAgICAgc29tZSBkYXNoYm9hcmRcclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZCIsIkFkbWluQnJvLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBDb21wb25lbnQxIGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW4tYnJvL3Bhc3N3b3Jkcy9jb21wb25lbnRzL2VkaXQnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQxID0gQ29tcG9uZW50MVxuaW1wb3J0IENvbXBvbmVudDIgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2VkaXQnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQyID0gQ29tcG9uZW50MlxuaW1wb3J0IENvbXBvbmVudDMgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQzID0gQ29tcG9uZW50M1xuaW1wb3J0IENvbXBvbmVudDQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQ0ID0gQ29tcG9uZW50NFxuaW1wb3J0IENvbXBvbmVudDUgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2VkaXQnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQ1ID0gQ29tcG9uZW50NVxuaW1wb3J0IENvbXBvbmVudDYgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQ2ID0gQ29tcG9uZW50NlxuaW1wb3J0IENvbXBvbmVudDcgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbi1icm8vdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cnXG5BZG1pbkJyby5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQ3ID0gQ29tcG9uZW50N1xuaW1wb3J0IENvbXBvbmVudDggZnJvbSAnLi4vc3JjL2luZnJhL2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkJ1xuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHMuQ29tcG9uZW50OCA9IENvbXBvbmVudDgiXSwibmFtZXMiOlsiUGFzc3dvcmRFZGl0IiwicHJvcHMiLCJvbkNoYW5nZSIsInByb3BlcnR5IiwicmVjb3JkIiwidXNlU3RhdGUiLCJzaG93UGFzc3dvcmQiLCJ0b2dnbGVQYXNzd29yZCIsInVzZUVmZmVjdCIsIm5hbWUiLCJpZCIsIlJlYWN0IiwiQmFzZVByb3BlcnR5Q29tcG9uZW50IiwiQm94IiwiVGV4dCIsIkJ1dHRvbiIsIkVkaXQiLCJwYXJhbXMiLCJjdXN0b20iLCJwYXRoIiwiZmxhdCIsImdldCIsImZpbGVQYXRoUHJvcGVydHkiLCJrZXkiLCJrZXlQcm9wZXJ0eSIsImZpbGUiLCJmaWxlUHJvcGVydHkiLCJvcmlnaW5hbEtleSIsInNldE9yaWdpbmFsS2V5IiwiZmlsZXNUb1VwbG9hZCIsInNldEZpbGVzVG9VcGxvYWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvblVwbG9hZCIsImZpbGVzIiwiaGFuZGxlUmVtb3ZlIiwiaGFuZGxlTXVsdGlSZW1vdmUiLCJzaW5nbGVLZXkiLCJpbmRleCIsImluZGV4T2YiLCJmaWxlc1RvRGVsZXRlIiwiZmlsZXNUb0RlbGV0ZVByb3BlcnR5IiwibmV3UGF0aCIsIm1hcCIsImN1cnJlbnRQYXRoIiwiaSIsIm5ld1BhcmFtcyIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJGb3JtR3JvdXAiLCJMYWJlbCIsImxhYmVsIiwiRHJvcFpvbmUiLCJtdWx0aXBsZSIsIm1pbWVUeXBlcyIsIm1heFNpemUiLCJEcm9wWm9uZUl0ZW0iLCJBdWRpb01pbWVUeXBlcyIsIkltYWdlTWltZVR5cGVzIiwiU2luZ2xlRmlsZSIsIm1pbWVUeXBlIiwid2lkdGgiLCJpbmNsdWRlcyIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiSWNvbiIsIkZpbGUiLCJmaWxlTmFtZVByb3BlcnR5IiwibWltZVR5cGVQcm9wZXJ0eSIsInNpbmdsZVBhdGgiLCJMaXN0IiwiU2hvdyIsImFwaSIsIkFwaUNsaWVudCIsIkRhc2hib2FyZCIsImRhdGEiLCJzZXREYXRhIiwiZ2V0RGFzaGJvYXJkIiwidGhlbiIsInJlc3BvbnNlIiwiQWRtaW5Ccm8iLCJVc2VyQ29tcG9uZW50cyIsIkNvbXBvbmVudDEiLCJDb21wb25lbnQyIiwiQ29tcG9uZW50MyIsIkNvbXBvbmVudDQiLCJDb21wb25lbnQ1IiwiQ29tcG9uZW50NiIsIkNvbXBvbmVudDciLCJDb21wb25lbnQ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUlBLElBQU1BLFlBQXlDLEdBQUcsU0FBNUNBLFlBQTRDLENBQUNDLEtBQUQsRUFBVztFQUFBLE1BQ25EQyxRQURtRCxHQUNwQkQsS0FEb0IsQ0FDbkRDLFFBRG1EO0VBQUEsTUFDekNDLFFBRHlDLEdBQ3BCRixLQURvQixDQUN6Q0UsUUFEeUM7RUFBQSxNQUMvQkMsTUFEK0IsR0FDcEJILEtBRG9CLENBQy9CRyxNQUQrQjs7RUFBQSxrQkFHcEJDLGNBQVEsQ0FBQyxLQUFELENBSFk7RUFBQTtFQUFBLE1BR3BEQyxZQUhvRDtFQUFBLE1BR3RDQyxjQUhzQzs7RUFLM0RDLEVBQUFBLGVBQVMsQ0FBQyxZQUFNO0VBQ2QsUUFBSSxDQUFDRixZQUFMLEVBQW1CO0VBQ2pCSixNQUFBQSxRQUFRLENBQUNDLFFBQVEsQ0FBQ00sSUFBVixFQUFnQixFQUFoQixDQUFSO0VBQ0Q7RUFDRixHQUpRLEVBSU4sQ0FBQ1AsUUFBRCxFQUFXQyxRQUFYLEVBQXFCRyxZQUFyQixDQUpNLENBQVQsQ0FMMkQ7O0VBWTNELE1BQUksQ0FBQ0YsTUFBTSxDQUFDTSxFQUFaLEVBQWdCO0VBQ2Qsd0JBQU9DLHdDQUFDQyw4QkFBRCxDQUF1QixRQUF2QixDQUFnQyxJQUFoQyxFQUF5Q1gsS0FBekMsQ0FBUDtFQUNEOztFQUVELHNCQUNFVSx3Q0FBQ0UsZ0JBQUQsUUFDR1AsWUFBWSxpQkFBSUssd0NBQUNDLDhCQUFELENBQXVCLFFBQXZCLENBQWdDLElB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
