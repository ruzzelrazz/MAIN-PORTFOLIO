function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
function showgallery(){
    $("#gallery_container").css("display","inherit");
    $("#gallery_container").addClass("animated zoomIn");
    setTimeout(function(){
        $("#gallery_container").removeClass("animated zoomIn");
    },800);
}
function closegallery(){
    $("#gallery_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#gallery_container").removeClass("animated slideOutDown");
        $("#gallery_container").css("display","none");
    },800);
}

/* Gallery lightbox behavior */
document.addEventListener('DOMContentLoaded', function(){
    var galleryImgs = Array.prototype.slice.call(document.querySelectorAll('.gallery-grid img'));
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var captionEl = document.querySelector('.lightbox-caption');
    var currentIndex = 0;

    function openLightbox(idx){
        var el = galleryImgs[idx];
        if(!el) return;
        currentIndex = idx;
        lightboxImg.src = el.src;
        captionEl.textContent = el.dataset.caption || el.alt || '';
        lightbox.style.display = 'flex';
    }
    window.openLightbox = openLightbox;
    window.closeLightbox = function(){ lightbox.style.display = 'none'; };
    window.lightboxNext = function(){ openLightbox((currentIndex + 1) % galleryImgs.length); };
    window.lightboxPrev = function(){ openLightbox((currentIndex - 1 + galleryImgs.length) % galleryImgs.length); };

    galleryImgs.forEach(function(img, i){ img.addEventListener('click', function(){ openLightbox(i); }); });

    document.addEventListener('keydown', function(e){
        if(!lightbox || lightbox.style.display !== 'flex') return;
        if(e.key === 'Escape') window.closeLightbox();
        if(e.key === 'ArrowRight') window.lightboxNext();
        if(e.key === 'ArrowLeft') window.lightboxPrev();
    });
});
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
