	
	
	setInterval(function(){
	
	
        if(document.getElementsByClassName("slideImages")[0].classList.contains("active")){
                document.getElementsByClassName("slideImages")[1].classList.add("active");
                document.getElementsByClassName("slideImages")[0].classList.remove("active");
                /* we could take querySelector here. but if we did so, then the classnames or id names should be 
                individual1 then we had to put individual means several names for the several images. then it would be 
                tougher to select the exact ids or classes. thus here getElementsByClassName is used! */
            }
            else if (document.getElementsByClassName("slideImages")[1].classList.contains("active")){
                document.getElementsByClassName("slideImages")[2].classList.add("active");
                document.getElementsByClassName ("slideImages")[1].classList.remove("active");
            }
            else if (document.getElementsByClassName("slideImages")[2].classList.contains("active")){
                document.getElementsByClassName("slideImages")[3].classList.add("active");
                document.getElementsByClassName("slideImages")[2].classList.remove("active");
            }
            else if (document.getElementsByClassName("slideImages")[3].classList.contains("active")){
                document.getElementsByClassName("slideImages")[4].classList.add("active");
                document.getElementsByClassName ("slideImages")[3].classList.remove("active");
            }
            else if (document.getElementsByClassName("slideImages")[4].classList.contains("active")){
                document.getElementsByClassName("slideImages")[5].classList.add("active");
                document.getElementsByClassName ("slideImages")[4].classList.remove("active");
            }
            else if (document.getElementsByClassName("slideImages")[5].classList.contains("active")){
                document.getElementsByClassName("slideImages")[6].classList.add("active");
                document.getElementsByClassName ("slideImages")[5].classList.remove("active");
            }
            else if (document.getElementsByClassName("slideImages")[6].classList.contains("active")){
                document.getElementsByClassName("slideImages")[7].classList.add("active");
                document.getElementsByClassName ("slideImages")[6].classList.remove("active");
            }
            else if (document.getElementsByClassName("slideImages")[7].classList.contains("active")){
                document.getElementsByClassName("slideImages")[0].classList.add("active");
                document.getElementsByClassName("slideImages")[7].classList.remove("active");
            }
                
            
            
        },5000);
        
            
          