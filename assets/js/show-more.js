// document.querySelectorAll('.read-more-btn').forEach(function(btn) {
//     btn.addEventListener('click', function() {
//       var cardText = this.previousElementSibling;
//       if (cardText.style.maxHeight) {
//         cardText.style.maxHeight = null;
//         this.textContent = 'Devamını Okuyayım';
//       } else {
//         cardText.style.maxHeight = cardText.scrollHeight + 'px';
//         this.textContent = 'Tamam Okudum';
//       }
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function() {
  var readMoreButtons = document.querySelectorAll('.read-more-btn');

  readMoreButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          var content = this.previousElementSibling;

          // Eğer bu butonun içeriği zaten açıksa, kapat
          if (content.style.maxHeight) {
              content.style.maxHeight = null;
              this.textContent = 'Devamını Okuyayım';
          } else {
              // İlk olarak, diğer tüm içerikleri ve butonları sıfırla
              readMoreButtons.forEach(function(otherButton) {
                  if (otherButton !== this) {
                      otherButton.textContent = 'Devamını Okuyayım';
                      otherButton.previousElementSibling.style.maxHeight = null;
                  }
              });

              // Şimdi bu butonun içeriğini aç
              content.style.maxHeight = content.scrollHeight + 'px';
              this.textContent = 'Daha Az Göster';
          }
      });
  });
});
