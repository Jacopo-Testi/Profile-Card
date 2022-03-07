// Event listener on btn click
document.querySelector('.card-btn').addEventListener('click', () => {

    // Add change class if it's included in the element and remove it if it's not
    document.querySelector('.container').classList.toggle('change')
})