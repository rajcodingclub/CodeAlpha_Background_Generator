/*let botton = document.querySelector('.btn')
button.addEventListener("click", ()=>{
    function getRandomHexColor() {
        // Generate a random number between 0 and 16777215 (0xFFFFFF in hexadecimal)
        const randomColor = Math.floor(Math.random() * 16777215);
      
        // Convert the random number to a hexadecimal string and pad it with zeros if necessary
        const hexColor = '#' + randomColor.toString(16).padStart(6, '0');
      
        return hexColor;
      }
      
      // Example usage:
      const randomColor = getRandomHexColor();
      console.log(randomColor);
      
    document.body.style.backgroundColor = randomColor
    document.querySelector('.colorcode').innerHTML = randomColor
})*/
function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215); // Generate random number
    return '#' + randomColor.toString(16).padStart(6, '0'); // Convert to hex color code
  }
  
  function changeBackgroundColor() {
    const colorBox = document.getElementById('color-box');
    const randomColor = getRandomHexColor();
    document.querySelector('.colorcode').innerHTML = randomColor
  
    // Set the background color of the colorBox element
    colorBox.style.backgroundColor = randomColor;
  }
  
  const changeColorButton = document.getElementById('change-color-button');
  changeColorButton.addEventListener('click', changeBackgroundColor);
  
  // Initially set a random background color on page load
  changeBackgroundColor();
  
  
     