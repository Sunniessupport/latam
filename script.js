document.addEventListener("DOMContentLoaded", function() {
	// For the hamburger menu
	const hamMenu = document.querySelector('.ham-menu');
	const offScreenMenu = document.querySelector('.off-screen-menu');
  
	if (hamMenu && offScreenMenu) {
	  hamMenu.addEventListener('click', () => {
		offScreenMenu.classList.toggle('active');
	  });
	} else {
	  console.error("Hamburger menu or off-screen menu not found");
	}
  
	// Rotate buttons

  });
 