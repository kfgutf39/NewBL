
        function countdownTimer() {
        var countdownDate = new Date("Dec 1, 2023 7:00:00").getTime();
        var now = new Date().getTime();
        var distance = countdownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
    
    var confetti = document.createElement("div");
                confetti.style.position = "absolute";
                confetti.style.top = "0";
                confetti.style.left = "0";
                confetti.style.width = "100%";
                confetti.style.height = "100%";
                confetti.style.backgroundColor = "transparent";
                confetti.style.zIndex = "9999";
                var confettiPieces = [];
                for (var i = 0; i < 100; i++) {
                    var confettiPiece = document.createElement("div");
                    confettiPiece.style.position = "absolute";
                    confettiPiece.style.top = Math.random() * 100 + "%";
                    confettiPiece.style.left = Math.random() * 1; 00 + "%";
                    confettiPiece.style.width = "10px";
                    confettiPiece.style.height = "10px";
                    confettiPiece.style.borderRadius = "50%";
                    confettiPiece.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                    confettiPieces.push(confettiPiece);
                }
            
                confetti.appendChild(confettiPieces);
                document.body.appendChild(confetti);
                setTimeout(function () {
                    confetti.parentNode.removeChild(confetti);
                }, 5000);
            }
        }

                    var x = setInterval(countdownTimer, 1000);
                      
