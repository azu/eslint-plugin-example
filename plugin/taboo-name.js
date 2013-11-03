/**
 * Created by azu on 2013/11/04.
 */

module.exports = function (context) {

    "use strict";


    var checkForLoops = function (node) {
        var name = node.name;
        context.options.forEach(function (checkLiteral) {
            if (checkLiteral.test(name)) {
                context.report(node, "恥ずかしい'{{name}}'禁止!",{
                    name : name
                });
            }
        });
    };

    return {
        'Identifier': checkForLoops
    };
};