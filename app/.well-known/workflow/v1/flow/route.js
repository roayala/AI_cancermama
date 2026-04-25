// biome-ignore-all lint: generated file
/* eslint-disable */
import { workflowEntrypoint } from 'workflow/runtime';

const workflowCode = `globalThis.__private_workflows = new Map();
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?\$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    __name(parse, "parse");
    function fmtShort(ms2) {
      var msAbs = Math.abs(ms2);
      if (msAbs >= d) {
        return Math.round(ms2 / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms2 / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms2 / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms2 / s) + "s";
      }
      return ms2 + "ms";
    }
    __name(fmtShort, "fmtShort");
    function fmtLong(ms2) {
      var msAbs = Math.abs(ms2);
      if (msAbs >= d) {
        return plural(ms2, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms2, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms2, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms2, msAbs, s, "second");
      }
      return ms2 + " ms";
    }
    __name(fmtLong, "fmtLong");
    function plural(ms2, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms2 / n) + " " + name + (isPlural ? "s" : "");
    }
    __name(plural, "plural");
  }
});

// node_modules/@workflow/utils/dist/time.js
var import_ms = __toESM(require_ms(), 1);

// node_modules/@workflow/core/dist/symbols.js
var WORKFLOW_SLEEP = /* @__PURE__ */ Symbol.for("WORKFLOW_SLEEP");

// node_modules/@workflow/core/dist/sleep.js
async function sleep(param) {
  const sleepFn = globalThis[WORKFLOW_SLEEP];
  if (!sleepFn) {
    throw new Error("\`sleep()\` can only be called inside a workflow function");
  }
  return sleepFn(param);
}
__name(sleep, "sleep");

// node_modules/workflow/dist/stdlib.js
var fetch = globalThis[/* @__PURE__ */ Symbol.for("WORKFLOW_USE_STEP")]("step//workflow@4.2.4//fetch");

// workflows/notification/steps.ts
var sendInitialSMS = globalThis[/* @__PURE__ */ Symbol.for("WORKFLOW_USE_STEP")]("step//./workflows/notification/steps//sendInitialSMS");
var sendFollowUpSMS = globalThis[/* @__PURE__ */ Symbol.for("WORKFLOW_USE_STEP")]("step//./workflows/notification/steps//sendFollowUpSMS");
var escalateToClinic = globalThis[/* @__PURE__ */ Symbol.for("WORKFLOW_USE_STEP")]("step//./workflows/notification/steps//escalateToClinic");
var checkAcknowledged = globalThis[/* @__PURE__ */ Symbol.for("WORKFLOW_USE_STEP")]("step//./workflows/notification/steps//checkAcknowledged");
var createNotificationLog = globalThis[/* @__PURE__ */ Symbol.for("WORKFLOW_USE_STEP")]("step//./workflows/notification/steps//createNotificationLog");

// workflows/notification/index.ts
var FIRST_WAIT = "30s";
var SECOND_WAIT = "1m";
async function notificationWorkflow(resultId, patientId, patientName, patientPhone) {
  await createNotificationLog(resultId, patientId);
  await sendInitialSMS(patientPhone, patientName, resultId);
  await sleep(FIRST_WAIT);
  const acknowledged = await checkAcknowledged(resultId);
  if (acknowledged) return {
    status: "acknowledged"
  };
  await sendFollowUpSMS(patientPhone, patientName, resultId);
  await sleep(SECOND_WAIT);
  const acknowledgedAfterFollowUp = await checkAcknowledged(resultId);
  if (acknowledgedAfterFollowUp) return {
    status: "acknowledged"
  };
  await escalateToClinic(resultId, patientName);
  return {
    status: "escalated"
  };
}
__name(notificationWorkflow, "notificationWorkflow");
notificationWorkflow.workflowId = "workflow//./workflows/notification/index//notificationWorkflow";
globalThis.__private_workflows.set("workflow//./workflows/notification/index//notificationWorkflow", notificationWorkflow);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9Ad29ya2Zsb3cvdXRpbHMvc3JjL3RpbWUudHMiLCAibm9kZV9tb2R1bGVzL0B3b3JrZmxvdy9jb3JlL3NyYy9zeW1ib2xzLnRzIiwgIm5vZGVfbW9kdWxlcy9Ad29ya2Zsb3cvY29yZS9zcmMvc2xlZXAudHMiLCAibm9kZV9tb2R1bGVzL3dvcmtmbG93L3NyYy9zdGRsaWIudHMiLCAid29ya2Zsb3dzL25vdGlmaWNhdGlvbi9zdGVwcy50cyIsICJ3b3JrZmxvd3Mvbm90aWZpY2F0aW9uL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEhlbHBlcnMuXG4gKi8gdmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICsgSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59O1xuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi8gZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoc3RyKTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSAneWVhcnMnOlxuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgY2FzZSAneXJzJzpcbiAgICAgICAgY2FzZSAneXInOlxuICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgIHJldHVybiBuICogeTtcbiAgICAgICAgY2FzZSAnd2Vla3MnOlxuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICByZXR1cm4gbiAqIHc7XG4gICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIHJldHVybiBuICogZDtcbiAgICAgICAgY2FzZSAnaG91cnMnOlxuICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgY2FzZSAnaHJzJzpcbiAgICAgICAgY2FzZSAnaHInOlxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgIHJldHVybiBuICogaDtcbiAgICAgICAgY2FzZSAnbWludXRlcyc6XG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgIGNhc2UgJ21pbnMnOlxuICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIHJldHVybiBuICogbTtcbiAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgIGNhc2UgJ3NlY3MnOlxuICAgICAgICBjYXNlICdzZWMnOlxuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIHJldHVybiBuICogcztcbiAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgICAgICBjYXNlICdtc2Vjcyc6XG4gICAgICAgIGNhc2UgJ21zZWMnOlxuICAgICAgICBjYXNlICdtcyc6XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqLyBmdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICAgIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgICBpZiAobXNBYnMgPj0gZCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICAgIH1cbiAgICBpZiAobXNBYnMgPj0gaCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICAgIH1cbiAgICBpZiAobXNBYnMgPj0gbSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICAgIH1cbiAgICBpZiAobXNBYnMgPj0gcykge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICAgIH1cbiAgICByZXR1cm4gbXMgKyAnbXMnO1xufVxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovIGZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gICAgaWYgKG1zQWJzID49IGQpIHtcbiAgICAgICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgICB9XG4gICAgaWYgKG1zQWJzID49IGgpIHtcbiAgICAgICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gICAgfVxuICAgIGlmIChtc0FicyA+PSBtKSB7XG4gICAgICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gICAgfVxuICAgIGlmIChtc0FicyA+PSBzKSB7XG4gICAgICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gICAgfVxuICAgIHJldHVybiBtcyArICcgbXMnO1xufVxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqLyBmdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gICAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFN0cmluZ1ZhbHVlIH0gZnJvbSAnbXMnO1xuaW1wb3J0IG1zIGZyb20gJ21zJztcblxuLyoqXG4gKiBQYXJzZXMgYSBkdXJhdGlvbiBwYXJhbWV0ZXIgKHN0cmluZywgbnVtYmVyLCBvciBEYXRlKSBhbmQgcmV0dXJucyBhIERhdGUgb2JqZWN0XG4gKiByZXByZXNlbnRpbmcgd2hlbiB0aGUgZHVyYXRpb24gc2hvdWxkIGVsYXBzZS5cbiAqXG4gKiAtIEZvciBzdHJpbmdzOiBQYXJzZXMgZHVyYXRpb24gc3RyaW5ncyBsaWtlIFwiMXNcIiwgXCI1bVwiLCBcIjFoXCIsIGV0Yy4gdXNpbmcgdGhlIGBtc2AgbGlicmFyeVxuICogLSBGb3IgbnVtYmVyczogVHJlYXRzIGFzIG1pbGxpc2Vjb25kcyBmcm9tIG5vd1xuICogLSBGb3IgRGF0ZSBvYmplY3RzOiBSZXR1cm5zIHRoZSBkYXRlIGRpcmVjdGx5IChoYW5kbGVzIGJvdGggRGF0ZSBpbnN0YW5jZXMgYW5kIGRhdGUtbGlrZSBvYmplY3RzIGZyb20gZGVzZXJpYWxpemF0aW9uKVxuICpcbiAqIEBwYXJhbSBwYXJhbSAtIFRoZSBkdXJhdGlvbiBwYXJhbWV0ZXIgKFN0cmluZ1ZhbHVlLCBEYXRlLCBvciBudW1iZXIgb2YgbWlsbGlzZWNvbmRzKVxuICogQHJldHVybnMgQSBEYXRlIG9iamVjdCByZXByZXNlbnRpbmcgd2hlbiB0aGUgZHVyYXRpb24gc2hvdWxkIGVsYXBzZVxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXJhbWV0ZXIgaXMgaW52YWxpZCBvciBjYW5ub3QgYmUgcGFyc2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uVG9EYXRlKHBhcmFtOiBTdHJpbmdWYWx1ZSB8IERhdGUgfCBudW1iZXIpOiBEYXRlIHtcbiAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBkdXJhdGlvbk1zID0gbXMocGFyYW0pO1xuICAgIGlmICh0eXBlb2YgZHVyYXRpb25NcyAhPT0gJ251bWJlcicgfHwgZHVyYXRpb25NcyA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgZHVyYXRpb246IFwiJHtwYXJhbX1cIi4gRXhwZWN0ZWQgYSB2YWxpZCBkdXJhdGlvbiBzdHJpbmcgbGlrZSBcIjFzXCIsIFwiMW1cIiwgXCIxaFwiLCBldGMuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUubm93KCkgKyBkdXJhdGlvbk1zKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHBhcmFtIDwgMCB8fCAhTnVtYmVyLmlzRmluaXRlKHBhcmFtKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBkdXJhdGlvbjogJHtwYXJhbX0uIEV4cGVjdGVkIGEgbm9uLW5lZ2F0aXZlIGZpbml0ZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLm5vdygpICsgcGFyYW0pO1xuICB9IGVsc2UgaWYgKFxuICAgIHBhcmFtIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgIChwYXJhbSAmJlxuICAgICAgdHlwZW9mIHBhcmFtID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIChwYXJhbSBhcyBhbnkpLmdldFRpbWUgPT09ICdmdW5jdGlvbicpXG4gICkge1xuICAgIC8vIEhhbmRsZSBib3RoIERhdGUgaW5zdGFuY2VzIGFuZCBkYXRlLWxpa2Ugb2JqZWN0cyAoZnJvbSBkZXNlcmlhbGl6YXRpb24pXG4gICAgcmV0dXJuIHBhcmFtIGluc3RhbmNlb2YgRGF0ZSA/IHBhcmFtIDogbmV3IERhdGUoKHBhcmFtIGFzIGFueSkuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBkdXJhdGlvbiBwYXJhbWV0ZXIuIEV4cGVjdGVkIGEgZHVyYXRpb24gc3RyaW5nLCBudW1iZXIgKG1pbGxpc2Vjb25kcyksIG9yIERhdGUgb2JqZWN0LmBcbiAgICApO1xuICB9XG59XG4iLCAiZXhwb3J0IGNvbnN0IFdPUktGTE9XX1VTRV9TVEVQID0gU3ltYm9sLmZvcignV09SS0ZMT1dfVVNFX1NURVAnKTtcbmV4cG9ydCBjb25zdCBXT1JLRkxPV19DUkVBVEVfSE9PSyA9IFN5bWJvbC5mb3IoJ1dPUktGTE9XX0NSRUFURV9IT09LJyk7XG5leHBvcnQgY29uc3QgV09SS0ZMT1dfU0xFRVAgPSBTeW1ib2wuZm9yKCdXT1JLRkxPV19TTEVFUCcpO1xuZXhwb3J0IGNvbnN0IFdPUktGTE9XX0NPTlRFWFQgPSBTeW1ib2wuZm9yKCdXT1JLRkxPV19DT05URVhUJyk7XG5leHBvcnQgY29uc3QgV09SS0ZMT1dfR0VUX1NUUkVBTV9JRCA9IFN5bWJvbC5mb3IoJ1dPUktGTE9XX0dFVF9TVFJFQU1fSUQnKTtcbmV4cG9ydCBjb25zdCBTVEFCTEVfVUxJRCA9IFN5bWJvbC5mb3IoJ1dPUktGTE9XX1NUQUJMRV9VTElEJyk7XG5leHBvcnQgY29uc3QgU1RSRUFNX05BTUVfU1lNQk9MID0gU3ltYm9sLmZvcignV09SS0ZMT1dfU1RSRUFNX05BTUUnKTtcbmV4cG9ydCBjb25zdCBTVFJFQU1fVFlQRV9TWU1CT0wgPSBTeW1ib2wuZm9yKCdXT1JLRkxPV19TVFJFQU1fVFlQRScpO1xuZXhwb3J0IGNvbnN0IEJPRFlfSU5JVF9TWU1CT0wgPSBTeW1ib2wuZm9yKCdCT0RZX0lOSVQnKTtcbmV4cG9ydCBjb25zdCBXRUJIT09LX1JFU1BPTlNFX1dSSVRBQkxFID0gU3ltYm9sLmZvcihcbiAgJ1dFQkhPT0tfUkVTUE9OU0VfV1JJVEFCTEUnXG4pO1xuXG4vKipcbiAqIFN5bWJvbCB1c2VkIHRvIHN0b3JlIHRoZSBjbGFzcyByZWdpc3RyeSBvbiBnbG9iYWxUaGlzIGluIHdvcmtmbG93IG1vZGUuXG4gKiBUaGlzIGFsbG93cyB0aGUgZGVzZXJpYWxpemVyIHRvIGZpbmQgY2xhc3NlcyBieSBjbGFzc0lkIGluIHRoZSBWTSBjb250ZXh0LlxuICovXG5leHBvcnQgY29uc3QgV09SS0ZMT1dfQ0xBU1NfUkVHSVNUUlkgPSBTeW1ib2wuZm9yKCd3b3JrZmxvdy1jbGFzcy1yZWdpc3RyeScpO1xuIiwgImltcG9ydCB0eXBlIHsgU3RyaW5nVmFsdWUgfSBmcm9tICdtcyc7XG5pbXBvcnQgeyBXT1JLRkxPV19TTEVFUCB9IGZyb20gJy4vc3ltYm9scy5qcyc7XG5cbi8qKlxuICogU2xlZXAgd2l0aGluIGEgd29ya2Zsb3cgZm9yIGEgZ2l2ZW4gZHVyYXRpb24uXG4gKlxuICogVGhpcyBpcyBhIGJ1aWx0LWluIHJ1bnRpbWUgZnVuY3Rpb24gdGhhdCB1c2VzIHRpbWVyIGV2ZW50cyBpbiB0aGUgZXZlbnQgbG9nLlxuICpcbiAqIEBwYXJhbSBkdXJhdGlvbiAtIFRoZSBkdXJhdGlvbiB0byBzbGVlcCBmb3IsIHRoaXMgaXMgYSBzdHJpbmcgaW4gdGhlIGZvcm1hdFxuICogb2YgYFwiMTAwMG1zXCJgLCBgXCIxc1wiYCwgYFwiMW1cImAsIGBcIjFoXCJgLCBvciBgXCIxZFwiYC5cbiAqIEBvdmVybG9hZFxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc2xlZXAgaXMgY29tcGxldGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzbGVlcChkdXJhdGlvbjogU3RyaW5nVmFsdWUpOiBQcm9taXNlPHZvaWQ+O1xuXG4vKipcbiAqIFNsZWVwIHdpdGhpbiBhIHdvcmtmbG93IHVudGlsIGEgc3BlY2lmaWMgZGF0ZS5cbiAqXG4gKiBUaGlzIGlzIGEgYnVpbHQtaW4gcnVudGltZSBmdW5jdGlvbiB0aGF0IHVzZXMgdGltZXIgZXZlbnRzIGluIHRoZSBldmVudCBsb2cuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBzbGVlcCB1bnRpbCwgdGhpcyBtdXN0IGJlIGEgZnV0dXJlIGRhdGUuXG4gKiBAb3ZlcmxvYWRcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNsZWVwIGlzIGNvbXBsZXRlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2xlZXAoZGF0ZTogRGF0ZSk6IFByb21pc2U8dm9pZD47XG5cbi8qKlxuICogU2xlZXAgd2l0aGluIGEgd29ya2Zsb3cgZm9yIGEgZ2l2ZW4gZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIFRoaXMgaXMgYSBidWlsdC1pbiBydW50aW1lIGZ1bmN0aW9uIHRoYXQgdXNlcyB0aW1lciBldmVudHMgaW4gdGhlIGV2ZW50IGxvZy5cbiAqXG4gKiBAcGFyYW0gZHVyYXRpb25NcyAtIFRoZSBkdXJhdGlvbiB0byBzbGVlcCBmb3IgaW4gbWlsbGlzZWNvbmRzLlxuICogQG92ZXJsb2FkXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzbGVlcCBpcyBjb21wbGV0ZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNsZWVwKGR1cmF0aW9uTXM6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzbGVlcChwYXJhbTogU3RyaW5nVmFsdWUgfCBEYXRlIHwgbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIEluc2lkZSB0aGUgd29ya2Zsb3cgVk0sIHRoZSBzbGVlcCBmdW5jdGlvbiBpcyBzdG9yZWQgaW4gdGhlIGdsb2JhbFRoaXMgb2JqZWN0IGJlaGluZCBhIHN5bWJvbFxuICBjb25zdCBzbGVlcEZuID0gKGdsb2JhbFRoaXMgYXMgYW55KVtXT1JLRkxPV19TTEVFUF07XG4gIGlmICghc2xlZXBGbikge1xuICAgIHRocm93IG5ldyBFcnJvcignYHNsZWVwKClgIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgYSB3b3JrZmxvdyBmdW5jdGlvbicpO1xuICB9XG4gIHJldHVybiBzbGVlcEZuKHBhcmFtKTtcbn1cbiIsICIvKipcbiAqIFRoaXMgaXMgdGhlIFwic3RhbmRhcmQgbGlicmFyeVwiIG9mIHN0ZXBzIHRoYXQgd2UgbWFrZSBhdmFpbGFibGUgdG8gYWxsIHdvcmtmbG93IHVzZXJzLlxuICogVGhlIGNhbiBiZSBpbXBvcnRlZCBsaWtlIHNvOiBgaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICd3b3JrZmxvdydgLiBhbmQgdXNlZCBpbiB3b3JrZmxvdy5cbiAqIFRoZSBuZWVkIHRvIGJlIGV4cG9ydGVkIGRpcmVjdGx5IGluIHRoaXMgcGFja2FnZSBhbmQgY2Fubm90IGxpdmUgaW4gYGNvcmVgIHRvIHByZXZlbnRcbiAqIGNpcmN1bGFyIGRlcGVuZGVuY2llcyBwb3N0LWNvbXBpbGF0aW9uLlxuICovXG5cbi8qKlxuICogQSBob2lzdGVkIGBmZXRjaCgpYCBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIGFzIGEgXCJzdGVwXCIgZnVuY3Rpb24sXG4gKiBmb3IgdXNlIHdpdGhpbiB3b3JrZmxvdyBmdW5jdGlvbnMuXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaCguLi5hcmdzOiBQYXJhbWV0ZXJzPHR5cGVvZiBnbG9iYWxUaGlzLmZldGNoPikge1xuICAndXNlIHN0ZXAnO1xuICByZXR1cm4gZ2xvYmFsVGhpcy5mZXRjaCguLi5hcmdzKTtcbn1cbiIsICIvKipfX2ludGVybmFsX3dvcmtmbG93c3tcInN0ZXBzXCI6e1wid29ya2Zsb3dzL25vdGlmaWNhdGlvbi9zdGVwcy50c1wiOntcImNoZWNrQWNrbm93bGVkZ2VkXCI6e1wic3RlcElkXCI6XCJzdGVwLy8uL3dvcmtmbG93cy9ub3RpZmljYXRpb24vc3RlcHMvL2NoZWNrQWNrbm93bGVkZ2VkXCJ9LFwiY3JlYXRlTm90aWZpY2F0aW9uTG9nXCI6e1wic3RlcElkXCI6XCJzdGVwLy8uL3dvcmtmbG93cy9ub3RpZmljYXRpb24vc3RlcHMvL2NyZWF0ZU5vdGlmaWNhdGlvbkxvZ1wifSxcImVzY2FsYXRlVG9DbGluaWNcIjp7XCJzdGVwSWRcIjpcInN0ZXAvLy4vd29ya2Zsb3dzL25vdGlmaWNhdGlvbi9zdGVwcy8vZXNjYWxhdGVUb0NsaW5pY1wifSxcInNlbmRGb2xsb3dVcFNNU1wiOntcInN0ZXBJZFwiOlwic3RlcC8vLi93b3JrZmxvd3Mvbm90aWZpY2F0aW9uL3N0ZXBzLy9zZW5kRm9sbG93VXBTTVNcIn0sXCJzZW5kSW5pdGlhbFNNU1wiOntcInN0ZXBJZFwiOlwic3RlcC8vLi93b3JrZmxvd3Mvbm90aWZpY2F0aW9uL3N0ZXBzLy9zZW5kSW5pdGlhbFNNU1wifX19fSovO1xuZXhwb3J0IHZhciBzZW5kSW5pdGlhbFNNUyA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcihcIldPUktGTE9XX1VTRV9TVEVQXCIpXShcInN0ZXAvLy4vd29ya2Zsb3dzL25vdGlmaWNhdGlvbi9zdGVwcy8vc2VuZEluaXRpYWxTTVNcIik7XG5leHBvcnQgdmFyIHNlbmRGb2xsb3dVcFNNUyA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcihcIldPUktGTE9XX1VTRV9TVEVQXCIpXShcInN0ZXAvLy4vd29ya2Zsb3dzL25vdGlmaWNhdGlvbi9zdGVwcy8vc2VuZEZvbGxvd1VwU01TXCIpO1xuZXhwb3J0IHZhciBlc2NhbGF0ZVRvQ2xpbmljID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKFwiV09SS0ZMT1dfVVNFX1NURVBcIildKFwic3RlcC8vLi93b3JrZmxvd3Mvbm90aWZpY2F0aW9uL3N0ZXBzLy9lc2NhbGF0ZVRvQ2xpbmljXCIpO1xuZXhwb3J0IHZhciBjaGVja0Fja25vd2xlZGdlZCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcihcIldPUktGTE9XX1VTRV9TVEVQXCIpXShcInN0ZXAvLy4vd29ya2Zsb3dzL25vdGlmaWNhdGlvbi9zdGVwcy8vY2hlY2tBY2tub3dsZWRnZWRcIik7XG5leHBvcnQgdmFyIGNyZWF0ZU5vdGlmaWNhdGlvbkxvZyA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcihcIldPUktGTE9XX1VTRV9TVEVQXCIpXShcInN0ZXAvLy4vd29ya2Zsb3dzL25vdGlmaWNhdGlvbi9zdGVwcy8vY3JlYXRlTm90aWZpY2F0aW9uTG9nXCIpO1xuIiwgImltcG9ydCB7IHNsZWVwIH0gZnJvbSBcIndvcmtmbG93XCI7XG5pbXBvcnQgeyBzZW5kSW5pdGlhbFNNUywgc2VuZEZvbGxvd1VwU01TLCBlc2NhbGF0ZVRvQ2xpbmljLCBjaGVja0Fja25vd2xlZGdlZCwgY3JlYXRlTm90aWZpY2F0aW9uTG9nIH0gZnJvbSBcIi4vc3RlcHNcIjtcbi8qKl9faW50ZXJuYWxfd29ya2Zsb3dze1wid29ya2Zsb3dzXCI6e1wid29ya2Zsb3dzL25vdGlmaWNhdGlvbi9pbmRleC50c1wiOntcIm5vdGlmaWNhdGlvbldvcmtmbG93XCI6e1wid29ya2Zsb3dJZFwiOlwid29ya2Zsb3cvLy4vd29ya2Zsb3dzL25vdGlmaWNhdGlvbi9pbmRleC8vbm90aWZpY2F0aW9uV29ya2Zsb3dcIn19fX0qLztcbi8vIERlbW8gdXNlcyBzaG9ydCB0aW1lcyBcdTIwMTQgcHJvZHVjdGlvbiB3b3VsZCB1c2UgXCIyNGhcIiBhbmQgXCI0OGhcIlxuY29uc3QgRklSU1RfV0FJVCA9IFwiMzBzXCI7XG5jb25zdCBTRUNPTkRfV0FJVCA9IFwiMW1cIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBub3RpZmljYXRpb25Xb3JrZmxvdyhyZXN1bHRJZCwgcGF0aWVudElkLCBwYXRpZW50TmFtZSwgcGF0aWVudFBob25lKSB7XG4gICAgYXdhaXQgY3JlYXRlTm90aWZpY2F0aW9uTG9nKHJlc3VsdElkLCBwYXRpZW50SWQpO1xuICAgIGF3YWl0IHNlbmRJbml0aWFsU01TKHBhdGllbnRQaG9uZSwgcGF0aWVudE5hbWUsIHJlc3VsdElkKTtcbiAgICBhd2FpdCBzbGVlcChGSVJTVF9XQUlUKTtcbiAgICBjb25zdCBhY2tub3dsZWRnZWQgPSBhd2FpdCBjaGVja0Fja25vd2xlZGdlZChyZXN1bHRJZCk7XG4gICAgaWYgKGFja25vd2xlZGdlZCkgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBcImFja25vd2xlZGdlZFwiXG4gICAgfTtcbiAgICBhd2FpdCBzZW5kRm9sbG93VXBTTVMocGF0aWVudFBob25lLCBwYXRpZW50TmFtZSwgcmVzdWx0SWQpO1xuICAgIGF3YWl0IHNsZWVwKFNFQ09ORF9XQUlUKTtcbiAgICBjb25zdCBhY2tub3dsZWRnZWRBZnRlckZvbGxvd1VwID0gYXdhaXQgY2hlY2tBY2tub3dsZWRnZWQocmVzdWx0SWQpO1xuICAgIGlmIChhY2tub3dsZWRnZWRBZnRlckZvbGxvd1VwKSByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IFwiYWNrbm93bGVkZ2VkXCJcbiAgICB9O1xuICAgIGF3YWl0IGVzY2FsYXRlVG9DbGluaWMocmVzdWx0SWQsIHBhdGllbnROYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IFwiZXNjYWxhdGVkXCJcbiAgICB9O1xufVxubm90aWZpY2F0aW9uV29ya2Zsb3cud29ya2Zsb3dJZCA9IFwid29ya2Zsb3cvLy4vd29ya2Zsb3dzL25vdGlmaWNhdGlvbi9pbmRleC8vbm90aWZpY2F0aW9uV29ya2Zsb3dcIjtcbmdsb2JhbFRoaXMuX19wcml2YXRlX3dvcmtmbG93cy5zZXQoXCJ3b3JrZmxvdy8vLi93b3JrZmxvd3Mvbm90aWZpY2F0aW9uL2luZGV4Ly9ub3RpZmljYXRpb25Xb3JrZmxvd1wiLCBub3RpZmljYXRpb25Xb3JrZmxvdyk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLHNDQUFBQSxTQUFBO0FBQUE7QUFFSSxRQUFJLElBQUk7QUFDWixRQUFJLElBQUksSUFBSTtBQUNaLFFBQUksSUFBSSxJQUFJO0FBQ1osUUFBSSxJQUFJLElBQUk7QUFDWixRQUFJLElBQUksSUFBSTtBQUNaLFFBQUksSUFBSSxJQUFJO0FBYVIsSUFBQUEsUUFBTyxVQUFVLFNBQVMsS0FBSyxTQUFTO0FBQ3hDLGdCQUFVLFdBQVcsQ0FBQztBQUN0QixVQUFJLE9BQU8sT0FBTztBQUNsQixVQUFJLFNBQVMsWUFBWSxJQUFJLFNBQVMsR0FBRztBQUNyQyxlQUFPLE1BQU0sR0FBRztBQUFBLE1BQ3BCLFdBQVcsU0FBUyxZQUFZLFNBQVMsR0FBRyxHQUFHO0FBQzNDLGVBQU8sUUFBUSxPQUFPLFFBQVEsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUFBLE1BQ3JEO0FBQ0EsWUFBTSxJQUFJLE1BQU0sMERBQTBELEtBQUssVUFBVSxHQUFHLENBQUM7QUFBQSxJQUNqRztBQU9JLGFBQVMsTUFBTSxLQUFLO0FBQ3BCLFlBQU0sT0FBTyxHQUFHO0FBQ2hCLFVBQUksSUFBSSxTQUFTLEtBQUs7QUFDbEI7QUFBQSxNQUNKO0FBQ0EsVUFBSSxRQUFRLG1JQUFtSSxLQUFLLEdBQUc7QUFDdkosVUFBSSxDQUFDLE9BQU87QUFDUjtBQUFBLE1BQ0o7QUFDQSxVQUFJLElBQUksV0FBVyxNQUFNLENBQUMsQ0FBQztBQUMzQixVQUFJLFFBQVEsTUFBTSxDQUFDLEtBQUssTUFBTSxZQUFZO0FBQzFDLGNBQU8sTUFBSztBQUFBLFFBQ1IsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUNELGlCQUFPLElBQUk7QUFBQSxRQUNmLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFDRCxpQkFBTyxJQUFJO0FBQUEsUUFDZixLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQ0QsaUJBQU8sSUFBSTtBQUFBLFFBQ2YsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUNELGlCQUFPLElBQUk7QUFBQSxRQUNmLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFDRCxpQkFBTyxJQUFJO0FBQUEsUUFDZixLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQ0QsaUJBQU8sSUFBSTtBQUFBLFFBQ2YsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUNELGlCQUFPO0FBQUEsUUFDWDtBQUNJLGlCQUFPO0FBQUEsTUFDZjtBQUFBLElBQ0o7QUFyRGE7QUE0RFQsYUFBUyxTQUFTQyxLQUFJO0FBQ3RCLFVBQUksUUFBUSxLQUFLLElBQUlBLEdBQUU7QUFDdkIsVUFBSSxTQUFTLEdBQUc7QUFDWixlQUFPLEtBQUssTUFBTUEsTUFBSyxDQUFDLElBQUk7QUFBQSxNQUNoQztBQUNBLFVBQUksU0FBUyxHQUFHO0FBQ1osZUFBTyxLQUFLLE1BQU1BLE1BQUssQ0FBQyxJQUFJO0FBQUEsTUFDaEM7QUFDQSxVQUFJLFNBQVMsR0FBRztBQUNaLGVBQU8sS0FBSyxNQUFNQSxNQUFLLENBQUMsSUFBSTtBQUFBLE1BQ2hDO0FBQ0EsVUFBSSxTQUFTLEdBQUc7QUFDWixlQUFPLEtBQUssTUFBTUEsTUFBSyxDQUFDLElBQUk7QUFBQSxNQUNoQztBQUNBLGFBQU9BLE1BQUs7QUFBQSxJQUNoQjtBQWZhO0FBc0JULGFBQVMsUUFBUUEsS0FBSTtBQUNyQixVQUFJLFFBQVEsS0FBSyxJQUFJQSxHQUFFO0FBQ3ZCLFVBQUksU0FBUyxHQUFHO0FBQ1osZUFBTyxPQUFPQSxLQUFJLE9BQU8sR0FBRyxLQUFLO0FBQUEsTUFDckM7QUFDQSxVQUFJLFNBQVMsR0FBRztBQUNaLGVBQU8sT0FBT0EsS0FBSSxPQUFPLEdBQUcsTUFBTTtBQUFBLE1BQ3RDO0FBQ0EsVUFBSSxTQUFTLEdBQUc7QUFDWixlQUFPLE9BQU9BLEtBQUksT0FBTyxHQUFHLFFBQVE7QUFBQSxNQUN4QztBQUNBLFVBQUksU0FBUyxHQUFHO0FBQ1osZUFBTyxPQUFPQSxLQUFJLE9BQU8sR0FBRyxRQUFRO0FBQUEsTUFDeEM7QUFDQSxhQUFPQSxNQUFLO0FBQUEsSUFDaEI7QUFmYTtBQWtCVCxhQUFTLE9BQU9BLEtBQUksT0FBTyxHQUFHLE1BQU07QUFDcEMsVUFBSSxXQUFXLFNBQVMsSUFBSTtBQUM1QixhQUFPLEtBQUssTUFBTUEsTUFBSyxDQUFDLElBQUksTUFBTSxRQUFRLFdBQVcsTUFBTTtBQUFBLElBQy9EO0FBSGE7QUFBQTtBQUFBOzs7QUN2SWIsZ0JBQWU7OztBQ0NSLElBQU0saUJBQWlCLHVCQUFPLElBQUksZ0JBQWdCOzs7QUNtQ3pELGVBQXNCLE1BQU0sT0FBa0M7QUFFNUQsUUFBTSxVQUFXLFdBQW1CLGNBQWM7QUFDbEQsTUFBSSxDQUFDLFNBQVM7QUFDWixVQUFNLElBQUksTUFBTSx5REFBeUQ7RUFDM0U7QUFDQSxTQUFPLFFBQVEsS0FBSztBQUN0QjtBQVBzQjs7O0FDekJuQixJQUFBLFFBQUEsV0FBQSx1QkFBQSxJQUFBLG1CQUFBLENBQUEsRUFBQSw2QkFBQTs7O0FDWEksSUFBSSxpQkFBaUIsV0FBVyx1QkFBTyxJQUFJLG1CQUFtQixDQUFDLEVBQUUsc0RBQXNEO0FBQ3ZILElBQUksa0JBQWtCLFdBQVcsdUJBQU8sSUFBSSxtQkFBbUIsQ0FBQyxFQUFFLHVEQUF1RDtBQUN6SCxJQUFJLG1CQUFtQixXQUFXLHVCQUFPLElBQUksbUJBQW1CLENBQUMsRUFBRSx3REFBd0Q7QUFDM0gsSUFBSSxvQkFBb0IsV0FBVyx1QkFBTyxJQUFJLG1CQUFtQixDQUFDLEVBQUUseURBQXlEO0FBQzdILElBQUksd0JBQXdCLFdBQVcsdUJBQU8sSUFBSSxtQkFBbUIsQ0FBQyxFQUFFLDZEQUE2RDs7O0FDRDVJLElBQU0sYUFBYTtBQUNuQixJQUFNLGNBQWM7QUFDcEIsZUFBc0IscUJBQXFCLFVBQVUsV0FBVyxhQUFhLGNBQWM7QUFDdkYsUUFBTSxzQkFBc0IsVUFBVSxTQUFTO0FBQy9DLFFBQU0sZUFBZSxjQUFjLGFBQWEsUUFBUTtBQUN4RCxRQUFNLE1BQU0sVUFBVTtBQUN0QixRQUFNLGVBQWUsTUFBTSxrQkFBa0IsUUFBUTtBQUNyRCxNQUFJLGFBQWMsUUFBTztBQUFBLElBQ3JCLFFBQVE7QUFBQSxFQUNaO0FBQ0EsUUFBTSxnQkFBZ0IsY0FBYyxhQUFhLFFBQVE7QUFDekQsUUFBTSxNQUFNLFdBQVc7QUFDdkIsUUFBTSw0QkFBNEIsTUFBTSxrQkFBa0IsUUFBUTtBQUNsRSxNQUFJLDBCQUEyQixRQUFPO0FBQUEsSUFDbEMsUUFBUTtBQUFBLEVBQ1o7QUFDQSxRQUFNLGlCQUFpQixVQUFVLFdBQVc7QUFDNUMsU0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLEVBQ1o7QUFDSjtBQWxCc0I7QUFtQnRCLHFCQUFxQixhQUFhO0FBQ2xDLFdBQVcsb0JBQW9CLElBQUksa0VBQWtFLG9CQUFvQjsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1zIl0KfQo=
`;

export const POST = workflowEntrypoint(workflowCode);