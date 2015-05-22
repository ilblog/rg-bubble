riot.tag('rg-bubble', '<div class="context"> <div class="bubble { visible: visible }"> { opts.text } </div> <div class="content" onmouseover="{ showBubble }" onmouseout="{ hideBubble }" onclick="{ toggleBubble }"> <yield></yield> </div> </div>', 'rg-bubble .context,rg-bubble .content { display: inline-block; position: relative; } rg-bubble .bubble { position: absolute; display: block; top: -27px; left: 50%; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); padding: 5px 10px; background-color: rgba(0, 0, 0, 0.8); color: white; text-align: center; font-size: 12px; line-height: 1; white-space: nowrap; opacity: 0; transition: opacity 0.1s, top 0.1s; } rg-bubble .visible { top: -30px; opacity: 1; } rg-bubble .bubble:after { content: \'\'; position: absolute; display: block; bottom: -10px; left: 50%; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); width: 0; height: 0; border: 5px solid rgba(0, 0, 0, 0); border-top-color: rgba(0, 0, 0, 0.9); }', function (opts) {

	var _this = this;
		_this.visible = false;
	_this.showBubble = function () {
		clearTimeout(_this.timer);
		_this.visible = true;
	};
	_this.hideBubble = function () {
		_this.timer = setTimeout(function () {
			_this.visible = false;
			_this.update();
		}, 1000);
	};
	_this.toggleBubble = function () {
		_this.visible = !_this.visible;
	};


});
