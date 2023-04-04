import {
  __commonJS,
  __toCommonJS,
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-F3X4WNOX.js";

// node_modules/achang-ui/dist/index.esm.js
var require_index_esm = __commonJS({
  "node_modules/achang-ui/dist/index.esm.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory((init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : typeof define === "function" && define.amd ? define(["vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.heihie = factory(global.vue));
    })(exports, function(vue) {
      "use strict";
      var script$m = vue.defineComponent({
        name: "AcButton",
        props: {
          type: {
            type: String,
            vaildator: (val) => {
              return ["primary", "danger", "info", "success", "warning"].includes(val);
            },
            default: "default"
          },
          icon: {
            type: String,
            default: ""
          },
          disabled: {
            type: Boolean,
            default: false
          },
          round: {
            type: Boolean,
            default: false
          },
          loading: {
            type: Boolean,
            default: false
          },
          plain: {
            type: Boolean,
            default: false
          },
          circle: {
            type: Boolean,
            default: false
          }
        }
      });
      const _hoisted_1$j = { key: 0 };
      const _hoisted_2$a = vue.createElementVNode(
        "svg",
        {
          class: "circular",
          viewBox: "-10, -10, 50, 50"
        },
        [
          vue.createElementVNode("path", {
            class: "path",
            d: "\n            M 30 15\n            L 28 17\n            M 25.61 25.61\n            A 15 15, 0, 0, 1, 15 30\n            A 15 15, 0, 1, 1, 27.99 7.5\n            L 15 15\n          ",
            style: { "stroke-width": "4px", "fill": "rgba(0, 0, 0, 0)" }
          })
        ],
        -1
        /* HOISTED */
      );
      const _hoisted_3$9 = [
        _hoisted_2$a
      ];
      const _hoisted_4$9 = { key: 1 };
      function render$m(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "button",
          {
            class: vue.normalizeClass([
              `ac-button`,
              `ac-button--${_ctx.type}`,
              {
                "is-plain": _ctx.plain,
                "is-round": _ctx.round,
                "is-circle": _ctx.circle,
                "is-disabled": _ctx.disabled,
                "is-loading": _ctx.loading
              }
            ])
          },
          [
            vue.createElementVNode(
              "i",
              {
                class: vue.normalizeClass(_ctx.icon)
              },
              null,
              2
              /* CLASS */
            ),
            _ctx.loading ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$j, _hoisted_3$9)) : vue.createCommentVNode("v-if", true),
            _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$9, [
              vue.renderSlot(_ctx.$slots, "default")
            ])) : vue.createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        );
      }
      script$m.render = render$m;
      script$m.__file = "packages/button/src/button.vue";
      script$m.install = function(app) {
        app.component(script$m.name, script$m);
      };
      var script$l = vue.defineComponent({
        name: "AcIcon",
        props: {
          name: {
            type: String,
            default: "123"
          }
        },
        setup() {
        }
      });
      function render$l(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "i",
          {
            class: vue.normalizeClass(`ac-icon-${_ctx.name}`)
          },
          null,
          2
          /* CLASS */
        );
      }
      script$l.render = render$l;
      script$l.__file = "packages/icon/src/icon.vue";
      script$l.install = function(app) {
        app.component(script$l.name, script$l);
      };
      var script$k = vue.defineComponent({
        name: "AcButtonGroup"
      });
      const _hoisted_1$i = { class: "ac-button-group" };
      function render$k(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$i, [
          vue.renderSlot(_ctx.$slots, "default")
        ]);
      }
      script$k.render = render$k;
      script$k.__file = "packages/button/src/button-group.vue";
      script$k.install = function(app) {
        app.component(script$k.name, script$k);
      };
      var Col = vue.defineComponent({
        name: "AcCol",
        props: {
          tag: {
            type: String,
            "default": "div"
          },
          span: {
            type: Number,
            "default": 24
          },
          offset: {
            type: Number,
            "default": 0
          }
        },
        setup: function setup(props2, ctx) {
          var gutter = vue.inject("AcRow", 0);
          var styles = vue.computed(function() {
            if (gutter === 0) {
              return {};
            }
            return {
              paddingLeft: gutter / 2 + "px",
              paddingRight: gutter / 2 + "px"
            };
          });
          var classs = vue.computed(function() {
            var ret = [];
            ["span", "offset"].forEach(function(item) {
              var size = props2[item];
              ret.push("ac-col-".concat(item, "-").concat(size));
            });
            return ["ac-col"].concat(ret);
          });
          return function() {
            var _ctx$slots$default, _ctx$slots;
            return vue.h(props2.tag, {
              "class": classs.value,
              style: styles.value
            }, (_ctx$slots$default = (_ctx$slots = ctx.slots)["default"]) === null || _ctx$slots$default === void 0 ? void 0 : _ctx$slots$default.call(_ctx$slots));
          };
        }
      });
      Col.install = function(app) {
        app.component(Col.name, Col);
      };
      var Row = vue.defineComponent({
        name: "AcRow",
        props: {
          tag: {
            type: String,
            "default": "div"
          },
          gutter: {
            type: Number,
            "default": 0
          },
          justify: {
            type: String,
            "default": "start"
          }
        },
        setup: function setup(props2, ctx) {
          vue.provide("AcRow", props2.gutter);
          var styles = vue.computed(function() {
            var ret = {
              marginLeft: "",
              marginRight: ""
            };
            if (props2.gutter) {
              ret.marginLeft = ret.marginRight = "".concat(String(-props2.gutter / 2), "px");
            }
            return ret;
          });
          var classs = vue.computed(function() {
            return ["ac-row", "is-justify-".concat(props2.justify)];
          });
          return function() {
            var _ctx$slots$default, _ctx$slots;
            return vue.h(props2.tag, {
              "class": classs.value,
              style: styles.value
            }, (_ctx$slots$default = (_ctx$slots = ctx.slots)["default"]) === null || _ctx$slots$default === void 0 ? void 0 : _ctx$slots$default.call(_ctx$slots));
          };
        }
      });
      Row.install = function(app) {
        app.component(Row.name, Row);
      };
      var script$j = vue.defineComponent({
        name: "AcCheckBox",
        props: {
          modelValue: {
            type: Boolean,
            default: false
          },
          name: {
            type: String,
            default: ""
          },
          label: {
            type: String,
            default: ""
          }
        },
        emits: ["update:modelValue"],
        setup(props2, { emit }) {
          const CheckboxGroup = vue.inject("CheckboxGroup");
          const isGroup = vue.computed(() => !!CheckboxGroup);
          const model = vue.computed({
            get() {
              return isGroup.value ? CheckboxGroup.modelValue : props2.modelValue;
            },
            set(value) {
              console.log(value);
              if (isGroup.value) {
                console.log(value, props2.label);
                CheckboxGroup.$emit("update:modelValue", value);
              } else {
                emit("update:modelValue", value);
              }
            }
          });
          const isChecked = vue.computed(() => {
            if (isGroup.value) {
              return model.value.includes(props2.label);
            } else {
              return model.value;
            }
          });
          return {
            model,
            isChecked
          };
        }
      });
      const _hoisted_1$h = { class: "ac-checkbox__input" };
      const _hoisted_2$9 = vue.createElementVNode(
        "span",
        { class: "ac-checkbox__inner" },
        null,
        -1
        /* HOISTED */
      );
      const _hoisted_3$8 = ["name", "value"];
      const _hoisted_4$8 = { class: "ac-checkbox__label" };
      function render$j(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "label",
          {
            class: vue.normalizeClass([
              `ac-checkbox`,
              {
                "is-checked": _ctx.isChecked
              }
            ])
          },
          [
            vue.createElementVNode("span", _hoisted_1$h, [
              _hoisted_2$9,
              vue.withDirectives(vue.createElementVNode("input", {
                name: _ctx.name,
                type: "checkbox",
                class: "ac-checkbox__original",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event),
                value: _ctx.label
              }, null, 8, _hoisted_3$8), [
                [vue.vModelCheckbox, _ctx.model]
              ])
            ]),
            vue.createElementVNode("span", _hoisted_4$8, [
              vue.renderSlot(_ctx.$slots, "default"),
              vue.createCommentVNode(" 如果没有插槽内容，那么label就是内容 "),
              !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                [
                  vue.createTextVNode(
                    vue.toDisplayString(_ctx.label),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ],
          2
          /* CLASS */
        );
      }
      script$j.render = render$j;
      script$j.__file = "packages/check-box/src/check-box.vue";
      script$j.install = function(app) {
        app.component(script$j.name, script$j);
      };
      var script$i = {
        name: "AcCheckBoxGroup",
        provide() {
          return {
            CheckboxGroup: this
          };
        },
        props: {
          modelValue: {
            type: Array,
            default: function() {
              return [];
            }
          }
        },
        emits: ["update:modelValue"]
      };
      const _hoisted_1$g = { class: "ac-checkbox-group" };
      function render$i(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
          vue.renderSlot(_ctx.$slots, "default")
        ]);
      }
      script$i.render = render$i;
      script$i.__file = "packages/check-box-group/src/check-box-group.vue";
      script$i.install = function(app) {
        app.component(script$i.name, script$i);
      };
      var script$h = {
        name: "AcRadio",
        props: {
          label: {
            type: [String, Number, Boolean],
            default: ""
          },
          modelValue: [String, Number, Boolean],
          name: {
            type: [String, Number, Boolean],
            default: ""
          }
        },
        emits: ["update:modelValue"],
        inject: {
          RadioGroup: {
            default: ""
          }
        },
        computed: {
          model: {
            get() {
              return this.isGroup ? this.RadioGroup.modelValue : this.modelValue;
            },
            set(value) {
              this.isGroup ? this.RadioGroup.$emit("update:modelValue", value) : this.$emit("update:modelValue", value);
            }
          },
          // 判断包裹在group中
          isGroup() {
            return !!this.RadioGroup;
          }
        }
      };
      const _hoisted_1$f = { class: "ac-radio__input" };
      const _hoisted_2$8 = vue.createElementVNode(
        "span",
        { class: "ac-radio__inner" },
        null,
        -1
        /* HOISTED */
      );
      const _hoisted_3$7 = ["name", "value"];
      const _hoisted_4$7 = { class: "ac-radio__label" };
      function render$h(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "label",
          {
            class: vue.normalizeClass(["ac-radio", { "is-checked": $options.model === $props.label }])
          },
          [
            vue.createElementVNode("span", _hoisted_1$f, [
              _hoisted_2$8,
              vue.withDirectives(vue.createElementVNode("input", {
                class: "ac-radio__original",
                type: "radio",
                name: $props.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.model = $event),
                value: $props.label
              }, null, 8, _hoisted_3$7), [
                [vue.vModelRadio, $options.model]
              ])
            ]),
            vue.createElementVNode("span", _hoisted_4$7, [
              vue.renderSlot(_ctx.$slots, "default"),
              vue.createCommentVNode(" 如果没有插槽内容，那么label就是内容 "),
              !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                [
                  vue.createTextVNode(
                    vue.toDisplayString($props.label),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ],
          2
          /* CLASS */
        );
      }
      script$h.render = render$h;
      script$h.__file = "packages/radio/src/radio.vue";
      script$h.install = function(app) {
        app.component(script$h.name, script$h);
      };
      var script$g = {
        name: "AcRadioGroup",
        provide() {
          return {
            RadioGroup: this
          };
        },
        props: {
          modelValue: [String, Number, Boolean]
        },
        emits: ["update:modelValue"]
      };
      const _hoisted_1$e = { class: "ac-radio-group" };
      function render$g(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [
          vue.renderSlot(_ctx.$slots, "default")
        ]);
      }
      script$g.render = render$g;
      script$g.__file = "packages/radio-group/src/radio-group.vue";
      script$g.install = function(app) {
        app.component(script$g.name, script$g);
      };
      var script$f = {
        name: "AcSwitch",
        props: {
          modelValue: {
            type: Boolean,
            default: false
          },
          activeColor: {
            type: String,
            default: ""
          },
          inactiveColor: {
            type: String,
            default: ""
          },
          name: {
            type: String,
            default: ""
          }
        },
        emits: ["update:modelValue"],
        mounted() {
          this.setColor();
          this.$refs.input.checked = this.modelValue;
        },
        methods: {
          async handleClick() {
            this.$emit("update:modelValue", !this.modelValue);
            this.$refs.input.checked = this.value;
            await this.$nextTick();
            this.setColor();
          },
          setColor() {
            if (this.activeColor || this.inactiveColor) {
              const color = this.modelValue ? this.activeColor : this.inactiveColor;
              this.$refs.core.style.borderColor = color;
              this.$refs.core.style.backgroundColor = color;
            }
          }
        }
      };
      const _hoisted_1$d = {
        class: "ac-switch__core",
        ref: "core"
      };
      const _hoisted_2$7 = vue.createElementVNode(
        "span",
        { class: "ac-switch__button" },
        null,
        -1
        /* HOISTED */
      );
      const _hoisted_3$6 = [
        _hoisted_2$7
      ];
      const _hoisted_4$6 = ["name"];
      function render$f(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(["ac-switch", { "is-checked": $props.modelValue }]),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
          },
          [
            vue.createElementVNode(
              "span",
              _hoisted_1$d,
              _hoisted_3$6,
              512
              /* NEED_PATCH */
            ),
            vue.createElementVNode("input", {
              name: $props.name,
              class: "ac-switch__input",
              type: "checkbox",
              ref: "input"
            }, null, 8, _hoisted_4$6)
          ],
          2
          /* CLASS */
        );
      }
      script$f.render = render$f;
      script$f.__file = "packages/switch/src/switch.vue";
      script$f.install = function(app) {
        app.component(script$f.name, script$f);
      };
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, _typeof(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _toPrimitive(input, hint) {
        if (_typeof(input) !== "object" || input === null)
          return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (_typeof(res) !== "object")
            return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return _typeof(key) === "symbol" ? key : String(key);
      }
      function _defineProperties(target, props2) {
        for (var i = 0; i < props2.length; i++) {
          var descriptor = props2[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      var props = {
        modelValue: {
          type: [String, Number],
          "default": ""
        },
        type: {
          type: String,
          "default": ""
        }
      };
      var emits = ["update:modelValue"];
      var tabs = function() {
        function tabs2(props2, emit, slots) {
          _classCallCheck(this, tabs2);
          this.type = props2.type;
          this.mode = vue.computed({
            get: function get() {
              return props2.modelValue;
            },
            set: function set(value) {
              emit("update:modelValue", value);
            }
          });
          this.emit = emit;
          this.slots = slots;
          var arr = [];
          slots.forEach(function(item) {
            console.log("输出一下类型", item.type == Symbol);
            if (_typeof(item.type) !== "symbol" && item.type.name === "AcTabPane") {
              arr.push(item);
            } else {
              item.children.forEach(function(i) {
                arr.push(i);
              });
            }
          });
          this.VNodes = arr;
        }
        _createClass(tabs2, [{
          key: "clickCheckName",
          value: function clickCheckName(item, e) {
            this.mode.value = item.props.name;
            this.emit("tab-click", item.props, e);
          }
        }]);
        return tabs2;
      }();
      var Tabs$1 = {
        name: "AcTabs",
        props,
        emit: emits,
        setup: function setup(props2, _ref) {
          var emit = _ref.emit, slots = _ref.slots;
          var tab = new tabs(props2, emit, slots["default"]());
          vue.provide("activeName", tab.mode);
          return {
            tab
          };
        },
        render: function render2() {
          var _this = this;
          var tab = this.tab;
          var nav = vue.createVNode("nav", null, [tab.VNodes.map(function(item, index2) {
            return vue.createVNode("a", {
              "onClick": function onClick(e) {
                return tab.clickCheckName(item, e);
              },
              "class": {
                active: item.props.name === _this.modelValue
              }
            }, [item.props.label]);
          })]);
          return vue.createVNode("div", {
            "class": {
              "ac-tabs": true,
              "ac-tabs--border": tab.type === "border"
            }
          }, [[nav, tab.slots]]);
        }
      };
      var withInstall = function withInstall2(component) {
        component.install = function(Vue) {
          Vue.component(component.name, component);
        };
        return component;
      };
      var Tabs = withInstall(Tabs$1);
      var tabPaneProps = {
        label: {
          type: String,
          "default": ""
        },
        name: {
          type: [String, Number]
        }
      };
      var script$e = vue.defineComponent({
        name: "AcTabPane",
        props: tabPaneProps,
        setup() {
          const activeName = vue.inject("activeName");
          return { activeName };
        }
      });
      const _hoisted_1$c = { class: "ac-tab-pane" };
      function render$e(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
          "div",
          _hoisted_1$c,
          [
            vue.renderSlot(_ctx.$slots, "default")
          ],
          512
          /* NEED_PATCH */
        )), [
          [vue.vShow, _ctx.name === _ctx.activeName]
        ]);
      }
      script$e.render = render$e;
      script$e.__file = "packages/tabs-pane/src/tab-pane.vue";
      script$e.install = function(app) {
        app.component(script$e.name, script$e);
      };
      var script$d = {
        name: "AcMessage",
        props: {
          text: {
            type: String,
            default: ""
          },
          type: {
            type: String,
            // warn 警告  error 错误  success 成功
            default: "warn"
          }
        },
        setup() {
          const style = {
            warn: {
              icon: "icon-warning",
              color: "#E6A23C",
              backgroundColor: "rgb(253, 246, 236)",
              borderColor: "rgb(250, 236, 216)"
            },
            error: {
              icon: "icon-shanchu",
              color: "#F56C6C",
              backgroundColor: "rgb(254, 240, 240)",
              borderColor: "rgb(253, 226, 226)"
            },
            success: {
              icon: "icon-queren2",
              color: "#67C23A",
              backgroundColor: "rgb(240, 249, 235)",
              borderColor: "rgb(225, 243, 216)"
            }
          };
          const show = vue.ref(false);
          vue.onMounted(() => {
            show.value = true;
            setTimeout(() => {
              show.value = false;
            }, 2500);
          });
          return { style, show };
        }
      };
      const _hoisted_1$b = { class: "text" };
      function render$d(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createBlock(vue.Transition, {
          name: "down",
          persisted: ""
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode(
              "div",
              {
                class: "ac-message",
                style: vue.normalizeStyle($setup.style[$props.type])
              },
              [
                vue.createElementVNode(
                  "i",
                  {
                    class: vue.normalizeClass(["iconfont", [$setup.style[$props.type].icon]])
                  },
                  null,
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "span",
                  _hoisted_1$b,
                  vue.toDisplayString($props.text),
                  1
                  /* TEXT */
                )
              ],
              4
              /* STYLE */
            ), [
              [vue.vShow, $setup.show]
            ])
          ]),
          _: 1
          /* STABLE */
        });
      }
      script$d.render = render$d;
      script$d.__file = "packages/message/src/message.vue";
      var div = document.createElement("div");
      div.setAttribute("class", "ac-message-container");
      document.body.appendChild(div);
      var timeId = null;
      var Message = function(props2) {
        var vnode = vue.createVNode(script$d, props2);
        vue.render(vnode, div);
        if (timeId) {
          clearTimeout(timeId);
        }
        timeId = setTimeout(function() {
          vue.render(null, div);
        }, 3e3);
      };
      var script$c = vue.defineComponent({
        name: "AcInput",
        props: {
          placeholder: {
            type: String,
            default: "请输入内容"
          },
          type: {
            type: String,
            default: "text"
          },
          name: {
            type: String,
            default: ""
          },
          disabled: {
            type: Boolean,
            default: false
          },
          modelValue: {
            type: String,
            required: true
          },
          clearable: {
            type: Boolean,
            default: false
          },
          showPassword: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(props2, { emit }) {
          function handleInput(e) {
            emit("update:modelValue", e.target.value);
          }
          function clear() {
            emit("update:modelValue", "");
          }
          const showSuffix = vue.computed(() => props2.clearable || props2.showPassword);
          const passwordVisible = vue.ref(false);
          return {
            handleInput,
            showSuffix,
            // 是否显示密码
            passwordVisible,
            clear
          };
        }
      });
      const _hoisted_1$a = { class: "ac-input__prepend" };
      const _hoisted_2$6 = ["value", "type", "placeholder", "name", "disabled"];
      const _hoisted_3$5 = {
        key: 0,
        class: "ac-input__suffix"
      };
      const _hoisted_4$5 = { class: "ac-input__append" };
      function render$c(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(["ac-input", [
              {
                "ac-input-group": _ctx.$slots.prepend || _ctx.$slots.append,
                "ac-input-group--append": _ctx.$slots.append,
                "ac-input-group--prepend": _ctx.$slots.prepend,
                "ac-input--suffix": _ctx.showSuffix
              }
            ]])
          },
          [
            vue.createCommentVNode(" prepend slot "),
            vue.createElementVNode("div", _hoisted_1$a, [
              vue.renderSlot(_ctx.$slots, "prepend")
            ]),
            vue.createElementVNode("input", {
              class: vue.normalizeClass(["ac-input__inner", { "is-disabled": _ctx.disabled }]),
              value: _ctx.modelValue,
              type: _ctx.showPassword ? _ctx.passwordVisible ? "text" : "password" : _ctx.type,
              placeholder: _ctx.placeholder,
              name: _ctx.name,
              disabled: _ctx.disabled,
              onInput: _cache[0] || (_cache[0] = (...args) => _ctx.handleInput && _ctx.handleInput(...args))
            }, null, 42, _hoisted_2$6),
            _ctx.showSuffix ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$5, [
              _ctx.clearable && _ctx.modelValue ? (vue.openBlock(), vue.createElementBlock("i", {
                key: 0,
                class: "ac-icon-jiazai",
                onClick: _cache[1] || (_cache[1] = (...args) => _ctx.clear && _ctx.clear(...args))
              })) : vue.createCommentVNode("v-if", true),
              _ctx.showPassword ? (vue.openBlock(), vue.createElementBlock(
                "i",
                {
                  key: 1,
                  class: vue.normalizeClass(["ac-icon-jiazai", { "ac-icon-yanjing-active": _ctx.passwordVisible }]),
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.passwordVisible = !_ctx.passwordVisible)
                },
                null,
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("div", _hoisted_4$5, [
              vue.renderSlot(_ctx.$slots, "append")
            ])
          ],
          2
          /* CLASS */
        );
      }
      script$c.render = render$c;
      script$c.__file = "packages/input/src/input.vue";
      script$c.install = function(app) {
        app.component(script$c.name, script$c);
      };
      var script$b = {
        name: "AcCard",
        props: {
          header: {},
          bodyStyle: {},
          shadow: {
            type: String
          }
        }
      };
      const _hoisted_1$9 = {
        key: 0,
        class: "ac-card__header"
      };
      function render$b(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(["ac-card", $props.shadow ? "is-" + $props.shadow + "-shadow" : "is-always-shadow"])
          },
          [
            _ctx.$slots.header || $props.header ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
              vue.renderSlot(_ctx.$slots, "header", {}, () => [
                vue.createTextVNode(
                  vue.toDisplayString($props.header),
                  1
                  /* TEXT */
                )
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "div",
              {
                class: "ac-card__body",
                style: vue.normalizeStyle($props.bodyStyle)
              },
              [
                vue.renderSlot(_ctx.$slots, "default")
              ],
              4
              /* STYLE */
            )
          ],
          2
          /* CLASS */
        );
      }
      script$b.render = render$b;
      script$b.__file = "packages/card/src/card.vue";
      script$b.install = function(app) {
        app.component(script$b.name, script$b);
      };
      var script$a = {
        name: "AcFormItem",
        props: {
          prop: {
            type: String,
            default: null
          },
          label: {
            type: String,
            default: ""
          }
        },
        data() {
          return {
            showError: false,
            errorMessage: ""
          };
        },
        methods: {
          validate(event) {
            if (!this.prop) {
              return true;
            }
            const rule = this.currentRule;
            const value = this.Form.model[this.prop];
            let validators = Array.isArray(rule) ? rule : [rule];
            validators = validators.filter((item) => {
              return item.trigger === event.type;
            });
            if (validators.length === 0) {
              return true;
            }
            for (let i = 0; i < validators.length; i++) {
              validators[i].validator({}, value, (erroritem) => {
                if (erroritem) {
                  this.showError = true;
                  this.errorMessage = erroritem.message;
                } else {
                  this.showError = false;
                  this.errorMessage = "";
                }
              });
              if (this.showError) {
                return false;
              }
            }
            return true;
          },
          makeValidator(item) {
            let arr = [];
            const {
              validator,
              required,
              pattern,
              type,
              min,
              max,
              len,
              message,
              trigger
            } = item;
            if (validator) {
              arr.push({
                validator,
                trigger
              });
            }
            if (required) {
              arr.push({
                validator: function(rule, value, callback) {
                  if (value === "") {
                    callback(new Error(message ? message : "不能为空"));
                  } else {
                    callback();
                  }
                },
                trigger
              });
            }
            if (pattern) {
              arr.push({
                validator: function(rule, value, callback) {
                  if (!pattern.test(value)) {
                    callback(new Error(message ? message : "正则不匹配"));
                  } else {
                    callback();
                  }
                },
                trigger
              });
            }
            if (type) {
              const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              const urlRegex = /^((https?|ftp|file):\/\/)?([a-z0-9-]+\.)?[a-z0-9-]+\.[a-z0-9]+(\/([a-z0-9-._~:/?#\[\]@!$&'()*+,;=]+)*)?$/;
              arr.push({
                validator: function(rule, value, callback) {
                  if (type === "email" && !emailRegex.test(value)) {
                    callback(new Error(message ? message : "类型不匹配"));
                  } else if (type === "url" && !urlRegex.test(value)) {
                    callback(new Error(message ? message : "类型不匹配"));
                  } else {
                    callback();
                  }
                },
                trigger
              });
            }
            if (min | max | len) {
              arr.push({
                validator: function(rule, value, callback) {
                  if (len && value.length !== len) {
                    callback(new Error(message ? message : `长度应该在为${len}`));
                  } else if (min && max && value.length < min && value.length > max) {
                    callback(
                      new Error(message ? message : `长度应该在${min}-${max}之间`)
                    );
                  } else if (min && value.length < min) {
                    callback(new Error(message ? message : `长度应该大于${min}`));
                  } else if (max && value.length > max) {
                    callback(new Error(message ? message : `长度应该小于${max}`));
                  } else {
                    callback();
                  }
                },
                trigger
              });
            }
            return arr;
          }
        },
        // inject: ["Form"],
        inject: {
          Form: {},
          rules: {},
          model: {}
        },
        mounted() {
          this.Form.addField(this);
        },
        computed: {
          labelStyle() {
            return {
              width: this.Form.labelWidth
            };
          },
          labelWidth() {
            return this.Form.labelWidth;
          },
          // 当前组件的item的规则和值
          currentRule() {
            let arr = [];
            let arrbefore = this.rules[this.prop];
            arrbefore.forEach((element) => {
              arr.push(...this.makeValidator(element));
            });
            return arr;
          },
          currentModel() {
            return this.model[this.prop];
          }
        },
        watch: {
          // change事件的监听
          currentModel(newValue, oldValue) {
            if (!this.prop) {
              return true;
            }
            this.validate({ type: "change" });
          }
        }
      };
      const _hoisted_1$8 = { class: "ac-form-item" };
      function render$a(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
          vue.createElementVNode(
            "label",
            {
              class: "ac-form-item__label",
              style: vue.normalizeStyle($options.labelStyle)
            },
            vue.toDisplayString($props.label),
            5
            /* TEXT, STYLE */
          ),
          vue.createCommentVNode(" blur事件的监听 "),
          vue.createElementVNode(
            "div",
            {
              class: "ac-form-item__content",
              tabindex: "0",
              onBlurCapture: _cache[0] || (_cache[0] = (...args) => $options.validate && $options.validate(...args))
            },
            [
              vue.renderSlot(_ctx.$slots, "default")
            ],
            32
            /* HYDRATE_EVENTS */
          ),
          $data.showError ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 0,
              class: "el-form-item__error",
              style: vue.normalizeStyle({ left: $options.labelWidth })
            },
            vue.toDisplayString($data.errorMessage),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ]);
      }
      script$a.render = render$a;
      script$a.__file = "packages/form-item/src/form-item.vue";
      script$a.install = function(app) {
        app.component(script$a.name, script$a);
      };
      var script$9 = {
        name: "AcForm",
        provide() {
          return {
            Form: this,
            // 规则
            rules: this.rules,
            // 组件的值
            model: this.model
          };
        },
        props: {
          model: {
            type: Object,
            required: true
          },
          labelWidth: {
            type: String,
            default: "80px"
          },
          rules: {
            type: Object
          }
        },
        data() {
          return {
            fields: {},
            errors: {}
          };
        },
        methods: {
          addField(field) {
            this.fields[field.prop] = field;
          },
          removeField(field) {
            delete this.fields[field.prop];
            delete this.errors[field.prop];
          },
          validate(callback) {
            const errors = {};
            let isValid = true;
            const validatorKeys = Object.keys(this.fields || {});
            validatorKeys.forEach((item) => {
              const result = this.fields[item].validate({ type: "submit" });
              if (!result) {
                errors[item] = this.fields[item].errorMessage;
                isValid = false;
              }
            });
            this.errors = errors;
            callback(isValid);
            console.log(errors);
          },
          /*validate(callback){
                  // const validatorKeys = Object.keys(this.fields || {});
                  // validatorKeys.forEach((item)=>{
                  //   this.fields[item].validate()
                  // })
          
                  const errors = {};
                  let isValid = true;
                  for (const prop in this.fields) {
                    // 获取规则
                    const rule = this.rules[prop]
                    // 获取该表单项
                    const field = this.fields[prop];
                    // 获取表单值
                    const value = this.model[prop];
                    // 如果规则不是数组就转化为数组
                    const validators = Array.isArray(rule)?rule:[rule]
                    for (const validator of validators) {
                      // console.log("规则",rule);
                      // console.log("表单项",field);
                      // console.log("表单值",value);
                      // console.log("数组规则",validator);
                      if (!field.validate()) {
                        errors[prop] = field.errorMessage
                        isValid = false
                        break
                      }
                    }
                  }
                  this.errors = errors;
                  callback(isValid)
                },*/
          validate1(callback) {
            let valid = true;
            let count = 0;
            const errors = {};
            const validatorKeys = Object.keys(this.rules || {});
            if (validatorKeys.length === 0) {
              callback(true);
            }
            validatorKeys.forEach((key) => {
              const rule = this.rules[key];
              const value = this.model[key];
              const validators = Array.isArray(rule) ? rule : [rule];
              validators.forEach((validator) => {
                count++;
                validator.validator({}, value, (erroritem) => {
                  if (erroritem) {
                    valid = false;
                    errors[key] = erroritem;
                  }
                });
              });
            });
            if (count === 0) {
              callback(true);
            }
            if (valid) {
              callback(true);
            } else {
              callback(false);
              console.log(errors);
            }
          }
        }
      };
      const _hoisted_1$7 = { class: "ac-form" };
      function render$9(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
          vue.renderSlot(_ctx.$slots, "default")
        ]);
      }
      script$9.render = render$9;
      script$9.__file = "packages/form/src/form.vue";
      script$9.install = function(app) {
        app.component(script$9.name, script$9);
      };
      var script$8 = {
        name: "AcDialog",
        props: {
          title: {
            type: String,
            default: "标题"
          },
          width: {
            type: String,
            default: "50%"
          },
          top: {
            tpye: String,
            default: "15vh"
          },
          visible: {
            type: Boolean,
            default: false
          }
        },
        mounted() {
          console.log("打印一下视图", this.visible);
        },
        components: {
          // AcButton
        },
        computed: {
          style() {
            return {
              width: this.width,
              marginTop: this.top
            };
          }
        },
        methods: {
          handleClose() {
            this.$emit("update:visible", false);
          }
        }
      };
      const _hoisted_1$6 = { class: "ac-dialog__header" };
      const _hoisted_2$5 = { class: "ac-dialog__title" };
      const _hoisted_3$4 = vue.createElementVNode(
        "i",
        { class: "ac-icon-guanbi" },
        null,
        -1
        /* HOISTED */
      );
      const _hoisted_4$4 = { class: "ac-dialog__body" };
      const _hoisted_5$4 = {
        key: 0,
        class: "ac-dialog__footer"
      };
      function render$8(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createBlock(vue.Transition, {
          name: "dialog-fade",
          persisted: ""
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode(
              "div",
              {
                class: "ac-dialog__wrapper",
                onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.handleClose && $options.handleClose(...args), ["self"]))
              },
              [
                vue.createElementVNode(
                  "div",
                  {
                    class: "ac-dialog",
                    style: vue.normalizeStyle($options.style)
                  },
                  [
                    vue.createElementVNode("div", _hoisted_1$6, [
                      vue.renderSlot(_ctx.$slots, "title", {}, () => [
                        vue.createElementVNode(
                          "span",
                          _hoisted_2$5,
                          vue.toDisplayString($props.title),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("button", {
                        class: "ac-dialog__headerbtn",
                        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClose && $options.handleClose(...args))
                      }, [
                        _hoisted_3$4,
                        vue.createTextVNode(" 关闭 ")
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_4$4, [
                      vue.renderSlot(_ctx.$slots, "default")
                    ]),
                    _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$4, [
                      vue.renderSlot(_ctx.$slots, "footer")
                    ])) : vue.createCommentVNode("v-if", true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, $props.visible]
            ])
          ]),
          _: 3
          /* FORWARDED */
        });
      }
      script$8.render = render$8;
      script$8.__file = "packages/dialog/src/dialog.vue";
      script$8.install = function(app) {
        app.component(script$8.name, script$8);
      };
      const directionArr = ["top", "bottom", "left", "right"];
      const moveObj = {
        top: "topMove",
        bottom: "bottomMove",
        left: "leftMove",
        right: "rightMove"
      };
      var script$7 = {
        name: "AcDrawer",
        props: {
          // 是否显示抽屉
          modelValue: {
            type: Boolean,
            default: false
          },
          // 是否显示抽屉头部内容
          isShowHeader: {
            type: Boolean,
            default: true
          },
          // 父组件传过来的抽屉标题值
          title: {
            type: String,
            default: "我是title"
          },
          // 是否显示关闭小图标
          showCloseIcon: {
            type: Boolean,
            default: true
          },
          // 是否开启抽屉背景遮罩层
          mask: {
            type: Boolean,
            default: true
          },
          // 点击遮罩层关闭默认为true
          clickMaskClose: {
            type: Boolean,
            default: true
          },
          // 校验抽屉的4个方向
          direction: {
            type: String,
            default: "right",
            validator(val) {
              return directionArr.includes(val);
            }
          },
          // 接收父组件传递过来的关闭函数，会中断关闭抽屉的操作
          beforeClose: {
            type: Function
          }
        },
        computed: {
          // 动态控制上下左右的抽屉内容区的位置以及抽屉的宽度
          computedDrawerPosition() {
            let positionObj = {
              width: this.direction == "left" | this.direction == "right" ? "30%" : "100%",
              height: this.direction == "top" | this.direction == "bottom" ? "30%" : "100%",
              "min-width": "450px"
            };
            positionObj[this.direction] = 0;
            return positionObj;
          },
          // 动态控制抽屉从上下左右进入和退出
          computedName() {
            return moveObj[this.direction];
          }
        },
        methods: {
          // 点击遮罩层关闭弹框
          clickMaskCloseFn() {
            if (this.clickMaskClose == true) {
              this.closeDrawer();
            } else {
              return;
            }
          },
          // 准备关闭抽屉弹出框
          closeDrawer() {
            console.log(888);
            if (this.beforeClose) {
              this.beforeClose(this.close);
            } else {
              this.close();
            }
          },
          // 关闭抽屉弹出框
          close() {
            this.$emit("update:modelValue", false);
            this.$emit("shutDown");
          }
        }
      };
      const _hoisted_1$5 = { class: "drawerHeader" };
      const _hoisted_2$4 = { class: "drawerBody" };
      function render$7(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 抽屉打开关闭过渡效果根据name去指定 "),
            vue.createVNode(vue.Transition, {
              name: $options.computedName,
              persisted: ""
            }, {
              default: vue.withCtx(() => [
                vue.withDirectives(vue.createElementVNode(
                  "div",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.clickMaskCloseFn && $options.clickMaskCloseFn(...args)),
                    class: vue.normalizeClass(["myDrawerWrap", { isShowDrawerMask: $props.mask }])
                  },
                  [
                    vue.createElementVNode(
                      "div",
                      {
                        ref: "drawerContentRef",
                        class: vue.normalizeClass(["drawerContent"]),
                        style: vue.normalizeStyle($options.computedDrawerPosition),
                        onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                        }, ["stop"]))
                      },
                      [
                        vue.withDirectives(vue.createElementVNode(
                          "header",
                          _hoisted_1$5,
                          [
                            vue.renderSlot(_ctx.$slots, "title", {}, () => [
                              vue.createElementVNode(
                                "span",
                                null,
                                vue.toDisplayString($props.title),
                                1
                                /* TEXT */
                              )
                            ]),
                            vue.withDirectives(vue.createElementVNode(
                              "i",
                              {
                                class: "el-icon-close",
                                onClick: _cache[0] || (_cache[0] = (...args) => $options.closeDrawer && $options.closeDrawer(...args))
                              },
                              null,
                              512
                              /* NEED_PATCH */
                            ), [
                              [vue.vShow, $props.showCloseIcon]
                            ])
                          ],
                          512
                          /* NEED_PATCH */
                        ), [
                          [vue.vShow, $props.isShowHeader]
                        ]),
                        vue.createElementVNode("section", _hoisted_2$4, [
                          vue.renderSlot(_ctx.$slots, "default")
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ],
                  2
                  /* CLASS */
                ), [
                  [vue.vShow, $props.modelValue]
                ])
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["name"])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      }
      script$7.render = render$7;
      script$7.__file = "packages/drawer/src/drawer.vue";
      script$7.install = function(app) {
        app.component(script$7.name, script$7);
      };
      var script$6 = {
        name: "AcOption",
        props: {
          value: {
            required: true
          },
          label: [String, Number]
        },
        // methods: {
        //   selectOptionClick(){
        //     console.log("我在进行点击",this.select);
        //     this.select.openSelect(false,true,this.props.value)
        //     console.log(this.props);
        //   }
        // },
        setup(props2, ctx) {
          let select = vue.inject("select");
          select.arrAdd({ value: props2.value, label: props2.label });
          const selectOptionClick = () => {
            select.openSelect(false, true, props2.value);
          };
          let itemSelected = vue.computed(() => {
            return select.modelValue === props2.value;
          });
          return {
            select,
            selectOptionClick,
            itemSelected
          };
        }
      };
      function render$6(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "li",
          {
            onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $setup.selectOptionClick && $setup.selectOptionClick(...args), ["stop"])),
            class: vue.normalizeClass(["ac-select-dropdown__item", {
              "selected": $setup.itemSelected
            }])
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createElementVNode(
                "span",
                null,
                vue.toDisplayString($props.label),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        );
      }
      script$6.render = render$6;
      script$6.__file = "packages/option/src/option.vue";
      script$6.install = function(app) {
        app.component(script$6.name, script$6);
      };
      var script$5 = vue.defineComponent({
        name: "AcSelect",
        props: {
          modelValue: {
            type: String,
            default: ""
          }
        },
        provide() {
          return {
            select: this
          };
        },
        emit: ["update:modelValue"],
        setup(props2, { emit }) {
          let showOptions = vue.ref(false);
          const openSelect = (val, flag = false, value = "") => {
            showOptions.value = val;
            if (flag) {
              emit("update:modelValue", value);
            }
          };
          let arr = vue.ref([]);
          const arrAdd = (val) => {
            arr.value.push(val);
          };
          let currentValue = vue.computed(() => {
            return arr.value.find((item) => item.value === props2.modelValue);
          });
          return {
            showOptions,
            openSelect,
            arr,
            arrAdd,
            currentValue
          };
        }
      });
      const _hoisted_1$4 = ["value"];
      const _hoisted_2$3 = { class: "ac-select__suffix" };
      const _hoisted_3$3 = vue.createElementVNode(
        "path",
        { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" },
        null,
        -1
        /* HOISTED */
      );
      const _hoisted_4$3 = [
        _hoisted_3$3
      ];
      const _hoisted_5$3 = { class: "dropdown-menu" };
      function render$5(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: "ac-select",
            tabindex: "0",
            onFocusCapture: _cache[0] || (_cache[0] = ($event) => _ctx.openSelect(true)),
            onBlurCapture: _cache[1] || (_cache[1] = ($event) => _ctx.openSelect(false))
          },
          [
            vue.createElementVNode("input", {
              class: "ac-select__inner",
              placeholder: "请选择",
              value: _ctx.currentValue && _ctx.currentValue.label,
              readonly: ""
            }, null, 8, _hoisted_1$4),
            vue.createElementVNode("span", _hoisted_2$3, [
              (vue.openBlock(), vue.createElementBlock(
                "svg",
                {
                  class: vue.normalizeClass(["triangle", { "rotate": _ctx.showOptions }]),
                  viewBox: "64 64 896 896",
                  "data-icon": "down",
                  "aria-hidden": "true",
                  focusable: "false"
                },
                _hoisted_4$3,
                2
                /* CLASS */
              ))
            ]),
            vue.withDirectives(vue.createElementVNode(
              "ul",
              _hoisted_5$3,
              [
                vue.renderSlot(_ctx.$slots, "default")
              ],
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, _ctx.showOptions]
            ])
          ],
          32
          /* HYDRATE_EVENTS */
        );
      }
      script$5.render = render$5;
      script$5.__file = "packages/select/src/select.vue";
      script$5.install = function(app) {
        app.component(script$5.name, script$5);
      };
      var script$4 = {
        name: "AcTag",
        props: {
          text: String,
          type: String,
          color: String,
          size: String,
          effect: {
            type: String,
            default: "light",
            validator(val) {
              return ["dark", "light", "plain"].indexOf(val) !== -1;
            }
          }
        },
        computed: {
          tagSize() {
            return this.size || (this.$ELEMENT || {}).size;
          },
          classes() {
            const { type, tagSize, effect } = this;
            let arr = [
              "ac-tag",
              type ? `ac-tag--${type}` : "",
              tagSize ? `ac-tag--${tagSize}` : "",
              effect ? `ac-tag--${effect}` : ""
            ];
            return arr;
          }
        }
      };
      function render$4(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          "span",
          {
            class: vue.normalizeClass($options.classes),
            style: vue.normalizeStyle(`backgroundColor: ${$props.color}`)
          },
          [
            vue.renderSlot(_ctx.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        );
      }
      script$4.render = render$4;
      script$4.__file = "packages/tag/src/tag.vue";
      script$4.install = function(app) {
        app.component(script$4.name, script$4);
      };
      var script$3 = {
        name: "AcUpload",
        data() {
          return {
            tempIndex: 0,
            uploadFilesArr: []
            // uploadFiles:[]
          };
        },
        props: {
          name: {
            type: String,
            default: ""
          },
          multiple: {
            type: Boolean,
            default: false
          },
          accept: {
            type: String,
            default: "image/*"
          },
          disabled: {
            type: String,
            default: false
          },
          onChange: Function,
          beforeUpload: Function,
          onSuccess: Function
        },
        methods: {
          handleClick() {
            if (!this.disabled) {
              this.$refs.input.value = null;
              this.$refs.input.click();
            }
          },
          handleChange(ev) {
            const files = ev.target.files;
            let file = files[0];
            let formData = new FormData();
            formData.append(this.name, file);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://fastmock.site/mock/a6bf479aab19dd7f40fc10522cdead00/wcy/blog/uploadBlogImages", true);
            xhr.onload = () => {
              if (xhr.status === 200) {
                console.log("上传成功！");
                this.onSuccess(JSON.parse(xhr.responseText).retData);
              }
            };
            xhr.send(formData);
          }
        }
      };
      const _hoisted_1$3 = ["name", "multiple", "accept"];
      function render$3(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("div", {
          tabindex: "0",
          class: vue.normalizeClass(["ac-upload", `ac-upload--text`]),
          onClick: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "default", { class: "i" }),
          vue.createElementVNode("input", {
            class: "ac-upload__input",
            type: "file",
            ref: "input",
            name: $props.name,
            onChange: _cache[0] || (_cache[0] = (...args) => $options.handleChange && $options.handleChange(...args)),
            multiple: $props.multiple,
            accept: $props.accept
          }, null, 40, _hoisted_1$3)
        ]);
      }
      script$3.render = render$3;
      script$3.__file = "packages/upload/src/upload.vue";
      script$3.install = function(app) {
        app.component(script$3.name, script$3);
      };
      function checkArriveBottom(el) {
        var clientHeight = el.clientHeight;
        var scrollTop = el.scrollTop;
        var scrollHeight = el.scrollHeight;
        return clientHeight + scrollTop >= scrollHeight;
      }
      var VInfiniteScroll = {
        install: function install2(Vue) {
          Vue.directive("infinite-scroll", {
            mounted: function mounted(el, binding, vnode, prevVnode) {
              var _binding$modifiers;
              var fn = binding.value;
              var timer = null;
              if (typeof fn != "function") {
                throw new Error("指令value必须为函数");
              }
              function handleScroll() {
                if (checkArriveBottom(el)) {
                  fn();
                }
              }
              if (binding !== null && binding !== void 0 && (_binding$modifiers = binding.modifiers) !== null && _binding$modifiers !== void 0 && _binding$modifiers.immediate) {
                timer = setInterval(function() {
                  if (el.scrollHeight >= el.offsetHeight) {
                    return clearInterval(timer);
                  }
                  handleScroll();
                }, 1500);
              }
              binding.instance.handleScroll = handleScroll;
              el.addEventListener("scroll", binding.instance.handleScroll);
            },
            //   组件更新的时候，会不断触发（最明显就是data中的响应式数据变化，会继续执行update方法）
            updated: function updated(el, binding, vnode, prevVnode) {
              console.log("天才从来都是孤独");
            }
          });
        }
      };
      var script$2 = {
        name: "AcTextarea",
        props: {
          placeholder: {
            type: String,
            default: "请输入文本域内容"
          },
          name: {
            type: String
          },
          modelValue: {
            type: String,
            default: ""
          },
          maxlength: {
            type: Number,
            default: 100
          }
        },
        emits: ["update:modelValue"],
        methods: {
          handleChange(e) {
            this.$emit("update:modelValue", e.target.value);
          }
        }
      };
      const _hoisted_1$2 = { class: "ac-textarea" };
      const _hoisted_2$2 = ["placeholder", "maxlength", "value"];
      const _hoisted_3$2 = { class: "comment-operate-box" };
      const _hoisted_4$2 = { class: "comment-operate-l" };
      const _hoisted_5$2 = {
        id: "tip_comment",
        class: "tip"
      };
      const _hoisted_6$1 = { class: "comment-operate-r" };
      function render$2(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("form", _hoisted_1$2, [
          vue.createElementVNode("textarea", {
            class: "comment-content",
            name: "comment_content",
            placeholder: $props.placeholder,
            maxlength: $props.maxlength,
            value: $props.modelValue,
            onInput: _cache[0] || (_cache[0] = (...args) => $options.handleChange && $options.handleChange(...args))
          }, null, 40, _hoisted_2$2),
          vue.createElementVNode("div", _hoisted_3$2, [
            vue.createElementVNode("div", _hoisted_4$2, [
              vue.createElementVNode("span", _hoisted_5$2, [
                vue.createTextVNode("还能输入"),
                vue.createElementVNode(
                  "em",
                  null,
                  vue.toDisplayString($props.maxlength - $props.modelValue.length),
                  1
                  /* TEXT */
                ),
                vue.createTextVNode("个字符")
              ])
            ]),
            vue.createElementVNode("div", _hoisted_6$1, [
              vue.renderSlot(_ctx.$slots, "default")
            ])
          ])
        ]);
      }
      script$2.render = render$2;
      script$2.__file = "packages/textarea/src/index.vue";
      script$2.install = function(app) {
        app.component(script$2.name, script$2);
      };
      var script$1 = vue.defineComponent({
        name: "AcBlogitem",
        props: {
          blog: {
            type: Object,
            default: {
              bid: 5,
              author: "黄立诚",
              type: 0,
              tag: "多选框",
              state: 1,
              releaseTime: "2022-09-07T08:27:36.000+00:00",
              suki: 1698469,
              collection: 7883,
              views: 123477,
              title: "计算机科学与技术",
              summary: "CPU",
              cover: "CgCz"
            }
          },
          normal: {
            type: Boolean,
            default: true
          }
        }
      });
      const _hoisted_1$1 = {
        key: 0,
        class: "ac-blogitem-small"
      };
      const _hoisted_2$1 = vue.createElementVNode(
        "div",
        { class: "ac-blogitem-small-left" },
        [
          vue.createElementVNode("img", {
            src: "https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF",
            alt: ""
          })
        ],
        -1
        /* HOISTED */
      );
      const _hoisted_3$1 = { class: "ac-blogitem-small-right" };
      const _hoisted_4$1 = {
        key: 0,
        class: "fc-blue"
      };
      const _hoisted_5$1 = {
        key: 1,
        class: "fc-blue"
      };
      const _hoisted_6 = {
        key: 2,
        class: "fc-blue"
      };
      const _hoisted_7 = { class: "ac-blogitem-small-right-footer" };
      const _hoisted_8 = { class: "left" };
      const _hoisted_9 = { style: { "margin": "0 15px" } };
      const _hoisted_10 = vue.createElementVNode(
        "div",
        { class: "center" },
        null,
        -1
        /* HOISTED */
      );
      const _hoisted_11 = { class: "right" };
      const _hoisted_12 = { style: { "margin": "0 15px" } };
      const _hoisted_13 = {
        key: 1,
        class: "article-item zoomIn article"
      };
      const _hoisted_14 = vue.createElementVNode(
        "div",
        { class: "fc-flag" },
        "置顶",
        -1
        /* HOISTED */
      );
      const _hoisted_15 = { class: "title" };
      const _hoisted_16 = {
        key: 0,
        class: "fc-blue"
      };
      const _hoisted_17 = {
        key: 1,
        class: "fc-blue"
      };
      const _hoisted_18 = {
        key: 2,
        class: "fc-blue"
      };
      const _hoisted_19 = { href: "read.html" };
      const _hoisted_20 = { class: "time" };
      const _hoisted_21 = { class: "day" };
      const _hoisted_22 = { class: "month fs-18" };
      const _hoisted_23 = vue.createElementVNode(
        "span",
        { class: "fs-14" },
        "月",
        -1
        /* HOISTED */
      );
      const _hoisted_24 = { class: "year fs-18 ml10" };
      const _hoisted_25 = {
        key: 0,
        class: "content"
      };
      const _hoisted_26 = vue.createElementVNode(
        "a",
        {
          href: "read.html",
          class: "cover img-light"
        },
        [
          vue.createElementVNode("img", {
            src: "https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF",
            alt: ""
          })
        ],
        -1
        /* HOISTED */
      );
      const _hoisted_27 = {
        key: 1,
        class: "read-more"
      };
      const _hoisted_28 = vue.createElementVNode(
        "a",
        {
          href: "read.html",
          class: "fc-black f-fwb"
        },
        "继续阅读",
        -1
        /* HOISTED */
      );
      const _hoisted_29 = [
        _hoisted_28
      ];
      const _hoisted_30 = { class: "f-oh footer" };
      const _hoisted_31 = { class: "f-fl tags" };
      const _hoisted_32 = { class: "f-fr" };
      const _hoisted_33 = { class: "read" };
      const _hoisted_34 = vue.createElementVNode(
        "i",
        { class: "fa fa-eye fs-16" },
        null,
        -1
        /* HOISTED */
      );
      const _hoisted_35 = { class: "num" };
      const _hoisted_36 = { class: "read" };
      const _hoisted_37 = vue.createElementVNode(
        "i",
        { class: "fa fa-eye fs-16" },
        null,
        -1
        /* HOISTED */
      );
      const _hoisted_38 = { class: "num" };
      const _hoisted_39 = { class: "read" };
      const _hoisted_40 = vue.createElementVNode(
        "i",
        { class: "fa fa-eye fs-16" },
        null,
        -1
        /* HOISTED */
      );
      const _hoisted_41 = { class: "num" };
      function render$1(_ctx, _cache, $props, $setup, $data, $options) {
        const _component_AcTag = vue.resolveComponent("AcTag");
        return _ctx.normal ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          _hoisted_2$1,
          vue.createElementVNode("div", _hoisted_3$1, [
            vue.createElementVNode("h3", null, [
              _ctx.blog.type == 0 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$1, "【转载】")) : vue.createCommentVNode("v-if", true),
              _ctx.blog.type == 1 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$1, "【原创】")) : vue.createCommentVNode("v-if", true),
              _ctx.blog.type == 2 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, "【VIP原创】")) : vue.createCommentVNode("v-if", true),
              vue.createTextVNode(
                " " + vue.toDisplayString(_ctx.blog.title),
                1
                /* TEXT */
              )
            ]),
            vue.createCommentVNode(" <p>{{blog}}</p> "),
            vue.createElementVNode(
              "p",
              null,
              vue.toDisplayString(_ctx.blog.summary),
              1
              /* TEXT */
            ),
            vue.createElementVNode("div", _hoisted_7, [
              vue.createElementVNode("div", _hoisted_8, [
                vue.createElementVNode("div", null, [
                  vue.createVNode(_component_AcTag, { type: "success" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(_ctx.blog.tag),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                vue.createElementVNode(
                  "div",
                  _hoisted_9,
                  vue.toDisplayString(_ctx.blog.author),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "div",
                  null,
                  vue.toDisplayString(new Date(_ctx.blog.releaseTime).toLocaleString()),
                  1
                  /* TEXT */
                )
              ]),
              _hoisted_10,
              vue.createElementVNode("div", _hoisted_11, [
                vue.createElementVNode(
                  "div",
                  null,
                  "点赞量:" + vue.toDisplayString(_ctx.blog.suki),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "div",
                  _hoisted_12,
                  "收藏量:" + vue.toDisplayString(_ctx.blog.collection),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "div",
                  null,
                  "查看量:" + vue.toDisplayString(_ctx.blog.views),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ])) : (vue.openBlock(), vue.createElementBlock("section", _hoisted_13, [
          _hoisted_14,
          vue.createElementVNode("h5", _hoisted_15, [
            _ctx.blog.type == 0 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_16, "【转载】")) : vue.createCommentVNode("v-if", true),
            _ctx.blog.type == 1 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_17, "【原创】")) : vue.createCommentVNode("v-if", true),
            _ctx.blog.type == 2 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_18, "【VIP原创】")) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "a",
              _hoisted_19,
              vue.toDisplayString(_ctx.blog.title),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("div", _hoisted_20, [
            vue.createElementVNode(
              "span",
              _hoisted_21,
              vue.toDisplayString(_ctx.blog.releaseTime.slice(8, 10)),
              1
              /* TEXT */
            ),
            vue.createElementVNode("span", _hoisted_22, [
              vue.createTextVNode(
                vue.toDisplayString(_ctx.blog.releaseTime.slice(5, 7)),
                1
                /* TEXT */
              ),
              _hoisted_23
            ]),
            vue.createElementVNode(
              "span",
              _hoisted_24,
              vue.toDisplayString(_ctx.blog.releaseTime.slice(0, 4)),
              1
              /* TEXT */
            )
          ]),
          _ctx.blog.summary ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_25, [
            _hoisted_26,
            vue.createTextVNode(
              " " + vue.toDisplayString(_ctx.blog.summary),
              1
              /* TEXT */
            )
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.blog.summary ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_27, _hoisted_29)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("aside", _hoisted_30, [
            vue.createElementVNode("div", _hoisted_31, [
              vue.createVNode(_component_AcTag, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(_ctx.blog.tag),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_AcTag, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    "作者:" + vue.toDisplayString(_ctx.blog.author),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createCommentVNode(' <a class="tag">作者:{{blog.author}}</a> ')
            ]),
            vue.createElementVNode("div", _hoisted_32, [
              vue.createElementVNode("span", _hoisted_33, [
                _hoisted_34,
                vue.createElementVNode(
                  "i",
                  _hoisted_35,
                  "点赞量:" + vue.toDisplayString(_ctx.blog.suki),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("span", _hoisted_36, [
                _hoisted_37,
                vue.createElementVNode(
                  "i",
                  _hoisted_38,
                  "收藏量:" + vue.toDisplayString(_ctx.blog.collection),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("span", _hoisted_39, [
                _hoisted_40,
                vue.createElementVNode(
                  "i",
                  _hoisted_41,
                  "阅读量:" + vue.toDisplayString(_ctx.blog.views),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ]));
      }
      script$1.render = render$1;
      script$1.__file = "packages/blogitem/src/index.vue";
      script$1.install = function(app) {
        app.component(script$1.name, script$1);
      };
      var script = {
        name: "AcSteps",
        props: {
          steps: {
            type: Array,
            required: true
          },
          currentStep: {
            type: Number,
            default: 0
          }
        },
        setup(props2) {
          const activeStep = vue.ref(props2.currentStep);
          const handleClick = (stepIndex) => {
            activeStep.value = stepIndex;
          };
          return {
            activeStep,
            handleClick
          };
        }
      };
      const _hoisted_1 = { class: "steps" };
      const _hoisted_2 = ["onClick"];
      const _hoisted_3 = { class: "step-number" };
      const _hoisted_4 = { class: "step-label" };
      const _hoisted_5 = { class: "process" };
      function render(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("div", _hoisted_1, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($props.steps, (step, index2) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    key: index2,
                    class: vue.normalizeClass(["step", { active: index2 === $setup.activeStep }]),
                    onClick: ($event) => $setup.handleClick(index2)
                  }, [
                    vue.createElementVNode(
                      "div",
                      _hoisted_3,
                      vue.toDisplayString(index2 + 1),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "div",
                      _hoisted_4,
                      vue.toDisplayString(step),
                      1
                      /* TEXT */
                    )
                  ], 10, _hoisted_2);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("div", _hoisted_5, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($props.steps, (step, index2) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "div",
                    {
                      key: index2,
                      class: vue.normalizeClass(["process-1", { active: index2 <= $setup.activeStep }])
                    },
                    [
                      vue.createElementVNode(
                        "div",
                        null,
                        vue.toDisplayString(step),
                        1
                        /* TEXT */
                      )
                    ],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      }
      script.render = render;
      script.__file = "packages/steps/src/steps.vue";
      script.install = function(app) {
        app.component(script.name, script);
      };
      var components = [
        script$m,
        script$l,
        script$k,
        Col,
        Row,
        script$j,
        script$h,
        script$g,
        script$i,
        script$f,
        Tabs,
        script$e,
        script$c,
        script$a,
        script$9,
        script$b,
        script$8,
        script$7,
        script$6,
        script$5,
        script$4,
        script$3,
        script$2,
        script$1,
        script
        // AcDemo
      ];
      var install = function install2(app) {
        components.forEach(function(element) {
          app.component(element.name, element);
        });
        app.use(VInfiniteScroll);
        app.config.globalProperties.$message = Message;
      };
      var index = {
        install
      };
      return index;
    });
  }
});
export default require_index_esm();
//# sourceMappingURL=achang-ui.js.map
