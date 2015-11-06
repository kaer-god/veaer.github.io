(function($){
  var toTop = $('#toTop').length ? $('#toTop').offset().top - $(window).height() + 20 : 0;

  // Share
  $('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

    if ($('#' + id).length){
      var box = $('#' + id);

      if (box.hasClass('on')){
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
          '<input class="article-share-input" value="' + url + '">',
          '<div class="article-share-links">',
            '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="fa fa-twitter article-share-twitter" target="_blank" title="Twitter"></a>',
            '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="fa fa-facebook article-share-facebook" target="_blank" title="Facebook"></a>',
            '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="fa fa-pinterest article-share-pinterest" target="_blank" title="Pinterest"></a>',
            '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="fa fa-google article-share-google" target="_blank" title="Google+"></a>',
          '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  $('#follow').on('click', function() {
      javascript:(function go() {
          var songs = [
              "http://rocko-blog.qiniudn.com/Music-Fashion_Show.mp3",
              "http://rocko-blog.qiniudn.com/Music-Wake-Live.mp3",
              "http://rocko-blog.qiniudn.com/Music-outside.mp3",
              "http://rocko-blog.qiniudn.com/Music-sunburst.mp3"
          ];


          function c() {
              var e = document.createElement("link");
              e.setAttribute("type", "text/css");
              e.setAttribute("rel", "stylesheet");
              e.setAttribute("href", f);
              e.setAttribute("class", l);
              document.body.appendChild(e)
          }

          function h() {
              var e = document.getElementsByClassName(l);
              for (var t = 0; t < e.length; t++) {
                  document.body.removeChild(e[t])
              }
          }

          function p() {
              var e = document.createElement("div");
              e.setAttribute("class", a);
              document.body.appendChild(e);
              setTimeout(function() {
                  document.body.removeChild(e)
              }, 100)
          }

          function d(e) {
              return {
                  height : e.offsetHeight,
                  width : e.offsetWidth
              }
          }

          function v(i) {
              var s = d(i);
              return s.height > e && s.height < n && s.width > t && s.width < r
          }

          function m(e) {
              var t = e;
              var n = 0;
              while (!!t) {
                  n += t.offsetTop;
                  t = t.offsetParent
              }
              return n
          }

          function g() {
              var e = document.documentElement;
              if (!!window.innerWidth) {
                  return window.innerHeight
              } else if (e && !isNaN(e.clientHeight)) {
                  return e.clientHeight
              }
              return 0
          }

          function y() {
              if (window.pageYOffset) {
                  return window.pageYOffset
              }
              return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
          }

          function E(e) {
              var t = m(e);
              return t >= w && t <= b + w
          }

          function S() {
              var e = document.getElementById("audio_element_id");
              if(e != null){
                  var index = parseInt(e.getAttribute("curSongIndex"));
                  if(index > songs.length - 2) {
                      index = 0;
                  } else {
                      index++;
                  }
                  e.setAttribute("curSongIndex", index);
                  N();
              }

              e.src = i;
              e.play()
          }

          function x(e) {
              e.className += " " + s + " " + o
          }

          function T(e) {
              e.className += " " + s + " " + u[Math.floor(Math.random() * u.length)]
          }

          function N() {
              var e = document.getElementsByClassName(s);
              var t = new RegExp("\\b" + s + "\\b");
              for (var n = 0; n < e.length; ) {
                  e[n].className = e[n].className.replace(t, "")
              }
          }

          function initAudioEle() {
              var e = document.getElementById("audio_element_id");
              if(e === null){
                  e = document.createElement("audio");
                  e.setAttribute("class", l);
                  e.setAttribute("curSongIndex", 0);
                  e.id = "audio_element_id";
                  e.loop = false;
                  e.bgcolor = 0;
                  e.addEventListener("canplay", function() {
                      setTimeout(function() {
                          x(k)
                      }, 500);
                      setTimeout(function() {
                          N();
                          p();
                          for (var e = 0; e < O.length; e++) {
                              T(O[e])
                          }
                      }, 15500)
                  }, true);
                  e.addEventListener("ended", function() {
                      N();
                      h();
                      go();
                  }, true);
                  e.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
                  document.body.appendChild(e);
              }
          }

          initAudioEle();
          var e = 30;
          var t = 30;
          var n = 350;
          var r = 350;

          var curSongIndex = parseInt(document.getElementById("audio_element_id").getAttribute("curSongIndex"));
          var i = songs[curSongIndex];

          var s = "mw-harlem_shake_me";
          var o = "im_first";
          var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
          var a = "mw-strobe_light";

          /* harlem-shake-style.css，替换成你的位置，也可以直接使用：//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css */
          var f = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";

          var l = "mw_added_css";
          var b = g();
          var w = y();
          var C = document.getElementsByTagName("*");
          var k = null;
          for (var L = 0; L < C.length; L++) {
              var A = C[L];
              if (v(A)) {
                  if (E(A)) {
                      k = A;
                      break
                  }
              }
          }
          if (A === null) {
              console.warn("Could not find a node of the right size. Please try a different page.");
              return
          }
          c();
          S();
          var O = [];
          for (var L = 0; L < C.length; L++) {
              var A = C[L];
              if (v(A)) {
                  O.push(A)
              }
          }
      })()
  });

  // Profile card
  $(document).on('click', function () {
    $('#profile').removeClass('card');
  }).on('click', '#profile-anchor', function (e) {
    e.stopPropagation();
    $('#profile').toggleClass('card');
  }).on('click', '.profile-inner', function (e) {
    e.stopPropagation();
  });

  // To Top
  $(document).on('scroll', function () {
    if ($(document).width() >= 800) {
      if($(this).scrollTop() > toTop) {
        $('#toTop').addClass('fix');
        $('#toTop').css('left', $('#sidebar').offset().left);
      } else {
        $('#toTop').removeClass('fix');
      }
    } else {
      $('#toTop').addClass('fix');
      $('#toTop').css('right', 20);
    }
  }).on('click', '#toTop', function () {
    $(document).scrollTop(0);
  });

})(jQuery);
