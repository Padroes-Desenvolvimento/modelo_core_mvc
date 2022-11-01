(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AdaptiveCards"] = factory();
	else
		root["AdaptiveCards"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/activity-request.ts":
/*!*********************************!*\
  !*** ./src/activity-request.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginRequestResponse = exports.ErrorResponse = exports.SuccessResponse = exports.ActivityResponse = exports.ActivityRequestError = exports.ActivityRequestTrigger = void 0;
var ActivityRequestTrigger;
(function (ActivityRequestTrigger) {
    ActivityRequestTrigger["Automatic"] = "automatic";
    ActivityRequestTrigger["Manual"] = "manual";
})(ActivityRequestTrigger = exports.ActivityRequestTrigger || (exports.ActivityRequestTrigger = {}));
var ActivityRequestError = /** @class */ (function () {
    function ActivityRequestError(code, message) {
        this.code = code;
        this.message = message;
    }
    return ActivityRequestError;
}());
exports.ActivityRequestError = ActivityRequestError;
var ActivityResponse = /** @class */ (function () {
    function ActivityResponse(request) {
        this.request = request;
    }
    return ActivityResponse;
}());
exports.ActivityResponse = ActivityResponse;
var SuccessResponse = /** @class */ (function (_super) {
    __extends(SuccessResponse, _super);
    function SuccessResponse(request, rawContent) {
        var _this = _super.call(this, request) || this;
        _this.request = request;
        _this.rawContent = rawContent;
        return _this;
    }
    return SuccessResponse;
}(ActivityResponse));
exports.SuccessResponse = SuccessResponse;
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse(request, error) {
        var _this = _super.call(this, request) || this;
        _this.request = request;
        _this.error = error;
        return _this;
    }
    return ErrorResponse;
}(ActivityResponse));
exports.ErrorResponse = ErrorResponse;
var LoginRequestResponse = /** @class */ (function (_super) {
    __extends(LoginRequestResponse, _super);
    function LoginRequestResponse(request, _auth) {
        var _this = _super.call(this, request) || this;
        _this.request = request;
        _this._auth = _auth;
        for (var _i = 0, _a = _this._auth.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            if (button.type === "signin" && button.value !== undefined) {
                try {
                    new URL(button.value);
                    _this.signinButton = button;
                    break;
                }
                catch (e) {
                    // Ignore parsing error
                }
            }
        }
        return _this;
    }
    Object.defineProperty(LoginRequestResponse.prototype, "tokenExchangeResource", {
        get: function () {
            return this._auth.tokenExchangeResource;
        },
        enumerable: false,
        configurable: true
    });
    return LoginRequestResponse;
}(ActivityResponse));
exports.LoginRequestResponse = LoginRequestResponse;


/***/ }),

/***/ "./src/adaptive-applet.ts":
/*!********************************!*\
  !*** ./src/adaptive-applet.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdaptiveApplet = void 0;
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var Utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var shared_1 = __webpack_require__(/*! ./shared */ "./src/shared.ts");
var activity_request_1 = __webpack_require__(/*! ./activity-request */ "./src/activity-request.ts");
var strings_1 = __webpack_require__(/*! ./strings */ "./src/strings.ts");
var card_elements_1 = __webpack_require__(/*! ./card-elements */ "./src/card-elements.ts");
var serialization_1 = __webpack_require__(/*! ./serialization */ "./src/serialization.ts");
function logEvent(level, message) {
    var optionalParams = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optionalParams[_i - 2] = arguments[_i];
    }
    if (shared_1.GlobalSettings.applets.logEnabled) {
        if (shared_1.GlobalSettings.applets.onLogEvent) {
            shared_1.GlobalSettings.applets.onLogEvent(level, message, optionalParams);
        }
        else {
            switch (level) {
                case Enums.LogLevel.Warning:
                    console.warn(message, optionalParams);
                    break;
                case Enums.LogLevel.Error:
                    console.error(message, optionalParams);
                    break;
                default:
                    console.log(message, optionalParams);
                    break;
            }
        }
    }
}
var ActivityRequest = /** @class */ (function () {
    function ActivityRequest(action, trigger, consecutiveRefreshes) {
        this.action = action;
        this.trigger = trigger;
        this.consecutiveRefreshes = consecutiveRefreshes;
        this.attemptNumber = 0;
    }
    ActivityRequest.prototype.retryAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.onSend) {
                    this.onSend(this);
                }
                return [2 /*return*/];
            });
        });
    };
    return ActivityRequest;
}());
var AdaptiveApplet = /** @class */ (function () {
    function AdaptiveApplet() {
        this._allowAutomaticCardUpdate = false;
        this.renderedElement = document.createElement("div");
        this.renderedElement.className = "aaf-cardHost";
        this.renderedElement.style.position = "relative";
        this.renderedElement.style.display = "flex";
        this.renderedElement.style.flexDirection = "column";
        this._cardHostElement = document.createElement("div");
        this._refreshButtonHostElement = document.createElement("div");
        this._refreshButtonHostElement.className = "aaf-refreshButtonHost";
        this._refreshButtonHostElement.style.display = "none";
        this.renderedElement.appendChild(this._cardHostElement);
        this.renderedElement.appendChild(this._refreshButtonHostElement);
    }
    AdaptiveApplet.prototype.displayCard = function (card) {
        if (card.renderedElement) {
            Utils.clearElementChildren(this._cardHostElement);
            this._refreshButtonHostElement.style.display = "none";
            this._cardHostElement.appendChild(card.renderedElement);
        }
        else {
            throw new Error("displayCard: undefined card.");
        }
    };
    AdaptiveApplet.prototype.showManualRefreshButton = function (refreshAction) {
        var _this = this;
        var displayBuiltInManualRefreshButton = this.onShowManualRefreshButton ? this.onShowManualRefreshButton(this) : true;
        if (displayBuiltInManualRefreshButton) {
            this._refreshButtonHostElement.style.display = "none";
            var renderedRefreshButton = undefined;
            if (this.onRenderManualRefreshButton) {
                renderedRefreshButton = this.onRenderManualRefreshButton(this);
            }
            else {
                var message = strings_1.Strings.runtime.refreshThisCard();
                if (shared_1.GlobalSettings.applets.refresh.mode === Enums.RefreshMode.Automatic) {
                    var autoRefreshPausedMessage = strings_1.Strings.runtime.automaticRefreshPaused();
                    if (autoRefreshPausedMessage[autoRefreshPausedMessage.length - 1] !== " ") {
                        autoRefreshPausedMessage += " ";
                    }
                    message = strings_1.Strings.runtime.clckToRestartAutomaticRefresh();
                }
                var cardPayload = {
                    type: "AdaptiveCard",
                    version: "1.2",
                    body: [
                        {
                            type: "RichTextBlock",
                            horizontalAlignment: "right",
                            inlines: [
                                {
                                    type: "TextRun",
                                    text: message,
                                    selectAction: {
                                        type: "Action.Submit",
                                        id: "refreshCard"
                                    }
                                }
                            ]
                        }
                    ]
                };
                var card = new card_elements_1.AdaptiveCard();
                card.parse(cardPayload, new card_elements_1.SerializationContext(serialization_1.Versions.v1_2));
                card.onExecuteAction = function (action) {
                    if (action.id === "refreshCard") {
                        Utils.clearElementChildren(_this._refreshButtonHostElement);
                        _this.internalExecuteAction(refreshAction, activity_request_1.ActivityRequestTrigger.Automatic, 0);
                    }
                };
                renderedRefreshButton = card.render();
            }
            if (renderedRefreshButton) {
                Utils.clearElementChildren(this._refreshButtonHostElement);
                this._refreshButtonHostElement.appendChild(renderedRefreshButton);
                this._refreshButtonHostElement.style.removeProperty("display");
            }
        }
    };
    AdaptiveApplet.prototype.createActivityRequest = function (action, trigger, consecutiveRefreshes) {
        var _this = this;
        if (this.card) {
            var request_1 = new ActivityRequest(action, trigger, consecutiveRefreshes);
            request_1.onSend = function (sender) {
                sender.attemptNumber++;
                _this.internalSendActivityRequestAsync(request_1);
            };
            var cancel = this.onPrepareActivityRequest ? !this.onPrepareActivityRequest(this, request_1, action) : false;
            return cancel ? undefined : request_1;
        }
        else {
            throw new Error("createActivityRequest: no card has been set.");
        }
    };
    AdaptiveApplet.prototype.createMagicCodeInputCard = function (attemptNumber) {
        var payload = {
            type: "AdaptiveCard",
            version: "1.0",
            body: [
                {
                    type: "TextBlock",
                    color: "attention",
                    text: attemptNumber === 1 ? undefined : "That didn't work... let's try again.",
                    wrap: true,
                    horizontalAlignment: "center"
                },
                {
                    type: "TextBlock",
                    text: "Please login in the popup. You will obtain a magic code. Paste that code below and select \"Submit\"",
                    wrap: true,
                    horizontalAlignment: "center"
                },
                {
                    type: "Input.Text",
                    id: "magicCode",
                    placeholder: "Enter magic code"
                },
                {
                    type: "ActionSet",
                    horizontalAlignment: "center",
                    actions: [
                        {
                            type: "Action.Submit",
                            id: AdaptiveApplet.submitMagicCodeActionId,
                            title: "Submit"
                        },
                        {
                            type: "Action.Submit",
                            id: AdaptiveApplet.cancelMagicCodeAuthActionId,
                            title: "Cancel"
                        }
                    ]
                }
            ]
        };
        var card = new card_elements_1.AdaptiveCard();
        card.parse(payload);
        return card;
    };
    AdaptiveApplet.prototype.cancelAutomaticRefresh = function () {
        if (this._allowAutomaticCardUpdate) {
            logEvent(Enums.LogLevel.Warning, "Automatic card refresh has been cancelled as a result of the user interacting with the card.");
        }
        this._allowAutomaticCardUpdate = false;
    };
    AdaptiveApplet.prototype.createSerializationContext = function () {
        return this.onCreateSerializationContext ? this.onCreateSerializationContext(this) : new card_elements_1.SerializationContext();
    };
    AdaptiveApplet.prototype.internalSetCard = function (payload, consecutiveRefreshes) {
        var _this = this;
        if (typeof payload === "object" && payload["type"] === "AdaptiveCard") {
            this._cardPayload = payload;
        }
        if (this._cardPayload) {
            try {
                var card = new card_elements_1.AdaptiveCard();
                if (this.hostConfig) {
                    card.hostConfig = this.hostConfig;
                }
                var serializationContext = this.createSerializationContext();
                card.parse(this._cardPayload, serializationContext);
                var doChangeCard = this.onCardChanging ? this.onCardChanging(this, this._cardPayload) : true;
                if (doChangeCard) {
                    this._card = card;
                    if (this._card.authentication && this._card.authentication.tokenExchangeResource && this.onPrefetchSSOToken) {
                        this.onPrefetchSSOToken(this, this._card.authentication.tokenExchangeResource);
                    }
                    this._card.onExecuteAction = function (action) {
                        // If the user takes an action, cancel any pending automatic refresh
                        _this.cancelAutomaticRefresh();
                        _this.internalExecuteAction(action, activity_request_1.ActivityRequestTrigger.Manual, 0);
                    };
                    this._card.onInputValueChanged = function (input) {
                        // If the user modifies an input, cancel any pending automatic refresh
                        _this.cancelAutomaticRefresh();
                    };
                    this._card.render();
                    if (this._card.renderedElement) {
                        this.displayCard(this._card);
                        if (this.onCardChanged) {
                            this.onCardChanged(this);
                        }
                        if (this._card.refresh) {
                            if (shared_1.GlobalSettings.applets.refresh.mode === Enums.RefreshMode.Automatic && consecutiveRefreshes < shared_1.GlobalSettings.applets.refresh.maximumConsecutiveAutomaticRefreshes) {
                                if (shared_1.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes <= 0) {
                                    logEvent(Enums.LogLevel.Info, "Triggering automatic card refresh number " + (consecutiveRefreshes + 1));
                                    this.internalExecuteAction(this._card.refresh.action, activity_request_1.ActivityRequestTrigger.Automatic, consecutiveRefreshes + 1);
                                }
                                else {
                                    logEvent(Enums.LogLevel.Info, "Scheduling automatic card refresh number " + (consecutiveRefreshes + 1) + " in " + shared_1.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes + "ms");
                                    var action_1 = this._card.refresh.action;
                                    this._allowAutomaticCardUpdate = true;
                                    window.setTimeout(function () {
                                        if (_this._allowAutomaticCardUpdate) {
                                            _this.internalExecuteAction(action_1, activity_request_1.ActivityRequestTrigger.Automatic, consecutiveRefreshes + 1);
                                        }
                                    }, shared_1.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes);
                                }
                            }
                            else if (shared_1.GlobalSettings.applets.refresh.mode !== Enums.RefreshMode.Disabled) {
                                if (consecutiveRefreshes > 0) {
                                    logEvent(Enums.LogLevel.Warning, "Stopping automatic refreshes after " + consecutiveRefreshes + " consecutive refreshes.");
                                }
                                else {
                                    logEvent(Enums.LogLevel.Warning, "The card has a refresh section, but automatic refreshes are disabled.");
                                }
                                if (shared_1.GlobalSettings.applets.refresh.allowManualRefreshesAfterAutomaticRefreshes || shared_1.GlobalSettings.applets.refresh.mode === Enums.RefreshMode.Manual) {
                                    logEvent(Enums.LogLevel.Info, "Showing manual refresh button.");
                                    this.showManualRefreshButton(this._card.refresh.action);
                                }
                            }
                        }
                    }
                }
            }
            catch (error) {
                // Ignore all errors
                logEvent(Enums.LogLevel.Error, "setCard: " + error);
            }
        }
    };
    AdaptiveApplet.prototype.internalExecuteAction = function (action, trigger, consecutiveRefreshes) {
        if (action instanceof card_elements_1.ExecuteAction) {
            if (this.channelAdapter) {
                var request = this.createActivityRequest(action, trigger, consecutiveRefreshes);
                if (request) {
                    request.retryAsync();
                }
            }
            else {
                throw new Error("internalExecuteAction: No channel adapter set.");
            }
        }
        if (this.onAction) {
            this.onAction(this, action);
        }
    };
    AdaptiveApplet.prototype.createProgressOverlay = function (request) {
        if (!this._progressOverlay) {
            if (this.onCreateProgressOverlay) {
                this._progressOverlay = this.onCreateProgressOverlay(this, request);
            }
            else {
                this._progressOverlay = document.createElement("div");
                this._progressOverlay.className = "aaf-progress-overlay";
                var spinner = document.createElement("div");
                spinner.className = "aaf-spinner";
                spinner.style.width = "28px";
                spinner.style.height = "28px";
                this._progressOverlay.appendChild(spinner);
            }
        }
        return this._progressOverlay;
    };
    AdaptiveApplet.prototype.removeProgressOverlay = function (request) {
        if (this.onRemoveProgressOverlay) {
            this.onRemoveProgressOverlay(this, request);
        }
        if (this._progressOverlay !== undefined) {
            this.renderedElement.removeChild(this._progressOverlay);
            this._progressOverlay = undefined;
        }
    };
    AdaptiveApplet.prototype.activityRequestSucceeded = function (response, parsedContent) {
        if (this.onActivityRequestSucceeded) {
            this.onActivityRequestSucceeded(this, response, parsedContent);
        }
    };
    AdaptiveApplet.prototype.activityRequestFailed = function (response) {
        return this.onActivityRequestFailed ? this.onActivityRequestFailed(this, response) : shared_1.GlobalSettings.applets.defaultTimeBetweenRetryAttempts;
    };
    AdaptiveApplet.prototype.showAuthCodeInputDialog = function (request) {
        var _this = this;
        var showBuiltInAuthCodeInputCard = this.onShowAuthCodeInputDialog ? this.onShowAuthCodeInputDialog(this, request) : true;
        if (showBuiltInAuthCodeInputCard) {
            var authCodeInputCard = this.createMagicCodeInputCard(request.attemptNumber);
            authCodeInputCard.render();
            authCodeInputCard.onExecuteAction = function (submitMagicCodeAction) {
                if (_this.card && submitMagicCodeAction instanceof card_elements_1.SubmitAction) {
                    switch (submitMagicCodeAction.id) {
                        case AdaptiveApplet.submitMagicCodeActionId:
                            var authCode = undefined;
                            if (submitMagicCodeAction.data && typeof submitMagicCodeAction.data["magicCode"] === "string") {
                                authCode = submitMagicCodeAction.data["magicCode"];
                            }
                            if (authCode) {
                                _this.displayCard(_this.card);
                                request.authCode = authCode;
                                request.retryAsync();
                            }
                            else {
                                alert("Please enter the magic code you received.");
                            }
                            break;
                        case AdaptiveApplet.cancelMagicCodeAuthActionId:
                            logEvent(Enums.LogLevel.Warning, "Authentication cancelled by user.");
                            _this.displayCard(_this.card);
                            break;
                        default:
                            logEvent(Enums.LogLevel.Error, "Unespected action taken from magic code input card (id = " + submitMagicCodeAction.id + ")");
                            alert(strings_1.Strings.magicCodeInputCard.somethingWentWrong());
                            break;
                    }
                }
            };
            this.displayCard(authCodeInputCard);
        }
    };
    AdaptiveApplet.prototype.internalSendActivityRequestAsync = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var overlay, done, _loop_1, this_1, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.channelAdapter) {
                            throw new Error("internalSendActivityRequestAsync: channelAdapter is not set.");
                        }
                        overlay = this.createProgressOverlay(request);
                        if (overlay !== undefined) {
                            this.renderedElement.appendChild(overlay);
                        }
                        done = false;
                        _loop_1 = function () {
                            var response, error_1, parsedContent, retryIn_1, attemptOAuth, left, top_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        response = undefined;
                                        if (request.attemptNumber === 1) {
                                            logEvent(Enums.LogLevel.Info, "Sending activity request to channel (attempt " + request.attemptNumber + ")");
                                        }
                                        else {
                                            logEvent(Enums.LogLevel.Info, "Re-sending activity request to channel (attempt " + request.attemptNumber + ")");
                                        }
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, this_1.channelAdapter.sendRequestAsync(request)];
                                    case 2:
                                        response = _b.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _b.sent();
                                        logEvent(Enums.LogLevel.Error, "Activity request failed: " + error_1);
                                        this_1.removeProgressOverlay(request);
                                        done = true;
                                        return [3 /*break*/, 4];
                                    case 4:
                                        if (!response) return [3 /*break*/, 10];
                                        if (!(response instanceof activity_request_1.SuccessResponse)) return [3 /*break*/, 5];
                                        this_1.removeProgressOverlay(request);
                                        if (response.rawContent === undefined) {
                                            throw new Error("internalSendActivityRequestAsync: Action.Execute result is undefined");
                                        }
                                        parsedContent = response.rawContent;
                                        try {
                                            parsedContent = JSON.parse(response.rawContent);
                                        }
                                        catch (_c) {
                                            // Leave parseContent as is
                                        }
                                        if (typeof parsedContent === "string") {
                                            logEvent(Enums.LogLevel.Info, "The activity request returned a string after " + request.attemptNumber + " attempt(s).");
                                            this_1.activityRequestSucceeded(response, parsedContent);
                                        }
                                        else if (typeof parsedContent === "object" && parsedContent["type"] === "AdaptiveCard") {
                                            logEvent(Enums.LogLevel.Info, "The activity request returned an Adaptive Card after " + request.attemptNumber + " attempt(s).");
                                            this_1.internalSetCard(parsedContent, request.consecutiveRefreshes);
                                            this_1.activityRequestSucceeded(response, this_1.card);
                                        }
                                        else {
                                            throw new Error("internalSendActivityRequestAsync: Action.Execute result is of unsupported type (" + typeof response.rawContent + ")");
                                        }
                                        done = true;
                                        return [3 /*break*/, 10];
                                    case 5:
                                        if (!(response instanceof activity_request_1.ErrorResponse)) return [3 /*break*/, 9];
                                        retryIn_1 = this_1.activityRequestFailed(response);
                                        if (!(retryIn_1 >= 0 && request.attemptNumber < shared_1.GlobalSettings.applets.maximumRetryAttempts)) return [3 /*break*/, 7];
                                        logEvent(Enums.LogLevel.Warning, "Activity request failed: " + response.error.message + ". Retrying in " + retryIn_1 + "ms");
                                        request.attemptNumber++;
                                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                window.setTimeout(function () { resolve(); }, retryIn_1);
                                            })];
                                    case 6:
                                        _b.sent();
                                        return [3 /*break*/, 8];
                                    case 7:
                                        logEvent(Enums.LogLevel.Error, "Activity request failed: " + response.error.message + ". Giving up after " + request.attemptNumber + " attempt(s)");
                                        this_1.removeProgressOverlay(request);
                                        done = true;
                                        _b.label = 8;
                                    case 8: return [3 /*break*/, 10];
                                    case 9:
                                        if (response instanceof activity_request_1.LoginRequestResponse) {
                                            logEvent(Enums.LogLevel.Info, "The activity request returned a LoginRequestResponse after " + request.attemptNumber + " attempt(s).");
                                            if (request.attemptNumber <= shared_1.GlobalSettings.applets.maximumRetryAttempts) {
                                                attemptOAuth = true;
                                                if (response.tokenExchangeResource && this_1.onSSOTokenNeeded) {
                                                    // Attempt to use SSO. The host will return true if it can handle SSO, in which case
                                                    // we bypass OAuth
                                                    attemptOAuth = !this_1.onSSOTokenNeeded(this_1, request, response.tokenExchangeResource);
                                                }
                                                if (attemptOAuth) {
                                                    // Attempt to use OAuth
                                                    this_1.removeProgressOverlay(request);
                                                    if (response.signinButton === undefined) {
                                                        throw new Error("internalSendActivityRequestAsync: the login request doesn't contain a valid signin URL.");
                                                    }
                                                    logEvent(Enums.LogLevel.Info, "Login required at " + response.signinButton.value);
                                                    if (this_1.onShowSigninPrompt) {
                                                        // Bypass the built-in auth prompt if the host app handles it
                                                        this_1.onShowSigninPrompt(this_1, request, response.signinButton);
                                                    }
                                                    else {
                                                        this_1.showAuthCodeInputDialog(request);
                                                        left = window.screenX + (window.outerWidth - shared_1.GlobalSettings.applets.authPromptWidth) / 2;
                                                        top_1 = window.screenY + (window.outerHeight - shared_1.GlobalSettings.applets.authPromptHeight) / 2;
                                                        window.open(response.signinButton.value, response.signinButton.title ? response.signinButton.title : "Sign in", "width=" + shared_1.GlobalSettings.applets.authPromptWidth + ",height=" + shared_1.GlobalSettings.applets.authPromptHeight + ",left=" + left + ",top=" + top_1);
                                                    }
                                                }
                                            }
                                            else {
                                                logEvent(Enums.LogLevel.Error, "Authentication failed. Giving up after " + request.attemptNumber + " attempt(s)");
                                                alert(strings_1.Strings.magicCodeInputCard.authenticationFailed());
                                            }
                                            return [2 /*return*/, "break"];
                                        }
                                        else {
                                            throw new Error("Unhandled response type: " + response.toString());
                                        }
                                        _b.label = 10;
                                    case 10: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 1;
                    case 1:
                        if (!!done) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        state_1 = _a.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 3];
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdaptiveApplet.prototype.refreshCard = function () {
        if (this._card && this._card.refresh) {
            this.internalExecuteAction(this._card.refresh.action, activity_request_1.ActivityRequestTrigger.Manual, 0);
        }
    };
    AdaptiveApplet.prototype.setCard = function (payload) {
        this.internalSetCard(payload, 0);
    };
    Object.defineProperty(AdaptiveApplet.prototype, "card", {
        get: function () {
            return this._card;
        },
        enumerable: false,
        configurable: true
    });
    AdaptiveApplet.submitMagicCodeActionId = "submitMagicCode";
    AdaptiveApplet.cancelMagicCodeAuthActionId = "cancelMagicCodeAuth";
    return AdaptiveApplet;
}());
exports.AdaptiveApplet = AdaptiveApplet;


/***/ }),

/***/ "./src/adaptivecards.ts":
/*!******************************!*\
  !*** ./src/adaptivecards.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
__exportStar(__webpack_require__(/*! ./strings */ "./src/strings.ts"), exports);
__exportStar(__webpack_require__(/*! ./enums */ "./src/enums.ts"), exports);
__exportStar(__webpack_require__(/*! ./shared */ "./src/shared.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "./src/utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./serialization */ "./src/serialization.ts"), exports);
__exportStar(__webpack_require__(/*! ./host-capabilities */ "./src/host-capabilities.ts"), exports);
__exportStar(__webpack_require__(/*! ./host-config */ "./src/host-config.ts"), exports);
__exportStar(__webpack_require__(/*! ./registry */ "./src/registry.ts"), exports);
__exportStar(__webpack_require__(/*! ./card-object */ "./src/card-object.ts"), exports);
__exportStar(__webpack_require__(/*! ./card-elements */ "./src/card-elements.ts"), exports);
__exportStar(__webpack_require__(/*! ./table */ "./src/table.ts"), exports);
__exportStar(__webpack_require__(/*! ./channel-adapter */ "./src/channel-adapter.ts"), exports);
__exportStar(__webpack_require__(/*! ./activity-request */ "./src/activity-request.ts"), exports);
__exportStar(__webpack_require__(/*! ./adaptive-applet */ "./src/adaptive-applet.ts"), exports);


/***/ }),

/***/ "./src/card-elements.ts":
/*!******************************!*\
  !*** ./src/card-elements.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SerializationContext = exports.AdaptiveCard = exports.Authentication = exports.TokenExchangeResource = exports.AuthCardButton = exports.RefreshDefinition = exports.RefreshActionProperty = exports.ContainerWithActions = exports.ColumnSet = exports.Column = exports.Container = exports.BackgroundImage = exports.ContainerBase = exports.StylableCardElementContainer = exports.ContainerStyleProperty = exports.ActionSet = exports.ShowCardAction = exports.HttpAction = exports.HttpHeader = exports.ToggleVisibilityAction = exports.OpenUrlAction = exports.ExecuteAction = exports.SubmitAction = exports.SubmitActionBase = exports.Action = exports.TimeInput = exports.TimeProperty = exports.DateInput = exports.NumberInput = exports.ChoiceSetInput = exports.Choice = exports.ToggleInput = exports.TextInput = exports.Input = exports.Media = exports.MediaSource = exports.ImageSet = exports.CardElementContainer = exports.Image = exports.FactSet = exports.Fact = exports.RichTextBlock = exports.TextRun = exports.TextBlock = exports.BaseTextBlock = exports.ActionProperty = exports.CardElement = exports.renderSeparation = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var shared_1 = __webpack_require__(/*! ./shared */ "./src/shared.ts");
var Utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var host_config_1 = __webpack_require__(/*! ./host-config */ "./src/host-config.ts");
var TextFormatters = __webpack_require__(/*! ./text-formatters */ "./src/text-formatters.ts");
var card_object_1 = __webpack_require__(/*! ./card-object */ "./src/card-object.ts");
var serialization_1 = __webpack_require__(/*! ./serialization */ "./src/serialization.ts");
var registry_1 = __webpack_require__(/*! ./registry */ "./src/registry.ts");
var strings_1 = __webpack_require__(/*! ./strings */ "./src/strings.ts");
var controls_1 = __webpack_require__(/*! ./controls */ "./src/controls/index.ts");
function renderSeparation(hostConfig, separationDefinition, orientation) {
    if (separationDefinition.spacing > 0 || (separationDefinition.lineThickness && separationDefinition.lineThickness > 0)) {
        var separator = document.createElement("div");
        separator.className = hostConfig.makeCssClassName("ac-" + (orientation == Enums.Orientation.Horizontal ? "horizontal" : "vertical") + "-separator");
        separator.setAttribute("aria-hidden", "true");
        var color = separationDefinition.lineColor ? Utils.stringToCssColor(separationDefinition.lineColor) : "";
        if (orientation == Enums.Orientation.Horizontal) {
            if (separationDefinition.lineThickness) {
                separator.style.paddingTop = (separationDefinition.spacing / 2) + "px";
                separator.style.marginBottom = (separationDefinition.spacing / 2) + "px";
                separator.style.borderBottom = separationDefinition.lineThickness + "px solid " + color;
            }
            else {
                separator.style.height = separationDefinition.spacing + "px";
            }
        }
        else {
            if (separationDefinition.lineThickness) {
                separator.style.paddingLeft = (separationDefinition.spacing / 2) + "px";
                separator.style.marginRight = (separationDefinition.spacing / 2) + "px";
                separator.style.borderRight = separationDefinition.lineThickness + "px solid " + color;
            }
            else {
                separator.style.width = separationDefinition.spacing + "px";
            }
        }
        separator.style.overflow = "hidden";
        separator.style.flex = "0 0 auto";
        return separator;
    }
    else {
        return undefined;
    }
}
exports.renderSeparation = renderSeparation;
var CardElement = /** @class */ (function (_super) {
    __extends(CardElement, _super);
    function CardElement() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._truncatedDueToOverflow = false;
        return _this;
    }
    Object.defineProperty(CardElement.prototype, "lang", {
        get: function () {
            var lang = this.getValue(CardElement.langProperty);
            if (lang) {
                return lang;
            }
            else {
                if (this.parent) {
                    return this.parent.lang;
                }
                else {
                    return undefined;
                }
            }
        },
        set: function (value) {
            this.setValue(CardElement.langProperty, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isVisible", {
        get: function () {
            return this.getValue(CardElement.isVisibleProperty);
        },
        set: function (value) {
            // If the element is going to be hidden, reset any changes that were due
            // to overflow truncation (this ensures that if the element is later
            // un-hidden it has the right content)
            if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation && !value) {
                this.undoOverflowTruncation();
            }
            if (this.isVisible !== value) {
                this.setValue(CardElement.isVisibleProperty, value);
                this.updateRenderedElementVisibility();
                if (this._renderedElement) {
                    raiseElementVisibilityChangedEvent(this);
                }
            }
            if (this._renderedElement) {
                this._renderedElement.setAttribute("aria-expanded", value.toString());
            }
        },
        enumerable: false,
        configurable: true
    });
    CardElement.prototype.internalRenderSeparator = function () {
        var renderedSeparator = renderSeparation(this.hostConfig, {
            spacing: this.hostConfig.getEffectiveSpacing(this.spacing),
            lineThickness: this.separator ? this.hostConfig.separator.lineThickness : undefined,
            lineColor: this.separator ? this.hostConfig.separator.lineColor : undefined
        }, this.separatorOrientation);
        if (shared_1.GlobalSettings.alwaysBleedSeparators && renderedSeparator && this.separatorOrientation == Enums.Orientation.Horizontal) {
            // Adjust separator's margins if the option to always bleed separators is turned on
            var parentContainer = this.getParentContainer();
            if (parentContainer && parentContainer.getEffectivePadding()) {
                var parentPhysicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(parentContainer.getEffectivePadding());
                renderedSeparator.style.marginLeft = "-" + parentPhysicalPadding.left + "px";
                renderedSeparator.style.marginRight = "-" + parentPhysicalPadding.right + "px";
            }
        }
        return renderedSeparator;
    };
    CardElement.prototype.updateRenderedElementVisibility = function () {
        var displayMode = this.isDesignMode() || this.isVisible ? this._defaultRenderedElementDisplayMode : "none";
        if (this._renderedElement) {
            if (displayMode) {
                this._renderedElement.style.display = displayMode;
            }
            else {
                this._renderedElement.style.removeProperty("display");
            }
        }
        if (this._separatorElement) {
            if (this.parent && this.parent.isFirstElement(this)) {
                this._separatorElement.style.display = "none";
            }
            else {
                if (displayMode) {
                    this._separatorElement.style.display = displayMode;
                }
                else {
                    this._separatorElement.style.removeProperty("display");
                }
            }
        }
    };
    CardElement.prototype.hideElementDueToOverflow = function () {
        if (this._renderedElement && this.isVisible) {
            this._renderedElement.style.visibility = "hidden";
            this.isVisible = false;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    CardElement.prototype.showElementHiddenDueToOverflow = function () {
        if (this._renderedElement && !this.isVisible) {
            this._renderedElement.style.removeProperty("visibility");
            this.isVisible = true;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.handleOverflow = function (maxHeight) {
        if (this.isVisible || this.isHiddenDueToOverflow()) {
            var handled = this.truncateOverflow(maxHeight);
            // Even if we were unable to truncate the element to fit this time,
            // it still could have been previously truncated
            this._truncatedDueToOverflow = handled || this._truncatedDueToOverflow;
            if (!handled) {
                this.hideElementDueToOverflow();
            }
            else if (handled && !this.isVisible) {
                this.showElementHiddenDueToOverflow();
            }
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.resetOverflow = function () {
        var sizeChanged = false;
        if (this._truncatedDueToOverflow) {
            this.undoOverflowTruncation();
            this._truncatedDueToOverflow = false;
            sizeChanged = true;
        }
        if (this.isHiddenDueToOverflow()) {
            this.showElementHiddenDueToOverflow();
        }
        return sizeChanged;
    };
    CardElement.prototype.getDefaultSerializationContext = function () {
        return new SerializationContext();
    };
    CardElement.prototype.createPlaceholderElement = function () {
        var styleDefinition = this.getEffectiveStyleDefinition();
        var foregroundCssColor = Utils.stringToCssColor(styleDefinition.foregroundColors.default.subtle);
        var element = document.createElement("div");
        element.style.border = "1px dashed " + foregroundCssColor;
        element.style.padding = "4px";
        element.style.minHeight = "32px";
        element.style.fontSize = "10px";
        element.style.color = foregroundCssColor;
        element.innerText = "Empty " + this.getJsonTypeName();
        return element;
    };
    CardElement.prototype.adjustRenderedElementSize = function (renderedElement) {
        if (this.height === "auto") {
            renderedElement.style.flex = "0 0 auto";
        }
        else {
            renderedElement.style.flex = "1 1 auto";
        }
    };
    CardElement.prototype.isDisplayed = function () {
        return this._renderedElement !== undefined && this.isVisible && this._renderedElement.offsetHeight > 0;
    };
    CardElement.prototype.overrideInternalRender = function () {
        return this.internalRender();
    };
    CardElement.prototype.applyPadding = function () {
        if (this.separatorElement && this.separatorOrientation === Enums.Orientation.Horizontal) {
            if (shared_1.GlobalSettings.alwaysBleedSeparators && !this.isBleeding()) {
                var padding = new shared_1.PaddingDefinition();
                this.getImmediateSurroundingPadding(padding);
                var physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
                this.separatorElement.style.marginLeft = "-" + physicalPadding.left + "px";
                this.separatorElement.style.marginRight = "-" + physicalPadding.right + "px";
            }
            else {
                this.separatorElement.style.marginRight = "0";
                this.separatorElement.style.marginLeft = "0";
            }
        }
    };
    /*
     * Called when this element overflows the bottom of the card.
     * maxHeight will be the amount of space still available on the card (0 if
     * the element is fully off the card).
     */
    CardElement.prototype.truncateOverflow = function (maxHeight) {
        // Child implementations should return true if the element handled
        // the truncation request such that its content fits within maxHeight,
        // false if the element should fall back to being hidden
        return false;
    };
    /*
     * This should reverse any changes performed in truncateOverflow().
     */
    CardElement.prototype.undoOverflowTruncation = function () { };
    CardElement.prototype.getDefaultPadding = function () {
        return new shared_1.PaddingDefinition();
    };
    CardElement.prototype.getHasBackground = function () {
        return false;
    };
    CardElement.prototype.getHasBorder = function () {
        return false;
    };
    CardElement.prototype.getPadding = function () {
        return this._padding;
    };
    CardElement.prototype.setPadding = function (value) {
        this._padding = value;
    };
    CardElement.prototype.shouldSerialize = function (context) {
        return context.elementRegistry.findByName(this.getJsonTypeName()) !== undefined;
    };
    Object.defineProperty(CardElement.prototype, "useDefaultSizing", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Horizontal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "defaultStyle", {
        get: function () {
            return Enums.ContainerStyle.Default;
        },
        enumerable: false,
        configurable: true
    });
    CardElement.prototype.parse = function (source, context) {
        _super.prototype.parse.call(this, source, context ? context : new SerializationContext());
    };
    CardElement.prototype.asString = function () {
        return "";
    };
    CardElement.prototype.isBleeding = function () {
        return false;
    };
    CardElement.prototype.getEffectiveStyle = function () {
        if (this.parent) {
            return this.parent.getEffectiveStyle();
        }
        return this.defaultStyle;
    };
    CardElement.prototype.getEffectiveStyleDefinition = function () {
        return this.hostConfig.containerStyles.getStyleByName(this.getEffectiveStyle());
    };
    CardElement.prototype.getEffectiveTextStyleDefinition = function () {
        if (this.parent) {
            return this.parent.getEffectiveTextStyleDefinition();
        }
        return this.hostConfig.textStyles.default;
    };
    CardElement.prototype.getForbiddenActionTypes = function () {
        return [];
    };
    CardElement.prototype.getImmediateSurroundingPadding = function (result, processTop, processRight, processBottom, processLeft) {
        if (processTop === void 0) { processTop = true; }
        if (processRight === void 0) { processRight = true; }
        if (processBottom === void 0) { processBottom = true; }
        if (processLeft === void 0) { processLeft = true; }
        if (this.parent) {
            var doProcessTop = processTop && this.parent.isTopElement(this);
            var doProcessRight = processRight && this.parent.isRightMostElement(this);
            var doProcessBottom = processBottom && this.parent.isBottomElement(this);
            var doProcessLeft = processLeft && this.parent.isLeftMostElement(this);
            var effectivePadding = this.parent.getEffectivePadding();
            if (effectivePadding) {
                if (doProcessTop && effectivePadding.top != Enums.Spacing.None) {
                    result.top = effectivePadding.top;
                    doProcessTop = false;
                }
                if (doProcessRight && effectivePadding.right != Enums.Spacing.None) {
                    result.right = effectivePadding.right;
                    doProcessRight = false;
                }
                if (doProcessBottom && effectivePadding.bottom != Enums.Spacing.None) {
                    result.bottom = effectivePadding.bottom;
                    doProcessBottom = false;
                }
                if (doProcessLeft && effectivePadding.left != Enums.Spacing.None) {
                    result.left = effectivePadding.left;
                    doProcessLeft = false;
                }
            }
            if (doProcessTop || doProcessRight || doProcessBottom || doProcessLeft) {
                this.parent.getImmediateSurroundingPadding(result, doProcessTop, doProcessRight, doProcessBottom, doProcessLeft);
            }
        }
    };
    CardElement.prototype.getActionCount = function () {
        return 0;
    };
    CardElement.prototype.getActionAt = function (index) {
        throw new Error(strings_1.Strings.errors.indexOutOfRange(index));
    };
    CardElement.prototype.indexOfAction = function (action) {
        for (var i = 0; i < this.getActionCount(); i++) {
            if (this.getActionAt(i) === action) {
                return i;
            }
        }
        return -1;
    };
    CardElement.prototype.remove = function () {
        if (this.parent && this.parent instanceof CardElementContainer) {
            return this.parent.removeItem(this);
        }
        return false;
    };
    CardElement.prototype.render = function () {
        this._renderedElement = this.overrideInternalRender();
        this._separatorElement = this.internalRenderSeparator();
        if (this._renderedElement) {
            if (this.id) {
                this._renderedElement.id = this.id;
            }
            if (this.customCssSelector) {
                this._renderedElement.classList.add(this.customCssSelector);
            }
            this._renderedElement.style.boxSizing = "border-box";
            this._defaultRenderedElementDisplayMode = this._renderedElement.style.display ? this._renderedElement.style.display : undefined;
            this.adjustRenderedElementSize(this._renderedElement);
            this.updateLayout(false);
        }
        else if (this.isDesignMode()) {
            this._renderedElement = this.createPlaceholderElement();
        }
        return this._renderedElement;
    };
    CardElement.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        this.updateRenderedElementVisibility();
        this.applyPadding();
    };
    CardElement.prototype.indexOf = function (cardElement) {
        return -1;
    };
    CardElement.prototype.isDesignMode = function () {
        var rootElement = this.getRootElement();
        return rootElement instanceof AdaptiveCard && rootElement.designMode;
    };
    CardElement.prototype.isFirstElement = function (element) {
        return true;
    };
    CardElement.prototype.isLastElement = function (element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryLeft = function () {
        return this.parent ? this.parent.isLeftMostElement(this) && this.parent.isAtTheVeryLeft() : true;
    };
    CardElement.prototype.isAtTheVeryRight = function () {
        return this.parent ? this.parent.isRightMostElement(this) && this.parent.isAtTheVeryRight() : true;
    };
    CardElement.prototype.isAtTheVeryTop = function () {
        return this.parent ? this.parent.isFirstElement(this) && this.parent.isAtTheVeryTop() : true;
    };
    CardElement.prototype.isAtTheVeryBottom = function () {
        return this.parent ? this.parent.isLastElement(this) && this.parent.isAtTheVeryBottom() : true;
    };
    CardElement.prototype.isBleedingAtTop = function () {
        return false;
    };
    CardElement.prototype.isBleedingAtBottom = function () {
        return false;
    };
    CardElement.prototype.isLeftMostElement = function (element) {
        return true;
    };
    CardElement.prototype.isRightMostElement = function (element) {
        return true;
    };
    CardElement.prototype.isTopElement = function (element) {
        return this.isFirstElement(element);
    };
    CardElement.prototype.isBottomElement = function (element) {
        return this.isLastElement(element);
    };
    CardElement.prototype.isHiddenDueToOverflow = function () {
        return this._renderedElement !== undefined && this._renderedElement.style.visibility == 'hidden';
    };
    CardElement.prototype.getRootElement = function () {
        return this.getRootObject();
    };
    CardElement.prototype.getParentContainer = function () {
        var currentElement = this.parent;
        while (currentElement) {
            if (currentElement instanceof Container) {
                return currentElement;
            }
            currentElement = currentElement.parent;
        }
        return undefined;
    };
    CardElement.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        return [];
    };
    CardElement.prototype.getResourceInformation = function () {
        return [];
    };
    CardElement.prototype.getElementById = function (id) {
        return this.id === id ? this : undefined;
    };
    CardElement.prototype.getActionById = function (id) {
        return undefined;
    };
    CardElement.prototype.getEffectivePadding = function () {
        var padding = this.getPadding();
        return padding ? padding : this.getDefaultPadding();
    };
    CardElement.prototype.getEffectiveHorizontalAlignment = function () {
        if (this.horizontalAlignment !== undefined) {
            return this.horizontalAlignment;
        }
        if (this.parent) {
            return this.parent.getEffectiveHorizontalAlignment();
        }
        return Enums.HorizontalAlignment.Left;
    };
    Object.defineProperty(CardElement.prototype, "hostConfig", {
        get: function () {
            if (this._hostConfig) {
                return this._hostConfig;
            }
            else {
                if (this.parent) {
                    return this.parent.hostConfig;
                }
                else {
                    return host_config_1.defaultHostConfig;
                }
            }
        },
        set: function (value) {
            this._hostConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "index", {
        get: function () {
            if (this.parent) {
                return this.parent.indexOf(this);
            }
            else {
                return 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInteractive", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isStandalone", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInline", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "hasVisibleSeparator", {
        get: function () {
            if (this.parent && this.separatorElement) {
                return !this.parent.isFirstElement(this) && (this.isVisible || this.isDesignMode());
            }
            else {
                return false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorElement", {
        get: function () {
            return this._separatorElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    CardElement.langProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "lang", true, /^[a-z]{2,3}$/ig);
    CardElement.isVisibleProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "isVisible", true);
    CardElement.separatorProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "separator", false);
    CardElement.heightProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_1, "height", [
        { value: "auto" },
        { value: "stretch" }
    ], "auto");
    CardElement.horizontalAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "horizontalAlignment", Enums.HorizontalAlignment);
    CardElement.spacingProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "spacing", Enums.Spacing, Enums.Spacing.Default);
    __decorate([
        (0, serialization_1.property)(CardElement.horizontalAlignmentProperty)
    ], CardElement.prototype, "horizontalAlignment", void 0);
    __decorate([
        (0, serialization_1.property)(CardElement.spacingProperty)
    ], CardElement.prototype, "spacing", void 0);
    __decorate([
        (0, serialization_1.property)(CardElement.separatorProperty)
    ], CardElement.prototype, "separator", void 0);
    __decorate([
        (0, serialization_1.property)(CardElement.heightProperty)
    ], CardElement.prototype, "height", void 0);
    __decorate([
        (0, serialization_1.property)(CardElement.langProperty)
    ], CardElement.prototype, "lang", null);
    __decorate([
        (0, serialization_1.property)(CardElement.isVisibleProperty)
    ], CardElement.prototype, "isVisible", null);
    return CardElement;
}(card_object_1.CardObject));
exports.CardElement = CardElement;
var ActionProperty = /** @class */ (function (_super) {
    __extends(ActionProperty, _super);
    function ActionProperty(targetVersion, name, forbiddenActionTypes) {
        if (forbiddenActionTypes === void 0) { forbiddenActionTypes = []; }
        var _this = _super.call(this, targetVersion, name, undefined) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.forbiddenActionTypes = forbiddenActionTypes;
        return _this;
    }
    ActionProperty.prototype.parse = function (sender, source, context) {
        var parent = sender;
        return context.parseAction(parent, source[this.name], this.forbiddenActionTypes, parent.isDesignMode());
    };
    ActionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value ? value.toJSON(context) : undefined, undefined, true);
    };
    return ActionProperty;
}(serialization_1.PropertyDefinition));
exports.ActionProperty = ActionProperty;
var BaseTextBlock = /** @class */ (function (_super) {
    __extends(BaseTextBlock, _super);
    function BaseTextBlock(text) {
        var _this = _super.call(this) || this;
        _this.ariaHidden = false;
        if (text) {
            _this.text = text;
        }
        return _this;
    }
    BaseTextBlock.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        // selectAction is declared on BaseTextBlock but is only exposed on TextRun,
        // so the property is removed from the BaseTextBlock schema.
        schema.remove(BaseTextBlock.selectActionProperty);
    };
    Object.defineProperty(BaseTextBlock.prototype, "text", {
        get: function () {
            return this.getValue(BaseTextBlock.textProperty);
        },
        set: function (value) {
            this.setText(value);
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    BaseTextBlock.prototype.getFontSize = function (fontType) {
        switch (this.effectiveSize) {
            case Enums.TextSize.Small:
                return fontType.fontSizes.small;
            case Enums.TextSize.Medium:
                return fontType.fontSizes.medium;
            case Enums.TextSize.Large:
                return fontType.fontSizes.large;
            case Enums.TextSize.ExtraLarge:
                return fontType.fontSizes.extraLarge;
            default:
                return fontType.fontSizes.default;
        }
    };
    BaseTextBlock.prototype.getColorDefinition = function (colorSet, color) {
        switch (color) {
            case Enums.TextColor.Accent:
                return colorSet.accent;
            case Enums.TextColor.Dark:
                return colorSet.dark;
            case Enums.TextColor.Light:
                return colorSet.light;
            case Enums.TextColor.Good:
                return colorSet.good;
            case Enums.TextColor.Warning:
                return colorSet.warning;
            case Enums.TextColor.Attention:
                return colorSet.attention;
            default:
                return colorSet.default;
        }
    };
    BaseTextBlock.prototype.setText = function (value) {
        this.setValue(BaseTextBlock.textProperty, value);
    };
    BaseTextBlock.prototype.init = function (textDefinition) {
        this.size = textDefinition.size;
        this.weight = textDefinition.weight;
        this.color = textDefinition.color;
        this.isSubtle = textDefinition.isSubtle;
    };
    BaseTextBlock.prototype.asString = function () {
        return this.text;
    };
    BaseTextBlock.prototype.applyStylesTo = function (targetElement) {
        var fontType = this.hostConfig.getFontTypeDefinition(this.effectiveFontType);
        if (fontType.fontFamily) {
            targetElement.style.fontFamily = fontType.fontFamily;
        }
        var fontSize;
        switch (this.effectiveSize) {
            case Enums.TextSize.Small:
                fontSize = fontType.fontSizes.small;
                break;
            case Enums.TextSize.Medium:
                fontSize = fontType.fontSizes.medium;
                break;
            case Enums.TextSize.Large:
                fontSize = fontType.fontSizes.large;
                break;
            case Enums.TextSize.ExtraLarge:
                fontSize = fontType.fontSizes.extraLarge;
                break;
            default:
                fontSize = fontType.fontSizes.default;
                break;
        }
        targetElement.style.fontSize = fontSize + "px";
        var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
        targetElement.style.color = Utils.stringToCssColor(this.effectiveIsSubtle ? colorDefinition.subtle : colorDefinition.default);
        var fontWeight;
        switch (this.effectiveWeight) {
            case Enums.TextWeight.Lighter:
                fontWeight = fontType.fontWeights.lighter;
                break;
            case Enums.TextWeight.Bolder:
                fontWeight = fontType.fontWeights.bolder;
                break;
            default:
                fontWeight = fontType.fontWeights.default;
                break;
        }
        targetElement.style.fontWeight = fontWeight.toString();
        if (this.ariaHidden) {
            targetElement.setAttribute("aria-hidden", "true");
        }
    };
    Object.defineProperty(BaseTextBlock.prototype, "effectiveColor", {
        get: function () {
            return this.color !== undefined ? this.color : this.getEffectiveTextStyleDefinition().color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "effectiveFontType", {
        get: function () {
            return this.fontType !== undefined ? this.fontType : this.getEffectiveTextStyleDefinition().fontType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "effectiveIsSubtle", {
        get: function () {
            return this.isSubtle !== undefined ? this.isSubtle : this.getEffectiveTextStyleDefinition().isSubtle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "effectiveSize", {
        get: function () {
            return this.size !== undefined ? this.size : this.getEffectiveTextStyleDefinition().size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTextBlock.prototype, "effectiveWeight", {
        get: function () {
            return this.weight !== undefined ? this.weight : this.getEffectiveTextStyleDefinition().weight;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    BaseTextBlock.textProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "text", true);
    BaseTextBlock.sizeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "size", Enums.TextSize);
    BaseTextBlock.weightProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "weight", Enums.TextWeight);
    BaseTextBlock.colorProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "color", Enums.TextColor);
    BaseTextBlock.isSubtleProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "isSubtle");
    BaseTextBlock.fontTypeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "fontType", Enums.FontType);
    BaseTextBlock.selectActionProperty = new ActionProperty(serialization_1.Versions.v1_1, "selectAction", ["Action.ShowCard"]);
    __decorate([
        (0, serialization_1.property)(BaseTextBlock.sizeProperty)
    ], BaseTextBlock.prototype, "size", void 0);
    __decorate([
        (0, serialization_1.property)(BaseTextBlock.weightProperty)
    ], BaseTextBlock.prototype, "weight", void 0);
    __decorate([
        (0, serialization_1.property)(BaseTextBlock.colorProperty)
    ], BaseTextBlock.prototype, "color", void 0);
    __decorate([
        (0, serialization_1.property)(BaseTextBlock.fontTypeProperty)
    ], BaseTextBlock.prototype, "fontType", void 0);
    __decorate([
        (0, serialization_1.property)(BaseTextBlock.isSubtleProperty)
    ], BaseTextBlock.prototype, "isSubtle", void 0);
    __decorate([
        (0, serialization_1.property)(BaseTextBlock.textProperty)
    ], BaseTextBlock.prototype, "text", null);
    __decorate([
        (0, serialization_1.property)(BaseTextBlock.selectActionProperty)
    ], BaseTextBlock.prototype, "selectAction", void 0);
    return BaseTextBlock;
}(CardElement));
exports.BaseTextBlock = BaseTextBlock;
var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrap = false;
        _this._treatAsPlainText = true;
        _this.useMarkdown = true;
        return _this;
    }
    TextBlock.prototype.restoreOriginalContent = function () {
        if (this.renderedElement !== undefined) {
            if (this.maxLines && this.maxLines > 0) {
                this.renderedElement.style.maxHeight = this._computedLineHeight * this.maxLines + "px";
            }
            this.renderedElement.innerHTML = this._originalInnerHtml;
        }
    };
    TextBlock.prototype.truncateIfSupported = function (maxHeight) {
        if (this.renderedElement !== undefined) {
            // For now, only truncate TextBlocks that contain just a single
            // paragraph -- since the maxLines calculation doesn't take into
            // account Markdown lists
            var children = this.renderedElement.children;
            var isTextOnly = !children.length;
            var truncationSupported = isTextOnly || children.length == 1 && children[0].tagName.toLowerCase() == 'p';
            if (truncationSupported) {
                var element = isTextOnly ? this.renderedElement : children[0];
                Utils.truncate(element, maxHeight, this._computedLineHeight);
                return true;
            }
        }
        return false;
    };
    TextBlock.prototype.setText = function (value) {
        _super.prototype.setText.call(this, value);
        this._processedText = undefined;
    };
    TextBlock.prototype.internalRender = function () {
        var _this = this;
        this._processedText = undefined;
        if (this.text) {
            var preProcessedText = this.preProcessPropertyValue(BaseTextBlock.textProperty);
            var hostConfig = this.hostConfig;
            var element = void 0;
            if (this.forElementId) {
                var labelElement = document.createElement("label");
                labelElement.htmlFor = this.forElementId;
                element = labelElement;
            }
            else {
                element = document.createElement("div");
            }
            element.classList.add(hostConfig.makeCssClassName("ac-textBlock"));
            element.style.overflow = "hidden";
            this.applyStylesTo(element);
            if (this.style === "heading") {
                element.setAttribute("role", "heading");
                var headingLevel = this.hostConfig.textBlock.headingLevel;
                if (headingLevel !== undefined && headingLevel > 0) {
                    element.setAttribute("aria-level", headingLevel.toString());
                }
            }
            if (this.selectAction && hostConfig.supportsInteractivity) {
                element.onclick = function (e) {
                    if (_this.selectAction && _this.selectAction.isEnabled) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this.selectAction.execute();
                    }
                };
                this.selectAction.setupElementForAccessibility(element);
                if (this.selectAction.isEnabled) {
                    element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                }
            }
            if (!this._processedText) {
                this._treatAsPlainText = true;
                var formattedText = TextFormatters.formatText(this.lang, preProcessedText);
                if (this.useMarkdown && formattedText) {
                    if (shared_1.GlobalSettings.allowMarkForTextHighlighting) {
                        formattedText = formattedText.replace(/<mark>/g, "===").replace(/<\/mark>/g, "/==/");
                    }
                    var markdownProcessingResult = AdaptiveCard.applyMarkdown(formattedText);
                    if (markdownProcessingResult.didProcess && markdownProcessingResult.outputHtml) {
                        this._processedText = markdownProcessingResult.outputHtml;
                        this._treatAsPlainText = false;
                        // Only process <mark> tag if markdown processing was applied because
                        // markdown processing is also responsible for sanitizing the input string
                        if (shared_1.GlobalSettings.allowMarkForTextHighlighting && this._processedText) {
                            var markStyle = "";
                            var effectiveStyle = this.getEffectiveStyleDefinition();
                            if (effectiveStyle.highlightBackgroundColor) {
                                markStyle += "background-color: " + effectiveStyle.highlightBackgroundColor + ";";
                            }
                            if (effectiveStyle.highlightForegroundColor) {
                                markStyle += "color: " + effectiveStyle.highlightForegroundColor + ";";
                            }
                            if (markStyle) {
                                markStyle = 'style="' + markStyle + '"';
                            }
                            this._processedText = this._processedText.replace(/===/g, "<mark " + markStyle + ">").replace(/\/==\//g, "</mark>");
                        }
                    }
                    else {
                        this._processedText = formattedText;
                        this._treatAsPlainText = true;
                    }
                }
                else {
                    this._processedText = formattedText;
                    this._treatAsPlainText = true;
                }
            }
            if (!this._processedText) {
                this._processedText = "";
            }
            if (this._treatAsPlainText) {
                element.innerText = this._processedText;
            }
            else {
                element.innerHTML = this._processedText;
            }
            if (element.firstElementChild instanceof HTMLElement) {
                var firstElementChild = element.firstElementChild;
                firstElementChild.style.marginTop = "0px";
                firstElementChild.style.width = "100%";
                if (!this.wrap) {
                    firstElementChild.style.overflow = "hidden";
                    firstElementChild.style.textOverflow = "ellipsis";
                }
            }
            if (element.lastElementChild instanceof HTMLElement) {
                element.lastElementChild.style.marginBottom = "0px";
            }
            var anchors = element.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                anchor.classList.add(hostConfig.makeCssClassName("ac-anchor"));
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    if (raiseAnchorClickedEvent(_this, e.target, e)) {
                        e.preventDefault();
                        e.cancelBubble = true;
                    }
                };
                anchor.oncontextmenu = function (e) {
                    if (raiseAnchorClickedEvent(_this, e.target, e)) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        return false;
                    }
                    return true;
                };
            }
            if (this.wrap) {
                element.style.wordWrap = "break-word";
                if (this.maxLines && this.maxLines > 0) {
                    element.style.overflow = "hidden";
                    if (Utils.isInternetExplorer() || !shared_1.GlobalSettings.useWebkitLineClamp) {
                        element.style.maxHeight = (this._computedLineHeight * this.maxLines) + "px";
                    }
                    else {
                        // While non standard, --webkit-line-clamp works in every browser (except IE)
                        // and is a great solution to support the maxLines feature with ellipsis
                        // truncation. With --webkit-line-clamp there is need to use explicit line heights
                        element.style.removeProperty("line-height");
                        element.style.display = "-webkit-box";
                        element.style.webkitBoxOrient = "vertical";
                        element.style.webkitLineClamp = this.maxLines.toString();
                    }
                }
            }
            else {
                element.style.whiteSpace = "nowrap";
                element.style.textOverflow = "ellipsis";
            }
            if (shared_1.GlobalSettings.useAdvancedTextBlockTruncation || shared_1.GlobalSettings.useAdvancedCardBottomTruncation) {
                this._originalInnerHtml = element.innerHTML;
            }
            return element;
        }
        else {
            return undefined;
        }
    };
    TextBlock.prototype.truncateOverflow = function (maxHeight) {
        if (maxHeight >= this._computedLineHeight) {
            return this.truncateIfSupported(maxHeight);
        }
        return false;
    };
    TextBlock.prototype.undoOverflowTruncation = function () {
        this.restoreOriginalContent();
        if (shared_1.GlobalSettings.useAdvancedTextBlockTruncation && this.maxLines) {
            var maxHeight = this._computedLineHeight * this.maxLines;
            this.truncateIfSupported(maxHeight);
        }
    };
    TextBlock.prototype.applyStylesTo = function (targetElement) {
        _super.prototype.applyStylesTo.call(this, targetElement);
        switch (this.getEffectiveHorizontalAlignment()) {
            case Enums.HorizontalAlignment.Center:
                targetElement.style.textAlign = "center";
                break;
            case Enums.HorizontalAlignment.Right:
                targetElement.style.textAlign = "end";
                break;
            default:
                targetElement.style.textAlign = "start";
                break;
        }
        var lineHeights = this.hostConfig.lineHeights;
        if (lineHeights) {
            switch (this.effectiveSize) {
                case Enums.TextSize.Small:
                    this._computedLineHeight = lineHeights.small;
                    break;
                case Enums.TextSize.Medium:
                    this._computedLineHeight = lineHeights.medium;
                    break;
                case Enums.TextSize.Large:
                    this._computedLineHeight = lineHeights.large;
                    break;
                case Enums.TextSize.ExtraLarge:
                    this._computedLineHeight = lineHeights.extraLarge;
                    break;
                default:
                    this._computedLineHeight = lineHeights.default;
                    break;
            }
        }
        else {
            // Looks like 1.33 is the magic number to compute line-height
            // from font size.
            this._computedLineHeight = this.getFontSize(this.hostConfig.getFontTypeDefinition(this.effectiveFontType)) * 1.33;
        }
        targetElement.style.lineHeight = this._computedLineHeight + "px";
    };
    TextBlock.prototype.getJsonTypeName = function () {
        return "TextBlock";
    };
    TextBlock.prototype.getEffectiveTextStyleDefinition = function () {
        if (this.style) {
            return this.hostConfig.textStyles.getStyleByName(this.style);
        }
        return _super.prototype.getEffectiveTextStyleDefinition.call(this);
    };
    TextBlock.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = false; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (shared_1.GlobalSettings.useAdvancedTextBlockTruncation && this.maxLines && this.isDisplayed()) {
            // Reset the element's innerHTML in case the available room for
            // content has increased
            this.restoreOriginalContent();
            this.truncateIfSupported(this._computedLineHeight * this.maxLines);
        }
    };
    TextBlock.wrapProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "wrap", false);
    TextBlock.maxLinesProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "maxLines");
    TextBlock.styleProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_5, "style", [
        { value: "default" },
        { value: "columnHeader" },
        { value: "heading" }
    ]);
    __decorate([
        (0, serialization_1.property)(TextBlock.wrapProperty)
    ], TextBlock.prototype, "wrap", void 0);
    __decorate([
        (0, serialization_1.property)(TextBlock.maxLinesProperty)
    ], TextBlock.prototype, "maxLines", void 0);
    __decorate([
        (0, serialization_1.property)(TextBlock.styleProperty)
    ], TextBlock.prototype, "style", void 0);
    return TextBlock;
}(BaseTextBlock));
exports.TextBlock = TextBlock;
var TextRun = /** @class */ (function (_super) {
    __extends(TextRun, _super);
    function TextRun() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.italic = false;
        _this.strikethrough = false;
        _this.highlight = false;
        _this.underline = false;
        return _this;
    }
    TextRun.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.add(BaseTextBlock.selectActionProperty);
    };
    //#endregion
    TextRun.prototype.internalRender = function () {
        var _this = this;
        if (this.text) {
            var preProcessedText = this.preProcessPropertyValue(BaseTextBlock.textProperty);
            var hostConfig = this.hostConfig;
            var formattedText = TextFormatters.formatText(this.lang, preProcessedText);
            if (!formattedText) {
                formattedText = "";
            }
            var element = document.createElement("span");
            element.classList.add(hostConfig.makeCssClassName("ac-textRun"));
            this.applyStylesTo(element);
            if (this.selectAction && hostConfig.supportsInteractivity) {
                var anchor = document.createElement("a");
                anchor.classList.add(hostConfig.makeCssClassName("ac-anchor"));
                var href = this.selectAction.getHref();
                anchor.href = href ? href : "";
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    if (_this.selectAction && _this.selectAction.isEnabled) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this.selectAction.execute();
                    }
                };
                this.selectAction.setupElementForAccessibility(anchor);
                anchor.innerText = formattedText;
                element.appendChild(anchor);
            }
            else {
                element.innerText = formattedText;
            }
            return element;
        }
        else {
            return undefined;
        }
    };
    TextRun.prototype.applyStylesTo = function (targetElement) {
        _super.prototype.applyStylesTo.call(this, targetElement);
        if (this.italic) {
            targetElement.style.fontStyle = "italic";
        }
        if (this.strikethrough) {
            targetElement.style.textDecoration = "line-through";
        }
        if (this.highlight) {
            var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
            targetElement.style.backgroundColor = Utils.stringToCssColor(this.effectiveIsSubtle ? colorDefinition.highlightColors.subtle : colorDefinition.highlightColors.default);
        }
        if (this.underline) {
            targetElement.style.textDecoration = "underline";
        }
    };
    TextRun.prototype.getJsonTypeName = function () {
        return "TextRun";
    };
    Object.defineProperty(TextRun.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextRun.prototype, "isInline", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    TextRun.italicProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "italic", false);
    TextRun.strikethroughProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "strikethrough", false);
    TextRun.highlightProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "highlight", false);
    TextRun.underlineProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_3, "underline", false);
    __decorate([
        (0, serialization_1.property)(TextRun.italicProperty)
    ], TextRun.prototype, "italic", void 0);
    __decorate([
        (0, serialization_1.property)(TextRun.strikethroughProperty)
    ], TextRun.prototype, "strikethrough", void 0);
    __decorate([
        (0, serialization_1.property)(TextRun.highlightProperty)
    ], TextRun.prototype, "highlight", void 0);
    __decorate([
        (0, serialization_1.property)(TextRun.underlineProperty)
    ], TextRun.prototype, "underline", void 0);
    return TextRun;
}(BaseTextBlock));
exports.TextRun = TextRun;
var RichTextBlock = /** @class */ (function (_super) {
    __extends(RichTextBlock, _super);
    function RichTextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._inlines = [];
        return _this;
    }
    RichTextBlock.prototype.internalAddInline = function (inline, forceAdd) {
        if (forceAdd === void 0) { forceAdd = false; }
        if (!inline.isInline) {
            throw new Error(strings_1.Strings.errors.elementCannotBeUsedAsInline());
        }
        var doAdd = inline.parent === undefined || forceAdd;
        if (!doAdd && inline.parent != this) {
            throw new Error(strings_1.Strings.errors.inlineAlreadyParented());
        }
        else {
            inline.setParent(this);
            this._inlines.push(inline);
        }
    };
    RichTextBlock.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._inlines = [];
        if (Array.isArray(source["inlines"])) {
            for (var _i = 0, _a = source["inlines"]; _i < _a.length; _i++) {
                var jsonInline = _a[_i];
                var inline = void 0;
                if (typeof jsonInline === "string") {
                    var textRun = new TextRun();
                    textRun.text = jsonInline;
                    inline = textRun;
                }
                else {
                    // No fallback for inlines in 1.2
                    inline = context.parseElement(this, jsonInline, false);
                }
                if (inline) {
                    this.internalAddInline(inline, true);
                }
            }
        }
    };
    RichTextBlock.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        if (this._inlines.length > 0) {
            var jsonInlines = [];
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
                var inline = _a[_i];
                jsonInlines.push(inline.toJSON(context));
            }
            context.serializeValue(target, "inlines", jsonInlines);
        }
    };
    RichTextBlock.prototype.internalRender = function () {
        if (this._inlines.length > 0) {
            var element = void 0;
            if (this.forElementId) {
                var labelElement = document.createElement("label");
                labelElement.htmlFor = this.forElementId;
                element = labelElement;
            }
            else {
                element = document.createElement("div");
            }
            element.className = this.hostConfig.makeCssClassName("ac-richTextBlock");
            switch (this.getEffectiveHorizontalAlignment()) {
                case Enums.HorizontalAlignment.Center:
                    element.style.textAlign = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.textAlign = "end";
                    break;
                default:
                    element.style.textAlign = "start";
                    break;
            }
            var renderedInlines = 0;
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
                var inline = _a[_i];
                var renderedInline = inline.render();
                if (renderedInline) {
                    element.appendChild(renderedInline);
                    renderedInlines++;
                }
            }
            if (renderedInlines > 0) {
                return element;
            }
        }
        return undefined;
    };
    RichTextBlock.prototype.asString = function () {
        var result = "";
        for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
            var inline = _a[_i];
            result += inline.asString();
        }
        return result;
    };
    RichTextBlock.prototype.getJsonTypeName = function () {
        return "RichTextBlock";
    };
    RichTextBlock.prototype.getInlineCount = function () {
        return this._inlines.length;
    };
    RichTextBlock.prototype.getInlineAt = function (index) {
        if (index >= 0 && index < this._inlines.length) {
            return this._inlines[index];
        }
        else {
            throw new Error(strings_1.Strings.errors.indexOutOfRange(index));
        }
    };
    RichTextBlock.prototype.addInline = function (inline) {
        if (typeof inline === "string") {
            this.internalAddInline(new TextRun(inline));
        }
        else {
            this.internalAddInline(inline);
        }
    };
    RichTextBlock.prototype.removeInline = function (inline) {
        var index = this._inlines.indexOf(inline);
        if (index >= 0) {
            this._inlines[index].setParent(undefined);
            this._inlines.splice(index, 1);
            return true;
        }
        return false;
    };
    return RichTextBlock;
}(CardElement));
exports.RichTextBlock = RichTextBlock;
var Fact = /** @class */ (function (_super) {
    __extends(Fact, _super);
    function Fact(name, value) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    //#endregion
    Fact.prototype.getSchemaKey = function () {
        return "Fact";
    };
    //#region Schema
    Fact.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
    Fact.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    __decorate([
        (0, serialization_1.property)(Fact.titleProperty)
    ], Fact.prototype, "name", void 0);
    __decorate([
        (0, serialization_1.property)(Fact.valueProperty)
    ], Fact.prototype, "value", void 0);
    return Fact;
}(serialization_1.SerializableObject));
exports.Fact = Fact;
var FactSet = /** @class */ (function (_super) {
    __extends(FactSet, _super);
    function FactSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FactSet.prototype, "useDefaultSizing", {
        //#endregion
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    FactSet.prototype.internalRender = function () {
        var element = undefined;
        var hostConfig = this.hostConfig;
        if (this.facts.length > 0) {
            element = document.createElement("table");
            element.style.borderWidth = "0px";
            element.style.borderSpacing = "0px";
            element.style.borderStyle = "none";
            element.style.borderCollapse = "collapse";
            element.style.display = "block";
            element.style.overflow = "hidden";
            element.classList.add(hostConfig.makeCssClassName("ac-factset"));
            element.setAttribute("role", "presentation");
            for (var i = 0; i < this.facts.length; i++) {
                var trElement = document.createElement("tr");
                if (i > 0) {
                    trElement.style.marginTop = hostConfig.factSet.spacing + "px";
                }
                // Title column
                var tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-title"));
                if (hostConfig.factSet.title.maxWidth) {
                    tdElement.style.maxWidth = hostConfig.factSet.title.maxWidth + "px";
                }
                tdElement.style.verticalAlign = "top";
                var textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text = (!this.facts[i].name && this.isDesignMode()) ? "Title" : this.facts[i].name;
                textBlock.size = hostConfig.factSet.title.size;
                textBlock.color = hostConfig.factSet.title.color;
                textBlock.isSubtle = hostConfig.factSet.title.isSubtle;
                textBlock.weight = hostConfig.factSet.title.weight;
                textBlock.wrap = hostConfig.factSet.title.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                // Spacer column
                tdElement = document.createElement("td");
                tdElement.style.width = "10px";
                Utils.appendChild(trElement, tdElement);
                // Value column
                tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                tdElement.style.verticalAlign = "top";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-value"));
                textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text = this.facts[i].value;
                textBlock.size = hostConfig.factSet.value.size;
                textBlock.color = hostConfig.factSet.value.color;
                textBlock.isSubtle = hostConfig.factSet.value.isSubtle;
                textBlock.weight = hostConfig.factSet.value.weight;
                textBlock.wrap = hostConfig.factSet.value.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                Utils.appendChild(element, trElement);
            }
        }
        return element;
    };
    FactSet.prototype.getJsonTypeName = function () {
        return "FactSet";
    };
    //#region Schema
    FactSet.factsProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "facts", Fact);
    __decorate([
        (0, serialization_1.property)(FactSet.factsProperty)
    ], FactSet.prototype, "facts", void 0);
    return FactSet;
}(CardElement));
exports.FactSet = FactSet;
var ImageDimensionProperty = /** @class */ (function (_super) {
    __extends(ImageDimensionProperty, _super);
    function ImageDimensionProperty(targetVersion, name, internalName, fallbackProperty) {
        var _this = _super.call(this, targetVersion, name) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.internalName = internalName;
        _this.fallbackProperty = fallbackProperty;
        return _this;
    }
    ImageDimensionProperty.prototype.getInternalName = function () {
        return this.internalName;
    };
    ImageDimensionProperty.prototype.parse = function (sender, source, context) {
        var result = undefined;
        var sourceValue = source[this.name];
        if (sourceValue === undefined) {
            return this.defaultValue;
        }
        var isValid = false;
        if (typeof sourceValue === "string") {
            try {
                var size = shared_1.SizeAndUnit.parse(sourceValue, true);
                if (size.unit == Enums.SizeUnit.Pixel) {
                    result = size.physicalSize;
                    isValid = true;
                }
            }
            catch (_a) {
                // Swallow the exception
            }
            // If the source value isn't valid per this property definition,
            // check its validity per the fallback property, if specified
            if (!isValid && this.fallbackProperty) {
                isValid = this.fallbackProperty.isValidValue(sourceValue, context);
            }
        }
        if (!isValid) {
            context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(sourceValue, this.name));
        }
        return result;
    };
    ImageDimensionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, typeof value === "number" && !isNaN(value) ? value + "px" : undefined);
    };
    return ImageDimensionProperty;
}(serialization_1.PropertyDefinition));
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = Enums.Size.Auto;
        _this.style = Enums.ImageStyle.Default;
        return _this;
    }
    Image.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.remove(CardElement.heightProperty);
    };
    //#endregion
    Image.prototype.applySize = function (element) {
        if (this.pixelWidth || this.pixelHeight) {
            if (this.pixelWidth) {
                element.style.width = this.pixelWidth + "px";
            }
            if (this.pixelHeight) {
                element.style.height = this.pixelHeight + "px";
            }
        }
        else {
            if (this.maxHeight) {
                // If the image is constrained in height, we set its height property and
                // auto and stretch are ignored (default to medium). THis is necessary for
                // ImageSet which uses a maximum image height as opposed to the cards width
                // as a constraining dimension
                switch (this.size) {
                    case Enums.Size.Small:
                        element.style.height = this.hostConfig.imageSizes.small + "px";
                        break;
                    case Enums.Size.Large:
                        element.style.height = this.hostConfig.imageSizes.large + "px";
                        break;
                    default:
                        element.style.height = this.hostConfig.imageSizes.medium + "px";
                        break;
                }
                element.style.maxHeight = this.maxHeight + "px";
            }
            else {
                switch (this.size) {
                    case Enums.Size.Stretch:
                        element.style.width = "100%";
                        break;
                    case Enums.Size.Auto:
                        element.style.maxWidth = "100%";
                        break;
                    case Enums.Size.Small:
                        element.style.width = this.hostConfig.imageSizes.small + "px";
                        break;
                    case Enums.Size.Large:
                        element.style.width = this.hostConfig.imageSizes.large + "px";
                        break;
                    case Enums.Size.Medium:
                        element.style.width = this.hostConfig.imageSizes.medium + "px";
                        break;
                }
                element.style.maxHeight = "100%";
            }
        }
    };
    Object.defineProperty(Image.prototype, "useDefaultSizing", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.internalRender = function () {
        var _this = this;
        var element = undefined;
        if (this.url) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.alignItems = "flex-start";
            // Cache hostConfig to avoid walking the parent hierarchy multiple times
            var hostConfig = this.hostConfig;
            switch (this.getEffectiveHorizontalAlignment()) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            var imageElement = document.createElement("img");
            imageElement.onload = function (e) {
                raiseImageLoadedEvent(_this);
            };
            imageElement.onerror = function (e) {
                if (_this.renderedElement) {
                    var card = _this.getRootElement();
                    _this.renderedElement.innerHTML = "";
                    if (card && card.designMode) {
                        var errorElement = document.createElement("div");
                        errorElement.style.display = "flex";
                        errorElement.style.alignItems = "center";
                        errorElement.style.justifyContent = "center";
                        errorElement.style.backgroundColor = "#EEEEEE";
                        errorElement.style.color = "black";
                        errorElement.innerText = ":-(";
                        errorElement.style.padding = "10px";
                        _this.applySize(errorElement);
                        _this.renderedElement.appendChild(errorElement);
                    }
                }
                raiseImageLoadedEvent(_this);
            };
            imageElement.style.minWidth = "0";
            imageElement.classList.add(hostConfig.makeCssClassName("ac-image"));
            if (this.selectAction && hostConfig.supportsInteractivity) {
                imageElement.onkeypress = function (e) {
                    if (_this.selectAction && _this.selectAction.isEnabled && (e.code == "Enter" || e.code == "Space")) { // enter or space pressed
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this.selectAction.execute();
                    }
                };
                imageElement.onclick = function (e) {
                    if (_this.selectAction && _this.selectAction.isEnabled) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this.selectAction.execute();
                    }
                };
                this.selectAction.setupElementForAccessibility(imageElement);
                if (this.selectAction.isEnabled) {
                    imageElement.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                }
            }
            this.applySize(imageElement);
            if (this.style === Enums.ImageStyle.Person) {
                imageElement.style.borderRadius = "50%";
                imageElement.style.backgroundPosition = "50% 50%";
                imageElement.style.backgroundRepeat = "no-repeat";
            }
            imageElement.style.backgroundColor = Utils.stringToCssColor(this.backgroundColor);
            imageElement.src = this.preProcessPropertyValue(Image.urlProperty);
            var altTextProperty = this.preProcessPropertyValue(Image.altTextProperty);
            if (altTextProperty) {
                imageElement.alt = altTextProperty;
            }
            element.appendChild(imageElement);
        }
        return element;
    };
    Image.prototype.getJsonTypeName = function () {
        return "Image";
    };
    Image.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.selectAction) {
            result = this.selectAction.getActionById(id);
        }
        return result;
    };
    Image.prototype.getResourceInformation = function () {
        return this.url ? [{ url: this.url, mimeType: "image" }] : [];
    };
    Image.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "url");
    Image.altTextProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "altText");
    Image.backgroundColorProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "backgroundColor");
    Image.styleProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "style", Enums.ImageStyle, Enums.ImageStyle.Default);
    Image.sizeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "size", Enums.Size, Enums.Size.Auto);
    Image.pixelWidthProperty = new ImageDimensionProperty(serialization_1.Versions.v1_1, "width", "pixelWidth");
    Image.pixelHeightProperty = new ImageDimensionProperty(serialization_1.Versions.v1_1, "height", "pixelHeight", CardElement.heightProperty);
    Image.selectActionProperty = new ActionProperty(serialization_1.Versions.v1_1, "selectAction", ["Action.ShowCard"]);
    __decorate([
        (0, serialization_1.property)(Image.urlProperty)
    ], Image.prototype, "url", void 0);
    __decorate([
        (0, serialization_1.property)(Image.altTextProperty)
    ], Image.prototype, "altText", void 0);
    __decorate([
        (0, serialization_1.property)(Image.backgroundColorProperty)
    ], Image.prototype, "backgroundColor", void 0);
    __decorate([
        (0, serialization_1.property)(Image.sizeProperty)
    ], Image.prototype, "size", void 0);
    __decorate([
        (0, serialization_1.property)(Image.styleProperty)
    ], Image.prototype, "style", void 0);
    __decorate([
        (0, serialization_1.property)(Image.pixelWidthProperty)
    ], Image.prototype, "pixelWidth", void 0);
    __decorate([
        (0, serialization_1.property)(Image.pixelHeightProperty)
    ], Image.prototype, "pixelHeight", void 0);
    __decorate([
        (0, serialization_1.property)(Image.selectActionProperty)
    ], Image.prototype, "selectAction", void 0);
    return Image;
}(CardElement));
exports.Image = Image;
var CardElementContainer = /** @class */ (function (_super) {
    __extends(CardElementContainer, _super);
    function CardElementContainer() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allowVerticalOverflow = false;
        return _this;
    }
    CardElementContainer.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        if (!this.isSelectable) {
            schema.remove(CardElementContainer.selectActionProperty);
        }
    };
    //#endregion
    CardElementContainer.prototype.isElementAllowed = function (element) {
        return this.hostConfig.supportsInteractivity || !element.isInteractive;
    };
    CardElementContainer.prototype.applyPadding = function () {
        _super.prototype.applyPadding.call(this);
        if (!this.renderedElement) {
            return;
        }
        var physicalPadding = new shared_1.SpacingDefinition();
        if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
        }
        this.renderedElement.style.paddingTop = physicalPadding.top + "px";
        this.renderedElement.style.paddingRight = physicalPadding.right + "px";
        this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
        this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
        this.renderedElement.style.marginRight = "0";
        this.renderedElement.style.marginLeft = "0";
    };
    Object.defineProperty(CardElementContainer.prototype, "isSelectable", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    CardElementContainer.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        for (var i = 0; i < this.getItemCount(); i++) {
            var item = this.getItemAt(i);
            if (!this.hostConfig.supportsInteractivity && item.isInteractive) {
                context.addFailure(this, Enums.ValidationEvent.InteractivityNotAllowed, strings_1.Strings.errors.interactivityNotAllowed());
            }
            if (!this.isElementAllowed(item)) {
                context.addFailure(this, Enums.ValidationEvent.InteractivityNotAllowed, strings_1.Strings.errors.elementTypeNotAllowed(item.getJsonTypeName()));
            }
            item.internalValidateProperties(context);
        }
        if (this._selectAction) {
            this._selectAction.internalValidateProperties(context);
        }
    };
    CardElementContainer.prototype.render = function () {
        var _this = this;
        var element = _super.prototype.render.call(this);
        if (element) {
            var hostConfig = this.hostConfig;
            if (this.allowVerticalOverflow) {
                element.style.overflowX = "hidden";
                element.style.overflowY = "auto";
            }
            if (element && this.isSelectable && this._selectAction && hostConfig.supportsInteractivity) {
                element.onclick = function (e) {
                    if (_this._selectAction && _this._selectAction.isEnabled) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this._selectAction.execute();
                    }
                };
                element.onkeypress = function (e) {
                    if (_this._selectAction && _this._selectAction.isEnabled && (e.code == "Enter" || e.code == "Space")) {
                        // Enter or space pressed
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this._selectAction.execute();
                    }
                };
                this._selectAction.setupElementForAccessibility(element);
                if (this._selectAction.isEnabled) {
                    element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                }
            }
        }
        return element;
    };
    CardElementContainer.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (processChildren) {
            for (var i = 0; i < this.getItemCount(); i++) {
                this.getItemAt(i).updateLayout();
            }
        }
    };
    CardElementContainer.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        var result = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            result = result.concat(this.getItemAt(i).getAllInputs(processActions));
        }
        return result;
    };
    CardElementContainer.prototype.getResourceInformation = function () {
        var result = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            result = result.concat(this.getItemAt(i).getResourceInformation());
        }
        return result;
    };
    CardElementContainer.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            for (var i = 0; i < this.getItemCount(); i++) {
                result = this.getItemAt(i).getElementById(id);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    /**
     * @inheritdoc
     */
    CardElementContainer.prototype.findDOMNodeOwner = function (node) {
        var target = undefined;
        for (var i = 0; i < this.getItemCount(); i++) {
            // recur through child elements
            target = this.getItemAt(i).findDOMNodeOwner(node);
            if (target) {
                return target;
            }
        }
        // if not found in children, defer to parent implementation
        return _super.prototype.findDOMNodeOwner.call(this, node);
    };
    CardElementContainer.selectActionProperty = new ActionProperty(serialization_1.Versions.v1_1, "selectAction", ["Action.ShowCard"]);
    __decorate([
        (0, serialization_1.property)(CardElementContainer.selectActionProperty)
    ], CardElementContainer.prototype, "_selectAction", void 0);
    return CardElementContainer;
}(CardElement));
exports.CardElementContainer = CardElementContainer;
var ImageSet = /** @class */ (function (_super) {
    __extends(ImageSet, _super);
    function ImageSet() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._images = [];
        _this.imageSize = Enums.ImageSize.Medium;
        return _this;
    }
    //#endregion
    ImageSet.prototype.internalRender = function () {
        var element = undefined;
        if (this._images.length > 0) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.flexWrap = "wrap";
            for (var _i = 0, _a = this._images; _i < _a.length; _i++) {
                var image = _a[_i];
                switch (this.imageSize) {
                    case Enums.ImageSize.Small:
                        image.size = Enums.Size.Small;
                        break;
                    case Enums.ImageSize.Large:
                        image.size = Enums.Size.Large;
                        break;
                    default:
                        image.size = Enums.Size.Medium;
                        break;
                }
                image.maxHeight = this.hostConfig.imageSet.maxImageHeight;
                var renderedImage = image.render();
                if (renderedImage) {
                    renderedImage.style.display = "inline-flex";
                    renderedImage.style.margin = "0px";
                    renderedImage.style.marginRight = "10px";
                    Utils.appendChild(element, renderedImage);
                }
            }
        }
        return element;
    };
    ImageSet.prototype.getItemCount = function () {
        return this._images.length;
    };
    ImageSet.prototype.getItemAt = function (index) {
        return this._images[index];
    };
    ImageSet.prototype.getFirstVisibleRenderedItem = function () {
        return this._images && this._images.length > 0 ? this._images[0] : undefined;
    };
    ImageSet.prototype.getLastVisibleRenderedItem = function () {
        return this._images && this._images.length > 0 ? this._images[this._images.length - 1] : undefined;
    };
    ImageSet.prototype.removeItem = function (item) {
        if (item instanceof Image) {
            var itemIndex = this._images.indexOf(item);
            if (itemIndex >= 0) {
                this._images.splice(itemIndex, 1);
                item.setParent(undefined);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ImageSet.prototype.getJsonTypeName = function () {
        return "ImageSet";
    };
    ImageSet.prototype.addImage = function (image) {
        if (!image.parent) {
            this._images.push(image);
            image.setParent(this);
        }
        else {
            throw new Error("This image already belongs to another ImageSet");
        }
    };
    ImageSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Image ? this._images.indexOf(cardElement) : -1;
    };
    ImageSet.imagesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "images", Image, function (sender, item) { item.setParent(sender); });
    ImageSet.imageSizeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "imageSize", Enums.ImageSize, Enums.ImageSize.Medium);
    __decorate([
        (0, serialization_1.property)(ImageSet.imagesProperty)
    ], ImageSet.prototype, "_images", void 0);
    __decorate([
        (0, serialization_1.property)(ImageSet.imageSizeProperty)
    ], ImageSet.prototype, "imageSize", void 0);
    return ImageSet;
}(CardElementContainer));
exports.ImageSet = ImageSet;
var MediaSource = /** @class */ (function (_super) {
    __extends(MediaSource, _super);
    function MediaSource(url, mimeType) {
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.mimeType = mimeType;
        return _this;
    }
    //#endregion
    MediaSource.prototype.getSchemaKey = function () {
        return "MediaSource";
    };
    MediaSource.prototype.isValid = function () {
        return this.mimeType && this.url ? true : false;
    };
    MediaSource.prototype.render = function () {
        var result = undefined;
        if (this.isValid()) {
            result = document.createElement("source");
            result.src = this.url;
            result.type = this.mimeType;
        }
        return result;
    };
    //#region Schema
    MediaSource.mimeTypeProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "mimeType");
    MediaSource.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "url");
    __decorate([
        (0, serialization_1.property)(MediaSource.mimeTypeProperty)
    ], MediaSource.prototype, "mimeType", void 0);
    __decorate([
        (0, serialization_1.property)(MediaSource.urlProperty)
    ], MediaSource.prototype, "url", void 0);
    return MediaSource;
}(serialization_1.SerializableObject));
exports.MediaSource = MediaSource;
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sources = [];
        return _this;
    }
    Media.prototype.getPosterUrl = function () {
        return this.poster ? this.poster : this.hostConfig.media.defaultPoster;
    };
    Media.prototype.processSources = function () {
        this._selectedSources = [];
        this._selectedMediaType = undefined;
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var mimeComponents = source.mimeType ? source.mimeType.split('/') : [];
            if (mimeComponents.length == 2) {
                if (!this._selectedMediaType) {
                    var index = Media.supportedMediaTypes.indexOf(mimeComponents[0]);
                    if (index >= 0) {
                        this._selectedMediaType = Media.supportedMediaTypes[index];
                    }
                }
                if (mimeComponents[0] == this._selectedMediaType) {
                    this._selectedSources.push(source);
                }
            }
        }
    };
    Media.prototype.handlePlayButtonInvoke = function (event) {
        if (this.hostConfig.media.allowInlinePlayback) {
            event.preventDefault();
            event.cancelBubble = true;
            if (this.renderedElement) {
                var mediaPlayerElement = this.renderMediaPlayer();
                this.renderedElement.innerHTML = "";
                this.renderedElement.appendChild(mediaPlayerElement);
                mediaPlayerElement.play();
                mediaPlayerElement.focus();
            }
        }
        else {
            if (Media.onPlay) {
                event.preventDefault();
                event.cancelBubble = true;
                Media.onPlay(this);
            }
        }
    };
    Media.prototype.renderPoster = function () {
        var _this = this;
        var playButtonArrowWidth = 12;
        var playButtonArrowHeight = 15;
        var posterRootElement = document.createElement("div");
        posterRootElement.className = this.hostConfig.makeCssClassName("ac-media-poster");
        posterRootElement.setAttribute("role", "contentinfo");
        posterRootElement.setAttribute("aria-label", this.altText ? this.altText : strings_1.Strings.defaults.mediaPlayerAriaLabel());
        posterRootElement.style.position = "relative";
        posterRootElement.style.display = "flex";
        var posterUrl = this.getPosterUrl();
        if (posterUrl) {
            var posterImageElement_1 = document.createElement("img");
            posterImageElement_1.style.width = "100%";
            posterImageElement_1.style.height = "100%";
            posterImageElement_1.setAttribute("role", "presentation");
            posterImageElement_1.onerror = function (e) {
                if (posterImageElement_1.parentNode) {
                    posterImageElement_1.parentNode.removeChild(posterImageElement_1);
                }
                posterRootElement.classList.add("empty");
                posterRootElement.style.minHeight = "150px";
            };
            posterImageElement_1.src = posterUrl;
            posterRootElement.appendChild(posterImageElement_1);
        }
        else {
            posterRootElement.classList.add("empty");
            posterRootElement.style.minHeight = "150px";
        }
        if (this.hostConfig.supportsInteractivity && this._selectedSources.length > 0) {
            var playButtonOuterElement = document.createElement("div");
            playButtonOuterElement.tabIndex = 0;
            playButtonOuterElement.setAttribute("role", "button");
            playButtonOuterElement.setAttribute("aria-label", strings_1.Strings.defaults.mediaPlayerPlayMedia());
            playButtonOuterElement.className = this.hostConfig.makeCssClassName("ac-media-playButton");
            playButtonOuterElement.style.display = "flex";
            playButtonOuterElement.style.alignItems = "center";
            playButtonOuterElement.style.justifyContent = "center";
            playButtonOuterElement.onclick = function (e) {
                _this.handlePlayButtonInvoke(e);
            };
            playButtonOuterElement.onkeypress = function (e) {
                if (e.code == "Enter" || e.code == "Space") { // space or enter
                    _this.handlePlayButtonInvoke(e);
                }
            };
            var playButtonInnerElement = document.createElement("div");
            playButtonInnerElement.className = this.hostConfig.makeCssClassName("ac-media-playButton-arrow");
            playButtonInnerElement.style.width = playButtonArrowWidth + "px";
            playButtonInnerElement.style.height = playButtonArrowHeight + "px";
            playButtonInnerElement.style.borderTopWidth = (playButtonArrowHeight / 2) + "px";
            playButtonInnerElement.style.borderBottomWidth = (playButtonArrowHeight / 2) + "px";
            playButtonInnerElement.style.borderLeftWidth = playButtonArrowWidth + "px";
            playButtonInnerElement.style.borderRightWidth = "0";
            playButtonInnerElement.style.borderStyle = "solid";
            playButtonInnerElement.style.borderTopColor = "transparent";
            playButtonInnerElement.style.borderRightColor = "transparent";
            playButtonInnerElement.style.borderBottomColor = "transparent";
            playButtonInnerElement.style.transform = "translate(" + (playButtonArrowWidth / 10) + "px,0px)";
            playButtonOuterElement.appendChild(playButtonInnerElement);
            var playButtonContainer = document.createElement("div");
            playButtonContainer.style.position = "absolute";
            playButtonContainer.style.left = "0";
            playButtonContainer.style.top = "0";
            playButtonContainer.style.width = "100%";
            playButtonContainer.style.height = "100%";
            playButtonContainer.style.display = "flex";
            playButtonContainer.style.justifyContent = "center";
            playButtonContainer.style.alignItems = "center";
            playButtonContainer.appendChild(playButtonOuterElement);
            posterRootElement.appendChild(playButtonContainer);
        }
        return posterRootElement;
    };
    Media.prototype.renderMediaPlayer = function () {
        var mediaElement;
        if (this._selectedMediaType == "video") {
            var videoPlayer = document.createElement("video");
            var posterUrl = this.getPosterUrl();
            if (posterUrl) {
                videoPlayer.poster = posterUrl;
            }
            mediaElement = videoPlayer;
        }
        else {
            mediaElement = document.createElement("audio");
        }
        mediaElement.setAttribute("aria-label", this.altText ? this.altText : strings_1.Strings.defaults.mediaPlayerAriaLabel());
        mediaElement.setAttribute("webkit-playsinline", "");
        mediaElement.setAttribute("playsinline", "");
        mediaElement.autoplay = true;
        mediaElement.controls = true;
        if (Utils.isMobileOS()) {
            mediaElement.muted = true;
        }
        mediaElement.preload = "none";
        mediaElement.style.width = "100%";
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var renderedSource = source.render();
            Utils.appendChild(mediaElement, renderedSource);
        }
        return mediaElement;
    };
    Media.prototype.internalRender = function () {
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-media");
        this.processSources();
        element.appendChild(this.renderPoster());
        return element;
    };
    Media.prototype.getJsonTypeName = function () {
        return "Media";
    };
    Media.prototype.getResourceInformation = function () {
        var result = [];
        var posterUrl = this.getPosterUrl();
        if (posterUrl) {
            result.push({ url: posterUrl, mimeType: "image" });
        }
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var mediaSource = _a[_i];
            if (mediaSource.isValid()) {
                result.push({
                    url: mediaSource.url,
                    mimeType: mediaSource.mimeType
                });
            }
        }
        return result;
    };
    Object.defineProperty(Media.prototype, "selectedMediaType", {
        get: function () {
            return this._selectedMediaType;
        },
        enumerable: false,
        configurable: true
    });
    Media.sourcesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_1, "sources", MediaSource);
    Media.posterProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "poster");
    Media.altTextProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "altText");
    //#endregion
    Media.supportedMediaTypes = ["audio", "video"];
    __decorate([
        (0, serialization_1.property)(Media.sourcesProperty)
    ], Media.prototype, "sources", void 0);
    __decorate([
        (0, serialization_1.property)(Media.posterProperty)
    ], Media.prototype, "poster", void 0);
    __decorate([
        (0, serialization_1.property)(Media.altTextProperty)
    ], Media.prototype, "altText", void 0);
    return Media;
}(CardElement));
exports.Media = Media;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.getAllLabelIds = function () {
        var labelIds = [];
        if (this.labelledBy) {
            labelIds.push(this.labelledBy);
        }
        if (this._renderedLabelElement) {
            labelIds.push(this._renderedLabelElement.id);
        }
        if (this._renderedErrorMessageElement) {
            labelIds.push(this._renderedErrorMessageElement.id);
        }
        return labelIds;
    };
    Input.prototype.updateInputControlAriaLabelledBy = function () {
        if (this._renderedInputControlElement) {
            var labelIds = this.getAllLabelIds();
            if (labelIds.length > 0) {
                this._renderedInputControlElement.setAttribute("aria-labelledby", labelIds.join(" "));
            }
            else {
                this._renderedInputControlElement.removeAttribute("aria-labelledby");
            }
        }
    };
    Object.defineProperty(Input.prototype, "isNullable", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "renderedInputControlElement", {
        get: function () {
            return this._renderedInputControlElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "inputControlContainerElement", {
        get: function () {
            return this._inputControlContainerElement;
        },
        enumerable: false,
        configurable: true
    });
    Input.prototype.overrideInternalRender = function () {
        var hostConfig = this.hostConfig;
        this._outerContainerElement = document.createElement("div");
        this._outerContainerElement.style.display = "flex";
        this._outerContainerElement.style.flexDirection = "column";
        var renderedInputControlId = Utils.generateUniqueId();
        if (this.label) {
            var labelRichTextBlock = new RichTextBlock();
            labelRichTextBlock.setParent(this);
            labelRichTextBlock.forElementId = renderedInputControlId;
            var labelInline = new TextRun(this.label);
            labelRichTextBlock.addInline(labelInline);
            if (this.isRequired) {
                labelInline.init(hostConfig.inputs.label.requiredInputs);
                var isRequiredCueInline = new TextRun(hostConfig.inputs.label.requiredInputs.suffix);
                isRequiredCueInline.color = hostConfig.inputs.label.requiredInputs.suffixColor;
                isRequiredCueInline.ariaHidden = true;
                labelRichTextBlock.addInline(isRequiredCueInline);
            }
            else {
                labelInline.init(hostConfig.inputs.label.optionalInputs);
            }
            this._renderedLabelElement = labelRichTextBlock.render();
            if (this._renderedLabelElement) {
                this._renderedLabelElement.id = Utils.generateUniqueId();
                this._renderedLabelElement.style.marginBottom = hostConfig.getEffectiveSpacing(hostConfig.inputs.label.inputSpacing) + "px";
                this._outerContainerElement.appendChild(this._renderedLabelElement);
            }
        }
        this._inputControlContainerElement = document.createElement("div");
        this._inputControlContainerElement.className = hostConfig.makeCssClassName("ac-input-container");
        this._inputControlContainerElement.style.display = "flex";
        if (this.height === "stretch") {
            this._inputControlContainerElement.style.alignItems = "stretch";
            this._inputControlContainerElement.style.flex = "1 1 auto";
        }
        this._renderedInputControlElement = this.internalRender();
        if (this._renderedInputControlElement) {
            this._renderedInputControlElement.id = renderedInputControlId;
            this._renderedInputControlElement.style.minWidth = "0px";
            if (this.isNullable && this.isRequired) {
                this._renderedInputControlElement.setAttribute("aria-required", "true");
                this._renderedInputControlElement.classList.add(hostConfig.makeCssClassName("ac-input-required"));
            }
            this._inputControlContainerElement.appendChild(this._renderedInputControlElement);
            this._outerContainerElement.appendChild(this._inputControlContainerElement);
            this.updateInputControlAriaLabelledBy();
            return this._outerContainerElement;
        }
        return undefined;
    };
    Input.prototype.valueChanged = function () {
        if (this.isValid()) {
            this.resetValidationFailureCue();
        }
        if (this.onValueChanged) {
            this.onValueChanged(this);
        }
        raiseInputValueChangedEvent(this);
    };
    Input.prototype.resetValidationFailureCue = function () {
        if (this.renderedInputControlElement) {
            this.renderedInputControlElement.classList.remove(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
            this.updateInputControlAriaLabelledBy();
            if (this._renderedErrorMessageElement) {
                this._outerContainerElement.removeChild(this._renderedErrorMessageElement);
                this._renderedErrorMessageElement = undefined;
            }
        }
    };
    Input.prototype.showValidationErrorMessage = function () {
        if (this.renderedElement && this.errorMessage && shared_1.GlobalSettings.displayInputValidationErrors) {
            var errorMessageTextBlock = new TextBlock();
            errorMessageTextBlock.setParent(this);
            errorMessageTextBlock.text = this.errorMessage;
            errorMessageTextBlock.wrap = true;
            errorMessageTextBlock.init(this.hostConfig.inputs.errorMessage);
            this._renderedErrorMessageElement = errorMessageTextBlock.render();
            if (this._renderedErrorMessageElement) {
                this._renderedErrorMessageElement.id = Utils.generateUniqueId();
                this._outerContainerElement.appendChild(this._renderedErrorMessageElement);
                this.updateInputControlAriaLabelledBy();
            }
        }
    };
    Input.prototype.focus = function () {
        if (this._renderedInputControlElement) {
            this._renderedInputControlElement.focus();
        }
    };
    Input.prototype.isValid = function () {
        return true;
    };
    Input.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.id) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.inputsMustHaveUniqueId());
        }
        if (this.isRequired) {
            if (!this.label) {
                context.addFailure(this, Enums.ValidationEvent.RequiredInputsShouldHaveLabel, "Required inputs should have a label");
            }
            if (!this.errorMessage) {
                context.addFailure(this, Enums.ValidationEvent.RequiredInputsShouldHaveErrorMessage, "Required inputs should have an error message");
            }
        }
    };
    Input.prototype.validateValue = function () {
        this.resetValidationFailureCue();
        var result = this.isRequired ? this.isSet() && this.isValid() : this.isValid();
        if (!result && this.renderedInputControlElement) {
            this.renderedInputControlElement.classList.add(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
            this.showValidationErrorMessage();
        }
        return result;
    };
    Input.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        return [this];
    };
    Object.defineProperty(Input.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    Input.labelProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_3, "label", true);
    Input.isRequiredProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_3, "isRequired", false);
    Input.errorMessageProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_3, "errorMessage", true);
    __decorate([
        (0, serialization_1.property)(Input.labelProperty)
    ], Input.prototype, "label", void 0);
    __decorate([
        (0, serialization_1.property)(Input.isRequiredProperty)
    ], Input.prototype, "isRequired", void 0);
    __decorate([
        (0, serialization_1.property)(Input.errorMessageProperty)
    ], Input.prototype, "errorMessage", void 0);
    return Input;
}(CardElement));
exports.Input = Input;
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMultiline = false;
        _this.style = Enums.InputTextStyle.Text;
        return _this;
    }
    //#endregion
    TextInput.prototype.setupInput = function (input) {
        var _this = this;
        input.style.flex = "1 1 auto";
        input.tabIndex = 0;
        if (this.placeholder) {
            input.placeholder = this.placeholder;
            input.setAttribute("aria-label", this.placeholder);
        }
        if (this.defaultValue) {
            input.value = this.defaultValue;
        }
        if (this.maxLength && this.maxLength > 0) {
            input.maxLength = this.maxLength;
        }
        input.oninput = function () { _this.valueChanged(); };
        input.onkeypress = function (e) {
            // Ctrl+Enter pressed
            if (e.ctrlKey && e.code === "Enter" && _this.inlineAction && _this.inlineAction.isEnabled) {
                _this.inlineAction.execute();
            }
        };
    };
    TextInput.prototype.internalRender = function () {
        var result;
        if (this.isMultiline && this.style !== Enums.InputTextStyle.Password) {
            result = document.createElement("textarea");
            result.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput", "ac-multiline");
            if (this.height === "stretch") {
                result.style.height = "initial";
            }
        }
        else {
            result = document.createElement("input");
            result.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput");
            result.type = Enums.InputTextStyle[this.style].toLowerCase();
        }
        this.setupInput(result);
        return result;
    };
    TextInput.prototype.overrideInternalRender = function () {
        var _this = this;
        var renderedInputControl = _super.prototype.overrideInternalRender.call(this);
        if (this.inlineAction) {
            var button_1 = document.createElement("button");
            button_1.className = this.hostConfig.makeCssClassName(this.inlineAction.isEnabled ? "ac-inlineActionButton" : "ac-inlineActionButton-disabled");
            button_1.onclick = function (e) {
                if (_this.inlineAction && _this.inlineAction.isEnabled) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this.inlineAction.execute();
                }
            };
            if (this.inlineAction.iconUrl) {
                button_1.classList.add("iconOnly");
                var icon_1 = document.createElement("img");
                icon_1.style.height = "100%";
                icon_1.setAttribute("role", "presentation");
                // The below trick is necessary as a workaround in Chrome where the icon is initially displayed
                // at its native size then resized to 100% of the button's height. This cfreates an unpleasant
                // flicker. On top of that, Chrome's flex implementation fails to prperly re-layout the button
                // after the image has loaded and been gicven its final size. The below trick also fixes that.
                icon_1.style.display = "none";
                icon_1.onload = function () {
                    icon_1.style.removeProperty("display");
                };
                icon_1.onerror = function () {
                    button_1.removeChild(icon_1);
                    button_1.classList.remove("iconOnly");
                    button_1.classList.add("textOnly");
                    button_1.textContent = _this.inlineAction && _this.inlineAction.title ? _this.inlineAction.title : strings_1.Strings.defaults.inlineActionTitle();
                };
                icon_1.src = this.inlineAction.iconUrl;
                button_1.appendChild(icon_1);
                button_1.title = this.inlineAction.title ? this.inlineAction.title : strings_1.Strings.defaults.inlineActionTitle();
            }
            else {
                button_1.classList.add("textOnly");
                button_1.textContent = this.inlineAction.title ? this.inlineAction.title : strings_1.Strings.defaults.inlineActionTitle();
            }
            this.inlineAction.setupElementForAccessibility(button_1, true);
            button_1.style.marginLeft = "8px";
            this.inputControlContainerElement.appendChild(button_1);
        }
        return renderedInputControl;
    };
    TextInput.prototype.getJsonTypeName = function () {
        return "Input.Text";
    };
    TextInput.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.inlineAction) {
            result = this.inlineAction.getActionById(id);
        }
        return result;
    };
    TextInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    TextInput.prototype.isValid = function () {
        if (!this.value) {
            return true;
        }
        if (this.regex) {
            return new RegExp(this.regex, "g").test(this.value);
        }
        return true;
    };
    Object.defineProperty(TextInput.prototype, "value", {
        get: function () {
            if (this.renderedInputControlElement) {
                if (this.isMultiline) {
                    return this.renderedInputControlElement.value;
                }
                else {
                    return this.renderedInputControlElement.value;
                }
            }
            else {
                return undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    TextInput.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    TextInput.maxLengthProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "maxLength");
    TextInput.isMultilineProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "isMultiline", false);
    TextInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    TextInput.styleProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "style", Enums.InputTextStyle, Enums.InputTextStyle.Text, [
        { value: Enums.InputTextStyle.Text },
        { value: Enums.InputTextStyle.Tel },
        { value: Enums.InputTextStyle.Url },
        { value: Enums.InputTextStyle.Email },
        { value: Enums.InputTextStyle.Password, targetVersion: serialization_1.Versions.v1_5 }
    ]);
    TextInput.inlineActionProperty = new ActionProperty(serialization_1.Versions.v1_0, "inlineAction", ["Action.ShowCard"]);
    TextInput.regexProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_3, "regex", true);
    __decorate([
        (0, serialization_1.property)(TextInput.valueProperty)
    ], TextInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization_1.property)(TextInput.maxLengthProperty)
    ], TextInput.prototype, "maxLength", void 0);
    __decorate([
        (0, serialization_1.property)(TextInput.isMultilineProperty)
    ], TextInput.prototype, "isMultiline", void 0);
    __decorate([
        (0, serialization_1.property)(TextInput.placeholderProperty)
    ], TextInput.prototype, "placeholder", void 0);
    __decorate([
        (0, serialization_1.property)(TextInput.styleProperty)
    ], TextInput.prototype, "style", void 0);
    __decorate([
        (0, serialization_1.property)(TextInput.inlineActionProperty)
    ], TextInput.prototype, "inlineAction", void 0);
    __decorate([
        (0, serialization_1.property)(TextInput.regexProperty)
    ], TextInput.prototype, "regex", void 0);
    return TextInput;
}(Input));
exports.TextInput = TextInput;
var ToggleInput = /** @class */ (function (_super) {
    __extends(ToggleInput, _super);
    function ToggleInput() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueOn = "true";
        _this.valueOff = "false";
        _this.wrap = false;
        return _this;
    }
    ToggleInput.prototype.updateInputControlAriaLabelledBy = function () {
        if (this._checkboxInputElement) {
            var joinedLabelIds = this.getAllLabelIds().join(" ");
            if (this._checkboxInputLabelElement && this._checkboxInputLabelElement.id) {
                joinedLabelIds += " " + this._checkboxInputLabelElement.id;
            }
            if (joinedLabelIds) {
                this._checkboxInputElement.setAttribute("aria-labelledby", joinedLabelIds);
            }
            else {
                this._checkboxInputElement.removeAttribute("aria-labelledby");
            }
        }
    };
    ToggleInput.prototype.internalRender = function () {
        var _this = this;
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-input", "ac-toggleInput");
        element.style.width = "100%";
        element.style.display = "flex";
        element.style.alignItems = "center";
        this._checkboxInputElement = document.createElement("input");
        this._checkboxInputElement.id = Utils.generateUniqueId();
        this._checkboxInputElement.type = "checkbox";
        this._checkboxInputElement.style.display = "inline-block";
        this._checkboxInputElement.style.verticalAlign = "middle";
        this._checkboxInputElement.style.margin = "0";
        this._checkboxInputElement.style.flex = "0 0 auto";
        if (this.title) {
            this._checkboxInputElement.setAttribute("aria-label", this.title);
        }
        if (this.isRequired) {
            this._checkboxInputElement.setAttribute("aria-required", "true");
        }
        this._checkboxInputElement.tabIndex = 0;
        if (this.defaultValue == this.valueOn) {
            this._checkboxInputElement.checked = true;
        }
        this._checkboxInputElement.onchange = function () { _this.valueChanged(); };
        Utils.appendChild(element, this._checkboxInputElement);
        if (this.title || this.isDesignMode()) {
            var label = new TextBlock();
            label.setParent(this);
            label.forElementId = this._checkboxInputElement.id;
            label.hostConfig = this.hostConfig;
            label.text = !this.title ? this.getJsonTypeName() : this.title;
            label.useMarkdown = shared_1.GlobalSettings.useMarkdownInRadioButtonAndCheckbox;
            label.wrap = this.wrap;
            this._checkboxInputLabelElement = label.render();
            if (this._checkboxInputLabelElement) {
                this._checkboxInputLabelElement.id = Utils.generateUniqueId();
                this._checkboxInputLabelElement.style.display = "inline-block";
                this._checkboxInputLabelElement.style.flex = "1 1 auto";
                this._checkboxInputLabelElement.style.marginLeft = "6px";
                this._checkboxInputLabelElement.style.verticalAlign = "middle";
                var spacerElement = document.createElement("div");
                spacerElement.style.width = "6px";
                Utils.appendChild(element, spacerElement);
                Utils.appendChild(element, this._checkboxInputLabelElement);
            }
        }
        return element;
    };
    Object.defineProperty(ToggleInput.prototype, "isNullable", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    ToggleInput.prototype.getJsonTypeName = function () {
        return "Input.Toggle";
    };
    ToggleInput.prototype.focus = function () {
        if (this._checkboxInputElement) {
            this._checkboxInputElement.focus();
        }
    };
    ToggleInput.prototype.isSet = function () {
        if (this.isRequired) {
            return this.value === this.valueOn;
        }
        return this.value ? true : false;
    };
    Object.defineProperty(ToggleInput.prototype, "value", {
        get: function () {
            if (this._checkboxInputElement) {
                return this._checkboxInputElement.checked ? this.valueOn : this.valueOff;
            }
            else {
                return undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    ToggleInput.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    ToggleInput.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
    ToggleInput.valueOnProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "valueOn", true, undefined, "true", function (sender) { return "true"; });
    ToggleInput.valueOffProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "valueOff", true, undefined, "false", function (sender) { return "false"; });
    ToggleInput.wrapProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "wrap", false);
    __decorate([
        (0, serialization_1.property)(ToggleInput.valueProperty)
    ], ToggleInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization_1.property)(ToggleInput.titleProperty)
    ], ToggleInput.prototype, "title", void 0);
    __decorate([
        (0, serialization_1.property)(ToggleInput.valueOnProperty)
    ], ToggleInput.prototype, "valueOn", void 0);
    __decorate([
        (0, serialization_1.property)(ToggleInput.valueOffProperty)
    ], ToggleInput.prototype, "valueOff", void 0);
    __decorate([
        (0, serialization_1.property)(ToggleInput.wrapProperty)
    ], ToggleInput.prototype, "wrap", void 0);
    return ToggleInput;
}(Input));
exports.ToggleInput = ToggleInput;
var Choice = /** @class */ (function (_super) {
    __extends(Choice, _super);
    function Choice(title, value) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.value = value;
        return _this;
    }
    //#endregion
    Choice.prototype.getSchemaKey = function () {
        return "Choice";
    };
    //#region Schema
    Choice.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
    Choice.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    __decorate([
        (0, serialization_1.property)(Choice.titleProperty)
    ], Choice.prototype, "title", void 0);
    __decorate([
        (0, serialization_1.property)(Choice.valueProperty)
    ], Choice.prototype, "value", void 0);
    return Choice;
}(serialization_1.SerializableObject));
exports.Choice = Choice;
var ChoiceSetInput = /** @class */ (function (_super) {
    __extends(ChoiceSetInput, _super);
    function ChoiceSetInput() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMultiSelect = false;
        _this.wrap = false;
        _this.choices = [];
        return _this;
    }
    Object.defineProperty(ChoiceSetInput.prototype, "isCompact", {
        get: function () {
            return !this.style || this.style === "compact";
        },
        set: function (value) {
            this.style = value ? undefined : "expanded";
        },
        enumerable: false,
        configurable: true
    });
    ChoiceSetInput.getUniqueCategoryName = function () {
        var uniqueCategoryName = "__ac-category" + ChoiceSetInput.uniqueCategoryCounter;
        ChoiceSetInput.uniqueCategoryCounter++;
        return uniqueCategoryName;
    };
    // Make sure `aria-current` is applied to the currently-selected item
    ChoiceSetInput.prototype.internalApplyAriaCurrent = function () {
        if (this._selectElement) {
            var options = this._selectElement.options;
            if (options) {
                for (var i = 0; i < options.length; i++) {
                    if (options[i].selected) {
                        options[i].setAttribute("aria-current", "true");
                    }
                    else {
                        options[i].removeAttribute("aria-current");
                    }
                }
            }
        }
    };
    ChoiceSetInput.prototype.renderCompoundInput = function (cssClassName, type, defaultValues) {
        var _this = this;
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-input", cssClassName);
        element.style.width = "100%";
        this._toggleInputs = [];
        this._labels = [];
        for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            var input = document.createElement("input");
            input.id = Utils.generateUniqueId();
            input.type = type;
            input.style.margin = "0";
            input.style.display = "inline-block";
            input.style.verticalAlign = "middle";
            input.style.flex = "0 0 auto";
            input.name = this.id ? this.id : this._uniqueCategoryName;
            if (this.isRequired) {
                input.setAttribute("aria-required", "true");
            }
            if (choice.value) {
                input.value = choice.value;
            }
            if (choice.title) {
                input.setAttribute("aria-label", choice.title);
            }
            if (defaultValues && choice.value) {
                if (defaultValues.indexOf(choice.value) >= 0) {
                    input.checked = true;
                }
            }
            input.onchange = function () { _this.valueChanged(); };
            this._toggleInputs.push(input);
            var compoundInput = document.createElement("div");
            compoundInput.style.display = "flex";
            compoundInput.style.alignItems = "center";
            Utils.appendChild(compoundInput, input);
            var label = new TextBlock();
            label.setParent(this);
            label.forElementId = input.id;
            label.hostConfig = this.hostConfig;
            label.text = choice.title ? choice.title : "Choice " + this._toggleInputs.length;
            label.useMarkdown = shared_1.GlobalSettings.useMarkdownInRadioButtonAndCheckbox;
            label.wrap = this.wrap;
            var labelElement = label.render();
            this._labels.push(labelElement);
            if (labelElement) {
                labelElement.id = Utils.generateUniqueId();
                labelElement.style.display = "inline-block";
                labelElement.style.flex = "1 1 auto";
                labelElement.style.marginLeft = "6px";
                labelElement.style.verticalAlign = "middle";
                var spacerElement = document.createElement("div");
                spacerElement.style.width = "6px";
                Utils.appendChild(compoundInput, spacerElement);
                Utils.appendChild(compoundInput, labelElement);
            }
            Utils.appendChild(element, compoundInput);
        }
        return element;
    };
    ChoiceSetInput.prototype.updateInputControlAriaLabelledBy = function () {
        if ((this.isMultiSelect || this.style === "expanded") && this._toggleInputs && this._labels) {
            var labelIds = this.getAllLabelIds();
            for (var i = 0; i < this._toggleInputs.length; i++) {
                var joinedLabelIds = labelIds.join(" ");
                var label = this._labels[i];
                if (label && label.id) {
                    joinedLabelIds += " " + label.id;
                }
                if (joinedLabelIds) {
                    this._toggleInputs[i].setAttribute("aria-labelledby", joinedLabelIds);
                }
                else {
                    this._toggleInputs[i].removeAttribute("aria-labelledby");
                }
            }
        }
        else {
            _super.prototype.updateInputControlAriaLabelledBy.call(this);
        }
    };
    ChoiceSetInput.prototype.internalRender = function () {
        var _this = this;
        this._uniqueCategoryName = ChoiceSetInput.getUniqueCategoryName();
        if (this.isMultiSelect) {
            // Render as a list of toggle inputs
            return this.renderCompoundInput("ac-choiceSetInput-multiSelect", "checkbox", this.defaultValue ? this.defaultValue.split(this.hostConfig.choiceSetInputValueSeparator) : undefined);
        }
        else {
            if (this.style === "expanded") {
                // Render as a series of radio buttons
                return this.renderCompoundInput("ac-choiceSetInput-expanded", "radio", this.defaultValue ? [this.defaultValue] : undefined);
            }
            else if (this.style === "filtered") {
                // Render as a text input coupled with a datalist
                var inputContainer = document.createElement("div");
                inputContainer.style.width = "100%";
                this._textInput = document.createElement("input");
                this._textInput.className = this.hostConfig.makeCssClassName("ac-input", "ac-multichoiceInput", "ac-choiceSetInput-filtered");
                this._textInput.type = "text";
                this._textInput.style.width = "100%";
                this._textInput.oninput = function () {
                    _this.valueChanged();
                    if (_this._textInput) {
                        // Remove aria-label when value is not empty so narration software doesn't
                        // read the placeholder
                        if (_this.value) {
                            _this._textInput.removeAttribute("placeholder");
                            _this._textInput.removeAttribute("aria-label");
                        }
                        else if (_this.placeholder) {
                            _this._textInput.placeholder = _this.placeholder;
                            _this._textInput.setAttribute("aria-label", _this.placeholder);
                        }
                    }
                };
                if (this.defaultValue) {
                    this._textInput.value = this.defaultValue;
                }
                if (this.placeholder && !this._textInput.value) {
                    this._textInput.placeholder = this.placeholder;
                    this._textInput.setAttribute("aria-label", this.placeholder);
                }
                var dataList = document.createElement("datalist");
                dataList.id = Utils.generateUniqueId();
                for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                    var choice = _a[_i];
                    var option = document.createElement("option");
                    // To fix https://stackoverflow.com/questions/29882361/show-datalist-labels-but-submit-the-actual-value
                    // value is mapped to choice.title other than choice.value
                    option.value = choice.title;
                    option.setAttribute("aria-label", choice.title);
                    dataList.appendChild(option);
                }
                this._textInput.setAttribute("list", dataList.id);
                inputContainer.append(this._textInput, dataList);
                return inputContainer;
            }
            else {
                // Render as a combo box
                this._selectElement = document.createElement("select");
                this._selectElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-multichoiceInput", "ac-choiceSetInput-compact");
                this._selectElement.style.width = "100%";
                var option = document.createElement("option");
                option.selected = true;
                option.disabled = true;
                option.hidden = true;
                option.value = "";
                if (this.placeholder) {
                    option.text = this.placeholder;
                }
                Utils.appendChild(this._selectElement, option);
                for (var _b = 0, _c = this.choices; _b < _c.length; _b++) {
                    var choice = _c[_b];
                    var option_1 = document.createElement("option");
                    option_1.value = choice.value;
                    option_1.text = choice.title;
                    option_1.setAttribute("aria-label", choice.title);
                    if (choice.value == this.defaultValue) {
                        option_1.selected = true;
                    }
                    Utils.appendChild(this._selectElement, option_1);
                }
                this._selectElement.onchange = function () {
                    _this.internalApplyAriaCurrent();
                    _this.valueChanged();
                };
                this.internalApplyAriaCurrent();
                return this._selectElement;
            }
        }
    };
    ChoiceSetInput.prototype.getJsonTypeName = function () {
        return "Input.ChoiceSet";
    };
    ChoiceSetInput.prototype.focus = function () {
        if (this._toggleInputs && (this.isMultiSelect || this.style === "expanded")) {
            if (this._toggleInputs.length > 0) {
                this._toggleInputs[0].focus();
            }
        }
        else if (this._textInput) {
            this._textInput.focus();
        }
        else {
            _super.prototype.focus.call(this);
        }
    };
    ChoiceSetInput.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this.choices.length == 0) {
            context.addFailure(this, Enums.ValidationEvent.CollectionCantBeEmpty, strings_1.Strings.errors.choiceSetMustHaveAtLeastOneChoice());
        }
        for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            if (!choice.title || !choice.value) {
                context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.choiceSetChoicesMustHaveTitleAndValue());
            }
        }
    };
    ChoiceSetInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    ChoiceSetInput.prototype.isValid = function () {
        if (this._textInput) {
            if (this.value === "" || this.value === this.placeholder) {
                return true;
            }
            for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                var choice = _a[_i];
                if (this.value === choice.value) {
                    return true;
                }
            }
            return false;
        }
        return _super.prototype.isValid.call(this);
    };
    Object.defineProperty(ChoiceSetInput.prototype, "value", {
        get: function () {
            if (!this.isMultiSelect) {
                if (this._selectElement) {
                    return this._selectElement.selectedIndex > 0 ? this._selectElement.value : undefined;
                }
                else if (this._textInput) {
                    for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                        var choice = _a[_i];
                        if (choice.title && this._textInput.value === choice.title) {
                            return choice.value;
                        }
                    }
                    return this._textInput.value;
                }
                else if (this._toggleInputs && this._toggleInputs.length > 0) {
                    for (var _b = 0, _c = this._toggleInputs; _b < _c.length; _b++) {
                        var toggleInput = _c[_b];
                        if (toggleInput.checked) {
                            return toggleInput.value;
                        }
                    }
                }
                return undefined;
            }
            else {
                if (!this._toggleInputs || this._toggleInputs.length == 0) {
                    return undefined;
                }
                var result = "";
                for (var _d = 0, _e = this._toggleInputs; _d < _e.length; _d++) {
                    var toggleInput = _e[_d];
                    if (toggleInput.checked) {
                        if (result != "") {
                            result += this.hostConfig.choiceSetInputValueSeparator;
                        }
                        result += toggleInput.value;
                    }
                }
                return result ? result : undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    ChoiceSetInput.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    ChoiceSetInput.choicesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "choices", Choice);
    ChoiceSetInput.styleProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_0, "style", [
        { value: "compact" },
        { value: "expanded" },
        { value: "filtered", targetVersion: serialization_1.Versions.v1_5 }
    ], "compact");
    ChoiceSetInput.isMultiSelectProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "isMultiSelect", false);
    ChoiceSetInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    ChoiceSetInput.wrapProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "wrap", false);
    //#endregion
    ChoiceSetInput.uniqueCategoryCounter = 0;
    __decorate([
        (0, serialization_1.property)(ChoiceSetInput.valueProperty)
    ], ChoiceSetInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization_1.property)(ChoiceSetInput.styleProperty)
    ], ChoiceSetInput.prototype, "style", void 0);
    __decorate([
        (0, serialization_1.property)(ChoiceSetInput.isMultiSelectProperty)
    ], ChoiceSetInput.prototype, "isMultiSelect", void 0);
    __decorate([
        (0, serialization_1.property)(ChoiceSetInput.placeholderProperty)
    ], ChoiceSetInput.prototype, "placeholder", void 0);
    __decorate([
        (0, serialization_1.property)(ChoiceSetInput.wrapProperty)
    ], ChoiceSetInput.prototype, "wrap", void 0);
    __decorate([
        (0, serialization_1.property)(ChoiceSetInput.choicesProperty)
    ], ChoiceSetInput.prototype, "choices", void 0);
    return ChoiceSetInput;
}(Input));
exports.ChoiceSetInput = ChoiceSetInput;
var NumberInput = /** @class */ (function (_super) {
    __extends(NumberInput, _super);
    function NumberInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberInput.prototype.internalRender = function () {
        var _this = this;
        this._numberInputElement = document.createElement("input");
        this._numberInputElement.setAttribute("type", "number");
        if (this.min !== undefined) {
            this._numberInputElement.setAttribute("min", this.min.toString());
        }
        if (this.max !== undefined) {
            this._numberInputElement.setAttribute("max", this.max.toString());
        }
        this._numberInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-numberInput");
        this._numberInputElement.style.width = "100%";
        this._numberInputElement.tabIndex = 0;
        if (this.defaultValue !== undefined) {
            this._numberInputElement.valueAsNumber = this.defaultValue;
        }
        if (this.placeholder) {
            this._numberInputElement.placeholder = this.placeholder;
            this._numberInputElement.setAttribute("aria-label", this.placeholder);
        }
        this._numberInputElement.oninput = function () { _this.valueChanged(); };
        return this._numberInputElement;
    };
    NumberInput.prototype.getJsonTypeName = function () {
        return "Input.Number";
    };
    NumberInput.prototype.isSet = function () {
        return this.value !== undefined && !isNaN(this.value);
    };
    NumberInput.prototype.isValid = function () {
        if (this.value === undefined) {
            return !this.isRequired;
        }
        var result = true;
        if (this.min !== undefined) {
            result = result && (this.value >= this.min);
        }
        if (this.max !== undefined) {
            result = result && (this.value <= this.max);
        }
        return result;
    };
    Object.defineProperty(NumberInput.prototype, "value", {
        get: function () {
            return this._numberInputElement ? this._numberInputElement.valueAsNumber : undefined;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    NumberInput.valueProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "value");
    NumberInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    NumberInput.minProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "min");
    NumberInput.maxProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "max");
    __decorate([
        (0, serialization_1.property)(NumberInput.valueProperty)
    ], NumberInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization_1.property)(NumberInput.minProperty)
    ], NumberInput.prototype, "min", void 0);
    __decorate([
        (0, serialization_1.property)(NumberInput.maxProperty)
    ], NumberInput.prototype, "max", void 0);
    __decorate([
        (0, serialization_1.property)(NumberInput.placeholderProperty)
    ], NumberInput.prototype, "placeholder", void 0);
    return NumberInput;
}(Input));
exports.NumberInput = NumberInput;
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateInput.prototype.internalRender = function () {
        var _this = this;
        this._dateInputElement = document.createElement("input");
        this._dateInputElement.setAttribute("type", "date");
        if (this.min) {
            this._dateInputElement.setAttribute("min", this.min);
        }
        if (this.max) {
            this._dateInputElement.setAttribute("max", this.max);
        }
        if (this.placeholder) {
            this._dateInputElement.placeholder = this.placeholder;
            this._dateInputElement.setAttribute("aria-label", this.placeholder);
        }
        this._dateInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-dateInput");
        this._dateInputElement.style.width = "100%";
        this._dateInputElement.oninput = function () { _this.valueChanged(); };
        if (this.defaultValue) {
            this._dateInputElement.value = this.defaultValue;
        }
        return this._dateInputElement;
    };
    DateInput.prototype.getJsonTypeName = function () {
        return "Input.Date";
    };
    DateInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    DateInput.prototype.isValid = function () {
        if (!this.value) {
            return !this.isRequired;
        }
        var valueAsDate = new Date(this.value);
        var result = true;
        if (this.min) {
            var minDate = new Date(this.min);
            result = result && (valueAsDate >= minDate);
        }
        if (this.max) {
            var maxDate = new Date(this.max);
            result = result && (valueAsDate <= maxDate);
        }
        return result;
    };
    Object.defineProperty(DateInput.prototype, "value", {
        get: function () {
            return this._dateInputElement ? this._dateInputElement.value : undefined;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    DateInput.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    DateInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    DateInput.minProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "min");
    DateInput.maxProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "max");
    __decorate([
        (0, serialization_1.property)(DateInput.valueProperty)
    ], DateInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization_1.property)(DateInput.minProperty)
    ], DateInput.prototype, "min", void 0);
    __decorate([
        (0, serialization_1.property)(DateInput.maxProperty)
    ], DateInput.prototype, "max", void 0);
    __decorate([
        (0, serialization_1.property)(DateInput.placeholderProperty)
    ], DateInput.prototype, "placeholder", void 0);
    return DateInput;
}(Input));
exports.DateInput = DateInput;
var TimeProperty = /** @class */ (function (_super) {
    __extends(TimeProperty, _super);
    function TimeProperty(targetVersion, name) {
        var _this = _super.call(this, targetVersion, name, function (sender, property, source, context) {
            var value = source[property.name];
            if (typeof value === "string" && value && /^[0-9]{2}:[0-9]{2}$/.test(value)) {
                return value;
            }
            return undefined;
        }, function (sender, property, target, value, context) {
            context.serializeValue(target, property.name, value);
        }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        return _this;
    }
    return TimeProperty;
}(serialization_1.CustomProperty));
exports.TimeProperty = TimeProperty;
var TimeInput = /** @class */ (function (_super) {
    __extends(TimeInput, _super);
    function TimeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeInput.convertTimeStringToDate = function (timeString) {
        return new Date("1973-09-04T" + timeString + ":00Z");
    };
    TimeInput.prototype.internalRender = function () {
        var _this = this;
        this._timeInputElement = document.createElement("input");
        this._timeInputElement.setAttribute("type", "time");
        this._timeInputElement.setAttribute("min", this.min);
        this._timeInputElement.setAttribute("max", this.max);
        this._timeInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-timeInput");
        this._timeInputElement.style.width = "100%";
        this._timeInputElement.oninput = function () { _this.valueChanged(); };
        if (this.placeholder) {
            this._timeInputElement.placeholder = this.placeholder;
            this._timeInputElement.setAttribute("aria-label", this.placeholder);
        }
        if (this.defaultValue) {
            this._timeInputElement.value = this.defaultValue;
        }
        return this._timeInputElement;
    };
    TimeInput.prototype.getJsonTypeName = function () {
        return "Input.Time";
    };
    TimeInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    TimeInput.prototype.isValid = function () {
        if (!this.value) {
            return !this.isRequired;
        }
        var valueAsDate = TimeInput.convertTimeStringToDate(this.value);
        var result = true;
        if (this.min) {
            var minDate = TimeInput.convertTimeStringToDate(this.min);
            result = result && (valueAsDate >= minDate);
        }
        if (this.max) {
            var maxDate = TimeInput.convertTimeStringToDate(this.max);
            result = result && (valueAsDate <= maxDate);
        }
        return result;
    };
    Object.defineProperty(TimeInput.prototype, "value", {
        get: function () {
            return this._timeInputElement ? this._timeInputElement.value : undefined;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    TimeInput.valueProperty = new TimeProperty(serialization_1.Versions.v1_0, "value");
    TimeInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    TimeInput.minProperty = new TimeProperty(serialization_1.Versions.v1_0, "min");
    TimeInput.maxProperty = new TimeProperty(serialization_1.Versions.v1_0, "max");
    __decorate([
        (0, serialization_1.property)(TimeInput.valueProperty)
    ], TimeInput.prototype, "defaultValue", void 0);
    __decorate([
        (0, serialization_1.property)(TimeInput.minProperty)
    ], TimeInput.prototype, "min", void 0);
    __decorate([
        (0, serialization_1.property)(TimeInput.maxProperty)
    ], TimeInput.prototype, "max", void 0);
    __decorate([
        (0, serialization_1.property)(TimeInput.placeholderProperty)
    ], TimeInput.prototype, "placeholder", void 0);
    return TimeInput;
}(Input));
exports.TimeInput = TimeInput;
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = Enums.ActionStyle.Default;
        _this.mode = Enums.ActionMode.Primary;
        _this._state = 0 /* Normal */;
        _this._isFocusable = true;
        return _this;
    }
    //#endregion
    Action.prototype.renderButtonContent = function () {
        if (this.renderedElement) {
            // Cache hostConfig for perf
            var hostConfig = this.hostConfig;
            var titleElement = document.createElement("div");
            titleElement.style.overflow = "hidden";
            titleElement.style.textOverflow = "ellipsis";
            if (!(hostConfig.actions.iconPlacement == Enums.ActionIconPlacement.AboveTitle || hostConfig.actions.allowTitleToWrap)) {
                titleElement.style.whiteSpace = "nowrap";
            }
            if (this.title) {
                titleElement.innerText = this.title;
            }
            if (!this.iconUrl) {
                this.renderedElement.classList.add("noIcon");
                this.renderedElement.appendChild(titleElement);
            }
            else {
                var iconElement = document.createElement("img");
                iconElement.src = this.iconUrl;
                iconElement.style.width = hostConfig.actions.iconSize + "px";
                iconElement.style.height = hostConfig.actions.iconSize + "px";
                iconElement.style.flex = "0 0 auto";
                if (hostConfig.actions.iconPlacement == Enums.ActionIconPlacement.AboveTitle) {
                    this.renderedElement.classList.add("iconAbove");
                    this.renderedElement.style.flexDirection = "column";
                    if (this.title) {
                        iconElement.style.marginBottom = "6px";
                    }
                }
                else {
                    this.renderedElement.classList.add("iconLeft");
                    iconElement.style.maxHeight = "100%";
                    if (this.title) {
                        iconElement.style.marginRight = "6px";
                    }
                }
                this.renderedElement.appendChild(iconElement);
                this.renderedElement.appendChild(titleElement);
            }
        }
    };
    Action.prototype.getParentContainer = function () {
        if (this.parent instanceof Container) {
            return this.parent;
        }
        return this.parent ? this.parent.getParentContainer() : undefined;
    };
    Action.prototype.updateCssClasses = function () {
        var _a, _b;
        if (this.parent && this.renderedElement) {
            var hostConfig = this.parent.hostConfig;
            this.renderedElement.className = hostConfig.makeCssClassName(this.isEnabled ? "ac-pushButton" : "ac-pushButton-disabled");
            var parentContainer = this.getParentContainer();
            if (parentContainer) {
                var parentContainerStyle = parentContainer.getEffectiveStyle();
                if (parentContainerStyle) {
                    this.renderedElement.classList.add("style-" + parentContainerStyle);
                }
            }
            this.renderedElement.tabIndex = this.isFocusable ? 0 : -1;
            switch (this._state) {
                case 1 /* Expanded */:
                    this.renderedElement.classList.add(hostConfig.makeCssClassName("expanded"));
                    break;
                case 2 /* Subdued */:
                    this.renderedElement.classList.add(hostConfig.makeCssClassName("subdued"));
                    break;
            }
            if (this.style && this.isEnabled) {
                if (this.style === Enums.ActionStyle.Positive) {
                    (_a = this.renderedElement.classList).add.apply(_a, hostConfig.makeCssClassNames("primary", "style-positive"));
                }
                else {
                    (_b = this.renderedElement.classList).add.apply(_b, hostConfig.makeCssClassNames("style-" + this.style.toLowerCase()));
                }
            }
        }
    };
    Action.prototype.getDefaultSerializationContext = function () {
        return new SerializationContext();
    };
    Action.prototype.internalGetReferencedInputs = function () {
        return {};
    };
    Action.prototype.internalPrepareForExecution = function (inputs) {
        // Do nothing in base implementation
    };
    Action.prototype.internalValidateInputs = function (referencedInputs) {
        var result = [];
        if (referencedInputs) {
            for (var _i = 0, _a = Object.keys(referencedInputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var input = referencedInputs[key];
                if (!input.validateValue()) {
                    result.push(input);
                }
            }
        }
        return result;
    };
    Action.prototype.shouldSerialize = function (context) {
        return context.actionRegistry.findByName(this.getJsonTypeName()) !== undefined;
    };
    Action.prototype.raiseExecuteActionEvent = function () {
        if (this.onExecute) {
            this.onExecute(this);
        }
        raiseExecuteActionEvent(this);
    };
    Action.prototype.getHref = function () {
        return "";
    };
    Action.prototype.getAriaRole = function () {
        return "button";
    };
    Action.prototype.setupElementForAccessibility = function (element, promoteTooltipToLabel) {
        if (promoteTooltipToLabel === void 0) { promoteTooltipToLabel = false; }
        element.tabIndex = this.isEnabled ? 0 : -1;
        element.setAttribute("role", this.getAriaRole());
        if (element instanceof HTMLButtonElement) {
            element.disabled = !this.isEnabled;
        }
        if (!this.isEnabled) {
            element.setAttribute("aria-disabled", "true");
        }
        else {
            element.classList.add(this.hostConfig.makeCssClassName("ac-selectable"));
        }
        if (this.title) {
            element.setAttribute("aria-label", this.title);
            element.title = this.title;
        }
        if (this.tooltip) {
            var targetAriaAttribute = promoteTooltipToLabel ? (this.title ? "aria-description" : "aria-label") : "aria-description";
            element.setAttribute(targetAriaAttribute, this.tooltip);
            element.title = this.tooltip;
        }
    };
    Action.prototype.parse = function (source, context) {
        return _super.prototype.parse.call(this, source, context ? context : new SerializationContext());
    };
    Action.prototype.render = function () {
        var _this = this;
        var buttonElement = document.createElement("button");
        buttonElement.type = "button";
        buttonElement.style.display = "flex";
        buttonElement.style.alignItems = "center";
        buttonElement.style.justifyContent = "center";
        buttonElement.onclick = function (e) {
            if (_this.isEnabled) {
                e.preventDefault();
                e.cancelBubble = true;
                _this.execute();
            }
        };
        this._renderedElement = buttonElement;
        this.renderButtonContent();
        this.updateCssClasses();
        this.setupElementForAccessibility(buttonElement);
    };
    Action.prototype.execute = function () {
        if (this._actionCollection) {
            this._actionCollection.actionExecuted(this);
        }
        this.raiseExecuteActionEvent();
    };
    Action.prototype.prepareForExecution = function () {
        var referencedInputs = this.getReferencedInputs();
        var invalidInputs = this.internalValidateInputs(referencedInputs);
        if (invalidInputs.length > 0) {
            invalidInputs[0].focus();
            return false;
        }
        this.internalPrepareForExecution(referencedInputs);
        return true;
    };
    ;
    Action.prototype.remove = function () {
        if (this._actionCollection) {
            return this._actionCollection.removeAction(this);
        }
        return false;
    };
    Action.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        return [];
    };
    Action.prototype.getResourceInformation = function () {
        return this.iconUrl ? [{ url: this.iconUrl, mimeType: "image" }] : [];
    };
    Action.prototype.getActionById = function (id) {
        return this.id === id ? this : undefined;
    };
    Action.prototype.getReferencedInputs = function () {
        return this.internalGetReferencedInputs();
    };
    /**
     * Validates the inputs associated with this action.
     *
     * @returns A list of inputs that failed validation, or an empty array if no input failed validation.
     */
    Action.prototype.validateInputs = function () {
        return this.internalValidateInputs(this.getReferencedInputs());
    };
    Object.defineProperty(Action.prototype, "isPrimary", {
        get: function () {
            return this.style == Enums.ActionStyle.Positive;
        },
        set: function (value) {
            if (value) {
                this.style = Enums.ActionStyle.Positive;
            }
            else {
                if (this.style == Enums.ActionStyle.Positive) {
                    this.style = Enums.ActionStyle.Default;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "hostConfig", {
        get: function () {
            return this.parent ? this.parent.hostConfig : host_config_1.defaultHostConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            if (this._state !== value) {
                this._state = value;
                this.updateCssClasses();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "isFocusable", {
        get: function () {
            return this._isFocusable;
        },
        set: function (value) {
            if (this._isFocusable !== value) {
                this._isFocusable = value;
                this.updateCssClasses();
            }
        },
        enumerable: false,
        configurable: true
    });
    Action.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
    Action.iconUrlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "iconUrl");
    Action.styleProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_2, "style", [
        { value: Enums.ActionStyle.Default },
        { value: Enums.ActionStyle.Positive },
        { value: Enums.ActionStyle.Destructive }
    ], Enums.ActionStyle.Default);
    Action.modeProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_5, "mode", [
        { value: Enums.ActionMode.Primary },
        { value: Enums.ActionMode.Secondary }
    ], Enums.ActionMode.Primary);
    Action.tooltipProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_5, "tooltip");
    Action.isEnabledProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_5, "isEnabled", true);
    __decorate([
        (0, serialization_1.property)(Action.titleProperty)
    ], Action.prototype, "title", void 0);
    __decorate([
        (0, serialization_1.property)(Action.iconUrlProperty)
    ], Action.prototype, "iconUrl", void 0);
    __decorate([
        (0, serialization_1.property)(Action.styleProperty)
    ], Action.prototype, "style", void 0);
    __decorate([
        (0, serialization_1.property)(Action.modeProperty)
    ], Action.prototype, "mode", void 0);
    __decorate([
        (0, serialization_1.property)(Action.tooltipProperty)
    ], Action.prototype, "tooltip", void 0);
    __decorate([
        (0, serialization_1.property)(Action.isEnabledProperty)
    ], Action.prototype, "isEnabled", void 0);
    return Action;
}(card_object_1.CardObject));
exports.Action = Action;
var SubmitActionBase = /** @class */ (function (_super) {
    __extends(SubmitActionBase, _super);
    function SubmitActionBase() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //#endregion
        _this._isPrepared = false;
        return _this;
    }
    SubmitActionBase.prototype.internalGetReferencedInputs = function () {
        var result = {};
        if (this.associatedInputs !== "none") {
            var current = this.parent;
            var inputs = [];
            while (current) {
                inputs = inputs.concat(current.getAllInputs(false));
                current = current.parent;
            }
            for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
                var input = inputs_1[_i];
                if (input.id) {
                    result[input.id] = input;
                }
            }
        }
        return result;
    };
    SubmitActionBase.prototype.internalPrepareForExecution = function (inputs) {
        if (this._originalData) {
            this._processedData = JSON.parse(JSON.stringify(this._originalData));
        }
        else {
            this._processedData = {};
        }
        if (this._processedData && inputs) {
            for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var input = inputs[key];
                if (input.id && input.isSet()) {
                    this._processedData[input.id] = typeof input.value === "string" ? input.value : input.value.toString();
                }
            }
        }
        this._isPrepared = true;
    };
    Object.defineProperty(SubmitActionBase.prototype, "data", {
        get: function () {
            return this._isPrepared ? this._processedData : this._originalData;
        },
        set: function (value) {
            this._originalData = value;
            this._isPrepared = false;
        },
        enumerable: false,
        configurable: true
    });
    SubmitActionBase.dataProperty = new serialization_1.PropertyDefinition(serialization_1.Versions.v1_0, "data");
    SubmitActionBase.associatedInputsProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_3, "associatedInputs", function (sender, property, source, context) {
        var value = source[property.name];
        if (value !== undefined && typeof value === "string") {
            return value.toLowerCase() === "none" ? "none" : "auto";
        }
        return undefined;
    }, function (sender, property, target, value, context) {
        context.serializeValue(target, property.name, value);
    });
    __decorate([
        (0, serialization_1.property)(SubmitActionBase.dataProperty)
    ], SubmitActionBase.prototype, "_originalData", void 0);
    __decorate([
        (0, serialization_1.property)(SubmitActionBase.associatedInputsProperty)
    ], SubmitActionBase.prototype, "associatedInputs", void 0);
    return SubmitActionBase;
}(Action));
exports.SubmitActionBase = SubmitActionBase;
var SubmitAction = /** @class */ (function (_super) {
    __extends(SubmitAction, _super);
    function SubmitAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmitAction.prototype.getJsonTypeName = function () {
        return SubmitAction.JsonTypeName;
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    SubmitAction.JsonTypeName = "Action.Submit";
    return SubmitAction;
}(SubmitActionBase));
exports.SubmitAction = SubmitAction;
var ExecuteAction = /** @class */ (function (_super) {
    __extends(ExecuteAction, _super);
    function ExecuteAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //#endregion
    ExecuteAction.prototype.getJsonTypeName = function () {
        return ExecuteAction.JsonTypeName;
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ExecuteAction.JsonTypeName = "Action.Execute";
    //#region Schema
    ExecuteAction.verbProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "verb");
    __decorate([
        (0, serialization_1.property)(ExecuteAction.verbProperty)
    ], ExecuteAction.prototype, "verb", void 0);
    return ExecuteAction;
}(SubmitActionBase));
exports.ExecuteAction = ExecuteAction;
var OpenUrlAction = /** @class */ (function (_super) {
    __extends(OpenUrlAction, _super);
    function OpenUrlAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenUrlAction.prototype.getJsonTypeName = function () {
        return OpenUrlAction.JsonTypeName;
    };
    OpenUrlAction.prototype.getAriaRole = function () {
        return "link";
    };
    OpenUrlAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.url) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("url"));
        }
    };
    OpenUrlAction.prototype.getHref = function () {
        return this.url;
    };
    //#region Schema
    OpenUrlAction.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "url");
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    OpenUrlAction.JsonTypeName = "Action.OpenUrl";
    __decorate([
        (0, serialization_1.property)(OpenUrlAction.urlProperty)
    ], OpenUrlAction.prototype, "url", void 0);
    return OpenUrlAction;
}(Action));
exports.OpenUrlAction = OpenUrlAction;
var ToggleVisibilityAction = /** @class */ (function (_super) {
    __extends(ToggleVisibilityAction, _super);
    function ToggleVisibilityAction() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetElements = {};
        return _this;
    }
    ToggleVisibilityAction.prototype.updateAriaControlsAttribute = function () {
        // apply aria labels to make it clear which elements this action will toggle
        if (this.targetElements) {
            var elementIds = Object.keys(this.targetElements);
            if (this._renderedElement) {
                if (elementIds.length > 0) {
                    this._renderedElement.setAttribute("aria-controls", elementIds.join(" "));
                }
                else {
                    this._renderedElement.removeAttribute("aria-controls");
                }
            }
        }
    };
    ToggleVisibilityAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.targetElements) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("targetElements"));
        }
    };
    ToggleVisibilityAction.prototype.getJsonTypeName = function () {
        return ToggleVisibilityAction.JsonTypeName;
    };
    ToggleVisibilityAction.prototype.render = function () {
        _super.prototype.render.call(this);
        this.updateAriaControlsAttribute();
    };
    ToggleVisibilityAction.prototype.execute = function () {
        if (this.parent) {
            for (var _i = 0, _a = Object.keys(this.targetElements); _i < _a.length; _i++) {
                var elementId = _a[_i];
                var targetElement = this.parent.getRootElement().getElementById(elementId);
                if (targetElement) {
                    if (typeof this.targetElements[elementId] === "boolean") {
                        targetElement.isVisible = this.targetElements[elementId];
                    }
                    else {
                        targetElement.isVisible = !targetElement.isVisible;
                    }
                }
            }
        }
    };
    ToggleVisibilityAction.prototype.addTargetElement = function (elementId, isVisible) {
        if (isVisible === void 0) { isVisible = undefined; }
        this.targetElements[elementId] = isVisible;
        this.updateAriaControlsAttribute();
    };
    ToggleVisibilityAction.prototype.removeTargetElement = function (elementId) {
        delete this.targetElements[elementId];
        this.updateAriaControlsAttribute();
    };
    ToggleVisibilityAction.targetElementsProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_2, "targetElements", function (sender, property, source, context) {
        var result = {};
        if (Array.isArray(source[property.name])) {
            for (var _i = 0, _a = source[property.name]; _i < _a.length; _i++) {
                var item = _a[_i];
                if (typeof item === "string") {
                    result[item] = undefined;
                }
                else if (typeof item === "object") {
                    var elementId = item["elementId"];
                    if (typeof elementId === "string") {
                        result[elementId] = Utils.parseBool(item["isVisible"]);
                    }
                }
            }
        }
        return result;
    }, function (sender, property, target, value, context) {
        var targetElements = [];
        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
            var id = _a[_i];
            if (typeof value[id] === "boolean") {
                targetElements.push({
                    elementId: id,
                    isVisible: value[id]
                });
            }
            else {
                targetElements.push(id);
            }
        }
        context.serializeArray(target, property.name, targetElements);
    }, {}, function (sender) { return {}; });
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ToggleVisibilityAction.JsonTypeName = "Action.ToggleVisibility";
    __decorate([
        (0, serialization_1.property)(ToggleVisibilityAction.targetElementsProperty)
    ], ToggleVisibilityAction.prototype, "targetElements", void 0);
    return ToggleVisibilityAction;
}(Action));
exports.ToggleVisibilityAction = ToggleVisibilityAction;
var StringWithSubstitutionProperty = /** @class */ (function (_super) {
    __extends(StringWithSubstitutionProperty, _super);
    function StringWithSubstitutionProperty(targetVersion, name) {
        var _this = _super.call(this, targetVersion, name, undefined, function () { return new shared_1.StringWithSubstitutions(); }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        return _this;
    }
    StringWithSubstitutionProperty.prototype.parse = function (sender, source, context) {
        var result = new shared_1.StringWithSubstitutions();
        result.set(Utils.parseString(source[this.name]));
        return result;
    };
    StringWithSubstitutionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value.getOriginal());
    };
    return StringWithSubstitutionProperty;
}(serialization_1.PropertyDefinition));
var HttpHeader = /** @class */ (function (_super) {
    __extends(HttpHeader, _super);
    //#endregion
    function HttpHeader(name, value) {
        if (name === void 0) { name = ""; }
        if (value === void 0) { value = ""; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    HttpHeader.prototype.getSchemaKey = function () {
        return "HttpHeader";
    };
    HttpHeader.prototype.getReferencedInputs = function (inputs, referencedInputs) {
        this._value.getReferencedInputs(inputs, referencedInputs);
    };
    HttpHeader.prototype.prepareForExecution = function (inputs) {
        this._value.substituteInputValues(inputs, shared_1.ContentTypes.applicationXWwwFormUrlencoded);
    };
    Object.defineProperty(HttpHeader.prototype, "value", {
        get: function () {
            return this._value.get();
        },
        set: function (newValue) {
            this._value.set(newValue);
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    HttpHeader.nameProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "name");
    HttpHeader.valueProperty = new StringWithSubstitutionProperty(serialization_1.Versions.v1_0, "value");
    __decorate([
        (0, serialization_1.property)(HttpHeader.nameProperty)
    ], HttpHeader.prototype, "name", void 0);
    __decorate([
        (0, serialization_1.property)(HttpHeader.valueProperty)
    ], HttpHeader.prototype, "_value", void 0);
    return HttpHeader;
}(serialization_1.SerializableObject));
exports.HttpHeader = HttpHeader;
var HttpAction = /** @class */ (function (_super) {
    __extends(HttpAction, _super);
    function HttpAction() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ignoreInputValidation = false;
        return _this;
    }
    HttpAction.prototype.internalGetReferencedInputs = function () {
        var allInputs = this.parent ? this.parent.getRootElement().getAllInputs() : [];
        var result = {};
        this._url.getReferencedInputs(allInputs, result);
        for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
            var header = _a[_i];
            header.getReferencedInputs(allInputs, result);
        }
        this._body.getReferencedInputs(allInputs, result);
        return result;
    };
    HttpAction.prototype.internalPrepareForExecution = function (inputs) {
        if (inputs) {
            this._url.substituteInputValues(inputs, shared_1.ContentTypes.applicationXWwwFormUrlencoded);
            var contentType = shared_1.ContentTypes.applicationJson;
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                header.prepareForExecution(inputs);
                if (header.name && header.name.toLowerCase() == "content-type") {
                    contentType = header.value;
                }
            }
            this._body.substituteInputValues(inputs, contentType);
        }
    };
    ;
    HttpAction.prototype.getJsonTypeName = function () {
        return HttpAction.JsonTypeName;
    };
    HttpAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.url) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("url"));
        }
        if (this.headers.length > 0) {
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                if (!header.name) {
                    context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.actionHttpHeadersMustHaveNameAndValue());
                }
            }
        }
    };
    Object.defineProperty(HttpAction.prototype, "ignoreInputValidation", {
        get: function () {
            return this._ignoreInputValidation;
        },
        set: function (value) {
            this._ignoreInputValidation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "url", {
        get: function () {
            return this._url.get();
        },
        set: function (value) {
            this._url.set(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "body", {
        get: function () {
            return this._body.get();
        },
        set: function (value) {
            this._body.set(value);
        },
        enumerable: false,
        configurable: true
    });
    HttpAction.urlProperty = new StringWithSubstitutionProperty(serialization_1.Versions.v1_0, "url");
    HttpAction.bodyProperty = new StringWithSubstitutionProperty(serialization_1.Versions.v1_0, "body");
    HttpAction.methodProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "method");
    HttpAction.headersProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "headers", HttpHeader);
    HttpAction.ignoreInputValidationProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_3, "ignoreInputValidation", false);
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    HttpAction.JsonTypeName = "Action.Http";
    __decorate([
        (0, serialization_1.property)(HttpAction.urlProperty)
    ], HttpAction.prototype, "_url", void 0);
    __decorate([
        (0, serialization_1.property)(HttpAction.bodyProperty)
    ], HttpAction.prototype, "_body", void 0);
    __decorate([
        (0, serialization_1.property)(HttpAction.methodProperty)
    ], HttpAction.prototype, "method", void 0);
    __decorate([
        (0, serialization_1.property)(HttpAction.headersProperty)
    ], HttpAction.prototype, "headers", void 0);
    __decorate([
        (0, serialization_1.property)(HttpAction.ignoreInputValidationProperty)
    ], HttpAction.prototype, "_ignoreInputValidation", void 0);
    return HttpAction;
}(Action));
exports.HttpAction = HttpAction;
var ShowCardAction = /** @class */ (function (_super) {
    __extends(ShowCardAction, _super);
    function ShowCardAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card = new InlineAdaptiveCard();
        return _this;
    }
    ShowCardAction.prototype.updateCssClasses = function () {
        _super.prototype.updateCssClasses.call(this);
        if (this.renderedElement) {
            var effectiveHostConfig = this.parent ? this.parent.hostConfig : host_config_1.defaultHostConfig;
            this.renderedElement.classList.add(effectiveHostConfig.makeCssClassName("expandable"));
            this.renderedElement.setAttribute("aria-expanded", (this.state === 1 /* Expanded */).toString());
        }
    };
    ShowCardAction.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        var jsonCard = source["card"];
        if (jsonCard) {
            this.card.parse(jsonCard, context);
        }
        else {
            context.logParseEvent(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.showCardMustHaveCard());
        }
    };
    ShowCardAction.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        if (this.card) {
            context.serializeValue(target, "card", this.card.toJSON(context));
        }
    };
    ShowCardAction.prototype.raiseExecuteActionEvent = function () {
        if (this.hostConfig.actions.showCard.actionMode === Enums.ShowCardActionMode.Popup) {
            // Only raise the event in Popup mode.
            _super.prototype.raiseExecuteActionEvent.call(this);
        }
    };
    ShowCardAction.prototype.getJsonTypeName = function () {
        return ShowCardAction.JsonTypeName;
    };
    ShowCardAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        this.card.internalValidateProperties(context);
    };
    ShowCardAction.prototype.setParent = function (value) {
        _super.prototype.setParent.call(this, value);
        this.card.setParent(value);
    };
    ShowCardAction.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        return this.card.getAllInputs(processActions);
    };
    ShowCardAction.prototype.getResourceInformation = function () {
        return _super.prototype.getResourceInformation.call(this).concat(this.card.getResourceInformation());
    };
    ShowCardAction.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            result = this.card.getActionById(id);
        }
        return result;
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ShowCardAction.JsonTypeName = "Action.ShowCard";
    return ShowCardAction;
}(Action));
exports.ShowCardAction = ShowCardAction;
var OverflowAction = /** @class */ (function (_super) {
    __extends(OverflowAction, _super);
    function OverflowAction(actions) {
        var _this = _super.call(this) || this;
        _this.actions = actions;
        _this.title = strings_1.Strings.defaults.overflowButtonText();
        return _this;
    }
    OverflowAction.prototype.getActions = function () {
        return this.actions;
    };
    OverflowAction.prototype.getJsonTypeName = function () {
        return ShowCardAction.JsonTypeName;
    };
    OverflowAction.prototype.execute = function () {
        var _this = this;
        var _a;
        var shouldDisplayPopupMenu = !raiseDisplayOverflowActionMenuEvent(this, this.renderedElement);
        if (shouldDisplayPopupMenu && this.renderedElement) {
            var contextMenu_1 = new controls_1.PopupMenu();
            contextMenu_1.hostConfig = this.hostConfig;
            var _loop_1 = function (i) {
                var menuItem = new controls_1.MenuItem(i.toString(), (_a = this_1.actions[i].title) !== null && _a !== void 0 ? _a : "");
                menuItem.isEnabled = this_1.actions[i].isEnabled;
                menuItem.onClick = function () {
                    var actionToExecute = _this.actions[i];
                    contextMenu_1.closePopup(false);
                    if (actionToExecute.isEnabled) {
                        actionToExecute.execute();
                    }
                };
                contextMenu_1.items.add(menuItem);
            };
            var this_1 = this;
            for (var i = 0; i < this.actions.length; i++) {
                _loop_1(i);
            }
            ;
            contextMenu_1.popup(this.renderedElement);
        }
    };
    OverflowAction.JsonTypeName = "Action.Overflow";
    return OverflowAction;
}(Action));
var ActionCollection = /** @class */ (function () {
    function ActionCollection(owner) {
        this._items = [];
        this._renderedActions = [];
        this._owner = owner;
    }
    ActionCollection.prototype.isActionAllowed = function (action) {
        var forbiddenTypes = this._owner.getForbiddenActionTypes();
        if (forbiddenTypes) {
            for (var _i = 0, forbiddenTypes_1 = forbiddenTypes; _i < forbiddenTypes_1.length; _i++) {
                var forbiddenType = forbiddenTypes_1[_i];
                if (action.constructor === forbiddenType) {
                    return false;
                }
            }
        }
        return true;
    };
    ActionCollection.prototype.refreshContainer = function () {
        this._actionCardContainer.innerHTML = "";
        if (!this._actionCard) {
            this._actionCardContainer.style.marginTop = "0px";
            return;
        }
        this._actionCardContainer.style.marginTop = this.renderedActionCount > 0 ? this._owner.hostConfig.actions.showCard.inlineTopMargin + "px" : "0px";
        var padding = this._owner.getEffectivePadding();
        this._owner.getImmediateSurroundingPadding(padding);
        var physicalPadding = this._owner.hostConfig.paddingDefinitionToSpacingDefinition(padding);
        if (this._actionCard) {
            this._actionCard.style.paddingLeft = physicalPadding.left + "px";
            this._actionCard.style.paddingRight = physicalPadding.right + "px";
            this._actionCard.style.marginLeft = "-" + physicalPadding.left + "px";
            this._actionCard.style.marginRight = "-" + physicalPadding.right + "px";
            if (physicalPadding.bottom != 0 && !this._owner.isDesignMode()) {
                this._actionCard.style.paddingBottom = physicalPadding.bottom + "px";
                this._actionCard.style.marginBottom = "-" + physicalPadding.bottom + "px";
            }
            Utils.appendChild(this._actionCardContainer, this._actionCard);
        }
    };
    ActionCollection.prototype.layoutChanged = function () {
        this._owner.getRootElement().updateLayout();
    };
    ActionCollection.prototype.showActionCard = function (action, suppressStyle, raiseEvent) {
        if (suppressStyle === void 0) { suppressStyle = false; }
        if (raiseEvent === void 0) { raiseEvent = true; }
        action.card.suppressStyle = suppressStyle;
        // Always re-render a ShowCard action in design mode; reuse already rendered ShowCard (if available) otherwise
        var renderedCard = action.card.renderedElement && !this._owner.isDesignMode() ? action.card.renderedElement : action.card.render();
        this._actionCard = renderedCard;
        this._expandedAction = action;
        this.refreshContainer();
        if (raiseEvent) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(action, true);
        }
    };
    ActionCollection.prototype.collapseExpandedAction = function () {
        for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var action = _a[_i];
            action.state = 0 /* Normal */;
        }
        var previouslyExpandedAction = this._expandedAction;
        this._expandedAction = undefined;
        this._actionCard = undefined;
        this.refreshContainer();
        if (previouslyExpandedAction) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(previouslyExpandedAction, false);
        }
    };
    ActionCollection.prototype.expandShowCardAction = function (action, raiseEvent) {
        var _this = this;
        var afterSelectedAction = false;
        for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var renderedAction = _a[_i];
            // Remove actions after selected action from tabOrder, to skip focus directly to expanded card
            if (afterSelectedAction) {
                renderedAction.isFocusable = false;
            }
            if (renderedAction !== action) {
                renderedAction.state = 2 /* Subdued */;
            }
            else {
                renderedAction.state = 1 /* Expanded */;
                afterSelectedAction = true;
                if (renderedAction.renderedElement) {
                    renderedAction.renderedElement.onblur = function (e) {
                        for (var _i = 0, _a = _this._renderedActions; _i < _a.length; _i++) {
                            var ra = _a[_i];
                            ra.isFocusable = true;
                        }
                    };
                }
            }
        }
        this.showActionCard(action, !(this._owner.isAtTheVeryLeft() && this._owner.isAtTheVeryRight()), raiseEvent);
    };
    ActionCollection.prototype.actionExecuted = function (action) {
        if (!(action instanceof ShowCardAction)) {
            this.collapseExpandedAction();
        }
        else {
            if (action === this._expandedAction) {
                this.collapseExpandedAction();
            }
            else if (this._owner.hostConfig.actions.showCard.actionMode === Enums.ShowCardActionMode.Inline) {
                this.expandShowCardAction(action, true);
            }
        }
    };
    ActionCollection.prototype.parse = function (source, context) {
        this.clear();
        if (Array.isArray(source)) {
            for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
                var jsonAction = source_1[_i];
                var action = context.parseAction(this._owner, jsonAction, [], !this._owner.isDesignMode());
                if (action) {
                    this.addAction(action);
                }
            }
        }
    };
    ActionCollection.prototype.toJSON = function (target, propertyName, context) {
        context.serializeArray(target, propertyName, this._items);
    };
    ActionCollection.prototype.getActionAt = function (id) {
        return this._items[id];
    };
    ActionCollection.prototype.getActionCount = function () {
        return this._items.length;
    };
    ActionCollection.prototype.getActionById = function (id) {
        var result = undefined;
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            result = item.getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    ActionCollection.prototype.validateProperties = function (context) {
        if (this._owner.hostConfig.actions.maxActions && this._items.length > this._owner.hostConfig.actions.maxActions) {
            context.addFailure(this._owner, Enums.ValidationEvent.TooManyActions, strings_1.Strings.errors.tooManyActions(this._owner.hostConfig.actions.maxActions));
        }
        if (this._items.length > 0 && !this._owner.hostConfig.supportsInteractivity) {
            context.addFailure(this._owner, Enums.ValidationEvent.InteractivityNotAllowed, strings_1.Strings.errors.interactivityNotAllowed());
        }
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!this.isActionAllowed(item)) {
                context.addFailure(this._owner, Enums.ValidationEvent.ActionTypeNotAllowed, strings_1.Strings.errors.actionTypeNotAllowed(item.getJsonTypeName()));
            }
            item.internalValidateProperties(context);
        }
    };
    ActionCollection.prototype.render = function (orientation, isDesignMode) {
        // Cache hostConfig for better perf
        var hostConfig = this._owner.hostConfig;
        if (!hostConfig.supportsInteractivity) {
            return undefined;
        }
        var element = document.createElement("div");
        var maxActions = hostConfig.actions.maxActions ? Math.min(hostConfig.actions.maxActions, this._items.length) : this._items.length;
        this._actionCardContainer = document.createElement("div");
        this._renderedActions = [];
        if (hostConfig.actions.preExpandSingleShowCardAction && maxActions == 1 && this._items[0] instanceof ShowCardAction && this.isActionAllowed(this._items[0])) {
            this.showActionCard(this._items[0], true);
            this._renderedActions.push(this._items[0]);
        }
        else {
            var buttonStrip = document.createElement("div");
            buttonStrip.className = hostConfig.makeCssClassName("ac-actionSet");
            buttonStrip.style.display = "flex";
            buttonStrip.setAttribute("role", "menubar");
            if (orientation == Enums.Orientation.Horizontal) {
                buttonStrip.style.flexDirection = "row";
                if (this._owner.horizontalAlignment && hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
                else {
                    switch (hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
            }
            else {
                buttonStrip.style.flexDirection = "column";
                if (this._owner.horizontalAlignment && hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
                else {
                    switch (hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        case Enums.ActionAlignment.Stretch:
                            buttonStrip.style.alignItems = "stretch";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
            }
            var allowedActions = this._items.filter(this.isActionAllowed.bind(this));
            var primaryActions_1 = [];
            var secondaryActions_1 = [];
            if (!this._owner.isDesignMode()) {
                allowedActions.forEach(function (action) { return action.mode === Enums.ActionMode.Secondary ? secondaryActions_1.push(action) : primaryActions_1.push(action); });
                // If primaryActions.length > maxActions, extra actions are moved to overflow
                var overflowPrimaryActions = primaryActions_1.splice(hostConfig.actions.maxActions);
                if (shared_1.GlobalSettings.allowMoreThanMaxActionsInOverflowMenu) {
                    secondaryActions_1.push.apply(secondaryActions_1, overflowPrimaryActions);
                }
                var shouldRenderOverflowActionButton = true;
                if (secondaryActions_1.length > 0) {
                    if (!this._overflowAction) {
                        this._overflowAction = new OverflowAction(secondaryActions_1);
                        this._overflowAction.setParent(this._owner);
                        this._overflowAction["_actionCollection"] = this;
                    }
                    var isRootAction = this._owner instanceof AdaptiveCard && !this._owner.parent;
                    shouldRenderOverflowActionButton = !raiseRenderOverflowActionsEvent(this._overflowAction, isRootAction);
                }
                if (this._overflowAction && shouldRenderOverflowActionButton) {
                    primaryActions_1.push(this._overflowAction);
                }
            }
            else {
                primaryActions_1 = allowedActions;
            }
            for (var i = 0; i < primaryActions_1.length; i++) {
                var action = primaryActions_1[i];
                action.render();
                if (action.renderedElement) {
                    if (primaryActions_1.length > 1) {
                        action.renderedElement.setAttribute("aria-posinset", (i + 1).toString());
                        action.renderedElement.setAttribute("aria-setsize", primaryActions_1.length.toString());
                        action.renderedElement.setAttribute("role", "menuitem");
                    }
                    if (hostConfig.actions.actionsOrientation == Enums.Orientation.Horizontal && hostConfig.actions.actionAlignment == Enums.ActionAlignment.Stretch) {
                        action.renderedElement.style.flex = "0 1 100%";
                    }
                    else {
                        action.renderedElement.style.flex = "0 1 auto";
                    }
                    buttonStrip.appendChild(action.renderedElement);
                    this._renderedActions.push(action);
                    if (i < primaryActions_1.length - 1 && hostConfig.actions.buttonSpacing > 0) {
                        var spacer = document.createElement("div");
                        if (orientation === Enums.Orientation.Horizontal) {
                            spacer.style.flex = "0 0 auto";
                            spacer.style.width = hostConfig.actions.buttonSpacing + "px";
                        }
                        else {
                            spacer.style.height = hostConfig.actions.buttonSpacing + "px";
                        }
                        Utils.appendChild(buttonStrip, spacer);
                    }
                }
            }
            var buttonStripContainer = document.createElement("div");
            buttonStripContainer.style.overflow = "hidden";
            buttonStripContainer.appendChild(buttonStrip);
            Utils.appendChild(element, buttonStripContainer);
        }
        Utils.appendChild(element, this._actionCardContainer);
        for (var _i = 0, _a = this._renderedActions; _i < _a.length; _i++) {
            var renderedAction = _a[_i];
            if (renderedAction.state == 1 /* Expanded */) {
                this.expandShowCardAction(renderedAction, false);
                break;
            }
        }
        return this._renderedActions.length > 0 ? element : undefined;
    };
    ActionCollection.prototype.addAction = function (action) {
        if (!action) {
            throw new Error("The action parameter cannot be null.");
        }
        if ((!action.parent || action.parent === this._owner) && this._items.indexOf(action) < 0) {
            this._items.push(action);
            if (!action.parent) {
                action.setParent(this._owner);
            }
            action["_actionCollection"] = this;
        }
        else {
            throw new Error(strings_1.Strings.errors.actionAlreadyParented());
        }
    };
    ActionCollection.prototype.removeAction = function (action) {
        if (this.expandedAction && this._expandedAction == action) {
            this.collapseExpandedAction();
        }
        var actionIndex = this._items.indexOf(action);
        if (actionIndex >= 0) {
            this._items.splice(actionIndex, 1);
            action.setParent(undefined);
            action["_actionCollection"] = undefined;
            for (var i = 0; i < this._renderedActions.length; i++) {
                if (this._renderedActions[i] == action) {
                    this._renderedActions.splice(i, 1);
                    break;
                }
            }
            return true;
        }
        return false;
    };
    ActionCollection.prototype.clear = function () {
        this._items = [];
        this._renderedActions = [];
        this._expandedAction = undefined;
    };
    ActionCollection.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        var result = [];
        if (processActions) {
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var action = _a[_i];
                result = result.concat(action.getAllInputs());
            }
        }
        return result;
    };
    ActionCollection.prototype.getResourceInformation = function () {
        var result = [];
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var action = _a[_i];
            result = result.concat(action.getResourceInformation());
        }
        return result;
    };
    Object.defineProperty(ActionCollection.prototype, "renderedActionCount", {
        get: function () {
            return this._renderedActions.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionCollection.prototype, "expandedAction", {
        get: function () {
            return this._expandedAction;
        },
        enumerable: false,
        configurable: true
    });
    return ActionCollection;
}());
var ActionSet = /** @class */ (function (_super) {
    __extends(ActionSet, _super);
    function ActionSet() {
        var _this = _super.call(this) || this;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    ActionSet.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._actionCollection.parse(source["actions"], context);
    };
    ActionSet.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        this._actionCollection.toJSON(target, "actions", context);
    };
    ActionSet.prototype.internalRender = function () {
        return this._actionCollection.render(this.orientation !== undefined ? this.orientation : this.hostConfig.actions.actionsOrientation, this.isDesignMode());
    };
    ActionSet.prototype.isBleedingAtBottom = function () {
        if (this._actionCollection.renderedActionCount == 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
        }
        else {
            if (this._actionCollection.getActionCount() == 1) {
                return this._actionCollection.expandedAction !== undefined && !this.hostConfig.actions.preExpandSingleShowCardAction;
            }
            else {
                return this._actionCollection.expandedAction !== undefined;
            }
        }
    };
    ActionSet.prototype.getJsonTypeName = function () {
        return "ActionSet";
    };
    ActionSet.prototype.getActionCount = function () {
        return this._actionCollection.getActionCount();
    };
    ActionSet.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.getActionAt(index);
        }
        else {
            return _super.prototype.getActionAt.call(this, index);
        }
    };
    ActionSet.prototype.getActionById = function (id) {
        var result = this._actionCollection.getActionById(id);
        return result ? result : _super.prototype.getActionById.call(this, id);
    };
    ActionSet.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        this._actionCollection.validateProperties(context);
    };
    ActionSet.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ActionSet.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        return processActions ? this._actionCollection.getAllInputs() : [];
    };
    ActionSet.prototype.getResourceInformation = function () {
        return this._actionCollection.getResourceInformation();
    };
    /**
     * @inheritdoc
     */
    ActionSet.prototype.findDOMNodeOwner = function (node) {
        var target = undefined;
        for (var i = 0; i < this.getActionCount(); i++) {
            var action = this.getActionAt(i);
            if (action) {
                // recur through each Action
                target = action.findDOMNodeOwner(node);
                if (target) {
                    return target;
                }
            }
        }
        // if not found in any Action, defer to parent implementation
        return _super.prototype.findDOMNodeOwner.call(this, node);
    };
    Object.defineProperty(ActionSet.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    ActionSet.orientationProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_1, "orientation", Enums.Orientation);
    __decorate([
        (0, serialization_1.property)(ActionSet.orientationProperty)
    ], ActionSet.prototype, "orientation", void 0);
    return ActionSet;
}(CardElement));
exports.ActionSet = ActionSet;
var ContainerStyleProperty = /** @class */ (function (_super) {
    __extends(ContainerStyleProperty, _super);
    function ContainerStyleProperty(targetVersion, name, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, [
            { value: Enums.ContainerStyle.Default },
            { value: Enums.ContainerStyle.Emphasis },
            { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Accent },
            { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Good },
            { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Attention },
            { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Warning }
        ], defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    return ContainerStyleProperty;
}(serialization_1.ValueSetProperty));
exports.ContainerStyleProperty = ContainerStyleProperty;
var StylableCardElementContainer = /** @class */ (function (_super) {
    __extends(StylableCardElementContainer, _super);
    function StylableCardElementContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(StylableCardElementContainer.prototype, "style", {
        get: function () {
            if (this.allowCustomStyle) {
                var style = this.getValue(StylableCardElementContainer.styleProperty);
                if (style && this.hostConfig.containerStyles.getStyleByName(style)) {
                    return style;
                }
            }
            return undefined;
        },
        set: function (value) {
            this.setValue(StylableCardElementContainer.styleProperty, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylableCardElementContainer.prototype, "allowCustomStyle", {
        //#endregion
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylableCardElementContainer.prototype, "hasExplicitStyle", {
        get: function () {
            return this.getValue(StylableCardElementContainer.styleProperty) !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    StylableCardElementContainer.prototype.applyBorder = function () {
        // No border in base implementation
    };
    StylableCardElementContainer.prototype.applyBackground = function () {
        if (this.renderedElement) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
            if (styleDefinition.backgroundColor) {
                var bgColor = Utils.stringToCssColor(styleDefinition.backgroundColor);
                this.renderedElement.style.backgroundColor = bgColor;
            }
        }
    };
    StylableCardElementContainer.prototype.applyPadding = function () {
        _super.prototype.applyPadding.call(this);
        if (!this.renderedElement) {
            return;
        }
        var physicalPadding = new shared_1.SpacingDefinition();
        if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
        }
        this.renderedElement.style.paddingTop = physicalPadding.top + "px";
        this.renderedElement.style.paddingRight = physicalPadding.right + "px";
        this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
        this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
        if (this.isBleeding()) {
            // Bleed into the first parent that does have padding
            var padding = new shared_1.PaddingDefinition();
            this.getImmediateSurroundingPadding(padding);
            var surroundingPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
            this.renderedElement.style.marginRight = "-" + surroundingPadding.right + "px";
            this.renderedElement.style.marginLeft = "-" + surroundingPadding.left + "px";
            if (!this.isDesignMode()) {
                this.renderedElement.style.marginTop = "-" + surroundingPadding.top + "px";
                this.renderedElement.style.marginBottom = "-" + surroundingPadding.bottom + "px";
            }
            if (this.separatorElement && this.separatorOrientation == Enums.Orientation.Horizontal) {
                this.separatorElement.style.marginLeft = "-" + surroundingPadding.left + "px";
                this.separatorElement.style.marginRight = "-" + surroundingPadding.right + "px";
            }
        }
        else {
            this.renderedElement.style.marginRight = "0";
            this.renderedElement.style.marginLeft = "0";
            this.renderedElement.style.marginTop = "0";
            this.renderedElement.style.marginBottom = "0";
            if (this.separatorElement && this.separatorOrientation === Enums.Orientation.Horizontal) {
                this.separatorElement.style.marginRight = "0";
                this.separatorElement.style.marginLeft = "0";
            }
        }
    };
    StylableCardElementContainer.prototype.getHasBackground = function () {
        var currentElement = this.parent;
        while (currentElement) {
            var currentElementHasBackgroundImage = currentElement instanceof Container ? currentElement.backgroundImage.isValid() : false;
            if (currentElement instanceof StylableCardElementContainer) {
                if (this.hasExplicitStyle && (currentElement.getEffectiveStyle() != this.getEffectiveStyle() || currentElementHasBackgroundImage)) {
                    return true;
                }
            }
            currentElement = currentElement.parent;
        }
        return false;
    };
    StylableCardElementContainer.prototype.getDefaultPadding = function () {
        return this.getHasBackground() || this.getHasBorder() ?
            new shared_1.PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding) : _super.prototype.getDefaultPadding.call(this);
    };
    StylableCardElementContainer.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        var explicitStyle = this.getValue(StylableCardElementContainer.styleProperty);
        if (explicitStyle !== undefined) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(explicitStyle);
            if (!styleDefinition) {
                context.addFailure(this, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(explicitStyle, "style"));
            }
        }
    };
    StylableCardElementContainer.prototype.render = function () {
        var renderedElement = _super.prototype.render.call(this);
        if (renderedElement && this.getHasBackground()) {
            this.applyBackground();
        }
        this.applyBorder();
        return renderedElement;
    };
    StylableCardElementContainer.prototype.getEffectiveStyle = function () {
        var effectiveStyle = this.style;
        return effectiveStyle ? effectiveStyle : _super.prototype.getEffectiveStyle.call(this);
    };
    //#region Schema
    StylableCardElementContainer.styleProperty = new ContainerStyleProperty(serialization_1.Versions.v1_0, "style");
    __decorate([
        (0, serialization_1.property)(StylableCardElementContainer.styleProperty)
    ], StylableCardElementContainer.prototype, "style", null);
    return StylableCardElementContainer;
}(CardElementContainer));
exports.StylableCardElementContainer = StylableCardElementContainer;
var ContainerBase = /** @class */ (function (_super) {
    __extends(ContainerBase, _super);
    function ContainerBase() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bleed = false;
        return _this;
    }
    //#endregion
    ContainerBase.prototype.adjustRenderedElementSize = function (renderedElement) {
        _super.prototype.adjustRenderedElementSize.call(this, renderedElement);
        if (this.minPixelHeight) {
            renderedElement.style.minHeight = this.minPixelHeight + "px";
        }
    };
    ContainerBase.prototype.getHasExpandedAction = function () {
        return false;
    };
    ContainerBase.prototype.getBleed = function () {
        return this._bleed;
    };
    ContainerBase.prototype.setBleed = function (value) {
        this._bleed = value;
    };
    Object.defineProperty(ContainerBase.prototype, "renderedActionCount", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    ContainerBase.prototype.isBleeding = function () {
        return (this.getHasBackground() || this.hostConfig.alwaysAllowBleed) && this.getBleed();
    };
    ContainerBase.bleedProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "bleed", false);
    ContainerBase.minHeightProperty = new serialization_1.PixelSizeProperty(serialization_1.Versions.v1_2, "minHeight");
    __decorate([
        (0, serialization_1.property)(ContainerBase.bleedProperty)
    ], ContainerBase.prototype, "_bleed", void 0);
    __decorate([
        (0, serialization_1.property)(ContainerBase.minHeightProperty)
    ], ContainerBase.prototype, "minPixelHeight", void 0);
    return ContainerBase;
}(StylableCardElementContainer));
exports.ContainerBase = ContainerBase;
var BackgroundImage = /** @class */ (function (_super) {
    __extends(BackgroundImage, _super);
    function BackgroundImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //#endregion
    BackgroundImage.prototype.getSchemaKey = function () {
        return "BackgroundImage";
    };
    BackgroundImage.prototype.internalParse = function (source, context) {
        if (typeof source === "string") {
            this.resetDefaultValues();
            this.url = source;
        }
        else {
            return _super.prototype.internalParse.call(this, source, context);
        }
    };
    BackgroundImage.prototype.apply = function (element) {
        if (this.url && element.renderedElement) {
            element.renderedElement.style.backgroundImage = "url('" + element.preProcessPropertyValue(BackgroundImage.urlProperty, this.url) + "')";
            switch (this.fillMode) {
                case Enums.FillMode.Repeat:
                    element.renderedElement.style.backgroundRepeat = "repeat";
                    break;
                case Enums.FillMode.RepeatHorizontally:
                    element.renderedElement.style.backgroundRepeat = "repeat-x";
                    break;
                case Enums.FillMode.RepeatVertically:
                    element.renderedElement.style.backgroundRepeat = "repeat-y";
                    break;
                case Enums.FillMode.Cover:
                default:
                    element.renderedElement.style.backgroundRepeat = "no-repeat";
                    element.renderedElement.style.backgroundSize = "cover";
                    break;
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.renderedElement.style.backgroundPositionX = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.renderedElement.style.backgroundPositionX = "right";
                    break;
            }
            switch (this.verticalAlignment) {
                case Enums.VerticalAlignment.Center:
                    element.renderedElement.style.backgroundPositionY = "center";
                    break;
                case Enums.VerticalAlignment.Bottom:
                    element.renderedElement.style.backgroundPositionY = "bottom";
                    break;
            }
        }
    };
    BackgroundImage.prototype.isValid = function () {
        return this.url ? true : false;
    };
    //#region Schema
    BackgroundImage.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "url");
    BackgroundImage.fillModeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "fillMode", Enums.FillMode, Enums.FillMode.Cover);
    BackgroundImage.horizontalAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "horizontalAlignment", Enums.HorizontalAlignment, Enums.HorizontalAlignment.Left);
    BackgroundImage.verticalAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "verticalAlignment", Enums.VerticalAlignment, Enums.VerticalAlignment.Top);
    __decorate([
        (0, serialization_1.property)(BackgroundImage.urlProperty)
    ], BackgroundImage.prototype, "url", void 0);
    __decorate([
        (0, serialization_1.property)(BackgroundImage.fillModeProperty)
    ], BackgroundImage.prototype, "fillMode", void 0);
    __decorate([
        (0, serialization_1.property)(BackgroundImage.horizontalAlignmentProperty)
    ], BackgroundImage.prototype, "horizontalAlignment", void 0);
    __decorate([
        (0, serialization_1.property)(BackgroundImage.verticalAlignmentProperty)
    ], BackgroundImage.prototype, "verticalAlignment", void 0);
    return BackgroundImage;
}(serialization_1.SerializableObject));
exports.BackgroundImage = BackgroundImage;
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //#endregion
        _this._items = [];
        _this._renderedItems = [];
        return _this;
    }
    Object.defineProperty(Container.prototype, "backgroundImage", {
        get: function () {
            return this.getValue(Container.backgroundImageProperty);
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.insertItemAt = function (item, index, forceInsert) {
        if (!item.parent || forceInsert) {
            if (item.isStandalone) {
                if (index < 0 || index >= this._items.length) {
                    this._items.push(item);
                }
                else {
                    this._items.splice(index, 0, item);
                }
                item.setParent(this);
            }
            else {
                throw new Error(strings_1.Strings.errors.elementTypeNotStandalone(item.getJsonTypeName()));
            }
        }
        else {
            throw new Error(strings_1.Strings.errors.elementAlreadyParented());
        }
    };
    Container.prototype.getItemsCollectionPropertyName = function () {
        return "items";
    };
    Container.prototype.applyBackground = function () {
        if (this.backgroundImage.isValid() && this.renderedElement) {
            this.backgroundImage.apply(this);
        }
        _super.prototype.applyBackground.call(this);
    };
    Container.prototype.internalRender = function () {
        this._renderedItems = [];
        // Cache hostConfig to avoid walking the parent hierarchy several times
        var hostConfig = this.hostConfig;
        var element = document.createElement("div");
        if (this.rtl !== undefined) {
            element.dir = this.rtl ? "rtl" : "ltr";
        }
        element.classList.add(hostConfig.makeCssClassName("ac-container"));
        element.style.display = "flex";
        element.style.flexDirection = "column";
        if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation) {
            // Forces the container to be at least as tall as its content.
            //
            // Fixes a quirk in Chrome where, for nested flex elements, the
            // inner element's height would never exceed the outer element's
            // height. This caused overflow truncation to break -- containers
            // would always be measured as not overflowing, since their heights
            // were constrained by their parents as opposed to truly reflecting
            // the height of their content.
            //
            // See the "Browser Rendering Notes" section of this answer:
            // https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
            element.style.minHeight = '-webkit-min-content';
        }
        switch (this.getEffectiveVerticalContentAlignment()) {
            case Enums.VerticalAlignment.Center:
                element.style.justifyContent = "center";
                break;
            case Enums.VerticalAlignment.Bottom:
                element.style.justifyContent = "flex-end";
                break;
            default:
                element.style.justifyContent = "flex-start";
                break;
        }
        if (this._items.length > 0) {
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                var renderedItem = this.isElementAllowed(item) ? item.render() : undefined;
                if (renderedItem) {
                    if (this._renderedItems.length > 0 && item.separatorElement) {
                        item.separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, item.separatorElement);
                    }
                    Utils.appendChild(element, renderedItem);
                    this._renderedItems.push(item);
                }
            }
        }
        else {
            if (this.isDesignMode()) {
                var placeholderElement = this.createPlaceholderElement();
                placeholderElement.style.width = "100%";
                placeholderElement.style.height = "100%";
                element.appendChild(placeholderElement);
            }
        }
        return element;
    };
    Container.prototype.truncateOverflow = function (maxHeight) {
        if (this.renderedElement) {
            // Add 1 to account for rounding differences between browsers
            var boundary_1 = this.renderedElement.offsetTop + maxHeight + 1;
            var handleElement_1 = function (cardElement) {
                var elt = cardElement.renderedElement;
                if (elt) {
                    switch (Utils.getFitStatus(elt, boundary_1)) {
                        case Enums.ContainerFitStatus.FullyInContainer:
                            var sizeChanged = cardElement['resetOverflow']();
                            // If the element's size changed after resetting content,
                            // we have to check if it still fits fully in the card
                            if (sizeChanged) {
                                handleElement_1(cardElement);
                            }
                            break;
                        case Enums.ContainerFitStatus.Overflowing:
                            var maxHeight_1 = boundary_1 - elt.offsetTop;
                            cardElement['handleOverflow'](maxHeight_1);
                            break;
                        case Enums.ContainerFitStatus.FullyOutOfContainer:
                            cardElement['handleOverflow'](0);
                            break;
                    }
                }
            };
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                handleElement_1(item);
            }
            return true;
        }
        return false;
    };
    Container.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            item['resetOverflow']();
        }
    };
    Container.prototype.getHasBackground = function () {
        return this.backgroundImage.isValid() || _super.prototype.getHasBackground.call(this);
    };
    Container.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this.clear();
        this.setShouldFallback(false);
        var jsonItems = source[this.getItemsCollectionPropertyName()];
        if (Array.isArray(jsonItems)) {
            for (var _i = 0, jsonItems_1 = jsonItems; _i < jsonItems_1.length; _i++) {
                var item = jsonItems_1[_i];
                var element = context.parseElement(this, item, !this.isDesignMode());
                if (element) {
                    this.insertItemAt(element, -1, true);
                }
            }
        }
    };
    Container.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        context.serializeArray(target, this.getItemsCollectionPropertyName(), this._items);
    };
    Object.defineProperty(Container.prototype, "isSelectable", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.getEffectiveVerticalContentAlignment = function () {
        if (this.verticalContentAlignment !== undefined) {
            return this.verticalContentAlignment;
        }
        var parentContainer = this.getParentContainer();
        return parentContainer ? parentContainer.getEffectiveVerticalContentAlignment() : Enums.VerticalAlignment.Top;
    };
    Container.prototype.getItemCount = function () {
        return this._items.length;
    };
    Container.prototype.getItemAt = function (index) {
        return this._items[index];
    };
    Container.prototype.getFirstVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var _i = 0, _a = this._renderedItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.isVisible) {
                    return item;
                }
            }
            ;
        }
        return undefined;
    };
    Container.prototype.getLastVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var i = this._renderedItems.length - 1; i >= 0; i--) {
                if (this._renderedItems[i].isVisible) {
                    return this._renderedItems[i];
                }
            }
        }
        return undefined;
    };
    Container.prototype.getJsonTypeName = function () {
        return "Container";
    };
    Container.prototype.isFirstElement = function (element) {
        var designMode = this.isDesignMode();
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.isVisible || designMode) {
                return item == element;
            }
        }
        return false;
    };
    Container.prototype.isLastElement = function (element) {
        var designMode = this.isDesignMode();
        for (var i = this._items.length - 1; i >= 0; i--) {
            if (this._items[i].isVisible || designMode) {
                return this._items[i] == element;
            }
        }
        return false;
    };
    Container.prototype.isRtl = function () {
        if (this.rtl !== undefined) {
            return this.rtl;
        }
        else {
            var parentContainer = this.getParentContainer();
            return parentContainer ? parentContainer.isRtl() : false;
        }
    };
    Container.prototype.isBleedingAtTop = function () {
        var firstRenderedItem = this.getFirstVisibleRenderedItem();
        return this.isBleeding() || (firstRenderedItem ? firstRenderedItem.isBleedingAtTop() : false);
    };
    Container.prototype.isBleedingAtBottom = function () {
        var lastRenderedItem = this.getLastVisibleRenderedItem();
        return this.isBleeding() || (lastRenderedItem ? lastRenderedItem.isBleedingAtBottom() && lastRenderedItem.getEffectiveStyle() == this.getEffectiveStyle() : false);
    };
    Container.prototype.indexOf = function (cardElement) {
        return this._items.indexOf(cardElement);
    };
    Container.prototype.addItem = function (item) {
        this.insertItemAt(item, -1, false);
    };
    Container.prototype.insertItemBefore = function (item, insertBefore) {
        this.insertItemAt(item, this._items.indexOf(insertBefore), false);
    };
    Container.prototype.insertItemAfter = function (item, insertAfter) {
        this.insertItemAt(item, this._items.indexOf(insertAfter) + 1, false);
    };
    Container.prototype.removeItem = function (item) {
        var itemIndex = this._items.indexOf(item);
        if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
            item.setParent(undefined);
            this.updateLayout();
            return true;
        }
        return false;
    };
    Container.prototype.clear = function () {
        this._items = [];
        this._renderedItems = [];
    };
    Container.prototype.getResourceInformation = function () {
        var result = _super.prototype.getResourceInformation.call(this);
        if (this.backgroundImage.isValid()) {
            result.push({
                url: this.backgroundImage.url,
                mimeType: "image"
            });
        }
        return result;
    };
    Container.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            if (this.selectAction) {
                result = this.selectAction.getActionById(id);
            }
            if (!result) {
                for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    result = item.getActionById(id);
                    if (result) {
                        break;
                    }
                }
            }
        }
        return result;
    };
    Object.defineProperty(Container.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "bleed", {
        get: function () {
            return this.getBleed();
        },
        set: function (value) {
            this.setBleed(value);
        },
        enumerable: false,
        configurable: true
    });
    Container.backgroundImageProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_0, "backgroundImage", BackgroundImage);
    Container.verticalContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_1, "verticalContentAlignment", Enums.VerticalAlignment);
    Container.rtlProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "rtl");
    __decorate([
        (0, serialization_1.property)(Container.backgroundImageProperty)
    ], Container.prototype, "backgroundImage", null);
    __decorate([
        (0, serialization_1.property)(Container.verticalContentAlignmentProperty)
    ], Container.prototype, "verticalContentAlignment", void 0);
    __decorate([
        (0, serialization_1.property)(Container.rtlProperty)
    ], Container.prototype, "rtl", void 0);
    return Container;
}(ContainerBase));
exports.Container = Container;
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(width) {
        if (width === void 0) { width = "stretch"; }
        var _this = _super.call(this) || this;
        _this.width = "stretch";
        //#endregion
        _this._computedWeight = 0;
        _this.width = width;
        return _this;
    }
    Column.prototype.adjustRenderedElementSize = function (renderedElement) {
        var minDesignTimeColumnHeight = 20;
        if (this.isDesignMode()) {
            renderedElement.style.minWidth = "20px";
            renderedElement.style.minHeight = (!this.minPixelHeight ? minDesignTimeColumnHeight : Math.max(this.minPixelHeight, minDesignTimeColumnHeight)) + "px";
        }
        else {
            renderedElement.style.minWidth = "0";
            if (this.minPixelHeight) {
                renderedElement.style.minHeight = this.minPixelHeight + "px";
            }
        }
        if (this.width === "auto") {
            renderedElement.style.flex = "0 1 auto";
        }
        else if (this.width === "stretch") {
            renderedElement.style.flex = "1 1 50px";
        }
        else if (this.width instanceof shared_1.SizeAndUnit) {
            if (this.width.unit == Enums.SizeUnit.Pixel) {
                renderedElement.style.flex = "0 0 auto";
                renderedElement.style.width = this.width.physicalSize + "px";
            }
            else {
                renderedElement.style.flex = "1 1 " + (this._computedWeight > 0 ? this._computedWeight : this.width.physicalSize) + "%";
            }
        }
    };
    Column.prototype.shouldSerialize = function (context) {
        return true;
    };
    Object.defineProperty(Column.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Vertical;
        },
        enumerable: false,
        configurable: true
    });
    Column.prototype.getJsonTypeName = function () {
        return "Column";
    };
    Object.defineProperty(Column.prototype, "hasVisibleSeparator", {
        get: function () {
            if (this.parent && this.parent instanceof ColumnSet) {
                return this.separatorElement !== undefined && !this.parent.isLeftMostElement(this);
            }
            else {
                return false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    Column.widthProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_0, "width", function (sender, property, source, context) {
        var result = property.defaultValue;
        var value = source[property.name];
        var invalidWidth = false;
        if (typeof value === "number" && !isNaN(value)) {
            result = new shared_1.SizeAndUnit(value, Enums.SizeUnit.Weight);
        }
        else if (value === "auto" || value === "stretch") {
            result = value;
        }
        else if (typeof value === "string") {
            try {
                result = shared_1.SizeAndUnit.parse(value);
                if (result.unit === Enums.SizeUnit.Pixel && property.targetVersion.compareTo(context.targetVersion) > 0) {
                    invalidWidth = true;
                }
            }
            catch (e) {
                invalidWidth = true;
            }
        }
        else {
            invalidWidth = true;
        }
        if (invalidWidth) {
            context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidColumnWidth(value));
            result = "auto";
        }
        return result;
    }, function (sender, property, target, value, context) {
        if (value instanceof shared_1.SizeAndUnit) {
            if (value.unit === Enums.SizeUnit.Pixel) {
                context.serializeValue(target, "width", value.physicalSize + "px");
            }
            else {
                context.serializeNumber(target, "width", value.physicalSize);
            }
        }
        else {
            context.serializeValue(target, "width", value);
        }
    }, "stretch");
    __decorate([
        (0, serialization_1.property)(Column.widthProperty)
    ], Column.prototype, "width", void 0);
    return Column;
}(Container));
exports.Column = Column;
var ColumnSet = /** @class */ (function (_super) {
    __extends(ColumnSet, _super);
    function ColumnSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columns = [];
        return _this;
    }
    ColumnSet.prototype.createColumnInstance = function (source, context) {
        return context.parseCardObject(this, source, [], // Forbidden types not supported for elements for now
        !this.isDesignMode(), function (typeName) {
            return !typeName || typeName === "Column" ? new Column() : undefined;
        }, function (typeName, errorType) {
            context.logParseEvent(undefined, Enums.ValidationEvent.ElementTypeNotAllowed, strings_1.Strings.errors.elementTypeNotAllowed(typeName));
        });
    };
    ColumnSet.prototype.internalRender = function () {
        this._renderedColumns = [];
        if (this._columns.length > 0) {
            // Cache hostConfig to avoid walking the parent hierarchy several times
            var hostConfig = this.hostConfig;
            var element = document.createElement("div");
            element.className = hostConfig.makeCssClassName("ac-columnSet");
            element.style.display = "flex";
            if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation) {
                // See comment in Container.internalRender()
                element.style.minHeight = '-webkit-min-content';
            }
            switch (this.getEffectiveHorizontalAlignment()) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            var totalWeight = 0;
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.width instanceof shared_1.SizeAndUnit && (column.width.unit == Enums.SizeUnit.Weight)) {
                    totalWeight += column.width.physicalSize;
                }
            }
            for (var _b = 0, _c = this._columns; _b < _c.length; _b++) {
                var column = _c[_b];
                if (column.width instanceof shared_1.SizeAndUnit && column.width.unit == Enums.SizeUnit.Weight && totalWeight > 0) {
                    var computedWeight = 100 / totalWeight * column.width.physicalSize;
                    // Best way to emulate "internal" access I know of
                    column["_computedWeight"] = computedWeight;
                }
                var renderedColumn = column.render();
                if (renderedColumn) {
                    if (this._renderedColumns.length > 0 && column.separatorElement) {
                        column.separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, column.separatorElement);
                    }
                    Utils.appendChild(element, renderedColumn);
                    this._renderedColumns.push(column);
                }
            }
            return this._renderedColumns.length > 0 ? element : undefined;
        }
        else {
            return undefined;
        }
    };
    ColumnSet.prototype.truncateOverflow = function (maxHeight) {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column['handleOverflow'](maxHeight);
        }
        return true;
    };
    ColumnSet.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column['resetOverflow']();
        }
    };
    Object.defineProperty(ColumnSet.prototype, "isSelectable", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    ColumnSet.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._columns = [];
        this._renderedColumns = [];
        var jsonColumns = source["columns"];
        if (Array.isArray(jsonColumns)) {
            for (var _i = 0, jsonColumns_1 = jsonColumns; _i < jsonColumns_1.length; _i++) {
                var item = jsonColumns_1[_i];
                var column = this.createColumnInstance(item, context);
                if (column) {
                    this._columns.push(column);
                }
            }
        }
    };
    ColumnSet.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        context.serializeArray(target, "columns", this._columns);
    };
    ColumnSet.prototype.isFirstElement = function (element) {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (column.isVisible) {
                return column == element;
            }
        }
        return false;
    };
    ColumnSet.prototype.isBleedingAtTop = function () {
        if (this.isBleeding()) {
            return true;
        }
        if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.isBleedingAtTop()) {
                    return true;
                }
            }
        }
        return false;
    };
    ColumnSet.prototype.isBleedingAtBottom = function () {
        if (this.isBleeding()) {
            return true;
        }
        if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.isBleedingAtBottom()) {
                    return true;
                }
            }
        }
        return false;
    };
    ColumnSet.prototype.getItemCount = function () {
        return this._columns.length;
    };
    ColumnSet.prototype.getFirstVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[0];
        }
        else {
            return undefined;
        }
    };
    ColumnSet.prototype.getLastVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[this._renderedColumns.length - 1];
        }
        else {
            return undefined;
        }
    };
    ColumnSet.prototype.getColumnAt = function (index) {
        return this._columns[index];
    };
    ColumnSet.prototype.getItemAt = function (index) {
        return this.getColumnAt(index);
    };
    ColumnSet.prototype.getJsonTypeName = function () {
        return "ColumnSet";
    };
    ColumnSet.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        var weightedColumns = 0;
        var stretchedColumns = 0;
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (typeof column.width === "number") {
                weightedColumns++;
            }
            else if (column.width === "stretch") {
                stretchedColumns++;
            }
        }
        if (weightedColumns > 0 && stretchedColumns > 0) {
            context.addFailure(this, Enums.ValidationEvent.Hint, strings_1.Strings.hints.dontUseWeightedAndStrecthedColumnsInSameSet());
        }
    };
    ColumnSet.prototype.addColumn = function (column) {
        if (!column.parent) {
            this._columns.push(column);
            column.setParent(this);
        }
        else {
            throw new Error(strings_1.Strings.errors.columnAlreadyBelongsToAnotherSet());
        }
    };
    ColumnSet.prototype.removeItem = function (item) {
        if (item instanceof Column) {
            var itemIndex = this._columns.indexOf(item);
            if (itemIndex >= 0) {
                this._columns.splice(itemIndex, 1);
                item.setParent(undefined);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ColumnSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Column ? this._columns.indexOf(cardElement) : -1;
    };
    ColumnSet.prototype.isLeftMostElement = function (element) {
        return this._columns.indexOf(element) == 0;
    };
    ColumnSet.prototype.isRightMostElement = function (element) {
        return this._columns.indexOf(element) == this._columns.length - 1;
    };
    ColumnSet.prototype.isTopElement = function (element) {
        return this._columns.indexOf(element) >= 0;
    };
    ColumnSet.prototype.isBottomElement = function (element) {
        return this._columns.indexOf(element) >= 0;
    };
    ColumnSet.prototype.getActionById = function (id) {
        var result = undefined;
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            result = column.getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    Object.defineProperty(ColumnSet.prototype, "bleed", {
        get: function () {
            return this.getBleed();
        },
        set: function (value) {
            this.setBleed(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColumnSet.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColumnSet.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
        },
        enumerable: false,
        configurable: true
    });
    return ColumnSet;
}(ContainerBase));
exports.ColumnSet = ColumnSet;
function raiseImageLoadedEvent(image) {
    var card = image.getRootElement();
    var onImageLoadedHandler = (card && card.onImageLoaded) ? card.onImageLoaded : AdaptiveCard.onImageLoaded;
    if (onImageLoadedHandler) {
        onImageLoadedHandler(image);
    }
}
function raiseAnchorClickedEvent(element, anchor, ev) {
    var card = element.getRootElement();
    var onAnchorClickedHandler = (card && card.onAnchorClicked) ? card.onAnchorClicked : AdaptiveCard.onAnchorClicked;
    return onAnchorClickedHandler !== undefined ? onAnchorClickedHandler(element, anchor, ev) : false;
}
function raiseExecuteActionEvent(action) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onExecuteActionHandler = (card && card.onExecuteAction) ? card.onExecuteAction : AdaptiveCard.onExecuteAction;
    if (action.prepareForExecution() && onExecuteActionHandler) {
        onExecuteActionHandler(action);
    }
}
function raiseInlineCardExpandedEvent(action, isExpanded) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onInlineCardExpandedHandler = (card && card.onInlineCardExpanded) ? card.onInlineCardExpanded : AdaptiveCard.onInlineCardExpanded;
    if (onInlineCardExpandedHandler) {
        onInlineCardExpandedHandler(action, isExpanded);
    }
}
function raiseInputValueChangedEvent(input) {
    var card = input.getRootElement();
    var onInputValueChangedHandler = (card && card.onInputValueChanged) ? card.onInputValueChanged : AdaptiveCard.onInputValueChanged;
    if (onInputValueChangedHandler) {
        onInputValueChangedHandler(input);
    }
}
function raiseElementVisibilityChangedEvent(element, shouldUpdateLayout) {
    if (shouldUpdateLayout === void 0) { shouldUpdateLayout = true; }
    var rootElement = element.getRootElement();
    if (shouldUpdateLayout) {
        rootElement.updateLayout();
    }
    var card = rootElement;
    var onElementVisibilityChangedHandler = (card && card.onElementVisibilityChanged) ? card.onElementVisibilityChanged : AdaptiveCard.onElementVisibilityChanged;
    if (onElementVisibilityChangedHandler !== undefined) {
        onElementVisibilityChangedHandler(element);
    }
}
/**
 * @returns return false to continue with default context menu; return true to skip SDK default context menu
 */
function raiseDisplayOverflowActionMenuEvent(action, target) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onDisplayOverflowActionMenuHandler = (card && card.onDisplayOverflowActionMenu) ? card.onDisplayOverflowActionMenu : AdaptiveCard.onDisplayOverflowActionMenu;
    return onDisplayOverflowActionMenuHandler !== undefined ? onDisplayOverflowActionMenuHandler(action.getActions(), target) : false;
}
/**
 * @returns return false to continue with default action button; return true to skip SDK default action button
 */
function raiseRenderOverflowActionsEvent(action, isAtRootLevelActions) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onRenderOverflowActionsHandler = (card && card.onRenderOverflowActions) ? card.onRenderOverflowActions : AdaptiveCard.onRenderOverflowActions;
    return onRenderOverflowActionsHandler !== undefined ? onRenderOverflowActionsHandler(action.getActions(), isAtRootLevelActions) : false;
}
var ContainerWithActions = /** @class */ (function (_super) {
    __extends(ContainerWithActions, _super);
    function ContainerWithActions() {
        var _this = _super.call(this) || this;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    ContainerWithActions.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._actionCollection.parse(source["actions"], context);
    };
    ContainerWithActions.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        this._actionCollection.toJSON(target, "actions", context);
    };
    ContainerWithActions.prototype.internalRender = function () {
        var element = _super.prototype.internalRender.call(this);
        if (element) {
            var renderedActions = this._actionCollection.render(this.hostConfig.actions.actionsOrientation, false);
            if (renderedActions) {
                Utils.appendChild(element, renderSeparation(this.hostConfig, {
                    spacing: this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing)
                }, Enums.Orientation.Horizontal));
                Utils.appendChild(element, renderedActions);
            }
            if (this.renderIfEmpty) {
                return element;
            }
            else {
                return element.children.length > 0 ? element : undefined;
            }
        }
        else {
            return undefined;
        }
    };
    ContainerWithActions.prototype.getHasExpandedAction = function () {
        if (this.renderedActionCount == 0) {
            return false;
        }
        else if (this.renderedActionCount == 1) {
            return this._actionCollection.expandedAction !== undefined && !this.hostConfig.actions.preExpandSingleShowCardAction;
        }
        else {
            return this._actionCollection.expandedAction !== undefined;
        }
    };
    Object.defineProperty(ContainerWithActions.prototype, "renderedActionCount", {
        get: function () {
            return this._actionCollection.renderedActionCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerWithActions.prototype, "renderIfEmpty", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    ContainerWithActions.prototype.getActionCount = function () {
        return this._actionCollection.getActionCount();
    };
    ContainerWithActions.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.getActionAt(index);
        }
        else {
            return _super.prototype.getActionAt.call(this, index);
        }
    };
    ContainerWithActions.prototype.getActionById = function (id) {
        var result = this._actionCollection.getActionById(id);
        return result ? result : _super.prototype.getActionById.call(this, id);
    };
    ContainerWithActions.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this._actionCollection) {
            this._actionCollection.validateProperties(context);
        }
    };
    ContainerWithActions.prototype.isLastElement = function (element) {
        return _super.prototype.isLastElement.call(this, element) && this._actionCollection.getActionCount() == 0;
    };
    ContainerWithActions.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ContainerWithActions.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._actionCollection.clear();
    };
    ContainerWithActions.prototype.getAllInputs = function (processActions) {
        if (processActions === void 0) { processActions = true; }
        var result = _super.prototype.getAllInputs.call(this, processActions);
        if (processActions) {
            result = result.concat(this._actionCollection.getAllInputs(processActions));
        }
        return result;
    };
    ContainerWithActions.prototype.getResourceInformation = function () {
        return _super.prototype.getResourceInformation.call(this).concat(this._actionCollection.getResourceInformation());
    };
    ContainerWithActions.prototype.isBleedingAtBottom = function () {
        if (this._actionCollection.renderedActionCount == 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
        }
        else {
            if (this._actionCollection.getActionCount() == 1) {
                return this._actionCollection.expandedAction !== undefined && !this.hostConfig.actions.preExpandSingleShowCardAction;
            }
            else {
                return this._actionCollection.expandedAction !== undefined;
            }
        }
    };
    Object.defineProperty(ContainerWithActions.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerWithActions;
}(Container));
exports.ContainerWithActions = ContainerWithActions;
var RefreshActionProperty = /** @class */ (function (_super) {
    __extends(RefreshActionProperty, _super);
    function RefreshActionProperty(targetVersion, name) {
        var _this = _super.call(this, targetVersion, name, undefined) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        return _this;
    }
    RefreshActionProperty.prototype.parse = function (sender, source, context) {
        var action = context.parseAction(sender.parent, source[this.name], [], false);
        if (action !== undefined) {
            if (action instanceof ExecuteAction) {
                return action;
            }
            context.logParseEvent(sender, Enums.ValidationEvent.ActionTypeNotAllowed, strings_1.Strings.errors.actionTypeNotAllowed(action.getJsonTypeName()));
        }
        context.logParseEvent(sender, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("action"));
        return undefined;
    };
    RefreshActionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value ? value.toJSON(context) : undefined, undefined, true);
    };
    return RefreshActionProperty;
}(serialization_1.PropertyDefinition));
exports.RefreshActionProperty = RefreshActionProperty;
var RefreshDefinition = /** @class */ (function (_super) {
    __extends(RefreshDefinition, _super);
    function RefreshDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RefreshDefinition.prototype, "action", {
        get: function () {
            return this.getValue(RefreshDefinition.actionProperty);
        },
        set: function (value) {
            this.setValue(RefreshDefinition.actionProperty, value);
            if (value) {
                value.setParent(this.parent);
            }
        },
        enumerable: false,
        configurable: true
    });
    RefreshDefinition.prototype.getSchemaKey = function () {
        return "RefreshDefinition";
    };
    //#region Schema
    RefreshDefinition.actionProperty = new RefreshActionProperty(serialization_1.Versions.v1_4, "action");
    RefreshDefinition.userIdsProperty = new serialization_1.StringArrayProperty(serialization_1.Versions.v1_4, "userIds");
    __decorate([
        (0, serialization_1.property)(RefreshDefinition.actionProperty)
    ], RefreshDefinition.prototype, "action", null);
    __decorate([
        (0, serialization_1.property)(RefreshDefinition.userIdsProperty)
    ], RefreshDefinition.prototype, "userIds", void 0);
    return RefreshDefinition;
}(serialization_1.SerializableObject));
exports.RefreshDefinition = RefreshDefinition;
var AuthCardButton = /** @class */ (function (_super) {
    __extends(AuthCardButton, _super);
    function AuthCardButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthCardButton.prototype.getSchemaKey = function () {
        return "AuthCardButton";
    };
    //#region Schema
    AuthCardButton.typeProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "type");
    AuthCardButton.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "title");
    AuthCardButton.imageProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "image");
    AuthCardButton.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "value");
    __decorate([
        (0, serialization_1.property)(AuthCardButton.typeProperty)
    ], AuthCardButton.prototype, "type", void 0);
    __decorate([
        (0, serialization_1.property)(AuthCardButton.titleProperty)
    ], AuthCardButton.prototype, "title", void 0);
    __decorate([
        (0, serialization_1.property)(AuthCardButton.imageProperty)
    ], AuthCardButton.prototype, "image", void 0);
    __decorate([
        (0, serialization_1.property)(AuthCardButton.valueProperty)
    ], AuthCardButton.prototype, "value", void 0);
    return AuthCardButton;
}(serialization_1.SerializableObject));
exports.AuthCardButton = AuthCardButton;
var TokenExchangeResource = /** @class */ (function (_super) {
    __extends(TokenExchangeResource, _super);
    function TokenExchangeResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TokenExchangeResource.prototype.getSchemaKey = function () {
        return "TokenExchangeResource";
    };
    //#region Schema
    TokenExchangeResource.idProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "id");
    TokenExchangeResource.uriProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "uri");
    TokenExchangeResource.providerIdProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "providerId");
    __decorate([
        (0, serialization_1.property)(TokenExchangeResource.idProperty)
    ], TokenExchangeResource.prototype, "id", void 0);
    __decorate([
        (0, serialization_1.property)(TokenExchangeResource.uriProperty)
    ], TokenExchangeResource.prototype, "uri", void 0);
    __decorate([
        (0, serialization_1.property)(TokenExchangeResource.providerIdProperty)
    ], TokenExchangeResource.prototype, "providerId", void 0);
    return TokenExchangeResource;
}(serialization_1.SerializableObject));
exports.TokenExchangeResource = TokenExchangeResource;
var Authentication = /** @class */ (function (_super) {
    __extends(Authentication, _super);
    function Authentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Authentication.prototype.getSchemaKey = function () {
        return "Authentication";
    };
    //#region Schema
    Authentication.textProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "text");
    Authentication.connectionNameProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_4, "connectionName");
    Authentication.buttonsProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_4, "buttons", AuthCardButton);
    Authentication.tokenExchangeResourceProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_4, "tokenExchangeResource", TokenExchangeResource, true);
    __decorate([
        (0, serialization_1.property)(Authentication.textProperty)
    ], Authentication.prototype, "text", void 0);
    __decorate([
        (0, serialization_1.property)(Authentication.connectionNameProperty)
    ], Authentication.prototype, "connectionName", void 0);
    __decorate([
        (0, serialization_1.property)(Authentication.buttonsProperty)
    ], Authentication.prototype, "buttons", void 0);
    __decorate([
        (0, serialization_1.property)(Authentication.tokenExchangeResourceProperty)
    ], Authentication.prototype, "tokenExchangeResource", void 0);
    return Authentication;
}(serialization_1.SerializableObject));
exports.Authentication = Authentication;
// @dynamic
var AdaptiveCard = /** @class */ (function (_super) {
    __extends(AdaptiveCard, _super);
    function AdaptiveCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.designMode = false;
        return _this;
    }
    Object.defineProperty(AdaptiveCard.prototype, "refresh", {
        get: function () {
            return this.getValue(AdaptiveCard.refreshProperty);
        },
        set: function (value) {
            this.setValue(AdaptiveCard.refreshProperty, value);
            if (value) {
                value.parent = this;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard, "processMarkdown", {
        get: function () {
            throw new Error(strings_1.Strings.errors.processMarkdownEventRemoved());
        },
        set: function (value) {
            throw new Error(strings_1.Strings.errors.processMarkdownEventRemoved());
        },
        enumerable: false,
        configurable: true
    });
    AdaptiveCard.applyMarkdown = function (text) {
        var result = {
            didProcess: false
        };
        if (AdaptiveCard.onProcessMarkdown) {
            AdaptiveCard.onProcessMarkdown(text, result);
        }
        else if (window.markdownit) {
            // Check for markdownit
            var markdownIt = window.markdownit;
            result.outputHtml = markdownIt().render(text);
            result.didProcess = true;
        }
        else {
            console.warn(strings_1.Strings.errors.markdownProcessingNotEnabled);
        }
        return result;
    };
    AdaptiveCard.prototype.isVersionSupported = function () {
        if (this.bypassVersionCheck) {
            return true;
        }
        else {
            var unsupportedVersion = !this.version ||
                !this.version.isValid ||
                (this.maxVersion.major < this.version.major) ||
                (this.maxVersion.major == this.version.major && this.maxVersion.minor < this.version.minor);
            return !unsupportedVersion;
        }
    };
    AdaptiveCard.prototype.getDefaultSerializationContext = function () {
        return new SerializationContext(this.version);
    };
    AdaptiveCard.prototype.getItemsCollectionPropertyName = function () {
        return "body";
    };
    AdaptiveCard.prototype.internalParse = function (source, context) {
        this._fallbackCard = undefined;
        var fallbackElement = context.parseElement(undefined, source["fallback"], !this.isDesignMode());
        if (fallbackElement) {
            this._fallbackCard = new AdaptiveCard();
            this._fallbackCard.addItem(fallbackElement);
        }
        _super.prototype.internalParse.call(this, source, context);
    };
    AdaptiveCard.prototype.internalToJSON = function (target, context) {
        this.setValue(AdaptiveCard.versionProperty, context.targetVersion);
        _super.prototype.internalToJSON.call(this, target, context);
    };
    AdaptiveCard.prototype.internalRender = function () {
        var renderedElement = _super.prototype.internalRender.call(this);
        if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation && renderedElement) {
            // Unlike containers, the root card element should be allowed to
            // be shorter than its content (otherwise the overflow truncation
            // logic would never get triggered)
            renderedElement.style.removeProperty("minHeight");
        }
        return renderedElement;
    };
    AdaptiveCard.prototype.getHasBackground = function () {
        return true;
    };
    AdaptiveCard.prototype.getDefaultPadding = function () {
        return new shared_1.PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding);
    };
    AdaptiveCard.prototype.shouldSerialize = function (context) {
        return true;
    };
    Object.defineProperty(AdaptiveCard.prototype, "renderIfEmpty", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "allowCustomStyle", {
        get: function () {
            return this.hostConfig.adaptiveCard && this.hostConfig.adaptiveCard.allowCustomStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "hasBackground", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    AdaptiveCard.prototype.getJsonTypeName = function () {
        return "AdaptiveCard";
    };
    AdaptiveCard.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this.getValue(CardElement.typeNameProperty) !== "AdaptiveCard") {
            context.addFailure(this, Enums.ValidationEvent.MissingCardType, strings_1.Strings.errors.invalidCardType());
        }
        if (!this.bypassVersionCheck && !this.version) {
            context.addFailure(this, Enums.ValidationEvent.PropertyCantBeNull, strings_1.Strings.errors.propertyMustBeSet("version"));
        }
        else if (!this.isVersionSupported()) {
            context.addFailure(this, Enums.ValidationEvent.UnsupportedCardVersion, strings_1.Strings.errors.unsupportedCardVersion(this.version.toString(), this.maxVersion.toString()));
        }
    };
    AdaptiveCard.prototype.render = function (target) {
        var renderedCard;
        if (this.shouldFallback() && this._fallbackCard) {
            this._fallbackCard.hostConfig = this.hostConfig;
            renderedCard = this._fallbackCard.render();
        }
        else {
            renderedCard = _super.prototype.render.call(this);
            if (renderedCard) {
                renderedCard.classList.add(this.hostConfig.makeCssClassName("ac-adaptiveCard"));
                // Having a tabIndex on the root container for a card can mess up accessibility in some scenarios.
                // However, we've shipped this behavior before, and so can't just turn it off in a point release. For
                // now, to unblock accessibility scenarios for our customers, we've got an option to turn it off. In a
                // future release, we should strongly consider flipping the default such that we *don't* emit a tabIndex
                // by default.
                if (shared_1.GlobalSettings.setTabIndexAtCardRoot) {
                    renderedCard.tabIndex = 0;
                }
                if (this.speak) {
                    renderedCard.setAttribute("aria-label", this.speak);
                }
            }
        }
        if (target) {
            Utils.appendChild(target, renderedCard);
            this.updateLayout();
        }
        return renderedCard;
    };
    AdaptiveCard.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation && this.isDisplayed()) {
            var padding = this.hostConfig.getEffectiveSpacing(Enums.Spacing.Default);
            this['handleOverflow'](this.renderedElement.offsetHeight - padding);
        }
    };
    AdaptiveCard.prototype.shouldFallback = function () {
        return _super.prototype.shouldFallback.call(this) || !this.isVersionSupported();
    };
    Object.defineProperty(AdaptiveCard.prototype, "hasVisibleSeparator", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    AdaptiveCard.schemaUrl = "http://adaptivecards.io/schemas/adaptive-card.json";
    //#region Schema
    AdaptiveCard.$schemaProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_0, "$schema", function (sender, property, source, context) {
        return AdaptiveCard.schemaUrl;
    }, function (sender, property, target, value, context) {
        context.serializeValue(target, property.name, AdaptiveCard.schemaUrl);
    });
    AdaptiveCard.versionProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_0, "version", function (sender, property, source, context) {
        var version = serialization_1.Version.parse(source[property.name], context);
        if (version === undefined) {
            version = serialization_1.Versions.latest;
            context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidCardVersion(version.toString()));
        }
        return version;
    }, function (sender, property, target, value, context) {
        if (value !== undefined) {
            context.serializeValue(target, property.name, value.toString());
        }
    }, serialization_1.Versions.v1_0);
    AdaptiveCard.fallbackTextProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "fallbackText");
    AdaptiveCard.speakProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "speak");
    AdaptiveCard.refreshProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_4, "refresh", RefreshDefinition, true);
    AdaptiveCard.authenticationProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_4, "authentication", Authentication, true);
    __decorate([
        (0, serialization_1.property)(AdaptiveCard.versionProperty)
    ], AdaptiveCard.prototype, "version", void 0);
    __decorate([
        (0, serialization_1.property)(AdaptiveCard.fallbackTextProperty)
    ], AdaptiveCard.prototype, "fallbackText", void 0);
    __decorate([
        (0, serialization_1.property)(AdaptiveCard.speakProperty)
    ], AdaptiveCard.prototype, "speak", void 0);
    __decorate([
        (0, serialization_1.property)(AdaptiveCard.refreshProperty)
    ], AdaptiveCard.prototype, "refresh", null);
    __decorate([
        (0, serialization_1.property)(AdaptiveCard.authenticationProperty)
    ], AdaptiveCard.prototype, "authentication", void 0);
    return AdaptiveCard;
}(ContainerWithActions));
exports.AdaptiveCard = AdaptiveCard;
var InlineAdaptiveCard = /** @class */ (function (_super) {
    __extends(InlineAdaptiveCard, _super);
    function InlineAdaptiveCard() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suppressStyle = false;
        return _this;
    }
    InlineAdaptiveCard.prototype.getSchemaKey = function () {
        return "InlineAdaptiveCard";
    };
    InlineAdaptiveCard.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.remove(AdaptiveCard.$schemaProperty, AdaptiveCard.versionProperty);
    };
    //#endregion
    InlineAdaptiveCard.prototype.getDefaultPadding = function () {
        return new shared_1.PaddingDefinition(this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding, this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding);
    };
    Object.defineProperty(InlineAdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InlineAdaptiveCard.prototype, "defaultStyle", {
        get: function () {
            if (this.suppressStyle) {
                return Enums.ContainerStyle.Default;
            }
            else {
                return this.hostConfig.actions.showCard.style ? this.hostConfig.actions.showCard.style : Enums.ContainerStyle.Emphasis;
            }
        },
        enumerable: false,
        configurable: true
    });
    InlineAdaptiveCard.prototype.render = function (target) {
        var renderedCard = _super.prototype.render.call(this, target);
        if (renderedCard) {
            renderedCard.setAttribute("aria-live", "polite");
            renderedCard.removeAttribute("tabindex");
        }
        return renderedCard;
    };
    return InlineAdaptiveCard;
}(AdaptiveCard));
var SerializationContext = /** @class */ (function (_super) {
    __extends(SerializationContext, _super);
    function SerializationContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SerializationContext.prototype.internalParseCardObject = function (parent, source, forbiddenTypeNames, allowFallback, createInstanceCallback, logParseEvent) {
        var result = undefined;
        if (source && typeof source === "object") {
            var typeName = Utils.parseString(source["type"]);
            if (typeName && forbiddenTypeNames.indexOf(typeName) >= 0) {
                logParseEvent(typeName, Enums.TypeErrorType.ForbiddenType);
            }
            else {
                var tryToFallback = false;
                result = createInstanceCallback(typeName);
                if (!result) {
                    tryToFallback = shared_1.GlobalSettings.enableFallback && allowFallback;
                    logParseEvent(typeName, Enums.TypeErrorType.UnknownType);
                }
                else {
                    result.setParent(parent);
                    result.parse(source, this);
                    tryToFallback = shared_1.GlobalSettings.enableFallback && allowFallback && result.shouldFallback();
                }
                if (tryToFallback) {
                    var fallback = source["fallback"];
                    if (!fallback && parent) {
                        parent.setShouldFallback(true);
                    }
                    if (typeof fallback === "string" && fallback.toLowerCase() === "drop") {
                        result = undefined;
                    }
                    else if (typeof fallback === "object") {
                        result = this.internalParseCardObject(parent, fallback, forbiddenTypeNames, true, createInstanceCallback, logParseEvent);
                    }
                }
            }
        }
        return result;
    };
    SerializationContext.prototype.cardObjectParsed = function (o, source) {
        if (o instanceof Action && this.onParseAction) {
            this.onParseAction(o, source, this);
        }
        else if (o instanceof CardElement && this.onParseElement) {
            this.onParseElement(o, source, this);
        }
    };
    SerializationContext.prototype.shouldSerialize = function (o) {
        if (o instanceof Action) {
            return this.actionRegistry.findByName(o.getJsonTypeName()) !== undefined;
        }
        else if (o instanceof CardElement) {
            return this.elementRegistry.findByName(o.getJsonTypeName()) !== undefined;
        }
        else {
            return true;
        }
    };
    SerializationContext.prototype.parseCardObject = function (parent, source, forbiddenTypeNames, allowFallback, createInstanceCallback, logParseEvent) {
        var result = this.internalParseCardObject(parent, source, forbiddenTypeNames, allowFallback, createInstanceCallback, logParseEvent);
        if (result !== undefined) {
            this.cardObjectParsed(result, source);
        }
        return result;
    };
    SerializationContext.prototype.parseElement = function (parent, source, allowFallback) {
        var _this = this;
        return this.parseCardObject(parent, source, [], // Forbidden types not supported for elements for now
        allowFallback, function (typeName) {
            return _this.elementRegistry.createInstance(typeName, _this.targetVersion);
        }, function (typeName, errorType) {
            if (errorType === Enums.TypeErrorType.UnknownType) {
                _this.logParseEvent(undefined, Enums.ValidationEvent.UnknownElementType, strings_1.Strings.errors.unknownElementType(typeName));
            }
            else {
                _this.logParseEvent(undefined, Enums.ValidationEvent.ElementTypeNotAllowed, strings_1.Strings.errors.elementTypeNotAllowed(typeName));
            }
        });
    };
    SerializationContext.prototype.parseAction = function (parent, source, forbiddenActionTypes, allowFallback) {
        var _this = this;
        return this.parseCardObject(parent, source, forbiddenActionTypes, allowFallback, function (typeName) {
            return _this.actionRegistry.createInstance(typeName, _this.targetVersion);
        }, function (typeName, errorType) {
            if (errorType == Enums.TypeErrorType.UnknownType) {
                _this.logParseEvent(undefined, Enums.ValidationEvent.UnknownActionType, strings_1.Strings.errors.unknownActionType(typeName));
            }
            else {
                _this.logParseEvent(undefined, Enums.ValidationEvent.ActionTypeNotAllowed, strings_1.Strings.errors.actionTypeNotAllowed(typeName));
            }
        });
    };
    Object.defineProperty(SerializationContext.prototype, "elementRegistry", {
        get: function () {
            return this._elementRegistry ? this._elementRegistry : registry_1.GlobalRegistry.elements;
        },
        enumerable: false,
        configurable: true
    });
    // Not using a property setter here because the setter should accept "undefined"
    // whereas the getter should never return undefined.
    SerializationContext.prototype.setElementRegistry = function (value) {
        this._elementRegistry = value;
    };
    Object.defineProperty(SerializationContext.prototype, "actionRegistry", {
        get: function () {
            return this._actionRegistry ? this._actionRegistry : registry_1.GlobalRegistry.actions;
        },
        enumerable: false,
        configurable: true
    });
    // Not using a property setter here because the setter should accept "undefined"
    // whereas the getter should never return undefined.
    SerializationContext.prototype.setActionRegistry = function (value) {
        this._actionRegistry = value;
    };
    return SerializationContext;
}(serialization_1.BaseSerializationContext));
exports.SerializationContext = SerializationContext;
registry_1.GlobalRegistry.defaultElements.register("Container", Container);
registry_1.GlobalRegistry.defaultElements.register("TextBlock", TextBlock);
registry_1.GlobalRegistry.defaultElements.register("RichTextBlock", RichTextBlock, serialization_1.Versions.v1_2);
registry_1.GlobalRegistry.defaultElements.register("TextRun", TextRun, serialization_1.Versions.v1_2);
registry_1.GlobalRegistry.defaultElements.register("Image", Image);
registry_1.GlobalRegistry.defaultElements.register("ImageSet", ImageSet);
registry_1.GlobalRegistry.defaultElements.register("Media", Media, serialization_1.Versions.v1_1);
registry_1.GlobalRegistry.defaultElements.register("FactSet", FactSet);
registry_1.GlobalRegistry.defaultElements.register("ColumnSet", ColumnSet);
registry_1.GlobalRegistry.defaultElements.register("ActionSet", ActionSet, serialization_1.Versions.v1_2);
registry_1.GlobalRegistry.defaultElements.register("Input.Text", TextInput);
registry_1.GlobalRegistry.defaultElements.register("Input.Date", DateInput);
registry_1.GlobalRegistry.defaultElements.register("Input.Time", TimeInput);
registry_1.GlobalRegistry.defaultElements.register("Input.Number", NumberInput);
registry_1.GlobalRegistry.defaultElements.register("Input.ChoiceSet", ChoiceSetInput);
registry_1.GlobalRegistry.defaultElements.register("Input.Toggle", ToggleInput);
registry_1.GlobalRegistry.defaultActions.register(OpenUrlAction.JsonTypeName, OpenUrlAction);
registry_1.GlobalRegistry.defaultActions.register(SubmitAction.JsonTypeName, SubmitAction);
registry_1.GlobalRegistry.defaultActions.register(ShowCardAction.JsonTypeName, ShowCardAction);
registry_1.GlobalRegistry.defaultActions.register(ToggleVisibilityAction.JsonTypeName, ToggleVisibilityAction, serialization_1.Versions.v1_2);
registry_1.GlobalRegistry.defaultActions.register(ExecuteAction.JsonTypeName, ExecuteAction, serialization_1.Versions.v1_4);


/***/ }),

/***/ "./src/card-object.ts":
/*!****************************!*\
  !*** ./src/card-object.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardObject = exports.ValidationResults = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var strings_1 = __webpack_require__(/*! ./strings */ "./src/strings.ts");
var shared_1 = __webpack_require__(/*! ./shared */ "./src/shared.ts");
var host_capabilities_1 = __webpack_require__(/*! ./host-capabilities */ "./src/host-capabilities.ts");
var serialization_1 = __webpack_require__(/*! ./serialization */ "./src/serialization.ts");
var ValidationResults = /** @class */ (function () {
    function ValidationResults() {
        this.allIds = {};
        this.validationEvents = [];
    }
    ValidationResults.prototype.addFailure = function (cardObject, event, message) {
        this.validationEvents.push({
            phase: Enums.ValidationPhase.Validation,
            source: cardObject,
            event: event,
            message: message
        });
    };
    return ValidationResults;
}());
exports.ValidationResults = ValidationResults;
var CardObject = /** @class */ (function (_super) {
    __extends(CardObject, _super);
    function CardObject() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //#endregion
        _this._shouldFallback = false;
        return _this;
    }
    CardObject.prototype.getSchemaKey = function () {
        return this.getJsonTypeName();
    };
    Object.defineProperty(CardObject.prototype, "requires", {
        get: function () {
            return this.getValue(CardObject.requiresProperty);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Checks if this CardObject contains the given DOM Node.
     * @param node The DOM Node to look for.
     * @returns `true` if the DOM Node was found, `false` otherwise.
     */
    CardObject.prototype.contains = function (node) {
        if (this._renderedElement) {
            return this._renderedElement.contains(node);
        }
        return false;
    };
    CardObject.prototype.preProcessPropertyValue = function (property, propertyValue) {
        var value = propertyValue === undefined ? this.getValue(property) : propertyValue;
        if (shared_1.GlobalSettings.allowPreProcessingPropertyValues) {
            var currentObject = this;
            while (currentObject && !currentObject.onPreProcessPropertyValue) {
                currentObject = currentObject.parent;
            }
            if (currentObject && currentObject.onPreProcessPropertyValue) {
                return currentObject.onPreProcessPropertyValue(this, property, value);
            }
        }
        return value;
    };
    CardObject.prototype.setParent = function (value) {
        this._parent = value;
    };
    CardObject.prototype.setShouldFallback = function (value) {
        this._shouldFallback = value;
    };
    CardObject.prototype.shouldFallback = function () {
        return this._shouldFallback || !this.requires.areAllMet(this.hostConfig.hostCapabilities);
    };
    CardObject.prototype.getRootObject = function () {
        var rootObject = this;
        while (rootObject.parent) {
            rootObject = rootObject.parent;
        }
        return rootObject;
    };
    CardObject.prototype.internalValidateProperties = function (context) {
        if (this.id) {
            if (context.allIds.hasOwnProperty(this.id)) {
                if (context.allIds[this.id] == 1) {
                    context.addFailure(this, Enums.ValidationEvent.DuplicateId, strings_1.Strings.errors.duplicateId(this.id));
                }
                context.allIds[this.id] += 1;
            }
            else {
                context.allIds[this.id] = 1;
            }
        }
    };
    CardObject.prototype.validateProperties = function () {
        var result = new ValidationResults();
        this.internalValidateProperties(result);
        return result;
    };
    /**
     * Recursively searches this CardObject and any children to find the
     * innermost CardObject that owns the given DOM Node.
     *
     * @param node The DOM Node to look for.
     *
     * @returns The owner of the given DOM Node, or `undefined` if no owner was found.
     */
    CardObject.prototype.findDOMNodeOwner = function (node) {
        // default implementation for CardObjects with no associated children
        return this.contains(node) ? this : undefined;
    };
    Object.defineProperty(CardObject.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "renderedElement", {
        get: function () {
            return this._renderedElement;
        },
        enumerable: false,
        configurable: true
    });
    CardObject.typeNameProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "type", undefined, undefined, undefined, function (sender) {
        return sender.getJsonTypeName();
    });
    CardObject.idProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "id");
    CardObject.requiresProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_2, "requires", host_capabilities_1.HostCapabilities, false, new host_capabilities_1.HostCapabilities());
    __decorate([
        (0, serialization_1.property)(CardObject.idProperty)
    ], CardObject.prototype, "id", void 0);
    __decorate([
        (0, serialization_1.property)(CardObject.requiresProperty)
    ], CardObject.prototype, "requires", null);
    return CardObject;
}(serialization_1.SerializableObject));
exports.CardObject = CardObject;


/***/ }),

/***/ "./src/channel-adapter.ts":
/*!********************************!*\
  !*** ./src/channel-adapter.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelAdapter = void 0;
var ChannelAdapter = /** @class */ (function () {
    function ChannelAdapter() {
    }
    return ChannelAdapter;
}());
exports.ChannelAdapter = ChannelAdapter;


/***/ }),

/***/ "./src/controls/collection.ts":
/*!************************************!*\
  !*** ./src/controls/collection.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Collection = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Collection = /** @class */ (function () {
    function Collection() {
        this._items = [];
    }
    Collection.prototype.get = function (index) {
        return this._items[index];
    };
    Collection.prototype.add = function (item) {
        this._items.push(item);
        if (this.onItemAdded) {
            this.onItemAdded(item);
        }
    };
    Collection.prototype.remove = function (item) {
        var i = this._items.indexOf(item);
        if (i >= 0) {
            this._items = this._items.splice(i, 1);
            if (this.onItemRemoved) {
                this.onItemRemoved(item);
            }
        }
    };
    Collection.prototype.indexOf = function (item) {
        return this._items.indexOf(item);
    };
    Object.defineProperty(Collection.prototype, "length", {
        get: function () {
            return this._items.length;
        },
        enumerable: false,
        configurable: true
    });
    return Collection;
}());
exports.Collection = Collection;


/***/ }),

/***/ "./src/controls/constants.ts":
/*!***********************************!*\
  !*** ./src/controls/constants.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Constants = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.keys = {
        tab: "Tab",
        enter: "Enter",
        escape: "Escape",
        space: " ",
        up: "ArrowUp",
        down: "ArrowDown",
        delete: "Delete"
    };
    return Constants;
}());
exports.Constants = Constants;


/***/ }),

/***/ "./src/controls/index.ts":
/*!*******************************!*\
  !*** ./src/controls/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./menu-item */ "./src/controls/menu-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./popup-menu */ "./src/controls/popup-menu.ts"), exports);


/***/ }),

/***/ "./src/controls/menu-item.ts":
/*!***********************************!*\
  !*** ./src/controls/menu-item.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuItem = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var host_config_1 = __webpack_require__(/*! ../host-config */ "./src/host-config.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./src/controls/constants.ts");
var MenuItem = /** @class */ (function () {
    function MenuItem(key, value) {
        this._isEnabled = true;
        this.key = key;
        this._value = value;
    }
    MenuItem.prototype.click = function () {
        if (this.isEnabled && this.onClick) {
            this.onClick(this);
        }
    };
    MenuItem.prototype.updateCssClasses = function () {
        if (this._element) {
            var effectiveHostConfig = this._hostConfig ? this._hostConfig : host_config_1.defaultHostConfig;
            this._element.className = effectiveHostConfig.makeCssClassName("ac-ctrl");
            this._element.classList.add(effectiveHostConfig.makeCssClassName(this.isEnabled ? "ac-ctrl-dropdown-item" : "ac-ctrl-dropdown-item-disabled"));
            if (!this.isEnabled) {
                this._element.classList.add(effectiveHostConfig.makeCssClassName("ac-disabled"));
            }
        }
    };
    MenuItem.prototype.toString = function () {
        return this.value;
    };
    MenuItem.prototype.render = function (hostConfig) {
        var _this = this;
        this._hostConfig = hostConfig;
        if (!this._element) {
            this._element = document.createElement("span");
            this._element.innerText = this.value;
            this._element.setAttribute("role", "menuitem");
            if (!this.isEnabled) {
                this._element.setAttribute("aria-disabled", "true");
            }
            this._element.setAttribute("aria-selected", "false");
            this._element.onmouseup = function (e) { _this.click(); };
            this._element.onkeydown = function (e) {
                if (e.key === constants_1.Constants.keys.enter) {
                    e.cancelBubble = true;
                    _this.click();
                }
            };
            this.updateCssClasses();
        }
        return this._element;
    };
    Object.defineProperty(MenuItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            this._value = newValue;
            if (this._element) {
                this._element.innerText = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MenuItem.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            if (this._isEnabled !== value) {
                this._isEnabled = value;
                this.updateCssClasses();
            }
        },
        enumerable: false,
        configurable: true
    });
    return MenuItem;
}());
exports.MenuItem = MenuItem;


/***/ }),

/***/ "./src/controls/popup-control.ts":
/*!***************************************!*\
  !*** ./src/controls/popup-control.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupControl = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var constants_1 = __webpack_require__(/*! ./constants */ "./src/controls/constants.ts");
var Utils = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var host_config_1 = __webpack_require__(/*! ../host-config */ "./src/host-config.ts");
var PopupControl = /** @class */ (function () {
    function PopupControl() {
        this._isOpen = false;
    }
    PopupControl.prototype.keyDown = function (e) {
        switch (e.key) {
            case constants_1.Constants.keys.escape:
                this.closePopup(true);
                break;
        }
    };
    PopupControl.prototype.render = function (rootElementBounds) {
        var _this = this;
        var element = document.createElement("div");
        element.tabIndex = 0;
        element.className = this.hostConfig.makeCssClassName("ac-ctrl", "ac-ctrl-popup-container");
        element.setAttribute("role", "dialog");
        element.setAttribute("aria-modal", "true");
        element.onkeydown = function (e) {
            _this.keyDown(e);
            return !e.cancelBubble;
        };
        element.appendChild(this.renderContent());
        return element;
    };
    PopupControl.prototype.focus = function () {
        if (this._popupElement) {
            this._popupElement.firstElementChild.focus();
        }
    };
    PopupControl.prototype.popup = function (rootElement) {
        var _a, _b, _c, _d, _e;
        var _this = this;
        if (!this._isOpen) {
            this._overlayElement = document.createElement("div");
            this._overlayElement.className = this.hostConfig.makeCssClassName("ac-ctrl-overlay");
            this._overlayElement.tabIndex = 0;
            this._overlayElement.style.width = document.documentElement.scrollWidth + "px";
            this._overlayElement.style.height = document.documentElement.scrollHeight + "px";
            this._overlayElement.onfocus = function (e) { _this.closePopup(true); };
            document.body.appendChild(this._overlayElement);
            var rootElementBounds = rootElement.getBoundingClientRect();
            this._popupElement = this.render(rootElementBounds);
            (_a = this._popupElement.classList).remove.apply(_a, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideLeftToRight", "ac-ctrl-slideRightToLeft", "ac-ctrl-slideTopToBottom", "ac-ctrl-slideRightToLeft"));
            window.addEventListener("resize", function (e) { _this.closePopup(true); });
            var rootElementLabel = rootElement.getAttribute("aria-label");
            if (rootElementLabel) {
                this._popupElement.setAttribute("aria-label", rootElementLabel);
            }
            this._overlayElement.appendChild(this._popupElement);
            var popupElementBounds = this._popupElement.getBoundingClientRect();
            var availableSpaceBelow = window.innerHeight - rootElementBounds.bottom;
            var availableSpaceAbove = rootElementBounds.top;
            var availableSpaceRight = window.innerWidth - rootElementBounds.left;
            var availableSpaceRight = window.innerWidth - rootElementBounds.right;
            var availableSpaceLeft = rootElementBounds.left;
            var left = rootElementBounds.left + Utils.getScrollX();
            var top;
            if (availableSpaceAbove < popupElementBounds.height && availableSpaceBelow < popupElementBounds.height) {
                // Not enough space above or below root element
                var actualPopupHeight = Math.min(popupElementBounds.height, window.innerHeight);
                this._popupElement.style.maxHeight = actualPopupHeight + "px";
                if (actualPopupHeight < popupElementBounds.height) {
                    top = Utils.getScrollY();
                }
                else {
                    top = Utils.getScrollY() + rootElementBounds.top + (rootElementBounds.height - actualPopupHeight) / 2;
                }
                if (availableSpaceLeft < popupElementBounds.width && availableSpaceRight < popupElementBounds.width) {
                    // Not enough space left or right of root element
                    var actualPopupWidth = Math.min(popupElementBounds.width, window.innerWidth);
                    this._popupElement.style.maxWidth = actualPopupWidth + "px";
                    if (actualPopupWidth < popupElementBounds.width) {
                        left = Utils.getScrollX();
                    }
                    else {
                        left = Utils.getScrollX() + rootElementBounds.left + (rootElementBounds.width - actualPopupWidth) / 2;
                    }
                }
                else {
                    // Enough space on the left or right of the root element
                    if (availableSpaceRight >= popupElementBounds.width) {
                        left = Utils.getScrollX() + rootElementBounds.right;
                        (_b = this._popupElement.classList).add.apply(_b, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideLeftToRight"));
                    }
                    else {
                        left = Utils.getScrollX() + rootElementBounds.left - popupElementBounds.width;
                        (_c = this._popupElement.classList).add.apply(_c, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideRightToLeft"));
                    }
                }
            }
            else {
                // Enough space above or below root element
                if (availableSpaceBelow >= popupElementBounds.height) {
                    top = Utils.getScrollY() + rootElementBounds.bottom;
                    (_d = this._popupElement.classList).add.apply(_d, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideTopToBottom"));
                }
                else {
                    top = Utils.getScrollY() + rootElementBounds.top - popupElementBounds.height;
                    (_e = this._popupElement.classList).add.apply(_e, this.hostConfig.makeCssClassNames("ac-ctrl-slide", "ac-ctrl-slideBottomToTop"));
                }
                if (availableSpaceRight < popupElementBounds.width) {
                    left = Utils.getScrollX() + rootElementBounds.right - popupElementBounds.width;
                }
            }
            this._popupElement.style.left = left + "px";
            this._popupElement.style.top = top + "px";
            this._popupElement.focus();
            this._isOpen = true;
        }
    };
    PopupControl.prototype.closePopup = function (wasCancelled) {
        if (this._isOpen) {
            document.body.removeChild(this._overlayElement);
            this._isOpen = false;
            if (this.onClose) {
                this.onClose(this, wasCancelled);
            }
        }
    };
    Object.defineProperty(PopupControl.prototype, "hostConfig", {
        get: function () {
            return this._hostConfig ? this._hostConfig : host_config_1.defaultHostConfig;
        },
        set: function (value) {
            this._hostConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PopupControl.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        enumerable: false,
        configurable: true
    });
    return PopupControl;
}());
exports.PopupControl = PopupControl;


/***/ }),

/***/ "./src/controls/popup-menu.ts":
/*!************************************!*\
  !*** ./src/controls/popup-menu.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupMenu = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var constants_1 = __webpack_require__(/*! ./constants */ "./src/controls/constants.ts");
var collection_1 = __webpack_require__(/*! ./collection */ "./src/controls/collection.ts");
var popup_control_1 = __webpack_require__(/*! ./popup-control */ "./src/controls/popup-control.ts");
var PopupMenu = /** @class */ (function (_super) {
    __extends(PopupMenu, _super);
    function PopupMenu() {
        var _this = _super.call(this) || this;
        _this._items = new collection_1.Collection();
        _this._renderedItems = [];
        _this._selectedIndex = -1;
        return _this;
    }
    PopupMenu.prototype.renderContent = function () {
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-ctrl ac-popup");
        element.setAttribute("role", "listbox");
        for (var i = 0; i < this._items.length; i++) {
            var renderedItem = this._items.get(i).render(this.hostConfig);
            renderedItem.tabIndex = 0;
            element.appendChild(renderedItem);
            if (i == this.selectedIndex) {
                renderedItem.focus();
            }
            this._renderedItems.push(renderedItem);
        }
        return element;
    };
    PopupMenu.prototype.keyDown = function (e) {
        _super.prototype.keyDown.call(this, e);
        var selectedItemIndex = this._selectedIndex;
        switch (e.key) {
            case constants_1.Constants.keys.tab:
                this.closePopup(true);
                break;
            /*
            case Constants.keys.enter:
                if (this.selectedIndex >= 0) {
                    this.selectedIndex = this.selectedIndex;

                    this.close();
                }

                break;
            */
            case constants_1.Constants.keys.up:
                if (selectedItemIndex <= 0) {
                    selectedItemIndex = this._renderedItems.length - 1;
                }
                else {
                    selectedItemIndex--;
                    if (selectedItemIndex < 0) {
                        selectedItemIndex = this._renderedItems.length - 1;
                    }
                }
                this.selectedIndex = selectedItemIndex;
                e.cancelBubble = true;
                break;
            case constants_1.Constants.keys.down:
                if (selectedItemIndex < 0) {
                    selectedItemIndex = 0;
                }
                else {
                    selectedItemIndex++;
                    if (selectedItemIndex >= this._renderedItems.length) {
                        selectedItemIndex = 0;
                    }
                }
                this.selectedIndex = selectedItemIndex;
                e.cancelBubble = true;
                break;
        }
    };
    Object.defineProperty(PopupMenu.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PopupMenu.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (index) {
            if (index >= 0 && index < this._renderedItems.length) {
                this._renderedItems[index].focus();
                this._selectedIndex = index;
            }
        },
        enumerable: false,
        configurable: true
    });
    return PopupMenu;
}(popup_control_1.PopupControl));
exports.PopupMenu = PopupMenu;


/***/ }),

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogLevel = exports.RefreshMode = exports.TypeErrorType = exports.ContainerFitStatus = exports.ValidationEvent = exports.ValidationPhase = exports.ContainerStyle = exports.InputTextStyle = exports.ActionIconPlacement = exports.FillMode = exports.Orientation = exports.ShowCardActionMode = exports.ImageStyle = exports.ActionAlignment = exports.VerticalAlignment = exports.HorizontalAlignment = exports.TextColor = exports.Spacing = exports.FontType = exports.TextWeight = exports.TextSize = exports.SizeUnit = exports.ImageSize = exports.Size = exports.ActionMode = exports.ActionStyle = void 0;
// Note the "weird" way these readonly fields are declared is to work around
// a breaking change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
// and adopt this syntax for all other static readonly fields.
var ActionStyle = /** @class */ (function () {
    function ActionStyle() {
    }
    ActionStyle.Default = "default";
    ActionStyle.Positive = "positive";
    ActionStyle.Destructive = "destructive";
    return ActionStyle;
}());
exports.ActionStyle = ActionStyle;
var ActionMode = /** @class */ (function () {
    function ActionMode() {
    }
    ActionMode.Primary = "primary";
    ActionMode.Secondary = "secondary";
    return ActionMode;
}());
exports.ActionMode = ActionMode;
var Size;
(function (Size) {
    Size[Size["Auto"] = 0] = "Auto";
    Size[Size["Stretch"] = 1] = "Stretch";
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(Size = exports.Size || (exports.Size = {}));
var ImageSize;
(function (ImageSize) {
    ImageSize[ImageSize["Small"] = 0] = "Small";
    ImageSize[ImageSize["Medium"] = 1] = "Medium";
    ImageSize[ImageSize["Large"] = 2] = "Large";
})(ImageSize = exports.ImageSize || (exports.ImageSize = {}));
var SizeUnit;
(function (SizeUnit) {
    SizeUnit[SizeUnit["Weight"] = 0] = "Weight";
    SizeUnit[SizeUnit["Pixel"] = 1] = "Pixel";
})(SizeUnit = exports.SizeUnit || (exports.SizeUnit = {}));
var TextSize;
(function (TextSize) {
    TextSize[TextSize["Small"] = 0] = "Small";
    TextSize[TextSize["Default"] = 1] = "Default";
    TextSize[TextSize["Medium"] = 2] = "Medium";
    TextSize[TextSize["Large"] = 3] = "Large";
    TextSize[TextSize["ExtraLarge"] = 4] = "ExtraLarge";
})(TextSize = exports.TextSize || (exports.TextSize = {}));
var TextWeight;
(function (TextWeight) {
    TextWeight[TextWeight["Lighter"] = 0] = "Lighter";
    TextWeight[TextWeight["Default"] = 1] = "Default";
    TextWeight[TextWeight["Bolder"] = 2] = "Bolder";
})(TextWeight = exports.TextWeight || (exports.TextWeight = {}));
var FontType;
(function (FontType) {
    FontType[FontType["Default"] = 0] = "Default";
    FontType[FontType["Monospace"] = 1] = "Monospace";
})(FontType = exports.FontType || (exports.FontType = {}));
var Spacing;
(function (Spacing) {
    Spacing[Spacing["None"] = 0] = "None";
    Spacing[Spacing["Small"] = 1] = "Small";
    Spacing[Spacing["Default"] = 2] = "Default";
    Spacing[Spacing["Medium"] = 3] = "Medium";
    Spacing[Spacing["Large"] = 4] = "Large";
    Spacing[Spacing["ExtraLarge"] = 5] = "ExtraLarge";
    Spacing[Spacing["Padding"] = 6] = "Padding";
})(Spacing = exports.Spacing || (exports.Spacing = {}));
var TextColor;
(function (TextColor) {
    TextColor[TextColor["Default"] = 0] = "Default";
    TextColor[TextColor["Dark"] = 1] = "Dark";
    TextColor[TextColor["Light"] = 2] = "Light";
    TextColor[TextColor["Accent"] = 3] = "Accent";
    TextColor[TextColor["Good"] = 4] = "Good";
    TextColor[TextColor["Warning"] = 5] = "Warning";
    TextColor[TextColor["Attention"] = 6] = "Attention";
})(TextColor = exports.TextColor || (exports.TextColor = {}));
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
    HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
    HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
    VerticalAlignment[VerticalAlignment["Center"] = 1] = "Center";
    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
var ActionAlignment;
(function (ActionAlignment) {
    ActionAlignment[ActionAlignment["Left"] = 0] = "Left";
    ActionAlignment[ActionAlignment["Center"] = 1] = "Center";
    ActionAlignment[ActionAlignment["Right"] = 2] = "Right";
    ActionAlignment[ActionAlignment["Stretch"] = 3] = "Stretch";
})(ActionAlignment = exports.ActionAlignment || (exports.ActionAlignment = {}));
var ImageStyle;
(function (ImageStyle) {
    ImageStyle[ImageStyle["Default"] = 0] = "Default";
    ImageStyle[ImageStyle["Person"] = 1] = "Person";
})(ImageStyle = exports.ImageStyle || (exports.ImageStyle = {}));
var ShowCardActionMode;
(function (ShowCardActionMode) {
    ShowCardActionMode[ShowCardActionMode["Inline"] = 0] = "Inline";
    ShowCardActionMode[ShowCardActionMode["Popup"] = 1] = "Popup";
})(ShowCardActionMode = exports.ShowCardActionMode || (exports.ShowCardActionMode = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
    Orientation[Orientation["Vertical"] = 1] = "Vertical";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var FillMode;
(function (FillMode) {
    FillMode[FillMode["Cover"] = 0] = "Cover";
    FillMode[FillMode["RepeatHorizontally"] = 1] = "RepeatHorizontally";
    FillMode[FillMode["RepeatVertically"] = 2] = "RepeatVertically";
    FillMode[FillMode["Repeat"] = 3] = "Repeat";
})(FillMode = exports.FillMode || (exports.FillMode = {}));
var ActionIconPlacement;
(function (ActionIconPlacement) {
    ActionIconPlacement[ActionIconPlacement["LeftOfTitle"] = 0] = "LeftOfTitle";
    ActionIconPlacement[ActionIconPlacement["AboveTitle"] = 1] = "AboveTitle";
})(ActionIconPlacement = exports.ActionIconPlacement || (exports.ActionIconPlacement = {}));
var InputTextStyle;
(function (InputTextStyle) {
    InputTextStyle[InputTextStyle["Text"] = 0] = "Text";
    InputTextStyle[InputTextStyle["Tel"] = 1] = "Tel";
    InputTextStyle[InputTextStyle["Url"] = 2] = "Url";
    InputTextStyle[InputTextStyle["Email"] = 3] = "Email";
    InputTextStyle[InputTextStyle["Password"] = 4] = "Password";
})(InputTextStyle = exports.InputTextStyle || (exports.InputTextStyle = {}));
/*
    This should really be a string enum, e.g.

        export enum ContainerStyle {
            Default = "default",
            Emphasis = "emphasis"
        }

    However, some hosts do not use a version of TypeScript
    recent enough to understand string enums. This is
    a compatible construct that does not require using
    a more recent version of TypeScript.

    Also note the "weird" way these readonly fields are declared is to work around
    a breaking change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    and adopt this syntax for all other static readonly fields.
*/
var ContainerStyle = /** @class */ (function () {
    function ContainerStyle() {
    }
    ContainerStyle.Default = "default";
    ContainerStyle.Emphasis = "emphasis";
    ContainerStyle.Accent = "accent";
    ContainerStyle.Good = "good";
    ContainerStyle.Attention = "attention";
    ContainerStyle.Warning = "warning";
    return ContainerStyle;
}());
exports.ContainerStyle = ContainerStyle;
var ValidationPhase;
(function (ValidationPhase) {
    ValidationPhase[ValidationPhase["Parse"] = 0] = "Parse";
    ValidationPhase[ValidationPhase["ToJSON"] = 1] = "ToJSON";
    ValidationPhase[ValidationPhase["Validation"] = 2] = "Validation";
})(ValidationPhase = exports.ValidationPhase || (exports.ValidationPhase = {}));
var ValidationEvent;
(function (ValidationEvent) {
    ValidationEvent[ValidationEvent["Hint"] = 0] = "Hint";
    ValidationEvent[ValidationEvent["ActionTypeNotAllowed"] = 1] = "ActionTypeNotAllowed";
    ValidationEvent[ValidationEvent["CollectionCantBeEmpty"] = 2] = "CollectionCantBeEmpty";
    ValidationEvent[ValidationEvent["Deprecated"] = 3] = "Deprecated";
    ValidationEvent[ValidationEvent["ElementTypeNotAllowed"] = 4] = "ElementTypeNotAllowed";
    ValidationEvent[ValidationEvent["InteractivityNotAllowed"] = 5] = "InteractivityNotAllowed";
    ValidationEvent[ValidationEvent["InvalidPropertyValue"] = 6] = "InvalidPropertyValue";
    ValidationEvent[ValidationEvent["MissingCardType"] = 7] = "MissingCardType";
    ValidationEvent[ValidationEvent["PropertyCantBeNull"] = 8] = "PropertyCantBeNull";
    ValidationEvent[ValidationEvent["TooManyActions"] = 9] = "TooManyActions";
    ValidationEvent[ValidationEvent["UnknownActionType"] = 10] = "UnknownActionType";
    ValidationEvent[ValidationEvent["UnknownElementType"] = 11] = "UnknownElementType";
    ValidationEvent[ValidationEvent["UnsupportedCardVersion"] = 12] = "UnsupportedCardVersion";
    ValidationEvent[ValidationEvent["DuplicateId"] = 13] = "DuplicateId";
    ValidationEvent[ValidationEvent["UnsupportedProperty"] = 14] = "UnsupportedProperty";
    ValidationEvent[ValidationEvent["RequiredInputsShouldHaveLabel"] = 15] = "RequiredInputsShouldHaveLabel";
    ValidationEvent[ValidationEvent["RequiredInputsShouldHaveErrorMessage"] = 16] = "RequiredInputsShouldHaveErrorMessage";
    ValidationEvent[ValidationEvent["Other"] = 17] = "Other";
})(ValidationEvent = exports.ValidationEvent || (exports.ValidationEvent = {}));
var ContainerFitStatus;
(function (ContainerFitStatus) {
    ContainerFitStatus[ContainerFitStatus["FullyInContainer"] = 0] = "FullyInContainer";
    ContainerFitStatus[ContainerFitStatus["Overflowing"] = 1] = "Overflowing";
    ContainerFitStatus[ContainerFitStatus["FullyOutOfContainer"] = 2] = "FullyOutOfContainer";
})(ContainerFitStatus = exports.ContainerFitStatus || (exports.ContainerFitStatus = {}));
var TypeErrorType;
(function (TypeErrorType) {
    TypeErrorType[TypeErrorType["UnknownType"] = 0] = "UnknownType";
    TypeErrorType[TypeErrorType["ForbiddenType"] = 1] = "ForbiddenType";
})(TypeErrorType = exports.TypeErrorType || (exports.TypeErrorType = {}));
var RefreshMode;
(function (RefreshMode) {
    RefreshMode[RefreshMode["Disabled"] = 0] = "Disabled";
    RefreshMode[RefreshMode["Manual"] = 1] = "Manual";
    RefreshMode[RefreshMode["Automatic"] = 2] = "Automatic";
})(RefreshMode = exports.RefreshMode || (exports.RefreshMode = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 0] = "Info";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Error"] = 2] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));


/***/ }),

/***/ "./src/host-capabilities.ts":
/*!**********************************!*\
  !*** ./src/host-capabilities.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HostCapabilities = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var serialization_1 = __webpack_require__(/*! ./serialization */ "./src/serialization.ts");
var HostCapabilities = /** @class */ (function (_super) {
    __extends(HostCapabilities, _super);
    function HostCapabilities() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._capabilities = {};
        return _this;
    }
    HostCapabilities.prototype.getSchemaKey = function () {
        return "HostCapabilities";
    };
    HostCapabilities.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        if (source) {
            for (var name_1 in source) {
                var jsonVersion = source[name_1];
                if (typeof jsonVersion === "string") {
                    if (jsonVersion == "*") {
                        this.addCapability(name_1, "*");
                    }
                    else {
                        var version = serialization_1.Version.parse(jsonVersion, context);
                        if (version && version.isValid) {
                            this.addCapability(name_1, version);
                        }
                    }
                }
            }
        }
    };
    HostCapabilities.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        for (var key in this._capabilities) {
            target[key] = this._capabilities[key];
        }
    };
    HostCapabilities.prototype.addCapability = function (name, version) {
        this._capabilities[name] = version;
    };
    HostCapabilities.prototype.removeCapability = function (name) {
        delete this._capabilities[name];
    };
    HostCapabilities.prototype.clear = function () {
        this._capabilities = {};
    };
    HostCapabilities.prototype.hasCapability = function (name, version) {
        if (this._capabilities.hasOwnProperty(name)) {
            if (version == "*" || this._capabilities[name] == "*") {
                return true;
            }
            return version.compareTo(this._capabilities[name]) <= 0;
        }
        return false;
    };
    HostCapabilities.prototype.areAllMet = function (hostCapabilities) {
        for (var capabilityName in this._capabilities) {
            if (!hostCapabilities.hasCapability(capabilityName, this._capabilities[capabilityName])) {
                return false;
            }
        }
        return true;
    };
    return HostCapabilities;
}(serialization_1.SerializableObject));
exports.HostCapabilities = HostCapabilities;


/***/ }),

/***/ "./src/host-config.ts":
/*!****************************!*\
  !*** ./src/host-config.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultHostConfig = exports.HostConfig = exports.FontTypeSet = exports.FontTypeDefinition = exports.ContainerStyleSet = exports.ContainerStyleDefinition = exports.ColorSetDefinition = exports.ActionsConfig = exports.ShowCardActionConfig = exports.FactSetConfig = exports.FactTitleDefinition = exports.FactTextDefinition = exports.InputConfig = exports.InputLabelConfig = exports.RequiredInputLabelTextDefinition = exports.TextBlockConfig = exports.TextStyleSet = exports.TextStyleDefinition = exports.BaseTextDefinition = exports.TableConfig = exports.MediaConfig = exports.ImageSetConfig = exports.AdaptiveCardConfig = exports.TextColorDefinition = exports.ColorDefinition = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var Utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Shared = __webpack_require__(/*! ./shared */ "./src/shared.ts");
var host_capabilities_1 = __webpack_require__(/*! ./host-capabilities */ "./src/host-capabilities.ts");
function parseHostConfigEnum(targetEnum, value, defaultValue) {
    if (typeof value === "string") {
        var parsedValue = Utils.parseEnum(targetEnum, value, defaultValue);
        return parsedValue !== undefined ? parsedValue : defaultValue;
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return defaultValue;
    }
}
var ColorDefinition = /** @class */ (function () {
    function ColorDefinition(defaultColor, subtleColor) {
        this.default = "#000000";
        this.subtle = "#666666";
        if (defaultColor) {
            this.default = defaultColor;
        }
        if (subtleColor) {
            this.subtle = subtleColor;
        }
    }
    ColorDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.default = obj["default"] || this.default;
            this.subtle = obj["subtle"] || this.subtle;
        }
    };
    return ColorDefinition;
}());
exports.ColorDefinition = ColorDefinition;
var TextColorDefinition = /** @class */ (function (_super) {
    __extends(TextColorDefinition, _super);
    function TextColorDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.highlightColors = new ColorDefinition("#22000000", "#11000000");
        return _this;
    }
    TextColorDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.highlightColors.parse(obj["highlightColors"]);
        }
    };
    return TextColorDefinition;
}(ColorDefinition));
exports.TextColorDefinition = TextColorDefinition;
var AdaptiveCardConfig = /** @class */ (function () {
    function AdaptiveCardConfig(obj) {
        this.allowCustomStyle = false;
        if (obj) {
            this.allowCustomStyle = obj["allowCustomStyle"] || this.allowCustomStyle;
        }
    }
    return AdaptiveCardConfig;
}());
exports.AdaptiveCardConfig = AdaptiveCardConfig;
var ImageSetConfig = /** @class */ (function () {
    function ImageSetConfig(obj) {
        this.imageSize = Enums.Size.Medium;
        this.maxImageHeight = 100;
        if (obj) {
            this.imageSize = obj["imageSize"] != null ? obj["imageSize"] : this.imageSize;
            this.maxImageHeight = Utils.parseNumber(obj["maxImageHeight"], 100);
        }
    }
    ImageSetConfig.prototype.toJSON = function () {
        return {
            imageSize: Enums.Size[this.imageSize],
            maxImageHeight: this.maxImageHeight
        };
    };
    return ImageSetConfig;
}());
exports.ImageSetConfig = ImageSetConfig;
var MediaConfig = /** @class */ (function () {
    function MediaConfig(obj) {
        this.allowInlinePlayback = true;
        if (obj) {
            this.defaultPoster = obj["defaultPoster"];
            this.allowInlinePlayback = obj["allowInlinePlayback"] || this.allowInlinePlayback;
        }
    }
    MediaConfig.prototype.toJSON = function () {
        return {
            defaultPoster: this.defaultPoster,
            allowInlinePlayback: this.allowInlinePlayback
        };
    };
    return MediaConfig;
}());
exports.MediaConfig = MediaConfig;
var TableConfig = /** @class */ (function () {
    function TableConfig(obj) {
        this.cellSpacing = 8;
        if (obj) {
            this.cellSpacing = obj.cellSpacing && typeof obj.cellSpacing === "number" ? obj.cellSpacing : this.cellSpacing;
        }
    }
    TableConfig.prototype.toJSON = function () {
        return {
            cellSpacing: this.cellSpacing
        };
    };
    return TableConfig;
}());
exports.TableConfig = TableConfig;
var BaseTextDefinition = /** @class */ (function () {
    function BaseTextDefinition(obj) {
        this.size = Enums.TextSize.Default;
        this.color = Enums.TextColor.Default;
        this.isSubtle = false;
        this.weight = Enums.TextWeight.Default;
        this.parse(obj);
    }
    ;
    BaseTextDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.size = parseHostConfigEnum(Enums.TextSize, obj["size"], this.size);
            this.color = parseHostConfigEnum(Enums.TextColor, obj["color"], this.color);
            this.isSubtle = obj.isSubtle !== undefined && typeof obj.isSubtle === "boolean" ? obj.isSubtle : this.isSubtle;
            this.weight = parseHostConfigEnum(Enums.TextWeight, obj["weight"], this.getDefaultWeight());
        }
    };
    BaseTextDefinition.prototype.getDefaultWeight = function () {
        return Enums.TextWeight.Default;
    };
    BaseTextDefinition.prototype.toJSON = function () {
        return {
            size: Enums.TextSize[this.size],
            color: Enums.TextColor[this.color],
            isSubtle: this.isSubtle,
            weight: Enums.TextWeight[this.weight]
        };
    };
    return BaseTextDefinition;
}());
exports.BaseTextDefinition = BaseTextDefinition;
var TextStyleDefinition = /** @class */ (function (_super) {
    __extends(TextStyleDefinition, _super);
    function TextStyleDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fontType = Enums.FontType.Default;
        return _this;
    }
    TextStyleDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.fontType = parseHostConfigEnum(Enums.FontType, obj.fontType, this.fontType);
        }
    };
    return TextStyleDefinition;
}(BaseTextDefinition));
exports.TextStyleDefinition = TextStyleDefinition;
var TextStyleSet = /** @class */ (function () {
    function TextStyleSet(obj) {
        this.default = new TextStyleDefinition();
        this.heading = new TextStyleDefinition({
            size: "Large",
            weight: "Bolder"
        });
        this.columnHeader = new TextStyleDefinition({
            weight: "Bolder"
        });
        if (obj) {
            this.heading.parse(obj.heading);
            this.columnHeader.parse(obj.columnHeader);
        }
    }
    TextStyleSet.prototype.getStyleByName = function (name) {
        switch (name.toLowerCase()) {
            case "heading":
                return this.heading;
            case "columnHeader":
                return this.columnHeader;
            default:
                return this.default;
        }
    };
    return TextStyleSet;
}());
exports.TextStyleSet = TextStyleSet;
var TextBlockConfig = /** @class */ (function () {
    function TextBlockConfig(obj) {
        if (obj) {
            this.headingLevel = Utils.parseNumber(obj.headingLevel);
        }
    }
    return TextBlockConfig;
}());
exports.TextBlockConfig = TextBlockConfig;
var RequiredInputLabelTextDefinition = /** @class */ (function (_super) {
    __extends(RequiredInputLabelTextDefinition, _super);
    function RequiredInputLabelTextDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suffix = " *";
        _this.suffixColor = Enums.TextColor.Attention;
        return _this;
    }
    RequiredInputLabelTextDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.suffix = obj["suffix"] || this.suffix;
            this.suffixColor = parseHostConfigEnum(Enums.TextColor, obj["suffixColor"], this.suffixColor);
        }
    };
    RequiredInputLabelTextDefinition.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        result["suffix"] = this.suffix;
        result["suffixColor"] = Enums.TextColor[this.suffixColor];
        return result;
    };
    return RequiredInputLabelTextDefinition;
}(BaseTextDefinition));
exports.RequiredInputLabelTextDefinition = RequiredInputLabelTextDefinition;
var InputLabelConfig = /** @class */ (function () {
    function InputLabelConfig(obj) {
        this.inputSpacing = Enums.Spacing.Small;
        this.requiredInputs = new RequiredInputLabelTextDefinition();
        this.optionalInputs = new BaseTextDefinition();
        if (obj) {
            this.inputSpacing = parseHostConfigEnum(Enums.Spacing, obj["inputSpacing"], this.inputSpacing);
            this.requiredInputs = new RequiredInputLabelTextDefinition(obj["requiredInputs"]);
            this.optionalInputs = new BaseTextDefinition(obj["optionalInputs"]);
        }
    }
    return InputLabelConfig;
}());
exports.InputLabelConfig = InputLabelConfig;
var InputConfig = /** @class */ (function () {
    function InputConfig(obj) {
        this.label = new InputLabelConfig();
        this.errorMessage = new BaseTextDefinition({ color: Enums.TextColor.Attention });
        if (obj) {
            this.label = new InputLabelConfig(obj["label"]);
            this.errorMessage = new BaseTextDefinition(obj["errorMessage"]);
        }
    }
    return InputConfig;
}());
exports.InputConfig = InputConfig;
var FactTextDefinition = /** @class */ (function (_super) {
    __extends(FactTextDefinition, _super);
    function FactTextDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrap = true;
        return _this;
    }
    FactTextDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.wrap = obj["wrap"] != null ? obj["wrap"] : this.wrap;
        }
    };
    FactTextDefinition.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        result["wrap"] = this.wrap;
        return result;
    };
    return FactTextDefinition;
}(BaseTextDefinition));
exports.FactTextDefinition = FactTextDefinition;
var FactTitleDefinition = /** @class */ (function (_super) {
    __extends(FactTitleDefinition, _super);
    function FactTitleDefinition(obj) {
        var _this = _super.call(this, obj) || this;
        _this.maxWidth = 150;
        _this.weight = Enums.TextWeight.Bolder;
        if (obj) {
            _this.maxWidth = obj["maxWidth"] != null ? obj["maxWidth"] : _this.maxWidth;
            _this.weight = parseHostConfigEnum(Enums.TextWeight, obj["weight"], Enums.TextWeight.Bolder);
        }
        return _this;
    }
    FactTitleDefinition.prototype.getDefaultWeight = function () {
        return Enums.TextWeight.Bolder;
    };
    return FactTitleDefinition;
}(FactTextDefinition));
exports.FactTitleDefinition = FactTitleDefinition;
var FactSetConfig = /** @class */ (function () {
    function FactSetConfig(obj) {
        this.title = new FactTitleDefinition();
        this.value = new FactTextDefinition();
        this.spacing = 10;
        if (obj) {
            this.title = new FactTitleDefinition(obj["title"]);
            this.value = new FactTextDefinition(obj["value"]);
            this.spacing = obj.spacing && obj.spacing != null ? obj.spacing && obj.spacing : this.spacing;
        }
    }
    return FactSetConfig;
}());
exports.FactSetConfig = FactSetConfig;
var ShowCardActionConfig = /** @class */ (function () {
    function ShowCardActionConfig(obj) {
        this.actionMode = Enums.ShowCardActionMode.Inline;
        this.inlineTopMargin = 16;
        this.style = Enums.ContainerStyle.Emphasis;
        if (obj) {
            this.actionMode = parseHostConfigEnum(Enums.ShowCardActionMode, obj["actionMode"], Enums.ShowCardActionMode.Inline);
            this.inlineTopMargin = obj["inlineTopMargin"] != null ? obj["inlineTopMargin"] : this.inlineTopMargin;
            this.style = obj["style"] && typeof obj["style"] === "string" ? obj["style"] : Enums.ContainerStyle.Emphasis;
        }
    }
    ShowCardActionConfig.prototype.toJSON = function () {
        return {
            actionMode: Enums.ShowCardActionMode[this.actionMode],
            inlineTopMargin: this.inlineTopMargin,
            style: this.style
        };
    };
    return ShowCardActionConfig;
}());
exports.ShowCardActionConfig = ShowCardActionConfig;
var ActionsConfig = /** @class */ (function () {
    function ActionsConfig(obj) {
        this.maxActions = 5;
        this.spacing = Enums.Spacing.Default;
        this.buttonSpacing = 20;
        this.showCard = new ShowCardActionConfig();
        this.preExpandSingleShowCardAction = false;
        this.actionsOrientation = Enums.Orientation.Horizontal;
        this.actionAlignment = Enums.ActionAlignment.Left;
        this.iconPlacement = Enums.ActionIconPlacement.LeftOfTitle;
        this.allowTitleToWrap = false;
        this.iconSize = 16;
        if (obj) {
            this.maxActions = obj["maxActions"] != null ? obj["maxActions"] : this.maxActions;
            this.spacing = parseHostConfigEnum(Enums.Spacing, obj.spacing && obj.spacing, Enums.Spacing.Default);
            this.buttonSpacing = obj["buttonSpacing"] != null ? obj["buttonSpacing"] : this.buttonSpacing;
            this.showCard = new ShowCardActionConfig(obj["showCard"]);
            this.preExpandSingleShowCardAction = Utils.parseBool(obj["preExpandSingleShowCardAction"], false);
            this.actionsOrientation = parseHostConfigEnum(Enums.Orientation, obj["actionsOrientation"], Enums.Orientation.Horizontal);
            this.actionAlignment = parseHostConfigEnum(Enums.ActionAlignment, obj["actionAlignment"], Enums.ActionAlignment.Left);
            this.iconPlacement = parseHostConfigEnum(Enums.ActionIconPlacement, obj["iconPlacement"], Enums.ActionIconPlacement.LeftOfTitle);
            this.allowTitleToWrap = obj["allowTitleToWrap"] != null ? obj["allowTitleToWrap"] : this.allowTitleToWrap;
            try {
                var sizeAndUnit = Shared.SizeAndUnit.parse(obj["iconSize"]);
                if (sizeAndUnit.unit == Enums.SizeUnit.Pixel) {
                    this.iconSize = sizeAndUnit.physicalSize;
                }
            }
            catch (e) {
                // Swallow this, keep default icon size
            }
        }
    }
    ActionsConfig.prototype.toJSON = function () {
        return {
            maxActions: this.maxActions,
            spacing: Enums.Spacing[this.spacing],
            buttonSpacing: this.buttonSpacing,
            showCard: this.showCard,
            preExpandSingleShowCardAction: this.preExpandSingleShowCardAction,
            actionsOrientation: Enums.Orientation[this.actionsOrientation],
            actionAlignment: Enums.ActionAlignment[this.actionAlignment]
        };
    };
    return ActionsConfig;
}());
exports.ActionsConfig = ActionsConfig;
var ColorSetDefinition = /** @class */ (function () {
    function ColorSetDefinition(obj) {
        this.default = new TextColorDefinition();
        this.dark = new TextColorDefinition();
        this.light = new TextColorDefinition();
        this.accent = new TextColorDefinition();
        this.good = new TextColorDefinition();
        this.warning = new TextColorDefinition();
        this.attention = new TextColorDefinition();
        this.parse(obj);
    }
    ColorSetDefinition.prototype.parseSingleColor = function (obj, propertyName) {
        if (obj) {
            this[propertyName].parse(obj[propertyName]);
        }
    };
    ColorSetDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.parseSingleColor(obj, "default");
            this.parseSingleColor(obj, "dark");
            this.parseSingleColor(obj, "light");
            this.parseSingleColor(obj, "accent");
            this.parseSingleColor(obj, "good");
            this.parseSingleColor(obj, "warning");
            this.parseSingleColor(obj, "attention");
        }
    };
    return ColorSetDefinition;
}());
exports.ColorSetDefinition = ColorSetDefinition;
var ContainerStyleDefinition = /** @class */ (function () {
    function ContainerStyleDefinition(obj) {
        this.foregroundColors = new ColorSetDefinition({
            "default": { default: "#333333", subtle: "#EE333333" },
            "dark": { default: "#000000", subtle: "#66000000" },
            "light": { default: "#FFFFFF", subtle: "#33000000" },
            "accent": { default: "#2E89FC", subtle: "#882E89FC" },
            "good": { default: "#028A02", subtle: "#DD027502" },
            "warning": { default: "#E69500", subtle: "#DDE69500" },
            "attention": { default: "#CC3300", subtle: "#DDCC3300" }
        });
        this.parse(obj);
    }
    ContainerStyleDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.backgroundColor = obj["backgroundColor"];
            this.foregroundColors.parse(obj["foregroundColors"]);
            this.highlightBackgroundColor = obj["highlightBackgroundColor"];
            this.highlightForegroundColor = obj["highlightForegroundColor"];
            this.borderColor = obj["borderColor"];
        }
    };
    Object.defineProperty(ContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerStyleDefinition;
}());
exports.ContainerStyleDefinition = ContainerStyleDefinition;
var BuiltInContainerStyleDefinition = /** @class */ (function (_super) {
    __extends(BuiltInContainerStyleDefinition, _super);
    function BuiltInContainerStyleDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BuiltInContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    return BuiltInContainerStyleDefinition;
}(ContainerStyleDefinition));
var ContainerStyleSet = /** @class */ (function () {
    function ContainerStyleSet(obj) {
        this._allStyles = {};
        this._allStyles[Enums.ContainerStyle.Default] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Emphasis] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Accent] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Good] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Attention] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Warning] = new BuiltInContainerStyleDefinition();
        if (obj) {
            this._allStyles[Enums.ContainerStyle.Default].parse(obj[Enums.ContainerStyle.Default]);
            this._allStyles[Enums.ContainerStyle.Emphasis].parse(obj[Enums.ContainerStyle.Emphasis]);
            this._allStyles[Enums.ContainerStyle.Accent].parse(obj[Enums.ContainerStyle.Accent]);
            this._allStyles[Enums.ContainerStyle.Good].parse(obj[Enums.ContainerStyle.Good]);
            this._allStyles[Enums.ContainerStyle.Attention].parse(obj[Enums.ContainerStyle.Attention]);
            this._allStyles[Enums.ContainerStyle.Warning].parse(obj[Enums.ContainerStyle.Warning]);
            var customStyleArray = obj["customStyles"];
            if (customStyleArray && Array.isArray(customStyleArray)) {
                for (var _i = 0, customStyleArray_1 = customStyleArray; _i < customStyleArray_1.length; _i++) {
                    var customStyle = customStyleArray_1[_i];
                    if (customStyle) {
                        var styleName = customStyle["name"];
                        if (styleName && typeof styleName === "string") {
                            if (this._allStyles.hasOwnProperty(styleName)) {
                                this._allStyles[styleName].parse(customStyle["style"]);
                            }
                            else {
                                this._allStyles[styleName] = new ContainerStyleDefinition(customStyle["style"]);
                            }
                        }
                    }
                }
            }
        }
    }
    ContainerStyleSet.prototype.toJSON = function () {
        var _this = this;
        var customStyleArray = [];
        Object.keys(this._allStyles).forEach(function (key) {
            if (!_this._allStyles[key].isBuiltIn) {
                customStyleArray.push({
                    name: key,
                    style: _this._allStyles[key]
                });
            }
        });
        var result = {
            default: this.default,
            emphasis: this.emphasis
        };
        if (customStyleArray.length > 0) {
            result.customStyles = customStyleArray;
        }
        return result;
    };
    ContainerStyleSet.prototype.getStyleByName = function (name, defaultValue) {
        if (name && this._allStyles.hasOwnProperty(name)) {
            return this._allStyles[name];
        }
        else {
            return defaultValue ? defaultValue : this._allStyles[Enums.ContainerStyle.Default];
        }
    };
    Object.defineProperty(ContainerStyleSet.prototype, "default", {
        get: function () {
            return this._allStyles[Enums.ContainerStyle.Default];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerStyleSet.prototype, "emphasis", {
        get: function () {
            return this._allStyles[Enums.ContainerStyle.Emphasis];
        },
        enumerable: false,
        configurable: true
    });
    return ContainerStyleSet;
}());
exports.ContainerStyleSet = ContainerStyleSet;
var FontTypeDefinition = /** @class */ (function () {
    function FontTypeDefinition(fontFamily) {
        this.fontFamily = "Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif";
        this.fontSizes = {
            small: 12,
            default: 14,
            medium: 17,
            large: 21,
            extraLarge: 26
        };
        this.fontWeights = {
            lighter: 200,
            default: 400,
            bolder: 600
        };
        if (fontFamily) {
            this.fontFamily = fontFamily;
        }
    }
    FontTypeDefinition.prototype.parse = function (obj) {
        this.fontFamily = obj["fontFamily"] || this.fontFamily;
        this.fontSizes = {
            small: obj.fontSizes && obj.fontSizes["small"] || this.fontSizes.small,
            default: obj.fontSizes && obj.fontSizes["default"] || this.fontSizes.default,
            medium: obj.fontSizes && obj.fontSizes["medium"] || this.fontSizes.medium,
            large: obj.fontSizes && obj.fontSizes["large"] || this.fontSizes.large,
            extraLarge: obj.fontSizes && obj.fontSizes["extraLarge"] || this.fontSizes.extraLarge
        };
        this.fontWeights = {
            lighter: obj.fontWeights && obj.fontWeights["lighter"] || this.fontWeights.lighter,
            default: obj.fontWeights && obj.fontWeights["default"] || this.fontWeights.default,
            bolder: obj.fontWeights && obj.fontWeights["bolder"] || this.fontWeights.bolder
        };
    };
    FontTypeDefinition.monospace = new FontTypeDefinition("'Courier New', Courier, monospace");
    return FontTypeDefinition;
}());
exports.FontTypeDefinition = FontTypeDefinition;
var FontTypeSet = /** @class */ (function () {
    function FontTypeSet(obj) {
        this.default = new FontTypeDefinition();
        this.monospace = new FontTypeDefinition("'Courier New', Courier, monospace");
        if (obj) {
            this.default.parse(obj["default"]);
            this.monospace.parse(obj["monospace"]);
        }
    }
    FontTypeSet.prototype.getStyleDefinition = function (style) {
        switch (style) {
            case Enums.FontType.Monospace:
                return this.monospace;
            case Enums.FontType.Default:
            default:
                return this.default;
        }
    };
    return FontTypeSet;
}());
exports.FontTypeSet = FontTypeSet;
var HostConfig = /** @class */ (function () {
    function HostConfig(obj) {
        this.hostCapabilities = new host_capabilities_1.HostCapabilities();
        this.choiceSetInputValueSeparator = ",";
        this.supportsInteractivity = true;
        this.spacing = {
            small: 3,
            default: 8,
            medium: 20,
            large: 30,
            extraLarge: 40,
            padding: 15
        };
        this.separator = {
            lineThickness: 1,
            lineColor: "#EEEEEE"
        };
        this.imageSizes = {
            small: 40,
            medium: 80,
            large: 160
        };
        this.containerStyles = new ContainerStyleSet();
        this.inputs = new InputConfig();
        this.actions = new ActionsConfig();
        this.adaptiveCard = new AdaptiveCardConfig();
        this.imageSet = new ImageSetConfig();
        this.media = new MediaConfig();
        this.factSet = new FactSetConfig();
        this.table = new TableConfig();
        this.textStyles = new TextStyleSet();
        this.textBlock = new TextBlockConfig();
        this.alwaysAllowBleed = false;
        if (obj) {
            if (typeof obj === "string" || obj instanceof String) {
                obj = JSON.parse(obj);
            }
            this.choiceSetInputValueSeparator = (obj && typeof obj["choiceSetInputValueSeparator"] === "string") ? obj["choiceSetInputValueSeparator"] : this.choiceSetInputValueSeparator;
            this.supportsInteractivity = (obj && typeof obj["supportsInteractivity"] === "boolean") ? obj["supportsInteractivity"] : this.supportsInteractivity;
            this._legacyFontType = new FontTypeDefinition();
            this._legacyFontType.parse(obj);
            if (obj.fontTypes) {
                this.fontTypes = new FontTypeSet(obj.fontTypes);
            }
            if (obj.lineHeights) {
                this.lineHeights = {
                    small: obj.lineHeights["small"],
                    default: obj.lineHeights["default"],
                    medium: obj.lineHeights["medium"],
                    large: obj.lineHeights["large"],
                    extraLarge: obj.lineHeights["extraLarge"]
                };
            }
            ;
            this.imageSizes = {
                small: obj.imageSizes && obj.imageSizes["small"] || this.imageSizes.small,
                medium: obj.imageSizes && obj.imageSizes["medium"] || this.imageSizes.medium,
                large: obj.imageSizes && obj.imageSizes["large"] || this.imageSizes.large,
            };
            this.containerStyles = new ContainerStyleSet(obj["containerStyles"]);
            this.spacing = {
                small: obj.spacing && obj.spacing["small"] || this.spacing.small,
                default: obj.spacing && obj.spacing["default"] || this.spacing.default,
                medium: obj.spacing && obj.spacing["medium"] || this.spacing.medium,
                large: obj.spacing && obj.spacing["large"] || this.spacing.large,
                extraLarge: obj.spacing && obj.spacing["extraLarge"] || this.spacing.extraLarge,
                padding: obj.spacing && obj.spacing["padding"] || this.spacing.padding
            };
            this.separator = {
                lineThickness: obj.separator && obj.separator["lineThickness"] || this.separator.lineThickness,
                lineColor: obj.separator && obj.separator["lineColor"] || this.separator.lineColor
            };
            this.inputs = new InputConfig(obj.inputs || this.inputs);
            this.actions = new ActionsConfig(obj.actions || this.actions);
            this.adaptiveCard = new AdaptiveCardConfig(obj.adaptiveCard || this.adaptiveCard);
            this.imageSet = new ImageSetConfig(obj["imageSet"]);
            this.factSet = new FactSetConfig(obj["factSet"]);
            this.textStyles = new TextStyleSet(obj["textStyles"]);
            this.textBlock = new TextBlockConfig(obj["textBlock"]);
        }
    }
    HostConfig.prototype.getFontTypeDefinition = function (style) {
        if (this.fontTypes) {
            return this.fontTypes.getStyleDefinition(style);
        }
        else {
            return style == Enums.FontType.Monospace ? FontTypeDefinition.monospace : this._legacyFontType;
        }
    };
    HostConfig.prototype.getEffectiveSpacing = function (spacing) {
        switch (spacing) {
            case Enums.Spacing.Small:
                return this.spacing.small;
            case Enums.Spacing.Default:
                return this.spacing.default;
            case Enums.Spacing.Medium:
                return this.spacing.medium;
            case Enums.Spacing.Large:
                return this.spacing.large;
            case Enums.Spacing.ExtraLarge:
                return this.spacing.extraLarge;
            case Enums.Spacing.Padding:
                return this.spacing.padding;
            default:
                return 0;
        }
    };
    HostConfig.prototype.paddingDefinitionToSpacingDefinition = function (paddingDefinition) {
        return new Shared.SpacingDefinition(this.getEffectiveSpacing(paddingDefinition.top), this.getEffectiveSpacing(paddingDefinition.right), this.getEffectiveSpacing(paddingDefinition.bottom), this.getEffectiveSpacing(paddingDefinition.left));
    };
    HostConfig.prototype.makeCssClassNames = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var result = [];
        for (var _a = 0, classNames_1 = classNames; _a < classNames_1.length; _a++) {
            var className = classNames_1[_a];
            result.push((this.cssClassNamePrefix ? this.cssClassNamePrefix + "-" : "") + className);
        }
        return result;
    };
    HostConfig.prototype.makeCssClassName = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var result = this.makeCssClassNames.apply(this, classNames).join(" ");
        return result ? result : "";
    };
    Object.defineProperty(HostConfig.prototype, "fontFamily", {
        get: function () {
            return this._legacyFontType.fontFamily;
        },
        set: function (value) {
            this._legacyFontType.fontFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostConfig.prototype, "fontSizes", {
        get: function () {
            return this._legacyFontType.fontSizes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostConfig.prototype, "fontWeights", {
        get: function () {
            return this._legacyFontType.fontWeights;
        },
        enumerable: false,
        configurable: true
    });
    return HostConfig;
}());
exports.HostConfig = HostConfig;
exports.defaultHostConfig = new HostConfig({
    supportsInteractivity: true,
    spacing: {
        small: 10,
        default: 20,
        medium: 30,
        large: 40,
        extraLarge: 50,
        padding: 20
    },
    separator: {
        lineThickness: 1,
        lineColor: "#EEEEEE"
    },
    fontTypes: {
        default: {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSizes: {
                small: 12,
                default: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 600
            }
        },
        monospace: {
            fontFamily: "'Courier New', Courier, monospace",
            fontSizes: {
                small: 12,
                default: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 600
            }
        }
    },
    imageSizes: {
        small: 40,
        medium: 80,
        large: 160
    },
    containerStyles: {
        default: {
            backgroundColor: "#FFFFFF",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        emphasis: {
            backgroundColor: "#08000000",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        accent: {
            backgroundColor: "#C7DEF9",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        good: {
            backgroundColor: "#CCFFCC",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        attention: {
            backgroundColor: "#FFC5B2",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        warning: {
            backgroundColor: "#FFE2B2",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#028A02",
                    subtle: "#DD027502"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        }
    },
    inputs: {
        label: {
            requiredInputs: {
                color: Enums.TextColor.Accent,
                size: Enums.TextSize.ExtraLarge,
                weight: Enums.TextWeight.Bolder,
                isSubtle: true,
                suffix: " (required)",
                suffixColor: Enums.TextColor.Good
            },
            optionalInputs: {
                color: Enums.TextColor.Warning,
                size: Enums.TextSize.Medium,
                weight: Enums.TextWeight.Lighter,
                isSubtle: false
            }
        },
        errorMessage: {
            color: Enums.TextColor.Accent,
            size: Enums.TextSize.Small,
            weight: Enums.TextWeight.Bolder
        }
    },
    actions: {
        maxActions: 5,
        spacing: Enums.Spacing.Default,
        buttonSpacing: 10,
        showCard: {
            actionMode: Enums.ShowCardActionMode.Inline,
            inlineTopMargin: 16
        },
        actionsOrientation: Enums.Orientation.Horizontal,
        actionAlignment: Enums.ActionAlignment.Left
    },
    adaptiveCard: {
        allowCustomStyle: false
    },
    imageSet: {
        imageSize: Enums.Size.Medium,
        maxImageHeight: 100
    },
    factSet: {
        title: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Bolder,
            wrap: true,
            maxWidth: 150,
        },
        value: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Default,
            wrap: true,
        },
        spacing: 10
    }
});


/***/ }),

/***/ "./src/registry.ts":
/*!*************************!*\
  !*** ./src/registry.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalRegistry = exports.CardObjectRegistry = void 0;
var serialization_1 = __webpack_require__(/*! ./serialization */ "./src/serialization.ts");
var CardObjectRegistry = /** @class */ (function () {
    function CardObjectRegistry() {
        this._items = {};
    }
    CardObjectRegistry.prototype.findByName = function (typeName) {
        return this._items.hasOwnProperty(typeName) ? this._items[typeName] : undefined;
    };
    CardObjectRegistry.prototype.clear = function () {
        this._items = {};
    };
    CardObjectRegistry.prototype.copyTo = function (target) {
        var keys = Object.keys(this._items);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var typeRegistration = this._items[key];
            target.register(typeRegistration.typeName, typeRegistration.objectType, typeRegistration.schemaVersion);
        }
    };
    CardObjectRegistry.prototype.register = function (typeName, objectType, schemaVersion) {
        if (schemaVersion === void 0) { schemaVersion = serialization_1.Versions.v1_0; }
        var registrationInfo = this.findByName(typeName);
        if (registrationInfo !== undefined) {
            registrationInfo.objectType = objectType;
        }
        else {
            registrationInfo = {
                typeName: typeName,
                objectType: objectType,
                schemaVersion: schemaVersion
            };
        }
        this._items[typeName] = registrationInfo;
    };
    CardObjectRegistry.prototype.unregister = function (typeName) {
        delete this._items[typeName];
    };
    CardObjectRegistry.prototype.createInstance = function (typeName, targetVersion) {
        var registrationInfo = this.findByName(typeName);
        return (registrationInfo && registrationInfo.schemaVersion.compareTo(targetVersion) <= 0) ? new registrationInfo.objectType() : undefined;
    };
    CardObjectRegistry.prototype.getItemCount = function () {
        return Object.keys(this._items).length;
    };
    CardObjectRegistry.prototype.getItemAt = function (index) {
        var _this = this;
        return Object.keys(this._items).map(function (e) { return _this._items[e]; })[index];
    };
    return CardObjectRegistry;
}());
exports.CardObjectRegistry = CardObjectRegistry;
var GlobalRegistry = /** @class */ (function () {
    function GlobalRegistry() {
    }
    GlobalRegistry.populateWithDefaultElements = function (registry) {
        registry.clear();
        GlobalRegistry.defaultElements.copyTo(registry);
    };
    GlobalRegistry.populateWithDefaultActions = function (registry) {
        registry.clear();
        GlobalRegistry.defaultActions.copyTo(registry);
    };
    Object.defineProperty(GlobalRegistry, "elements", {
        get: function () {
            if (!GlobalRegistry._elements) {
                GlobalRegistry._elements = new CardObjectRegistry();
                GlobalRegistry.populateWithDefaultElements(GlobalRegistry._elements);
            }
            return GlobalRegistry._elements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalRegistry, "actions", {
        get: function () {
            if (!GlobalRegistry._actions) {
                GlobalRegistry._actions = new CardObjectRegistry();
                GlobalRegistry.populateWithDefaultActions(GlobalRegistry._actions);
            }
            return GlobalRegistry._actions;
        },
        enumerable: false,
        configurable: true
    });
    GlobalRegistry.reset = function () {
        GlobalRegistry._elements = undefined;
        GlobalRegistry._actions = undefined;
    };
    GlobalRegistry.defaultElements = new CardObjectRegistry();
    GlobalRegistry.defaultActions = new CardObjectRegistry();
    return GlobalRegistry;
}());
exports.GlobalRegistry = GlobalRegistry;


/***/ }),

/***/ "./src/serialization.ts":
/*!******************************!*\
  !*** ./src/serialization.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SerializableObject = exports.property = exports.SerializableObjectSchema = exports.CustomProperty = exports.SerializableObjectCollectionProperty = exports.SerializableObjectProperty = exports.EnumProperty = exports.ValueSetProperty = exports.StringArrayProperty = exports.PixelSizeProperty = exports.NumProperty = exports.BoolProperty = exports.StringProperty = exports.PropertyDefinition = exports.BaseSerializationContext = exports.isVersionLessOrEqual = exports.Versions = exports.Version = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var shared_1 = __webpack_require__(/*! ./shared */ "./src/shared.ts");
var Utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var strings_1 = __webpack_require__(/*! ./strings */ "./src/strings.ts");
var Version = /** @class */ (function () {
    function Version(major, minor, label) {
        if (major === void 0) { major = 1; }
        if (minor === void 0) { minor = 1; }
        this._isValid = true;
        this._major = major;
        this._minor = minor;
        this._label = label;
    }
    Version.parse = function (versionString, context) {
        if (!versionString) {
            return undefined;
        }
        var result = new Version();
        result._versionString = versionString;
        var regEx = /(\d+).(\d+)/gi;
        var matches = regEx.exec(versionString);
        if (matches != null && matches.length == 3) {
            result._major = parseInt(matches[1]);
            result._minor = parseInt(matches[2]);
        }
        else {
            result._isValid = false;
        }
        if (!result._isValid) {
            context.logParseEvent(undefined, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidVersionString(result._versionString));
        }
        return result;
    };
    Version.prototype.toString = function () {
        return !this._isValid ? this._versionString : this._major + "." + this._minor;
    };
    Version.prototype.toJSON = function () {
        return this.toString();
    };
    Version.prototype.compareTo = function (otherVersion) {
        if (!this.isValid || !otherVersion.isValid) {
            throw new Error("Cannot compare invalid version.");
        }
        if (this.major > otherVersion.major) {
            return 1;
        }
        else if (this.major < otherVersion.major) {
            return -1;
        }
        else if (this.minor > otherVersion.minor) {
            return 1;
        }
        else if (this.minor < otherVersion.minor) {
            return -1;
        }
        return 0;
    };
    Object.defineProperty(Version.prototype, "label", {
        get: function () {
            return this._label ? this._label : this.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "major", {
        get: function () {
            return this._major;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        get: function () {
            return this._minor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: false,
        configurable: true
    });
    return Version;
}());
exports.Version = Version;
var Versions = /** @class */ (function () {
    function Versions() {
    }
    Versions.v1_0 = new Version(1, 0);
    Versions.v1_1 = new Version(1, 1);
    Versions.v1_2 = new Version(1, 2);
    Versions.v1_3 = new Version(1, 3);
    Versions.v1_4 = new Version(1, 4);
    Versions.v1_5 = new Version(1, 5);
    Versions.latest = Versions.v1_5;
    return Versions;
}());
exports.Versions = Versions;
function isVersionLessOrEqual(version, targetVersion) {
    if (version instanceof Version) {
        if (targetVersion instanceof Version) {
            return targetVersion.compareTo(version) >= 0;
        }
        else {
            // Target version is *
            return true;
        }
    }
    else {
        // Version is *
        return true;
    }
}
exports.isVersionLessOrEqual = isVersionLessOrEqual;
var BaseSerializationContext = /** @class */ (function () {
    function BaseSerializationContext(targetVersion) {
        if (targetVersion === void 0) { targetVersion = Versions.latest; }
        this.targetVersion = targetVersion;
        this._validationEvents = [];
    }
    BaseSerializationContext.prototype.serializeValue = function (target, propertyName, propertyValue, defaultValue, forceDeleteIfNullOrDefault) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (forceDeleteIfNullOrDefault === void 0) { forceDeleteIfNullOrDefault = false; }
        if (propertyValue === null || propertyValue === undefined || propertyValue === defaultValue) {
            if (!shared_1.GlobalSettings.enableFullJsonRoundTrip || forceDeleteIfNullOrDefault) {
                delete target[propertyName];
            }
        }
        else if (propertyValue === defaultValue) {
            delete target[propertyName];
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeString = function (target, propertyName, propertyValue, defaultValue) {
        if (propertyValue === null || propertyValue === undefined || propertyValue === defaultValue) {
            delete target[propertyName];
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeBool = function (target, propertyName, propertyValue, defaultValue) {
        if (propertyValue === null || propertyValue === undefined || propertyValue === defaultValue) {
            delete target[propertyName];
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeNumber = function (target, propertyName, propertyValue, defaultValue) {
        if (propertyValue === null || propertyValue === undefined || propertyValue === defaultValue || isNaN(propertyValue)) {
            delete target[propertyName];
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeEnum = function (enumType, target, propertyName, propertyValue, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (propertyValue === null || propertyValue === undefined || propertyValue === defaultValue) {
            delete target[propertyName];
        }
        else {
            target[propertyName] = enumType[propertyValue];
        }
    };
    BaseSerializationContext.prototype.serializeArray = function (target, propertyName, propertyValue) {
        var items = [];
        if (propertyValue) {
            for (var _i = 0, propertyValue_1 = propertyValue; _i < propertyValue_1.length; _i++) {
                var item = propertyValue_1[_i];
                var serializedItem = undefined;
                if (item instanceof SerializableObject) {
                    serializedItem = item.toJSON(this);
                }
                else if (item.toJSON) {
                    serializedItem = item.toJSON();
                }
                else {
                    serializedItem = item;
                }
                if (serializedItem !== undefined) {
                    items.push(serializedItem);
                }
            }
        }
        if (items.length == 0) {
            if (target.hasOwnProperty(propertyName) && Array.isArray(target[propertyName])) {
                delete target[propertyName];
            }
        }
        else {
            this.serializeValue(target, propertyName, items);
        }
    };
    BaseSerializationContext.prototype.clearEvents = function () {
        this._validationEvents = [];
    };
    BaseSerializationContext.prototype.logEvent = function (source, phase, event, message) {
        this._validationEvents.push({
            source: source,
            phase: phase,
            event: event,
            message: message
        });
    };
    BaseSerializationContext.prototype.logParseEvent = function (source, event, message) {
        this.logEvent(source, Enums.ValidationPhase.Parse, event, message);
    };
    BaseSerializationContext.prototype.getEventAt = function (index) {
        return this._validationEvents[index];
    };
    Object.defineProperty(BaseSerializationContext.prototype, "eventCount", {
        get: function () {
            return this._validationEvents.length;
        },
        enumerable: false,
        configurable: true
    });
    return BaseSerializationContext;
}());
exports.BaseSerializationContext = BaseSerializationContext;
var SimpleSerializationContext = /** @class */ (function (_super) {
    __extends(SimpleSerializationContext, _super);
    function SimpleSerializationContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SimpleSerializationContext;
}(BaseSerializationContext));
var PropertyDefinition = /** @class */ (function () {
    function PropertyDefinition(targetVersion, name, defaultValue, onGetInitialValue) {
        this.targetVersion = targetVersion;
        this.name = name;
        this.defaultValue = defaultValue;
        this.onGetInitialValue = onGetInitialValue;
        this.isSerializationEnabled = true;
        this.sequentialNumber = PropertyDefinition._sequentialNumber;
        PropertyDefinition._sequentialNumber++;
    }
    PropertyDefinition.prototype.getInternalName = function () {
        return this.name;
    };
    PropertyDefinition.prototype.parse = function (sender, source, context) {
        return source[this.name];
    };
    PropertyDefinition.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value, this.defaultValue);
    };
    PropertyDefinition._sequentialNumber = 0;
    return PropertyDefinition;
}());
exports.PropertyDefinition = PropertyDefinition;
var StringProperty = /** @class */ (function (_super) {
    __extends(StringProperty, _super);
    function StringProperty(targetVersion, name, treatEmptyAsUndefined, regEx, defaultValue, onGetInitialValue) {
        if (treatEmptyAsUndefined === void 0) { treatEmptyAsUndefined = true; }
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.treatEmptyAsUndefined = treatEmptyAsUndefined;
        _this.regEx = regEx;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    StringProperty.prototype.parse = function (sender, source, context) {
        var parsedValue = Utils.parseString(source[this.name], this.defaultValue);
        var isUndefined = parsedValue === undefined || (parsedValue === "" && this.treatEmptyAsUndefined);
        if (!isUndefined && this.regEx !== undefined) {
            var matches = this.regEx.exec(parsedValue);
            if (!matches) {
                context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(parsedValue, this.name));
                return undefined;
            }
        }
        return parsedValue;
    };
    StringProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeString(target, this.name, value === "" && this.treatEmptyAsUndefined ? undefined : value, this.defaultValue);
    };
    return StringProperty;
}(PropertyDefinition));
exports.StringProperty = StringProperty;
var BoolProperty = /** @class */ (function (_super) {
    __extends(BoolProperty, _super);
    function BoolProperty(targetVersion, name, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    BoolProperty.prototype.parse = function (sender, source, context) {
        return Utils.parseBool(source[this.name], this.defaultValue);
    };
    BoolProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeBool(target, this.name, value, this.defaultValue);
    };
    return BoolProperty;
}(PropertyDefinition));
exports.BoolProperty = BoolProperty;
var NumProperty = /** @class */ (function (_super) {
    __extends(NumProperty, _super);
    function NumProperty(targetVersion, name, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    NumProperty.prototype.parse = function (sender, source, context) {
        return Utils.parseNumber(source[this.name], this.defaultValue);
    };
    NumProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeNumber(target, this.name, value, this.defaultValue);
    };
    return NumProperty;
}(PropertyDefinition));
exports.NumProperty = NumProperty;
var PixelSizeProperty = /** @class */ (function (_super) {
    __extends(PixelSizeProperty, _super);
    function PixelSizeProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PixelSizeProperty.prototype.parse = function (sender, source, context) {
        var result = undefined;
        var value = source[this.name];
        if (typeof value === "string") {
            var isValid = false;
            try {
                var size = shared_1.SizeAndUnit.parse(value, true);
                if (size.unit == Enums.SizeUnit.Pixel) {
                    result = size.physicalSize;
                    isValid = true;
                }
            }
            catch (_a) {
                // Do nothing. A parse error is emitted below
            }
            if (!isValid) {
                context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(source[this.name], "minHeight"));
            }
        }
        return result;
    };
    PixelSizeProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, typeof value === "number" && !isNaN(value) ? value + "px" : undefined);
    };
    return PixelSizeProperty;
}(PropertyDefinition));
exports.PixelSizeProperty = PixelSizeProperty;
var StringArrayProperty = /** @class */ (function (_super) {
    __extends(StringArrayProperty, _super);
    function StringArrayProperty(targetVersion, name, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    StringArrayProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (sourceValue === undefined || !Array.isArray(sourceValue)) {
            return this.defaultValue;
        }
        var result = [];
        for (var _i = 0, sourceValue_1 = sourceValue; _i < sourceValue_1.length; _i++) {
            var value = sourceValue_1[_i];
            if (typeof value === "string") {
                result.push(value);
            }
            else {
                context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, "Invalid array value \"" + value + "\" of type \"" + typeof value + "\" ignored for \"" + this.name + "\".");
            }
        }
        return result;
    };
    StringArrayProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeArray(target, this.name, value);
    };
    return StringArrayProperty;
}(PropertyDefinition));
exports.StringArrayProperty = StringArrayProperty;
var ValueSetProperty = /** @class */ (function (_super) {
    __extends(ValueSetProperty, _super);
    function ValueSetProperty(targetVersion, name, values, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.values = values;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    ValueSetProperty.prototype.isValidValue = function (value, context) {
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var versionedValue = _a[_i];
            if (value.toLowerCase() === versionedValue.value.toLowerCase()) {
                var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                return targetVersion.compareTo(context.targetVersion) <= 0;
            }
        }
        return false;
    };
    ValueSetProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (sourceValue === undefined) {
            return this.defaultValue;
        }
        if (typeof sourceValue === "string") {
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (sourceValue.toLowerCase() === versionedValue.value.toLowerCase()) {
                    var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        return versionedValue.value;
                    }
                    else {
                        context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.propertyValueNotSupported(sourceValue, this.name, targetVersion.toString(), context.targetVersion.toString()));
                        return this.defaultValue;
                    }
                }
            }
        }
        context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(sourceValue, this.name));
        return this.defaultValue;
    };
    ValueSetProperty.prototype.toJSON = function (sender, target, value, context) {
        var invalidValue = false;
        if (value !== undefined) {
            invalidValue = true;
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (versionedValue.value === value) {
                    var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        invalidValue = false;
                        break;
                    }
                    else {
                        context.logEvent(sender, Enums.ValidationPhase.ToJSON, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.propertyValueNotSupported(value, this.name, targetVersion.toString(), context.targetVersion.toString()));
                    }
                }
            }
        }
        if (!invalidValue) {
            context.serializeValue(target, this.name, value, this.defaultValue, true);
        }
    };
    return ValueSetProperty;
}(PropertyDefinition));
exports.ValueSetProperty = ValueSetProperty;
var EnumProperty = /** @class */ (function (_super) {
    __extends(EnumProperty, _super);
    function EnumProperty(targetVersion, name, enumType, defaultValue, values, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.enumType = enumType;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        _this._values = [];
        if (!values) {
            for (var key in enumType) {
                var keyAsNumber = parseInt(key, 10);
                if (keyAsNumber >= 0) {
                    _this._values.push({ value: keyAsNumber });
                }
            }
        }
        else {
            _this._values = values;
        }
        return _this;
    }
    EnumProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (typeof sourceValue !== "string") {
            return this.defaultValue;
        }
        var enumValue = Utils.getEnumValueByName(this.enumType, sourceValue);
        if (enumValue !== undefined) {
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (versionedValue.value === enumValue) {
                    var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        return enumValue;
                    }
                    else {
                        context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.propertyValueNotSupported(sourceValue, this.name, targetVersion.toString(), context.targetVersion.toString()));
                        return this.defaultValue;
                    }
                }
            }
        }
        context.logParseEvent(sender, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(sourceValue, this.name));
        return this.defaultValue;
    };
    EnumProperty.prototype.toJSON = function (sender, target, value, context) {
        var invalidValue = false;
        if (value !== undefined) {
            invalidValue = true;
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (versionedValue.value === value) {
                    var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        invalidValue = false;
                        break;
                    }
                    else {
                        context.logEvent(sender, Enums.ValidationPhase.ToJSON, Enums.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidPropertyValue(value, this.name));
                    }
                }
            }
        }
        if (!invalidValue) {
            context.serializeEnum(this.enumType, target, this.name, value, this.defaultValue);
        }
    };
    Object.defineProperty(EnumProperty.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: false,
        configurable: true
    });
    return EnumProperty;
}(PropertyDefinition));
exports.EnumProperty = EnumProperty;
var SerializableObjectProperty = /** @class */ (function (_super) {
    __extends(SerializableObjectProperty, _super);
    function SerializableObjectProperty(targetVersion, name, objectType, nullable, defaultValue) {
        if (nullable === void 0) { nullable = false; }
        var _this = _super.call(this, targetVersion, name, defaultValue, function (sender) { return _this.nullable ? undefined : new _this.objectType(); }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.objectType = objectType;
        _this.nullable = nullable;
        return _this;
    }
    SerializableObjectProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (sourceValue === undefined) {
            return this.onGetInitialValue ? this.onGetInitialValue(sender) : this.defaultValue;
        }
        var result = new this.objectType();
        result.parse(sourceValue, context);
        return result;
    };
    SerializableObjectProperty.prototype.toJSON = function (sender, target, value, context) {
        var serializedValue = undefined;
        if (value !== undefined && !value.hasAllDefaultValues()) {
            serializedValue = value.toJSON(context);
        }
        if (typeof serializedValue === "object" && Object.keys(serializedValue).length === 0) {
            serializedValue = undefined;
        }
        context.serializeValue(target, this.name, serializedValue, this.defaultValue, true);
    };
    return SerializableObjectProperty;
}(PropertyDefinition));
exports.SerializableObjectProperty = SerializableObjectProperty;
var SerializableObjectCollectionProperty = /** @class */ (function (_super) {
    __extends(SerializableObjectCollectionProperty, _super);
    function SerializableObjectCollectionProperty(targetVersion, name, objectType, onItemAdded) {
        var _this = _super.call(this, targetVersion, name, undefined, function (sender) { return []; }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.objectType = objectType;
        _this.onItemAdded = onItemAdded;
        return _this;
    }
    SerializableObjectCollectionProperty.prototype.parse = function (sender, source, context) {
        var result = [];
        var sourceCollection = source[this.name];
        if (Array.isArray(sourceCollection)) {
            for (var _i = 0, sourceCollection_1 = sourceCollection; _i < sourceCollection_1.length; _i++) {
                var sourceItem = sourceCollection_1[_i];
                var item = new this.objectType();
                item.parse(sourceItem, context);
                result.push(item);
                if (this.onItemAdded) {
                    this.onItemAdded(sender, item);
                }
            }
        }
        return result.length > 0 ? result : (this.onGetInitialValue ? this.onGetInitialValue(sender) : undefined);
    };
    SerializableObjectCollectionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeArray(target, this.name, value);
    };
    return SerializableObjectCollectionProperty;
}(PropertyDefinition));
exports.SerializableObjectCollectionProperty = SerializableObjectCollectionProperty;
var CustomProperty = /** @class */ (function (_super) {
    __extends(CustomProperty, _super);
    function CustomProperty(targetVersion, name, onParse, onToJSON, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.onParse = onParse;
        _this.onToJSON = onToJSON;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        if (!_this.onParse) {
            throw new Error("CustomPropertyDefinition instances must have an onParse handler.");
        }
        if (!_this.onToJSON) {
            throw new Error("CustomPropertyDefinition instances must have an onToJSON handler.");
        }
        return _this;
    }
    CustomProperty.prototype.parse = function (sender, source, context) {
        return this.onParse(sender, this, source, context);
    };
    CustomProperty.prototype.toJSON = function (sender, target, value, context) {
        this.onToJSON(sender, this, target, value, context);
    };
    return CustomProperty;
}(PropertyDefinition));
exports.CustomProperty = CustomProperty;
var SerializableObjectSchema = /** @class */ (function () {
    function SerializableObjectSchema() {
        this._properties = [];
    }
    SerializableObjectSchema.prototype.indexOf = function (property) {
        for (var i = 0; i < this._properties.length; i++) {
            if (this._properties[i] === property) {
                return i;
            }
        }
        return -1;
    };
    SerializableObjectSchema.prototype.add = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        for (var i = 0; i < properties.length; i++) {
            if (this.indexOf(properties[i]) === -1) {
                this._properties.push(properties[i]);
            }
        }
    };
    SerializableObjectSchema.prototype.remove = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
            var property_1 = properties_1[_a];
            while (true) {
                var index = this.indexOf(property_1);
                if (index >= 0) {
                    this._properties.splice(index, 1);
                }
                else {
                    break;
                }
            }
        }
    };
    SerializableObjectSchema.prototype.getItemAt = function (index) {
        return this._properties[index];
    };
    SerializableObjectSchema.prototype.getCount = function () {
        return this._properties.length;
    };
    return SerializableObjectSchema;
}());
exports.SerializableObjectSchema = SerializableObjectSchema;
// This is a decorator function, used to map SerializableObject descendant class members to
// schema properties
function property(property) {
    return function (target, propertyKey) {
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (!descriptor.get && !descriptor.set) {
            descriptor.get = function () { return this.getValue(property); };
            descriptor.set = function (value) { this.setValue(property, value); };
            Object.defineProperty(target, propertyKey, descriptor);
        }
    };
}
exports.property = property;
var SerializableObject = /** @class */ (function () {
    function SerializableObject() {
        this._propertyBag = {};
        this._rawProperties = {};
        this.maxVersion = SerializableObject.defaultMaxVersion;
        var s = this.getSchema();
        for (var i = 0; i < s.getCount(); i++) {
            var property_2 = s.getItemAt(i);
            if (property_2.onGetInitialValue) {
                this.setValue(property_2, property_2.onGetInitialValue(this));
            }
        }
    }
    SerializableObject.prototype.getDefaultSerializationContext = function () {
        return new SimpleSerializationContext();
    };
    SerializableObject.prototype.populateSchema = function (schema) {
        var ctor = this.constructor;
        var properties = [];
        for (var propertyName in ctor) {
            try {
                var propertyValue = ctor[propertyName];
                if (propertyValue instanceof PropertyDefinition) {
                    properties.push(propertyValue);
                }
            }
            catch (_a) {
                // If a property happens to have a getter function and
                // it throws an exception, we need to catch it here
            }
        }
        if (properties.length > 0) {
            var sortedProperties = properties.sort(function (p1, p2) {
                if (p1.sequentialNumber > p2.sequentialNumber) {
                    return 1;
                }
                else if (p1.sequentialNumber < p2.sequentialNumber) {
                    return -1;
                }
                return 0;
            });
            schema.add.apply(schema, sortedProperties);
        }
        if (SerializableObject.onRegisterCustomProperties) {
            SerializableObject.onRegisterCustomProperties(this, schema);
        }
    };
    SerializableObject.prototype.getValue = function (property) {
        return this._propertyBag.hasOwnProperty(property.getInternalName()) ? this._propertyBag[property.getInternalName()] : property.defaultValue;
    };
    SerializableObject.prototype.setValue = function (property, value) {
        if (value === undefined || value === null) {
            delete this._propertyBag[property.getInternalName()];
        }
        else {
            this._propertyBag[property.getInternalName()] = value;
        }
    };
    SerializableObject.prototype.internalParse = function (source, context) {
        this._propertyBag = {};
        this._rawProperties = shared_1.GlobalSettings.enableFullJsonRoundTrip ? (source ? source : {}) : {};
        if (source) {
            var s = this.getSchema();
            for (var i = 0; i < s.getCount(); i++) {
                var property_3 = s.getItemAt(i);
                if (property_3.isSerializationEnabled) {
                    var propertyValue = property_3.onGetInitialValue ? property_3.onGetInitialValue(this) : undefined;
                    if (source.hasOwnProperty(property_3.name)) {
                        if (property_3.targetVersion.compareTo(context.targetVersion) <= 0) {
                            propertyValue = property_3.parse(this, source, context);
                        }
                        else {
                            context.logParseEvent(this, Enums.ValidationEvent.UnsupportedProperty, strings_1.Strings.errors.propertyNotSupported(property_3.name, property_3.targetVersion.toString(), context.targetVersion.toString()));
                        }
                    }
                    this.setValue(property_3, propertyValue);
                }
            }
        }
        else {
            this.resetDefaultValues();
        }
    };
    SerializableObject.prototype.internalToJSON = function (target, context) {
        var s = this.getSchema();
        var serializedProperties = [];
        for (var i = 0; i < s.getCount(); i++) {
            var property_4 = s.getItemAt(i);
            // Avoid serializing the same property multiple times. This is necessary
            // because some property definitions map to the same underlying schema
            // property
            if (property_4.isSerializationEnabled && property_4.targetVersion.compareTo(context.targetVersion) <= 0 && serializedProperties.indexOf(property_4.name) === -1) {
                property_4.toJSON(this, target, this.getValue(property_4), context);
                serializedProperties.push(property_4.name);
            }
        }
    };
    SerializableObject.prototype.shouldSerialize = function (context) {
        return true;
    };
    SerializableObject.prototype.parse = function (source, context) {
        this.internalParse(source, context ? context : new SimpleSerializationContext());
    };
    SerializableObject.prototype.toJSON = function (context) {
        var effectiveContext;
        if (context && context instanceof BaseSerializationContext) {
            effectiveContext = context;
        }
        else {
            effectiveContext = this.getDefaultSerializationContext();
            effectiveContext.toJSONOriginalParam = context;
        }
        if (this.shouldSerialize(effectiveContext)) {
            var result = void 0;
            if (shared_1.GlobalSettings.enableFullJsonRoundTrip && this._rawProperties && typeof this._rawProperties === "object") {
                result = this._rawProperties;
            }
            else {
                result = {};
            }
            this.internalToJSON(result, effectiveContext);
            return result;
        }
        else {
            return undefined;
        }
    };
    SerializableObject.prototype.hasDefaultValue = function (property) {
        return this.getValue(property) === property.defaultValue;
    };
    SerializableObject.prototype.hasAllDefaultValues = function () {
        var s = this.getSchema();
        for (var i = 0; i < s.getCount(); i++) {
            var property_5 = s.getItemAt(i);
            if (!this.hasDefaultValue(property_5)) {
                return false;
            }
        }
        return true;
    };
    SerializableObject.prototype.resetDefaultValues = function () {
        var s = this.getSchema();
        for (var i = 0; i < s.getCount(); i++) {
            var property_6 = s.getItemAt(i);
            this.setValue(property_6, property_6.defaultValue);
        }
    };
    SerializableObject.prototype.setCustomProperty = function (name, value) {
        var shouldDeleteProperty = (typeof value === "string" && !value) || value === undefined || value === null;
        if (shouldDeleteProperty) {
            delete this._rawProperties[name];
        }
        else {
            this._rawProperties[name] = value;
        }
    };
    SerializableObject.prototype.getCustomProperty = function (name) {
        return this._rawProperties[name];
    };
    SerializableObject.prototype.getSchema = function () {
        var schema = SerializableObject._schemaCache[this.getSchemaKey()];
        if (!schema) {
            schema = new SerializableObjectSchema();
            this.populateSchema(schema);
            SerializableObject._schemaCache[this.getSchemaKey()] = schema;
        }
        return schema;
    };
    SerializableObject.defaultMaxVersion = Versions.latest;
    SerializableObject._schemaCache = {};
    return SerializableObject;
}());
exports.SerializableObject = SerializableObject;


/***/ }),

/***/ "./src/shared.ts":
/*!***********************!*\
  !*** ./src/shared.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UUID = exports.SizeAndUnit = exports.PaddingDefinition = exports.SpacingDefinition = exports.StringWithSubstitutions = exports.ContentTypes = exports.GlobalSettings = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.useAdvancedTextBlockTruncation = true;
    GlobalSettings.useAdvancedCardBottomTruncation = false;
    GlobalSettings.useMarkdownInRadioButtonAndCheckbox = true;
    GlobalSettings.allowMarkForTextHighlighting = false;
    GlobalSettings.alwaysBleedSeparators = false;
    GlobalSettings.enableFullJsonRoundTrip = false;
    GlobalSettings.displayInputValidationErrors = true;
    GlobalSettings.allowPreProcessingPropertyValues = false;
    GlobalSettings.setTabIndexAtCardRoot = true;
    GlobalSettings.enableFallback = true;
    GlobalSettings.useWebkitLineClamp = true;
    GlobalSettings.allowMoreThanMaxActionsInOverflowMenu = false;
    GlobalSettings.applets = {
        logEnabled: true,
        logLevel: Enums.LogLevel.Error,
        maximumRetryAttempts: 3,
        defaultTimeBetweenRetryAttempts: 3000,
        authPromptWidth: 400,
        authPromptHeight: 600,
        refresh: {
            mode: Enums.RefreshMode.Manual,
            timeBetweenAutomaticRefreshes: 3000,
            maximumConsecutiveAutomaticRefreshes: 3,
            allowManualRefreshesAfterAutomaticRefreshes: true
        }
    };
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
exports.ContentTypes = {
    applicationJson: "application/json",
    applicationXWwwFormUrlencoded: "application/x-www-form-urlencoded"
};
var StringWithSubstitutions = /** @class */ (function () {
    function StringWithSubstitutions() {
        this._isProcessed = false;
    }
    StringWithSubstitutions.prototype.getReferencedInputs = function (inputs, referencedInputs) {
        if (!referencedInputs) {
            throw new Error("The referencedInputs parameter cannot be null.");
        }
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var matches = new RegExp("\\{{2}(" + input.id + ").value\\}{2}", "gi").exec(this._original);
            if (matches != null && input.id) {
                referencedInputs[input.id] = input;
            }
        }
    };
    StringWithSubstitutions.prototype.substituteInputValues = function (inputs, contentType) {
        this._processed = this._original;
        if (this._original) {
            var regEx = /\{{2}([a-z0-9_$@]+).value\}{2}/gi;
            var matches = void 0;
            while ((matches = regEx.exec(this._original)) !== null) {
                for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (key.toLowerCase() == matches[1].toLowerCase()) {
                        var matchedInput = inputs[key];
                        var valueForReplace = "";
                        if (matchedInput.value) {
                            valueForReplace = matchedInput.value;
                        }
                        if (contentType === exports.ContentTypes.applicationJson) {
                            valueForReplace = JSON.stringify(valueForReplace);
                            valueForReplace = valueForReplace.slice(1, -1);
                        }
                        else if (contentType === exports.ContentTypes.applicationXWwwFormUrlencoded) {
                            valueForReplace = encodeURIComponent(valueForReplace);
                        }
                        this._processed = this._processed.replace(matches[0], valueForReplace);
                        break;
                    }
                }
            }
        }
        this._isProcessed = true;
    };
    StringWithSubstitutions.prototype.getOriginal = function () {
        return this._original;
    };
    StringWithSubstitutions.prototype.get = function () {
        if (!this._isProcessed) {
            return this._original;
        }
        else {
            return this._processed;
        }
    };
    StringWithSubstitutions.prototype.set = function (value) {
        this._original = value;
        this._isProcessed = false;
    };
    return StringWithSubstitutions;
}());
exports.StringWithSubstitutions = StringWithSubstitutions;
var SpacingDefinition = /** @class */ (function () {
    function SpacingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        if (left === void 0) { left = 0; }
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    return SpacingDefinition;
}());
exports.SpacingDefinition = SpacingDefinition;
var PaddingDefinition = /** @class */ (function () {
    function PaddingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = Enums.Spacing.None; }
        if (right === void 0) { right = Enums.Spacing.None; }
        if (bottom === void 0) { bottom = Enums.Spacing.None; }
        if (left === void 0) { left = Enums.Spacing.None; }
        this.top = Enums.Spacing.None;
        this.right = Enums.Spacing.None;
        this.bottom = Enums.Spacing.None;
        this.left = Enums.Spacing.None;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    return PaddingDefinition;
}());
exports.PaddingDefinition = PaddingDefinition;
var SizeAndUnit = /** @class */ (function () {
    function SizeAndUnit(physicalSize, unit) {
        this.physicalSize = physicalSize;
        this.unit = unit;
    }
    SizeAndUnit.parse = function (input, requireUnitSpecifier) {
        if (requireUnitSpecifier === void 0) { requireUnitSpecifier = false; }
        var result = new SizeAndUnit(0, Enums.SizeUnit.Weight);
        if (typeof input === "number") {
            result.physicalSize = input;
            return result;
        }
        else if (typeof input === "string") {
            var regExp = /^([0-9]+)(px|\*)?$/g;
            var matches = regExp.exec(input);
            var expectedMatchCount = requireUnitSpecifier ? 3 : 2;
            if (matches && matches.length >= expectedMatchCount) {
                result.physicalSize = parseInt(matches[1]);
                if (matches.length == 3) {
                    if (matches[2] == "px") {
                        result.unit = Enums.SizeUnit.Pixel;
                    }
                }
                return result;
            }
        }
        throw new Error("Invalid size: " + input);
    };
    return SizeAndUnit;
}());
exports.SizeAndUnit = SizeAndUnit;
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.generate = function () {
        var d0 = Math.random() * 0xffffffff | 0;
        var d1 = Math.random() * 0xffffffff | 0;
        var d2 = Math.random() * 0xffffffff | 0;
        var d3 = Math.random() * 0xffffffff | 0;
        return UUID.lut[d0 & 0xff] + UUID.lut[d0 >> 8 & 0xff] + UUID.lut[d0 >> 16 & 0xff] + UUID.lut[d0 >> 24 & 0xff] + '-' +
            UUID.lut[d1 & 0xff] + UUID.lut[d1 >> 8 & 0xff] + '-' + UUID.lut[d1 >> 16 & 0x0f | 0x40] + UUID.lut[d1 >> 24 & 0xff] + '-' +
            UUID.lut[d2 & 0x3f | 0x80] + UUID.lut[d2 >> 8 & 0xff] + '-' + UUID.lut[d2 >> 16 & 0xff] + UUID.lut[d2 >> 24 & 0xff] +
            UUID.lut[d3 & 0xff] + UUID.lut[d3 >> 8 & 0xff] + UUID.lut[d3 >> 16 & 0xff] + UUID.lut[d3 >> 24 & 0xff];
    };
    UUID.initialize = function () {
        for (var i = 0; i < 256; i++) {
            UUID.lut[i] = (i < 16 ? '0' : '') + i.toString(16);
        }
    };
    UUID.lut = [];
    return UUID;
}());
exports.UUID = UUID;
UUID.initialize();


/***/ }),

/***/ "./src/strings.ts":
/*!************************!*\
  !*** ./src/strings.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Strings = void 0;
var Strings = /** @class */ (function () {
    function Strings() {
    }
    Strings.errors = {
        unknownElementType: function (typeName) { return "Unknown element type \"" + typeName + "\". Fallback will be used if present."; },
        unknownActionType: function (typeName) { return "Unknown action type \"" + typeName + "\". Fallback will be used if present."; },
        elementTypeNotAllowed: function (typeName) { return "Element type \"" + typeName + "\" is not allowed in this context."; },
        actionTypeNotAllowed: function (typeName) { return "Action type \"" + typeName + "\" is not allowed in this context."; },
        invalidPropertyValue: function (value, propertyName) { return "Invalid value \"" + value + "\" for property \"" + propertyName + "\"."; },
        showCardMustHaveCard: function () { return "\"An Action.ShowCard must have its \"card\" property set to a valid AdaptiveCard object."; },
        invalidColumnWidth: function (invalidWidth) { return "Invalid column width \"" + invalidWidth + "\" - defaulting to \"auto\"."; },
        invalidCardVersion: function (defaultingToVersion) { return "Invalid card version. Defaulting to \"" + defaultingToVersion + "\"."; },
        invalidVersionString: function (versionString) { return "Invalid version string \"" + versionString + "\"."; },
        propertyValueNotSupported: function (value, propertyName, supportedInVersion, versionUsed) { return "Value \"" + value + "\" for property \"" + propertyName + "\" is supported in version " + supportedInVersion + ", but you are using version " + versionUsed + "."; },
        propertyNotSupported: function (propertyName, supportedInVersion, versionUsed) { return "Property \"" + propertyName + "\" is supported in version " + supportedInVersion + ", but you are using version " + versionUsed + "."; },
        indexOutOfRange: function (index) { return "Index out of range (" + index + ")."; },
        elementCannotBeUsedAsInline: function () { return "RichTextBlock.addInline: the specified card element cannot be used as a RichTextBlock inline."; },
        inlineAlreadyParented: function () { return "RichTextBlock.addInline: the specified inline already belongs to another RichTextBlock."; },
        interactivityNotAllowed: function () { return "Interactivity is not allowed."; },
        inputsMustHaveUniqueId: function () { return "All inputs must have a unique Id."; },
        choiceSetMustHaveAtLeastOneChoice: function () { return "An Input.ChoiceSet must have at least one choice defined."; },
        choiceSetChoicesMustHaveTitleAndValue: function () { return "All choices in an Input.ChoiceSet must have their title and value properties set."; },
        propertyMustBeSet: function (propertyName) { return "Property \"" + propertyName + "\" must be set."; },
        actionHttpHeadersMustHaveNameAndValue: function () { return "All headers of an Action.Http must have their name and value properties set."; },
        tooManyActions: function (maximumActions) { return "Maximum number of actions exceeded (" + maximumActions + ")."; },
        columnAlreadyBelongsToAnotherSet: function () { return "This column already belongs to another ColumnSet."; },
        invalidCardType: function () { return "Invalid or missing card type. Make sure the card's type property is set to \"AdaptiveCard\"."; },
        unsupportedCardVersion: function (version, maxSupportedVersion) { return "The specified card version (" + version + ") is not supported. The maximum supported card version is " + maxSupportedVersion + "."; },
        duplicateId: function (id) { return "Duplicate Id \"" + id + "\"."; },
        markdownProcessingNotEnabled: function () { return "Markdown processing isn't enabled. Please see https://www.npmjs.com/package/adaptivecards#supporting-markdown"; },
        processMarkdownEventRemoved: function () { return "The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead."; },
        elementAlreadyParented: function () { return "The element already belongs to another container."; },
        actionAlreadyParented: function () { return "The action already belongs to another element."; },
        elementTypeNotStandalone: function (typeName) { return "Elements of type " + typeName + " cannot be used as standalone elements."; }
    };
    Strings.magicCodeInputCard = {
        tryAgain: function () { return "That didn't work... let's try again."; },
        pleaseLogin: function () { return "Please login in the popup. You will obtain a magic code. Paste that code below and select \"Submit\""; },
        enterMagicCode: function () { return "Enter magic code"; },
        pleaseEnterMagicCodeYouReceived: function () { return "Please enter the magic code you received."; },
        submit: function () { return "Submit"; },
        cancel: function () { return "Cancel"; },
        somethingWentWrong: function () { return "Something went wrong. This action can't be handled."; },
        authenticationFailed: function () { return "Authentication failed."; }
    };
    Strings.runtime = {
        automaticRefreshPaused: function () { return "Automatic refresh paused."; },
        clckToRestartAutomaticRefresh: function () { return "Click to restart."; },
        refreshThisCard: function () { return "Refresh this card"; }
    };
    Strings.hints = {
        dontUseWeightedAndStrecthedColumnsInSameSet: function () { return "It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space."; }
    };
    Strings.defaults = {
        inlineActionTitle: function () { return "Inline Action"; },
        overflowButtonText: function () { return "..."; },
        mediaPlayerAriaLabel: function () { return "Media content"; },
        mediaPlayerPlayMedia: function () { return "Play media"; }
    };
    return Strings;
}());
exports.Strings = Strings;


/***/ }),

/***/ "./src/table.ts":
/*!**********************!*\
  !*** ./src/table.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table = exports.TableRow = exports.TableCell = exports.StylableContainer = exports.TableColumnDefinition = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var card_elements_1 = __webpack_require__(/*! ./card-elements */ "./src/card-elements.ts");
var enums_1 = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var registry_1 = __webpack_require__(/*! ./registry */ "./src/registry.ts");
var serialization_1 = __webpack_require__(/*! ./serialization */ "./src/serialization.ts");
var shared_1 = __webpack_require__(/*! ./shared */ "./src/shared.ts");
var strings_1 = __webpack_require__(/*! ./strings */ "./src/strings.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var TableColumnDefinition = /** @class */ (function (_super) {
    __extends(TableColumnDefinition, _super);
    function TableColumnDefinition() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = new shared_1.SizeAndUnit(1, enums_1.SizeUnit.Weight);
        return _this;
    }
    TableColumnDefinition.prototype.getSchemaKey = function () {
        return "ColumnDefinition";
    };
    TableColumnDefinition.horizontalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "horizontalCellContentAlignment", enums_1.HorizontalAlignment);
    TableColumnDefinition.verticalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "verticalCellContentAlignment", enums_1.VerticalAlignment);
    TableColumnDefinition.widthProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_5, "width", function (sender, property, source, context) {
        var result = property.defaultValue;
        var value = source[property.name];
        var invalidWidth = false;
        if (typeof value === "number" && !isNaN(value)) {
            result = new shared_1.SizeAndUnit(value, enums_1.SizeUnit.Weight);
        }
        else if (typeof value === "string") {
            try {
                result = shared_1.SizeAndUnit.parse(value);
            }
            catch (e) {
                invalidWidth = true;
            }
        }
        else {
            invalidWidth = true;
        }
        if (invalidWidth) {
            context.logParseEvent(sender, enums_1.ValidationEvent.InvalidPropertyValue, strings_1.Strings.errors.invalidColumnWidth(value));
        }
        return result;
    }, function (sender, property, target, value, context) {
        if (value.unit === enums_1.SizeUnit.Pixel) {
            context.serializeValue(target, "width", value.physicalSize + "px");
        }
        else {
            context.serializeNumber(target, "width", value.physicalSize);
        }
    }, new shared_1.SizeAndUnit(1, enums_1.SizeUnit.Weight));
    __decorate([
        (0, serialization_1.property)(TableColumnDefinition.horizontalCellContentAlignmentProperty)
    ], TableColumnDefinition.prototype, "horizontalCellContentAlignment", void 0);
    __decorate([
        (0, serialization_1.property)(TableColumnDefinition.verticalCellContentAlignmentProperty)
    ], TableColumnDefinition.prototype, "verticalCellContentAlignment", void 0);
    __decorate([
        (0, serialization_1.property)(TableColumnDefinition.widthProperty)
    ], TableColumnDefinition.prototype, "width", void 0);
    return TableColumnDefinition;
}(serialization_1.SerializableObject));
exports.TableColumnDefinition = TableColumnDefinition;
var StylableContainer = /** @class */ (function (_super) {
    __extends(StylableContainer, _super);
    function StylableContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = [];
        return _this;
    }
    StylableContainer.prototype.parseItem = function (source, context) {
        var _this = this;
        return context.parseCardObject(this, source, [], // Forbidden types not supported for elements for now
        !this.isDesignMode(), function (typeName) {
            return _this.createItemInstance(typeName);
        }, function (typeName, errorType) {
            context.logParseEvent(undefined, enums_1.ValidationEvent.ElementTypeNotAllowed, strings_1.Strings.errors.elementTypeNotAllowed(typeName));
        });
    };
    StylableContainer.prototype.internalAddItem = function (item) {
        if (!item.parent) {
            this._items.push(item);
            item.setParent(this);
        }
        else {
            throw new Error(strings_1.Strings.errors.elementAlreadyParented());
        }
    };
    StylableContainer.prototype.internalRemoveItem = function (item) {
        var itemIndex = this._items.indexOf(item);
        if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
            item.setParent(undefined);
            this.updateLayout();
            return true;
        }
        return false;
    };
    StylableContainer.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._items = [];
        var items = source[this.getCollectionPropertyName()];
        if (Array.isArray(items)) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var instance = this.parseItem(item, context);
                if (instance) {
                    this._items.push(instance);
                }
            }
        }
    };
    StylableContainer.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        context.serializeArray(target, this.getCollectionPropertyName(), this._items);
    };
    StylableContainer.prototype.removeItem = function (item) {
        return this.internalRemoveItem(item);
    };
    StylableContainer.prototype.getItemCount = function () {
        return this._items.length;
    };
    StylableContainer.prototype.getItemAt = function (index) {
        return this._items[index];
    };
    StylableContainer.prototype.getFirstVisibleRenderedItem = function () {
        return this.getItemCount() > 0 ? this.getItemAt(0) : undefined;
    };
    StylableContainer.prototype.getLastVisibleRenderedItem = function () {
        return this.getItemCount() > 0 ? this.getItemAt(this.getItemCount() - 1) : undefined;
    };
    return StylableContainer;
}(card_elements_1.StylableCardElementContainer));
exports.StylableContainer = StylableContainer;
var TableCell = /** @class */ (function (_super) {
    __extends(TableCell, _super);
    function TableCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columnIndex = -1;
        _this._cellType = "data";
        return _this;
    }
    TableCell.prototype.getHasBorder = function () {
        return this.parentRow.parentTable.showGridLines;
    };
    TableCell.prototype.applyBorder = function () {
        if (this.renderedElement && this.getHasBorder()) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.parentRow.parentTable.gridStyle);
            if (styleDefinition.borderColor) {
                var borderColor = (0, utils_1.stringToCssColor)(styleDefinition.borderColor);
                if (borderColor) {
                    this.renderedElement.style.borderRight = "1px solid " + borderColor;
                    this.renderedElement.style.borderBottom = "1px solid " + borderColor;
                }
            }
        }
    };
    TableCell.prototype.getDefaultPadding = function () {
        return this.getHasBackground() || this.getHasBorder() ?
            new shared_1.PaddingDefinition(enums_1.Spacing.Small, enums_1.Spacing.Small, enums_1.Spacing.Small, enums_1.Spacing.Small) : _super.prototype.getDefaultPadding.call(this);
    };
    TableCell.prototype.internalRender = function () {
        var cellElement = _super.prototype.internalRender.call(this);
        if (cellElement) {
            cellElement.setAttribute("role", this.cellType === "data" ? "cell" : "columnheader");
            cellElement.style.minWidth = "0";
            if (this.cellType === "header") {
                cellElement.setAttribute("scope", "col");
            }
        }
        return cellElement;
    };
    TableCell.prototype.shouldSerialize = function (context) {
        return true;
    };
    TableCell.prototype.getJsonTypeName = function () {
        return "TableCell";
    };
    TableCell.prototype.getEffectiveTextStyleDefinition = function () {
        if (this.cellType === "header") {
            return this.hostConfig.textStyles.columnHeader;
        }
        return _super.prototype.getEffectiveTextStyleDefinition.call(this);
    };
    TableCell.prototype.getEffectiveHorizontalAlignment = function () {
        if (this.horizontalAlignment !== undefined) {
            return this.horizontalAlignment;
        }
        if (this.parentRow.horizontalCellContentAlignment !== undefined) {
            return this.parentRow.horizontalCellContentAlignment;
        }
        if (this.columnIndex >= 0) {
            var horizontalAlignment = this.parentRow.parentTable.getColumnAt(this.columnIndex).horizontalCellContentAlignment;
            if (horizontalAlignment !== undefined) {
                return horizontalAlignment;
            }
        }
        if (this.parentRow.parentTable.horizontalCellContentAlignment !== undefined) {
            return this.parentRow.parentTable.horizontalCellContentAlignment;
        }
        return _super.prototype.getEffectiveHorizontalAlignment.call(this);
    };
    TableCell.prototype.getEffectiveVerticalContentAlignment = function () {
        if (this.verticalContentAlignment !== undefined) {
            return this.verticalContentAlignment;
        }
        if (this.parentRow.verticalCellContentAlignment !== undefined) {
            return this.parentRow.verticalCellContentAlignment;
        }
        if (this.columnIndex >= 0) {
            var verticalAlignment = this.parentRow.parentTable.getColumnAt(this.columnIndex).verticalCellContentAlignment;
            if (verticalAlignment !== undefined) {
                return verticalAlignment;
            }
        }
        if (this.parentRow.parentTable.verticalCellContentAlignment !== undefined) {
            return this.parentRow.parentTable.verticalCellContentAlignment;
        }
        return _super.prototype.getEffectiveVerticalContentAlignment.call(this);
    };
    Object.defineProperty(TableCell.prototype, "columnIndex", {
        get: function () {
            return this._columnIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableCell.prototype, "cellType", {
        get: function () {
            return this._cellType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableCell.prototype, "parentRow", {
        get: function () {
            return this.parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableCell.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    return TableCell;
}(card_elements_1.Container));
exports.TableCell = TableCell;
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //#endregion
    TableRow.prototype.getDefaultPadding = function () {
        return new shared_1.PaddingDefinition(enums_1.Spacing.None, enums_1.Spacing.None, enums_1.Spacing.None, enums_1.Spacing.None);
    };
    TableRow.prototype.applyBackground = function () {
        if (this.renderedElement) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
            if (styleDefinition.backgroundColor) {
                var bgColor = (0, utils_1.stringToCssColor)(styleDefinition.backgroundColor);
                this.renderedElement.style.backgroundColor = bgColor;
            }
        }
    };
    TableRow.prototype.getCollectionPropertyName = function () {
        return "cells";
    };
    TableRow.prototype.createItemInstance = function (typeName) {
        return !typeName || typeName === "TableCell" ? new TableCell() : undefined;
    };
    TableRow.prototype.internalRender = function () {
        var isFirstRow = this.getIsFirstRow();
        var cellSpacing = this.hostConfig.table.cellSpacing;
        var rowElement = document.createElement("div");
        rowElement.setAttribute("role", "row");
        rowElement.style.display = "flex";
        rowElement.style.flexDirection = "row";
        for (var i = 0; i < Math.min(this.getItemCount(), this.parentTable.getColumnCount()); i++) {
            var cell = this.getItemAt(i);
            // Cheating a bit in order to keep cellType read-only
            cell["_columnIndex"] = i;
            cell["_cellType"] = (this.parentTable.firstRowAsHeaders && isFirstRow) ? "header" : "data";
            var renderedCell = cell.render();
            if (renderedCell) {
                var column = this.parentTable.getColumnAt(i);
                if (column.computedWidth.unit === enums_1.SizeUnit.Pixel) {
                    renderedCell.style.flex = "0 0 " + column.computedWidth.physicalSize + "px";
                }
                else {
                    renderedCell.style.flex = "1 1 " + column.computedWidth.physicalSize + "%";
                }
                if (i > 0 && !this.parentTable.showGridLines && cellSpacing > 0) {
                    renderedCell.style.marginLeft = cellSpacing + "px";
                }
                rowElement.appendChild(renderedCell);
            }
        }
        return rowElement.children.length > 0 ? rowElement : undefined;
    };
    TableRow.prototype.shouldSerialize = function (context) {
        return true;
    };
    TableRow.prototype.addCell = function (cell) {
        this.internalAddItem(cell);
    };
    TableRow.prototype.removeCellAt = function (columnIndex) {
        if (columnIndex >= 0 && columnIndex < this.getItemCount()) {
            return this.removeItem(this.getItemAt(columnIndex));
        }
        return false;
    };
    TableRow.prototype.ensureHasEnoughCells = function (cellCount) {
        while (this.getItemCount() < cellCount) {
            this.addCell(new TableCell());
        }
    };
    TableRow.prototype.getJsonTypeName = function () {
        return "TableRow";
    };
    TableRow.prototype.getIsFirstRow = function () {
        return this.parentTable.getItemAt(0) === this;
    };
    Object.defineProperty(TableRow.prototype, "parentTable", {
        get: function () {
            return this.parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableRow.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    //#region Schema
    TableRow.styleProperty = new card_elements_1.ContainerStyleProperty(serialization_1.Versions.v1_5, "style");
    TableRow.horizontalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "horizontalCellContentAlignment", enums_1.HorizontalAlignment);
    TableRow.verticalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "verticalCellContentAlignment", enums_1.VerticalAlignment);
    __decorate([
        (0, serialization_1.property)(TableRow.horizontalCellContentAlignmentProperty)
    ], TableRow.prototype, "horizontalCellContentAlignment", void 0);
    __decorate([
        (0, serialization_1.property)(TableRow.verticalCellContentAlignmentProperty)
    ], TableRow.prototype, "verticalCellContentAlignment", void 0);
    return TableRow;
}(StylableContainer));
exports.TableRow = TableRow;
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columns = [];
        _this.firstRowAsHeaders = true;
        _this.showGridLines = true;
        return _this;
    }
    Object.defineProperty(Table.prototype, "gridStyle", {
        get: function () {
            var style = this.getValue(Table.gridStyleProperty);
            if (style && this.hostConfig.containerStyles.getStyleByName(style)) {
                return style;
            }
            return undefined;
        },
        set: function (value) {
            this.setValue(Table.gridStyleProperty, value);
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    Table.prototype.ensureRowsHaveEnoughCells = function () {
        for (var i = 0; i < this.getItemCount(); i++) {
            this.getItemAt(i).ensureHasEnoughCells(this.getColumnCount());
        }
    };
    Table.prototype.removeCellsFromColumn = function (columnIndex) {
        for (var i = 0; i < this.getItemCount(); i++) {
            this.getItemAt(i).removeCellAt(columnIndex);
        }
    };
    Table.prototype.getCollectionPropertyName = function () {
        return "rows";
    };
    Table.prototype.createItemInstance = function (typeName) {
        return !typeName || typeName === "TableRow" ? new TableRow() : undefined;
    };
    Table.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this.ensureRowsHaveEnoughCells();
    };
    Table.prototype.internalRender = function () {
        if (this.getItemCount() > 0) {
            var totalWeights = 0;
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.width.unit === enums_1.SizeUnit.Weight) {
                    totalWeights += column.width.physicalSize;
                }
            }
            for (var _b = 0, _c = this._columns; _b < _c.length; _b++) {
                var column = _c[_b];
                if (column.width.unit === enums_1.SizeUnit.Pixel) {
                    column.computedWidth = new shared_1.SizeAndUnit(column.width.physicalSize, enums_1.SizeUnit.Pixel);
                }
                else {
                    column.computedWidth = new shared_1.SizeAndUnit(100 / totalWeights * column.width.physicalSize, enums_1.SizeUnit.Weight);
                }
            }
            var tableElement = document.createElement("div");
            tableElement.setAttribute("role", "table");
            tableElement.style.display = "flex";
            tableElement.style.flexDirection = "column";
            if (this.showGridLines) {
                var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.gridStyle);
                if (styleDefinition.borderColor) {
                    var borderColor = (0, utils_1.stringToCssColor)(styleDefinition.borderColor);
                    if (borderColor) {
                        tableElement.style.borderTop = "1px solid " + borderColor;
                        tableElement.style.borderLeft = "1px solid " + borderColor;
                    }
                }
            }
            var cellSpacing = this.hostConfig.table.cellSpacing;
            for (var i = 0; i < this.getItemCount(); i++) {
                var renderedRow = this.getItemAt(i).render();
                if (renderedRow) {
                    if (i > 0 && !this.showGridLines && cellSpacing > 0) {
                        var separatorRow = document.createElement("div");
                        separatorRow.setAttribute("aria-hidden", "true");
                        separatorRow.style.height = cellSpacing + "px";
                        tableElement.appendChild(separatorRow);
                    }
                    tableElement.appendChild(renderedRow);
                }
            }
            return tableElement;
        }
        return undefined;
    };
    Table.prototype.addColumn = function (column) {
        this._columns.push(column);
        this.ensureRowsHaveEnoughCells();
    };
    Table.prototype.removeColumn = function (column) {
        var index = this._columns.indexOf(column);
        if (index >= 0) {
            this.removeCellsFromColumn(index);
            this._columns.splice(index, 1);
        }
    };
    Table.prototype.getColumnCount = function () {
        return this._columns.length;
    };
    Table.prototype.getColumnAt = function (index) {
        return this._columns[index];
    };
    Table.prototype.addRow = function (row) {
        this.internalAddItem(row);
        row.ensureHasEnoughCells(this.getColumnCount());
    };
    Table.prototype.getJsonTypeName = function () {
        return "Table";
    };
    Table.columnsProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_5, "columns", TableColumnDefinition);
    Table.firstRowAsHeadersProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_5, "firstRowAsHeaders", true);
    Table.showGridLinesProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_5, "showGridLines", true);
    Table.gridStyleProperty = new card_elements_1.ContainerStyleProperty(serialization_1.Versions.v1_5, "gridStyle");
    Table.horizontalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "horizontalCellContentAlignment", enums_1.HorizontalAlignment);
    Table.verticalCellContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_5, "verticalCellContentAlignment", enums_1.VerticalAlignment);
    __decorate([
        (0, serialization_1.property)(Table.columnsProperty)
    ], Table.prototype, "_columns", void 0);
    __decorate([
        (0, serialization_1.property)(Table.firstRowAsHeadersProperty)
    ], Table.prototype, "firstRowAsHeaders", void 0);
    __decorate([
        (0, serialization_1.property)(Table.showGridLinesProperty)
    ], Table.prototype, "showGridLines", void 0);
    __decorate([
        (0, serialization_1.property)(Table.gridStyleProperty)
    ], Table.prototype, "gridStyle", null);
    __decorate([
        (0, serialization_1.property)(Table.horizontalCellContentAlignmentProperty)
    ], Table.prototype, "horizontalCellContentAlignment", void 0);
    __decorate([
        (0, serialization_1.property)(Table.verticalCellContentAlignmentProperty)
    ], Table.prototype, "verticalCellContentAlignment", void 0);
    return Table;
}(StylableContainer));
exports.Table = Table;
registry_1.GlobalRegistry.defaultElements.register("Table", Table, serialization_1.Versions.v1_5);


/***/ }),

/***/ "./src/text-formatters.ts":
/*!********************************!*\
  !*** ./src/text-formatters.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatText = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var AbstractTextFormatter = /** @class */ (function () {
    function AbstractTextFormatter(regularExpression) {
        this._regularExpression = regularExpression;
    }
    AbstractTextFormatter.prototype.format = function (lang, input) {
        var matches;
        if (input) {
            var result = input;
            while ((matches = this._regularExpression.exec(input)) != null) {
                result = result.replace(matches[0], this.internalFormat(lang, matches));
            }
            ;
            return result;
        }
        else {
            return input;
        }
    };
    return AbstractTextFormatter;
}());
var DateFormatter = /** @class */ (function (_super) {
    __extends(DateFormatter, _super);
    function DateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        var format = matches[2] != undefined ? matches[2].toLowerCase() : "compact";
        if (format != "compact") {
            return date.toLocaleDateString(lang, { day: "numeric", weekday: format, month: format, year: "numeric" });
        }
        else {
            return date.toLocaleDateString();
        }
    };
    return DateFormatter;
}(AbstractTextFormatter));
var TimeFormatter = /** @class */ (function (_super) {
    __extends(TimeFormatter, _super);
    function TimeFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        return date.toLocaleTimeString(lang, { hour: 'numeric', minute: '2-digit' });
    };
    return TimeFormatter;
}(AbstractTextFormatter));
function formatText(lang, text) {
    var formatters = [
        new DateFormatter(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g),
        new TimeFormatter(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)
    ];
    var result = text;
    for (var _i = 0, formatters_1 = formatters; _i < formatters_1.length; _i++) {
        var formatter = formatters_1[_i];
        result = formatter.format(lang, result);
    }
    return result;
}
exports.formatText = formatText;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clearElementChildren = exports.getScrollY = exports.getScrollX = exports.getFitStatus = exports.truncate = exports.stringToCssColor = exports.parseEnum = exports.getEnumValueByName = exports.parseBool = exports.parseNumber = exports.parseString = exports.appendChild = exports.generateUniqueId = exports.isMobileOS = exports.isInternetExplorer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var Shared = __webpack_require__(/*! ./shared */ "./src/shared.ts");
function isInternetExplorer() {
    // The documentMode property only exists in IE
    return window.document.documentMode !== undefined;
}
exports.isInternetExplorer = isInternetExplorer;
function isMobileOS() {
    var userAgent = window.navigator.userAgent;
    return !!userAgent.match(/Android/i) || !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i);
}
exports.isMobileOS = isMobileOS;
/**
 * Generate a UUID prepended with "__ac-"
 */
function generateUniqueId() {
    return "__ac-" + Shared.UUID.generate();
}
exports.generateUniqueId = generateUniqueId;
function appendChild(node, child) {
    if (child) {
        node.appendChild(child);
    }
}
exports.appendChild = appendChild;
function parseString(obj, defaultValue) {
    return typeof obj === "string" ? obj : defaultValue;
}
exports.parseString = parseString;
function parseNumber(obj, defaultValue) {
    return typeof obj === "number" ? obj : defaultValue;
}
exports.parseNumber = parseNumber;
function parseBool(value, defaultValue) {
    if (typeof value === "boolean") {
        return value;
    }
    else if (typeof value === "string") {
        switch (value.toLowerCase()) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                return defaultValue;
        }
    }
    return defaultValue;
}
exports.parseBool = parseBool;
function getEnumValueByName(enumType, name) {
    for (var key in enumType) {
        var keyAsNumber = parseInt(key, 10);
        if (keyAsNumber >= 0) {
            var value = enumType[key];
            if (value && typeof value === "string" && value.toLowerCase() === name.toLowerCase()) {
                return keyAsNumber;
            }
        }
    }
    return undefined;
}
exports.getEnumValueByName = getEnumValueByName;
function parseEnum(enumType, name, defaultValue) {
    if (!name) {
        return defaultValue;
    }
    var enumValue = getEnumValueByName(enumType, name);
    return enumValue !== undefined ? enumValue : defaultValue;
}
exports.parseEnum = parseEnum;
function stringToCssColor(color) {
    if (color) {
        var regEx = /#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi;
        var matches = regEx.exec(color);
        if (matches && matches[4]) {
            var a = parseInt(matches[1], 16) / 255;
            var r = parseInt(matches[2], 16);
            var g = parseInt(matches[3], 16);
            var b = parseInt(matches[4], 16);
            return "rgba(" + r + "," + g + "," + b + "," + a + ")";
        }
    }
    return color;
}
exports.stringToCssColor = stringToCssColor;
function truncate(element, maxHeight, lineHeight) {
    var fits = function () {
        // Allow a one pixel overflow to account for rounding differences
        // between browsers
        return maxHeight - element.scrollHeight >= -1.0;
    };
    if (fits())
        return;
    var fullText = element.innerHTML;
    var truncateAt = function (idx) {
        element.innerHTML = fullText.substring(0, idx) + '...';
    };
    var breakableIndices = findBreakableIndices(fullText);
    var lo = 0;
    var hi = breakableIndices.length;
    var bestBreakIdx = 0;
    // Do a binary search for the longest string that fits
    while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        truncateAt(breakableIndices[mid]);
        if (fits()) {
            bestBreakIdx = breakableIndices[mid];
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }
    truncateAt(bestBreakIdx);
    // If we have extra room, try to expand the string letter by letter
    // (covers the case where we have to break in the middle of a long word)
    if (lineHeight && maxHeight - element.scrollHeight >= lineHeight - 1.0) {
        var idx = findNextCharacter(fullText, bestBreakIdx);
        while (idx < fullText.length) {
            truncateAt(idx);
            if (fits()) {
                bestBreakIdx = idx;
                idx = findNextCharacter(fullText, idx);
            }
            else {
                break;
            }
        }
        truncateAt(bestBreakIdx);
    }
}
exports.truncate = truncate;
function findBreakableIndices(html) {
    var results = [];
    var idx = findNextCharacter(html, -1);
    while (idx < html.length) {
        if (html[idx] == ' ') {
            results.push(idx);
        }
        idx = findNextCharacter(html, idx);
    }
    return results;
}
function findNextCharacter(html, currIdx) {
    currIdx += 1;
    // If we found the start of an HTML tag, keep advancing until we get
    // past it, so we don't end up truncating in the middle of the tag
    while (currIdx < html.length && html[currIdx] == '<') {
        while (currIdx < html.length && html[currIdx++] != '>')
            ;
    }
    return currIdx;
}
function getFitStatus(element, containerEnd) {
    var start = element.offsetTop;
    var end = start + element.clientHeight;
    if (end <= containerEnd) {
        return Enums.ContainerFitStatus.FullyInContainer;
    }
    else if (start < containerEnd) {
        return Enums.ContainerFitStatus.Overflowing;
    }
    else {
        return Enums.ContainerFitStatus.FullyOutOfContainer;
    }
}
exports.getFitStatus = getFitStatus;
function getScrollX() {
    return window.pageXOffset;
}
exports.getScrollX = getScrollX;
function getScrollY() {
    return window.pageYOffset;
}
exports.getScrollY = getScrollY;
function clearElementChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
exports.clearElementChildren = clearElementChildren;


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/adaptivecards.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});