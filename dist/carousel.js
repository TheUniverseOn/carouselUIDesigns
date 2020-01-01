var slider = document.getElementById("slider");
        var interval; 
		var btnLeft = document.getElementById("left");
		var btnRight = document.getElementById("right");
		var btnPlay = document.getElementById("play");
		var btnStop = document.getElementById("stop");
		var sliderChildren = slider.children;
		var imgAmount = document.getElementsByClassName("img").length;
		

		btnLeft.onclick = prev;
		btnRight.onclick = next;
		btnPlay.onclick = function() {
			btnPlay.style.display = "none";
			btnStop.style.display = "block";
			interval = setInterval(function() { 
				next();   
			}, 1800);
		};
		btnStop.onclick = function() {
			btnPlay.style.display = "block";
			btnStop.style.display = "none";
			clearInterval(interval);
		};

		function next() {
			var curr = document.getElementsByClassName("curr")[0];
			var id = curr.id;
			curr.classList.remove("curr");
			(id >= imgAmount) ? id=1: id++;
			document.getElementById(id).classList.add("curr");
		}

		function prev() {
			var curr = document.getElementsByClassName("curr")[0];
			var id = curr.id;
			curr.classList.remove("curr");
			(id-1 < 1) ? id = imgAmount+1: id=id;
			document.getElementById(id-1).classList.add("curr");
			
		}

		
		window.addEventListener('keydown', function (e) {
        
            if (e.keyCode == 39) {
				var curr = document.getElementsByClassName("curr")[0];
			var id = curr.id;
			curr.classList.remove("curr");
			(id >= imgAmount) ? id=1: id++;
			document.getElementById(id).classList.add("curr");

            }
        
            if (e.keyCode == 37) {
				var curr = document.getElementsByClassName("curr")[0];
				var id = curr.id;
				curr.classList.remove("curr");
				(id-1 < 1) ? id = imgAmount+1: id=id;
				document.getElementById(id-1).classList.add("curr");
            }
        });