// Video functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video__item');
    const videoIframe = document.querySelector('.video__video');
    const mainTitle = document.querySelector('.video__main-title');
    const mainCategory = document.querySelector('.video__main-category');
    
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            videoItems.forEach(videoItem => {
                videoItem.classList.remove('video__item--active');
            });
            
            // Add active class to clicked item
            this.classList.add('video__item--active');
            
            // Get video data from data attributes
            const videoId = this.getAttribute('data-video');
            const videoTitle = this.getAttribute('data-title');
            const videoCategory = this.getAttribute('data-category');
            
            // Update iframe src
            if (videoIframe && videoId) {
                videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`;
            }
            
            // Update main video info
            if (mainTitle && videoTitle) {
                mainTitle.textContent = videoTitle;
            }
            if (mainCategory && videoCategory) {
                mainCategory.textContent = videoCategory;
            }
        });
    });
});
