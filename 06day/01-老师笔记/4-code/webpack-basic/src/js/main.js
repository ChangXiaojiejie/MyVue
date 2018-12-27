// 1 导入 jQuery
const $ = require('jquery')

// 2 实现隔行变色
$('#list > li:odd').css('background-color', '#daa520')
$('#list > li:even').css('background-color', 'green')
