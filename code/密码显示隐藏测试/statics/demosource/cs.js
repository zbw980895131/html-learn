<script type="text/javascript">
	// 这里使用最原始的js语法实现，可对应换成jquery语法进行逻辑控制
	var demoImg = document.getElementById("demo_img");
	var demoInput = document.getElementById("demo_input");
    //隐藏text block，显示password block
	function hideShowPsw(){
		if (demoInput.type == "password") {
			demoInput.type = "text";
			demo_img.src = "invisible.png";
		}else {
			demoInput.type = "password";
			demo_img.src = "visible.png";
		}
	}
</script>
