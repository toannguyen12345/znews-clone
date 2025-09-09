// Magazine carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.magazine__nav--prev');
    const nextBtn = document.querySelector('.magazine__nav--next');
    const content = document.querySelector('.magazine__content');
    const cards = document.querySelectorAll('.magazine__card');
    
    let currentSet = 0;
    const cardsPerSet = 4;
    const totalSets = Math.ceil(cards.length / cardsPerSet);
    
    function showSet(setIndex) {
        const startIndex = setIndex * cardsPerSet;
        const endIndex = Math.min(startIndex + cardsPerSet, cards.length);
        
        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    function updateButtons() {
        if (prevBtn) prevBtn.style.display = currentSet === 0 ? 'none' : 'block';
        if (nextBtn) nextBtn.style.display = currentSet === totalSets - 1 ? 'none' : 'block';
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentSet > 0) {
                currentSet--;
                showSet(currentSet);
                updateButtons();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentSet < totalSets - 1) {
                currentSet++;
                showSet(currentSet);
                updateButtons();
            }
        });
    }
    
    // Initialize
    showSet(0);
    updateButtons();
});
