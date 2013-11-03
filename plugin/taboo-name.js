/**
 * Created by azu on 2013/11/04.
 */

module.exports = function (context) {

    "use strict";


    var checkForLoops = function (node) {
        var name = node.name;
        context.options.forEach(function (tabooName) {
            if (name.indexOf(tabooName) !== -1) {
                context.report(node, "恥ずかしい'{{name}}'禁止!", {
                    name: name
                });
            }
        });
    };

    return {
        'Identifier': checkForLoops
    };
};