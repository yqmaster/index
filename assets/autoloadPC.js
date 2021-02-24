try {
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: '../assets/waifu-tips.js',dataType:"script", cache: true, async: false});
    $.ajax({url: '../assets/live2d.js',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */

    // 后端接口
    live2d_settings['modelAPI'] = '//live2d.fghrsh.net/api/'; // 自建 API 修改这里
    live2d_settings['tipsMessage'] = '../assets/waifu-tips.json'; // 同目录下可省略路径
    live2d_settings['hitokotoAPI'] = 'lwl12.com'; // 一言 API，可选 'lwl12.com', 'hitokoto.cn', 'jinrishici.com'(古诗词)

    // 默认模型
    live2d_settings['modelId'] = 5; // 默认模型 ID，可在 F12 控制台找到
    live2d_settings['modelTexturesId'] = 0; // 默认材质 ID，可在 F12 控制台找到

    // 工具栏设置
    live2d_settings['showToolMenu'] = true; // 显示 工具栏          ，可选 true(真), false(假)
    live2d_settings['canCloseLive2d'] = true; // 显示 关闭看板娘  按钮，可选 true(真), false(假)
    live2d_settings['canSwitchModel'] = false; // 显示 模型切换    按钮，可选 true(真), false(假)
    live2d_settings['canSwitchTextures'] = true; // 显示 材质切换    按钮，可选 true(真), false(假)
    live2d_settings['canSwitchHitokoto'] = false; // 显示 一言切换    按钮，可选 true(真), false(假)
    live2d_settings['canTakeScreenshot'] = false; // 显示 看板娘截图  按钮，可选 true(真), false(假)
    live2d_settings['canTurnToHomePage'] = true; // 显示 返回首页    按钮，可选 true(真), false(假)
    live2d_settings['canTurnToAboutPage'] = false; // 显示 跳转关于页  按钮，可选 true(真), false(假)

    // 模型切换模式
    live2d_settings['modelStorage'] = false; // 记录 ID (刷新后恢复)，可选 true(真), false(假)
    live2d_settings['modelRandMode'] = 'switch'; // 模型切换，可选 'rand'(随机), 'switch'(顺序)
    live2d_settings['modelTexturesRandMode'] = 'rand'; // 材质切换，可选 'rand'(随机), 'switch'(顺序)

    // 提示消息选项
    live2d_settings['showHitokoto'] = true; // 显示一言
    live2d_settings['showF12Status'] = true; // 显示加载状态
    live2d_settings['showF12Message'] = true; // 显示看板娘消息
    live2d_settings['showF12OpenMsg'] = true; // 显示控制台打开提示
    live2d_settings['showCopyMessage'] = true; // 显示 复制内容 提示
    live2d_settings['showWelcomeMessage'] = true; // 显示进入面页欢迎词

    //看板娘样式设置
    live2d_settings['waifuSize'] = '400x450'; // 看板娘大小，例如 '280x250', '600x535'
    live2d_settings['waifuTipsSize'] = '350x100'; // 提示框大小，例如 '250x70', '570x150'
    live2d_settings['waifuFontSize'] = '25px'; // 提示框字体，例如 '12px', '30px'
    live2d_settings['waifuToolFont'] = '40px'; // 工具栏字体，例如 '14px', '36px'
    live2d_settings['waifuToolLine'] = '100px'; // 工具栏行高，例如 '20px', '36px'
    live2d_settings['waifuToolTop'] = '50px' // 工具栏顶部边距，例如 '0px', '-60px'
    live2d_settings['waifuMinWidth'] = '1000px'; // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
    live2d_settings['waifuEdgeSide'] = 'right:20'; // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
    live2d_settings['waifuDraggable'] = 'disable'; // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
    live2d_settings['waifuDraggableRevert'] = false; // 松开鼠标还原拖拽位置，可选 true(真), false(假)

    // 其他杂项设置
    live2d_settings['l2dVersion'] = ''; // 当前版本
    live2d_settings['l2dVerDate'] = ''; // 版本更新日期
    live2d_settings['homePageUrl'] = 'https://yqmaster.com'; // 主页地址，可选 'auto'(自动), '{URL 网址}'
    live2d_settings['aboutPageUrl'] = ''; // 关于页地址, '{URL 网址}'
    live2d_settings['screenshotCaptureName'] = 'live2d.png'; // 看板娘截图文件名，例如 'live2d.png'

    /* 在 initModel 前添加 */
    initModel('../assets/waifu-tips.json');
} catch (err) {
    console.log('[Error] JQuery is not defined.')
}