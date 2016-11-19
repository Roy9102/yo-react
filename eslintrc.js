'use strict';

module.exports = {
    "env":         {
        "node":    true,
        "browser": true,
        "mocha":   true,
        "es6":     true
    },
    parseOptions:{
        ecmaVersion: 6,
        sourceType:  "module",
        "ecmaFeatures": {
            "jsx": true,
            "es6": true,
            impliedStrict:true
        }
    },
    rules:{
        // 对象或者数据最后一个元素不能带上逗号
        "comma-dangle":"never",
        // 不允许在if或者循环中判断中赋值
        "no-cond-assign": "except-parens",
        // 不允许使用console
        "no-console":     ["error", { allow: ["warn", "log"] }],
        // 函数定义时不能有重复参数
        "no-dupe-args": "error",
        // 不允许Object有重复的Key
        "no-dupe-keys": "error",
        // 不允许switch有相同的case值
        "no-duplicate-case":"error",
        //不允许不空的块作用域
        "no-empty": ["error", { "allowEmptyCatch": true }],
        // 不允许重复定义异常变量
        "no-ex-assign":"error",
        // 
    }
}