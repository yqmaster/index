try {
    $("<link>").attr({
        href: "../assets/waifu.css?v=1.4.2",
        rel: "stylesheet",
        type: "text/css"
    }).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({
        url: "../assets/waifu-tips.js",
        dataType: "script",
        cache: true,
        success: function () {
            $.ajax({
                url: "../assets/live2d.js",
                dataType: "script",
                cache: true,
                success: function () {
                    /* 可直接修改部分参数 */

                    //看板娘样式设置
                    live2d_settings['waifuSize'] = '200x250'; // 看板娘大小，例如 '280x250', '600x535'
                    live2d_settings['waifuTipsSize'] = '160x60'; // 提示框大小，例如 '250x70', '570x150'
                    live2d_settings['waifuFontSize'] = '16px'; // 提示框字体，例如 '12px', '30px'
                    live2d_settings['waifuToolFont'] = '25px'; // 工具栏字体，例如 '14px', '36px'
                    live2d_settings['waifuToolLine'] = '40px'; // 工具栏行高，例如 '20px', '36px'
                    live2d_settings['waifuToolTop'] = '10px' // 提示框顶部边距，例如 '0px', '-60px'
                    live2d_settings['waifuMinWidth'] = 'disable'; // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
                    live2d_settings['waifuEdgeSide'] = 'right:0'; // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
                    live2d_settings['waifuDraggable'] = 'disable'; // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
                    live2d_settings['waifuDraggableRevert'] = false; // 松开鼠标还原拖拽位置，可选 true(真), false(假)

                    /* 在 initModel 前添加 */
                    initModel("../assets/waifu-tips.json");
                }
            });
        }
    });
} catch (err) {
    console.log("[Error] JQuery is not defined.")
}