var assert = require('chai').assert;
var eslint = require("../eslint/lib/eslint");
var ruleLoader = require("../eslint/lib/rules");
// load my plugin directory.
ruleLoader.load(__dirname + "/../plugin");
var RULE_ID = "taboo-name";
describe("taboo-name", function () {
    var context = describe;
    var tabooName = "taboo";
    context("when evaluating 'var taboo = 1;'", function () {
        it("should report a violation", function () {
            var config = { rules: {} };
            config.rules[RULE_ID] = [1, tabooName];

            var messages = eslint.verify("var taboo = 1;", config);

            assert.equal(messages.length, 1);
            assert.equal(messages[0].ruleId, RULE_ID);
            assert.equal(messages[0].message, "恥ずかしい'taboo'禁止!");
            assert.include(messages[0].node.type, "Identifier");
        });
    });
    context("when evaluating no problem code", function () {
        it("should not report a violation", function () {
            var config = { rules: {} };
            config.rules[RULE_ID] = [1, tabooName];

            var messages = eslint.verify("var cute = 'taboo is literal';", config);

            assert.equal(messages.length, 0);
        });
    });

});