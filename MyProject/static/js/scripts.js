window.onload = function() {
    const messageContainer = document.getElementById('message-container');
    if (messageContainer) {
      setTimeout(function() {
        messageContainer.style.opacity = 0; // Fade out
        setTimeout(function() {
          messageContainer.style.display = 'none'; // Actually hide after fade
        }, 1000); // 1 second for fade effect
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  }